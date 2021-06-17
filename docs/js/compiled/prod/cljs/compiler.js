// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__15555 = s;
var map__15555__$1 = cljs.core.__destructure_map.call(null,map__15555);
var name = cljs.core.get.call(null,map__15555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15555__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15557 = info;
var map__15558 = G__15557;
var map__15558__$1 = cljs.core.__destructure_map.call(null,map__15558);
var shadow = cljs.core.get.call(null,map__15558__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15557__$1 = G__15557;
while(true){
var d__$2 = d__$1;
var map__15560 = G__15557__$1;
var map__15560__$1 = cljs.core.__destructure_map.call(null,map__15560);
var shadow__$1 = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__15561 = (d__$2 + (1));
var G__15562 = shadow__$1;
d__$1 = G__15561;
G__15557__$1 = G__15562;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15563){
var map__15564 = p__15563;
var map__15564__$1 = cljs.core.__destructure_map.call(null,map__15564);
var name_var = map__15564__$1;
var name = cljs.core.get.call(null,map__15564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__15564__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15565 = info;
var map__15565__$1 = cljs.core.__destructure_map.call(null,map__15565);
var ns = cljs.core.get.call(null,map__15565__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__15565__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__15567 = arguments.length;
switch (G__15567) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11639,11639,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__15569 = cp;
switch (G__15569) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__15571_15575 = cljs.core.seq.call(null,s);
var chunk__15572_15576 = null;
var count__15573_15577 = (0);
var i__15574_15578 = (0);
while(true){
if((i__15574_15578 < count__15573_15577)){
var c_15579 = cljs.core._nth.call(null,chunk__15572_15576,i__15574_15578);
sb.append(cljs.compiler.escape_char.call(null,c_15579));


var G__15580 = seq__15571_15575;
var G__15581 = chunk__15572_15576;
var G__15582 = count__15573_15577;
var G__15583 = (i__15574_15578 + (1));
seq__15571_15575 = G__15580;
chunk__15572_15576 = G__15581;
count__15573_15577 = G__15582;
i__15574_15578 = G__15583;
continue;
} else {
var temp__5720__auto___15584 = cljs.core.seq.call(null,seq__15571_15575);
if(temp__5720__auto___15584){
var seq__15571_15585__$1 = temp__5720__auto___15584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15571_15585__$1)){
var c__4649__auto___15586 = cljs.core.chunk_first.call(null,seq__15571_15585__$1);
var G__15587 = cljs.core.chunk_rest.call(null,seq__15571_15585__$1);
var G__15588 = c__4649__auto___15586;
var G__15589 = cljs.core.count.call(null,c__4649__auto___15586);
var G__15590 = (0);
seq__15571_15575 = G__15587;
chunk__15572_15576 = G__15588;
count__15573_15577 = G__15589;
i__15574_15578 = G__15590;
continue;
} else {
var c_15591 = cljs.core.first.call(null,seq__15571_15585__$1);
sb.append(cljs.compiler.escape_char.call(null,c_15591));


var G__15592 = cljs.core.next.call(null,seq__15571_15585__$1);
var G__15593 = null;
var G__15594 = (0);
var G__15595 = (0);
seq__15571_15575 = G__15592;
chunk__15572_15576 = G__15593;
count__15573_15577 = G__15594;
i__15574_15578 = G__15595;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15596_15599 = ast;
var map__15596_15600__$1 = cljs.core.__destructure_map.call(null,map__15596_15599);
var env_15601 = cljs.core.get.call(null,map__15596_15600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15601))){
var map__15597_15602 = env_15601;
var map__15597_15603__$1 = cljs.core.__destructure_map.call(null,map__15597_15602);
var line_15604 = cljs.core.get.call(null,map__15597_15603__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15605 = cljs.core.get.call(null,map__15597_15603__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__15598 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__15598,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15598;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15604 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15605)?(column_15605 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__15614 = arguments.length;
switch (G__15614) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___15621 = arguments.length;
var i__4830__auto___15622 = (0);
while(true){
if((i__4830__auto___15622 < len__4829__auto___15621)){
args_arr__4850__auto__.push((arguments[i__4830__auto___15622]));

var G__15623 = (i__4830__auto___15622 + (1));
i__4830__auto___15622 = G__15623;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4851__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_15624 = (function (){var G__15615 = a;
if((!(typeof a === 'string'))){
return G__15615.toString();
} else {
return G__15615;
}
})();
var temp__5724__auto___15625 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___15625 == null)){
} else {
var sm_data_15626 = temp__5724__auto___15625;
cljs.core.swap_BANG_.call(null,sm_data_15626,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__15606_SHARP_){
return (p1__15606_SHARP_ + s_15624.length);
}));
}

cljs.core.print.call(null,s_15624);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__15616 = cljs.core.seq.call(null,xs);
var chunk__15617 = null;
var count__15618 = (0);
var i__15619 = (0);
while(true){
if((i__15619 < count__15618)){
var x = cljs.core._nth.call(null,chunk__15617,i__15619);
cljs.compiler.emits.call(null,x);


var G__15627 = seq__15616;
var G__15628 = chunk__15617;
var G__15629 = count__15618;
var G__15630 = (i__15619 + (1));
seq__15616 = G__15627;
chunk__15617 = G__15628;
count__15618 = G__15629;
i__15619 = G__15630;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15616);
if(temp__5720__auto__){
var seq__15616__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15616__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__15616__$1);
var G__15631 = cljs.core.chunk_rest.call(null,seq__15616__$1);
var G__15632 = c__4649__auto__;
var G__15633 = cljs.core.count.call(null,c__4649__auto__);
var G__15634 = (0);
seq__15616 = G__15631;
chunk__15617 = G__15632;
count__15618 = G__15633;
i__15619 = G__15634;
continue;
} else {
var x = cljs.core.first.call(null,seq__15616__$1);
cljs.compiler.emits.call(null,x);


var G__15635 = cljs.core.next.call(null,seq__15616__$1);
var G__15636 = null;
var G__15637 = (0);
var G__15638 = (0);
seq__15616 = G__15635;
chunk__15617 = G__15636;
count__15618 = G__15637;
i__15619 = G__15638;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq15608){
var G__15609 = cljs.core.first.call(null,seq15608);
var seq15608__$1 = cljs.core.next.call(null,seq15608);
var G__15610 = cljs.core.first.call(null,seq15608__$1);
var seq15608__$2 = cljs.core.next.call(null,seq15608__$1);
var G__15611 = cljs.core.first.call(null,seq15608__$2);
var seq15608__$3 = cljs.core.next.call(null,seq15608__$2);
var G__15612 = cljs.core.first.call(null,seq15608__$3);
var seq15608__$4 = cljs.core.next.call(null,seq15608__$3);
var G__15613 = cljs.core.first.call(null,seq15608__$4);
var seq15608__$5 = cljs.core.next.call(null,seq15608__$4);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15609,G__15610,G__15611,G__15612,G__15613,seq15608__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15639){
var map__15640 = p__15639;
var map__15640__$1 = cljs.core.__destructure_map.call(null,map__15640);
var m = map__15640__$1;
var gen_line = cljs.core.get.call(null,map__15640__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15648 = arguments.length;
switch (G__15648) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___15654 = arguments.length;
var i__4830__auto___15655 = (0);
while(true){
if((i__4830__auto___15655 < len__4829__auto___15654)){
args_arr__4850__auto__.push((arguments[i__4830__auto___15655]));

var G__15656 = (i__4830__auto___15655 + (1));
i__4830__auto___15655 = G__15656;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4851__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__15649_15657 = cljs.core.seq.call(null,xs);
var chunk__15650_15658 = null;
var count__15651_15659 = (0);
var i__15652_15660 = (0);
while(true){
if((i__15652_15660 < count__15651_15659)){
var x_15661 = cljs.core._nth.call(null,chunk__15650_15658,i__15652_15660);
cljs.compiler.emits.call(null,x_15661);


var G__15662 = seq__15649_15657;
var G__15663 = chunk__15650_15658;
var G__15664 = count__15651_15659;
var G__15665 = (i__15652_15660 + (1));
seq__15649_15657 = G__15662;
chunk__15650_15658 = G__15663;
count__15651_15659 = G__15664;
i__15652_15660 = G__15665;
continue;
} else {
var temp__5720__auto___15666 = cljs.core.seq.call(null,seq__15649_15657);
if(temp__5720__auto___15666){
var seq__15649_15667__$1 = temp__5720__auto___15666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15649_15667__$1)){
var c__4649__auto___15668 = cljs.core.chunk_first.call(null,seq__15649_15667__$1);
var G__15669 = cljs.core.chunk_rest.call(null,seq__15649_15667__$1);
var G__15670 = c__4649__auto___15668;
var G__15671 = cljs.core.count.call(null,c__4649__auto___15668);
var G__15672 = (0);
seq__15649_15657 = G__15669;
chunk__15650_15658 = G__15670;
count__15651_15659 = G__15671;
i__15652_15660 = G__15672;
continue;
} else {
var x_15673 = cljs.core.first.call(null,seq__15649_15667__$1);
cljs.compiler.emits.call(null,x_15673);


var G__15674 = cljs.core.next.call(null,seq__15649_15667__$1);
var G__15675 = null;
var G__15676 = (0);
var G__15677 = (0);
seq__15649_15657 = G__15674;
chunk__15650_15658 = G__15675;
count__15651_15659 = G__15676;
i__15652_15660 = G__15677;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15642){
var G__15643 = cljs.core.first.call(null,seq15642);
var seq15642__$1 = cljs.core.next.call(null,seq15642);
var G__15644 = cljs.core.first.call(null,seq15642__$1);
var seq15642__$2 = cljs.core.next.call(null,seq15642__$1);
var G__15645 = cljs.core.first.call(null,seq15642__$2);
var seq15642__$3 = cljs.core.next.call(null,seq15642__$2);
var G__15646 = cljs.core.first.call(null,seq15642__$3);
var seq15642__$4 = cljs.core.next.call(null,seq15642__$3);
var G__15647 = cljs.core.first.call(null,seq15642__$4);
var seq15642__$5 = cljs.core.next.call(null,seq15642__$4);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15643,G__15644,G__15645,G__15646,G__15647,seq15642__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15678_15682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15679_15683 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15680_15684 = true;
var _STAR_print_fn_STAR__temp_val__15681_15685 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15680_15684);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15681_15685);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15679_15683);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15678_15682);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4712__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__15686 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__15686,(0),null);
var name = cljs.core.nth.call(null,vec__15686,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__15689 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__15689,(0),null);
var flags = cljs.core.nth.call(null,vec__15689,(1),null);
var pattern = cljs.core.nth.call(null,vec__15689,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4221__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4221__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4221__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4221__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__15692_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__15692_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15694){
var map__15695 = p__15694;
var map__15695__$1 = cljs.core.__destructure_map.call(null,map__15695);
var ast = map__15695__$1;
var info = cljs.core.get.call(null,map__15695__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15695__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15696 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15696__$1 = cljs.core.__destructure_map.call(null,map__15696);
var cenv = map__15696__$1;
var options = cljs.core.get.call(null,map__15696__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4223__auto__ = js_module_name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__15697 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4221__auto__;
}
})())){
return clojure.set.difference.call(null,G__15697,cljs.analyzer.es5_allowed);
} else {
return G__15697;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4223__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15698 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15698,reserved);
} else {
return G__15698;
}
})();
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15699_15700 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15699_15701__$1 = (((G__15699_15700 instanceof cljs.core.Keyword))?G__15699_15700.fqn:null);
switch (G__15699_15701__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4221__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15703){
var map__15704 = p__15703;
var map__15704__$1 = cljs.core.__destructure_map.call(null,map__15704);
var arg = map__15704__$1;
var env = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15705 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15705__$1 = cljs.core.__destructure_map.call(null,map__15705);
var name = cljs.core.get.call(null,map__15705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15706){
var map__15707 = p__15706;
var map__15707__$1 = cljs.core.__destructure_map.call(null,map__15707);
var expr = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__15708_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15708_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15709){
var map__15710 = p__15709;
var map__15710__$1 = cljs.core.__destructure_map.call(null,map__15710);
var env = cljs.core.get.call(null,map__15710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15710__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15710__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15711){
var map__15712 = p__15711;
var map__15712__$1 = cljs.core.__destructure_map.call(null,map__15712);
var items = cljs.core.get.call(null,map__15712__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__15713_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15713_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15714){
var map__15715 = p__15714;
var map__15715__$1 = cljs.core.__destructure_map.call(null,map__15715);
var items = cljs.core.get.call(null,map__15715__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___15738 = cljs.core.seq.call(null,items);
if(temp__5720__auto___15738){
var items_15739__$1 = temp__5720__auto___15738;
var vec__15716_15740 = items_15739__$1;
var seq__15717_15741 = cljs.core.seq.call(null,vec__15716_15740);
var first__15718_15742 = cljs.core.first.call(null,seq__15717_15741);
var seq__15717_15743__$1 = cljs.core.next.call(null,seq__15717_15741);
var vec__15719_15744 = first__15718_15742;
var k_15745 = cljs.core.nth.call(null,vec__15719_15744,(0),null);
var v_15746 = cljs.core.nth.call(null,vec__15719_15744,(1),null);
var r_15747 = seq__15717_15743__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15745),"\": ",emit_js_object_val.call(null,v_15746));

var seq__15722_15748 = cljs.core.seq.call(null,r_15747);
var chunk__15723_15749 = null;
var count__15724_15750 = (0);
var i__15725_15751 = (0);
while(true){
if((i__15725_15751 < count__15724_15750)){
var vec__15732_15752 = cljs.core._nth.call(null,chunk__15723_15749,i__15725_15751);
var k_15753__$1 = cljs.core.nth.call(null,vec__15732_15752,(0),null);
var v_15754__$1 = cljs.core.nth.call(null,vec__15732_15752,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15753__$1),"\": ",emit_js_object_val.call(null,v_15754__$1));


var G__15755 = seq__15722_15748;
var G__15756 = chunk__15723_15749;
var G__15757 = count__15724_15750;
var G__15758 = (i__15725_15751 + (1));
seq__15722_15748 = G__15755;
chunk__15723_15749 = G__15756;
count__15724_15750 = G__15757;
i__15725_15751 = G__15758;
continue;
} else {
var temp__5720__auto___15759__$1 = cljs.core.seq.call(null,seq__15722_15748);
if(temp__5720__auto___15759__$1){
var seq__15722_15760__$1 = temp__5720__auto___15759__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15722_15760__$1)){
var c__4649__auto___15761 = cljs.core.chunk_first.call(null,seq__15722_15760__$1);
var G__15762 = cljs.core.chunk_rest.call(null,seq__15722_15760__$1);
var G__15763 = c__4649__auto___15761;
var G__15764 = cljs.core.count.call(null,c__4649__auto___15761);
var G__15765 = (0);
seq__15722_15748 = G__15762;
chunk__15723_15749 = G__15763;
count__15724_15750 = G__15764;
i__15725_15751 = G__15765;
continue;
} else {
var vec__15735_15766 = cljs.core.first.call(null,seq__15722_15760__$1);
var k_15767__$1 = cljs.core.nth.call(null,vec__15735_15766,(0),null);
var v_15768__$1 = cljs.core.nth.call(null,vec__15735_15766,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15767__$1),"\": ",emit_js_object_val.call(null,v_15768__$1));


var G__15769 = cljs.core.next.call(null,seq__15722_15760__$1);
var G__15770 = null;
var G__15771 = (0);
var G__15772 = (0);
seq__15722_15748 = G__15769;
chunk__15723_15749 = G__15770;
count__15724_15750 = G__15771;
i__15725_15751 = G__15772;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15773){
var map__15774 = p__15773;
var map__15774__$1 = cljs.core.__destructure_map.call(null,map__15774);
var keys = cljs.core.get.call(null,map__15774__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15774__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__15774__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15775){
var map__15776 = p__15775;
var map__15776__$1 = cljs.core.__destructure_map.call(null,map__15776);
var items = cljs.core.get.call(null,map__15776__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15776__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15777){
var map__15778 = p__15777;
var map__15778__$1 = cljs.core.__destructure_map.call(null,map__15778);
var expr = cljs.core.get.call(null,map__15778__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15779){
var map__15780 = p__15779;
var map__15780__$1 = cljs.core.__destructure_map.call(null,map__15780);
var form = cljs.core.get.call(null,map__15780__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15780__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15781 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15781__$1 = cljs.core.__destructure_map.call(null,map__15781);
var op = cljs.core.get.call(null,map__15781__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15781__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15781__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4223__auto__ = (function (){var and__4221__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4221__auto__){
var and__4221__auto____$1 = form;
if(cljs.core.truth_(and__4221__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = (!((const_expr == null)));
if(and__4221__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4221__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__15782 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15782__$1 = cljs.core.__destructure_map.call(null,map__15782);
var op = cljs.core.get.call(null,map__15782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15782__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15782__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4223__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var and__4221__auto__ = (!((const_expr == null)));
if(and__4221__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4221__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4223__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15783){
var map__15784 = p__15783;
var map__15784__$1 = cljs.core.__destructure_map.call(null,map__15784);
var test = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4223__auto__ = unchecked;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15785){
var map__15786 = p__15785;
var map__15786__$1 = cljs.core.__destructure_map.call(null,map__15786);
var v = cljs.core.get.call(null,map__15786__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__15786__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__15786__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__15787_15815 = cljs.core.seq.call(null,nodes);
var chunk__15788_15816 = null;
var count__15789_15817 = (0);
var i__15790_15818 = (0);
while(true){
if((i__15790_15818 < count__15789_15817)){
var map__15803_15819 = cljs.core._nth.call(null,chunk__15788_15816,i__15790_15818);
var map__15803_15820__$1 = cljs.core.__destructure_map.call(null,map__15803_15819);
var ts_15821 = cljs.core.get.call(null,map__15803_15820__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15804_15822 = cljs.core.get.call(null,map__15803_15820__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15804_15823__$1 = cljs.core.__destructure_map.call(null,map__15804_15822);
var then_15824 = cljs.core.get.call(null,map__15804_15823__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15805_15825 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15821));
var chunk__15806_15826 = null;
var count__15807_15827 = (0);
var i__15808_15828 = (0);
while(true){
if((i__15808_15828 < count__15807_15827)){
var test_15829 = cljs.core._nth.call(null,chunk__15806_15826,i__15808_15828);
cljs.compiler.emitln.call(null,"case ",test_15829,":");


var G__15830 = seq__15805_15825;
var G__15831 = chunk__15806_15826;
var G__15832 = count__15807_15827;
var G__15833 = (i__15808_15828 + (1));
seq__15805_15825 = G__15830;
chunk__15806_15826 = G__15831;
count__15807_15827 = G__15832;
i__15808_15828 = G__15833;
continue;
} else {
var temp__5720__auto___15834 = cljs.core.seq.call(null,seq__15805_15825);
if(temp__5720__auto___15834){
var seq__15805_15835__$1 = temp__5720__auto___15834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15805_15835__$1)){
var c__4649__auto___15836 = cljs.core.chunk_first.call(null,seq__15805_15835__$1);
var G__15837 = cljs.core.chunk_rest.call(null,seq__15805_15835__$1);
var G__15838 = c__4649__auto___15836;
var G__15839 = cljs.core.count.call(null,c__4649__auto___15836);
var G__15840 = (0);
seq__15805_15825 = G__15837;
chunk__15806_15826 = G__15838;
count__15807_15827 = G__15839;
i__15808_15828 = G__15840;
continue;
} else {
var test_15841 = cljs.core.first.call(null,seq__15805_15835__$1);
cljs.compiler.emitln.call(null,"case ",test_15841,":");


var G__15842 = cljs.core.next.call(null,seq__15805_15835__$1);
var G__15843 = null;
var G__15844 = (0);
var G__15845 = (0);
seq__15805_15825 = G__15842;
chunk__15806_15826 = G__15843;
count__15807_15827 = G__15844;
i__15808_15828 = G__15845;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15824);
} else {
cljs.compiler.emitln.call(null,then_15824);
}

cljs.compiler.emitln.call(null,"break;");


var G__15846 = seq__15787_15815;
var G__15847 = chunk__15788_15816;
var G__15848 = count__15789_15817;
var G__15849 = (i__15790_15818 + (1));
seq__15787_15815 = G__15846;
chunk__15788_15816 = G__15847;
count__15789_15817 = G__15848;
i__15790_15818 = G__15849;
continue;
} else {
var temp__5720__auto___15850 = cljs.core.seq.call(null,seq__15787_15815);
if(temp__5720__auto___15850){
var seq__15787_15851__$1 = temp__5720__auto___15850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15787_15851__$1)){
var c__4649__auto___15852 = cljs.core.chunk_first.call(null,seq__15787_15851__$1);
var G__15853 = cljs.core.chunk_rest.call(null,seq__15787_15851__$1);
var G__15854 = c__4649__auto___15852;
var G__15855 = cljs.core.count.call(null,c__4649__auto___15852);
var G__15856 = (0);
seq__15787_15815 = G__15853;
chunk__15788_15816 = G__15854;
count__15789_15817 = G__15855;
i__15790_15818 = G__15856;
continue;
} else {
var map__15809_15857 = cljs.core.first.call(null,seq__15787_15851__$1);
var map__15809_15858__$1 = cljs.core.__destructure_map.call(null,map__15809_15857);
var ts_15859 = cljs.core.get.call(null,map__15809_15858__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15810_15860 = cljs.core.get.call(null,map__15809_15858__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15810_15861__$1 = cljs.core.__destructure_map.call(null,map__15810_15860);
var then_15862 = cljs.core.get.call(null,map__15810_15861__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15811_15863 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15859));
var chunk__15812_15864 = null;
var count__15813_15865 = (0);
var i__15814_15866 = (0);
while(true){
if((i__15814_15866 < count__15813_15865)){
var test_15867 = cljs.core._nth.call(null,chunk__15812_15864,i__15814_15866);
cljs.compiler.emitln.call(null,"case ",test_15867,":");


var G__15868 = seq__15811_15863;
var G__15869 = chunk__15812_15864;
var G__15870 = count__15813_15865;
var G__15871 = (i__15814_15866 + (1));
seq__15811_15863 = G__15868;
chunk__15812_15864 = G__15869;
count__15813_15865 = G__15870;
i__15814_15866 = G__15871;
continue;
} else {
var temp__5720__auto___15872__$1 = cljs.core.seq.call(null,seq__15811_15863);
if(temp__5720__auto___15872__$1){
var seq__15811_15873__$1 = temp__5720__auto___15872__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15811_15873__$1)){
var c__4649__auto___15874 = cljs.core.chunk_first.call(null,seq__15811_15873__$1);
var G__15875 = cljs.core.chunk_rest.call(null,seq__15811_15873__$1);
var G__15876 = c__4649__auto___15874;
var G__15877 = cljs.core.count.call(null,c__4649__auto___15874);
var G__15878 = (0);
seq__15811_15863 = G__15875;
chunk__15812_15864 = G__15876;
count__15813_15865 = G__15877;
i__15814_15866 = G__15878;
continue;
} else {
var test_15879 = cljs.core.first.call(null,seq__15811_15873__$1);
cljs.compiler.emitln.call(null,"case ",test_15879,":");


var G__15880 = cljs.core.next.call(null,seq__15811_15873__$1);
var G__15881 = null;
var G__15882 = (0);
var G__15883 = (0);
seq__15811_15863 = G__15880;
chunk__15812_15864 = G__15881;
count__15813_15865 = G__15882;
i__15814_15866 = G__15883;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15862);
} else {
cljs.compiler.emitln.call(null,then_15862);
}

cljs.compiler.emitln.call(null,"break;");


var G__15884 = cljs.core.next.call(null,seq__15787_15851__$1);
var G__15885 = null;
var G__15886 = (0);
var G__15887 = (0);
seq__15787_15815 = G__15884;
chunk__15788_15816 = G__15885;
count__15789_15817 = G__15886;
i__15790_15818 = G__15887;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15888){
var map__15889 = p__15888;
var map__15889__$1 = cljs.core.__destructure_map.call(null,map__15889);
var throw$ = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__15891 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15891,(0),null);
var rstr = cljs.core.nth.call(null,vec__15891,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__15890_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15890_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15894 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__15894,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15894;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__15895_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15895_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15896 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15897 = cljs.core.seq.call(null,vec__15896);
var first__15898 = cljs.core.first.call(null,seq__15897);
var seq__15897__$1 = cljs.core.next.call(null,seq__15897);
var p = first__15898;
var first__15898__$1 = cljs.core.first.call(null,seq__15897__$1);
var seq__15897__$2 = cljs.core.next.call(null,seq__15897__$1);
var ts = first__15898__$1;
var first__15898__$2 = cljs.core.first.call(null,seq__15897__$2);
var seq__15897__$3 = cljs.core.next.call(null,seq__15897__$2);
var n = first__15898__$2;
var xs = seq__15897__$3;
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4221__auto__){
var and__4221__auto____$1 = ts;
if(cljs.core.truth_(and__4221__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__15899 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15900 = cljs.core.seq.call(null,vec__15899);
var first__15901 = cljs.core.first.call(null,seq__15900);
var seq__15900__$1 = cljs.core.next.call(null,seq__15900);
var p = first__15901;
var first__15901__$1 = cljs.core.first.call(null,seq__15900__$1);
var seq__15900__$2 = cljs.core.next.call(null,seq__15900__$1);
var ts = first__15901__$1;
var xs = seq__15900__$2;
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4221__auto__){
var and__4221__auto____$1 = ts;
if(cljs.core.truth_(and__4221__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__15904 = arguments.length;
switch (G__15904) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__15912 = cljs.core.map.call(null,(function (p1__15902_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15902_SHARP_);
} else {
return p1__15902_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__15913 = cljs.core.seq.call(null,vec__15912);
var first__15914 = cljs.core.first.call(null,seq__15913);
var seq__15913__$1 = cljs.core.next.call(null,seq__15913);
var x = first__15914;
var ys = seq__15913__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15915 = cljs.core.seq.call(null,ys);
var chunk__15916 = null;
var count__15917 = (0);
var i__15918 = (0);
while(true){
if((i__15918 < count__15917)){
var next_line = cljs.core._nth.call(null,chunk__15916,i__15918);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15924 = seq__15915;
var G__15925 = chunk__15916;
var G__15926 = count__15917;
var G__15927 = (i__15918 + (1));
seq__15915 = G__15924;
chunk__15916 = G__15925;
count__15917 = G__15926;
i__15918 = G__15927;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15915);
if(temp__5720__auto__){
var seq__15915__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15915__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__15915__$1);
var G__15928 = cljs.core.chunk_rest.call(null,seq__15915__$1);
var G__15929 = c__4649__auto__;
var G__15930 = cljs.core.count.call(null,c__4649__auto__);
var G__15931 = (0);
seq__15915 = G__15928;
chunk__15916 = G__15929;
count__15917 = G__15930;
i__15918 = G__15931;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15915__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15932 = cljs.core.next.call(null,seq__15915__$1);
var G__15933 = null;
var G__15934 = (0);
var G__15935 = (0);
seq__15915 = G__15932;
chunk__15916 = G__15933;
count__15917 = G__15934;
i__15918 = G__15935;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__15919_15936 = cljs.core.seq.call(null,docs__$2);
var chunk__15920_15937 = null;
var count__15921_15938 = (0);
var i__15922_15939 = (0);
while(true){
if((i__15922_15939 < count__15921_15938)){
var e_15940 = cljs.core._nth.call(null,chunk__15920_15937,i__15922_15939);
if(cljs.core.truth_(e_15940)){
print_comment_lines.call(null,e_15940);
} else {
}


var G__15941 = seq__15919_15936;
var G__15942 = chunk__15920_15937;
var G__15943 = count__15921_15938;
var G__15944 = (i__15922_15939 + (1));
seq__15919_15936 = G__15941;
chunk__15920_15937 = G__15942;
count__15921_15938 = G__15943;
i__15922_15939 = G__15944;
continue;
} else {
var temp__5720__auto___15945 = cljs.core.seq.call(null,seq__15919_15936);
if(temp__5720__auto___15945){
var seq__15919_15946__$1 = temp__5720__auto___15945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15919_15946__$1)){
var c__4649__auto___15947 = cljs.core.chunk_first.call(null,seq__15919_15946__$1);
var G__15948 = cljs.core.chunk_rest.call(null,seq__15919_15946__$1);
var G__15949 = c__4649__auto___15947;
var G__15950 = cljs.core.count.call(null,c__4649__auto___15947);
var G__15951 = (0);
seq__15919_15936 = G__15948;
chunk__15920_15937 = G__15949;
count__15921_15938 = G__15950;
i__15922_15939 = G__15951;
continue;
} else {
var e_15952 = cljs.core.first.call(null,seq__15919_15946__$1);
if(cljs.core.truth_(e_15952)){
print_comment_lines.call(null,e_15952);
} else {
}


var G__15953 = cljs.core.next.call(null,seq__15919_15946__$1);
var G__15954 = null;
var G__15955 = (0);
var G__15956 = (0);
seq__15919_15936 = G__15953;
chunk__15920_15937 = G__15954;
count__15921_15938 = G__15955;
i__15922_15939 = G__15956;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4221__auto__ = cljs.core.some.call(null,(function (p1__15958_SHARP_){
return goog.string.startsWith(p1__15958_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = opts;
if(cljs.core.truth_(and__4221__auto____$1)){
var and__4221__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4221__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4221__auto____$2;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15959){
var map__15960 = p__15959;
var map__15960__$1 = cljs.core.__destructure_map.call(null,map__15960);
var doc = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__15960__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4223__auto__ = init;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4221__auto__)){
return test;
} else {
return and__4221__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15961){
var map__15962 = p__15961;
var map__15962__$1 = cljs.core.__destructure_map.call(null,map__15962);
var name = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15962__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15963_15987 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15964_15988 = null;
var count__15965_15989 = (0);
var i__15966_15990 = (0);
while(true){
if((i__15966_15990 < count__15965_15989)){
var vec__15973_15991 = cljs.core._nth.call(null,chunk__15964_15988,i__15966_15990);
var i_15992 = cljs.core.nth.call(null,vec__15973_15991,(0),null);
var param_15993 = cljs.core.nth.call(null,vec__15973_15991,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15993);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15994 = seq__15963_15987;
var G__15995 = chunk__15964_15988;
var G__15996 = count__15965_15989;
var G__15997 = (i__15966_15990 + (1));
seq__15963_15987 = G__15994;
chunk__15964_15988 = G__15995;
count__15965_15989 = G__15996;
i__15966_15990 = G__15997;
continue;
} else {
var temp__5720__auto___15998 = cljs.core.seq.call(null,seq__15963_15987);
if(temp__5720__auto___15998){
var seq__15963_15999__$1 = temp__5720__auto___15998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15963_15999__$1)){
var c__4649__auto___16000 = cljs.core.chunk_first.call(null,seq__15963_15999__$1);
var G__16001 = cljs.core.chunk_rest.call(null,seq__15963_15999__$1);
var G__16002 = c__4649__auto___16000;
var G__16003 = cljs.core.count.call(null,c__4649__auto___16000);
var G__16004 = (0);
seq__15963_15987 = G__16001;
chunk__15964_15988 = G__16002;
count__15965_15989 = G__16003;
i__15966_15990 = G__16004;
continue;
} else {
var vec__15976_16005 = cljs.core.first.call(null,seq__15963_15999__$1);
var i_16006 = cljs.core.nth.call(null,vec__15976_16005,(0),null);
var param_16007 = cljs.core.nth.call(null,vec__15976_16005,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16007);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__16008 = cljs.core.next.call(null,seq__15963_15999__$1);
var G__16009 = null;
var G__16010 = (0);
var G__16011 = (0);
seq__15963_15987 = G__16008;
chunk__15964_15988 = G__16009;
count__15965_15989 = G__16010;
i__15966_15990 = G__16011;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15979_16012 = cljs.core.seq.call(null,params);
var chunk__15980_16013 = null;
var count__15981_16014 = (0);
var i__15982_16015 = (0);
while(true){
if((i__15982_16015 < count__15981_16014)){
var param_16016 = cljs.core._nth.call(null,chunk__15980_16013,i__15982_16015);
cljs.compiler.emit.call(null,param_16016);

if(cljs.core._EQ_.call(null,param_16016,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16017 = seq__15979_16012;
var G__16018 = chunk__15980_16013;
var G__16019 = count__15981_16014;
var G__16020 = (i__15982_16015 + (1));
seq__15979_16012 = G__16017;
chunk__15980_16013 = G__16018;
count__15981_16014 = G__16019;
i__15982_16015 = G__16020;
continue;
} else {
var temp__5720__auto___16021 = cljs.core.seq.call(null,seq__15979_16012);
if(temp__5720__auto___16021){
var seq__15979_16022__$1 = temp__5720__auto___16021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15979_16022__$1)){
var c__4649__auto___16023 = cljs.core.chunk_first.call(null,seq__15979_16022__$1);
var G__16024 = cljs.core.chunk_rest.call(null,seq__15979_16022__$1);
var G__16025 = c__4649__auto___16023;
var G__16026 = cljs.core.count.call(null,c__4649__auto___16023);
var G__16027 = (0);
seq__15979_16012 = G__16024;
chunk__15980_16013 = G__16025;
count__15981_16014 = G__16026;
i__15982_16015 = G__16027;
continue;
} else {
var param_16028 = cljs.core.first.call(null,seq__15979_16022__$1);
cljs.compiler.emit.call(null,param_16028);

if(cljs.core._EQ_.call(null,param_16028,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16029 = cljs.core.next.call(null,seq__15979_16022__$1);
var G__16030 = null;
var G__16031 = (0);
var G__16032 = (0);
seq__15979_16012 = G__16029;
chunk__15980_16013 = G__16030;
count__15981_16014 = G__16031;
i__15982_16015 = G__16032;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15983_16033 = cljs.core.seq.call(null,params);
var chunk__15984_16034 = null;
var count__15985_16035 = (0);
var i__15986_16036 = (0);
while(true){
if((i__15986_16036 < count__15985_16035)){
var param_16037 = cljs.core._nth.call(null,chunk__15984_16034,i__15986_16036);
cljs.compiler.emit.call(null,param_16037);

if(cljs.core._EQ_.call(null,param_16037,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16038 = seq__15983_16033;
var G__16039 = chunk__15984_16034;
var G__16040 = count__15985_16035;
var G__16041 = (i__15986_16036 + (1));
seq__15983_16033 = G__16038;
chunk__15984_16034 = G__16039;
count__15985_16035 = G__16040;
i__15986_16036 = G__16041;
continue;
} else {
var temp__5720__auto___16042 = cljs.core.seq.call(null,seq__15983_16033);
if(temp__5720__auto___16042){
var seq__15983_16043__$1 = temp__5720__auto___16042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15983_16043__$1)){
var c__4649__auto___16044 = cljs.core.chunk_first.call(null,seq__15983_16043__$1);
var G__16045 = cljs.core.chunk_rest.call(null,seq__15983_16043__$1);
var G__16046 = c__4649__auto___16044;
var G__16047 = cljs.core.count.call(null,c__4649__auto___16044);
var G__16048 = (0);
seq__15983_16033 = G__16045;
chunk__15984_16034 = G__16046;
count__15985_16035 = G__16047;
i__15986_16036 = G__16048;
continue;
} else {
var param_16049 = cljs.core.first.call(null,seq__15983_16043__$1);
cljs.compiler.emit.call(null,param_16049);

if(cljs.core._EQ_.call(null,param_16049,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16050 = cljs.core.next.call(null,seq__15983_16043__$1);
var G__16051 = null;
var G__16052 = (0);
var G__16053 = (0);
seq__15983_16033 = G__16050;
chunk__15984_16034 = G__16051;
count__15985_16035 = G__16052;
i__15986_16036 = G__16053;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__16054 = cljs.core.seq.call(null,params);
var chunk__16055 = null;
var count__16056 = (0);
var i__16057 = (0);
while(true){
if((i__16057 < count__16056)){
var param = cljs.core._nth.call(null,chunk__16055,i__16057);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16058 = seq__16054;
var G__16059 = chunk__16055;
var G__16060 = count__16056;
var G__16061 = (i__16057 + (1));
seq__16054 = G__16058;
chunk__16055 = G__16059;
count__16056 = G__16060;
i__16057 = G__16061;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16054);
if(temp__5720__auto__){
var seq__16054__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16054__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__16054__$1);
var G__16062 = cljs.core.chunk_rest.call(null,seq__16054__$1);
var G__16063 = c__4649__auto__;
var G__16064 = cljs.core.count.call(null,c__4649__auto__);
var G__16065 = (0);
seq__16054 = G__16062;
chunk__16055 = G__16063;
count__16056 = G__16064;
i__16057 = G__16065;
continue;
} else {
var param = cljs.core.first.call(null,seq__16054__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16066 = cljs.core.next.call(null,seq__16054__$1);
var G__16067 = null;
var G__16068 = (0);
var G__16069 = (0);
seq__16054 = G__16066;
chunk__16055 = G__16067;
count__16056 = G__16068;
i__16057 = G__16069;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16070){
var map__16071 = p__16070;
var map__16071__$1 = cljs.core.__destructure_map.call(null,map__16071);
var expr = cljs.core.get.call(null,map__16071__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__16071__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__16071__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__16071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16071__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16072){
var map__16073 = p__16072;
var map__16073__$1 = cljs.core.__destructure_map.call(null,map__16073);
var f = map__16073__$1;
var expr = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_16082__$1 = (function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16083 = cljs.compiler.munge.call(null,name_16082__$1);
var delegate_name_16084 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_16083),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_16084," = function (");

var seq__16074_16085 = cljs.core.seq.call(null,params);
var chunk__16075_16086 = null;
var count__16076_16087 = (0);
var i__16077_16088 = (0);
while(true){
if((i__16077_16088 < count__16076_16087)){
var param_16089 = cljs.core._nth.call(null,chunk__16075_16086,i__16077_16088);
cljs.compiler.emit.call(null,param_16089);

if(cljs.core._EQ_.call(null,param_16089,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16090 = seq__16074_16085;
var G__16091 = chunk__16075_16086;
var G__16092 = count__16076_16087;
var G__16093 = (i__16077_16088 + (1));
seq__16074_16085 = G__16090;
chunk__16075_16086 = G__16091;
count__16076_16087 = G__16092;
i__16077_16088 = G__16093;
continue;
} else {
var temp__5720__auto___16094 = cljs.core.seq.call(null,seq__16074_16085);
if(temp__5720__auto___16094){
var seq__16074_16095__$1 = temp__5720__auto___16094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16074_16095__$1)){
var c__4649__auto___16096 = cljs.core.chunk_first.call(null,seq__16074_16095__$1);
var G__16097 = cljs.core.chunk_rest.call(null,seq__16074_16095__$1);
var G__16098 = c__4649__auto___16096;
var G__16099 = cljs.core.count.call(null,c__4649__auto___16096);
var G__16100 = (0);
seq__16074_16085 = G__16097;
chunk__16075_16086 = G__16098;
count__16076_16087 = G__16099;
i__16077_16088 = G__16100;
continue;
} else {
var param_16101 = cljs.core.first.call(null,seq__16074_16095__$1);
cljs.compiler.emit.call(null,param_16101);

if(cljs.core._EQ_.call(null,param_16101,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16102 = cljs.core.next.call(null,seq__16074_16095__$1);
var G__16103 = null;
var G__16104 = (0);
var G__16105 = (0);
seq__16074_16085 = G__16102;
chunk__16075_16086 = G__16103;
count__16076_16087 = G__16104;
i__16077_16088 = G__16105;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_16083," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_16106 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_16106,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_16084,".call(this,");

var seq__16078_16107 = cljs.core.seq.call(null,params);
var chunk__16079_16108 = null;
var count__16080_16109 = (0);
var i__16081_16110 = (0);
while(true){
if((i__16081_16110 < count__16080_16109)){
var param_16111 = cljs.core._nth.call(null,chunk__16079_16108,i__16081_16110);
cljs.compiler.emit.call(null,param_16111);

if(cljs.core._EQ_.call(null,param_16111,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16112 = seq__16078_16107;
var G__16113 = chunk__16079_16108;
var G__16114 = count__16080_16109;
var G__16115 = (i__16081_16110 + (1));
seq__16078_16107 = G__16112;
chunk__16079_16108 = G__16113;
count__16080_16109 = G__16114;
i__16081_16110 = G__16115;
continue;
} else {
var temp__5720__auto___16116 = cljs.core.seq.call(null,seq__16078_16107);
if(temp__5720__auto___16116){
var seq__16078_16117__$1 = temp__5720__auto___16116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16078_16117__$1)){
var c__4649__auto___16118 = cljs.core.chunk_first.call(null,seq__16078_16117__$1);
var G__16119 = cljs.core.chunk_rest.call(null,seq__16078_16117__$1);
var G__16120 = c__4649__auto___16118;
var G__16121 = cljs.core.count.call(null,c__4649__auto___16118);
var G__16122 = (0);
seq__16078_16107 = G__16119;
chunk__16079_16108 = G__16120;
count__16080_16109 = G__16121;
i__16081_16110 = G__16122;
continue;
} else {
var param_16123 = cljs.core.first.call(null,seq__16078_16117__$1);
cljs.compiler.emit.call(null,param_16123);

if(cljs.core._EQ_.call(null,param_16123,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__16124 = cljs.core.next.call(null,seq__16078_16117__$1);
var G__16125 = null;
var G__16126 = (0);
var G__16127 = (0);
seq__16078_16107 = G__16124;
chunk__16079_16108 = G__16125;
count__16080_16109 = G__16126;
i__16081_16110 = G__16127;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_16083,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_16083,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_16082__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_16083,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_16084,";");

cljs.compiler.emitln.call(null,"return ",mname_16083,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16131){
var map__16132 = p__16131;
var map__16132__$1 = cljs.core.__destructure_map.call(null,map__16132);
var variadic = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__16128_SHARP_){
var and__4221__auto__ = p1__16128_SHARP_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16128_SHARP_));
} else {
return and__4221__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__4223__auto__ = in_loop;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_16184__$1 = (function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_16185 = cljs.compiler.munge.call(null,name_16184__$1);
var maxparams_16186 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_16187 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_16185),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_16188 = cljs.core.sort_by.call(null,(function (p1__16129_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__16129_SHARP_)));
}),cljs.core.seq.call(null,mmap_16187));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_16185," = null;");

var seq__16133_16189 = cljs.core.seq.call(null,ms_16188);
var chunk__16134_16190 = null;
var count__16135_16191 = (0);
var i__16136_16192 = (0);
while(true){
if((i__16136_16192 < count__16135_16191)){
var vec__16143_16193 = cljs.core._nth.call(null,chunk__16134_16190,i__16136_16192);
var n_16194 = cljs.core.nth.call(null,vec__16143_16193,(0),null);
var meth_16195 = cljs.core.nth.call(null,vec__16143_16193,(1),null);
cljs.compiler.emits.call(null,"var ",n_16194," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16195))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16195);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16195);
}

cljs.compiler.emitln.call(null,";");


var G__16196 = seq__16133_16189;
var G__16197 = chunk__16134_16190;
var G__16198 = count__16135_16191;
var G__16199 = (i__16136_16192 + (1));
seq__16133_16189 = G__16196;
chunk__16134_16190 = G__16197;
count__16135_16191 = G__16198;
i__16136_16192 = G__16199;
continue;
} else {
var temp__5720__auto___16200 = cljs.core.seq.call(null,seq__16133_16189);
if(temp__5720__auto___16200){
var seq__16133_16201__$1 = temp__5720__auto___16200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16133_16201__$1)){
var c__4649__auto___16202 = cljs.core.chunk_first.call(null,seq__16133_16201__$1);
var G__16203 = cljs.core.chunk_rest.call(null,seq__16133_16201__$1);
var G__16204 = c__4649__auto___16202;
var G__16205 = cljs.core.count.call(null,c__4649__auto___16202);
var G__16206 = (0);
seq__16133_16189 = G__16203;
chunk__16134_16190 = G__16204;
count__16135_16191 = G__16205;
i__16136_16192 = G__16206;
continue;
} else {
var vec__16146_16207 = cljs.core.first.call(null,seq__16133_16201__$1);
var n_16208 = cljs.core.nth.call(null,vec__16146_16207,(0),null);
var meth_16209 = cljs.core.nth.call(null,vec__16146_16207,(1),null);
cljs.compiler.emits.call(null,"var ",n_16208," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16209))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_16209);
} else {
cljs.compiler.emit_fn_method.call(null,meth_16209);
}

cljs.compiler.emitln.call(null,";");


var G__16210 = cljs.core.next.call(null,seq__16133_16201__$1);
var G__16211 = null;
var G__16212 = (0);
var G__16213 = (0);
seq__16133_16189 = G__16210;
chunk__16134_16190 = G__16211;
count__16135_16191 = G__16212;
i__16136_16192 = G__16213;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_16185," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_16186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_16186)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_16186));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__16149_16214 = cljs.core.seq.call(null,ms_16188);
var chunk__16150_16215 = null;
var count__16151_16216 = (0);
var i__16152_16217 = (0);
while(true){
if((i__16152_16217 < count__16151_16216)){
var vec__16159_16218 = cljs.core._nth.call(null,chunk__16150_16215,i__16152_16217);
var n_16219 = cljs.core.nth.call(null,vec__16159_16218,(0),null);
var meth_16220 = cljs.core.nth.call(null,vec__16159_16218,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16220))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16221 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16221," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16222 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16221," = new cljs.core.IndexedSeq(",a_16222,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16219,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16186)),(((cljs.core.count.call(null,maxparams_16186) > (1)))?", ":null),restarg_16221,");");
} else {
var pcnt_16223 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16220));
cljs.compiler.emitln.call(null,"case ",pcnt_16223,":");

cljs.compiler.emitln.call(null,"return ",n_16219,".call(this",(((pcnt_16223 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16223,maxparams_16186)),null,(1),null)),(2),null))),");");
}


var G__16224 = seq__16149_16214;
var G__16225 = chunk__16150_16215;
var G__16226 = count__16151_16216;
var G__16227 = (i__16152_16217 + (1));
seq__16149_16214 = G__16224;
chunk__16150_16215 = G__16225;
count__16151_16216 = G__16226;
i__16152_16217 = G__16227;
continue;
} else {
var temp__5720__auto___16228 = cljs.core.seq.call(null,seq__16149_16214);
if(temp__5720__auto___16228){
var seq__16149_16229__$1 = temp__5720__auto___16228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16149_16229__$1)){
var c__4649__auto___16230 = cljs.core.chunk_first.call(null,seq__16149_16229__$1);
var G__16231 = cljs.core.chunk_rest.call(null,seq__16149_16229__$1);
var G__16232 = c__4649__auto___16230;
var G__16233 = cljs.core.count.call(null,c__4649__auto___16230);
var G__16234 = (0);
seq__16149_16214 = G__16231;
chunk__16150_16215 = G__16232;
count__16151_16216 = G__16233;
i__16152_16217 = G__16234;
continue;
} else {
var vec__16162_16235 = cljs.core.first.call(null,seq__16149_16229__$1);
var n_16236 = cljs.core.nth.call(null,vec__16162_16235,(0),null);
var meth_16237 = cljs.core.nth.call(null,vec__16162_16235,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16237))){
cljs.compiler.emitln.call(null,"default:");

var restarg_16238 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_16238," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_16239 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_16238," = new cljs.core.IndexedSeq(",a_16239,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_16236,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_16186)),(((cljs.core.count.call(null,maxparams_16186) > (1)))?", ":null),restarg_16238,");");
} else {
var pcnt_16240 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16237));
cljs.compiler.emitln.call(null,"case ",pcnt_16240,":");

cljs.compiler.emitln.call(null,"return ",n_16236,".call(this",(((pcnt_16240 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_16240,maxparams_16186)),null,(1),null)),(2),null))),");");
}


var G__16241 = cljs.core.next.call(null,seq__16149_16229__$1);
var G__16242 = null;
var G__16243 = (0);
var G__16244 = (0);
seq__16149_16214 = G__16241;
chunk__16150_16215 = G__16242;
count__16151_16216 = G__16243;
i__16152_16217 = G__16244;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_16245 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_16188)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_16245,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_16185,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_16185,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__16130_SHARP_){
var vec__16165 = p1__16130_SHARP_;
var n = cljs.core.nth.call(null,vec__16165,(0),null);
var m = cljs.core.nth.call(null,vec__16165,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_16188),".cljs$lang$applyTo;");
} else {
}

var seq__16168_16246 = cljs.core.seq.call(null,ms_16188);
var chunk__16169_16247 = null;
var count__16170_16248 = (0);
var i__16171_16249 = (0);
while(true){
if((i__16171_16249 < count__16170_16248)){
var vec__16178_16250 = cljs.core._nth.call(null,chunk__16169_16247,i__16171_16249);
var n_16251 = cljs.core.nth.call(null,vec__16178_16250,(0),null);
var meth_16252 = cljs.core.nth.call(null,vec__16178_16250,(1),null);
var c_16253 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16252));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16252))){
cljs.compiler.emitln.call(null,mname_16185,".cljs$core$IFn$_invoke$arity$variadic = ",n_16251,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16185,".cljs$core$IFn$_invoke$arity$",c_16253," = ",n_16251,";");
}


var G__16254 = seq__16168_16246;
var G__16255 = chunk__16169_16247;
var G__16256 = count__16170_16248;
var G__16257 = (i__16171_16249 + (1));
seq__16168_16246 = G__16254;
chunk__16169_16247 = G__16255;
count__16170_16248 = G__16256;
i__16171_16249 = G__16257;
continue;
} else {
var temp__5720__auto___16258 = cljs.core.seq.call(null,seq__16168_16246);
if(temp__5720__auto___16258){
var seq__16168_16259__$1 = temp__5720__auto___16258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16168_16259__$1)){
var c__4649__auto___16260 = cljs.core.chunk_first.call(null,seq__16168_16259__$1);
var G__16261 = cljs.core.chunk_rest.call(null,seq__16168_16259__$1);
var G__16262 = c__4649__auto___16260;
var G__16263 = cljs.core.count.call(null,c__4649__auto___16260);
var G__16264 = (0);
seq__16168_16246 = G__16261;
chunk__16169_16247 = G__16262;
count__16170_16248 = G__16263;
i__16171_16249 = G__16264;
continue;
} else {
var vec__16181_16265 = cljs.core.first.call(null,seq__16168_16259__$1);
var n_16266 = cljs.core.nth.call(null,vec__16181_16265,(0),null);
var meth_16267 = cljs.core.nth.call(null,vec__16181_16265,(1),null);
var c_16268 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_16267));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_16267))){
cljs.compiler.emitln.call(null,mname_16185,".cljs$core$IFn$_invoke$arity$variadic = ",n_16266,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_16185,".cljs$core$IFn$_invoke$arity$",c_16268," = ",n_16266,";");
}


var G__16269 = cljs.core.next.call(null,seq__16168_16259__$1);
var G__16270 = null;
var G__16271 = (0);
var G__16272 = (0);
seq__16168_16246 = G__16269;
chunk__16169_16247 = G__16270;
count__16170_16248 = G__16271;
i__16171_16249 = G__16272;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_16185,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16273){
var map__16274 = p__16273;
var map__16274__$1 = cljs.core.__destructure_map.call(null,map__16274);
var statements = cljs.core.get.call(null,map__16274__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__16274__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__16274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__16275_16279 = cljs.core.seq.call(null,statements);
var chunk__16276_16280 = null;
var count__16277_16281 = (0);
var i__16278_16282 = (0);
while(true){
if((i__16278_16282 < count__16277_16281)){
var s_16283 = cljs.core._nth.call(null,chunk__16276_16280,i__16278_16282);
cljs.compiler.emitln.call(null,s_16283);


var G__16284 = seq__16275_16279;
var G__16285 = chunk__16276_16280;
var G__16286 = count__16277_16281;
var G__16287 = (i__16278_16282 + (1));
seq__16275_16279 = G__16284;
chunk__16276_16280 = G__16285;
count__16277_16281 = G__16286;
i__16278_16282 = G__16287;
continue;
} else {
var temp__5720__auto___16288 = cljs.core.seq.call(null,seq__16275_16279);
if(temp__5720__auto___16288){
var seq__16275_16289__$1 = temp__5720__auto___16288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16275_16289__$1)){
var c__4649__auto___16290 = cljs.core.chunk_first.call(null,seq__16275_16289__$1);
var G__16291 = cljs.core.chunk_rest.call(null,seq__16275_16289__$1);
var G__16292 = c__4649__auto___16290;
var G__16293 = cljs.core.count.call(null,c__4649__auto___16290);
var G__16294 = (0);
seq__16275_16279 = G__16291;
chunk__16276_16280 = G__16292;
count__16277_16281 = G__16293;
i__16278_16282 = G__16294;
continue;
} else {
var s_16295 = cljs.core.first.call(null,seq__16275_16289__$1);
cljs.compiler.emitln.call(null,s_16295);


var G__16296 = cljs.core.next.call(null,seq__16275_16289__$1);
var G__16297 = null;
var G__16298 = (0);
var G__16299 = (0);
seq__16275_16279 = G__16296;
chunk__16276_16280 = G__16297;
count__16277_16281 = G__16298;
i__16278_16282 = G__16299;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16300){
var map__16301 = p__16300;
var map__16301__$1 = cljs.core.__destructure_map.call(null,map__16301);
var try$ = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__16301__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16302,is_loop){
var map__16303 = p__16302;
var map__16303__$1 = cljs.core.__destructure_map.call(null,map__16303);
var expr = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__16303__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__16304_16314 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__16305_16315 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__16305_16315);

try{var seq__16306_16316 = cljs.core.seq.call(null,bindings);
var chunk__16307_16317 = null;
var count__16308_16318 = (0);
var i__16309_16319 = (0);
while(true){
if((i__16309_16319 < count__16308_16318)){
var map__16312_16320 = cljs.core._nth.call(null,chunk__16307_16317,i__16309_16319);
var map__16312_16321__$1 = cljs.core.__destructure_map.call(null,map__16312_16320);
var binding_16322 = map__16312_16321__$1;
var init_16323 = cljs.core.get.call(null,map__16312_16321__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16322);

cljs.compiler.emitln.call(null," = ",init_16323,";");


var G__16324 = seq__16306_16316;
var G__16325 = chunk__16307_16317;
var G__16326 = count__16308_16318;
var G__16327 = (i__16309_16319 + (1));
seq__16306_16316 = G__16324;
chunk__16307_16317 = G__16325;
count__16308_16318 = G__16326;
i__16309_16319 = G__16327;
continue;
} else {
var temp__5720__auto___16328 = cljs.core.seq.call(null,seq__16306_16316);
if(temp__5720__auto___16328){
var seq__16306_16329__$1 = temp__5720__auto___16328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16306_16329__$1)){
var c__4649__auto___16330 = cljs.core.chunk_first.call(null,seq__16306_16329__$1);
var G__16331 = cljs.core.chunk_rest.call(null,seq__16306_16329__$1);
var G__16332 = c__4649__auto___16330;
var G__16333 = cljs.core.count.call(null,c__4649__auto___16330);
var G__16334 = (0);
seq__16306_16316 = G__16331;
chunk__16307_16317 = G__16332;
count__16308_16318 = G__16333;
i__16309_16319 = G__16334;
continue;
} else {
var map__16313_16335 = cljs.core.first.call(null,seq__16306_16329__$1);
var map__16313_16336__$1 = cljs.core.__destructure_map.call(null,map__16313_16335);
var binding_16337 = map__16313_16336__$1;
var init_16338 = cljs.core.get.call(null,map__16313_16336__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_16337);

cljs.compiler.emitln.call(null," = ",init_16338,";");


var G__16339 = cljs.core.next.call(null,seq__16306_16329__$1);
var G__16340 = null;
var G__16341 = (0);
var G__16342 = (0);
seq__16306_16316 = G__16339;
chunk__16307_16317 = G__16340;
count__16308_16318 = G__16341;
i__16309_16319 = G__16342;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__16304_16314);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16343){
var map__16344 = p__16343;
var map__16344__$1 = cljs.core.__destructure_map.call(null,map__16344);
var frame = cljs.core.get.call(null,map__16344__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__16344__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__16344__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4706__auto___16345 = cljs.core.count.call(null,exprs);
var i_16346 = (0);
while(true){
if((i_16346 < n__4706__auto___16345)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_16346)," = ",exprs.call(null,i_16346),";");

var G__16347 = (i_16346 + (1));
i_16346 = G__16347;
continue;
} else {
}
break;
}

var n__4706__auto___16348 = cljs.core.count.call(null,exprs);
var i_16349 = (0);
while(true){
if((i_16349 < n__4706__auto___16348)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_16349))," = ",temps.call(null,i_16349),";");

var G__16350 = (i_16349 + (1));
i_16349 = G__16350;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16351){
var map__16352 = p__16351;
var map__16352__$1 = cljs.core.__destructure_map.call(null,map__16352);
var expr = cljs.core.get.call(null,map__16352__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__16352__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__16352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__16353_16361 = cljs.core.seq.call(null,bindings);
var chunk__16354_16362 = null;
var count__16355_16363 = (0);
var i__16356_16364 = (0);
while(true){
if((i__16356_16364 < count__16355_16363)){
var map__16359_16365 = cljs.core._nth.call(null,chunk__16354_16362,i__16356_16364);
var map__16359_16366__$1 = cljs.core.__destructure_map.call(null,map__16359_16365);
var binding_16367 = map__16359_16366__$1;
var init_16368 = cljs.core.get.call(null,map__16359_16366__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16367)," = ",init_16368,";");


var G__16369 = seq__16353_16361;
var G__16370 = chunk__16354_16362;
var G__16371 = count__16355_16363;
var G__16372 = (i__16356_16364 + (1));
seq__16353_16361 = G__16369;
chunk__16354_16362 = G__16370;
count__16355_16363 = G__16371;
i__16356_16364 = G__16372;
continue;
} else {
var temp__5720__auto___16373 = cljs.core.seq.call(null,seq__16353_16361);
if(temp__5720__auto___16373){
var seq__16353_16374__$1 = temp__5720__auto___16373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16353_16374__$1)){
var c__4649__auto___16375 = cljs.core.chunk_first.call(null,seq__16353_16374__$1);
var G__16376 = cljs.core.chunk_rest.call(null,seq__16353_16374__$1);
var G__16377 = c__4649__auto___16375;
var G__16378 = cljs.core.count.call(null,c__4649__auto___16375);
var G__16379 = (0);
seq__16353_16361 = G__16376;
chunk__16354_16362 = G__16377;
count__16355_16363 = G__16378;
i__16356_16364 = G__16379;
continue;
} else {
var map__16360_16380 = cljs.core.first.call(null,seq__16353_16374__$1);
var map__16360_16381__$1 = cljs.core.__destructure_map.call(null,map__16360_16380);
var binding_16382 = map__16360_16381__$1;
var init_16383 = cljs.core.get.call(null,map__16360_16381__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_16382)," = ",init_16383,";");


var G__16384 = cljs.core.next.call(null,seq__16353_16374__$1);
var G__16385 = null;
var G__16386 = (0);
var G__16387 = (0);
seq__16353_16361 = G__16384;
chunk__16354_16362 = G__16385;
count__16355_16363 = G__16386;
i__16356_16364 = G__16387;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16390){
var map__16391 = p__16390;
var map__16391__$1 = cljs.core.__destructure_map.call(null,map__16391);
var expr = map__16391__$1;
var f = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4221__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4221__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4221__auto__ = protocol;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = tag;
if(cljs.core.truth_(and__4221__auto____$1)){
var or__4223__auto__ = (function (){var and__4221__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4221__auto____$2)){
var and__4221__auto____$3 = protocol;
if(cljs.core.truth_(and__4221__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4221__auto____$3;
}
} else {
return and__4221__auto____$2;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto____$2 = (function (){var or__4223__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4221__auto____$2)){
var or__4223__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
var and__4221__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4221__auto____$3){
var and__4221__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4221__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4221__auto____$4;
}
} else {
return and__4221__auto____$3;
}
}
} else {
return and__4221__auto____$2;
}
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__4223__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4223__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4223__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__16392 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return (arity > mfa);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__16388_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16388_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__16389_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__16389_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__16392,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__16392,(1),null);
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_16395 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_16395,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_16396 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_16396,args)),(((mfa_16396 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_16396,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4221__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4221__auto__;
}
})())){
var fprop_16397 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_16397," ? ",f__$1,fprop_16397,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_16397," ? ",f__$1,fprop_16397,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16398){
var map__16399 = p__16398;
var map__16399__$1 = cljs.core.__destructure_map.call(null,map__16399);
var ctor = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16400){
var map__16401 = p__16400;
var map__16401__$1 = cljs.core.__destructure_map.call(null,map__16401);
var target = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__16402_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16402_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__16403 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__16403,(0),null);
var sublib = cljs.core.nth.call(null,vec__16403,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4223__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__16406 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__16406__$1 = cljs.core.__destructure_map.call(null,map__16406);
var options = cljs.core.get.call(null,map__16406__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__16406__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__16407 = options;
var map__16407__$1 = cljs.core.__destructure_map.call(null,map__16407);
var target = cljs.core.get.call(null,map__16407__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__16407__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__16407__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__16408 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__16411 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__16411__$1 = cljs.core.__destructure_map.call(null,map__16411);
var node_libs = cljs.core.get.call(null,map__16411__$1,true);
var libs_to_load = cljs.core.get.call(null,map__16411__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__16408,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__16408,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__16412_16440 = cljs.core.seq.call(null,libs_to_load);
var chunk__16413_16441 = null;
var count__16414_16442 = (0);
var i__16415_16443 = (0);
while(true){
if((i__16415_16443 < count__16414_16442)){
var lib_16444 = cljs.core._nth.call(null,chunk__16413_16441,i__16415_16443);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16444)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16444),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16444),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16444),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16444),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16444,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16444),"');");
}

}
}
}


var G__16445 = seq__16412_16440;
var G__16446 = chunk__16413_16441;
var G__16447 = count__16414_16442;
var G__16448 = (i__16415_16443 + (1));
seq__16412_16440 = G__16445;
chunk__16413_16441 = G__16446;
count__16414_16442 = G__16447;
i__16415_16443 = G__16448;
continue;
} else {
var temp__5720__auto___16449 = cljs.core.seq.call(null,seq__16412_16440);
if(temp__5720__auto___16449){
var seq__16412_16450__$1 = temp__5720__auto___16449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16412_16450__$1)){
var c__4649__auto___16451 = cljs.core.chunk_first.call(null,seq__16412_16450__$1);
var G__16452 = cljs.core.chunk_rest.call(null,seq__16412_16450__$1);
var G__16453 = c__4649__auto___16451;
var G__16454 = cljs.core.count.call(null,c__4649__auto___16451);
var G__16455 = (0);
seq__16412_16440 = G__16452;
chunk__16413_16441 = G__16453;
count__16414_16442 = G__16454;
i__16415_16443 = G__16455;
continue;
} else {
var lib_16456 = cljs.core.first.call(null,seq__16412_16450__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_16456)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16456),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16456),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_16456),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16456),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_16456,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_16456),"');");
}

}
}
}


var G__16457 = cljs.core.next.call(null,seq__16412_16450__$1);
var G__16458 = null;
var G__16459 = (0);
var G__16460 = (0);
seq__16412_16440 = G__16457;
chunk__16413_16441 = G__16458;
count__16414_16442 = G__16459;
i__16415_16443 = G__16460;
continue;
}
} else {
}
}
break;
}

var seq__16416_16461 = cljs.core.seq.call(null,node_libs);
var chunk__16417_16462 = null;
var count__16418_16463 = (0);
var i__16419_16464 = (0);
while(true){
if((i__16419_16464 < count__16418_16463)){
var lib_16465 = cljs.core._nth.call(null,chunk__16417_16462,i__16419_16464);
var vec__16426_16466 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_16465);
var lib_SINGLEQUOTE__16467 = cljs.core.nth.call(null,vec__16426_16466,(0),null);
var sublib_16468 = cljs.core.nth.call(null,vec__16426_16466,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16465)," = require('",lib_SINGLEQUOTE__16467,"')",cljs.compiler.sublib_select.call(null,sublib_16468),";");


var G__16469 = seq__16416_16461;
var G__16470 = chunk__16417_16462;
var G__16471 = count__16418_16463;
var G__16472 = (i__16419_16464 + (1));
seq__16416_16461 = G__16469;
chunk__16417_16462 = G__16470;
count__16418_16463 = G__16471;
i__16419_16464 = G__16472;
continue;
} else {
var temp__5720__auto___16473 = cljs.core.seq.call(null,seq__16416_16461);
if(temp__5720__auto___16473){
var seq__16416_16474__$1 = temp__5720__auto___16473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16416_16474__$1)){
var c__4649__auto___16475 = cljs.core.chunk_first.call(null,seq__16416_16474__$1);
var G__16476 = cljs.core.chunk_rest.call(null,seq__16416_16474__$1);
var G__16477 = c__4649__auto___16475;
var G__16478 = cljs.core.count.call(null,c__4649__auto___16475);
var G__16479 = (0);
seq__16416_16461 = G__16476;
chunk__16417_16462 = G__16477;
count__16418_16463 = G__16478;
i__16419_16464 = G__16479;
continue;
} else {
var lib_16480 = cljs.core.first.call(null,seq__16416_16474__$1);
var vec__16429_16481 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_16480);
var lib_SINGLEQUOTE__16482 = cljs.core.nth.call(null,vec__16429_16481,(0),null);
var sublib_16483 = cljs.core.nth.call(null,vec__16429_16481,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_16480)," = require('",lib_SINGLEQUOTE__16482,"')",cljs.compiler.sublib_select.call(null,sublib_16483),";");


var G__16484 = cljs.core.next.call(null,seq__16416_16474__$1);
var G__16485 = null;
var G__16486 = (0);
var G__16487 = (0);
seq__16416_16461 = G__16484;
chunk__16417_16462 = G__16485;
count__16418_16463 = G__16486;
i__16419_16464 = G__16487;
continue;
}
} else {
}
}
break;
}

var seq__16432_16488 = cljs.core.seq.call(null,global_exports_libs);
var chunk__16433_16489 = null;
var count__16434_16490 = (0);
var i__16435_16491 = (0);
while(true){
if((i__16435_16491 < count__16434_16490)){
var lib_16492 = cljs.core._nth.call(null,chunk__16433_16489,i__16435_16491);
var map__16438_16493 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_16492))));
var map__16438_16494__$1 = cljs.core.__destructure_map.call(null,map__16438_16493);
var global_exports_16495 = cljs.core.get.call(null,map__16438_16494__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16495,lib_16492);


var G__16496 = seq__16432_16488;
var G__16497 = chunk__16433_16489;
var G__16498 = count__16434_16490;
var G__16499 = (i__16435_16491 + (1));
seq__16432_16488 = G__16496;
chunk__16433_16489 = G__16497;
count__16434_16490 = G__16498;
i__16435_16491 = G__16499;
continue;
} else {
var temp__5720__auto___16500 = cljs.core.seq.call(null,seq__16432_16488);
if(temp__5720__auto___16500){
var seq__16432_16501__$1 = temp__5720__auto___16500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16432_16501__$1)){
var c__4649__auto___16502 = cljs.core.chunk_first.call(null,seq__16432_16501__$1);
var G__16503 = cljs.core.chunk_rest.call(null,seq__16432_16501__$1);
var G__16504 = c__4649__auto___16502;
var G__16505 = cljs.core.count.call(null,c__4649__auto___16502);
var G__16506 = (0);
seq__16432_16488 = G__16503;
chunk__16433_16489 = G__16504;
count__16434_16490 = G__16505;
i__16435_16491 = G__16506;
continue;
} else {
var lib_16507 = cljs.core.first.call(null,seq__16432_16501__$1);
var map__16439_16508 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_16507))));
var map__16439_16509__$1 = cljs.core.__destructure_map.call(null,map__16439_16508);
var global_exports_16510 = cljs.core.get.call(null,map__16439_16509__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_16510,lib_16507);


var G__16511 = cljs.core.next.call(null,seq__16432_16501__$1);
var G__16512 = null;
var G__16513 = (0);
var G__16514 = (0);
seq__16432_16488 = G__16511;
chunk__16433_16489 = G__16512;
count__16434_16490 = G__16513;
i__16435_16491 = G__16514;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__16515){
var map__16516 = p__16515;
var map__16516__$1 = cljs.core.__destructure_map.call(null,map__16516);
var name = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16516__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16517){
var map__16518 = p__16517;
var map__16518__$1 = cljs.core.__destructure_map.call(null,map__16518);
var name = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__16519){
var map__16520 = p__16519;
var map__16520__$1 = cljs.core.__destructure_map.call(null,map__16520);
var t = cljs.core.get.call(null,map__16520__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16520__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16520__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16520__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16520__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16521_16545 = cljs.core.seq.call(null,protocols);
var chunk__16522_16546 = null;
var count__16523_16547 = (0);
var i__16524_16548 = (0);
while(true){
if((i__16524_16548 < count__16523_16547)){
var protocol_16549 = cljs.core._nth.call(null,chunk__16522_16546,i__16524_16548);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16549)),"}");


var G__16550 = seq__16521_16545;
var G__16551 = chunk__16522_16546;
var G__16552 = count__16523_16547;
var G__16553 = (i__16524_16548 + (1));
seq__16521_16545 = G__16550;
chunk__16522_16546 = G__16551;
count__16523_16547 = G__16552;
i__16524_16548 = G__16553;
continue;
} else {
var temp__5720__auto___16554 = cljs.core.seq.call(null,seq__16521_16545);
if(temp__5720__auto___16554){
var seq__16521_16555__$1 = temp__5720__auto___16554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16521_16555__$1)){
var c__4649__auto___16556 = cljs.core.chunk_first.call(null,seq__16521_16555__$1);
var G__16557 = cljs.core.chunk_rest.call(null,seq__16521_16555__$1);
var G__16558 = c__4649__auto___16556;
var G__16559 = cljs.core.count.call(null,c__4649__auto___16556);
var G__16560 = (0);
seq__16521_16545 = G__16557;
chunk__16522_16546 = G__16558;
count__16523_16547 = G__16559;
i__16524_16548 = G__16560;
continue;
} else {
var protocol_16561 = cljs.core.first.call(null,seq__16521_16555__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16561)),"}");


var G__16562 = cljs.core.next.call(null,seq__16521_16555__$1);
var G__16563 = null;
var G__16564 = (0);
var G__16565 = (0);
seq__16521_16545 = G__16562;
chunk__16522_16546 = G__16563;
count__16523_16547 = G__16564;
i__16524_16548 = G__16565;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16525_16566 = cljs.core.seq.call(null,fields__$1);
var chunk__16526_16567 = null;
var count__16527_16568 = (0);
var i__16528_16569 = (0);
while(true){
if((i__16528_16569 < count__16527_16568)){
var fld_16570 = cljs.core._nth.call(null,chunk__16526_16567,i__16528_16569);
cljs.compiler.emitln.call(null,"this.",fld_16570," = ",fld_16570,";");


var G__16571 = seq__16525_16566;
var G__16572 = chunk__16526_16567;
var G__16573 = count__16527_16568;
var G__16574 = (i__16528_16569 + (1));
seq__16525_16566 = G__16571;
chunk__16526_16567 = G__16572;
count__16527_16568 = G__16573;
i__16528_16569 = G__16574;
continue;
} else {
var temp__5720__auto___16575 = cljs.core.seq.call(null,seq__16525_16566);
if(temp__5720__auto___16575){
var seq__16525_16576__$1 = temp__5720__auto___16575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16525_16576__$1)){
var c__4649__auto___16577 = cljs.core.chunk_first.call(null,seq__16525_16576__$1);
var G__16578 = cljs.core.chunk_rest.call(null,seq__16525_16576__$1);
var G__16579 = c__4649__auto___16577;
var G__16580 = cljs.core.count.call(null,c__4649__auto___16577);
var G__16581 = (0);
seq__16525_16566 = G__16578;
chunk__16526_16567 = G__16579;
count__16527_16568 = G__16580;
i__16528_16569 = G__16581;
continue;
} else {
var fld_16582 = cljs.core.first.call(null,seq__16525_16576__$1);
cljs.compiler.emitln.call(null,"this.",fld_16582," = ",fld_16582,";");


var G__16583 = cljs.core.next.call(null,seq__16525_16576__$1);
var G__16584 = null;
var G__16585 = (0);
var G__16586 = (0);
seq__16525_16566 = G__16583;
chunk__16526_16567 = G__16584;
count__16527_16568 = G__16585;
i__16528_16569 = G__16586;
continue;
}
} else {
}
}
break;
}

var seq__16529_16587 = cljs.core.seq.call(null,pmasks);
var chunk__16530_16588 = null;
var count__16531_16589 = (0);
var i__16532_16590 = (0);
while(true){
if((i__16532_16590 < count__16531_16589)){
var vec__16539_16591 = cljs.core._nth.call(null,chunk__16530_16588,i__16532_16590);
var pno_16592 = cljs.core.nth.call(null,vec__16539_16591,(0),null);
var pmask_16593 = cljs.core.nth.call(null,vec__16539_16591,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16592,"$ = ",pmask_16593,";");


var G__16594 = seq__16529_16587;
var G__16595 = chunk__16530_16588;
var G__16596 = count__16531_16589;
var G__16597 = (i__16532_16590 + (1));
seq__16529_16587 = G__16594;
chunk__16530_16588 = G__16595;
count__16531_16589 = G__16596;
i__16532_16590 = G__16597;
continue;
} else {
var temp__5720__auto___16598 = cljs.core.seq.call(null,seq__16529_16587);
if(temp__5720__auto___16598){
var seq__16529_16599__$1 = temp__5720__auto___16598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16529_16599__$1)){
var c__4649__auto___16600 = cljs.core.chunk_first.call(null,seq__16529_16599__$1);
var G__16601 = cljs.core.chunk_rest.call(null,seq__16529_16599__$1);
var G__16602 = c__4649__auto___16600;
var G__16603 = cljs.core.count.call(null,c__4649__auto___16600);
var G__16604 = (0);
seq__16529_16587 = G__16601;
chunk__16530_16588 = G__16602;
count__16531_16589 = G__16603;
i__16532_16590 = G__16604;
continue;
} else {
var vec__16542_16605 = cljs.core.first.call(null,seq__16529_16599__$1);
var pno_16606 = cljs.core.nth.call(null,vec__16542_16605,(0),null);
var pmask_16607 = cljs.core.nth.call(null,vec__16542_16605,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16606,"$ = ",pmask_16607,";");


var G__16608 = cljs.core.next.call(null,seq__16529_16599__$1);
var G__16609 = null;
var G__16610 = (0);
var G__16611 = (0);
seq__16529_16587 = G__16608;
chunk__16530_16588 = G__16609;
count__16531_16589 = G__16610;
i__16532_16590 = G__16611;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__16612){
var map__16613 = p__16612;
var map__16613__$1 = cljs.core.__destructure_map.call(null,map__16613);
var t = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__16614_16638 = cljs.core.seq.call(null,protocols);
var chunk__16615_16639 = null;
var count__16616_16640 = (0);
var i__16617_16641 = (0);
while(true){
if((i__16617_16641 < count__16616_16640)){
var protocol_16642 = cljs.core._nth.call(null,chunk__16615_16639,i__16617_16641);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16642)),"}");


var G__16643 = seq__16614_16638;
var G__16644 = chunk__16615_16639;
var G__16645 = count__16616_16640;
var G__16646 = (i__16617_16641 + (1));
seq__16614_16638 = G__16643;
chunk__16615_16639 = G__16644;
count__16616_16640 = G__16645;
i__16617_16641 = G__16646;
continue;
} else {
var temp__5720__auto___16647 = cljs.core.seq.call(null,seq__16614_16638);
if(temp__5720__auto___16647){
var seq__16614_16648__$1 = temp__5720__auto___16647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614_16648__$1)){
var c__4649__auto___16649 = cljs.core.chunk_first.call(null,seq__16614_16648__$1);
var G__16650 = cljs.core.chunk_rest.call(null,seq__16614_16648__$1);
var G__16651 = c__4649__auto___16649;
var G__16652 = cljs.core.count.call(null,c__4649__auto___16649);
var G__16653 = (0);
seq__16614_16638 = G__16650;
chunk__16615_16639 = G__16651;
count__16616_16640 = G__16652;
i__16617_16641 = G__16653;
continue;
} else {
var protocol_16654 = cljs.core.first.call(null,seq__16614_16648__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16654)),"}");


var G__16655 = cljs.core.next.call(null,seq__16614_16648__$1);
var G__16656 = null;
var G__16657 = (0);
var G__16658 = (0);
seq__16614_16638 = G__16655;
chunk__16615_16639 = G__16656;
count__16616_16640 = G__16657;
i__16617_16641 = G__16658;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__16618_16659 = cljs.core.seq.call(null,fields__$1);
var chunk__16619_16660 = null;
var count__16620_16661 = (0);
var i__16621_16662 = (0);
while(true){
if((i__16621_16662 < count__16620_16661)){
var fld_16663 = cljs.core._nth.call(null,chunk__16619_16660,i__16621_16662);
cljs.compiler.emitln.call(null,"this.",fld_16663," = ",fld_16663,";");


var G__16664 = seq__16618_16659;
var G__16665 = chunk__16619_16660;
var G__16666 = count__16620_16661;
var G__16667 = (i__16621_16662 + (1));
seq__16618_16659 = G__16664;
chunk__16619_16660 = G__16665;
count__16620_16661 = G__16666;
i__16621_16662 = G__16667;
continue;
} else {
var temp__5720__auto___16668 = cljs.core.seq.call(null,seq__16618_16659);
if(temp__5720__auto___16668){
var seq__16618_16669__$1 = temp__5720__auto___16668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16618_16669__$1)){
var c__4649__auto___16670 = cljs.core.chunk_first.call(null,seq__16618_16669__$1);
var G__16671 = cljs.core.chunk_rest.call(null,seq__16618_16669__$1);
var G__16672 = c__4649__auto___16670;
var G__16673 = cljs.core.count.call(null,c__4649__auto___16670);
var G__16674 = (0);
seq__16618_16659 = G__16671;
chunk__16619_16660 = G__16672;
count__16620_16661 = G__16673;
i__16621_16662 = G__16674;
continue;
} else {
var fld_16675 = cljs.core.first.call(null,seq__16618_16669__$1);
cljs.compiler.emitln.call(null,"this.",fld_16675," = ",fld_16675,";");


var G__16676 = cljs.core.next.call(null,seq__16618_16669__$1);
var G__16677 = null;
var G__16678 = (0);
var G__16679 = (0);
seq__16618_16659 = G__16676;
chunk__16619_16660 = G__16677;
count__16620_16661 = G__16678;
i__16621_16662 = G__16679;
continue;
}
} else {
}
}
break;
}

var seq__16622_16680 = cljs.core.seq.call(null,pmasks);
var chunk__16623_16681 = null;
var count__16624_16682 = (0);
var i__16625_16683 = (0);
while(true){
if((i__16625_16683 < count__16624_16682)){
var vec__16632_16684 = cljs.core._nth.call(null,chunk__16623_16681,i__16625_16683);
var pno_16685 = cljs.core.nth.call(null,vec__16632_16684,(0),null);
var pmask_16686 = cljs.core.nth.call(null,vec__16632_16684,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16685,"$ = ",pmask_16686,";");


var G__16687 = seq__16622_16680;
var G__16688 = chunk__16623_16681;
var G__16689 = count__16624_16682;
var G__16690 = (i__16625_16683 + (1));
seq__16622_16680 = G__16687;
chunk__16623_16681 = G__16688;
count__16624_16682 = G__16689;
i__16625_16683 = G__16690;
continue;
} else {
var temp__5720__auto___16691 = cljs.core.seq.call(null,seq__16622_16680);
if(temp__5720__auto___16691){
var seq__16622_16692__$1 = temp__5720__auto___16691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16622_16692__$1)){
var c__4649__auto___16693 = cljs.core.chunk_first.call(null,seq__16622_16692__$1);
var G__16694 = cljs.core.chunk_rest.call(null,seq__16622_16692__$1);
var G__16695 = c__4649__auto___16693;
var G__16696 = cljs.core.count.call(null,c__4649__auto___16693);
var G__16697 = (0);
seq__16622_16680 = G__16694;
chunk__16623_16681 = G__16695;
count__16624_16682 = G__16696;
i__16625_16683 = G__16697;
continue;
} else {
var vec__16635_16698 = cljs.core.first.call(null,seq__16622_16692__$1);
var pno_16699 = cljs.core.nth.call(null,vec__16635_16698,(0),null);
var pmask_16700 = cljs.core.nth.call(null,vec__16635_16698,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16699,"$ = ",pmask_16700,";");


var G__16701 = cljs.core.next.call(null,seq__16622_16692__$1);
var G__16702 = null;
var G__16703 = (0);
var G__16704 = (0);
seq__16622_16680 = G__16701;
chunk__16623_16681 = G__16702;
count__16624_16682 = G__16703;
i__16625_16683 = G__16704;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16705){
var map__16706 = p__16705;
var map__16706__$1 = cljs.core.__destructure_map.call(null,map__16706);
var target = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16707){
var map__16708 = p__16707;
var map__16708__$1 = cljs.core.__destructure_map.call(null,map__16708);
var op = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16708__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4221__auto__ = code;
if(cljs.core.truth_(and__4221__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4221__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__15547__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15547__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16713 = cljs.core.seq.call(null,table);
var chunk__16714 = null;
var count__16715 = (0);
var i__16716 = (0);
while(true){
if((i__16716 < count__16715)){
var vec__16723 = cljs.core._nth.call(null,chunk__16714,i__16716);
var sym = cljs.core.nth.call(null,vec__16723,(0),null);
var value = cljs.core.nth.call(null,vec__16723,(1),null);
var ns_16729 = cljs.core.namespace.call(null,sym);
var name_16730 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__16731 = seq__16713;
var G__16732 = chunk__16714;
var G__16733 = count__16715;
var G__16734 = (i__16716 + (1));
seq__16713 = G__16731;
chunk__16714 = G__16732;
count__16715 = G__16733;
i__16716 = G__16734;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16713);
if(temp__5720__auto__){
var seq__16713__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16713__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__16713__$1);
var G__16735 = cljs.core.chunk_rest.call(null,seq__16713__$1);
var G__16736 = c__4649__auto__;
var G__16737 = cljs.core.count.call(null,c__4649__auto__);
var G__16738 = (0);
seq__16713 = G__16735;
chunk__16714 = G__16736;
count__16715 = G__16737;
i__16716 = G__16738;
continue;
} else {
var vec__16726 = cljs.core.first.call(null,seq__16713__$1);
var sym = cljs.core.nth.call(null,vec__16726,(0),null);
var value = cljs.core.nth.call(null,vec__16726,(1),null);
var ns_16739 = cljs.core.namespace.call(null,sym);
var name_16740 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__16741 = cljs.core.next.call(null,seq__16713__$1);
var G__16742 = null;
var G__16743 = (0);
var G__16744 = (0);
seq__16713 = G__16741;
chunk__16714 = G__16742;
count__16715 = G__16743;
i__16716 = G__16744;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__16746 = arguments.length;
switch (G__16746) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_16751 = cljs.core.first.call(null,ks);
var vec__16747_16752 = cljs.core.conj.call(null,prefix,k_16751);
var top_16753 = cljs.core.nth.call(null,vec__16747_16752,(0),null);
var prefix_SINGLEQUOTE__16754 = vec__16747_16752;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16751)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16754) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16753)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16753)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16754)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16753);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16754)),";");
}
} else {
}

var m_16755 = cljs.core.get.call(null,externs,k_16751);
if(cljs.core.empty_QMARK_.call(null,m_16755)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16754,m_16755,top_level,known_externs);
}

var G__16756 = cljs.core.next.call(null,ks);
ks = G__16756;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

