# Peanuts

> Packing peanuts for Reagent/Re-frame components

Under development, but almost done! Check back soon! :construction_worker:

# Rationale

I dislike using the below structure to define Reagent components.

```clojure
;; Method A

(defn my-component []
  (let [... bunch of re-frame subscriptions here ...]
    [:hiccup-stuff]))
```

The functions become impure in that they heavily depend on the Re-frame subscriptions bound in their let-forms. This makes it harder to create a library of components that you can share between projects, and it makes the components harder to test.

I prefer this...

```clojure
;; Method B

(defn my-component [& {:keys [arg-0 ... arg-n]}]
  [:hiccup-stuff])
```

In my preferred method (Method B) the subscriptions would happen outside of the components (in a root component/view), and the data would just simply be passed in. The problem with my preferred method is that it can be costly at a preformance level due to Re-frame subscription mumbo-jumbo.

Enter Peanuts. Peanut component macros are intended to wrap components implemented like Method B, turning them into components that behave like Method A. The component will use any args passed in as is _or_ subscribe to them if the args are keywords!

## Usage

There are two ways to use peanut components, `fc` and `defc`.

### fc

The usage for `fc` is simple, but it's a little more verbose than its `defc` counterpart's.

```clojure
(def a (fc (fn [& {:keys [a b c]}])))
```

### defc

The usage for `defc` is more concise than `fc`, but may not be as IDE friendly.

```clojure
;; 'a' might be syntax highlighted, as your IDE may think it's undefined
(defc a (fn [& {:keys [a b c]}]))
```
