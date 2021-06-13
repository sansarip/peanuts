(ns peanuts.test-utilities
  (:require [clojure.pprint :refer [pprint]]
            [clojure.string :as string]
            [clojure.test :refer :all]
            [peanuts.core :as pn]))

(defn pprint* [s]
  (-> s pprint with-out-str string/trim))

(defn prn-str* [o]
  (binding [*print-meta* true]
    (prn-str o)))

(defn fmsg [e a]
  (str "Expected: " (pprint* e)
       "\n"
       "Actual: " (pprint* a)
       "\n"))

(defn is= [e a]
  (or (= e a)
      (println (fmsg e a))))

(defn update* [k f m]
  (update m k f))

(defn assoc-defaults
  {:test (is (= {:keys ['a 'b 'c]
                 :or   {'a 1 'b 2 'c 3}}
                (assoc-defaults {:keys {'a 1 'b 2 'c 3}})))}

  [m]
  (->> m
       first
       second
       (reduce (fn [c [symb default]]
                 (if default
                   (assoc-in c [:or symb] default)))
               (assoc m :or {}))
       ;; Transform :keys, :strs, :syms map value to binding vec
       (update* (first (first m)) #(mapv first %))))

(defn get-bindings
  {:test (is (= ['a 'b 'c]
                (get-bindings [{:keys ['a]} {'b :b} 'c])))}
  [params]
  (->> params
       (mapv (fn [a]
               (let [assoc-dest-vec (pn/get-associative-destructuring-vector a)]
                 (cond (not-empty assoc-dest-vec) (vec (vals assoc-dest-vec))
                       (map? a) (vec (keys a))
                       (vector? a) (get-bindings a)
                       :else a))))
       flatten
       distinct))

(defn assemble-peanuts-form
  {:test (is (= '(defnc foo {:only [a]} [a])
                (assemble-peanuts-form
                  '(defnc foo)
                  '(fn [a])
                  {:only ['a]})))}
  [[peanuts-macro-symbol :as partial-peanuts-form] [_fn params & body :as fn-form] opts]
  (if (#{'defnc 'fnc} peanuts-macro-symbol)
    (-> partial-peanuts-form
        (concat (list opts))
        (concat (list params))
        (concat body))
    (-> partial-peanuts-form
        (concat (list fn-form))
        (concat (list opts)))))

;; Nondeterministic because of use of random-sample
(defn assemble-peanuts-form-with-vector-options
  [[opt-key partial-peanuts-form [_fn params :as fn-form]]]
  (let [opts {opt-key (->> params get-bindings (random-sample 0.5) vec)}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn assemble-peanuts-form-with-sub-args-option
  [[partial-peanuts-form [_fn params :as fn-form] sub-args]]
  (let [binding-vars (vec (get-bindings params))
        sub-args (-> binding-vars count (take sub-args))
        opts {:sub-args (reduce-kv (fn [c k v] (assoc c (get binding-vars k) v)) {} (vec sub-args))}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn get-options
  {:test (is (= {:only ['a]}
                (get-options '(defnc foo {:only [a]} [a]))))}
  [[peanuts-macro-symbol _first second* _third fourth*]]
  (if (= peanuts-macro-symbol 'defc) fourth* second*))

(defn get-rf-sub-args
  {:test (is (= {'a []}
                (get-rf-sub-args
                  {'a
                   '(cond
                      (let [{:keys [exempt redlist]} (meta a)] (or exempt redlist))
                      a
                      (keyword? a)
                      (if-let [sub (re-frame.core/subscribe [a])] (deref sub) a)
                      ;;                                     ^---
                      (and (vector? a) (keyword? (first a)))
                      (if-let [sub (re-frame.core/subscribe a)] (deref sub) a)
                      (or (-> a meta :sub-fn) (and (fn? a) nil))
                      (a)
                      :else
                      a)})))}
  [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ [_ [_ [_ [_ & sub-args]]]]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn get-sub-fn-args
  {:test (is (= {'a []}
                (get-rf-sub-args
                  {'a
                   '(cond
                      (let [{:keys [exempt redlist]} (meta a)] (or exempt redlist))
                      a
                      (keyword? a)
                      (if-let [sub (re-frame.core/subscribe [a])] (deref sub) a)
                      (and (vector? a) (keyword? (first a)))
                      (if-let [sub (re-frame.core/subscribe a)] (deref sub) a)
                      (or (-> a meta :sub-fn) (and (fn? a) nil))
                      (a)
                      ;^---
                      :else
                      a)})))}
  [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ _ _ _ _ [_ & sub-args]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn get-fn-params [peanuts-form]
  {:test (is (= ['a 'b 'c]
                (get-fn-params '(defnc foo [a b c]))))}
  (or (some #(if (vector? %) %) peanuts-form)
      (some #(if (and (seq? %) (= 'fn (first %))) (second %)) peanuts-form)))

(defn get-let-form [[peanuts-macro-symbol :as peanuts-form]]
  (cond-> peanuts-form
          '-> macroexpand
          (#{'fnc 'fc} peanuts-macro-symbol) (-> second second)
          (#{'defnc 'defc} peanuts-macro-symbol) (-> (nth 2) (nth 2))))

;; TODO: Use zippers?
(defn let-form->bindings [[let-symbol :as let-form] & [as-map?]]
  (-> let-form
      (cond-> (= let-symbol 'clojure.core/let) (nth 2))
      second
      (cond->> (not as-map?) (take-nth 2)
               as-map? (apply hash-map))))

(defn peanuts-form->let-bindings [peanuts-form]
  (let-form->bindings (get-let-form peanuts-form)))

(defn subscription-vector? [arg]
  (and (vector? arg) (keyword? (first arg))))