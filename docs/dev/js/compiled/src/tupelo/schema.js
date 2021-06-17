// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('tupelo.schema');
goog.require('cljs.core');
goog.require('schema.core');
tupelo.schema.Map = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
tupelo.schema.KeyMap = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
tupelo.schema.MapEntry = cljs.core.MapEntry;
tupelo.schema.TagVal = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
/**
 * Either a Clojure hash-set or a java.util.HashSet
 */
tupelo.schema.Set = cljs.core.PersistentHashSet.createAsIfByAssoc([schema.core.Any]);
/**
 * An ordered sequence of items of indeterminate length (synonymous for List).
 */
tupelo.schema.Vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
/**
 * An ordered sequence of items of indeterminate length (synonymous for Vec).
 */
tupelo.schema.List = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
/**
 * An ordered sequence of vectors.
 */
tupelo.schema.Array = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.schema.Vec], null);
tupelo.schema.Single = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"x1")], null);
tupelo.schema.Pair = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"x1"),schema.core.one.call(null,schema.core.Any,"x2")], null);
tupelo.schema.Triple = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"x1"),schema.core.one.call(null,schema.core.Any,"x2"),schema.core.one.call(null,schema.core.Any,"x3")], null);
tupelo.schema.Quad = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"x1"),schema.core.one.call(null,schema.core.Any,"x2"),schema.core.one.call(null,schema.core.Any,"x3"),schema.core.one.call(null,schema.core.Any,"x4")], null);
/**
 * An Enlive tree node
 */
tupelo.schema.EnliveNode = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),schema.core.Any,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),tupelo.schema.KeyMap,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null)], null);
tupelo.schema.Quarter = schema.core.enum$.call(null,new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Q4","Q4",77117001));
/**
 * A specific type of sequential collection, typically a vector of constant length where each
 * element has a pre-defined interpretation.
 */
tupelo.schema.Tuple = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
/**
 * A sequence of tuples (typically a vector of vectors)
 */
tupelo.schema.TupleList = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.schema.Tuple], null);
/**
 * The result of any Datomic using the Entity API is logically a hash-set of tuples (vectors).
 * The contents and order of each tuple is determined by the find clause:
 * 
 *      ----- query -----                         ----- tuples -----
 *    (d/q '{:find [?e ?name ?age] ...)     ->    [?e ?name ?age]
 * 
 */
tupelo.schema.TupleSet = cljs.core.PersistentHashSet.createAsIfByAssoc([tupelo.schema.Tuple]);
tupelo.schema.MapList = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.schema.Map], null);
tupelo.schema.TupleMap = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.schema.Map], null);
tupelo.schema.TupleMaps = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.schema.TupleMap], null);
/**
 * Any collection type of Vec (& List), Map, or Set
 */
tupelo.schema.Collection = schema.core.cond_pre.call(null,tupelo.schema.Vec,tupelo.schema.Map,tupelo.schema.Set);
tupelo.schema.Fn = schema.core.make_fn_schema.call(null,schema.core.Any,schema.core.Any);
/**
 * Plumatic Schema type name for interceptor type used by `walk-entity`.
 */
tupelo.schema.Interceptor = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.required_key.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624)),schema.core.Any,schema.core.required_key.call(null,new cljs.core.Keyword(null,"leave","leave",1022579443)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Keyword]);
var ret__4878__auto___35083 = (function (){
/**
 * Run forms with Plumatic Schema enabled
 */
tupelo.schema.with_validation_enabled = (function tupelo$schema$with_validation_enabled(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35084 = arguments.length;
var i__4830__auto___35085 = (0);
while(true){
if((i__4830__auto___35085 < len__4829__auto___35084)){
args__4835__auto__.push((arguments[i__4830__auto___35085]));

var G__35086 = (i__4830__auto___35085 + (1));
i__4830__auto___35085 = G__35086;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.schema.with_validation_enabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.schema.with_validation_enabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"orig-validation-state__35078__auto__","orig-validation-state__35078__auto__",420579973,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("schema.core","fn-validation?","schema.core/fn-validation?",12702655,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("schema.core","set-fn-validation!","schema.core/set-fn-validation!",848278660,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__35079__auto__","result__35079__auto__",485913975,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("schema.core","set-fn-validation!","schema.core/set-fn-validation!",848278660,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"orig-validation-state__35078__auto__","orig-validation-state__35078__auto__",420579973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__35079__auto__","result__35079__auto__",485913975,null),null,(1),null))))),null,(1),null)))));
}));

(tupelo.schema.with_validation_enabled.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.schema.with_validation_enabled.cljs$lang$applyTo = (function (seq35080){
var G__35081 = cljs.core.first.call(null,seq35080);
var seq35080__$1 = cljs.core.next.call(null,seq35080);
var G__35082 = cljs.core.first.call(null,seq35080__$1);
var seq35080__$2 = cljs.core.next.call(null,seq35080__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35081,G__35082,seq35080__$2);
}));

return null;
})()
;
(tupelo.schema.with_validation_enabled.cljs$lang$macro = true);

var ret__4878__auto___35092 = (function (){
/**
 * Run forms with Plumatic Schema disabled
 */
tupelo.schema.with_validation_disabled = (function tupelo$schema$with_validation_disabled(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35093 = arguments.length;
var i__4830__auto___35094 = (0);
while(true){
if((i__4830__auto___35094 < len__4829__auto___35093)){
args__4835__auto__.push((arguments[i__4830__auto___35094]));

var G__35095 = (i__4830__auto___35094 + (1));
i__4830__auto___35094 = G__35095;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.schema.with_validation_disabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.schema.with_validation_disabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"orig-validation-state__35087__auto__","orig-validation-state__35087__auto__",-2040542999,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("schema.core","fn-validation?","schema.core/fn-validation?",12702655,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("schema.core","set-fn-validation!","schema.core/set-fn-validation!",848278660,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__35088__auto__","result__35088__auto__",1216550599,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("schema.core","set-fn-validation!","schema.core/set-fn-validation!",848278660,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"orig-validation-state__35087__auto__","orig-validation-state__35087__auto__",-2040542999,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__35088__auto__","result__35088__auto__",1216550599,null),null,(1),null))))),null,(1),null)))));
}));

(tupelo.schema.with_validation_disabled.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.schema.with_validation_disabled.cljs$lang$applyTo = (function (seq35089){
var G__35090 = cljs.core.first.call(null,seq35089);
var seq35089__$1 = cljs.core.next.call(null,seq35089);
var G__35091 = cljs.core.first.call(null,seq35089__$1);
var seq35089__$2 = cljs.core.next.call(null,seq35089__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35090,G__35091,seq35089__$2);
}));

return null;
})()
;
(tupelo.schema.with_validation_disabled.cljs$lang$macro = true);

tupelo.schema.HttpRequest = cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"session","session",1008279103)),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"query-string","query-string",-1018845061)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634)),new cljs.core.Keyword(null,"params","params",710516235),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"flash","flash",934660619)),new cljs.core.Keyword(null,"content-length","content-length",441319507),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"route-handler","route-handler",267253263)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516)),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"route-params","route-params",2111411055)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467))],[schema.core.Any,schema.core.Any,schema.core.Str,schema.core.Str,schema.core.Any,null,schema.core.Any,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,schema.core.Str]),schema.core.Int,null,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Str,schema.core.Str,schema.core.Any,schema.core.Keyword,schema.core.Keyword,schema.core.Any,schema.core.Any,schema.core.Any]);

//# sourceMappingURL=schema.js.map
