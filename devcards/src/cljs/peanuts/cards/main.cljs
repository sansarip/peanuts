(ns ^:figwheel-hooks peanuts.cards.main
  (:require
    [devcards.core :as dc]
    [re-frame.core :as rf]
    [re-frame.db :refer [app-db]]
    [peanuts.repl :as repl]
    [peanuts.compile :as compile]
    [peanuts.core :refer-macros [defnc fnc]]))

(enable-console-print!)

(reset! app-db {:name "World"
                :selected-ids #{3}})

(rf/reg-sub :name
  (fn [db] (:name db)))

(rf/reg-sub :selected-ids
  (fn [db] (:selected-ids db)))

(rf/reg-sub :selected?
  :<- [:selected-ids]
  (fn [selected-ids [_ id]]
    (contains? selected-ids id)))

(defn repl* [source-ns-str]
  [:> repl/repl
   {:eval-fn       compile/evaluate
    :default-input (compile/dependencies source-ns-str)}])

(dc/defcard-rg
  form-1-components
  "Here's how form-1 components are usually defined and used.
  Components defined like this can be more difficult to reuse
  in other projects, and can contribute to making test code more complex."
  (fn []
    [repl* "peanuts.cards.ex1"]))

(dc/defcard-rg
  form-1-components
  "A solution is to separate the logic and state,
  but that comes at the cost of wrapping every component with another
  stateful component."
  (fn []
    [repl* "peanuts.cards.ex2"]))

(dc/defcard-rg
  defnc
  "Enter peanuts. Note how the `greeting` component looks like a pure
  function without any of the additional ceremony.
  Also, note how one can easily swap between a re-frame subscription and
  a passed-in value!"
  (fn []
    [repl* "peanuts.cards.ex3"]))

(dc/defcard-rg
  redlist
  "You may be wondering, _what if I just want to use the keyword as is?_ \uD83E\uDD14
  This can be done when you're defining your function with the `:redlist` option."
  (fn []
    [repl* "peanuts.cards.ex4"]))

(dc/defcard-rg
  greenlist
  "An alternative to redlisting is greenlisting, for when you only want certain args
  to be candidates for subscriptions. This can be done when you're defining
  your function with the `:greenlist` option."
  (fn []
    [repl* "peanuts.cards.ex5"]))

(dc/defcard-rg
  sub-args
  "Sometimes one may want to pass additional arguments to their subscriptions.
  The `:sub-args` option assists with this use-case."
  (fn []
    [repl* "peanuts.cards.ex6"]))

(dc/defcard-rg
  sub-args
  "Keys in the `:sub-args` map can also be functions, and in such cases
  the functions will be called with the expressed arguments."
  (fn []
    [repl* "peanuts.cards.ex7"]))

(dc/defcard-rg
  sub-fn
  "One can force an argument to be called with the `:sub-fn` metadata."
  (fn []
    [repl* "peanuts.cards.ex8"]))

(defn ^:export init []
  (dc/start-devcard-ui!))

(defn ^:after-load on-reload []
  (init))
