(ns peanuts.cards.ex7
  (:require-macros [peanuts.core :as pn]))

(pn/defnc checkbox [id selected?]
  {:sub-args {selected? [id]}}
  [:input {:type    :checkbox
           :checked selected?}])

[:div
 (for [id (range 5)]
   ^{:key id}
   [checkbox id odd?])]