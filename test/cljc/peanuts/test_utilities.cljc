(ns peanuts.test-utilities
  (:require [clojure.pprint :refer [pprint]]
            [clojure.string :as string]
            [peanuts.core :as pn]))

(defn pprint* [s]
  (-> s pprint with-out-str string/trim))

(defn prn-str* [o]
  (binding [*print-meta* true]
    (prn-str o)))

(defn connect-edges
  ([m]
   (reduce-kv connect-edges m m))
  ([c k v]
   (let [nv (reduce-kv (partial connect-edges c) v v)]
     (assoc c k nv)))
  ([p c k _]
   (let [pk (keys p)
         n (->> pk (random-sample 0.5) first)]
     (assoc c k (or n (first pk))))))

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

(defn assoc-defaults [m]
  (->> m
       first
       second
       (reduce (fn [c [symb default]]
                 (if default
                   (update c :or #(assoc % symb default))))
               (assoc m :or {}))
       (update* (first (first m)) #(mapv first %))))

(defn get-bindings [args]
  (->> args
       (mapv (fn [a]
               (let [assoc-dest-vec (pn/get-associative-destructuring-vector a)]
                 (cond (not-empty assoc-dest-vec) (vec (vals assoc-dest-vec))
                       (map? a) (vec (keys a))
                       (vector? a) (get-bindings a)
                       :else a))))
       flatten
       distinct))

(defn assemble-peanuts-form
  [[peanuts-macro-symbol :as partial-peanuts-form] [_fn args & body :as fn-form] opts]
  (if (#{'defnc 'fnc} peanuts-macro-symbol)
    (-> partial-peanuts-form
        (concat (list opts))
        (concat (list args))
        (concat body))
    (-> partial-peanuts-form
        (concat (list fn-form))
        (concat (list opts)))))

(defn assemble-peanuts-form-with-vector-options
  [[opt-key partial-peanuts-form [_fn args :as fn-form]]]
  (let [opts {opt-key (->> args get-bindings (random-sample 0.5) vec)}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn assemble-peanuts-form-with-sub-args-option
  [[partial-peanuts-form [_fn args :as fn-form] sub-args]]
  (let [binding-vars (vec (get-bindings args))
        sub-args (-> binding-vars count (take sub-args))
        opts {:sub-args (reduce-kv (fn [c k v] (assoc c (get binding-vars k) v)) {} (vec sub-args))}]
    (assemble-peanuts-form partial-peanuts-form fn-form opts)))

(defn get-options [[peanuts-macro-symbol _first second* _third fourth*]]
  (if (= peanuts-macro-symbol 'defc) fourth* second*))

(defn get-rf-sub-args [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ [_ [_ [_ & sub-args]]]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

(defn get-sub-fn-args [bindings-map]
  (reduce-kv (fn [c k [_ _ _ _ _ _ [_ & sub-args]]]
               (assoc c k (or sub-args [])))
             {}
             bindings-map))

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

