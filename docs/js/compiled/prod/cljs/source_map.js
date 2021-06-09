// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
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
return cljs.core.reduce.call(null,(function (m,p__13882){
var vec__13883 = p__13882;
var i = cljs.core.nth.call(null,vec__13883,(0),null);
var v = cljs.core.nth.call(null,vec__13883,(1),null);
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
var vec__13886 = seg;
var gcol = cljs.core.nth.call(null,vec__13886,(0),null);
var source = cljs.core.nth.call(null,vec__13886,(1),null);
var line = cljs.core.nth.call(null,vec__13886,(2),null);
var col = cljs.core.nth.call(null,vec__13886,(3),null);
var name = cljs.core.nth.call(null,vec__13886,(4),null);
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
var vec__13889 = seg;
var gcol = cljs.core.nth.call(null,vec__13889,(0),null);
var source = cljs.core.nth.call(null,vec__13889,(1),null);
var line = cljs.core.nth.call(null,vec__13889,(2),null);
var col = cljs.core.nth.call(null,vec__13889,(3),null);
var name = cljs.core.nth.call(null,vec__13889,(4),null);
var vec__13892 = relseg;
var rgcol = cljs.core.nth.call(null,vec__13892,(0),null);
var rsource = cljs.core.nth.call(null,vec__13892,(1),null);
var rline = cljs.core.nth.call(null,vec__13892,(2),null);
var rcol = cljs.core.nth.call(null,vec__13892,(3),null);
var rname = cljs.core.nth.call(null,vec__13892,(4),null);
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
var map__13895 = segmap;
var map__13895__$1 = cljs.core.__destructure_map.call(null,map__13895);
var gcol = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__13897 = arguments.length;
switch (G__13897) {
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
var vec__13901 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13905 = cljs.core.next.call(null,segs__$1);
var G__13906 = nrelseg;
var G__13907 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13905;
relseg__$1 = G__13906;
result__$1 = G__13907;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13901,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13901,(1),null);
var G__13908 = (gline + (1));
var G__13909 = cljs.core.next.call(null,lines__$1);
var G__13910 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13911 = result__$1;
gline = G__13908;
lines__$1 = G__13909;
relseg = G__13910;
result = G__13911;
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
var map__13913 = segmap;
var map__13913__$1 = cljs.core.__destructure_map.call(null,map__13913);
var gcol = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__13912_SHARP_){
return cljs.core.conj.call(null,p1__13912_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__13915 = arguments.length;
switch (G__13915) {
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
var vec__13919 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__13923 = cljs.core.next.call(null,segs__$1);
var G__13924 = nrelseg;
var G__13925 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__13923;
relseg__$1 = G__13924;
result__$1 = G__13925;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__13919,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__13919,(1),null);
var G__13926 = (gline + (1));
var G__13927 = cljs.core.next.call(null,lines__$1);
var G__13928 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__13929 = result__$1;
gline = G__13926;
lines__$1 = G__13927;
relseg = G__13928;
result = G__13929;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__13930){
var vec__13931 = p__13930;
var _ = cljs.core.nth.call(null,vec__13931,(0),null);
var source = cljs.core.nth.call(null,vec__13931,(1),null);
var line = cljs.core.nth.call(null,vec__13931,(2),null);
var col = cljs.core.nth.call(null,vec__13931,(3),null);
var name = cljs.core.nth.call(null,vec__13931,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__13934){
var vec__13935 = p__13934;
var gcol = cljs.core.nth.call(null,vec__13935,(0),null);
var sidx = cljs.core.nth.call(null,vec__13935,(1),null);
var line = cljs.core.nth.call(null,vec__13935,(2),null);
var col = cljs.core.nth.call(null,vec__13935,(3),null);
var name = cljs.core.nth.call(null,vec__13935,(4),null);
var seg = vec__13935;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__13938){
var vec__13939 = p__13938;
var _ = cljs.core.nth.call(null,vec__13939,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13939,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__13939,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__13939,(3),null);
var lname = cljs.core.nth.call(null,vec__13939,(4),null);
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
var seq__13945 = cljs.core.seq.call(null,infos);
var chunk__13946 = null;
var count__13947 = (0);
var i__13948 = (0);
while(true){
if((i__13948 < count__13947)){
var info = cljs.core._nth.call(null,chunk__13946,i__13948);
var segv_14299 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14300 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14301 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14300 > (lc_14301 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13945,chunk__13946,count__13947,i__13948,segv_14299,gline_14300,lc_14301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14300 - (lc_14301 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14299], null));
});})(seq__13945,chunk__13946,count__13947,i__13948,segv_14299,gline_14300,lc_14301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13945,chunk__13946,count__13947,i__13948,segv_14299,gline_14300,lc_14301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14300], null),cljs.core.conj,segv_14299);
});})(seq__13945,chunk__13946,count__13947,i__13948,segv_14299,gline_14300,lc_14301,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14302 = seq__13945;
var G__14303 = chunk__13946;
var G__14304 = count__13947;
var G__14305 = (i__13948 + (1));
seq__13945 = G__14302;
chunk__13946 = G__14303;
count__13947 = G__14304;
i__13948 = G__14305;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__13945);
if(temp__5720__auto__){
var seq__13945__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13945__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__13945__$1);
var G__14306 = cljs.core.chunk_rest.call(null,seq__13945__$1);
var G__14307 = c__4649__auto__;
var G__14308 = cljs.core.count.call(null,c__4649__auto__);
var G__14309 = (0);
seq__13945 = G__14306;
chunk__13946 = G__14307;
count__13947 = G__14308;
i__13948 = G__14309;
continue;
} else {
var info = cljs.core.first.call(null,seq__13945__$1);
var segv_14310 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14311 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14312 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14311 > (lc_14312 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__13945,chunk__13946,count__13947,i__13948,segv_14310,gline_14311,lc_14312,info,seq__13945__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14311 - (lc_14312 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14310], null));
});})(seq__13945,chunk__13946,count__13947,i__13948,segv_14310,gline_14311,lc_14312,info,seq__13945__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__13945,chunk__13946,count__13947,i__13948,segv_14310,gline_14311,lc_14312,info,seq__13945__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14311], null),cljs.core.conj,segv_14310);
});})(seq__13945,chunk__13946,count__13947,i__13948,segv_14310,gline_14311,lc_14312,info,seq__13945__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__14313 = cljs.core.next.call(null,seq__13945__$1);
var G__14314 = null;
var G__14315 = (0);
var G__14316 = (0);
seq__13945 = G__14313;
chunk__13946 = G__14314;
count__13947 = G__14315;
i__13948 = G__14316;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__13949_14317 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13950_14318 = null;
var count__13951_14319 = (0);
var i__13952_14320 = (0);
while(true){
if((i__13952_14320 < count__13951_14319)){
var vec__14125_14321 = cljs.core._nth.call(null,chunk__13950_14318,i__13952_14320);
var source_idx_14322 = cljs.core.nth.call(null,vec__14125_14321,(0),null);
var vec__14128_14323 = cljs.core.nth.call(null,vec__14125_14321,(1),null);
var __14324 = cljs.core.nth.call(null,vec__14128_14323,(0),null);
var lines_14325__$1 = cljs.core.nth.call(null,vec__14128_14323,(1),null);
var seq__14131_14326 = cljs.core.seq.call(null,lines_14325__$1);
var chunk__14132_14327 = null;
var count__14133_14328 = (0);
var i__14134_14329 = (0);
while(true){
if((i__14134_14329 < count__14133_14328)){
var vec__14173_14330 = cljs.core._nth.call(null,chunk__14132_14327,i__14134_14329);
var line_14331 = cljs.core.nth.call(null,vec__14173_14330,(0),null);
var cols_14332 = cljs.core.nth.call(null,vec__14173_14330,(1),null);
var seq__14176_14333 = cljs.core.seq.call(null,cols_14332);
var chunk__14177_14334 = null;
var count__14178_14335 = (0);
var i__14179_14336 = (0);
while(true){
if((i__14179_14336 < count__14178_14335)){
var vec__14186_14337 = cljs.core._nth.call(null,chunk__14177_14334,i__14179_14336);
var col_14338 = cljs.core.nth.call(null,vec__14186_14337,(0),null);
var infos_14339 = cljs.core.nth.call(null,vec__14186_14337,(1),null);
encode_cols.call(null,infos_14339,source_idx_14322,line_14331,col_14338);


var G__14340 = seq__14176_14333;
var G__14341 = chunk__14177_14334;
var G__14342 = count__14178_14335;
var G__14343 = (i__14179_14336 + (1));
seq__14176_14333 = G__14340;
chunk__14177_14334 = G__14341;
count__14178_14335 = G__14342;
i__14179_14336 = G__14343;
continue;
} else {
var temp__5720__auto___14344 = cljs.core.seq.call(null,seq__14176_14333);
if(temp__5720__auto___14344){
var seq__14176_14345__$1 = temp__5720__auto___14344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14176_14345__$1)){
var c__4649__auto___14346 = cljs.core.chunk_first.call(null,seq__14176_14345__$1);
var G__14347 = cljs.core.chunk_rest.call(null,seq__14176_14345__$1);
var G__14348 = c__4649__auto___14346;
var G__14349 = cljs.core.count.call(null,c__4649__auto___14346);
var G__14350 = (0);
seq__14176_14333 = G__14347;
chunk__14177_14334 = G__14348;
count__14178_14335 = G__14349;
i__14179_14336 = G__14350;
continue;
} else {
var vec__14189_14351 = cljs.core.first.call(null,seq__14176_14345__$1);
var col_14352 = cljs.core.nth.call(null,vec__14189_14351,(0),null);
var infos_14353 = cljs.core.nth.call(null,vec__14189_14351,(1),null);
encode_cols.call(null,infos_14353,source_idx_14322,line_14331,col_14352);


var G__14354 = cljs.core.next.call(null,seq__14176_14345__$1);
var G__14355 = null;
var G__14356 = (0);
var G__14357 = (0);
seq__14176_14333 = G__14354;
chunk__14177_14334 = G__14355;
count__14178_14335 = G__14356;
i__14179_14336 = G__14357;
continue;
}
} else {
}
}
break;
}


var G__14358 = seq__14131_14326;
var G__14359 = chunk__14132_14327;
var G__14360 = count__14133_14328;
var G__14361 = (i__14134_14329 + (1));
seq__14131_14326 = G__14358;
chunk__14132_14327 = G__14359;
count__14133_14328 = G__14360;
i__14134_14329 = G__14361;
continue;
} else {
var temp__5720__auto___14362 = cljs.core.seq.call(null,seq__14131_14326);
if(temp__5720__auto___14362){
var seq__14131_14363__$1 = temp__5720__auto___14362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14131_14363__$1)){
var c__4649__auto___14364 = cljs.core.chunk_first.call(null,seq__14131_14363__$1);
var G__14365 = cljs.core.chunk_rest.call(null,seq__14131_14363__$1);
var G__14366 = c__4649__auto___14364;
var G__14367 = cljs.core.count.call(null,c__4649__auto___14364);
var G__14368 = (0);
seq__14131_14326 = G__14365;
chunk__14132_14327 = G__14366;
count__14133_14328 = G__14367;
i__14134_14329 = G__14368;
continue;
} else {
var vec__14192_14369 = cljs.core.first.call(null,seq__14131_14363__$1);
var line_14370 = cljs.core.nth.call(null,vec__14192_14369,(0),null);
var cols_14371 = cljs.core.nth.call(null,vec__14192_14369,(1),null);
var seq__14195_14372 = cljs.core.seq.call(null,cols_14371);
var chunk__14196_14373 = null;
var count__14197_14374 = (0);
var i__14198_14375 = (0);
while(true){
if((i__14198_14375 < count__14197_14374)){
var vec__14205_14376 = cljs.core._nth.call(null,chunk__14196_14373,i__14198_14375);
var col_14377 = cljs.core.nth.call(null,vec__14205_14376,(0),null);
var infos_14378 = cljs.core.nth.call(null,vec__14205_14376,(1),null);
encode_cols.call(null,infos_14378,source_idx_14322,line_14370,col_14377);


var G__14379 = seq__14195_14372;
var G__14380 = chunk__14196_14373;
var G__14381 = count__14197_14374;
var G__14382 = (i__14198_14375 + (1));
seq__14195_14372 = G__14379;
chunk__14196_14373 = G__14380;
count__14197_14374 = G__14381;
i__14198_14375 = G__14382;
continue;
} else {
var temp__5720__auto___14383__$1 = cljs.core.seq.call(null,seq__14195_14372);
if(temp__5720__auto___14383__$1){
var seq__14195_14384__$1 = temp__5720__auto___14383__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14195_14384__$1)){
var c__4649__auto___14385 = cljs.core.chunk_first.call(null,seq__14195_14384__$1);
var G__14386 = cljs.core.chunk_rest.call(null,seq__14195_14384__$1);
var G__14387 = c__4649__auto___14385;
var G__14388 = cljs.core.count.call(null,c__4649__auto___14385);
var G__14389 = (0);
seq__14195_14372 = G__14386;
chunk__14196_14373 = G__14387;
count__14197_14374 = G__14388;
i__14198_14375 = G__14389;
continue;
} else {
var vec__14208_14390 = cljs.core.first.call(null,seq__14195_14384__$1);
var col_14391 = cljs.core.nth.call(null,vec__14208_14390,(0),null);
var infos_14392 = cljs.core.nth.call(null,vec__14208_14390,(1),null);
encode_cols.call(null,infos_14392,source_idx_14322,line_14370,col_14391);


var G__14393 = cljs.core.next.call(null,seq__14195_14384__$1);
var G__14394 = null;
var G__14395 = (0);
var G__14396 = (0);
seq__14195_14372 = G__14393;
chunk__14196_14373 = G__14394;
count__14197_14374 = G__14395;
i__14198_14375 = G__14396;
continue;
}
} else {
}
}
break;
}


var G__14397 = cljs.core.next.call(null,seq__14131_14363__$1);
var G__14398 = null;
var G__14399 = (0);
var G__14400 = (0);
seq__14131_14326 = G__14397;
chunk__14132_14327 = G__14398;
count__14133_14328 = G__14399;
i__14134_14329 = G__14400;
continue;
}
} else {
}
}
break;
}


var G__14401 = seq__13949_14317;
var G__14402 = chunk__13950_14318;
var G__14403 = count__13951_14319;
var G__14404 = (i__13952_14320 + (1));
seq__13949_14317 = G__14401;
chunk__13950_14318 = G__14402;
count__13951_14319 = G__14403;
i__13952_14320 = G__14404;
continue;
} else {
var temp__5720__auto___14405 = cljs.core.seq.call(null,seq__13949_14317);
if(temp__5720__auto___14405){
var seq__13949_14406__$1 = temp__5720__auto___14405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13949_14406__$1)){
var c__4649__auto___14407 = cljs.core.chunk_first.call(null,seq__13949_14406__$1);
var G__14408 = cljs.core.chunk_rest.call(null,seq__13949_14406__$1);
var G__14409 = c__4649__auto___14407;
var G__14410 = cljs.core.count.call(null,c__4649__auto___14407);
var G__14411 = (0);
seq__13949_14317 = G__14408;
chunk__13950_14318 = G__14409;
count__13951_14319 = G__14410;
i__13952_14320 = G__14411;
continue;
} else {
var vec__14211_14412 = cljs.core.first.call(null,seq__13949_14406__$1);
var source_idx_14413 = cljs.core.nth.call(null,vec__14211_14412,(0),null);
var vec__14214_14414 = cljs.core.nth.call(null,vec__14211_14412,(1),null);
var __14415 = cljs.core.nth.call(null,vec__14214_14414,(0),null);
var lines_14416__$1 = cljs.core.nth.call(null,vec__14214_14414,(1),null);
var seq__14217_14417 = cljs.core.seq.call(null,lines_14416__$1);
var chunk__14218_14418 = null;
var count__14219_14419 = (0);
var i__14220_14420 = (0);
while(true){
if((i__14220_14420 < count__14219_14419)){
var vec__14259_14421 = cljs.core._nth.call(null,chunk__14218_14418,i__14220_14420);
var line_14422 = cljs.core.nth.call(null,vec__14259_14421,(0),null);
var cols_14423 = cljs.core.nth.call(null,vec__14259_14421,(1),null);
var seq__14262_14424 = cljs.core.seq.call(null,cols_14423);
var chunk__14263_14425 = null;
var count__14264_14426 = (0);
var i__14265_14427 = (0);
while(true){
if((i__14265_14427 < count__14264_14426)){
var vec__14272_14428 = cljs.core._nth.call(null,chunk__14263_14425,i__14265_14427);
var col_14429 = cljs.core.nth.call(null,vec__14272_14428,(0),null);
var infos_14430 = cljs.core.nth.call(null,vec__14272_14428,(1),null);
encode_cols.call(null,infos_14430,source_idx_14413,line_14422,col_14429);


var G__14431 = seq__14262_14424;
var G__14432 = chunk__14263_14425;
var G__14433 = count__14264_14426;
var G__14434 = (i__14265_14427 + (1));
seq__14262_14424 = G__14431;
chunk__14263_14425 = G__14432;
count__14264_14426 = G__14433;
i__14265_14427 = G__14434;
continue;
} else {
var temp__5720__auto___14435__$1 = cljs.core.seq.call(null,seq__14262_14424);
if(temp__5720__auto___14435__$1){
var seq__14262_14436__$1 = temp__5720__auto___14435__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14262_14436__$1)){
var c__4649__auto___14437 = cljs.core.chunk_first.call(null,seq__14262_14436__$1);
var G__14438 = cljs.core.chunk_rest.call(null,seq__14262_14436__$1);
var G__14439 = c__4649__auto___14437;
var G__14440 = cljs.core.count.call(null,c__4649__auto___14437);
var G__14441 = (0);
seq__14262_14424 = G__14438;
chunk__14263_14425 = G__14439;
count__14264_14426 = G__14440;
i__14265_14427 = G__14441;
continue;
} else {
var vec__14275_14442 = cljs.core.first.call(null,seq__14262_14436__$1);
var col_14443 = cljs.core.nth.call(null,vec__14275_14442,(0),null);
var infos_14444 = cljs.core.nth.call(null,vec__14275_14442,(1),null);
encode_cols.call(null,infos_14444,source_idx_14413,line_14422,col_14443);


var G__14445 = cljs.core.next.call(null,seq__14262_14436__$1);
var G__14446 = null;
var G__14447 = (0);
var G__14448 = (0);
seq__14262_14424 = G__14445;
chunk__14263_14425 = G__14446;
count__14264_14426 = G__14447;
i__14265_14427 = G__14448;
continue;
}
} else {
}
}
break;
}


var G__14449 = seq__14217_14417;
var G__14450 = chunk__14218_14418;
var G__14451 = count__14219_14419;
var G__14452 = (i__14220_14420 + (1));
seq__14217_14417 = G__14449;
chunk__14218_14418 = G__14450;
count__14219_14419 = G__14451;
i__14220_14420 = G__14452;
continue;
} else {
var temp__5720__auto___14453__$1 = cljs.core.seq.call(null,seq__14217_14417);
if(temp__5720__auto___14453__$1){
var seq__14217_14454__$1 = temp__5720__auto___14453__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14217_14454__$1)){
var c__4649__auto___14455 = cljs.core.chunk_first.call(null,seq__14217_14454__$1);
var G__14456 = cljs.core.chunk_rest.call(null,seq__14217_14454__$1);
var G__14457 = c__4649__auto___14455;
var G__14458 = cljs.core.count.call(null,c__4649__auto___14455);
var G__14459 = (0);
seq__14217_14417 = G__14456;
chunk__14218_14418 = G__14457;
count__14219_14419 = G__14458;
i__14220_14420 = G__14459;
continue;
} else {
var vec__14278_14460 = cljs.core.first.call(null,seq__14217_14454__$1);
var line_14461 = cljs.core.nth.call(null,vec__14278_14460,(0),null);
var cols_14462 = cljs.core.nth.call(null,vec__14278_14460,(1),null);
var seq__14281_14463 = cljs.core.seq.call(null,cols_14462);
var chunk__14282_14464 = null;
var count__14283_14465 = (0);
var i__14284_14466 = (0);
while(true){
if((i__14284_14466 < count__14283_14465)){
var vec__14291_14467 = cljs.core._nth.call(null,chunk__14282_14464,i__14284_14466);
var col_14468 = cljs.core.nth.call(null,vec__14291_14467,(0),null);
var infos_14469 = cljs.core.nth.call(null,vec__14291_14467,(1),null);
encode_cols.call(null,infos_14469,source_idx_14413,line_14461,col_14468);


var G__14470 = seq__14281_14463;
var G__14471 = chunk__14282_14464;
var G__14472 = count__14283_14465;
var G__14473 = (i__14284_14466 + (1));
seq__14281_14463 = G__14470;
chunk__14282_14464 = G__14471;
count__14283_14465 = G__14472;
i__14284_14466 = G__14473;
continue;
} else {
var temp__5720__auto___14474__$2 = cljs.core.seq.call(null,seq__14281_14463);
if(temp__5720__auto___14474__$2){
var seq__14281_14475__$1 = temp__5720__auto___14474__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14281_14475__$1)){
var c__4649__auto___14476 = cljs.core.chunk_first.call(null,seq__14281_14475__$1);
var G__14477 = cljs.core.chunk_rest.call(null,seq__14281_14475__$1);
var G__14478 = c__4649__auto___14476;
var G__14479 = cljs.core.count.call(null,c__4649__auto___14476);
var G__14480 = (0);
seq__14281_14463 = G__14477;
chunk__14282_14464 = G__14478;
count__14283_14465 = G__14479;
i__14284_14466 = G__14480;
continue;
} else {
var vec__14294_14481 = cljs.core.first.call(null,seq__14281_14475__$1);
var col_14482 = cljs.core.nth.call(null,vec__14294_14481,(0),null);
var infos_14483 = cljs.core.nth.call(null,vec__14294_14481,(1),null);
encode_cols.call(null,infos_14483,source_idx_14413,line_14461,col_14482);


var G__14484 = cljs.core.next.call(null,seq__14281_14475__$1);
var G__14485 = null;
var G__14486 = (0);
var G__14487 = (0);
seq__14281_14463 = G__14484;
chunk__14282_14464 = G__14485;
count__14283_14465 = G__14486;
i__14284_14466 = G__14487;
continue;
}
} else {
}
}
break;
}


var G__14488 = cljs.core.next.call(null,seq__14217_14454__$1);
var G__14489 = null;
var G__14490 = (0);
var G__14491 = (0);
seq__14217_14417 = G__14488;
chunk__14218_14418 = G__14489;
count__14219_14419 = G__14490;
i__14220_14420 = G__14491;
continue;
}
} else {
}
}
break;
}


var G__14492 = cljs.core.next.call(null,seq__13949_14406__$1);
var G__14493 = null;
var G__14494 = (0);
var G__14495 = (0);
seq__13949_14317 = G__14492;
chunk__13950_14318 = G__14493;
count__13951_14319 = G__14494;
i__13952_14320 = G__14495;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14297 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__13942_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13942_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__13943_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__13943_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__13944_SHARP_){
return clojure.string.join.call(null,",",p1__13944_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14298 = G__14297;
goog.object.set(G__14298,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14298;
} else {
return G__14297;
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
var vec__14496 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__14496,(0),null);
var col_map = cljs.core.nth.call(null,vec__14496,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__14499 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__14499,(0),null);
var infos = cljs.core.nth.call(null,vec__14499,(1),null);
var G__14504 = cljs.core.next.call(null,col_map_seq);
var G__14505 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14499,col,infos,vec__14496,line,col_map){
return (function (v,p__14502){
var map__14503 = p__14502;
var map__14503__$1 = cljs.core.__destructure_map.call(null,map__14503);
var gline = cljs.core.get.call(null,map__14503__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__14503__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14499,col,infos,vec__14496,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14504;
new_cols = G__14505;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14506 = cljs.core.next.call(null,line_map_seq);
var G__14507 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__14506;
new_lines = G__14507;
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
var seq__14508_14716 = cljs.core.seq.call(null,reverse_map);
var chunk__14509_14717 = null;
var count__14510_14718 = (0);
var i__14511_14719 = (0);
while(true){
if((i__14511_14719 < count__14510_14718)){
var vec__14614_14720 = cljs.core._nth.call(null,chunk__14509_14717,i__14511_14719);
var line_14721 = cljs.core.nth.call(null,vec__14614_14720,(0),null);
var columns_14722 = cljs.core.nth.call(null,vec__14614_14720,(1),null);
var seq__14617_14723 = cljs.core.seq.call(null,columns_14722);
var chunk__14618_14724 = null;
var count__14619_14725 = (0);
var i__14620_14726 = (0);
while(true){
if((i__14620_14726 < count__14619_14725)){
var vec__14643_14727 = cljs.core._nth.call(null,chunk__14618_14724,i__14620_14726);
var column_14728 = cljs.core.nth.call(null,vec__14643_14727,(0),null);
var column_info_14729 = cljs.core.nth.call(null,vec__14643_14727,(1),null);
var seq__14646_14730 = cljs.core.seq.call(null,column_info_14729);
var chunk__14647_14731 = null;
var count__14648_14732 = (0);
var i__14649_14733 = (0);
while(true){
if((i__14649_14733 < count__14648_14732)){
var map__14652_14734 = cljs.core._nth.call(null,chunk__14647_14731,i__14649_14733);
var map__14652_14735__$1 = cljs.core.__destructure_map.call(null,map__14652_14734);
var gline_14736 = cljs.core.get.call(null,map__14652_14735__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14737 = cljs.core.get.call(null,map__14652_14735__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14738 = cljs.core.get.call(null,map__14652_14735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14736], null),cljs.core.fnil.call(null,((function (seq__14646_14730,chunk__14647_14731,count__14648_14732,i__14649_14733,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14652_14734,map__14652_14735__$1,gline_14736,gcol_14737,name_14738,vec__14643_14727,column_14728,column_info_14729,vec__14614_14720,line_14721,columns_14722,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14737], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14721,new cljs.core.Keyword(null,"col","col",-1959363084),column_14728,new cljs.core.Keyword(null,"name","name",1843675177),name_14738], null));
});})(seq__14646_14730,chunk__14647_14731,count__14648_14732,i__14649_14733,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14652_14734,map__14652_14735__$1,gline_14736,gcol_14737,name_14738,vec__14643_14727,column_14728,column_info_14729,vec__14614_14720,line_14721,columns_14722,inverted))
,cljs.core.sorted_map.call(null)));


var G__14739 = seq__14646_14730;
var G__14740 = chunk__14647_14731;
var G__14741 = count__14648_14732;
var G__14742 = (i__14649_14733 + (1));
seq__14646_14730 = G__14739;
chunk__14647_14731 = G__14740;
count__14648_14732 = G__14741;
i__14649_14733 = G__14742;
continue;
} else {
var temp__5720__auto___14743 = cljs.core.seq.call(null,seq__14646_14730);
if(temp__5720__auto___14743){
var seq__14646_14744__$1 = temp__5720__auto___14743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14646_14744__$1)){
var c__4649__auto___14745 = cljs.core.chunk_first.call(null,seq__14646_14744__$1);
var G__14746 = cljs.core.chunk_rest.call(null,seq__14646_14744__$1);
var G__14747 = c__4649__auto___14745;
var G__14748 = cljs.core.count.call(null,c__4649__auto___14745);
var G__14749 = (0);
seq__14646_14730 = G__14746;
chunk__14647_14731 = G__14747;
count__14648_14732 = G__14748;
i__14649_14733 = G__14749;
continue;
} else {
var map__14653_14750 = cljs.core.first.call(null,seq__14646_14744__$1);
var map__14653_14751__$1 = cljs.core.__destructure_map.call(null,map__14653_14750);
var gline_14752 = cljs.core.get.call(null,map__14653_14751__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14753 = cljs.core.get.call(null,map__14653_14751__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14754 = cljs.core.get.call(null,map__14653_14751__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14752], null),cljs.core.fnil.call(null,((function (seq__14646_14730,chunk__14647_14731,count__14648_14732,i__14649_14733,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14653_14750,map__14653_14751__$1,gline_14752,gcol_14753,name_14754,seq__14646_14744__$1,temp__5720__auto___14743,vec__14643_14727,column_14728,column_info_14729,vec__14614_14720,line_14721,columns_14722,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14753], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14721,new cljs.core.Keyword(null,"col","col",-1959363084),column_14728,new cljs.core.Keyword(null,"name","name",1843675177),name_14754], null));
});})(seq__14646_14730,chunk__14647_14731,count__14648_14732,i__14649_14733,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14653_14750,map__14653_14751__$1,gline_14752,gcol_14753,name_14754,seq__14646_14744__$1,temp__5720__auto___14743,vec__14643_14727,column_14728,column_info_14729,vec__14614_14720,line_14721,columns_14722,inverted))
,cljs.core.sorted_map.call(null)));


var G__14755 = cljs.core.next.call(null,seq__14646_14744__$1);
var G__14756 = null;
var G__14757 = (0);
var G__14758 = (0);
seq__14646_14730 = G__14755;
chunk__14647_14731 = G__14756;
count__14648_14732 = G__14757;
i__14649_14733 = G__14758;
continue;
}
} else {
}
}
break;
}


var G__14759 = seq__14617_14723;
var G__14760 = chunk__14618_14724;
var G__14761 = count__14619_14725;
var G__14762 = (i__14620_14726 + (1));
seq__14617_14723 = G__14759;
chunk__14618_14724 = G__14760;
count__14619_14725 = G__14761;
i__14620_14726 = G__14762;
continue;
} else {
var temp__5720__auto___14763 = cljs.core.seq.call(null,seq__14617_14723);
if(temp__5720__auto___14763){
var seq__14617_14764__$1 = temp__5720__auto___14763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14617_14764__$1)){
var c__4649__auto___14765 = cljs.core.chunk_first.call(null,seq__14617_14764__$1);
var G__14766 = cljs.core.chunk_rest.call(null,seq__14617_14764__$1);
var G__14767 = c__4649__auto___14765;
var G__14768 = cljs.core.count.call(null,c__4649__auto___14765);
var G__14769 = (0);
seq__14617_14723 = G__14766;
chunk__14618_14724 = G__14767;
count__14619_14725 = G__14768;
i__14620_14726 = G__14769;
continue;
} else {
var vec__14654_14770 = cljs.core.first.call(null,seq__14617_14764__$1);
var column_14771 = cljs.core.nth.call(null,vec__14654_14770,(0),null);
var column_info_14772 = cljs.core.nth.call(null,vec__14654_14770,(1),null);
var seq__14657_14773 = cljs.core.seq.call(null,column_info_14772);
var chunk__14658_14774 = null;
var count__14659_14775 = (0);
var i__14660_14776 = (0);
while(true){
if((i__14660_14776 < count__14659_14775)){
var map__14663_14777 = cljs.core._nth.call(null,chunk__14658_14774,i__14660_14776);
var map__14663_14778__$1 = cljs.core.__destructure_map.call(null,map__14663_14777);
var gline_14779 = cljs.core.get.call(null,map__14663_14778__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14780 = cljs.core.get.call(null,map__14663_14778__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14781 = cljs.core.get.call(null,map__14663_14778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14779], null),cljs.core.fnil.call(null,((function (seq__14657_14773,chunk__14658_14774,count__14659_14775,i__14660_14776,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14663_14777,map__14663_14778__$1,gline_14779,gcol_14780,name_14781,vec__14654_14770,column_14771,column_info_14772,seq__14617_14764__$1,temp__5720__auto___14763,vec__14614_14720,line_14721,columns_14722,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14780], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14721,new cljs.core.Keyword(null,"col","col",-1959363084),column_14771,new cljs.core.Keyword(null,"name","name",1843675177),name_14781], null));
});})(seq__14657_14773,chunk__14658_14774,count__14659_14775,i__14660_14776,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14663_14777,map__14663_14778__$1,gline_14779,gcol_14780,name_14781,vec__14654_14770,column_14771,column_info_14772,seq__14617_14764__$1,temp__5720__auto___14763,vec__14614_14720,line_14721,columns_14722,inverted))
,cljs.core.sorted_map.call(null)));


var G__14782 = seq__14657_14773;
var G__14783 = chunk__14658_14774;
var G__14784 = count__14659_14775;
var G__14785 = (i__14660_14776 + (1));
seq__14657_14773 = G__14782;
chunk__14658_14774 = G__14783;
count__14659_14775 = G__14784;
i__14660_14776 = G__14785;
continue;
} else {
var temp__5720__auto___14786__$1 = cljs.core.seq.call(null,seq__14657_14773);
if(temp__5720__auto___14786__$1){
var seq__14657_14787__$1 = temp__5720__auto___14786__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14657_14787__$1)){
var c__4649__auto___14788 = cljs.core.chunk_first.call(null,seq__14657_14787__$1);
var G__14789 = cljs.core.chunk_rest.call(null,seq__14657_14787__$1);
var G__14790 = c__4649__auto___14788;
var G__14791 = cljs.core.count.call(null,c__4649__auto___14788);
var G__14792 = (0);
seq__14657_14773 = G__14789;
chunk__14658_14774 = G__14790;
count__14659_14775 = G__14791;
i__14660_14776 = G__14792;
continue;
} else {
var map__14664_14793 = cljs.core.first.call(null,seq__14657_14787__$1);
var map__14664_14794__$1 = cljs.core.__destructure_map.call(null,map__14664_14793);
var gline_14795 = cljs.core.get.call(null,map__14664_14794__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14796 = cljs.core.get.call(null,map__14664_14794__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14797 = cljs.core.get.call(null,map__14664_14794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14795], null),cljs.core.fnil.call(null,((function (seq__14657_14773,chunk__14658_14774,count__14659_14775,i__14660_14776,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14664_14793,map__14664_14794__$1,gline_14795,gcol_14796,name_14797,seq__14657_14787__$1,temp__5720__auto___14786__$1,vec__14654_14770,column_14771,column_info_14772,seq__14617_14764__$1,temp__5720__auto___14763,vec__14614_14720,line_14721,columns_14722,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14796], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14721,new cljs.core.Keyword(null,"col","col",-1959363084),column_14771,new cljs.core.Keyword(null,"name","name",1843675177),name_14797], null));
});})(seq__14657_14773,chunk__14658_14774,count__14659_14775,i__14660_14776,seq__14617_14723,chunk__14618_14724,count__14619_14725,i__14620_14726,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14664_14793,map__14664_14794__$1,gline_14795,gcol_14796,name_14797,seq__14657_14787__$1,temp__5720__auto___14786__$1,vec__14654_14770,column_14771,column_info_14772,seq__14617_14764__$1,temp__5720__auto___14763,vec__14614_14720,line_14721,columns_14722,inverted))
,cljs.core.sorted_map.call(null)));


var G__14798 = cljs.core.next.call(null,seq__14657_14787__$1);
var G__14799 = null;
var G__14800 = (0);
var G__14801 = (0);
seq__14657_14773 = G__14798;
chunk__14658_14774 = G__14799;
count__14659_14775 = G__14800;
i__14660_14776 = G__14801;
continue;
}
} else {
}
}
break;
}


var G__14802 = cljs.core.next.call(null,seq__14617_14764__$1);
var G__14803 = null;
var G__14804 = (0);
var G__14805 = (0);
seq__14617_14723 = G__14802;
chunk__14618_14724 = G__14803;
count__14619_14725 = G__14804;
i__14620_14726 = G__14805;
continue;
}
} else {
}
}
break;
}


var G__14806 = seq__14508_14716;
var G__14807 = chunk__14509_14717;
var G__14808 = count__14510_14718;
var G__14809 = (i__14511_14719 + (1));
seq__14508_14716 = G__14806;
chunk__14509_14717 = G__14807;
count__14510_14718 = G__14808;
i__14511_14719 = G__14809;
continue;
} else {
var temp__5720__auto___14810 = cljs.core.seq.call(null,seq__14508_14716);
if(temp__5720__auto___14810){
var seq__14508_14811__$1 = temp__5720__auto___14810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14508_14811__$1)){
var c__4649__auto___14812 = cljs.core.chunk_first.call(null,seq__14508_14811__$1);
var G__14813 = cljs.core.chunk_rest.call(null,seq__14508_14811__$1);
var G__14814 = c__4649__auto___14812;
var G__14815 = cljs.core.count.call(null,c__4649__auto___14812);
var G__14816 = (0);
seq__14508_14716 = G__14813;
chunk__14509_14717 = G__14814;
count__14510_14718 = G__14815;
i__14511_14719 = G__14816;
continue;
} else {
var vec__14665_14817 = cljs.core.first.call(null,seq__14508_14811__$1);
var line_14818 = cljs.core.nth.call(null,vec__14665_14817,(0),null);
var columns_14819 = cljs.core.nth.call(null,vec__14665_14817,(1),null);
var seq__14668_14820 = cljs.core.seq.call(null,columns_14819);
var chunk__14669_14821 = null;
var count__14670_14822 = (0);
var i__14671_14823 = (0);
while(true){
if((i__14671_14823 < count__14670_14822)){
var vec__14694_14824 = cljs.core._nth.call(null,chunk__14669_14821,i__14671_14823);
var column_14825 = cljs.core.nth.call(null,vec__14694_14824,(0),null);
var column_info_14826 = cljs.core.nth.call(null,vec__14694_14824,(1),null);
var seq__14697_14827 = cljs.core.seq.call(null,column_info_14826);
var chunk__14698_14828 = null;
var count__14699_14829 = (0);
var i__14700_14830 = (0);
while(true){
if((i__14700_14830 < count__14699_14829)){
var map__14703_14831 = cljs.core._nth.call(null,chunk__14698_14828,i__14700_14830);
var map__14703_14832__$1 = cljs.core.__destructure_map.call(null,map__14703_14831);
var gline_14833 = cljs.core.get.call(null,map__14703_14832__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14834 = cljs.core.get.call(null,map__14703_14832__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14835 = cljs.core.get.call(null,map__14703_14832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14833], null),cljs.core.fnil.call(null,((function (seq__14697_14827,chunk__14698_14828,count__14699_14829,i__14700_14830,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14703_14831,map__14703_14832__$1,gline_14833,gcol_14834,name_14835,vec__14694_14824,column_14825,column_info_14826,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14834], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14818,new cljs.core.Keyword(null,"col","col",-1959363084),column_14825,new cljs.core.Keyword(null,"name","name",1843675177),name_14835], null));
});})(seq__14697_14827,chunk__14698_14828,count__14699_14829,i__14700_14830,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14703_14831,map__14703_14832__$1,gline_14833,gcol_14834,name_14835,vec__14694_14824,column_14825,column_info_14826,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted))
,cljs.core.sorted_map.call(null)));


var G__14836 = seq__14697_14827;
var G__14837 = chunk__14698_14828;
var G__14838 = count__14699_14829;
var G__14839 = (i__14700_14830 + (1));
seq__14697_14827 = G__14836;
chunk__14698_14828 = G__14837;
count__14699_14829 = G__14838;
i__14700_14830 = G__14839;
continue;
} else {
var temp__5720__auto___14840__$1 = cljs.core.seq.call(null,seq__14697_14827);
if(temp__5720__auto___14840__$1){
var seq__14697_14841__$1 = temp__5720__auto___14840__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14697_14841__$1)){
var c__4649__auto___14842 = cljs.core.chunk_first.call(null,seq__14697_14841__$1);
var G__14843 = cljs.core.chunk_rest.call(null,seq__14697_14841__$1);
var G__14844 = c__4649__auto___14842;
var G__14845 = cljs.core.count.call(null,c__4649__auto___14842);
var G__14846 = (0);
seq__14697_14827 = G__14843;
chunk__14698_14828 = G__14844;
count__14699_14829 = G__14845;
i__14700_14830 = G__14846;
continue;
} else {
var map__14704_14847 = cljs.core.first.call(null,seq__14697_14841__$1);
var map__14704_14848__$1 = cljs.core.__destructure_map.call(null,map__14704_14847);
var gline_14849 = cljs.core.get.call(null,map__14704_14848__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14850 = cljs.core.get.call(null,map__14704_14848__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14851 = cljs.core.get.call(null,map__14704_14848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14849], null),cljs.core.fnil.call(null,((function (seq__14697_14827,chunk__14698_14828,count__14699_14829,i__14700_14830,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14704_14847,map__14704_14848__$1,gline_14849,gcol_14850,name_14851,seq__14697_14841__$1,temp__5720__auto___14840__$1,vec__14694_14824,column_14825,column_info_14826,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14850], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14818,new cljs.core.Keyword(null,"col","col",-1959363084),column_14825,new cljs.core.Keyword(null,"name","name",1843675177),name_14851], null));
});})(seq__14697_14827,chunk__14698_14828,count__14699_14829,i__14700_14830,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14704_14847,map__14704_14848__$1,gline_14849,gcol_14850,name_14851,seq__14697_14841__$1,temp__5720__auto___14840__$1,vec__14694_14824,column_14825,column_info_14826,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted))
,cljs.core.sorted_map.call(null)));


var G__14852 = cljs.core.next.call(null,seq__14697_14841__$1);
var G__14853 = null;
var G__14854 = (0);
var G__14855 = (0);
seq__14697_14827 = G__14852;
chunk__14698_14828 = G__14853;
count__14699_14829 = G__14854;
i__14700_14830 = G__14855;
continue;
}
} else {
}
}
break;
}


var G__14856 = seq__14668_14820;
var G__14857 = chunk__14669_14821;
var G__14858 = count__14670_14822;
var G__14859 = (i__14671_14823 + (1));
seq__14668_14820 = G__14856;
chunk__14669_14821 = G__14857;
count__14670_14822 = G__14858;
i__14671_14823 = G__14859;
continue;
} else {
var temp__5720__auto___14860__$1 = cljs.core.seq.call(null,seq__14668_14820);
if(temp__5720__auto___14860__$1){
var seq__14668_14861__$1 = temp__5720__auto___14860__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14668_14861__$1)){
var c__4649__auto___14862 = cljs.core.chunk_first.call(null,seq__14668_14861__$1);
var G__14863 = cljs.core.chunk_rest.call(null,seq__14668_14861__$1);
var G__14864 = c__4649__auto___14862;
var G__14865 = cljs.core.count.call(null,c__4649__auto___14862);
var G__14866 = (0);
seq__14668_14820 = G__14863;
chunk__14669_14821 = G__14864;
count__14670_14822 = G__14865;
i__14671_14823 = G__14866;
continue;
} else {
var vec__14705_14867 = cljs.core.first.call(null,seq__14668_14861__$1);
var column_14868 = cljs.core.nth.call(null,vec__14705_14867,(0),null);
var column_info_14869 = cljs.core.nth.call(null,vec__14705_14867,(1),null);
var seq__14708_14870 = cljs.core.seq.call(null,column_info_14869);
var chunk__14709_14871 = null;
var count__14710_14872 = (0);
var i__14711_14873 = (0);
while(true){
if((i__14711_14873 < count__14710_14872)){
var map__14714_14874 = cljs.core._nth.call(null,chunk__14709_14871,i__14711_14873);
var map__14714_14875__$1 = cljs.core.__destructure_map.call(null,map__14714_14874);
var gline_14876 = cljs.core.get.call(null,map__14714_14875__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14877 = cljs.core.get.call(null,map__14714_14875__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14878 = cljs.core.get.call(null,map__14714_14875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14876], null),cljs.core.fnil.call(null,((function (seq__14708_14870,chunk__14709_14871,count__14710_14872,i__14711_14873,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14714_14874,map__14714_14875__$1,gline_14876,gcol_14877,name_14878,vec__14705_14867,column_14868,column_info_14869,seq__14668_14861__$1,temp__5720__auto___14860__$1,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14877], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14818,new cljs.core.Keyword(null,"col","col",-1959363084),column_14868,new cljs.core.Keyword(null,"name","name",1843675177),name_14878], null));
});})(seq__14708_14870,chunk__14709_14871,count__14710_14872,i__14711_14873,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14714_14874,map__14714_14875__$1,gline_14876,gcol_14877,name_14878,vec__14705_14867,column_14868,column_info_14869,seq__14668_14861__$1,temp__5720__auto___14860__$1,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted))
,cljs.core.sorted_map.call(null)));


var G__14879 = seq__14708_14870;
var G__14880 = chunk__14709_14871;
var G__14881 = count__14710_14872;
var G__14882 = (i__14711_14873 + (1));
seq__14708_14870 = G__14879;
chunk__14709_14871 = G__14880;
count__14710_14872 = G__14881;
i__14711_14873 = G__14882;
continue;
} else {
var temp__5720__auto___14883__$2 = cljs.core.seq.call(null,seq__14708_14870);
if(temp__5720__auto___14883__$2){
var seq__14708_14884__$1 = temp__5720__auto___14883__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14708_14884__$1)){
var c__4649__auto___14885 = cljs.core.chunk_first.call(null,seq__14708_14884__$1);
var G__14886 = cljs.core.chunk_rest.call(null,seq__14708_14884__$1);
var G__14887 = c__4649__auto___14885;
var G__14888 = cljs.core.count.call(null,c__4649__auto___14885);
var G__14889 = (0);
seq__14708_14870 = G__14886;
chunk__14709_14871 = G__14887;
count__14710_14872 = G__14888;
i__14711_14873 = G__14889;
continue;
} else {
var map__14715_14890 = cljs.core.first.call(null,seq__14708_14884__$1);
var map__14715_14891__$1 = cljs.core.__destructure_map.call(null,map__14715_14890);
var gline_14892 = cljs.core.get.call(null,map__14715_14891__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14893 = cljs.core.get.call(null,map__14715_14891__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14894 = cljs.core.get.call(null,map__14715_14891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14892], null),cljs.core.fnil.call(null,((function (seq__14708_14870,chunk__14709_14871,count__14710_14872,i__14711_14873,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14715_14890,map__14715_14891__$1,gline_14892,gcol_14893,name_14894,seq__14708_14884__$1,temp__5720__auto___14883__$2,vec__14705_14867,column_14868,column_info_14869,seq__14668_14861__$1,temp__5720__auto___14860__$1,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14893], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14818,new cljs.core.Keyword(null,"col","col",-1959363084),column_14868,new cljs.core.Keyword(null,"name","name",1843675177),name_14894], null));
});})(seq__14708_14870,chunk__14709_14871,count__14710_14872,i__14711_14873,seq__14668_14820,chunk__14669_14821,count__14670_14822,i__14671_14823,seq__14508_14716,chunk__14509_14717,count__14510_14718,i__14511_14719,map__14715_14890,map__14715_14891__$1,gline_14892,gcol_14893,name_14894,seq__14708_14884__$1,temp__5720__auto___14883__$2,vec__14705_14867,column_14868,column_info_14869,seq__14668_14861__$1,temp__5720__auto___14860__$1,vec__14665_14817,line_14818,columns_14819,seq__14508_14811__$1,temp__5720__auto___14810,inverted))
,cljs.core.sorted_map.call(null)));


var G__14895 = cljs.core.next.call(null,seq__14708_14884__$1);
var G__14896 = null;
var G__14897 = (0);
var G__14898 = (0);
seq__14708_14870 = G__14895;
chunk__14709_14871 = G__14896;
count__14710_14872 = G__14897;
i__14711_14873 = G__14898;
continue;
}
} else {
}
}
break;
}


var G__14899 = cljs.core.next.call(null,seq__14668_14861__$1);
var G__14900 = null;
var G__14901 = (0);
var G__14902 = (0);
seq__14668_14820 = G__14899;
chunk__14669_14821 = G__14900;
count__14670_14822 = G__14901;
i__14671_14823 = G__14902;
continue;
}
} else {
}
}
break;
}


var G__14903 = cljs.core.next.call(null,seq__14508_14811__$1);
var G__14904 = null;
var G__14905 = (0);
var G__14906 = (0);
seq__14508_14716 = G__14903;
chunk__14509_14717 = G__14904;
count__14510_14718 = G__14905;
i__14511_14719 = G__14906;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
