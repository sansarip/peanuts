(ns peanuts.core
  (:require [clojure.walk :as w]))

(defn- not-empty-coll [thing]
  (if (coll? thing) (not-empty thing) thing))

(defn- not-empty-vals [thing]
  (cond
    (map? thing) (some #(not-empty-coll (second %)) thing)
    (coll? thing) (not-empty-coll thing)
    thing thing
    :else nil))

(defn- binding-vector? [thing]
  (and (vector? thing) (-> thing first symbol?)))

(defn- remove-deep [key-set data]
  (if (not-empty key-set)
    (->> data
         (w/prewalk (fn [node]
                      (cond
                        (binding-vector? node) (vec (remove key-set node))
                        (map? node) (apply dissoc (dissoc node :or) key-set)
                        (get key-set node) nil
                        :else node)))
         (filterv not-empty-vals))
    data))

(defn- symbol-in? [key-set s]
  (if (symbol? s)
    (get key-set s)
    s))

(defn- filter-symbol-keys [key-set m]
  (reduce-kv (fn [c k v]
               (if (symbol-in? key-set k)
                 (assoc c k v)
                 c))
             {}
             m))

(defn- filter-deep [key-set data]
  (if (not-empty key-set)
    (->> data
         (w/prewalk (fn [node]
                      (cond
                        (binding-vector? node) (filterv #(symbol-in? key-set %) node)
                        (map? node) (filter-symbol-keys key-set (dissoc node :or))
                        (not (symbol-in? key-set node)) nil
                        :else node)))
         (filterv not-empty-vals)
         (remove #{'&}))
    data))

(defn- flatten-maps [args]
  (->> args
       (w/prewalk (fn [node]
                    (cond
                      (and (map? node) (:keys node)) (:keys node)
                      (map? node) (vec (keys node))
                      :else node)))
       flatten
       dedupe))

(defn- make-cond-form [binding binding-args]
  (let [binding-vec (into [binding] binding-args)]
    `(cond
       (-> ~binding meta :exempt) ~binding
       (keyword? ~binding) (deref (re-frame.core/subscribe ~binding-vec))
       (or (-> ~binding meta :sub-fn) (and (fn? ~binding) ~binding-args)) ~(seq binding-vec)
       :else ~binding)))

(defn- seq->let-form [args seq*]
  (->> seq*
       (reduce (fn [c b]
                 (-> c
                     (conj b)
                     (conj (make-cond-form b (get args b)))))
               [])
       (conj '(let))
       reverse))

(defn- ->component
  ([n f {:keys [exempt only def? sub-args]}]
   (let [[_ args & body] f
         bindings (->> args
                       (remove-deep (set exempt))
                       vec
                       (filter-deep (set only))
                       flatten-maps
                       (remove #{'&})
                       (seq->let-form sub-args))]
     (cond->> body
              '->> (concat bindings)
              '->> list
              '->> (concat `(fn ~args))
              def? list
              def? (concat `(def ~n))))))

(defmacro fc
  ([f opts]
   (->component nil f (merge opts {:def? false})))
  ([f] `(fc ~f {})))

(defmacro defc
  ([n f opts]
   (->component n f (merge opts {:def? true})))
  ([n f]
   `(defc ~n ~f {})))

(defmacro defnc
  [n opts args & body]
  (if (vector? opts)
    (let [body (into [args] body)
          args opts]
      `(defnc ~n {} ~args ~@body))
    (->component n `(fn ~args ~@body) (merge opts {:def? true}))))