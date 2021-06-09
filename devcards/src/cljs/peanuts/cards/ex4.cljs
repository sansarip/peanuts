(ns peanuts.cards.ex4
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [n]
  {:redlist [n]}
  [:p "Hello, " n "!"])

[:div
 ;; Here name won't be used as a subscription ID
 [greeting :name]
 [greeting "Garbonzo"]]