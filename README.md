[![Build Status](https://travis-ci.org/sansarip/peanuts.svg?branch=master)](https://travis-ci.org/sansarip/peanuts)

# Peanuts

> Packing peanuts for Reagent/Re-frame form-1 components

Under development, but almost done! Check back soon! :construction_worker:

# Rationale

I dislike using the below structure to define Reagent form-1 components.

```clojure
;; Method A

(defn my-component []
  (let [... bunch of re-frame subscriptions here ...]
    [:div "hiccup stuff"]))
```

The functions become impure in that they heavily depend on the Re-frame subscriptions bound in their let-forms. This makes it harder to create a library of components that you can share between projects, and it makes the components harder to test.

I prefer this...

```clojure
;; Method B

(defn my-component [& {:keys [arg-0 ... arg-n]}]
  [:div "hiccup stuff"])
```

In my preferred method (Method B) the subscriptions would happen outside of the components (in a root component/view), and the data would just simply be passed in. The problem with my preferred method is that it can noticeably affect performance when you have nested components - due to Re-frame subscription mumbo-jumbo.

Enter Peanuts. Peanut component macros are intended to wrap components implemented like Method B, turning them into components that behave like Method A. The component will use any args passed in as is _or_ subscribe to them if the args are keywords!

## Usage

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

;; 'a' might be syntax highlighted as your IDE may think it's undefined
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

#### Subscription Args

Sometimes one may want to pass additional arguments to their subscriptions. The `:sub-args` option assists with this use-case.

```clojure
(defc my-component
  (fn [a & {:keys [b c d]}]
    [:div a b c])
  {:exempt [a]
   :sub-args {b [a 1 2 3]}})
```

Notice that in the above exampls I'm passing both literals and a reference to `a`. There are a couple caveats to note here.

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

## Suggestions

If you know that certain function parameters in your component will always be constant values/non-subscribeable keywords, then go ahead and exempt them all using the `:exempt` option. This will reduce the size of the function that the macros generate.

Furthermore, it won't hurt to tag args you never want to subscribe to with the `^:exempt` metadata.
