(ns peanuts.styles
  (:require [spade.core :refer-macros [defglobal defclass]]))

(def color-palette {:primary      "#131F33"
                    :secondary    "#CCDEFF"
                    :tertiary     "#F7976E"
                    :tertiary-alt "#CF6F46"
                    :quaternary   "#FFF8BE"})

(defglobal document-styles []
           [:body {:color (:primary color-palette)
                   :font-family "\"Work Sans\", sans-serif"}]
           [:.com-rigsomelight-devcards-panel-heading.com-rigsomelight-devcards-typog
            {:font-family "\"Space Mono\", monospace !important"}]
           [:.com-rigsomelight-devcards_rendered-card {:font-family "inherit !important"}]
           [:.com-rigsomelight-devcards-typog {:font-family "inherit !important"}]
           [:.CodeMirror {:font-family      "inherit"
                          :background-color (:secondary color-palette)
                          :color            (:primary color-palette)
                          :border-radius    "4px"
                          :border           (str "2px solid " (:primary color-palette))}]
           [:.CodeMirror-gutters {:background-color (:primary color-palette)}]
           [:.CodeMirror-linenumber {:color :white}]
           [:.CodeMirror-line>span {:background-color (str (:quaternary color-palette) "55")
                                    :border-radius    :2px}])

(defclass result-view-class []
  {:background-color      (:secondary color-palette)
   :padding               :1em
   :display               :grid
   :grid-template-columns "auto 1fr"
   :grid-template-rows    "auto"
   :grid-column-gap       :.5em
   :border-radius         "4px"
   :border                (str "2px solid " (:primary color-palette))
   :margin-top            :1em}
  [:.prompt {:align-self :center}]
  [:.hiccup {:background-color :white
             :border-radius    "4px"
             :padding          :.5em}]
  [:.other {:background-color (:quaternary color-palette)
            :border-radius    "2px"}])
