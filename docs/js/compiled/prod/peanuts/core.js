// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('peanuts.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
peanuts.core.not_empty_coll = (function peanuts$core$not_empty_coll(thing){
if(cljs.core.coll_QMARK_.call(null,thing)){
return cljs.core.not_empty.call(null,thing);
} else {
return thing;
}
});
peanuts.core.not_empty_vals = (function peanuts$core$not_empty_vals(thing){
if(cljs.core.map_QMARK_.call(null,thing)){
return cljs.core.some.call(null,(function (p1__16230_SHARP_){
return peanuts.core.not_empty_coll.call(null,cljs.core.second.call(null,p1__16230_SHARP_));
}),thing);
} else {
if(cljs.core.coll_QMARK_.call(null,thing)){
return peanuts.core.not_empty_coll.call(null,thing);
} else {
if(cljs.core.truth_(thing)){
return thing;
} else {
return null;

}
}
}
});
peanuts.core.binding_vector_QMARK_ = (function peanuts$core$binding_vector_QMARK_(thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && ((cljs.core.first.call(null,thing) instanceof cljs.core.Symbol)));
});
peanuts.core.remove_deep = (function peanuts$core$remove_deep(key_set,data){
if(cljs.core.truth_(cljs.core.not_empty.call(null,key_set))){
return cljs.core.filterv.call(null,peanuts.core.not_empty_vals,clojure.walk.prewalk.call(null,(function (node){
if(peanuts.core.binding_vector_QMARK_.call(null,node)){
return cljs.core.vec.call(null,cljs.core.remove.call(null,key_set,node));
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.apply.call(null,cljs.core.dissoc,cljs.core.dissoc.call(null,node,new cljs.core.Keyword(null,"or","or",235744169)),key_set);
} else {
if(cljs.core.truth_(cljs.core.get.call(null,key_set,node))){
return null;
} else {
return node;

}
}
}
}),data));
} else {
return data;
}
});
peanuts.core.symbol_in_QMARK_ = (function peanuts$core$symbol_in_QMARK_(key_set,s){
if((s instanceof cljs.core.Symbol)){
return cljs.core.get.call(null,key_set,s);
} else {
return s;
}
});
peanuts.core.filter_symbol_keys = (function peanuts$core$filter_symbol_keys(key_set,m){
return cljs.core.reduce_kv.call(null,(function (c,k,v){
if(cljs.core.truth_(peanuts.core.symbol_in_QMARK_.call(null,key_set,k))){
return cljs.core.assoc.call(null,c,k,v);
} else {
return c;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
peanuts.core.filter_deep = (function peanuts$core$filter_deep(key_set,data){
if(cljs.core.truth_(cljs.core.not_empty.call(null,key_set))){
return cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.filterv.call(null,peanuts.core.not_empty_vals,clojure.walk.prewalk.call(null,(function (node){
if(peanuts.core.binding_vector_QMARK_.call(null,node)){
return cljs.core.filterv.call(null,(function (p1__16231_SHARP_){
return peanuts.core.symbol_in_QMARK_.call(null,key_set,p1__16231_SHARP_);
}),node);
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return peanuts.core.filter_symbol_keys.call(null,key_set,cljs.core.dissoc.call(null,node,new cljs.core.Keyword(null,"or","or",235744169)));
} else {
if(cljs.core.not.call(null,peanuts.core.symbol_in_QMARK_.call(null,key_set,node))){
return null;
} else {
return node;

}
}
}
}),data)));
} else {
return data;
}
});
peanuts.core.get_associative_destructuring_vector = (function peanuts$core$get_associative_destructuring_vector(node){
var and__4221__auto__ = (function (){var or__4223__auto__ = cljs.core.map_QMARK_.call(null,node);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return null;
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.select_keys.call(null,node,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"syms","syms",-1575891762),null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,new cljs.core.Keyword(null,"strs","strs",1175537277),null], null), null));
} else {
return and__4221__auto__;
}
});
peanuts.core.flatten_maps = (function peanuts$core$flatten_maps(args){
return cljs.core.distinct.call(null,cljs.core.flatten.call(null,clojure.walk.prewalk.call(null,(function (node){
var assoc_dest_vec = peanuts.core.get_associative_destructuring_vector.call(null,node);
if(cljs.core.truth_(cljs.core.not_empty.call(null,assoc_dest_vec))){
return cljs.core.vec.call(null,cljs.core.vals.call(null,assoc_dest_vec));
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.vec.call(null,cljs.core.keys.call(null,node));
} else {
return node;

}
}
}),args)));
});
peanuts.core.make_cond_form = (function peanuts$core$make_cond_form(binding,binding_args){
var binding_vec = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding], null),binding_args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cond","cond",1606708055,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exempt","exempt",470102055,null),new cljs.core.Symbol(null,"redlist","redlist",1371932096,null)], null)], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"meta","meta",-1154898805,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"exempt","exempt",470102055,null),new cljs.core.Symbol(null,"redlist","redlist",1371932096,null)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("re-frame.core","subscribe","re-frame.core/subscribe",-774932115,null),null,(1),null)),(new cljs.core.List(null,binding_vec,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"->","->",-2139605430,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta","meta",-1154898805,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sub-fn","sub-fn",1326750580),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"and","and",668631710,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,binding_args,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.seq.call(null,binding_vec),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)))));
});
peanuts.core.seq__GT_let_form = (function peanuts$core$seq__GT_let_form(args,seq_STAR_){
return cljs.core.reverse.call(null,cljs.core.conj.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null)),cljs.core.reduce.call(null,(function (c,b){
return cljs.core.conj.call(null,cljs.core.conj.call(null,c,b),peanuts.core.make_cond_form.call(null,b,cljs.core.get.call(null,args,b)));
}),cljs.core.PersistentVector.EMPTY,seq_STAR_)));
});
peanuts.core.quote_symbols = (function peanuts$core$quote_symbols(coll){
return clojure.walk.postwalk.call(null,(function (v){
if((v instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,v,null,(1),null)),(2),null));
} else {
return v;
}
}),coll);
});
peanuts.core.redlist_meta_QMARK_ = (function peanuts$core$redlist_meta_QMARK_(binding){
var map__16232 = cljs.core.meta.call(null,binding);
var map__16232__$1 = cljs.core.__destructure_map.call(null,map__16232);
var exempt = cljs.core.get.call(null,map__16232__$1,new cljs.core.Keyword(null,"exempt","exempt",-1170429472));
var redlist = cljs.core.get.call(null,map__16232__$1,new cljs.core.Keyword(null,"redlist","redlist",-268599431));
var or__4223__auto__ = exempt;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return redlist;
}
});
peanuts.core.peanut = (function peanuts$core$peanut(n,f,p__16234){
var map__16235 = p__16234;
var map__16235__$1 = cljs.core.__destructure_map.call(null,map__16235);
var meta_map = map__16235__$1;
var exempt = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"exempt","exempt",-1170429472));
var greenlist = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"greenlist","greenlist",473690767));
var redlist = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"redlist","redlist",-268599431));
var only = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var def_QMARK_ = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"def?","def?",963608395));
var sub_args = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866));
var vec__16236 = f;
var seq__16237 = cljs.core.seq.call(null,vec__16236);
var first__16238 = cljs.core.first.call(null,seq__16237);
var seq__16237__$1 = cljs.core.next.call(null,seq__16237);
var _ = first__16238;
var first__16238__$1 = cljs.core.first.call(null,seq__16237__$1);
var seq__16237__$2 = cljs.core.next.call(null,seq__16237__$1);
var args = first__16238__$1;
var body = seq__16237__$2;
var bindings = cljs.core.remove.call(null,(function (p1__16233_SHARP_){
var or__4223__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null).call(null,p1__16233_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return peanuts.core.redlist_meta_QMARK_.call(null,p1__16233_SHARP_);
}
}),peanuts.core.seq__GT_let_form.call(null,sub_args,peanuts.core.flatten_maps.call(null,peanuts.core.filter_deep.call(null,clojure.set.union.call(null,cljs.core.set.call(null,only),cljs.core.set.call(null,greenlist)),cljs.core.vec.call(null,peanuts.core.remove_deep.call(null,clojure.set.union.call(null,cljs.core.set.call(null,exempt),cljs.core.set.call(null,redlist)),args))))));
var symbol_quoted_meta_map = peanuts.core.quote_symbols.call(null,meta_map);
var G__16239 = body;
var G__16239__$1 = cljs.core.concat.call(null,bindings,G__16239)
;
var G__16239__$2 = (new cljs.core.List(null,G__16239__$1,null,(1),null))
;
var G__16239__$3 = cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),G__16239__$2)
;
var G__16239__$4 = (cljs.core.truth_(def_QMARK_)?(new cljs.core.List(null,G__16239__$3,null,(1),null)):G__16239__$3);
if(cljs.core.truth_(def_QMARK_)){
return cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,n,cljs.core.merge.call(null,symbol_quoted_meta_map,cljs.core.meta.call(null,n))),null,(1),null))))),G__16239__$4);
} else {
return G__16239__$4;
}
});
var ret__4878__auto___16242 = (function (){
peanuts.core.fc = (function peanuts$core$fc(var_args){
var G__16241 = arguments.length;
switch (G__16241) {
case 4:
return peanuts.core.fc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return peanuts.core.fc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(peanuts.core.fc.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,opts){
return peanuts.core.peanut.call(null,null,f,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"def?","def?",963608395),false], null)));
}));

(peanuts.core.fc.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("peanuts.core","fc","peanuts.core/fc",-45136189,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(peanuts.core.fc.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(peanuts.core.fc.cljs$lang$macro = true);

var ret__4878__auto___16246 = (function (){
peanuts.core.defc = (function peanuts$core$defc(var_args){
var G__16245 = arguments.length;
switch (G__16245) {
case 5:
return peanuts.core.defc.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return peanuts.core.defc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(peanuts.core.defc.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,n,f,opts){
return peanuts.core.peanut.call(null,n,f,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"def?","def?",963608395),true], null)));
}));

(peanuts.core.defc.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,n,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("peanuts.core","defc","peanuts.core/defc",333706186,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(peanuts.core.defc.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(peanuts.core.defc.cljs$lang$macro = true);

peanuts.core.merge_meta_maps = (function peanuts$core$merge_meta_maps(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16256 = arguments.length;
var i__4830__auto___16257 = (0);
while(true){
if((i__4830__auto___16257 < len__4829__auto___16256)){
args__4835__auto__.push((arguments[i__4830__auto___16257]));

var G__16258 = (i__4830__auto___16257 + (1));
i__4830__auto___16257 = G__16258;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return peanuts.core.merge_meta_maps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(peanuts.core.merge_meta_maps.cljs$core$IFn$_invoke$arity$variadic = (function (meta_map1,p__16251,other_maps){
var vec__16252 = p__16251;
var meta_map2 = cljs.core.nth.call(null,vec__16252,(0),null);
var _fnbody = vec__16252;
var G__16255 = cljs.core.apply.call(null,cljs.core.merge,meta_map1,other_maps);
if(cljs.core.map_QMARK_.call(null,meta_map2)){
return cljs.core.merge.call(null,G__16255,meta_map2);
} else {
return G__16255;
}
}));

(peanuts.core.merge_meta_maps.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(peanuts.core.merge_meta_maps.cljs$lang$applyTo = (function (seq16248){
var G__16249 = cljs.core.first.call(null,seq16248);
var seq16248__$1 = cljs.core.next.call(null,seq16248);
var G__16250 = cljs.core.first.call(null,seq16248__$1);
var seq16248__$2 = cljs.core.next.call(null,seq16248__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16249,G__16250,seq16248__$2);
}));

var ret__4878__auto___16270 = (function (){
/**
 * Takes similar arguments to defn and returns a similar result.
 * The returned function body will be wrapped in a let-block which will
 * conditionally rebind the function args to values of re-frame subscriptions.
 */
peanuts.core.defnc = (function peanuts$core$defnc(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16271 = arguments.length;
var i__4830__auto___16272 = (0);
while(true){
if((i__4830__auto___16272 < len__4829__auto___16271)){
args__4835__auto__.push((arguments[i__4830__auto___16272]));

var G__16273 = (i__4830__auto___16272 + (1));
i__4830__auto___16272 = G__16273;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return peanuts.core.defnc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(peanuts.core.defnc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,p__16263){
var vec__16264 = p__16263;
var seq__16265 = cljs.core.seq.call(null,vec__16264);
var first__16266 = cljs.core.first.call(null,seq__16265);
var seq__16265__$1 = cljs.core.next.call(null,seq__16265);
var doc_str = first__16266;
var first__16266__$1 = cljs.core.first.call(null,seq__16265__$1);
var seq__16265__$2 = cljs.core.next.call(null,seq__16265__$1);
var meta_map = first__16266__$1;
var vec__16267 = seq__16265__$2;
var seq__16268 = cljs.core.seq.call(null,vec__16267);
var first__16269 = cljs.core.first.call(null,seq__16268);
var seq__16268__$1 = cljs.core.next.call(null,seq__16268);
var args = first__16269;
var body = seq__16268__$1;
var args_AMPERSAND_body = vec__16267;
if(cljs.core.vector_QMARK_.call(null,doc_str)){
var args_STAR_ = doc_str;
var body_STAR_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_map], null),args_AMPERSAND_body);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("peanuts.core","defnc","peanuts.core/defnc",-267066601,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,args_STAR_,null,(1),null)),body_STAR_)));
} else {
if(cljs.core.map_QMARK_.call(null,doc_str)){
var meta_map_STAR_ = doc_str;
var args_STAR_ = meta_map;
var body_STAR_ = args_AMPERSAND_body;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("peanuts.core","defnc","peanuts.core/defnc",-267066601,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,meta_map_STAR_,null,(1),null)),(new cljs.core.List(null,args_STAR_,null,(1),null)),body_STAR_)));
} else {
if(cljs.core.vector_QMARK_.call(null,meta_map)){
var args_STAR_ = meta_map;
var body_STAR_ = args_AMPERSAND_body;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("peanuts.core","defnc","peanuts.core/defnc",-267066601,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,doc_str,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,args_STAR_,null,(1),null)),body_STAR_)));
} else {
return peanuts.core.peanut.call(null,n,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),body))),peanuts.core.merge_meta_maps.call(null,meta_map,body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"def?","def?",963608395),true], null),(cljs.core.truth_(doc_str)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc_str], null):null)));

}
}
}
}));

(peanuts.core.defnc.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(peanuts.core.defnc.cljs$lang$applyTo = (function (seq16259){
var G__16260 = cljs.core.first.call(null,seq16259);
var seq16259__$1 = cljs.core.next.call(null,seq16259);
var G__16261 = cljs.core.first.call(null,seq16259__$1);
var seq16259__$2 = cljs.core.next.call(null,seq16259__$1);
var G__16262 = cljs.core.first.call(null,seq16259__$2);
var seq16259__$3 = cljs.core.next.call(null,seq16259__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16260,G__16261,G__16262,seq16259__$3);
}));

return null;
})()
;
(peanuts.core.defnc.cljs$lang$macro = true);

var ret__4878__auto___16281 = (function (){
/**
 * Returns an fn form.
 * The returned function body will be wrapped in a let-block which will
 * conditionally rebind the function args to values of re-frame subscriptions.
 */
peanuts.core.fnc = (function peanuts$core$fnc(var_args){
var args__4835__auto__ = [];
var len__4829__auto___16282 = arguments.length;
var i__4830__auto___16283 = (0);
while(true){
if((i__4830__auto___16283 < len__4829__auto___16282)){
args__4835__auto__.push((arguments[i__4830__auto___16283]));

var G__16284 = (i__4830__auto___16283 + (1));
i__4830__auto___16283 = G__16284;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return peanuts.core.fnc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(peanuts.core.fnc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16277){
var vec__16278 = p__16277;
var seq__16279 = cljs.core.seq.call(null,vec__16278);
var first__16280 = cljs.core.first.call(null,seq__16279);
var seq__16279__$1 = cljs.core.next.call(null,seq__16279);
var opts = first__16280;
var first__16280__$1 = cljs.core.first.call(null,seq__16279__$1);
var seq__16279__$2 = cljs.core.next.call(null,seq__16279__$1);
var args = first__16280__$1;
var body = seq__16279__$2;
if(cljs.core.vector_QMARK_.call(null,opts)){
var body_STAR_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null),body);
var args_STAR_ = opts;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("peanuts.core","fnc","peanuts.core/fnc",-231510196,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,args_STAR_,null,(1),null)),body_STAR_)));
} else {
return peanuts.core.peanut.call(null,null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),body))),peanuts.core.merge_meta_maps.call(null,opts,body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"def?","def?",963608395),false], null)));
}
}));

(peanuts.core.fnc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(peanuts.core.fnc.cljs$lang$applyTo = (function (seq16274){
var G__16275 = cljs.core.first.call(null,seq16274);
var seq16274__$1 = cljs.core.next.call(null,seq16274);
var G__16276 = cljs.core.first.call(null,seq16274__$1);
var seq16274__$2 = cljs.core.next.call(null,seq16274__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16275,G__16276,seq16274__$2);
}));

return null;
})()
;
(peanuts.core.fnc.cljs$lang$macro = true);

