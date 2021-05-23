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

(defn- get-bindings [args]
  (->> args
       (mapv (fn [a] (cond (and (map? a) (:keys a)) (:keys a)
                           (map? a) (vec (keys a))
                           (vector? a) (get-bindings a)
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
  (let [opts {k (->> args get-bindings (random-sample 0.5) vec)}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn- assemble-peanuts-form-with-exempt-option [f]
  (assemble-peanuts-form-with-vector-options :exempt f))

(defn- assemble-peanuts-form-with-only-option [f]
  (assemble-peanuts-form-with-vector-options :only f))

(defn- assemble-peanuts-form-with-sub-args-option
  [[partial-peanuts-form [_fn args :as fn-form] sub-args]]
  (let [binding-vars (vec (get-bindings args))
        sub-args (-> binding-vars count (take sub-args))
        opts {:sub-args (reduce-kv (fn [c k v] (assoc c (get binding-vars k) v)) {} (vec sub-args))}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn- get-options [[peanuts-macro-symbol _first second* _third fourth*]]
  (if (= peanuts-macro-symbol 'defc) fourth* second*))

(defn- get-sub-args [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ [_ [_ [_ & sub-args]]]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn- get-subfn-args [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ _ _ [_ & sub-args]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn- get-let-form [[peanuts-macro-symbol :as peanuts-form]]
  (cond-> peanuts-form
          '-> macroexpand
          (= peanuts-macro-symbol 'fc) (-> second second)
          (#{'defnc 'defc} peanuts-macro-symbol) (-> (nth 2) (nth 2))))

;; TODO: Use zippers?
(defn- let-form->bindings [[let-symbol :as let-form] & [as-map?]]
  (-> let-form
      (cond-> (= let-symbol 'clojure.core/let) (nth 2))
      second
      (cond->> (not as-map?) (take-nth 2)
               as-map? (apply hash-map))))

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
(def peanuts-form-with-exempt-opt-gen
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
  (prop/for-all [fn-form fn-form-gen
                 expected-name gen/symbol]
    (let [[first-symbol actual-name] (macroexpand (list 'defc expected-name fn-form))]
      (testing "Always defs the correct name"
        (and (is= 'def first-symbol)
             (is= expected-name actual-name))))))

(defspec test-fc-always-fns 20
  (prop/for-all [fn-form fn-form-gen]
    (let [[first-symbol] (macroexpand (list 'fc fn-form))]
      (testing "First symbol in returned form is fn*"
        (is= 'fn* first-symbol)))))

(defspec test-peanuts-macros-exempt-specified-params 20
  (prop/for-all [peanuts-form peanuts-form-with-exempt-opt-gen]
    (let [{exempted :exempt} (get-options peanuts-form)
          bindings (let-form->bindings (get-let-form peanuts-form))]
      (testing "Every exempted arg is not included in the let bindings"
        (every? (complement (set bindings)) exempted)))))

(defspec test-peanuts-macros-only-specified-params 20
  (prop/for-all [peanuts-form peanuts-form-with-only-opt-gen]
    (let [{only :only} (get-options peanuts-form)
          bindings (let-form->bindings (get-let-form peanuts-form))]
      (println "ONLY: " only)
      (println "BINDINGS: " bindings)
      (testing "Every specified only-arg is included in the let bindings"
        (every? (set bindings) only)))))

(defspec test-peanuts-macros-include-specified-sub-args 20
  (prop/for-all [peanuts-form peanuts-form-with-sub-args-opt-gen]
    (let [{sub-args :sub-args} (get-options peanuts-form)
          bindings-map (-> peanuts-form get-let-form
                           (let-form->bindings :as-map)
                           get-sub-args)]
      (testing "Every specified subscription arg is included in the let bindings"
        (every? (fn [[k v]] (= (get bindings-map k) v)) sub-args)))))

(defspec test-peanuts-macros-include-specified-subfn-args 20
  (prop/for-all [peanuts-form peanuts-form-with-sub-args-opt-gen]
    (let [{sub-args :sub-args} (get-options peanuts-form)
          bindings-map (-> peanuts-form get-let-form
                           (let-form->bindings :as-map)
                           get-subfn-args)]
      (testing "Every specified subscription fn is included in the let bindings"
        (every? (fn [[k v]] (= (get bindings-map k) v)) sub-args)))))
