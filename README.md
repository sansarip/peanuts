<img src="https://i.gyazo.com/6b5da1a1dfaf5bbdc5e8e478431c6281.png" alt="Peanuts Logo" title="Peanuts" align="right" width="250px" />

# Peanuts

[![Clojars Project](https://img.shields.io/clojars/v/peanuts.svg)](https://clojars.org/peanuts) [![Build Status](https://travis-ci.org/sansarip/peanuts.svg?branch=main)](https://travis-ci.org/sansarip/peanuts)

> Packing peanuts for decoupling Reagent Form-1 components from Re-frame subscriptions

[deps.edn](https://clojure.org/reference/deps_and_cli)
```clojure
peanuts/peanuts {:mvn/version "0.6.2"}
```

[Leiningen](https://github.com/technomancy/leiningen)
```clojure
[peanuts "0.6.2"]
```

## ToC

1. [Rationale](#rationale)
2. [Usage](#usage)
    1. [Interactive devcards](https://sansarip.github.io/peanuts/#!/peanuts.cards.main)
    2. [fnc macro](#fnc)
    3. [defnc macro](#defnc)
    4. [Options](#options)
        1. [Redlisting Args](#redlisting-args)
        2. [Greenlisting Args](#greenlisting-args)
3. [Known Limitations](#limitations)

## Rationale <a name="rationale"></a>

This bit is pretty opinionated, but I dislike using the below structure to define Reagent Form-1 components.

```clojure
;; Method A

(defn my-component []
  (let [... bunch of re-frame subscriptions here ...]
    [:div "hiccup stuff"]))
```

The problem with the above example is that functions defined as such become impure, heavily dependent on the Re-frame subscriptions bound in their let-forms - coupling the components and the subscriptions. This makes it harder to create a library of components that you can share between projects, and it makes the components harder to test.

I prefer something like this...

```clojure
;; Method B

(defn my-component [{:keys [... args ...]}]
  [:div "hiccup stuff"])
```

In my preferred method (Method B) the subscriptions would happen outside of the components (in a root component/view), and the data would just simply be passed in. The problem with my preferred method is that it can noticeably affect performance when you have nested components - due to Re-frame subscription mumbo-jumbo.

Enter Peanuts. Peanuts component macros are intended to wrap components implemented like Method B, turning them into components that behave like Method A. The component will use any args passed in as is _or_ subscribe to them if the args are valid subscription ids/vectors!

I've utilize this simple library in production to great extents, and it has really scratched an itch for me!

## Usage <a name="usage"></a>

[![Image from Gyazo](https://i.gyazo.com/541408228e8a9a313b99f5278d59caef.gif)](https://gyazo.com/541408228e8a9a313b99f5278d59caef)

*An example of wrapping an existing Form-1 component*

It goes without saying that you should have [re-frame](https://github.com/Day8/re-frame) as a project dependency. You may also need to require it in the namespace(s) you use Peanuts. 

The main ways to use peanut components are the `fnc` and `defnc` macros. 
For documentation on the older `defc` and `fc` macros, see [the README here](https://github.com/sansarip/peanuts/tree/7b9718519760c254942c2df2eeb5aa52e4ec2181)

#### fnc <a name="fnc"></a>

Similar to `fn`

```clojure
(ns my-ns
  (:require [peanuts.core :refer [defnc]]))

(def foo (fnc [n] [:p (str "Hello, " n "!")]))
```

#### defnc <a name="defnc"></a>

Similar to `defn`

```clojure
(ns my-ns 
  (:require [peanuts.core :refer [defnc]]))

(defnc foo [n]
  [:p (str "Hello, " n "!")])
```

See this [little blurb](https://cursive-ide.com/userguide/macros.html) if you wish to resolve `defnc` as a `defn` and `fnc` as an `fn` in IntelliJ with Cursive!

### Options <a name="options"></a>

Both `fnc` and `defnc` accept an optional map as an argument that can dictate certain options explained below. 
In the case of `defnc` the map will also be applied as metadata on the defined name. 
You can also pass the options map as the second - or third if there's a docstring - argument.

There are older supported options available that you can [read about here](https://github.com/sansarip/peanuts/tree/5499859a2a00d37454256312b1d784c80ddb6587#options). But, I'm only supporting them for backward compatibility's sake and would advise _against_ using those options!

#### Redlisting Args <a name="redlisting-args"></a>

In rare cases where you want args that coincide with valid subscription identifiers/vectors passed through without being rebound to their respective subscription values, then the `:redlist` options are for you.

```clojure
(defnc foo
  [adj n]
  {:redlist [adj]}
  [:p (str "Hello, " adj " " n "!")])

;; Or

(defnc foo
   [^:redlist adj n]
   [:p (str "Hello, " adj " " n "!")])
```

In the above examples, the `adj` parameter will always be redlisted/excluded from being rebound to subscription values.

You can also redlist args with metadata when calling the function/component.

```clojure
(defnc foo
   [adj n]
   [:p (str "Hello, " adj " " n "!")])

[foo ^:redlist adj n]
```

#### Greenlisting Args <a name="greenlisting-args"></a>

An alternative to the `:redlist` option is the `:greenlist` option. If the `:greenlist` option is specified, then only those specified parameters will be candidates for being rebound subscription values.

```clojure
(defnc foo
  [adj n]
  {:greenlist [n]}
  [:p (str "Hello, " adj " " n "!")])
```

The above example is equivalent to the example in the [Redlisting Args section](#redlisting-args). In the example above, only the greenlisted `n` parameter can be rebound to a subscription value. 
One thing to note is that the `:redlist` option always takes precedence over the `:greenlist` option in odd cases where both 
options are defined with conflicting args.

## Known Limitations <a name="limitations"></a>

This library doesn't fully replicate all the bells and whistles of the `defn` macro or the `fn` form. 

There are some known limitations:

* Function overloading isn't supported
* `fnc` does not support naming e.g. `(fnc d [])` does not work
* Function constraints e.g.

```clojure
(defn constrained-sqr [x]
    {:pre  [(pos? x)]
     :post [(> % 16), (< % 225)]}
    (* x x))
```

It's not that the above limitations can't be fixed; I just haven't run into a necessary use case yet. If there's demand to fix any of the mentioned limitations, I will do it!
