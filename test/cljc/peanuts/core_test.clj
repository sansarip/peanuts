(ns peanuts.core-test
  (:require [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [peanuts.core :refer :all]))

(defn- update* [k f m]
  (update m k f))
(defn update-defaults [{ks :keys :as m}]
  (->> ks
       (reduce (fn [c [symb default]]
                 (if default
                   (update c :or #(assoc % symb default))))
               (assoc m :or {}))
       (update* :keys #(mapv first %))))
(def kv-destructured-map-gen (gen/map
                               (gen/such-that identity gen/symbol)
                               (gen/such-that identity gen/keyword)))
(def keysor-destructured-map-gen (gen/fmap
                                   update-defaults
                                   (gen/hash-map :keys (gen/vector (gen/tuple gen/symbol gen/any)))))
(def destructured-map-gen (gen/one-of [kv-destructured-map-gen keysor-destructured-map-gen]))
(def fn-args-gen (gen/vector (gen/one-of [gen/symbol destructured-map-gen])))
(def fn-form-gen (gen/tuple (gen/return 'fn) fn-args-gen))

(defspec defc-always-defs 100
         (prop/for-all []))
