(ns peanuts.cards.ex3
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [n]
  [:p "Hello, " n "!"])

[:div
 [greeting :name]
 [greeting "Garbonzo"]]