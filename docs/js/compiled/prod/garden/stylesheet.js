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
var len__4829__auto___27106 = arguments.length;
var i__4830__auto___27107 = (0);
while(true){
if((i__4830__auto___27107 < len__4829__auto___27106)){
args__4835__auto__.push((arguments[i__4830__auto___27107]));

var G__27108 = (i__4830__auto___27107 + (1));
i__4830__auto___27107 = G__27108;
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
var G__27109__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__27109 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27110__i = 0, G__27110__a = new Array(arguments.length -  0);
while (G__27110__i < G__27110__a.length) {G__27110__a[G__27110__i] = arguments[G__27110__i + 0]; ++G__27110__i;}
  children = new cljs.core.IndexedSeq(G__27110__a,0,null);
} 
return G__27109__delegate.call(this,children);};
G__27109.cljs$lang$maxFixedArity = 0;
G__27109.cljs$lang$applyTo = (function (arglist__27111){
var children = cljs.core.seq(arglist__27111);
return G__27109__delegate(children);
});
G__27109.cljs$core$IFn$_invoke$arity$variadic = G__27109__delegate;
return G__27109;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq27104){
var G__27105 = cljs.core.first.call(null,seq27104);
var seq27104__$1 = cljs.core.next.call(null,seq27104);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27105,seq27104__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__27112__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__27112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27113__i = 0, G__27113__a = new Array(arguments.length -  0);
while (G__27113__i < G__27113__a.length) {G__27113__a[G__27113__i] = arguments[G__27113__i + 0]; ++G__27113__i;}
  args = new cljs.core.IndexedSeq(G__27113__a,0,null);
} 
return G__27112__delegate.call(this,args);};
G__27112.cljs$lang$maxFixedArity = 0;
G__27112.cljs$lang$applyTo = (function (arglist__27114){
var args = cljs.core.seq(arglist__27114);
return G__27112__delegate(args);
});
G__27112.cljs$core$IFn$_invoke$arity$variadic = G__27112__delegate;
return G__27112;
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
var len__4829__auto___27116 = arguments.length;
var i__4830__auto___27117 = (0);
while(true){
if((i__4830__auto___27117 < len__4829__auto___27116)){
args__4835__auto__.push((arguments[i__4830__auto___27117]));

var G__27118 = (i__4830__auto___27117 + (1));
i__4830__auto___27117 = G__27118;
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
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq27115){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27115));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__27122 = arguments.length;
switch (G__27122) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___27124 = arguments.length;
var i__4830__auto___27125 = (0);
while(true){
if((i__4830__auto___27125 < len__4829__auto___27124)){
args_arr__4850__auto__.push((arguments[i__4830__auto___27125]));

var G__27126 = (i__4830__auto___27125 + (1));
i__4830__auto___27125 = G__27126;
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
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq27120){
var G__27121 = cljs.core.first.call(null,seq27120);
var seq27120__$1 = cljs.core.next.call(null,seq27120);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27121,seq27120__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27129 = arguments.length;
var i__4830__auto___27130 = (0);
while(true){
if((i__4830__auto___27130 < len__4829__auto___27129)){
args__4835__auto__.push((arguments[i__4830__auto___27130]));

var G__27131 = (i__4830__auto___27130 + (1));
i__4830__auto___27130 = G__27131;
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
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq27127){
var G__27128 = cljs.core.first.call(null,seq27127);
var seq27127__$1 = cljs.core.next.call(null,seq27127);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27128,seq27127__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27134 = arguments.length;
var i__4830__auto___27135 = (0);
while(true){
if((i__4830__auto___27135 < len__4829__auto___27134)){
args__4835__auto__.push((arguments[i__4830__auto___27135]));

var G__27136 = (i__4830__auto___27135 + (1));
i__4830__auto___27135 = G__27136;
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
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq27132){
var G__27133 = cljs.core.first.call(null,seq27132);
var seq27132__$1 = cljs.core.next.call(null,seq27132);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27133,seq27132__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27139 = arguments.length;
var i__4830__auto___27140 = (0);
while(true){
if((i__4830__auto___27140 < len__4829__auto___27139)){
args__4835__auto__.push((arguments[i__4830__auto___27140]));

var G__27141 = (i__4830__auto___27140 + (1));
i__4830__auto___27140 = G__27141;
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
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq27137){
var G__27138 = cljs.core.first.call(null,seq27137);
var seq27137__$1 = cljs.core.next.call(null,seq27137);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27138,seq27137__$1);
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
