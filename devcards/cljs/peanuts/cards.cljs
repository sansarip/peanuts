(ns ^:figwheel-hooks peanuts.cards
  (:require
    [devcards.core :as dc]
    [re-frame.core :as rf]
    [re-frame.db :refer [app-db]]
    [peanuts.ide :as ide]
    [peanuts.macros :as pm]
    [peanuts.compile :as compile]
    [peanuts.core :refer-macros [defnc fnc]]))

(enable-console-print!)

(reset! app-db {:name "World"})

(rf/reg-sub :name
  (fn [db] (:name db)))

(rf/reg-sub
  ::name
  (fn [{n :name}] n))

(defn ide-with-eval [default-input]
  [:> ide/ide
   {:eval-fn       compile/evaluate
    :default-input default-input}])

(dc/defcard-rg
  ex1-form-1-components
  "Here's how form-1 components are usually defined and used"
  (fn []
    [ide-with-eval
     (pm/literally
       (defn greeting []
         (let [n @(re-frame.core/subscribe [:name])]
           [:p "Hello, " n "!"]))
       [:div
        [:b
         "This greeting component is not a pure function. "
         "As a result, the component is harder to reuse into other projects, "
         "and it's more difficult to test."]
        [greeting]])]))

(dc/defcard-rg
  ex2-form-1-components
  "A solution is to separate the logic and state!"
  (fn []
    [ide-with-eval
     (pm/literally
       (defn greeting* [n]
         [:p "Hello, " n "!"])
       (defn greeting []
         (let [n @(re-frame.core/subscribe [:name])]
           [greeting* n]))
       [:div
        [:b
         "This works, at the cost of wrapping every component with another "
         "\uD83D\uDE05\uD83E\uDD37"]
        [greeting]])]))

(dc/defcard-rg
  ex3-defnc
  "In contrast to ex2, note how the `greeting` component looks like a pure function without any additional ceremony"
  (fn []
    [ide-with-eval
     (pm/literally
       (defnc greeting [n]
         [:p "Hello, " n "!"])
       [:div
        [:b
         "If passing in a keyword, then that keyword will be used to look up a subscription"]
        [greeting :name]
        [:b
         "Same component, but now we're passing in a value instead of a subscription id!"]
        [greeting "Garbonzo"]
        [:i
         "Because the component and the re-frame state are decoupled, "
         "now you can reuse this component in another project. "
         "The component is also much easier to test because you can just pass in "
         "raw values \uD83D\uDE4C"]])]))

(defn ^:export init []
  (dc/start-devcard-ui!))

(defn ^:after-load on-reload []
  (init))
