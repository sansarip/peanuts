(ns peanuts.core-test
  (:require [peanuts.core :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.test :refer [is use-fixtures testing deftest]]
            [peanuts.test-utilities :refer [is=] :as tu]
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

(def symbol-name-gen
  (gen/fmap
    (fn [[first-letter uuid]]
      (let [[_ & uuid] (take 8 (str uuid))]
        (symbol (str first-letter (string/join uuid)))))
    (gen/tuple
      gen/char-alpha
      gen/uuid)))
(def valid-values-gen
  (gen/one-of
    [gen/string
     gen/keyword
     gen/small-integer]))
(def metadata-map-gen
  (gen/map
    (gen/one-of [gen/string gen/keyword])
    valid-values-gen))
(def valid-coll-gen
  (gen/one-of
    [metadata-map-gen
     (gen/fmap
       (fn [v] (cond-> v (not (coll? v)) vector))
       (gen/recursive-gen
         gen/vector
         (gen/one-of
           [metadata-map-gen
            valid-values-gen])))]))
(def associative-destructuring-map-gen
  (gen/one-of
    [(gen/map
       (gen/such-that identity symbol-name-gen)
       (gen/such-that identity (gen/one-of [gen/keyword gen/string-ascii])))
     (gen/fmap
       tu/assoc-defaults
       (gen/map
         (gen/elements [:keys :syms :strs])
         (gen/vector (gen/tuple symbol-name-gen valid-coll-gen))
         {:num-elements 1}))]))
(defn fn-params-gen []
  (gen/vector
    (gen/one-of [symbol-name-gen associative-destructuring-map-gen]) 0 5))
(defn hiccup-vector-gen
  ([hiccup-vector-gen*]
   (gen/fmap
     (fn [[k hiccup-vector-body hiccup-vector]]
       (if hiccup-vector
         [k hiccup-vector]
         (try (into [k] hiccup-vector-body)
              (catch Exception _e
                (println 1)))))
     (gen/tuple
       (gen/such-that identity gen/keyword)
       valid-coll-gen
       hiccup-vector-gen*)))
  ([] (hiccup-vector-gen (gen/return false))))
(def hiccup-vectors-gen
  (gen/recursive-gen
    hiccup-vector-gen
    (hiccup-vector-gen)))
(defn fn-form-gen []
  (gen/fmap
    (fn [[params body]] (list 'fn params body))
    (gen/tuple (fn-params-gen) hiccup-vectors-gen)))
(def partial-peanuts-form-gen
  (gen/fmap
    (fn [[l s]] (cond-> l (#{'(defc) '(defnc)} l) (concat (list s))))
    (gen/tuple
      (gen/elements ['(fc) '(defc) '(fnc) '(defnc)])
      symbol-name-gen)))
(defn peanuts-form-with-redlist-gen []
  (gen/fmap
    tu/assemble-peanuts-form-with-vector-options
    (gen/tuple (gen/elements [:redlist :exempt]) partial-peanuts-form-gen (fn-form-gen))))
(defn peanuts-form-with-greenlist-gen []
  (gen/fmap
    tu/assemble-peanuts-form-with-vector-options
    (gen/tuple (gen/elements [:greenlist :only]) partial-peanuts-form-gen (fn-form-gen))))
(defn peanuts-form-with-sub-args-opt-gen []
  (gen/fmap
    tu/assemble-peanuts-form-with-sub-args-option
    (gen/tuple partial-peanuts-form-gen
               (fn-form-gen)
               (-> valid-values-gen
                   gen/vector
                   gen/vector))))
(defn peanuts-form-gen
  [& [{:keys [fn-params-gen*]
       :or   {fn-params-gen* fn-params-gen}}]]
  (with-redefs
    [peanuts.core-test/fn-params-gen fn-params-gen*]
    (gen/one-of
      [(peanuts-form-with-redlist-gen)
       (peanuts-form-with-greenlist-gen)
       (peanuts-form-with-sub-args-opt-gen)])))
(def defnc-form-gen
  (gen/fmap
    (fn [[n [_ fn-params hiccup-vec] doc-str meta-map meta-map2]]
      (list 'defnc n doc-str meta-map fn-params meta-map2 hiccup-vec))
    (gen/tuple
      symbol-name-gen
      (fn-form-gen)
      gen/string-ascii
      metadata-map-gen
      metadata-map-gen)))
(defn subscription-vector-gen []
  (gen/fmap
    (fn [[sub-id sub-args]]
      (into [sub-id] sub-args))
    (gen/tuple
      gen/keyword
      (gen/vector
        valid-values-gen))))

(deftest test-noop-peanuts-macro
  ;; Given
  (defc defc** (fn []))
  (defnc defnc** [])
  (let [fc** (fc (fn []))
        fnc** (fnc [])]

    ;; Then
    (testing "No-op peanuts macros return no-op functions"
      (is (nil? (defc**)))
      (is (nil? (fc**)))
      (is (nil? (defnc**)))
      (is (nil? (fnc**))))))

(defspec test-defc-always-defs 20
  ;; Given
  (prop/for-all [fn-form (fn-form-gen)
                 expected-name gen/symbol]

    ;; When
    (let [[first-symbol actual-name] (macroexpand (list 'defc expected-name fn-form))]

      ;; Then
      (testing "Always defs the correct name"
        (and (is= 'def first-symbol)
             (is= expected-name actual-name))))))

(defspec test-fc-always-fns 20
  ;; Given
  (prop/for-all [fn-form (fn-form-gen)]

    ;; When
    (let [[first-symbol] (macroexpand (list 'fc fn-form))]

      ;; Then
      (testing "First symbol in returned form is fn*"
        (is= 'fn* first-symbol)))))

(defspec test-peanuts-macros-rf-subscriptions-1 20
  ;; Given
  (prop/for-all [peanuts-form (peanuts-form-gen)]
    (let [rf-subscriptions (atom 0)
          fn-args (tu/fn-params->args (tu/get-fn-params peanuts-form))]
      (with-redefs [re-frame.core/subscribe
                    (fn [sub-vec]
                      (when (not (tu/subscription-vector? sub-vec))
                        (swap! rf-subscriptions inc))
                      nil)]

        ;; When
        (apply (eval peanuts-form) fn-args))

      ;; Then
      (testing "No subscriptions were attempted for non-subscription-vector args"
        (is (zero? @rf-subscriptions))))))

(defspec test-peanuts-macros-rf-subscriptions-2 20
  ;; Given
  (prop/for-all [sub-vec (subscription-vector-gen)]
    (let [baz (fnc [oo] oo)
          bar (fnc [ar] (baz ar))
          foo (fnc [az] (bar az))
          rf-subscriptions (atom 0)]
      (with-redefs [re-frame.core/subscribe
                    (fn [sub-vec]
                      (swap! rf-subscriptions inc)
                      (atom sub-vec))]

        ;; When
        (foo (with-meta sub-vec {:redlist true}))

        ;; Then
        (testing "No subscriptions were attempted for a meta-redlisted arg"
          (is (zero? @rf-subscriptions)))

        ;; When
        (foo (first sub-vec))

        ;; Then
        (testing "Subscription attempted for subscription keyword id"
          ;; 1 fn call * 3 subs per fn call
          (is (= 3 @rf-subscriptions)))

        ;; When
        (let [actual-sub-vec (foo sub-vec)]

          ;; Then
          (testing "Subscription vector is passed through to re-frame.core/subscribe"
            (is (= sub-vec actual-sub-vec))))))))




(defspec test-peanuts-macros-redlist 20
  ;; Given
  (prop/for-all [peanuts-form (peanuts-form-with-redlist-gen)]
    (let [{:keys [exempt redlist]} (tu/get-options peanuts-form)

          ;; When
          bindings (tu/peanuts-form->let-bindings peanuts-form)]

      ;; Then
      (testing "Every redlisted arg is not included in the let bindings"
        (is (every? (complement (set bindings)) (or exempt redlist)))))))

(defspec test-peanuts-macros-greenlist 20
  ;; Given
  (prop/for-all [peanuts-form (peanuts-form-with-greenlist-gen)]
    (let [{:keys [only greenlist]} (tu/get-options peanuts-form)

          ;; When
          bindings (tu/peanuts-form->let-bindings peanuts-form)]

      ;; Then
      (testing "Every greenlisted arg is included in the let bindings"
        (is (every? (set bindings) (or only greenlist)))))))

(defspec test-peanuts-macros-sub-args 20
  ;; Given
  (prop/for-all [peanuts-form (peanuts-form-with-sub-args-opt-gen)]
    (let [{sub-args :sub-args} (tu/get-options peanuts-form)
          bindings (tu/let-form->bindings (tu/get-let-form peanuts-form) :as-map)

          ;; When
          rf-sub-args (tu/get-rf-sub-args bindings)
          sub-fn-args (tu/get-sub-fn-args bindings)]

      ;; Then
      (testing "Every specified subscription arg is included in the let bindings"
        (is (every? (fn [[k v]] (= (get rf-sub-args k) v)) sub-args)))
      (testing "Every specified subscription function arg is included in the let bindings"
        (is (every? (fn [[k v]] (= (get sub-fn-args k) v)) sub-args))))))

(defspec test-defnc-macro-includes-docstring 20
  ;; Given
  (prop/for-all [peanuts-form defnc-form-gen]
    (let [[_ _ expected-doc-str] peanuts-form

          ;; When
          actual-meta (meta (eval peanuts-form))]

      ;; Then
      (testing "Define var includes the specified doc string in its metadata"
        (is= expected-doc-str (:doc actual-meta))))))

(defspec test-defnc-metadata 20
  ;; Given
  (prop/for-all [peanuts-form defnc-form-gen
                 present-metadata metadata-map-gen]
    (let [[peanuts-macro-symbol n &
           [_ expected-meta-map1 _ expected-meta-map2 :as rest-of-form]] peanuts-form
          ;; Also include metadata on the name
          peanuts-form* (-> n
                            (with-meta present-metadata)
                            (->> (list peanuts-macro-symbol))
                            (concat rest-of-form))

          ;; When
          actual-meta (meta (eval peanuts-form*))]

      ;; Then
      (testing "Metadata map arg and metadata present on name are merged on evaluated peanuts form"
        (is (cljset/subset?
              (set (merge expected-meta-map1 expected-meta-map2 present-metadata))
              (set actual-meta)))))))
