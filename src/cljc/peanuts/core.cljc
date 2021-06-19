(ns peanuts.core
  (:require
    [clojure.walk :as walk]
    [clojure.set :as cljset]))

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
         (walk/prewalk (fn [node]
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
         (walk/prewalk (fn [node]
                         (cond
                           (binding-vector? node) (filterv #(symbol-in? key-set %) node)
                           (map? node) (filter-symbol-keys key-set (dissoc node :or))
                           (not (symbol-in? key-set node)) nil
                           :else node)))
         (filterv not-empty-vals)
         (remove #{'&}))
    data))

(defn get-associative-destructuring-vector [node]
  (and (or (map? node) nil)
       (select-keys node #{:keys :strs :syms})))

(defn- flatten-maps [args]
  (->> args
       (walk/prewalk (fn [node]
                       (let [assoc-dest-vec (get-associative-destructuring-vector node)]
                         (cond
                           (not-empty assoc-dest-vec) (vec (vals assoc-dest-vec))
                           (map? node) (vec (keys node))
                           :else node))))
       flatten
       distinct))

(defn- subscribe-form [binding-vec default]
  `(~'if-let [~'sub (re-frame.core/subscribe ~binding-vec)]
     ~'(deref sub)
     ~default))

(defn- cond-form [binding binding-args]
  (let [binding-vec (into [binding] binding-args)]
    `(~'cond
       (~'let [~'{:keys [exempt redlist]} (~'meta ~binding)] ~'(or exempt redlist)) ~binding
       (~'keyword? ~binding) ~(subscribe-form binding-vec binding)
       (~'and (~'vector? ~binding) (~'keyword? (~'first ~binding))) ~(subscribe-form binding binding)
       (~'or (~'-> ~binding ~'meta :sub-fn) (~'and (~'fn? ~binding) ~binding-args)) ~(seq binding-vec)
       :else ~binding)))

(defn- seq->let-form [args seq*]
  (->> seq*
       (reduce (fn [c b]
                 (-> c
                     (conj b)
                     (conj (cond-form b (get args b)))))
               [])
       (conj '(let))
       reverse))

(defn- quote-symbols [coll]
  (walk/postwalk (fn [v] (if (symbol? v) (list 'quote v) v)) coll))

(defn- redlist-meta? [binding]
  (let [{:keys [exempt redlist]} (meta binding)]
    (or exempt redlist)))

(defn- peanut
  [n f {:keys [exempt greenlist redlist only def? sub-args] :as meta-map}]
  (let [[_ args & body] f
        bindings (->> args
                      (remove-deep (cljset/union (set exempt) (set redlist)))
                      vec
                      (filter-deep (cljset/union (set only) (set greenlist)))
                      flatten-maps
                      (remove (some-fn #{'&} redlist-meta?))
                      (seq->let-form sub-args))
        symbol-quoted-meta-map (quote-symbols meta-map)]
    (cond->> body
             '->> (concat bindings)
             '->> list
             '->> (concat `(~'fn ~args))
             def? list
             def? (concat `(def ~(->> n
                                      meta
                                      (merge symbol-quoted-meta-map)
                                      (with-meta n)))))))
(defmacro fc
  ([f opts]
   (peanut nil f (merge opts {:def? false})))
  ([f] `(fc ~f {})))

(defmacro defc
  ([n f opts]
   (peanut n f (merge opts {:def? true})))
  ([n f]
   `(defc ~n ~f {})))

(defn- merge-meta-maps [meta-map1 [meta-map2 :as _fnbody] & other-maps]
  (cond-> (apply merge meta-map1 other-maps)
          (map? meta-map2) (merge meta-map2)))

(defmacro defnc
  "Takes similar arguments to defn and returns a similar result.
   The returned function body will be wrapped in a let-block which will
   conditionally rebind the function args to values of re-frame subscriptions."
  [n & [doc-str meta-map & [args & body :as args&body]]]
  (cond
    ;; no doc-str or metadata map
    (vector? doc-str) (let [args* doc-str
                            body* (into [meta-map] args&body)]
                        `(defnc ~n nil {} ~args* ~@body*))
    ;; metadata map, but no doc-str
    (map? doc-str) (let [meta-map* doc-str
                         args* meta-map
                         body* args&body]
                     `(defnc ~n nil ~meta-map* ~args* ~@body*))
    ;; doc-str, but no metadata map
    (vector? meta-map) (let [args* meta-map
                             body* args&body]
                         `(defnc ~n ~doc-str {} ~args* ~@body*))
    :else (peanut
            n
            `(fn ~args ~@body)
            (merge-meta-maps
              meta-map
              body
              {:def? true}
              (if doc-str {:doc doc-str})))))

(defmacro fnc
  "Returns an fn form.
   The returned function body will be wrapped in a let-block which will
   conditionally rebind the function args to values of re-frame subscriptions."
  [& [opts args & body]]
  (if (vector? opts)
    (let [body* (into [args] body)
          args* opts]
      `(fnc {} ~args* ~@body*))
    (peanut nil `(fn ~args ~@body) (merge-meta-maps opts body {:def? false}))))