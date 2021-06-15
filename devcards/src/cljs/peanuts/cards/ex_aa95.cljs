(ns peanuts.cards.ex-aa95
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [f-n l-n]
  {:greenlist [l-n]}
  [:p (str "Hello, " f-n " " l-n "!")])

[:div
 ;; Only the second arg is a candidate for being subscribed with
 ;; The first arg will be used as is
 [greeting :earthling :name]
 [greeting :earthling [:name]]]
