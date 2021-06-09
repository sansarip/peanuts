(ns peanuts.cards.ex6
  (:require-macros [peanuts.core :as pn]))

(pn/defnc checkbox [id selected?]
  ;; id is an arg that will be passed along with the selected? key in the subscription vector
  {:sub-args {selected? [id]}}
  [:input {:type    :checkbox
           :checked selected?}])

[:div
 (for [id (range 5)]
   ^{:key id}
   [checkbox id :selected?])]