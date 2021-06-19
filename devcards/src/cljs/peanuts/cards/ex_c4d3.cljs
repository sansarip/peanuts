(ns peanuts.cards.ex-c4d3
  (:require-macros [peanuts.core :as pn]))

(pn/defnc compliment [n]
  [:p (str n " is an interesting name!")])

(pn/defnc greeting [n]
  [:<>
   [:p (str "Hello, " n "!")]
   [compliment n]])

[:div
 ;; Here [:name] will retain its original value only in the root peanuts component
 ;; You can also use the shorter :rl1 keyword instead of :redlist1
 [greeting ^:redlist1 [:name]]]