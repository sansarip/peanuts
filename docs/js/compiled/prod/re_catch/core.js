// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('re_catch.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
re_catch.core.render_error_component = (function re_catch$core$render_error_component(p__27095){
var map__27096 = p__27095;
var map__27096__$1 = cljs.core.__destructure_map.call(null,map__27096);
var error = cljs.core.get.call(null,map__27096__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var info = cljs.core.get.call(null,map__27096__$1,new cljs.core.Keyword(null,"info","info",-317069002));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(300),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255,0,0,0.2)",new cljs.core.Keyword(null,"padding","padding",1660304693),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),error], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),info], null)], null);
});
re_catch.core._STAR_render_error_STAR_ = re_catch.core.render_error_component;
re_catch.core.catch$ = (function re_catch$core$catch(){
var error_state = reagent.core.atom.call(null,null);
var info_state = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function re_catch$core$catch_$_re_catch_block(this$,error,info){
cljs.core.reset_BANG_.call(null,error_state,(function (){var max_error_lenght = (200);
var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5720__auto__)){
var err = temp__5720__auto__;
if((((err).length) < max_error_lenght)){
return [cljs.core.subs.call(null,err,(0),max_error_lenght)," ..."].join('');
} else {
return null;
}
} else {
return null;
}
})());

return cljs.core.reset_BANG_.call(null,info_state,(function (){var G__27098 = info;
var G__27098__$1 = (((G__27098 == null))?null:G__27098.componentStack);
var G__27098__$2 = (((G__27098__$1 == null))?null:clojure.string.split_lines.call(null,G__27098__$1));
var G__27098__$3 = (((G__27098__$2 == null))?null:cljs.core.remove.call(null,clojure.string.blank_QMARK_,G__27098__$2));
var G__27098__$4 = (((G__27098__$3 == null))?null:cljs.core.drop_while.call(null,(function (p1__27097_SHARP_){
return cljs.core.re_find.call(null,/re_catch/,p1__27097_SHARP_);
}),G__27098__$3));
var G__27098__$5 = (((G__27098__$4 == null))?null:cljs.core.take.call(null,(3),G__27098__$4));
if((G__27098__$5 == null)){
return null;
} else {
return clojure.string.join.call(null,"\n",G__27098__$5);
}
})());
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__27099__delegate = function (body){
if(cljs.core.truth_(cljs.core.deref.call(null,error_state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_catch.core._STAR_render_error_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.deref.call(null,error_state),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.deref.call(null,info_state)], null)], null);
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,body))){
return null;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),body);
}
}
};
var G__27099 = function (var_args){
var body = null;
if (arguments.length > 0) {
var G__27100__i = 0, G__27100__a = new Array(arguments.length -  0);
while (G__27100__i < G__27100__a.length) {G__27100__a[G__27100__i] = arguments[G__27100__i + 0]; ++G__27100__i;}
  body = new cljs.core.IndexedSeq(G__27100__a,0,null);
} 
return G__27099__delegate.call(this,body);};
G__27099.cljs$lang$maxFixedArity = 0;
G__27099.cljs$lang$applyTo = (function (arglist__27101){
var body = cljs.core.seq(arglist__27101);
return G__27099__delegate(body);
});
G__27099.cljs$core$IFn$_invoke$arity$variadic = G__27099__delegate;
return G__27099;
})()
], null));
});
