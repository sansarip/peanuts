(ns peanuts.cards.ex8
  (:require-macros [peanuts.core :as pn]))

(pn/defnc checkbox [selected?]
  [:input {:type    :checkbox
           :checked selected?}])

[:div
 (for [id (range 5)]
   ^{:key id}
   ;; Just as a warning, inlining anonymous functions like this
   ;; will impact React's equality checks for the checkbox component
   ;; which will cause unnecessary re-renders.
   [checkbox ^:sub-fn #(odd? id)])]