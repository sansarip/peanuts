// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('peanuts.styles');
goog.require('cljs.core');
goog.require('spade.core');
peanuts.styles.color_palette = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"primary","primary",817773892),"#131F33",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"#CCDEFF",new cljs.core.Keyword(null,"tertiary","tertiary",-1163116473),"#F7976E",new cljs.core.Keyword(null,"tertiary-alt","tertiary-alt",1161101310),"#CF6F46",new cljs.core.Keyword(null,"quaternary","quaternary",-1146540002),"#FFF8BE"], null);
peanuts.styles.editor_class_factory$ = (function peanuts$styles$editor_class_factory$(style_name26185,params26186){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),style_name26185,new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".CodeMirror",".CodeMirror",2113808582),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".CodeMirror-gutters",".CodeMirror-gutters",-1940816922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".CodeMirror-linenumber",".CodeMirror-linenumber",222764025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".CodeMirror-line>span",".CodeMirror-line>span",1508946881),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"quaternary","quaternary",-1146540002).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"2px","2px",-1697779893)], null)], null)], null))], null);
});

var factory_name26187_26188 = spade.util.factory__GT_name.call(null,peanuts.styles.editor_class_factory$);
peanuts.styles.editor_class = spade.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"global","global",93595047),factory_name26187_26188,peanuts.styles.editor_class_factory$,null);
peanuts.styles.result_view_class_factory$ = (function peanuts$styles$result_view_class_factory$(style_name26189,params26190){
var style26192 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name26189)].join(''),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"grid-column-gap","grid-column-gap",-1342199344),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette),new cljs.core.Keyword(null,"1em","1em",576613656),"auto",new cljs.core.Keyword(null,".5em",".5em",-1509413833),new cljs.core.Keyword(null,"1em","1em",576613656),new cljs.core.Keyword(null,"grid","grid",402978600),"auto 1fr",["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette))].join(''),"4px"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".prompt",".prompt",1407212183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hiccup",".hiccup",-1003942057),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,".5em",".5em",-1509413833)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".other",".other",89078617),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"quaternary","quaternary",-1146540002).cljs$core$IFn$_invoke$arity$1(peanuts.styles.color_palette),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px"], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css.call(null,style26192),new cljs.core.Keyword(null,"name","name",1843675177),style_name26189], null);
});

var factory_name26191_26194 = spade.util.factory__GT_name.call(null,peanuts.styles.result_view_class_factory$);
peanuts.styles.result_view_class = (function peanuts$styles$result_view_class(){
return spade.runtime.ensure_style_BANG_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),factory_name26191_26194,peanuts.styles.result_view_class_factory$,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=styles.js.map
