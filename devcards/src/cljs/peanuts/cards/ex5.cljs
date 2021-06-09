(ns peanuts.cards.ex5
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [f-n l-n]
  {:greenlist [l-n]}
  [:p "Hello, " f-n " " l-n "!"])

[:div
 ;; Only the second arg is a candidate for being subscribed with
 ;; The first arg will be used as is
 [greeting :earthling :name]]