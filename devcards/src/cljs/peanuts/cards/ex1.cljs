(ns peanuts.cards.ex1)

(defn greeting []
  (let [n @(re-frame.core/subscribe [:name])]
    [:p "Hello, " n "!"]))

[greeting]