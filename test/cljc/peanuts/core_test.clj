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

(defn- make-vector-options [k [mf [_ a :as f]]]
  (-> mf
      (concat (list f))
      (concat (list {k (->> a get-binding-vars (random-sample 0.5) vec)}))))

(defn- make-exempt-options [f]
  (make-vector-options :exempt f))

(defn- make-only-options [f]
  (make-vector-options :only f))

(defn- make-sub-arg-options [[mf [_ a :as f] sa]]
  (let [binding-vars (vec (get-binding-vars a))
        sub-args (-> binding-vars count (take sa))]
    (-> mf
        (concat (list f))
        (concat (list {:sub-args (reduce-kv (fn [c k v] (assoc c (get binding-vars k) v)) {} (vec sub-args))})))))

(defn- get-subargs [bm]
  (reduce-kv (fn [c k [_ _ _ _ [_ [_ [_ & sub-args]]]]]
               (assoc c k (or sub-args [])))
             {}
             bm))

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
(def defc-fc-form-with-exempt-opts-gen (gen/fmap make-exempt-options (gen/tuple defc-fc-form-gen fn-form-gen)))
(def defc-fc-form-with-only-opts-gen (gen/fmap make-only-options (gen/tuple defc-fc-form-gen fn-form-gen)))
(def defc-fc-form-with-sub-arg-opts-gen (gen/fmap make-sub-arg-options (gen/tuple defc-fc-form-gen
                                                                                  fn-form-gen
                                                                                  (-> gen/any
                                                                                      gen/vector
                                                                                      gen/vector))))

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

;; TODO: Use zippers?
(defspec test-defc-and-fc-exempt-specified-params 20
         (prop/for-all [mf defc-fc-form-with-exempt-opts-gen]
                       (let [[t] mf
                             fc? (= t 'fc)
                             defc? (= t 'defc)
                             {exempted :exempt} (nth mf (if fc? 2 3))
                             bindings (cond-> mf
                                              '-> macroexpand
                                              fc? (-> second second)
                                              defc? (-> (nth 2) (nth 2)))
                             bindings (take-nth 2 (if (= (first bindings) 'clojure.core/let)
                                                    (-> bindings (nth 2) second)
                                                    (second bindings)))]
                         (every? (complement (set bindings)) exempted))))

(defspec test-defc-and-fc-only-specified-params 20
         (prop/for-all [mf defc-fc-form-with-only-opts-gen]
                       (let [[t] mf
                             fc? (= t 'fc)
                             defc? (= t 'defc)
                             {only :only} (nth mf (if fc? 2 3))
                             bindings (cond-> mf
                                              '-> macroexpand
                                              fc? (-> second second)
                                              defc? (-> (nth 2) (nth 2)))
                             bindings (take-nth 2 (if (= (first bindings) 'clojure.core/let)
                                                    (-> bindings (nth 2) second)
                                                    (second bindings)))]
                         (every? (set bindings) only))))

(defspec test-defc-and-fc-include-specified-sub-args 20
         (prop/for-all [mf defc-fc-form-with-sub-arg-opts-gen]
                       (let [[t] mf
                             fc? (= t 'fc)
                             defc? (= t 'defc)
                             {sub-args :sub-args} (nth mf (if fc? 2 3))
                             bindings (cond-> mf
                                              '-> macroexpand
                                              fc? (-> second second)
                                              defc? (-> (nth 2) (nth 2)))
                             binding-map (get-subargs (apply hash-map (if (= (first bindings) 'clojure.core/let)
                                                                        (-> bindings (nth 2) second)
                                                                        (second bindings))))]
                         (every? (fn [[k v]] (= (get binding-map k) v)) sub-args))))
