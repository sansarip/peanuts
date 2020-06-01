(ns peanuts.core-test
  (:require [peanuts.core :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test :refer [use-fixtures]]
            [peanuts.test-utilities :refer [is=]]))

;; necessary for macro-expanding to work with `lein test`
(let [ns *ns*]
  (use-fixtures
    :once
    (fn [test-fn]
      (binding [*ns* ns]
        (test-fn)))))

(defn- update* [k f m]
  (update m k f))

(defn- update-defaults [{ks :keys :as m}]
  (->> ks
       (reduce (fn [c [symb default]]
                 (if default
                   (update c :or #(assoc % symb default))))
               (assoc m :or {}))
       (update* :keys #(mapv first %))))

(defn- get-binding-vars [args]
  (->> args
       (mapv (fn [a] (cond (and (map? a) (:keys a)) (:keys a)
                           (map? a) (vec (keys a))
                           (vector? a) (get-binding-vars a)
                           :else a)))
       flatten
       dedupe))

(def kv-destructured-map-gen (gen/map
                               (gen/such-that identity gen/symbol)
                               (gen/such-that identity gen/keyword)))
(def keysor-destructured-map-gen (gen/fmap
                                   update-defaults
                                   (gen/hash-map :keys (gen/vector (gen/tuple gen/symbol gen/any)))))
(def destructured-map-gen (gen/one-of [kv-destructured-map-gen keysor-destructured-map-gen]))
(def fn-args-gen (gen/vector (gen/one-of [gen/symbol destructured-map-gen])))
(def form-gen (gen/fmap (fn [[s v]] (seq (into [s] v))) (gen/tuple gen/symbol (gen/vector gen/any))))
(def fn-body-gen (gen/vector form-gen))
(def fn-form-gen (gen/fmap (fn [[s a b]] (seq (into [s a] b))) (gen/tuple (gen/return 'fn) fn-args-gen fn-body-gen)))
(def defc-fc-form-gen (gen/fmap (fn [[l s]] (if (= l '(defc)) (concat l (list s)) l))
                                (gen/tuple (gen/elements ['(fc) '(defc)]) gen/symbol)))
(def full-defc-fc-form-gen (gen/fmap (fn [[mf [_ a :as f]]]
                                       (-> mf
                                           (concat (list f))
                                           (concat (list {:ignore (->> a get-binding-vars (random-sample 0.5) vec)}))))
                                     (gen/tuple defc-fc-form-gen fn-form-gen)))

(defspec test-defc-always-defs 20
         (prop/for-all [f fn-form-gen
                        expected-name gen/symbol]
                       (let [[actual-callable actual-name] (macroexpand (list 'defc expected-name f))]
                         (and (is= 'def actual-callable)
                              (is= expected-name actual-name)))))

(defspec test-fc-always-fns 20
         (prop/for-all [f fn-form-gen]
                       (let [[actual-callable] (macroexpand (list 'fc f))]
                         (is= 'fn* actual-callable))))

(defspec test-defc-and-fc-ignore-specified-args 20
         (prop/for-all [mf full-defc-fc-form-gen]
                       (let [[t] mf
                             fc? (= t 'fc)
                             defc? (= t 'defc)
                             {ignored :ignore} (nth mf (if fc? 2 3))
                             bindings (cond-> mf
                                              '-> macroexpand
                                              fc? (-> second second)
                                              defc? (-> (nth 2) (nth 2)))
                             bindings (take-nth 2 (if (= (first bindings) 'clojure.core/let)
                                                    (-> bindings (nth 2) second)
                                                    (second bindings)))]
                         (every? (complement (set bindings)) ignored))))

