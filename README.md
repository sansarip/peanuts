<a href="http://hoplon.io/">
  <img src="https://i.gyazo.com/6b5da1a1dfaf5bbdc5e8e478431c6281.png" alt="Peanuts Logo" title="Peanuts" align="right" width="250px" />
</a>

# Peanuts

[![Clojars Project](https://img.shields.io/clojars/v/peanuts.svg)](https://clojars.org/peanuts) [![Build Status](https://travis-ci.org/sansarip/peanuts.svg?branch=master)](https://travis-ci.org/sansarip/peanuts) 

> Packing peanuts for Reagent/Re-frame Form-1 components

## Rationale

This bit is pretty opinionated, but I dislike using the below structure to define Reagent Form-1 components.

```clojure
;; Method A

(defn my-component []
  (let [... bunch of re-frame subscriptions here ...]
    [:div "hiccup stuff"]))
```

The problem with the above example is that functions defined as such become impure, heavily depending on the Re-frame subscriptions bound in their let-forms - coupling the components and the subscriptions. This makes it harder to create a library of components that you can share between projects, and it makes the components harder to test.

I prefer something like this...

```clojure
;; Method B

(defn my-component [& {:keys [arg-0 ... arg-n]}]
  [:div "hiccup stuff"])
```

In my preferred method (Method B) the subscriptions would happen outside of the components (in a root component/view), and the data would just simply be passed in. The problem with my preferred method is that it can noticeably affect performance when you have nested components - due to Re-frame subscription mumbo-jumbo.

Enter Peanuts. Peanut component macros are intended to wrap components implemented like Method B, turning them into components that behave like Method A. The component will use any args passed in as is _or_ subscribe to them if the args are keywords!

## Usage

It goes without saying that you should have [re-frame](https://github.com/Day8/re-frame) as a project dependency. You may also need to require it in the namespace(s) you use Peanuts. 

There are two ways to use peanut components, `fc` and `defc`.

#### fc

The usage for `fc` is simple, but it's a little more verbose than its `defc` counterpart's.

```clojure
(ns my-ns
  (:require [peanuts.core :refer-macros [fc]])

(def a 
  (fc (fn [& {:keys [a b c]}] 
        [:div a b c])))
```

#### defc

The usage for `defc` is more concise than `fc`, but may not be as IDE friendly.

```clojure
(ns my-ns 
  (:require [peanuts.core :refer-macros [defc]])

;; Usages of 'a' might be syntax highlighted as your IDE may think it's undefined
(defc a 
  (fn [& {:keys [a b c]}]
    [:div a b c]))
```

### Options

Both `fc` and `defc` macros accept an optional options map as a final argument.

#### Exempting Args

There may be instances where a component expects certain args to always be keywords and wishes them to be exempt from being used as subscriptions. In such cases, the `:exempt` option comes in handy.

```clojure
(defc my-component
  (fn [a & {:keys [b c d}]
    [:div a b c d])
  {:exempt [b c]})
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
(defc my-component
  (fn [a & {:keys [b c d]}]
    [:div a b c d])
  {:only [a c]})
```

In the example above, only the `a` and `c` args will potentially be rebound to subscriptions. 
One thing to note is that the `:exempt` option always takes precedence over the `:only` option in odd cases where both 
options are defined with conflicting args. 

#### Subscription Args

Sometimes one may want to pass additional arguments to their subscriptions. The `:sub-args` option assists with this use-case.

```clojure
(defc my-component
  (fn [a & {:keys [b c d]}]
    [:div a b c])
  {:exempt [a]
   :sub-args {b [a 1 2 3]}})
```

Notice that in the above example I'm passing both literals and a reference to `a`. There are a couple caveats to note here.

1. If you define a `sub-arg` key that is also exempt, then the exemption takes precedence.
2. There is an order to things when it comes to the `sub-arg` values. For example, if you define a `sub-arg`, `a`, that uses a component parameter specified later than itself in the function args, `b`, then the value of `b` will be the original value passed into the component and not the subscribed-value.

Here's an example of caveat #2.

```clojure
(defc my-component
  (fn [a & {:keys [b c d]}]
    [:div a b c])
  ;; here the value of 'b' will be the original value provided to the component in 'a's supscription args
  ;; and not the value of 'b's subscription
  {:sub-args {a [b 1 2 3]}})
```
Note that doing this _will_ couple your component with re-frame subscriptions, so you lose the benefit of being able to pass in raw data instead of a subscription key, but you'll at least still be able to conveniently reuse the component in other projects where namespaces/keys differ!

## Suggestions

If you know that certain function parameters in your component will always be constant values/non-subscribeable keywords, then go ahead and exempt them all using the `:exempt` option. This will reduce the size of the function that the macros generate.

Furthermore, it won't hurt to tag args you never want to subscribe to with the `^:exempt` metadata.

The `:only` option really comes in handy when wrapping existing components with peanut components.
