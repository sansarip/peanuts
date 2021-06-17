(ns ^:figwheel-hooks peanuts.cards
  (:require
    [devcards.core :as dc]
    [re-frame.core :as rf]
    [re-frame.db :refer [app-db]]
    [reagent.core :as r]
    [peanuts.macros :refer [defcard-ide]]
    [peanuts.core :as pn]
    [peanuts.editor :refer [ide]]))

(enable-console-print!)

(reset! app-db {:name "World"})

(rf/reg-sub
  ::name
  (fn [{n :name}] n))
#_(defcard-rg+
    defnc
    "Simple defnc usage, normally the defnc wouldn't be nested in a function \uD83D\uDE0A"
    (fn []
      (pn/defnc greeting [n]
        [:div (str "Hello, " n "!")])
      [:<>
       [greeting "Garbonzo"]
       [greeting ::name]]))

(defcard-ide
  editor
  ""
  ide
  (fn []
    #_#_#_
    (require-macros '[peanuts.core :refer [defnc]])
    (defnc greeting [n] n)
    (greeting 1)
    (require '[peanuts.editor :refer [hiccup?]])
    (hiccup? [:a])))


(defn ^:export init []
  (dc/start-devcard-ui!))

(defn ^:after-load on-reload []
  (init))
