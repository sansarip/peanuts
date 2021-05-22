(ns peanuts.core-test
  (:require [peanuts.core :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test :refer [use-fixtures testing]]
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

(defn- assemble-peanuts-form
  [[peanuts-macro-symbol :as partial-peanuts-form] [_fn args & body :as fn-form] opts]
  (if (= peanuts-macro-symbol 'defnc)
    (-> partial-peanuts-form
        (concat (list opts))
        (concat (list args))
        (concat body))
    (-> partial-peanuts-form
        (concat (list fn-form))
        (concat (list opts)))))

(defn- assemble-peanuts-form-with-vector-options [k [partial-peanuts-form [_fn args :as fn-form]]]
  (let [opts {k (->> args get-binding-vars (random-sample 0.5) vec)}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn- assemble-peanuts-form-with-exempt-option [f]
  (assemble-peanuts-form-with-vector-options :exempt f))

(defn- assemble-peanuts-form-with-only-option [f]
  (assemble-peanuts-form-with-vector-options :only f))

(defn- assemble-peanuts-form-with-sub-args-option
  [[partial-peanuts-form [_fn args :as fn-form] sub-args]]
  (let [binding-vars (vec (get-binding-vars args))
        sub-args (-> binding-vars count (take sub-args))
        opts {:sub-args (reduce-kv (fn [c k v] (assoc c (get binding-vars k) v)) {} (vec sub-args))}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn- get-subargs [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ [_ [_ [_ & sub-args]]]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn- get-subfnargs [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ _ _ [_ & sub-args]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

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
(def partial-peanuts-form-gen (gen/fmap (fn [[l s]] (cond-> l (#{'(defc) '(defnc)} l) (concat (list s))))
                                        (gen/tuple (gen/elements ['(fc) '(defc) '(defnc)]) gen/symbol)))
(def peanuts-form-gen-with-exempt-opt-gen
  (gen/fmap
    assemble-peanuts-form-with-exempt-option
    (gen/tuple partial-peanuts-form-gen fn-form-gen)))

(def peanuts-form-with-only-opt-gen
  (gen/fmap
    assemble-peanuts-form-with-only-option
    (gen/tuple partial-peanuts-form-gen fn-form-gen)))

(def peanuts-form-with-sub-args-opt-gen
  (gen/fmap
    assemble-peanuts-form-with-sub-args-option
    (gen/tuple partial-peanuts-form-gen
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
         (prop/for-all [mf peanuts-form-gen-with-exempt-opt-gen]
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
                         (testing "Every exempted arg is not included in the let bindings"
                           (every? (complement (set bindings)) exempted)))))

(defspec test-defc-and-fc-only-specified-params 20
         (prop/for-all [mf peanuts-form-with-only-opt-gen]
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
                         (testing "Every specified only-arg is included in the let bindings"
                           (every? (set bindings) only)))))

(defspec test-defc-and-fc-include-specified-sub-args 20
         (prop/for-all [mf peanuts-form-with-sub-args-opt-gen]
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
                         (testing "Every specified subscription arg is included in the let bindings"
                           (every? (fn [[k v]] (= (get binding-map k) v)) sub-args)))))

(defspec test-defc-and-fc-include-specified-subfn-args 20
         (prop/for-all [mf peanuts-form-with-sub-args-opt-gen]
                       (let [[t] mf
                             fc? (= t 'fc)
                             defc? (= t 'defc)
                             {sub-args :sub-args} (nth mf (if fc? 2 3))
                             bindings (cond-> mf
                                              '-> macroexpand
                                              fc? (-> second second)
                                              defc? (-> (nth 2) (nth 2)))
                             binding-map (get-subfnargs (apply hash-map (if (= (first bindings) 'clojure.core/let)
                                                                          (-> bindings (nth 2) second)
                                                                          (second bindings))))]
                         (testing "Every specified subscription fn is included in the let bindings"
                           (every? (fn [[k v]] (= (get binding-map k) v)) sub-args)))))
