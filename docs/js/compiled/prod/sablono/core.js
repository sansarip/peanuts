// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25904__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25901 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25902 = cljs.core.seq.call(null,vec__25901);
var first__25903 = cljs.core.first.call(null,seq__25902);
var seq__25902__$1 = cljs.core.next.call(null,seq__25902);
var tag = first__25903;
var body = seq__25902__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25905__i = 0, G__25905__a = new Array(arguments.length -  0);
while (G__25905__i < G__25905__a.length) {G__25905__a[G__25905__i] = arguments[G__25905__i + 0]; ++G__25905__i;}
  args = new cljs.core.IndexedSeq(G__25905__a,0,null);
} 
return G__25904__delegate.call(this,args);};
G__25904.cljs$lang$maxFixedArity = 0;
G__25904.cljs$lang$applyTo = (function (arglist__25906){
var args = cljs.core.seq(arglist__25906);
return G__25904__delegate(args);
});
G__25904.cljs$core$IFn$_invoke$arity$variadic = G__25904__delegate;
return G__25904;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4622__auto__ = (function sablono$core$update_arglists_$_iter__25907(s__25908){
return (new cljs.core.LazySeq(null,(function (){
var s__25908__$1 = s__25908;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25908__$1);
if(temp__5720__auto__){
var s__25908__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25908__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25908__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25910 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25909 = (0);
while(true){
if((i__25909 < size__4621__auto__)){
var args = cljs.core._nth.call(null,c__4620__auto__,i__25909);
cljs.core.chunk_append.call(null,b__25910,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25911 = (i__25909 + (1));
i__25909 = G__25911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25910),sablono$core$update_arglists_$_iter__25907.call(null,cljs.core.chunk_rest.call(null,s__25908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25910),null);
}
} else {
var args = cljs.core.first.call(null,s__25908__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25907.call(null,cljs.core.rest.call(null,s__25908__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25917 = arguments.length;
var i__4830__auto___25918 = (0);
while(true){
if((i__4830__auto___25918 < len__4829__auto___25917)){
args__4835__auto__.push((arguments[i__4830__auto___25918]));

var G__25919 = (i__4830__auto___25918 + (1));
i__4830__auto___25918 = G__25919;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4622__auto__ = (function sablono$core$iter__25913(s__25914){
return (new cljs.core.LazySeq(null,(function (){
var s__25914__$1 = s__25914;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25914__$1);
if(temp__5720__auto__){
var s__25914__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25914__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25914__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25916 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25915 = (0);
while(true){
if((i__25915 < size__4621__auto__)){
var style = cljs.core._nth.call(null,c__4620__auto__,i__25915);
cljs.core.chunk_append.call(null,b__25916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25920 = (i__25915 + (1));
i__25915 = G__25920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25916),sablono$core$iter__25913.call(null,cljs.core.chunk_rest.call(null,s__25914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25916),null);
}
} else {
var style = cljs.core.first.call(null,s__25914__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25913.call(null,cljs.core.rest.call(null,s__25914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq25912){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25912));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25921 = (function sablono$core$link_to25921(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25924 = arguments.length;
var i__4830__auto___25925 = (0);
while(true){
if((i__4830__auto___25925 < len__4829__auto___25924)){
args__4835__auto__.push((arguments[i__4830__auto___25925]));

var G__25926 = (i__4830__auto___25925 + (1));
i__4830__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25921.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.link_to25921.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to25921.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to25921.cljs$lang$applyTo = (function (seq25922){
var G__25923 = cljs.core.first.call(null,seq25922);
var seq25922__$1 = cljs.core.next.call(null,seq25922);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25923,seq25922__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25921);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25927 = (function sablono$core$mail_to25927(var_args){
var args__4835__auto__ = [];
var len__4829__auto___25934 = arguments.length;
var i__4830__auto___25935 = (0);
while(true){
if((i__4830__auto___25935 < len__4829__auto___25934)){
args__4835__auto__.push((arguments[i__4830__auto___25935]));

var G__25936 = (i__4830__auto___25935 + (1));
i__4830__auto___25935 = G__25936;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25927.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.mail_to25927.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25930){
var vec__25931 = p__25930;
var content = cljs.core.nth.call(null,vec__25931,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4223__auto__ = content;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to25927.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to25927.cljs$lang$applyTo = (function (seq25928){
var G__25929 = cljs.core.first.call(null,seq25928);
var seq25928__$1 = cljs.core.next.call(null,seq25928);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25929,seq25928__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25927);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25937 = (function sablono$core$unordered_list25937(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function sablono$core$unordered_list25937_$_iter__25938(s__25939){
return (new cljs.core.LazySeq(null,(function (){
var s__25939__$1 = s__25939;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25939__$1);
if(temp__5720__auto__){
var s__25939__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25939__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25939__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25941 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25940 = (0);
while(true){
if((i__25940 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25940);
cljs.core.chunk_append.call(null,b__25941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25942 = (i__25940 + (1));
i__25940 = G__25942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25941),sablono$core$unordered_list25937_$_iter__25938.call(null,cljs.core.chunk_rest.call(null,s__25939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25941),null);
}
} else {
var x = cljs.core.first.call(null,s__25939__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25937_$_iter__25938.call(null,cljs.core.rest.call(null,s__25939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25937);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25943 = (function sablono$core$ordered_list25943(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4622__auto__ = (function sablono$core$ordered_list25943_$_iter__25944(s__25945){
return (new cljs.core.LazySeq(null,(function (){
var s__25945__$1 = s__25945;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25945__$1);
if(temp__5720__auto__){
var s__25945__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25945__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__25945__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__25947 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__25946 = (0);
while(true){
if((i__25946 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__25946);
cljs.core.chunk_append.call(null,b__25947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25948 = (i__25946 + (1));
i__25946 = G__25948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25947),sablono$core$ordered_list25943_$_iter__25944.call(null,cljs.core.chunk_rest.call(null,s__25945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25947),null);
}
} else {
var x = cljs.core.first.call(null,s__25945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25943_$_iter__25944.call(null,cljs.core.rest.call(null,s__25945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25943);
/**
 * Create an image element.
 */
sablono.core.image25949 = (function sablono$core$image25949(var_args){
var G__25951 = arguments.length;
switch (G__25951) {
case 1:
return sablono.core.image25949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image25949.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image25949.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image25949.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25949);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25953_SHARP_,p2__25954_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25953_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25954_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25955_SHARP_,p2__25956_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25955_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25956_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__25958 = arguments.length;
switch (G__25958) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field25960 = (function sablono$core$color_field25960(var_args){
var G__25962 = arguments.length;
switch (G__25962) {
case 1:
return sablono.core.color_field25960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field25960.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25891__auto__);
}));

(sablono.core.color_field25960.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.color_field25960.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25960);

/**
 * Creates a date input field.
 */
sablono.core.date_field25963 = (function sablono$core$date_field25963(var_args){
var G__25965 = arguments.length;
switch (G__25965) {
case 1:
return sablono.core.date_field25963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field25963.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25891__auto__);
}));

(sablono.core.date_field25963.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.date_field25963.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25963);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25966 = (function sablono$core$datetime_field25966(var_args){
var G__25968 = arguments.length;
switch (G__25968) {
case 1:
return sablono.core.datetime_field25966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field25966.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25891__auto__);
}));

(sablono.core.datetime_field25966.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.datetime_field25966.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25966);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25969 = (function sablono$core$datetime_local_field25969(var_args){
var G__25971 = arguments.length;
switch (G__25971) {
case 1:
return sablono.core.datetime_local_field25969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field25969.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25891__auto__);
}));

(sablono.core.datetime_local_field25969.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.datetime_local_field25969.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25969);

/**
 * Creates a email input field.
 */
sablono.core.email_field25972 = (function sablono$core$email_field25972(var_args){
var G__25974 = arguments.length;
switch (G__25974) {
case 1:
return sablono.core.email_field25972.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25972.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field25972.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25891__auto__);
}));

(sablono.core.email_field25972.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.email_field25972.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25972);

/**
 * Creates a file input field.
 */
sablono.core.file_field25975 = (function sablono$core$file_field25975(var_args){
var G__25977 = arguments.length;
switch (G__25977) {
case 1:
return sablono.core.file_field25975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field25975.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25891__auto__);
}));

(sablono.core.file_field25975.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.file_field25975.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25975);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25978 = (function sablono$core$hidden_field25978(var_args){
var G__25980 = arguments.length;
switch (G__25980) {
case 1:
return sablono.core.hidden_field25978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field25978.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25891__auto__);
}));

(sablono.core.hidden_field25978.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.hidden_field25978.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25978);

/**
 * Creates a month input field.
 */
sablono.core.month_field25981 = (function sablono$core$month_field25981(var_args){
var G__25983 = arguments.length;
switch (G__25983) {
case 1:
return sablono.core.month_field25981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field25981.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25891__auto__);
}));

(sablono.core.month_field25981.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.month_field25981.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25981);

/**
 * Creates a number input field.
 */
sablono.core.number_field25984 = (function sablono$core$number_field25984(var_args){
var G__25986 = arguments.length;
switch (G__25986) {
case 1:
return sablono.core.number_field25984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field25984.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25891__auto__);
}));

(sablono.core.number_field25984.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.number_field25984.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25984);

/**
 * Creates a password input field.
 */
sablono.core.password_field25987 = (function sablono$core$password_field25987(var_args){
var G__25989 = arguments.length;
switch (G__25989) {
case 1:
return sablono.core.password_field25987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field25987.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25891__auto__);
}));

(sablono.core.password_field25987.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.password_field25987.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25987);

/**
 * Creates a range input field.
 */
sablono.core.range_field25990 = (function sablono$core$range_field25990(var_args){
var G__25992 = arguments.length;
switch (G__25992) {
case 1:
return sablono.core.range_field25990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field25990.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25891__auto__);
}));

(sablono.core.range_field25990.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.range_field25990.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25990);

/**
 * Creates a search input field.
 */
sablono.core.search_field25993 = (function sablono$core$search_field25993(var_args){
var G__25995 = arguments.length;
switch (G__25995) {
case 1:
return sablono.core.search_field25993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field25993.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25891__auto__);
}));

(sablono.core.search_field25993.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.search_field25993.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25993);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25996 = (function sablono$core$tel_field25996(var_args){
var G__25998 = arguments.length;
switch (G__25998) {
case 1:
return sablono.core.tel_field25996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field25996.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25891__auto__);
}));

(sablono.core.tel_field25996.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.tel_field25996.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25996);

/**
 * Creates a text input field.
 */
sablono.core.text_field25999 = (function sablono$core$text_field25999(var_args){
var G__26001 = arguments.length;
switch (G__26001) {
case 1:
return sablono.core.text_field25999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field25999.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25891__auto__);
}));

(sablono.core.text_field25999.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.text_field25999.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25999);

/**
 * Creates a time input field.
 */
sablono.core.time_field26002 = (function sablono$core$time_field26002(var_args){
var G__26004 = arguments.length;
switch (G__26004) {
case 1:
return sablono.core.time_field26002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field26002.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25891__auto__);
}));

(sablono.core.time_field26002.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.time_field26002.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26002);

/**
 * Creates a url input field.
 */
sablono.core.url_field26005 = (function sablono$core$url_field26005(var_args){
var G__26007 = arguments.length;
switch (G__26007) {
case 1:
return sablono.core.url_field26005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field26005.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25891__auto__);
}));

(sablono.core.url_field26005.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.url_field26005.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26005);

/**
 * Creates a week input field.
 */
sablono.core.week_field26008 = (function sablono$core$week_field26008(var_args){
var G__26010 = arguments.length;
switch (G__26010) {
case 1:
return sablono.core.week_field26008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field26008.cljs$core$IFn$_invoke$arity$1 = (function (name__25891__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25891__auto__);
}));

(sablono.core.week_field26008.cljs$core$IFn$_invoke$arity$2 = (function (name__25891__auto__,value__25892__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25891__auto__,value__25892__auto__);
}));

(sablono.core.week_field26008.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26008);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26028 = (function sablono$core$check_box26028(var_args){
var G__26030 = arguments.length;
switch (G__26030) {
case 1:
return sablono.core.check_box26028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26028.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box26028.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box26028.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box26028.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box26028.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26028);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26032 = (function sablono$core$radio_button26032(var_args){
var G__26034 = arguments.length;
switch (G__26034) {
case 1:
return sablono.core.radio_button26032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26032.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button26032.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button26032.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button26032.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button26032.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26032);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26036 = (function sablono$core$select_options26036(coll){
var iter__4622__auto__ = (function sablono$core$select_options26036_$_iter__26037(s__26038){
return (new cljs.core.LazySeq(null,(function (){
var s__26038__$1 = s__26038;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26038__$1);
if(temp__5720__auto__){
var s__26038__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26038__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__26038__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__26040 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__26039 = (0);
while(true){
if((i__26039 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__26039);
cljs.core.chunk_append.call(null,b__26040,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26041 = x;
var text = cljs.core.nth.call(null,vec__26041,(0),null);
var val = cljs.core.nth.call(null,vec__26041,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26041,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26036.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26047 = (i__26039 + (1));
i__26039 = G__26047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26040),sablono$core$select_options26036_$_iter__26037.call(null,cljs.core.chunk_rest.call(null,s__26038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26040),null);
}
} else {
var x = cljs.core.first.call(null,s__26038__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26044 = x;
var text = cljs.core.nth.call(null,vec__26044,(0),null);
var val = cljs.core.nth.call(null,vec__26044,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26044,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26036.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26036_$_iter__26037.call(null,cljs.core.rest.call(null,s__26038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26036);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26048 = (function sablono$core$drop_down26048(var_args){
var G__26050 = arguments.length;
switch (G__26050) {
case 2:
return sablono.core.drop_down26048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26048.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down26048.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26048.call(null,name,options,null);
}));

(sablono.core.drop_down26048.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down26048.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26048);
/**
 * Creates a text area element.
 */
sablono.core.text_area26052 = (function sablono$core$text_area26052(var_args){
var G__26054 = arguments.length;
switch (G__26054) {
case 1:
return sablono.core.text_area26052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area26052.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area26052.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area26052.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26052);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26056 = (function sablono$core$label26056(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26056);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26057 = (function sablono$core$submit_button26057(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26057);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26058 = (function sablono$core$reset_button26058(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26058);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26059 = (function sablono$core$form_to26059(var_args){
var args__4835__auto__ = [];
var len__4829__auto___26066 = arguments.length;
var i__4830__auto___26067 = (0);
while(true){
if((i__4830__auto___26067 < len__4829__auto___26066)){
args__4835__auto__.push((arguments[i__4830__auto___26067]));

var G__26068 = (i__4830__auto___26067 + (1));
i__4830__auto___26067 = G__26068;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26059.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.form_to26059.cljs$core$IFn$_invoke$arity$variadic = (function (p__26062,body){
var vec__26063 = p__26062;
var method = cljs.core.nth.call(null,vec__26063,(0),null);
var action = cljs.core.nth.call(null,vec__26063,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to26059.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to26059.cljs$lang$applyTo = (function (seq26060){
var G__26061 = cljs.core.first.call(null,seq26060);
var seq26060__$1 = cljs.core.next.call(null,seq26060);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26061,seq26060__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26059);
