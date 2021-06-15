(ns peanuts.cards.ex-e6c7)

(defn greeting* [n]
  [:p (str "Hello, " n "!")])

(defn greeting []
  (let [n @(re-frame.core/subscribe [:name])]
    [greeting* n]))

[greeting]