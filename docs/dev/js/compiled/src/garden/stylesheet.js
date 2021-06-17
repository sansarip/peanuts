// Compiled by ClojureScript 1.10.866 {:optimizations :none}
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
var len__4829__auto___23817 = arguments.length;
var i__4830__auto___23818 = (0);
while(true){
if((i__4830__auto___23818 < len__4829__auto___23817)){
args__4835__auto__.push((arguments[i__4830__auto___23818]));

var G__23819 = (i__4830__auto___23818 + (1));
i__4830__auto___23818 = G__23819;
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
var G__23820__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__23820 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__23821__i = 0, G__23821__a = new Array(arguments.length -  0);
while (G__23821__i < G__23821__a.length) {G__23821__a[G__23821__i] = arguments[G__23821__i + 0]; ++G__23821__i;}
  children = new cljs.core.IndexedSeq(G__23821__a,0,null);
} 
return G__23820__delegate.call(this,children);};
G__23820.cljs$lang$maxFixedArity = 0;
G__23820.cljs$lang$applyTo = (function (arglist__23822){
var children = cljs.core.seq(arglist__23822);
return G__23820__delegate(children);
});
G__23820.cljs$core$IFn$_invoke$arity$variadic = G__23820__delegate;
return G__23820;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq23815){
var G__23816 = cljs.core.first.call(null,seq23815);
var seq23815__$1 = cljs.core.next.call(null,seq23815);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23816,seq23815__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__23823__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__23823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23824__i = 0, G__23824__a = new Array(arguments.length -  0);
while (G__23824__i < G__23824__a.length) {G__23824__a[G__23824__i] = arguments[G__23824__i + 0]; ++G__23824__i;}
  args = new cljs.core.IndexedSeq(G__23824__a,0,null);
} 
return G__23823__delegate.call(this,args);};
G__23823.cljs$lang$maxFixedArity = 0;
G__23823.cljs$lang$applyTo = (function (arglist__23825){
var args = cljs.core.seq(arglist__23825);
return G__23823__delegate(args);
});
G__23823.cljs$core$IFn$_invoke$arity$variadic = G__23823__delegate;
return G__23823;
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
var len__4829__auto___23827 = arguments.length;
var i__4830__auto___23828 = (0);
while(true){
if((i__4830__auto___23828 < len__4829__auto___23827)){
args__4835__auto__.push((arguments[i__4830__auto___23828]));

var G__23829 = (i__4830__auto___23828 + (1));
i__4830__auto___23828 = G__23829;
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
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq23826){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23826));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__23833 = arguments.length;
switch (G__23833) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___23835 = arguments.length;
var i__4830__auto___23836 = (0);
while(true){
if((i__4830__auto___23836 < len__4829__auto___23835)){
args_arr__4850__auto__.push((arguments[i__4830__auto___23836]));

var G__23837 = (i__4830__auto___23836 + (1));
i__4830__auto___23836 = G__23837;
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
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq23831){
var G__23832 = cljs.core.first.call(null,seq23831);
var seq23831__$1 = cljs.core.next.call(null,seq23831);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23832,seq23831__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4835__auto__ = [];
var len__4829__auto___23840 = arguments.length;
var i__4830__auto___23841 = (0);
while(true){
if((i__4830__auto___23841 < len__4829__auto___23840)){
args__4835__auto__.push((arguments[i__4830__auto___23841]));

var G__23842 = (i__4830__auto___23841 + (1));
i__4830__auto___23841 = G__23842;
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
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq23838){
var G__23839 = cljs.core.first.call(null,seq23838);
var seq23838__$1 = cljs.core.next.call(null,seq23838);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23839,seq23838__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4835__auto__ = [];
var len__4829__auto___23845 = arguments.length;
var i__4830__auto___23846 = (0);
while(true){
if((i__4830__auto___23846 < len__4829__auto___23845)){
args__4835__auto__.push((arguments[i__4830__auto___23846]));

var G__23847 = (i__4830__auto___23846 + (1));
i__4830__auto___23846 = G__23847;
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
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq23843){
var G__23844 = cljs.core.first.call(null,seq23843);
var seq23843__$1 = cljs.core.next.call(null,seq23843);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23844,seq23843__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4835__auto__ = [];
var len__4829__auto___23850 = arguments.length;
var i__4830__auto___23851 = (0);
while(true){
if((i__4830__auto___23851 < len__4829__auto___23850)){
args__4835__auto__.push((arguments[i__4830__auto___23851]));

var G__23852 = (i__4830__auto___23851 + (1));
i__4830__auto___23851 = G__23852;
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
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq23848){
var G__23849 = cljs.core.first.call(null,seq23848);
var seq23848__$1 = cljs.core.next.call(null,seq23848);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23849,seq23848__$1);
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

//# sourceMappingURL=stylesheet.js.map
