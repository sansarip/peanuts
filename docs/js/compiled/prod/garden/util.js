// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16342 = arguments.length;
var i__4830__auto___16343 = (0);
while(true){
if((i__4830__auto___16343 < len__4829__auto___16342)){
args__4835__auto__.push((arguments[i__4830__auto___16343]));

var G__16344 = (i__4830__auto___16343 + (1));
i__4830__auto___16343 = G__16344;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.format.cljs$lang$applyTo = (function (seq16340){
var G__16341 = cljs.core.first.call(null,seq16340);
var seq16340__$1 = cljs.core.next.call(null,seq16340);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16341,seq16340__$1);
}));


/**
 * @interface
 */
garden.util.ToString = function(){};

var garden$util$ToString$to_str$dyn_16345 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (garden.util.to_str[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$);
} else {
var m__4519__auto__ = (garden.util.to_str["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
return garden$util$ToString$to_str$dyn_16345.call(null,this$);
}
});

(cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
}));

goog.object.set(garden.util.ToString,"_",true);

goog.object.set(garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(garden.util.ToString,"null",true);

goog.object.set(garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16347 = arguments.length;
var i__4830__auto___16348 = (0);
while(true){
if((i__4830__auto___16348 < len__4829__auto___16347)){
args__4835__auto__.push((arguments[i__4830__auto___16348]));

var G__16349 = (i__4830__auto___16348 + (1));
i__4830__auto___16348 = G__16349;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
}));

(garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.as_str.cljs$lang$applyTo = (function (seq16346){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16346));
}));

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16356 = arguments.length;
var i__4830__auto___16357 = (0);
while(true){
if((i__4830__auto___16357 < len__4829__auto___16356)){
args__4835__auto__.push((arguments[i__4830__auto___16357]));

var G__16358 = (i__4830__auto___16357 + (1));
i__4830__auto___16357 = G__16358;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__16352){
var vec__16353 = p__16352;
var radix = cljs.core.nth.call(null,vec__16353,(0),null);
var radix__$1 = (function (){var or__4223__auto__ = radix;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.string__GT_int.cljs$lang$applyTo = (function (seq16350){
var G__16351 = cljs.core.first.call(null,seq16350);
var seq16350__$1 = cljs.core.next.call(null,seq16350);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16351,seq16350__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16365 = arguments.length;
var i__4830__auto___16366 = (0);
while(true){
if((i__4830__auto___16366 < len__4829__auto___16365)){
args__4835__auto__.push((arguments[i__4830__auto___16366]));

var G__16367 = (i__4830__auto___16366 + (1));
i__4830__auto___16366 = G__16367;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__16361){
var vec__16362 = p__16361;
var radix = cljs.core.nth.call(null,vec__16362,(0),null);
var radix__$1 = (function (){var or__4223__auto__ = radix;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.int__GT_string.cljs$lang$applyTo = (function (seq16359){
var G__16360 = cljs.core.first.call(null,seq16359);
var seq16359__$1 = cljs.core.next.call(null,seq16359);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16360,seq16359__$1);
}));

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4622__auto__ = (function garden$util$comma_join_$_iter__16368(s__16369){
return (new cljs.core.LazySeq(null,(function (){
var s__16369__$1 = s__16369;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16369__$1);
if(temp__5720__auto__){
var s__16369__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16369__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__16369__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__16371 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__16370 = (0);
while(true){
if((i__16370 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__16370);
cljs.core.chunk_append.call(null,b__16371,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__16372 = (i__16370 + (1));
i__16370 = G__16372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16371),garden$util$comma_join_$_iter__16368.call(null,cljs.core.chunk_rest.call(null,s__16369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16371),null);
}
} else {
var x = cljs.core.first.call(null,s__16369__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__16368.call(null,cljs.core.rest.call(null,s__16369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.record_QMARK_.call(null,x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
garden.util.at_supports_QMARK_ = (function garden$util$at_supports_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4309__auto__ = a;
var y__4310__auto__ = b;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var top = (function (){var x__4306__auto__ = a;
var y__4307__auto__ = b;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__16373 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__16373,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__16373,(1),null);
var x__4306__auto__ = a__$1;
var y__4307__auto__ = (function (){var x__4309__auto__ = b__$1;
var y__4310__auto__ = n;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16379 = arguments.length;
var i__4830__auto___16380 = (0);
while(true){
if((i__4830__auto___16380 < len__4829__auto___16379)){
args__4835__auto__.push((arguments[i__4830__auto___16380]));

var G__16381 = (i__4830__auto___16380 + (1));
i__4830__auto___16380 = G__16381;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
}));

(garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(garden.util.average.cljs$lang$applyTo = (function (seq16376){
var G__16377 = cljs.core.first.call(null,seq16376);
var seq16376__$1 = cljs.core.next.call(null,seq16376);
var G__16378 = cljs.core.first.call(null,seq16376__$1);
var seq16376__$2 = cljs.core.next.call(null,seq16376__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16377,G__16378,seq16376__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16383 = arguments.length;
var i__4830__auto___16384 = (0);
while(true){
if((i__4830__auto___16384 < len__4829__auto___16383)){
args__4835__auto__.push((arguments[i__4830__auto___16384]));

var G__16385 = (i__4830__auto___16384 + (1));
i__4830__auto___16384 = G__16385;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = (function garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5718__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5718__auto__){
var rst = temp__5718__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__16386 = (i - (1));
var G__16387 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__16386;
v_seqs__$2 = G__16387;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step.call(null,v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.cartesian_product.cljs$lang$applyTo = (function (seq16382){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16382));
}));

