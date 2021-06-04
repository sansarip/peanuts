(ns ^:figwheel-hooks peanuts.cards
  (:require
    [devcards.core :as dc]
    [re-frame.core :as rf]
    [re-frame.db :refer [app-db]]
    [reagent.core]
    [peanuts.macros :refer [defcard-rg+]]
    [peanuts.core :as pn]))


(enable-console-print!)

(reset! app-db {:name "World"})

(rf/reg-sub
  ::name
  (fn [{n :name}] n))

(defcard-rg+
  defnc
  "Simple defnc usage, normally the defnc wouldn't be nested in a function \uD83D\uDE0A"
  (fn []
    (pn/defnc greeting [n]
      [:div (str "Hello, " n "!")])
    [:<>
     [greeting "Garbonzo"]
     [greeting ::name]]))

(defn ^:export init []
  (dc/start-devcard-ui!))

(defn ^:after-load on-reload []
  (init))
