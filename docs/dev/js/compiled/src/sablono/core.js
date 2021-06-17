// Compiled by ClojureScript 1.10.866 {:optimizations :none}
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
var G__22616__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22613 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__22614 = cljs.core.seq.call(null,vec__22613);
var first__22615 = cljs.core.first.call(null,seq__22614);
var seq__22614__$1 = cljs.core.next.call(null,seq__22614);
var tag = first__22615;
var body = seq__22614__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22617__i = 0, G__22617__a = new Array(arguments.length -  0);
while (G__22617__i < G__22617__a.length) {G__22617__a[G__22617__i] = arguments[G__22617__i + 0]; ++G__22617__i;}
  args = new cljs.core.IndexedSeq(G__22617__a,0,null);
} 
return G__22616__delegate.call(this,args);};
G__22616.cljs$lang$maxFixedArity = 0;
G__22616.cljs$lang$applyTo = (function (arglist__22618){
var args = cljs.core.seq(arglist__22618);
return G__22616__delegate(args);
});
G__22616.cljs$core$IFn$_invoke$arity$variadic = G__22616__delegate;
return G__22616;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4622__auto__ = (function sablono$core$update_arglists_$_iter__22619(s__22620){
return (new cljs.core.LazySeq(null,(function (){
var s__22620__$1 = s__22620;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22620__$1);
if(temp__5720__auto__){
var s__22620__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22620__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__22620__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__22622 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__22621 = (0);
while(true){
if((i__22621 < size__4621__auto__)){
var args = cljs.core._nth.call(null,c__4620__auto__,i__22621);
cljs.core.chunk_append.call(null,b__22622,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22623 = (i__22621 + (1));
i__22621 = G__22623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22622),sablono$core$update_arglists_$_iter__22619.call(null,cljs.core.chunk_rest.call(null,s__22620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22622),null);
}
} else {
var args = cljs.core.first.call(null,s__22620__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22619.call(null,cljs.core.rest.call(null,s__22620__$2)));
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
var len__4829__auto___22629 = arguments.length;
var i__4830__auto___22630 = (0);
while(true){
if((i__4830__auto___22630 < len__4829__auto___22629)){
args__4835__auto__.push((arguments[i__4830__auto___22630]));

var G__22631 = (i__4830__auto___22630 + (1));
i__4830__auto___22630 = G__22631;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4622__auto__ = (function sablono$core$iter__22625(s__22626){
return (new cljs.core.LazySeq(null,(function (){
var s__22626__$1 = s__22626;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22626__$1);
if(temp__5720__auto__){
var s__22626__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22626__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__22626__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__22628 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__22627 = (0);
while(true){
if((i__22627 < size__4621__auto__)){
var style = cljs.core._nth.call(null,c__4620__auto__,i__22627);
cljs.core.chunk_append.call(null,b__22628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22632 = (i__22627 + (1));
i__22627 = G__22632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22628),sablono$core$iter__22625.call(null,cljs.core.chunk_rest.call(null,s__22626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22628),null);
}
} else {
var style = cljs.core.first.call(null,s__22626__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22625.call(null,cljs.core.rest.call(null,s__22626__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq22624){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22624));
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
sablono.core.link_to22633 = (function sablono$core$link_to22633(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22636 = arguments.length;
var i__4830__auto___22637 = (0);
while(true){
if((i__4830__auto___22637 < len__4829__auto___22636)){
args__4835__auto__.push((arguments[i__4830__auto___22637]));

var G__22638 = (i__4830__auto___22637 + (1));
i__4830__auto___22637 = G__22638;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to22633.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.link_to22633.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to22633.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to22633.cljs$lang$applyTo = (function (seq22634){
var G__22635 = cljs.core.first.call(null,seq22634);
var seq22634__$1 = cljs.core.next.call(null,seq22634);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22635,seq22634__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22633);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22639 = (function sablono$core$mail_to22639(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22646 = arguments.length;
var i__4830__auto___22647 = (0);
while(true){
if((i__4830__auto___22647 < len__4829__auto___22646)){
args__4835__auto__.push((arguments[i__4830__auto___22647]));

var G__22648 = (i__4830__auto___22647 + (1));
i__4830__auto___22647 = G__22648;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to22639.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.mail_to22639.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22642){
var vec__22643 = p__22642;
var content = cljs.core.nth.call(null,vec__22643,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4223__auto__ = content;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to22639.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to22639.cljs$lang$applyTo = (function (seq22640){
var G__22641 = cljs.core.first.call(null,seq22640);
var seq22640__$1 = cljs.core.next.call(null,seq22640);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22641,seq22640__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22639);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22649 = (function sablono$core$unordered_list22649(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function sablono$core$unordered_list22649_$_iter__22650(s__22651){
return (new cljs.core.LazySeq(null,(function (){
var s__22651__$1 = s__22651;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22651__$1);
if(temp__5720__auto__){
var s__22651__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22651__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__22651__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__22653 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__22652 = (0);
while(true){
if((i__22652 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__22652);
cljs.core.chunk_append.call(null,b__22653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22654 = (i__22652 + (1));
i__22652 = G__22654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22653),sablono$core$unordered_list22649_$_iter__22650.call(null,cljs.core.chunk_rest.call(null,s__22651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22653),null);
}
} else {
var x = cljs.core.first.call(null,s__22651__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22649_$_iter__22650.call(null,cljs.core.rest.call(null,s__22651__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22649);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22655 = (function sablono$core$ordered_list22655(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4622__auto__ = (function sablono$core$ordered_list22655_$_iter__22656(s__22657){
return (new cljs.core.LazySeq(null,(function (){
var s__22657__$1 = s__22657;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22657__$1);
if(temp__5720__auto__){
var s__22657__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22657__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__22657__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__22659 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__22658 = (0);
while(true){
if((i__22658 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__22658);
cljs.core.chunk_append.call(null,b__22659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22660 = (i__22658 + (1));
i__22658 = G__22660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22659),sablono$core$ordered_list22655_$_iter__22656.call(null,cljs.core.chunk_rest.call(null,s__22657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22659),null);
}
} else {
var x = cljs.core.first.call(null,s__22657__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22655_$_iter__22656.call(null,cljs.core.rest.call(null,s__22657__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22655);
/**
 * Create an image element.
 */
sablono.core.image22661 = (function sablono$core$image22661(var_args){
var G__22663 = arguments.length;
switch (G__22663) {
case 1:
return sablono.core.image22661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image22661.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image22661.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image22661.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22661);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22665_SHARP_,p2__22666_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22665_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22666_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22667_SHARP_,p2__22668_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22667_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22668_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__22670 = arguments.length;
switch (G__22670) {
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
sablono.core.color_field22672 = (function sablono$core$color_field22672(var_args){
var G__22674 = arguments.length;
switch (G__22674) {
case 1:
return sablono.core.color_field22672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field22672.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__22603__auto__);
}));

(sablono.core.color_field22672.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.color_field22672.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22672);

/**
 * Creates a date input field.
 */
sablono.core.date_field22675 = (function sablono$core$date_field22675(var_args){
var G__22677 = arguments.length;
switch (G__22677) {
case 1:
return sablono.core.date_field22675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field22675.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__22603__auto__);
}));

(sablono.core.date_field22675.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.date_field22675.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22675);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22678 = (function sablono$core$datetime_field22678(var_args){
var G__22680 = arguments.length;
switch (G__22680) {
case 1:
return sablono.core.datetime_field22678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field22678.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__22603__auto__);
}));

(sablono.core.datetime_field22678.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.datetime_field22678.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22678);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22681 = (function sablono$core$datetime_local_field22681(var_args){
var G__22683 = arguments.length;
switch (G__22683) {
case 1:
return sablono.core.datetime_local_field22681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field22681.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__22603__auto__);
}));

(sablono.core.datetime_local_field22681.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.datetime_local_field22681.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22681);

/**
 * Creates a email input field.
 */
sablono.core.email_field22684 = (function sablono$core$email_field22684(var_args){
var G__22686 = arguments.length;
switch (G__22686) {
case 1:
return sablono.core.email_field22684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field22684.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__22603__auto__);
}));

(sablono.core.email_field22684.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.email_field22684.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22684);

/**
 * Creates a file input field.
 */
sablono.core.file_field22687 = (function sablono$core$file_field22687(var_args){
var G__22689 = arguments.length;
switch (G__22689) {
case 1:
return sablono.core.file_field22687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field22687.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__22603__auto__);
}));

(sablono.core.file_field22687.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.file_field22687.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22687);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22690 = (function sablono$core$hidden_field22690(var_args){
var G__22692 = arguments.length;
switch (G__22692) {
case 1:
return sablono.core.hidden_field22690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field22690.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__22603__auto__);
}));

(sablono.core.hidden_field22690.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.hidden_field22690.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22690);

/**
 * Creates a month input field.
 */
sablono.core.month_field22693 = (function sablono$core$month_field22693(var_args){
var G__22695 = arguments.length;
switch (G__22695) {
case 1:
return sablono.core.month_field22693.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22693.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field22693.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__22603__auto__);
}));

(sablono.core.month_field22693.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.month_field22693.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22693);

/**
 * Creates a number input field.
 */
sablono.core.number_field22696 = (function sablono$core$number_field22696(var_args){
var G__22698 = arguments.length;
switch (G__22698) {
case 1:
return sablono.core.number_field22696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field22696.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__22603__auto__);
}));

(sablono.core.number_field22696.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.number_field22696.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22696);

/**
 * Creates a password input field.
 */
sablono.core.password_field22699 = (function sablono$core$password_field22699(var_args){
var G__22701 = arguments.length;
switch (G__22701) {
case 1:
return sablono.core.password_field22699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field22699.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__22603__auto__);
}));

(sablono.core.password_field22699.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.password_field22699.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22699);

/**
 * Creates a range input field.
 */
sablono.core.range_field22702 = (function sablono$core$range_field22702(var_args){
var G__22704 = arguments.length;
switch (G__22704) {
case 1:
return sablono.core.range_field22702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field22702.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__22603__auto__);
}));

(sablono.core.range_field22702.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.range_field22702.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22702);

/**
 * Creates a search input field.
 */
sablono.core.search_field22705 = (function sablono$core$search_field22705(var_args){
var G__22707 = arguments.length;
switch (G__22707) {
case 1:
return sablono.core.search_field22705.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field22705.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__22603__auto__);
}));

(sablono.core.search_field22705.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.search_field22705.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22705);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22708 = (function sablono$core$tel_field22708(var_args){
var G__22710 = arguments.length;
switch (G__22710) {
case 1:
return sablono.core.tel_field22708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field22708.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__22603__auto__);
}));

(sablono.core.tel_field22708.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.tel_field22708.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22708);

/**
 * Creates a text input field.
 */
sablono.core.text_field22711 = (function sablono$core$text_field22711(var_args){
var G__22713 = arguments.length;
switch (G__22713) {
case 1:
return sablono.core.text_field22711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field22711.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__22603__auto__);
}));

(sablono.core.text_field22711.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.text_field22711.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22711);

/**
 * Creates a time input field.
 */
sablono.core.time_field22714 = (function sablono$core$time_field22714(var_args){
var G__22716 = arguments.length;
switch (G__22716) {
case 1:
return sablono.core.time_field22714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field22714.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__22603__auto__);
}));

(sablono.core.time_field22714.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.time_field22714.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22714);

/**
 * Creates a url input field.
 */
sablono.core.url_field22717 = (function sablono$core$url_field22717(var_args){
var G__22719 = arguments.length;
switch (G__22719) {
case 1:
return sablono.core.url_field22717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field22717.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__22603__auto__);
}));

(sablono.core.url_field22717.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.url_field22717.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22717);

/**
 * Creates a week input field.
 */
sablono.core.week_field22720 = (function sablono$core$week_field22720(var_args){
var G__22722 = arguments.length;
switch (G__22722) {
case 1:
return sablono.core.week_field22720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field22720.cljs$core$IFn$_invoke$arity$1 = (function (name__22603__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__22603__auto__);
}));

(sablono.core.week_field22720.cljs$core$IFn$_invoke$arity$2 = (function (name__22603__auto__,value__22604__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__22603__auto__,value__22604__auto__);
}));

(sablono.core.week_field22720.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22720);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22740 = (function sablono$core$check_box22740(var_args){
var G__22742 = arguments.length;
switch (G__22742) {
case 1:
return sablono.core.check_box22740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22740.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box22740.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box22740.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box22740.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box22740.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22740);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22744 = (function sablono$core$radio_button22744(var_args){
var G__22746 = arguments.length;
switch (G__22746) {
case 1:
return sablono.core.radio_button22744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22744.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button22744.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button22744.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button22744.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button22744.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22744);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22748 = (function sablono$core$select_options22748(coll){
var iter__4622__auto__ = (function sablono$core$select_options22748_$_iter__22749(s__22750){
return (new cljs.core.LazySeq(null,(function (){
var s__22750__$1 = s__22750;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22750__$1);
if(temp__5720__auto__){
var s__22750__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22750__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__22750__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__22752 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__22751 = (0);
while(true){
if((i__22751 < size__4621__auto__)){
var x = cljs.core._nth.call(null,c__4620__auto__,i__22751);
cljs.core.chunk_append.call(null,b__22752,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22753 = x;
var text = cljs.core.nth.call(null,vec__22753,(0),null);
var val = cljs.core.nth.call(null,vec__22753,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22753,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22748.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22759 = (i__22751 + (1));
i__22751 = G__22759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22752),sablono$core$select_options22748_$_iter__22749.call(null,cljs.core.chunk_rest.call(null,s__22750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22752),null);
}
} else {
var x = cljs.core.first.call(null,s__22750__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22756 = x;
var text = cljs.core.nth.call(null,vec__22756,(0),null);
var val = cljs.core.nth.call(null,vec__22756,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22756,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22748.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22748_$_iter__22749.call(null,cljs.core.rest.call(null,s__22750__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22748);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22760 = (function sablono$core$drop_down22760(var_args){
var G__22762 = arguments.length;
switch (G__22762) {
case 2:
return sablono.core.drop_down22760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22760.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down22760.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22760.call(null,name,options,null);
}));

(sablono.core.drop_down22760.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down22760.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22760);
/**
 * Creates a text area element.
 */
sablono.core.text_area22764 = (function sablono$core$text_area22764(var_args){
var G__22766 = arguments.length;
switch (G__22766) {
case 1:
return sablono.core.text_area22764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area22764.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area22764.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4223__auto__ = value;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area22764.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22764);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22768 = (function sablono$core$label22768(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22768);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22769 = (function sablono$core$submit_button22769(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22769);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22770 = (function sablono$core$reset_button22770(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22770);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22771 = (function sablono$core$form_to22771(var_args){
var args__4835__auto__ = [];
var len__4829__auto___22778 = arguments.length;
var i__4830__auto___22779 = (0);
while(true){
if((i__4830__auto___22779 < len__4829__auto___22778)){
args__4835__auto__.push((arguments[i__4830__auto___22779]));

var G__22780 = (i__4830__auto___22779 + (1));
i__4830__auto___22779 = G__22780;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to22771.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sablono.core.form_to22771.cljs$core$IFn$_invoke$arity$variadic = (function (p__22774,body){
var vec__22775 = p__22774;
var method = cljs.core.nth.call(null,vec__22775,(0),null);
var action = cljs.core.nth.call(null,vec__22775,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to22771.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to22771.cljs$lang$applyTo = (function (seq22772){
var G__22773 = cljs.core.first.call(null,seq22772);
var seq22772__$1 = cljs.core.next.call(null,seq22772);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22773,seq22772__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22771);

//# sourceMappingURL=core.js.map
