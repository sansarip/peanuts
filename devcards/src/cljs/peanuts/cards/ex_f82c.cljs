(ns peanuts.cards.ex-f82c
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [n]
  [:p (str "Hello, " n "!")])

[:div
 ;; Here [:name] will retain its original value
 [greeting ^:redlist [:name]]]