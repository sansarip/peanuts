(ns peanuts.cards.ex-dd80
  (:require-macros [peanuts.core :as pn]))

(pn/defnc checkbox [selected?]
  [:input {:type    :checkbox
           :checked selected?}])

[:div
 (for [id (range 5)]
   ^{:key id}
   [checkbox [:selected? id]])]