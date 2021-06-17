// Compiled by ClojureScript 1.10.866 {:optimizations :none}
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
var map__12227 = s;
var map__12227__$1 = cljs.core.__destructure_map.call(null,map__12227);
var name = cljs.core.get.call(null,map__12227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12227__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12229 = info;
var map__12230 = G__12229;
var map__12230__$1 = cljs.core.__destructure_map.call(null,map__12230);
var shadow = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12229__$1 = G__12229;
while(true){
var d__$2 = d__$1;
var map__12232 = G__12229__$1;
var map__12232__$1 = cljs.core.__destructure_map.call(null,map__12232);
var shadow__$1 = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12233 = (d__$2 + (1));
var G__12234 = shadow__$1;
d__$1 = G__12233;
G__12229__$1 = G__12234;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12235){
var map__12236 = p__12235;
var map__12236__$1 = cljs.core.__destructure_map.call(null,map__12236);
var name_var = map__12236__$1;
var name = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__12237 = info;
var map__12237__$1 = cljs.core.__destructure_map.call(null,map__12237);
var ns = cljs.core.get.call(null,map__12237__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__12237__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__12239 = arguments.length;
switch (G__12239) {
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11639),(11639),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
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
var G__12241 = cp;
switch (G__12241) {
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
var seq__12243_12247 = cljs.core.seq.call(null,s);
var chunk__12244_12248 = null;
var count__12245_12249 = (0);
var i__12246_12250 = (0);
while(true){
if((i__12246_12250 < count__12245_12249)){
var c_12251 = cljs.core._nth.call(null,chunk__12244_12248,i__12246_12250);
sb.append(cljs.compiler.escape_char.call(null,c_12251));


var G__12252 = seq__12243_12247;
var G__12253 = chunk__12244_12248;
var G__12254 = count__12245_12249;
var G__12255 = (i__12246_12250 + (1));
seq__12243_12247 = G__12252;
chunk__12244_12248 = G__12253;
count__12245_12249 = G__12254;
i__12246_12250 = G__12255;
continue;
} else {
var temp__5720__auto___12256 = cljs.core.seq.call(null,seq__12243_12247);
if(temp__5720__auto___12256){
var seq__12243_12257__$1 = temp__5720__auto___12256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12243_12257__$1)){
var c__4649__auto___12258 = cljs.core.chunk_first.call(null,seq__12243_12257__$1);
var G__12259 = cljs.core.chunk_rest.call(null,seq__12243_12257__$1);
var G__12260 = c__4649__auto___12258;
var G__12261 = cljs.core.count.call(null,c__4649__auto___12258);
var G__12262 = (0);
seq__12243_12247 = G__12259;
chunk__12244_12248 = G__12260;
count__12245_12249 = G__12261;
i__12246_12250 = G__12262;
continue;
} else {
var c_12263 = cljs.core.first.call(null,seq__12243_12257__$1);
sb.append(cljs.compiler.escape_char.call(null,c_12263));


var G__12264 = cljs.core.next.call(null,seq__12243_12257__$1);
var G__12265 = null;
var G__12266 = (0);
var G__12267 = (0);
seq__12243_12247 = G__12264;
chunk__12244_12248 = G__12265;
count__12245_12249 = G__12266;
i__12246_12250 = G__12267;
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
var map__12268_12271 = ast;
var map__12268_12272__$1 = cljs.core.__destructure_map.call(null,map__12268_12271);
var env_12273 = cljs.core.get.call(null,map__12268_12272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12273))){
var map__12269_12274 = env_12273;
var map__12269_12275__$1 = cljs.core.__destructure_map.call(null,map__12269_12274);
var line_12276 = cljs.core.get.call(null,map__12269_12275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12277 = cljs.core.get.call(null,map__12269_12275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__12270 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__12270,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__12270;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12276 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12277)?(column_12277 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__12286 = arguments.length;
switch (G__12286) {
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
var len__4829__auto___12293 = arguments.length;
var i__4830__auto___12294 = (0);
while(true){
if((i__4830__auto___12294 < len__4829__auto___12293)){
args_arr__4850__auto__.push((arguments[i__4830__auto___12294]));

var G__12295 = (i__4830__auto___12294 + (1));
i__4830__auto___12294 = G__12295;
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
var s_12296 = (function (){var G__12287 = a;
if((!(typeof a === 'string'))){
return G__12287.toString();
} else {
return G__12287;
}
})();
var temp__5724__auto___12297 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___12297 == null)){
} else {
var sm_data_12298 = temp__5724__auto___12297;
cljs.core.swap_BANG_.call(null,sm_data_12298,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__12278_SHARP_){
return (p1__12278_SHARP_ + s_12296.length);
}));
}

cljs.core.print.call(null,s_12296);

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

var seq__12288 = cljs.core.seq.call(null,xs);
var chunk__12289 = null;
var count__12290 = (0);
var i__12291 = (0);
while(true){
if((i__12291 < count__12290)){
var x = cljs.core._nth.call(null,chunk__12289,i__12291);
cljs.compiler.emits.call(null,x);


var G__12299 = seq__12288;
var G__12300 = chunk__12289;
var G__12301 = count__12290;
var G__12302 = (i__12291 + (1));
seq__12288 = G__12299;
chunk__12289 = G__12300;
count__12290 = G__12301;
i__12291 = G__12302;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12288);
if(temp__5720__auto__){
var seq__12288__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12288__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__12288__$1);
var G__12303 = cljs.core.chunk_rest.call(null,seq__12288__$1);
var G__12304 = c__4649__auto__;
var G__12305 = cljs.core.count.call(null,c__4649__auto__);
var G__12306 = (0);
seq__12288 = G__12303;
chunk__12289 = G__12304;
count__12290 = G__12305;
i__12291 = G__12306;
continue;
} else {
var x = cljs.core.first.call(null,seq__12288__$1);
cljs.compiler.emits.call(null,x);


var G__12307 = cljs.core.next.call(null,seq__12288__$1);
var G__12308 = null;
var G__12309 = (0);
var G__12310 = (0);
seq__12288 = G__12307;
chunk__12289 = G__12308;
count__12290 = G__12309;
i__12291 = G__12310;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq12280){
var G__12281 = cljs.core.first.call(null,seq12280);
var seq12280__$1 = cljs.core.next.call(null,seq12280);
var G__12282 = cljs.core.first.call(null,seq12280__$1);
var seq12280__$2 = cljs.core.next.call(null,seq12280__$1);
var G__12283 = cljs.core.first.call(null,seq12280__$2);
var seq12280__$3 = cljs.core.next.call(null,seq12280__$2);
var G__12284 = cljs.core.first.call(null,seq12280__$3);
var seq12280__$4 = cljs.core.next.call(null,seq12280__$3);
var G__12285 = cljs.core.first.call(null,seq12280__$4);
var seq12280__$5 = cljs.core.next.call(null,seq12280__$4);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12281,G__12282,G__12283,G__12284,G__12285,seq12280__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__12311){
var map__12312 = p__12311;
var map__12312__$1 = cljs.core.__destructure_map.call(null,map__12312);
var m = map__12312__$1;
var gen_line = cljs.core.get.call(null,map__12312__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__12320 = arguments.length;
switch (G__12320) {
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
var len__4829__auto___12326 = arguments.length;
var i__4830__auto___12327 = (0);
while(true){
if((i__4830__auto___12327 < len__4829__auto___12326)){
args_arr__4850__auto__.push((arguments[i__4830__auto___12327]));

var G__12328 = (i__4830__auto___12327 + (1));
i__4830__auto___12327 = G__12328;
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

var seq__12321_12329 = cljs.core.seq.call(null,xs);
var chunk__12322_12330 = null;
var count__12323_12331 = (0);
var i__12324_12332 = (0);
while(true){
if((i__12324_12332 < count__12323_12331)){
var x_12333 = cljs.core._nth.call(null,chunk__12322_12330,i__12324_12332);
cljs.compiler.emits.call(null,x_12333);


var G__12334 = seq__12321_12329;
var G__12335 = chunk__12322_12330;
var G__12336 = count__12323_12331;
var G__12337 = (i__12324_12332 + (1));
seq__12321_12329 = G__12334;
chunk__12322_12330 = G__12335;
count__12323_12331 = G__12336;
i__12324_12332 = G__12337;
continue;
} else {
var temp__5720__auto___12338 = cljs.core.seq.call(null,seq__12321_12329);
if(temp__5720__auto___12338){
var seq__12321_12339__$1 = temp__5720__auto___12338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12321_12339__$1)){
var c__4649__auto___12340 = cljs.core.chunk_first.call(null,seq__12321_12339__$1);
var G__12341 = cljs.core.chunk_rest.call(null,seq__12321_12339__$1);
var G__12342 = c__4649__auto___12340;
var G__12343 = cljs.core.count.call(null,c__4649__auto___12340);
var G__12344 = (0);
seq__12321_12329 = G__12341;
chunk__12322_12330 = G__12342;
count__12323_12331 = G__12343;
i__12324_12332 = G__12344;
continue;
} else {
var x_12345 = cljs.core.first.call(null,seq__12321_12339__$1);
cljs.compiler.emits.call(null,x_12345);


var G__12346 = cljs.core.next.call(null,seq__12321_12339__$1);
var G__12347 = null;
var G__12348 = (0);
var G__12349 = (0);
seq__12321_12329 = G__12346;
chunk__12322_12330 = G__12347;
count__12323_12331 = G__12348;
i__12324_12332 = G__12349;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12314){
var G__12315 = cljs.core.first.call(null,seq12314);
var seq12314__$1 = cljs.core.next.call(null,seq12314);
var G__12316 = cljs.core.first.call(null,seq12314__$1);
var seq12314__$2 = cljs.core.next.call(null,seq12314__$1);
var G__12317 = cljs.core.first.call(null,seq12314__$2);
var seq12314__$3 = cljs.core.next.call(null,seq12314__$2);
var G__12318 = cljs.core.first.call(null,seq12314__$3);
var seq12314__$4 = cljs.core.next.call(null,seq12314__$3);
var G__12319 = cljs.core.first.call(null,seq12314__$4);
var seq12314__$5 = cljs.core.next.call(null,seq12314__$4);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12315,G__12316,G__12317,G__12318,G__12319,seq12314__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12350_12354 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12351_12355 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12352_12356 = true;
var _STAR_print_fn_STAR__temp_val__12353_12357 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12352_12356);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12353_12357);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12351_12355);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12350_12354);
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
var vec__12358 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__12358,(0),null);
var name = cljs.core.nth.call(null,vec__12358,(1),null);
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
var vec__12361 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__12361,(0),null);
var flags = cljs.core.nth.call(null,vec__12361,(1),null);
var pattern = cljs.core.nth.call(null,vec__12361,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__12364_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__12364_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__12366){
var map__12367 = p__12366;
var map__12367__$1 = cljs.core.__destructure_map.call(null,map__12367);
var ast = map__12367__$1;
var info = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__12368 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12368__$1 = cljs.core.__destructure_map.call(null,map__12368);
var cenv = map__12368__$1;
var options = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__12369 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4221__auto__;
}
})())){
return clojure.set.difference.call(null,G__12369,cljs.analyzer.es5_allowed);
} else {
return G__12369;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4223__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__12370 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12370,reserved);
} else {
return G__12370;
}
})();
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__12371_12372 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__12371_12373__$1 = (((G__12371_12372 instanceof cljs.core.Keyword))?G__12371_12372.fqn:null);
switch (G__12371_12373__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__12375){
var map__12376 = p__12375;
var map__12376__$1 = cljs.core.__destructure_map.call(null,map__12376);
var arg = map__12376__$1;
var env = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12377 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12377__$1 = cljs.core.__destructure_map.call(null,map__12377);
var name = cljs.core.get.call(null,map__12377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__12378){
var map__12379 = p__12378;
var map__12379__$1 = cljs.core.__destructure_map.call(null,map__12379);
var expr = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__12380_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12380_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12381){
var map__12382 = p__12381;
var map__12382__$1 = cljs.core.__destructure_map.call(null,map__12382);
var env = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12383){
var map__12384 = p__12383;
var map__12384__$1 = cljs.core.__destructure_map.call(null,map__12384);
var items = cljs.core.get.call(null,map__12384__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12384__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__12385_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12385_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12386){
var map__12387 = p__12386;
var map__12387__$1 = cljs.core.__destructure_map.call(null,map__12387);
var items = cljs.core.get.call(null,map__12387__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12387__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___12410 = cljs.core.seq.call(null,items);
if(temp__5720__auto___12410){
var items_12411__$1 = temp__5720__auto___12410;
var vec__12388_12412 = items_12411__$1;
var seq__12389_12413 = cljs.core.seq.call(null,vec__12388_12412);
var first__12390_12414 = cljs.core.first.call(null,seq__12389_12413);
var seq__12389_12415__$1 = cljs.core.next.call(null,seq__12389_12413);
var vec__12391_12416 = first__12390_12414;
var k_12417 = cljs.core.nth.call(null,vec__12391_12416,(0),null);
var v_12418 = cljs.core.nth.call(null,vec__12391_12416,(1),null);
var r_12419 = seq__12389_12415__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12417),"\": ",emit_js_object_val.call(null,v_12418));

var seq__12394_12420 = cljs.core.seq.call(null,r_12419);
var chunk__12395_12421 = null;
var count__12396_12422 = (0);
var i__12397_12423 = (0);
while(true){
if((i__12397_12423 < count__12396_12422)){
var vec__12404_12424 = cljs.core._nth.call(null,chunk__12395_12421,i__12397_12423);
var k_12425__$1 = cljs.core.nth.call(null,vec__12404_12424,(0),null);
var v_12426__$1 = cljs.core.nth.call(null,vec__12404_12424,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12425__$1),"\": ",emit_js_object_val.call(null,v_12426__$1));


var G__12427 = seq__12394_12420;
var G__12428 = chunk__12395_12421;
var G__12429 = count__12396_12422;
var G__12430 = (i__12397_12423 + (1));
seq__12394_12420 = G__12427;
chunk__12395_12421 = G__12428;
count__12396_12422 = G__12429;
i__12397_12423 = G__12430;
continue;
} else {
var temp__5720__auto___12431__$1 = cljs.core.seq.call(null,seq__12394_12420);
if(temp__5720__auto___12431__$1){
var seq__12394_12432__$1 = temp__5720__auto___12431__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12394_12432__$1)){
var c__4649__auto___12433 = cljs.core.chunk_first.call(null,seq__12394_12432__$1);
var G__12434 = cljs.core.chunk_rest.call(null,seq__12394_12432__$1);
var G__12435 = c__4649__auto___12433;
var G__12436 = cljs.core.count.call(null,c__4649__auto___12433);
var G__12437 = (0);
seq__12394_12420 = G__12434;
chunk__12395_12421 = G__12435;
count__12396_12422 = G__12436;
i__12397_12423 = G__12437;
continue;
} else {
var vec__12407_12438 = cljs.core.first.call(null,seq__12394_12432__$1);
var k_12439__$1 = cljs.core.nth.call(null,vec__12407_12438,(0),null);
var v_12440__$1 = cljs.core.nth.call(null,vec__12407_12438,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12439__$1),"\": ",emit_js_object_val.call(null,v_12440__$1));


var G__12441 = cljs.core.next.call(null,seq__12394_12432__$1);
var G__12442 = null;
var G__12443 = (0);
var G__12444 = (0);
seq__12394_12420 = G__12441;
chunk__12395_12421 = G__12442;
count__12396_12422 = G__12443;
i__12397_12423 = G__12444;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__12445){
var map__12446 = p__12445;
var map__12446__$1 = cljs.core.__destructure_map.call(null,map__12446);
var keys = cljs.core.get.call(null,map__12446__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12446__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__12446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__12447){
var map__12448 = p__12447;
var map__12448__$1 = cljs.core.__destructure_map.call(null,map__12448);
var items = cljs.core.get.call(null,map__12448__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__12449){
var map__12450 = p__12449;
var map__12450__$1 = cljs.core.__destructure_map.call(null,map__12450);
var expr = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__12451){
var map__12452 = p__12451;
var map__12452__$1 = cljs.core.__destructure_map.call(null,map__12452);
var form = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__12453 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__12453__$1 = cljs.core.__destructure_map.call(null,map__12453);
var op = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__12454 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__12454__$1 = cljs.core.__destructure_map.call(null,map__12454);
var op = cljs.core.get.call(null,map__12454__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12454__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12454__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12455){
var map__12456 = p__12455;
var map__12456__$1 = cljs.core.__destructure_map.call(null,map__12456);
var test = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__12457){
var map__12458 = p__12457;
var map__12458__$1 = cljs.core.__destructure_map.call(null,map__12458);
var v = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12459_12487 = cljs.core.seq.call(null,nodes);
var chunk__12460_12488 = null;
var count__12461_12489 = (0);
var i__12462_12490 = (0);
while(true){
if((i__12462_12490 < count__12461_12489)){
var map__12475_12491 = cljs.core._nth.call(null,chunk__12460_12488,i__12462_12490);
var map__12475_12492__$1 = cljs.core.__destructure_map.call(null,map__12475_12491);
var ts_12493 = cljs.core.get.call(null,map__12475_12492__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12476_12494 = cljs.core.get.call(null,map__12475_12492__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12476_12495__$1 = cljs.core.__destructure_map.call(null,map__12476_12494);
var then_12496 = cljs.core.get.call(null,map__12476_12495__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12477_12497 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_12493));
var chunk__12478_12498 = null;
var count__12479_12499 = (0);
var i__12480_12500 = (0);
while(true){
if((i__12480_12500 < count__12479_12499)){
var test_12501 = cljs.core._nth.call(null,chunk__12478_12498,i__12480_12500);
cljs.compiler.emitln.call(null,"case ",test_12501,":");


var G__12502 = seq__12477_12497;
var G__12503 = chunk__12478_12498;
var G__12504 = count__12479_12499;
var G__12505 = (i__12480_12500 + (1));
seq__12477_12497 = G__12502;
chunk__12478_12498 = G__12503;
count__12479_12499 = G__12504;
i__12480_12500 = G__12505;
continue;
} else {
var temp__5720__auto___12506 = cljs.core.seq.call(null,seq__12477_12497);
if(temp__5720__auto___12506){
var seq__12477_12507__$1 = temp__5720__auto___12506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12477_12507__$1)){
var c__4649__auto___12508 = cljs.core.chunk_first.call(null,seq__12477_12507__$1);
var G__12509 = cljs.core.chunk_rest.call(null,seq__12477_12507__$1);
var G__12510 = c__4649__auto___12508;
var G__12511 = cljs.core.count.call(null,c__4649__auto___12508);
var G__12512 = (0);
seq__12477_12497 = G__12509;
chunk__12478_12498 = G__12510;
count__12479_12499 = G__12511;
i__12480_12500 = G__12512;
continue;
} else {
var test_12513 = cljs.core.first.call(null,seq__12477_12507__$1);
cljs.compiler.emitln.call(null,"case ",test_12513,":");


var G__12514 = cljs.core.next.call(null,seq__12477_12507__$1);
var G__12515 = null;
var G__12516 = (0);
var G__12517 = (0);
seq__12477_12497 = G__12514;
chunk__12478_12498 = G__12515;
count__12479_12499 = G__12516;
i__12480_12500 = G__12517;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12496);
} else {
cljs.compiler.emitln.call(null,then_12496);
}

cljs.compiler.emitln.call(null,"break;");


var G__12518 = seq__12459_12487;
var G__12519 = chunk__12460_12488;
var G__12520 = count__12461_12489;
var G__12521 = (i__12462_12490 + (1));
seq__12459_12487 = G__12518;
chunk__12460_12488 = G__12519;
count__12461_12489 = G__12520;
i__12462_12490 = G__12521;
continue;
} else {
var temp__5720__auto___12522 = cljs.core.seq.call(null,seq__12459_12487);
if(temp__5720__auto___12522){
var seq__12459_12523__$1 = temp__5720__auto___12522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12459_12523__$1)){
var c__4649__auto___12524 = cljs.core.chunk_first.call(null,seq__12459_12523__$1);
var G__12525 = cljs.core.chunk_rest.call(null,seq__12459_12523__$1);
var G__12526 = c__4649__auto___12524;
var G__12527 = cljs.core.count.call(null,c__4649__auto___12524);
var G__12528 = (0);
seq__12459_12487 = G__12525;
chunk__12460_12488 = G__12526;
count__12461_12489 = G__12527;
i__12462_12490 = G__12528;
continue;
} else {
var map__12481_12529 = cljs.core.first.call(null,seq__12459_12523__$1);
var map__12481_12530__$1 = cljs.core.__destructure_map.call(null,map__12481_12529);
var ts_12531 = cljs.core.get.call(null,map__12481_12530__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12482_12532 = cljs.core.get.call(null,map__12481_12530__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12482_12533__$1 = cljs.core.__destructure_map.call(null,map__12482_12532);
var then_12534 = cljs.core.get.call(null,map__12482_12533__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12483_12535 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_12531));
var chunk__12484_12536 = null;
var count__12485_12537 = (0);
var i__12486_12538 = (0);
while(true){
if((i__12486_12538 < count__12485_12537)){
var test_12539 = cljs.core._nth.call(null,chunk__12484_12536,i__12486_12538);
cljs.compiler.emitln.call(null,"case ",test_12539,":");


var G__12540 = seq__12483_12535;
var G__12541 = chunk__12484_12536;
var G__12542 = count__12485_12537;
var G__12543 = (i__12486_12538 + (1));
seq__12483_12535 = G__12540;
chunk__12484_12536 = G__12541;
count__12485_12537 = G__12542;
i__12486_12538 = G__12543;
continue;
} else {
var temp__5720__auto___12544__$1 = cljs.core.seq.call(null,seq__12483_12535);
if(temp__5720__auto___12544__$1){
var seq__12483_12545__$1 = temp__5720__auto___12544__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12483_12545__$1)){
var c__4649__auto___12546 = cljs.core.chunk_first.call(null,seq__12483_12545__$1);
var G__12547 = cljs.core.chunk_rest.call(null,seq__12483_12545__$1);
var G__12548 = c__4649__auto___12546;
var G__12549 = cljs.core.count.call(null,c__4649__auto___12546);
var G__12550 = (0);
seq__12483_12535 = G__12547;
chunk__12484_12536 = G__12548;
count__12485_12537 = G__12549;
i__12486_12538 = G__12550;
continue;
} else {
var test_12551 = cljs.core.first.call(null,seq__12483_12545__$1);
cljs.compiler.emitln.call(null,"case ",test_12551,":");


var G__12552 = cljs.core.next.call(null,seq__12483_12545__$1);
var G__12553 = null;
var G__12554 = (0);
var G__12555 = (0);
seq__12483_12535 = G__12552;
chunk__12484_12536 = G__12553;
count__12485_12537 = G__12554;
i__12486_12538 = G__12555;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12534);
} else {
cljs.compiler.emitln.call(null,then_12534);
}

cljs.compiler.emitln.call(null,"break;");


var G__12556 = cljs.core.next.call(null,seq__12459_12523__$1);
var G__12557 = null;
var G__12558 = (0);
var G__12559 = (0);
seq__12459_12487 = G__12556;
chunk__12460_12488 = G__12557;
count__12461_12489 = G__12558;
i__12462_12490 = G__12559;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12560){
var map__12561 = p__12560;
var map__12561__$1 = cljs.core.__destructure_map.call(null,map__12561);
var throw$ = cljs.core.get.call(null,map__12561__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__12561__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12563 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12563,(0),null);
var rstr = cljs.core.nth.call(null,vec__12563,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__12562_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12562_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12566 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__12566,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12566;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__12567_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12567_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12568 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12569 = cljs.core.seq.call(null,vec__12568);
var first__12570 = cljs.core.first.call(null,seq__12569);
var seq__12569__$1 = cljs.core.next.call(null,seq__12569);
var p = first__12570;
var first__12570__$1 = cljs.core.first.call(null,seq__12569__$1);
var seq__12569__$2 = cljs.core.next.call(null,seq__12569__$1);
var ts = first__12570__$1;
var first__12570__$2 = cljs.core.first.call(null,seq__12569__$2);
var seq__12569__$3 = cljs.core.next.call(null,seq__12569__$2);
var n = first__12570__$2;
var xs = seq__12569__$3;
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
var vec__12571 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12572 = cljs.core.seq.call(null,vec__12571);
var first__12573 = cljs.core.first.call(null,seq__12572);
var seq__12572__$1 = cljs.core.next.call(null,seq__12572);
var p = first__12573;
var first__12573__$1 = cljs.core.first.call(null,seq__12572__$1);
var seq__12572__$2 = cljs.core.next.call(null,seq__12572__$1);
var ts = first__12573__$1;
var xs = seq__12572__$2;
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
var G__12576 = arguments.length;
switch (G__12576) {
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
var vec__12584 = cljs.core.map.call(null,(function (p1__12574_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12574_SHARP_);
} else {
return p1__12574_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__12585 = cljs.core.seq.call(null,vec__12584);
var first__12586 = cljs.core.first.call(null,seq__12585);
var seq__12585__$1 = cljs.core.next.call(null,seq__12585);
var x = first__12586;
var ys = seq__12585__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__12587 = cljs.core.seq.call(null,ys);
var chunk__12588 = null;
var count__12589 = (0);
var i__12590 = (0);
while(true){
if((i__12590 < count__12589)){
var next_line = cljs.core._nth.call(null,chunk__12588,i__12590);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__12596 = seq__12587;
var G__12597 = chunk__12588;
var G__12598 = count__12589;
var G__12599 = (i__12590 + (1));
seq__12587 = G__12596;
chunk__12588 = G__12597;
count__12589 = G__12598;
i__12590 = G__12599;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12587);
if(temp__5720__auto__){
var seq__12587__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12587__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__12587__$1);
var G__12600 = cljs.core.chunk_rest.call(null,seq__12587__$1);
var G__12601 = c__4649__auto__;
var G__12602 = cljs.core.count.call(null,c__4649__auto__);
var G__12603 = (0);
seq__12587 = G__12600;
chunk__12588 = G__12601;
count__12589 = G__12602;
i__12590 = G__12603;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__12587__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__12604 = cljs.core.next.call(null,seq__12587__$1);
var G__12605 = null;
var G__12606 = (0);
var G__12607 = (0);
seq__12587 = G__12604;
chunk__12588 = G__12605;
count__12589 = G__12606;
i__12590 = G__12607;
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

var seq__12591_12608 = cljs.core.seq.call(null,docs__$2);
var chunk__12592_12609 = null;
var count__12593_12610 = (0);
var i__12594_12611 = (0);
while(true){
if((i__12594_12611 < count__12593_12610)){
var e_12612 = cljs.core._nth.call(null,chunk__12592_12609,i__12594_12611);
if(cljs.core.truth_(e_12612)){
print_comment_lines.call(null,e_12612);
} else {
}


var G__12613 = seq__12591_12608;
var G__12614 = chunk__12592_12609;
var G__12615 = count__12593_12610;
var G__12616 = (i__12594_12611 + (1));
seq__12591_12608 = G__12613;
chunk__12592_12609 = G__12614;
count__12593_12610 = G__12615;
i__12594_12611 = G__12616;
continue;
} else {
var temp__5720__auto___12617 = cljs.core.seq.call(null,seq__12591_12608);
if(temp__5720__auto___12617){
var seq__12591_12618__$1 = temp__5720__auto___12617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12591_12618__$1)){
var c__4649__auto___12619 = cljs.core.chunk_first.call(null,seq__12591_12618__$1);
var G__12620 = cljs.core.chunk_rest.call(null,seq__12591_12618__$1);
var G__12621 = c__4649__auto___12619;
var G__12622 = cljs.core.count.call(null,c__4649__auto___12619);
var G__12623 = (0);
seq__12591_12608 = G__12620;
chunk__12592_12609 = G__12621;
count__12593_12610 = G__12622;
i__12594_12611 = G__12623;
continue;
} else {
var e_12624 = cljs.core.first.call(null,seq__12591_12618__$1);
if(cljs.core.truth_(e_12624)){
print_comment_lines.call(null,e_12624);
} else {
}


var G__12625 = cljs.core.next.call(null,seq__12591_12618__$1);
var G__12626 = null;
var G__12627 = (0);
var G__12628 = (0);
seq__12591_12608 = G__12625;
chunk__12592_12609 = G__12626;
count__12593_12610 = G__12627;
i__12594_12611 = G__12628;
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
var and__4221__auto__ = cljs.core.some.call(null,(function (p1__12630_SHARP_){
return goog.string.startsWith(p1__12630_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12631){
var map__12632 = p__12631;
var map__12632__$1 = cljs.core.__destructure_map.call(null,map__12632);
var doc = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12633){
var map__12634 = p__12633;
var map__12634__$1 = cljs.core.__destructure_map.call(null,map__12634);
var name = cljs.core.get.call(null,map__12634__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12634__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__12635_12659 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__12636_12660 = null;
var count__12637_12661 = (0);
var i__12638_12662 = (0);
while(true){
if((i__12638_12662 < count__12637_12661)){
var vec__12645_12663 = cljs.core._nth.call(null,chunk__12636_12660,i__12638_12662);
var i_12664 = cljs.core.nth.call(null,vec__12645_12663,(0),null);
var param_12665 = cljs.core.nth.call(null,vec__12645_12663,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12665);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__12666 = seq__12635_12659;
var G__12667 = chunk__12636_12660;
var G__12668 = count__12637_12661;
var G__12669 = (i__12638_12662 + (1));
seq__12635_12659 = G__12666;
chunk__12636_12660 = G__12667;
count__12637_12661 = G__12668;
i__12638_12662 = G__12669;
continue;
} else {
var temp__5720__auto___12670 = cljs.core.seq.call(null,seq__12635_12659);
if(temp__5720__auto___12670){
var seq__12635_12671__$1 = temp__5720__auto___12670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12635_12671__$1)){
var c__4649__auto___12672 = cljs.core.chunk_first.call(null,seq__12635_12671__$1);
var G__12673 = cljs.core.chunk_rest.call(null,seq__12635_12671__$1);
var G__12674 = c__4649__auto___12672;
var G__12675 = cljs.core.count.call(null,c__4649__auto___12672);
var G__12676 = (0);
seq__12635_12659 = G__12673;
chunk__12636_12660 = G__12674;
count__12637_12661 = G__12675;
i__12638_12662 = G__12676;
continue;
} else {
var vec__12648_12677 = cljs.core.first.call(null,seq__12635_12671__$1);
var i_12678 = cljs.core.nth.call(null,vec__12648_12677,(0),null);
var param_12679 = cljs.core.nth.call(null,vec__12648_12677,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12679);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__12680 = cljs.core.next.call(null,seq__12635_12671__$1);
var G__12681 = null;
var G__12682 = (0);
var G__12683 = (0);
seq__12635_12659 = G__12680;
chunk__12636_12660 = G__12681;
count__12637_12661 = G__12682;
i__12638_12662 = G__12683;
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

var seq__12651_12684 = cljs.core.seq.call(null,params);
var chunk__12652_12685 = null;
var count__12653_12686 = (0);
var i__12654_12687 = (0);
while(true){
if((i__12654_12687 < count__12653_12686)){
var param_12688 = cljs.core._nth.call(null,chunk__12652_12685,i__12654_12687);
cljs.compiler.emit.call(null,param_12688);

if(cljs.core._EQ_.call(null,param_12688,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12689 = seq__12651_12684;
var G__12690 = chunk__12652_12685;
var G__12691 = count__12653_12686;
var G__12692 = (i__12654_12687 + (1));
seq__12651_12684 = G__12689;
chunk__12652_12685 = G__12690;
count__12653_12686 = G__12691;
i__12654_12687 = G__12692;
continue;
} else {
var temp__5720__auto___12693 = cljs.core.seq.call(null,seq__12651_12684);
if(temp__5720__auto___12693){
var seq__12651_12694__$1 = temp__5720__auto___12693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12651_12694__$1)){
var c__4649__auto___12695 = cljs.core.chunk_first.call(null,seq__12651_12694__$1);
var G__12696 = cljs.core.chunk_rest.call(null,seq__12651_12694__$1);
var G__12697 = c__4649__auto___12695;
var G__12698 = cljs.core.count.call(null,c__4649__auto___12695);
var G__12699 = (0);
seq__12651_12684 = G__12696;
chunk__12652_12685 = G__12697;
count__12653_12686 = G__12698;
i__12654_12687 = G__12699;
continue;
} else {
var param_12700 = cljs.core.first.call(null,seq__12651_12694__$1);
cljs.compiler.emit.call(null,param_12700);

if(cljs.core._EQ_.call(null,param_12700,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12701 = cljs.core.next.call(null,seq__12651_12694__$1);
var G__12702 = null;
var G__12703 = (0);
var G__12704 = (0);
seq__12651_12684 = G__12701;
chunk__12652_12685 = G__12702;
count__12653_12686 = G__12703;
i__12654_12687 = G__12704;
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

var seq__12655_12705 = cljs.core.seq.call(null,params);
var chunk__12656_12706 = null;
var count__12657_12707 = (0);
var i__12658_12708 = (0);
while(true){
if((i__12658_12708 < count__12657_12707)){
var param_12709 = cljs.core._nth.call(null,chunk__12656_12706,i__12658_12708);
cljs.compiler.emit.call(null,param_12709);

if(cljs.core._EQ_.call(null,param_12709,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12710 = seq__12655_12705;
var G__12711 = chunk__12656_12706;
var G__12712 = count__12657_12707;
var G__12713 = (i__12658_12708 + (1));
seq__12655_12705 = G__12710;
chunk__12656_12706 = G__12711;
count__12657_12707 = G__12712;
i__12658_12708 = G__12713;
continue;
} else {
var temp__5720__auto___12714 = cljs.core.seq.call(null,seq__12655_12705);
if(temp__5720__auto___12714){
var seq__12655_12715__$1 = temp__5720__auto___12714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12655_12715__$1)){
var c__4649__auto___12716 = cljs.core.chunk_first.call(null,seq__12655_12715__$1);
var G__12717 = cljs.core.chunk_rest.call(null,seq__12655_12715__$1);
var G__12718 = c__4649__auto___12716;
var G__12719 = cljs.core.count.call(null,c__4649__auto___12716);
var G__12720 = (0);
seq__12655_12705 = G__12717;
chunk__12656_12706 = G__12718;
count__12657_12707 = G__12719;
i__12658_12708 = G__12720;
continue;
} else {
var param_12721 = cljs.core.first.call(null,seq__12655_12715__$1);
cljs.compiler.emit.call(null,param_12721);

if(cljs.core._EQ_.call(null,param_12721,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12722 = cljs.core.next.call(null,seq__12655_12715__$1);
var G__12723 = null;
var G__12724 = (0);
var G__12725 = (0);
seq__12655_12705 = G__12722;
chunk__12656_12706 = G__12723;
count__12657_12707 = G__12724;
i__12658_12708 = G__12725;
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
var seq__12726 = cljs.core.seq.call(null,params);
var chunk__12727 = null;
var count__12728 = (0);
var i__12729 = (0);
while(true){
if((i__12729 < count__12728)){
var param = cljs.core._nth.call(null,chunk__12727,i__12729);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12730 = seq__12726;
var G__12731 = chunk__12727;
var G__12732 = count__12728;
var G__12733 = (i__12729 + (1));
seq__12726 = G__12730;
chunk__12727 = G__12731;
count__12728 = G__12732;
i__12729 = G__12733;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12726);
if(temp__5720__auto__){
var seq__12726__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12726__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__12726__$1);
var G__12734 = cljs.core.chunk_rest.call(null,seq__12726__$1);
var G__12735 = c__4649__auto__;
var G__12736 = cljs.core.count.call(null,c__4649__auto__);
var G__12737 = (0);
seq__12726 = G__12734;
chunk__12727 = G__12735;
count__12728 = G__12736;
i__12729 = G__12737;
continue;
} else {
var param = cljs.core.first.call(null,seq__12726__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12738 = cljs.core.next.call(null,seq__12726__$1);
var G__12739 = null;
var G__12740 = (0);
var G__12741 = (0);
seq__12726 = G__12738;
chunk__12727 = G__12739;
count__12728 = G__12740;
i__12729 = G__12741;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12742){
var map__12743 = p__12742;
var map__12743__$1 = cljs.core.__destructure_map.call(null,map__12743);
var expr = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12744){
var map__12745 = p__12744;
var map__12745__$1 = cljs.core.__destructure_map.call(null,map__12745);
var f = map__12745__$1;
var expr = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_12754__$1 = (function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12755 = cljs.compiler.munge.call(null,name_12754__$1);
var delegate_name_12756 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12755),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_12756," = function (");

var seq__12746_12757 = cljs.core.seq.call(null,params);
var chunk__12747_12758 = null;
var count__12748_12759 = (0);
var i__12749_12760 = (0);
while(true){
if((i__12749_12760 < count__12748_12759)){
var param_12761 = cljs.core._nth.call(null,chunk__12747_12758,i__12749_12760);
cljs.compiler.emit.call(null,param_12761);

if(cljs.core._EQ_.call(null,param_12761,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12762 = seq__12746_12757;
var G__12763 = chunk__12747_12758;
var G__12764 = count__12748_12759;
var G__12765 = (i__12749_12760 + (1));
seq__12746_12757 = G__12762;
chunk__12747_12758 = G__12763;
count__12748_12759 = G__12764;
i__12749_12760 = G__12765;
continue;
} else {
var temp__5720__auto___12766 = cljs.core.seq.call(null,seq__12746_12757);
if(temp__5720__auto___12766){
var seq__12746_12767__$1 = temp__5720__auto___12766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12746_12767__$1)){
var c__4649__auto___12768 = cljs.core.chunk_first.call(null,seq__12746_12767__$1);
var G__12769 = cljs.core.chunk_rest.call(null,seq__12746_12767__$1);
var G__12770 = c__4649__auto___12768;
var G__12771 = cljs.core.count.call(null,c__4649__auto___12768);
var G__12772 = (0);
seq__12746_12757 = G__12769;
chunk__12747_12758 = G__12770;
count__12748_12759 = G__12771;
i__12749_12760 = G__12772;
continue;
} else {
var param_12773 = cljs.core.first.call(null,seq__12746_12767__$1);
cljs.compiler.emit.call(null,param_12773);

if(cljs.core._EQ_.call(null,param_12773,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12774 = cljs.core.next.call(null,seq__12746_12767__$1);
var G__12775 = null;
var G__12776 = (0);
var G__12777 = (0);
seq__12746_12757 = G__12774;
chunk__12747_12758 = G__12775;
count__12748_12759 = G__12776;
i__12749_12760 = G__12777;
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

cljs.compiler.emitln.call(null,"var ",mname_12755," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_12778 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_12778,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_12756,".call(this,");

var seq__12750_12779 = cljs.core.seq.call(null,params);
var chunk__12751_12780 = null;
var count__12752_12781 = (0);
var i__12753_12782 = (0);
while(true){
if((i__12753_12782 < count__12752_12781)){
var param_12783 = cljs.core._nth.call(null,chunk__12751_12780,i__12753_12782);
cljs.compiler.emit.call(null,param_12783);

if(cljs.core._EQ_.call(null,param_12783,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12784 = seq__12750_12779;
var G__12785 = chunk__12751_12780;
var G__12786 = count__12752_12781;
var G__12787 = (i__12753_12782 + (1));
seq__12750_12779 = G__12784;
chunk__12751_12780 = G__12785;
count__12752_12781 = G__12786;
i__12753_12782 = G__12787;
continue;
} else {
var temp__5720__auto___12788 = cljs.core.seq.call(null,seq__12750_12779);
if(temp__5720__auto___12788){
var seq__12750_12789__$1 = temp__5720__auto___12788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12750_12789__$1)){
var c__4649__auto___12790 = cljs.core.chunk_first.call(null,seq__12750_12789__$1);
var G__12791 = cljs.core.chunk_rest.call(null,seq__12750_12789__$1);
var G__12792 = c__4649__auto___12790;
var G__12793 = cljs.core.count.call(null,c__4649__auto___12790);
var G__12794 = (0);
seq__12750_12779 = G__12791;
chunk__12751_12780 = G__12792;
count__12752_12781 = G__12793;
i__12753_12782 = G__12794;
continue;
} else {
var param_12795 = cljs.core.first.call(null,seq__12750_12789__$1);
cljs.compiler.emit.call(null,param_12795);

if(cljs.core._EQ_.call(null,param_12795,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12796 = cljs.core.next.call(null,seq__12750_12789__$1);
var G__12797 = null;
var G__12798 = (0);
var G__12799 = (0);
seq__12750_12779 = G__12796;
chunk__12751_12780 = G__12797;
count__12752_12781 = G__12798;
i__12753_12782 = G__12799;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_12755,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_12755,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_12754__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_12755,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_12756,";");

cljs.compiler.emitln.call(null,"return ",mname_12755,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12803){
var map__12804 = p__12803;
var map__12804__$1 = cljs.core.__destructure_map.call(null,map__12804);
var variadic = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__12800_SHARP_){
var and__4221__auto__ = p1__12800_SHARP_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12800_SHARP_));
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
var name_12856__$1 = (function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12857 = cljs.compiler.munge.call(null,name_12856__$1);
var maxparams_12858 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12859 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12857),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_12860 = cljs.core.sort_by.call(null,(function (p1__12801_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12801_SHARP_)));
}),cljs.core.seq.call(null,mmap_12859));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12857," = null;");

var seq__12805_12861 = cljs.core.seq.call(null,ms_12860);
var chunk__12806_12862 = null;
var count__12807_12863 = (0);
var i__12808_12864 = (0);
while(true){
if((i__12808_12864 < count__12807_12863)){
var vec__12815_12865 = cljs.core._nth.call(null,chunk__12806_12862,i__12808_12864);
var n_12866 = cljs.core.nth.call(null,vec__12815_12865,(0),null);
var meth_12867 = cljs.core.nth.call(null,vec__12815_12865,(1),null);
cljs.compiler.emits.call(null,"var ",n_12866," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12867))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12867);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12867);
}

cljs.compiler.emitln.call(null,";");


var G__12868 = seq__12805_12861;
var G__12869 = chunk__12806_12862;
var G__12870 = count__12807_12863;
var G__12871 = (i__12808_12864 + (1));
seq__12805_12861 = G__12868;
chunk__12806_12862 = G__12869;
count__12807_12863 = G__12870;
i__12808_12864 = G__12871;
continue;
} else {
var temp__5720__auto___12872 = cljs.core.seq.call(null,seq__12805_12861);
if(temp__5720__auto___12872){
var seq__12805_12873__$1 = temp__5720__auto___12872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12805_12873__$1)){
var c__4649__auto___12874 = cljs.core.chunk_first.call(null,seq__12805_12873__$1);
var G__12875 = cljs.core.chunk_rest.call(null,seq__12805_12873__$1);
var G__12876 = c__4649__auto___12874;
var G__12877 = cljs.core.count.call(null,c__4649__auto___12874);
var G__12878 = (0);
seq__12805_12861 = G__12875;
chunk__12806_12862 = G__12876;
count__12807_12863 = G__12877;
i__12808_12864 = G__12878;
continue;
} else {
var vec__12818_12879 = cljs.core.first.call(null,seq__12805_12873__$1);
var n_12880 = cljs.core.nth.call(null,vec__12818_12879,(0),null);
var meth_12881 = cljs.core.nth.call(null,vec__12818_12879,(1),null);
cljs.compiler.emits.call(null,"var ",n_12880," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12881))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12881);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12881);
}

cljs.compiler.emitln.call(null,";");


var G__12882 = cljs.core.next.call(null,seq__12805_12873__$1);
var G__12883 = null;
var G__12884 = (0);
var G__12885 = (0);
seq__12805_12861 = G__12882;
chunk__12806_12862 = G__12883;
count__12807_12863 = G__12884;
i__12808_12864 = G__12885;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12857," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12858)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12858));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__12821_12886 = cljs.core.seq.call(null,ms_12860);
var chunk__12822_12887 = null;
var count__12823_12888 = (0);
var i__12824_12889 = (0);
while(true){
if((i__12824_12889 < count__12823_12888)){
var vec__12831_12890 = cljs.core._nth.call(null,chunk__12822_12887,i__12824_12889);
var n_12891 = cljs.core.nth.call(null,vec__12831_12890,(0),null);
var meth_12892 = cljs.core.nth.call(null,vec__12831_12890,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12892))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12893 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12893," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12894 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12893," = new cljs.core.IndexedSeq(",a_12894,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12891,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12858)),(((cljs.core.count.call(null,maxparams_12858) > (1)))?", ":null),restarg_12893,");");
} else {
var pcnt_12895 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12892));
cljs.compiler.emitln.call(null,"case ",pcnt_12895,":");

cljs.compiler.emitln.call(null,"return ",n_12891,".call(this",(((pcnt_12895 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12895,maxparams_12858)),null,(1),null)),(2),null))),");");
}


var G__12896 = seq__12821_12886;
var G__12897 = chunk__12822_12887;
var G__12898 = count__12823_12888;
var G__12899 = (i__12824_12889 + (1));
seq__12821_12886 = G__12896;
chunk__12822_12887 = G__12897;
count__12823_12888 = G__12898;
i__12824_12889 = G__12899;
continue;
} else {
var temp__5720__auto___12900 = cljs.core.seq.call(null,seq__12821_12886);
if(temp__5720__auto___12900){
var seq__12821_12901__$1 = temp__5720__auto___12900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12821_12901__$1)){
var c__4649__auto___12902 = cljs.core.chunk_first.call(null,seq__12821_12901__$1);
var G__12903 = cljs.core.chunk_rest.call(null,seq__12821_12901__$1);
var G__12904 = c__4649__auto___12902;
var G__12905 = cljs.core.count.call(null,c__4649__auto___12902);
var G__12906 = (0);
seq__12821_12886 = G__12903;
chunk__12822_12887 = G__12904;
count__12823_12888 = G__12905;
i__12824_12889 = G__12906;
continue;
} else {
var vec__12834_12907 = cljs.core.first.call(null,seq__12821_12901__$1);
var n_12908 = cljs.core.nth.call(null,vec__12834_12907,(0),null);
var meth_12909 = cljs.core.nth.call(null,vec__12834_12907,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12909))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12910 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12910," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12911 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12910," = new cljs.core.IndexedSeq(",a_12911,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12908,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12858)),(((cljs.core.count.call(null,maxparams_12858) > (1)))?", ":null),restarg_12910,");");
} else {
var pcnt_12912 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12909));
cljs.compiler.emitln.call(null,"case ",pcnt_12912,":");

cljs.compiler.emitln.call(null,"return ",n_12908,".call(this",(((pcnt_12912 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12912,maxparams_12858)),null,(1),null)),(2),null))),");");
}


var G__12913 = cljs.core.next.call(null,seq__12821_12901__$1);
var G__12914 = null;
var G__12915 = (0);
var G__12916 = (0);
seq__12821_12886 = G__12913;
chunk__12822_12887 = G__12914;
count__12823_12888 = G__12915;
i__12824_12889 = G__12916;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_12917 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_12860)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_12917,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_12857,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12857,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__12802_SHARP_){
var vec__12837 = p1__12802_SHARP_;
var n = cljs.core.nth.call(null,vec__12837,(0),null);
var m = cljs.core.nth.call(null,vec__12837,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_12860),".cljs$lang$applyTo;");
} else {
}

var seq__12840_12918 = cljs.core.seq.call(null,ms_12860);
var chunk__12841_12919 = null;
var count__12842_12920 = (0);
var i__12843_12921 = (0);
while(true){
if((i__12843_12921 < count__12842_12920)){
var vec__12850_12922 = cljs.core._nth.call(null,chunk__12841_12919,i__12843_12921);
var n_12923 = cljs.core.nth.call(null,vec__12850_12922,(0),null);
var meth_12924 = cljs.core.nth.call(null,vec__12850_12922,(1),null);
var c_12925 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12924));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12924))){
cljs.compiler.emitln.call(null,mname_12857,".cljs$core$IFn$_invoke$arity$variadic = ",n_12923,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12857,".cljs$core$IFn$_invoke$arity$",c_12925," = ",n_12923,";");
}


var G__12926 = seq__12840_12918;
var G__12927 = chunk__12841_12919;
var G__12928 = count__12842_12920;
var G__12929 = (i__12843_12921 + (1));
seq__12840_12918 = G__12926;
chunk__12841_12919 = G__12927;
count__12842_12920 = G__12928;
i__12843_12921 = G__12929;
continue;
} else {
var temp__5720__auto___12930 = cljs.core.seq.call(null,seq__12840_12918);
if(temp__5720__auto___12930){
var seq__12840_12931__$1 = temp__5720__auto___12930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12840_12931__$1)){
var c__4649__auto___12932 = cljs.core.chunk_first.call(null,seq__12840_12931__$1);
var G__12933 = cljs.core.chunk_rest.call(null,seq__12840_12931__$1);
var G__12934 = c__4649__auto___12932;
var G__12935 = cljs.core.count.call(null,c__4649__auto___12932);
var G__12936 = (0);
seq__12840_12918 = G__12933;
chunk__12841_12919 = G__12934;
count__12842_12920 = G__12935;
i__12843_12921 = G__12936;
continue;
} else {
var vec__12853_12937 = cljs.core.first.call(null,seq__12840_12931__$1);
var n_12938 = cljs.core.nth.call(null,vec__12853_12937,(0),null);
var meth_12939 = cljs.core.nth.call(null,vec__12853_12937,(1),null);
var c_12940 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12939));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_12939))){
cljs.compiler.emitln.call(null,mname_12857,".cljs$core$IFn$_invoke$arity$variadic = ",n_12938,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12857,".cljs$core$IFn$_invoke$arity$",c_12940," = ",n_12938,";");
}


var G__12941 = cljs.core.next.call(null,seq__12840_12931__$1);
var G__12942 = null;
var G__12943 = (0);
var G__12944 = (0);
seq__12840_12918 = G__12941;
chunk__12841_12919 = G__12942;
count__12842_12920 = G__12943;
i__12843_12921 = G__12944;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12857,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12945){
var map__12946 = p__12945;
var map__12946__$1 = cljs.core.__destructure_map.call(null,map__12946);
var statements = cljs.core.get.call(null,map__12946__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__12946__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__12946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__12947_12951 = cljs.core.seq.call(null,statements);
var chunk__12948_12952 = null;
var count__12949_12953 = (0);
var i__12950_12954 = (0);
while(true){
if((i__12950_12954 < count__12949_12953)){
var s_12955 = cljs.core._nth.call(null,chunk__12948_12952,i__12950_12954);
cljs.compiler.emitln.call(null,s_12955);


var G__12956 = seq__12947_12951;
var G__12957 = chunk__12948_12952;
var G__12958 = count__12949_12953;
var G__12959 = (i__12950_12954 + (1));
seq__12947_12951 = G__12956;
chunk__12948_12952 = G__12957;
count__12949_12953 = G__12958;
i__12950_12954 = G__12959;
continue;
} else {
var temp__5720__auto___12960 = cljs.core.seq.call(null,seq__12947_12951);
if(temp__5720__auto___12960){
var seq__12947_12961__$1 = temp__5720__auto___12960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12947_12961__$1)){
var c__4649__auto___12962 = cljs.core.chunk_first.call(null,seq__12947_12961__$1);
var G__12963 = cljs.core.chunk_rest.call(null,seq__12947_12961__$1);
var G__12964 = c__4649__auto___12962;
var G__12965 = cljs.core.count.call(null,c__4649__auto___12962);
var G__12966 = (0);
seq__12947_12951 = G__12963;
chunk__12948_12952 = G__12964;
count__12949_12953 = G__12965;
i__12950_12954 = G__12966;
continue;
} else {
var s_12967 = cljs.core.first.call(null,seq__12947_12961__$1);
cljs.compiler.emitln.call(null,s_12967);


var G__12968 = cljs.core.next.call(null,seq__12947_12961__$1);
var G__12969 = null;
var G__12970 = (0);
var G__12971 = (0);
seq__12947_12951 = G__12968;
chunk__12948_12952 = G__12969;
count__12949_12953 = G__12970;
i__12950_12954 = G__12971;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12972){
var map__12973 = p__12972;
var map__12973__$1 = cljs.core.__destructure_map.call(null,map__12973);
var try$ = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12974,is_loop){
var map__12975 = p__12974;
var map__12975__$1 = cljs.core.__destructure_map.call(null,map__12975);
var expr = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__12975__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__12976_12986 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__12977_12987 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__12977_12987);

try{var seq__12978_12988 = cljs.core.seq.call(null,bindings);
var chunk__12979_12989 = null;
var count__12980_12990 = (0);
var i__12981_12991 = (0);
while(true){
if((i__12981_12991 < count__12980_12990)){
var map__12984_12992 = cljs.core._nth.call(null,chunk__12979_12989,i__12981_12991);
var map__12984_12993__$1 = cljs.core.__destructure_map.call(null,map__12984_12992);
var binding_12994 = map__12984_12993__$1;
var init_12995 = cljs.core.get.call(null,map__12984_12993__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12994);

cljs.compiler.emitln.call(null," = ",init_12995,";");


var G__12996 = seq__12978_12988;
var G__12997 = chunk__12979_12989;
var G__12998 = count__12980_12990;
var G__12999 = (i__12981_12991 + (1));
seq__12978_12988 = G__12996;
chunk__12979_12989 = G__12997;
count__12980_12990 = G__12998;
i__12981_12991 = G__12999;
continue;
} else {
var temp__5720__auto___13000 = cljs.core.seq.call(null,seq__12978_12988);
if(temp__5720__auto___13000){
var seq__12978_13001__$1 = temp__5720__auto___13000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12978_13001__$1)){
var c__4649__auto___13002 = cljs.core.chunk_first.call(null,seq__12978_13001__$1);
var G__13003 = cljs.core.chunk_rest.call(null,seq__12978_13001__$1);
var G__13004 = c__4649__auto___13002;
var G__13005 = cljs.core.count.call(null,c__4649__auto___13002);
var G__13006 = (0);
seq__12978_12988 = G__13003;
chunk__12979_12989 = G__13004;
count__12980_12990 = G__13005;
i__12981_12991 = G__13006;
continue;
} else {
var map__12985_13007 = cljs.core.first.call(null,seq__12978_13001__$1);
var map__12985_13008__$1 = cljs.core.__destructure_map.call(null,map__12985_13007);
var binding_13009 = map__12985_13008__$1;
var init_13010 = cljs.core.get.call(null,map__12985_13008__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13009);

cljs.compiler.emitln.call(null," = ",init_13010,";");


var G__13011 = cljs.core.next.call(null,seq__12978_13001__$1);
var G__13012 = null;
var G__13013 = (0);
var G__13014 = (0);
seq__12978_12988 = G__13011;
chunk__12979_12989 = G__13012;
count__12980_12990 = G__13013;
i__12981_12991 = G__13014;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__12976_12986);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13015){
var map__13016 = p__13015;
var map__13016__$1 = cljs.core.__destructure_map.call(null,map__13016);
var frame = cljs.core.get.call(null,map__13016__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13016__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4706__auto___13017 = cljs.core.count.call(null,exprs);
var i_13018 = (0);
while(true){
if((i_13018 < n__4706__auto___13017)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13018)," = ",exprs.call(null,i_13018),";");

var G__13019 = (i_13018 + (1));
i_13018 = G__13019;
continue;
} else {
}
break;
}

var n__4706__auto___13020 = cljs.core.count.call(null,exprs);
var i_13021 = (0);
while(true){
if((i_13021 < n__4706__auto___13020)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13021))," = ",temps.call(null,i_13021),";");

var G__13022 = (i_13021 + (1));
i_13021 = G__13022;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13023){
var map__13024 = p__13023;
var map__13024__$1 = cljs.core.__destructure_map.call(null,map__13024);
var expr = cljs.core.get.call(null,map__13024__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__13024__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__13024__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13025_13033 = cljs.core.seq.call(null,bindings);
var chunk__13026_13034 = null;
var count__13027_13035 = (0);
var i__13028_13036 = (0);
while(true){
if((i__13028_13036 < count__13027_13035)){
var map__13031_13037 = cljs.core._nth.call(null,chunk__13026_13034,i__13028_13036);
var map__13031_13038__$1 = cljs.core.__destructure_map.call(null,map__13031_13037);
var binding_13039 = map__13031_13038__$1;
var init_13040 = cljs.core.get.call(null,map__13031_13038__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13039)," = ",init_13040,";");


var G__13041 = seq__13025_13033;
var G__13042 = chunk__13026_13034;
var G__13043 = count__13027_13035;
var G__13044 = (i__13028_13036 + (1));
seq__13025_13033 = G__13041;
chunk__13026_13034 = G__13042;
count__13027_13035 = G__13043;
i__13028_13036 = G__13044;
continue;
} else {
var temp__5720__auto___13045 = cljs.core.seq.call(null,seq__13025_13033);
if(temp__5720__auto___13045){
var seq__13025_13046__$1 = temp__5720__auto___13045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13025_13046__$1)){
var c__4649__auto___13047 = cljs.core.chunk_first.call(null,seq__13025_13046__$1);
var G__13048 = cljs.core.chunk_rest.call(null,seq__13025_13046__$1);
var G__13049 = c__4649__auto___13047;
var G__13050 = cljs.core.count.call(null,c__4649__auto___13047);
var G__13051 = (0);
seq__13025_13033 = G__13048;
chunk__13026_13034 = G__13049;
count__13027_13035 = G__13050;
i__13028_13036 = G__13051;
continue;
} else {
var map__13032_13052 = cljs.core.first.call(null,seq__13025_13046__$1);
var map__13032_13053__$1 = cljs.core.__destructure_map.call(null,map__13032_13052);
var binding_13054 = map__13032_13053__$1;
var init_13055 = cljs.core.get.call(null,map__13032_13053__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13054)," = ",init_13055,";");


var G__13056 = cljs.core.next.call(null,seq__13025_13046__$1);
var G__13057 = null;
var G__13058 = (0);
var G__13059 = (0);
seq__13025_13033 = G__13056;
chunk__13026_13034 = G__13057;
count__13027_13035 = G__13058;
i__13028_13036 = G__13059;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13062){
var map__13063 = p__13062;
var map__13063__$1 = cljs.core.__destructure_map.call(null,map__13063);
var expr = map__13063__$1;
var f = cljs.core.get.call(null,map__13063__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__13063__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13063__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__13064 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13060_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13060_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13061_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13061_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13064,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13064,(1),null);
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
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
var pimpl_13067 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13067,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13068 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13068,args)),(((mfa_13068 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13068,args)),"], 0))");
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
var fprop_13069 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_13069," ? ",f__$1,fprop_13069,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_13069," ? ",f__$1,fprop_13069,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13070){
var map__13071 = p__13070;
var map__13071__$1 = cljs.core.__destructure_map.call(null,map__13071);
var ctor = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13072){
var map__13073 = p__13072;
var map__13073__$1 = cljs.core.__destructure_map.call(null,map__13073);
var target = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__13074_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13074_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__13075 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13075,(0),null);
var sublib = cljs.core.nth.call(null,vec__13075,(1),null);
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
var map__13078 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__13078__$1 = cljs.core.__destructure_map.call(null,map__13078);
var options = cljs.core.get.call(null,map__13078__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__13078__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__13079 = options;
var map__13079__$1 = cljs.core.__destructure_map.call(null,map__13079);
var target = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__13079__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__13080 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__13083 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__13083__$1 = cljs.core.__destructure_map.call(null,map__13083);
var node_libs = cljs.core.get.call(null,map__13083__$1,true);
var libs_to_load = cljs.core.get.call(null,map__13083__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__13080,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__13080,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__13084_13112 = cljs.core.seq.call(null,libs_to_load);
var chunk__13085_13113 = null;
var count__13086_13114 = (0);
var i__13087_13115 = (0);
while(true){
if((i__13087_13115 < count__13086_13114)){
var lib_13116 = cljs.core._nth.call(null,chunk__13085_13113,i__13087_13115);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13116)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13116),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13116),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13116),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13116),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_13116,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13116),"');");
}

}
}
}


var G__13117 = seq__13084_13112;
var G__13118 = chunk__13085_13113;
var G__13119 = count__13086_13114;
var G__13120 = (i__13087_13115 + (1));
seq__13084_13112 = G__13117;
chunk__13085_13113 = G__13118;
count__13086_13114 = G__13119;
i__13087_13115 = G__13120;
continue;
} else {
var temp__5720__auto___13121 = cljs.core.seq.call(null,seq__13084_13112);
if(temp__5720__auto___13121){
var seq__13084_13122__$1 = temp__5720__auto___13121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13084_13122__$1)){
var c__4649__auto___13123 = cljs.core.chunk_first.call(null,seq__13084_13122__$1);
var G__13124 = cljs.core.chunk_rest.call(null,seq__13084_13122__$1);
var G__13125 = c__4649__auto___13123;
var G__13126 = cljs.core.count.call(null,c__4649__auto___13123);
var G__13127 = (0);
seq__13084_13112 = G__13124;
chunk__13085_13113 = G__13125;
count__13086_13114 = G__13126;
i__13087_13115 = G__13127;
continue;
} else {
var lib_13128 = cljs.core.first.call(null,seq__13084_13122__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13128)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13128),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13128),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13128),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13128),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_13128,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13128),"');");
}

}
}
}


var G__13129 = cljs.core.next.call(null,seq__13084_13122__$1);
var G__13130 = null;
var G__13131 = (0);
var G__13132 = (0);
seq__13084_13112 = G__13129;
chunk__13085_13113 = G__13130;
count__13086_13114 = G__13131;
i__13087_13115 = G__13132;
continue;
}
} else {
}
}
break;
}

var seq__13088_13133 = cljs.core.seq.call(null,node_libs);
var chunk__13089_13134 = null;
var count__13090_13135 = (0);
var i__13091_13136 = (0);
while(true){
if((i__13091_13136 < count__13090_13135)){
var lib_13137 = cljs.core._nth.call(null,chunk__13089_13134,i__13091_13136);
var vec__13098_13138 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13137);
var lib_SINGLEQUOTE__13139 = cljs.core.nth.call(null,vec__13098_13138,(0),null);
var sublib_13140 = cljs.core.nth.call(null,vec__13098_13138,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13137)," = require('",lib_SINGLEQUOTE__13139,"')",cljs.compiler.sublib_select.call(null,sublib_13140),";");


var G__13141 = seq__13088_13133;
var G__13142 = chunk__13089_13134;
var G__13143 = count__13090_13135;
var G__13144 = (i__13091_13136 + (1));
seq__13088_13133 = G__13141;
chunk__13089_13134 = G__13142;
count__13090_13135 = G__13143;
i__13091_13136 = G__13144;
continue;
} else {
var temp__5720__auto___13145 = cljs.core.seq.call(null,seq__13088_13133);
if(temp__5720__auto___13145){
var seq__13088_13146__$1 = temp__5720__auto___13145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13088_13146__$1)){
var c__4649__auto___13147 = cljs.core.chunk_first.call(null,seq__13088_13146__$1);
var G__13148 = cljs.core.chunk_rest.call(null,seq__13088_13146__$1);
var G__13149 = c__4649__auto___13147;
var G__13150 = cljs.core.count.call(null,c__4649__auto___13147);
var G__13151 = (0);
seq__13088_13133 = G__13148;
chunk__13089_13134 = G__13149;
count__13090_13135 = G__13150;
i__13091_13136 = G__13151;
continue;
} else {
var lib_13152 = cljs.core.first.call(null,seq__13088_13146__$1);
var vec__13101_13153 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13152);
var lib_SINGLEQUOTE__13154 = cljs.core.nth.call(null,vec__13101_13153,(0),null);
var sublib_13155 = cljs.core.nth.call(null,vec__13101_13153,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13152)," = require('",lib_SINGLEQUOTE__13154,"')",cljs.compiler.sublib_select.call(null,sublib_13155),";");


var G__13156 = cljs.core.next.call(null,seq__13088_13146__$1);
var G__13157 = null;
var G__13158 = (0);
var G__13159 = (0);
seq__13088_13133 = G__13156;
chunk__13089_13134 = G__13157;
count__13090_13135 = G__13158;
i__13091_13136 = G__13159;
continue;
}
} else {
}
}
break;
}

var seq__13104_13160 = cljs.core.seq.call(null,global_exports_libs);
var chunk__13105_13161 = null;
var count__13106_13162 = (0);
var i__13107_13163 = (0);
while(true){
if((i__13107_13163 < count__13106_13162)){
var lib_13164 = cljs.core._nth.call(null,chunk__13105_13161,i__13107_13163);
var map__13110_13165 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13164))));
var map__13110_13166__$1 = cljs.core.__destructure_map.call(null,map__13110_13165);
var global_exports_13167 = cljs.core.get.call(null,map__13110_13166__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_13167,lib_13164);


var G__13168 = seq__13104_13160;
var G__13169 = chunk__13105_13161;
var G__13170 = count__13106_13162;
var G__13171 = (i__13107_13163 + (1));
seq__13104_13160 = G__13168;
chunk__13105_13161 = G__13169;
count__13106_13162 = G__13170;
i__13107_13163 = G__13171;
continue;
} else {
var temp__5720__auto___13172 = cljs.core.seq.call(null,seq__13104_13160);
if(temp__5720__auto___13172){
var seq__13104_13173__$1 = temp__5720__auto___13172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13104_13173__$1)){
var c__4649__auto___13174 = cljs.core.chunk_first.call(null,seq__13104_13173__$1);
var G__13175 = cljs.core.chunk_rest.call(null,seq__13104_13173__$1);
var G__13176 = c__4649__auto___13174;
var G__13177 = cljs.core.count.call(null,c__4649__auto___13174);
var G__13178 = (0);
seq__13104_13160 = G__13175;
chunk__13105_13161 = G__13176;
count__13106_13162 = G__13177;
i__13107_13163 = G__13178;
continue;
} else {
var lib_13179 = cljs.core.first.call(null,seq__13104_13173__$1);
var map__13111_13180 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13179))));
var map__13111_13181__$1 = cljs.core.__destructure_map.call(null,map__13111_13180);
var global_exports_13182 = cljs.core.get.call(null,map__13111_13181__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_13182,lib_13179);


var G__13183 = cljs.core.next.call(null,seq__13104_13173__$1);
var G__13184 = null;
var G__13185 = (0);
var G__13186 = (0);
seq__13104_13160 = G__13183;
chunk__13105_13161 = G__13184;
count__13106_13162 = G__13185;
i__13107_13163 = G__13186;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13187){
var map__13188 = p__13187;
var map__13188__$1 = cljs.core.__destructure_map.call(null,map__13188);
var name = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13188__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13189){
var map__13190 = p__13189;
var map__13190__$1 = cljs.core.__destructure_map.call(null,map__13190);
var name = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13190__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__13191){
var map__13192 = p__13191;
var map__13192__$1 = cljs.core.__destructure_map.call(null,map__13192);
var t = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13193_13217 = cljs.core.seq.call(null,protocols);
var chunk__13194_13218 = null;
var count__13195_13219 = (0);
var i__13196_13220 = (0);
while(true){
if((i__13196_13220 < count__13195_13219)){
var protocol_13221 = cljs.core._nth.call(null,chunk__13194_13218,i__13196_13220);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13221)),"}");


var G__13222 = seq__13193_13217;
var G__13223 = chunk__13194_13218;
var G__13224 = count__13195_13219;
var G__13225 = (i__13196_13220 + (1));
seq__13193_13217 = G__13222;
chunk__13194_13218 = G__13223;
count__13195_13219 = G__13224;
i__13196_13220 = G__13225;
continue;
} else {
var temp__5720__auto___13226 = cljs.core.seq.call(null,seq__13193_13217);
if(temp__5720__auto___13226){
var seq__13193_13227__$1 = temp__5720__auto___13226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13193_13227__$1)){
var c__4649__auto___13228 = cljs.core.chunk_first.call(null,seq__13193_13227__$1);
var G__13229 = cljs.core.chunk_rest.call(null,seq__13193_13227__$1);
var G__13230 = c__4649__auto___13228;
var G__13231 = cljs.core.count.call(null,c__4649__auto___13228);
var G__13232 = (0);
seq__13193_13217 = G__13229;
chunk__13194_13218 = G__13230;
count__13195_13219 = G__13231;
i__13196_13220 = G__13232;
continue;
} else {
var protocol_13233 = cljs.core.first.call(null,seq__13193_13227__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13233)),"}");


var G__13234 = cljs.core.next.call(null,seq__13193_13227__$1);
var G__13235 = null;
var G__13236 = (0);
var G__13237 = (0);
seq__13193_13217 = G__13234;
chunk__13194_13218 = G__13235;
count__13195_13219 = G__13236;
i__13196_13220 = G__13237;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13197_13238 = cljs.core.seq.call(null,fields__$1);
var chunk__13198_13239 = null;
var count__13199_13240 = (0);
var i__13200_13241 = (0);
while(true){
if((i__13200_13241 < count__13199_13240)){
var fld_13242 = cljs.core._nth.call(null,chunk__13198_13239,i__13200_13241);
cljs.compiler.emitln.call(null,"this.",fld_13242," = ",fld_13242,";");


var G__13243 = seq__13197_13238;
var G__13244 = chunk__13198_13239;
var G__13245 = count__13199_13240;
var G__13246 = (i__13200_13241 + (1));
seq__13197_13238 = G__13243;
chunk__13198_13239 = G__13244;
count__13199_13240 = G__13245;
i__13200_13241 = G__13246;
continue;
} else {
var temp__5720__auto___13247 = cljs.core.seq.call(null,seq__13197_13238);
if(temp__5720__auto___13247){
var seq__13197_13248__$1 = temp__5720__auto___13247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13197_13248__$1)){
var c__4649__auto___13249 = cljs.core.chunk_first.call(null,seq__13197_13248__$1);
var G__13250 = cljs.core.chunk_rest.call(null,seq__13197_13248__$1);
var G__13251 = c__4649__auto___13249;
var G__13252 = cljs.core.count.call(null,c__4649__auto___13249);
var G__13253 = (0);
seq__13197_13238 = G__13250;
chunk__13198_13239 = G__13251;
count__13199_13240 = G__13252;
i__13200_13241 = G__13253;
continue;
} else {
var fld_13254 = cljs.core.first.call(null,seq__13197_13248__$1);
cljs.compiler.emitln.call(null,"this.",fld_13254," = ",fld_13254,";");


var G__13255 = cljs.core.next.call(null,seq__13197_13248__$1);
var G__13256 = null;
var G__13257 = (0);
var G__13258 = (0);
seq__13197_13238 = G__13255;
chunk__13198_13239 = G__13256;
count__13199_13240 = G__13257;
i__13200_13241 = G__13258;
continue;
}
} else {
}
}
break;
}

var seq__13201_13259 = cljs.core.seq.call(null,pmasks);
var chunk__13202_13260 = null;
var count__13203_13261 = (0);
var i__13204_13262 = (0);
while(true){
if((i__13204_13262 < count__13203_13261)){
var vec__13211_13263 = cljs.core._nth.call(null,chunk__13202_13260,i__13204_13262);
var pno_13264 = cljs.core.nth.call(null,vec__13211_13263,(0),null);
var pmask_13265 = cljs.core.nth.call(null,vec__13211_13263,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13264,"$ = ",pmask_13265,";");


var G__13266 = seq__13201_13259;
var G__13267 = chunk__13202_13260;
var G__13268 = count__13203_13261;
var G__13269 = (i__13204_13262 + (1));
seq__13201_13259 = G__13266;
chunk__13202_13260 = G__13267;
count__13203_13261 = G__13268;
i__13204_13262 = G__13269;
continue;
} else {
var temp__5720__auto___13270 = cljs.core.seq.call(null,seq__13201_13259);
if(temp__5720__auto___13270){
var seq__13201_13271__$1 = temp__5720__auto___13270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13201_13271__$1)){
var c__4649__auto___13272 = cljs.core.chunk_first.call(null,seq__13201_13271__$1);
var G__13273 = cljs.core.chunk_rest.call(null,seq__13201_13271__$1);
var G__13274 = c__4649__auto___13272;
var G__13275 = cljs.core.count.call(null,c__4649__auto___13272);
var G__13276 = (0);
seq__13201_13259 = G__13273;
chunk__13202_13260 = G__13274;
count__13203_13261 = G__13275;
i__13204_13262 = G__13276;
continue;
} else {
var vec__13214_13277 = cljs.core.first.call(null,seq__13201_13271__$1);
var pno_13278 = cljs.core.nth.call(null,vec__13214_13277,(0),null);
var pmask_13279 = cljs.core.nth.call(null,vec__13214_13277,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13278,"$ = ",pmask_13279,";");


var G__13280 = cljs.core.next.call(null,seq__13201_13271__$1);
var G__13281 = null;
var G__13282 = (0);
var G__13283 = (0);
seq__13201_13259 = G__13280;
chunk__13202_13260 = G__13281;
count__13203_13261 = G__13282;
i__13204_13262 = G__13283;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__13284){
var map__13285 = p__13284;
var map__13285__$1 = cljs.core.__destructure_map.call(null,map__13285);
var t = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13286_13310 = cljs.core.seq.call(null,protocols);
var chunk__13287_13311 = null;
var count__13288_13312 = (0);
var i__13289_13313 = (0);
while(true){
if((i__13289_13313 < count__13288_13312)){
var protocol_13314 = cljs.core._nth.call(null,chunk__13287_13311,i__13289_13313);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13314)),"}");


var G__13315 = seq__13286_13310;
var G__13316 = chunk__13287_13311;
var G__13317 = count__13288_13312;
var G__13318 = (i__13289_13313 + (1));
seq__13286_13310 = G__13315;
chunk__13287_13311 = G__13316;
count__13288_13312 = G__13317;
i__13289_13313 = G__13318;
continue;
} else {
var temp__5720__auto___13319 = cljs.core.seq.call(null,seq__13286_13310);
if(temp__5720__auto___13319){
var seq__13286_13320__$1 = temp__5720__auto___13319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13286_13320__$1)){
var c__4649__auto___13321 = cljs.core.chunk_first.call(null,seq__13286_13320__$1);
var G__13322 = cljs.core.chunk_rest.call(null,seq__13286_13320__$1);
var G__13323 = c__4649__auto___13321;
var G__13324 = cljs.core.count.call(null,c__4649__auto___13321);
var G__13325 = (0);
seq__13286_13310 = G__13322;
chunk__13287_13311 = G__13323;
count__13288_13312 = G__13324;
i__13289_13313 = G__13325;
continue;
} else {
var protocol_13326 = cljs.core.first.call(null,seq__13286_13320__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13326)),"}");


var G__13327 = cljs.core.next.call(null,seq__13286_13320__$1);
var G__13328 = null;
var G__13329 = (0);
var G__13330 = (0);
seq__13286_13310 = G__13327;
chunk__13287_13311 = G__13328;
count__13288_13312 = G__13329;
i__13289_13313 = G__13330;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13290_13331 = cljs.core.seq.call(null,fields__$1);
var chunk__13291_13332 = null;
var count__13292_13333 = (0);
var i__13293_13334 = (0);
while(true){
if((i__13293_13334 < count__13292_13333)){
var fld_13335 = cljs.core._nth.call(null,chunk__13291_13332,i__13293_13334);
cljs.compiler.emitln.call(null,"this.",fld_13335," = ",fld_13335,";");


var G__13336 = seq__13290_13331;
var G__13337 = chunk__13291_13332;
var G__13338 = count__13292_13333;
var G__13339 = (i__13293_13334 + (1));
seq__13290_13331 = G__13336;
chunk__13291_13332 = G__13337;
count__13292_13333 = G__13338;
i__13293_13334 = G__13339;
continue;
} else {
var temp__5720__auto___13340 = cljs.core.seq.call(null,seq__13290_13331);
if(temp__5720__auto___13340){
var seq__13290_13341__$1 = temp__5720__auto___13340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13290_13341__$1)){
var c__4649__auto___13342 = cljs.core.chunk_first.call(null,seq__13290_13341__$1);
var G__13343 = cljs.core.chunk_rest.call(null,seq__13290_13341__$1);
var G__13344 = c__4649__auto___13342;
var G__13345 = cljs.core.count.call(null,c__4649__auto___13342);
var G__13346 = (0);
seq__13290_13331 = G__13343;
chunk__13291_13332 = G__13344;
count__13292_13333 = G__13345;
i__13293_13334 = G__13346;
continue;
} else {
var fld_13347 = cljs.core.first.call(null,seq__13290_13341__$1);
cljs.compiler.emitln.call(null,"this.",fld_13347," = ",fld_13347,";");


var G__13348 = cljs.core.next.call(null,seq__13290_13341__$1);
var G__13349 = null;
var G__13350 = (0);
var G__13351 = (0);
seq__13290_13331 = G__13348;
chunk__13291_13332 = G__13349;
count__13292_13333 = G__13350;
i__13293_13334 = G__13351;
continue;
}
} else {
}
}
break;
}

var seq__13294_13352 = cljs.core.seq.call(null,pmasks);
var chunk__13295_13353 = null;
var count__13296_13354 = (0);
var i__13297_13355 = (0);
while(true){
if((i__13297_13355 < count__13296_13354)){
var vec__13304_13356 = cljs.core._nth.call(null,chunk__13295_13353,i__13297_13355);
var pno_13357 = cljs.core.nth.call(null,vec__13304_13356,(0),null);
var pmask_13358 = cljs.core.nth.call(null,vec__13304_13356,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13357,"$ = ",pmask_13358,";");


var G__13359 = seq__13294_13352;
var G__13360 = chunk__13295_13353;
var G__13361 = count__13296_13354;
var G__13362 = (i__13297_13355 + (1));
seq__13294_13352 = G__13359;
chunk__13295_13353 = G__13360;
count__13296_13354 = G__13361;
i__13297_13355 = G__13362;
continue;
} else {
var temp__5720__auto___13363 = cljs.core.seq.call(null,seq__13294_13352);
if(temp__5720__auto___13363){
var seq__13294_13364__$1 = temp__5720__auto___13363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13294_13364__$1)){
var c__4649__auto___13365 = cljs.core.chunk_first.call(null,seq__13294_13364__$1);
var G__13366 = cljs.core.chunk_rest.call(null,seq__13294_13364__$1);
var G__13367 = c__4649__auto___13365;
var G__13368 = cljs.core.count.call(null,c__4649__auto___13365);
var G__13369 = (0);
seq__13294_13352 = G__13366;
chunk__13295_13353 = G__13367;
count__13296_13354 = G__13368;
i__13297_13355 = G__13369;
continue;
} else {
var vec__13307_13370 = cljs.core.first.call(null,seq__13294_13364__$1);
var pno_13371 = cljs.core.nth.call(null,vec__13307_13370,(0),null);
var pmask_13372 = cljs.core.nth.call(null,vec__13307_13370,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13371,"$ = ",pmask_13372,";");


var G__13373 = cljs.core.next.call(null,seq__13294_13364__$1);
var G__13374 = null;
var G__13375 = (0);
var G__13376 = (0);
seq__13294_13352 = G__13373;
chunk__13295_13353 = G__13374;
count__13296_13354 = G__13375;
i__13297_13355 = G__13376;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__13377){
var map__13378 = p__13377;
var map__13378__$1 = cljs.core.__destructure_map.call(null,map__13378);
var target = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13379){
var map__13380 = p__13379;
var map__13380__$1 = cljs.core.__destructure_map.call(null,map__13380);
var op = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4221__auto__ = code;
if(cljs.core.truth_(and__4221__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4221__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12219__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12219__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__13385 = cljs.core.seq.call(null,table);
var chunk__13386 = null;
var count__13387 = (0);
var i__13388 = (0);
while(true){
if((i__13388 < count__13387)){
var vec__13395 = cljs.core._nth.call(null,chunk__13386,i__13388);
var sym = cljs.core.nth.call(null,vec__13395,(0),null);
var value = cljs.core.nth.call(null,vec__13395,(1),null);
var ns_13401 = cljs.core.namespace.call(null,sym);
var name_13402 = cljs.core.name.call(null,sym);
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


var G__13403 = seq__13385;
var G__13404 = chunk__13386;
var G__13405 = count__13387;
var G__13406 = (i__13388 + (1));
seq__13385 = G__13403;
chunk__13386 = G__13404;
count__13387 = G__13405;
i__13388 = G__13406;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13385);
if(temp__5720__auto__){
var seq__13385__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13385__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__13385__$1);
var G__13407 = cljs.core.chunk_rest.call(null,seq__13385__$1);
var G__13408 = c__4649__auto__;
var G__13409 = cljs.core.count.call(null,c__4649__auto__);
var G__13410 = (0);
seq__13385 = G__13407;
chunk__13386 = G__13408;
count__13387 = G__13409;
i__13388 = G__13410;
continue;
} else {
var vec__13398 = cljs.core.first.call(null,seq__13385__$1);
var sym = cljs.core.nth.call(null,vec__13398,(0),null);
var value = cljs.core.nth.call(null,vec__13398,(1),null);
var ns_13411 = cljs.core.namespace.call(null,sym);
var name_13412 = cljs.core.name.call(null,sym);
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


var G__13413 = cljs.core.next.call(null,seq__13385__$1);
var G__13414 = null;
var G__13415 = (0);
var G__13416 = (0);
seq__13385 = G__13413;
chunk__13386 = G__13414;
count__13387 = G__13415;
i__13388 = G__13416;
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
var G__13418 = arguments.length;
switch (G__13418) {
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
var k_13423 = cljs.core.first.call(null,ks);
var vec__13419_13424 = cljs.core.conj.call(null,prefix,k_13423);
var top_13425 = cljs.core.nth.call(null,vec__13419_13424,(0),null);
var prefix_SINGLEQUOTE__13426 = vec__13419_13424;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_13423)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__13426) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_13425)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_13425)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13426)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_13425);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13426)),";");
}
} else {
}

var m_13427 = cljs.core.get.call(null,externs,k_13423);
if(cljs.core.empty_QMARK_.call(null,m_13427)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__13426,m_13427,top_level,known_externs);
}

var G__13428 = cljs.core.next.call(null,ks);
ks = G__13428;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
