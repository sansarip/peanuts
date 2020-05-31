(ns peanuts.core
  (:require [clojure.walk :as w]))

(defn- not-empty-coll [thing]
  (if (coll? thing) (not-empty thing) thing))

(defn- not-empty-vals [thing]
  (if (map? thing)
    (some #(not-empty-coll (second %)) thing)
    (not-empty-coll thing)))

(defn- binding-vector? [thing]
  (and (vector? thing) (-> thing first symbol?)))

(defn- remove-deep [key-set data]
  (->> data
       (w/prewalk (fn [node]
                    (cond
                      (binding-vector? node) (vec (remove key-set node))
                      (map? node) (apply dissoc node key-set)
                      :else node)))
       (filterv not-empty-vals)
       (remove #{'&})))

(defn- flatten-maps [args]
  (->> args
       (w/prewalk (fn [node]
                    (cond
                      (and (map? node) (:keys node)) (:keys node)
                      (map? node) (vec (keys node))
                      :else node)))
       flatten
       dedupe))

(defn- make-cond-form [[k :as b]]
  `(cond
     (-> ~k meta :pass) ~k
     (keyword? ~k) (re-frame.core/subscribe ~b)
     :else ~k))

(defn- seq->let-form [args seq*]
  (->> seq*
       (reduce (fn [c b]
                 (-> c
                     (conj b)
                     (conj (make-cond-form (into [b] (get args b))))))
               [])
       (conj '(let))
       reverse))

(defn- ->component
  ([n f {:keys [ignore def? sub-args]}]
   (let [[_ args & body] f
         bindings (->> args
                       (remove-deep (set ignore))
                       flatten-maps
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
