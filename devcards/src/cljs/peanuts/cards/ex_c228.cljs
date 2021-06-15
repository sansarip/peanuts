(ns peanuts.cards.ex-c228)

(defn greeting []
  (let [n @(re-frame.core/subscribe [:name])]
    [:p (str "Hello, " n "!")]))

[greeting]