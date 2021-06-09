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
var map__14925 = s;
var map__14925__$1 = cljs.core.__destructure_map.call(null,map__14925);
var name = cljs.core.get.call(null,map__14925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14925__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14927 = info;
var map__14928 = G__14927;
var map__14928__$1 = cljs.core.__destructure_map.call(null,map__14928);
var shadow = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14927__$1 = G__14927;
while(true){
var d__$2 = d__$1;
var map__14930 = G__14927__$1;
var map__14930__$1 = cljs.core.__destructure_map.call(null,map__14930);
var shadow__$1 = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14931 = (d__$2 + (1));
var G__14932 = shadow__$1;
d__$1 = G__14931;
G__14927__$1 = G__14932;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14933){
var map__14934 = p__14933;
var map__14934__$1 = cljs.core.__destructure_map.call(null,map__14934);
var name_var = map__14934__$1;
var name = cljs.core.get.call(null,map__14934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14934__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__14935 = info;
var map__14935__$1 = cljs.core.__destructure_map.call(null,map__14935);
var ns = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__14937 = arguments.length;
switch (G__14937) {
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
var G__14939 = cp;
switch (G__14939) {
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
var seq__14941_14945 = cljs.core.seq.call(null,s);
var chunk__14942_14946 = null;
var count__14943_14947 = (0);
var i__14944_14948 = (0);
while(true){
if((i__14944_14948 < count__14943_14947)){
var c_14949 = cljs.core._nth.call(null,chunk__14942_14946,i__14944_14948);
sb.append(cljs.compiler.escape_char.call(null,c_14949));


var G__14950 = seq__14941_14945;
var G__14951 = chunk__14942_14946;
var G__14952 = count__14943_14947;
var G__14953 = (i__14944_14948 + (1));
seq__14941_14945 = G__14950;
chunk__14942_14946 = G__14951;
count__14943_14947 = G__14952;
i__14944_14948 = G__14953;
continue;
} else {
var temp__5720__auto___14954 = cljs.core.seq.call(null,seq__14941_14945);
if(temp__5720__auto___14954){
var seq__14941_14955__$1 = temp__5720__auto___14954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14941_14955__$1)){
var c__4649__auto___14956 = cljs.core.chunk_first.call(null,seq__14941_14955__$1);
var G__14957 = cljs.core.chunk_rest.call(null,seq__14941_14955__$1);
var G__14958 = c__4649__auto___14956;
var G__14959 = cljs.core.count.call(null,c__4649__auto___14956);
var G__14960 = (0);
seq__14941_14945 = G__14957;
chunk__14942_14946 = G__14958;
count__14943_14947 = G__14959;
i__14944_14948 = G__14960;
continue;
} else {
var c_14961 = cljs.core.first.call(null,seq__14941_14955__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14961));


var G__14962 = cljs.core.next.call(null,seq__14941_14955__$1);
var G__14963 = null;
var G__14964 = (0);
var G__14965 = (0);
seq__14941_14945 = G__14962;
chunk__14942_14946 = G__14963;
count__14943_14947 = G__14964;
i__14944_14948 = G__14965;
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
var map__14966_14969 = ast;
var map__14966_14970__$1 = cljs.core.__destructure_map.call(null,map__14966_14969);
var env_14971 = cljs.core.get.call(null,map__14966_14970__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14971))){
var map__14967_14972 = env_14971;
var map__14967_14973__$1 = cljs.core.__destructure_map.call(null,map__14967_14972);
var line_14974 = cljs.core.get.call(null,map__14967_14973__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14975 = cljs.core.get.call(null,map__14967_14973__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__14968 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__14968,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__14968;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14974 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14975)?(column_14975 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__14984 = arguments.length;
switch (G__14984) {
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
var len__4829__auto___14991 = arguments.length;
var i__4830__auto___14992 = (0);
while(true){
if((i__4830__auto___14992 < len__4829__auto___14991)){
args_arr__4850__auto__.push((arguments[i__4830__auto___14992]));

var G__14993 = (i__4830__auto___14992 + (1));
i__4830__auto___14992 = G__14993;
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
var s_14994 = (function (){var G__14985 = a;
if((!(typeof a === 'string'))){
return G__14985.toString();
} else {
return G__14985;
}
})();
var temp__5724__auto___14995 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___14995 == null)){
} else {
var sm_data_14996 = temp__5724__auto___14995;
cljs.core.swap_BANG_.call(null,sm_data_14996,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__14976_SHARP_){
return (p1__14976_SHARP_ + s_14994.length);
}));
}

cljs.core.print.call(null,s_14994);

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

var seq__14986 = cljs.core.seq.call(null,xs);
var chunk__14987 = null;
var count__14988 = (0);
var i__14989 = (0);
while(true){
if((i__14989 < count__14988)){
var x = cljs.core._nth.call(null,chunk__14987,i__14989);
cljs.compiler.emits.call(null,x);


var G__14997 = seq__14986;
var G__14998 = chunk__14987;
var G__14999 = count__14988;
var G__15000 = (i__14989 + (1));
seq__14986 = G__14997;
chunk__14987 = G__14998;
count__14988 = G__14999;
i__14989 = G__15000;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14986);
if(temp__5720__auto__){
var seq__14986__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14986__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__14986__$1);
var G__15001 = cljs.core.chunk_rest.call(null,seq__14986__$1);
var G__15002 = c__4649__auto__;
var G__15003 = cljs.core.count.call(null,c__4649__auto__);
var G__15004 = (0);
seq__14986 = G__15001;
chunk__14987 = G__15002;
count__14988 = G__15003;
i__14989 = G__15004;
continue;
} else {
var x = cljs.core.first.call(null,seq__14986__$1);
cljs.compiler.emits.call(null,x);


var G__15005 = cljs.core.next.call(null,seq__14986__$1);
var G__15006 = null;
var G__15007 = (0);
var G__15008 = (0);
seq__14986 = G__15005;
chunk__14987 = G__15006;
count__14988 = G__15007;
i__14989 = G__15008;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq14978){
var G__14979 = cljs.core.first.call(null,seq14978);
var seq14978__$1 = cljs.core.next.call(null,seq14978);
var G__14980 = cljs.core.first.call(null,seq14978__$1);
var seq14978__$2 = cljs.core.next.call(null,seq14978__$1);
var G__14981 = cljs.core.first.call(null,seq14978__$2);
var seq14978__$3 = cljs.core.next.call(null,seq14978__$2);
var G__14982 = cljs.core.first.call(null,seq14978__$3);
var seq14978__$4 = cljs.core.next.call(null,seq14978__$3);
var G__14983 = cljs.core.first.call(null,seq14978__$4);
var seq14978__$5 = cljs.core.next.call(null,seq14978__$4);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14979,G__14980,G__14981,G__14982,G__14983,seq14978__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15009){
var map__15010 = p__15009;
var map__15010__$1 = cljs.core.__destructure_map.call(null,map__15010);
var m = map__15010__$1;
var gen_line = cljs.core.get.call(null,map__15010__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15018 = arguments.length;
switch (G__15018) {
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
var len__4829__auto___15024 = arguments.length;
var i__4830__auto___15025 = (0);
while(true){
if((i__4830__auto___15025 < len__4829__auto___15024)){
args_arr__4850__auto__.push((arguments[i__4830__auto___15025]));

var G__15026 = (i__4830__auto___15025 + (1));
i__4830__auto___15025 = G__15026;
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

var seq__15019_15027 = cljs.core.seq.call(null,xs);
var chunk__15020_15028 = null;
var count__15021_15029 = (0);
var i__15022_15030 = (0);
while(true){
if((i__15022_15030 < count__15021_15029)){
var x_15031 = cljs.core._nth.call(null,chunk__15020_15028,i__15022_15030);
cljs.compiler.emits.call(null,x_15031);


var G__15032 = seq__15019_15027;
var G__15033 = chunk__15020_15028;
var G__15034 = count__15021_15029;
var G__15035 = (i__15022_15030 + (1));
seq__15019_15027 = G__15032;
chunk__15020_15028 = G__15033;
count__15021_15029 = G__15034;
i__15022_15030 = G__15035;
continue;
} else {
var temp__5720__auto___15036 = cljs.core.seq.call(null,seq__15019_15027);
if(temp__5720__auto___15036){
var seq__15019_15037__$1 = temp__5720__auto___15036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15019_15037__$1)){
var c__4649__auto___15038 = cljs.core.chunk_first.call(null,seq__15019_15037__$1);
var G__15039 = cljs.core.chunk_rest.call(null,seq__15019_15037__$1);
var G__15040 = c__4649__auto___15038;
var G__15041 = cljs.core.count.call(null,c__4649__auto___15038);
var G__15042 = (0);
seq__15019_15027 = G__15039;
chunk__15020_15028 = G__15040;
count__15021_15029 = G__15041;
i__15022_15030 = G__15042;
continue;
} else {
var x_15043 = cljs.core.first.call(null,seq__15019_15037__$1);
cljs.compiler.emits.call(null,x_15043);


var G__15044 = cljs.core.next.call(null,seq__15019_15037__$1);
var G__15045 = null;
var G__15046 = (0);
var G__15047 = (0);
seq__15019_15027 = G__15044;
chunk__15020_15028 = G__15045;
count__15021_15029 = G__15046;
i__15022_15030 = G__15047;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15012){
var G__15013 = cljs.core.first.call(null,seq15012);
var seq15012__$1 = cljs.core.next.call(null,seq15012);
var G__15014 = cljs.core.first.call(null,seq15012__$1);
var seq15012__$2 = cljs.core.next.call(null,seq15012__$1);
var G__15015 = cljs.core.first.call(null,seq15012__$2);
var seq15012__$3 = cljs.core.next.call(null,seq15012__$2);
var G__15016 = cljs.core.first.call(null,seq15012__$3);
var seq15012__$4 = cljs.core.next.call(null,seq15012__$3);
var G__15017 = cljs.core.first.call(null,seq15012__$4);
var seq15012__$5 = cljs.core.next.call(null,seq15012__$4);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15013,G__15014,G__15015,G__15016,G__15017,seq15012__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15048_15052 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15049_15053 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15050_15054 = true;
var _STAR_print_fn_STAR__temp_val__15051_15055 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15050_15054);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15051_15055);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15049_15053);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15048_15052);
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
var vec__15056 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__15056,(0),null);
var name = cljs.core.nth.call(null,vec__15056,(1),null);
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
var vec__15059 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__15059,(0),null);
var flags = cljs.core.nth.call(null,vec__15059,(1),null);
var pattern = cljs.core.nth.call(null,vec__15059,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__15062_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__15062_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15064){
var map__15065 = p__15064;
var map__15065__$1 = cljs.core.__destructure_map.call(null,map__15065);
var ast = map__15065__$1;
var info = cljs.core.get.call(null,map__15065__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15065__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15066 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15066__$1 = cljs.core.__destructure_map.call(null,map__15066);
var cenv = map__15066__$1;
var options = cljs.core.get.call(null,map__15066__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__15067 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4221__auto__;
}
})())){
return clojure.set.difference.call(null,G__15067,cljs.analyzer.es5_allowed);
} else {
return G__15067;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4223__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15068 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15068,reserved);
} else {
return G__15068;
}
})();
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15069_15070 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15069_15071__$1 = (((G__15069_15070 instanceof cljs.core.Keyword))?G__15069_15070.fqn:null);
switch (G__15069_15071__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15073){
var map__15074 = p__15073;
var map__15074__$1 = cljs.core.__destructure_map.call(null,map__15074);
var arg = map__15074__$1;
var env = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15074__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15075 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15075__$1 = cljs.core.__destructure_map.call(null,map__15075);
var name = cljs.core.get.call(null,map__15075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15076){
var map__15077 = p__15076;
var map__15077__$1 = cljs.core.__destructure_map.call(null,map__15077);
var expr = cljs.core.get.call(null,map__15077__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15077__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__15078_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15078_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15079){
var map__15080 = p__15079;
var map__15080__$1 = cljs.core.__destructure_map.call(null,map__15080);
var env = cljs.core.get.call(null,map__15080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15080__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15080__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15081){
var map__15082 = p__15081;
var map__15082__$1 = cljs.core.__destructure_map.call(null,map__15082);
var items = cljs.core.get.call(null,map__15082__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15082__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__15083_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15083_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15084){
var map__15085 = p__15084;
var map__15085__$1 = cljs.core.__destructure_map.call(null,map__15085);
var items = cljs.core.get.call(null,map__15085__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___15108 = cljs.core.seq.call(null,items);
if(temp__5720__auto___15108){
var items_15109__$1 = temp__5720__auto___15108;
var vec__15086_15110 = items_15109__$1;
var seq__15087_15111 = cljs.core.seq.call(null,vec__15086_15110);
var first__15088_15112 = cljs.core.first.call(null,seq__15087_15111);
var seq__15087_15113__$1 = cljs.core.next.call(null,seq__15087_15111);
var vec__15089_15114 = first__15088_15112;
var k_15115 = cljs.core.nth.call(null,vec__15089_15114,(0),null);
var v_15116 = cljs.core.nth.call(null,vec__15089_15114,(1),null);
var r_15117 = seq__15087_15113__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15115),"\": ",emit_js_object_val.call(null,v_15116));

var seq__15092_15118 = cljs.core.seq.call(null,r_15117);
var chunk__15093_15119 = null;
var count__15094_15120 = (0);
var i__15095_15121 = (0);
while(true){
if((i__15095_15121 < count__15094_15120)){
var vec__15102_15122 = cljs.core._nth.call(null,chunk__15093_15119,i__15095_15121);
var k_15123__$1 = cljs.core.nth.call(null,vec__15102_15122,(0),null);
var v_15124__$1 = cljs.core.nth.call(null,vec__15102_15122,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15123__$1),"\": ",emit_js_object_val.call(null,v_15124__$1));


var G__15125 = seq__15092_15118;
var G__15126 = chunk__15093_15119;
var G__15127 = count__15094_15120;
var G__15128 = (i__15095_15121 + (1));
seq__15092_15118 = G__15125;
chunk__15093_15119 = G__15126;
count__15094_15120 = G__15127;
i__15095_15121 = G__15128;
continue;
} else {
var temp__5720__auto___15129__$1 = cljs.core.seq.call(null,seq__15092_15118);
if(temp__5720__auto___15129__$1){
var seq__15092_15130__$1 = temp__5720__auto___15129__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15092_15130__$1)){
var c__4649__auto___15131 = cljs.core.chunk_first.call(null,seq__15092_15130__$1);
var G__15132 = cljs.core.chunk_rest.call(null,seq__15092_15130__$1);
var G__15133 = c__4649__auto___15131;
var G__15134 = cljs.core.count.call(null,c__4649__auto___15131);
var G__15135 = (0);
seq__15092_15118 = G__15132;
chunk__15093_15119 = G__15133;
count__15094_15120 = G__15134;
i__15095_15121 = G__15135;
continue;
} else {
var vec__15105_15136 = cljs.core.first.call(null,seq__15092_15130__$1);
var k_15137__$1 = cljs.core.nth.call(null,vec__15105_15136,(0),null);
var v_15138__$1 = cljs.core.nth.call(null,vec__15105_15136,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15137__$1),"\": ",emit_js_object_val.call(null,v_15138__$1));


var G__15139 = cljs.core.next.call(null,seq__15092_15130__$1);
var G__15140 = null;
var G__15141 = (0);
var G__15142 = (0);
seq__15092_15118 = G__15139;
chunk__15093_15119 = G__15140;
count__15094_15120 = G__15141;
i__15095_15121 = G__15142;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15143){
var map__15144 = p__15143;
var map__15144__$1 = cljs.core.__destructure_map.call(null,map__15144);
var keys = cljs.core.get.call(null,map__15144__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15144__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__15144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15145){
var map__15146 = p__15145;
var map__15146__$1 = cljs.core.__destructure_map.call(null,map__15146);
var items = cljs.core.get.call(null,map__15146__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15146__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15147){
var map__15148 = p__15147;
var map__15148__$1 = cljs.core.__destructure_map.call(null,map__15148);
var expr = cljs.core.get.call(null,map__15148__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15149){
var map__15150 = p__15149;
var map__15150__$1 = cljs.core.__destructure_map.call(null,map__15150);
var form = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15151 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15151__$1 = cljs.core.__destructure_map.call(null,map__15151);
var op = cljs.core.get.call(null,map__15151__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15151__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15151__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__15152 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15152__$1 = cljs.core.__destructure_map.call(null,map__15152);
var op = cljs.core.get.call(null,map__15152__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15152__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15152__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15153){
var map__15154 = p__15153;
var map__15154__$1 = cljs.core.__destructure_map.call(null,map__15154);
var test = cljs.core.get.call(null,map__15154__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15154__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15154__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15154__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15154__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15155){
var map__15156 = p__15155;
var map__15156__$1 = cljs.core.__destructure_map.call(null,map__15156);
var v = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15157_15185 = cljs.core.seq.call(null,nodes);
var chunk__15158_15186 = null;
var count__15159_15187 = (0);
var i__15160_15188 = (0);
while(true){
if((i__15160_15188 < count__15159_15187)){
var map__15173_15189 = cljs.core._nth.call(null,chunk__15158_15186,i__15160_15188);
var map__15173_15190__$1 = cljs.core.__destructure_map.call(null,map__15173_15189);
var ts_15191 = cljs.core.get.call(null,map__15173_15190__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15174_15192 = cljs.core.get.call(null,map__15173_15190__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15174_15193__$1 = cljs.core.__destructure_map.call(null,map__15174_15192);
var then_15194 = cljs.core.get.call(null,map__15174_15193__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15175_15195 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15191));
var chunk__15176_15196 = null;
var count__15177_15197 = (0);
var i__15178_15198 = (0);
while(true){
if((i__15178_15198 < count__15177_15197)){
var test_15199 = cljs.core._nth.call(null,chunk__15176_15196,i__15178_15198);
cljs.compiler.emitln.call(null,"case ",test_15199,":");


var G__15200 = seq__15175_15195;
var G__15201 = chunk__15176_15196;
var G__15202 = count__15177_15197;
var G__15203 = (i__15178_15198 + (1));
seq__15175_15195 = G__15200;
chunk__15176_15196 = G__15201;
count__15177_15197 = G__15202;
i__15178_15198 = G__15203;
continue;
} else {
var temp__5720__auto___15204 = cljs.core.seq.call(null,seq__15175_15195);
if(temp__5720__auto___15204){
var seq__15175_15205__$1 = temp__5720__auto___15204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15175_15205__$1)){
var c__4649__auto___15206 = cljs.core.chunk_first.call(null,seq__15175_15205__$1);
var G__15207 = cljs.core.chunk_rest.call(null,seq__15175_15205__$1);
var G__15208 = c__4649__auto___15206;
var G__15209 = cljs.core.count.call(null,c__4649__auto___15206);
var G__15210 = (0);
seq__15175_15195 = G__15207;
chunk__15176_15196 = G__15208;
count__15177_15197 = G__15209;
i__15178_15198 = G__15210;
continue;
} else {
var test_15211 = cljs.core.first.call(null,seq__15175_15205__$1);
cljs.compiler.emitln.call(null,"case ",test_15211,":");


var G__15212 = cljs.core.next.call(null,seq__15175_15205__$1);
var G__15213 = null;
var G__15214 = (0);
var G__15215 = (0);
seq__15175_15195 = G__15212;
chunk__15176_15196 = G__15213;
count__15177_15197 = G__15214;
i__15178_15198 = G__15215;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15194);
} else {
cljs.compiler.emitln.call(null,then_15194);
}

cljs.compiler.emitln.call(null,"break;");


var G__15216 = seq__15157_15185;
var G__15217 = chunk__15158_15186;
var G__15218 = count__15159_15187;
var G__15219 = (i__15160_15188 + (1));
seq__15157_15185 = G__15216;
chunk__15158_15186 = G__15217;
count__15159_15187 = G__15218;
i__15160_15188 = G__15219;
continue;
} else {
var temp__5720__auto___15220 = cljs.core.seq.call(null,seq__15157_15185);
if(temp__5720__auto___15220){
var seq__15157_15221__$1 = temp__5720__auto___15220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15157_15221__$1)){
var c__4649__auto___15222 = cljs.core.chunk_first.call(null,seq__15157_15221__$1);
var G__15223 = cljs.core.chunk_rest.call(null,seq__15157_15221__$1);
var G__15224 = c__4649__auto___15222;
var G__15225 = cljs.core.count.call(null,c__4649__auto___15222);
var G__15226 = (0);
seq__15157_15185 = G__15223;
chunk__15158_15186 = G__15224;
count__15159_15187 = G__15225;
i__15160_15188 = G__15226;
continue;
} else {
var map__15179_15227 = cljs.core.first.call(null,seq__15157_15221__$1);
var map__15179_15228__$1 = cljs.core.__destructure_map.call(null,map__15179_15227);
var ts_15229 = cljs.core.get.call(null,map__15179_15228__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15180_15230 = cljs.core.get.call(null,map__15179_15228__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15180_15231__$1 = cljs.core.__destructure_map.call(null,map__15180_15230);
var then_15232 = cljs.core.get.call(null,map__15180_15231__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15181_15233 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15229));
var chunk__15182_15234 = null;
var count__15183_15235 = (0);
var i__15184_15236 = (0);
while(true){
if((i__15184_15236 < count__15183_15235)){
var test_15237 = cljs.core._nth.call(null,chunk__15182_15234,i__15184_15236);
cljs.compiler.emitln.call(null,"case ",test_15237,":");


var G__15238 = seq__15181_15233;
var G__15239 = chunk__15182_15234;
var G__15240 = count__15183_15235;
var G__15241 = (i__15184_15236 + (1));
seq__15181_15233 = G__15238;
chunk__15182_15234 = G__15239;
count__15183_15235 = G__15240;
i__15184_15236 = G__15241;
continue;
} else {
var temp__5720__auto___15242__$1 = cljs.core.seq.call(null,seq__15181_15233);
if(temp__5720__auto___15242__$1){
var seq__15181_15243__$1 = temp__5720__auto___15242__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15181_15243__$1)){
var c__4649__auto___15244 = cljs.core.chunk_first.call(null,seq__15181_15243__$1);
var G__15245 = cljs.core.chunk_rest.call(null,seq__15181_15243__$1);
var G__15246 = c__4649__auto___15244;
var G__15247 = cljs.core.count.call(null,c__4649__auto___15244);
var G__15248 = (0);
seq__15181_15233 = G__15245;
chunk__15182_15234 = G__15246;
count__15183_15235 = G__15247;
i__15184_15236 = G__15248;
continue;
} else {
var test_15249 = cljs.core.first.call(null,seq__15181_15243__$1);
cljs.compiler.emitln.call(null,"case ",test_15249,":");


var G__15250 = cljs.core.next.call(null,seq__15181_15243__$1);
var G__15251 = null;
var G__15252 = (0);
var G__15253 = (0);
seq__15181_15233 = G__15250;
chunk__15182_15234 = G__15251;
count__15183_15235 = G__15252;
i__15184_15236 = G__15253;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15232);
} else {
cljs.compiler.emitln.call(null,then_15232);
}

cljs.compiler.emitln.call(null,"break;");


var G__15254 = cljs.core.next.call(null,seq__15157_15221__$1);
var G__15255 = null;
var G__15256 = (0);
var G__15257 = (0);
seq__15157_15185 = G__15254;
chunk__15158_15186 = G__15255;
count__15159_15187 = G__15256;
i__15160_15188 = G__15257;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15258){
var map__15259 = p__15258;
var map__15259__$1 = cljs.core.__destructure_map.call(null,map__15259);
var throw$ = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15261 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15261,(0),null);
var rstr = cljs.core.nth.call(null,vec__15261,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__15260_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15260_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15264 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__15264,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15264;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__15265_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15265_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15266 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15267 = cljs.core.seq.call(null,vec__15266);
var first__15268 = cljs.core.first.call(null,seq__15267);
var seq__15267__$1 = cljs.core.next.call(null,seq__15267);
var p = first__15268;
var first__15268__$1 = cljs.core.first.call(null,seq__15267__$1);
var seq__15267__$2 = cljs.core.next.call(null,seq__15267__$1);
var ts = first__15268__$1;
var first__15268__$2 = cljs.core.first.call(null,seq__15267__$2);
var seq__15267__$3 = cljs.core.next.call(null,seq__15267__$2);
var n = first__15268__$2;
var xs = seq__15267__$3;
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
var vec__15269 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15270 = cljs.core.seq.call(null,vec__15269);
var first__15271 = cljs.core.first.call(null,seq__15270);
var seq__15270__$1 = cljs.core.next.call(null,seq__15270);
var p = first__15271;
var first__15271__$1 = cljs.core.first.call(null,seq__15270__$1);
var seq__15270__$2 = cljs.core.next.call(null,seq__15270__$1);
var ts = first__15271__$1;
var xs = seq__15270__$2;
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
var G__15274 = arguments.length;
switch (G__15274) {
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
var vec__15282 = cljs.core.map.call(null,(function (p1__15272_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15272_SHARP_);
} else {
return p1__15272_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__15283 = cljs.core.seq.call(null,vec__15282);
var first__15284 = cljs.core.first.call(null,seq__15283);
var seq__15283__$1 = cljs.core.next.call(null,seq__15283);
var x = first__15284;
var ys = seq__15283__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15285 = cljs.core.seq.call(null,ys);
var chunk__15286 = null;
var count__15287 = (0);
var i__15288 = (0);
while(true){
if((i__15288 < count__15287)){
var next_line = cljs.core._nth.call(null,chunk__15286,i__15288);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15294 = seq__15285;
var G__15295 = chunk__15286;
var G__15296 = count__15287;
var G__15297 = (i__15288 + (1));
seq__15285 = G__15294;
chunk__15286 = G__15295;
count__15287 = G__15296;
i__15288 = G__15297;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15285);
if(temp__5720__auto__){
var seq__15285__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15285__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__15285__$1);
var G__15298 = cljs.core.chunk_rest.call(null,seq__15285__$1);
var G__15299 = c__4649__auto__;
var G__15300 = cljs.core.count.call(null,c__4649__auto__);
var G__15301 = (0);
seq__15285 = G__15298;
chunk__15286 = G__15299;
count__15287 = G__15300;
i__15288 = G__15301;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15285__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15302 = cljs.core.next.call(null,seq__15285__$1);
var G__15303 = null;
var G__15304 = (0);
var G__15305 = (0);
seq__15285 = G__15302;
chunk__15286 = G__15303;
count__15287 = G__15304;
i__15288 = G__15305;
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

var seq__15289_15306 = cljs.core.seq.call(null,docs__$2);
var chunk__15290_15307 = null;
var count__15291_15308 = (0);
var i__15292_15309 = (0);
while(true){
if((i__15292_15309 < count__15291_15308)){
var e_15310 = cljs.core._nth.call(null,chunk__15290_15307,i__15292_15309);
if(cljs.core.truth_(e_15310)){
print_comment_lines.call(null,e_15310);
} else {
}


var G__15311 = seq__15289_15306;
var G__15312 = chunk__15290_15307;
var G__15313 = count__15291_15308;
var G__15314 = (i__15292_15309 + (1));
seq__15289_15306 = G__15311;
chunk__15290_15307 = G__15312;
count__15291_15308 = G__15313;
i__15292_15309 = G__15314;
continue;
} else {
var temp__5720__auto___15315 = cljs.core.seq.call(null,seq__15289_15306);
if(temp__5720__auto___15315){
var seq__15289_15316__$1 = temp__5720__auto___15315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15289_15316__$1)){
var c__4649__auto___15317 = cljs.core.chunk_first.call(null,seq__15289_15316__$1);
var G__15318 = cljs.core.chunk_rest.call(null,seq__15289_15316__$1);
var G__15319 = c__4649__auto___15317;
var G__15320 = cljs.core.count.call(null,c__4649__auto___15317);
var G__15321 = (0);
seq__15289_15306 = G__15318;
chunk__15290_15307 = G__15319;
count__15291_15308 = G__15320;
i__15292_15309 = G__15321;
continue;
} else {
var e_15322 = cljs.core.first.call(null,seq__15289_15316__$1);
if(cljs.core.truth_(e_15322)){
print_comment_lines.call(null,e_15322);
} else {
}


var G__15323 = cljs.core.next.call(null,seq__15289_15316__$1);
var G__15324 = null;
var G__15325 = (0);
var G__15326 = (0);
seq__15289_15306 = G__15323;
chunk__15290_15307 = G__15324;
count__15291_15308 = G__15325;
i__15292_15309 = G__15326;
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
var and__4221__auto__ = cljs.core.some.call(null,(function (p1__15328_SHARP_){
return goog.string.startsWith(p1__15328_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15329){
var map__15330 = p__15329;
var map__15330__$1 = cljs.core.__destructure_map.call(null,map__15330);
var doc = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__15330__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15331){
var map__15332 = p__15331;
var map__15332__$1 = cljs.core.__destructure_map.call(null,map__15332);
var name = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15332__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15333_15357 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15334_15358 = null;
var count__15335_15359 = (0);
var i__15336_15360 = (0);
while(true){
if((i__15336_15360 < count__15335_15359)){
var vec__15343_15361 = cljs.core._nth.call(null,chunk__15334_15358,i__15336_15360);
var i_15362 = cljs.core.nth.call(null,vec__15343_15361,(0),null);
var param_15363 = cljs.core.nth.call(null,vec__15343_15361,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15363);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15364 = seq__15333_15357;
var G__15365 = chunk__15334_15358;
var G__15366 = count__15335_15359;
var G__15367 = (i__15336_15360 + (1));
seq__15333_15357 = G__15364;
chunk__15334_15358 = G__15365;
count__15335_15359 = G__15366;
i__15336_15360 = G__15367;
continue;
} else {
var temp__5720__auto___15368 = cljs.core.seq.call(null,seq__15333_15357);
if(temp__5720__auto___15368){
var seq__15333_15369__$1 = temp__5720__auto___15368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15333_15369__$1)){
var c__4649__auto___15370 = cljs.core.chunk_first.call(null,seq__15333_15369__$1);
var G__15371 = cljs.core.chunk_rest.call(null,seq__15333_15369__$1);
var G__15372 = c__4649__auto___15370;
var G__15373 = cljs.core.count.call(null,c__4649__auto___15370);
var G__15374 = (0);
seq__15333_15357 = G__15371;
chunk__15334_15358 = G__15372;
count__15335_15359 = G__15373;
i__15336_15360 = G__15374;
continue;
} else {
var vec__15346_15375 = cljs.core.first.call(null,seq__15333_15369__$1);
var i_15376 = cljs.core.nth.call(null,vec__15346_15375,(0),null);
var param_15377 = cljs.core.nth.call(null,vec__15346_15375,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15377);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15378 = cljs.core.next.call(null,seq__15333_15369__$1);
var G__15379 = null;
var G__15380 = (0);
var G__15381 = (0);
seq__15333_15357 = G__15378;
chunk__15334_15358 = G__15379;
count__15335_15359 = G__15380;
i__15336_15360 = G__15381;
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

var seq__15349_15382 = cljs.core.seq.call(null,params);
var chunk__15350_15383 = null;
var count__15351_15384 = (0);
var i__15352_15385 = (0);
while(true){
if((i__15352_15385 < count__15351_15384)){
var param_15386 = cljs.core._nth.call(null,chunk__15350_15383,i__15352_15385);
cljs.compiler.emit.call(null,param_15386);

if(cljs.core._EQ_.call(null,param_15386,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15387 = seq__15349_15382;
var G__15388 = chunk__15350_15383;
var G__15389 = count__15351_15384;
var G__15390 = (i__15352_15385 + (1));
seq__15349_15382 = G__15387;
chunk__15350_15383 = G__15388;
count__15351_15384 = G__15389;
i__15352_15385 = G__15390;
continue;
} else {
var temp__5720__auto___15391 = cljs.core.seq.call(null,seq__15349_15382);
if(temp__5720__auto___15391){
var seq__15349_15392__$1 = temp__5720__auto___15391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15349_15392__$1)){
var c__4649__auto___15393 = cljs.core.chunk_first.call(null,seq__15349_15392__$1);
var G__15394 = cljs.core.chunk_rest.call(null,seq__15349_15392__$1);
var G__15395 = c__4649__auto___15393;
var G__15396 = cljs.core.count.call(null,c__4649__auto___15393);
var G__15397 = (0);
seq__15349_15382 = G__15394;
chunk__15350_15383 = G__15395;
count__15351_15384 = G__15396;
i__15352_15385 = G__15397;
continue;
} else {
var param_15398 = cljs.core.first.call(null,seq__15349_15392__$1);
cljs.compiler.emit.call(null,param_15398);

if(cljs.core._EQ_.call(null,param_15398,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15399 = cljs.core.next.call(null,seq__15349_15392__$1);
var G__15400 = null;
var G__15401 = (0);
var G__15402 = (0);
seq__15349_15382 = G__15399;
chunk__15350_15383 = G__15400;
count__15351_15384 = G__15401;
i__15352_15385 = G__15402;
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

var seq__15353_15403 = cljs.core.seq.call(null,params);
var chunk__15354_15404 = null;
var count__15355_15405 = (0);
var i__15356_15406 = (0);
while(true){
if((i__15356_15406 < count__15355_15405)){
var param_15407 = cljs.core._nth.call(null,chunk__15354_15404,i__15356_15406);
cljs.compiler.emit.call(null,param_15407);

if(cljs.core._EQ_.call(null,param_15407,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15408 = seq__15353_15403;
var G__15409 = chunk__15354_15404;
var G__15410 = count__15355_15405;
var G__15411 = (i__15356_15406 + (1));
seq__15353_15403 = G__15408;
chunk__15354_15404 = G__15409;
count__15355_15405 = G__15410;
i__15356_15406 = G__15411;
continue;
} else {
var temp__5720__auto___15412 = cljs.core.seq.call(null,seq__15353_15403);
if(temp__5720__auto___15412){
var seq__15353_15413__$1 = temp__5720__auto___15412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15353_15413__$1)){
var c__4649__auto___15414 = cljs.core.chunk_first.call(null,seq__15353_15413__$1);
var G__15415 = cljs.core.chunk_rest.call(null,seq__15353_15413__$1);
var G__15416 = c__4649__auto___15414;
var G__15417 = cljs.core.count.call(null,c__4649__auto___15414);
var G__15418 = (0);
seq__15353_15403 = G__15415;
chunk__15354_15404 = G__15416;
count__15355_15405 = G__15417;
i__15356_15406 = G__15418;
continue;
} else {
var param_15419 = cljs.core.first.call(null,seq__15353_15413__$1);
cljs.compiler.emit.call(null,param_15419);

if(cljs.core._EQ_.call(null,param_15419,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15420 = cljs.core.next.call(null,seq__15353_15413__$1);
var G__15421 = null;
var G__15422 = (0);
var G__15423 = (0);
seq__15353_15403 = G__15420;
chunk__15354_15404 = G__15421;
count__15355_15405 = G__15422;
i__15356_15406 = G__15423;
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
var seq__15424 = cljs.core.seq.call(null,params);
var chunk__15425 = null;
var count__15426 = (0);
var i__15427 = (0);
while(true){
if((i__15427 < count__15426)){
var param = cljs.core._nth.call(null,chunk__15425,i__15427);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15428 = seq__15424;
var G__15429 = chunk__15425;
var G__15430 = count__15426;
var G__15431 = (i__15427 + (1));
seq__15424 = G__15428;
chunk__15425 = G__15429;
count__15426 = G__15430;
i__15427 = G__15431;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15424);
if(temp__5720__auto__){
var seq__15424__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15424__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__15424__$1);
var G__15432 = cljs.core.chunk_rest.call(null,seq__15424__$1);
var G__15433 = c__4649__auto__;
var G__15434 = cljs.core.count.call(null,c__4649__auto__);
var G__15435 = (0);
seq__15424 = G__15432;
chunk__15425 = G__15433;
count__15426 = G__15434;
i__15427 = G__15435;
continue;
} else {
var param = cljs.core.first.call(null,seq__15424__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15436 = cljs.core.next.call(null,seq__15424__$1);
var G__15437 = null;
var G__15438 = (0);
var G__15439 = (0);
seq__15424 = G__15436;
chunk__15425 = G__15437;
count__15426 = G__15438;
i__15427 = G__15439;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15440){
var map__15441 = p__15440;
var map__15441__$1 = cljs.core.__destructure_map.call(null,map__15441);
var expr = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15441__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15442){
var map__15443 = p__15442;
var map__15443__$1 = cljs.core.__destructure_map.call(null,map__15443);
var f = map__15443__$1;
var expr = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15452__$1 = (function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15453 = cljs.compiler.munge.call(null,name_15452__$1);
var delegate_name_15454 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15453),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15454," = function (");

var seq__15444_15455 = cljs.core.seq.call(null,params);
var chunk__15445_15456 = null;
var count__15446_15457 = (0);
var i__15447_15458 = (0);
while(true){
if((i__15447_15458 < count__15446_15457)){
var param_15459 = cljs.core._nth.call(null,chunk__15445_15456,i__15447_15458);
cljs.compiler.emit.call(null,param_15459);

if(cljs.core._EQ_.call(null,param_15459,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15460 = seq__15444_15455;
var G__15461 = chunk__15445_15456;
var G__15462 = count__15446_15457;
var G__15463 = (i__15447_15458 + (1));
seq__15444_15455 = G__15460;
chunk__15445_15456 = G__15461;
count__15446_15457 = G__15462;
i__15447_15458 = G__15463;
continue;
} else {
var temp__5720__auto___15464 = cljs.core.seq.call(null,seq__15444_15455);
if(temp__5720__auto___15464){
var seq__15444_15465__$1 = temp__5720__auto___15464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15444_15465__$1)){
var c__4649__auto___15466 = cljs.core.chunk_first.call(null,seq__15444_15465__$1);
var G__15467 = cljs.core.chunk_rest.call(null,seq__15444_15465__$1);
var G__15468 = c__4649__auto___15466;
var G__15469 = cljs.core.count.call(null,c__4649__auto___15466);
var G__15470 = (0);
seq__15444_15455 = G__15467;
chunk__15445_15456 = G__15468;
count__15446_15457 = G__15469;
i__15447_15458 = G__15470;
continue;
} else {
var param_15471 = cljs.core.first.call(null,seq__15444_15465__$1);
cljs.compiler.emit.call(null,param_15471);

if(cljs.core._EQ_.call(null,param_15471,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15472 = cljs.core.next.call(null,seq__15444_15465__$1);
var G__15473 = null;
var G__15474 = (0);
var G__15475 = (0);
seq__15444_15455 = G__15472;
chunk__15445_15456 = G__15473;
count__15446_15457 = G__15474;
i__15447_15458 = G__15475;
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

cljs.compiler.emitln.call(null,"var ",mname_15453," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15476 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15476,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15454,".call(this,");

var seq__15448_15477 = cljs.core.seq.call(null,params);
var chunk__15449_15478 = null;
var count__15450_15479 = (0);
var i__15451_15480 = (0);
while(true){
if((i__15451_15480 < count__15450_15479)){
var param_15481 = cljs.core._nth.call(null,chunk__15449_15478,i__15451_15480);
cljs.compiler.emit.call(null,param_15481);

if(cljs.core._EQ_.call(null,param_15481,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15482 = seq__15448_15477;
var G__15483 = chunk__15449_15478;
var G__15484 = count__15450_15479;
var G__15485 = (i__15451_15480 + (1));
seq__15448_15477 = G__15482;
chunk__15449_15478 = G__15483;
count__15450_15479 = G__15484;
i__15451_15480 = G__15485;
continue;
} else {
var temp__5720__auto___15486 = cljs.core.seq.call(null,seq__15448_15477);
if(temp__5720__auto___15486){
var seq__15448_15487__$1 = temp__5720__auto___15486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15448_15487__$1)){
var c__4649__auto___15488 = cljs.core.chunk_first.call(null,seq__15448_15487__$1);
var G__15489 = cljs.core.chunk_rest.call(null,seq__15448_15487__$1);
var G__15490 = c__4649__auto___15488;
var G__15491 = cljs.core.count.call(null,c__4649__auto___15488);
var G__15492 = (0);
seq__15448_15477 = G__15489;
chunk__15449_15478 = G__15490;
count__15450_15479 = G__15491;
i__15451_15480 = G__15492;
continue;
} else {
var param_15493 = cljs.core.first.call(null,seq__15448_15487__$1);
cljs.compiler.emit.call(null,param_15493);

if(cljs.core._EQ_.call(null,param_15493,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15494 = cljs.core.next.call(null,seq__15448_15487__$1);
var G__15495 = null;
var G__15496 = (0);
var G__15497 = (0);
seq__15448_15477 = G__15494;
chunk__15449_15478 = G__15495;
count__15450_15479 = G__15496;
i__15451_15480 = G__15497;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15453,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15453,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15452__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15453,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15454,";");

cljs.compiler.emitln.call(null,"return ",mname_15453,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15501){
var map__15502 = p__15501;
var map__15502__$1 = cljs.core.__destructure_map.call(null,map__15502);
var variadic = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__15498_SHARP_){
var and__4221__auto__ = p1__15498_SHARP_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15498_SHARP_));
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
var name_15554__$1 = (function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15555 = cljs.compiler.munge.call(null,name_15554__$1);
var maxparams_15556 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15557 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15555),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_15558 = cljs.core.sort_by.call(null,(function (p1__15499_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15499_SHARP_)));
}),cljs.core.seq.call(null,mmap_15557));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15555," = null;");

var seq__15503_15559 = cljs.core.seq.call(null,ms_15558);
var chunk__15504_15560 = null;
var count__15505_15561 = (0);
var i__15506_15562 = (0);
while(true){
if((i__15506_15562 < count__15505_15561)){
var vec__15513_15563 = cljs.core._nth.call(null,chunk__15504_15560,i__15506_15562);
var n_15564 = cljs.core.nth.call(null,vec__15513_15563,(0),null);
var meth_15565 = cljs.core.nth.call(null,vec__15513_15563,(1),null);
cljs.compiler.emits.call(null,"var ",n_15564," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15565))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15565);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15565);
}

cljs.compiler.emitln.call(null,";");


var G__15566 = seq__15503_15559;
var G__15567 = chunk__15504_15560;
var G__15568 = count__15505_15561;
var G__15569 = (i__15506_15562 + (1));
seq__15503_15559 = G__15566;
chunk__15504_15560 = G__15567;
count__15505_15561 = G__15568;
i__15506_15562 = G__15569;
continue;
} else {
var temp__5720__auto___15570 = cljs.core.seq.call(null,seq__15503_15559);
if(temp__5720__auto___15570){
var seq__15503_15571__$1 = temp__5720__auto___15570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15503_15571__$1)){
var c__4649__auto___15572 = cljs.core.chunk_first.call(null,seq__15503_15571__$1);
var G__15573 = cljs.core.chunk_rest.call(null,seq__15503_15571__$1);
var G__15574 = c__4649__auto___15572;
var G__15575 = cljs.core.count.call(null,c__4649__auto___15572);
var G__15576 = (0);
seq__15503_15559 = G__15573;
chunk__15504_15560 = G__15574;
count__15505_15561 = G__15575;
i__15506_15562 = G__15576;
continue;
} else {
var vec__15516_15577 = cljs.core.first.call(null,seq__15503_15571__$1);
var n_15578 = cljs.core.nth.call(null,vec__15516_15577,(0),null);
var meth_15579 = cljs.core.nth.call(null,vec__15516_15577,(1),null);
cljs.compiler.emits.call(null,"var ",n_15578," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15579))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15579);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15579);
}

cljs.compiler.emitln.call(null,";");


var G__15580 = cljs.core.next.call(null,seq__15503_15571__$1);
var G__15581 = null;
var G__15582 = (0);
var G__15583 = (0);
seq__15503_15559 = G__15580;
chunk__15504_15560 = G__15581;
count__15505_15561 = G__15582;
i__15506_15562 = G__15583;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15555," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15556)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15556));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15519_15584 = cljs.core.seq.call(null,ms_15558);
var chunk__15520_15585 = null;
var count__15521_15586 = (0);
var i__15522_15587 = (0);
while(true){
if((i__15522_15587 < count__15521_15586)){
var vec__15529_15588 = cljs.core._nth.call(null,chunk__15520_15585,i__15522_15587);
var n_15589 = cljs.core.nth.call(null,vec__15529_15588,(0),null);
var meth_15590 = cljs.core.nth.call(null,vec__15529_15588,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15590))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15591 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15591," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15592 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15591," = new cljs.core.IndexedSeq(",a_15592,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15589,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15556)),(((cljs.core.count.call(null,maxparams_15556) > (1)))?", ":null),restarg_15591,");");
} else {
var pcnt_15593 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15590));
cljs.compiler.emitln.call(null,"case ",pcnt_15593,":");

cljs.compiler.emitln.call(null,"return ",n_15589,".call(this",(((pcnt_15593 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15593,maxparams_15556)),null,(1),null)),(2),null))),");");
}


var G__15594 = seq__15519_15584;
var G__15595 = chunk__15520_15585;
var G__15596 = count__15521_15586;
var G__15597 = (i__15522_15587 + (1));
seq__15519_15584 = G__15594;
chunk__15520_15585 = G__15595;
count__15521_15586 = G__15596;
i__15522_15587 = G__15597;
continue;
} else {
var temp__5720__auto___15598 = cljs.core.seq.call(null,seq__15519_15584);
if(temp__5720__auto___15598){
var seq__15519_15599__$1 = temp__5720__auto___15598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15519_15599__$1)){
var c__4649__auto___15600 = cljs.core.chunk_first.call(null,seq__15519_15599__$1);
var G__15601 = cljs.core.chunk_rest.call(null,seq__15519_15599__$1);
var G__15602 = c__4649__auto___15600;
var G__15603 = cljs.core.count.call(null,c__4649__auto___15600);
var G__15604 = (0);
seq__15519_15584 = G__15601;
chunk__15520_15585 = G__15602;
count__15521_15586 = G__15603;
i__15522_15587 = G__15604;
continue;
} else {
var vec__15532_15605 = cljs.core.first.call(null,seq__15519_15599__$1);
var n_15606 = cljs.core.nth.call(null,vec__15532_15605,(0),null);
var meth_15607 = cljs.core.nth.call(null,vec__15532_15605,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15607))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15608 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15608," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15609 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15608," = new cljs.core.IndexedSeq(",a_15609,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15606,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15556)),(((cljs.core.count.call(null,maxparams_15556) > (1)))?", ":null),restarg_15608,");");
} else {
var pcnt_15610 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15607));
cljs.compiler.emitln.call(null,"case ",pcnt_15610,":");

cljs.compiler.emitln.call(null,"return ",n_15606,".call(this",(((pcnt_15610 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15610,maxparams_15556)),null,(1),null)),(2),null))),");");
}


var G__15611 = cljs.core.next.call(null,seq__15519_15599__$1);
var G__15612 = null;
var G__15613 = (0);
var G__15614 = (0);
seq__15519_15584 = G__15611;
chunk__15520_15585 = G__15612;
count__15521_15586 = G__15613;
i__15522_15587 = G__15614;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_15615 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15558)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_15615,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15555,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15555,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__15500_SHARP_){
var vec__15535 = p1__15500_SHARP_;
var n = cljs.core.nth.call(null,vec__15535,(0),null);
var m = cljs.core.nth.call(null,vec__15535,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_15558),".cljs$lang$applyTo;");
} else {
}

var seq__15538_15616 = cljs.core.seq.call(null,ms_15558);
var chunk__15539_15617 = null;
var count__15540_15618 = (0);
var i__15541_15619 = (0);
while(true){
if((i__15541_15619 < count__15540_15618)){
var vec__15548_15620 = cljs.core._nth.call(null,chunk__15539_15617,i__15541_15619);
var n_15621 = cljs.core.nth.call(null,vec__15548_15620,(0),null);
var meth_15622 = cljs.core.nth.call(null,vec__15548_15620,(1),null);
var c_15623 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15622));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15622))){
cljs.compiler.emitln.call(null,mname_15555,".cljs$core$IFn$_invoke$arity$variadic = ",n_15621,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15555,".cljs$core$IFn$_invoke$arity$",c_15623," = ",n_15621,";");
}


var G__15624 = seq__15538_15616;
var G__15625 = chunk__15539_15617;
var G__15626 = count__15540_15618;
var G__15627 = (i__15541_15619 + (1));
seq__15538_15616 = G__15624;
chunk__15539_15617 = G__15625;
count__15540_15618 = G__15626;
i__15541_15619 = G__15627;
continue;
} else {
var temp__5720__auto___15628 = cljs.core.seq.call(null,seq__15538_15616);
if(temp__5720__auto___15628){
var seq__15538_15629__$1 = temp__5720__auto___15628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15538_15629__$1)){
var c__4649__auto___15630 = cljs.core.chunk_first.call(null,seq__15538_15629__$1);
var G__15631 = cljs.core.chunk_rest.call(null,seq__15538_15629__$1);
var G__15632 = c__4649__auto___15630;
var G__15633 = cljs.core.count.call(null,c__4649__auto___15630);
var G__15634 = (0);
seq__15538_15616 = G__15631;
chunk__15539_15617 = G__15632;
count__15540_15618 = G__15633;
i__15541_15619 = G__15634;
continue;
} else {
var vec__15551_15635 = cljs.core.first.call(null,seq__15538_15629__$1);
var n_15636 = cljs.core.nth.call(null,vec__15551_15635,(0),null);
var meth_15637 = cljs.core.nth.call(null,vec__15551_15635,(1),null);
var c_15638 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15637));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15637))){
cljs.compiler.emitln.call(null,mname_15555,".cljs$core$IFn$_invoke$arity$variadic = ",n_15636,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15555,".cljs$core$IFn$_invoke$arity$",c_15638," = ",n_15636,";");
}


var G__15639 = cljs.core.next.call(null,seq__15538_15629__$1);
var G__15640 = null;
var G__15641 = (0);
var G__15642 = (0);
seq__15538_15616 = G__15639;
chunk__15539_15617 = G__15640;
count__15540_15618 = G__15641;
i__15541_15619 = G__15642;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15555,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15643){
var map__15644 = p__15643;
var map__15644__$1 = cljs.core.__destructure_map.call(null,map__15644);
var statements = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__15645_15649 = cljs.core.seq.call(null,statements);
var chunk__15646_15650 = null;
var count__15647_15651 = (0);
var i__15648_15652 = (0);
while(true){
if((i__15648_15652 < count__15647_15651)){
var s_15653 = cljs.core._nth.call(null,chunk__15646_15650,i__15648_15652);
cljs.compiler.emitln.call(null,s_15653);


var G__15654 = seq__15645_15649;
var G__15655 = chunk__15646_15650;
var G__15656 = count__15647_15651;
var G__15657 = (i__15648_15652 + (1));
seq__15645_15649 = G__15654;
chunk__15646_15650 = G__15655;
count__15647_15651 = G__15656;
i__15648_15652 = G__15657;
continue;
} else {
var temp__5720__auto___15658 = cljs.core.seq.call(null,seq__15645_15649);
if(temp__5720__auto___15658){
var seq__15645_15659__$1 = temp__5720__auto___15658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15645_15659__$1)){
var c__4649__auto___15660 = cljs.core.chunk_first.call(null,seq__15645_15659__$1);
var G__15661 = cljs.core.chunk_rest.call(null,seq__15645_15659__$1);
var G__15662 = c__4649__auto___15660;
var G__15663 = cljs.core.count.call(null,c__4649__auto___15660);
var G__15664 = (0);
seq__15645_15649 = G__15661;
chunk__15646_15650 = G__15662;
count__15647_15651 = G__15663;
i__15648_15652 = G__15664;
continue;
} else {
var s_15665 = cljs.core.first.call(null,seq__15645_15659__$1);
cljs.compiler.emitln.call(null,s_15665);


var G__15666 = cljs.core.next.call(null,seq__15645_15659__$1);
var G__15667 = null;
var G__15668 = (0);
var G__15669 = (0);
seq__15645_15649 = G__15666;
chunk__15646_15650 = G__15667;
count__15647_15651 = G__15668;
i__15648_15652 = G__15669;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15670){
var map__15671 = p__15670;
var map__15671__$1 = cljs.core.__destructure_map.call(null,map__15671);
var try$ = cljs.core.get.call(null,map__15671__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__15671__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__15671__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15671__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15671__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15672,is_loop){
var map__15673 = p__15672;
var map__15673__$1 = cljs.core.__destructure_map.call(null,map__15673);
var expr = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__15674_15684 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__15675_15685 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__15675_15685);

try{var seq__15676_15686 = cljs.core.seq.call(null,bindings);
var chunk__15677_15687 = null;
var count__15678_15688 = (0);
var i__15679_15689 = (0);
while(true){
if((i__15679_15689 < count__15678_15688)){
var map__15682_15690 = cljs.core._nth.call(null,chunk__15677_15687,i__15679_15689);
var map__15682_15691__$1 = cljs.core.__destructure_map.call(null,map__15682_15690);
var binding_15692 = map__15682_15691__$1;
var init_15693 = cljs.core.get.call(null,map__15682_15691__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15692);

cljs.compiler.emitln.call(null," = ",init_15693,";");


var G__15694 = seq__15676_15686;
var G__15695 = chunk__15677_15687;
var G__15696 = count__15678_15688;
var G__15697 = (i__15679_15689 + (1));
seq__15676_15686 = G__15694;
chunk__15677_15687 = G__15695;
count__15678_15688 = G__15696;
i__15679_15689 = G__15697;
continue;
} else {
var temp__5720__auto___15698 = cljs.core.seq.call(null,seq__15676_15686);
if(temp__5720__auto___15698){
var seq__15676_15699__$1 = temp__5720__auto___15698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15676_15699__$1)){
var c__4649__auto___15700 = cljs.core.chunk_first.call(null,seq__15676_15699__$1);
var G__15701 = cljs.core.chunk_rest.call(null,seq__15676_15699__$1);
var G__15702 = c__4649__auto___15700;
var G__15703 = cljs.core.count.call(null,c__4649__auto___15700);
var G__15704 = (0);
seq__15676_15686 = G__15701;
chunk__15677_15687 = G__15702;
count__15678_15688 = G__15703;
i__15679_15689 = G__15704;
continue;
} else {
var map__15683_15705 = cljs.core.first.call(null,seq__15676_15699__$1);
var map__15683_15706__$1 = cljs.core.__destructure_map.call(null,map__15683_15705);
var binding_15707 = map__15683_15706__$1;
var init_15708 = cljs.core.get.call(null,map__15683_15706__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15707);

cljs.compiler.emitln.call(null," = ",init_15708,";");


var G__15709 = cljs.core.next.call(null,seq__15676_15699__$1);
var G__15710 = null;
var G__15711 = (0);
var G__15712 = (0);
seq__15676_15686 = G__15709;
chunk__15677_15687 = G__15710;
count__15678_15688 = G__15711;
i__15679_15689 = G__15712;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__15674_15684);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15713){
var map__15714 = p__15713;
var map__15714__$1 = cljs.core.__destructure_map.call(null,map__15714);
var frame = cljs.core.get.call(null,map__15714__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__15714__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__15714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4706__auto___15715 = cljs.core.count.call(null,exprs);
var i_15716 = (0);
while(true){
if((i_15716 < n__4706__auto___15715)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_15716)," = ",exprs.call(null,i_15716),";");

var G__15717 = (i_15716 + (1));
i_15716 = G__15717;
continue;
} else {
}
break;
}

var n__4706__auto___15718 = cljs.core.count.call(null,exprs);
var i_15719 = (0);
while(true){
if((i_15719 < n__4706__auto___15718)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_15719))," = ",temps.call(null,i_15719),";");

var G__15720 = (i_15719 + (1));
i_15719 = G__15720;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15721){
var map__15722 = p__15721;
var map__15722__$1 = cljs.core.__destructure_map.call(null,map__15722);
var expr = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15722__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__15723_15731 = cljs.core.seq.call(null,bindings);
var chunk__15724_15732 = null;
var count__15725_15733 = (0);
var i__15726_15734 = (0);
while(true){
if((i__15726_15734 < count__15725_15733)){
var map__15729_15735 = cljs.core._nth.call(null,chunk__15724_15732,i__15726_15734);
var map__15729_15736__$1 = cljs.core.__destructure_map.call(null,map__15729_15735);
var binding_15737 = map__15729_15736__$1;
var init_15738 = cljs.core.get.call(null,map__15729_15736__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15737)," = ",init_15738,";");


var G__15739 = seq__15723_15731;
var G__15740 = chunk__15724_15732;
var G__15741 = count__15725_15733;
var G__15742 = (i__15726_15734 + (1));
seq__15723_15731 = G__15739;
chunk__15724_15732 = G__15740;
count__15725_15733 = G__15741;
i__15726_15734 = G__15742;
continue;
} else {
var temp__5720__auto___15743 = cljs.core.seq.call(null,seq__15723_15731);
if(temp__5720__auto___15743){
var seq__15723_15744__$1 = temp__5720__auto___15743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15723_15744__$1)){
var c__4649__auto___15745 = cljs.core.chunk_first.call(null,seq__15723_15744__$1);
var G__15746 = cljs.core.chunk_rest.call(null,seq__15723_15744__$1);
var G__15747 = c__4649__auto___15745;
var G__15748 = cljs.core.count.call(null,c__4649__auto___15745);
var G__15749 = (0);
seq__15723_15731 = G__15746;
chunk__15724_15732 = G__15747;
count__15725_15733 = G__15748;
i__15726_15734 = G__15749;
continue;
} else {
var map__15730_15750 = cljs.core.first.call(null,seq__15723_15744__$1);
var map__15730_15751__$1 = cljs.core.__destructure_map.call(null,map__15730_15750);
var binding_15752 = map__15730_15751__$1;
var init_15753 = cljs.core.get.call(null,map__15730_15751__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15752)," = ",init_15753,";");


var G__15754 = cljs.core.next.call(null,seq__15723_15744__$1);
var G__15755 = null;
var G__15756 = (0);
var G__15757 = (0);
seq__15723_15731 = G__15754;
chunk__15724_15732 = G__15755;
count__15725_15733 = G__15756;
i__15726_15734 = G__15757;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15760){
var map__15761 = p__15760;
var map__15761__$1 = cljs.core.__destructure_map.call(null,map__15761);
var expr = map__15761__$1;
var f = cljs.core.get.call(null,map__15761__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__15761__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15762 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__15758_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15758_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__15759_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15759_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__15762,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__15762,(1),null);
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
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
var pimpl_15765 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_15765,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15766 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_15766,args)),(((mfa_15766 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_15766,args)),"], 0))");
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
var fprop_15767 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_15767," ? ",f__$1,fprop_15767,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_15767," ? ",f__$1,fprop_15767,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__15768){
var map__15769 = p__15768;
var map__15769__$1 = cljs.core.__destructure_map.call(null,map__15769);
var ctor = cljs.core.get.call(null,map__15769__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__15769__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__15770){
var map__15771 = p__15770;
var map__15771__$1 = cljs.core.__destructure_map.call(null,map__15771);
var target = cljs.core.get.call(null,map__15771__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__15771__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__15771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__15772_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15772_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__15773 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15773,(0),null);
var sublib = cljs.core.nth.call(null,vec__15773,(1),null);
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
var map__15776 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15776__$1 = cljs.core.__destructure_map.call(null,map__15776);
var options = cljs.core.get.call(null,map__15776__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__15776__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__15777 = options;
var map__15777__$1 = cljs.core.__destructure_map.call(null,map__15777);
var target = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__15777__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__15778 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__15781 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__15781__$1 = cljs.core.__destructure_map.call(null,map__15781);
var node_libs = cljs.core.get.call(null,map__15781__$1,true);
var libs_to_load = cljs.core.get.call(null,map__15781__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__15778,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__15778,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__15782_15810 = cljs.core.seq.call(null,libs_to_load);
var chunk__15783_15811 = null;
var count__15784_15812 = (0);
var i__15785_15813 = (0);
while(true){
if((i__15785_15813 < count__15784_15812)){
var lib_15814 = cljs.core._nth.call(null,chunk__15783_15811,i__15785_15813);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15814)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15814),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15814),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15814),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15814),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15814,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15814),"');");
}

}
}
}


var G__15815 = seq__15782_15810;
var G__15816 = chunk__15783_15811;
var G__15817 = count__15784_15812;
var G__15818 = (i__15785_15813 + (1));
seq__15782_15810 = G__15815;
chunk__15783_15811 = G__15816;
count__15784_15812 = G__15817;
i__15785_15813 = G__15818;
continue;
} else {
var temp__5720__auto___15819 = cljs.core.seq.call(null,seq__15782_15810);
if(temp__5720__auto___15819){
var seq__15782_15820__$1 = temp__5720__auto___15819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15782_15820__$1)){
var c__4649__auto___15821 = cljs.core.chunk_first.call(null,seq__15782_15820__$1);
var G__15822 = cljs.core.chunk_rest.call(null,seq__15782_15820__$1);
var G__15823 = c__4649__auto___15821;
var G__15824 = cljs.core.count.call(null,c__4649__auto___15821);
var G__15825 = (0);
seq__15782_15810 = G__15822;
chunk__15783_15811 = G__15823;
count__15784_15812 = G__15824;
i__15785_15813 = G__15825;
continue;
} else {
var lib_15826 = cljs.core.first.call(null,seq__15782_15820__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15826)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15826),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15826),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15826),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15826),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15826,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15826),"');");
}

}
}
}


var G__15827 = cljs.core.next.call(null,seq__15782_15820__$1);
var G__15828 = null;
var G__15829 = (0);
var G__15830 = (0);
seq__15782_15810 = G__15827;
chunk__15783_15811 = G__15828;
count__15784_15812 = G__15829;
i__15785_15813 = G__15830;
continue;
}
} else {
}
}
break;
}

var seq__15786_15831 = cljs.core.seq.call(null,node_libs);
var chunk__15787_15832 = null;
var count__15788_15833 = (0);
var i__15789_15834 = (0);
while(true){
if((i__15789_15834 < count__15788_15833)){
var lib_15835 = cljs.core._nth.call(null,chunk__15787_15832,i__15789_15834);
var vec__15796_15836 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_15835);
var lib_SINGLEQUOTE__15837 = cljs.core.nth.call(null,vec__15796_15836,(0),null);
var sublib_15838 = cljs.core.nth.call(null,vec__15796_15836,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15835)," = require('",lib_SINGLEQUOTE__15837,"')",cljs.compiler.sublib_select.call(null,sublib_15838),";");


var G__15839 = seq__15786_15831;
var G__15840 = chunk__15787_15832;
var G__15841 = count__15788_15833;
var G__15842 = (i__15789_15834 + (1));
seq__15786_15831 = G__15839;
chunk__15787_15832 = G__15840;
count__15788_15833 = G__15841;
i__15789_15834 = G__15842;
continue;
} else {
var temp__5720__auto___15843 = cljs.core.seq.call(null,seq__15786_15831);
if(temp__5720__auto___15843){
var seq__15786_15844__$1 = temp__5720__auto___15843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15786_15844__$1)){
var c__4649__auto___15845 = cljs.core.chunk_first.call(null,seq__15786_15844__$1);
var G__15846 = cljs.core.chunk_rest.call(null,seq__15786_15844__$1);
var G__15847 = c__4649__auto___15845;
var G__15848 = cljs.core.count.call(null,c__4649__auto___15845);
var G__15849 = (0);
seq__15786_15831 = G__15846;
chunk__15787_15832 = G__15847;
count__15788_15833 = G__15848;
i__15789_15834 = G__15849;
continue;
} else {
var lib_15850 = cljs.core.first.call(null,seq__15786_15844__$1);
var vec__15799_15851 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_15850);
var lib_SINGLEQUOTE__15852 = cljs.core.nth.call(null,vec__15799_15851,(0),null);
var sublib_15853 = cljs.core.nth.call(null,vec__15799_15851,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15850)," = require('",lib_SINGLEQUOTE__15852,"')",cljs.compiler.sublib_select.call(null,sublib_15853),";");


var G__15854 = cljs.core.next.call(null,seq__15786_15844__$1);
var G__15855 = null;
var G__15856 = (0);
var G__15857 = (0);
seq__15786_15831 = G__15854;
chunk__15787_15832 = G__15855;
count__15788_15833 = G__15856;
i__15789_15834 = G__15857;
continue;
}
} else {
}
}
break;
}

var seq__15802_15858 = cljs.core.seq.call(null,global_exports_libs);
var chunk__15803_15859 = null;
var count__15804_15860 = (0);
var i__15805_15861 = (0);
while(true){
if((i__15805_15861 < count__15804_15860)){
var lib_15862 = cljs.core._nth.call(null,chunk__15803_15859,i__15805_15861);
var map__15808_15863 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_15862))));
var map__15808_15864__$1 = cljs.core.__destructure_map.call(null,map__15808_15863);
var global_exports_15865 = cljs.core.get.call(null,map__15808_15864__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_15865,lib_15862);


var G__15866 = seq__15802_15858;
var G__15867 = chunk__15803_15859;
var G__15868 = count__15804_15860;
var G__15869 = (i__15805_15861 + (1));
seq__15802_15858 = G__15866;
chunk__15803_15859 = G__15867;
count__15804_15860 = G__15868;
i__15805_15861 = G__15869;
continue;
} else {
var temp__5720__auto___15870 = cljs.core.seq.call(null,seq__15802_15858);
if(temp__5720__auto___15870){
var seq__15802_15871__$1 = temp__5720__auto___15870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15802_15871__$1)){
var c__4649__auto___15872 = cljs.core.chunk_first.call(null,seq__15802_15871__$1);
var G__15873 = cljs.core.chunk_rest.call(null,seq__15802_15871__$1);
var G__15874 = c__4649__auto___15872;
var G__15875 = cljs.core.count.call(null,c__4649__auto___15872);
var G__15876 = (0);
seq__15802_15858 = G__15873;
chunk__15803_15859 = G__15874;
count__15804_15860 = G__15875;
i__15805_15861 = G__15876;
continue;
} else {
var lib_15877 = cljs.core.first.call(null,seq__15802_15871__$1);
var map__15809_15878 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_15877))));
var map__15809_15879__$1 = cljs.core.__destructure_map.call(null,map__15809_15878);
var global_exports_15880 = cljs.core.get.call(null,map__15809_15879__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_15880,lib_15877);


var G__15881 = cljs.core.next.call(null,seq__15802_15871__$1);
var G__15882 = null;
var G__15883 = (0);
var G__15884 = (0);
seq__15802_15858 = G__15881;
chunk__15803_15859 = G__15882;
count__15804_15860 = G__15883;
i__15805_15861 = G__15884;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__15885){
var map__15886 = p__15885;
var map__15886__$1 = cljs.core.__destructure_map.call(null,map__15886);
var name = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15887){
var map__15888 = p__15887;
var map__15888__$1 = cljs.core.__destructure_map.call(null,map__15888);
var name = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__15889){
var map__15890 = p__15889;
var map__15890__$1 = cljs.core.__destructure_map.call(null,map__15890);
var t = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15891_15915 = cljs.core.seq.call(null,protocols);
var chunk__15892_15916 = null;
var count__15893_15917 = (0);
var i__15894_15918 = (0);
while(true){
if((i__15894_15918 < count__15893_15917)){
var protocol_15919 = cljs.core._nth.call(null,chunk__15892_15916,i__15894_15918);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15919)),"}");


var G__15920 = seq__15891_15915;
var G__15921 = chunk__15892_15916;
var G__15922 = count__15893_15917;
var G__15923 = (i__15894_15918 + (1));
seq__15891_15915 = G__15920;
chunk__15892_15916 = G__15921;
count__15893_15917 = G__15922;
i__15894_15918 = G__15923;
continue;
} else {
var temp__5720__auto___15924 = cljs.core.seq.call(null,seq__15891_15915);
if(temp__5720__auto___15924){
var seq__15891_15925__$1 = temp__5720__auto___15924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15891_15925__$1)){
var c__4649__auto___15926 = cljs.core.chunk_first.call(null,seq__15891_15925__$1);
var G__15927 = cljs.core.chunk_rest.call(null,seq__15891_15925__$1);
var G__15928 = c__4649__auto___15926;
var G__15929 = cljs.core.count.call(null,c__4649__auto___15926);
var G__15930 = (0);
seq__15891_15915 = G__15927;
chunk__15892_15916 = G__15928;
count__15893_15917 = G__15929;
i__15894_15918 = G__15930;
continue;
} else {
var protocol_15931 = cljs.core.first.call(null,seq__15891_15925__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15931)),"}");


var G__15932 = cljs.core.next.call(null,seq__15891_15925__$1);
var G__15933 = null;
var G__15934 = (0);
var G__15935 = (0);
seq__15891_15915 = G__15932;
chunk__15892_15916 = G__15933;
count__15893_15917 = G__15934;
i__15894_15918 = G__15935;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15895_15936 = cljs.core.seq.call(null,fields__$1);
var chunk__15896_15937 = null;
var count__15897_15938 = (0);
var i__15898_15939 = (0);
while(true){
if((i__15898_15939 < count__15897_15938)){
var fld_15940 = cljs.core._nth.call(null,chunk__15896_15937,i__15898_15939);
cljs.compiler.emitln.call(null,"this.",fld_15940," = ",fld_15940,";");


var G__15941 = seq__15895_15936;
var G__15942 = chunk__15896_15937;
var G__15943 = count__15897_15938;
var G__15944 = (i__15898_15939 + (1));
seq__15895_15936 = G__15941;
chunk__15896_15937 = G__15942;
count__15897_15938 = G__15943;
i__15898_15939 = G__15944;
continue;
} else {
var temp__5720__auto___15945 = cljs.core.seq.call(null,seq__15895_15936);
if(temp__5720__auto___15945){
var seq__15895_15946__$1 = temp__5720__auto___15945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15895_15946__$1)){
var c__4649__auto___15947 = cljs.core.chunk_first.call(null,seq__15895_15946__$1);
var G__15948 = cljs.core.chunk_rest.call(null,seq__15895_15946__$1);
var G__15949 = c__4649__auto___15947;
var G__15950 = cljs.core.count.call(null,c__4649__auto___15947);
var G__15951 = (0);
seq__15895_15936 = G__15948;
chunk__15896_15937 = G__15949;
count__15897_15938 = G__15950;
i__15898_15939 = G__15951;
continue;
} else {
var fld_15952 = cljs.core.first.call(null,seq__15895_15946__$1);
cljs.compiler.emitln.call(null,"this.",fld_15952," = ",fld_15952,";");


var G__15953 = cljs.core.next.call(null,seq__15895_15946__$1);
var G__15954 = null;
var G__15955 = (0);
var G__15956 = (0);
seq__15895_15936 = G__15953;
chunk__15896_15937 = G__15954;
count__15897_15938 = G__15955;
i__15898_15939 = G__15956;
continue;
}
} else {
}
}
break;
}

var seq__15899_15957 = cljs.core.seq.call(null,pmasks);
var chunk__15900_15958 = null;
var count__15901_15959 = (0);
var i__15902_15960 = (0);
while(true){
if((i__15902_15960 < count__15901_15959)){
var vec__15909_15961 = cljs.core._nth.call(null,chunk__15900_15958,i__15902_15960);
var pno_15962 = cljs.core.nth.call(null,vec__15909_15961,(0),null);
var pmask_15963 = cljs.core.nth.call(null,vec__15909_15961,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15962,"$ = ",pmask_15963,";");


var G__15964 = seq__15899_15957;
var G__15965 = chunk__15900_15958;
var G__15966 = count__15901_15959;
var G__15967 = (i__15902_15960 + (1));
seq__15899_15957 = G__15964;
chunk__15900_15958 = G__15965;
count__15901_15959 = G__15966;
i__15902_15960 = G__15967;
continue;
} else {
var temp__5720__auto___15968 = cljs.core.seq.call(null,seq__15899_15957);
if(temp__5720__auto___15968){
var seq__15899_15969__$1 = temp__5720__auto___15968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15899_15969__$1)){
var c__4649__auto___15970 = cljs.core.chunk_first.call(null,seq__15899_15969__$1);
var G__15971 = cljs.core.chunk_rest.call(null,seq__15899_15969__$1);
var G__15972 = c__4649__auto___15970;
var G__15973 = cljs.core.count.call(null,c__4649__auto___15970);
var G__15974 = (0);
seq__15899_15957 = G__15971;
chunk__15900_15958 = G__15972;
count__15901_15959 = G__15973;
i__15902_15960 = G__15974;
continue;
} else {
var vec__15912_15975 = cljs.core.first.call(null,seq__15899_15969__$1);
var pno_15976 = cljs.core.nth.call(null,vec__15912_15975,(0),null);
var pmask_15977 = cljs.core.nth.call(null,vec__15912_15975,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15976,"$ = ",pmask_15977,";");


var G__15978 = cljs.core.next.call(null,seq__15899_15969__$1);
var G__15979 = null;
var G__15980 = (0);
var G__15981 = (0);
seq__15899_15957 = G__15978;
chunk__15900_15958 = G__15979;
count__15901_15959 = G__15980;
i__15902_15960 = G__15981;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__15982){
var map__15983 = p__15982;
var map__15983__$1 = cljs.core.__destructure_map.call(null,map__15983);
var t = cljs.core.get.call(null,map__15983__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15983__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15983__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15983__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15983__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15984_16008 = cljs.core.seq.call(null,protocols);
var chunk__15985_16009 = null;
var count__15986_16010 = (0);
var i__15987_16011 = (0);
while(true){
if((i__15987_16011 < count__15986_16010)){
var protocol_16012 = cljs.core._nth.call(null,chunk__15985_16009,i__15987_16011);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16012)),"}");


var G__16013 = seq__15984_16008;
var G__16014 = chunk__15985_16009;
var G__16015 = count__15986_16010;
var G__16016 = (i__15987_16011 + (1));
seq__15984_16008 = G__16013;
chunk__15985_16009 = G__16014;
count__15986_16010 = G__16015;
i__15987_16011 = G__16016;
continue;
} else {
var temp__5720__auto___16017 = cljs.core.seq.call(null,seq__15984_16008);
if(temp__5720__auto___16017){
var seq__15984_16018__$1 = temp__5720__auto___16017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15984_16018__$1)){
var c__4649__auto___16019 = cljs.core.chunk_first.call(null,seq__15984_16018__$1);
var G__16020 = cljs.core.chunk_rest.call(null,seq__15984_16018__$1);
var G__16021 = c__4649__auto___16019;
var G__16022 = cljs.core.count.call(null,c__4649__auto___16019);
var G__16023 = (0);
seq__15984_16008 = G__16020;
chunk__15985_16009 = G__16021;
count__15986_16010 = G__16022;
i__15987_16011 = G__16023;
continue;
} else {
var protocol_16024 = cljs.core.first.call(null,seq__15984_16018__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_16024)),"}");


var G__16025 = cljs.core.next.call(null,seq__15984_16018__$1);
var G__16026 = null;
var G__16027 = (0);
var G__16028 = (0);
seq__15984_16008 = G__16025;
chunk__15985_16009 = G__16026;
count__15986_16010 = G__16027;
i__15987_16011 = G__16028;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15988_16029 = cljs.core.seq.call(null,fields__$1);
var chunk__15989_16030 = null;
var count__15990_16031 = (0);
var i__15991_16032 = (0);
while(true){
if((i__15991_16032 < count__15990_16031)){
var fld_16033 = cljs.core._nth.call(null,chunk__15989_16030,i__15991_16032);
cljs.compiler.emitln.call(null,"this.",fld_16033," = ",fld_16033,";");


var G__16034 = seq__15988_16029;
var G__16035 = chunk__15989_16030;
var G__16036 = count__15990_16031;
var G__16037 = (i__15991_16032 + (1));
seq__15988_16029 = G__16034;
chunk__15989_16030 = G__16035;
count__15990_16031 = G__16036;
i__15991_16032 = G__16037;
continue;
} else {
var temp__5720__auto___16038 = cljs.core.seq.call(null,seq__15988_16029);
if(temp__5720__auto___16038){
var seq__15988_16039__$1 = temp__5720__auto___16038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15988_16039__$1)){
var c__4649__auto___16040 = cljs.core.chunk_first.call(null,seq__15988_16039__$1);
var G__16041 = cljs.core.chunk_rest.call(null,seq__15988_16039__$1);
var G__16042 = c__4649__auto___16040;
var G__16043 = cljs.core.count.call(null,c__4649__auto___16040);
var G__16044 = (0);
seq__15988_16029 = G__16041;
chunk__15989_16030 = G__16042;
count__15990_16031 = G__16043;
i__15991_16032 = G__16044;
continue;
} else {
var fld_16045 = cljs.core.first.call(null,seq__15988_16039__$1);
cljs.compiler.emitln.call(null,"this.",fld_16045," = ",fld_16045,";");


var G__16046 = cljs.core.next.call(null,seq__15988_16039__$1);
var G__16047 = null;
var G__16048 = (0);
var G__16049 = (0);
seq__15988_16029 = G__16046;
chunk__15989_16030 = G__16047;
count__15990_16031 = G__16048;
i__15991_16032 = G__16049;
continue;
}
} else {
}
}
break;
}

var seq__15992_16050 = cljs.core.seq.call(null,pmasks);
var chunk__15993_16051 = null;
var count__15994_16052 = (0);
var i__15995_16053 = (0);
while(true){
if((i__15995_16053 < count__15994_16052)){
var vec__16002_16054 = cljs.core._nth.call(null,chunk__15993_16051,i__15995_16053);
var pno_16055 = cljs.core.nth.call(null,vec__16002_16054,(0),null);
var pmask_16056 = cljs.core.nth.call(null,vec__16002_16054,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16055,"$ = ",pmask_16056,";");


var G__16057 = seq__15992_16050;
var G__16058 = chunk__15993_16051;
var G__16059 = count__15994_16052;
var G__16060 = (i__15995_16053 + (1));
seq__15992_16050 = G__16057;
chunk__15993_16051 = G__16058;
count__15994_16052 = G__16059;
i__15995_16053 = G__16060;
continue;
} else {
var temp__5720__auto___16061 = cljs.core.seq.call(null,seq__15992_16050);
if(temp__5720__auto___16061){
var seq__15992_16062__$1 = temp__5720__auto___16061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15992_16062__$1)){
var c__4649__auto___16063 = cljs.core.chunk_first.call(null,seq__15992_16062__$1);
var G__16064 = cljs.core.chunk_rest.call(null,seq__15992_16062__$1);
var G__16065 = c__4649__auto___16063;
var G__16066 = cljs.core.count.call(null,c__4649__auto___16063);
var G__16067 = (0);
seq__15992_16050 = G__16064;
chunk__15993_16051 = G__16065;
count__15994_16052 = G__16066;
i__15995_16053 = G__16067;
continue;
} else {
var vec__16005_16068 = cljs.core.first.call(null,seq__15992_16062__$1);
var pno_16069 = cljs.core.nth.call(null,vec__16005_16068,(0),null);
var pmask_16070 = cljs.core.nth.call(null,vec__16005_16068,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16069,"$ = ",pmask_16070,";");


var G__16071 = cljs.core.next.call(null,seq__15992_16062__$1);
var G__16072 = null;
var G__16073 = (0);
var G__16074 = (0);
seq__15992_16050 = G__16071;
chunk__15993_16051 = G__16072;
count__15994_16052 = G__16073;
i__15995_16053 = G__16074;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16075){
var map__16076 = p__16075;
var map__16076__$1 = cljs.core.__destructure_map.call(null,map__16076);
var target = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16077){
var map__16078 = p__16077;
var map__16078__$1 = cljs.core.__destructure_map.call(null,map__16078);
var op = cljs.core.get.call(null,map__16078__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16078__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16078__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16078__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16078__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4221__auto__ = code;
if(cljs.core.truth_(and__4221__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4221__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__14917__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14917__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16083 = cljs.core.seq.call(null,table);
var chunk__16084 = null;
var count__16085 = (0);
var i__16086 = (0);
while(true){
if((i__16086 < count__16085)){
var vec__16093 = cljs.core._nth.call(null,chunk__16084,i__16086);
var sym = cljs.core.nth.call(null,vec__16093,(0),null);
var value = cljs.core.nth.call(null,vec__16093,(1),null);
var ns_16099 = cljs.core.namespace.call(null,sym);
var name_16100 = cljs.core.name.call(null,sym);
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


var G__16101 = seq__16083;
var G__16102 = chunk__16084;
var G__16103 = count__16085;
var G__16104 = (i__16086 + (1));
seq__16083 = G__16101;
chunk__16084 = G__16102;
count__16085 = G__16103;
i__16086 = G__16104;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16083);
if(temp__5720__auto__){
var seq__16083__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16083__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__16083__$1);
var G__16105 = cljs.core.chunk_rest.call(null,seq__16083__$1);
var G__16106 = c__4649__auto__;
var G__16107 = cljs.core.count.call(null,c__4649__auto__);
var G__16108 = (0);
seq__16083 = G__16105;
chunk__16084 = G__16106;
count__16085 = G__16107;
i__16086 = G__16108;
continue;
} else {
var vec__16096 = cljs.core.first.call(null,seq__16083__$1);
var sym = cljs.core.nth.call(null,vec__16096,(0),null);
var value = cljs.core.nth.call(null,vec__16096,(1),null);
var ns_16109 = cljs.core.namespace.call(null,sym);
var name_16110 = cljs.core.name.call(null,sym);
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


var G__16111 = cljs.core.next.call(null,seq__16083__$1);
var G__16112 = null;
var G__16113 = (0);
var G__16114 = (0);
seq__16083 = G__16111;
chunk__16084 = G__16112;
count__16085 = G__16113;
i__16086 = G__16114;
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
var G__16116 = arguments.length;
switch (G__16116) {
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
var k_16121 = cljs.core.first.call(null,ks);
var vec__16117_16122 = cljs.core.conj.call(null,prefix,k_16121);
var top_16123 = cljs.core.nth.call(null,vec__16117_16122,(0),null);
var prefix_SINGLEQUOTE__16124 = vec__16117_16122;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16121)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16124) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16123)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16123)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16124)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16123);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16124)),";");
}
} else {
}

var m_16125 = cljs.core.get.call(null,externs,k_16121);
if(cljs.core.empty_QMARK_.call(null,m_16125)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16124,m_16125,top_level,known_externs);
}

var G__16126 = cljs.core.next.call(null,ks);
ks = G__16126;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

