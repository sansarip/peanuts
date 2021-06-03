(ns ^:figwheel-hooks peanuts.cards
  (:require [devcards.core :as dc]))

(enable-console-print!)

(defn ^:export init []
  (dc/start-devcard-ui!))

(defn ^:after-load on-reload []
  (init))
