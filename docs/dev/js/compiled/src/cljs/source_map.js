// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__11184){
var vec__11185 = p__11184;
var i = cljs.core.nth.call(null,vec__11185,(0),null);
var v = cljs.core.nth.call(null,vec__11185,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__11188 = seg;
var gcol = cljs.core.nth.call(null,vec__11188,(0),null);
var source = cljs.core.nth.call(null,vec__11188,(1),null);
var line = cljs.core.nth.call(null,vec__11188,(2),null);
var col = cljs.core.nth.call(null,vec__11188,(3),null);
var name = cljs.core.nth.call(null,vec__11188,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__11191 = seg;
var gcol = cljs.core.nth.call(null,vec__11191,(0),null);
var source = cljs.core.nth.call(null,vec__11191,(1),null);
var line = cljs.core.nth.call(null,vec__11191,(2),null);
var col = cljs.core.nth.call(null,vec__11191,(3),null);
var name = cljs.core.nth.call(null,vec__11191,(4),null);
var vec__11194 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11194,(0),null);
var rsource = cljs.core.nth.call(null,vec__11194,(1),null);
var rline = cljs.core.nth.call(null,vec__11194,(2),null);
var rcol = cljs.core.nth.call(null,vec__11194,(3),null);
var rname = cljs.core.nth.call(null,vec__11194,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4223__auto__ = col;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__11197 = segmap;
var map__11197__$1 = cljs.core.__destructure_map.call(null,map__11197);
var gcol = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__11199 = arguments.length;
switch (G__11199) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__11203 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11207 = cljs.core.next.call(null,segs__$1);
var G__11208 = nrelseg;
var G__11209 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11207;
relseg__$1 = G__11208;
result__$1 = G__11209;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11203,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11203,(1),null);
var G__11210 = (gline + (1));
var G__11211 = cljs.core.next.call(null,lines__$1);
var G__11212 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11213 = result__$1;
gline = G__11210;
lines__$1 = G__11211;
relseg = G__11212;
result = G__11213;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__11215 = segmap;
var map__11215__$1 = cljs.core.__destructure_map.call(null,map__11215);
var gcol = cljs.core.get.call(null,map__11215__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11215__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11215__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11215__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11215__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__11214_SHARP_){
return cljs.core.conj.call(null,p1__11214_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__11217 = arguments.length;
switch (G__11217) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__11221 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11225 = cljs.core.next.call(null,segs__$1);
var G__11226 = nrelseg;
var G__11227 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11225;
relseg__$1 = G__11226;
result__$1 = G__11227;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11221,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11221,(1),null);
var G__11228 = (gline + (1));
var G__11229 = cljs.core.next.call(null,lines__$1);
var G__11230 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11231 = result__$1;
gline = G__11228;
lines__$1 = G__11229;
relseg = G__11230;
result = G__11231;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__11232){
var vec__11233 = p__11232;
var _ = cljs.core.nth.call(null,vec__11233,(0),null);
var source = cljs.core.nth.call(null,vec__11233,(1),null);
var line = cljs.core.nth.call(null,vec__11233,(2),null);
var col = cljs.core.nth.call(null,vec__11233,(3),null);
var name = cljs.core.nth.call(null,vec__11233,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__11236){
var vec__11237 = p__11236;
var gcol = cljs.core.nth.call(null,vec__11237,(0),null);
var sidx = cljs.core.nth.call(null,vec__11237,(1),null);
var line = cljs.core.nth.call(null,vec__11237,(2),null);
var col = cljs.core.nth.call(null,vec__11237,(3),null);
var name = cljs.core.nth.call(null,vec__11237,(4),null);
var seg = vec__11237;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__11240){
var vec__11241 = p__11240;
var _ = cljs.core.nth.call(null,vec__11241,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11241,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11241,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11241,(3),null);
var lname = cljs.core.nth.call(null,vec__11241,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4223__auto__ = name;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__11247 = cljs.core.seq.call(null,infos);
var chunk__11248 = null;
var count__11249 = (0);
var i__11250 = (0);
while(true){
if((i__11250 < count__11249)){
var info = cljs.core._nth.call(null,chunk__11248,i__11250);
var segv_11601 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11602 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11603 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11602 > (lc_11603 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11247,chunk__11248,count__11249,i__11250,segv_11601,gline_11602,lc_11603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11602 - (lc_11603 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11601], null));
});})(seq__11247,chunk__11248,count__11249,i__11250,segv_11601,gline_11602,lc_11603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11247,chunk__11248,count__11249,i__11250,segv_11601,gline_11602,lc_11603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11602], null),cljs.core.conj,segv_11601);
});})(seq__11247,chunk__11248,count__11249,i__11250,segv_11601,gline_11602,lc_11603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11604 = seq__11247;
var G__11605 = chunk__11248;
var G__11606 = count__11249;
var G__11607 = (i__11250 + (1));
seq__11247 = G__11604;
chunk__11248 = G__11605;
count__11249 = G__11606;
i__11250 = G__11607;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11247);
if(temp__5720__auto__){
var seq__11247__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11247__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__11247__$1);
var G__11608 = cljs.core.chunk_rest.call(null,seq__11247__$1);
var G__11609 = c__4649__auto__;
var G__11610 = cljs.core.count.call(null,c__4649__auto__);
var G__11611 = (0);
seq__11247 = G__11608;
chunk__11248 = G__11609;
count__11249 = G__11610;
i__11250 = G__11611;
continue;
} else {
var info = cljs.core.first.call(null,seq__11247__$1);
var segv_11612 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11613 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11614 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11613 > (lc_11614 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11247,chunk__11248,count__11249,i__11250,segv_11612,gline_11613,lc_11614,info,seq__11247__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11613 - (lc_11614 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11612], null));
});})(seq__11247,chunk__11248,count__11249,i__11250,segv_11612,gline_11613,lc_11614,info,seq__11247__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11247,chunk__11248,count__11249,i__11250,segv_11612,gline_11613,lc_11614,info,seq__11247__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11613], null),cljs.core.conj,segv_11612);
});})(seq__11247,chunk__11248,count__11249,i__11250,segv_11612,gline_11613,lc_11614,info,seq__11247__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11615 = cljs.core.next.call(null,seq__11247__$1);
var G__11616 = null;
var G__11617 = (0);
var G__11618 = (0);
seq__11247 = G__11615;
chunk__11248 = G__11616;
count__11249 = G__11617;
i__11250 = G__11618;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__11251_11619 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11252_11620 = null;
var count__11253_11621 = (0);
var i__11254_11622 = (0);
while(true){
if((i__11254_11622 < count__11253_11621)){
var vec__11427_11623 = cljs.core._nth.call(null,chunk__11252_11620,i__11254_11622);
var source_idx_11624 = cljs.core.nth.call(null,vec__11427_11623,(0),null);
var vec__11430_11625 = cljs.core.nth.call(null,vec__11427_11623,(1),null);
var __11626 = cljs.core.nth.call(null,vec__11430_11625,(0),null);
var lines_11627__$1 = cljs.core.nth.call(null,vec__11430_11625,(1),null);
var seq__11433_11628 = cljs.core.seq.call(null,lines_11627__$1);
var chunk__11434_11629 = null;
var count__11435_11630 = (0);
var i__11436_11631 = (0);
while(true){
if((i__11436_11631 < count__11435_11630)){
var vec__11475_11632 = cljs.core._nth.call(null,chunk__11434_11629,i__11436_11631);
var line_11633 = cljs.core.nth.call(null,vec__11475_11632,(0),null);
var cols_11634 = cljs.core.nth.call(null,vec__11475_11632,(1),null);
var seq__11478_11635 = cljs.core.seq.call(null,cols_11634);
var chunk__11479_11636 = null;
var count__11480_11637 = (0);
var i__11481_11638 = (0);
while(true){
if((i__11481_11638 < count__11480_11637)){
var vec__11488_11639 = cljs.core._nth.call(null,chunk__11479_11636,i__11481_11638);
var col_11640 = cljs.core.nth.call(null,vec__11488_11639,(0),null);
var infos_11641 = cljs.core.nth.call(null,vec__11488_11639,(1),null);
encode_cols.call(null,infos_11641,source_idx_11624,line_11633,col_11640);


var G__11642 = seq__11478_11635;
var G__11643 = chunk__11479_11636;
var G__11644 = count__11480_11637;
var G__11645 = (i__11481_11638 + (1));
seq__11478_11635 = G__11642;
chunk__11479_11636 = G__11643;
count__11480_11637 = G__11644;
i__11481_11638 = G__11645;
continue;
} else {
var temp__5720__auto___11646 = cljs.core.seq.call(null,seq__11478_11635);
if(temp__5720__auto___11646){
var seq__11478_11647__$1 = temp__5720__auto___11646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11478_11647__$1)){
var c__4649__auto___11648 = cljs.core.chunk_first.call(null,seq__11478_11647__$1);
var G__11649 = cljs.core.chunk_rest.call(null,seq__11478_11647__$1);
var G__11650 = c__4649__auto___11648;
var G__11651 = cljs.core.count.call(null,c__4649__auto___11648);
var G__11652 = (0);
seq__11478_11635 = G__11649;
chunk__11479_11636 = G__11650;
count__11480_11637 = G__11651;
i__11481_11638 = G__11652;
continue;
} else {
var vec__11491_11653 = cljs.core.first.call(null,seq__11478_11647__$1);
var col_11654 = cljs.core.nth.call(null,vec__11491_11653,(0),null);
var infos_11655 = cljs.core.nth.call(null,vec__11491_11653,(1),null);
encode_cols.call(null,infos_11655,source_idx_11624,line_11633,col_11654);


var G__11656 = cljs.core.next.call(null,seq__11478_11647__$1);
var G__11657 = null;
var G__11658 = (0);
var G__11659 = (0);
seq__11478_11635 = G__11656;
chunk__11479_11636 = G__11657;
count__11480_11637 = G__11658;
i__11481_11638 = G__11659;
continue;
}
} else {
}
}
break;
}


var G__11660 = seq__11433_11628;
var G__11661 = chunk__11434_11629;
var G__11662 = count__11435_11630;
var G__11663 = (i__11436_11631 + (1));
seq__11433_11628 = G__11660;
chunk__11434_11629 = G__11661;
count__11435_11630 = G__11662;
i__11436_11631 = G__11663;
continue;
} else {
var temp__5720__auto___11664 = cljs.core.seq.call(null,seq__11433_11628);
if(temp__5720__auto___11664){
var seq__11433_11665__$1 = temp__5720__auto___11664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11433_11665__$1)){
var c__4649__auto___11666 = cljs.core.chunk_first.call(null,seq__11433_11665__$1);
var G__11667 = cljs.core.chunk_rest.call(null,seq__11433_11665__$1);
var G__11668 = c__4649__auto___11666;
var G__11669 = cljs.core.count.call(null,c__4649__auto___11666);
var G__11670 = (0);
seq__11433_11628 = G__11667;
chunk__11434_11629 = G__11668;
count__11435_11630 = G__11669;
i__11436_11631 = G__11670;
continue;
} else {
var vec__11494_11671 = cljs.core.first.call(null,seq__11433_11665__$1);
var line_11672 = cljs.core.nth.call(null,vec__11494_11671,(0),null);
var cols_11673 = cljs.core.nth.call(null,vec__11494_11671,(1),null);
var seq__11497_11674 = cljs.core.seq.call(null,cols_11673);
var chunk__11498_11675 = null;
var count__11499_11676 = (0);
var i__11500_11677 = (0);
while(true){
if((i__11500_11677 < count__11499_11676)){
var vec__11507_11678 = cljs.core._nth.call(null,chunk__11498_11675,i__11500_11677);
var col_11679 = cljs.core.nth.call(null,vec__11507_11678,(0),null);
var infos_11680 = cljs.core.nth.call(null,vec__11507_11678,(1),null);
encode_cols.call(null,infos_11680,source_idx_11624,line_11672,col_11679);


var G__11681 = seq__11497_11674;
var G__11682 = chunk__11498_11675;
var G__11683 = count__11499_11676;
var G__11684 = (i__11500_11677 + (1));
seq__11497_11674 = G__11681;
chunk__11498_11675 = G__11682;
count__11499_11676 = G__11683;
i__11500_11677 = G__11684;
continue;
} else {
var temp__5720__auto___11685__$1 = cljs.core.seq.call(null,seq__11497_11674);
if(temp__5720__auto___11685__$1){
var seq__11497_11686__$1 = temp__5720__auto___11685__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11497_11686__$1)){
var c__4649__auto___11687 = cljs.core.chunk_first.call(null,seq__11497_11686__$1);
var G__11688 = cljs.core.chunk_rest.call(null,seq__11497_11686__$1);
var G__11689 = c__4649__auto___11687;
var G__11690 = cljs.core.count.call(null,c__4649__auto___11687);
var G__11691 = (0);
seq__11497_11674 = G__11688;
chunk__11498_11675 = G__11689;
count__11499_11676 = G__11690;
i__11500_11677 = G__11691;
continue;
} else {
var vec__11510_11692 = cljs.core.first.call(null,seq__11497_11686__$1);
var col_11693 = cljs.core.nth.call(null,vec__11510_11692,(0),null);
var infos_11694 = cljs.core.nth.call(null,vec__11510_11692,(1),null);
encode_cols.call(null,infos_11694,source_idx_11624,line_11672,col_11693);


var G__11695 = cljs.core.next.call(null,seq__11497_11686__$1);
var G__11696 = null;
var G__11697 = (0);
var G__11698 = (0);
seq__11497_11674 = G__11695;
chunk__11498_11675 = G__11696;
count__11499_11676 = G__11697;
i__11500_11677 = G__11698;
continue;
}
} else {
}
}
break;
}


var G__11699 = cljs.core.next.call(null,seq__11433_11665__$1);
var G__11700 = null;
var G__11701 = (0);
var G__11702 = (0);
seq__11433_11628 = G__11699;
chunk__11434_11629 = G__11700;
count__11435_11630 = G__11701;
i__11436_11631 = G__11702;
continue;
}
} else {
}
}
break;
}


var G__11703 = seq__11251_11619;
var G__11704 = chunk__11252_11620;
var G__11705 = count__11253_11621;
var G__11706 = (i__11254_11622 + (1));
seq__11251_11619 = G__11703;
chunk__11252_11620 = G__11704;
count__11253_11621 = G__11705;
i__11254_11622 = G__11706;
continue;
} else {
var temp__5720__auto___11707 = cljs.core.seq.call(null,seq__11251_11619);
if(temp__5720__auto___11707){
var seq__11251_11708__$1 = temp__5720__auto___11707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11251_11708__$1)){
var c__4649__auto___11709 = cljs.core.chunk_first.call(null,seq__11251_11708__$1);
var G__11710 = cljs.core.chunk_rest.call(null,seq__11251_11708__$1);
var G__11711 = c__4649__auto___11709;
var G__11712 = cljs.core.count.call(null,c__4649__auto___11709);
var G__11713 = (0);
seq__11251_11619 = G__11710;
chunk__11252_11620 = G__11711;
count__11253_11621 = G__11712;
i__11254_11622 = G__11713;
continue;
} else {
var vec__11513_11714 = cljs.core.first.call(null,seq__11251_11708__$1);
var source_idx_11715 = cljs.core.nth.call(null,vec__11513_11714,(0),null);
var vec__11516_11716 = cljs.core.nth.call(null,vec__11513_11714,(1),null);
var __11717 = cljs.core.nth.call(null,vec__11516_11716,(0),null);
var lines_11718__$1 = cljs.core.nth.call(null,vec__11516_11716,(1),null);
var seq__11519_11719 = cljs.core.seq.call(null,lines_11718__$1);
var chunk__11520_11720 = null;
var count__11521_11721 = (0);
var i__11522_11722 = (0);
while(true){
if((i__11522_11722 < count__11521_11721)){
var vec__11561_11723 = cljs.core._nth.call(null,chunk__11520_11720,i__11522_11722);
var line_11724 = cljs.core.nth.call(null,vec__11561_11723,(0),null);
var cols_11725 = cljs.core.nth.call(null,vec__11561_11723,(1),null);
var seq__11564_11726 = cljs.core.seq.call(null,cols_11725);
var chunk__11565_11727 = null;
var count__11566_11728 = (0);
var i__11567_11729 = (0);
while(true){
if((i__11567_11729 < count__11566_11728)){
var vec__11574_11730 = cljs.core._nth.call(null,chunk__11565_11727,i__11567_11729);
var col_11731 = cljs.core.nth.call(null,vec__11574_11730,(0),null);
var infos_11732 = cljs.core.nth.call(null,vec__11574_11730,(1),null);
encode_cols.call(null,infos_11732,source_idx_11715,line_11724,col_11731);


var G__11733 = seq__11564_11726;
var G__11734 = chunk__11565_11727;
var G__11735 = count__11566_11728;
var G__11736 = (i__11567_11729 + (1));
seq__11564_11726 = G__11733;
chunk__11565_11727 = G__11734;
count__11566_11728 = G__11735;
i__11567_11729 = G__11736;
continue;
} else {
var temp__5720__auto___11737__$1 = cljs.core.seq.call(null,seq__11564_11726);
if(temp__5720__auto___11737__$1){
var seq__11564_11738__$1 = temp__5720__auto___11737__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11564_11738__$1)){
var c__4649__auto___11739 = cljs.core.chunk_first.call(null,seq__11564_11738__$1);
var G__11740 = cljs.core.chunk_rest.call(null,seq__11564_11738__$1);
var G__11741 = c__4649__auto___11739;
var G__11742 = cljs.core.count.call(null,c__4649__auto___11739);
var G__11743 = (0);
seq__11564_11726 = G__11740;
chunk__11565_11727 = G__11741;
count__11566_11728 = G__11742;
i__11567_11729 = G__11743;
continue;
} else {
var vec__11577_11744 = cljs.core.first.call(null,seq__11564_11738__$1);
var col_11745 = cljs.core.nth.call(null,vec__11577_11744,(0),null);
var infos_11746 = cljs.core.nth.call(null,vec__11577_11744,(1),null);
encode_cols.call(null,infos_11746,source_idx_11715,line_11724,col_11745);


var G__11747 = cljs.core.next.call(null,seq__11564_11738__$1);
var G__11748 = null;
var G__11749 = (0);
var G__11750 = (0);
seq__11564_11726 = G__11747;
chunk__11565_11727 = G__11748;
count__11566_11728 = G__11749;
i__11567_11729 = G__11750;
continue;
}
} else {
}
}
break;
}


var G__11751 = seq__11519_11719;
var G__11752 = chunk__11520_11720;
var G__11753 = count__11521_11721;
var G__11754 = (i__11522_11722 + (1));
seq__11519_11719 = G__11751;
chunk__11520_11720 = G__11752;
count__11521_11721 = G__11753;
i__11522_11722 = G__11754;
continue;
} else {
var temp__5720__auto___11755__$1 = cljs.core.seq.call(null,seq__11519_11719);
if(temp__5720__auto___11755__$1){
var seq__11519_11756__$1 = temp__5720__auto___11755__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11519_11756__$1)){
var c__4649__auto___11757 = cljs.core.chunk_first.call(null,seq__11519_11756__$1);
var G__11758 = cljs.core.chunk_rest.call(null,seq__11519_11756__$1);
var G__11759 = c__4649__auto___11757;
var G__11760 = cljs.core.count.call(null,c__4649__auto___11757);
var G__11761 = (0);
seq__11519_11719 = G__11758;
chunk__11520_11720 = G__11759;
count__11521_11721 = G__11760;
i__11522_11722 = G__11761;
continue;
} else {
var vec__11580_11762 = cljs.core.first.call(null,seq__11519_11756__$1);
var line_11763 = cljs.core.nth.call(null,vec__11580_11762,(0),null);
var cols_11764 = cljs.core.nth.call(null,vec__11580_11762,(1),null);
var seq__11583_11765 = cljs.core.seq.call(null,cols_11764);
var chunk__11584_11766 = null;
var count__11585_11767 = (0);
var i__11586_11768 = (0);
while(true){
if((i__11586_11768 < count__11585_11767)){
var vec__11593_11769 = cljs.core._nth.call(null,chunk__11584_11766,i__11586_11768);
var col_11770 = cljs.core.nth.call(null,vec__11593_11769,(0),null);
var infos_11771 = cljs.core.nth.call(null,vec__11593_11769,(1),null);
encode_cols.call(null,infos_11771,source_idx_11715,line_11763,col_11770);


var G__11772 = seq__11583_11765;
var G__11773 = chunk__11584_11766;
var G__11774 = count__11585_11767;
var G__11775 = (i__11586_11768 + (1));
seq__11583_11765 = G__11772;
chunk__11584_11766 = G__11773;
count__11585_11767 = G__11774;
i__11586_11768 = G__11775;
continue;
} else {
var temp__5720__auto___11776__$2 = cljs.core.seq.call(null,seq__11583_11765);
if(temp__5720__auto___11776__$2){
var seq__11583_11777__$1 = temp__5720__auto___11776__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11583_11777__$1)){
var c__4649__auto___11778 = cljs.core.chunk_first.call(null,seq__11583_11777__$1);
var G__11779 = cljs.core.chunk_rest.call(null,seq__11583_11777__$1);
var G__11780 = c__4649__auto___11778;
var G__11781 = cljs.core.count.call(null,c__4649__auto___11778);
var G__11782 = (0);
seq__11583_11765 = G__11779;
chunk__11584_11766 = G__11780;
count__11585_11767 = G__11781;
i__11586_11768 = G__11782;
continue;
} else {
var vec__11596_11783 = cljs.core.first.call(null,seq__11583_11777__$1);
var col_11784 = cljs.core.nth.call(null,vec__11596_11783,(0),null);
var infos_11785 = cljs.core.nth.call(null,vec__11596_11783,(1),null);
encode_cols.call(null,infos_11785,source_idx_11715,line_11763,col_11784);


var G__11786 = cljs.core.next.call(null,seq__11583_11777__$1);
var G__11787 = null;
var G__11788 = (0);
var G__11789 = (0);
seq__11583_11765 = G__11786;
chunk__11584_11766 = G__11787;
count__11585_11767 = G__11788;
i__11586_11768 = G__11789;
continue;
}
} else {
}
}
break;
}


var G__11790 = cljs.core.next.call(null,seq__11519_11756__$1);
var G__11791 = null;
var G__11792 = (0);
var G__11793 = (0);
seq__11519_11719 = G__11790;
chunk__11520_11720 = G__11791;
count__11521_11721 = G__11792;
i__11522_11722 = G__11793;
continue;
}
} else {
}
}
break;
}


var G__11794 = cljs.core.next.call(null,seq__11251_11708__$1);
var G__11795 = null;
var G__11796 = (0);
var G__11797 = (0);
seq__11251_11619 = G__11794;
chunk__11252_11620 = G__11795;
count__11253_11621 = G__11796;
i__11254_11622 = G__11797;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11599 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__11244_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11244_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__11245_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11245_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__11246_SHARP_){
return clojure.string.join.call(null,",",p1__11246_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11600 = G__11599;
goog.object.set(G__11600,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11600;
} else {
return G__11599;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__11798 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__11798,(0),null);
var col_map = cljs.core.nth.call(null,vec__11798,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__11801 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__11801,(0),null);
var infos = cljs.core.nth.call(null,vec__11801,(1),null);
var G__11806 = cljs.core.next.call(null,col_map_seq);
var G__11807 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11801,col,infos,vec__11798,line,col_map){
return (function (v,p__11804){
var map__11805 = p__11804;
var map__11805__$1 = cljs.core.__destructure_map.call(null,map__11805);
var gline = cljs.core.get.call(null,map__11805__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__11805__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11801,col,infos,vec__11798,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11806;
new_cols = G__11807;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11808 = cljs.core.next.call(null,line_map_seq);
var G__11809 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__11808;
new_lines = G__11809;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__11810_12018 = cljs.core.seq.call(null,reverse_map);
var chunk__11811_12019 = null;
var count__11812_12020 = (0);
var i__11813_12021 = (0);
while(true){
if((i__11813_12021 < count__11812_12020)){
var vec__11916_12022 = cljs.core._nth.call(null,chunk__11811_12019,i__11813_12021);
var line_12023 = cljs.core.nth.call(null,vec__11916_12022,(0),null);
var columns_12024 = cljs.core.nth.call(null,vec__11916_12022,(1),null);
var seq__11919_12025 = cljs.core.seq.call(null,columns_12024);
var chunk__11920_12026 = null;
var count__11921_12027 = (0);
var i__11922_12028 = (0);
while(true){
if((i__11922_12028 < count__11921_12027)){
var vec__11945_12029 = cljs.core._nth.call(null,chunk__11920_12026,i__11922_12028);
var column_12030 = cljs.core.nth.call(null,vec__11945_12029,(0),null);
var column_info_12031 = cljs.core.nth.call(null,vec__11945_12029,(1),null);
var seq__11948_12032 = cljs.core.seq.call(null,column_info_12031);
var chunk__11949_12033 = null;
var count__11950_12034 = (0);
var i__11951_12035 = (0);
while(true){
if((i__11951_12035 < count__11950_12034)){
var map__11954_12036 = cljs.core._nth.call(null,chunk__11949_12033,i__11951_12035);
var map__11954_12037__$1 = cljs.core.__destructure_map.call(null,map__11954_12036);
var gline_12038 = cljs.core.get.call(null,map__11954_12037__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12039 = cljs.core.get.call(null,map__11954_12037__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12040 = cljs.core.get.call(null,map__11954_12037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12038], null),cljs.core.fnil.call(null,((function (seq__11948_12032,chunk__11949_12033,count__11950_12034,i__11951_12035,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11954_12036,map__11954_12037__$1,gline_12038,gcol_12039,name_12040,vec__11945_12029,column_12030,column_info_12031,vec__11916_12022,line_12023,columns_12024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12039], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12023,new cljs.core.Keyword(null,"col","col",-1959363084),column_12030,new cljs.core.Keyword(null,"name","name",1843675177),name_12040], null));
});})(seq__11948_12032,chunk__11949_12033,count__11950_12034,i__11951_12035,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11954_12036,map__11954_12037__$1,gline_12038,gcol_12039,name_12040,vec__11945_12029,column_12030,column_info_12031,vec__11916_12022,line_12023,columns_12024,inverted))
,cljs.core.sorted_map.call(null)));


var G__12041 = seq__11948_12032;
var G__12042 = chunk__11949_12033;
var G__12043 = count__11950_12034;
var G__12044 = (i__11951_12035 + (1));
seq__11948_12032 = G__12041;
chunk__11949_12033 = G__12042;
count__11950_12034 = G__12043;
i__11951_12035 = G__12044;
continue;
} else {
var temp__5720__auto___12045 = cljs.core.seq.call(null,seq__11948_12032);
if(temp__5720__auto___12045){
var seq__11948_12046__$1 = temp__5720__auto___12045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11948_12046__$1)){
var c__4649__auto___12047 = cljs.core.chunk_first.call(null,seq__11948_12046__$1);
var G__12048 = cljs.core.chunk_rest.call(null,seq__11948_12046__$1);
var G__12049 = c__4649__auto___12047;
var G__12050 = cljs.core.count.call(null,c__4649__auto___12047);
var G__12051 = (0);
seq__11948_12032 = G__12048;
chunk__11949_12033 = G__12049;
count__11950_12034 = G__12050;
i__11951_12035 = G__12051;
continue;
} else {
var map__11955_12052 = cljs.core.first.call(null,seq__11948_12046__$1);
var map__11955_12053__$1 = cljs.core.__destructure_map.call(null,map__11955_12052);
var gline_12054 = cljs.core.get.call(null,map__11955_12053__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12055 = cljs.core.get.call(null,map__11955_12053__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12056 = cljs.core.get.call(null,map__11955_12053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12054], null),cljs.core.fnil.call(null,((function (seq__11948_12032,chunk__11949_12033,count__11950_12034,i__11951_12035,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11955_12052,map__11955_12053__$1,gline_12054,gcol_12055,name_12056,seq__11948_12046__$1,temp__5720__auto___12045,vec__11945_12029,column_12030,column_info_12031,vec__11916_12022,line_12023,columns_12024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12055], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12023,new cljs.core.Keyword(null,"col","col",-1959363084),column_12030,new cljs.core.Keyword(null,"name","name",1843675177),name_12056], null));
});})(seq__11948_12032,chunk__11949_12033,count__11950_12034,i__11951_12035,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11955_12052,map__11955_12053__$1,gline_12054,gcol_12055,name_12056,seq__11948_12046__$1,temp__5720__auto___12045,vec__11945_12029,column_12030,column_info_12031,vec__11916_12022,line_12023,columns_12024,inverted))
,cljs.core.sorted_map.call(null)));


var G__12057 = cljs.core.next.call(null,seq__11948_12046__$1);
var G__12058 = null;
var G__12059 = (0);
var G__12060 = (0);
seq__11948_12032 = G__12057;
chunk__11949_12033 = G__12058;
count__11950_12034 = G__12059;
i__11951_12035 = G__12060;
continue;
}
} else {
}
}
break;
}


var G__12061 = seq__11919_12025;
var G__12062 = chunk__11920_12026;
var G__12063 = count__11921_12027;
var G__12064 = (i__11922_12028 + (1));
seq__11919_12025 = G__12061;
chunk__11920_12026 = G__12062;
count__11921_12027 = G__12063;
i__11922_12028 = G__12064;
continue;
} else {
var temp__5720__auto___12065 = cljs.core.seq.call(null,seq__11919_12025);
if(temp__5720__auto___12065){
var seq__11919_12066__$1 = temp__5720__auto___12065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11919_12066__$1)){
var c__4649__auto___12067 = cljs.core.chunk_first.call(null,seq__11919_12066__$1);
var G__12068 = cljs.core.chunk_rest.call(null,seq__11919_12066__$1);
var G__12069 = c__4649__auto___12067;
var G__12070 = cljs.core.count.call(null,c__4649__auto___12067);
var G__12071 = (0);
seq__11919_12025 = G__12068;
chunk__11920_12026 = G__12069;
count__11921_12027 = G__12070;
i__11922_12028 = G__12071;
continue;
} else {
var vec__11956_12072 = cljs.core.first.call(null,seq__11919_12066__$1);
var column_12073 = cljs.core.nth.call(null,vec__11956_12072,(0),null);
var column_info_12074 = cljs.core.nth.call(null,vec__11956_12072,(1),null);
var seq__11959_12075 = cljs.core.seq.call(null,column_info_12074);
var chunk__11960_12076 = null;
var count__11961_12077 = (0);
var i__11962_12078 = (0);
while(true){
if((i__11962_12078 < count__11961_12077)){
var map__11965_12079 = cljs.core._nth.call(null,chunk__11960_12076,i__11962_12078);
var map__11965_12080__$1 = cljs.core.__destructure_map.call(null,map__11965_12079);
var gline_12081 = cljs.core.get.call(null,map__11965_12080__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12082 = cljs.core.get.call(null,map__11965_12080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12083 = cljs.core.get.call(null,map__11965_12080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12081], null),cljs.core.fnil.call(null,((function (seq__11959_12075,chunk__11960_12076,count__11961_12077,i__11962_12078,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11965_12079,map__11965_12080__$1,gline_12081,gcol_12082,name_12083,vec__11956_12072,column_12073,column_info_12074,seq__11919_12066__$1,temp__5720__auto___12065,vec__11916_12022,line_12023,columns_12024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12082], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12023,new cljs.core.Keyword(null,"col","col",-1959363084),column_12073,new cljs.core.Keyword(null,"name","name",1843675177),name_12083], null));
});})(seq__11959_12075,chunk__11960_12076,count__11961_12077,i__11962_12078,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11965_12079,map__11965_12080__$1,gline_12081,gcol_12082,name_12083,vec__11956_12072,column_12073,column_info_12074,seq__11919_12066__$1,temp__5720__auto___12065,vec__11916_12022,line_12023,columns_12024,inverted))
,cljs.core.sorted_map.call(null)));


var G__12084 = seq__11959_12075;
var G__12085 = chunk__11960_12076;
var G__12086 = count__11961_12077;
var G__12087 = (i__11962_12078 + (1));
seq__11959_12075 = G__12084;
chunk__11960_12076 = G__12085;
count__11961_12077 = G__12086;
i__11962_12078 = G__12087;
continue;
} else {
var temp__5720__auto___12088__$1 = cljs.core.seq.call(null,seq__11959_12075);
if(temp__5720__auto___12088__$1){
var seq__11959_12089__$1 = temp__5720__auto___12088__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11959_12089__$1)){
var c__4649__auto___12090 = cljs.core.chunk_first.call(null,seq__11959_12089__$1);
var G__12091 = cljs.core.chunk_rest.call(null,seq__11959_12089__$1);
var G__12092 = c__4649__auto___12090;
var G__12093 = cljs.core.count.call(null,c__4649__auto___12090);
var G__12094 = (0);
seq__11959_12075 = G__12091;
chunk__11960_12076 = G__12092;
count__11961_12077 = G__12093;
i__11962_12078 = G__12094;
continue;
} else {
var map__11966_12095 = cljs.core.first.call(null,seq__11959_12089__$1);
var map__11966_12096__$1 = cljs.core.__destructure_map.call(null,map__11966_12095);
var gline_12097 = cljs.core.get.call(null,map__11966_12096__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12098 = cljs.core.get.call(null,map__11966_12096__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12099 = cljs.core.get.call(null,map__11966_12096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12097], null),cljs.core.fnil.call(null,((function (seq__11959_12075,chunk__11960_12076,count__11961_12077,i__11962_12078,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11966_12095,map__11966_12096__$1,gline_12097,gcol_12098,name_12099,seq__11959_12089__$1,temp__5720__auto___12088__$1,vec__11956_12072,column_12073,column_info_12074,seq__11919_12066__$1,temp__5720__auto___12065,vec__11916_12022,line_12023,columns_12024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12098], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12023,new cljs.core.Keyword(null,"col","col",-1959363084),column_12073,new cljs.core.Keyword(null,"name","name",1843675177),name_12099], null));
});})(seq__11959_12075,chunk__11960_12076,count__11961_12077,i__11962_12078,seq__11919_12025,chunk__11920_12026,count__11921_12027,i__11922_12028,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__11966_12095,map__11966_12096__$1,gline_12097,gcol_12098,name_12099,seq__11959_12089__$1,temp__5720__auto___12088__$1,vec__11956_12072,column_12073,column_info_12074,seq__11919_12066__$1,temp__5720__auto___12065,vec__11916_12022,line_12023,columns_12024,inverted))
,cljs.core.sorted_map.call(null)));


var G__12100 = cljs.core.next.call(null,seq__11959_12089__$1);
var G__12101 = null;
var G__12102 = (0);
var G__12103 = (0);
seq__11959_12075 = G__12100;
chunk__11960_12076 = G__12101;
count__11961_12077 = G__12102;
i__11962_12078 = G__12103;
continue;
}
} else {
}
}
break;
}


var G__12104 = cljs.core.next.call(null,seq__11919_12066__$1);
var G__12105 = null;
var G__12106 = (0);
var G__12107 = (0);
seq__11919_12025 = G__12104;
chunk__11920_12026 = G__12105;
count__11921_12027 = G__12106;
i__11922_12028 = G__12107;
continue;
}
} else {
}
}
break;
}


var G__12108 = seq__11810_12018;
var G__12109 = chunk__11811_12019;
var G__12110 = count__11812_12020;
var G__12111 = (i__11813_12021 + (1));
seq__11810_12018 = G__12108;
chunk__11811_12019 = G__12109;
count__11812_12020 = G__12110;
i__11813_12021 = G__12111;
continue;
} else {
var temp__5720__auto___12112 = cljs.core.seq.call(null,seq__11810_12018);
if(temp__5720__auto___12112){
var seq__11810_12113__$1 = temp__5720__auto___12112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11810_12113__$1)){
var c__4649__auto___12114 = cljs.core.chunk_first.call(null,seq__11810_12113__$1);
var G__12115 = cljs.core.chunk_rest.call(null,seq__11810_12113__$1);
var G__12116 = c__4649__auto___12114;
var G__12117 = cljs.core.count.call(null,c__4649__auto___12114);
var G__12118 = (0);
seq__11810_12018 = G__12115;
chunk__11811_12019 = G__12116;
count__11812_12020 = G__12117;
i__11813_12021 = G__12118;
continue;
} else {
var vec__11967_12119 = cljs.core.first.call(null,seq__11810_12113__$1);
var line_12120 = cljs.core.nth.call(null,vec__11967_12119,(0),null);
var columns_12121 = cljs.core.nth.call(null,vec__11967_12119,(1),null);
var seq__11970_12122 = cljs.core.seq.call(null,columns_12121);
var chunk__11971_12123 = null;
var count__11972_12124 = (0);
var i__11973_12125 = (0);
while(true){
if((i__11973_12125 < count__11972_12124)){
var vec__11996_12126 = cljs.core._nth.call(null,chunk__11971_12123,i__11973_12125);
var column_12127 = cljs.core.nth.call(null,vec__11996_12126,(0),null);
var column_info_12128 = cljs.core.nth.call(null,vec__11996_12126,(1),null);
var seq__11999_12129 = cljs.core.seq.call(null,column_info_12128);
var chunk__12000_12130 = null;
var count__12001_12131 = (0);
var i__12002_12132 = (0);
while(true){
if((i__12002_12132 < count__12001_12131)){
var map__12005_12133 = cljs.core._nth.call(null,chunk__12000_12130,i__12002_12132);
var map__12005_12134__$1 = cljs.core.__destructure_map.call(null,map__12005_12133);
var gline_12135 = cljs.core.get.call(null,map__12005_12134__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12136 = cljs.core.get.call(null,map__12005_12134__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12137 = cljs.core.get.call(null,map__12005_12134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12135], null),cljs.core.fnil.call(null,((function (seq__11999_12129,chunk__12000_12130,count__12001_12131,i__12002_12132,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12005_12133,map__12005_12134__$1,gline_12135,gcol_12136,name_12137,vec__11996_12126,column_12127,column_info_12128,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12136], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12120,new cljs.core.Keyword(null,"col","col",-1959363084),column_12127,new cljs.core.Keyword(null,"name","name",1843675177),name_12137], null));
});})(seq__11999_12129,chunk__12000_12130,count__12001_12131,i__12002_12132,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12005_12133,map__12005_12134__$1,gline_12135,gcol_12136,name_12137,vec__11996_12126,column_12127,column_info_12128,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted))
,cljs.core.sorted_map.call(null)));


var G__12138 = seq__11999_12129;
var G__12139 = chunk__12000_12130;
var G__12140 = count__12001_12131;
var G__12141 = (i__12002_12132 + (1));
seq__11999_12129 = G__12138;
chunk__12000_12130 = G__12139;
count__12001_12131 = G__12140;
i__12002_12132 = G__12141;
continue;
} else {
var temp__5720__auto___12142__$1 = cljs.core.seq.call(null,seq__11999_12129);
if(temp__5720__auto___12142__$1){
var seq__11999_12143__$1 = temp__5720__auto___12142__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11999_12143__$1)){
var c__4649__auto___12144 = cljs.core.chunk_first.call(null,seq__11999_12143__$1);
var G__12145 = cljs.core.chunk_rest.call(null,seq__11999_12143__$1);
var G__12146 = c__4649__auto___12144;
var G__12147 = cljs.core.count.call(null,c__4649__auto___12144);
var G__12148 = (0);
seq__11999_12129 = G__12145;
chunk__12000_12130 = G__12146;
count__12001_12131 = G__12147;
i__12002_12132 = G__12148;
continue;
} else {
var map__12006_12149 = cljs.core.first.call(null,seq__11999_12143__$1);
var map__12006_12150__$1 = cljs.core.__destructure_map.call(null,map__12006_12149);
var gline_12151 = cljs.core.get.call(null,map__12006_12150__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12152 = cljs.core.get.call(null,map__12006_12150__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12153 = cljs.core.get.call(null,map__12006_12150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12151], null),cljs.core.fnil.call(null,((function (seq__11999_12129,chunk__12000_12130,count__12001_12131,i__12002_12132,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12006_12149,map__12006_12150__$1,gline_12151,gcol_12152,name_12153,seq__11999_12143__$1,temp__5720__auto___12142__$1,vec__11996_12126,column_12127,column_info_12128,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12152], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12120,new cljs.core.Keyword(null,"col","col",-1959363084),column_12127,new cljs.core.Keyword(null,"name","name",1843675177),name_12153], null));
});})(seq__11999_12129,chunk__12000_12130,count__12001_12131,i__12002_12132,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12006_12149,map__12006_12150__$1,gline_12151,gcol_12152,name_12153,seq__11999_12143__$1,temp__5720__auto___12142__$1,vec__11996_12126,column_12127,column_info_12128,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted))
,cljs.core.sorted_map.call(null)));


var G__12154 = cljs.core.next.call(null,seq__11999_12143__$1);
var G__12155 = null;
var G__12156 = (0);
var G__12157 = (0);
seq__11999_12129 = G__12154;
chunk__12000_12130 = G__12155;
count__12001_12131 = G__12156;
i__12002_12132 = G__12157;
continue;
}
} else {
}
}
break;
}


var G__12158 = seq__11970_12122;
var G__12159 = chunk__11971_12123;
var G__12160 = count__11972_12124;
var G__12161 = (i__11973_12125 + (1));
seq__11970_12122 = G__12158;
chunk__11971_12123 = G__12159;
count__11972_12124 = G__12160;
i__11973_12125 = G__12161;
continue;
} else {
var temp__5720__auto___12162__$1 = cljs.core.seq.call(null,seq__11970_12122);
if(temp__5720__auto___12162__$1){
var seq__11970_12163__$1 = temp__5720__auto___12162__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11970_12163__$1)){
var c__4649__auto___12164 = cljs.core.chunk_first.call(null,seq__11970_12163__$1);
var G__12165 = cljs.core.chunk_rest.call(null,seq__11970_12163__$1);
var G__12166 = c__4649__auto___12164;
var G__12167 = cljs.core.count.call(null,c__4649__auto___12164);
var G__12168 = (0);
seq__11970_12122 = G__12165;
chunk__11971_12123 = G__12166;
count__11972_12124 = G__12167;
i__11973_12125 = G__12168;
continue;
} else {
var vec__12007_12169 = cljs.core.first.call(null,seq__11970_12163__$1);
var column_12170 = cljs.core.nth.call(null,vec__12007_12169,(0),null);
var column_info_12171 = cljs.core.nth.call(null,vec__12007_12169,(1),null);
var seq__12010_12172 = cljs.core.seq.call(null,column_info_12171);
var chunk__12011_12173 = null;
var count__12012_12174 = (0);
var i__12013_12175 = (0);
while(true){
if((i__12013_12175 < count__12012_12174)){
var map__12016_12176 = cljs.core._nth.call(null,chunk__12011_12173,i__12013_12175);
var map__12016_12177__$1 = cljs.core.__destructure_map.call(null,map__12016_12176);
var gline_12178 = cljs.core.get.call(null,map__12016_12177__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12179 = cljs.core.get.call(null,map__12016_12177__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12180 = cljs.core.get.call(null,map__12016_12177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12178], null),cljs.core.fnil.call(null,((function (seq__12010_12172,chunk__12011_12173,count__12012_12174,i__12013_12175,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12016_12176,map__12016_12177__$1,gline_12178,gcol_12179,name_12180,vec__12007_12169,column_12170,column_info_12171,seq__11970_12163__$1,temp__5720__auto___12162__$1,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12179], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12120,new cljs.core.Keyword(null,"col","col",-1959363084),column_12170,new cljs.core.Keyword(null,"name","name",1843675177),name_12180], null));
});})(seq__12010_12172,chunk__12011_12173,count__12012_12174,i__12013_12175,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12016_12176,map__12016_12177__$1,gline_12178,gcol_12179,name_12180,vec__12007_12169,column_12170,column_info_12171,seq__11970_12163__$1,temp__5720__auto___12162__$1,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted))
,cljs.core.sorted_map.call(null)));


var G__12181 = seq__12010_12172;
var G__12182 = chunk__12011_12173;
var G__12183 = count__12012_12174;
var G__12184 = (i__12013_12175 + (1));
seq__12010_12172 = G__12181;
chunk__12011_12173 = G__12182;
count__12012_12174 = G__12183;
i__12013_12175 = G__12184;
continue;
} else {
var temp__5720__auto___12185__$2 = cljs.core.seq.call(null,seq__12010_12172);
if(temp__5720__auto___12185__$2){
var seq__12010_12186__$1 = temp__5720__auto___12185__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12010_12186__$1)){
var c__4649__auto___12187 = cljs.core.chunk_first.call(null,seq__12010_12186__$1);
var G__12188 = cljs.core.chunk_rest.call(null,seq__12010_12186__$1);
var G__12189 = c__4649__auto___12187;
var G__12190 = cljs.core.count.call(null,c__4649__auto___12187);
var G__12191 = (0);
seq__12010_12172 = G__12188;
chunk__12011_12173 = G__12189;
count__12012_12174 = G__12190;
i__12013_12175 = G__12191;
continue;
} else {
var map__12017_12192 = cljs.core.first.call(null,seq__12010_12186__$1);
var map__12017_12193__$1 = cljs.core.__destructure_map.call(null,map__12017_12192);
var gline_12194 = cljs.core.get.call(null,map__12017_12193__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12195 = cljs.core.get.call(null,map__12017_12193__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12196 = cljs.core.get.call(null,map__12017_12193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12194], null),cljs.core.fnil.call(null,((function (seq__12010_12172,chunk__12011_12173,count__12012_12174,i__12013_12175,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12017_12192,map__12017_12193__$1,gline_12194,gcol_12195,name_12196,seq__12010_12186__$1,temp__5720__auto___12185__$2,vec__12007_12169,column_12170,column_info_12171,seq__11970_12163__$1,temp__5720__auto___12162__$1,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12195], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12120,new cljs.core.Keyword(null,"col","col",-1959363084),column_12170,new cljs.core.Keyword(null,"name","name",1843675177),name_12196], null));
});})(seq__12010_12172,chunk__12011_12173,count__12012_12174,i__12013_12175,seq__11970_12122,chunk__11971_12123,count__11972_12124,i__11973_12125,seq__11810_12018,chunk__11811_12019,count__11812_12020,i__11813_12021,map__12017_12192,map__12017_12193__$1,gline_12194,gcol_12195,name_12196,seq__12010_12186__$1,temp__5720__auto___12185__$2,vec__12007_12169,column_12170,column_info_12171,seq__11970_12163__$1,temp__5720__auto___12162__$1,vec__11967_12119,line_12120,columns_12121,seq__11810_12113__$1,temp__5720__auto___12112,inverted))
,cljs.core.sorted_map.call(null)));


var G__12197 = cljs.core.next.call(null,seq__12010_12186__$1);
var G__12198 = null;
var G__12199 = (0);
var G__12200 = (0);
seq__12010_12172 = G__12197;
chunk__12011_12173 = G__12198;
count__12012_12174 = G__12199;
i__12013_12175 = G__12200;
continue;
}
} else {
}
}
break;
}


var G__12201 = cljs.core.next.call(null,seq__11970_12163__$1);
var G__12202 = null;
var G__12203 = (0);
var G__12204 = (0);
seq__11970_12122 = G__12201;
chunk__11971_12123 = G__12202;
count__11972_12124 = G__12203;
i__11973_12125 = G__12204;
continue;
}
} else {
}
}
break;
}


var G__12205 = cljs.core.next.call(null,seq__11810_12113__$1);
var G__12206 = null;
var G__12207 = (0);
var G__12208 = (0);
seq__11810_12018 = G__12205;
chunk__11811_12019 = G__12206;
count__11812_12020 = G__12207;
i__11813_12021 = G__12208;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
