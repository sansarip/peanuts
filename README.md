<img src="https://i.gyazo.com/6b5da1a1dfaf5bbdc5e8e478431c6281.png" alt="Peanuts Logo" title="Peanuts" align="right" width="250px" />

# Peanuts

[![Clojars Project](https://img.shields.io/clojars/v/peanuts.svg)](https://clojars.org/peanuts) [![Build Status](https://travis-ci.org/sansarip/peanuts.svg?branch=master)](https://travis-ci.org/sansarip/peanuts) 

> Packing peanuts for decoupling Reagent Form-1 components from Re-frame subscriptions

## Rationale

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

(defn my-component [& {:keys [arg-0 ... arg-n]}]
  [:div "hiccup stuff"])
```

In my preferred method (Method B) the subscriptions would happen outside of the components (in a root component/view), and the data would just simply be passed in. The problem with my preferred method is that it can noticeably affect performance when you have nested components - due to Re-frame subscription mumbo-jumbo.

Enter Peanuts. Peanut component macros are intended to wrap components implemented like Method B, turning them into components that behave like Method A. The component will use any args passed in as is _or_ subscribe to them if the args are keywords!

I utilize this simple library at my workplace to great extents, and it has really scratched an itch for me!

## Usage

[![Image from Gyazo](https://i.gyazo.com/541408228e8a9a313b99f5278d59caef.gif)](https://gyazo.com/541408228e8a9a313b99f5278d59caef)

*An example of wrapping an existing Form-1 component*

It goes without saying that you should have [re-frame](https://github.com/Day8/re-frame) as a project dependency. You may also need to require it in the namespace(s) you use Peanuts. 

The main ways to use peanut components are the `fnc` and `defnc` macros. 
For documentation on the older `defc` and `fc` macros, see [the README here](https://github.com/sansarip/peanuts/tree/7b9718519760c254942c2df2eeb5aa52e4ec2181)

#### fnc

Similar to `fn`

```clojure
(ns my-ns
  (:require [peanuts.core :refer [defnc]]))

(def a (fnc [& {:keys [a b c]}] [:div a b c]))
```

#### defnc

Similar to `defn`

```clojure
(ns my-ns 
  (:require [peanuts.core :refer [defnc]]))

;; Usages of 'a' might be syntax highlighted as your IDE may think it's undefined
(defnc a [& {:keys [a b c]}]
  [:div a b c])
```

If you're using Cursive with IntelliJ as your IDE, then you can resolve `defnc` as a `defn` and be a-ok! 
See this [little blurb](https://cursive-ide.com/userguide/macros.html) if you wish to do that!

### Options

Both `fnc` and `defnc` accept an optional options map as a second argument.

#### Exempting Args

There may be instances where a component expects certain args to _always_ be keywords and wishes them to be exempt from being used as subscriptions. In such cases, the `:exempt` option comes in handy.

```clojure
(defnc my-component
  {:exempt [b c]}
  [a & {:keys [b c d}]
    [:div a b c d])
```

In the above example, the values of the `b` and `c` parameters will always be exempt from being rebound to subscriptions.

Arguments can also be exempt dynamically by attaching the `^{:exempt true}` or `^:exempt` metadata.

```clojure
[my-component ^:exempt :some-key]
```

In the above example, `:some-key` will be used as a regular keyword and will be exempt.

#### Only Specified Args

Sometimes it's nice to only have certain args involved with subs and have the rest be untouched. The `:only` option is there for such cases.

```clojure
(defnc my-component
  {:only [a c]}
  [a & {:keys [b c d]}]
    [:div a b c d])
```

In the example above, only the `a` and `c` args can be rebound to subscriptions. 
One thing to note is that the `:exempt` option always takes precedence over the `:only` option in odd cases where both 
options are defined with conflicting args. 

#### Subscription Args

Sometimes one may want to pass additional arguments to their subscriptions. The `:sub-args` option assists with this use-case.

```clojure
(defnc my-component
  {:exempt [a]
   :sub-args {b [a 1 2 3]}}
  [a & {:keys [b c d]}]
    [:div a b c])
```

In the above example, `b` can be a function or a subscription key. Notice that I'm passing both literals and `a` reference as args for `b`. There are a couple caveats to note here.

1. If you define a `sub-arg` key that is also exempt, then the exemption takes precedence.
2. There is an order to things when it comes to the `sub-arg` values. For example, if you define a `sub-arg`, `a`, that uses a component parameter specified later than itself in the function args, `b`, then the value of `b` will be the original value passed into the component and not the subscribed-value.

Here's an example of caveat #2.

```clojure
(defnc my-component
  ;; here the value of 'b' will be the original value provided to the component in 'a's subscription args
  ;; and not the value of 'b's subscription
  {:sub-args {a [b 1 2 3]}}
  [a & {:keys [b c d]}]
    [:div a b c])
```

Below are some examples of using a component that contains `sub-args`:

```clojure
(defnc my-component
  {:sub-args {selected? [id]}}
  [id selected?]
  [:div {:style {:background-color (if selected? :green :white)}} 
    "✋"])

;; Use a subscription keyword directly
[my-component 1 ::subs/selected?]

;; Subscribe in a function
[my-component 1 (fn [id] @(rf/subscribe [::subs/selected? id]))]

;; Do w/e you want - you don't need Re-frame! This is especially great for testing components!
[my-component 1 (fn [id] (selected? id))]
```

#### More on Subscription Functions

As the examples in the previous section show-case, args that are specified in the `sub-args` option - that are functions - will be called. If you want a function to be called without any args passed to it, that's fine too.

```clojure
(defnc my-component
  ;; Specifying an empty arg-vector will result in a function being called without any args as one might expect
  {:sub-args {selected? []}}
  [selected?]
  [:div {:style {:background-color (if selected? :green :white)}} 
    "✋"])

[my-component 1 (fn [] @(rf/subscribe [::subs/selected?]))]
```

An alternative way to have function arguments be called (dynamically) is with the `sub-fn` metadata 
as demonstrated below.

```clojure
(defnc my-component
  [selected?]
  [:div {:style {:background-color (if selected? :green :white)}} 
    "✋"])

[my-component 1 ^:sub-fn (fn [] @(rf/subscribe [::subs/selected?]))]
```
