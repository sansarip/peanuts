(ns peanuts.core-test
  (:require [peanuts.core :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test :refer [is use-fixtures testing deftest]]
            [peanuts.test-utilities :refer [is=]]
            [clojure.string :as string]
            [clojure.set :as cljset]
            [re-frame.core]))

;; necessary for macro-expanding to work with `lein test`
(let [ns *ns*]
  (use-fixtures
    :once
    (fn [test-fn]
      (binding [*ns* ns]
        (test-fn)))))

(defn- update* [k f m]
  (update m k f))

(defn- assoc-defaults [m]
  (->> m
       first
       second
       (reduce (fn [c [symb default]]
                 (if default
                   (update c :or #(assoc % symb default))))
               (assoc m :or {}))
       (update* (first (first m)) #(mapv first %))))

(defn- get-bindings [args]
  (->> args
       (mapv (fn [a]
               (let [assoc-dest-vec (get-associative-destructuring-vector a)]
                 (cond (not-empty assoc-dest-vec) (vec (vals assoc-dest-vec))
                       (map? a) (vec (keys a))
                       (vector? a) (get-bindings a)
                       :else a))))
       flatten
       distinct))

(defn- assemble-peanuts-form
  [[peanuts-macro-symbol :as partial-peanuts-form] [_fn args & body :as fn-form] opts]
  (if (#{'defnc 'fnc} peanuts-macro-symbol)
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

(defn- get-rf-sub-args [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ [_ [_ [_ & sub-args]]]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn- get-sub-fn-args [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ _ _ [_ & sub-args]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn- get-let-form [[peanuts-macro-symbol :as peanuts-form]]
  (cond-> peanuts-form
          '-> macroexpand
          (#{'fnc 'fc} peanuts-macro-symbol) (-> second second)
          (#{'defnc 'defc} peanuts-macro-symbol) (-> (nth 2) (nth 2))))

;; TODO: Use zippers?
(defn- let-form->bindings [[let-symbol :as let-form] & [as-map?]]
  (-> let-form
      (cond-> (= let-symbol 'clojure.core/let) (nth 2))
      second
      (cond->> (not as-map?) (take-nth 2)
               as-map? (apply hash-map))))

(def symbol-name-gen
  (gen/fmap
    (fn [[first-letter uuid]]
      (let [[_ & uuid] (take 8 (str uuid))]
        (symbol (str first-letter (string/join uuid)))))
    (gen/tuple
      gen/char-alpha
      gen/uuid)))

(def metadata-gen
  (gen/map
    (gen/one-of [gen/string gen/keyword])
    (gen/one-of [gen/string gen/keyword])))

(def valid-values-gen (gen/one-of
                        [gen/string
                         gen/keyword
                         gen/large-integer]))

(def valid-coll-gen (gen/one-of
                      [metadata-gen
                       (gen/vector valid-values-gen)
                       valid-values-gen]))

(def kv-destructured-map-gen (gen/map
                               (gen/such-that identity symbol-name-gen)
                               (gen/such-that identity gen/keyword)))
(def associative-destructuring-map-with-defaults-gen
  (gen/fmap
    assoc-defaults
    (gen/map
      (gen/elements [:keys :syms :strs])
      (gen/vector (gen/tuple symbol-name-gen valid-coll-gen))
      {:num-elements 1})))
(def destructured-map-gen (gen/one-of [kv-destructured-map-gen associative-destructuring-map-with-defaults-gen]))
(def fn-args-gen (gen/vector (gen/one-of [symbol-name-gen destructured-map-gen]) 0 5))
(def form-gen (gen/fmap (fn [[s v]] (seq (into [s] v))) (gen/tuple gen/symbol (gen/vector gen/any))))
(def forms-gen (gen/vector form-gen))
(def fn-form-gen (gen/fmap (fn [[s a b]] (seq (into [s a] b))) (gen/tuple (gen/return 'fn) fn-args-gen forms-gen)))
(def partial-peanuts-form-gen
  (gen/fmap
    (fn [[l s]] (cond-> l (#{'(defc) '(defnc)} l) (concat (list s))))
    (gen/tuple
      (gen/elements ['(fc) '(defc) '(fnc) '(defnc)])
      gen/symbol)))
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

(def noop-defnc-form-gen
  (gen/fmap
    (fn [[n fn-args doc-str metadata]]
      (list 'defnc n doc-str metadata fn-args))
    (gen/tuple
      symbol-name-gen
      fn-args-gen
      gen/string-ascii
      metadata-gen)))

(deftest test-noop-peanuts-macro
  (defc defc** (fn []))
  (defnc defnc** [])
  (let [fc** (fc (fn []))
        fnc** (fnc [])]
    (testing "No-op peanuts macros return no-op functions"
      (is (nil? (defc**)))
      (is (nil? (fc**)))
      (is (nil? (defnc**)))
      (is (nil? (fnc**))))))

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

  (prop/for-all [peanuts-form peanuts-form-with-exempt-opt-gen]
    (let [{exempted :exempt} (get-options peanuts-form)
(defspec test-peanuts-macros-redlist 20
          bindings (let-form->bindings (get-let-form peanuts-form))]
      (testing "Every exempted arg is not included in the let bindings"
        (every? (complement (set bindings)) exempted)))))

  (prop/for-all [peanuts-form peanuts-form-with-only-opt-gen]
(defspec test-peanuts-macros-greenlist 20
    (let [{only :only} (get-options peanuts-form)
          bindings (let-form->bindings (get-let-form peanuts-form))]
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

(defspec test-defnc-macro-includes-docstring 20
  (prop/for-all [peanuts-form noop-defnc-form-gen]
    (let [[_ _ expected-doc-str] peanuts-form]
      (testing "Define var includes the specified doc string in its metadata"
        (is= expected-doc-str (:doc (meta (eval peanuts-form))))))))

(defspec test-defnc-metadata 20
  (prop/for-all [peanuts-form noop-defnc-form-gen
                 present-metadata metadata-gen]
    (let [[peanuts-macro-symbol n & [_ expected-metadata :as rest-of-form]] peanuts-form
          ;; Also include metadata on the name
          peanuts-form* (-> n
                            (with-meta present-metadata)
                            (->> (list peanuts-macro-symbol))
                            (concat rest-of-form))]
      (testing "Metadata arg and metadata present on name are present on evaluated peanuts form"
        (is (cljset/subset?
              (set (merge expected-metadata present-metadata))
              (set (meta (eval peanuts-form*)))))))))
