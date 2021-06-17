// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('tupelo.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data.avl');
goog.require('cljs.pprint');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('clojure.walk');
goog.require('schema.core');
goog.require('tupelo.lexical');
goog.require('tupelo.schema');
var ret__4878__auto___35291 = (function (){
/**
 * A cross-platform variant of try-catch that catches all exceptions.
 * Does not (yet) support finally, and does not need or want an exception class.
 */
tupelo.core.try_catchall = (function tupelo$core$try_catchall(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35292 = arguments.length;
var i__4830__auto___35293 = (0);
while(true){
if((i__4830__auto___35293 < len__4829__auto___35292)){
args__4835__auto__.push((arguments[i__4830__auto___35293]));

var G__35294 = (i__4830__auto___35293 + (1));
i__4830__auto___35293 = G__35294;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.try_catchall.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.try_catchall.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var try_body = cljs.core.butlast.call(null,body);
var vec__35288 = cljs.core.last.call(null,body);
var seq__35289 = cljs.core.seq.call(null,vec__35288);
var first__35290 = cljs.core.first.call(null,seq__35289);
var seq__35289__$1 = cljs.core.next.call(null,seq__35289);
var catch_op = first__35290;
var first__35290__$1 = cljs.core.first.call(null,seq__35289__$1);
var seq__35289__$2 = cljs.core.next.call(null,seq__35289__$1);
var ex_symbol = first__35290__$1;
var catch_body = seq__35289__$2;
var catch_form = vec__35288;
if(cljs.core._EQ_.call(null,catch_op,new cljs.core.Symbol(null,"catch","catch",-1616370245,null))){
} else {
throw (new Error("Assert failed: (= catch-op (quote catch))"));
}

if((ex_symbol instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ex-symbol)"));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core.impl","if-cljs","tupelo.core.impl/if-cljs",665227380,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),try_body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Object","js/Object",61215323,null),null,(1),null)),(new cljs.core.List(null,ex_symbol,null,(1),null)),catch_body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),try_body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","Throwable","tupelo.core/Throwable",1309896121,null),null,(1),null)),(new cljs.core.List(null,ex_symbol,null,(1),null)),catch_body))),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.try_catchall.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.try_catchall.cljs$lang$applyTo = (function (seq35285){
var G__35286 = cljs.core.first.call(null,seq35285);
var seq35285__$1 = cljs.core.next.call(null,seq35285);
var G__35287 = cljs.core.first.call(null,seq35285__$1);
var seq35285__$2 = cljs.core.next.call(null,seq35285__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35286,G__35287,seq35285__$2);
}));

return null;
})()
;
(tupelo.core.try_catchall.cljs$lang$macro = true);

var ret__4878__auto___35295 = /**
 * Returns the type/class name of a value as a string.  Works for both CLJ and CLJS.
 */
tupelo.core.type_name_str = (function tupelo$core$type_name_str(_AMPERSAND_form,_AMPERSAND_env,arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core.impl","if-cljs","tupelo.core.impl/if-cljs",665227380,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type->str","cljs.core/type->str",-46959618,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,arg,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getName",".getName",393384092,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","class","cljs.core/class",-1065868260,null),null,(1),null)),(new cljs.core.List(null,arg,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(tupelo.core.type_name_str.cljs$lang$macro = true);

var ufv___35302 = schema.utils.use_fn_validation;
var output_schema35296_35303 = schema.core.Bool;
var input_schema35297_35304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker35298_35305 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35297_35304);
}),null));
var output_checker35299_35306 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35296_35303);
}),null));
var ret__26117__auto___35307 = /**
 * Inputs: [a :- s/Str b :- s/Str]
 *   Returns: s/Bool
 * 
 *   Returns true if a pair of strings are in increasing lexicographic order.
 */
tupelo.core.string_increasing_QMARK_ = (function tupelo$core$string_increasing_QMARK_(G__35300,G__35301){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35302);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35300,G__35301], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing?","string-increasing?",1502805234,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order."], null)),input_schema35297_35304,cljs.core.deref.call(null,input_checker35298_35305),args__24531__auto___35308);
} else {
var temp__5720__auto___35309 = cljs.core.deref.call(null,input_checker35298_35305).call(null,args__24531__auto___35308);
if(cljs.core.truth_(temp__5720__auto___35309)){
var error__24532__auto___35310 = temp__5720__auto___35309;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing?","string-increasing?",1502805234,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order."], null)),cljs.core.pr_str.call(null,error__24532__auto___35310)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35297_35304,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35308,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35310], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var a = G__35300;
var b = G__35301;
while(true){
return (cljs.core.compare.call(null,a,b) < (0));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing?","string-increasing?",1502805234,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order."], null)),output_schema35296_35303,cljs.core.deref.call(null,output_checker35299_35306),o__24533__auto__);
} else {
var temp__5720__auto___35311 = cljs.core.deref.call(null,output_checker35299_35306).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35311)){
var error__24532__auto___35312 = temp__5720__auto___35311;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing?","string-increasing?",1502805234,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order."], null)),cljs.core.pr_str.call(null,error__24532__auto___35312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35296_35303,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35312], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.string_increasing_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35296_35303,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35297_35304], null)));

var ufv___35319 = schema.utils.use_fn_validation;
var output_schema35313_35320 = schema.core.Bool;
var input_schema35314_35321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker35315_35322 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35314_35321);
}),null));
var output_checker35316_35323 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35313_35320);
}),null));
var ret__26117__auto___35324 = /**
 * Inputs: [a :- s/Str b :- s/Str]
 *   Returns: s/Bool
 * 
 *   Returns true if a pair of strings are in increasing lexicographic order, or equal.
 */
tupelo.core.string_increasing_or_equal_QMARK_ = (function tupelo$core$string_increasing_or_equal_QMARK_(G__35317,G__35318){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35319);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35317,G__35318], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing-or-equal?","string-increasing-or-equal?",716692909,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order, or equal."], null)),input_schema35314_35321,cljs.core.deref.call(null,input_checker35315_35322),args__24531__auto___35325);
} else {
var temp__5720__auto___35326 = cljs.core.deref.call(null,input_checker35315_35322).call(null,args__24531__auto___35325);
if(cljs.core.truth_(temp__5720__auto___35326)){
var error__24532__auto___35327 = temp__5720__auto___35326;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing-or-equal?","string-increasing-or-equal?",716692909,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order, or equal."], null)),cljs.core.pr_str.call(null,error__24532__auto___35327)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35314_35321,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35325,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35327], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var a = G__35317;
var b = G__35318;
while(true){
return ((cljs.core._EQ_.call(null,a,b)) || (tupelo.core.string_increasing_QMARK_.call(null,a,b)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing-or-equal?","string-increasing-or-equal?",716692909,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order, or equal."], null)),output_schema35313_35320,cljs.core.deref.call(null,output_checker35316_35323),o__24533__auto__);
} else {
var temp__5720__auto___35328 = cljs.core.deref.call(null,output_checker35316_35323).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35328)){
var error__24532__auto___35329 = temp__5720__auto___35328;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"string-increasing-or-equal?","string-increasing-or-equal?",716692909,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if a pair of strings are in increasing lexicographic order, or equal."], null)),cljs.core.pr_str.call(null,error__24532__auto___35329)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35313_35320,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35329], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.string_increasing_or_equal_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35313_35320,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35314_35321], null)));
























/**
 * Returns a function that always returns the specified value, and accepts any number of args
 *   (synonym for `clojure.core/constantly`).
 */
tupelo.core.const_fn = (function tupelo$core$const_fn(val){
return cljs.core.constantly.call(null,val);
});
/**
 * A function that accepts any number of args, does nothing, and returns `nil`.
 */
tupelo.core.noop = cljs.core.constantly.call(null,null);
/**
 * Returns true if arg is logical true (neither nil nor false); otherwise returns false.
 */
tupelo.core.truthy_QMARK_ = (function tupelo$core$truthy_QMARK_(arg){
if(cljs.core.truth_(arg)){
return true;
} else {
return false;
}
});
/**
 * Returns true if arg is logical false (either nil or false); otherwise returns false. Equivalent
 * to (not (truthy? arg)).
 */
tupelo.core.falsey_QMARK_ = (function tupelo$core$falsey_QMARK_(arg){
if(cljs.core.truth_(arg)){
return false;
} else {
return true;
}
});
/**
 * Returns true if arg is a list or a seq, else false.
 */
tupelo.core.listy_QMARK_ = (function tupelo$core$listy_QMARK_(arg){
return ((cljs.core.list_QMARK_.call(null,arg)) || (cljs.core.seq_QMARK_.call(null,arg)));
});
/**
 * A function that accepts any number of args, does nothing, and returns `true`.
 */
tupelo.core.__GT_true = (function tupelo$core$__GT_true(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35340 = arguments.length;
var i__4830__auto___35341 = (0);
while(true){
if((i__4830__auto___35341 < len__4829__auto___35340)){
args__4835__auto__.push((arguments[i__4830__auto___35341]));

var G__35342 = (i__4830__auto___35341 + (1));
i__4830__auto___35341 = G__35342;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.__GT_true.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.__GT_true.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return true;
}));

(tupelo.core.__GT_true.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.__GT_true.cljs$lang$applyTo = (function (seq35339){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35339));
}));

/**
 * A function that accepts any number of args, does nothing, and returns `false`.
 */
tupelo.core.__GT_false = (function tupelo$core$__GT_false(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35344 = arguments.length;
var i__4830__auto___35345 = (0);
while(true){
if((i__4830__auto___35345 < len__4829__auto___35344)){
args__4835__auto__.push((arguments[i__4830__auto___35345]));

var G__35346 = (i__4830__auto___35345 + (1));
i__4830__auto___35345 = G__35346;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.__GT_false.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.__GT_false.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return false;
}));

(tupelo.core.__GT_false.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.__GT_false.cljs$lang$applyTo = (function (seq35343){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35343));
}));

/**
 * A function that accepts any number of args, does nothing, and returns `nil`.
 */
tupelo.core.__GT_nil = (function tupelo$core$__GT_nil(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35348 = arguments.length;
var i__4830__auto___35349 = (0);
while(true){
if((i__4830__auto___35349 < len__4829__auto___35348)){
args__4835__auto__.push((arguments[i__4830__auto___35349]));

var G__35350 = (i__4830__auto___35349 + (1));
i__4830__auto___35349 = G__35350;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.__GT_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.__GT_nil.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return null;
}));

(tupelo.core.__GT_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.__GT_nil.cljs$lang$applyTo = (function (seq35347){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35347));
}));

/**
 * A function that accepts any number of args, does nothing, and returns the number zero.
 */
tupelo.core.__GT_zero = (function tupelo$core$__GT_zero(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35352 = arguments.length;
var i__4830__auto___35353 = (0);
while(true){
if((i__4830__auto___35353 < len__4829__auto___35352)){
args__4835__auto__.push((arguments[i__4830__auto___35353]));

var G__35354 = (i__4830__auto___35353 + (1));
i__4830__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.__GT_zero.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.__GT_zero.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (0);
}));

(tupelo.core.__GT_zero.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.__GT_zero.cljs$lang$applyTo = (function (seq35351){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35351));
}));

/**
 * A function that accepts any number of args, does nothing, and returns the number one.
 */
tupelo.core.__GT_one = (function tupelo$core$__GT_one(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35356 = arguments.length;
var i__4830__auto___35357 = (0);
while(true){
if((i__4830__auto___35357 < len__4829__auto___35356)){
args__4835__auto__.push((arguments[i__4830__auto___35357]));

var G__35358 = (i__4830__auto___35357 + (1));
i__4830__auto___35357 = G__35358;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.__GT_one.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.__GT_one.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (1);
}));

(tupelo.core.__GT_one.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.__GT_one.cljs$lang$applyTo = (function (seq35355){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35355));
}));

/**
 * Abbreviated name for `newline`.  Accepts varargs to be printed 1 per line after initial newline. 
 */
tupelo.core.nl = (function tupelo$core$nl(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35364 = arguments.length;
var i__4830__auto___35365 = (0);
while(true){
if((i__4830__auto___35365 < len__4829__auto___35364)){
args__4835__auto__.push((arguments[i__4830__auto___35365]));

var G__35366 = (i__4830__auto___35365 + (1));
i__4830__auto___35365 = G__35366;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.nl.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.nl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.newline.call(null);

var seq__35360 = cljs.core.seq.call(null,args);
var chunk__35361 = null;
var count__35362 = (0);
var i__35363 = (0);
while(true){
if((i__35363 < count__35362)){
var arg = cljs.core._nth.call(null,chunk__35361,i__35363);
cljs.core.println.call(null,arg);


var G__35367 = seq__35360;
var G__35368 = chunk__35361;
var G__35369 = count__35362;
var G__35370 = (i__35363 + (1));
seq__35360 = G__35367;
chunk__35361 = G__35368;
count__35362 = G__35369;
i__35363 = G__35370;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35360);
if(temp__5720__auto__){
var seq__35360__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35360__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__35360__$1);
var G__35371 = cljs.core.chunk_rest.call(null,seq__35360__$1);
var G__35372 = c__4649__auto__;
var G__35373 = cljs.core.count.call(null,c__4649__auto__);
var G__35374 = (0);
seq__35360 = G__35371;
chunk__35361 = G__35372;
count__35362 = G__35373;
i__35363 = G__35374;
continue;
} else {
var arg = cljs.core.first.call(null,seq__35360__$1);
cljs.core.println.call(null,arg);


var G__35375 = cljs.core.next.call(null,seq__35360__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__35360 = G__35375;
chunk__35361 = G__35376;
count__35362 = G__35377;
i__35363 = G__35378;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tupelo.core.nl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.nl.cljs$lang$applyTo = (function (seq35359){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35359));
}));

var ufv___35384 = schema.utils.use_fn_validation;
var output_schema35379_35385 = schema.core.Bool;
var input_schema35380_35386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35381_35387 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35380_35386);
}),null));
var output_checker35382_35388 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35379_35385);
}),null));
var ret__26117__auto___35389 = /**
 * Inputs: [arg]
 *   Returns: s/Bool
 * 
 *   Returns true iff x is an integer and is positive
 */
tupelo.core.int_pos_QMARK_ = (function tupelo$core$int_pos_QMARK_(G__35383){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35384);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35383], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"int-pos?","int-pos?",1464713329,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is positive"], null)),input_schema35380_35386,cljs.core.deref.call(null,input_checker35381_35387),args__24531__auto___35390);
} else {
var temp__5720__auto___35391 = cljs.core.deref.call(null,input_checker35381_35387).call(null,args__24531__auto___35390);
if(cljs.core.truth_(temp__5720__auto___35391)){
var error__24532__auto___35392 = temp__5720__auto___35391;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-pos?","int-pos?",1464713329,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is positive"], null)),cljs.core.pr_str.call(null,error__24532__auto___35392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35380_35386,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35390,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35392], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35383;
while(true){
return ((cljs.core.int_QMARK_.call(null,arg)) && ((arg > (0))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"int-pos?","int-pos?",1464713329,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is positive"], null)),output_schema35379_35385,cljs.core.deref.call(null,output_checker35382_35388),o__24533__auto__);
} else {
var temp__5720__auto___35393 = cljs.core.deref.call(null,output_checker35382_35388).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35393)){
var error__24532__auto___35394 = temp__5720__auto___35393;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-pos?","int-pos?",1464713329,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is positive"], null)),cljs.core.pr_str.call(null,error__24532__auto___35394)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35379_35385,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35394], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.int_pos_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35379_35385,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35380_35386], null)));

var ufv___35400 = schema.utils.use_fn_validation;
var output_schema35395_35401 = schema.core.Bool;
var input_schema35396_35402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35397_35403 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35396_35402);
}),null));
var output_checker35398_35404 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35395_35401);
}),null));
var ret__26117__auto___35405 = /**
 * Inputs: [arg]
 *   Returns: s/Bool
 * 
 *   Returns true iff x is an integer and is negative
 */
tupelo.core.int_neg_QMARK_ = (function tupelo$core$int_neg_QMARK_(G__35399){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35400);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35399], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"int-neg?","int-neg?",-1206410657,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is negative"], null)),input_schema35396_35402,cljs.core.deref.call(null,input_checker35397_35403),args__24531__auto___35406);
} else {
var temp__5720__auto___35407 = cljs.core.deref.call(null,input_checker35397_35403).call(null,args__24531__auto___35406);
if(cljs.core.truth_(temp__5720__auto___35407)){
var error__24532__auto___35408 = temp__5720__auto___35407;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-neg?","int-neg?",-1206410657,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is negative"], null)),cljs.core.pr_str.call(null,error__24532__auto___35408)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35396_35402,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35406,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35408], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35399;
while(true){
return ((cljs.core.int_QMARK_.call(null,arg)) && ((arg < (0))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"int-neg?","int-neg?",-1206410657,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is negative"], null)),output_schema35395_35401,cljs.core.deref.call(null,output_checker35398_35404),o__24533__auto__);
} else {
var temp__5720__auto___35409 = cljs.core.deref.call(null,output_checker35398_35404).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35409)){
var error__24532__auto___35410 = temp__5720__auto___35409;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-neg?","int-neg?",-1206410657,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is negative"], null)),cljs.core.pr_str.call(null,error__24532__auto___35410)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35395_35401,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35410], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.int_neg_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35395_35401,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35396_35402], null)));

var ufv___35416 = schema.utils.use_fn_validation;
var output_schema35411_35417 = schema.core.Bool;
var input_schema35412_35418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35413_35419 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35412_35418);
}),null));
var output_checker35414_35420 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35411_35417);
}),null));
var ret__26117__auto___35421 = /**
 * Inputs: [arg]
 *   Returns: s/Bool
 * 
 *   Returns true iff x is an integer and is not negative
 */
tupelo.core.int_nonneg_QMARK_ = (function tupelo$core$int_nonneg_QMARK_(G__35415){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35416);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35415], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonneg?","int-nonneg?",1089999164,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not negative"], null)),input_schema35412_35418,cljs.core.deref.call(null,input_checker35413_35419),args__24531__auto___35422);
} else {
var temp__5720__auto___35423 = cljs.core.deref.call(null,input_checker35413_35419).call(null,args__24531__auto___35422);
if(cljs.core.truth_(temp__5720__auto___35423)){
var error__24532__auto___35424 = temp__5720__auto___35423;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonneg?","int-nonneg?",1089999164,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not negative"], null)),cljs.core.pr_str.call(null,error__24532__auto___35424)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35412_35418,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35422,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35424], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35415;
while(true){
return ((cljs.core.int_QMARK_.call(null,arg)) && ((!((arg < (0))))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonneg?","int-nonneg?",1089999164,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not negative"], null)),output_schema35411_35417,cljs.core.deref.call(null,output_checker35414_35420),o__24533__auto__);
} else {
var temp__5720__auto___35425 = cljs.core.deref.call(null,output_checker35414_35420).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35425)){
var error__24532__auto___35426 = temp__5720__auto___35425;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonneg?","int-nonneg?",1089999164,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not negative"], null)),cljs.core.pr_str.call(null,error__24532__auto___35426)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35411_35417,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35426], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.int_nonneg_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35411_35417,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35412_35418], null)));

var ufv___35432 = schema.utils.use_fn_validation;
var output_schema35427_35433 = schema.core.Bool;
var input_schema35428_35434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35429_35435 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35428_35434);
}),null));
var output_checker35430_35436 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35427_35433);
}),null));
var ret__26117__auto___35437 = /**
 * Inputs: [arg]
 *   Returns: s/Bool
 * 
 *   Returns true iff x is an integer and is not positive
 */
tupelo.core.int_nonpos_QMARK_ = (function tupelo$core$int_nonpos_QMARK_(G__35431){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35432);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35431], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonpos?","int-nonpos?",-193582636,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not positive"], null)),input_schema35428_35434,cljs.core.deref.call(null,input_checker35429_35435),args__24531__auto___35438);
} else {
var temp__5720__auto___35439 = cljs.core.deref.call(null,input_checker35429_35435).call(null,args__24531__auto___35438);
if(cljs.core.truth_(temp__5720__auto___35439)){
var error__24532__auto___35440 = temp__5720__auto___35439;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonpos?","int-nonpos?",-193582636,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not positive"], null)),cljs.core.pr_str.call(null,error__24532__auto___35440)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35428_35434,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35438,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35440], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35431;
while(true){
return ((cljs.core.int_QMARK_.call(null,arg)) && ((!((arg > (0))))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonpos?","int-nonpos?",-193582636,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not positive"], null)),output_schema35427_35433,cljs.core.deref.call(null,output_checker35430_35436),o__24533__auto__);
} else {
var temp__5720__auto___35441 = cljs.core.deref.call(null,output_checker35430_35436).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35441)){
var error__24532__auto___35442 = temp__5720__auto___35441;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"int-nonpos?","int-nonpos?",-193582636,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is an integer and is not positive"], null)),cljs.core.pr_str.call(null,error__24532__auto___35442)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35427_35433,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35442], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.int_nonpos_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35427_35433,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35428_35434], null)));

var ufv___35448 = schema.utils.use_fn_validation;
var output_schema35443_35449 = schema.core.Bool;
var input_schema35444_35450 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35445_35451 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35444_35450);
}),null));
var output_checker35446_35452 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35443_35449);
}),null));
var ret__26117__auto___35453 = /**
 * Inputs: [arg]
 *   Returns: s/Bool
 * 
 *   Returns true iff x is not negative
 */
tupelo.core.nonneg_QMARK_ = (function tupelo$core$nonneg_QMARK_(G__35447){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35448);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35447], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"nonneg?","nonneg?",-1057173494,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not negative"], null)),input_schema35444_35450,cljs.core.deref.call(null,input_checker35445_35451),args__24531__auto___35454);
} else {
var temp__5720__auto___35455 = cljs.core.deref.call(null,input_checker35445_35451).call(null,args__24531__auto___35454);
if(cljs.core.truth_(temp__5720__auto___35455)){
var error__24532__auto___35456 = temp__5720__auto___35455;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"nonneg?","nonneg?",-1057173494,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not negative"], null)),cljs.core.pr_str.call(null,error__24532__auto___35456)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35444_35450,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35454,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35456], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35447;
while(true){
return (!((arg < (0))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"nonneg?","nonneg?",-1057173494,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not negative"], null)),output_schema35443_35449,cljs.core.deref.call(null,output_checker35446_35452),o__24533__auto__);
} else {
var temp__5720__auto___35457 = cljs.core.deref.call(null,output_checker35446_35452).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35457)){
var error__24532__auto___35458 = temp__5720__auto___35457;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"nonneg?","nonneg?",-1057173494,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not negative"], null)),cljs.core.pr_str.call(null,error__24532__auto___35458)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35443_35449,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35458], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.nonneg_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35443_35449,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35444_35450], null)));

var ufv___35464 = schema.utils.use_fn_validation;
var output_schema35459_35465 = schema.core.Bool;
var input_schema35460_35466 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35461_35467 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35460_35466);
}),null));
var output_checker35462_35468 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35459_35465);
}),null));
var ret__26117__auto___35469 = /**
 * Inputs: [arg]
 *   Returns: s/Bool
 * 
 *   Returns true iff x is not positive
 */
tupelo.core.nonpos_QMARK_ = (function tupelo$core$nonpos_QMARK_(G__35463){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35464);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35463], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"nonpos?","nonpos?",374926430,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not positive"], null)),input_schema35460_35466,cljs.core.deref.call(null,input_checker35461_35467),args__24531__auto___35470);
} else {
var temp__5720__auto___35471 = cljs.core.deref.call(null,input_checker35461_35467).call(null,args__24531__auto___35470);
if(cljs.core.truth_(temp__5720__auto___35471)){
var error__24532__auto___35472 = temp__5720__auto___35471;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"nonpos?","nonpos?",374926430,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not positive"], null)),cljs.core.pr_str.call(null,error__24532__auto___35472)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35460_35466,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35470,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35472], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35463;
while(true){
return (!((arg > (0))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"nonpos?","nonpos?",374926430,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not positive"], null)),output_schema35459_35465,cljs.core.deref.call(null,output_checker35462_35468),o__24533__auto__);
} else {
var temp__5720__auto___35473 = cljs.core.deref.call(null,output_checker35462_35468).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35473)){
var error__24532__auto___35474 = temp__5720__auto___35473;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"nonpos?","nonpos?",374926430,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff x is not positive"], null)),cljs.core.pr_str.call(null,error__24532__auto___35474)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35459_35465,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35474], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.nonpos_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35459_35465,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35460_35466], null)));

var ufv___35480 = schema.utils.use_fn_validation;
var output_schema35475_35481 = schema.core.Symbol;
var input_schema35476_35482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)))], null);
var input_checker35477_35483 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35476_35482);
}),null));
var output_checker35478_35484 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35475_35481);
}),null));
var ret__26117__auto___35485 = /**
 * Inputs: [arg :- s/Keyword]
 *   Returns: s/Symbol
 * 
 *   Converts a keyword to a symbol
 */
tupelo.core.kw__GT_sym = (function tupelo$core$kw__GT_sym(G__35479){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35480);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35479], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"kw->sym","kw->sym",-1366238840,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a symbol"], null)),input_schema35476_35482,cljs.core.deref.call(null,input_checker35477_35483),args__24531__auto___35486);
} else {
var temp__5720__auto___35487 = cljs.core.deref.call(null,input_checker35477_35483).call(null,args__24531__auto___35486);
if(cljs.core.truth_(temp__5720__auto___35487)){
var error__24532__auto___35488 = temp__5720__auto___35487;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"kw->sym","kw->sym",-1366238840,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a symbol"], null)),cljs.core.pr_str.call(null,error__24532__auto___35488)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35476_35482,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35486,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35488], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35479;
while(true){
return cljs.core.symbol.call(null,cljs.core.name.call(null,arg));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"kw->sym","kw->sym",-1366238840,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a symbol"], null)),output_schema35475_35481,cljs.core.deref.call(null,output_checker35478_35484),o__24533__auto__);
} else {
var temp__5720__auto___35489 = cljs.core.deref.call(null,output_checker35478_35484).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35489)){
var error__24532__auto___35490 = temp__5720__auto___35489;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"kw->sym","kw->sym",-1366238840,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a symbol"], null)),cljs.core.pr_str.call(null,error__24532__auto___35490)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35475_35481,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35490], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.kw__GT_sym),schema.core.__GT_FnSchema.call(null,output_schema35475_35481,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35476_35482], null)));

var ufv___35496 = schema.utils.use_fn_validation;
var output_schema35491_35497 = schema.core.Str;
var input_schema35492_35498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)))], null);
var input_checker35493_35499 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35492_35498);
}),null));
var output_checker35494_35500 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35491_35497);
}),null));
var ret__26117__auto___35501 = /**
 * Inputs: [arg :- s/Keyword]
 *   Returns: s/Str
 * 
 *   Converts a keyword to a string
 */
tupelo.core.kw__GT_str = (function tupelo$core$kw__GT_str(G__35495){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35496);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35495], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"kw->str","kw->str",1143035617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a string"], null)),input_schema35492_35498,cljs.core.deref.call(null,input_checker35493_35499),args__24531__auto___35502);
} else {
var temp__5720__auto___35503 = cljs.core.deref.call(null,input_checker35493_35499).call(null,args__24531__auto___35502);
if(cljs.core.truth_(temp__5720__auto___35503)){
var error__24532__auto___35504 = temp__5720__auto___35503;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"kw->str","kw->str",1143035617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a string"], null)),cljs.core.pr_str.call(null,error__24532__auto___35504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35492_35498,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35502,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35504], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35495;
while(true){
return cljs.core.name.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"kw->str","kw->str",1143035617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a string"], null)),output_schema35491_35497,cljs.core.deref.call(null,output_checker35494_35500),o__24533__auto__);
} else {
var temp__5720__auto___35505 = cljs.core.deref.call(null,output_checker35494_35500).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35505)){
var error__24532__auto___35506 = temp__5720__auto___35505;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"kw->str","kw->str",1143035617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a keyword to a string"], null)),cljs.core.pr_str.call(null,error__24532__auto___35506)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35491_35497,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35506], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.kw__GT_str),schema.core.__GT_FnSchema.call(null,output_schema35491_35497,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35492_35498], null)));

var ufv___35512 = schema.utils.use_fn_validation;
var output_schema35507_35513 = schema.core.Str;
var input_schema35508_35514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Symbol,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null)], null)))], null);
var input_checker35509_35515 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35508_35514);
}),null));
var output_checker35510_35516 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35507_35513);
}),null));
var ret__26117__auto___35517 = /**
 * Inputs: [arg :- s/Symbol]
 *   Returns: s/Str
 * 
 *   Converts a symbol to a string
 */
tupelo.core.sym__GT_str = (function tupelo$core$sym__GT_str(G__35511){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35512);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35511], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"sym->str","sym->str",-2001669916,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a string"], null)),input_schema35508_35514,cljs.core.deref.call(null,input_checker35509_35515),args__24531__auto___35518);
} else {
var temp__5720__auto___35519 = cljs.core.deref.call(null,input_checker35509_35515).call(null,args__24531__auto___35518);
if(cljs.core.truth_(temp__5720__auto___35519)){
var error__24532__auto___35520 = temp__5720__auto___35519;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sym->str","sym->str",-2001669916,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a string"], null)),cljs.core.pr_str.call(null,error__24532__auto___35520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35508_35514,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35518,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35520], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35511;
while(true){
return cljs.core.name.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"sym->str","sym->str",-2001669916,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a string"], null)),output_schema35507_35513,cljs.core.deref.call(null,output_checker35510_35516),o__24533__auto__);
} else {
var temp__5720__auto___35521 = cljs.core.deref.call(null,output_checker35510_35516).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35521)){
var error__24532__auto___35522 = temp__5720__auto___35521;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sym->str","sym->str",-2001669916,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a string"], null)),cljs.core.pr_str.call(null,error__24532__auto___35522)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35507_35513,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35522], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.sym__GT_str),schema.core.__GT_FnSchema.call(null,output_schema35507_35513,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35508_35514], null)));

var ufv___35528 = schema.utils.use_fn_validation;
var output_schema35523_35529 = schema.core.Keyword;
var input_schema35524_35530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Symbol,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null)], null)))], null);
var input_checker35525_35531 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35524_35530);
}),null));
var output_checker35526_35532 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35523_35529);
}),null));
var ret__26117__auto___35533 = /**
 * Inputs: [arg :- s/Symbol]
 *   Returns: s/Keyword
 * 
 *   Converts a symbol to a keyword
 */
tupelo.core.sym__GT_kw = (function tupelo$core$sym__GT_kw(G__35527){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35528);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35527], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"sym->kw","sym->kw",1998626073,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a keyword"], null)),input_schema35524_35530,cljs.core.deref.call(null,input_checker35525_35531),args__24531__auto___35534);
} else {
var temp__5720__auto___35535 = cljs.core.deref.call(null,input_checker35525_35531).call(null,args__24531__auto___35534);
if(cljs.core.truth_(temp__5720__auto___35535)){
var error__24532__auto___35536 = temp__5720__auto___35535;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sym->kw","sym->kw",1998626073,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a keyword"], null)),cljs.core.pr_str.call(null,error__24532__auto___35536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35524_35530,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35534,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35536], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35527;
while(true){
return cljs.core.keyword.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"sym->kw","sym->kw",1998626073,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a keyword"], null)),output_schema35523_35529,cljs.core.deref.call(null,output_checker35526_35532),o__24533__auto__);
} else {
var temp__5720__auto___35537 = cljs.core.deref.call(null,output_checker35526_35532).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35537)){
var error__24532__auto___35538 = temp__5720__auto___35537;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sym->kw","sym->kw",1998626073,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a symbol to a keyword"], null)),cljs.core.pr_str.call(null,error__24532__auto___35538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35523_35529,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35538], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.sym__GT_kw),schema.core.__GT_FnSchema.call(null,output_schema35523_35529,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35524_35530], null)));

var ufv___35544 = schema.utils.use_fn_validation;
var output_schema35539_35545 = schema.core.Symbol;
var input_schema35540_35546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker35541_35547 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35540_35546);
}),null));
var output_checker35542_35548 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35539_35545);
}),null));
var ret__26117__auto___35549 = /**
 * Inputs: [arg :- s/Str]
 *   Returns: s/Symbol
 * 
 *   Converts a string to a symbol
 */
tupelo.core.str__GT_sym = (function tupelo$core$str__GT_sym(G__35543){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35544);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35543], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"str->sym","str->sym",120558681,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a symbol"], null)),input_schema35540_35546,cljs.core.deref.call(null,input_checker35541_35547),args__24531__auto___35550);
} else {
var temp__5720__auto___35551 = cljs.core.deref.call(null,input_checker35541_35547).call(null,args__24531__auto___35550);
if(cljs.core.truth_(temp__5720__auto___35551)){
var error__24532__auto___35552 = temp__5720__auto___35551;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"str->sym","str->sym",120558681,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a symbol"], null)),cljs.core.pr_str.call(null,error__24532__auto___35552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35540_35546,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35550,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35552], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35543;
while(true){
return cljs.core.symbol.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"str->sym","str->sym",120558681,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a symbol"], null)),output_schema35539_35545,cljs.core.deref.call(null,output_checker35542_35548),o__24533__auto__);
} else {
var temp__5720__auto___35553 = cljs.core.deref.call(null,output_checker35542_35548).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35553)){
var error__24532__auto___35554 = temp__5720__auto___35553;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"str->sym","str->sym",120558681,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a symbol"], null)),cljs.core.pr_str.call(null,error__24532__auto___35554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35539_35545,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35554], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.str__GT_sym),schema.core.__GT_FnSchema.call(null,output_schema35539_35545,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35540_35546], null)));

var ufv___35560 = schema.utils.use_fn_validation;
var output_schema35555_35561 = schema.core.Keyword;
var input_schema35556_35562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker35557_35563 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35556_35562);
}),null));
var output_checker35558_35564 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35555_35561);
}),null));
var ret__26117__auto___35565 = /**
 * Inputs: [arg :- s/Str]
 *   Returns: s/Keyword
 * 
 *   Converts a string to a keyword
 */
tupelo.core.str__GT_kw = (function tupelo$core$str__GT_kw(G__35559){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35560);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35559], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"str->kw","str->kw",821858535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a keyword"], null)),input_schema35556_35562,cljs.core.deref.call(null,input_checker35557_35563),args__24531__auto___35566);
} else {
var temp__5720__auto___35567 = cljs.core.deref.call(null,input_checker35557_35563).call(null,args__24531__auto___35566);
if(cljs.core.truth_(temp__5720__auto___35567)){
var error__24532__auto___35568 = temp__5720__auto___35567;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"str->kw","str->kw",821858535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a keyword"], null)),cljs.core.pr_str.call(null,error__24532__auto___35568)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35556_35562,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35566,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35568], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35559;
while(true){
return cljs.core.keyword.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"str->kw","str->kw",821858535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a keyword"], null)),output_schema35555_35561,cljs.core.deref.call(null,output_checker35558_35564),o__24533__auto__);
} else {
var temp__5720__auto___35569 = cljs.core.deref.call(null,output_checker35558_35564).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35569)){
var error__24532__auto___35570 = temp__5720__auto___35569;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"str->kw","str->kw",821858535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a keyword"], null)),cljs.core.pr_str.call(null,error__24532__auto___35570)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35555_35561,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35570], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.str__GT_kw),schema.core.__GT_FnSchema.call(null,output_schema35555_35561,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35556_35562], null)));

var ufv___35576 = schema.utils.use_fn_validation;
var output_schema35571_35577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema35572_35578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker35573_35579 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35572_35578);
}),null));
var output_checker35574_35580 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35571_35577);
}),null));
var ret__26117__auto___35581 = /**
 * Inputs: [arg :- s/Str]
 *   Returns: [s/Any]
 * 
 *   Converts a string to a vector of chars
 */
tupelo.core.str__GT_chars = (function tupelo$core$str__GT_chars(G__35575){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35576);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35575], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"str->chars","str->chars",309520124,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a vector of chars"], null)),input_schema35572_35578,cljs.core.deref.call(null,input_checker35573_35579),args__24531__auto___35582);
} else {
var temp__5720__auto___35583 = cljs.core.deref.call(null,input_checker35573_35579).call(null,args__24531__auto___35582);
if(cljs.core.truth_(temp__5720__auto___35583)){
var error__24532__auto___35584 = temp__5720__auto___35583;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"str->chars","str->chars",309520124,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a vector of chars"], null)),cljs.core.pr_str.call(null,error__24532__auto___35584)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35572_35578,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35582,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35584], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35575;
while(true){
return cljs.core.vec.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"str->chars","str->chars",309520124,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a vector of chars"], null)),output_schema35571_35577,cljs.core.deref.call(null,output_checker35574_35580),o__24533__auto__);
} else {
var temp__5720__auto___35585 = cljs.core.deref.call(null,output_checker35574_35580).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35585)){
var error__24532__auto___35586 = temp__5720__auto___35585;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"str->chars","str->chars",309520124,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to a vector of chars"], null)),cljs.core.pr_str.call(null,error__24532__auto___35586)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35571_35577,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35586], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.str__GT_chars),schema.core.__GT_FnSchema.call(null,output_schema35571_35577,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35572_35578], null)));

tupelo.core.int__GT_kw = (function tupelo$core$int__GT_kw(arg){
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
});
var ufv___35592 = schema.utils.use_fn_validation;
var output_schema35587_35593 = schema.core.Keyword;
var input_schema35588_35594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Str,schema.core.Symbol,schema.core.Num,tupelo.core.Character),cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol(null,"Character","Character",-371768199,null))], null)))], null);
var input_checker35589_35595 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35588_35594);
}),null));
var output_checker35590_35596 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35587_35593);
}),null));
var ret__26117__auto___35597 = /**
 * Inputs: [arg :- (s/cond-pre s/Keyword s/Str s/Symbol s/Num Character)]
 *   Returns: s/Keyword
 * 
 *   Coerce arg to a keyword
 */
tupelo.core.__GT_kw = (function tupelo$core$__GT_kw(G__35591){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35592);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35591], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->kw","->kw",2101229756,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a keyword"], null)),input_schema35588_35594,cljs.core.deref.call(null,input_checker35589_35595),args__24531__auto___35598);
} else {
var temp__5720__auto___35599 = cljs.core.deref.call(null,input_checker35589_35595).call(null,args__24531__auto___35598);
if(cljs.core.truth_(temp__5720__auto___35599)){
var error__24532__auto___35600 = temp__5720__auto___35599;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->kw","->kw",2101229756,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a keyword"], null)),cljs.core.pr_str.call(null,error__24532__auto___35600)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35588_35594,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35598,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35600], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35591;
while(true){
if((arg instanceof cljs.core.Keyword)){
return arg;
} else {
if((arg instanceof cljs.core.Symbol)){
return tupelo.core.sym__GT_kw.call(null,arg);
} else {
if(typeof arg === 'string'){
return tupelo.core.str__GT_kw.call(null,arg);
} else {
if(cljs.core.char_QMARK_.call(null,arg)){
return tupelo.core.str__GT_kw.call(null,arg);
} else {
if(typeof arg === 'number'){
return tupelo.core.str__GT_kw.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg));
} else {
throw cljs.core.ex_info.call(null,"bad arg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null));

}
}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->kw","->kw",2101229756,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a keyword"], null)),output_schema35587_35593,cljs.core.deref.call(null,output_checker35590_35596),o__24533__auto__);
} else {
var temp__5720__auto___35601 = cljs.core.deref.call(null,output_checker35590_35596).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35601)){
var error__24532__auto___35602 = temp__5720__auto___35601;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->kw","->kw",2101229756,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a keyword"], null)),cljs.core.pr_str.call(null,error__24532__auto___35602)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35587_35593,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35602], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_kw),schema.core.__GT_FnSchema.call(null,output_schema35587_35593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35588_35594], null)));

var ufv___35608 = schema.utils.use_fn_validation;
var output_schema35603_35609 = schema.core.Str;
var input_schema35604_35610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Str,schema.core.Symbol,schema.core.Num,tupelo.core.Character),cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol(null,"Character","Character",-371768199,null))], null)))], null);
var input_checker35605_35611 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35604_35610);
}),null));
var output_checker35606_35612 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35603_35609);
}),null));
var ret__26117__auto___35613 = /**
 * Inputs: [arg :- (s/cond-pre s/Keyword s/Str s/Symbol s/Num Character)]
 *   Returns: s/Str
 * 
 *   Coerce arg to a string
 */
tupelo.core.__GT_str = (function tupelo$core$__GT_str(G__35607){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35608);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35607], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->str","->str",-457137396,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a string"], null)),input_schema35604_35610,cljs.core.deref.call(null,input_checker35605_35611),args__24531__auto___35614);
} else {
var temp__5720__auto___35615 = cljs.core.deref.call(null,input_checker35605_35611).call(null,args__24531__auto___35614);
if(cljs.core.truth_(temp__5720__auto___35615)){
var error__24532__auto___35616 = temp__5720__auto___35615;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->str","->str",-457137396,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a string"], null)),cljs.core.pr_str.call(null,error__24532__auto___35616)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35604_35610,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35614,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35616], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35607;
while(true){
if(typeof arg === 'string'){
return arg;
} else {
if((arg instanceof cljs.core.Symbol)){
return tupelo.core.sym__GT_str.call(null,arg);
} else {
if((arg instanceof cljs.core.Keyword)){
return tupelo.core.kw__GT_str.call(null,arg);
} else {
if(cljs.core.char_QMARK_.call(null,arg)){
return arg;
} else {
if(typeof arg === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg);
} else {
throw cljs.core.ex_info.call(null,"bad arg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null));

}
}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->str","->str",-457137396,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a string"], null)),output_schema35603_35609,cljs.core.deref.call(null,output_checker35606_35612),o__24533__auto__);
} else {
var temp__5720__auto___35617 = cljs.core.deref.call(null,output_checker35606_35612).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35617)){
var error__24532__auto___35618 = temp__5720__auto___35617;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->str","->str",-457137396,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a string"], null)),cljs.core.pr_str.call(null,error__24532__auto___35618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35603_35609,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35618], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_str),schema.core.__GT_FnSchema.call(null,output_schema35603_35609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35604_35610], null)));

var ufv___35624 = schema.utils.use_fn_validation;
var output_schema35619_35625 = schema.core.Symbol;
var input_schema35620_35626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Str,schema.core.Symbol,tupelo.core.Character),cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Symbol(null,"Character","Character",-371768199,null))], null)))], null);
var input_checker35621_35627 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35620_35626);
}),null));
var output_checker35622_35628 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35619_35625);
}),null));
var ret__26117__auto___35629 = /**
 * Inputs: [arg :- (s/cond-pre s/Keyword s/Str s/Symbol Character)]
 *   Returns: s/Symbol
 * 
 *   Coerce arg to a symbol
 */
tupelo.core.__GT_sym = (function tupelo$core$__GT_sym(G__35623){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35624);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35623], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->sym","->sym",696606926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a symbol"], null)),input_schema35620_35626,cljs.core.deref.call(null,input_checker35621_35627),args__24531__auto___35630);
} else {
var temp__5720__auto___35631 = cljs.core.deref.call(null,input_checker35621_35627).call(null,args__24531__auto___35630);
if(cljs.core.truth_(temp__5720__auto___35631)){
var error__24532__auto___35632 = temp__5720__auto___35631;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sym","->sym",696606926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a symbol"], null)),cljs.core.pr_str.call(null,error__24532__auto___35632)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35620_35626,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35630,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35632], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35623;
while(true){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((arg instanceof cljs.core.Keyword)){
return tupelo.core.kw__GT_sym.call(null,arg);
} else {
if(typeof arg === 'string'){
return tupelo.core.str__GT_sym.call(null,arg);
} else {
if(cljs.core.char_QMARK_.call(null,arg)){
return tupelo.core.str__GT_sym.call(null,arg);
} else {
throw cljs.core.ex_info.call(null,"bad arg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null));

}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->sym","->sym",696606926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a symbol"], null)),output_schema35619_35625,cljs.core.deref.call(null,output_checker35622_35628),o__24533__auto__);
} else {
var temp__5720__auto___35633 = cljs.core.deref.call(null,output_checker35622_35628).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35633)){
var error__24532__auto___35634 = temp__5720__auto___35633;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sym","->sym",696606926,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg to a symbol"], null)),cljs.core.pr_str.call(null,error__24532__auto___35634)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35619_35625,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35634], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_sym),schema.core.__GT_FnSchema.call(null,output_schema35619_35625,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35620_35626], null)));

var ufv___35640 = schema.utils.use_fn_validation;
var output_schema35635_35641 = schema.core.Any;
var input_schema35636_35642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)))], null);
var input_checker35637_35643 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35636_35642);
}),null));
var output_checker35638_35644 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35635_35641);
}),null));
var ret__26117__auto___35645 = /**
 * Inputs: [arg :- s/Int]
 *   Returns: s/Any
 * 
 *   Convert a unicode int to a char
 */
tupelo.core.codepoint__GT_char = (function tupelo$core$codepoint__GT_char(G__35639){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35640);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35639], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"codepoint->char","codepoint->char",684451444,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a unicode int to a char"], null)),input_schema35636_35642,cljs.core.deref.call(null,input_checker35637_35643),args__24531__auto___35646);
} else {
var temp__5720__auto___35647 = cljs.core.deref.call(null,input_checker35637_35643).call(null,args__24531__auto___35646);
if(cljs.core.truth_(temp__5720__auto___35647)){
var error__24532__auto___35648 = temp__5720__auto___35647;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"codepoint->char","codepoint->char",684451444,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a unicode int to a char"], null)),cljs.core.pr_str.call(null,error__24532__auto___35648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35636_35642,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35646,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35648], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35639;
while(true){
if(cljs.core.int_QMARK_.call(null,arg)){
} else {
throw (new Error("Assert failed: (int? arg)"));
}

return String.fromCharCode(arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"codepoint->char","codepoint->char",684451444,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a unicode int to a char"], null)),output_schema35635_35641,cljs.core.deref.call(null,output_checker35638_35644),o__24533__auto__);
} else {
var temp__5720__auto___35649 = cljs.core.deref.call(null,output_checker35638_35644).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35649)){
var error__24532__auto___35650 = temp__5720__auto___35649;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"codepoint->char","codepoint->char",684451444,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a unicode int to a char"], null)),cljs.core.pr_str.call(null,error__24532__auto___35650)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35635_35641,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35650], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.codepoint__GT_char),schema.core.__GT_FnSchema.call(null,output_schema35635_35641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35636_35642], null)));

var ufv___35656 = schema.utils.use_fn_validation;
var output_schema35651_35657 = schema.core.Int;
var input_schema35652_35658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker35653_35659 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35652_35658);
}),null));
var output_checker35654_35660 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35651_35657);
}),null));
var ret__26117__auto___35661 = /**
 * Inputs: [arg :- s/Any]
 *   Returns: s/Int
 * 
 *   Convert a char to an unicode int
 */
tupelo.core.char__GT_codepoint = (function tupelo$core$char__GT_codepoint(G__35655){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35656);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35655], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"char->codepoint","char->codepoint",-79646972,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a char to an unicode int"], null)),input_schema35652_35658,cljs.core.deref.call(null,input_checker35653_35659),args__24531__auto___35662);
} else {
var temp__5720__auto___35663 = cljs.core.deref.call(null,input_checker35653_35659).call(null,args__24531__auto___35662);
if(cljs.core.truth_(temp__5720__auto___35663)){
var error__24532__auto___35664 = temp__5720__auto___35663;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"char->codepoint","char->codepoint",-79646972,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a char to an unicode int"], null)),cljs.core.pr_str.call(null,error__24532__auto___35664)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35652_35658,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35662,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35664], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35655;
while(true){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,arg))){
} else {
throw (new Error("Assert failed: (= 1 (count arg))"));
}

return arg.charCodeAt((0));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"char->codepoint","char->codepoint",-79646972,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a char to an unicode int"], null)),output_schema35651_35657,cljs.core.deref.call(null,output_checker35654_35660),o__24533__auto__);
} else {
var temp__5720__auto___35665 = cljs.core.deref.call(null,output_checker35654_35660).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35665)){
var error__24532__auto___35666 = temp__5720__auto___35665;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"char->codepoint","char->codepoint",-79646972,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert a char to an unicode int"], null)),cljs.core.pr_str.call(null,error__24532__auto___35666)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35651_35657,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35666], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.char__GT_codepoint),schema.core.__GT_FnSchema.call(null,output_schema35651_35657,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35652_35658], null)));

tupelo.core.kw__GT_int = (function tupelo$core$kw__GT_int(arg){
return parseInt(tupelo.core.kw__GT_str.call(null,arg),(10));
});
var ufv___35677 = schema.utils.use_fn_validation;
var output_schema35667_35678 = schema.core.Any;
var input_schema35668_35679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker35669_35680 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35668_35679);
}),null));
var output_checker35670_35681 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35667_35678);
}),null));
var ret__26117__auto___35682 = /**
 * Inputs: [json-str :- s/Str]
 * 
 *   Convert from json -> edn
 */
tupelo.core.json__GT_edn = (function tupelo$core$json__GT_edn(G__35671){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35677);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35671], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"json->edn","json->edn",894894957,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from json -> edn"], null)),input_schema35668_35679,cljs.core.deref.call(null,input_checker35669_35680),args__24531__auto___35683);
} else {
var temp__5720__auto___35684 = cljs.core.deref.call(null,input_checker35669_35680).call(null,args__24531__auto___35683);
if(cljs.core.truth_(temp__5720__auto___35684)){
var error__24532__auto___35685 = temp__5720__auto___35684;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"json->edn","json->edn",894894957,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from json -> edn"], null)),cljs.core.pr_str.call(null,error__24532__auto___35685)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35668_35679,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35683,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35685], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var json_str = G__35671;
while(true){
return tupelo.core.unlazy.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(json_str),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"json->edn","json->edn",894894957,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from json -> edn"], null)),output_schema35667_35678,cljs.core.deref.call(null,output_checker35670_35681),o__24533__auto__);
} else {
var temp__5720__auto___35686 = cljs.core.deref.call(null,output_checker35670_35681).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35686)){
var error__24532__auto___35687 = temp__5720__auto___35686;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"json->edn","json->edn",894894957,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from json -> edn"], null)),cljs.core.pr_str.call(null,error__24532__auto___35687)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35667_35678,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35687], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.json__GT_edn),schema.core.__GT_FnSchema.call(null,output_schema35667_35678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35668_35679], null)));


var ufv___35688 = schema.utils.use_fn_validation;
var output_schema35672_35689 = schema.core.Str;
var input_schema35673_35690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35674_35691 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35673_35690);
}),null));
var output_checker35675_35692 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35672_35689);
}),null));
var ret__26117__auto___35693 = /**
 * Inputs: [arg]
 *   Returns: s/Str
 * 
 *   Convert from edn -> json 
 */
tupelo.core.edn__GT_json = (function tupelo$core$edn__GT_json(G__35676){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35688);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35676], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"edn->json","edn->json",1067520178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from edn -> json "], null)),input_schema35673_35690,cljs.core.deref.call(null,input_checker35674_35691),args__24531__auto___35694);
} else {
var temp__5720__auto___35695 = cljs.core.deref.call(null,input_checker35674_35691).call(null,args__24531__auto___35694);
if(cljs.core.truth_(temp__5720__auto___35695)){
var error__24532__auto___35696 = temp__5720__auto___35695;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"edn->json","edn->json",1067520178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from edn -> json "], null)),cljs.core.pr_str.call(null,error__24532__auto___35696)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35673_35690,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35694,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35696], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35676;
while(true){
return JSON.stringify(cljs.core.clj__GT_js.call(null,arg));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"edn->json","edn->json",1067520178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from edn -> json "], null)),output_schema35672_35689,cljs.core.deref.call(null,output_checker35675_35692),o__24533__auto__);
} else {
var temp__5720__auto___35697 = cljs.core.deref.call(null,output_checker35675_35692).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35697)){
var error__24532__auto___35698 = temp__5720__auto___35697;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"edn->json","edn->json",1067520178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert from edn -> json "], null)),cljs.core.pr_str.call(null,error__24532__auto___35698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35672_35689,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35698], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.edn__GT_json),schema.core.__GT_FnSchema.call(null,output_schema35672_35689,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35673_35690], null)));

var ufv___35704 = schema.utils.use_fn_validation;
var output_schema35699_35705 = schema.core.Bool;
var input_schema35700_35706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker35701_35707 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35700_35706);
}),null));
var output_checker35702_35708 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35699_35705);
}),null));
var ret__26117__auto___35709 = /**
 * Inputs: [arg :- s/Any]
 *   Returns: s/Bool
 * 
 *   Returns true if arg is not nil; false otherwise. Equivalent to (not (nil? arg)),
 * or the poorly-named clojure.core/some? 
 */
tupelo.core.not_nil_QMARK_ = (function tupelo$core$not_nil_QMARK_(G__35703){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35704);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35703], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if arg is not nil; false otherwise. Equivalent to (not (nil? arg)),\n   or the poorly-named clojure.core/some? "], null)),input_schema35700_35706,cljs.core.deref.call(null,input_checker35701_35707),args__24531__auto___35710);
} else {
var temp__5720__auto___35711 = cljs.core.deref.call(null,input_checker35701_35707).call(null,args__24531__auto___35710);
if(cljs.core.truth_(temp__5720__auto___35711)){
var error__24532__auto___35712 = temp__5720__auto___35711;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if arg is not nil; false otherwise. Equivalent to (not (nil? arg)),\n   or the poorly-named clojure.core/some? "], null)),cljs.core.pr_str.call(null,error__24532__auto___35712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35700_35706,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35710,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35712], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35703;
while(true){
return (!((arg == null)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if arg is not nil; false otherwise. Equivalent to (not (nil? arg)),\n   or the poorly-named clojure.core/some? "], null)),output_schema35699_35705,cljs.core.deref.call(null,output_checker35702_35708),o__24533__auto__);
} else {
var temp__5720__auto___35713 = cljs.core.deref.call(null,output_checker35702_35708).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35713)){
var error__24532__auto___35714 = temp__5720__auto___35713;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if arg is not nil; false otherwise. Equivalent to (not (nil? arg)),\n   or the poorly-named clojure.core/some? "], null)),cljs.core.pr_str.call(null,error__24532__auto___35714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35699_35705,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35714], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.not_nil_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35699_35705,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35700_35706], null)));

var ufv___35720 = schema.utils.use_fn_validation;
var output_schema35715_35721 = schema.core.Bool;
var input_schema35716_35722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35717_35723 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35716_35722);
}),null));
var output_checker35718_35724 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35715_35721);
}),null));
var ret__26117__auto___35725 = /**
 * Inputs: [coll]
 *   Returns: s/Bool
 * 
 *   For any collection coll, returns true if coll contains any items; otherwise returns false.
 * Equivalent to (not (empty? coll)).
 */
tupelo.core.not_empty_QMARK_ = (function tupelo$core$not_empty_QMARK_(G__35719){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35720);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35719], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"not-empty?","not-empty?",-1361614191,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll, returns true if coll contains any items; otherwise returns false.\n   Equivalent to (not (empty? coll))."], null)),input_schema35716_35722,cljs.core.deref.call(null,input_checker35717_35723),args__24531__auto___35726);
} else {
var temp__5720__auto___35727 = cljs.core.deref.call(null,input_checker35717_35723).call(null,args__24531__auto___35726);
if(cljs.core.truth_(temp__5720__auto___35727)){
var error__24532__auto___35728 = temp__5720__auto___35727;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"not-empty?","not-empty?",-1361614191,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll, returns true if coll contains any items; otherwise returns false.\n   Equivalent to (not (empty? coll))."], null)),cljs.core.pr_str.call(null,error__24532__auto___35728)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35716_35722,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35726,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35728], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__35719;
while(true){
return (!(cljs.core.empty_QMARK_.call(null,coll)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"not-empty?","not-empty?",-1361614191,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll, returns true if coll contains any items; otherwise returns false.\n   Equivalent to (not (empty? coll))."], null)),output_schema35715_35721,cljs.core.deref.call(null,output_checker35718_35724),o__24533__auto__);
} else {
var temp__5720__auto___35729 = cljs.core.deref.call(null,output_checker35718_35724).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35729)){
var error__24532__auto___35730 = temp__5720__auto___35729;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"not-empty?","not-empty?",-1361614191,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll, returns true if coll contains any items; otherwise returns false.\n   Equivalent to (not (empty? coll))."], null)),cljs.core.pr_str.call(null,error__24532__auto___35730)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35715_35721,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35730], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.not_empty_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35715_35721,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35716_35722], null)));

var ufv___35737 = schema.utils.use_fn_validation;
var output_schema35731_35738 = schema.core.Bool;
var input_schema35732_35739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35733_35740 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35732_35739);
}),null));
var output_checker35734_35741 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35731_35738);
}),null));
var ret__26117__auto___35742 = /**
 * Inputs: [pred :- s/Any coll :- [s/Any]]
 *   Returns: s/Bool
 * 
 *   For any predicate pred & collection coll, returns true if (pred x) is logical true for at least one x in
 * coll; otherwise returns false.  Like clojure.core/some, but returns only true or false.
 */
tupelo.core.has_some_QMARK_ = (function tupelo$core$has_some_QMARK_(G__35735,G__35736){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35737);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35735,G__35736], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"has-some?","has-some?",-2142528388,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns true if (pred x) is logical true for at least one x in\n   coll; otherwise returns false.  Like clojure.core/some, but returns only true or false."], null)),input_schema35732_35739,cljs.core.deref.call(null,input_checker35733_35740),args__24531__auto___35743);
} else {
var temp__5720__auto___35744 = cljs.core.deref.call(null,input_checker35733_35740).call(null,args__24531__auto___35743);
if(cljs.core.truth_(temp__5720__auto___35744)){
var error__24532__auto___35745 = temp__5720__auto___35744;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"has-some?","has-some?",-2142528388,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns true if (pred x) is logical true for at least one x in\n   coll; otherwise returns false.  Like clojure.core/some, but returns only true or false."], null)),cljs.core.pr_str.call(null,error__24532__auto___35745)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35732_35739,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35743,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35745], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var pred = G__35735;
var coll = G__35736;
while(true){
return tupelo.core.truthy_QMARK_.call(null,cljs.core.some.call(null,pred,coll));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"has-some?","has-some?",-2142528388,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns true if (pred x) is logical true for at least one x in\n   coll; otherwise returns false.  Like clojure.core/some, but returns only true or false."], null)),output_schema35731_35738,cljs.core.deref.call(null,output_checker35734_35741),o__24533__auto__);
} else {
var temp__5720__auto___35746 = cljs.core.deref.call(null,output_checker35734_35741).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35746)){
var error__24532__auto___35747 = temp__5720__auto___35746;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"has-some?","has-some?",-2142528388,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns true if (pred x) is logical true for at least one x in\n   coll; otherwise returns false.  Like clojure.core/some, but returns only true or false."], null)),cljs.core.pr_str.call(null,error__24532__auto___35747)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35731_35738,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35747], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.has_some_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35731_35738,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35732_35739], null)));

var ufv___35754 = schema.utils.use_fn_validation;
var output_schema35748_35755 = schema.core.Bool;
var input_schema35749_35756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35750_35757 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35749_35756);
}),null));
var output_checker35751_35758 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35748_35755);
}),null));
var ret__26117__auto___35759 = /**
 * Inputs: [pred :- s/Any coll :- [s/Any]]
 *   Returns: s/Bool
 * 
 *   For any predicate pred & collection coll, returns false if (pred x) is logical true for at least one x in
 * coll; otherwise returns true.  Equivalent to clojure.core/not-any?, but inverse of has-some?.
 */
tupelo.core.has_none_QMARK_ = (function tupelo$core$has_none_QMARK_(G__35752,G__35753){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35754);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35752,G__35753], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"has-none?","has-none?",-771897365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns false if (pred x) is logical true for at least one x in\n   coll; otherwise returns true.  Equivalent to clojure.core/not-any?, but inverse of has-some?."], null)),input_schema35749_35756,cljs.core.deref.call(null,input_checker35750_35757),args__24531__auto___35760);
} else {
var temp__5720__auto___35761 = cljs.core.deref.call(null,input_checker35750_35757).call(null,args__24531__auto___35760);
if(cljs.core.truth_(temp__5720__auto___35761)){
var error__24532__auto___35762 = temp__5720__auto___35761;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"has-none?","has-none?",-771897365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns false if (pred x) is logical true for at least one x in\n   coll; otherwise returns true.  Equivalent to clojure.core/not-any?, but inverse of has-some?."], null)),cljs.core.pr_str.call(null,error__24532__auto___35762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35749_35756,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35760,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35762], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var pred = G__35752;
var coll = G__35753;
while(true){
return tupelo.core.falsey_QMARK_.call(null,cljs.core.some.call(null,pred,coll));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"has-none?","has-none?",-771897365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns false if (pred x) is logical true for at least one x in\n   coll; otherwise returns true.  Equivalent to clojure.core/not-any?, but inverse of has-some?."], null)),output_schema35748_35755,cljs.core.deref.call(null,output_checker35751_35758),o__24533__auto__);
} else {
var temp__5720__auto___35763 = cljs.core.deref.call(null,output_checker35751_35758).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35763)){
var error__24532__auto___35764 = temp__5720__auto___35763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"has-none?","has-none?",-771897365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any predicate pred & collection coll, returns false if (pred x) is logical true for at least one x in\n   coll; otherwise returns true.  Equivalent to clojure.core/not-any?, but inverse of has-some?."], null)),cljs.core.pr_str.call(null,error__24532__auto___35764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35748_35755,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35764], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.has_none_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35748_35755,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35749_35756], null)));

var ufv___35772 = schema.utils.use_fn_validation;
var output_schema35766_35773 = schema.core.Bool;
var input_schema35767_35774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker35768_35775 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35767_35774);
}),null));
var output_checker35769_35776 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35766_35773);
}),null));
var ret__26117__auto___35777 = /**
 * Inputs: [coll :- s/Any elem :- s/Any]
 *   Returns: s/Bool
 * 
 *   For any collection coll & element tgt, returns true if coll contains at least one
 *   instance of tgt; otherwise returns false. Note that, for maps, each element is a
 *   vector (i.e MapEntry) of the form [key value].
 */
tupelo.core.contains_elem_QMARK_ = (function tupelo$core$contains_elem_QMARK_(G__35770,G__35771){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35772);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35770,G__35771], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"contains-elem?","contains-elem?",489510244,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll & element tgt, returns true if coll contains at least one\n  instance of tgt; otherwise returns false. Note that, for maps, each element is a\n  vector (i.e MapEntry) of the form [key value]."], null)),input_schema35767_35774,cljs.core.deref.call(null,input_checker35768_35775),args__24531__auto___35778);
} else {
var temp__5720__auto___35779 = cljs.core.deref.call(null,input_checker35768_35775).call(null,args__24531__auto___35778);
if(cljs.core.truth_(temp__5720__auto___35779)){
var error__24532__auto___35780 = temp__5720__auto___35779;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"contains-elem?","contains-elem?",489510244,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll & element tgt, returns true if coll contains at least one\n  instance of tgt; otherwise returns false. Note that, for maps, each element is a\n  vector (i.e MapEntry) of the form [key value]."], null)),cljs.core.pr_str.call(null,error__24532__auto___35780)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35767_35774,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35778,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35780], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__35770;
var elem = G__35771;
while(true){
return tupelo.core.has_some_QMARK_.call(null,tupelo.core.truthy_QMARK_,cljs.core.mapv.call(null,((function (validate__24530__auto__,ufv___35772,output_schema35766_35773,input_schema35767_35774,input_checker35768_35775,output_checker35769_35776){
return (function (p1__35765_SHARP_){
return cljs.core._EQ_.call(null,elem,p1__35765_SHARP_);
});})(validate__24530__auto__,ufv___35772,output_schema35766_35773,input_schema35767_35774,input_checker35768_35775,output_checker35769_35776))
,cljs.core.seq.call(null,coll)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"contains-elem?","contains-elem?",489510244,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll & element tgt, returns true if coll contains at least one\n  instance of tgt; otherwise returns false. Note that, for maps, each element is a\n  vector (i.e MapEntry) of the form [key value]."], null)),output_schema35766_35773,cljs.core.deref.call(null,output_checker35769_35776),o__24533__auto__);
} else {
var temp__5720__auto___35781 = cljs.core.deref.call(null,output_checker35769_35776).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35781)){
var error__24532__auto___35782 = temp__5720__auto___35781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"contains-elem?","contains-elem?",489510244,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any collection coll & element tgt, returns true if coll contains at least one\n  instance of tgt; otherwise returns false. Note that, for maps, each element is a\n  vector (i.e MapEntry) of the form [key value]."], null)),cljs.core.pr_str.call(null,error__24532__auto___35782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35766_35773,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35782], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.contains_elem_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35766_35773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35767_35774], null)));

var ufv___35790 = schema.utils.use_fn_validation;
var output_schema35784_35791 = schema.core.Bool;
var input_schema35785_35792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.pred.call(null,(function (p1__35783_SHARP_){
return ((cljs.core.map_QMARK_.call(null,p1__35783_SHARP_)) || (cljs.core.set_QMARK_.call(null,p1__35783_SHARP_)));
})),cljs.core.with_meta(new cljs.core.Symbol(null,"map-or-set","map-or-set",-490232339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__35783#","p1__35783#",1516597139,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1__35783#","p1__35783#",1516597139,null)),cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"p1__35783#","p1__35783#",1516597139,null)))))], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker35786_35793 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35785_35792);
}),null));
var output_checker35787_35794 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35784_35791);
}),null));
var ret__26117__auto___35795 = /**
 * Inputs: [map-or-set :- (s/pred (fn* [p1__35783#] (or (map? p1__35783#) (set? p1__35783#)))) elem :- s/Any]
 *   Returns: s/Bool
 * 
 *   For any map or set, returns true if elem is a map key or set element, respectively
 */
tupelo.core.contains_key_QMARK_ = (function tupelo$core$contains_key_QMARK_(G__35788,G__35789){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35790);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35788,G__35789], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"contains-key?","contains-key?",1321376590,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map or set, returns true if elem is a map key or set element, respectively"], null)),input_schema35785_35792,cljs.core.deref.call(null,input_checker35786_35793),args__24531__auto___35796);
} else {
var temp__5720__auto___35797 = cljs.core.deref.call(null,input_checker35786_35793).call(null,args__24531__auto___35796);
if(cljs.core.truth_(temp__5720__auto___35797)){
var error__24532__auto___35798 = temp__5720__auto___35797;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"contains-key?","contains-key?",1321376590,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map or set, returns true if elem is a map key or set element, respectively"], null)),cljs.core.pr_str.call(null,error__24532__auto___35798)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35785_35792,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35796,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35798], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_or_set = G__35788;
var elem = G__35789;
while(true){
return cljs.core.contains_QMARK_.call(null,map_or_set,elem);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"contains-key?","contains-key?",1321376590,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map or set, returns true if elem is a map key or set element, respectively"], null)),output_schema35784_35791,cljs.core.deref.call(null,output_checker35787_35794),o__24533__auto__);
} else {
var temp__5720__auto___35799 = cljs.core.deref.call(null,output_checker35787_35794).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35799)){
var error__24532__auto___35800 = temp__5720__auto___35799;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"contains-key?","contains-key?",1321376590,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map or set, returns true if elem is a map key or set element, respectively"], null)),cljs.core.pr_str.call(null,error__24532__auto___35800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35784_35791,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35800], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.contains_key_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35784_35791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35785_35792], null)));

var ufv___35808 = schema.utils.use_fn_validation;
var output_schema35802_35809 = schema.core.Bool;
var input_schema35803_35810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker35804_35811 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35803_35810);
}),null));
var output_checker35805_35812 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35802_35809);
}),null));
var ret__26117__auto___35813 = /**
 * Inputs: [map :- tsk/Map elem :- s/Any]
 *   Returns: s/Bool
 * 
 *   For any map, returns true if elem is present in the map for at least one key.
 */
tupelo.core.contains_val_QMARK_ = (function tupelo$core$contains_val_QMARK_(G__35806,G__35807){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35808);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35806,G__35807], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"contains-val?","contains-val?",1023349271,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map, returns true if elem is present in the map for at least one key."], null)),input_schema35803_35810,cljs.core.deref.call(null,input_checker35804_35811),args__24531__auto___35814);
} else {
var temp__5720__auto___35815 = cljs.core.deref.call(null,input_checker35804_35811).call(null,args__24531__auto___35814);
if(cljs.core.truth_(temp__5720__auto___35815)){
var error__24532__auto___35816 = temp__5720__auto___35815;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"contains-val?","contains-val?",1023349271,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map, returns true if elem is present in the map for at least one key."], null)),cljs.core.pr_str.call(null,error__24532__auto___35816)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35803_35810,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35814,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35816], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map = G__35806;
var elem = G__35807;
while(true){
return tupelo.core.has_some_QMARK_.call(null,tupelo.core.truthy_QMARK_,cljs.core.mapv.call(null,((function (validate__24530__auto__,ufv___35808,output_schema35802_35809,input_schema35803_35810,input_checker35804_35811,output_checker35805_35812){
return (function (p1__35801_SHARP_){
return cljs.core._EQ_.call(null,elem,p1__35801_SHARP_);
});})(validate__24530__auto__,ufv___35808,output_schema35802_35809,input_schema35803_35810,input_checker35804_35811,output_checker35805_35812))
,cljs.core.vals.call(null,map)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"contains-val?","contains-val?",1023349271,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map, returns true if elem is present in the map for at least one key."], null)),output_schema35802_35809,cljs.core.deref.call(null,output_checker35805_35812),o__24533__auto__);
} else {
var temp__5720__auto___35817 = cljs.core.deref.call(null,output_checker35805_35812).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35817)){
var error__24532__auto___35818 = temp__5720__auto___35817;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"contains-val?","contains-val?",1023349271,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map, returns true if elem is present in the map for at least one key."], null)),cljs.core.pr_str.call(null,error__24532__auto___35818)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35802_35809,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35818], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.contains_val_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35802_35809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35803_35810], null)));

var ufv___35825 = schema.utils.use_fn_validation;
var output_schema35819_35826 = schema.core.Any;
var input_schema35820_35827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"the-map","the-map",549772450,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"keys-vec","keys-vec",858625657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35821_35828 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35820_35827);
}),null));
var output_checker35822_35829 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35819_35826);
}),null));
var ret__26117__auto___35830 = /**
 * Inputs: [the-map :- tsk/Map keys-vec :- [s/Any]]
 *   Returns: s/Any
 * 
 *   A sane version of dissoc-in that will not delete intermediate keys.
 * When invoked as
 * 
 *      (dissoc-in the-map [:k1 :k2 :k3... :kZ])
 * 
 * acts like
 * 
 *      (clojure.core/update-in the-map [:k1 :k2 :k3...] dissoc :kZ)
 * 
 * That is, only the map entry containing the last key `:kZ` is removed, and all map entries
 * higher than `:kZ` in the hierarchy are unaffected.
 */
tupelo.core.dissoc_in = (function tupelo$core$dissoc_in(G__35823,G__35824){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35825);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35823,G__35824], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A sane version of dissoc-in that will not delete intermediate keys.\n   When invoked as\n\n        (dissoc-in the-map [:k1 :k2 :k3... :kZ])\n\n   acts like\n\n        (clojure.core/update-in the-map [:k1 :k2 :k3...] dissoc :kZ)\n\n   That is, only the map entry containing the last key `:kZ` is removed, and all map entries\n   higher than `:kZ` in the hierarchy are unaffected."], null)),input_schema35820_35827,cljs.core.deref.call(null,input_checker35821_35828),args__24531__auto___35831);
} else {
var temp__5720__auto___35832 = cljs.core.deref.call(null,input_checker35821_35828).call(null,args__24531__auto___35831);
if(cljs.core.truth_(temp__5720__auto___35832)){
var error__24532__auto___35833 = temp__5720__auto___35832;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A sane version of dissoc-in that will not delete intermediate keys.\n   When invoked as\n\n        (dissoc-in the-map [:k1 :k2 :k3... :kZ])\n\n   acts like\n\n        (clojure.core/update-in the-map [:k1 :k2 :k3...] dissoc :kZ)\n\n   That is, only the map entry containing the last key `:kZ` is removed, and all map entries\n   higher than `:kZ` in the hierarchy are unaffected."], null)),cljs.core.pr_str.call(null,error__24532__auto___35833)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35820_35827,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35831,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35833], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var the_map = G__35823;
var keys_vec = G__35824;
while(true){
var num_keys = cljs.core.count.call(null,keys_vec);
var key_to_clear = cljs.core.last.call(null,keys_vec);
var parent_keys = cljs.core.butlast.call(null,keys_vec);
if((num_keys === (0))){
return the_map;
} else {
if(cljs.core._EQ_.call(null,(1),num_keys)){
return cljs.core.dissoc.call(null,the_map,key_to_clear);
} else {
return cljs.core.update_in.call(null,the_map,parent_keys,cljs.core.dissoc,key_to_clear);

}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A sane version of dissoc-in that will not delete intermediate keys.\n   When invoked as\n\n        (dissoc-in the-map [:k1 :k2 :k3... :kZ])\n\n   acts like\n\n        (clojure.core/update-in the-map [:k1 :k2 :k3...] dissoc :kZ)\n\n   That is, only the map entry containing the last key `:kZ` is removed, and all map entries\n   higher than `:kZ` in the hierarchy are unaffected."], null)),output_schema35819_35826,cljs.core.deref.call(null,output_checker35822_35829),o__24533__auto__);
} else {
var temp__5720__auto___35834 = cljs.core.deref.call(null,output_checker35822_35829).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35834)){
var error__24532__auto___35835 = temp__5720__auto___35834;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"dissoc-in","dissoc-in",-249353279,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A sane version of dissoc-in that will not delete intermediate keys.\n   When invoked as\n\n        (dissoc-in the-map [:k1 :k2 :k3... :kZ])\n\n   acts like\n\n        (clojure.core/update-in the-map [:k1 :k2 :k3...] dissoc :kZ)\n\n   That is, only the map entry containing the last key `:kZ` is removed, and all map entries\n   higher than `:kZ` in the hierarchy are unaffected."], null)),cljs.core.pr_str.call(null,error__24532__auto___35835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35819_35826,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35835], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.dissoc_in),schema.core.__GT_FnSchema.call(null,output_schema35819_35826,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35820_35827], null)));

var ufv___35841 = schema.utils.use_fn_validation;
var output_schema35836_35842 = tupelo.schema.Set;
var input_schema35837_35843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35838_35844 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35837_35843);
}),null));
var output_checker35839_35845 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35836_35842);
}),null));
var ret__26117__auto___35846 = /**
 * Inputs: [arg]
 *   Returns: tsk/Set
 * 
 *   Converts arg to a set.
 */
tupelo.core.__GT_set = (function tupelo$core$__GT_set(G__35840){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35841);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35840], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->set","->set",-1923154213,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts arg to a set."], null)),input_schema35837_35843,cljs.core.deref.call(null,input_checker35838_35844),args__24531__auto___35847);
} else {
var temp__5720__auto___35848 = cljs.core.deref.call(null,input_checker35838_35844).call(null,args__24531__auto___35847);
if(cljs.core.truth_(temp__5720__auto___35848)){
var error__24532__auto___35849 = temp__5720__auto___35848;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->set","->set",-1923154213,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts arg to a set."], null)),cljs.core.pr_str.call(null,error__24532__auto___35849)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35837_35843,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35847,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35849], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35840;
while(true){
if((((arg == null)) || (((cljs.core.set_QMARK_.call(null,arg)) || (cljs.core.sequential_QMARK_.call(null,arg)))))){
} else {
throw cljs.core.ex_info.call(null,"invalid arg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null));
}

return cljs.core.set.call(null,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->set","->set",-1923154213,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts arg to a set."], null)),output_schema35836_35842,cljs.core.deref.call(null,output_checker35839_35845),o__24533__auto__);
} else {
var temp__5720__auto___35850 = cljs.core.deref.call(null,output_checker35839_35845).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35850)){
var error__24532__auto___35851 = temp__5720__auto___35850;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->set","->set",-1923154213,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts arg to a set."], null)),cljs.core.pr_str.call(null,error__24532__auto___35851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35836_35842,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35851], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_set),schema.core.__GT_FnSchema.call(null,output_schema35836_35842,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35837_35843], null)));

var ufv___35857 = schema.utils.use_fn_validation;
var output_schema35852_35858 = tupelo.schema.Set;
var input_schema35853_35859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Set,cljs.core.with_meta(new cljs.core.Symbol(null,"set-in","set-in",1837446231,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null)], null)))], null);
var input_checker35854_35860 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35853_35859);
}),null));
var output_checker35855_35861 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35852_35858);
}),null));
var ret__26117__auto___35862 = /**
 * Inputs: [set-in :- tsk/Set]
 *   Returns: tsk/Set
 * 
 *   Coerces a set into a sorted-set
 */
tupelo.core.__GT_sorted_set = (function tupelo$core$__GT_sorted_set(G__35856){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35857);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35856], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set","->sorted-set",-1975628413,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set"], null)),input_schema35853_35859,cljs.core.deref.call(null,input_checker35854_35860),args__24531__auto___35863);
} else {
var temp__5720__auto___35864 = cljs.core.deref.call(null,input_checker35854_35860).call(null,args__24531__auto___35863);
if(cljs.core.truth_(temp__5720__auto___35864)){
var error__24532__auto___35865 = temp__5720__auto___35864;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set","->sorted-set",-1975628413,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set"], null)),cljs.core.pr_str.call(null,error__24532__auto___35865)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35853_35859,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35863,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35865], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var set_in = G__35856;
while(true){
return tupelo.core.glue.call(null,cljs.core.sorted_set.call(null),set_in);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set","->sorted-set",-1975628413,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set"], null)),output_schema35852_35858,cljs.core.deref.call(null,output_checker35855_35861),o__24533__auto__);
} else {
var temp__5720__auto___35866 = cljs.core.deref.call(null,output_checker35855_35861).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35866)){
var error__24532__auto___35867 = temp__5720__auto___35866;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set","->sorted-set",-1975628413,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set"], null)),cljs.core.pr_str.call(null,error__24532__auto___35867)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35852_35858,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35867], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_sorted_set),schema.core.__GT_FnSchema.call(null,output_schema35852_35858,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35853_35859], null)));

var ufv___35873 = schema.utils.use_fn_validation;
var output_schema35868_35874 = tupelo.schema.Map;
var input_schema35869_35875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map-in","map-in",1940374657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null)))], null);
var input_checker35870_35876 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35869_35875);
}),null));
var output_checker35871_35877 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35868_35874);
}),null));
var ret__26117__auto___35878 = /**
 * Inputs: [map-in :- tsk/Map]
 *   Returns: tsk/Map
 * 
 *   Coerces a map into a sorted-map
 */
tupelo.core.__GT_sorted_map = (function tupelo$core$__GT_sorted_map(G__35872){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35873);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35872], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map","->sorted-map",1551282581,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),input_schema35869_35875,cljs.core.deref.call(null,input_checker35870_35876),args__24531__auto___35879);
} else {
var temp__5720__auto___35880 = cljs.core.deref.call(null,input_checker35870_35876).call(null,args__24531__auto___35879);
if(cljs.core.truth_(temp__5720__auto___35880)){
var error__24532__auto___35881 = temp__5720__auto___35880;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map","->sorted-map",1551282581,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),cljs.core.pr_str.call(null,error__24532__auto___35881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35869_35875,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35879,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35881], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_in = G__35872;
while(true){
return tupelo.core.glue.call(null,cljs.core.sorted_map.call(null),map_in);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map","->sorted-map",1551282581,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),output_schema35868_35874,cljs.core.deref.call(null,output_checker35871_35877),o__24533__auto__);
} else {
var temp__5720__auto___35882 = cljs.core.deref.call(null,output_checker35871_35877).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35882)){
var error__24532__auto___35883 = temp__5720__auto___35882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map","->sorted-map",1551282581,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),cljs.core.pr_str.call(null,error__24532__auto___35883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35868_35874,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35883], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_sorted_map),schema.core.__GT_FnSchema.call(null,output_schema35868_35874,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35869_35875], null)));

/**
 * Recursively walks form, converting all maps to sorted-maps. 
 */
tupelo.core.walk_maps__GT_sorted = (function tupelo$core$walk_maps__GT_sorted(form){
return clojure.walk.postwalk.call(null,(function (item){
if(cljs.core.map_QMARK_.call(null,item)){
return tupelo.core.__GT_sorted_map.call(null,item);
} else {
return item;
}
}),form);
});
/**
 * Returns a generic sorted map, able to accept keys of different classes
 */
tupelo.core.sorted_map_generic = (function tupelo$core$sorted_map_generic(){
return cljs.core.sorted_map_by.call(null,tupelo.lexical.compare_generic);
});
var ufv___35889 = schema.utils.use_fn_validation;
var output_schema35884_35890 = tupelo.schema.Map;
var input_schema35885_35891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map-in","map-in",1940374657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null)))], null);
var input_checker35886_35892 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35885_35891);
}),null));
var output_checker35887_35893 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35884_35890);
}),null));
var ret__26117__auto___35894 = /**
 * Inputs: [map-in :- tsk/Map]
 *   Returns: tsk/Map
 * 
 *   Coerces a map into a sorted-map
 */
tupelo.core.__GT_sorted_map_generic = (function tupelo$core$__GT_sorted_map_generic(G__35888){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35889);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35888], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map-generic","->sorted-map-generic",1002504322,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),input_schema35885_35891,cljs.core.deref.call(null,input_checker35886_35892),args__24531__auto___35895);
} else {
var temp__5720__auto___35896 = cljs.core.deref.call(null,input_checker35886_35892).call(null,args__24531__auto___35895);
if(cljs.core.truth_(temp__5720__auto___35896)){
var error__24532__auto___35897 = temp__5720__auto___35896;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map-generic","->sorted-map-generic",1002504322,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),cljs.core.pr_str.call(null,error__24532__auto___35897)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35885_35891,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35895,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35897], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_in = G__35888;
while(true){
return tupelo.core.glue.call(null,tupelo.core.sorted_map_generic.call(null),map_in);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map-generic","->sorted-map-generic",1002504322,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),output_schema35884_35890,cljs.core.deref.call(null,output_checker35887_35893),o__24533__auto__);
} else {
var temp__5720__auto___35898 = cljs.core.deref.call(null,output_checker35887_35893).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35898)){
var error__24532__auto___35899 = temp__5720__auto___35898;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-map-generic","->sorted-map-generic",1002504322,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a map into a sorted-map"], null)),cljs.core.pr_str.call(null,error__24532__auto___35899)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35884_35890,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35899], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_sorted_map_generic),schema.core.__GT_FnSchema.call(null,output_schema35884_35890,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35885_35891], null)));

/**
 * Returns a generic sorted set, able to accept keys of different classes
 */
tupelo.core.sorted_set_generic = (function tupelo$core$sorted_set_generic(){
return cljs.core.sorted_set_by.call(null,tupelo.lexical.compare_generic);
});
var ufv___35905 = schema.utils.use_fn_validation;
var output_schema35900_35906 = tupelo.schema.Set;
var input_schema35901_35907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Set,cljs.core.with_meta(new cljs.core.Symbol(null,"set-in","set-in",1837446231,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null)], null)))], null);
var input_checker35902_35908 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35901_35907);
}),null));
var output_checker35903_35909 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35900_35906);
}),null));
var ret__26117__auto___35910 = /**
 * Inputs: [set-in :- tsk/Set]
 *   Returns: tsk/Set
 * 
 *   Coerces a set into a sorted-set-generic
 */
tupelo.core.__GT_sorted_set_generic = (function tupelo$core$__GT_sorted_set_generic(G__35904){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35905);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35904], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set-generic","->sorted-set-generic",-1218472326,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set-generic"], null)),input_schema35901_35907,cljs.core.deref.call(null,input_checker35902_35908),args__24531__auto___35911);
} else {
var temp__5720__auto___35912 = cljs.core.deref.call(null,input_checker35902_35908).call(null,args__24531__auto___35911);
if(cljs.core.truth_(temp__5720__auto___35912)){
var error__24532__auto___35913 = temp__5720__auto___35912;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set-generic","->sorted-set-generic",-1218472326,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set-generic"], null)),cljs.core.pr_str.call(null,error__24532__auto___35913)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35901_35907,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35911,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35913], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var set_in = G__35904;
while(true){
return tupelo.core.glue.call(null,tupelo.core.sorted_set_generic.call(null),set_in);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set-generic","->sorted-set-generic",-1218472326,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set-generic"], null)),output_schema35900_35906,cljs.core.deref.call(null,output_checker35903_35909),o__24533__auto__);
} else {
var temp__5720__auto___35914 = cljs.core.deref.call(null,output_checker35903_35909).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35914)){
var error__24532__auto___35915 = temp__5720__auto___35914;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->sorted-set-generic","->sorted-set-generic",-1218472326,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerces a set into a sorted-set-generic"], null)),cljs.core.pr_str.call(null,error__24532__auto___35915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35900_35906,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35915], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_sorted_set_generic),schema.core.__GT_FnSchema.call(null,output_schema35900_35906,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35901_35907], null)));

/**
 * Converts a lazy collection to a concrete (eager) collection of the same type.
 */
tupelo.core.unlazy = (function tupelo$core$unlazy(coll){
var unlazy_item = (function (item){
if(cljs.core.sequential_QMARK_.call(null,item)){
return cljs.core.vec.call(null,item);
} else {
if(cljs.core.map_QMARK_.call(null,item)){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),item);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),item);
} else {
return item;

}
}
}
});
var result = clojure.walk.prewalk.call(null,unlazy_item,coll);
return result;
});
/**
 * Returns true if the collection has the indicated length. Does not hang for infinite sequences.
 */
tupelo.core.has_length_QMARK_ = (function tupelo$core$has_length_QMARK_(coll,n){
if((coll == null)){
throw cljs.core.ex_info.call(null,"has-length?: coll must not be nil",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

var take_items = cljs.core.take.call(null,n,coll);
var rest_items = cljs.core.drop.call(null,n,coll);
return ((cljs.core._EQ_.call(null,n,cljs.core.count.call(null,take_items))) && (cljs.core.empty_QMARK_.call(null,rest_items)));
});
/**
 * Ensures that a sequence is of length=1, and returns the only value present.
 *   Throws an exception if the length of the sequence is not one.
 *   Note that, for a length-1 sequence S, (first S), (last S) and (only S) are equivalent.
 */
tupelo.core.only = (function tupelo$core$only(coll){
if(tupelo.core.has_length_QMARK_.call(null,coll,(1))){
} else {
throw cljs.core.ex_info.call(null,"only: num-items must=1",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
}

return cljs.core.first.call(null,coll);
});
/**
 * Given an outer collection of length-1 collections, returns a sequence of the unwrapped values.
 * 
 *      (onlies  [ [1] [2] [3] ])  =>  [1 2 3]
 *      (onlies #{ [1] [2] [3] })  => #{1 2 3}
 *      
 */
tupelo.core.onlies = (function tupelo$core$onlies(coll){
return cljs.core.into.call(null,tupelo.core.unlazy.call(null,cljs.core.empty.call(null,coll)),cljs.core.mapv.call(null,tupelo.core.only,coll));
});
/**
 * Given a collection like `[[5]]`, returns `5`.  Equivalent to `(only (only coll))`.
 */
tupelo.core.only2 = (function tupelo$core$only2(coll){
return tupelo.core.only.call(null,tupelo.core.only.call(null,coll));
});
/**
 * Returns true if the collection contains a single item.`
 */
tupelo.core.single_QMARK_ = (function tupelo$core$single_QMARK_(coll){
return ((cljs.core.sequential_QMARK_.call(null,coll)) && (tupelo.core.has_length_QMARK_.call(null,coll,(1))));
});
/**
 * Returns true if the collection contains exactly 2 items.
 */
tupelo.core.pair_QMARK_ = (function tupelo$core$pair_QMARK_(coll){
return ((cljs.core.sequential_QMARK_.call(null,coll)) && (tupelo.core.has_length_QMARK_.call(null,coll,(2))));
});
/**
 * Returns true if the collection contains exactly 3 items.
 */
tupelo.core.triple_QMARK_ = (function tupelo$core$triple_QMARK_(coll){
return ((cljs.core.sequential_QMARK_.call(null,coll)) && (tupelo.core.has_length_QMARK_.call(null,coll,(3))));
});
/**
 * Returns true if the collection contains exactly 4 items.
 */
tupelo.core.quad_QMARK_ = (function tupelo$core$quad_QMARK_(coll){
return ((cljs.core.sequential_QMARK_.call(null,coll)) && (tupelo.core.has_length_QMARK_.call(null,coll,(4))));
});
/**
 * Returns the first item in a sequence, or nil
 */
tupelo.core.first_or_nil = (function tupelo$core$first_or_nil(seq_arg){
return cljs.core.first.call(null,seq_arg);
});
/**
 * Returns the second item in a sequence, or nil
 */
tupelo.core.second_or_nil = (function tupelo$core$second_or_nil(seq_arg){
return cljs.core.first.call(null,cljs.core.drop.call(null,(1),seq_arg));
});
/**
 * Returns the third item in a sequence, or nil
 */
tupelo.core.third_or_nil = (function tupelo$core$third_or_nil(seq_arg){
return cljs.core.first.call(null,cljs.core.drop.call(null,(2),seq_arg));
});
/**
 * Returns the fourth item in a sequence, or nil
 */
tupelo.core.fourth_or_nil = (function tupelo$core$fourth_or_nil(seq_arg){
return cljs.core.first.call(null,cljs.core.drop.call(null,(3),seq_arg));
});
/**
 * Returns the last item in a sequence, or nil
 */
tupelo.core.last_or_nil = (function tupelo$core$last_or_nil(seq_arg){
return tupelo.core.first_or_nil.call(null,cljs.core.reverse.call(null,seq_arg));
});
/**
 * Returns a sequence with the first item removed, or a zero-length seq if there are no more items
 */
tupelo.core.rest_or_empty = (function tupelo$core$rest_or_empty(seq_arg){
return cljs.core.rest.call(null,seq_arg);
});
/**
 * Returns a sequence with the first item removed, or nil if there are no more items
 */
tupelo.core.rest_or_nil = (function tupelo$core$rest_or_nil(seq_arg){
return cljs.core.next.call(null,seq_arg);
});
tupelo.core.get_or_nil = (function tupelo$core$get_or_nil(mappy,key){
return cljs.core.get.call(null,mappy,key);
});
tupelo.core.get_or_default = (function tupelo$core$get_or_default(mappy,key,default$){
return cljs.core.get.call(null,mappy,key,default$);
});
/**
 * Returns the first n values from a collection.  Returns map for map colls.
 *   Throws if empty.
 */
tupelo.core.xtake = (function tupelo$core$xtake(n,coll){
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

if(((cljs.core.sequential_QMARK_.call(null,coll)) || (((cljs.core.map_QMARK_.call(null,coll)) || (cljs.core.set_QMARK_.call(null,coll)))))){
} else {
throw (new Error("Assert failed: (or (sequential? coll) (map? coll) (set? coll))"));
}

if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xtake: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

var items = cljs.core.take.call(null,n,coll);
var actual = cljs.core.count.call(null,items);
if((actual < n)){
throw cljs.core.ex_info.call(null,"xtake: insufficient items",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"actual","actual",107306363),actual], null));
} else {
}

if(cljs.core.sequential_QMARK_.call(null,coll)){
return cljs.core.vec.call(null,items);
} else {
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,items);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items);
} else {
throw cljs.core.ex_info.call(null,"Invalid collection type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));

}
}
}
});
var ufv___35922 = schema.utils.use_fn_validation;
var output_schema35916_35923 = tupelo.schema.Collection;
var input_schema35917_35924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null))),schema.core.one.call(null,tupelo.schema.Collection,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Collection","tsk/Collection",-1205677291,null)], null)))], null);
var input_checker35918_35925 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35917_35924);
}),null));
var output_checker35919_35926 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35916_35923);
}),null));
var ret__26117__auto___35927 = /**
 * Inputs: [n :- s/Num coll :- tsk/Collection]
 *   Returns: tsk/Collection
 * 
 *   Returns a collection as a vector with the first n values removed.    Returns map for map colls.
 *   Throws if empty.
 */
tupelo.core.xdrop = (function tupelo$core$xdrop(G__35920,G__35921){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35922);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35920,G__35921], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xdrop","xdrop",-162915984,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Collection","tsk/Collection",-1205677291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a collection as a vector with the first n values removed.    Returns map for map colls.\n  Throws if empty."], null)),input_schema35917_35924,cljs.core.deref.call(null,input_checker35918_35925),args__24531__auto___35928);
} else {
var temp__5720__auto___35929 = cljs.core.deref.call(null,input_checker35918_35925).call(null,args__24531__auto___35928);
if(cljs.core.truth_(temp__5720__auto___35929)){
var error__24532__auto___35930 = temp__5720__auto___35929;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xdrop","xdrop",-162915984,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Collection","tsk/Collection",-1205677291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a collection as a vector with the first n values removed.    Returns map for map colls.\n  Throws if empty."], null)),cljs.core.pr_str.call(null,error__24532__auto___35930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35917_35924,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35928,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35930], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var n = G__35920;
var coll = G__35921;
while(true){
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

if(((cljs.core.sequential_QMARK_.call(null,coll)) || (((cljs.core.map_QMARK_.call(null,coll)) || (cljs.core.set_QMARK_.call(null,coll)))))){
} else {
throw (new Error("Assert failed: (or (sequential? coll) (map? coll) (set? coll))"));
}

if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xdrop: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

var taken = cljs.core.take.call(null,n,coll);
var taken_cnt = cljs.core.count.call(null,taken);
var remaining = cljs.core.drop.call(null,n,coll);
if(cljs.core.not_EQ_.call(null,taken_cnt,n)){
throw cljs.core.ex_info.call(null,"xdrop: insufficient taken",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"actual","actual",107306363),taken_cnt], null));
} else {
}

if(cljs.core.sequential_QMARK_.call(null,coll)){
return cljs.core.vec.call(null,remaining);
} else {
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,remaining);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,remaining);
} else {
throw cljs.core.ex_info.call(null,"Invalid collection type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));

}
}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xdrop","xdrop",-162915984,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Collection","tsk/Collection",-1205677291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a collection as a vector with the first n values removed.    Returns map for map colls.\n  Throws if empty."], null)),output_schema35916_35923,cljs.core.deref.call(null,output_checker35919_35926),o__24533__auto__);
} else {
var temp__5720__auto___35931 = cljs.core.deref.call(null,output_checker35919_35926).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35931)){
var error__24532__auto___35932 = temp__5720__auto___35931;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xdrop","xdrop",-162915984,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Collection","tsk/Collection",-1205677291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a collection as a vector with the first n values removed.    Returns map for map colls.\n  Throws if empty."], null)),cljs.core.pr_str.call(null,error__24532__auto___35932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35916_35923,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35932], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xdrop),schema.core.__GT_FnSchema.call(null,output_schema35916_35923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35917_35924], null)));

/**
 * Returns the first value in a list or vector. Throws if empty.
 */
tupelo.core.xfirst = (function tupelo$core$xfirst(coll){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xfirst: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.nth.call(null,coll,(0));
});
/**
 * Returns the second value in a list or vector. Throws if (< len 2).
 */
tupelo.core.xsecond = (function tupelo$core$xsecond(coll){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xsecond: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.nth.call(null,coll,(1));
});
/**
 * Returns the third value in a list or vector. Throws if (< len 3).
 */
tupelo.core.xthird = (function tupelo$core$xthird(coll){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xthird: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.nth.call(null,coll,(2));
});
/**
 * Returns the fourth value in a list or vector. Throws if (< len 4).
 */
tupelo.core.xfourth = (function tupelo$core$xfourth(coll){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xfourth: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.nth.call(null,coll,(3));
});
var ufv___35938 = schema.utils.use_fn_validation;
var output_schema35933_35939 = schema.core.Any;
var input_schema35934_35940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35935_35941 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35934_35940);
}),null));
var output_checker35936_35942 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35933_35939);
}),null));
var ret__26117__auto___35943 = /**
 * Inputs: [coll :- [s/Any]]
 *   Returns: s/Any
 * 
 *   Returns the last value in a list or vector. Throws if empty.
 */
tupelo.core.xlast = (function tupelo$core$xlast(G__35937){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35938);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35937], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xlast","xlast",2044041055,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the last value in a list or vector. Throws if empty."], null)),input_schema35934_35940,cljs.core.deref.call(null,input_checker35935_35941),args__24531__auto___35944);
} else {
var temp__5720__auto___35945 = cljs.core.deref.call(null,input_checker35935_35941).call(null,args__24531__auto___35944);
if(cljs.core.truth_(temp__5720__auto___35945)){
var error__24532__auto___35946 = temp__5720__auto___35945;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xlast","xlast",2044041055,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the last value in a list or vector. Throws if empty."], null)),cljs.core.pr_str.call(null,error__24532__auto___35946)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35934_35940,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35944,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35946], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__35937;
while(true){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xlast: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.last.call(null,coll);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xlast","xlast",2044041055,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the last value in a list or vector. Throws if empty."], null)),output_schema35933_35939,cljs.core.deref.call(null,output_checker35936_35942),o__24533__auto__);
} else {
var temp__5720__auto___35947 = cljs.core.deref.call(null,output_checker35936_35942).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35947)){
var error__24532__auto___35948 = temp__5720__auto___35947;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xlast","xlast",2044041055,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the last value in a list or vector. Throws if empty."], null)),cljs.core.pr_str.call(null,error__24532__auto___35948)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35933_35939,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35948], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xlast),schema.core.__GT_FnSchema.call(null,output_schema35933_35939,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35934_35940], null)));

var ufv___35954 = schema.utils.use_fn_validation;
var output_schema35949_35955 = schema.core.Any;
var input_schema35950_35956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35951_35957 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35950_35956);
}),null));
var output_checker35952_35958 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35949_35955);
}),null));
var ret__26117__auto___35959 = /**
 * Inputs: [coll :- [s/Any]]
 *   Returns: s/Any
 * 
 *   Returns a vector of all but the last value in a list or vector. Throws if empty.
 */
tupelo.core.xbutlast = (function tupelo$core$xbutlast(G__35953){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35954);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35953], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xbutlast","xbutlast",-192546365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of all but the last value in a list or vector. Throws if empty."], null)),input_schema35950_35956,cljs.core.deref.call(null,input_checker35951_35957),args__24531__auto___35960);
} else {
var temp__5720__auto___35961 = cljs.core.deref.call(null,input_checker35951_35957).call(null,args__24531__auto___35960);
if(cljs.core.truth_(temp__5720__auto___35961)){
var error__24532__auto___35962 = temp__5720__auto___35961;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xbutlast","xbutlast",-192546365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of all but the last value in a list or vector. Throws if empty."], null)),cljs.core.pr_str.call(null,error__24532__auto___35962)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35950_35956,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35960,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35962], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__35953;
while(true){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xbutlast: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.vec.call(null,cljs.core.butlast.call(null,coll));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xbutlast","xbutlast",-192546365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of all but the last value in a list or vector. Throws if empty."], null)),output_schema35949_35955,cljs.core.deref.call(null,output_checker35952_35958),o__24533__auto__);
} else {
var temp__5720__auto___35963 = cljs.core.deref.call(null,output_checker35952_35958).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35963)){
var error__24532__auto___35964 = temp__5720__auto___35963;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xbutlast","xbutlast",-192546365,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of all but the last value in a list or vector. Throws if empty."], null)),cljs.core.pr_str.call(null,error__24532__auto___35964)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35949_35955,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35964], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xbutlast),schema.core.__GT_FnSchema.call(null,output_schema35949_35955,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35950_35956], null)));

/**
 * Returns the last value in a list or vector. Throws if empty.
 */
tupelo.core.xrest = (function tupelo$core$xrest(coll){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"xrest: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.rest.call(null,coll);
});
/**
 * Returns a vector containing a sequence in reversed order. Throws if nil.
 */
tupelo.core.xreverse = (function tupelo$core$xreverse(coll){
if((coll == null)){
throw cljs.core.ex_info.call(null,"xreverse: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.vec.call(null,cljs.core.reverse.call(null,coll));
});
var ufv___35970 = schema.utils.use_fn_validation;
var output_schema35965_35971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema35966_35972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35967_35973 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35966_35972);
}),null));
var output_checker35968_35974 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35965_35971);
}),null));
var ret__26117__auto___35975 = /**
 * Inputs: [coll :- [s/Any]]
 *   Returns: [s/Any]
 * 
 *   Converts a collection into a vector. Throws if given nil.
 */
tupelo.core.xvec = (function tupelo$core$xvec(G__35969){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35970);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35969], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xvec","xvec",1175123527,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a collection into a vector. Throws if given nil."], null)),input_schema35966_35972,cljs.core.deref.call(null,input_checker35967_35973),args__24531__auto___35976);
} else {
var temp__5720__auto___35977 = cljs.core.deref.call(null,input_checker35967_35973).call(null,args__24531__auto___35976);
if(cljs.core.truth_(temp__5720__auto___35977)){
var error__24532__auto___35978 = temp__5720__auto___35977;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xvec","xvec",1175123527,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a collection into a vector. Throws if given nil."], null)),cljs.core.pr_str.call(null,error__24532__auto___35978)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35966_35972,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35976,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35978], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__35969;
while(true){
if((coll == null)){
throw cljs.core.ex_info.call(null,"xvec: invalid coll: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return cljs.core.vec.call(null,coll);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xvec","xvec",1175123527,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a collection into a vector. Throws if given nil."], null)),output_schema35965_35971,cljs.core.deref.call(null,output_checker35968_35974),o__24533__auto__);
} else {
var temp__5720__auto___35979 = cljs.core.deref.call(null,output_checker35968_35974).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35979)){
var error__24532__auto___35980 = temp__5720__auto___35979;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xvec","xvec",1175123527,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a collection into a vector. Throws if given nil."], null)),cljs.core.pr_str.call(null,error__24532__auto___35980)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35965_35971,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35980], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xvec),schema.core.__GT_FnSchema.call(null,output_schema35965_35971,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35966_35972], null)));

var ufv___35986 = schema.utils.use_fn_validation;
var output_schema35981_35987 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema35982_35988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker35983_35989 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35982_35988);
}),null));
var output_checker35984_35990 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35981_35987);
}),null));
var ret__26117__auto___35991 = /**
 * Inputs: [arg :- [s/Any]]
 *   Returns: [s/Any]
 * 
 *   Coerce any sequential argument into a List.
 */
tupelo.core.__GT_list = (function tupelo$core$__GT_list(G__35985){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___35986);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___35992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35985], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->list","->list",-475347049,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce any sequential argument into a List."], null)),input_schema35982_35988,cljs.core.deref.call(null,input_checker35983_35989),args__24531__auto___35992);
} else {
var temp__5720__auto___35993 = cljs.core.deref.call(null,input_checker35983_35989).call(null,args__24531__auto___35992);
if(cljs.core.truth_(temp__5720__auto___35993)){
var error__24532__auto___35994 = temp__5720__auto___35993;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->list","->list",-475347049,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce any sequential argument into a List."], null)),cljs.core.pr_str.call(null,error__24532__auto___35994)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35982_35988,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___35992,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35994], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__35985;
while(true){
return cljs.core.apply.call(null,cljs.core.list,arg);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->list","->list",-475347049,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce any sequential argument into a List."], null)),output_schema35981_35987,cljs.core.deref.call(null,output_checker35984_35990),o__24533__auto__);
} else {
var temp__5720__auto___35995 = cljs.core.deref.call(null,output_checker35984_35990).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___35995)){
var error__24532__auto___35996 = temp__5720__auto___35995;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->list","->list",-475347049,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce any sequential argument into a List."], null)),cljs.core.pr_str.call(null,error__24532__auto___35996)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35981_35987,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___35996], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_list),schema.core.__GT_FnSchema.call(null,output_schema35981_35987,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35982_35988], null)));

var ufv___36002 = schema.utils.use_fn_validation;
var output_schema35997_36003 = schema.core.Bool;
var input_schema35998_36004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35999_36005 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema35998_36004);
}),null));
var output_checker36000_36006 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema35997_36003);
}),null));
var ret__26117__auto___36007 = /**
 * Inputs: [coll]
 *   Returns: s/Bool
 * 
 *   Like clojure.core/sequential? EXCEPT returns false for clojure.lang.MapEntry
 */
tupelo.core.xsequential_QMARK_ = (function tupelo$core$xsequential_QMARK_(G__36001){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36002);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36001], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xsequential?","xsequential?",1469745423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/sequential? EXCEPT returns false for clojure.lang.MapEntry"], null)),input_schema35998_36004,cljs.core.deref.call(null,input_checker35999_36005),args__24531__auto___36008);
} else {
var temp__5720__auto___36009 = cljs.core.deref.call(null,input_checker35999_36005).call(null,args__24531__auto___36008);
if(cljs.core.truth_(temp__5720__auto___36009)){
var error__24532__auto___36010 = temp__5720__auto___36009;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xsequential?","xsequential?",1469745423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/sequential? EXCEPT returns false for clojure.lang.MapEntry"], null)),cljs.core.pr_str.call(null,error__24532__auto___36010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35998_36004,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36008,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36010], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__36001;
while(true){
return ((cljs.core.sequential_QMARK_.call(null,coll)) && ((!(cljs.core.map_entry_QMARK_.call(null,coll)))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xsequential?","xsequential?",1469745423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/sequential? EXCEPT returns false for clojure.lang.MapEntry"], null)),output_schema35997_36003,cljs.core.deref.call(null,output_checker36000_36006),o__24533__auto__);
} else {
var temp__5720__auto___36011 = cljs.core.deref.call(null,output_checker36000_36006).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36011)){
var error__24532__auto___36012 = temp__5720__auto___36011;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xsequential?","xsequential?",1469745423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/sequential? EXCEPT returns false for clojure.lang.MapEntry"], null)),cljs.core.pr_str.call(null,error__24532__auto___36012)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35997_36003,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36012], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xsequential_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema35997_36003,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35998_36004], null)));

var ufv___36018 = schema.utils.use_fn_validation;
var output_schema36013_36019 = schema.core.Bool;
var input_schema36014_36020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker36015_36021 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36014_36020);
}),null));
var output_checker36016_36022 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36013_36019);
}),null));
var ret__26117__auto___36023 = /**
 * Inputs: [arg :- s/Any]
 *   Returns: s/Bool
 * 
 *   Like clojure.core/map?, but returns false for records.
 */
tupelo.core.xmap_QMARK_ = (function tupelo$core$xmap_QMARK_(G__36017){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36018);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36017], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xmap?","xmap?",328948866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/map?, but returns false for records."], null)),input_schema36014_36020,cljs.core.deref.call(null,input_checker36015_36021),args__24531__auto___36024);
} else {
var temp__5720__auto___36025 = cljs.core.deref.call(null,input_checker36015_36021).call(null,args__24531__auto___36024);
if(cljs.core.truth_(temp__5720__auto___36025)){
var error__24532__auto___36026 = temp__5720__auto___36025;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xmap?","xmap?",328948866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/map?, but returns false for records."], null)),cljs.core.pr_str.call(null,error__24532__auto___36026)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36014_36020,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36024,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36026], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__36017;
while(true){
return ((cljs.core.map_QMARK_.call(null,arg)) && ((!(cljs.core.record_QMARK_.call(null,arg)))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xmap?","xmap?",328948866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/map?, but returns false for records."], null)),output_schema36013_36019,cljs.core.deref.call(null,output_checker36016_36022),o__24533__auto__);
} else {
var temp__5720__auto___36027 = cljs.core.deref.call(null,output_checker36016_36022).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36027)){
var error__24532__auto___36028 = temp__5720__auto___36027;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xmap?","xmap?",328948866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/map?, but returns false for records."], null)),cljs.core.pr_str.call(null,error__24532__auto___36028)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36013_36019,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36028], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xmap_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema36013_36019,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36014_36020], null)));

var ret__4878__auto___36032 = (function (){
/**
 * Like clojure.core/for but returns results in a vector.
 *   Wraps the loop body in a `do` as with `doseq`. Not lazy.
 */
tupelo.core.forv = (function tupelo$core$forv(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36033 = arguments.length;
var i__4830__auto___36034 = (0);
while(true){
if((i__4830__auto___36034 < len__4829__auto___36033)){
args__4835__auto__.push((arguments[i__4830__auto___36034]));

var G__36035 = (i__4830__auto___36034 + (1));
i__4830__auto___36034 = G__36035;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.forv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.forv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var bindings_vec = tupelo.core.xfirst.call(null,forms);
var body_forms = tupelo.core.xrest.call(null,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,bindings_vec,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_forms))),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.forv.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.forv.cljs$lang$applyTo = (function (seq36029){
var G__36030 = cljs.core.first.call(null,seq36029);
var seq36029__$1 = cljs.core.next.call(null,seq36029);
var G__36031 = cljs.core.first.call(null,seq36029__$1);
var seq36029__$2 = cljs.core.next.call(null,seq36029__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36030,G__36031,seq36029__$2);
}));

return null;
})()
;
(tupelo.core.forv.cljs$lang$macro = true);

var ret__4878__auto___36039 = (function (){
/**
 * Like clojure.core/for but returns results in an eager list.
 *   Wraps the loop body in a `do` as with `doseq`. Not lazy.
 */
tupelo.core.for_list = (function tupelo$core$for_list(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36040 = arguments.length;
var i__4830__auto___36041 = (0);
while(true){
if((i__4830__auto___36041 < len__4829__auto___36040)){
args__4835__auto__.push((arguments[i__4830__auto___36041]));

var G__36042 = (i__4830__auto___36041 + (1));
i__4830__auto___36041 = G__36042;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.for_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.for_list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var bindings_vec = tupelo.core.xfirst.call(null,forms);
var body_forms = tupelo.core.xrest.call(null,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","->list","tupelo.core/->list",-630191125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,bindings_vec,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_forms))),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.for_list.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.for_list.cljs$lang$applyTo = (function (seq36036){
var G__36037 = cljs.core.first.call(null,seq36036);
var seq36036__$1 = cljs.core.next.call(null,seq36036);
var G__36038 = cljs.core.first.call(null,seq36036__$1);
var seq36036__$2 = cljs.core.next.call(null,seq36036__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36037,G__36038,seq36036__$2);
}));

return null;
})()
;
(tupelo.core.for_list.cljs$lang$macro = true);

var ret__4878__auto___36046 = (function (){
/**
 * Like clojure.core/map but returns results in an eager list. Not lazy.
 */
tupelo.core.map_list = (function tupelo$core$map_list(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36047 = arguments.length;
var i__4830__auto___36048 = (0);
while(true){
if((i__4830__auto___36048 < len__4829__auto___36047)){
args__4835__auto__.push((arguments[i__4830__auto___36048]));

var G__36049 = (i__4830__auto___36048 + (1));
i__4830__auto___36048 = G__36049;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.map_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.map_list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","->list","tupelo.core/->list",-630191125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),forms))),null,(1),null)))));
}));

(tupelo.core.map_list.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.map_list.cljs$lang$applyTo = (function (seq36043){
var G__36044 = cljs.core.first.call(null,seq36043);
var seq36043__$1 = cljs.core.next.call(null,seq36043);
var G__36045 = cljs.core.first.call(null,seq36043__$1);
var seq36043__$2 = cljs.core.next.call(null,seq36043__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36044,G__36045,seq36043__$2);
}));

return null;
})()
;
(tupelo.core.map_list.cljs$lang$macro = true);

tupelo.core.for_indexed_impl = (function tupelo$core$for_indexed_impl(forms){
var bindings_vec = tupelo.core.xfirst.call(null,forms);
var body_forms = tupelo.core.xrest.call(null,forms);
var _GT__GT_ = ((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings_vec)))?null:(function(){throw cljs.core.ex_info.call(null,"for-indexed: binding form must be len=2 ",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings-vec","bindings-vec",-1020892054),bindings_vec], null)))})());
var bndg_dest = tupelo.core.xfirst.call(null,bindings_vec);
var bndg_src = tupelo.core.xsecond.call(null,bindings_vec);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,bndg_dest,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","indexed","tupelo.core/indexed",1322798075,null),null,(1),null)),(new cljs.core.List(null,bndg_src,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_forms))),null,(1),null))))),null,(1),null)))));
});
var ret__4878__auto___36053 = (function (){
/**
 * Like clojure.core/map-indexed, converts each element x in a sequence into a Pair [i x],
 *   where `i` is the zero-based index number. Supports only a single sequence in the binding form.
 *   Wraps all forms with an implicit `(do ...)` as with clojure.core/doseq.  Use `tupelo.core/indexed`
 *   for more complicated looping constructs. Usage:
 * 
 *      (for-indexed [[i x] vals]
 *        (println (format "i=%d x=%s" i x))
 *        {:i i :x x} )
 * 
 *   is equivalent to:
 * 
 *    (vec
 *      (for [[i x] (indexed vals)]
 *        (do
 *          (println (format "i=%d x=%s" i x))
 *          {:i i :x x} )))  
 */
tupelo.core.for_indexed = (function tupelo$core$for_indexed(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36054 = arguments.length;
var i__4830__auto___36055 = (0);
while(true){
if((i__4830__auto___36055 < len__4829__auto___36054)){
args__4835__auto__.push((arguments[i__4830__auto___36055]));

var G__36056 = (i__4830__auto___36055 + (1));
i__4830__auto___36055 = G__36056;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.for_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.for_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return tupelo.core.for_indexed_impl.call(null,forms);
}));

(tupelo.core.for_indexed.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.for_indexed.cljs$lang$applyTo = (function (seq36050){
var G__36051 = cljs.core.first.call(null,seq36050);
var seq36050__$1 = cljs.core.next.call(null,seq36050);
var G__36052 = cljs.core.first.call(null,seq36050__$1);
var seq36050__$2 = cljs.core.next.call(null,seq36050__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36051,G__36052,seq36050__$2);
}));

return null;
})()
;
(tupelo.core.for_indexed.cljs$lang$macro = true);

/**
 * Returns a vector of items in coll for which (pred item) is true (alias for clojure.core/filter)
 */
tupelo.core.keep_if = (function tupelo$core$keep_if(pred,coll){
if(cljs.core.sequential_QMARK_.call(null,coll)){
return cljs.core.vec.call(null,cljs.core.filter.call(null,pred,coll));
} else {
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.reduce_kv.call(null,(function (cum_map,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.assoc.call(null,cum_map,k,v);
} else {
return cum_map;
}
}),cljs.core.PersistentArrayMap.EMPTY,coll);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.reduce.call(null,(function (cum_set,elem){
if(cljs.core.truth_(pred.call(null,elem))){
return cljs.core.conj.call(null,cum_set,elem);
} else {
return cum_set;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.seq.call(null,coll));
} else {
throw cljs.core.ex_info.call(null,"keep-if: coll must be sequential, map, or set.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));

}
}
}
});
/**
 * Returns a vector of items in coll for which (pred item) is false (alias for clojure.core/remove)
 */
tupelo.core.drop_if = (function tupelo$core$drop_if(pred,coll){
return tupelo.core.keep_if.call(null,cljs.core.complement.call(null,pred),coll);
});
var ufv___36065 = schema.utils.use_fn_validation;
var output_schema36057_36066 = tupelo.schema.List;
var input_schema36058_36067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"listy","listy",-908612453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.Any], null);
var input_checker36059_36068 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36058_36067);
}),null));
var output_checker36060_36069 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36057_36066);
}),null));
var ret__26117__auto___36070 = (function (){
/**
 * Inputs: [listy :- tsk/List & elems :- [s/Any]]
 *   Returns: tsk/List
 * 
 *   Given a sequential object (vector or list), add one or more elements to the end.
 */
tupelo.core.append = (function tupelo$core$append(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36071 = arguments.length;
var i__4830__auto___36072 = (0);
while(true){
if((i__4830__auto___36072 < len__4829__auto___36071)){
args__4835__auto__.push((arguments[i__4830__auto___36072]));

var G__36073 = (i__4830__auto___36072 + (1));
i__4830__auto___36072 = G__36073;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.append.cljs$core$IFn$_invoke$arity$variadic = (function (G__36061,rest36062){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36065);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36074 = cljs.core.list_STAR_.call(null,G__36061,rest36062);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the end."], null)),input_schema36058_36067,cljs.core.deref.call(null,input_checker36059_36068),args__24531__auto___36074);
} else {
var temp__5720__auto___36075 = cljs.core.deref.call(null,input_checker36059_36068).call(null,args__24531__auto___36074);
if(cljs.core.truth_(temp__5720__auto___36075)){
var error__24532__auto___36076 = temp__5720__auto___36075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the end."], null)),cljs.core.pr_str.call(null,error__24532__auto___36076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36058_36067,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36074,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36076], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var listy = G__36061;
var elems = rest36062;
while(true){
if(cljs.core.sequential_QMARK_.call(null,listy)){
} else {
throw cljs.core.ex_info.call(null,"append: Sequential collection required, found=",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listy","listy",1745823316),listy], null));
}

if(cljs.core.empty_QMARK_.call(null,elems)){
throw cljs.core.ex_info.call(null,"Nothing to append! elems=",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elems","elems",-547490822),elems], null));
} else {
}

return cljs.core.vec.call(null,cljs.core.concat.call(null,listy,elems));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the end."], null)),output_schema36057_36066,cljs.core.deref.call(null,output_checker36060_36069),o__24533__auto__);
} else {
var temp__5720__auto___36077 = cljs.core.deref.call(null,output_checker36060_36069).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36077)){
var error__24532__auto___36078 = temp__5720__auto___36077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"append","append",1349233298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the end."], null)),cljs.core.pr_str.call(null,error__24532__auto___36078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36057_36066,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36078], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.append.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.append.cljs$lang$applyTo = (function (seq36063){
var G__36064 = cljs.core.first.call(null,seq36063);
var seq36063__$1 = cljs.core.next.call(null,seq36063);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36064,seq36063__$1);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.append),schema.core.__GT_FnSchema.call(null,output_schema36057_36066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36058_36067], null)));

var ufv___36085 = schema.utils.use_fn_validation;
var output_schema36079_36086 = tupelo.schema.List;
var input_schema36080_36087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker36081_36088 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36080_36087);
}),null));
var output_checker36082_36089 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36079_36086);
}),null));
var ret__26117__auto___36090 = (function (){
/**
 * Inputs: [& args]
 *   Returns: tsk/List
 * 
 *   Given a sequential object (vector or list), add one or more elements to the beginning
 */
tupelo.core.prepend = (function tupelo$core$prepend(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36091 = arguments.length;
var i__4830__auto___36092 = (0);
while(true){
if((i__4830__auto___36092 < len__4829__auto___36091)){
args__4835__auto__.push((arguments[i__4830__auto___36092]));

var G__36093 = (i__4830__auto___36092 + (1));
i__4830__auto___36092 = G__36093;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (rest36083){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36085);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36094 = cljs.core.list_STAR_.call(null,rest36083);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"prepend","prepend",1983147567,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the beginning"], null)),input_schema36080_36087,cljs.core.deref.call(null,input_checker36081_36088),args__24531__auto___36094);
} else {
var temp__5720__auto___36095 = cljs.core.deref.call(null,input_checker36081_36088).call(null,args__24531__auto___36094);
if(cljs.core.truth_(temp__5720__auto___36095)){
var error__24532__auto___36096 = temp__5720__auto___36095;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"prepend","prepend",1983147567,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the beginning"], null)),cljs.core.pr_str.call(null,error__24532__auto___36096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36080_36087,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36094,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36096], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var args = rest36083;
while(true){
var elems = cljs.core.butlast.call(null,args);
var listy = tupelo.core.xlast.call(null,args);
if(cljs.core.sequential_QMARK_.call(null,listy)){
} else {
throw cljs.core.ex_info.call(null,"prepend: Sequential collection required, found=",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listy","listy",1745823316),listy], null));
}

if(cljs.core.empty_QMARK_.call(null,elems)){
throw cljs.core.ex_info.call(null,"Nothing to prepend! elems=",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elems","elems",-547490822),elems], null));
} else {
}

return cljs.core.vec.call(null,cljs.core.concat.call(null,elems,listy));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"prepend","prepend",1983147567,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the beginning"], null)),output_schema36079_36086,cljs.core.deref.call(null,output_checker36082_36089),o__24533__auto__);
} else {
var temp__5720__auto___36097 = cljs.core.deref.call(null,output_checker36082_36089).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36097)){
var error__24532__auto___36098 = temp__5720__auto___36097;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"prepend","prepend",1983147567,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequential object (vector or list), add one or more elements to the beginning"], null)),cljs.core.pr_str.call(null,error__24532__auto___36098)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36079_36086,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36098], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.prepend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.prepend.cljs$lang$applyTo = (function (seq36084){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36084));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.prepend),schema.core.__GT_FnSchema.call(null,output_schema36079_36086,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36080_36087], null)));

tupelo.core._STAR_spy_enabled_STAR_ = true;
tupelo.core._STAR_spy_enabled_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
var ret__4878__auto___36103 = (function (){
tupelo.core.with_spy_enabled = (function tupelo$core$with_spy_enabled(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36104 = arguments.length;
var i__4830__auto___36105 = (0);
while(true){
if((i__4830__auto___36105 < len__4829__auto___36104)){
args__4835__auto__.push((arguments[i__4830__auto___36105]));

var G__36106 = (i__4830__auto___36105 + (1));
i__4830__auto___36105 = G__36106;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.with_spy_enabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.with_spy_enabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tag,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled-map*","tupelo.core/*spy-enabled-map*",736260471,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled-map*","tupelo.core/*spy-enabled-map*",736260471,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)))))),null,(1),null)),forms)));
}));

(tupelo.core.with_spy_enabled.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.with_spy_enabled.cljs$lang$applyTo = (function (seq36099){
var G__36100 = cljs.core.first.call(null,seq36099);
var seq36099__$1 = cljs.core.next.call(null,seq36099);
var G__36101 = cljs.core.first.call(null,seq36099__$1);
var seq36099__$2 = cljs.core.next.call(null,seq36099__$1);
var G__36102 = cljs.core.first.call(null,seq36099__$2);
var seq36099__$3 = cljs.core.next.call(null,seq36099__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36100,G__36101,G__36102,seq36099__$3);
}));

return null;
})()
;
(tupelo.core.with_spy_enabled.cljs$lang$macro = true);

var ret__4878__auto___36111 = (function (){
tupelo.core.check_spy_enabled = (function tupelo$core$check_spy_enabled(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36112 = arguments.length;
var i__4830__auto___36113 = (0);
while(true){
if((i__4830__auto___36113 < len__4829__auto___36112)){
args__4835__auto__.push((arguments[i__4830__auto___36113]));

var G__36114 = (i__4830__auto___36113 + (1));
i__4830__auto___36113 = G__36114;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.check_spy_enabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.check_spy_enabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tag,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled-map*","tupelo.core/*spy-enabled-map*",736260471,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))))),null,(1),null)),forms)));
}));

(tupelo.core.check_spy_enabled.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.check_spy_enabled.cljs$lang$applyTo = (function (seq36107){
var G__36108 = cljs.core.first.call(null,seq36107);
var seq36107__$1 = cljs.core.next.call(null,seq36107);
var G__36109 = cljs.core.first.call(null,seq36107__$1);
var seq36107__$2 = cljs.core.next.call(null,seq36107__$1);
var G__36110 = cljs.core.first.call(null,seq36107__$2);
var seq36107__$3 = cljs.core.next.call(null,seq36107__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36108,G__36109,G__36110,seq36107__$3);
}));

return null;
})()
;
(tupelo.core.check_spy_enabled.cljs$lang$macro = true);

tupelo.core.spy_indent_level = cljs.core.atom.call(null,(0));
tupelo.core.spy_indent_spaces = (function tupelo$core$spy_indent_spaces(){
return clojure.string.join.call(null,cljs.core.repeat.call(null,((2) * cljs.core.deref.call(null,tupelo.core.spy_indent_level))," "));
});
/**
 * Increase the spy indent level by one.
 */
tupelo.core.spy_indent_inc = (function tupelo$core$spy_indent_inc(){
return cljs.core.swap_BANG_.call(null,tupelo.core.spy_indent_level,cljs.core.inc);
});
/**
 * Decrease the spy indent level by one.
 */
tupelo.core.spy_indent_dec = (function tupelo$core$spy_indent_dec(){
return cljs.core.swap_BANG_.call(null,tupelo.core.spy_indent_level,cljs.core.dec);
});
/**
 * Reset the spy indent level to zero.
 */
tupelo.core.spy_indent_reset = (function tupelo$core$spy_indent_reset(){
return cljs.core.reset_BANG_.call(null,tupelo.core.spy_indent_level,(0));
});
tupelo.core.spy2_impl = (function tupelo$core$spy2_impl(arg1,arg2){
var vec__36115 = (((arg1 instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg1,arg2], null):(((arg2 instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg2,arg1], null):(function(){throw cljs.core.ex_info.call(null,"spy: either first or 2nd arg must be a keyword tag \n   args:",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg1","arg1",951899358),arg1,new cljs.core.Keyword(null,"arg2","arg2",1729550917),arg2], null))})()
));
var tag = cljs.core.nth.call(null,vec__36115,(0),null);
var value = cljs.core.nth.call(null,vec__36115,(1),null);
if(cljs.core.truth_(tupelo.core._STAR_spy_enabled_STAR_)){
cljs.core.println.call(null,[tupelo.core.spy_indent_spaces.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," => ",cljs.core.pr_str.call(null,value)].join(''));
} else {
}

return value;
});
var ret__4878__auto___36121 = (function (){
/**
 * A form of (println ...) to ease debugging display of either intermediate values in threading
 * forms or function return values. There are three variants.  Usage:
 * 
 *  (spy :msg <msg-string>)
 * 
 *    This variant is intended for use in either thread-first (->) or thread-last (->>)
 *    forms.  The keyword :msg is used to identify the message string and works equally
 *    well for both the -> and ->> operators. Spy prints both <msg-string>  and the
 *    threading value to stdout, then returns the value for further propogation in the
 *    threading form. For example, both of the following:
 * 
 *          (->   2
 *                (+ 3)
 *                (spy :msg "sum" )
 *                (* 4))
 *          (->>  2
 *                (+ 3)
 *                (spy :msg "sum" )
 *                (* 4))
 * 
 *      will print 'sum => 5' to stdout.
 * 
 *  (spy <msg-string> <value>)
 *    This variant is intended for simpler use cases such as function return values.
 *    Function return value expressions often invoke other functions and cannot be
 *    easily displayed since (println ...) swallows the return value and returns nil
 *    itself.  Spy will output both <msg-string> and the value, then return the value
 *    for use by further processing.  For example, the following:
 * 
 *          (println (* 2
 *                     (spy "sum" (+ 3 4))))
 *    will print:
 * 
 *          sum => 7
 *          14
 * 
 *    to stdout.
 * 
 *  (spy <value>)
 *      This variant is intended for use in very simple situations and is the same as the
 *      2-argument arity where <msg-string> defaults to 'spy'.  For example (spy (+ 2 3))
 *      prints 'spy => 5' to stdout.  
 */
tupelo.core.spy = (function tupelo$core$spy(var_args){
var G__36120 = arguments.length;
switch (G__36120) {
case 3:
return tupelo.core.spy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tupelo.core.spy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(tupelo.core.spy.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,value){
var src_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var src_ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_));
var out_tag = cljs.core.keyword.call(null,tupelo.core.format.call(null,"spy--%s--line-%03d",src_ns_str,src_line));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36118__auto__","result__36118__auto__",-212140281,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,out_tag,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36118__auto__","result__36118__auto__",-212140281,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36118__auto__","result__36118__auto__",-212140281,null),null,(1),null)))));
}));

(tupelo.core.spy.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,arg1,arg2){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy2-impl","tupelo.core/spy2-impl",-1587049705,null),null,(1),null)),(new cljs.core.List(null,arg1,null,(1),null)),(new cljs.core.List(null,arg2,null,(1),null)))));
}));

(tupelo.core.spy.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(tupelo.core.spy.cljs$lang$macro = true);

tupelo.core.spyx_impl = (function tupelo$core$spyx_impl(exprs){
var r1 = (function (){var iter__4622__auto__ = (function tupelo$core$spyx_impl_$_iter__36124(s__36125){
return (new cljs.core.LazySeq(null,(function (){
var s__36125__$1 = s__36125;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36125__$1);
if(temp__5720__auto__){
var s__36125__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36125__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36125__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36127 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36126 = (0);
while(true){
if((i__36126 < size__4621__auto__)){
var expr = cljs.core._nth.call(null,c__4620__auto__,i__36126);
cljs.core.chunk_append.call(null,b__36127,(cljs.core.truth_(tupelo.core._STAR_spy_enabled_STAR_)?(((expr instanceof cljs.core.Keyword))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","print","cljs.core/print",1475912266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))):null));

var G__36128 = (i__36126 + (1));
i__36126 = G__36128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36127),tupelo$core$spyx_impl_$_iter__36124.call(null,cljs.core.chunk_rest.call(null,s__36125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36127),null);
}
} else {
var expr = cljs.core.first.call(null,s__36125__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(tupelo.core._STAR_spy_enabled_STAR_)?(((expr instanceof cljs.core.Keyword))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","print","cljs.core/print",1475912266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))):null),tupelo$core$spyx_impl_$_iter__36124.call(null,cljs.core.rest.call(null,s__36125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.butlast.call(null,exprs));
})();
var r2 = (function (){var expr = tupelo.core.xlast.call(null,exprs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36123__auto__","spy-val__36123__auto__",2075747550,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36123__auto__","spy-val__36123__auto__",2075747550,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36123__auto__","spy-val__36123__auto__",2075747550,null),null,(1),null)))));
})();
var final_code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),r1,(new cljs.core.List(null,r2,null,(1),null)))));
return final_code;
});
var ret__4878__auto___36132 = (function (){
/**
 * An expression (println ...) for use in threading forms (& elsewhere). Evaluates the supplied
 * expressions, printing both the expression and its value to stdout. Returns the value of the
 * last expression.
 */
tupelo.core.spyx = (function tupelo$core$spyx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36133 = arguments.length;
var i__4830__auto___36134 = (0);
while(true){
if((i__4830__auto___36134 < len__4829__auto___36133)){
args__4835__auto__.push((arguments[i__4830__auto___36134]));

var G__36135 = (i__4830__auto___36134 + (1));
i__4830__auto___36134 = G__36135;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.spyx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.spyx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return tupelo.core.spyx_impl.call(null,exprs);
}));

(tupelo.core.spyx.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.spyx.cljs$lang$applyTo = (function (seq36129){
var G__36130 = cljs.core.first.call(null,seq36129);
var seq36129__$1 = cljs.core.next.call(null,seq36129);
var G__36131 = cljs.core.first.call(null,seq36129__$1);
var seq36129__$2 = cljs.core.next.call(null,seq36129__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36130,G__36131,seq36129__$2);
}));

return null;
})()
;
(tupelo.core.spyx.cljs$lang$macro = true);

tupelo.core.spy_pretty_impl = (function tupelo$core$spy_pretty_impl(exprs){
var r1 = (function (){var iter__4622__auto__ = (function tupelo$core$spy_pretty_impl_$_iter__36137(s__36138){
return (new cljs.core.LazySeq(null,(function (){
var s__36138__$1 = s__36138;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36138__$1);
if(temp__5720__auto__){
var s__36138__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36138__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36138__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36140 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36139 = (0);
while(true){
if((i__36139 < size__4621__auto__)){
var expr = cljs.core._nth.call(null,c__4620__auto__,i__36139);
cljs.core.chunk_append.call(null,b__36140,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null," => ",null,(1),null))))),null,(1),null))))),null,(1),null))))));

var G__36141 = (i__36139 + (1));
i__36139 = G__36141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36140),tupelo$core$spy_pretty_impl_$_iter__36137.call(null,cljs.core.chunk_rest.call(null,s__36138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36140),null);
}
} else {
var expr = cljs.core.first.call(null,s__36138__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null," => ",null,(1),null))))),null,(1),null))))),null,(1),null))))),tupelo$core$spy_pretty_impl_$_iter__36137.call(null,cljs.core.rest.call(null,s__36138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.butlast.call(null,exprs));
})();
var r2 = (function (){var expr = tupelo.core.xlast.call(null,exprs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36136__auto__","spy-val__36136__auto__",852470481,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","indent-lines-with","tupelo.core/indent-lines-with",-738101600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","pretty-str","tupelo.core/pretty-str",-676904550,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36136__auto__","spy-val__36136__auto__",852470481,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36136__auto__","spy-val__36136__auto__",852470481,null),null,(1),null)))));
})();
var final_code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),r1,(new cljs.core.List(null,r2,null,(1),null)))));
return final_code;
});
/**
 * (spyq <value>) - Spy Quiet
 *      This variant is intended for use in very simple situations and is the same as the
 *      2-argument arity where <msg-string> defaults to 'spy'.  For example (spy (+ 2 3))
 *      prints 'spy => 5' to stdout.  
 */
tupelo.core.spyq = (function tupelo$core$spyq(value){
if(cljs.core.truth_(tupelo.core._STAR_spy_enabled_STAR_)){
cljs.core.println.call(null,[tupelo.core.spy_indent_spaces.call(null),cljs.core.pr_str.call(null,value)].join(''));
} else {
}

return value;
});
tupelo.core.spydiv = (function tupelo$core$spydiv(){
return tupelo.core.spyq.call(null,new cljs.core.Keyword(null,"-----------------------------------------------------------------------------","-----------------------------------------------------------------------------",-2004821117));
});
var ret__4878__auto___36145 = (function (){
/**
 * Like `spyx-pretty` but without printing the original form
 */
tupelo.core.spy_pretty = (function tupelo$core$spy_pretty(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36146 = arguments.length;
var i__4830__auto___36147 = (0);
while(true){
if((i__4830__auto___36147 < len__4829__auto___36146)){
args__4835__auto__.push((arguments[i__4830__auto___36147]));

var G__36148 = (i__4830__auto___36147 + (1));
i__4830__auto___36147 = G__36148;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.spy_pretty.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.spy_pretty.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return tupelo.core.spy_pretty_impl.call(null,exprs);
}));

(tupelo.core.spy_pretty.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.spy_pretty.cljs$lang$applyTo = (function (seq36142){
var G__36143 = cljs.core.first.call(null,seq36142);
var seq36142__$1 = cljs.core.next.call(null,seq36142);
var G__36144 = cljs.core.first.call(null,seq36142__$1);
var seq36142__$2 = cljs.core.next.call(null,seq36142__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36143,G__36144,seq36142__$2);
}));

return null;
})()
;
(tupelo.core.spy_pretty.cljs$lang$macro = true);

tupelo.core.spyx_pretty_impl = (function tupelo$core$spyx_pretty_impl(exprs){
var r1 = (function (){var iter__4622__auto__ = (function tupelo$core$spyx_pretty_impl_$_iter__36150(s__36151){
return (new cljs.core.LazySeq(null,(function (){
var s__36151__$1 = s__36151;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36151__$1);
if(temp__5720__auto__){
var s__36151__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36151__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36151__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36153 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36152 = (0);
while(true){
if((i__36152 < size__4621__auto__)){
var expr = cljs.core._nth.call(null,c__4620__auto__,i__36152);
cljs.core.chunk_append.call(null,b__36153,(((expr instanceof cljs.core.Keyword))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))));

var G__36154 = (i__36152 + (1));
i__36152 = G__36154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36153),tupelo$core$spyx_pretty_impl_$_iter__36150.call(null,cljs.core.chunk_rest.call(null,s__36151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36153),null);
}
} else {
var expr = cljs.core.first.call(null,s__36151__$2);
return cljs.core.cons.call(null,(((expr instanceof cljs.core.Keyword))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))))),null,(1),null)))))),tupelo$core$spyx_pretty_impl_$_iter__36150.call(null,cljs.core.rest.call(null,s__36151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.butlast.call(null,exprs));
})();
var r2 = (function (){var expr = tupelo.core.xlast.call(null,exprs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36149__auto__","spy-val__36149__auto__",487550560,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","indent-lines-with","tupelo.core/indent-lines-with",-738101600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","pretty-str","tupelo.core/pretty-str",-676904550,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36149__auto__","spy-val__36149__auto__",487550560,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36149__auto__","spy-val__36149__auto__",487550560,null),null,(1),null)))));
})();
var final_code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),r1,(new cljs.core.List(null,r2,null,(1),null)))));
return final_code;
});
var ret__4878__auto___36158 = (function (){
/**
 * Like `spyx` but with pretty printing (clojure.pprint/pprint)
 */
tupelo.core.spyx_pretty = (function tupelo$core$spyx_pretty(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36159 = arguments.length;
var i__4830__auto___36160 = (0);
while(true){
if((i__4830__auto___36160 < len__4829__auto___36159)){
args__4835__auto__.push((arguments[i__4830__auto___36160]));

var G__36161 = (i__4830__auto___36160 + (1));
i__4830__auto___36160 = G__36161;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.spyx_pretty.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.spyx_pretty.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return tupelo.core.spyx_pretty_impl.call(null,exprs);
}));

(tupelo.core.spyx_pretty.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.spyx_pretty.cljs$lang$applyTo = (function (seq36155){
var G__36156 = cljs.core.first.call(null,seq36155);
var seq36155__$1 = cljs.core.next.call(null,seq36155);
var G__36157 = cljs.core.first.call(null,seq36155__$1);
var seq36155__$2 = cljs.core.next.call(null,seq36155__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36156,G__36157,seq36155__$2);
}));

return null;
})()
;
(tupelo.core.spyx_pretty.cljs$lang$macro = true);

var ret__4878__auto___36165 = (function (){
/**
 * Increments indentation level of all spy, spyx, or spyxx expressions within the body.
 */
tupelo.core.with_spy_indent = (function tupelo$core$with_spy_indent(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36166 = arguments.length;
var i__4830__auto___36167 = (0);
while(true){
if((i__4830__auto___36167 < len__4829__auto___36166)){
args__4835__auto__.push((arguments[i__4830__auto___36167]));

var G__36168 = (i__4830__auto___36167 + (1));
i__4830__auto___36167 = G__36168;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.with_spy_indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.with_spy_indent.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-inc","tupelo.core/spy-indent-inc",-1172890657,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-dec","tupelo.core/spy-indent-dec",-438700836,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.with_spy_indent.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.with_spy_indent.cljs$lang$applyTo = (function (seq36162){
var G__36163 = cljs.core.first.call(null,seq36162);
var seq36162__$1 = cljs.core.next.call(null,seq36162);
var G__36164 = cljs.core.first.call(null,seq36162__$1);
var seq36162__$2 = cljs.core.next.call(null,seq36162__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36163,G__36164,seq36162__$2);
}));

return null;
})()
;
(tupelo.core.with_spy_indent.cljs$lang$macro = true);

var ret__4878__auto___36175 = (function (){
tupelo.core.with_debug_tag = (function tupelo$core$with_debug_tag(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36176 = arguments.length;
var i__4830__auto___36177 = (0);
while(true){
if((i__4830__auto___36177 < len__4829__auto___36176)){
args__4835__auto__.push((arguments[i__4830__auto___36177]));

var G__36178 = (i__4830__auto___36177 + (1));
i__4830__auto___36177 = G__36178;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.with_debug_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.with_debug_tag.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,debug_tag,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","with-spy-indent","tupelo.core/with-spy-indent",1959218602,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tag-enter__36169__auto__","tag-enter__36169__auto__",-847208251,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(debug_tag),"-enter"].join(''),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tag-leave__36170__auto__","tag-leave__36170__auto__",88829814,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(debug_tag),"-leave"].join(''),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","indent-lines-with","tupelo.core/indent-lines-with",-738101600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tag-enter__36169__auto__","tag-enter__36169__auto__",-847208251,null),null,(1),null))))),null,(1),null))))),null,(1),null)),forms,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","indent-lines-with","tupelo.core/indent-lines-with",-738101600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tag-leave__36170__auto__","tag-leave__36170__auto__",88829814,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.with_debug_tag.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.with_debug_tag.cljs$lang$applyTo = (function (seq36171){
var G__36172 = cljs.core.first.call(null,seq36171);
var seq36171__$1 = cljs.core.next.call(null,seq36171);
var G__36173 = cljs.core.first.call(null,seq36171__$1);
var seq36171__$2 = cljs.core.next.call(null,seq36171__$1);
var G__36174 = cljs.core.first.call(null,seq36171__$2);
var seq36171__$3 = cljs.core.next.call(null,seq36171__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36172,G__36173,G__36174,seq36171__$3);
}));

return null;
})()
;
(tupelo.core.with_debug_tag.cljs$lang$macro = true);

var ret__4878__auto___36186 = (function (){
/**
 * An expression (println ...) for use in threading forms (& elsewhere). Evaluates the supplied
 * expressions, printing both the expression and its value to stdout. Returns the value of the
 * last expression.
 */
tupelo.core.let_spy = (function tupelo$core$let_spy(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36187 = arguments.length;
var i__4830__auto___36188 = (0);
while(true){
if((i__4830__auto___36188 < len__4829__auto___36187)){
args__4835__auto__.push((arguments[i__4830__auto___36188]));

var G__36189 = (i__4830__auto___36188 + (1));
i__4830__auto___36188 = G__36189;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.let_spy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.let_spy.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
var decls = tupelo.core.xfirst.call(null,exprs);
var _ = (((!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,decls)))))?(function(){throw cljs.core.ex_info.call(null,"spy-let-proc: uneven number of decls:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decls","decls",1343324492),decls], null))})():null);
var forms = tupelo.core.xrest.call(null,exprs);
var fmt_pair = (function (p__36182){
var vec__36183 = p__36182;
var dest = cljs.core.nth.call(null,vec__36183,(0),null);
var src = cljs.core.nth.call(null,vec__36183,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dest,src,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spyx","tupelo.core/spyx",847397232,null),(new cljs.core.List(null,dest,null,(1),null)),(2),null))], null);
});
var pairs = cljs.core.vec.call(null,cljs.core.partition.call(null,(2),decls));
var r1 = cljs.core.vec.call(null,cljs.core.mapcat.call(null,fmt_pair,pairs));
var final_code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,r1,null,(1),null)),forms)));
return final_code;
}));

(tupelo.core.let_spy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.let_spy.cljs$lang$applyTo = (function (seq36179){
var G__36180 = cljs.core.first.call(null,seq36179);
var seq36179__$1 = cljs.core.next.call(null,seq36179);
var G__36181 = cljs.core.first.call(null,seq36179__$1);
var seq36179__$2 = cljs.core.next.call(null,seq36179__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36180,G__36181,seq36179__$2);
}));

return null;
})()
;
(tupelo.core.let_spy.cljs$lang$macro = true);

var ret__4878__auto___36197 = (function (){
/**
 * An expression (println ...) for use in threading forms (& elsewhere). Evaluates the supplied
 * expressions, printing both the expression and its value to stdout. Returns the value of the
 * last expression.
 */
tupelo.core.let_spy_pretty = (function tupelo$core$let_spy_pretty(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36198 = arguments.length;
var i__4830__auto___36199 = (0);
while(true){
if((i__4830__auto___36199 < len__4829__auto___36198)){
args__4835__auto__.push((arguments[i__4830__auto___36199]));

var G__36200 = (i__4830__auto___36199 + (1));
i__4830__auto___36199 = G__36200;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.let_spy_pretty.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.let_spy_pretty.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
var decls = tupelo.core.xfirst.call(null,exprs);
var _ = (((!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,decls)))))?(function(){throw cljs.core.ex_info.call(null,"spy-let-pretty-impl: uneven number of decls:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decls","decls",1343324492),decls], null))})():null);
var forms = tupelo.core.xrest.call(null,exprs);
var fmt_pair = (function (p__36193){
var vec__36194 = p__36193;
var dest = cljs.core.nth.call(null,vec__36194,(0),null);
var src = cljs.core.nth.call(null,vec__36194,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dest,src,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spyx-pretty","tupelo.core/spyx-pretty",-929537307,null),(new cljs.core.List(null,dest,null,(1),null)),(2),null))], null);
});
var pairs = cljs.core.vec.call(null,cljs.core.partition.call(null,(2),decls));
var r1 = cljs.core.vec.call(null,cljs.core.mapcat.call(null,fmt_pair,pairs));
var final_code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,r1,null,(1),null)),forms)));
return final_code;
}));

(tupelo.core.let_spy_pretty.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.let_spy_pretty.cljs$lang$applyTo = (function (seq36190){
var G__36191 = cljs.core.first.call(null,seq36190);
var seq36190__$1 = cljs.core.next.call(null,seq36190);
var G__36192 = cljs.core.first.call(null,seq36190__$1);
var seq36190__$2 = cljs.core.next.call(null,seq36190__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36191,G__36192,seq36190__$2);
}));

return null;
})()
;
(tupelo.core.let_spy_pretty.cljs$lang$macro = true);

var ret__4878__auto___36203 = /**
 * An expression (println ...) for use in threading forms (& elsewhere). Evaluates the supplied
 * expression, printing both the expression, its type, and its value to stdout, then returns the value.
 */
tupelo.core.spyxx = (function tupelo$core$spyxx(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36201__auto__","spy-val__36201__auto__",-282294455,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-name__36202__auto__","type-name__36202__auto__",-1786788524,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","type-name-str","tupelo.core/type-name-str",-2035996556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36201__auto__","spy-val__36201__auto__",-282294455,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*spy-enabled*","tupelo.core/*spy-enabled*",1598731469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spy-indent-spaces","tupelo.core/spy-indent-spaces",2120909011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => <#",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-name__36202__auto__","type-name__36202__auto__",-1786788524,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36201__auto__","spy-val__36201__auto__",-282294455,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,">",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spy-val__36201__auto__","spy-val__36201__auto__",-282294455,null),null,(1),null)))));
});
(tupelo.core.spyxx.cljs$lang$macro = true);

var ret__4878__auto___36211 = (function (){
/**
 * An expression (println ...) for use in threading forms (& elsewhere). Evaluates the supplied
 * expressions, printing both the expression and its value to stdout. Returns the value of the
 * last expression.
 */
tupelo.core.let_spyxx = (function tupelo$core$let_spyxx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36212 = arguments.length;
var i__4830__auto___36213 = (0);
while(true){
if((i__4830__auto___36213 < len__4829__auto___36212)){
args__4835__auto__.push((arguments[i__4830__auto___36213]));

var G__36214 = (i__4830__auto___36213 + (1));
i__4830__auto___36213 = G__36214;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.let_spyxx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.let_spyxx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
var decls = tupelo.core.xfirst.call(null,exprs);
var _ = (((!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,decls)))))?(function(){throw cljs.core.ex_info.call(null,"spy-let-proc: uneven number of decls:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decls","decls",1343324492),decls], null))})():null);
var forms = tupelo.core.xrest.call(null,exprs);
var fmt_pair = (function (p__36207){
var vec__36208 = p__36207;
var dest = cljs.core.nth.call(null,vec__36208,(0),null);
var src = cljs.core.nth.call(null,vec__36208,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dest,src,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","spyxx","tupelo.core/spyxx",-741630081,null),(new cljs.core.List(null,dest,null,(1),null)),(2),null))], null);
});
var pairs = cljs.core.vec.call(null,cljs.core.partition.call(null,(2),decls));
var r1 = cljs.core.vec.call(null,cljs.core.mapcat.call(null,fmt_pair,pairs));
var final_code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,r1,null,(1),null)),forms)));
return final_code;
}));

(tupelo.core.let_spyxx.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.let_spyxx.cljs$lang$applyTo = (function (seq36204){
var G__36205 = cljs.core.first.call(null,seq36204);
var seq36204__$1 = cljs.core.next.call(null,seq36204);
var G__36206 = cljs.core.first.call(null,seq36204__$1);
var seq36204__$2 = cljs.core.next.call(null,seq36204__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36205,G__36206,seq36204__$2);
}));

return null;
})()
;
(tupelo.core.let_spyxx.cljs$lang$macro = true);

/**
 * Glues together N byte arrays.
 */
tupelo.core.glue_byte_arrays = (function tupelo$core$glue_byte_arrays(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36216 = arguments.length;
var i__4830__auto___36217 = (0);
while(true){
if((i__4830__auto___36217 < len__4829__auto___36216)){
args__4835__auto__.push((arguments[i__4830__auto___36217]));

var G__36218 = (i__4830__auto___36217 + (1));
i__4830__auto___36217 = G__36218;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.glue_byte_arrays.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.glue_byte_arrays.cljs$core$IFn$_invoke$arity$variadic = (function (byte_arrays){
throw cljs.core.ex_info.call(null,"glue-byte-arrays: unimplemented on CLJS",cljs.core.PersistentArrayMap.EMPTY);
}));

(tupelo.core.glue_byte_arrays.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.glue_byte_arrays.cljs$lang$applyTo = (function (seq36215){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36215));
}));

var ufv___36225 = schema.utils.use_fn_validation;
var output_schema36219_36226 = tupelo.schema.MapEntry;
var input_schema36220_36227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36221_36228 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36220_36227);
}),null));
var output_checker36222_36229 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36219_36226);
}),null));
var ret__26117__auto___36230 = /**
 * Inputs: [key val]
 *   Returns: tsk/MapEntry
 * 
 *   Returns a clojure.lang.MapEntry constructed from the given key and val
 */
tupelo.core.map_entry = (function tupelo$core$map_entry(G__36223,G__36224){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36225);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36223,G__36224], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a clojure.lang.MapEntry constructed from the given key and val"], null)),input_schema36220_36227,cljs.core.deref.call(null,input_checker36221_36228),args__24531__auto___36231);
} else {
var temp__5720__auto___36232 = cljs.core.deref.call(null,input_checker36221_36228).call(null,args__24531__auto___36231);
if(cljs.core.truth_(temp__5720__auto___36232)){
var error__24532__auto___36233 = temp__5720__auto___36232;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a clojure.lang.MapEntry constructed from the given key and val"], null)),cljs.core.pr_str.call(null,error__24532__auto___36233)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36220_36227,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36231,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36233], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var key = G__36223;
var val = G__36224;
while(true){
return (new cljs.core.MapEntry(key,val));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a clojure.lang.MapEntry constructed from the given key and val"], null)),output_schema36219_36226,cljs.core.deref.call(null,output_checker36222_36229),o__24533__auto__);
} else {
var temp__5720__auto___36234 = cljs.core.deref.call(null,output_checker36222_36229).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36234)){
var error__24532__auto___36235 = temp__5720__auto___36234;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a clojure.lang.MapEntry constructed from the given key and val"], null)),cljs.core.pr_str.call(null,error__24532__auto___36235)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36219_36226,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36235], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.map_entry),schema.core.__GT_FnSchema.call(null,output_schema36219_36226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36220_36227], null)));

/**
 * Constructs a list-entry map given an index and value
 */
tupelo.core.list_entry = (function tupelo$core$list_entry(idx,val){
if(tupelo.core.int_nonneg_QMARK_.call(null,idx)){
} else {
throw (new Error("Assert failed: (int-nonneg? idx)"));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"list-entry","list-entry",-120051265),new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"val","val",128701612),val], null);
});
/**
 * Returns true iff the arg is a list-entry
 */
tupelo.core.list_entry_QMARK_ = (function tupelo$core$list_entry_QMARK_(arg){
return ((cljs.core.map_QMARK_.call(null,arg)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list-entry","list-entry",-120051265),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(arg))));
});
var ufv___36251 = schema.utils.use_fn_validation;
var output_schema36236_36252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.schema.Map], null);
var input_schema36237_36253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)))], null);
var input_checker36238_36254 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36237_36253);
}),null));
var output_checker36239_36255 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36236_36252);
}),null));
var ret__26117__auto___36256 = /**
 * Inputs: [data :- tsk/Vec]
 *   Returns: [tsk/Map]
 * 
 *   Returns a vector of list-entry maps given a vector/list
 */
tupelo.core.list__GT_entries = (function tupelo$core$list__GT_entries(G__36240){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36251);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36240], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"list->entries","list->entries",1957910301,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of list-entry maps given a vector/list"], null)),input_schema36237_36253,cljs.core.deref.call(null,input_checker36238_36254),args__24531__auto___36257);
} else {
var temp__5720__auto___36258 = cljs.core.deref.call(null,input_checker36238_36254).call(null,args__24531__auto___36257);
if(cljs.core.truth_(temp__5720__auto___36258)){
var error__24532__auto___36259 = temp__5720__auto___36258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"list->entries","list->entries",1957910301,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of list-entry maps given a vector/list"], null)),cljs.core.pr_str.call(null,error__24532__auto___36259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36237_36253,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36257,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36259], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var data = G__36240;
while(true){
return cljs.core.vec.call(null,(function (){var iter__4622__auto__ = ((function (validate__24530__auto__,ufv___36251,output_schema36236_36252,input_schema36237_36253,input_checker36238_36254,output_checker36239_36255){
return (function tupelo$core$list__GT_entries_$_iter__36241(s__36242){
return (new cljs.core.LazySeq(null,(function (){
var s__36242__$1 = s__36242;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36242__$1);
if(temp__5720__auto__){
var s__36242__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36242__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36242__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36244 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36243 = (0);
while(true){
if((i__36243 < size__4621__auto__)){
var vec__36245 = cljs.core._nth.call(null,c__4620__auto__,i__36243);
var ii = cljs.core.nth.call(null,vec__36245,(0),null);
var dd = cljs.core.nth.call(null,vec__36245,(1),null);
cljs.core.chunk_append.call(null,b__36244,tupelo.core.list_entry.call(null,ii,dd));

var G__36260 = (i__36243 + (1));
i__36243 = G__36260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36244),tupelo$core$list__GT_entries_$_iter__36241.call(null,cljs.core.chunk_rest.call(null,s__36242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36244),null);
}
} else {
var vec__36248 = cljs.core.first.call(null,s__36242__$2);
var ii = cljs.core.nth.call(null,vec__36248,(0),null);
var dd = cljs.core.nth.call(null,vec__36248,(1),null);
return cljs.core.cons.call(null,tupelo.core.list_entry.call(null,ii,dd),tupelo$core$list__GT_entries_$_iter__36241.call(null,cljs.core.rest.call(null,s__36242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__24530__auto__,ufv___36251,output_schema36236_36252,input_schema36237_36253,input_checker36238_36254,output_checker36239_36255))
;
return iter__4622__auto__.call(null,tupelo.core.indexed.call(null,data));
})());
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"list->entries","list->entries",1957910301,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of list-entry maps given a vector/list"], null)),output_schema36236_36252,cljs.core.deref.call(null,output_checker36239_36255),o__24533__auto__);
} else {
var temp__5720__auto___36261 = cljs.core.deref.call(null,output_checker36239_36255).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36261)){
var error__24532__auto___36262 = temp__5720__auto___36261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"list->entries","list->entries",1957910301,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a vector of list-entry maps given a vector/list"], null)),cljs.core.pr_str.call(null,error__24532__auto___36262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36236_36252,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36262], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.list__GT_entries),schema.core.__GT_FnSchema.call(null,output_schema36236_36252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36237_36253], null)));

var ufv___36272 = schema.utils.use_fn_validation;
var output_schema36263_36273 = tupelo.schema.Vec;
var input_schema36264_36274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"list-entries","list-entries",1175845786,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)))], null);
var input_checker36265_36275 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36264_36274);
}),null));
var output_checker36266_36276 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36263_36273);
}),null));
var ret__26117__auto___36277 = /**
 * Inputs: [list-entries :- tsk/Vec]
 *   Returns: tsk/Vec
 */
tupelo.core.list_entries__GT_vec = (function tupelo$core$list_entries__GT_vec(G__36267){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36272);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36267], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"list-entries->vec","list-entries->vec",-715529458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)),input_schema36264_36274,cljs.core.deref.call(null,input_checker36265_36275),args__24531__auto___36278);
} else {
var temp__5720__auto___36279 = cljs.core.deref.call(null,input_checker36265_36275).call(null,args__24531__auto___36278);
if(cljs.core.truth_(temp__5720__auto___36279)){
var error__24532__auto___36280 = temp__5720__auto___36279;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"list-entries->vec","list-entries->vec",-715529458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36280)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36264_36274,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36278,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36280], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var list_entries = G__36267;
while(true){
var seq__36268_36281 = cljs.core.seq.call(null,list_entries);
var chunk__36269_36282 = null;
var count__36270_36283 = (0);
var i__36271_36284 = (0);
while(true){
if((i__36271_36284 < count__36270_36283)){
var item_36285 = cljs.core._nth.call(null,chunk__36269_36282,i__36271_36284);
tupelo.core.validate.call(null,tupelo.core.list_entry_QMARK_,item_36285);


var G__36286 = seq__36268_36281;
var G__36287 = chunk__36269_36282;
var G__36288 = count__36270_36283;
var G__36289 = (i__36271_36284 + (1));
seq__36268_36281 = G__36286;
chunk__36269_36282 = G__36287;
count__36270_36283 = G__36288;
i__36271_36284 = G__36289;
continue;
} else {
var temp__5720__auto___36290 = cljs.core.seq.call(null,seq__36268_36281);
if(temp__5720__auto___36290){
var seq__36268_36291__$1 = temp__5720__auto___36290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36268_36291__$1)){
var c__4649__auto___36292 = cljs.core.chunk_first.call(null,seq__36268_36291__$1);
var G__36293 = cljs.core.chunk_rest.call(null,seq__36268_36291__$1);
var G__36294 = c__4649__auto___36292;
var G__36295 = cljs.core.count.call(null,c__4649__auto___36292);
var G__36296 = (0);
seq__36268_36281 = G__36293;
chunk__36269_36282 = G__36294;
count__36270_36283 = G__36295;
i__36271_36284 = G__36296;
continue;
} else {
var item_36297 = cljs.core.first.call(null,seq__36268_36291__$1);
tupelo.core.validate.call(null,tupelo.core.list_entry_QMARK_,item_36297);


var G__36298 = cljs.core.next.call(null,seq__36268_36291__$1);
var G__36299 = null;
var G__36300 = (0);
var G__36301 = (0);
seq__36268_36281 = G__36298;
chunk__36269_36282 = G__36299;
count__36270_36283 = G__36300;
i__36271_36284 = G__36301;
continue;
}
} else {
}
}
break;
}

var N = cljs.core.count.call(null,list_entries);
var idxs = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),list_entries);
var vals = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"val","val",128701612),list_entries);
if(cljs.core._EQ_.call(null,idxs,cljs.core.range.call(null,N))){
} else {
throw (new Error("Assert failed: (= idxs (range N))"));
}

return vals;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"list-entries->vec","list-entries->vec",-715529458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)),output_schema36263_36273,cljs.core.deref.call(null,output_checker36266_36276),o__24533__auto__);
} else {
var temp__5720__auto___36302 = cljs.core.deref.call(null,output_checker36266_36276).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36302)){
var error__24532__auto___36303 = temp__5720__auto___36302;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"list-entries->vec","list-entries->vec",-715529458,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36303)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36263_36273,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36303], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.list_entries__GT_vec),schema.core.__GT_FnSchema.call(null,output_schema36263_36273,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36264_36274], null)));

var ufv___36309 = schema.utils.use_fn_validation;
var output_schema36304_36310 = tupelo.schema.MapEntry;
var input_schema36305_36311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"arg","arg",-106730310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36306_36312 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36305_36311);
}),null));
var output_checker36307_36313 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36304_36310);
}),null));
var ret__26117__auto___36314 = /**
 * Inputs: [arg]
 *   Returns: tsk/MapEntry
 * 
 *   Coerce arg into a clojure.lang.MapEntry
 */
tupelo.core.__GT_map_entry = (function tupelo$core$__GT_map_entry(G__36308){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36309);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36308], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->map-entry","->map-entry",753057693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg into a clojure.lang.MapEntry"], null)),input_schema36305_36311,cljs.core.deref.call(null,input_checker36306_36312),args__24531__auto___36315);
} else {
var temp__5720__auto___36316 = cljs.core.deref.call(null,input_checker36306_36312).call(null,args__24531__auto___36315);
if(cljs.core.truth_(temp__5720__auto___36316)){
var error__24532__auto___36317 = temp__5720__auto___36316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->map-entry","->map-entry",753057693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg into a clojure.lang.MapEntry"], null)),cljs.core.pr_str.call(null,error__24532__auto___36317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36305_36311,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36315,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36317], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var arg = G__36308;
while(true){
if(cljs.core.map_entry_QMARK_.call(null,arg)){
return arg;
} else {
if(((cljs.core.list_QMARK_.call(null,arg)) || (cljs.core.vector_QMARK_.call(null,arg)))){
if(cljs.core.truth_(((function (validate__24530__auto__,ufv___36309,output_schema36304_36310,input_schema36305_36311,input_checker36306_36312,output_checker36307_36313){
return (function (){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,arg));
});})(validate__24530__auto__,ufv___36309,output_schema36304_36310,input_schema36305_36311,input_checker36306_36312,output_checker36307_36313))
)){
} else {
throw cljs.core.ex_info.call(null,"map-entry must be of len=2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null));
}

return tupelo.core.map_entry.call(null,tupelo.core.xfirst.call(null,arg),tupelo.core.xsecond.call(null,arg));
} else {
if(cljs.core.map_QMARK_.call(null,arg)){
var arg_seq = cljs.core.seq.call(null,arg);
if(cljs.core.truth_(((function (arg_seq,validate__24530__auto__,ufv___36309,output_schema36304_36310,input_schema36305_36311,input_checker36306_36312,output_checker36307_36313){
return (function (){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,arg_seq));
});})(arg_seq,validate__24530__auto__,ufv___36309,output_schema36304_36310,input_schema36305_36311,input_checker36306_36312,output_checker36307_36313))
)){
} else {
throw cljs.core.ex_info.call(null,"map must be of len=1",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null));
}

return tupelo.core.xfirst.call(null,arg_seq);
} else {
return null;
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->map-entry","->map-entry",753057693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg into a clojure.lang.MapEntry"], null)),output_schema36304_36310,cljs.core.deref.call(null,output_checker36307_36313),o__24533__auto__);
} else {
var temp__5720__auto___36318 = cljs.core.deref.call(null,output_checker36307_36313).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36318)){
var error__24532__auto___36319 = temp__5720__auto___36318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->map-entry","->map-entry",753057693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","MapEntry","tsk/MapEntry",344490006,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Coerce arg into a clojure.lang.MapEntry"], null)),cljs.core.pr_str.call(null,error__24532__auto___36319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36304_36310,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36319], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_map_entry),schema.core.__GT_FnSchema.call(null,output_schema36304_36310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36305_36311], null)));

/**
 * Glues together like collections:
 * 
 *     (glue [1 2] [3 4] [5 6])                -> [1 2 3 4 5 6]
 *     (glue {:a 1} {:b 2} {:c 3})             -> {:a 1 :c 3 :b 2}
 *     (glue #{1 2} #{3 4} #{6 5})             -> #{1 2 6 5 3 4}
 *     (glue "I" " like " \a " nap!" )  -> "I like a nap!"
 * 
 *   If you want to convert to a sorted set or map, just put an empty one first:
 * 
 *     (glue (sorted-map) {:a 1} {:b 2} {:c 3})      -> {:a 1 :b 2 :c 3}
 *     (glue (sorted-set) #{1 2} #{3 4} #{6 5})      -> #{1 2 3 4 5 6}
 * 
 * If there are duplicate keys when using glue for maps or sets, then "the last one wins":
 * 
 *     (glue {:band :VanHalen :singer :Dave}  {:singer :Sammy}) 
 */
tupelo.core.glue = (function tupelo$core$glue(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36323 = arguments.length;
var i__4830__auto___36324 = (0);
while(true){
if((i__4830__auto___36324 < len__4829__auto___36323)){
args__4835__auto__.push((arguments[i__4830__auto___36324]));

var G__36325 = (i__4830__auto___36324 + (1));
i__4830__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.glue.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.glue.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var string_or_char_QMARK_ = (function (p1__36320_SHARP_){
return ((typeof p1__36320_SHARP_ === 'string') || (cljs.core.char_QMARK_.call(null,p1__36320_SHARP_)));
});
if(cljs.core.every_QMARK_.call(null,(function (p1__36321_SHARP_){
return ((cljs.core.map_QMARK_.call(null,p1__36321_SHARP_)) || (cljs.core.map_entry_QMARK_.call(null,p1__36321_SHARP_)));
}),colls)){
var mapentries = tupelo.core.drop_if.call(null,cljs.core.map_QMARK_,colls);
var maps = tupelo.core.keep_if.call(null,cljs.core.map_QMARK_,colls);
var me_result = cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,mapentries);
var result = cljs.core.reduce.call(null,cljs.core.into,tupelo.core.append.call(null,maps,me_result));
return result;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,colls)){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,colls);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.set_QMARK_,colls)){
return cljs.core.reduce.call(null,cljs.core.into,colls);
} else {
if(cljs.core.every_QMARK_.call(null,string_or_char_QMARK_,colls)){
return cljs.core.apply.call(null,cljs.core.str,colls);
} else {
throw cljs.core.ex_info.call(null,"glue: colls must be all same type; found types=",cljs.core.mapv.call(null,cljs.core.type,colls));

}
}
}
}
}));

(tupelo.core.glue.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.glue.cljs$lang$applyTo = (function (seq36322){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36322));
}));

/**
 *  Convert a vector of vectors (2-dimensional) into a single vector (1-dimensional).
 *   Equivalent to `(apply glue ...)`
 */
tupelo.core.glue_rows = (function tupelo$core$glue_rows(coll_2d){
if(cljs.core.sequential_QMARK_.call(null,coll_2d)){
} else {
throw cljs.core.ex_info.call(null,"Sequential collection required, found=",coll_2d);
}

if(cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,coll_2d)){
} else {
throw cljs.core.ex_info.call(null,"Nested sequential collections required, found=",coll_2d);
}

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,coll_2d);
});
var ret__4878__auto___36333 = (function (){
/**
 * Called with a list of symbols like `(vals->map a b c)` returns a map
 * like {:a a :b b :c c}.
 * 
 *     (let [a 1
 *           b 2
 *           c 3]
 *       (vals->map a b c))  ;=>  {:a 1 :b 2 :c 3} }
 * 
 * See `with-map-vals` for simple destructuring of such maps.
 */
tupelo.core.vals__GT_map = (function tupelo$core$vals__GT_map(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36334 = arguments.length;
var i__4830__auto___36335 = (0);
while(true){
if((i__4830__auto___36335 < len__4829__auto___36334)){
args__4835__auto__.push((arguments[i__4830__auto___36335]));

var G__36336 = (i__4830__auto___36335 + (1));
i__4830__auto___36335 = G__36336;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.vals__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.vals__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,symbols){
var maps_list = (function (){var iter__4622__auto__ = (function tupelo$core$iter__36329(s__36330){
return (new cljs.core.LazySeq(null,(function (){
var s__36330__$1 = s__36330;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36330__$1);
if(temp__5720__auto__){
var s__36330__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36330__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36330__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36332 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36331 = (0);
while(true){
if((i__36331 < size__4621__auto__)){
var symbol = cljs.core._nth.call(null,c__4620__auto__,i__36331);
cljs.core.chunk_append.call(null,b__36332,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,symbol),symbol]));

var G__36337 = (i__36331 + (1));
i__36331 = G__36337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36332),tupelo$core$iter__36329.call(null,cljs.core.chunk_rest.call(null,s__36330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36332),null);
}
} else {
var symbol = cljs.core.first.call(null,s__36330__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,symbol),symbol]),tupelo$core$iter__36329.call(null,cljs.core.rest.call(null,s__36330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,symbols);
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","glue","tupelo.core/glue",901538722,null),null,(1),null)),maps_list)));
}));

(tupelo.core.vals__GT_map.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.vals__GT_map.cljs$lang$applyTo = (function (seq36326){
var G__36327 = cljs.core.first.call(null,seq36326);
var seq36326__$1 = cljs.core.next.call(null,seq36326);
var G__36328 = cljs.core.first.call(null,seq36326__$1);
var seq36326__$2 = cljs.core.next.call(null,seq36326__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36327,G__36328,seq36326__$2);
}));

return null;
})()
;
(tupelo.core.vals__GT_map.cljs$lang$macro = true);

var ret__4878__auto___36347 = (function (){
/**
 * Given a map like {:a 1 :b 2 :c 3} (such as generated by `(vals->map a b c)`),
 *   performs safe `let` destructuring using `grab` like:
 * 
 *     (let [some-map  {:a 1 :b 2 :c 3} } ]
 *       (with-map-vals some-map [a b c]
 *          (+ a b c)))  ;=>  6
 * 
 *   `with-map-vals` is safe for typos since `grab` will throw if the requested key is not present in the map.
 *   See `vals->map` for simple creation of labelled data maps.
 */
tupelo.core.with_map_vals = (function tupelo$core$with_map_vals(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36348 = arguments.length;
var i__4830__auto___36349 = (0);
while(true){
if((i__4830__auto___36349 < len__4829__auto___36348)){
args__4835__auto__.push((arguments[i__4830__auto___36349]));

var G__36350 = (i__4830__auto___36349 + (1));
i__4830__auto___36349 = G__36350;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return tupelo.core.with_map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(tupelo.core.with_map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,the_map,items_vec,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = (function tupelo$core$iter__36343(s__36344){
return (new cljs.core.LazySeq(null,(function (){
var s__36344__$1 = s__36344;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36344__$1);
if(temp__5720__auto__){
var s__36344__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36344__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36344__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36346 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36345 = (0);
while(true){
if((i__36345 < size__4621__auto__)){
var item = cljs.core._nth.call(null,c__4620__auto__,i__36345);
var sym = cljs.core.symbol.call(null,cljs.core.name.call(null,item));
var kw = cljs.core.keyword.call(null,item);
cljs.core.chunk_append.call(null,b__36346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","grab","tupelo.core/grab",607045142,null),(new cljs.core.List(null,kw,(new cljs.core.List(null,the_map,null,(1),null)),(2),null)),(3),null))], null));

var G__36351 = (i__36345 + (1));
i__36345 = G__36351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36346),tupelo$core$iter__36343.call(null,cljs.core.chunk_rest.call(null,s__36344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36346),null);
}
} else {
var item = cljs.core.first.call(null,s__36344__$2);
var sym = cljs.core.symbol.call(null,cljs.core.name.call(null,item));
var kw = cljs.core.keyword.call(null,item);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","grab","tupelo.core/grab",607045142,null),(new cljs.core.List(null,kw,(new cljs.core.List(null,the_map,null,(1),null)),(2),null)),(3),null))], null),tupelo$core$iter__36343.call(null,cljs.core.rest.call(null,s__36344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,items_vec);
})()),null,(1),null)),forms))),null,(1),null)))));
}));

(tupelo.core.with_map_vals.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tupelo.core.with_map_vals.cljs$lang$applyTo = (function (seq36338){
var G__36339 = cljs.core.first.call(null,seq36338);
var seq36338__$1 = cljs.core.next.call(null,seq36338);
var G__36340 = cljs.core.first.call(null,seq36338__$1);
var seq36338__$2 = cljs.core.next.call(null,seq36338__$1);
var G__36341 = cljs.core.first.call(null,seq36338__$2);
var seq36338__$3 = cljs.core.next.call(null,seq36338__$2);
var G__36342 = cljs.core.first.call(null,seq36338__$3);
var seq36338__$4 = cljs.core.next.call(null,seq36338__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36339,G__36340,G__36341,G__36342,seq36338__$4);
}));

return null;
})()
;
(tupelo.core.with_map_vals.cljs$lang$macro = true);

tupelo.core.construct_impl = (function tupelo$core$construct_impl(template){
return tupelo.core.walk_with_parents.call(null,template,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (parents,item){
return tupelo.core.with_nil_default.call(null,item,((cljs.core._EQ_.call(null,tupelo.core.__GT_sym.call(null,new cljs.core.Keyword(null,"?","?",-1703165233)),item))?(function (){var ancestors = cljs.core.vec.call(null,cljs.core.reverse.call(null,parents));
var _mv_ent_ = tupelo.core.xfirst.call(null,ancestors);
var me = tupelo.core.xsecond.call(null,ancestors);
var me_key = tupelo.core.xfirst.call(null,me);
var me_key_sym = tupelo.core.kw__GT_sym.call(null,me_key);
return me_key_sym;
})():null));
})], null));
});
var ret__4878__auto___36352 = tupelo.core.construct = (function tupelo$core$construct(_AMPERSAND_form,_AMPERSAND_env,template){
return tupelo.core.construct_impl.call(null,template);
});
(tupelo.core.construct.cljs$lang$macro = true);

/**
 * A dynamic Var pointing to an `atom`. Used by `with-cum-val` to accumulate state,
 *   such as in a vector or map.  Typically manipulated via helper functions such as
 *   `cum-val-set-it` or `cum-vector-append`. Can also be manipulated directly via `swap!` et al.
 */
tupelo.core._STAR_cumulative_val_STAR_ = null;
var ret__4878__auto___36357 = (function (){
/**
 * Wraps forms containing `cum-val-set-it` calls to accumulate values into a vector.
 */
tupelo.core.with_cum_val = (function tupelo$core$with_cum_val(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36358 = arguments.length;
var i__4830__auto___36359 = (0);
while(true){
if((i__4830__auto___36359 < len__4829__auto___36358)){
args__4835__auto__.push((arguments[i__4830__auto___36359]));

var G__36360 = (i__4830__auto___36359 + (1));
i__4830__auto___36359 = G__36360;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.with_cum_val.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.with_cum_val.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,init_val,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*cumulative-val*","tupelo.core/*cumulative-val*",1123731495,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,init_val,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","*cumulative-val*","tupelo.core/*cumulative-val*",1123731495,null),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.with_cum_val.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.with_cum_val.cljs$lang$applyTo = (function (seq36353){
var G__36354 = cljs.core.first.call(null,seq36353);
var seq36353__$1 = cljs.core.next.call(null,seq36353);
var G__36355 = cljs.core.first.call(null,seq36353__$1);
var seq36353__$2 = cljs.core.next.call(null,seq36353__$1);
var G__36356 = cljs.core.first.call(null,seq36353__$2);
var seq36353__$3 = cljs.core.next.call(null,seq36353__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36354,G__36355,G__36356,seq36353__$3);
}));

return null;
})()
;
(tupelo.core.with_cum_val.cljs$lang$macro = true);

var ret__4878__auto___36364 = (function (){
/**
 * Wraps forms containing `cum-vector-append` calls to accumulate values into a vector.
 */
tupelo.core.with_cum_vector = (function tupelo$core$with_cum_vector(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36365 = arguments.length;
var i__4830__auto___36366 = (0);
while(true){
if((i__4830__auto___36366 < len__4829__auto___36365)){
args__4835__auto__.push((arguments[i__4830__auto___36366]));

var G__36367 = (i__4830__auto___36366 + (1));
i__4830__auto___36366 = G__36367;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.with_cum_vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.with_cum_vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","with-cum-val","tupelo.core/with-cum-val",-1451034016,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),forms)));
}));

(tupelo.core.with_cum_vector.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.with_cum_vector.cljs$lang$applyTo = (function (seq36361){
var G__36362 = cljs.core.first.call(null,seq36361);
var seq36361__$1 = cljs.core.next.call(null,seq36361);
var G__36363 = cljs.core.first.call(null,seq36361__$1);
var seq36361__$2 = cljs.core.next.call(null,seq36361__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36362,G__36363,seq36361__$2);
}));

return null;
})()
;
(tupelo.core.with_cum_vector.cljs$lang$macro = true);

/**
 * Works inside of a `with-cum-val` block to append a new val value.
 */
tupelo.core.cum_val_set_it_impl = (function tupelo$core$cum_val_set_it_impl(forms){
var x1 = cljs.core.concat.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null)], null)),forms);
var x2 = cljs.core.concat.call(null,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol("tupelo.core","*cumulative-val*","tupelo.core/*cumulative-val*",1123731495,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1], null));
return x2;
});
var ret__4878__auto___36371 = (function (){
/**
 * Works inside of a `with-cum-val` block to append a new val value.
 */
tupelo.core.cum_val_set_it = (function tupelo$core$cum_val_set_it(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36372 = arguments.length;
var i__4830__auto___36373 = (0);
while(true){
if((i__4830__auto___36373 < len__4829__auto___36372)){
args__4835__auto__.push((arguments[i__4830__auto___36373]));

var G__36374 = (i__4830__auto___36373 + (1));
i__4830__auto___36373 = G__36374;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.cum_val_set_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.cum_val_set_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return tupelo.core.cum_val_set_it_impl.call(null,forms);
}));

(tupelo.core.cum_val_set_it.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.cum_val_set_it.cljs$lang$applyTo = (function (seq36368){
var G__36369 = cljs.core.first.call(null,seq36368);
var seq36368__$1 = cljs.core.next.call(null,seq36368);
var G__36370 = cljs.core.first.call(null,seq36368__$1);
var seq36368__$2 = cljs.core.next.call(null,seq36368__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36369,G__36370,seq36368__$2);
}));

return null;
})()
;
(tupelo.core.cum_val_set_it.cljs$lang$macro = true);

/**
 * Works inside of a `with-cum-vector` block to append a new vector value.
 */
tupelo.core.cum_vector_append = (function tupelo$core$cum_vector_append(value){
return tupelo.core.cum_val_set_it.call(null,tupelo.core.append.call(null,tupelo.core.it,value));
});
var ufv___36380 = schema.utils.use_fn_validation;
var output_schema36375_36381 = schema.core.Bool;
var input_schema36376_36382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker36377_36383 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36376_36382);
}),null));
var output_checker36378_36384 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36375_36381);
}),null));
var ret__26117__auto___36385 = /**
 * Inputs: [coll :- s/Any]
 *   Returns: s/Bool
 * 
 *   Returns true iff collection has length=1
 */
tupelo.core.only_QMARK_ = (function tupelo$core$only_QMARK_(G__36379){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36380);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36379], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"only?","only?",2145355108,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff collection has length=1"], null)),input_schema36376_36382,cljs.core.deref.call(null,input_checker36377_36383),args__24531__auto___36386);
} else {
var temp__5720__auto___36387 = cljs.core.deref.call(null,input_checker36377_36383).call(null,args__24531__auto___36386);
if(cljs.core.truth_(temp__5720__auto___36387)){
var error__24532__auto___36388 = temp__5720__auto___36387;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"only?","only?",2145355108,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff collection has length=1"], null)),cljs.core.pr_str.call(null,error__24532__auto___36388)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36376_36382,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36386,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36388], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__36379;
while(true){
return tupelo.core.has_length_QMARK_.call(null,coll,(1));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"only?","only?",2145355108,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff collection has length=1"], null)),output_schema36375_36381,cljs.core.deref.call(null,output_checker36378_36384),o__24533__auto__);
} else {
var temp__5720__auto___36389 = cljs.core.deref.call(null,output_checker36378_36384).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36389)){
var error__24532__auto___36390 = temp__5720__auto___36389;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"only?","only?",2145355108,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff collection has length=1"], null)),cljs.core.pr_str.call(null,error__24532__auto___36390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36375_36381,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36390], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.only_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema36375_36381,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36376_36382], null)));

var ufv___36396 = schema.utils.use_fn_validation;
var output_schema36391_36397 = schema.core.Bool;
var input_schema36392_36398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker36393_36399 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36392_36398);
}),null));
var output_checker36394_36400 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36391_36397);
}),null));
var ret__26117__auto___36401 = /**
 * Inputs: [coll :- s/Any]
 *   Returns: s/Bool
 * 
 *   Returns true iff arg is two nested collections of length=1
 */
tupelo.core.only2_QMARK_ = (function tupelo$core$only2_QMARK_(G__36395){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36396);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36395], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"only2?","only2?",-1064419261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff arg is two nested collections of length=1"], null)),input_schema36392_36398,cljs.core.deref.call(null,input_checker36393_36399),args__24531__auto___36402);
} else {
var temp__5720__auto___36403 = cljs.core.deref.call(null,input_checker36393_36399).call(null,args__24531__auto___36402);
if(cljs.core.truth_(temp__5720__auto___36403)){
var error__24532__auto___36404 = temp__5720__auto___36403;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"only2?","only2?",-1064419261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff arg is two nested collections of length=1"], null)),cljs.core.pr_str.call(null,error__24532__auto___36404)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36392_36398,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36402,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36404], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__36395;
while(true){
return ((tupelo.core.has_length_QMARK_.call(null,coll,(1))) && (tupelo.core.has_length_QMARK_.call(null,cljs.core.first.call(null,coll),(1))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"only2?","only2?",-1064419261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff arg is two nested collections of length=1"], null)),output_schema36391_36397,cljs.core.deref.call(null,output_checker36394_36400),o__24533__auto__);
} else {
var temp__5720__auto___36405 = cljs.core.deref.call(null,output_checker36394_36400).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36405)){
var error__24532__auto___36406 = temp__5720__auto___36405;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"only2?","only2?",-1064419261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff arg is two nested collections of length=1"], null)),cljs.core.pr_str.call(null,error__24532__auto___36406)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36391_36397,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36406], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.only2_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema36391_36397,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36392_36398], null)));

var ret__4878__auto___36407 = /**
 * A macro that returns information about the calling source code location like:
 *     {:src-line    61
 *      :src-col      9
 *      :src-ns-name 'tst.tupelo.core' } 
 */
tupelo.core.source_code_env = (function tupelo$core$source_code_env(_AMPERSAND_form,_AMPERSAND_env){
var src_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var src_col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var src_ns_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_));
return tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src-line","src-line",-1295698937),src_line], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src-col","src-col",1632449789),src_col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src-ns-name","src-ns-name",-794768383),src_ns_name], null));
});
(tupelo.core.source_code_env.cljs$lang$macro = true);

var ret__4878__auto___36412 = (function (){
/**
 * A threading macro like as-> that always uses the symbol 'it' as the placeholder for the next threaded value:
 * 
 *      (it-> 1
 *            (inc it)
 *            (+ it 3)
 *            (/ 10 it))
 *      ;=> 2 
 */
tupelo.core.it__GT_ = (function tupelo$core$it__GT_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36413 = arguments.length;
var i__4830__auto___36414 = (0);
while(true){
if((i__4830__auto___36414 < len__4829__auto___36413)){
args__4835__auto__.push((arguments[i__4830__auto___36414]));

var G__36415 = (i__4830__auto___36414 + (1));
i__4830__auto___36414 = G__36415;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.it__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.it__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,new cljs.core.Symbol(null,"it","it",-1630841225,null)),forms))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null)))));
}));

(tupelo.core.it__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.it__GT_.cljs$lang$applyTo = (function (seq36408){
var G__36409 = cljs.core.first.call(null,seq36408);
var seq36408__$1 = cljs.core.next.call(null,seq36408);
var G__36410 = cljs.core.first.call(null,seq36408__$1);
var seq36408__$2 = cljs.core.next.call(null,seq36408__$1);
var G__36411 = cljs.core.first.call(null,seq36408__$2);
var seq36408__$3 = cljs.core.next.call(null,seq36408__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36409,G__36410,G__36411,seq36408__$3);
}));

return null;
})()
;
(tupelo.core.it__GT_.cljs$lang$macro = true);

tupelo.core.spy_it__GT__impl = (function tupelo$core$spy_it__GT__impl(p__36416){
var vec__36417 = p__36416;
var seq__36418 = cljs.core.seq.call(null,vec__36417);
var first__36419 = cljs.core.first.call(null,seq__36418);
var seq__36418__$1 = cljs.core.next.call(null,seq__36418);
var expr = first__36419;
var forms = seq__36418__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","print","cljs.core/print",1475912266,null),null,(1),null)),(new cljs.core.List(null,"spy-it-> ",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vec.call(null,(function (){var iter__4622__auto__ = (function tupelo$core$spy_it__GT__impl_$_iter__36420(s__36421){
return (new cljs.core.LazySeq(null,(function (){
var s__36421__$1 = s__36421;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36421__$1);
if(temp__5720__auto__){
var s__36421__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36421__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36421__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36423 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36422 = (0);
while(true){
if((i__36422 < size__4621__auto__)){
var form = cljs.core._nth.call(null,c__4620__auto__,i__36422);
cljs.core.chunk_append.call(null,b__36423,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),form,new cljs.core.Symbol(null,">>",">>",1363022260,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"  ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null))))),null,(1),null)))))], null));

var G__36424 = (i__36422 + (1));
i__36422 = G__36424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36423),tupelo$core$spy_it__GT__impl_$_iter__36420.call(null,cljs.core.chunk_rest.call(null,s__36421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36423),null);
}
} else {
var form = cljs.core.first.call(null,s__36421__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),form,new cljs.core.Symbol(null,">>",">>",1363022260,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"  ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null))))),null,(1),null)))))], null),tupelo$core$spy_it__GT__impl_$_iter__36420.call(null,cljs.core.rest.call(null,s__36421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,forms);
})())))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null))))),null,(1),null)))));
});
var ret__4878__auto___36428 = (function (){
/**
 * Like it-> but prints the value at each stage of the pipeline
 */
tupelo.core.spy_it__GT_ = (function tupelo$core$spy_it__GT_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36429 = arguments.length;
var i__4830__auto___36430 = (0);
while(true){
if((i__4830__auto___36430 < len__4829__auto___36429)){
args__4835__auto__.push((arguments[i__4830__auto___36430]));

var G__36431 = (i__4830__auto___36430 + (1));
i__4830__auto___36430 = G__36431;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.spy_it__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.spy_it__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return tupelo.core.spy_it__GT__impl.call(null,args);
}));

(tupelo.core.spy_it__GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.spy_it__GT_.cljs$lang$applyTo = (function (seq36425){
var G__36426 = cljs.core.first.call(null,seq36425);
var seq36425__$1 = cljs.core.next.call(null,seq36425);
var G__36427 = cljs.core.first.call(null,seq36425__$1);
var seq36425__$2 = cljs.core.next.call(null,seq36425__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36426,G__36427,seq36425__$2);
}));

return null;
})()
;
(tupelo.core.spy_it__GT_.cljs$lang$macro = true);

tupelo.core.cond_it_impl = (function tupelo$core$cond_it_impl(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36444 = arguments.length;
var i__4830__auto___36445 = (0);
while(true){
if((i__4830__auto___36445 < len__4829__auto___36444)){
args__4835__auto__.push((arguments[i__4830__auto___36445]));

var G__36446 = (i__4830__auto___36445 + (1));
i__4830__auto___36445 = G__36446;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.cond_it_impl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.cond_it_impl.cljs$core$IFn$_invoke$arity$variadic = (function (expr,forms){
var num_forms_36447 = cljs.core.count.call(null,forms);
if(cljs.core.even_QMARK_.call(null,num_forms_36447)){
} else {
throw cljs.core.ex_info.call(null,"num-forms must be even; value=",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-forms","num-forms",-1283524423),num_forms_36447], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms","forms",2045992350),forms], null)));
}

var cond_action_pairs = cljs.core.partition.call(null,(2),forms);
var cond_action_forms = (function (){var iter__4622__auto__ = (function tupelo$core$iter__36434(s__36435){
return (new cljs.core.LazySeq(null,(function (){
var s__36435__$1 = s__36435;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36435__$1);
if(temp__5720__auto__){
var s__36435__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36435__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36435__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36437 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36436 = (0);
while(true){
if((i__36436 < size__4621__auto__)){
var vec__36438 = cljs.core._nth.call(null,c__4620__auto__,i__36436);
var cond_form = cljs.core.nth.call(null,vec__36438,(0),null);
var action_form = cljs.core.nth.call(null,vec__36438,(1),null);
cljs.core.chunk_append.call(null,b__36437,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cond_form,null,(1),null)),(new cljs.core.List(null,action_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null))))));

var G__36448 = (i__36436 + (1));
i__36436 = G__36448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36437),tupelo$core$iter__36434.call(null,cljs.core.chunk_rest.call(null,s__36435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36437),null);
}
} else {
var vec__36441 = cljs.core.first.call(null,s__36435__$2);
var cond_form = cljs.core.nth.call(null,vec__36441,(0),null);
var action_form = cljs.core.nth.call(null,vec__36441,(1),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cond_form,null,(1),null)),(new cljs.core.List(null,action_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null))))),tupelo$core$iter__36434.call(null,cljs.core.rest.call(null,s__36435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cond_action_pairs);
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","it->","tupelo.core/it->",-341645714,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cond_action_forms)));
}));

(tupelo.core.cond_it_impl.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.cond_it_impl.cljs$lang$applyTo = (function (seq36432){
var G__36433 = cljs.core.first.call(null,seq36432);
var seq36432__$1 = cljs.core.next.call(null,seq36432);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36433,seq36432__$1);
}));

var ret__4878__auto___36452 = (function (){
/**
 * A threading macro like cond-> that always uses the symbol 'it' as the placeholder for the next threaded value.
 *   Works in both the conditional form and the value form:
 * 
 *    (let [params {:a 1 :b 1 :c nil :d nil}]
 *      (cond-it-> params
 *        (:a it)        (update it :b inc)
 *        (= (:b it) 2)  (assoc it :c "here")
 *        (:c it)        (assoc it :d "again")))
 * 
 *    ;=> {:a 1, :b 2, :c "here", :d "again"}
 */
tupelo.core.cond_it__GT_ = (function tupelo$core$cond_it__GT_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36453 = arguments.length;
var i__4830__auto___36454 = (0);
while(true){
if((i__4830__auto___36454 < len__4829__auto___36453)){
args__4835__auto__.push((arguments[i__4830__auto___36454]));

var G__36455 = (i__4830__auto___36454 + (1));
i__4830__auto___36454 = G__36455;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.cond_it__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.cond_it__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.apply.call(null,tupelo.core.cond_it_impl,forms);
}));

(tupelo.core.cond_it__GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.cond_it__GT_.cljs$lang$applyTo = (function (seq36449){
var G__36450 = cljs.core.first.call(null,seq36449);
var seq36449__$1 = cljs.core.next.call(null,seq36449);
var G__36451 = cljs.core.first.call(null,seq36449__$1);
var seq36449__$2 = cljs.core.next.call(null,seq36449__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36450,G__36451,seq36449__$2);
}));

return null;
})()
;
(tupelo.core.cond_it__GT_.cljs$lang$macro = true);

var ret__4878__auto___36460 = (function (){
/**
 * Threads forms as with `it->`, terminates & returns `nil` if any expression is nil.
 */
tupelo.core.some_it__GT_ = (function tupelo$core$some_it__GT_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36461 = arguments.length;
var i__4830__auto___36462 = (0);
while(true){
if((i__4830__auto___36462 < len__4829__auto___36461)){
args__4835__auto__.push((arguments[i__4830__auto___36462]));

var G__36463 = (i__4830__auto___36462 + (1));
i__4830__auto___36462 = G__36463;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.some_it__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.some_it__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var binding_pairs = cljs.core.interleave.call(null,cljs.core.repeat.call(null,new cljs.core.Symbol(null,"it","it",-1630841225,null)),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","let-some","tupelo.core/let-some",-211560735,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),binding_pairs)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null)))));
}));

(tupelo.core.some_it__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.some_it__GT_.cljs$lang$applyTo = (function (seq36456){
var G__36457 = cljs.core.first.call(null,seq36456);
var seq36456__$1 = cljs.core.next.call(null,seq36456);
var G__36458 = cljs.core.first.call(null,seq36456__$1);
var seq36456__$2 = cljs.core.next.call(null,seq36456__$1);
var G__36459 = cljs.core.first.call(null,seq36456__$2);
var seq36456__$3 = cljs.core.next.call(null,seq36456__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36457,G__36458,G__36459,seq36456__$3);
}));

return null;
})()
;
(tupelo.core.some_it__GT_.cljs$lang$macro = true);

var ufv___36478 = schema.utils.use_fn_validation;
var output_schema36464_36479 = tupelo.schema.Map;
var input_schema36465_36480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"src-map","src-map",2023676262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"path-vec","path-vec",-945506487,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)))], null);
var input_schema36470_36481 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"src-map","src-map",2023676262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"path-vec","path-vec",-945506487,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null))),schema.core.one.call(null,schema.core.Bool,cljs.core.with_meta(new cljs.core.Symbol(null,"ascending?","ascending?",-1938452653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)))], null);
var input_checker36466_36482 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36465_36480);
}),null));
var output_checker36467_36483 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36464_36479);
}),null));
var input_checker36471_36484 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36470_36481);
}),null));
var output_checker36472_36485 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36464_36479);
}),null));
var ret__26117__auto___36486 = (function (){
/**
 * Inputs: ([src-map :- tsk/Map path-vec :- tsk/Vec] [src-map :- tsk/Map path-vec :- tsk/Vec ascending? :- s/Bool])
 *   Returns: tsk/Map
 * 
 *   
 *   *************************************************************************
 *   ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****
 *   *****           this crashes if namespaced keys are used.           *****
 *   *************************************************************************
 * 
 *   Given a source map, returns a sorted version of the same map. The value to sort
 *   by is specified via a path vector as with `clojure.core/get-in`, where the first
 *   element is always specified as `:*`, since the path must work for every top-level key
 *   in <src-map>. The sorting value must be acceptable to clojure.core/compare.
 *   Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.
 *   NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries
 *   to the sorted map.  Instead, a new map must be created from a plain map.
 *   Usage:
 * 
 *    (sorted-map-via <src-map> <path-vec>)
 *    (sorted-map-via <src-map> <path-vec> <ascending?>)
 * 
 *   Example:
 * 
 *    (let [unsorted {:c {:val 3}
 *                    :a {:val 1}
 *                    :b {:val 2}}
 *          sorted   (sorted-map-via unsorted [:* :val])]
 *      (assert (= unsorted sorted))) 
 */
tupelo.core.sorted_map_via_path = (function tupelo$core$sorted_map_via_path(var_args){
var G__36477 = arguments.length;
switch (G__36477) {
case 2:
return tupelo.core.sorted_map_via_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tupelo.core.sorted_map_via_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tupelo.core.sorted_map_via_path.cljs$core$IFn$_invoke$arity$2 = (function (G__36468,G__36469){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36478);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36468,G__36469], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),input_schema36465_36480,cljs.core.deref.call(null,input_checker36466_36482),args__24531__auto___36488);
} else {
var temp__5720__auto___36489 = cljs.core.deref.call(null,input_checker36466_36482).call(null,args__24531__auto___36488);
if(cljs.core.truth_(temp__5720__auto___36489)){
var error__24532__auto___36490 = temp__5720__auto___36489;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),cljs.core.pr_str.call(null,error__24532__auto___36490)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36465_36480,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36488,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36490], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var src_map = G__36468;
var path_vec = G__36469;
while(true){
return tupelo.core.sorted_map_via_path.call(null,src_map,path_vec,true);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),output_schema36464_36479,cljs.core.deref.call(null,output_checker36467_36483),o__24533__auto__);
} else {
var temp__5720__auto___36491 = cljs.core.deref.call(null,output_checker36467_36483).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36491)){
var error__24532__auto___36492 = temp__5720__auto___36491;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),cljs.core.pr_str.call(null,error__24532__auto___36492)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36464_36479,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36492], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.sorted_map_via_path.cljs$core$IFn$_invoke$arity$3 = (function (G__36473,G__36474,G__36475){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36478);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36493 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36473,G__36474,G__36475], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),input_schema36470_36481,cljs.core.deref.call(null,input_checker36471_36484),args__24531__auto___36493);
} else {
var temp__5720__auto___36494 = cljs.core.deref.call(null,input_checker36471_36484).call(null,args__24531__auto___36493);
if(cljs.core.truth_(temp__5720__auto___36494)){
var error__24532__auto___36495 = temp__5720__auto___36494;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),cljs.core.pr_str.call(null,error__24532__auto___36495)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36470_36481,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36493,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36495], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var src_map = G__36473;
var path_vec = G__36474;
var ascending_QMARK_ = G__36475;
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),tupelo.core.xfirst.call(null,path_vec))){
} else {
throw cljs.core.ex_info.call(null,"First path element must be `:*`",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-vec","path-vec",1708929282),path_vec], null)));
}

if((cljs.core.count.call(null,path_vec) > (0))){
} else {
throw cljs.core.ex_info.call(null,"path-vec must have at least 2 elements",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-vec","path-vec",1708929282),path_vec], null)));
}

var path_tail = tupelo.core.xrest.call(null,path_vec);
var sortable_unique = ((function (path_tail,validate__24530__auto__,ufv___36478,output_schema36464_36479,input_schema36465_36480,input_schema36470_36481,input_checker36466_36482,output_checker36467_36483,input_checker36471_36484,output_checker36472_36485){
return (function (key){
var fetch_in_path = tupelo.core.prepend.call(null,key,path_tail);
var sort_val = tupelo.core.fetch_in.call(null,src_map,fetch_in_path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sort_val,key], null);
});})(path_tail,validate__24530__auto__,ufv___36478,output_schema36464_36479,input_schema36465_36480,input_schema36470_36481,input_checker36466_36482,output_checker36467_36483,input_checker36471_36484,output_checker36472_36485))
;
var comparator_fn = ((function (path_tail,sortable_unique,validate__24530__auto__,ufv___36478,output_schema36464_36479,input_schema36465_36480,input_schema36470_36481,input_checker36466_36482,output_checker36467_36483,input_checker36471_36484,output_checker36472_36485){
return (function (x,y){
var compare_result = cljs.core.compare.call(null,sortable_unique.call(null,x),sortable_unique.call(null,y));
var final_result = (function (){var it = compare_result;
var it__$1 = ((cljs.core.not.call(null,ascending_QMARK_))?(- it):it);
return it__$1;
})();
return final_result;
});})(path_tail,sortable_unique,validate__24530__auto__,ufv___36478,output_schema36464_36479,input_schema36465_36480,input_schema36470_36481,input_checker36466_36482,output_checker36467_36483,input_checker36471_36484,output_checker36472_36485))
;
var sorted_map = tupelo.core.glue.call(null,clojure.data.avl.sorted_map_by.call(null,comparator_fn),src_map);
return sorted_map;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),output_schema36464_36479,cljs.core.deref.call(null,output_checker36472_36485),o__24533__auto__);
} else {
var temp__5720__auto___36496 = cljs.core.deref.call(null,output_checker36472_36485).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36496)){
var error__24532__auto___36497 = temp__5720__auto___36496;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sorted-map-via-path","sorted-map-via-path",-1261516272,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"\n  *************************************************************************\n  ***** WARNING:  due to a bug in clojure.core/sorted-map-by,         *****\n  *****           this crashes if namespaced keys are used.           *****\n  *************************************************************************\n\n  Given a source map, returns a sorted version of the same map. The value to sort\n  by is specified via a path vector as with `clojure.core/get-in`, where the first\n  element is always specified as `:*`, since the path must work for every top-level key\n  in <src-map>. The sorting value must be acceptable to clojure.core/compare.\n  Defaults to ascending sort order.  Returns an instance of `clojure.data.avl.AVLMap`.\n  NOTE:  because of peculiarities of clojure.core/sorted-map-by, one cannot add new entries\n  to the sorted map.  Instead, a new map must be created from a plain map.\n  Usage:\n\n      (sorted-map-via <src-map> <path-vec>)\n      (sorted-map-via <src-map> <path-vec> <ascending?>)\n\n  Example:\n\n      (let [unsorted {:c {:val 3}\n                      :a {:val 1}\n                      :b {:val 2}}\n            sorted   (sorted-map-via unsorted [:* :val])]\n        (assert (= unsorted sorted))) "], null)),cljs.core.pr_str.call(null,error__24532__auto___36497)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36464_36479,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36497], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.sorted_map_via_path.cljs$lang$maxFixedArity = 3);

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.sorted_map_via_path),schema.core.make_fn_schema.call(null,output_schema36464_36479,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36465_36480,input_schema36470_36481], null)));

var ufv___36514 = schema.utils.use_fn_validation;
var output_schema36498_36515 = schema.core.Bool;
var input_schema36499_36516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker36500_36517 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36499_36516);
}),null));
var output_checker36501_36518 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36498_36515);
}),null));
var ret__26117__auto___36519 = (function (){
/**
 * Inputs: [& xs :- [s/Any]]
 *   Returns: s/Bool
 */
tupelo.core.compare_less = (function tupelo$core$compare_less(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36520 = arguments.length;
var i__4830__auto___36521 = (0);
while(true){
if((i__4830__auto___36521 < len__4829__auto___36520)){
args__4835__auto__.push((arguments[i__4830__auto___36521]));

var G__36522 = (i__4830__auto___36521 + (1));
i__4830__auto___36521 = G__36522;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.compare_less.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.compare_less.cljs$core$IFn$_invoke$arity$variadic = (function (rest36502){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36514);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36523 = cljs.core.list_STAR_.call(null,rest36502);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less","compare-less",-10529860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),input_schema36499_36516,cljs.core.deref.call(null,input_checker36500_36517),args__24531__auto___36523);
} else {
var temp__5720__auto___36524 = cljs.core.deref.call(null,input_checker36500_36517).call(null,args__24531__auto___36523);
if(cljs.core.truth_(temp__5720__auto___36524)){
var error__24532__auto___36525 = temp__5720__auto___36524;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less","compare-less",-10529860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36525)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36499_36516,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36523,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36525], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var xs = rest36502;
while(true){
if(((1) < cljs.core.count.call(null,xs))){
} else {
throw (new Error("Assert failed: (< 1 (count xs))"));
}

return cljs.core.every_QMARK_.call(null,cljs.core.neg_QMARK_,(function (){var iter__4622__auto__ = ((function (validate__24530__auto__,ufv___36514,output_schema36498_36515,input_schema36499_36516,input_checker36500_36517,output_checker36501_36518){
return (function tupelo$core$iter__36504(s__36505){
return (new cljs.core.LazySeq(null,(function (){
var s__36505__$1 = s__36505;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36505__$1);
if(temp__5720__auto__){
var s__36505__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36505__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36505__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36507 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36506 = (0);
while(true){
if((i__36506 < size__4621__auto__)){
var vec__36508 = cljs.core._nth.call(null,c__4620__auto__,i__36506);
var a = cljs.core.nth.call(null,vec__36508,(0),null);
var b = cljs.core.nth.call(null,vec__36508,(1),null);
cljs.core.chunk_append.call(null,b__36507,cljs.core.compare.call(null,a,b));

var G__36526 = (i__36506 + (1));
i__36506 = G__36526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36507),tupelo$core$iter__36504.call(null,cljs.core.chunk_rest.call(null,s__36505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36507),null);
}
} else {
var vec__36511 = cljs.core.first.call(null,s__36505__$2);
var a = cljs.core.nth.call(null,vec__36511,(0),null);
var b = cljs.core.nth.call(null,vec__36511,(1),null);
return cljs.core.cons.call(null,cljs.core.compare.call(null,a,b),tupelo$core$iter__36504.call(null,cljs.core.rest.call(null,s__36505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__24530__auto__,ufv___36514,output_schema36498_36515,input_schema36499_36516,input_checker36500_36517,output_checker36501_36518))
;
return iter__4622__auto__.call(null,cljs.core.partition.call(null,(2),(1),xs));
})());
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less","compare-less",-10529860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),output_schema36498_36515,cljs.core.deref.call(null,output_checker36501_36518),o__24533__auto__);
} else {
var temp__5720__auto___36527 = cljs.core.deref.call(null,output_checker36501_36518).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36527)){
var error__24532__auto___36528 = temp__5720__auto___36527;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less","compare-less",-10529860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36528)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36498_36515,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36528], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.compare_less.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.compare_less.cljs$lang$applyTo = (function (seq36503){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36503));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.compare_less),schema.core.__GT_FnSchema.call(null,output_schema36498_36515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36499_36516], null)));

var ufv___36545 = schema.utils.use_fn_validation;
var output_schema36529_36546 = schema.core.Bool;
var input_schema36530_36547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker36531_36548 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36530_36547);
}),null));
var output_checker36532_36549 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36529_36546);
}),null));
var ret__26117__auto___36550 = (function (){
/**
 * Inputs: [& xs :- [s/Any]]
 *   Returns: s/Bool
 */
tupelo.core.compare_less_equal = (function tupelo$core$compare_less_equal(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36551 = arguments.length;
var i__4830__auto___36552 = (0);
while(true){
if((i__4830__auto___36552 < len__4829__auto___36551)){
args__4835__auto__.push((arguments[i__4830__auto___36552]));

var G__36553 = (i__4830__auto___36552 + (1));
i__4830__auto___36552 = G__36553;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.compare_less_equal.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.compare_less_equal.cljs$core$IFn$_invoke$arity$variadic = (function (rest36533){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36545);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36554 = cljs.core.list_STAR_.call(null,rest36533);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less-equal","compare-less-equal",1369449414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),input_schema36530_36547,cljs.core.deref.call(null,input_checker36531_36548),args__24531__auto___36554);
} else {
var temp__5720__auto___36555 = cljs.core.deref.call(null,input_checker36531_36548).call(null,args__24531__auto___36554);
if(cljs.core.truth_(temp__5720__auto___36555)){
var error__24532__auto___36556 = temp__5720__auto___36555;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less-equal","compare-less-equal",1369449414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36530_36547,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36554,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36556], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var xs = rest36533;
while(true){
if(((1) < cljs.core.count.call(null,xs))){
} else {
throw (new Error("Assert failed: (< 1 (count xs))"));
}

return cljs.core.every_QMARK_.call(null,tupelo.core.nonpos_QMARK_,(function (){var iter__4622__auto__ = ((function (validate__24530__auto__,ufv___36545,output_schema36529_36546,input_schema36530_36547,input_checker36531_36548,output_checker36532_36549){
return (function tupelo$core$iter__36535(s__36536){
return (new cljs.core.LazySeq(null,(function (){
var s__36536__$1 = s__36536;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36536__$1);
if(temp__5720__auto__){
var s__36536__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36536__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36536__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36538 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36537 = (0);
while(true){
if((i__36537 < size__4621__auto__)){
var vec__36539 = cljs.core._nth.call(null,c__4620__auto__,i__36537);
var a = cljs.core.nth.call(null,vec__36539,(0),null);
var b = cljs.core.nth.call(null,vec__36539,(1),null);
cljs.core.chunk_append.call(null,b__36538,cljs.core.compare.call(null,a,b));

var G__36557 = (i__36537 + (1));
i__36537 = G__36557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36538),tupelo$core$iter__36535.call(null,cljs.core.chunk_rest.call(null,s__36536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36538),null);
}
} else {
var vec__36542 = cljs.core.first.call(null,s__36536__$2);
var a = cljs.core.nth.call(null,vec__36542,(0),null);
var b = cljs.core.nth.call(null,vec__36542,(1),null);
return cljs.core.cons.call(null,cljs.core.compare.call(null,a,b),tupelo$core$iter__36535.call(null,cljs.core.rest.call(null,s__36536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__24530__auto__,ufv___36545,output_schema36529_36546,input_schema36530_36547,input_checker36531_36548,output_checker36532_36549))
;
return iter__4622__auto__.call(null,cljs.core.partition.call(null,(2),(1),xs));
})());
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less-equal","compare-less-equal",1369449414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),output_schema36529_36546,cljs.core.deref.call(null,output_checker36532_36549),o__24533__auto__);
} else {
var temp__5720__auto___36558 = cljs.core.deref.call(null,output_checker36532_36549).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36558)){
var error__24532__auto___36559 = temp__5720__auto___36558;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"compare-less-equal","compare-less-equal",1369449414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36559)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36529_36546,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36559], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.compare_less_equal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.compare_less_equal.cljs$lang$applyTo = (function (seq36534){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36534));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.compare_less_equal),schema.core.__GT_FnSchema.call(null,output_schema36529_36546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36530_36547], null)));

tupelo.core.cmp_seq_lexi = (function tupelo$core$cmp_seq_lexi(x,y){
var x__$1 = x;
var y__$1 = y;
while(true){
if(cljs.core.seq.call(null,x__$1)){
if(cljs.core.seq.call(null,y__$1)){
var c = cljs.core.compare.call(null,cljs.core.first.call(null,x__$1),cljs.core.first.call(null,y__$1));
if((c === (0))){
var G__36560 = cljs.core.rest.call(null,x__$1);
var G__36561 = cljs.core.rest.call(null,y__$1);
x__$1 = G__36560;
y__$1 = G__36561;
continue;
} else {
return c;
}
} else {
return (1);
}
} else {
if(cljs.core.seq.call(null,y__$1)){
return (-1);
} else {
return (0);
}
}
break;
}
});
var ufv___36568 = schema.utils.use_fn_validation;
var output_schema36562_36569 = schema.core.Bool;
var input_schema36563_36570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null)))], null);
var input_checker36564_36571 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36563_36570);
}),null));
var output_checker36565_36572 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36562_36569);
}),null));
var ret__26117__auto___36573 = /**
 * Inputs: [a :- tsk/List b :- tsk/List]
 *   Returns: s/Bool
 * 
 *   Returns true iff the vectors are in (strictly) lexicographically increasing order
 * 
 *      [1 2]  [1]        -> false
 *      [1 2]  [1 1]      -> false
 *      [1 2]  [1 2]      -> false
 *      [1 2]  [1 2 nil]  -> true
 *      [1 2]  [1 2 3]    -> true
 *      [1 2]  [1 3]      -> true
 *      [1 2]  [2 1]      -> true
 *      [1 2]  [2]        -> true 
 */
tupelo.core.increasing_QMARK_ = (function tupelo$core$increasing_QMARK_(G__36566,G__36567){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36568);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36566,G__36567], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"increasing?","increasing?",-314395015,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> false\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),input_schema36563_36570,cljs.core.deref.call(null,input_checker36564_36571),args__24531__auto___36574);
} else {
var temp__5720__auto___36575 = cljs.core.deref.call(null,input_checker36564_36571).call(null,args__24531__auto___36574);
if(cljs.core.truth_(temp__5720__auto___36575)){
var error__24532__auto___36576 = temp__5720__auto___36575;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"increasing?","increasing?",-314395015,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> false\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),cljs.core.pr_str.call(null,error__24532__auto___36576)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36563_36570,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36574,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36576], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var a = G__36566;
var b = G__36567;
while(true){
return (tupelo.core.cmp_seq_lexi.call(null,a,b) < (0));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"increasing?","increasing?",-314395015,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> false\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),output_schema36562_36569,cljs.core.deref.call(null,output_checker36565_36572),o__24533__auto__);
} else {
var temp__5720__auto___36577 = cljs.core.deref.call(null,output_checker36565_36572).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36577)){
var error__24532__auto___36578 = temp__5720__auto___36577;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"increasing?","increasing?",-314395015,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> false\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),cljs.core.pr_str.call(null,error__24532__auto___36578)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36562_36569,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36578], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.increasing_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema36562_36569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36563_36570], null)));

var ufv___36585 = schema.utils.use_fn_validation;
var output_schema36579_36586 = schema.core.Bool;
var input_schema36580_36587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null)))], null);
var input_checker36581_36588 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36580_36587);
}),null));
var output_checker36582_36589 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36579_36586);
}),null));
var ret__26117__auto___36590 = /**
 * Inputs: [a :- tsk/List b :- tsk/List]
 *   Returns: s/Bool
 * 
 *   Returns true iff the vectors are in (strictly) lexicographically increasing-or-equal order
 * 
 *      [1 2]  [1]        -> false
 *      [1 2]  [1 1]      -> false
 *      [1 2]  [1 2]      -> true
 *      [1 2]  [1 2 nil]  -> true
 *      [1 2]  [1 2 3]    -> true
 *      [1 2]  [1 3]      -> true
 *      [1 2]  [2 1]      -> true
 *      [1 2]  [2]        -> true 
 */
tupelo.core.increasing_or_equal_QMARK_ = (function tupelo$core$increasing_or_equal_QMARK_(G__36583,G__36584){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36585);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36583,G__36584], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"increasing-or-equal?","increasing-or-equal?",-1597265579,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing-or-equal order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> true\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),input_schema36580_36587,cljs.core.deref.call(null,input_checker36581_36588),args__24531__auto___36591);
} else {
var temp__5720__auto___36592 = cljs.core.deref.call(null,input_checker36581_36588).call(null,args__24531__auto___36591);
if(cljs.core.truth_(temp__5720__auto___36592)){
var error__24532__auto___36593 = temp__5720__auto___36592;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"increasing-or-equal?","increasing-or-equal?",-1597265579,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing-or-equal order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> true\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),cljs.core.pr_str.call(null,error__24532__auto___36593)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36580_36587,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36591,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36593], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var a = G__36583;
var b = G__36584;
while(true){
return tupelo.core.nonpos_QMARK_.call(null,tupelo.core.cmp_seq_lexi.call(null,a,b));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"increasing-or-equal?","increasing-or-equal?",-1597265579,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing-or-equal order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> true\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),output_schema36579_36586,cljs.core.deref.call(null,output_checker36582_36589),o__24533__auto__);
} else {
var temp__5720__auto___36594 = cljs.core.deref.call(null,output_checker36582_36589).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36594)){
var error__24532__auto___36595 = temp__5720__auto___36594;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"increasing-or-equal?","increasing-or-equal?",-1597265579,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true iff the vectors are in (strictly) lexicographically increasing-or-equal order\n\n        [1 2]  [1]        -> false\n        [1 2]  [1 1]      -> false\n        [1 2]  [1 2]      -> true\n        [1 2]  [1 2 nil]  -> true\n        [1 2]  [1 2 3]    -> true\n        [1 2]  [1 3]      -> true\n        [1 2]  [2 1]      -> true\n        [1 2]  [2]        -> true "], null)),cljs.core.pr_str.call(null,error__24532__auto___36595)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36579_36586,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36595], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.increasing_or_equal_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema36579_36586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36580_36587], null)));

/**
 * Recursively walks a data structure and returns a prettified version.
 *   Converts all lists to vectors. Converts all maps & sets to sorted collections.
 */
tupelo.core.prettify = (function tupelo$core$prettify(coll){
var prettify_item = (function tupelo$core$prettify_$_prettify_item(item){
if(cljs.core.sequential_QMARK_.call(null,item)){
return cljs.core.vec.call(null,item);
} else {
if(cljs.core.map_QMARK_.call(null,item)){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),item);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),item);
} else {
return item;

}
}
}
});
var result = clojure.walk.postwalk.call(null,prettify_item,coll);
return result;
});
/**
 * Recursively concatenate all arguments into a single string result.
 */
tupelo.core.strcat = (function tupelo$core$strcat(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36601 = arguments.length;
var i__4830__auto___36602 = (0);
while(true){
if((i__4830__auto___36602 < len__4829__auto___36601)){
args__4835__auto__.push((arguments[i__4830__auto___36602]));

var G__36603 = (i__4830__auto___36602 + (1));
i__4830__auto___36602 = G__36603;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.strcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.strcat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var seq_of_scalars = cljs.core.flatten.call(null,(function (){var iter__4622__auto__ = (function tupelo$core$iter__36597(s__36598){
return (new cljs.core.LazySeq(null,(function (){
var s__36598__$1 = s__36598;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36598__$1);
if(temp__5720__auto__){
var s__36598__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36598__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36598__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36600 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36599 = (0);
while(true){
if((i__36599 < size__4621__auto__)){
var it = cljs.core._nth.call(null,c__4620__auto__,i__36599);
cljs.core.chunk_append.call(null,b__36600,((((cljs.core.sequential_QMARK_.call(null,it)) || (((cljs.core.set_QMARK_.call(null,it)) || (typeof it === 'string')))))?cljs.core.seq.call(null,it):it
));

var G__36604 = (i__36599 + (1));
i__36599 = G__36604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36600),tupelo$core$iter__36597.call(null,cljs.core.chunk_rest.call(null,s__36598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36600),null);
}
} else {
var it = cljs.core.first.call(null,s__36598__$2);
return cljs.core.cons.call(null,((((cljs.core.sequential_QMARK_.call(null,it)) || (((cljs.core.set_QMARK_.call(null,it)) || (typeof it === 'string')))))?cljs.core.seq.call(null,it):it
),tupelo$core$iter__36597.call(null,cljs.core.rest.call(null,s__36598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,tupelo.core.keep_if.call(null,tupelo.core.not_nil_QMARK_,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null))));
})());
var result = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.char$,tupelo.core.keep_if.call(null,tupelo.core.not_nil_QMARK_,seq_of_scalars)));
return result;
}));

(tupelo.core.strcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.strcat.cljs$lang$applyTo = (function (seq36596){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36596));
}));

tupelo.core.print_versions = (function tupelo$core$print_versions(){
var version_str = ["ClojureScript ",cljs.core._STAR_clojurescript_version_STAR_].join('');
var num_hyphen = ((6) + ((version_str).length));
var hyphens = tupelo.core.strcat.call(null,cljs.core.repeat.call(null,num_hyphen,"-"));
var version_str__$1 = tupelo.core.strcat.call(null,"   ",version_str);
cljs.core.newline.call(null);

cljs.core.println.call(null,hyphens);

cljs.core.println.call(null,version_str__$1);

return cljs.core.println.call(null,hyphens);
});
/**
 * Convert a seq into a string (using pr) with a space preceding each value
 */
tupelo.core.seq__GT_str = (function tupelo$core$seq__GT_str(seq_in){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36605_36613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36606_36614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36607_36615 = true;
var _STAR_print_fn_STAR__temp_val__36608_36616 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36607_36615);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36608_36616);

try{var seq__36609_36617 = cljs.core.seq.call(null,cljs.core.seq.call(null,seq_in));
var chunk__36610_36618 = null;
var count__36611_36619 = (0);
var i__36612_36620 = (0);
while(true){
if((i__36612_36620 < count__36611_36619)){
var it_36621 = cljs.core._nth.call(null,chunk__36610_36618,i__36612_36620);
cljs.core.print.call(null," ");

cljs.core.pr.call(null,it_36621);


var G__36622 = seq__36609_36617;
var G__36623 = chunk__36610_36618;
var G__36624 = count__36611_36619;
var G__36625 = (i__36612_36620 + (1));
seq__36609_36617 = G__36622;
chunk__36610_36618 = G__36623;
count__36611_36619 = G__36624;
i__36612_36620 = G__36625;
continue;
} else {
var temp__5720__auto___36626 = cljs.core.seq.call(null,seq__36609_36617);
if(temp__5720__auto___36626){
var seq__36609_36627__$1 = temp__5720__auto___36626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36609_36627__$1)){
var c__4649__auto___36628 = cljs.core.chunk_first.call(null,seq__36609_36627__$1);
var G__36629 = cljs.core.chunk_rest.call(null,seq__36609_36627__$1);
var G__36630 = c__4649__auto___36628;
var G__36631 = cljs.core.count.call(null,c__4649__auto___36628);
var G__36632 = (0);
seq__36609_36617 = G__36629;
chunk__36610_36618 = G__36630;
count__36611_36619 = G__36631;
i__36612_36620 = G__36632;
continue;
} else {
var it_36633 = cljs.core.first.call(null,seq__36609_36627__$1);
cljs.core.print.call(null," ");

cljs.core.pr.call(null,it_36633);


var G__36634 = cljs.core.next.call(null,seq__36609_36627__$1);
var G__36635 = null;
var G__36636 = (0);
var G__36637 = (0);
seq__36609_36617 = G__36634;
chunk__36610_36618 = G__36635;
count__36611_36619 = G__36636;
i__36612_36620 = G__36637;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36606_36614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36605_36613);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});
var ufv___36648 = schema.utils.use_fn_validation;
var output_schema36638_36649 = schema.core.Str;
var input_schema36639_36650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"indent-str","indent-str",-1500146995,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker36640_36651 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36639_36650);
}),null));
var output_checker36641_36652 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36638_36649);
}),null));
var ret__26117__auto___36653 = /**
 * Inputs: [indent-str :- s/Str txt :- s/Str]
 *   Returns: s/Str
 * 
 *   Splits out each line of txt using clojure.string/split-lines, then
 *   indents each line by prepending it with the supplied string. Joins lines together into
 *   a single string result, with each line terminated by a single 
 * ewline.
 */
tupelo.core.indent_lines_with = (function tupelo$core$indent_lines_with(G__36642,G__36643){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36648);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36642,G__36643], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"indent-lines-with","indent-lines-with",751059284,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splits out each line of txt using clojure.string/split-lines, then\n  indents each line by prepending it with the supplied string. Joins lines together into\n  a single string result, with each line terminated by a single \newline."], null)),input_schema36639_36650,cljs.core.deref.call(null,input_checker36640_36651),args__24531__auto___36654);
} else {
var temp__5720__auto___36655 = cljs.core.deref.call(null,input_checker36640_36651).call(null,args__24531__auto___36654);
if(cljs.core.truth_(temp__5720__auto___36655)){
var error__24532__auto___36656 = temp__5720__auto___36655;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"indent-lines-with","indent-lines-with",751059284,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splits out each line of txt using clojure.string/split-lines, then\n  indents each line by prepending it with the supplied string. Joins lines together into\n  a single string result, with each line terminated by a single \newline."], null)),cljs.core.pr_str.call(null,error__24532__auto___36656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36639_36650,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36654,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36656], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var indent_str = G__36642;
var txt = G__36643;
while(true){
return clojure.string.join.call(null,cljs.core.interpose.call(null,"\n",(function (){var iter__4622__auto__ = ((function (validate__24530__auto__,ufv___36648,output_schema36638_36649,input_schema36639_36650,input_checker36640_36651,output_checker36641_36652){
return (function tupelo$core$indent_lines_with_$_iter__36644(s__36645){
return (new cljs.core.LazySeq(null,(function (){
var s__36645__$1 = s__36645;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36645__$1);
if(temp__5720__auto__){
var s__36645__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36645__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36645__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36647 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36646 = (0);
while(true){
if((i__36646 < size__4621__auto__)){
var line = cljs.core._nth.call(null,c__4620__auto__,i__36646);
cljs.core.chunk_append.call(null,b__36647,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));

var G__36657 = (i__36646 + (1));
i__36646 = G__36657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36647),tupelo$core$indent_lines_with_$_iter__36644.call(null,cljs.core.chunk_rest.call(null,s__36645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36647),null);
}
} else {
var line = cljs.core.first.call(null,s__36645__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),tupelo$core$indent_lines_with_$_iter__36644.call(null,cljs.core.rest.call(null,s__36645__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(validate__24530__auto__,ufv___36648,output_schema36638_36649,input_schema36639_36650,input_checker36640_36651,output_checker36641_36652))
;
return iter__4622__auto__.call(null,clojure.string.split_lines.call(null,txt));
})()));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"indent-lines-with","indent-lines-with",751059284,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splits out each line of txt using clojure.string/split-lines, then\n  indents each line by prepending it with the supplied string. Joins lines together into\n  a single string result, with each line terminated by a single \newline."], null)),output_schema36638_36649,cljs.core.deref.call(null,output_checker36641_36652),o__24533__auto__);
} else {
var temp__5720__auto___36658 = cljs.core.deref.call(null,output_checker36641_36652).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36658)){
var error__24532__auto___36659 = temp__5720__auto___36658;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"indent-lines-with","indent-lines-with",751059284,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splits out each line of txt using clojure.string/split-lines, then\n  indents each line by prepending it with the supplied string. Joins lines together into\n  a single string result, with each line terminated by a single \newline."], null)),cljs.core.pr_str.call(null,error__24532__auto___36659)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36638_36649,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36659], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.indent_lines_with),schema.core.__GT_FnSchema.call(null,output_schema36638_36649,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36639_36650], null)));

/**
 * Converts all args to single string and clips any characters beyond nchars.
 */
tupelo.core.clip_str = (function tupelo$core$clip_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36662 = arguments.length;
var i__4830__auto___36663 = (0);
while(true){
if((i__4830__auto___36663 < len__4829__auto___36662)){
args__4835__auto__.push((arguments[i__4830__auto___36663]));

var G__36664 = (i__4830__auto___36663 + (1));
i__4830__auto___36663 = G__36664;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.clip_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.clip_str.cljs$core$IFn$_invoke$arity$variadic = (function (nchars,args){
var it = cljs.core.apply.call(null,cljs.core.str,args);
var it__$1 = cljs.core.take.call(null,nchars,it);
var it__$2 = cljs.core.apply.call(null,cljs.core.str,it__$1);
return it__$2;
}));

(tupelo.core.clip_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.clip_str.cljs$lang$applyTo = (function (seq36660){
var G__36661 = cljs.core.first.call(null,seq36660);
var seq36660__$1 = cljs.core.next.call(null,seq36660);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36661,seq36660__$1);
}));

var ret__4878__auto___36674 = (function (){
/**
 * Prints `id` and the elapsed (elapsed) execution time for a set of forms.
 */
tupelo.core.with_timer = (function tupelo$core$with_timer(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36675 = arguments.length;
var i__4830__auto___36676 = (0);
while(true){
if((i__4830__auto___36676 < len__4829__auto___36675)){
args__4835__auto__.push((arguments[i__4830__auto___36676]));

var G__36677 = (i__4830__auto___36676 + (1));
i__4830__auto___36676 = G__36677;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.with_timer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.with_timer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,id,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__36665__auto__","start__36665__auto__",20295645,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("java.lang.System","nanoTime","java.lang.System/nanoTime",708406973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36666__auto__","result__36666__auto__",1721474805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stop__36667__auto__","stop__36667__auto__",676221008,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("java.lang.System","nanoTime","java.lang.System/nanoTime",708406973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__36668__auto__","elapsed__36668__auto__",1524837653,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stop__36667__auto__","stop__36667__auto__",676221008,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__36665__auto__","start__36665__auto__",20295645,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"secs__36669__auto__","secs__36669__auto__",815125181,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__36668__auto__","elapsed__36668__auto__",1524837653,null),null,(1),null)),(new cljs.core.List(null,1.0E9,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","format","tupelo.core/format",456074077,null),null,(1),null)),(new cljs.core.List(null,":with-timer   %s   = %.3f sec",null,(1),null)),(new cljs.core.List(null,id,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"secs__36669__auto__","secs__36669__auto__",815125181,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36666__auto__","result__36666__auto__",1721474805,null),null,(1),null)))));
}));

(tupelo.core.with_timer.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.with_timer.cljs$lang$applyTo = (function (seq36670){
var G__36671 = cljs.core.first.call(null,seq36670);
var seq36670__$1 = cljs.core.next.call(null,seq36670);
var G__36672 = cljs.core.first.call(null,seq36670__$1);
var seq36670__$2 = cljs.core.next.call(null,seq36670__$1);
var G__36673 = cljs.core.first.call(null,seq36670__$2);
var seq36670__$3 = cljs.core.next.call(null,seq36670__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36671,G__36672,G__36673,seq36670__$3);
}));

return null;
})()
;
(tupelo.core.with_timer.cljs$lang$macro = true);

var ret__4878__auto___36683 = /**
 * Prints the form and its (elapsed) execution time.
 */
tupelo.core.with_timer_x = (function tupelo$core$with_timer_x(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__36678__auto__","start__36678__auto__",1374826677,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("java.lang.System","nanoTime","java.lang.System/nanoTime",708406973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36679__auto__","result__36679__auto__",487340310,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stop__36680__auto__","stop__36680__auto__",-657809545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("java.lang.System","nanoTime","java.lang.System/nanoTime",708406973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__36681__auto__","elapsed__36681__auto__",531638807,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stop__36680__auto__","stop__36680__auto__",-657809545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__36678__auto__","start__36678__auto__",1374826677,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"secs__36682__auto__","secs__36682__auto__",-1412713977,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__36681__auto__","elapsed__36681__auto__",531638807,null),null,(1),null)),(new cljs.core.List(null,1.0E9,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","format","tupelo.core/format",456074077,null),null,(1),null)),(new cljs.core.List(null,":with-timer-x   %s   = %.3f sec",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"secs__36682__auto__","secs__36682__auto__",-1412713977,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36679__auto__","result__36679__auto__",487340310,null),null,(1),null)))));
});
(tupelo.core.with_timer_x.cljs$lang$macro = true);

var ret__4878__auto___36689 = (function (){
/**
 * Threads forms as with `when-some`, but allow more than 1 pair of binding forms.
 */
tupelo.core.let_some = (function tupelo$core$let_some(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36690 = arguments.length;
var i__4830__auto___36691 = (0);
while(true){
if((i__4830__auto___36691 < len__4829__auto___36690)){
args__4835__auto__.push((arguments[i__4830__auto___36691]));

var G__36692 = (i__4830__auto___36691 + (1));
i__4830__auto___36691 = G__36692;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.let_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.let_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,forms){
var num_bindings = cljs.core.count.call(null,bindings);
if(cljs.core.even_QMARK_.call(null,num_bindings)){
} else {
throw cljs.core.ex_info.call(null,["num-bindings must be even; value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_bindings)].join(''),bindings);
}

if((num_bindings > (0))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36684__auto__","result__36684__auto__",1699268804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second.call(null,bindings),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","not-nil?","tupelo.core/not-nil?",-221821473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36684__auto__","result__36684__auto__",1699268804,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,bindings),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36684__auto__","result__36684__auto__",1699268804,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","let-some","tupelo.core/let-some",-211560735,null),null,(1),null)),(new cljs.core.List(null,cljs.core.drop.call(null,(2),bindings),null,(1),null)),forms))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)));
}
}));

(tupelo.core.let_some.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.let_some.cljs$lang$applyTo = (function (seq36685){
var G__36686 = cljs.core.first.call(null,seq36685);
var seq36685__$1 = cljs.core.next.call(null,seq36685);
var G__36687 = cljs.core.first.call(null,seq36685__$1);
var seq36685__$2 = cljs.core.next.call(null,seq36685__$1);
var G__36688 = cljs.core.first.call(null,seq36685__$2);
var seq36685__$3 = cljs.core.next.call(null,seq36685__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36686,G__36687,G__36688,seq36685__$3);
}));

return null;
})()
;
(tupelo.core.let_some.cljs$lang$macro = true);

var ret__4878__auto___36704 = (function (){
/**
 * Usage:  (map-let* ctx bindings & forms)
 * 
 *   where ctx is a map with default values:
 *  {:strict true
 *   :lazy   false}
 */
tupelo.core.map_let_STAR_ = (function tupelo$core$map_let_STAR_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36705 = arguments.length;
var i__4830__auto___36706 = (0);
while(true){
if((i__4830__auto___36706 < len__4829__auto___36705)){
args__4835__auto__.push((arguments[i__4830__auto___36706]));

var G__36707 = (i__4830__auto___36706 + (1));
i__4830__auto___36706 = G__36707;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return tupelo.core.map_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(tupelo.core.map_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,bindings,forms){
if(cljs.core.empty_QMARK_.call(null,bindings)){
throw cljs.core.ex_info.call(null,"map-let*: bindings cannot be empty=",bindings);
} else {
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"map-let*: (count bindings) must be even=",bindings);
}

if((cljs.core.count.call(null,forms) > (0))){
} else {
throw cljs.core.ex_info.call(null,"map-let*: forms cannot be empty=",forms);
}

var binding_pairs = cljs.core.partition.call(null,(2),bindings);
var syms = cljs.core.mapv.call(null,tupelo.core.xfirst,binding_pairs);
var colls = cljs.core.mapv.call(null,tupelo.core.xsecond,binding_pairs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"map-let*: context must be a map=",null,(1),null)),(new cljs.core.List(null,context,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"lazy__36693__auto__","lazy__36693__auto__",-1705313449,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"strict__36694__auto__","strict__36694__auto__",895518869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"strict","strict",-665564191),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lengths__36695__auto__","lengths__36695__auto__",-563653206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,colls,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lengths-equal__36696__auto__","lengths-equal__36696__auto__",-2118079524,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lengths__36695__auto__","lengths__36695__auto__",-563653206,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"map-fn__36697__auto__","map-fn__36697__auto__",935941797,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,syms,null,(1),null)),forms))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"output-fn__36698__auto__","output-fn__36698__auto__",-1546510838,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lazy__36693__auto__","lazy__36693__auto__",-1705313449,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"strict__36694__auto__","strict__36694__auto__",895518869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lengths-equal__36696__auto__","lengths-equal__36696__auto__",-2118079524,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"map-let*: colls must all be same length",null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"lens","lens",1669859853),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lengths__36695__auto__","lengths__36695__auto__",-563653206,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"output-fn__36698__auto__","output-fn__36698__auto__",-1546510838,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"map-fn__36697__auto__","map-fn__36697__auto__",935941797,null),null,(1),null)),colls))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.map_let_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tupelo.core.map_let_STAR_.cljs$lang$applyTo = (function (seq36699){
var G__36700 = cljs.core.first.call(null,seq36699);
var seq36699__$1 = cljs.core.next.call(null,seq36699);
var G__36701 = cljs.core.first.call(null,seq36699__$1);
var seq36699__$2 = cljs.core.next.call(null,seq36699__$1);
var G__36702 = cljs.core.first.call(null,seq36699__$2);
var seq36699__$3 = cljs.core.next.call(null,seq36699__$2);
var G__36703 = cljs.core.first.call(null,seq36699__$3);
var seq36699__$4 = cljs.core.next.call(null,seq36699__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36700,G__36701,G__36702,G__36703,seq36699__$4);
}));

return null;
})()
;
(tupelo.core.map_let_STAR_.cljs$lang$macro = true);

var ret__4878__auto___36712 = (function (){
/**
 * Usage: (map-let bindings & forms)
 * 
 *   Given bindings and forms like
 * 
 *    (map-let [x xs
 *              y ys]
 *      (+ x y))
 * 
 *   will iterate over the collections [xs ys] assigning
 *   successive values of each collection to `x` & `y`, respectively.  Note that the sequences are
 *   consumed ***in parallel***, and are not nested as with `for` and `doseq`.
 *   The local symbols `x` & `y` can then be used in `forms` to generate the output mapping.
 *   Will throw if collections are not all of the same length. Not lazy.
 */
tupelo.core.map_let = (function tupelo$core$map_let(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36713 = arguments.length;
var i__4830__auto___36714 = (0);
while(true){
if((i__4830__auto___36714 < len__4829__auto___36713)){
args__4835__auto__.push((arguments[i__4830__auto___36714]));

var G__36715 = (i__4830__auto___36714 + (1));
i__4830__auto___36714 = G__36715;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.map_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.map_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","map-let*","tupelo.core/map-let*",615504837,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"strict","strict",-665564191),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),forms)));
}));

(tupelo.core.map_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.map_let.cljs$lang$applyTo = (function (seq36708){
var G__36709 = cljs.core.first.call(null,seq36708);
var seq36708__$1 = cljs.core.next.call(null,seq36708);
var G__36710 = cljs.core.first.call(null,seq36708__$1);
var seq36708__$2 = cljs.core.next.call(null,seq36708__$1);
var G__36711 = cljs.core.first.call(null,seq36708__$2);
var seq36708__$3 = cljs.core.next.call(null,seq36708__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36709,G__36710,G__36711,seq36708__$3);
}));

return null;
})()
;
(tupelo.core.map_let.cljs$lang$macro = true);

var ufv___36724 = schema.utils.use_fn_validation;
var output_schema36716_36725 = tupelo.schema.Vec;
var input_schema36717_36726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"map-fn","map-fn",-1470323083,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker36718_36727 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36717_36726);
}),null));
var output_checker36719_36728 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36716_36725);
}),null));
var ret__26117__auto___36729 = (function (){
/**
 * Inputs: [map-fn & colls]
 *   Returns: tsk/Vec
 * 
 *   Like clojure.core/mapv, but throws if colls are not of equal length.
 */
tupelo.core.xmap = (function tupelo$core$xmap(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36730 = arguments.length;
var i__4830__auto___36731 = (0);
while(true){
if((i__4830__auto___36731 < len__4829__auto___36730)){
args__4835__auto__.push((arguments[i__4830__auto___36731]));

var G__36732 = (i__4830__auto___36731 + (1));
i__4830__auto___36731 = G__36732;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.xmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.xmap.cljs$core$IFn$_invoke$arity$variadic = (function (G__36720,rest36721){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36724);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36733 = cljs.core.list_STAR_.call(null,G__36720,rest36721);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"xmap","xmap",394529517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/mapv, but throws if colls are not of equal length."], null)),input_schema36717_36726,cljs.core.deref.call(null,input_checker36718_36727),args__24531__auto___36733);
} else {
var temp__5720__auto___36734 = cljs.core.deref.call(null,input_checker36718_36727).call(null,args__24531__auto___36733);
if(cljs.core.truth_(temp__5720__auto___36734)){
var error__24532__auto___36735 = temp__5720__auto___36734;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xmap","xmap",394529517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/mapv, but throws if colls are not of equal length."], null)),cljs.core.pr_str.call(null,error__24532__auto___36735)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36717_36726,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36733,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36735], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_fn = G__36720;
var colls = rest36721;
while(true){
if(cljs.core.empty_QMARK_.call(null,colls)){
throw cljs.core.ex_info.call(null,"colls cannot be empty",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var col_lens = cljs.core.mapv.call(null,cljs.core.count,colls);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,col_lens))){
} else {
throw cljs.core.ex_info.call(null,"xmap: colls must all be same length",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-lens","col-lens",-740712648),col_lens], null)));
}

return cljs.core.apply.call(null,cljs.core.mapv,map_fn,colls);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"xmap","xmap",394529517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/mapv, but throws if colls are not of equal length."], null)),output_schema36716_36725,cljs.core.deref.call(null,output_checker36719_36728),o__24533__auto__);
} else {
var temp__5720__auto___36736 = cljs.core.deref.call(null,output_checker36719_36728).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36736)){
var error__24532__auto___36737 = temp__5720__auto___36736;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"xmap","xmap",394529517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like clojure.core/mapv, but throws if colls are not of equal length."], null)),cljs.core.pr_str.call(null,error__24532__auto___36737)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36716_36725,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36737], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.xmap.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.xmap.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first.call(null,seq36722);
var seq36722__$1 = cljs.core.next.call(null,seq36722);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36723,seq36722__$1);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.xmap),schema.core.__GT_FnSchema.call(null,output_schema36716_36725,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36717_36726], null)));

/**
 * Usage:  `(zip* context & colls)`
 *   where context is a map with default values:  `{:strict true}`
 *   Not lazy. 
 */
tupelo.core.zip_1_STAR_ = (function tupelo$core$zip_1_STAR_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36740 = arguments.length;
var i__4830__auto___36741 = (0);
while(true){
if((i__4830__auto___36741 < len__4829__auto___36740)){
args__4835__auto__.push((arguments[i__4830__auto___36741]));

var G__36742 = (i__4830__auto___36741 + (1));
i__4830__auto___36741 = G__36742;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.zip_1_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.zip_1_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (context,colls){
if(cljs.core.map_QMARK_.call(null,context)){
} else {
throw (new Error("Assert failed: (map? context)"));
}

if(cljs.core.truth_((function (){
return cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,colls);
}))){
} else {
throw (new Error("Assert failed: (fn* [] (every? sequential? colls))"));
}

var strict = cljs.core.get.call(null,context,new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var lengths = cljs.core.mapv.call(null,cljs.core.count,colls);
var lengths_equal = cljs.core.apply.call(null,cljs.core._EQ_,lengths);
if(cljs.core.truth_((function (){var and__4221__auto__ = strict;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not.call(null,lengths_equal);
} else {
return and__4221__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"zip*: colls must all be same length; lengths=",lengths);
} else {
}

return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,colls));
}));

(tupelo.core.zip_1_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.zip_1_STAR_.cljs$lang$applyTo = (function (seq36738){
var G__36739 = cljs.core.first.call(null,seq36738);
var seq36738__$1 = cljs.core.next.call(null,seq36738);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36739,seq36738__$1);
}));

/**
 * Usage:  `(zip* context & colls)`
 *   where context is a map with default values:  `{:strict true}`
 *   Not lazy. 
 */
tupelo.core.zip_STAR_ = (function tupelo$core$zip_STAR_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36745 = arguments.length;
var i__4830__auto___36746 = (0);
while(true){
if((i__4830__auto___36746 < len__4829__auto___36745)){
args__4835__auto__.push((arguments[i__4830__auto___36746]));

var G__36747 = (i__4830__auto___36746 + (1));
i__4830__auto___36746 = G__36747;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.zip_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.zip_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (context,colls){
if(cljs.core.map_QMARK_.call(null,context)){
} else {
throw (new Error("Assert failed: (map? context)"));
}

if(cljs.core.truth_((function (){
return cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,colls);
}))){
} else {
throw (new Error("Assert failed: (fn* [] (every? sequential? colls))"));
}

var num_colls = cljs.core.count.call(null,colls);
var strict_flg = cljs.core.get.call(null,context,new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var result = cljs.core.PersistentVector.EMPTY;
var colls__$1 = colls;
while(true){
var empty_flgs = cljs.core.mapv.call(null,cljs.core.empty_QMARK_,colls__$1);
var num_empties = cljs.core.count.call(null,tupelo.core.keep_if.call(null,tupelo.core.truthy_QMARK_,empty_flgs));
if((num_empties === (0))){
var new_row = cljs.core.mapv.call(null,tupelo.core.xfirst,colls__$1);
var new_results = tupelo.core.append.call(null,result,new_row);
var G__36748 = new_results;
var G__36749 = cljs.core.mapv.call(null,tupelo.core.xrest,colls__$1);
result = G__36748;
colls__$1 = G__36749;
continue;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = strict_flg;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.call(null,num_empties,num_colls);
} else {
return and__4221__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"zip*: collections are not all same length; empty-flgs=",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"empty-flgs","empty-flgs",-519575091),empty_flgs], null)));
} else {
}

return result;
}
break;
}
}));

(tupelo.core.zip_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.zip_STAR_.cljs$lang$applyTo = (function (seq36743){
var G__36744 = cljs.core.first.call(null,seq36743);
var seq36743__$1 = cljs.core.next.call(null,seq36743);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36744,seq36743__$1);
}));

/**
 * Zips together vectors producing a vector of tuples (like Python zip). Not lazy.
 *   Example:
 * 
 *      (zip
 *        [:a :b :c]
 *        [ 1  2  3])
 * 
 *      ;=>  [ [:a 1]
 *             [:b 2]
 *             [:c 3] ]
 * 
 * ***** WARNING - will hang for infinite length inputs ***** 
 */
tupelo.core.zip = (function tupelo$core$zip(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36751 = arguments.length;
var i__4830__auto___36752 = (0);
while(true){
if((i__4830__auto___36752 < len__4829__auto___36751)){
args__4835__auto__.push((arguments[i__4830__auto___36752]));

var G__36753 = (i__4830__auto___36752 + (1));
i__4830__auto___36752 = G__36753;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_((function (){
return cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,args);
}))){
} else {
throw (new Error("Assert failed: (fn* [] (every? sequential? args))"));
}

return cljs.core.apply.call(null,tupelo.core.zip_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strict","strict",-665564191),true], null),args);
}));

(tupelo.core.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.zip.cljs$lang$applyTo = (function (seq36750){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36750));
}));

/**
 * Usage:  `(zip-lazy coll1 coll2 ...)`
 * 
 *      (zip-lazy xs ys zs) => [ [x0 y0 z0]
 *                               [x1 y1 z1]
 *                               [x2 y2 z2]
 *                               ... ]
 * 
 *   Returns a lazy result. Will truncate to the length of the shortest collection.
 *   A convenience wrapper for `(map vector coll1 coll2 ...)`.  
 */
tupelo.core.zip_lazy = (function tupelo$core$zip_lazy(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36755 = arguments.length;
var i__4830__auto___36756 = (0);
while(true){
if((i__4830__auto___36756 < len__4829__auto___36755)){
args__4835__auto__.push((arguments[i__4830__auto___36756]));

var G__36757 = (i__4830__auto___36756 + (1));
i__4830__auto___36756 = G__36757;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.zip_lazy.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.zip_lazy.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
if(cljs.core.truth_((function (){
return cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,colls);
}))){
} else {
throw (new Error("Assert failed: (fn* [] (every? sequential? colls))"));
}

return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,colls);
}));

(tupelo.core.zip_lazy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.zip_lazy.cljs$lang$applyTo = (function (seq36754){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36754));
}));

/**
 * Given one or more collections, returns a sequence of indexed tuples from the collections:
 * 
 *      (indexed xs ys zs) -> [ [0 x0 y0 z0]
 *                              [1 x1 y1 z1]
 *                              [2 x2 y2 z2]
 *                              ... ]
 *                              
 */
tupelo.core.indexed = (function tupelo$core$indexed(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36759 = arguments.length;
var i__4830__auto___36760 = (0);
while(true){
if((i__4830__auto___36760 < len__4829__auto___36759)){
args__4835__auto__.push((arguments[i__4830__auto___36760]));

var G__36761 = (i__4830__auto___36760 + (1));
i__4830__auto___36760 = G__36761;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.indexed.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.indexed.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return cljs.core.apply.call(null,tupelo.core.zip_lazy,cljs.core.range.call(null),colls);
}));

(tupelo.core.indexed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.indexed.cljs$lang$applyTo = (function (seq36758){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36758));
}));

var ret__4878__auto___36762 = /**
 * The simple way to create a lazy sequence:
 * 
 *      (defn lazy-next-int [n]
 *        (t/lazy-cons n (lazy-next-int (inc n))))
 * 
 *      (def all-ints (lazy-next-int 0))
 *      
 */
tupelo.core.lazy_cons = (function tupelo$core$lazy_cons(_AMPERSAND_form,_AMPERSAND_env,curr_val,recursive_call_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,curr_val,null,(1),null)),(new cljs.core.List(null,recursive_call_form,null,(1),null))))),null,(1),null)))));
});
(tupelo.core.lazy_cons.cljs$lang$macro = true);

/**
 * A lazy seq of Fibonacci numbers (memoized).
 */
tupelo.core.fibonacci_seq = (function tupelo$core$fibonacci_seq(){
var fibo_step = (function tupelo$core$fibonacci_seq_$_fibo_step(p__36763){
var vec__36764 = p__36763;
var val1 = cljs.core.nth.call(null,vec__36764,(0),null);
var val2 = cljs.core.nth.call(null,vec__36764,(1),null);
var next_val = (val1 + val2);
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,next_val,tupelo$core$fibonacci_seq_$_fibo_step.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val2,next_val], null)));
}),null,null));
});
return cljs.core.cons.call(null,(0),cljs.core.cons.call(null,(1),fibo_step.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null))));
});
/**
 * Returns a vector of Fibonacci numbers up to limit (inclusive). Note that a
 *   2^62  corresponds to 91'st Fibonacci number.
 */
tupelo.core.fibo_thru = (function tupelo$core$fibo_thru(limit){
return cljs.core.vec.call(null,cljs.core.take_while.call(null,(function (p1__36767_SHARP_){
return (p1__36767_SHARP_ <= limit);
}),tupelo.core.fibonacci_seq.call(null)));
});
/**
 * Returns the N'th Fibonacci number (zero-based). Note that
 *   N=91 corresponds to approx 2^62
 */
tupelo.core.fibo_nth = (function tupelo$core$fibo_nth(N){
return cljs.core.first.call(null,cljs.core.drop.call(null,N,tupelo.core.fibonacci_seq.call(null)));
});
/**
 * Returns true if 2 double-precision numbers are relatively equal, else false.  Relative equality
 * is specified as either (1) the N most significant digits are equal, or (2) the absolute
 * difference is less than a tolerance value.  Input values are coerced to double before comparison.
 * Example:
 * 
 *       (rel= 123450000 123456789   :digits 4   )  ; true
 *       (rel= 1         1.001       :tol    0.01)  ; true
 * 
 * 
 */
tupelo.core.rel_EQ_ = (function tupelo$core$rel_EQ_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36774 = arguments.length;
var i__4830__auto___36775 = (0);
while(true){
if((i__4830__auto___36775 < len__4829__auto___36774)){
args__4835__auto__.push((arguments[i__4830__auto___36775]));

var G__36776 = (i__4830__auto___36775 + (1));
i__4830__auto___36775 = G__36776;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.rel_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.rel_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (val1,val2,p__36771){
var map__36772 = p__36771;
var map__36772__$1 = cljs.core.__destructure_map.call(null,map__36772);
var opts = map__36772__$1;
if(typeof val1 === 'number'){
} else {
throw (new Error("Assert failed: (number? val1)"));
}

if(typeof val2 === 'number'){
} else {
throw (new Error("Assert failed: (number? val2)"));
}

var _PERCENT_ = (function (){var map__36773 = opts;
var map__36773__$1 = cljs.core.__destructure_map.call(null,map__36773);
var digits = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"digits","digits",-1134635061));
var tol = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"tol","tol",-1140032284));
if(cljs.core.truth_((function (){var or__4223__auto__ = digits;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return tol;
}
})())){
} else {
throw cljs.core.ex_info.call(null,"Must specify either :digits or :tol",opts);
}

if(cljs.core.truth_(tol)){
if(typeof tol === 'number'){
} else {
throw cljs.core.ex_info.call(null,":tol must be a number",opts);
}

if((tol > (0))){
} else {
throw cljs.core.ex_info.call(null,":tol must be positive",opts);
}
} else {
}

if(cljs.core.truth_(digits)){
if(cljs.core.integer_QMARK_.call(null,digits)){
} else {
throw cljs.core.ex_info.call(null,":digits must be an integer",opts);
}

if((digits > (0))){
} else {
throw cljs.core.ex_info.call(null,":digits must positive",opts);
}
} else {
}

var val1__$1 = val1;
var val2__$1 = val2;
var delta_abs = Math.abs((val1__$1 - val2__$1));
var or_result = tupelo.core.truthy_QMARK_.call(null,(function (){var or__4223__auto__ = (delta_abs === (0));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var and__4221__auto__ = tol;
if(cljs.core.truth_(and__4221__auto__)){
var tol_result = (delta_abs < tol);
return tol_result;
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var and__4221__auto__ = digits;
if(cljs.core.truth_(and__4221__auto__)){
var abs1 = Math.abs(val1__$1);
var abs2 = Math.abs(val2__$1);
var max_abs = Math.max(abs1,abs2);
var delta_rel_abs = (delta_abs / max_abs);
var rel_tol = Math.pow((10),(- digits));
var dig_result = (delta_rel_abs < rel_tol);
return dig_result;
} else {
return and__4221__auto__;
}
}
}
})());
return or_result;
})();
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null),_PERCENT_)){
} else {
throw (new Error("Assert failed: (contains? #{true false} %)"));
}

return _PERCENT_;
}));

(tupelo.core.rel_EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.rel_EQ_.cljs$lang$applyTo = (function (seq36768){
var G__36769 = cljs.core.first.call(null,seq36768);
var seq36768__$1 = cljs.core.next.call(null,seq36768);
var G__36770 = cljs.core.first.call(null,seq36768__$1);
var seq36768__$2 = cljs.core.next.call(null,seq36768__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36769,G__36770,seq36768__$2);
}));

/**
 * Applies
 */
tupelo.core.all_rel_EQ_ = (function tupelo$core$all_rel_EQ_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36782 = arguments.length;
var i__4830__auto___36783 = (0);
while(true){
if((i__4830__auto___36783 < len__4829__auto___36782)){
args__4835__auto__.push((arguments[i__4830__auto___36783]));

var G__36784 = (i__4830__auto___36783 + (1));
i__4830__auto___36783 = G__36784;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.all_rel_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.all_rel_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x_vals,y_vals,opts){
var num_x_36785 = cljs.core.count.call(null,x_vals);
var num_y_36786 = cljs.core.count.call(null,y_vals);
if(cljs.core._EQ_.call(null,num_x_36785,num_y_36786)){
} else {
throw cljs.core.ex_info.call(null,": x-vals & y-vals must be same length",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-x","num-x",436301372),num_x_36785], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-y","num-y",-1881498498),num_y_36786], null)));
}

return cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,cljs.core.map.call(null,(function (p1__36777_SHARP_,p2__36778_SHARP_){
return cljs.core.apply.call(null,tupelo.core.rel_EQ_,p1__36777_SHARP_,p2__36778_SHARP_,opts);
}),x_vals,y_vals));
}));

(tupelo.core.all_rel_EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.all_rel_EQ_.cljs$lang$applyTo = (function (seq36779){
var G__36780 = cljs.core.first.call(null,seq36779);
var seq36779__$1 = cljs.core.next.call(null,seq36779);
var G__36781 = cljs.core.first.call(null,seq36779__$1);
var seq36779__$2 = cljs.core.next.call(null,seq36779__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36780,G__36781,seq36779__$2);
}));

tupelo.core.deep_rel_EQ_ = (function tupelo$core$deep_rel_EQ_(a,b){
return ((cljs.core._EQ_.call(null,a,b)) || (((((typeof a === 'number') && (((typeof b === 'number') && (((tupelo.core.rel_EQ_.call(null,a,b,new cljs.core.Keyword(null,"tol","tol",-1140032284),1.0E-5)) || (tupelo.core.rel_EQ_.call(null,a,b,new cljs.core.Keyword(null,"digits","digits",-1134635061),(5))))))))) || (((((cljs.core.map_QMARK_.call(null,a)) && (((cljs.core.map_QMARK_.call(null,b)) && (cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,(function (){
if(cljs.core.map_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null))){
} else {
throw cljs.core.ex_info.call(null,"map-let*: context must be a map=",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null));
}

var lazy__30963__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null),new cljs.core.Keyword(null,"lazy","lazy",-424547181),false);
var strict__30964__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null),new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var lengths__30965__auto__ = cljs.core.mapv.call(null,cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tupelo.core.__GT_sorted_map_generic.call(null,a),tupelo.core.__GT_sorted_map_generic.call(null,b)], null));
var lengths_equal__30966__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,lengths__30965__auto__);
var map_fn__30967__auto__ = (function (p__36787,p__36788){
var vec__36789 = p__36787;
var ak = cljs.core.nth.call(null,vec__36789,(0),null);
var av = cljs.core.nth.call(null,vec__36789,(1),null);
var vec__36792 = p__36788;
var bk = cljs.core.nth.call(null,vec__36792,(0),null);
var bv = cljs.core.nth.call(null,vec__36792,(1),null);
var and__4221__auto____$2 = tupelo.core.deep_rel_EQ_.call(null,ak,bk);
if(cljs.core.truth_(and__4221__auto____$2)){
return tupelo.core.deep_rel_EQ_.call(null,av,bv);
} else {
return and__4221__auto____$2;
}
});
var output_fn__30968__auto__ = (cljs.core.truth_(lazy__30963__auto__)?cljs.core.identity:cljs.core.vec);
if(cljs.core.truth_((function (){var and__4221__auto____$2 = strict__30964__auto__;
if(cljs.core.truth_(and__4221__auto____$2)){
return cljs.core.not.call(null,lengths_equal__30966__auto__);
} else {
return and__4221__auto____$2;
}
})())){
throw cljs.core.ex_info.call(null,"map-let*: colls must all be same length",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lens","lens",1669859853),lengths__30965__auto__], null));
} else {
}

return output_fn__30968__auto__.call(null,cljs.core.map.call(null,map_fn__30967__auto__,tupelo.core.__GT_sorted_map_generic.call(null,a),tupelo.core.__GT_sorted_map_generic.call(null,b)));
})()
)))))) || (((cljs.core.sequential_QMARK_.call(null,a)) && (((cljs.core.sequential_QMARK_.call(null,b)) && (cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,(function (){
if(cljs.core.map_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null))){
} else {
throw cljs.core.ex_info.call(null,"map-let*: context must be a map=",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null));
}

var lazy__30963__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null),new cljs.core.Keyword(null,"lazy","lazy",-424547181),false);
var strict__30964__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strict","strict",-665564191),true,new cljs.core.Keyword(null,"lazy","lazy",-424547181),false], null),new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var lengths__30965__auto__ = cljs.core.mapv.call(null,cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var lengths_equal__30966__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,lengths__30965__auto__);
var map_fn__30967__auto__ = (function (av,bv){
return tupelo.core.deep_rel_EQ_.call(null,av,bv);
});
var output_fn__30968__auto__ = (cljs.core.truth_(lazy__30963__auto__)?cljs.core.identity:cljs.core.vec);
if(cljs.core.truth_((function (){var and__4221__auto____$2 = strict__30964__auto__;
if(cljs.core.truth_(and__4221__auto____$2)){
return cljs.core.not.call(null,lengths_equal__30966__auto__);
} else {
return and__4221__auto____$2;
}
})())){
throw cljs.core.ex_info.call(null,"map-let*: colls must all be same length",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lens","lens",1669859853),lengths__30965__auto__], null));
} else {
}

return output_fn__30968__auto__.call(null,cljs.core.map.call(null,map_fn__30967__auto__,a,b));
})()
)))))))))));
});
/**
 * An eager version clojure.core/range that always returns its result in a vector.
 */
tupelo.core.range_vec = (function tupelo$core$range_vec(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36796 = arguments.length;
var i__4830__auto___36797 = (0);
while(true){
if((i__4830__auto___36797 < len__4829__auto___36796)){
args__4835__auto__.push((arguments[i__4830__auto___36797]));

var G__36798 = (i__4830__auto___36797 + (1));
i__4830__auto___36797 = G__36798;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.range_vec.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.range_vec.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.range,args));
}));

(tupelo.core.range_vec.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.range_vec.cljs$lang$applyTo = (function (seq36795){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36795));
}));

/**
 * Returns a sequence of integers. Like clojure.core/rng, but is inclusive of the right boundary value. Not lazy. 
 */
tupelo.core.thru = (function tupelo$core$thru(var_args){
var G__36801 = arguments.length;
switch (G__36801) {
case 1:
return tupelo.core.thru.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tupelo.core.thru.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tupelo.core.thru.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tupelo.core.thru.cljs$core$IFn$_invoke$arity$1 = (function (end){
return tupelo.core.thru.call(null,(0),end);
}));

(tupelo.core.thru.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return tupelo.core.thru.call(null,start,end,(1));
}));

(tupelo.core.thru.cljs$core$IFn$_invoke$arity$3 = (function (start,end,step){
var delta = (end - start);
var nsteps_dbl = (delta / step);
var nsteps_int = Math.round(nsteps_dbl);
var rounding_error = Math.abs((nsteps_dbl - nsteps_int));
if((1.0E-5 < rounding_error)){
throw cljs.core.ex_info.call(null,"thru: non-integer number of steps \n   args:",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),start], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),step], null)));
} else {
}

return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__36799_SHARP_){
return ((p1__36799_SHARP_ * step) + start);
}),cljs.core.range.call(null,(nsteps_int + (1)))));
}));

(tupelo.core.thru.cljs$lang$maxFixedArity = 3);

/**
 * Given two characters (or numerical equivalents), returns a seq of characters
 *   (inclusive) from the first to the second.  Characters must be in ascending order.
 */
tupelo.core.chars_thru = (function tupelo$core$chars_thru(start_char,stop_char){
var start_int = ((cljs.core.integer_QMARK_.call(null,start_char))?start_char:tupelo.core.char__GT_codepoint.call(null,start_char));
var stop_int = ((cljs.core.integer_QMARK_.call(null,stop_char))?stop_char:tupelo.core.char__GT_codepoint.call(null,stop_char));
var thru_vals = tupelo.core.thru.call(null,start_int,stop_int);
var char_vals = cljs.core.mapv.call(null,tupelo.core.codepoint__GT_char,thru_vals);
if(((65535) < stop_int)){
throw cljs.core.ex_info.call(null,"chars-thru: stop-int too large",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-int","start-int",-79225964),start_int], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop-int","stop-int",-1063379257),stop_int], null)));
} else {
}

if((start_int <= stop_int)){
} else {
throw cljs.core.ex_info.call(null,"chars-thru: start-char must come before stop-char.",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-int","start-int",-79225964),start_int], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop-int","stop-int",-1063379257),stop_int], null)));
}

return char_vals;
});
var ufv___36809 = schema.utils.use_fn_validation;
var output_schema36803_36810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema36804_36811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),cljs.core.with_meta(new cljs.core.Symbol(null,"dims","dims",1174008638,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker36805_36812 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36804_36811);
}),null));
var output_checker36806_36813 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36803_36810);
}),null));
var ret__26117__auto___36814 = /**
 * Inputs: [dims :- [s/Num] val :- s/Any]
 *   Returns: [s/Any]
 */
tupelo.core.repeat_dims = (function tupelo$core$repeat_dims(G__36807,G__36808){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36809);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36807,G__36808], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"repeat-dims","repeat-dims",612051736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),input_schema36804_36811,cljs.core.deref.call(null,input_checker36805_36812),args__24531__auto___36815);
} else {
var temp__5720__auto___36816 = cljs.core.deref.call(null,input_checker36805_36812).call(null,args__24531__auto___36815);
if(cljs.core.truth_(temp__5720__auto___36816)){
var error__24532__auto___36817 = temp__5720__auto___36816;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"repeat-dims","repeat-dims",612051736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36804_36811,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36815,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36817], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var dims = G__36807;
var val = G__36808;
while(true){
if((cljs.core.count.call(null,dims) > (0))){
} else {
throw (new Error("Assert failed: (pos? (count dims))"));
}

if(cljs.core.every_QMARK_.call(null,tupelo.core.int_nonneg_QMARK_,dims)){
} else {
throw (new Error("Assert failed: (every? int-nonneg? dims)"));
}

var dim_curr = tupelo.core.xfirst.call(null,dims);
return cljs.core.vec.call(null,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,dims)))?cljs.core.repeat.call(null,dim_curr,val):cljs.core.repeat.call(null,dim_curr,tupelo.core.repeat_dims.call(null,tupelo.core.xrest.call(null,dims),val))));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"repeat-dims","repeat-dims",612051736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),output_schema36803_36810,cljs.core.deref.call(null,output_checker36806_36813),o__24533__auto__);
} else {
var temp__5720__auto___36818 = cljs.core.deref.call(null,output_checker36806_36813).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36818)){
var error__24532__auto___36819 = temp__5720__auto___36818;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"repeat-dims","repeat-dims",612051736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__24532__auto___36819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36803_36810,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36819], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.repeat_dims),schema.core.__GT_FnSchema.call(null,output_schema36803_36810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36804_36811], null)));

var ufv___36826 = schema.utils.use_fn_validation;
var output_schema36820_36827 = schema.core.Any;
var input_schema36821_36828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.cond_pre.call(null,tupelo.schema.Map,tupelo.schema.Vec),cljs.core.with_meta(new cljs.core.Symbol(null,"mappy","mappy",1138796888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null))], null))),schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null)))], null);
var input_checker36822_36829 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36821_36828);
}),null));
var output_checker36823_36830 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36820_36827);
}),null));
var ret__26117__auto___36831 = /**
 * Inputs: [mappy :- (s/cond-pre tsk/Map tsk/Vec) path :- tsk/Vec]
 *   Returns: s/Any
 * 
 *   A fail-fast version of clojure.core/get-in. When invoked as (fetch-in mappy path),
 * returns the value associated with path as for (clojure.core/get-in mappy path).
 * Throws an Exception if the path path is not present in mappy.
 */
tupelo.core.fetch_in = (function tupelo$core$fetch_in(G__36824,G__36825){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36826);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36824,G__36825], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"fetch-in","fetch-in",-29330016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of clojure.core/get-in. When invoked as (fetch-in mappy path),\n   returns the value associated with path as for (clojure.core/get-in mappy path).\n   Throws an Exception if the path path is not present in mappy."], null)),input_schema36821_36828,cljs.core.deref.call(null,input_checker36822_36829),args__24531__auto___36832);
} else {
var temp__5720__auto___36833 = cljs.core.deref.call(null,input_checker36822_36829).call(null,args__24531__auto___36832);
if(cljs.core.truth_(temp__5720__auto___36833)){
var error__24532__auto___36834 = temp__5720__auto___36833;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"fetch-in","fetch-in",-29330016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of clojure.core/get-in. When invoked as (fetch-in mappy path),\n   returns the value associated with path as for (clojure.core/get-in mappy path).\n   Throws an Exception if the path path is not present in mappy."], null)),cljs.core.pr_str.call(null,error__24532__auto___36834)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36821_36828,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36832,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36834], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var mappy = G__36824;
var path = G__36825;
while(true){
tupelo.core.validate.call(null,cljs.core.associative_QMARK_,mappy);

var result = cljs.core.get_in.call(null,mappy,path,new cljs.core.Keyword("tupelo.core","not-found","tupelo.core/not-found",-742110200));
if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword("tupelo.core","not-found","tupelo.core/not-found",-742110200))){
throw cljs.core.ex_info.call(null,"Key seq not present in map:",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"mappy","mappy",-501734639),tupelo.core.snip.call(null,mappy)], null));
} else {
return result;
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"fetch-in","fetch-in",-29330016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of clojure.core/get-in. When invoked as (fetch-in mappy path),\n   returns the value associated with path as for (clojure.core/get-in mappy path).\n   Throws an Exception if the path path is not present in mappy."], null)),output_schema36820_36827,cljs.core.deref.call(null,output_checker36823_36830),o__24533__auto__);
} else {
var temp__5720__auto___36835 = cljs.core.deref.call(null,output_checker36823_36830).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36835)){
var error__24532__auto___36836 = temp__5720__auto___36835;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"fetch-in","fetch-in",-29330016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of clojure.core/get-in. When invoked as (fetch-in mappy path),\n   returns the value associated with path as for (clojure.core/get-in mappy path).\n   Throws an Exception if the path path is not present in mappy."], null)),cljs.core.pr_str.call(null,error__24532__auto___36836)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36820_36827,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36836], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.fetch_in),schema.core.__GT_FnSchema.call(null,output_schema36820_36827,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36821_36828], null)));

var ufv___36843 = schema.utils.use_fn_validation;
var output_schema36837_36844 = schema.core.Any;
var input_schema36838_36845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"the-map","the-map",549772450,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"the-key","the-key",-1177006979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker36839_36846 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36838_36845);
}),null));
var output_checker36840_36847 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36837_36844);
}),null));
var ret__26117__auto___36848 = /**
 * Inputs: [the-map :- tsk/Map the-key :- s/Any]
 *   Returns: s/Any
 * 
 *   A fail-fast version of keyword/map lookup.  When invoked as (fetch the-map :the-key),
 * returns the value associated with :the-key as for (clojure.core/get the-map :the-key).
 * Throws an Exception if :the-key is not present in the-map.
 */
tupelo.core.fetch = (function tupelo$core$fetch(G__36841,G__36842){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36843);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36841,G__36842], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"fetch","fetch",558537283,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (fetch the-map :the-key),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),input_schema36838_36845,cljs.core.deref.call(null,input_checker36839_36846),args__24531__auto___36849);
} else {
var temp__5720__auto___36850 = cljs.core.deref.call(null,input_checker36839_36846).call(null,args__24531__auto___36849);
if(cljs.core.truth_(temp__5720__auto___36850)){
var error__24532__auto___36851 = temp__5720__auto___36850;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"fetch","fetch",558537283,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (fetch the-map :the-key),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),cljs.core.pr_str.call(null,error__24532__auto___36851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36838_36845,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36849,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36851], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var the_map = G__36841;
var the_key = G__36842;
while(true){
return tupelo.core.fetch_in.call(null,the_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_key], null));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"fetch","fetch",558537283,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (fetch the-map :the-key),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),output_schema36837_36844,cljs.core.deref.call(null,output_checker36840_36847),o__24533__auto__);
} else {
var temp__5720__auto___36852 = cljs.core.deref.call(null,output_checker36840_36847).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36852)){
var error__24532__auto___36853 = temp__5720__auto___36852;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"fetch","fetch",558537283,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (fetch the-map :the-key),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),cljs.core.pr_str.call(null,error__24532__auto___36853)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36837_36844,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36853], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.fetch),schema.core.__GT_FnSchema.call(null,output_schema36837_36844,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36838_36845], null)));

var ufv___36860 = schema.utils.use_fn_validation;
var output_schema36854_36861 = schema.core.Any;
var input_schema36855_36862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"the-key","the-key",-1177006979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"the-map","the-map",549772450,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null)))], null);
var input_checker36856_36863 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36855_36862);
}),null));
var output_checker36857_36864 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36854_36861);
}),null));
var ret__26117__auto___36865 = /**
 * Inputs: [the-key :- s/Any the-map :- tsk/Map]
 *   Returns: s/Any
 * 
 *   A fail-fast version of keyword/map lookup.  When invoked as (grab :the-key the-map),
 * returns the value associated with :the-key as for (clojure.core/get the-map :the-key).
 * Throws an Exception if :the-key is not present in the-map.
 */
tupelo.core.grab = (function tupelo$core$grab(G__36858,G__36859){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36860);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36858,G__36859], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"grab","grab",1608774178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (grab :the-key the-map),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),input_schema36855_36862,cljs.core.deref.call(null,input_checker36856_36863),args__24531__auto___36866);
} else {
var temp__5720__auto___36867 = cljs.core.deref.call(null,input_checker36856_36863).call(null,args__24531__auto___36866);
if(cljs.core.truth_(temp__5720__auto___36867)){
var error__24532__auto___36868 = temp__5720__auto___36867;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"grab","grab",1608774178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (grab :the-key the-map),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),cljs.core.pr_str.call(null,error__24532__auto___36868)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36855_36862,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36866,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36868], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var the_key = G__36858;
var the_map = G__36859;
while(true){
return tupelo.core.fetch_in.call(null,the_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_key], null));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"grab","grab",1608774178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (grab :the-key the-map),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),output_schema36854_36861,cljs.core.deref.call(null,output_checker36857_36864),o__24533__auto__);
} else {
var temp__5720__auto___36869 = cljs.core.deref.call(null,output_checker36857_36864).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36869)){
var error__24532__auto___36870 = temp__5720__auto___36869;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"grab","grab",1608774178,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A fail-fast version of keyword/map lookup.  When invoked as (grab :the-key the-map),\n   returns the value associated with :the-key as for (clojure.core/get the-map :the-key).\n   Throws an Exception if :the-key is not present in the-map."], null)),cljs.core.pr_str.call(null,error__24532__auto___36870)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36854_36861,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36870], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.grab),schema.core.__GT_FnSchema.call(null,output_schema36854_36861,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36855_36862], null)));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tupelo.core.SpliceItem = (function (data,__meta,__extmap,__hash){
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tupelo.core.SpliceItem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(tupelo.core.SpliceItem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k36872,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__36876 = k36872;
var G__36876__$1 = (((G__36876 instanceof cljs.core.Keyword))?G__36876.fqn:null);
switch (G__36876__$1) {
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36872,else__4475__auto__);

}
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__36877){
var vec__36878 = p__36877;
var k__4496__auto__ = cljs.core.nth.call(null,vec__36878,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__36878,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#tupelo.core.SpliceItem{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36871){
var self__ = this;
var G__36871__$1 = this;
return (new cljs.core.RecordIter((0),G__36871__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(tupelo.core.SpliceItem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new tupelo.core.SpliceItem(self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1211729609 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36873,other36874){
var self__ = this;
var this36873__$1 = this;
return (((!((other36874 == null)))) && ((((this36873__$1.constructor === other36874.constructor)) && (((cljs.core._EQ_.call(null,this36873__$1.data,other36874.data)) && (cljs.core._EQ_.call(null,this36873__$1.__extmap,other36874.__extmap)))))));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new tupelo.core.SpliceItem(self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k36872){
var self__ = this;
var this__4479__auto____$1 = this;
var G__36881 = k36872;
var G__36881__$1 = (((G__36881 instanceof cljs.core.Keyword))?G__36881.fqn:null);
switch (G__36881__$1) {
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k36872);

}
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__36871){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__36882 = cljs.core.keyword_identical_QMARK_;
var expr__36883 = k__4481__auto__;
if(cljs.core.truth_(pred__36882.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__36883))){
return (new tupelo.core.SpliceItem(G__36871,self__.__meta,self__.__extmap,null));
} else {
return (new tupelo.core.SpliceItem(self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__36871),null));
}
}));

(tupelo.core.SpliceItem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__36871){
var self__ = this;
var this__4471__auto____$1 = this;
return (new tupelo.core.SpliceItem(self__.data,G__36871,self__.__extmap,self__.__hash));
}));

(tupelo.core.SpliceItem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(tupelo.core.SpliceItem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(tupelo.core.SpliceItem.cljs$lang$type = true);

(tupelo.core.SpliceItem.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"tupelo.core/SpliceItem",null,(1),null));
}));

(tupelo.core.SpliceItem.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"tupelo.core/SpliceItem");
}));

/**
 * Positional factory function for tupelo.core/SpliceItem.
 */
tupelo.core.__GT_SpliceItem = (function tupelo$core$__GT_SpliceItem(data){
return (new tupelo.core.SpliceItem(data,null,null,null));
});

/**
 * Factory function for tupelo.core/SpliceItem, taking a map of keywords to field values.
 */
tupelo.core.map__GT_SpliceItem = (function tupelo$core$map__GT_SpliceItem(G__36875){
var extmap__4512__auto__ = (function (){var G__36885 = cljs.core.dissoc.call(null,G__36875,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__36875)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36885);
} else {
return G__36885;
}
})();
return (new tupelo.core.SpliceItem(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__36875),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});

var ufv___36893 = schema.utils.use_fn_validation;
var output_schema36888_36894 = tupelo.core.SpliceItem;
var input_schema36889_36895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker36890_36896 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36889_36895);
}),null));
var output_checker36891_36897 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36888_36894);
}),null));
var ret__26117__auto___36898 = /**
 * Inputs: [data :- [s/Any]]
 *   Returns: SpliceItem
 * 
 *   Splice operator.
 * 
 *   Works with the `->vector` function to splice vectors/lists and insert
 *   their elements as with the unquote-spicing operator (~@).  Modeled
 *   on the Javascript React splice operatoe `<>`. Examples:
 * 
 *      (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]
 *      (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9] 
 */
tupelo.core._LT__GT_ = (function tupelo$core$_LT__GT_(G__36892){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36893);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36892], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"<>","<>",-1374249383,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splice operator.\n\n  Works with the `->vector` function to splice vectors/lists and insert\n  their elements as with the unquote-spicing operator (~@).  Modeled\n  on the Javascript React splice operatoe `<>`. Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9] "], null)),input_schema36889_36895,cljs.core.deref.call(null,input_checker36890_36896),args__24531__auto___36899);
} else {
var temp__5720__auto___36900 = cljs.core.deref.call(null,input_checker36890_36896).call(null,args__24531__auto___36899);
if(cljs.core.truth_(temp__5720__auto___36900)){
var error__24532__auto___36901 = temp__5720__auto___36900;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"<>","<>",-1374249383,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splice operator.\n\n  Works with the `->vector` function to splice vectors/lists and insert\n  their elements as with the unquote-spicing operator (~@).  Modeled\n  on the Javascript React splice operatoe `<>`. Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9] "], null)),cljs.core.pr_str.call(null,error__24532__auto___36901)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36889_36895,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36899,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36901], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var data = G__36892;
while(true){
if(cljs.core.sequential_QMARK_.call(null,data)){
} else {
throw (new Error("Assert failed: (sequential? data)"));
}

return tupelo.core.__GT_SpliceItem.call(null,data);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"<>","<>",-1374249383,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splice operator.\n\n  Works with the `->vector` function to splice vectors/lists and insert\n  their elements as with the unquote-spicing operator (~@).  Modeled\n  on the Javascript React splice operatoe `<>`. Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9] "], null)),output_schema36888_36894,cljs.core.deref.call(null,output_checker36891_36897),o__24533__auto__);
} else {
var temp__5720__auto___36902 = cljs.core.deref.call(null,output_checker36891_36897).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36902)){
var error__24532__auto___36903 = temp__5720__auto___36902;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"<>","<>",-1374249383,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"SpliceItem","SpliceItem",-204153249,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Splice operator.\n\n  Works with the `->vector` function to splice vectors/lists and insert\n  their elements as with the unquote-spicing operator (~@).  Modeled\n  on the Javascript React splice operatoe `<>`. Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9] "], null)),cljs.core.pr_str.call(null,error__24532__auto___36903)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36888_36894,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36903], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core._LT__GT_),schema.core.__GT_FnSchema.call(null,output_schema36888_36894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36889_36895], null)));

var ufv___36910 = schema.utils.use_fn_validation;
var output_schema36904_36911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema36905_36912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker36906_36913 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36905_36912);
}),null));
var output_checker36907_36914 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36904_36911);
}),null));
var ret__26117__auto___36915 = (function (){
/**
 * Inputs: [& args :- [s/Any]]
 *   Returns: [s/Any]
 * 
 *   Wraps all args in a vector, as with `clojure.core/vector`. Will (recursively) recognize
 *   any embedded calls to the splice operator like `(<> [4 5 6)` (a la React)
 *   and insert their elements as with the unquote-spicing operator (~@). Examples:
 * 
 *      (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]
 *      (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9]
 *      
 */
tupelo.core.__GT_vector = (function tupelo$core$__GT_vector(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36916 = arguments.length;
var i__4830__auto___36917 = (0);
while(true){
if((i__4830__auto___36917 < len__4829__auto___36916)){
args__4835__auto__.push((arguments[i__4830__auto___36917]));

var G__36918 = (i__4830__auto___36917 + (1));
i__4830__auto___36917 = G__36918;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.__GT_vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.__GT_vector.cljs$core$IFn$_invoke$arity$variadic = (function (rest36908){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36910);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36919 = cljs.core.list_STAR_.call(null,rest36908);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"->vector","->vector",-1800052761,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps all args in a vector, as with `clojure.core/vector`. Will (recursively) recognize\n  any embedded calls to the splice operator like `(<> [4 5 6)` (a la React)\n  and insert their elements as with the unquote-spicing operator (~@). Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        "], null)),input_schema36905_36912,cljs.core.deref.call(null,input_checker36906_36913),args__24531__auto___36919);
} else {
var temp__5720__auto___36920 = cljs.core.deref.call(null,input_checker36906_36913).call(null,args__24531__auto___36919);
if(cljs.core.truth_(temp__5720__auto___36920)){
var error__24532__auto___36921 = temp__5720__auto___36920;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->vector","->vector",-1800052761,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps all args in a vector, as with `clojure.core/vector`. Will (recursively) recognize\n  any embedded calls to the splice operator like `(<> [4 5 6)` (a la React)\n  and insert their elements as with the unquote-spicing operator (~@). Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        "], null)),cljs.core.pr_str.call(null,error__24532__auto___36921)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36905_36912,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36919,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36921], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var args = rest36908;
while(true){
var result = cljs.core.reduce.call(null,((function (validate__24530__auto__,ufv___36910,output_schema36904_36911,input_schema36905_36912,input_checker36906_36913,output_checker36907_36914){
return (function (accum,item){
var it_use = ((cljs.core.sequential_QMARK_.call(null,item))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,tupelo.core.__GT_vector,item)], null):(((item instanceof tupelo.core.SpliceItem))?cljs.core.apply.call(null,tupelo.core.__GT_vector,tupelo.core.fetch.call(null,item,new cljs.core.Keyword(null,"data","data",-232669377))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)
));
var accum_out = tupelo.core.glue.call(null,accum,it_use);
return accum_out;
});})(validate__24530__auto__,ufv___36910,output_schema36904_36911,input_schema36905_36912,input_checker36906_36913,output_checker36907_36914))
,cljs.core.PersistentVector.EMPTY,args);
return result;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"->vector","->vector",-1800052761,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps all args in a vector, as with `clojure.core/vector`. Will (recursively) recognize\n  any embedded calls to the splice operator like `(<> [4 5 6)` (a la React)\n  and insert their elements as with the unquote-spicing operator (~@). Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        "], null)),output_schema36904_36911,cljs.core.deref.call(null,output_checker36907_36914),o__24533__auto__);
} else {
var temp__5720__auto___36922 = cljs.core.deref.call(null,output_checker36907_36914).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36922)){
var error__24532__auto___36923 = temp__5720__auto___36922;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"->vector","->vector",-1800052761,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps all args in a vector, as with `clojure.core/vector`. Will (recursively) recognize\n  any embedded calls to the splice operator like `(<> [4 5 6)` (a la React)\n  and insert their elements as with the unquote-spicing operator (~@). Examples:\n\n        (->vector 1 2 3      4 5 6   7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        (->vector 1 2 3 (<> [4 5 6]) 7 8 9)   =>  [1 2 3 4 5 6 7 8 9]\n        "], null)),cljs.core.pr_str.call(null,error__24532__auto___36923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36904_36911,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36923], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.__GT_vector.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.__GT_vector.cljs$lang$applyTo = (function (seq36909){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36909));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.__GT_vector),schema.core.__GT_FnSchema.call(null,output_schema36904_36911,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36905_36912], null)));

var ufv___36938 = schema.utils.use_fn_validation;
var output_schema36924_36939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema36925_36940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker36926_36941 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36925_36940);
}),null));
var output_checker36927_36942 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36924_36939);
}),null));
var ret__26117__auto___36943 = (function (){
/**
 * Inputs: [& values]
 *   Returns: [s/Any]
 * 
 *   Given any set of arguments including vectors, maps, sets, & scalars, performs a depth-first
 *   recursive walk returning scalar args (int, string, keyword, etc) in a single 1-D vector.
 */
tupelo.core.unnest = (function tupelo$core$unnest(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36944 = arguments.length;
var i__4830__auto___36945 = (0);
while(true){
if((i__4830__auto___36945 < len__4829__auto___36944)){
args__4835__auto__.push((arguments[i__4830__auto___36945]));

var G__36946 = (i__4830__auto___36945 + (1));
i__4830__auto___36945 = G__36946;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.unnest.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.unnest.cljs$core$IFn$_invoke$arity$variadic = (function (rest36928){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36938);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___36947 = cljs.core.list_STAR_.call(null,rest36928);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"unnest","unnest",1897494261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given any set of arguments including vectors, maps, sets, & scalars, performs a depth-first\n  recursive walk returning scalar args (int, string, keyword, etc) in a single 1-D vector."], null)),input_schema36925_36940,cljs.core.deref.call(null,input_checker36926_36941),args__24531__auto___36947);
} else {
var temp__5720__auto___36948 = cljs.core.deref.call(null,input_checker36926_36941).call(null,args__24531__auto___36947);
if(cljs.core.truth_(temp__5720__auto___36948)){
var error__24532__auto___36949 = temp__5720__auto___36948;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"unnest","unnest",1897494261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given any set of arguments including vectors, maps, sets, & scalars, performs a depth-first\n  recursive walk returning scalar args (int, string, keyword, etc) in a single 1-D vector."], null)),cljs.core.pr_str.call(null,error__24532__auto___36949)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36925_36940,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___36947,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36949], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var values = rest36928;
while(true){
var unnest_coll = ((function (validate__24530__auto__,ufv___36938,output_schema36924_36939,input_schema36925_36940,input_checker36926_36941,output_checker36927_36942){
return (function tupelo$core$fn_unnest_coll(coll){
return cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = (function tupelo$core$fn_unnest_coll_$_iter__36930(s__36931){
return (new cljs.core.LazySeq(null,(function (){
var s__36931__$1 = s__36931;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36931__$1);
if(temp__5720__auto__){
var s__36931__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36931__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36931__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36933 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36932 = (0);
while(true){
if((i__36932 < size__4621__auto__)){
var item = cljs.core._nth.call(null,c__4620__auto__,i__36932);
cljs.core.chunk_append.call(null,b__36933,((cljs.core.coll_QMARK_.call(null,item))?tupelo$core$fn_unnest_coll.call(null,item):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)));

var G__36950 = (i__36932 + (1));
i__36932 = G__36950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36933),tupelo$core$fn_unnest_coll_$_iter__36930.call(null,cljs.core.chunk_rest.call(null,s__36931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36933),null);
}
} else {
var item = cljs.core.first.call(null,s__36931__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,item))?tupelo$core$fn_unnest_coll.call(null,item):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),tupelo$core$fn_unnest_coll_$_iter__36930.call(null,cljs.core.rest.call(null,s__36931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
})());
});})(validate__24530__auto__,ufv___36938,output_schema36924_36939,input_schema36925_36940,input_checker36926_36941,output_checker36927_36942))
;
var result = cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = ((function (unnest_coll,validate__24530__auto__,ufv___36938,output_schema36924_36939,input_schema36925_36940,input_checker36926_36941,output_checker36927_36942){
return (function tupelo$core$iter__36934(s__36935){
return (new cljs.core.LazySeq(null,(function (){
var s__36935__$1 = s__36935;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36935__$1);
if(temp__5720__auto__){
var s__36935__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36935__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36935__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36937 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36936 = (0);
while(true){
if((i__36936 < size__4621__auto__)){
var item = cljs.core._nth.call(null,c__4620__auto__,i__36936);
cljs.core.chunk_append.call(null,b__36937,((cljs.core.coll_QMARK_.call(null,item))?unnest_coll.call(null,item):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)));

var G__36951 = (i__36936 + (1));
i__36936 = G__36951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36937),tupelo$core$iter__36934.call(null,cljs.core.chunk_rest.call(null,s__36935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36937),null);
}
} else {
var item = cljs.core.first.call(null,s__36935__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,item))?unnest_coll.call(null,item):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),tupelo$core$iter__36934.call(null,cljs.core.rest.call(null,s__36935__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(unnest_coll,validate__24530__auto__,ufv___36938,output_schema36924_36939,input_schema36925_36940,input_checker36926_36941,output_checker36927_36942))
;
return iter__4622__auto__.call(null,values);
})());
return result;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"unnest","unnest",1897494261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given any set of arguments including vectors, maps, sets, & scalars, performs a depth-first\n  recursive walk returning scalar args (int, string, keyword, etc) in a single 1-D vector."], null)),output_schema36924_36939,cljs.core.deref.call(null,output_checker36927_36942),o__24533__auto__);
} else {
var temp__5720__auto___36952 = cljs.core.deref.call(null,output_checker36927_36942).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___36952)){
var error__24532__auto___36953 = temp__5720__auto___36952;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"unnest","unnest",1897494261,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given any set of arguments including vectors, maps, sets, & scalars, performs a depth-first\n  recursive walk returning scalar args (int, string, keyword, etc) in a single 1-D vector."], null)),cljs.core.pr_str.call(null,error__24532__auto___36953)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36924_36939,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___36953], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.unnest.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.unnest.cljs$lang$applyTo = (function (seq36929){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36929));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.unnest),schema.core.__GT_FnSchema.call(null,output_schema36924_36939,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36925_36940], null)));

var ret__4878__auto___36959 = (function (){
/**
 * Evaluates body & returns its result.  In the event of an exception, default-val is returned
 * instead of the exception.
 */
tupelo.core.with_exception_default = (function tupelo$core$with_exception_default(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36960 = arguments.length;
var i__4830__auto___36961 = (0);
while(true){
if((i__4830__auto___36961 < len__4829__auto___36960)){
args__4835__auto__.push((arguments[i__4830__auto___36961]));

var G__36962 = (i__4830__auto___36961 + (1));
i__4830__auto___36961 = G__36962;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.with_exception_default.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.with_exception_default.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,default_val,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","try-catchall","tupelo.core/try-catchall",-821785220,null),null,(1),null)),forms,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__36954__auto__","e__36954__auto__",1239502303,null),null,(1),null)),(new cljs.core.List(null,default_val,null,(1),null))))),null,(1),null)))));
}));

(tupelo.core.with_exception_default.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.with_exception_default.cljs$lang$applyTo = (function (seq36955){
var G__36956 = cljs.core.first.call(null,seq36955);
var seq36955__$1 = cljs.core.next.call(null,seq36955);
var G__36957 = cljs.core.first.call(null,seq36955__$1);
var seq36955__$2 = cljs.core.next.call(null,seq36955__$1);
var G__36958 = cljs.core.first.call(null,seq36955__$2);
var seq36955__$3 = cljs.core.next.call(null,seq36955__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36956,G__36957,G__36958,seq36955__$3);
}));

return null;
})()
;
(tupelo.core.with_exception_default.cljs$lang$macro = true);

var ret__4878__auto___36968 = (function (){
/**
 * Evaluates `result` and returns it; also evaluates `forms` for their side-effects.
 */
tupelo.core.with_result = (function tupelo$core$with_result(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36969 = arguments.length;
var i__4830__auto___36970 = (0);
while(true){
if((i__4830__auto___36970 < len__4829__auto___36969)){
args__4835__auto__.push((arguments[i__4830__auto___36970]));

var G__36971 = (i__4830__auto___36970 + (1));
i__4830__auto___36970 = G__36971;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.with_result.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.with_result.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,result,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36963__auto__","result__36963__auto__",-895622657,null),null,(1),null)),(new cljs.core.List(null,result,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__36963__auto__","result__36963__auto__",-895622657,null),null,(1),null)))));
}));

(tupelo.core.with_result.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.with_result.cljs$lang$applyTo = (function (seq36964){
var G__36965 = cljs.core.first.call(null,seq36964);
var seq36964__$1 = cljs.core.next.call(null,seq36964);
var G__36966 = cljs.core.first.call(null,seq36964__$1);
var seq36964__$2 = cljs.core.next.call(null,seq36964__$1);
var G__36967 = cljs.core.first.call(null,seq36964__$2);
var seq36964__$3 = cljs.core.next.call(null,seq36964__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36965,G__36966,G__36967,seq36964__$3);
}));

return null;
})()
;
(tupelo.core.with_result.cljs$lang$macro = true);

/**
 * (validate tst-fn tst-val)
 *   Used to validate intermediate results. Returns tst-val if the result of
 *   (tst-fn tst-val) is truthy.  Otherwise, throws ex-info with ex-data
 *   {:sample-val sample-val :tst-result tst-result}.
 */
tupelo.core.validate = (function tupelo$core$validate(tst_fn,tst_val){
var tst_result = tst_fn.call(null,tst_val);
if(tupelo.core.truthy_QMARK_.call(null,tst_result)){
} else {
throw cljs.core.ex_info.call(null,"validate: ",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tst-val","tst-val",-2066120609),tst_val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tst-result","tst-result",-241193151),tst_result], null)));
}

return tst_val;
});
/**
 * Returns `sample-val` if `(is-valid? sample-val)` is truthy; else returns `default-val`
 */
tupelo.core.validate_or_default = (function tupelo$core$validate_or_default(is_valid_QMARK_,sample_val,default_val){
if(cljs.core.truth_(is_valid_QMARK_.call(null,sample_val))){
return sample_val;
} else {
return default_val;
}
});
/**
 * Returns `sample-val` if not nil; else returns `default-val`
 */
tupelo.core.with_nil_default = (function tupelo$core$with_nil_default(default_val,sample_val){
return tupelo.core.validate_or_default.call(null,tupelo.core.not_nil_QMARK_,sample_val,default_val);
});
var ret__4878__auto___36973 = /**
 * 
 *       (verify <some-expr>)
 * 
 *   Used to verify intermediate results. Returns value of `<some-expr>` if the result
 *   is truthy.  Otherwise, throws an Exception.
 */
tupelo.core.verify = (function tupelo$core$verify(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__36972__auto__","value__36972__auto__",518039847,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","truthy?","tupelo.core/truthy?",1417368836,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__36972__auto__","value__36972__auto__",518039847,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__36972__auto__","value__36972__auto__",518039847,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"verification failed  ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(tupelo.core.verify.cljs$lang$macro = true);

/**
 * Returns a random element from a collection
 */
tupelo.core.rand_elem = (function tupelo$core$rand_elem(coll){
var value__31328__auto___36974 = tupelo.core.not_nil_QMARK_.call(null,coll);
if(tupelo.core.truthy_QMARK_.call(null,value__31328__auto___36974)){
} else {
throw cljs.core.ex_info.call(null,"verification failed  ",cljs.core.list(new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)));
}

return cljs.core.rand_nth.call(null,cljs.core.vec.call(null,coll));
});
var ufv___36995 = schema.utils.use_fn_validation;
var output_schema36975_36996 = tupelo.schema.Map;
var input_schema36976_36997 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map-arg","map-arg",-362603564,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,schema.core.if$.call(null,cljs.core.set_QMARK_,tupelo.schema.Set,tupelo.schema.List),cljs.core.with_meta(new cljs.core.Symbol(null,"keep-keys","keep-keys",2064363602,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","if","s/if",1181719683,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null))], null))),schema.core.Any], null);
var input_checker36977_36998 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema36976_36997);
}),null));
var output_checker36978_36999 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema36975_36996);
}),null));
var ret__26117__auto___37000 = (function (){
/**
 * Inputs: [map-arg :- tsk/Map keep-keys :- (s/if set? tsk/Set tsk/List) & opts]
 *   Returns: tsk/Map
 * 
 *   Returns a new map containing entries with the specified keys. Throws for missing keys,
 *   unless `:missing-ok` is specified. Usage:
 * 
 *    (submap-by-keys {:a 1 :b 2} #{:a   }             )  =>  {:a 1}
 *    (submap-by-keys {:a 1 :b 2} #{:a :z} :missing-ok )  =>  {:a 1}
 *   
 */
tupelo.core.submap_by_keys = (function tupelo$core$submap_by_keys(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37001 = arguments.length;
var i__4830__auto___37002 = (0);
while(true){
if((i__4830__auto___37002 < len__4829__auto___37001)){
args__4835__auto__.push((arguments[i__4830__auto___37002]));

var G__37003 = (i__4830__auto___37002 + (1));
i__4830__auto___37002 = G__37003;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.submap_by_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.submap_by_keys.cljs$core$IFn$_invoke$arity$variadic = (function (G__36979,G__36980,rest36981){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___36995);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37004 = cljs.core.list_STAR_.call(null,G__36979,G__36980,rest36981);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-keys","submap-by-keys",658373931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified keys. Throws for missing keys,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-keys {:a 1 :b 2} #{:a   }             )  =>  {:a 1}\n      (submap-by-keys {:a 1 :b 2} #{:a :z} :missing-ok )  =>  {:a 1}\n  "], null)),input_schema36976_36997,cljs.core.deref.call(null,input_checker36977_36998),args__24531__auto___37004);
} else {
var temp__5720__auto___37005 = cljs.core.deref.call(null,input_checker36977_36998).call(null,args__24531__auto___37004);
if(cljs.core.truth_(temp__5720__auto___37005)){
var error__24532__auto___37006 = temp__5720__auto___37005;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-keys","submap-by-keys",658373931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified keys. Throws for missing keys,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-keys {:a 1 :b 2} #{:a   }             )  =>  {:a 1}\n      (submap-by-keys {:a 1 :b 2} #{:a :z} :missing-ok )  =>  {:a 1}\n  "], null)),cljs.core.pr_str.call(null,error__24532__auto___37006)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36976_36997,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37004,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37006], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_arg = G__36979;
var keep_keys = G__36980;
var opts = rest36981;
while(true){
var keep_keys__$1 = cljs.core.set.call(null,keep_keys);
if(cljs.core._EQ_.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing-ok","missing-ok",1094326610)], null))){
return cljs.core.apply.call(null,tupelo.core.glue,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (keep_keys__$1,validate__24530__auto__,ufv___36995,output_schema36975_36996,input_schema36976_36997,input_checker36977_36998,output_checker36978_36999){
return (function tupelo$core$iter__36985(s__36986){
return (new cljs.core.LazySeq(null,(function (){
var s__36986__$1 = s__36986;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36986__$1);
if(temp__5720__auto__){
var s__36986__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36986__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36986__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36988 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36987 = (0);
while(true){
if((i__36987 < size__4621__auto__)){
var key = cljs.core._nth.call(null,c__4620__auto__,i__36987);
cljs.core.chunk_append.call(null,b__36988,(function (){try{return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,tupelo.core.grab.call(null,key,map_arg)]);
}catch (e36989){if((e36989 instanceof Object)){
var e__31313__auto__ = e36989;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e36989;

}
}})());

var G__37007 = (i__36987 + (1));
i__36987 = G__37007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36988),tupelo$core$iter__36985.call(null,cljs.core.chunk_rest.call(null,s__36986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36988),null);
}
} else {
var key = cljs.core.first.call(null,s__36986__$2);
return cljs.core.cons.call(null,(function (){try{return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,tupelo.core.grab.call(null,key,map_arg)]);
}catch (e36990){if((e36990 instanceof Object)){
var e__31313__auto__ = e36990;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e36990;

}
}})(),tupelo$core$iter__36985.call(null,cljs.core.rest.call(null,s__36986__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(keep_keys__$1,validate__24530__auto__,ufv___36995,output_schema36975_36996,input_schema36976_36997,input_checker36977_36998,output_checker36978_36999))
;
return iter__4622__auto__.call(null,keep_keys__$1);
})());
} else {
return cljs.core.apply.call(null,tupelo.core.glue,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (keep_keys__$1,validate__24530__auto__,ufv___36995,output_schema36975_36996,input_schema36976_36997,input_checker36977_36998,output_checker36978_36999){
return (function tupelo$core$iter__36991(s__36992){
return (new cljs.core.LazySeq(null,(function (){
var s__36992__$1 = s__36992;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36992__$1);
if(temp__5720__auto__){
var s__36992__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36992__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__36992__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__36994 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__36993 = (0);
while(true){
if((i__36993 < size__4621__auto__)){
var key = cljs.core._nth.call(null,c__4620__auto__,i__36993);
cljs.core.chunk_append.call(null,b__36994,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,tupelo.core.grab.call(null,key,map_arg)]));

var G__37008 = (i__36993 + (1));
i__36993 = G__37008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36994),tupelo$core$iter__36991.call(null,cljs.core.chunk_rest.call(null,s__36992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36994),null);
}
} else {
var key = cljs.core.first.call(null,s__36992__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,tupelo.core.grab.call(null,key,map_arg)]),tupelo$core$iter__36991.call(null,cljs.core.rest.call(null,s__36992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(keep_keys__$1,validate__24530__auto__,ufv___36995,output_schema36975_36996,input_schema36976_36997,input_checker36977_36998,output_checker36978_36999))
;
return iter__4622__auto__.call(null,keep_keys__$1);
})());
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-keys","submap-by-keys",658373931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified keys. Throws for missing keys,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-keys {:a 1 :b 2} #{:a   }             )  =>  {:a 1}\n      (submap-by-keys {:a 1 :b 2} #{:a :z} :missing-ok )  =>  {:a 1}\n  "], null)),output_schema36975_36996,cljs.core.deref.call(null,output_checker36978_36999),o__24533__auto__);
} else {
var temp__5720__auto___37009 = cljs.core.deref.call(null,output_checker36978_36999).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37009)){
var error__24532__auto___37010 = temp__5720__auto___37009;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-keys","submap-by-keys",658373931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified keys. Throws for missing keys,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-keys {:a 1 :b 2} #{:a   }             )  =>  {:a 1}\n      (submap-by-keys {:a 1 :b 2} #{:a :z} :missing-ok )  =>  {:a 1}\n  "], null)),cljs.core.pr_str.call(null,error__24532__auto___37010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36975_36996,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37010], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.submap_by_keys.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.submap_by_keys.cljs$lang$applyTo = (function (seq36982){
var G__36983 = cljs.core.first.call(null,seq36982);
var seq36982__$1 = cljs.core.next.call(null,seq36982);
var G__36984 = cljs.core.first.call(null,seq36982__$1);
var seq36982__$2 = cljs.core.next.call(null,seq36982__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36983,G__36984,seq36982__$2);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.submap_by_keys),schema.core.__GT_FnSchema.call(null,output_schema36975_36996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36976_36997], null)));

var ufv___37025 = schema.utils.use_fn_validation;
var output_schema37011_37026 = tupelo.schema.Map;
var input_schema37012_37027 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map-arg","map-arg",-362603564,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,schema.core.if$.call(null,cljs.core.set_QMARK_,tupelo.schema.Set,tupelo.schema.List),cljs.core.with_meta(new cljs.core.Symbol(null,"keep-vals","keep-vals",-441428878,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","if","s/if",1181719683,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol("tsk","Set","tsk/Set",86818725,null),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null))], null))),schema.core.Any], null);
var input_checker37013_37028 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37012_37027);
}),null));
var output_checker37014_37029 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37011_37026);
}),null));
var ret__26117__auto___37030 = (function (){
/**
 * Inputs: [map-arg :- tsk/Map keep-vals :- (s/if set? tsk/Set tsk/List) & opts]
 *   Returns: tsk/Map
 * 
 *   Returns a new map containing entries with the specified vals. Throws for missing vals,
 *   unless `:missing-ok` is specified. Usage:
 * 
 *    (submap-by-vals {:a 1 :b 2 :A 1} #{1  }             )  =>  {:a 1 :A 1}
 *    (submap-by-vals {:a 1 :b 2 :A 1} #{1 9} :missing-ok )  =>  {:a 1 :A 1} 
 */
tupelo.core.submap_by_vals = (function tupelo$core$submap_by_vals(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37031 = arguments.length;
var i__4830__auto___37032 = (0);
while(true){
if((i__4830__auto___37032 < len__4829__auto___37031)){
args__4835__auto__.push((arguments[i__4830__auto___37032]));

var G__37033 = (i__4830__auto___37032 + (1));
i__4830__auto___37032 = G__37033;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.submap_by_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.submap_by_vals.cljs$core$IFn$_invoke$arity$variadic = (function (G__37015,G__37016,rest37017){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37025);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37034 = cljs.core.list_STAR_.call(null,G__37015,G__37016,rest37017);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-vals","submap-by-vals",1127872399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified vals. Throws for missing vals,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1  }             )  =>  {:a 1 :A 1}\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1 9} :missing-ok )  =>  {:a 1 :A 1} "], null)),input_schema37012_37027,cljs.core.deref.call(null,input_checker37013_37028),args__24531__auto___37034);
} else {
var temp__5720__auto___37035 = cljs.core.deref.call(null,input_checker37013_37028).call(null,args__24531__auto___37034);
if(cljs.core.truth_(temp__5720__auto___37035)){
var error__24532__auto___37036 = temp__5720__auto___37035;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-vals","submap-by-vals",1127872399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified vals. Throws for missing vals,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1  }             )  =>  {:a 1 :A 1}\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1 9} :missing-ok )  =>  {:a 1 :A 1} "], null)),cljs.core.pr_str.call(null,error__24532__auto___37036)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37012_37027,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37034,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37036], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_arg = G__37015;
var keep_vals = G__37016;
var opts = rest37017;
while(true){
var keep_vals__$1 = cljs.core.set.call(null,keep_vals);
var found_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (keep_vals__$1,validate__24530__auto__,ufv___37025,output_schema37011_37026,input_schema37012_37027,input_checker37013_37028,output_checker37014_37029){
return (function tupelo$core$iter__37021(s__37022){
return (new cljs.core.LazySeq(null,(function (){
var s__37022__$1 = s__37022;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37022__$1);
if(temp__5720__auto__){
var s__37022__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37022__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37022__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37024 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37023 = (0);
while(true){
if((i__37023 < size__4621__auto__)){
var entry = cljs.core._nth.call(null,c__4620__auto__,i__37023);
var entry_val = cljs.core.val.call(null,entry);
if(cljs.core.contains_QMARK_.call(null,keep_vals__$1,entry_val)){
cljs.core.chunk_append.call(null,b__37024,entry);

var G__37037 = (i__37023 + (1));
i__37023 = G__37037;
continue;
} else {
var G__37038 = (i__37023 + (1));
i__37023 = G__37038;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37024),tupelo$core$iter__37021.call(null,cljs.core.chunk_rest.call(null,s__37022__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37024),null);
}
} else {
var entry = cljs.core.first.call(null,s__37022__$2);
var entry_val = cljs.core.val.call(null,entry);
if(cljs.core.contains_QMARK_.call(null,keep_vals__$1,entry_val)){
return cljs.core.cons.call(null,entry,tupelo$core$iter__37021.call(null,cljs.core.rest.call(null,s__37022__$2)));
} else {
var G__37039 = cljs.core.rest.call(null,s__37022__$2);
s__37022__$1 = G__37039;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(keep_vals__$1,validate__24530__auto__,ufv___37025,output_schema37011_37026,input_schema37012_37027,input_checker37013_37028,output_checker37014_37029))
;
return iter__4622__auto__.call(null,map_arg);
})());
var found_vals = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.vals.call(null,found_map));
var missing_vals = clojure.set.difference.call(null,keep_vals__$1,found_vals);
if(((cljs.core.empty_QMARK_.call(null,missing_vals)) || (cljs.core._EQ_.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing-ok","missing-ok",1094326610)], null))))){
return found_map;
} else {
throw cljs.core.ex_info.call(null,"submap-by-vals: ",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"missing-vals","missing-vals",1050395411),missing_vals], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-arg","map-arg",-2003135091),map_arg], null)));
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-vals","submap-by-vals",1127872399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified vals. Throws for missing vals,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1  }             )  =>  {:a 1 :A 1}\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1 9} :missing-ok )  =>  {:a 1 :A 1} "], null)),output_schema37011_37026,cljs.core.deref.call(null,output_checker37014_37029),o__24533__auto__);
} else {
var temp__5720__auto___37040 = cljs.core.deref.call(null,output_checker37014_37029).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37040)){
var error__24532__auto___37041 = temp__5720__auto___37040;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"submap-by-vals","submap-by-vals",1127872399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a new map containing entries with the specified vals. Throws for missing vals,\n  unless `:missing-ok` is specified. Usage:\n\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1  }             )  =>  {:a 1 :A 1}\n      (submap-by-vals {:a 1 :b 2 :A 1} #{1 9} :missing-ok )  =>  {:a 1 :A 1} "], null)),cljs.core.pr_str.call(null,error__24532__auto___37041)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37011_37026,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37041], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.submap_by_vals.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.submap_by_vals.cljs$lang$applyTo = (function (seq37018){
var G__37019 = cljs.core.first.call(null,seq37018);
var seq37018__$1 = cljs.core.next.call(null,seq37018);
var G__37020 = cljs.core.first.call(null,seq37018__$1);
var seq37018__$2 = cljs.core.next.call(null,seq37018__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37019,G__37020,seq37018__$2);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.submap_by_vals),schema.core.__GT_FnSchema.call(null,output_schema37011_37026,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37012_37027], null)));

var ufv___37048 = schema.utils.use_fn_validation;
var output_schema37042_37049 = schema.core.Bool;
var input_schema37043_37050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]),cljs.core.with_meta(new cljs.core.Symbol(null,"inner-map","inner-map",-825666677,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]),cljs.core.with_meta(new cljs.core.Symbol(null,"outer-map","outer-map",-1466828261,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker37044_37051 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37043_37050);
}),null));
var output_checker37045_37052 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37042_37049);
}),null));
var ret__26117__auto___37053 = /**
 * Inputs: [inner-map :- #:s{Any s/Any} outer-map :- #:s{Any s/Any}]
 *   Returns: s/Bool
 * 
 *   Returns true if the map entries (key-value pairs) of one map are a subset of the entries of
 * another map.  Similar to clojure.set/subset?
 */
tupelo.core.submap_QMARK_ = (function tupelo$core$submap_QMARK_(G__37046,G__37047){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37048);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37046,G__37047], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"submap?","submap?",-73140668,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the map entries (key-value pairs) of one map are a subset of the entries of\n   another map.  Similar to clojure.set/subset?"], null)),input_schema37043_37050,cljs.core.deref.call(null,input_checker37044_37051),args__24531__auto___37054);
} else {
var temp__5720__auto___37055 = cljs.core.deref.call(null,input_checker37044_37051).call(null,args__24531__auto___37054);
if(cljs.core.truth_(temp__5720__auto___37055)){
var error__24532__auto___37056 = temp__5720__auto___37055;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"submap?","submap?",-73140668,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the map entries (key-value pairs) of one map are a subset of the entries of\n   another map.  Similar to clojure.set/subset?"], null)),cljs.core.pr_str.call(null,error__24532__auto___37056)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37043_37050,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37054,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37056], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var inner_map = G__37046;
var outer_map = G__37047;
while(true){
var inner_set = cljs.core.set.call(null,inner_map);
var outer_set = cljs.core.set.call(null,outer_map);
return clojure.set.subset_QMARK_.call(null,inner_set,outer_set);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"submap?","submap?",-73140668,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the map entries (key-value pairs) of one map are a subset of the entries of\n   another map.  Similar to clojure.set/subset?"], null)),output_schema37042_37049,cljs.core.deref.call(null,output_checker37045_37052),o__24533__auto__);
} else {
var temp__5720__auto___37057 = cljs.core.deref.call(null,output_checker37045_37052).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37057)){
var error__24532__auto___37058 = temp__5720__auto___37057;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"submap?","submap?",-73140668,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the map entries (key-value pairs) of one map are a subset of the entries of\n   another map.  Similar to clojure.set/subset?"], null)),cljs.core.pr_str.call(null,error__24532__auto___37058)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37042_37049,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37058], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.submap_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema37042_37049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37043_37050], null)));

var ufv___37064 = schema.utils.use_fn_validation;
var output_schema37059_37065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema37060_37066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null)))], null);
var input_checker37061_37067 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37060_37066);
}),null));
var output_checker37062_37068 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37059_37065);
}),null));
var ret__26117__auto___37069 = /**
 * Inputs: [m :- tsk/Map]
 *   Returns: [s/Any]
 * 
 *   For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via
 * `(apply hash-map (keyvals m))`. `(keyvals {:a 1 :b 2} => [:a 1 :b 2] ` 
 */
tupelo.core.keyvals = (function tupelo$core$keyvals(G__37063){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37064);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37063], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   `(apply hash-map (keyvals m))`. `(keyvals {:a 1 :b 2} => [:a 1 :b 2] ` "], null)),input_schema37060_37066,cljs.core.deref.call(null,input_checker37061_37067),args__24531__auto___37070);
} else {
var temp__5720__auto___37071 = cljs.core.deref.call(null,input_checker37061_37067).call(null,args__24531__auto___37070);
if(cljs.core.truth_(temp__5720__auto___37071)){
var error__24532__auto___37072 = temp__5720__auto___37071;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   `(apply hash-map (keyvals m))`. `(keyvals {:a 1 :b 2} => [:a 1 :b 2] ` "], null)),cljs.core.pr_str.call(null,error__24532__auto___37072)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37060_37066,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37070,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37072], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var m = G__37063;
while(true){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.seq.call(null,m));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   `(apply hash-map (keyvals m))`. `(keyvals {:a 1 :b 2} => [:a 1 :b 2] ` "], null)),output_schema37059_37065,cljs.core.deref.call(null,output_checker37062_37068),o__24533__auto__);
} else {
var temp__5720__auto___37073 = cljs.core.deref.call(null,output_checker37062_37068).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37073)){
var error__24532__auto___37074 = temp__5720__auto___37073;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   `(apply hash-map (keyvals m))`. `(keyvals {:a 1 :b 2} => [:a 1 :b 2] ` "], null)),cljs.core.pr_str.call(null,error__24532__auto___37074)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37059_37065,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37074], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.keyvals),schema.core.__GT_FnSchema.call(null,output_schema37059_37065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37060_37066], null)));

var ufv___37084 = schema.utils.use_fn_validation;
var output_schema37075_37085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema37076_37086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null)))], null);
var input_checker37077_37087 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37076_37086);
}),null));
var output_checker37078_37088 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37075_37085);
}),null));
var ret__26117__auto___37089 = /**
 * Inputs: [ctx :- tsk/KeyMap]
 *   Returns: [s/Any]
 */
tupelo.core.keyvals_seq_impl = (function tupelo$core$keyvals_seq_impl(G__37079){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37084);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37079], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq-impl","keyvals-seq-impl",2140424796,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),input_schema37076_37086,cljs.core.deref.call(null,input_checker37077_37087),args__24531__auto___37090);
} else {
var temp__5720__auto___37091 = cljs.core.deref.call(null,input_checker37077_37087).call(null,args__24531__auto___37090);
if(cljs.core.truth_(temp__5720__auto___37091)){
var error__24532__auto___37092 = temp__5720__auto___37091;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq-impl","keyvals-seq-impl",2140424796,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37092)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37076_37086,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37090,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37092], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var ctx = G__37079;
while(true){
var missing_ok = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"missing-ok","missing-ok",1094326610),ctx);
var the_map = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"the-map","the-map",-1090759077),ctx);
var the_keys = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"the-keys","the-keys",-1641032056),ctx);
return cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = ((function (missing_ok,the_map,the_keys,validate__24530__auto__,ufv___37084,output_schema37075_37085,input_schema37076_37086,input_checker37077_37087,output_checker37078_37088){
return (function tupelo$core$keyvals_seq_impl_$_iter__37080(s__37081){
return (new cljs.core.LazySeq(null,(function (){
var s__37081__$1 = s__37081;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37081__$1);
if(temp__5720__auto__){
var s__37081__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37081__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37081__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37083 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37082 = (0);
while(true){
if((i__37082 < size__4621__auto__)){
var key = cljs.core._nth.call(null,c__4620__auto__,i__37082);
cljs.core.chunk_append.call(null,b__37083,(function (){var val = cljs.core.get.call(null,the_map,key,new cljs.core.Keyword("tupelo.core","missing","tupelo.core/missing",494270917));
if((!(cljs.core._EQ_.call(null,val,new cljs.core.Keyword("tupelo.core","missing","tupelo.core/missing",494270917))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
} else {
if(cljs.core.truth_(missing_ok)){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.ex_info.call(null,"Key not present in map:",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-map","the-map",-1090759077),the_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));
}
}
})());

var G__37093 = (i__37082 + (1));
i__37082 = G__37093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37083),tupelo$core$keyvals_seq_impl_$_iter__37080.call(null,cljs.core.chunk_rest.call(null,s__37081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37083),null);
}
} else {
var key = cljs.core.first.call(null,s__37081__$2);
return cljs.core.cons.call(null,(function (){var val = cljs.core.get.call(null,the_map,key,new cljs.core.Keyword("tupelo.core","missing","tupelo.core/missing",494270917));
if((!(cljs.core._EQ_.call(null,val,new cljs.core.Keyword("tupelo.core","missing","tupelo.core/missing",494270917))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
} else {
if(cljs.core.truth_(missing_ok)){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.ex_info.call(null,"Key not present in map:",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-map","the-map",-1090759077),the_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));
}
}
})(),tupelo$core$keyvals_seq_impl_$_iter__37080.call(null,cljs.core.rest.call(null,s__37081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(missing_ok,the_map,the_keys,validate__24530__auto__,ufv___37084,output_schema37075_37085,input_schema37076_37086,input_checker37077_37087,output_checker37078_37088))
;
return iter__4622__auto__.call(null,the_keys);
})());
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq-impl","keyvals-seq-impl",2140424796,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),output_schema37075_37085,cljs.core.deref.call(null,output_checker37078_37088),o__24533__auto__);
} else {
var temp__5720__auto___37094 = cljs.core.deref.call(null,output_checker37078_37088).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37094)){
var error__24532__auto___37095 = temp__5720__auto___37094;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq-impl","keyvals-seq-impl",2140424796,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37095)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37075_37085,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37095], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.keyvals_seq_impl),schema.core.__GT_FnSchema.call(null,output_schema37075_37085,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37076_37086], null)));

var ufv___37108 = schema.utils.use_fn_validation;
var output_schema37096_37109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema37097_37110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null)))], null);
var input_schema37101_37111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"the-map","the-map",549772450,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"the-keys","the-keys",-500529,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker37098_37112 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37097_37110);
}),null));
var output_checker37099_37113 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37096_37109);
}),null));
var input_checker37102_37114 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37101_37111);
}),null));
var output_checker37103_37115 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37096_37109);
}),null));
var ret__26117__auto___37116 = (function (){
/**
 * Inputs: ([ctx :- tsk/KeyMap] [the-map :- tsk/KeyMap the-keys :- [s/Any]])
 *   Returns: [s/Any]
 * 
 *   For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via
 * (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]
 * 
 *       Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}
 *               (keyvals-seq the-map the-keys) 
 */
tupelo.core.keyvals_seq = (function tupelo$core$keyvals_seq(var_args){
var G__37107 = arguments.length;
switch (G__37107) {
case 1:
return tupelo.core.keyvals_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tupelo.core.keyvals_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tupelo.core.keyvals_seq.cljs$core$IFn$_invoke$arity$1 = (function (G__37100){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37108);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37100], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),input_schema37097_37110,cljs.core.deref.call(null,input_checker37098_37112),args__24531__auto___37118);
} else {
var temp__5720__auto___37119 = cljs.core.deref.call(null,input_checker37098_37112).call(null,args__24531__auto___37118);
if(cljs.core.truth_(temp__5720__auto___37119)){
var error__24532__auto___37120 = temp__5720__auto___37119;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),cljs.core.pr_str.call(null,error__24532__auto___37120)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37097_37110,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37118,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37120], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var ctx = G__37100;
while(true){
var defaults = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"missing-ok","missing-ok",1094326610),false], null);
return tupelo.core.keyvals_seq_impl.call(null,cljs.core.into.call(null,defaults,ctx));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),output_schema37096_37109,cljs.core.deref.call(null,output_checker37099_37113),o__24533__auto__);
} else {
var temp__5720__auto___37121 = cljs.core.deref.call(null,output_checker37099_37113).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37121)){
var error__24532__auto___37122 = temp__5720__auto___37121;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),cljs.core.pr_str.call(null,error__24532__auto___37122)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37096_37109,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37122], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.keyvals_seq.cljs$core$IFn$_invoke$arity$2 = (function (G__37104,G__37105){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37108);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37104,G__37105], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),input_schema37101_37111,cljs.core.deref.call(null,input_checker37102_37114),args__24531__auto___37123);
} else {
var temp__5720__auto___37124 = cljs.core.deref.call(null,input_checker37102_37114).call(null,args__24531__auto___37123);
if(cljs.core.truth_(temp__5720__auto___37124)){
var error__24532__auto___37125 = temp__5720__auto___37124;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),cljs.core.pr_str.call(null,error__24532__auto___37125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37101_37111,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37123,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37125], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var the_map = G__37104;
var the_keys = G__37105;
while(true){
return tupelo.core.keyvals_seq.call(null,tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-map","the-map",-1090759077),the_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-keys","the-keys",-1641032056),the_keys], null)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),output_schema37096_37109,cljs.core.deref.call(null,output_checker37103_37115),o__24533__auto__);
} else {
var temp__5720__auto___37126 = cljs.core.deref.call(null,output_checker37103_37115).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37126)){
var error__24532__auto___37127 = temp__5720__auto___37126;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"keyvals-seq","keyvals-seq",-1842516973,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"For any map m, returns the (alternating) keys & values of m as a vector, suitable for reconstructing m via\n   (apply hash-map (keyvals m)). (keyvals {:a 1 :b 2} => [:a 1 :b 2]\n\n         Usage:  (keyvals-seq ctx) ctx-default: {:missing-ok false}\n                 (keyvals-seq the-map the-keys) "], null)),cljs.core.pr_str.call(null,error__24532__auto___37127)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37096_37109,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37127], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.keyvals_seq.cljs$lang$maxFixedArity = 2);

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.keyvals_seq),schema.core.make_fn_schema.call(null,output_schema37096_37109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37097_37110,input_schema37101_37111], null)));

var ufv___37134 = schema.utils.use_fn_validation;
var output_schema37128_37135 = tupelo.schema.List;
var input_schema37129_37136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.one.call(null,schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)))], null);
var input_checker37130_37137 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37129_37136);
}),null));
var output_checker37131_37138 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37128_37135);
}),null));
var ret__26117__auto___37139 = /**
 * Inputs: [coll :- tsk/List index :- s/Int]
 *   Returns: tsk/List
 * 
 *   Removes an element from a collection at the specified index.
 */
tupelo.core.drop_at = (function tupelo$core$drop_at(G__37132,G__37133){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37134);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37132,G__37133], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"drop-at","drop-at",878582376,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Removes an element from a collection at the specified index."], null)),input_schema37129_37136,cljs.core.deref.call(null,input_checker37130_37137),args__24531__auto___37140);
} else {
var temp__5720__auto___37141 = cljs.core.deref.call(null,input_checker37130_37137).call(null,args__24531__auto___37140);
if(cljs.core.truth_(temp__5720__auto___37141)){
var error__24532__auto___37142 = temp__5720__auto___37141;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"drop-at","drop-at",878582376,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Removes an element from a collection at the specified index."], null)),cljs.core.pr_str.call(null,error__24532__auto___37142)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37129_37136,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37140,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37142], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__37132;
var index = G__37133;
while(true){
if((index < (0))){
throw cljs.core.ex_info.call(null,"Index cannot be negative ",index);
} else {
}

if((cljs.core.count.call(null,coll) <= index)){
throw cljs.core.ex_info.call(null,"Index cannot exceed collection length: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count.call(null,coll),new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
} else {
}

return tupelo.core.glue.call(null,cljs.core.take.call(null,index,coll),cljs.core.drop.call(null,(index + (1)),coll));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"drop-at","drop-at",878582376,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Removes an element from a collection at the specified index."], null)),output_schema37128_37135,cljs.core.deref.call(null,output_checker37131_37138),o__24533__auto__);
} else {
var temp__5720__auto___37143 = cljs.core.deref.call(null,output_checker37131_37138).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37143)){
var error__24532__auto___37144 = temp__5720__auto___37143;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"drop-at","drop-at",878582376,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Removes an element from a collection at the specified index."], null)),cljs.core.pr_str.call(null,error__24532__auto___37144)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37128_37135,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37144], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.drop_at),schema.core.__GT_FnSchema.call(null,output_schema37128_37135,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37129_37136], null)));

var ufv___37152 = schema.utils.use_fn_validation;
var output_schema37145_37153 = tupelo.schema.List;
var input_schema37146_37154 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.one.call(null,schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37147_37155 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37146_37154);
}),null));
var output_checker37148_37156 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37145_37153);
}),null));
var ret__26117__auto___37157 = /**
 * Inputs: [coll :- tsk/List index :- s/Int elem :- s/Any]
 *   Returns: tsk/List
 * 
 *   Inserts an element into a collection at the specified index.
 */
tupelo.core.insert_at = (function tupelo$core$insert_at(G__37149,G__37150,G__37151){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37152);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37158 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37149,G__37150,G__37151], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-at","insert-at",1991020366,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inserts an element into a collection at the specified index."], null)),input_schema37146_37154,cljs.core.deref.call(null,input_checker37147_37155),args__24531__auto___37158);
} else {
var temp__5720__auto___37159 = cljs.core.deref.call(null,input_checker37147_37155).call(null,args__24531__auto___37158);
if(cljs.core.truth_(temp__5720__auto___37159)){
var error__24532__auto___37160 = temp__5720__auto___37159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"insert-at","insert-at",1991020366,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inserts an element into a collection at the specified index."], null)),cljs.core.pr_str.call(null,error__24532__auto___37160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37146_37154,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37158,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37160], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__37149;
var index = G__37150;
var elem = G__37151;
while(true){
if((index < (0))){
throw cljs.core.ex_info.call(null,"Index cannot be negative ",index);
} else {
}

if((cljs.core.count.call(null,coll) < index)){
throw cljs.core.ex_info.call(null,"Index cannot exceed collection length: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count.call(null,coll),new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
} else {
}

return tupelo.core.glue.call(null,cljs.core.take.call(null,index,coll),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),cljs.core.drop.call(null,index,coll));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-at","insert-at",1991020366,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inserts an element into a collection at the specified index."], null)),output_schema37145_37153,cljs.core.deref.call(null,output_checker37148_37156),o__24533__auto__);
} else {
var temp__5720__auto___37161 = cljs.core.deref.call(null,output_checker37148_37156).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37161)){
var error__24532__auto___37162 = temp__5720__auto___37161;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"insert-at","insert-at",1991020366,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inserts an element into a collection at the specified index."], null)),cljs.core.pr_str.call(null,error__24532__auto___37162)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37145_37153,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37162], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.insert_at),schema.core.__GT_FnSchema.call(null,output_schema37145_37153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37146_37154], null)));

var ufv___37170 = schema.utils.use_fn_validation;
var output_schema37163_37171 = tupelo.schema.List;
var input_schema37164_37172 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.one.call(null,schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37165_37173 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37164_37172);
}),null));
var output_checker37166_37174 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37163_37171);
}),null));
var ret__26117__auto___37175 = /**
 * Inputs: [coll :- tsk/List index :- s/Int elem :- s/Any]
 *   Returns: tsk/List
 * 
 *   Replaces an element in a collection at the specified index.
 */
tupelo.core.replace_at = (function tupelo$core$replace_at(G__37167,G__37168,G__37169){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37170);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37167,G__37168,G__37169], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"replace-at","replace-at",791919747,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Replaces an element in a collection at the specified index."], null)),input_schema37164_37172,cljs.core.deref.call(null,input_checker37165_37173),args__24531__auto___37176);
} else {
var temp__5720__auto___37177 = cljs.core.deref.call(null,input_checker37165_37173).call(null,args__24531__auto___37176);
if(cljs.core.truth_(temp__5720__auto___37177)){
var error__24532__auto___37178 = temp__5720__auto___37177;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"replace-at","replace-at",791919747,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Replaces an element in a collection at the specified index."], null)),cljs.core.pr_str.call(null,error__24532__auto___37178)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37164_37172,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37176,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37178], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__37167;
var index = G__37168;
var elem = G__37169;
while(true){
if((index < (0))){
throw cljs.core.ex_info.call(null,"Index cannot be negative ",index);
} else {
}

if((cljs.core.count.call(null,coll) <= index)){
throw cljs.core.ex_info.call(null,"Index cannot exceed collection length: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count.call(null,coll),new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
} else {
}

return tupelo.core.glue.call(null,cljs.core.take.call(null,index,coll),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),cljs.core.drop.call(null,(index + (1)),coll));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"replace-at","replace-at",791919747,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Replaces an element in a collection at the specified index."], null)),output_schema37163_37171,cljs.core.deref.call(null,output_checker37166_37174),o__24533__auto__);
} else {
var temp__5720__auto___37179 = cljs.core.deref.call(null,output_checker37166_37174).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37179)){
var error__24532__auto___37180 = temp__5720__auto___37179;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"replace-at","replace-at",791919747,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Replaces an element in a collection at the specified index."], null)),cljs.core.pr_str.call(null,error__24532__auto___37180)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37163_37171,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37180], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.replace_at),schema.core.__GT_FnSchema.call(null,output_schema37163_37171,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37164_37172], null)));

var ufv___37187 = schema.utils.use_fn_validation;
var output_schema37181_37188 = schema.core.Any;
var input_schema37182_37189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null))),schema.core.one.call(null,schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"index-val","index-val",1323409851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)))], null);
var input_checker37183_37190 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37182_37189);
}),null));
var output_checker37184_37191 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37181_37188);
}),null));
var ret__26117__auto___37192 = /**
 * Inputs: [coll :- tsk/List index-val :- s/Int]
 * 
 *   Indexes into a vector, allowing negative index values
 */
tupelo.core.idx = (function tupelo$core$idx(G__37185,G__37186){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37187);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37185,G__37186], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Indexes into a vector, allowing negative index values"], null)),input_schema37182_37189,cljs.core.deref.call(null,input_checker37183_37190),args__24531__auto___37193);
} else {
var temp__5720__auto___37194 = cljs.core.deref.call(null,input_checker37183_37190).call(null,args__24531__auto___37193);
if(cljs.core.truth_(temp__5720__auto___37194)){
var error__24532__auto___37195 = temp__5720__auto___37194;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Indexes into a vector, allowing negative index values"], null)),cljs.core.pr_str.call(null,error__24532__auto___37195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37182_37189,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37193,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37195], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__37185;
var index_val = G__37186;
while(true){
if((coll == null)){
throw cljs.core.ex_info.call(null,"idx: coll cannot be nil: ",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null)));
} else {
}

var data_vec = cljs.core.vec.call(null,coll);
var N = cljs.core.count.call(null,data_vec);
var _GT__GT_ = (((N > (0)))?null:(function(){throw (new Error("Assert failed: (pos? N)"))})());
var ii = cljs.core.mod.call(null,index_val,N);
var _GT__GT___$1 = (((cljs.core.count.call(null,coll) <= ii))?(function(){throw cljs.core.ex_info.call(null,"Index cannot exceed collection length: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"len","len",1423657078),cljs.core.count.call(null,coll),new cljs.core.Keyword(null,"index","index",-1531685915),ii], null))})():null);
var result = cljs.core.get.call(null,data_vec,ii);
return result;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Indexes into a vector, allowing negative index values"], null)),output_schema37181_37188,cljs.core.deref.call(null,output_checker37184_37191),o__24533__auto__);
} else {
var temp__5720__auto___37196 = cljs.core.deref.call(null,output_checker37184_37191).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37196)){
var error__24532__auto___37197 = temp__5720__auto___37196;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Indexes into a vector, allowing negative index values"], null)),cljs.core.pr_str.call(null,error__24532__auto___37197)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37181_37188,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37197], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.idx),schema.core.__GT_FnSchema.call(null,output_schema37181_37188,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37182_37189], null)));

var ufv___37218 = schema.utils.use_fn_validation;
var output_schema37198_37219 = tupelo.schema.Map;
var input_schema37199_37220 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map-in","map-in",1940374657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,tupelo.schema.Fn,cljs.core.with_meta(new cljs.core.Symbol(null,"tx-fn","tx-fn",-1426921190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Fn","tsk/Fn",239841444,null)], null))),schema.core.Any], null);
var input_checker37200_37221 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37199_37220);
}),null));
var output_checker37201_37222 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37198_37219);
}),null));
var ret__26117__auto___37223 = (function (){
/**
 * Inputs: [map-in :- tsk/Map tx-fn :- tsk/Fn & tx-args]
 *   Returns: tsk/Map
 * 
 *   Transforms each key in a map using the supplied `tx-fn`:
 * 
 *      (t/map-keys {1 :a 2 :b 3 :c} inc)                  =>  {  2 :a   3 :b 4   :c}
 *      (t/map-keys {1 :a 2 :b 3 :c} {1 101 2 202 3 303})  =>  {101 :a 202 :b 303 :c}
 */
tupelo.core.map_keys = (function tupelo$core$map_keys(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37224 = arguments.length;
var i__4830__auto___37225 = (0);
while(true){
if((i__4830__auto___37225 < len__4829__auto___37224)){
args__4835__auto__.push((arguments[i__4830__auto___37225]));

var G__37226 = (i__4830__auto___37225 + (1));
i__4830__auto___37225 = G__37226;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.map_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.map_keys.cljs$core$IFn$_invoke$arity$variadic = (function (G__37202,G__37203,rest37204){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37218);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37227 = cljs.core.list_STAR_.call(null,G__37202,G__37203,rest37204);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"map-keys","map-keys",-304742863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each key in a map using the supplied `tx-fn`:\n\n        (t/map-keys {1 :a 2 :b 3 :c} inc)                  =>  {  2 :a   3 :b 4   :c}\n        (t/map-keys {1 :a 2 :b 3 :c} {1 101 2 202 3 303})  =>  {101 :a 202 :b 303 :c}"], null)),input_schema37199_37220,cljs.core.deref.call(null,input_checker37200_37221),args__24531__auto___37227);
} else {
var temp__5720__auto___37228 = cljs.core.deref.call(null,input_checker37200_37221).call(null,args__24531__auto___37227);
if(cljs.core.truth_(temp__5720__auto___37228)){
var error__24532__auto___37229 = temp__5720__auto___37228;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map-keys","map-keys",-304742863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each key in a map using the supplied `tx-fn`:\n\n        (t/map-keys {1 :a 2 :b 3 :c} inc)                  =>  {  2 :a   3 :b 4   :c}\n        (t/map-keys {1 :a 2 :b 3 :c} {1 101 2 202 3 303})  =>  {101 :a 202 :b 303 :c}"], null)),cljs.core.pr_str.call(null,error__24532__auto___37229)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37199_37220,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37227,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37229], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_in = G__37202;
var tx_fn = G__37203;
var tx_args = rest37204;
while(true){
var tuple_seq_orig = cljs.core.vec.call(null,map_in);
var tuple_seq_out = (function (){var iter__4622__auto__ = ((function (tuple_seq_orig,validate__24530__auto__,ufv___37218,output_schema37198_37219,input_schema37199_37220,input_checker37200_37221,output_checker37201_37222){
return (function tupelo$core$iter__37208(s__37209){
return (new cljs.core.LazySeq(null,(function (){
var s__37209__$1 = s__37209;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37209__$1);
if(temp__5720__auto__){
var s__37209__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37209__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37209__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37211 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37210 = (0);
while(true){
if((i__37210 < size__4621__auto__)){
var vec__37212 = cljs.core._nth.call(null,c__4620__auto__,i__37210);
var tuple_key = cljs.core.nth.call(null,vec__37212,(0),null);
var tuple_val = cljs.core.nth.call(null,vec__37212,(1),null);
cljs.core.chunk_append.call(null,b__37211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,tx_fn,tuple_key,tx_args),tuple_val], null));

var G__37230 = (i__37210 + (1));
i__37210 = G__37230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37211),tupelo$core$iter__37208.call(null,cljs.core.chunk_rest.call(null,s__37209__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37211),null);
}
} else {
var vec__37215 = cljs.core.first.call(null,s__37209__$2);
var tuple_key = cljs.core.nth.call(null,vec__37215,(0),null);
var tuple_val = cljs.core.nth.call(null,vec__37215,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,tx_fn,tuple_key,tx_args),tuple_val], null),tupelo$core$iter__37208.call(null,cljs.core.rest.call(null,s__37209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(tuple_seq_orig,validate__24530__auto__,ufv___37218,output_schema37198_37219,input_schema37199_37220,input_checker37200_37221,output_checker37201_37222))
;
return iter__4622__auto__.call(null,tuple_seq_orig);
})();
var map_out = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tuple_seq_out);
return map_out;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"map-keys","map-keys",-304742863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each key in a map using the supplied `tx-fn`:\n\n        (t/map-keys {1 :a 2 :b 3 :c} inc)                  =>  {  2 :a   3 :b 4   :c}\n        (t/map-keys {1 :a 2 :b 3 :c} {1 101 2 202 3 303})  =>  {101 :a 202 :b 303 :c}"], null)),output_schema37198_37219,cljs.core.deref.call(null,output_checker37201_37222),o__24533__auto__);
} else {
var temp__5720__auto___37231 = cljs.core.deref.call(null,output_checker37201_37222).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37231)){
var error__24532__auto___37232 = temp__5720__auto___37231;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map-keys","map-keys",-304742863,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each key in a map using the supplied `tx-fn`:\n\n        (t/map-keys {1 :a 2 :b 3 :c} inc)                  =>  {  2 :a   3 :b 4   :c}\n        (t/map-keys {1 :a 2 :b 3 :c} {1 101 2 202 3 303})  =>  {101 :a 202 :b 303 :c}"], null)),cljs.core.pr_str.call(null,error__24532__auto___37232)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37198_37219,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37232], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.map_keys.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.map_keys.cljs$lang$applyTo = (function (seq37205){
var G__37206 = cljs.core.first.call(null,seq37205);
var seq37205__$1 = cljs.core.next.call(null,seq37205);
var G__37207 = cljs.core.first.call(null,seq37205__$1);
var seq37205__$2 = cljs.core.next.call(null,seq37205__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37206,G__37207,seq37205__$2);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.map_keys),schema.core.__GT_FnSchema.call(null,output_schema37198_37219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37199_37220], null)));

var ufv___37253 = schema.utils.use_fn_validation;
var output_schema37233_37254 = tupelo.schema.Map;
var input_schema37234_37255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"map-in","map-in",1940374657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,tupelo.schema.Fn,cljs.core.with_meta(new cljs.core.Symbol(null,"tx-fn","tx-fn",-1426921190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Fn","tsk/Fn",239841444,null)], null))),schema.core.Any], null);
var input_checker37235_37256 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37234_37255);
}),null));
var output_checker37236_37257 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37233_37254);
}),null));
var ret__26117__auto___37258 = (function (){
/**
 * Inputs: [map-in :- tsk/Map tx-fn :- tsk/Fn & tx-args]
 *   Returns: tsk/Map
 * 
 *   Transforms each value in a map using the supplied `tx-fn`:
 * 
 *      (t/map-vals {:a 1 :b 2 :c 3} inc)                  =>  {:a 2,   :b 3,   :c 4}
 *      (t/map-vals {:a 1 :b 2 :c 3} {1 101 2 202 3 303})  =>  {:a 101, :b 202, :c 303} 
 */
tupelo.core.map_vals = (function tupelo$core$map_vals(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37259 = arguments.length;
var i__4830__auto___37260 = (0);
while(true){
if((i__4830__auto___37260 < len__4829__auto___37259)){
args__4835__auto__.push((arguments[i__4830__auto___37260]));

var G__37261 = (i__4830__auto___37260 + (1));
i__4830__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (G__37237,G__37238,rest37239){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37253);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37262 = cljs.core.list_STAR_.call(null,G__37237,G__37238,rest37239);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"map-vals","map-vals",-818445670,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each value in a map using the supplied `tx-fn`:\n\n        (t/map-vals {:a 1 :b 2 :c 3} inc)                  =>  {:a 2,   :b 3,   :c 4}\n        (t/map-vals {:a 1 :b 2 :c 3} {1 101 2 202 3 303})  =>  {:a 101, :b 202, :c 303} "], null)),input_schema37234_37255,cljs.core.deref.call(null,input_checker37235_37256),args__24531__auto___37262);
} else {
var temp__5720__auto___37263 = cljs.core.deref.call(null,input_checker37235_37256).call(null,args__24531__auto___37262);
if(cljs.core.truth_(temp__5720__auto___37263)){
var error__24532__auto___37264 = temp__5720__auto___37263;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map-vals","map-vals",-818445670,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each value in a map using the supplied `tx-fn`:\n\n        (t/map-vals {:a 1 :b 2 :c 3} inc)                  =>  {:a 2,   :b 3,   :c 4}\n        (t/map-vals {:a 1 :b 2 :c 3} {1 101 2 202 3 303})  =>  {:a 101, :b 202, :c 303} "], null)),cljs.core.pr_str.call(null,error__24532__auto___37264)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37234_37255,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37262,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37264], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var map_in = G__37237;
var tx_fn = G__37238;
var tx_args = rest37239;
while(true){
var tuple_seq_orig = cljs.core.vec.call(null,map_in);
var tuple_seq_out = (function (){var iter__4622__auto__ = ((function (tuple_seq_orig,validate__24530__auto__,ufv___37253,output_schema37233_37254,input_schema37234_37255,input_checker37235_37256,output_checker37236_37257){
return (function tupelo$core$iter__37243(s__37244){
return (new cljs.core.LazySeq(null,(function (){
var s__37244__$1 = s__37244;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37244__$1);
if(temp__5720__auto__){
var s__37244__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37244__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37244__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37246 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37245 = (0);
while(true){
if((i__37245 < size__4621__auto__)){
var vec__37247 = cljs.core._nth.call(null,c__4620__auto__,i__37245);
var tuple_key = cljs.core.nth.call(null,vec__37247,(0),null);
var tuple_val = cljs.core.nth.call(null,vec__37247,(1),null);
cljs.core.chunk_append.call(null,b__37246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple_key,cljs.core.apply.call(null,tx_fn,tuple_val,tx_args)], null));

var G__37265 = (i__37245 + (1));
i__37245 = G__37265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37246),tupelo$core$iter__37243.call(null,cljs.core.chunk_rest.call(null,s__37244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37246),null);
}
} else {
var vec__37250 = cljs.core.first.call(null,s__37244__$2);
var tuple_key = cljs.core.nth.call(null,vec__37250,(0),null);
var tuple_val = cljs.core.nth.call(null,vec__37250,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple_key,cljs.core.apply.call(null,tx_fn,tuple_val,tx_args)], null),tupelo$core$iter__37243.call(null,cljs.core.rest.call(null,s__37244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(tuple_seq_orig,validate__24530__auto__,ufv___37253,output_schema37233_37254,input_schema37234_37255,input_checker37235_37256,output_checker37236_37257))
;
return iter__4622__auto__.call(null,tuple_seq_orig);
})();
var map_out = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tuple_seq_out);
return map_out;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"map-vals","map-vals",-818445670,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each value in a map using the supplied `tx-fn`:\n\n        (t/map-vals {:a 1 :b 2 :c 3} inc)                  =>  {:a 2,   :b 3,   :c 4}\n        (t/map-vals {:a 1 :b 2 :c 3} {1 101 2 202 3 303})  =>  {:a 101, :b 202, :c 303} "], null)),output_schema37233_37254,cljs.core.deref.call(null,output_checker37236_37257),o__24533__auto__);
} else {
var temp__5720__auto___37266 = cljs.core.deref.call(null,output_checker37236_37257).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37266)){
var error__24532__auto___37267 = temp__5720__auto___37266;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map-vals","map-vals",-818445670,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Transforms each value in a map using the supplied `tx-fn`:\n\n        (t/map-vals {:a 1 :b 2 :c 3} inc)                  =>  {:a 2,   :b 3,   :c 4}\n        (t/map-vals {:a 1 :b 2 :c 3} {1 101 2 202 3 303})  =>  {:a 101, :b 202, :c 303} "], null)),cljs.core.pr_str.call(null,error__24532__auto___37267)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37233_37254,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37267], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.map_vals.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.map_vals.cljs$lang$applyTo = (function (seq37240){
var G__37241 = cljs.core.first.call(null,seq37240);
var seq37240__$1 = cljs.core.next.call(null,seq37240);
var G__37242 = cljs.core.first.call(null,seq37240__$1);
var seq37240__$2 = cljs.core.next.call(null,seq37240__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37241,G__37242,seq37240__$2);
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.map_vals),schema.core.__GT_FnSchema.call(null,output_schema37233_37254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37234_37255], null)));

tupelo.core.MapKeySpec = schema.core.if$.call(null,cljs.core.set_QMARK_,cljs.core.PersistentHashSet.createAsIfByAssoc([schema.core.Any]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null));
var ufv___37278 = schema.utils.use_fn_validation;
var output_schema37268_37279 = schema.core.Any;
var input_schema37269_37280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Map,cljs.core.with_meta(new cljs.core.Symbol(null,"tst-map","tst-map",549267370,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Map","tsk/Map",1442753563,null)], null))),schema.core.one.call(null,tupelo.core.MapKeySpec,cljs.core.with_meta(new cljs.core.Symbol(null,"valid-keys","valid-keys",-627580838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MapKeySpec","MapKeySpec",-653729853,null)], null)))], null);
var input_checker37270_37281 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37269_37280);
}),null));
var output_checker37271_37282 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37268_37279);
}),null));
var ret__26117__auto___37283 = /**
 * Inputs: [tst-map :- tsk/Map valid-keys :- MapKeySpec]
 *   Returns: s/Any
 */
tupelo.core.validate_map_keys = (function tupelo$core$validate_map_keys(G__37272,G__37273){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37278);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37272,G__37273], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"validate-map-keys","validate-map-keys",1814119635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),input_schema37269_37280,cljs.core.deref.call(null,input_checker37270_37281),args__24531__auto___37284);
} else {
var temp__5720__auto___37285 = cljs.core.deref.call(null,input_checker37270_37281).call(null,args__24531__auto___37284);
if(cljs.core.truth_(temp__5720__auto___37285)){
var error__24532__auto___37286 = temp__5720__auto___37285;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"validate-map-keys","validate-map-keys",1814119635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37286)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37269_37280,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37284,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37286], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var tst_map = G__37272;
var valid_keys = G__37273;
while(true){
var valid_keys__$1 = cljs.core.set.call(null,valid_keys);
var map_keys = cljs.core.keys.call(null,tst_map);
if(cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,cljs.core.vec.call(null,(function (){var iter__4622__auto__ = ((function (valid_keys__$1,map_keys,validate__24530__auto__,ufv___37278,output_schema37268_37279,input_schema37269_37280,input_checker37270_37281,output_checker37271_37282){
return (function tupelo$core$validate_map_keys_$_iter__37274(s__37275){
return (new cljs.core.LazySeq(null,(function (){
var s__37275__$1 = s__37275;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37275__$1);
if(temp__5720__auto__){
var s__37275__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37275__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37275__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37277 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37276 = (0);
while(true){
if((i__37276 < size__4621__auto__)){
var curr_key = cljs.core._nth.call(null,c__4620__auto__,i__37276);
cljs.core.chunk_append.call(null,b__37277,tupelo.core.contains_key_QMARK_.call(null,valid_keys__$1,curr_key));

var G__37287 = (i__37276 + (1));
i__37276 = G__37287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37277),tupelo$core$validate_map_keys_$_iter__37274.call(null,cljs.core.chunk_rest.call(null,s__37275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37277),null);
}
} else {
var curr_key = cljs.core.first.call(null,s__37275__$2);
return cljs.core.cons.call(null,tupelo.core.contains_key_QMARK_.call(null,valid_keys__$1,curr_key),tupelo$core$validate_map_keys_$_iter__37274.call(null,cljs.core.rest.call(null,s__37275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(valid_keys__$1,map_keys,validate__24530__auto__,ufv___37278,output_schema37268_37279,input_schema37269_37280,input_checker37270_37281,output_checker37271_37282))
;
return iter__4622__auto__.call(null,map_keys);
})()))){
} else {
throw cljs.core.ex_info.call(null,"validate-map-keys: invalid key found ",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tst-map","tst-map",-1091264157),tst_map], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid-keys","valid-keys",2026854931),valid_keys__$1], null)));
}

return tst_map;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"validate-map-keys","validate-map-keys",1814119635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),output_schema37268_37279,cljs.core.deref.call(null,output_checker37271_37282),o__24533__auto__);
} else {
var temp__5720__auto___37288 = cljs.core.deref.call(null,output_checker37271_37282).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37288)){
var error__24532__auto___37289 = temp__5720__auto___37288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"validate-map-keys","validate-map-keys",1814119635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37268_37279,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37289], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.validate_map_keys),schema.core.__GT_FnSchema.call(null,output_schema37268_37279,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37269_37280], null)));

var ufv___37296 = schema.utils.use_fn_validation;
var output_schema37290_37297 = schema.core.Bool;
var input_schema37291_37298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"tgt-in","tgt-in",1713825698,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker37292_37299 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37291_37298);
}),null));
var output_checker37293_37300 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37290_37297);
}),null));
var ret__26117__auto___37301 = /**
 * Inputs: [coll tgt-in]
 *   Returns: s/Bool
 * 
 *   Returns true when the initial elements of coll match those of tgt
 */
tupelo.core.starts_with_QMARK_ = (function tupelo$core$starts_with_QMARK_(G__37294,G__37295){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37296);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37294,G__37295], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true when the initial elements of coll match those of tgt"], null)),input_schema37291_37298,cljs.core.deref.call(null,input_checker37292_37299),args__24531__auto___37302);
} else {
var temp__5720__auto___37303 = cljs.core.deref.call(null,input_checker37292_37299).call(null,args__24531__auto___37302);
if(cljs.core.truth_(temp__5720__auto___37303)){
var error__24532__auto___37304 = temp__5720__auto___37303;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true when the initial elements of coll match those of tgt"], null)),cljs.core.pr_str.call(null,error__24532__auto___37304)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37291_37298,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37302,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37304], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var coll = G__37294;
var tgt_in = G__37295;
while(true){
var tgt_vec = cljs.core.vec.call(null,tgt_in);
var tgt_len = cljs.core.count.call(null,tgt_vec);
if((cljs.core.count.call(null,coll) < tgt_len)){
return false;
} else {
var coll_vals = cljs.core.take.call(null,tgt_len,coll);
return cljs.core._EQ_.call(null,coll_vals,tgt_vec);
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true when the initial elements of coll match those of tgt"], null)),output_schema37290_37297,cljs.core.deref.call(null,output_checker37293_37300),o__24533__auto__);
} else {
var temp__5720__auto___37305 = cljs.core.deref.call(null,output_checker37293_37300).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37305)){
var error__24532__auto___37306 = temp__5720__auto___37305;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true when the initial elements of coll match those of tgt"], null)),cljs.core.pr_str.call(null,error__24532__auto___37306)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37290_37297,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37306], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.starts_with_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema37290_37297,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37291_37298], null)));

/**
 * Finds the first index N where (< N (count coll)) such that (pred (drop N coll)) is truthy.
 *   Returns `nil` if no match found.
 */
tupelo.core.index_using = (function tupelo$core$index_using(pred,coll){
var all_vals = cljs.core.vec.call(null,coll);
var num_vals = cljs.core.count.call(null,all_vals);
var i = (0);
while(true){
if((num_vals <= i)){
return null;
} else {
var curr_vals = cljs.core.subvec.call(null,all_vals,i);
if(cljs.core.truth_(pred.call(null,curr_vals))){
return i;
} else {
var G__37307 = (i + (1));
i = G__37307;
continue;
}
}
break;
}
});
/**
 * Splits a collection based on a predicate with a collection argument.
 *   Finds the first index N such that (pred (drop N coll)) is true. Returns a length-2 vector
 *   of
 *     [ (take N coll) (drop N coll) ]
 * 
 *   If pred is never satisified, `[ coll [] ]` is returned.
 */
tupelo.core.split_using = (function tupelo$core$split_using(pred,coll){
var N = tupelo.core.index_using.call(null,pred,cljs.core.vec.call(null,coll));
if((N == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,cljs.core.PersistentVector.EMPTY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,N,coll),cljs.core.drop.call(null,N,coll)], null);
}
});
/**
 * Splits a collection src by matching with a sub-sequence tgt of length L.
 *   Finds the first index N such that
 * 
 *     (= tgt (->> coll (drop N) (take L)))
 * 
 *   is true. Returns a length-2 vector of [ (take N coll) (drop N coll) ].
 *   If no match is found, `[ coll [] ]` is returned.
 */
tupelo.core.split_match = (function tupelo$core$split_match(coll,tgt){
return tupelo.core.split_using.call(null,(function (partial_coll){
return tupelo.core.starts_with_QMARK_.call(null,partial_coll,cljs.core.vec.call(null,tgt));
}),cljs.core.vec.call(null,coll));
});
var ufv___37320 = schema.utils.use_fn_validation;
var output_schema37308_37321 = schema.core.Any;
var input_schema37309_37322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,tupelo.schema.List,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null)], null)))], null);
var input_checker37310_37323 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37309_37322);
}),null));
var output_checker37311_37324 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37308_37321);
}),null));
var ret__26117__auto___37325 = /**
 * Inputs: [pred :- s/Any coll :- tsk/List]
 * 
 *   Partitions a collection into vector of segments based on a predicate with a collection argument.
 *   The first segment is initialized by removing the first element from `coll`, with subsequent
 *   elements similarly transferred as long as `(pred remaining-coll)` is falsey. When
 *   `(pred remaining-coll)` becomes truthy, the algorithm begins building the next segment.
 *   Thus, the first partition finds the smallest N (< 0 N) such that
 * 
 *      (pred (drop N coll))
 * 
 *   is true, and constructs the segment as
 * 
 *      (take N coll)
 * 
 *   If pred is never satisified, `[coll]` is returned.
 */
tupelo.core.partition_using = (function tupelo$core$partition_using(G__37312,G__37313){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37320);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37312,G__37313], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"partition-using","partition-using",-317527428,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Partitions a collection into vector of segments based on a predicate with a collection argument.\n  The first segment is initialized by removing the first element from `coll`, with subsequent\n  elements similarly transferred as long as `(pred remaining-coll)` is falsey. When\n  `(pred remaining-coll)` becomes truthy, the algorithm begins building the next segment.\n  Thus, the first partition finds the smallest N (< 0 N) such that\n\n        (pred (drop N coll))\n\n  is true, and constructs the segment as\n\n        (take N coll)\n\n  If pred is never satisified, `[coll]` is returned."], null)),input_schema37309_37322,cljs.core.deref.call(null,input_checker37310_37323),args__24531__auto___37326);
} else {
var temp__5720__auto___37327 = cljs.core.deref.call(null,input_checker37310_37323).call(null,args__24531__auto___37326);
if(cljs.core.truth_(temp__5720__auto___37327)){
var error__24532__auto___37328 = temp__5720__auto___37327;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"partition-using","partition-using",-317527428,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Partitions a collection into vector of segments based on a predicate with a collection argument.\n  The first segment is initialized by removing the first element from `coll`, with subsequent\n  elements similarly transferred as long as `(pred remaining-coll)` is falsey. When\n  `(pred remaining-coll)` becomes truthy, the algorithm begins building the next segment.\n  Thus, the first partition finds the smallest N (< 0 N) such that\n\n        (pred (drop N coll))\n\n  is true, and constructs the segment as\n\n        (take N coll)\n\n  If pred is never satisified, `[coll]` is returned."], null)),cljs.core.pr_str.call(null,error__24532__auto___37328)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37309_37322,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37326,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37328], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var pred = G__37312;
var coll = G__37313;
while(true){
var vals = cljs.core.vec.call(null,coll);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,vals)){
return result;
} else {
var out_first = cljs.core.take.call(null,(1),vals);
var vec__37317 = tupelo.core.split_using.call(null,pred,cljs.core.rest.call(null,vals));
var out_rest = cljs.core.nth.call(null,vec__37317,(0),null);
var unprocessed = cljs.core.nth.call(null,vec__37317,(1),null);
var out_vals = tupelo.core.glue.call(null,out_first,out_rest);
var new_result = tupelo.core.append.call(null,result,out_vals);
var G__37329 = unprocessed;
var G__37330 = new_result;
vals = G__37329;
result = G__37330;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"partition-using","partition-using",-317527428,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Partitions a collection into vector of segments based on a predicate with a collection argument.\n  The first segment is initialized by removing the first element from `coll`, with subsequent\n  elements similarly transferred as long as `(pred remaining-coll)` is falsey. When\n  `(pred remaining-coll)` becomes truthy, the algorithm begins building the next segment.\n  Thus, the first partition finds the smallest N (< 0 N) such that\n\n        (pred (drop N coll))\n\n  is true, and constructs the segment as\n\n        (take N coll)\n\n  If pred is never satisified, `[coll]` is returned."], null)),output_schema37308_37321,cljs.core.deref.call(null,output_checker37311_37324),o__24533__auto__);
} else {
var temp__5720__auto___37331 = cljs.core.deref.call(null,output_checker37311_37324).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37331)){
var error__24532__auto___37332 = temp__5720__auto___37331;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"partition-using","partition-using",-317527428,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Partitions a collection into vector of segments based on a predicate with a collection argument.\n  The first segment is initialized by removing the first element from `coll`, with subsequent\n  elements similarly transferred as long as `(pred remaining-coll)` is falsey. When\n  `(pred remaining-coll)` becomes truthy, the algorithm begins building the next segment.\n  Thus, the first partition finds the smallest N (< 0 N) such that\n\n        (pred (drop N coll))\n\n  is true, and constructs the segment as\n\n        (take N coll)\n\n  If pred is never satisified, `[coll]` is returned."], null)),cljs.core.pr_str.call(null,error__24532__auto___37332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37308_37321,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37332], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.partition_using),schema.core.__GT_FnSchema.call(null,output_schema37308_37321,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37309_37322], null)));

var ufv___37339 = schema.utils.use_fn_validation;
var output_schema37333_37340 = tupelo.schema.List;
var input_schema37334_37341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker37335_37342 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37334_37341);
}),null));
var output_checker37336_37343 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37333_37340);
}),null));
var ret__26117__auto___37344 = /**
 * Inputs: [pred coll]
 *   Returns: tsk/List
 * 
 *   Takes from a collection based on a predicate with a collection argument.
 *   Continues taking from the source collection until `(pred <taken-items>)` is falsey.
 *   If pred is never falsey, `coll` is returned.
 */
tupelo.core.take_while_result = (function tupelo$core$take_while_result(G__37337,G__37338){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37339);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37337,G__37338], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"take-while-result","take-while-result",-1857603423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes from a collection based on a predicate with a collection argument.\n  Continues taking from the source collection until `(pred <taken-items>)` is falsey.\n  If pred is never falsey, `coll` is returned."], null)),input_schema37334_37341,cljs.core.deref.call(null,input_checker37335_37342),args__24531__auto___37345);
} else {
var temp__5720__auto___37346 = cljs.core.deref.call(null,input_checker37335_37342).call(null,args__24531__auto___37345);
if(cljs.core.truth_(temp__5720__auto___37346)){
var error__24532__auto___37347 = temp__5720__auto___37346;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"take-while-result","take-while-result",-1857603423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes from a collection based on a predicate with a collection argument.\n  Continues taking from the source collection until `(pred <taken-items>)` is falsey.\n  If pred is never falsey, `coll` is returned."], null)),cljs.core.pr_str.call(null,error__24532__auto___37347)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37334_37341,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37345,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37347], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var pred = G__37337;
var coll = G__37338;
while(true){
if((((coll == null)) || (cljs.core.empty_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,"invalid source collection",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

var taken = cljs.core.PersistentVector.EMPTY;
var remaining = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return taken;
} else {
var taken_next = tupelo.core.append.call(null,taken,tupelo.core.xfirst.call(null,remaining));
var remaining_next = tupelo.core.xrest.call(null,remaining);
if(cljs.core.not.call(null,pred.call(null,taken_next))){
return taken;
} else {
var G__37348 = taken_next;
var G__37349 = remaining_next;
taken = G__37348;
remaining = G__37349;
continue;
}
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"take-while-result","take-while-result",-1857603423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes from a collection based on a predicate with a collection argument.\n  Continues taking from the source collection until `(pred <taken-items>)` is falsey.\n  If pred is never falsey, `coll` is returned."], null)),output_schema37333_37340,cljs.core.deref.call(null,output_checker37336_37343),o__24533__auto__);
} else {
var temp__5720__auto___37350 = cljs.core.deref.call(null,output_checker37336_37343).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37350)){
var error__24532__auto___37351 = temp__5720__auto___37350;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"take-while-result","take-while-result",-1857603423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","List","tsk/List",-1918894813,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes from a collection based on a predicate with a collection argument.\n  Continues taking from the source collection until `(pred <taken-items>)` is falsey.\n  If pred is never falsey, `coll` is returned."], null)),cljs.core.pr_str.call(null,error__24532__auto___37351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37333_37340,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37351], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.take_while_result),schema.core.__GT_FnSchema.call(null,output_schema37333_37340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37334_37341], null)));

/**
 * Removes elements from a collection so that the result has no duplicates of `(keyfn <elem>)`.
 *   Employs a first-one-wins strategy. Not lazy.
 */
tupelo.core.distinct_using = (function tupelo$core$distinct_using(keyfn,coll){
var seen = cljs.core.PersistentHashSet.EMPTY;
var waiting = coll;
var keepers = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,waiting)){
return keepers;
} else {
var candidate = tupelo.core.xfirst.call(null,waiting);
var key = keyfn.call(null,candidate);
if(cljs.core.contains_QMARK_.call(null,seen,key)){
var G__37352 = seen;
var G__37353 = tupelo.core.xrest.call(null,waiting);
var G__37354 = keepers;
seen = G__37352;
waiting = G__37353;
keepers = G__37354;
continue;
} else {
var G__37355 = cljs.core.conj.call(null,seen,key);
var G__37356 = tupelo.core.xrest.call(null,waiting);
var G__37357 = tupelo.core.append.call(null,keepers,candidate);
seen = G__37355;
waiting = G__37356;
keepers = G__37357;
continue;
}
}
break;
}
});
var ufv___37365 = schema.utils.use_fn_validation;
var output_schema37359_37366 = schema.core.Bool;
var input_schema37360_37367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker37361_37368 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37360_37367);
}),null));
var output_checker37362_37369 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37359_37366);
}),null));
var ret__26117__auto___37370 = (function (){
/**
 * Inputs: [& vals]
 *   Returns: s/Bool
 * 
 *   Compares values for equality using clojure.core/=, treating records as plain map values:
 * 
 *      (defrecord SampleRec [a b])
 *      (assert (val= (->SampleRec 1 2) {:a 1 :b 2}))   ; fails for clojure.core/= 
 */
tupelo.core.val_EQ_ = (function tupelo$core$val_EQ_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37371 = arguments.length;
var i__4830__auto___37372 = (0);
while(true){
if((i__4830__auto___37372 < len__4829__auto___37371)){
args__4835__auto__.push((arguments[i__4830__auto___37372]));

var G__37373 = (i__4830__auto___37372 + (1));
i__4830__auto___37372 = G__37373;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.val_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.val_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (rest37363){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37365);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37374 = cljs.core.list_STAR_.call(null,rest37363);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"val=","val=",1616106264,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Compares values for equality using clojure.core/=, treating records as plain map values:\n\n        (defrecord SampleRec [a b])\n        (assert (val= (->SampleRec 1 2) {:a 1 :b 2}))   ; fails for clojure.core/= "], null)),input_schema37360_37367,cljs.core.deref.call(null,input_checker37361_37368),args__24531__auto___37374);
} else {
var temp__5720__auto___37375 = cljs.core.deref.call(null,input_checker37361_37368).call(null,args__24531__auto___37374);
if(cljs.core.truth_(temp__5720__auto___37375)){
var error__24532__auto___37376 = temp__5720__auto___37375;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"val=","val=",1616106264,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Compares values for equality using clojure.core/=, treating records as plain map values:\n\n        (defrecord SampleRec [a b])\n        (assert (val= (->SampleRec 1 2) {:a 1 :b 2}))   ; fails for clojure.core/= "], null)),cljs.core.pr_str.call(null,error__24532__auto___37376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37360_37367,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37374,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37376], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var vals = rest37363;
while(true){
var mapify = ((function (validate__24530__auto__,ufv___37365,output_schema37359_37366,input_schema37360_37367,input_checker37361_37368,output_checker37362_37369){
return (function (arg){
if(cljs.core.map_QMARK_.call(null,arg)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,arg);
} else {
return arg;
}
});})(validate__24530__auto__,ufv___37365,output_schema37359_37366,input_schema37360_37367,input_checker37361_37368,output_checker37362_37369))
;
var mapified = cljs.core.mapv.call(null,((function (mapify,validate__24530__auto__,ufv___37365,output_schema37359_37366,input_schema37360_37367,input_checker37361_37368,output_checker37362_37369){
return (function (p1__37358_SHARP_){
return clojure.walk.postwalk.call(null,mapify,p1__37358_SHARP_);
});})(mapify,validate__24530__auto__,ufv___37365,output_schema37359_37366,input_schema37360_37367,input_checker37361_37368,output_checker37362_37369))
,vals);
var result = cljs.core.apply.call(null,cljs.core._EQ_,mapified);
return result;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"val=","val=",1616106264,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Compares values for equality using clojure.core/=, treating records as plain map values:\n\n        (defrecord SampleRec [a b])\n        (assert (val= (->SampleRec 1 2) {:a 1 :b 2}))   ; fails for clojure.core/= "], null)),output_schema37359_37366,cljs.core.deref.call(null,output_checker37362_37369),o__24533__auto__);
} else {
var temp__5720__auto___37377 = cljs.core.deref.call(null,output_checker37362_37369).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37377)){
var error__24532__auto___37378 = temp__5720__auto___37377;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"val=","val=",1616106264,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Compares values for equality using clojure.core/=, treating records as plain map values:\n\n        (defrecord SampleRec [a b])\n        (assert (val= (->SampleRec 1 2) {:a 1 :b 2}))   ; fails for clojure.core/= "], null)),cljs.core.pr_str.call(null,error__24532__auto___37378)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37359_37366,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37378], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.val_EQ_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.val_EQ_.cljs$lang$applyTo = (function (seq37364){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37364));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.val_EQ_),schema.core.__GT_FnSchema.call(null,output_schema37359_37366,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37360_37367], null)));

var ufv___37385 = schema.utils.use_fn_validation;
var output_schema37379_37386 = schema.core.Bool;
var input_schema37380_37387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_checker37381_37388 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37380_37387);
}),null));
var output_checker37382_37389 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37379_37386);
}),null));
var ret__26117__auto___37390 = (function (){
/**
 * Inputs: [& colls]
 *   Returns: s/Bool
 * 
 *   Returns true if the collections are equal when converted to sets.
 */
tupelo.core.set_EQ_ = (function tupelo$core$set_EQ_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37391 = arguments.length;
var i__4830__auto___37392 = (0);
while(true){
if((i__4830__auto___37392 < len__4829__auto___37391)){
args__4835__auto__.push((arguments[i__4830__auto___37392]));

var G__37393 = (i__4830__auto___37392 + (1));
i__4830__auto___37392 = G__37393;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.set_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.set_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (rest37383){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37385);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37394 = cljs.core.list_STAR_.call(null,rest37383);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"set=","set=",207874661,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the collections are equal when converted to sets."], null)),input_schema37380_37387,cljs.core.deref.call(null,input_checker37381_37388),args__24531__auto___37394);
} else {
var temp__5720__auto___37395 = cljs.core.deref.call(null,input_checker37381_37388).call(null,args__24531__auto___37394);
if(cljs.core.truth_(temp__5720__auto___37395)){
var error__24532__auto___37396 = temp__5720__auto___37395;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"set=","set=",207874661,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the collections are equal when converted to sets."], null)),cljs.core.pr_str.call(null,error__24532__auto___37396)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37380_37387,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37394,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37396], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var colls = rest37383;
while(true){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.mapv.call(null,cljs.core.set,colls));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"set=","set=",207874661,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the collections are equal when converted to sets."], null)),output_schema37379_37386,cljs.core.deref.call(null,output_checker37382_37389),o__24533__auto__);
} else {
var temp__5720__auto___37397 = cljs.core.deref.call(null,output_checker37382_37389).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37397)){
var error__24532__auto___37398 = temp__5720__auto___37397;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"set=","set=",207874661,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the collections are equal when converted to sets."], null)),cljs.core.pr_str.call(null,error__24532__auto___37398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37379_37386,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37398], null));
} else {
}
}
} else {
}

return o__24533__auto__;
}));

(tupelo.core.set_EQ_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.set_EQ_.cljs$lang$applyTo = (function (seq37384){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37384));
}));

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.set_EQ_),schema.core.__GT_FnSchema.call(null,output_schema37379_37386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37380_37387], null)));

var ufv___37404 = schema.utils.use_fn_validation;
var output_schema37399_37405 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
var input_schema37400_37406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker37401_37407 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37400_37406);
}),null));
var output_checker37402_37408 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37399_37405);
}),null));
var ret__26117__auto___37409 = /**
 * Inputs: [data :- [s/Any]]
 *   Returns: #:s{Any s/Any}
 */
tupelo.core.sequential__GT_idx_map = (function tupelo$core$sequential__GT_idx_map(G__37403){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37404);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37403], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"sequential->idx-map","sequential->idx-map",1128169208,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),input_schema37400_37406,cljs.core.deref.call(null,input_checker37401_37407),args__24531__auto___37410);
} else {
var temp__5720__auto___37411 = cljs.core.deref.call(null,input_checker37401_37407).call(null,args__24531__auto___37410);
if(cljs.core.truth_(temp__5720__auto___37411)){
var error__24532__auto___37412 = temp__5720__auto___37411;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sequential->idx-map","sequential->idx-map",1128169208,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37412)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37400_37406,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37410,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37412], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var data = G__37403;
while(true){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map_indexed.call(null,((function (validate__24530__auto__,ufv___37404,output_schema37399_37405,input_schema37400_37406,input_checker37401_37407,output_checker37402_37408){
return (function (idx,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,val], null);
});})(validate__24530__auto__,ufv___37404,output_schema37399_37405,input_schema37400_37406,input_checker37401_37407,output_checker37402_37408))
,data));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"sequential->idx-map","sequential->idx-map",1128169208,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),output_schema37399_37405,cljs.core.deref.call(null,output_checker37402_37408),o__24533__auto__);
} else {
var temp__5720__auto___37413 = cljs.core.deref.call(null,output_checker37402_37408).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37413)){
var error__24532__auto___37414 = temp__5720__auto___37413;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"sequential->idx-map","sequential->idx-map",1128169208,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37399_37405,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37414], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.sequential__GT_idx_map),schema.core.__GT_FnSchema.call(null,output_schema37399_37405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37400_37406], null)));

tupelo.core.char__GT_sym = (function tupelo$core$char__GT_sym(ch){
return cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch));
});
tupelo.core.get_in_strict = (function tupelo$core$get_in_strict(data,path){
var result = cljs.core.get_in.call(null,data,path,new cljs.core.Keyword("tupelo.core","not-found","tupelo.core/not-found",-742110200));
if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword("tupelo.core","not-found","tupelo.core/not-found",-742110200))){
throw cljs.core.ex_info.call(null,"destruct(get-in-strict): value not found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"path","path",-188191168),path], null));
} else {
}

return result;
});
tupelo.core.destruct_tmpl_analyze = (function tupelo$core$destruct_tmpl_analyze(ctx){
var parsed = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"parsed","parsed",-819589156),ctx);
var path = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"path","path",-188191168),ctx);
var tmpl = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"tmpl","tmpl",784839148),ctx);
if(cljs.core.map_QMARK_.call(null,tmpl)){
var seq__37415 = cljs.core.seq.call(null,tmpl);
var chunk__37416 = null;
var count__37417 = (0);
var i__37418 = (0);
while(true){
if((i__37418 < count__37417)){
var entry = cljs.core._nth.call(null,chunk__37416,i__37418);
var vec__37425_37431 = entry;
var curr_key_37432 = cljs.core.nth.call(null,vec__37425_37431,(0),null);
var curr_val_37433 = cljs.core.nth.call(null,vec__37425_37431,(1),null);
var path_new_37434 = tupelo.core.append.call(null,path,curr_key_37432);
if((curr_val_37433 instanceof cljs.core.Symbol)){
var var_sym_37435 = ((cljs.core._EQ_.call(null,curr_val_37433,tupelo.core.char__GT_sym.call(null,"?")))?tupelo.core.kw__GT_sym.call(null,curr_key_37432):curr_val_37433);
cljs.core.swap_BANG_.call(null,parsed,tupelo.core.append,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path_new_37434,new cljs.core.Keyword(null,"name","name",1843675177),var_sym_37435], null));
} else {
tupelo.core.destruct_tmpl_analyze.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed,new cljs.core.Keyword(null,"path","path",-188191168),path_new_37434,new cljs.core.Keyword(null,"tmpl","tmpl",784839148),curr_val_37433], null));
}


var G__37436 = seq__37415;
var G__37437 = chunk__37416;
var G__37438 = count__37417;
var G__37439 = (i__37418 + (1));
seq__37415 = G__37436;
chunk__37416 = G__37437;
count__37417 = G__37438;
i__37418 = G__37439;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37415);
if(temp__5720__auto__){
var seq__37415__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37415__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__37415__$1);
var G__37440 = cljs.core.chunk_rest.call(null,seq__37415__$1);
var G__37441 = c__4649__auto__;
var G__37442 = cljs.core.count.call(null,c__4649__auto__);
var G__37443 = (0);
seq__37415 = G__37440;
chunk__37416 = G__37441;
count__37417 = G__37442;
i__37418 = G__37443;
continue;
} else {
var entry = cljs.core.first.call(null,seq__37415__$1);
var vec__37428_37444 = entry;
var curr_key_37445 = cljs.core.nth.call(null,vec__37428_37444,(0),null);
var curr_val_37446 = cljs.core.nth.call(null,vec__37428_37444,(1),null);
var path_new_37447 = tupelo.core.append.call(null,path,curr_key_37445);
if((curr_val_37446 instanceof cljs.core.Symbol)){
var var_sym_37448 = ((cljs.core._EQ_.call(null,curr_val_37446,tupelo.core.char__GT_sym.call(null,"?")))?tupelo.core.kw__GT_sym.call(null,curr_key_37445):curr_val_37446);
cljs.core.swap_BANG_.call(null,parsed,tupelo.core.append,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path_new_37447,new cljs.core.Keyword(null,"name","name",1843675177),var_sym_37448], null));
} else {
tupelo.core.destruct_tmpl_analyze.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed,new cljs.core.Keyword(null,"path","path",-188191168),path_new_37447,new cljs.core.Keyword(null,"tmpl","tmpl",784839148),curr_val_37446], null));
}


var G__37449 = cljs.core.next.call(null,seq__37415__$1);
var G__37450 = null;
var G__37451 = (0);
var G__37452 = (0);
seq__37415 = G__37449;
chunk__37416 = G__37450;
count__37417 = G__37451;
i__37418 = G__37452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,tmpl)){
return tupelo.core.destruct_tmpl_analyze.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"tmpl","tmpl",784839148),tupelo.core.sequential__GT_idx_map.call(null,tmpl)], null));
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"oops-44","oops-44",117364903));

}
}
});
/**
 * Return true if receive a form like either `(restruct)` or `(restruct info)` (i.e. either zero or one symbol args).
 */
tupelo.core.is_restruct_one_QMARK_ = (function tupelo$core$is_restruct_one_QMARK_(form){
return ((cljs.core.list_QMARK_.call(null,form)) && (((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,form))) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"restruct","restruct",-1508734123,null),cljs.core.first.call(null,form))))));
});
tupelo.core.destruct_impl = (function tupelo$core$destruct_impl(bindings,forms){
if((!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))))){
throw cljs.core.ex_info.call(null,"destruct: uneven number of bindings:",bindings);
} else {
}

if(cljs.core.empty_QMARK_.call(null,bindings)){
throw cljs.core.ex_info.call(null,"destruct: bindings empty:",bindings);
} else {
}

var binding_pairs = cljs.core.partition.call(null,(2),bindings);
var datas = cljs.core.mapv.call(null,cljs.core.first,binding_pairs);
var tmpls = cljs.core.mapv.call(null,cljs.core.second,binding_pairs);
var tmpls_parsed = cljs.core.vec.call(null,(function (){var iter__4622__auto__ = (function tupelo$core$destruct_impl_$_iter__37453(s__37454){
return (new cljs.core.LazySeq(null,(function (){
var s__37454__$1 = s__37454;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37454__$1);
if(temp__5720__auto__){
var s__37454__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37454__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37454__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37456 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37455 = (0);
while(true){
if((i__37455 < size__4621__auto__)){
var tmpl = cljs.core._nth.call(null,c__4620__auto__,i__37455);
cljs.core.chunk_append.call(null,b__37456,(function (){var parsed = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tupelo.core.destruct_tmpl_analyze.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tmpl","tmpl",784839148),tmpl], null));

return cljs.core.deref.call(null,parsed);
})());

var G__37509 = (i__37455 + (1));
i__37455 = G__37509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37456),tupelo$core$destruct_impl_$_iter__37453.call(null,cljs.core.chunk_rest.call(null,s__37454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37456),null);
}
} else {
var tmpl = cljs.core.first.call(null,s__37454__$2);
return cljs.core.cons.call(null,(function (){var parsed = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tupelo.core.destruct_tmpl_analyze.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tmpl","tmpl",784839148),tmpl], null));

return cljs.core.deref.call(null,parsed);
})(),tupelo$core$destruct_impl_$_iter__37453.call(null,cljs.core.rest.call(null,s__37454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,tmpls);
})());
var var_names_37510 = cljs.core.vec.call(null,(function (){var iter__4622__auto__ = (function tupelo$core$destruct_impl_$_iter__37457(s__37458){
return (new cljs.core.LazySeq(null,(function (){
var s__37458__$1 = s__37458;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37458__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var tmpl_parsed = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4618__auto__ = ((function (s__37458__$1,tmpl_parsed,xs__6277__auto__,temp__5720__auto__,binding_pairs,datas,tmpls,tmpls_parsed){
return (function tupelo$core$destruct_impl_$_iter__37457_$_iter__37459(s__37460){
return (new cljs.core.LazySeq(null,((function (s__37458__$1,tmpl_parsed,xs__6277__auto__,temp__5720__auto__,binding_pairs,datas,tmpls,tmpls_parsed){
return (function (){
var s__37460__$1 = s__37460;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__37460__$1);
if(temp__5720__auto____$1){
var s__37460__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37460__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37460__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37462 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37461 = (0);
while(true){
if((i__37461 < size__4621__auto__)){
var path_name_map = cljs.core._nth.call(null,c__4620__auto__,i__37461);
cljs.core.chunk_append.call(null,b__37462,tupelo.core.grab.call(null,new cljs.core.Keyword(null,"name","name",1843675177),path_name_map));

var G__37511 = (i__37461 + (1));
i__37461 = G__37511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37462),tupelo$core$destruct_impl_$_iter__37457_$_iter__37459.call(null,cljs.core.chunk_rest.call(null,s__37460__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37462),null);
}
} else {
var path_name_map = cljs.core.first.call(null,s__37460__$2);
return cljs.core.cons.call(null,tupelo.core.grab.call(null,new cljs.core.Keyword(null,"name","name",1843675177),path_name_map),tupelo$core$destruct_impl_$_iter__37457_$_iter__37459.call(null,cljs.core.rest.call(null,s__37460__$2)));
}
} else {
return null;
}
break;
}
});})(s__37458__$1,tmpl_parsed,xs__6277__auto__,temp__5720__auto__,binding_pairs,datas,tmpls,tmpls_parsed))
,null,null));
});})(s__37458__$1,tmpl_parsed,xs__6277__auto__,temp__5720__auto__,binding_pairs,datas,tmpls,tmpls_parsed))
;
var fs__4619__auto__ = cljs.core.seq.call(null,iterys__4618__auto__.call(null,tmpl_parsed));
if(fs__4619__auto__){
return cljs.core.concat.call(null,fs__4619__auto__,tupelo$core$destruct_impl_$_iter__37457.call(null,cljs.core.rest.call(null,s__37458__$1)));
} else {
var G__37512 = cljs.core.rest.call(null,s__37458__$1);
s__37458__$1 = G__37512;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,tmpls_parsed);
})());
if(cljs.core.not_EQ_.call(null,var_names_37510,cljs.core.distinct.call(null,var_names_37510))){
cljs.core.println.call(null,"destruct: var-names not unique",var_names_37510);

throw cljs.core.ex_info.call(null,"destruct: var-names not unique",var_names_37510);
} else {
}

var data_parsed_pairs = tupelo.core.zip.call(null,datas,tmpls_parsed);
var extraction_pairs = cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = (function tupelo$core$destruct_impl_$_iter__37463(s__37464){
return (new cljs.core.LazySeq(null,(function (){
var s__37464__$1 = s__37464;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37464__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__37469 = cljs.core.first.call(null,xs__6277__auto__);
var data = cljs.core.nth.call(null,vec__37469,(0),null);
var parsed = cljs.core.nth.call(null,vec__37469,(1),null);
var iterys__4618__auto__ = ((function (s__37464__$1,vec__37469,data,parsed,xs__6277__auto__,temp__5720__auto__,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed){
return (function tupelo$core$destruct_impl_$_iter__37463_$_iter__37465(s__37466){
return (new cljs.core.LazySeq(null,((function (s__37464__$1,vec__37469,data,parsed,xs__6277__auto__,temp__5720__auto__,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed){
return (function (){
var s__37466__$1 = s__37466;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__37466__$1);
if(temp__5720__auto____$1){
var s__37466__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37466__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37466__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37468 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37467 = (0);
while(true){
if((i__37467 < size__4621__auto__)){
var map__37472 = cljs.core._nth.call(null,c__4620__auto__,i__37467);
var map__37472__$1 = cljs.core.__destructure_map.call(null,map__37472);
var name = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.chunk_append.call(null,b__37468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","get-in-strict","tupelo.core/get-in-strict",1541864972,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,path,null,(1),null)))))], null));

var G__37513 = (i__37467 + (1));
i__37467 = G__37513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37468),tupelo$core$destruct_impl_$_iter__37463_$_iter__37465.call(null,cljs.core.chunk_rest.call(null,s__37466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37468),null);
}
} else {
var map__37473 = cljs.core.first.call(null,s__37466__$2);
var map__37473__$1 = cljs.core.__destructure_map.call(null,map__37473);
var name = cljs.core.get.call(null,map__37473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__37473__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","get-in-strict","tupelo.core/get-in-strict",1541864972,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,path,null,(1),null)))))], null),tupelo$core$destruct_impl_$_iter__37463_$_iter__37465.call(null,cljs.core.rest.call(null,s__37466__$2)));
}
} else {
return null;
}
break;
}
});})(s__37464__$1,vec__37469,data,parsed,xs__6277__auto__,temp__5720__auto__,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed))
,null,null));
});})(s__37464__$1,vec__37469,data,parsed,xs__6277__auto__,temp__5720__auto__,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed))
;
var fs__4619__auto__ = cljs.core.seq.call(null,iterys__4618__auto__.call(null,parsed));
if(fs__4619__auto__){
return cljs.core.concat.call(null,fs__4619__auto__,tupelo$core$destruct_impl_$_iter__37463.call(null,cljs.core.rest.call(null,s__37464__$1)));
} else {
var G__37514 = cljs.core.rest.call(null,s__37464__$1);
s__37464__$1 = G__37514;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,data_parsed_pairs);
})());
var construct_one_pairs = cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = (function tupelo$core$destruct_impl_$_iter__37474(s__37475){
return (new cljs.core.LazySeq(null,(function (){
var s__37475__$1 = s__37475;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37475__$1);
if(temp__5720__auto__){
var s__37475__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37475__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37475__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37477 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37476 = (0);
while(true){
if((i__37476 < size__4621__auto__)){
var vec__37478 = cljs.core._nth.call(null,c__4620__auto__,i__37476);
var data = cljs.core.nth.call(null,vec__37478,(0),null);
var parsed = cljs.core.nth.call(null,vec__37478,(1),null);
cljs.core.chunk_append.call(null,b__37477,cljs.core.PersistentArrayMap.createAsIfByAssoc([data,cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = ((function (i__37476,vec__37478,data,parsed,c__4620__auto__,size__4621__auto__,b__37477,s__37475__$2,temp__5720__auto__,extraction_pairs,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed){
return (function tupelo$core$destruct_impl_$_iter__37474_$_iter__37481(s__37482){
return (new cljs.core.LazySeq(null,((function (i__37476,vec__37478,data,parsed,c__4620__auto__,size__4621__auto__,b__37477,s__37475__$2,temp__5720__auto__,extraction_pairs,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed){
return (function (){
var s__37482__$1 = s__37482;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__37482__$1);
if(temp__5720__auto____$1){
var s__37482__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37482__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first.call(null,s__37482__$2);
var size__4621__auto____$1 = cljs.core.count.call(null,c__4620__auto____$1);
var b__37484 = cljs.core.chunk_buffer.call(null,size__4621__auto____$1);
if((function (){var i__37483 = (0);
while(true){
if((i__37483 < size__4621__auto____$1)){
var map__37485 = cljs.core._nth.call(null,c__4620__auto____$1,i__37483);
var map__37485__$1 = cljs.core.__destructure_map.call(null,map__37485);
var name = cljs.core.get.call(null,map__37485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__37485__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.chunk_append.call(null,b__37484,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc-in","cljs.core/assoc-in",-1057213350,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)))))));

var G__37515 = (i__37483 + (1));
i__37483 = G__37515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37484),tupelo$core$destruct_impl_$_iter__37474_$_iter__37481.call(null,cljs.core.chunk_rest.call(null,s__37482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37484),null);
}
} else {
var map__37486 = cljs.core.first.call(null,s__37482__$2);
var map__37486__$1 = cljs.core.__destructure_map.call(null,map__37486);
var name = cljs.core.get.call(null,map__37486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__37486__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc-in","cljs.core/assoc-in",-1057213350,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)))))),tupelo$core$destruct_impl_$_iter__37474_$_iter__37481.call(null,cljs.core.rest.call(null,s__37482__$2)));
}
} else {
return null;
}
break;
}
});})(i__37476,vec__37478,data,parsed,c__4620__auto__,size__4621__auto__,b__37477,s__37475__$2,temp__5720__auto__,extraction_pairs,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed))
,null,null));
});})(i__37476,vec__37478,data,parsed,c__4620__auto__,size__4621__auto__,b__37477,s__37475__$2,temp__5720__auto__,extraction_pairs,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed))
;
return iter__4622__auto__.call(null,parsed);
})())]));

var G__37516 = (i__37476 + (1));
i__37476 = G__37516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37477),tupelo$core$destruct_impl_$_iter__37474.call(null,cljs.core.chunk_rest.call(null,s__37475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37477),null);
}
} else {
var vec__37487 = cljs.core.first.call(null,s__37475__$2);
var data = cljs.core.nth.call(null,vec__37487,(0),null);
var parsed = cljs.core.nth.call(null,vec__37487,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([data,cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = ((function (vec__37487,data,parsed,s__37475__$2,temp__5720__auto__,extraction_pairs,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed){
return (function tupelo$core$destruct_impl_$_iter__37474_$_iter__37490(s__37491){
return (new cljs.core.LazySeq(null,(function (){
var s__37491__$1 = s__37491;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__37491__$1);
if(temp__5720__auto____$1){
var s__37491__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37491__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37491__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37493 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37492 = (0);
while(true){
if((i__37492 < size__4621__auto__)){
var map__37494 = cljs.core._nth.call(null,c__4620__auto__,i__37492);
var map__37494__$1 = cljs.core.__destructure_map.call(null,map__37494);
var name = cljs.core.get.call(null,map__37494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__37494__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.chunk_append.call(null,b__37493,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc-in","cljs.core/assoc-in",-1057213350,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)))))));

var G__37517 = (i__37492 + (1));
i__37492 = G__37517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37493),tupelo$core$destruct_impl_$_iter__37474_$_iter__37490.call(null,cljs.core.chunk_rest.call(null,s__37491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37493),null);
}
} else {
var map__37495 = cljs.core.first.call(null,s__37491__$2);
var map__37495__$1 = cljs.core.__destructure_map.call(null,map__37495);
var name = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc-in","cljs.core/assoc-in",-1057213350,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)))))),tupelo$core$destruct_impl_$_iter__37474_$_iter__37490.call(null,cljs.core.rest.call(null,s__37491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__37487,data,parsed,s__37475__$2,temp__5720__auto__,extraction_pairs,data_parsed_pairs,binding_pairs,datas,tmpls,tmpls_parsed))
;
return iter__4622__auto__.call(null,parsed);
})())]),tupelo$core$destruct_impl_$_iter__37474.call(null,cljs.core.rest.call(null,s__37475__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,data_parsed_pairs);
})());
var construct_all_pairs = cljs.core.apply.call(null,tupelo.core.glue,cljs.core.vals.call(null,construct_one_pairs));
var restruct_one_defs = cljs.core.apply.call(null,tupelo.core.glue,(function (){var iter__4622__auto__ = (function tupelo$core$destruct_impl_$_iter__37496(s__37497){
return (new cljs.core.LazySeq(null,(function (){
var s__37497__$1 = s__37497;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37497__$1);
if(temp__5720__auto__){
var s__37497__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37497__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37497__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37499 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37498 = (0);
while(true){
if((i__37498 < size__4621__auto__)){
var vec__37500 = cljs.core._nth.call(null,c__4620__auto__,i__37498);
var data = cljs.core.nth.call(null,vec__37500,(0),null);
var construction_pairs = cljs.core.nth.call(null,vec__37500,(1),null);
cljs.core.chunk_append.call(null,b__37499,cljs.core.PersistentArrayMap.createAsIfByAssoc([data,cljs.core.apply.call(null,cljs.core.list,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,construction_pairs)))),null,(1),null)),(new cljs.core.List(null,data,null,(1),null))))),null,(1),null)))))))]));

var G__37518 = (i__37498 + (1));
i__37498 = G__37518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37499),tupelo$core$destruct_impl_$_iter__37496.call(null,cljs.core.chunk_rest.call(null,s__37497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37499),null);
}
} else {
var vec__37503 = cljs.core.first.call(null,s__37497__$2);
var data = cljs.core.nth.call(null,vec__37503,(0),null);
var construction_pairs = cljs.core.nth.call(null,vec__37503,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([data,cljs.core.apply.call(null,cljs.core.list,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,construction_pairs)))),null,(1),null)),(new cljs.core.List(null,data,null,(1),null))))),null,(1),null)))))))]),tupelo$core$destruct_impl_$_iter__37496.call(null,cljs.core.rest.call(null,s__37497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,construct_one_pairs);
})());
var restruct_only_def = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,datas)))?(function (){var vec__37506 = tupelo.core.only.call(null,construct_one_pairs);
var data = cljs.core.nth.call(null,vec__37506,(0),null);
var construction_pairs = cljs.core.nth.call(null,vec__37506,(1),null);
return cljs.core.apply.call(null,cljs.core.list,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,construction_pairs)))),null,(1),null)),(new cljs.core.List(null,data,null,(1),null))))),null,(1),null)))))));
})():null);
var restruct_all_def = cljs.core.apply.call(null,cljs.core.list,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,construct_all_pairs)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tupelo.core","vals->map","tupelo.core/vals->map",2041713135,null),null,(1),null)),datas))),null,(1),null))))),null,(1),null)))))));
var res_raw = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,extraction_pairs)))),null,(1),null)),forms)));
var res_all = clojure.walk.postwalk.call(null,(function (form){
if(cljs.core.not_EQ_.call(null,form,cljs.core.list(new cljs.core.Symbol(null,"restruct-all","restruct-all",-1349671391,null)))){
return form;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restruct-fn","restruct-fn",-816441453,null),restruct_all_def,new cljs.core.Symbol(null,"result","result",-1239343558,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"restruct-fn","restruct-fn",-816441453,null),null,(1),null))], null),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null));
}
}),res_raw);
var res_one = clojure.walk.postwalk.call(null,(function (form){
if((!(tupelo.core.is_restruct_one_QMARK_.call(null,form)))){
return form;
} else {
var restr_one_data = cljs.core.second.call(null,form);
var restr_one_def = cljs.core.get.call(null,restruct_one_defs,restr_one_data,new cljs.core.Keyword("tupelo.core","not-found","tupelo.core/not-found",-742110200));
return (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restruct-fn","restruct-fn",-816441453,null),restr_one_def,new cljs.core.Symbol(null,"result","result",-1239343558,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"restruct-fn","restruct-fn",-816441453,null),null,(1),null))], null),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null));
}
}),res_all);
var res_only = clojure.walk.postwalk.call(null,(function (form){
if(cljs.core.not_EQ_.call(null,form,cljs.core.list(new cljs.core.Symbol(null,"restruct","restruct",-1508734123,null)))){
return form;
} else {
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,datas))){
cljs.core.println.call(null,"(restruct) error: more than 1 data src present",datas);

throw cljs.core.ex_info.call(null,"restruct:  aborting...",new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,datas)));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"restruct-fn","restruct-fn",-816441453,null),restruct_only_def,new cljs.core.Symbol(null,"result","result",-1239343558,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"restruct-fn","restruct-fn",-816441453,null),null,(1),null))], null),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null));
}
}
}),res_one);
return res_only;
});
var ret__4878__auto___37523 = (function (){
/**
 * Natural destructuring:
 * 
 *     (let [data {:a 1
 *                 :b {:c 3
 *                     :d 4}}]
 *       ...
 *       (destruct [data {:a ?
 *                        :b {:c ?}}]
 *       ...
 * 
 * then can use local values  a=1, c=3.  With vector data:
 * 
 *     (let [data [1 2 3 4 5]]
 *       ...
 *       (destruct [data [a b c]]
 *        ...
 * 
 * then can use local values a=1 b=2 c=3.  Can use `(restruct)`, `(restruct data)`, or `(restruct-all)`
 * to re-structure & return original data shape using current values.
 */
tupelo.core.destruct = (function tupelo$core$destruct(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37524 = arguments.length;
var i__4830__auto___37525 = (0);
while(true){
if((i__4830__auto___37525 < len__4829__auto___37524)){
args__4835__auto__.push((arguments[i__4830__auto___37525]));

var G__37526 = (i__4830__auto___37525 + (1));
i__4830__auto___37525 = G__37526;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return tupelo.core.destruct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(tupelo.core.destruct.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,forms){
return tupelo.core.destruct_impl.call(null,bindings,forms);
}));

(tupelo.core.destruct.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tupelo.core.destruct.cljs$lang$applyTo = (function (seq37519){
var G__37520 = cljs.core.first.call(null,seq37519);
var seq37519__$1 = cljs.core.next.call(null,seq37519);
var G__37521 = cljs.core.first.call(null,seq37519__$1);
var seq37519__$2 = cljs.core.next.call(null,seq37519__$1);
var G__37522 = cljs.core.first.call(null,seq37519__$2);
var seq37519__$3 = cljs.core.next.call(null,seq37519__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37520,G__37521,G__37522,seq37519__$3);
}));

return null;
})()
;
(tupelo.core.destruct.cljs$lang$macro = true);

/**
 * within a `(destruct [<data> <shape>] ...)` form, `(restruct)` or `(restruct <data>)`
 * causes re-structuring & return of original data shape using current values.
 */
tupelo.core.restruct = (function tupelo$core$restruct(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37528 = arguments.length;
var i__4830__auto___37529 = (0);
while(true){
if((i__4830__auto___37529 < len__4829__auto___37528)){
args__4835__auto__.push((arguments[i__4830__auto___37529]));

var G__37530 = (i__4830__auto___37529 + (1));
i__4830__auto___37529 = G__37530;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.restruct.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.restruct.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.call(null,"restruct: illegal usage - should never get here.",args);
}));

(tupelo.core.restruct.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.restruct.cljs$lang$applyTo = (function (seq37527){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37527));
}));

/**
 * Within a form
 * 
 *    (destruct [data-1 <shape-1>
 *               data-2 <shape-2] ...)
 * 
 * causes re-structuring & return of original data shapes using
 * current values as with
 * 
 *      (vals->map data-1 data-2 ...)
 *   
 */
tupelo.core.restruct_all = (function tupelo$core$restruct_all(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37532 = arguments.length;
var i__4830__auto___37533 = (0);
while(true){
if((i__4830__auto___37533 < len__4829__auto___37532)){
args__4835__auto__.push((arguments[i__4830__auto___37533]));

var G__37534 = (i__4830__auto___37533 + (1));
i__4830__auto___37533 = G__37534;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return tupelo.core.restruct_all.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(tupelo.core.restruct_all.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.call(null,"restruct-all: illegal usage - should never get here.",args);
}));

(tupelo.core.restruct_all.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tupelo.core.restruct_all.cljs$lang$applyTo = (function (seq37531){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37531));
}));

var ufv___37548 = schema.utils.use_fn_validation;
var output_schema37537_37549 = schema.core.Any;
var input_schema37538_37550 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37539_37551 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37538_37550);
}),null));
var output_checker37540_37552 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37537_37549);
}),null));
var ret__26117__auto___37553 = /**
 * Inputs: [ctx :- tsk/KeyMap pattern :- s/Any value :- s/Any]
 */
tupelo.core.wild_match_impl = (function tupelo$core$wild_match_impl(G__37541,G__37542,G__37543){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37548);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37541,G__37542,G__37543], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"wild-match-impl","wild-match-impl",862515592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),input_schema37538_37550,cljs.core.deref.call(null,input_checker37539_37551),args__24531__auto___37554);
} else {
var temp__5720__auto___37555 = cljs.core.deref.call(null,input_checker37539_37551).call(null,args__24531__auto___37554);
if(cljs.core.truth_(temp__5720__auto___37555)){
var error__24532__auto___37556 = temp__5720__auto___37555;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"wild-match-impl","wild-match-impl",862515592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37538_37550,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37554,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37556], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var ctx = G__37541;
var pattern = G__37542;
var value = G__37543;
while(true){
var submap_ok = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"submap-ok","submap-ok",883555339),ctx);
var subset_ok = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"subset-ok","subset-ok",312663394),ctx);
var subvec_ok = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"subvec-ok","subvec-ok",562564885),ctx);
var wildcard_ok = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"wildcard-ok","wildcard-ok",1225914394),ctx);
var result = tupelo.core.truthy_QMARK_.call(null,((cljs.core._EQ_.call(null,pattern,value))?true:(cljs.core.truth_((function (){var and__4221__auto__ = wildcard_ok;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.call(null,pattern,new cljs.core.Keyword(null,"*","*",-1294732318));
} else {
return and__4221__auto__;
}
})())?true:((((cljs.core.map_QMARK_.call(null,pattern)) && (cljs.core.map_QMARK_.call(null,value))))?(function (){var keyset_pat = cljs.core.set.call(null,cljs.core.keys.call(null,pattern));
var keyset_val = cljs.core.set.call(null,cljs.core.keys.call(null,value));
var and__4221__auto__ = (function (){var or__4223__auto__ = cljs.core._EQ_.call(null,keyset_pat,keyset_val);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var and__4221__auto__ = submap_ok;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.set.subset_QMARK_.call(null,keyset_pat,keyset_val);
} else {
return and__4221__auto__;
}
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,cljs.core.vec.call(null,(function (){var iter__4622__auto__ = ((function (and__4221__auto__,keyset_pat,keyset_val,submap_ok,subset_ok,subvec_ok,wildcard_ok,validate__24530__auto__,ufv___37548,output_schema37537_37549,input_schema37538_37550,input_checker37539_37551,output_checker37540_37552){
return (function tupelo$core$wild_match_impl_$_iter__37544(s__37545){
return (new cljs.core.LazySeq(null,(function (){
var s__37545__$1 = s__37545;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37545__$1);
if(temp__5720__auto__){
var s__37545__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37545__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37545__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37547 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37546 = (0);
while(true){
if((i__37546 < size__4621__auto__)){
var key = cljs.core._nth.call(null,c__4620__auto__,i__37546);
cljs.core.chunk_append.call(null,b__37547,tupelo.core.wild_match_impl.call(null,ctx,tupelo.core.grab.call(null,key,pattern),tupelo.core.grab.call(null,key,value)));

var G__37557 = (i__37546 + (1));
i__37546 = G__37557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37547),tupelo$core$wild_match_impl_$_iter__37544.call(null,cljs.core.chunk_rest.call(null,s__37545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37547),null);
}
} else {
var key = cljs.core.first.call(null,s__37545__$2);
return cljs.core.cons.call(null,tupelo.core.wild_match_impl.call(null,ctx,tupelo.core.grab.call(null,key,pattern),tupelo.core.grab.call(null,key,value)),tupelo$core$wild_match_impl_$_iter__37544.call(null,cljs.core.rest.call(null,s__37545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(and__4221__auto__,keyset_pat,keyset_val,submap_ok,subset_ok,subvec_ok,wildcard_ok,validate__24530__auto__,ufv___37548,output_schema37537_37549,input_schema37538_37550,input_checker37539_37551,output_checker37540_37552))
;
return iter__4622__auto__.call(null,keyset_pat);
})()));
} else {
return and__4221__auto__;
}
})():((((cljs.core.set_QMARK_.call(null,pattern)) && (cljs.core.set_QMARK_.call(null,value))))?(function (){var or__4223__auto__ = cljs.core._EQ_.call(null,pattern,value);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var and__4221__auto__ = subset_ok;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.set.subset_QMARK_.call(null,pattern,value);
} else {
return and__4221__auto__;
}
}
})():((((cljs.core.coll_QMARK_.call(null,pattern)) && (cljs.core.coll_QMARK_.call(null,value))))?(function (){var num_pat = cljs.core.count.call(null,pattern);
var num_val = cljs.core.count.call(null,value);
var lengths_ok_QMARK_ = (function (){var or__4223__auto__ = cljs.core._EQ_.call(null,num_pat,num_val);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var and__4221__auto__ = subvec_ok;
if(cljs.core.truth_(and__4221__auto__)){
return (num_pat <= num_val);
} else {
return and__4221__auto__;
}
}
})();
var and__4221__auto__ = lengths_ok_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,cljs.core.mapv.call(null,((function (and__4221__auto__,num_pat,num_val,lengths_ok_QMARK_,submap_ok,subset_ok,subvec_ok,wildcard_ok,validate__24530__auto__,ufv___37548,output_schema37537_37549,input_schema37538_37550,input_checker37539_37551,output_checker37540_37552){
return (function (p1__37535_SHARP_,p2__37536_SHARP_){
return tupelo.core.wild_match_impl.call(null,ctx,p1__37535_SHARP_,p2__37536_SHARP_);
});})(and__4221__auto__,num_pat,num_val,lengths_ok_QMARK_,submap_ok,subset_ok,subvec_ok,wildcard_ok,validate__24530__auto__,ufv___37548,output_schema37537_37549,input_schema37538_37550,input_checker37539_37551,output_checker37540_37552))
,pattern,value));
} else {
return and__4221__auto__;
}
})():false
))))));
return result;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"wild-match-impl","wild-match-impl",862515592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),output_schema37537_37549,cljs.core.deref.call(null,output_checker37540_37552),o__24533__auto__);
} else {
var temp__5720__auto___37558 = cljs.core.deref.call(null,output_checker37540_37552).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37558)){
var error__24532__auto___37559 = temp__5720__auto___37558;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"wild-match-impl","wild-match-impl",862515592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37559)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37537_37549,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37559], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.wild_match_impl),schema.core.__GT_FnSchema.call(null,output_schema37537_37549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37538_37550], null)));

tupelo.core.wild_match_root_QMARK_ = (function tupelo$core$wild_match_root_QMARK_(ctx_in){
var ctx = tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"submap-ok","submap-ok",883555339),false,new cljs.core.Keyword(null,"subset-ok","subset-ok",312663394),false,new cljs.core.Keyword(null,"subvec-ok","subvec-ok",562564885),false,new cljs.core.Keyword(null,"wildcard-ok","wildcard-ok",1225914394),true], null),ctx_in);
var pattern = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),ctx);
var values = tupelo.core.grab.call(null,new cljs.core.Keyword(null,"values","values",372645556),ctx);
return cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,(function (){var iter__4622__auto__ = (function tupelo$core$wild_match_root_QMARK__$_iter__37560(s__37561){
return (new cljs.core.LazySeq(null,(function (){
var s__37561__$1 = s__37561;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37561__$1);
if(temp__5720__auto__){
var s__37561__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37561__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37561__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37563 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37562 = (0);
while(true){
if((i__37562 < size__4621__auto__)){
var value = cljs.core._nth.call(null,c__4620__auto__,i__37562);
cljs.core.chunk_append.call(null,b__37563,tupelo.core.wild_match_impl.call(null,ctx,pattern,value));

var G__37564 = (i__37562 + (1));
i__37562 = G__37564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37563),tupelo$core$wild_match_root_QMARK__$_iter__37560.call(null,cljs.core.chunk_rest.call(null,s__37561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37563),null);
}
} else {
var value = cljs.core.first.call(null,s__37561__$2);
return cljs.core.cons.call(null,tupelo.core.wild_match_impl.call(null,ctx,pattern,value),tupelo$core$wild_match_root_QMARK__$_iter__37560.call(null,cljs.core.rest.call(null,s__37561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,values);
})());
});
if((typeof tupelo !== 'undefined') && (typeof tupelo.core !== 'undefined') && (typeof tupelo.core.wild_match_QMARK_ !== 'undefined')){
} else {
/**
 * Returns true if a pattern is matched by one or more values.  The special keyword :* (colon-star)
 * in the pattern serves as a wildcard value.  Note that a wildcald can match either a primitive or a
 * composite value: Classic usage:
 * 
 *     (wild-match? pattern & values)
 * 
 * examples:
 * 
 *     (wild-match? {:a :* :b 2}
 *                  {:a 1  :b 2})         ;=> true
 * 
 *     (wild-match? [1 :* 3]
 *                  [1 2  3]
 *                  [1 9  3] ))           ;=> true
 * 
 *     (wild-match? {:a :*       :b 2}
 *                  {:a [1 2 3]  :b 2})   ;=> true
 * 
 * wild-match? also accepts a context map; usage:
 * 
 *     (wild-match? ctx)
 * 
 * example (default values shown):
 * 
 *     (wild-match?  { :submap-ok   false
 *                     :subset-ok   false
 *                     :subvec-ok   false
 *                     :wildcard-ok true
 *                     :pattern     <required param>
 *                     :values    [ <patttern-spec>+ ]   ; vector of 1 or more required
 *                   } )
 */
tupelo.core.wild_match_QMARK_ = (function (){var method_table__4712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tupelo.core","wild-match?"),(function() { 
var tupelo$core$wild_match_dispatch_fn__delegate = function (args){
if(((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))) && (cljs.core.map_QMARK_.call(null,tupelo.core.only.call(null,args))))){
return new cljs.core.Keyword(null,"ctx","ctx",-493610118);
} else {
return new cljs.core.Keyword(null,"classic","classic",-599706370);
}
};
var tupelo$core$wild_match_dispatch_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37565__i = 0, G__37565__a = new Array(arguments.length -  0);
while (G__37565__i < G__37565__a.length) {G__37565__a[G__37565__i] = arguments[G__37565__i + 0]; ++G__37565__i;}
  args = new cljs.core.IndexedSeq(G__37565__a,0,null);
} 
return tupelo$core$wild_match_dispatch_fn__delegate.call(this,args);};
tupelo$core$wild_match_dispatch_fn.cljs$lang$maxFixedArity = 0;
tupelo$core$wild_match_dispatch_fn.cljs$lang$applyTo = (function (arglist__37566){
var args = cljs.core.seq(arglist__37566);
return tupelo$core$wild_match_dispatch_fn__delegate(args);
});
tupelo$core$wild_match_dispatch_fn.cljs$core$IFn$_invoke$arity$variadic = tupelo$core$wild_match_dispatch_fn__delegate;
return tupelo$core$wild_match_dispatch_fn;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
cljs.core._add_method.call(null,tupelo.core.wild_match_QMARK_,new cljs.core.Keyword(null,"ctx","ctx",-493610118),(function (ctx){
return tupelo.core.wild_match_root_QMARK_.call(null,ctx);
}));
cljs.core._add_method.call(null,tupelo.core.wild_match_QMARK_,new cljs.core.Keyword(null,"classic","classic",-599706370),(function() { 
var G__37567__delegate = function (pattern,values){
var value__31328__auto___37568 = (function (){
return (cljs.core.count.call(null,values) > (0));
});
if(tupelo.core.truthy_QMARK_.call(null,value__31328__auto___37568)){
} else {
throw cljs.core.ex_info.call(null,"verification failed  ",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"values","values",2013177083,null)))));
}

return tupelo.core.wild_match_root_QMARK_.call(null,tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),values], null)));
};
var G__37567 = function (pattern,var_args){
var values = null;
if (arguments.length > 1) {
var G__37569__i = 0, G__37569__a = new Array(arguments.length -  1);
while (G__37569__i < G__37569__a.length) {G__37569__a[G__37569__i] = arguments[G__37569__i + 1]; ++G__37569__i;}
  values = new cljs.core.IndexedSeq(G__37569__a,0,null);
} 
return G__37567__delegate.call(this,pattern,values);};
G__37567.cljs$lang$maxFixedArity = 1;
G__37567.cljs$lang$applyTo = (function (arglist__37570){
var pattern = cljs.core.first(arglist__37570);
var values = cljs.core.rest(arglist__37570);
return G__37567__delegate(pattern,values);
});
G__37567.cljs$core$IFn$_invoke$arity$variadic = G__37567__delegate;
return G__37567;
})()
);
/**
 * Returns true if the first arg is (recursively) a subset/submap/subvec of the 2nd arg
 */
tupelo.core.submatch_QMARK_ = (function tupelo$core$submatch_QMARK_(smaller,larger){
var ctx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"submap-ok","submap-ok",883555339),true,new cljs.core.Keyword(null,"subset-ok","subset-ok",312663394),true,new cljs.core.Keyword(null,"subvec-ok","subvec-ok",562564885),true,new cljs.core.Keyword(null,"wildcard-ok","wildcard-ok",1225914394),false,new cljs.core.Keyword(null,"pattern","pattern",242135423),smaller,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [larger], null)], null);
return tupelo.core.wild_match_QMARK_.call(null,ctx);
});
/**
 * Simple wrapper for wild-match? where all types of sub-matching are enabled.
 */
tupelo.core.wild_submatch_QMARK_ = (function tupelo$core$wild_submatch_QMARK_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37573 = arguments.length;
var i__4830__auto___37574 = (0);
while(true){
if((i__4830__auto___37574 < len__4829__auto___37573)){
args__4835__auto__.push((arguments[i__4830__auto___37574]));

var G__37575 = (i__4830__auto___37574 + (1));
i__4830__auto___37574 = G__37575;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.wild_submatch_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.wild_submatch_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (pattern,values){
var ctx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"submap-ok","submap-ok",883555339),true,new cljs.core.Keyword(null,"subset-ok","subset-ok",312663394),true,new cljs.core.Keyword(null,"subvec-ok","subvec-ok",562564885),true,new cljs.core.Keyword(null,"wildcard-ok","wildcard-ok",1225914394),true,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"values","values",372645556),values], null);
return tupelo.core.wild_match_QMARK_.call(null,ctx);
}));

(tupelo.core.wild_submatch_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.wild_submatch_QMARK_.cljs$lang$applyTo = (function (seq37571){
var G__37572 = cljs.core.first.call(null,seq37571);
var seq37571__$1 = cljs.core.next.call(null,seq37571);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37572,seq37571__$1);
}));

var ufv___37582 = schema.utils.use_fn_validation;
var output_schema37577_37583 = schema.core.Bool;
var input_schema37578_37584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"item","item",1889905329,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37579_37585 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37578_37584);
}),null));
var output_checker37580_37586 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37577_37583);
}),null));
var ret__26117__auto___37587 = /**
 * Inputs: [item :- s/Any]
 *   Returns: s/Bool
 * 
 *   Returns true if any element in a nested collection is the wildcard :*
 */
tupelo.core.wild_item_QMARK_ = (function tupelo$core$wild_item_QMARK_(G__37581){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37582);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37581], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"wild-item?","wild-item?",1496065929,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any element in a nested collection is the wildcard :*"], null)),input_schema37578_37584,cljs.core.deref.call(null,input_checker37579_37585),args__24531__auto___37588);
} else {
var temp__5720__auto___37589 = cljs.core.deref.call(null,input_checker37579_37585).call(null,args__24531__auto___37588);
if(cljs.core.truth_(temp__5720__auto___37589)){
var error__24532__auto___37590 = temp__5720__auto___37589;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"wild-item?","wild-item?",1496065929,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any element in a nested collection is the wildcard :*"], null)),cljs.core.pr_str.call(null,error__24532__auto___37590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37578_37584,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37588,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37590], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var item = G__37581;
while(true){
return tupelo.core.has_some_QMARK_.call(null,((function (validate__24530__auto__,ufv___37582,output_schema37577_37583,input_schema37578_37584,input_checker37579_37585,output_checker37580_37586){
return (function (p1__37576_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),p1__37576_SHARP_);
});})(validate__24530__auto__,ufv___37582,output_schema37577_37583,input_schema37578_37584,input_checker37579_37585,output_checker37580_37586))
,tupelo.core.unnest.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)));
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"wild-item?","wild-item?",1496065929,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any element in a nested collection is the wildcard :*"], null)),output_schema37577_37583,cljs.core.deref.call(null,output_checker37580_37586),o__24533__auto__);
} else {
var temp__5720__auto___37591 = cljs.core.deref.call(null,output_checker37580_37586).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37591)){
var error__24532__auto___37592 = temp__5720__auto___37591;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"wild-item?","wild-item?",1496065929,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any element in a nested collection is the wildcard :*"], null)),cljs.core.pr_str.call(null,error__24532__auto___37592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37577_37583,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37592], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.wild_item_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema37577_37583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37578_37584], null)));

tupelo.core.set_match_impl = (function tupelo$core$set_match_impl(ctx,pattern,data){
var or__4223__auto__ = cljs.core._EQ_.call(null,pattern,new cljs.core.Keyword(null,"*","*",-1294732318));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = cljs.core._EQ_.call(null,pattern,data);
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
if(cljs.core.empty_QMARK_.call(null,pattern)){
return cljs.core.empty_QMARK_.call(null,data);
} else {
var sub_pat = tupelo.core.xfirst.call(null,cljs.core.seq.call(null,pattern));
var pattern_new = clojure.set.difference.call(null,pattern,cljs.core.PersistentHashSet.createAsIfByAssoc([sub_pat]));
if(tupelo.core.wild_item_QMARK_.call(null,sub_pat)){
var items = cljs.core.seq.call(null,data);
while(true){
if(cljs.core.empty_QMARK_.call(null,items)){
return false;
} else {
var item = tupelo.core.xfirst.call(null,items);
var data_new = clojure.set.difference.call(null,data,cljs.core.PersistentHashSet.createAsIfByAssoc([item]));
if(cljs.core.truth_((function (){var and__4221__auto__ = tupelo.core.set_match_impl.call(null,ctx,sub_pat,item);
if(cljs.core.truth_(and__4221__auto__)){
return tupelo.core.set_match_impl.call(null,ctx,pattern_new,data_new);
} else {
return and__4221__auto__;
}
})())){
return true;
} else {
var G__37593 = tupelo.core.xrest.call(null,items);
items = G__37593;
continue;
}
}
break;
}
} else {
var and__4221__auto__ = cljs.core.contains_QMARK_.call(null,data,sub_pat);
if(and__4221__auto__){
var data_new = clojure.set.difference.call(null,data,cljs.core.PersistentHashSet.createAsIfByAssoc([sub_pat]));
return tupelo.core.set_match_impl.call(null,ctx,pattern_new,data_new);
} else {
return and__4221__auto__;
}
}
}
}
}
});
tupelo.core.set_match_ctx_QMARK_ = (function tupelo$core$set_match_ctx_QMARK_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37601 = arguments.length;
var i__4830__auto___37602 = (0);
while(true){
if((i__4830__auto___37602 < len__4829__auto___37601)){
args__4835__auto__.push((arguments[i__4830__auto___37602]));

var G__37603 = (i__4830__auto___37602 + (1));
i__4830__auto___37602 = G__37603;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return tupelo.core.set_match_ctx_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(tupelo.core.set_match_ctx_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx_in,pattern,values){
var ctx = tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subset-ok","subset-ok",312663394),false], null),ctx_in);
return cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,(function (){var iter__4622__auto__ = (function tupelo$core$iter__37597(s__37598){
return (new cljs.core.LazySeq(null,(function (){
var s__37598__$1 = s__37598;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37598__$1);
if(temp__5720__auto__){
var s__37598__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37598__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37598__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37600 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37599 = (0);
while(true){
if((i__37599 < size__4621__auto__)){
var value = cljs.core._nth.call(null,c__4620__auto__,i__37599);
cljs.core.chunk_append.call(null,b__37600,tupelo.core.set_match_impl.call(null,ctx,pattern,value));

var G__37604 = (i__37599 + (1));
i__37599 = G__37604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37600),tupelo$core$iter__37597.call(null,cljs.core.chunk_rest.call(null,s__37598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37600),null);
}
} else {
var value = cljs.core.first.call(null,s__37598__$2);
return cljs.core.cons.call(null,tupelo.core.set_match_impl.call(null,ctx,pattern,value),tupelo$core$iter__37597.call(null,cljs.core.rest.call(null,s__37598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,values);
})());
}));

(tupelo.core.set_match_ctx_QMARK_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tupelo.core.set_match_ctx_QMARK_.cljs$lang$applyTo = (function (seq37594){
var G__37595 = cljs.core.first.call(null,seq37594);
var seq37594__$1 = cljs.core.next.call(null,seq37594);
var G__37596 = cljs.core.first.call(null,seq37594__$1);
var seq37594__$2 = cljs.core.next.call(null,seq37594__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37595,G__37596,seq37594__$2);
}));

tupelo.core.set_match_QMARK_ = (function tupelo$core$set_match_QMARK_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37611 = arguments.length;
var i__4830__auto___37612 = (0);
while(true){
if((i__4830__auto___37612 < len__4829__auto___37611)){
args__4835__auto__.push((arguments[i__4830__auto___37612]));

var G__37613 = (i__4830__auto___37612 + (1));
i__4830__auto___37612 = G__37613;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return tupelo.core.set_match_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(tupelo.core.set_match_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (pattern,values){
return cljs.core.every_QMARK_.call(null,tupelo.core.truthy_QMARK_,(function (){var iter__4622__auto__ = (function tupelo$core$iter__37607(s__37608){
return (new cljs.core.LazySeq(null,(function (){
var s__37608__$1 = s__37608;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37608__$1);
if(temp__5720__auto__){
var s__37608__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37608__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37608__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37610 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37609 = (0);
while(true){
if((i__37609 < size__4621__auto__)){
var value = cljs.core._nth.call(null,c__4620__auto__,i__37609);
cljs.core.chunk_append.call(null,b__37610,tupelo.core.set_match_impl.call(null,cljs.core.PersistentArrayMap.EMPTY,pattern,value));

var G__37614 = (i__37609 + (1));
i__37609 = G__37614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37610),tupelo$core$iter__37607.call(null,cljs.core.chunk_rest.call(null,s__37608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37610),null);
}
} else {
var value = cljs.core.first.call(null,s__37608__$2);
return cljs.core.cons.call(null,tupelo.core.set_match_impl.call(null,cljs.core.PersistentArrayMap.EMPTY,pattern,value),tupelo$core$iter__37607.call(null,cljs.core.rest.call(null,s__37608__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,values);
})());
}));

(tupelo.core.set_match_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tupelo.core.set_match_QMARK_.cljs$lang$applyTo = (function (seq37605){
var G__37606 = cljs.core.first.call(null,seq37605);
var seq37605__$1 = cljs.core.next.call(null,seq37605);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37606,seq37605__$1);
}));

/**
 * Shortcut to clojure.pprint/pprint. Returns it (1st) argument.
 */
tupelo.core.pretty = (function tupelo$core$pretty(var_args){
var G__37616 = arguments.length;
switch (G__37616) {
case 1:
return tupelo.core.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tupelo.core.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tupelo.core.pretty.cljs$core$IFn$_invoke$arity$1 = (function (arg){
cljs.pprint.pprint.call(null,arg);

return arg;
}));

(tupelo.core.pretty.cljs$core$IFn$_invoke$arity$2 = (function (arg,writer){
cljs.pprint.pprint.call(null,arg,writer);

return arg;
}));

(tupelo.core.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a string that is the result of clojure.pprint/pprint
 */
tupelo.core.pretty_str = (function tupelo$core$pretty_str(arg){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37618_37622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37619_37623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37620_37624 = true;
var _STAR_print_fn_STAR__temp_val__37621_37625 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37620_37624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37621_37625);

try{cljs.pprint.pprint.call(null,arg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37619_37623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37618_37622);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});
tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_ = false;
var ufv___37645 = schema.utils.use_fn_validation;
var output_schema37626_37646 = schema.core.Any;
var input_schema37627_37647 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,tupelo.schema.Vec,cljs.core.with_meta(new cljs.core.Symbol(null,"parents","parents",-387007364,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","Vec","tsk/Vec",-1495582785,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data-in","data-in",885231067,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"intc","intc",348018934,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null)))], null);
var input_checker37628_37648 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37627_37647);
}),null));
var output_checker37629_37649 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37626_37646);
}),null));
var ret__26117__auto___37650 = /**
 * Inputs: [parents :- tsk/Vec data-in :- s/Any intc :- tsk/KeyMap]
 *   Returns: s/Any
 */
tupelo.core.walk_with_parents_impl = (function tupelo$core$walk_with_parents_impl(G__37630,G__37631,G__37632){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37645);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37630,G__37631,G__37632], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-impl","walk-with-parents-impl",-1955932988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),input_schema37627_37647,cljs.core.deref.call(null,input_checker37628_37648),args__24531__auto___37651);
} else {
var temp__5720__auto___37652 = cljs.core.deref.call(null,input_checker37628_37648).call(null,args__24531__auto___37651);
if(cljs.core.truth_(temp__5720__auto___37652)){
var error__24532__auto___37653 = temp__5720__auto___37652;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-impl","walk-with-parents-impl",-1955932988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37653)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37627_37647,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37651,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37653], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var parents = G__37630;
var data_in = G__37631;
var intc = G__37632;
while(true){
if(((cljs.core.map_entry_QMARK_.call(null,data_in)) || (tupelo.core.list_entry_QMARK_.call(null,data_in)))){
throw cljs.core.ex_info.call(null,"User-level MapEntry and/or list-entry objects not allowed",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-in","data-in",-755300460),data_in], null)));
} else {
}

var data_identity_fn = ((function (validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649){
return (function (_parents_,data){
return data;
});})(validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649))
;
var enter_fn = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(intc);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return data_identity_fn;
}
})();
var leave_fn = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"leave","leave",1022579443).cljs$core$IFn$_invoke$arity$1(intc);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return data_identity_fn;
}
})();
var parents_next = tupelo.core.append.call(null,parents,data_in);
var data_post_enter = (function (){var it = enter_fn.call(null,parents,data_in);
var it__$1 = (cljs.core.truth_(tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_)?data_in:it);
return it__$1;
})();
var data_post_walk_modified = ((cljs.core.sequential_QMARK_.call(null,data_post_enter))?tupelo.core.list_entries__GT_vec.call(null,cljs.core.vec.call(null,(function (){var iter__4622__auto__ = ((function (data_identity_fn,enter_fn,leave_fn,parents_next,data_post_enter,validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649){
return (function tupelo$core$walk_with_parents_impl_$_iter__37633(s__37634){
return (new cljs.core.LazySeq(null,(function (){
var s__37634__$1 = s__37634;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37634__$1);
if(temp__5720__auto__){
var s__37634__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37634__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37634__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37636 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37635 = (0);
while(true){
if((i__37635 < size__4621__auto__)){
var listentry = cljs.core._nth.call(null,c__4620__auto__,i__37635);
cljs.core.chunk_append.call(null,b__37636,(function (){var parents_next_le = tupelo.core.append.call(null,parents_next,listentry);
return tupelo.core.list_entry.call(null,tupelo.core.grab.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),listentry),tupelo.core.walk_with_parents_impl.call(null,parents_next_le,tupelo.core.grab.call(null,new cljs.core.Keyword(null,"val","val",128701612),listentry),intc));
})());

var G__37654 = (i__37635 + (1));
i__37635 = G__37654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37636),tupelo$core$walk_with_parents_impl_$_iter__37633.call(null,cljs.core.chunk_rest.call(null,s__37634__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37636),null);
}
} else {
var listentry = cljs.core.first.call(null,s__37634__$2);
return cljs.core.cons.call(null,(function (){var parents_next_le = tupelo.core.append.call(null,parents_next,listentry);
return tupelo.core.list_entry.call(null,tupelo.core.grab.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),listentry),tupelo.core.walk_with_parents_impl.call(null,parents_next_le,tupelo.core.grab.call(null,new cljs.core.Keyword(null,"val","val",128701612),listentry),intc));
})(),tupelo$core$walk_with_parents_impl_$_iter__37633.call(null,cljs.core.rest.call(null,s__37634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(data_identity_fn,enter_fn,leave_fn,parents_next,data_post_enter,validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649))
;
return iter__4622__auto__.call(null,tupelo.core.list__GT_entries.call(null,data_post_enter));
})())):((cljs.core.map_QMARK_.call(null,data_post_enter))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,(function (){var iter__4622__auto__ = ((function (data_identity_fn,enter_fn,leave_fn,parents_next,data_post_enter,validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649){
return (function tupelo$core$walk_with_parents_impl_$_iter__37637(s__37638){
return (new cljs.core.LazySeq(null,(function (){
var s__37638__$1 = s__37638;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37638__$1);
if(temp__5720__auto__){
var s__37638__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37638__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37638__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37640 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37639 = (0);
while(true){
if((i__37639 < size__4621__auto__)){
var mapentry = cljs.core._nth.call(null,c__4620__auto__,i__37639);
cljs.core.chunk_append.call(null,b__37640,(function (){var me_key = cljs.core.key.call(null,mapentry);
var me_val = cljs.core.val.call(null,mapentry);
var parents_next_me = tupelo.core.append.call(null,parents_next,mapentry);
var parents_next_key = tupelo.core.append.call(null,parents_next_me,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"value","value",305978217),me_key], null));
var parents_next_val = tupelo.core.append.call(null,parents_next_me,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-val","map-val",-974428444),new cljs.core.Keyword(null,"value","value",305978217),me_val], null));
return tupelo.core.map_entry.call(null,tupelo.core.walk_with_parents_impl.call(null,parents_next_key,me_key,intc),tupelo.core.walk_with_parents_impl.call(null,parents_next_val,me_val,intc));
})());

var G__37655 = (i__37639 + (1));
i__37639 = G__37655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37640),tupelo$core$walk_with_parents_impl_$_iter__37637.call(null,cljs.core.chunk_rest.call(null,s__37638__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37640),null);
}
} else {
var mapentry = cljs.core.first.call(null,s__37638__$2);
return cljs.core.cons.call(null,(function (){var me_key = cljs.core.key.call(null,mapentry);
var me_val = cljs.core.val.call(null,mapentry);
var parents_next_me = tupelo.core.append.call(null,parents_next,mapentry);
var parents_next_key = tupelo.core.append.call(null,parents_next_me,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"value","value",305978217),me_key], null));
var parents_next_val = tupelo.core.append.call(null,parents_next_me,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-val","map-val",-974428444),new cljs.core.Keyword(null,"value","value",305978217),me_val], null));
return tupelo.core.map_entry.call(null,tupelo.core.walk_with_parents_impl.call(null,parents_next_key,me_key,intc),tupelo.core.walk_with_parents_impl.call(null,parents_next_val,me_val,intc));
})(),tupelo$core$walk_with_parents_impl_$_iter__37637.call(null,cljs.core.rest.call(null,s__37638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(data_identity_fn,enter_fn,leave_fn,parents_next,data_post_enter,validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649))
;
return iter__4622__auto__.call(null,data_post_enter);
})())):((cljs.core.set_QMARK_.call(null,data_post_enter))?cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.vec.call(null,(function (){var iter__4622__auto__ = ((function (data_identity_fn,enter_fn,leave_fn,parents_next,data_post_enter,validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649){
return (function tupelo$core$walk_with_parents_impl_$_iter__37641(s__37642){
return (new cljs.core.LazySeq(null,(function (){
var s__37642__$1 = s__37642;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37642__$1);
if(temp__5720__auto__){
var s__37642__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37642__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__37642__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__37644 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__37643 = (0);
while(true){
if((i__37643 < size__4621__auto__)){
var elem = cljs.core._nth.call(null,c__4620__auto__,i__37643);
cljs.core.chunk_append.call(null,b__37644,tupelo.core.walk_with_parents_impl.call(null,parents_next,elem,intc));

var G__37656 = (i__37643 + (1));
i__37643 = G__37656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37644),tupelo$core$walk_with_parents_impl_$_iter__37641.call(null,cljs.core.chunk_rest.call(null,s__37642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37644),null);
}
} else {
var elem = cljs.core.first.call(null,s__37642__$2);
return cljs.core.cons.call(null,tupelo.core.walk_with_parents_impl.call(null,parents_next,elem,intc),tupelo$core$walk_with_parents_impl_$_iter__37641.call(null,cljs.core.rest.call(null,s__37642__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(data_identity_fn,enter_fn,leave_fn,parents_next,data_post_enter,validate__24530__auto__,ufv___37645,output_schema37626_37646,input_schema37627_37647,input_checker37628_37648,output_checker37629_37649))
;
return iter__4622__auto__.call(null,data_post_enter);
})())):data_post_enter
)));
var data_post_walk = (function (){var it = data_post_walk_modified;
var it__$1 = (cljs.core.truth_(tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_)?data_in:it);
return it__$1;
})();
var data_post_leave = (function (){var it = leave_fn.call(null,parents,data_post_walk);
var it__$1 = (cljs.core.truth_(tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_)?data_in:it);
return it__$1;
})();
return data_post_leave;
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-impl","walk-with-parents-impl",-1955932988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),output_schema37626_37646,cljs.core.deref.call(null,output_checker37629_37649),o__24533__auto__);
} else {
var temp__5720__auto___37657 = cljs.core.deref.call(null,output_checker37629_37649).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37657)){
var error__24532__auto___37658 = temp__5720__auto___37657;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-impl","walk-with-parents-impl",-1955932988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)),cljs.core.pr_str.call(null,error__24532__auto___37658)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37626_37646,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37658], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.walk_with_parents_impl),schema.core.__GT_FnSchema.call(null,output_schema37626_37646,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37627_37647], null)));

var ufv___37665 = schema.utils.use_fn_validation;
var output_schema37659_37666 = schema.core.Any;
var input_schema37660_37667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"interceptor","interceptor",-1526696693,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null)))], null);
var input_checker37661_37668 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37660_37667);
}),null));
var output_checker37662_37669 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37659_37666);
}),null));
var ret__26117__auto___37670 = /**
 * Inputs: [data :- s/Any interceptor :- tsk/KeyMap]
 *   Returns: s/Any
 * 
 *   Performs a depth-first traversal of a data structure, using an interceptor with signature:
 * 
 *    {:enter (fn [parents data] ...)
 *     :leave (fn [parents data] ...) }
 * 
 * For each data node in the tree, the `:enter` function is called prior to walking
 * the subtree rooted at that element, and the `:leave` function is called after
 * walking the subtree. The result of each function replaces the data value.
 * 
 * The `parents` arg to each interceptor function is a vector of elements from the
 * root data value passed in.  Using dummy (i.e. noop) interceptors which simply
 * print their args as a map, we have this example:
 * 
 * Clojure maps & vectors/lists have special processing.  They are broken up into a sequence of
 * MapEntry/ListEntry elements, which are included in the :parents vector before walking the child
 * data values. In this way, a map val can easily determine its correspond key or vice versa, and a
 * vector/list/seq element can easily determine its index.
 * 
 *       (walk-with-parents  {:a 1 :b {:c 3}}}  <noop-intc>) =>
 * 
 *           :enter => {:parents [],                                                       :data {:a 1, :b {:c 3}}}
 *           :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}
 *           :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}
 *           :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}
 *           :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}
 *           :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}
 *           :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}
 *           :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}
 *           :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}
 *           :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}
 *           :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}
 *           :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}
 *           :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}
 *           :leave => {:parents [],                                                       :data {:a 1, :b {:c 3}}}
 * 
 *           NOTE: in above, items in the :parents like `[:a 1]` are #clojure.lang.MapEntry values.
 * 
 *       (walk-with-parents  [10 [20 21]]  <noop-intc>) =>
 * 
 *           :enter => {:parents [],
 *                      :data [10 [20 21]]}
 *           :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 0, :value 10}],
 *                      :data 10}
 *           :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]}],
 *                      :data [20 21]}
 *           :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 0, :value 20}],
 *                      :data 20}
 *           :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 1, :value 21}],
 *                      :data 21}
 * 
 *     NOTE: in above, `#t.c.ListEntry` stands for `#tupelo.core.ListEntry`, an analog of #clojure.lang.MapEntry
 *   
 */
tupelo.core.walk_with_parents = (function tupelo$core$walk_with_parents(G__37663,G__37664){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37665);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37663,G__37664], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents","walk-with-parents",1936427715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Performs a depth-first traversal of a data structure, using an interceptor with signature:\n\n      {:enter (fn [parents data] ...)\n       :leave (fn [parents data] ...) }\n\n   For each data node in the tree, the `:enter` function is called prior to walking\n   the subtree rooted at that element, and the `:leave` function is called after\n   walking the subtree. The result of each function replaces the data value.\n\n   The `parents` arg to each interceptor function is a vector of elements from the\n   root data value passed in.  Using dummy (i.e. noop) interceptors which simply\n   print their args as a map, we have this example:\n\n   Clojure maps & vectors/lists have special processing.  They are broken up into a sequence of\n   MapEntry/ListEntry elements, which are included in the :parents vector before walking the child\n   data values. In this way, a map val can easily determine its correspond key or vice versa, and a\n   vector/list/seq element can easily determine its index.\n\n         (walk-with-parents  {:a 1 :b {:c 3}}}  <noop-intc>) =>\n\n             :enter => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :leave => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n\n             NOTE: in above, items in the :parents like `[:a 1]` are #clojure.lang.MapEntry values.\n\n         (walk-with-parents  [10 [20 21]]  <noop-intc>) =>\n\n             :enter => {:parents [],\n                        :data [10 [20 21]]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 0, :value 10}],\n                        :data 10}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]}],\n                        :data [20 21]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 0, :value 20}],\n                        :data 20}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 1, :value 21}],\n                        :data 21}\n\n       NOTE: in above, `#t.c.ListEntry` stands for `#tupelo.core.ListEntry`, an analog of #clojure.lang.MapEntry\n  "], null)),input_schema37660_37667,cljs.core.deref.call(null,input_checker37661_37668),args__24531__auto___37671);
} else {
var temp__5720__auto___37672 = cljs.core.deref.call(null,input_checker37661_37668).call(null,args__24531__auto___37671);
if(cljs.core.truth_(temp__5720__auto___37672)){
var error__24532__auto___37673 = temp__5720__auto___37672;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents","walk-with-parents",1936427715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Performs a depth-first traversal of a data structure, using an interceptor with signature:\n\n      {:enter (fn [parents data] ...)\n       :leave (fn [parents data] ...) }\n\n   For each data node in the tree, the `:enter` function is called prior to walking\n   the subtree rooted at that element, and the `:leave` function is called after\n   walking the subtree. The result of each function replaces the data value.\n\n   The `parents` arg to each interceptor function is a vector of elements from the\n   root data value passed in.  Using dummy (i.e. noop) interceptors which simply\n   print their args as a map, we have this example:\n\n   Clojure maps & vectors/lists have special processing.  They are broken up into a sequence of\n   MapEntry/ListEntry elements, which are included in the :parents vector before walking the child\n   data values. In this way, a map val can easily determine its correspond key or vice versa, and a\n   vector/list/seq element can easily determine its index.\n\n         (walk-with-parents  {:a 1 :b {:c 3}}}  <noop-intc>) =>\n\n             :enter => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :leave => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n\n             NOTE: in above, items in the :parents like `[:a 1]` are #clojure.lang.MapEntry values.\n\n         (walk-with-parents  [10 [20 21]]  <noop-intc>) =>\n\n             :enter => {:parents [],\n                        :data [10 [20 21]]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 0, :value 10}],\n                        :data 10}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]}],\n                        :data [20 21]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 0, :value 20}],\n                        :data 20}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 1, :value 21}],\n                        :data 21}\n\n       NOTE: in above, `#t.c.ListEntry` stands for `#tupelo.core.ListEntry`, an analog of #clojure.lang.MapEntry\n  "], null)),cljs.core.pr_str.call(null,error__24532__auto___37673)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37660_37667,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37671,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37673], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var data = G__37663;
var interceptor = G__37664;
while(true){
var enter_fn = new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(interceptor);
var leave_fn = new cljs.core.Keyword(null,"leave","leave",1022579443).cljs$core$IFn$_invoke$arity$1(interceptor);
if((((enter_fn == null)) && ((leave_fn == null)))){
throw cljs.core.ex_info.call(null,"Invalid interceptor. :enter and :leave functions cannot both be nil.",tupelo.core.glue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),interceptor], null)));
} else {
}

return tupelo.core.walk_with_parents_impl.call(null,cljs.core.PersistentVector.EMPTY,data,interceptor);
break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents","walk-with-parents",1936427715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Performs a depth-first traversal of a data structure, using an interceptor with signature:\n\n      {:enter (fn [parents data] ...)\n       :leave (fn [parents data] ...) }\n\n   For each data node in the tree, the `:enter` function is called prior to walking\n   the subtree rooted at that element, and the `:leave` function is called after\n   walking the subtree. The result of each function replaces the data value.\n\n   The `parents` arg to each interceptor function is a vector of elements from the\n   root data value passed in.  Using dummy (i.e. noop) interceptors which simply\n   print their args as a map, we have this example:\n\n   Clojure maps & vectors/lists have special processing.  They are broken up into a sequence of\n   MapEntry/ListEntry elements, which are included in the :parents vector before walking the child\n   data values. In this way, a map val can easily determine its correspond key or vice versa, and a\n   vector/list/seq element can easily determine its index.\n\n         (walk-with-parents  {:a 1 :b {:c 3}}}  <noop-intc>) =>\n\n             :enter => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :leave => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n\n             NOTE: in above, items in the :parents like `[:a 1]` are #clojure.lang.MapEntry values.\n\n         (walk-with-parents  [10 [20 21]]  <noop-intc>) =>\n\n             :enter => {:parents [],\n                        :data [10 [20 21]]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 0, :value 10}],\n                        :data 10}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]}],\n                        :data [20 21]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 0, :value 20}],\n                        :data 20}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 1, :value 21}],\n                        :data 21}\n\n       NOTE: in above, `#t.c.ListEntry` stands for `#tupelo.core.ListEntry`, an analog of #clojure.lang.MapEntry\n  "], null)),output_schema37659_37666,cljs.core.deref.call(null,output_checker37662_37669),o__24533__auto__);
} else {
var temp__5720__auto___37674 = cljs.core.deref.call(null,output_checker37662_37669).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37674)){
var error__24532__auto___37675 = temp__5720__auto___37674;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents","walk-with-parents",1936427715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Performs a depth-first traversal of a data structure, using an interceptor with signature:\n\n      {:enter (fn [parents data] ...)\n       :leave (fn [parents data] ...) }\n\n   For each data node in the tree, the `:enter` function is called prior to walking\n   the subtree rooted at that element, and the `:leave` function is called after\n   walking the subtree. The result of each function replaces the data value.\n\n   The `parents` arg to each interceptor function is a vector of elements from the\n   root data value passed in.  Using dummy (i.e. noop) interceptors which simply\n   print their args as a map, we have this example:\n\n   Clojure maps & vectors/lists have special processing.  They are broken up into a sequence of\n   MapEntry/ListEntry elements, which are included in the :parents vector before walking the child\n   data values. In this way, a map val can easily determine its correspond key or vice versa, and a\n   vector/list/seq element can easily determine its index.\n\n         (walk-with-parents  {:a 1 :b {:c 3}}}  <noop-intc>) =>\n\n             :enter => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data :a}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:a 1]],                               :data 1}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data :b}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data :c}\n             :enter => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}] {:c 3} [:c 3]],            :data 3}\n             :leave => {:parents [{:a 1, :b {:c 3}} [:b {:c 3}]],                          :data {:c 3}}\n             :leave => {:parents [],                                                       :data {:a 1, :b {:c 3}}}\n\n             NOTE: in above, items in the :parents like `[:a 1]` are #clojure.lang.MapEntry values.\n\n         (walk-with-parents  [10 [20 21]]  <noop-intc>) =>\n\n             :enter => {:parents [],\n                        :data [10 [20 21]]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 0, :value 10}],\n                        :data 10}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]}],\n                        :data [20 21]}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 0, :value 20}],\n                        :data 20}\n             :enter => {:parents [[10 [20 21]] #t.c.ListEntry{:index 1, :value [20 21]} [20 21] #t.c.ListEntry{:index 1, :value 21}],\n                        :data 21}\n\n       NOTE: in above, `#t.c.ListEntry` stands for `#tupelo.core.ListEntry`, an analog of #clojure.lang.MapEntry\n  "], null)),cljs.core.pr_str.call(null,error__24532__auto___37675)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37659_37666,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37675], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.walk_with_parents),schema.core.__GT_FnSchema.call(null,output_schema37659_37666,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37660_37667], null)));

var ufv___37684 = schema.utils.use_fn_validation;
var output_schema37676_37685 = schema.core.Any;
var input_schema37677_37686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,tupelo.schema.KeyMap,cljs.core.with_meta(new cljs.core.Symbol(null,"intc","intc",348018934,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("tsk","KeyMap","tsk/KeyMap",53633425,null)], null)))], null);
var input_checker37678_37687 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,input_schema37677_37686);
}),null));
var output_checker37679_37688 = (new cljs.core.Delay((function (){
return schema.core.checker.call(null,output_schema37676_37685);
}),null));
var ret__26117__auto___37689 = /**
 * Inputs: [data :- s/Any intc :- tsk/KeyMap]
 *   Returns: s/Any
 * 
 *   Walks a data structure as with `walk-with-parents`, but in a read-only mode
 *   (interceptor function return values are ignored). Use for side-effects
 *   such as printing or validation (throw Exception to indicate validation failure).
 *   Returns input value (can be used for chaining). 
 */
tupelo.core.walk_with_parents_readonly = (function tupelo$core$walk_with_parents_readonly(G__37680,G__37681){
var validate__24530__auto__ = cljs.core.deref.call(null,ufv___37684);
if(cljs.core.truth_(validate__24530__auto__)){
var args__24531__auto___37690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37680,G__37681], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-readonly","walk-with-parents-readonly",-832545558,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Walks a data structure as with `walk-with-parents`, but in a read-only mode\n  (interceptor function return values are ignored). Use for side-effects\n  such as printing or validation (throw Exception to indicate validation failure).\n  Returns input value (can be used for chaining). "], null)),input_schema37677_37686,cljs.core.deref.call(null,input_checker37678_37687),args__24531__auto___37690);
} else {
var temp__5720__auto___37691 = cljs.core.deref.call(null,input_checker37678_37687).call(null,args__24531__auto___37690);
if(cljs.core.truth_(temp__5720__auto___37691)){
var error__24532__auto___37692 = temp__5720__auto___37691;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-readonly","walk-with-parents-readonly",-832545558,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Walks a data structure as with `walk-with-parents`, but in a read-only mode\n  (interceptor function return values are ignored). Use for side-effects\n  such as printing or validation (throw Exception to indicate validation failure).\n  Returns input value (can be used for chaining). "], null)),cljs.core.pr_str.call(null,error__24532__auto___37692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37677_37686,new cljs.core.Keyword(null,"value","value",305978217),args__24531__auto___37690,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37692], null));
} else {
}
}
} else {
}

var o__24533__auto__ = (function (){var data = G__37680;
var intc = G__37681;
while(true){
var _STAR_walk_with_parents_readonly_flag_STAR__orig_val__37682 = tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_;
var _STAR_walk_with_parents_readonly_flag_STAR__temp_val__37683 = true;
(tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_ = _STAR_walk_with_parents_readonly_flag_STAR__temp_val__37683);

try{return tupelo.core.walk_with_parents.call(null,data,intc);
}finally {(tupelo.core._STAR_walk_with_parents_readonly_flag_STAR_ = _STAR_walk_with_parents_readonly_flag_STAR__orig_val__37682);
}break;
}
})();
if(cljs.core.truth_(validate__24530__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-readonly","walk-with-parents-readonly",-832545558,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Walks a data structure as with `walk-with-parents`, but in a read-only mode\n  (interceptor function return values are ignored). Use for side-effects\n  such as printing or validation (throw Exception to indicate validation failure).\n  Returns input value (can be used for chaining). "], null)),output_schema37676_37685,cljs.core.deref.call(null,output_checker37679_37688),o__24533__auto__);
} else {
var temp__5720__auto___37693 = cljs.core.deref.call(null,output_checker37679_37688).call(null,o__24533__auto__);
if(cljs.core.truth_(temp__5720__auto___37693)){
var error__24532__auto___37694 = temp__5720__auto___37693;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"walk-with-parents-readonly","walk-with-parents-readonly",-832545558,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Walks a data structure as with `walk-with-parents`, but in a read-only mode\n  (interceptor function return values are ignored). Use for side-effects\n  such as printing or validation (throw Exception to indicate validation failure).\n  Returns input value (can be used for chaining). "], null)),cljs.core.pr_str.call(null,error__24532__auto___37694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37676_37685,new cljs.core.Keyword(null,"value","value",305978217),o__24533__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__24532__auto___37694], null));
} else {
}
}
} else {
}

return o__24533__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tupelo.core.walk_with_parents_readonly),schema.core.__GT_FnSchema.call(null,output_schema37676_37685,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37677_37686], null)));


//# sourceMappingURL=core.js.map
