(ns peanuts.cards.ex2)

(defn greeting* [n]
  [:p "Hello, " n "!"])

(defn greeting []
  (let [n @(re-frame.core/subscribe [:name])]
    [greeting* n]))

[greeting]