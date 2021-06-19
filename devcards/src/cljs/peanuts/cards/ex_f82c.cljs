(ns peanuts.cards.ex-f82c
  (:require-macros [peanuts.core :as pn]))

(pn/defnc greeting [n]
  [:p (str "Hello, " n "!")])

[:div
 ;; Here [:name] will retain its original value
 ;; You can also use the shorter :rl keyword instead of :redlist
 [greeting ^:redlist [:name]]]