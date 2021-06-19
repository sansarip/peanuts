// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27105 = arguments.length;
var i__4830__auto___27106 = (0);
while(true){
if((i__4830__auto___27106 < len__4829__auto___27105)){
args__4835__auto__.push((arguments[i__4830__auto___27106]));

var G__27107 = (i__4830__auto___27106 + (1));
i__4830__auto___27106 = G__27107;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__27108__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__27108 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27109__i = 0, G__27109__a = new Array(arguments.length -  0);
while (G__27109__i < G__27109__a.length) {G__27109__a[G__27109__i] = arguments[G__27109__i + 0]; ++G__27109__i;}
  children = new cljs.core.IndexedSeq(G__27109__a,0,null);
} 
return G__27108__delegate.call(this,children);};
G__27108.cljs$lang$maxFixedArity = 0;
G__27108.cljs$lang$applyTo = (function (arglist__27110){
var children = cljs.core.seq(arglist__27110);
return G__27108__delegate(children);
});
G__27108.cljs$core$IFn$_invoke$arity$variadic = G__27108__delegate;
return G__27108;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq27103){
var G__27104 = cljs.core.first.call(null,seq27103);
var seq27103__$1 = cljs.core.next.call(null,seq27103);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27104,seq27103__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__27111__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__27111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27112__i = 0, G__27112__a = new Array(arguments.length -  0);
while (G__27112__i < G__27112__a.length) {G__27112__a[G__27112__i] = arguments[G__27112__i + 0]; ++G__27112__i;}
  args = new cljs.core.IndexedSeq(G__27112__a,0,null);
} 
return G__27111__delegate.call(this,args);};
G__27111.cljs$lang$maxFixedArity = 0;
G__27111.cljs$lang$applyTo = (function (arglist__27113){
var args = cljs.core.seq(arglist__27113);
return G__27111__delegate(args);
});
G__27111.cljs$core$IFn$_invoke$arity$variadic = G__27111__delegate;
return G__27111;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27115 = arguments.length;
var i__4830__auto___27116 = (0);
while(true){
if((i__4830__auto___27116 < len__4829__auto___27115)){
args__4835__auto__.push((arguments[i__4830__auto___27116]));

var G__27117 = (i__4830__auto___27116 + (1));
i__4830__auto___27116 = G__27117;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq27114){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27114));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__27121 = arguments.length;
switch (G__27121) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___27123 = arguments.length;
var i__4830__auto___27124 = (0);
while(true){
if((i__4830__auto___27124 < len__4829__auto___27123)){
args_arr__4850__auto__.push((arguments[i__4830__auto___27124]));

var G__27125 = (i__4830__auto___27124 + (1));
i__4830__auto___27124 = G__27125;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4851__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq27119){
var G__27120 = cljs.core.first.call(null,seq27119);
var seq27119__$1 = cljs.core.next.call(null,seq27119);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27120,seq27119__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27128 = arguments.length;
var i__4830__auto___27129 = (0);
while(true){
if((i__4830__auto___27129 < len__4829__auto___27128)){
args__4835__auto__.push((arguments[i__4830__auto___27129]));

var G__27130 = (i__4830__auto___27129 + (1));
i__4830__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq27126){
var G__27127 = cljs.core.first.call(null,seq27126);
var seq27126__$1 = cljs.core.next.call(null,seq27126);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27127,seq27126__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27133 = arguments.length;
var i__4830__auto___27134 = (0);
while(true){
if((i__4830__auto___27134 < len__4829__auto___27133)){
args__4835__auto__.push((arguments[i__4830__auto___27134]));

var G__27135 = (i__4830__auto___27134 + (1));
i__4830__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq27131){
var G__27132 = cljs.core.first.call(null,seq27131);
var seq27131__$1 = cljs.core.next.call(null,seq27131);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27132,seq27131__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27138 = arguments.length;
var i__4830__auto___27139 = (0);
while(true){
if((i__4830__auto___27139 < len__4829__auto___27138)){
args__4835__auto__.push((arguments[i__4830__auto___27139]));

var G__27140 = (i__4830__auto___27139 + (1));
i__4830__auto___27139 = G__27140;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq27136){
var G__27137 = cljs.core.first.call(null,seq27136);
var seq27136__$1 = cljs.core.next.call(null,seq27136);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27137,seq27136__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
