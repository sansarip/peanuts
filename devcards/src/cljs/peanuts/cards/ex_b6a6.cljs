(ns peanuts.cards.ex-b6a6
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [n]
  {:redlist [n]}
  [:p (str "Hello, " n "!")])

[:div
 ;; Here name won't be used as a subscription ID
 [greeting :name]
 [greeting [:name]]]
