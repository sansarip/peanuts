(ns peanuts.cards.ex-a226
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [n]
  [:p (str "Hello, " n "!")])

[:div
 [greeting :name]
 [greeting [:name]]
 [greeting "Garbonzo"]]