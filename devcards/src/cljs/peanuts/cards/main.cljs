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
    :default-input (compile/dependencies (str source-ns-str))}])

(dc/defcard-rg
  form-1-components
  "Here's how form-1 components are usually defined and used.
  Components defined like this can be more difficult to reuse
  in other projects, and can contribute to making test code more complex."
  (fn []
    [repl* 'peanuts.cards.ex-c228]))

(dc/defcard-rg
  form-1-components
  "A solution is to separate the logic and state,
  but that comes at the cost of wrapping every component with another
  stateful component."
  (fn []
    [repl* 'peanuts.cards.ex-e6c7]))

(dc/defcard-rg
  defnc
  "Enter peanuts. Note how the `greeting` component looks like a pure
  function without any of the additional ceremony.
  Also, note how one can easily swap between a re-frame subscription and
  a passed-in value!"
  (fn []
    [repl* 'peanuts.cards.ex-a226]))

(dc/defcard-rg
  redlist
  "You may be wondering, _what if I just want to use the keyword as is?_ \uD83E\uDD14
  This can be done when you're defining your function with the `:redlist` option.
  This is useful if your arg coincides with a subscription-id/vector
  which you'd like to pass down to a nested peanuts component
  or if you want to reduce the amount of code the macro emits."
  (fn []
    [repl* 'peanuts.cards.ex-b6a6]))

(dc/defcard-rg
  redlist
  "You can also redlist args with metadata."
  (fn []
    [repl* 'peanuts.cards.ex-f82c]))

(dc/defcard-rg
  redlist
  "You can redlist an arg once with metadata.
  This can be handy when you want to pass down a subscription-id/vector to a nested
  peanuts component. This is a similar behavior to using the `:redlist` option
  in the peanuts component definition."
  (fn []
    [repl* 'peanuts.cards.ex-c4d3]))

(dc/defcard-rg
  greenlist
  "An alternative to redlisting is greenlisting, for when you only want certain args
  to be candidates for subscriptions. This can be done when you're defining
  your function with the `:greenlist` option."
  (fn []
    [repl* 'peanuts.cards.ex-aa95]))

(dc/defcard-rg
  subscription-vectors
  "Subscription vectors work normally.
  Here's a slightly more advanced example that makes use of subscription args."
  (fn []
    [repl* 'peanuts.cards.ex-dd80]))

(defn ^:export init []
  (dc/start-devcard-ui!))

(defn ^:after-load on-reload []
  (init))
