goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19243 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19243(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19249 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19249(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17839 = coll;
var G__17840 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17839,G__17840) : shadow.dom.lazy_native_coll_seq.call(null,G__17839,G__17840));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17870 = arguments.length;
switch (G__17870) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17882 = arguments.length;
switch (G__17882) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17888 = arguments.length;
switch (G__17888) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17902 = arguments.length;
switch (G__17902) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17910 = arguments.length;
switch (G__17910) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17921 = arguments.length;
switch (G__17921) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17933){if((e17933 instanceof Object)){
var e = e17933;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17933;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17952 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17953 = null;
var count__17954 = (0);
var i__17955 = (0);
while(true){
if((i__17955 < count__17954)){
var el = chunk__17953.cljs$core$IIndexed$_nth$arity$2(null,i__17955);
var handler_19296__$1 = ((function (seq__17952,chunk__17953,count__17954,i__17955,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17952,chunk__17953,count__17954,i__17955,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19296__$1);


var G__19298 = seq__17952;
var G__19299 = chunk__17953;
var G__19300 = count__17954;
var G__19301 = (i__17955 + (1));
seq__17952 = G__19298;
chunk__17953 = G__19299;
count__17954 = G__19300;
i__17955 = G__19301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17952);
if(temp__5804__auto__){
var seq__17952__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17952__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17952__$1);
var G__19302 = cljs.core.chunk_rest(seq__17952__$1);
var G__19303 = c__5568__auto__;
var G__19304 = cljs.core.count(c__5568__auto__);
var G__19305 = (0);
seq__17952 = G__19302;
chunk__17953 = G__19303;
count__17954 = G__19304;
i__17955 = G__19305;
continue;
} else {
var el = cljs.core.first(seq__17952__$1);
var handler_19306__$1 = ((function (seq__17952,chunk__17953,count__17954,i__17955,el,seq__17952__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17952,chunk__17953,count__17954,i__17955,el,seq__17952__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19306__$1);


var G__19307 = cljs.core.next(seq__17952__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__17952 = G__19307;
chunk__17953 = G__19308;
count__17954 = G__19309;
i__17955 = G__19310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18005 = arguments.length;
switch (G__18005) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18054 = cljs.core.seq(events);
var chunk__18055 = null;
var count__18056 = (0);
var i__18057 = (0);
while(true){
if((i__18057 < count__18056)){
var vec__18077 = chunk__18055.cljs$core$IIndexed$_nth$arity$2(null,i__18057);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18077,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19313 = seq__18054;
var G__19314 = chunk__18055;
var G__19315 = count__18056;
var G__19316 = (i__18057 + (1));
seq__18054 = G__19313;
chunk__18055 = G__19314;
count__18056 = G__19315;
i__18057 = G__19316;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18054);
if(temp__5804__auto__){
var seq__18054__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18054__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18054__$1);
var G__19323 = cljs.core.chunk_rest(seq__18054__$1);
var G__19324 = c__5568__auto__;
var G__19325 = cljs.core.count(c__5568__auto__);
var G__19326 = (0);
seq__18054 = G__19323;
chunk__18055 = G__19324;
count__18056 = G__19325;
i__18057 = G__19326;
continue;
} else {
var vec__18082 = cljs.core.first(seq__18054__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18082,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19327 = cljs.core.next(seq__18054__$1);
var G__19328 = null;
var G__19329 = (0);
var G__19330 = (0);
seq__18054 = G__19327;
chunk__18055 = G__19328;
count__18056 = G__19329;
i__18057 = G__19330;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18096 = cljs.core.seq(styles);
var chunk__18097 = null;
var count__18098 = (0);
var i__18099 = (0);
while(true){
if((i__18099 < count__18098)){
var vec__18115 = chunk__18097.cljs$core$IIndexed$_nth$arity$2(null,i__18099);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18115,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19331 = seq__18096;
var G__19332 = chunk__18097;
var G__19333 = count__18098;
var G__19334 = (i__18099 + (1));
seq__18096 = G__19331;
chunk__18097 = G__19332;
count__18098 = G__19333;
i__18099 = G__19334;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18096);
if(temp__5804__auto__){
var seq__18096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18096__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18096__$1);
var G__19335 = cljs.core.chunk_rest(seq__18096__$1);
var G__19336 = c__5568__auto__;
var G__19337 = cljs.core.count(c__5568__auto__);
var G__19338 = (0);
seq__18096 = G__19335;
chunk__18097 = G__19336;
count__18098 = G__19337;
i__18099 = G__19338;
continue;
} else {
var vec__18124 = cljs.core.first(seq__18096__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19339 = cljs.core.next(seq__18096__$1);
var G__19340 = null;
var G__19341 = (0);
var G__19342 = (0);
seq__18096 = G__19339;
chunk__18097 = G__19340;
count__18098 = G__19341;
i__18099 = G__19342;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18133_19343 = key;
var G__18133_19344__$1 = (((G__18133_19343 instanceof cljs.core.Keyword))?G__18133_19343.fqn:null);
switch (G__18133_19344__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19348 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19348,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19348,"aria-");
}
})())){
el.setAttribute(ks_19348,value);
} else {
(el[ks_19348] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18168){
var map__18169 = p__18168;
var map__18169__$1 = cljs.core.__destructure_map(map__18169);
var props = map__18169__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18173 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18179 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18179,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18179;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18185 = arguments.length;
switch (G__18185) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18205){
var vec__18213 = p__18205;
var seq__18214 = cljs.core.seq(vec__18213);
var first__18215 = cljs.core.first(seq__18214);
var seq__18214__$1 = cljs.core.next(seq__18214);
var nn = first__18215;
var first__18215__$1 = cljs.core.first(seq__18214__$1);
var seq__18214__$2 = cljs.core.next(seq__18214__$1);
var np = first__18215__$1;
var nc = seq__18214__$2;
var node = vec__18213;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18238 = nn;
var G__18239 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18238,G__18239) : create_fn.call(null,G__18238,G__18239));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18245 = nn;
var G__18246 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18245,G__18246) : create_fn.call(null,G__18245,G__18246));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18262 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18262,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18262,(1),null);
var seq__18266_19378 = cljs.core.seq(node_children);
var chunk__18267_19379 = null;
var count__18268_19380 = (0);
var i__18269_19381 = (0);
while(true){
if((i__18269_19381 < count__18268_19380)){
var child_struct_19382 = chunk__18267_19379.cljs$core$IIndexed$_nth$arity$2(null,i__18269_19381);
var children_19383 = shadow.dom.dom_node(child_struct_19382);
if(cljs.core.seq_QMARK_(children_19383)){
var seq__18339_19384 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19383));
var chunk__18341_19385 = null;
var count__18342_19386 = (0);
var i__18343_19387 = (0);
while(true){
if((i__18343_19387 < count__18342_19386)){
var child_19388 = chunk__18341_19385.cljs$core$IIndexed$_nth$arity$2(null,i__18343_19387);
if(cljs.core.truth_(child_19388)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19388);


var G__19389 = seq__18339_19384;
var G__19390 = chunk__18341_19385;
var G__19391 = count__18342_19386;
var G__19392 = (i__18343_19387 + (1));
seq__18339_19384 = G__19389;
chunk__18341_19385 = G__19390;
count__18342_19386 = G__19391;
i__18343_19387 = G__19392;
continue;
} else {
var G__19394 = seq__18339_19384;
var G__19395 = chunk__18341_19385;
var G__19396 = count__18342_19386;
var G__19397 = (i__18343_19387 + (1));
seq__18339_19384 = G__19394;
chunk__18341_19385 = G__19395;
count__18342_19386 = G__19396;
i__18343_19387 = G__19397;
continue;
}
} else {
var temp__5804__auto___19398 = cljs.core.seq(seq__18339_19384);
if(temp__5804__auto___19398){
var seq__18339_19399__$1 = temp__5804__auto___19398;
if(cljs.core.chunked_seq_QMARK_(seq__18339_19399__$1)){
var c__5568__auto___19401 = cljs.core.chunk_first(seq__18339_19399__$1);
var G__19402 = cljs.core.chunk_rest(seq__18339_19399__$1);
var G__19403 = c__5568__auto___19401;
var G__19404 = cljs.core.count(c__5568__auto___19401);
var G__19405 = (0);
seq__18339_19384 = G__19402;
chunk__18341_19385 = G__19403;
count__18342_19386 = G__19404;
i__18343_19387 = G__19405;
continue;
} else {
var child_19407 = cljs.core.first(seq__18339_19399__$1);
if(cljs.core.truth_(child_19407)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19407);


var G__19408 = cljs.core.next(seq__18339_19399__$1);
var G__19409 = null;
var G__19410 = (0);
var G__19411 = (0);
seq__18339_19384 = G__19408;
chunk__18341_19385 = G__19409;
count__18342_19386 = G__19410;
i__18343_19387 = G__19411;
continue;
} else {
var G__19414 = cljs.core.next(seq__18339_19399__$1);
var G__19415 = null;
var G__19416 = (0);
var G__19417 = (0);
seq__18339_19384 = G__19414;
chunk__18341_19385 = G__19415;
count__18342_19386 = G__19416;
i__18343_19387 = G__19417;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19383);
}


var G__19418 = seq__18266_19378;
var G__19419 = chunk__18267_19379;
var G__19420 = count__18268_19380;
var G__19421 = (i__18269_19381 + (1));
seq__18266_19378 = G__19418;
chunk__18267_19379 = G__19419;
count__18268_19380 = G__19420;
i__18269_19381 = G__19421;
continue;
} else {
var temp__5804__auto___19422 = cljs.core.seq(seq__18266_19378);
if(temp__5804__auto___19422){
var seq__18266_19423__$1 = temp__5804__auto___19422;
if(cljs.core.chunked_seq_QMARK_(seq__18266_19423__$1)){
var c__5568__auto___19424 = cljs.core.chunk_first(seq__18266_19423__$1);
var G__19426 = cljs.core.chunk_rest(seq__18266_19423__$1);
var G__19427 = c__5568__auto___19424;
var G__19428 = cljs.core.count(c__5568__auto___19424);
var G__19429 = (0);
seq__18266_19378 = G__19426;
chunk__18267_19379 = G__19427;
count__18268_19380 = G__19428;
i__18269_19381 = G__19429;
continue;
} else {
var child_struct_19430 = cljs.core.first(seq__18266_19423__$1);
var children_19431 = shadow.dom.dom_node(child_struct_19430);
if(cljs.core.seq_QMARK_(children_19431)){
var seq__18355_19432 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19431));
var chunk__18357_19433 = null;
var count__18358_19434 = (0);
var i__18359_19435 = (0);
while(true){
if((i__18359_19435 < count__18358_19434)){
var child_19437 = chunk__18357_19433.cljs$core$IIndexed$_nth$arity$2(null,i__18359_19435);
if(cljs.core.truth_(child_19437)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19437);


var G__19438 = seq__18355_19432;
var G__19439 = chunk__18357_19433;
var G__19440 = count__18358_19434;
var G__19441 = (i__18359_19435 + (1));
seq__18355_19432 = G__19438;
chunk__18357_19433 = G__19439;
count__18358_19434 = G__19440;
i__18359_19435 = G__19441;
continue;
} else {
var G__19442 = seq__18355_19432;
var G__19443 = chunk__18357_19433;
var G__19444 = count__18358_19434;
var G__19445 = (i__18359_19435 + (1));
seq__18355_19432 = G__19442;
chunk__18357_19433 = G__19443;
count__18358_19434 = G__19444;
i__18359_19435 = G__19445;
continue;
}
} else {
var temp__5804__auto___19446__$1 = cljs.core.seq(seq__18355_19432);
if(temp__5804__auto___19446__$1){
var seq__18355_19448__$1 = temp__5804__auto___19446__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18355_19448__$1)){
var c__5568__auto___19449 = cljs.core.chunk_first(seq__18355_19448__$1);
var G__19450 = cljs.core.chunk_rest(seq__18355_19448__$1);
var G__19451 = c__5568__auto___19449;
var G__19452 = cljs.core.count(c__5568__auto___19449);
var G__19453 = (0);
seq__18355_19432 = G__19450;
chunk__18357_19433 = G__19451;
count__18358_19434 = G__19452;
i__18359_19435 = G__19453;
continue;
} else {
var child_19454 = cljs.core.first(seq__18355_19448__$1);
if(cljs.core.truth_(child_19454)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19454);


var G__19455 = cljs.core.next(seq__18355_19448__$1);
var G__19456 = null;
var G__19457 = (0);
var G__19458 = (0);
seq__18355_19432 = G__19455;
chunk__18357_19433 = G__19456;
count__18358_19434 = G__19457;
i__18359_19435 = G__19458;
continue;
} else {
var G__19460 = cljs.core.next(seq__18355_19448__$1);
var G__19461 = null;
var G__19462 = (0);
var G__19463 = (0);
seq__18355_19432 = G__19460;
chunk__18357_19433 = G__19461;
count__18358_19434 = G__19462;
i__18359_19435 = G__19463;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19431);
}


var G__19464 = cljs.core.next(seq__18266_19423__$1);
var G__19465 = null;
var G__19466 = (0);
var G__19467 = (0);
seq__18266_19378 = G__19464;
chunk__18267_19379 = G__19465;
count__18268_19380 = G__19466;
i__18269_19381 = G__19467;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18386 = cljs.core.seq(node);
var chunk__18387 = null;
var count__18388 = (0);
var i__18389 = (0);
while(true){
if((i__18389 < count__18388)){
var n = chunk__18387.cljs$core$IIndexed$_nth$arity$2(null,i__18389);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19482 = seq__18386;
var G__19483 = chunk__18387;
var G__19484 = count__18388;
var G__19485 = (i__18389 + (1));
seq__18386 = G__19482;
chunk__18387 = G__19483;
count__18388 = G__19484;
i__18389 = G__19485;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18386);
if(temp__5804__auto__){
var seq__18386__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18386__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18386__$1);
var G__19486 = cljs.core.chunk_rest(seq__18386__$1);
var G__19487 = c__5568__auto__;
var G__19488 = cljs.core.count(c__5568__auto__);
var G__19489 = (0);
seq__18386 = G__19486;
chunk__18387 = G__19487;
count__18388 = G__19488;
i__18389 = G__19489;
continue;
} else {
var n = cljs.core.first(seq__18386__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19490 = cljs.core.next(seq__18386__$1);
var G__19491 = null;
var G__19492 = (0);
var G__19493 = (0);
seq__18386 = G__19490;
chunk__18387 = G__19491;
count__18388 = G__19492;
i__18389 = G__19493;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18407 = arguments.length;
switch (G__18407) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18413 = arguments.length;
switch (G__18413) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18425 = arguments.length;
switch (G__18425) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19521 = arguments.length;
var i__5770__auto___19523 = (0);
while(true){
if((i__5770__auto___19523 < len__5769__auto___19521)){
args__5775__auto__.push((arguments[i__5770__auto___19523]));

var G__19524 = (i__5770__auto___19523 + (1));
i__5770__auto___19523 = G__19524;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18443_19531 = cljs.core.seq(nodes);
var chunk__18444_19532 = null;
var count__18445_19533 = (0);
var i__18446_19534 = (0);
while(true){
if((i__18446_19534 < count__18445_19533)){
var node_19536 = chunk__18444_19532.cljs$core$IIndexed$_nth$arity$2(null,i__18446_19534);
fragment.appendChild(shadow.dom._to_dom(node_19536));


var G__19537 = seq__18443_19531;
var G__19538 = chunk__18444_19532;
var G__19539 = count__18445_19533;
var G__19540 = (i__18446_19534 + (1));
seq__18443_19531 = G__19537;
chunk__18444_19532 = G__19538;
count__18445_19533 = G__19539;
i__18446_19534 = G__19540;
continue;
} else {
var temp__5804__auto___19541 = cljs.core.seq(seq__18443_19531);
if(temp__5804__auto___19541){
var seq__18443_19543__$1 = temp__5804__auto___19541;
if(cljs.core.chunked_seq_QMARK_(seq__18443_19543__$1)){
var c__5568__auto___19544 = cljs.core.chunk_first(seq__18443_19543__$1);
var G__19545 = cljs.core.chunk_rest(seq__18443_19543__$1);
var G__19546 = c__5568__auto___19544;
var G__19547 = cljs.core.count(c__5568__auto___19544);
var G__19548 = (0);
seq__18443_19531 = G__19545;
chunk__18444_19532 = G__19546;
count__18445_19533 = G__19547;
i__18446_19534 = G__19548;
continue;
} else {
var node_19549 = cljs.core.first(seq__18443_19543__$1);
fragment.appendChild(shadow.dom._to_dom(node_19549));


var G__19550 = cljs.core.next(seq__18443_19543__$1);
var G__19551 = null;
var G__19552 = (0);
var G__19553 = (0);
seq__18443_19531 = G__19550;
chunk__18444_19532 = G__19551;
count__18445_19533 = G__19552;
i__18446_19534 = G__19553;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18440){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18440));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18461_19554 = cljs.core.seq(scripts);
var chunk__18462_19555 = null;
var count__18463_19556 = (0);
var i__18464_19557 = (0);
while(true){
if((i__18464_19557 < count__18463_19556)){
var vec__18476_19559 = chunk__18462_19555.cljs$core$IIndexed$_nth$arity$2(null,i__18464_19557);
var script_tag_19560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476_19559,(0),null);
var script_body_19561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476_19559,(1),null);
eval(script_body_19561);


var G__19562 = seq__18461_19554;
var G__19563 = chunk__18462_19555;
var G__19564 = count__18463_19556;
var G__19565 = (i__18464_19557 + (1));
seq__18461_19554 = G__19562;
chunk__18462_19555 = G__19563;
count__18463_19556 = G__19564;
i__18464_19557 = G__19565;
continue;
} else {
var temp__5804__auto___19566 = cljs.core.seq(seq__18461_19554);
if(temp__5804__auto___19566){
var seq__18461_19568__$1 = temp__5804__auto___19566;
if(cljs.core.chunked_seq_QMARK_(seq__18461_19568__$1)){
var c__5568__auto___19569 = cljs.core.chunk_first(seq__18461_19568__$1);
var G__19570 = cljs.core.chunk_rest(seq__18461_19568__$1);
var G__19571 = c__5568__auto___19569;
var G__19572 = cljs.core.count(c__5568__auto___19569);
var G__19573 = (0);
seq__18461_19554 = G__19570;
chunk__18462_19555 = G__19571;
count__18463_19556 = G__19572;
i__18464_19557 = G__19573;
continue;
} else {
var vec__18499_19574 = cljs.core.first(seq__18461_19568__$1);
var script_tag_19575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18499_19574,(0),null);
var script_body_19576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18499_19574,(1),null);
eval(script_body_19576);


var G__19578 = cljs.core.next(seq__18461_19568__$1);
var G__19579 = null;
var G__19580 = (0);
var G__19581 = (0);
seq__18461_19554 = G__19578;
chunk__18462_19555 = G__19579;
count__18463_19556 = G__19580;
i__18464_19557 = G__19581;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18509){
var vec__18510 = p__18509;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18510,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18510,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18533 = arguments.length;
switch (G__18533) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18559 = cljs.core.seq(style_keys);
var chunk__18560 = null;
var count__18561 = (0);
var i__18562 = (0);
while(true){
if((i__18562 < count__18561)){
var it = chunk__18560.cljs$core$IIndexed$_nth$arity$2(null,i__18562);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19596 = seq__18559;
var G__19597 = chunk__18560;
var G__19598 = count__18561;
var G__19599 = (i__18562 + (1));
seq__18559 = G__19596;
chunk__18560 = G__19597;
count__18561 = G__19598;
i__18562 = G__19599;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18559);
if(temp__5804__auto__){
var seq__18559__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18559__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18559__$1);
var G__19604 = cljs.core.chunk_rest(seq__18559__$1);
var G__19605 = c__5568__auto__;
var G__19606 = cljs.core.count(c__5568__auto__);
var G__19607 = (0);
seq__18559 = G__19604;
chunk__18560 = G__19605;
count__18561 = G__19606;
i__18562 = G__19607;
continue;
} else {
var it = cljs.core.first(seq__18559__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19608 = cljs.core.next(seq__18559__$1);
var G__19609 = null;
var G__19610 = (0);
var G__19611 = (0);
seq__18559 = G__19608;
chunk__18560 = G__19609;
count__18561 = G__19610;
i__18562 = G__19611;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18573,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18587 = k18573;
var G__18587__$1 = (((G__18587 instanceof cljs.core.Keyword))?G__18587.fqn:null);
switch (G__18587__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18573,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18589){
var vec__18590 = p__18589;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18590,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18590,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18572){
var self__ = this;
var G__18572__$1 = this;
return (new cljs.core.RecordIter((0),G__18572__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18574,other18575){
var self__ = this;
var this18574__$1 = this;
return (((!((other18575 == null)))) && ((((this18574__$1.constructor === other18575.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18574__$1.x,other18575.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18574__$1.y,other18575.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18574__$1.__extmap,other18575.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18573){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18679 = k18573;
var G__18679__$1 = (((G__18679 instanceof cljs.core.Keyword))?G__18679.fqn:null);
switch (G__18679__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18573);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18572){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18695 = cljs.core.keyword_identical_QMARK_;
var expr__18696 = k__5352__auto__;
if(cljs.core.truth_((pred__18695.cljs$core$IFn$_invoke$arity$2 ? pred__18695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18696) : pred__18695.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18696)))){
return (new shadow.dom.Coordinate(G__18572,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18695.cljs$core$IFn$_invoke$arity$2 ? pred__18695.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18696) : pred__18695.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18696)))){
return (new shadow.dom.Coordinate(self__.x,G__18572,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18572),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18572){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18572,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18581){
var extmap__5385__auto__ = (function (){var G__18747 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18581,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18581)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18747);
} else {
return G__18747;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18581),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18581),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18765,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18776 = k18765;
var G__18776__$1 = (((G__18776 instanceof cljs.core.Keyword))?G__18776.fqn:null);
switch (G__18776__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18765,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18780){
var vec__18782 = p__18780;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18764){
var self__ = this;
var G__18764__$1 = this;
return (new cljs.core.RecordIter((0),G__18764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18766,other18767){
var self__ = this;
var this18766__$1 = this;
return (((!((other18767 == null)))) && ((((this18766__$1.constructor === other18767.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18766__$1.w,other18767.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18766__$1.h,other18767.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18766__$1.__extmap,other18767.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18765){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18807 = k18765;
var G__18807__$1 = (((G__18807 instanceof cljs.core.Keyword))?G__18807.fqn:null);
switch (G__18807__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18765);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18764){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18808 = cljs.core.keyword_identical_QMARK_;
var expr__18809 = k__5352__auto__;
if(cljs.core.truth_((pred__18808.cljs$core$IFn$_invoke$arity$2 ? pred__18808.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18809) : pred__18808.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18809)))){
return (new shadow.dom.Size(G__18764,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18808.cljs$core$IFn$_invoke$arity$2 ? pred__18808.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18809) : pred__18808.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18809)))){
return (new shadow.dom.Size(self__.w,G__18764,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18764),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18764){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18764,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18769){
var extmap__5385__auto__ = (function (){var G__18825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18769,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18769)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18825);
} else {
return G__18825;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18769),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18769),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19758 = (i + (1));
var G__19759 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19758;
ret = G__19759;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18900){
var vec__18902 = p__18900;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18909 = arguments.length;
switch (G__18909) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19785 = ps;
var G__19786 = (i + (1));
el__$1 = G__19785;
i = G__19786;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19020 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19026_19806 = cljs.core.seq(props);
var chunk__19027_19807 = null;
var count__19028_19808 = (0);
var i__19029_19809 = (0);
while(true){
if((i__19029_19809 < count__19028_19808)){
var vec__19036_19812 = chunk__19027_19807.cljs$core$IIndexed$_nth$arity$2(null,i__19029_19809);
var k_19813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036_19812,(0),null);
var v_19814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036_19812,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19813);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19813),v_19814);


var G__19819 = seq__19026_19806;
var G__19820 = chunk__19027_19807;
var G__19821 = count__19028_19808;
var G__19822 = (i__19029_19809 + (1));
seq__19026_19806 = G__19819;
chunk__19027_19807 = G__19820;
count__19028_19808 = G__19821;
i__19029_19809 = G__19822;
continue;
} else {
var temp__5804__auto___19823 = cljs.core.seq(seq__19026_19806);
if(temp__5804__auto___19823){
var seq__19026_19824__$1 = temp__5804__auto___19823;
if(cljs.core.chunked_seq_QMARK_(seq__19026_19824__$1)){
var c__5568__auto___19825 = cljs.core.chunk_first(seq__19026_19824__$1);
var G__19826 = cljs.core.chunk_rest(seq__19026_19824__$1);
var G__19827 = c__5568__auto___19825;
var G__19828 = cljs.core.count(c__5568__auto___19825);
var G__19829 = (0);
seq__19026_19806 = G__19826;
chunk__19027_19807 = G__19827;
count__19028_19808 = G__19828;
i__19029_19809 = G__19829;
continue;
} else {
var vec__19044_19831 = cljs.core.first(seq__19026_19824__$1);
var k_19832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044_19831,(0),null);
var v_19833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044_19831,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19832);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19832),v_19833);


var G__19841 = cljs.core.next(seq__19026_19824__$1);
var G__19842 = null;
var G__19843 = (0);
var G__19844 = (0);
seq__19026_19806 = G__19841;
chunk__19027_19807 = G__19842;
count__19028_19808 = G__19843;
i__19029_19809 = G__19844;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19058 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19058,(1),null);
var seq__19061_19845 = cljs.core.seq(node_children);
var chunk__19063_19846 = null;
var count__19064_19847 = (0);
var i__19065_19848 = (0);
while(true){
if((i__19065_19848 < count__19064_19847)){
var child_struct_19849 = chunk__19063_19846.cljs$core$IIndexed$_nth$arity$2(null,i__19065_19848);
if((!((child_struct_19849 == null)))){
if(typeof child_struct_19849 === 'string'){
var text_19850 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19850),child_struct_19849].join(''));
} else {
var children_19851 = shadow.dom.svg_node(child_struct_19849);
if(cljs.core.seq_QMARK_(children_19851)){
var seq__19117_19852 = cljs.core.seq(children_19851);
var chunk__19119_19853 = null;
var count__19120_19854 = (0);
var i__19121_19855 = (0);
while(true){
if((i__19121_19855 < count__19120_19854)){
var child_19856 = chunk__19119_19853.cljs$core$IIndexed$_nth$arity$2(null,i__19121_19855);
if(cljs.core.truth_(child_19856)){
node.appendChild(child_19856);


var G__19857 = seq__19117_19852;
var G__19858 = chunk__19119_19853;
var G__19859 = count__19120_19854;
var G__19860 = (i__19121_19855 + (1));
seq__19117_19852 = G__19857;
chunk__19119_19853 = G__19858;
count__19120_19854 = G__19859;
i__19121_19855 = G__19860;
continue;
} else {
var G__19861 = seq__19117_19852;
var G__19862 = chunk__19119_19853;
var G__19863 = count__19120_19854;
var G__19864 = (i__19121_19855 + (1));
seq__19117_19852 = G__19861;
chunk__19119_19853 = G__19862;
count__19120_19854 = G__19863;
i__19121_19855 = G__19864;
continue;
}
} else {
var temp__5804__auto___19865 = cljs.core.seq(seq__19117_19852);
if(temp__5804__auto___19865){
var seq__19117_19866__$1 = temp__5804__auto___19865;
if(cljs.core.chunked_seq_QMARK_(seq__19117_19866__$1)){
var c__5568__auto___19867 = cljs.core.chunk_first(seq__19117_19866__$1);
var G__19868 = cljs.core.chunk_rest(seq__19117_19866__$1);
var G__19869 = c__5568__auto___19867;
var G__19870 = cljs.core.count(c__5568__auto___19867);
var G__19871 = (0);
seq__19117_19852 = G__19868;
chunk__19119_19853 = G__19869;
count__19120_19854 = G__19870;
i__19121_19855 = G__19871;
continue;
} else {
var child_19872 = cljs.core.first(seq__19117_19866__$1);
if(cljs.core.truth_(child_19872)){
node.appendChild(child_19872);


var G__19873 = cljs.core.next(seq__19117_19866__$1);
var G__19874 = null;
var G__19875 = (0);
var G__19876 = (0);
seq__19117_19852 = G__19873;
chunk__19119_19853 = G__19874;
count__19120_19854 = G__19875;
i__19121_19855 = G__19876;
continue;
} else {
var G__19877 = cljs.core.next(seq__19117_19866__$1);
var G__19878 = null;
var G__19879 = (0);
var G__19880 = (0);
seq__19117_19852 = G__19877;
chunk__19119_19853 = G__19878;
count__19120_19854 = G__19879;
i__19121_19855 = G__19880;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19851);
}
}


var G__19884 = seq__19061_19845;
var G__19885 = chunk__19063_19846;
var G__19886 = count__19064_19847;
var G__19887 = (i__19065_19848 + (1));
seq__19061_19845 = G__19884;
chunk__19063_19846 = G__19885;
count__19064_19847 = G__19886;
i__19065_19848 = G__19887;
continue;
} else {
var G__19888 = seq__19061_19845;
var G__19889 = chunk__19063_19846;
var G__19890 = count__19064_19847;
var G__19891 = (i__19065_19848 + (1));
seq__19061_19845 = G__19888;
chunk__19063_19846 = G__19889;
count__19064_19847 = G__19890;
i__19065_19848 = G__19891;
continue;
}
} else {
var temp__5804__auto___19892 = cljs.core.seq(seq__19061_19845);
if(temp__5804__auto___19892){
var seq__19061_19893__$1 = temp__5804__auto___19892;
if(cljs.core.chunked_seq_QMARK_(seq__19061_19893__$1)){
var c__5568__auto___19894 = cljs.core.chunk_first(seq__19061_19893__$1);
var G__19895 = cljs.core.chunk_rest(seq__19061_19893__$1);
var G__19896 = c__5568__auto___19894;
var G__19897 = cljs.core.count(c__5568__auto___19894);
var G__19898 = (0);
seq__19061_19845 = G__19895;
chunk__19063_19846 = G__19896;
count__19064_19847 = G__19897;
i__19065_19848 = G__19898;
continue;
} else {
var child_struct_19900 = cljs.core.first(seq__19061_19893__$1);
if((!((child_struct_19900 == null)))){
if(typeof child_struct_19900 === 'string'){
var text_19901 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19901),child_struct_19900].join(''));
} else {
var children_19902 = shadow.dom.svg_node(child_struct_19900);
if(cljs.core.seq_QMARK_(children_19902)){
var seq__19136_19905 = cljs.core.seq(children_19902);
var chunk__19138_19906 = null;
var count__19139_19907 = (0);
var i__19140_19908 = (0);
while(true){
if((i__19140_19908 < count__19139_19907)){
var child_19911 = chunk__19138_19906.cljs$core$IIndexed$_nth$arity$2(null,i__19140_19908);
if(cljs.core.truth_(child_19911)){
node.appendChild(child_19911);


var G__19912 = seq__19136_19905;
var G__19913 = chunk__19138_19906;
var G__19914 = count__19139_19907;
var G__19915 = (i__19140_19908 + (1));
seq__19136_19905 = G__19912;
chunk__19138_19906 = G__19913;
count__19139_19907 = G__19914;
i__19140_19908 = G__19915;
continue;
} else {
var G__19916 = seq__19136_19905;
var G__19917 = chunk__19138_19906;
var G__19918 = count__19139_19907;
var G__19919 = (i__19140_19908 + (1));
seq__19136_19905 = G__19916;
chunk__19138_19906 = G__19917;
count__19139_19907 = G__19918;
i__19140_19908 = G__19919;
continue;
}
} else {
var temp__5804__auto___19920__$1 = cljs.core.seq(seq__19136_19905);
if(temp__5804__auto___19920__$1){
var seq__19136_19921__$1 = temp__5804__auto___19920__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19136_19921__$1)){
var c__5568__auto___19922 = cljs.core.chunk_first(seq__19136_19921__$1);
var G__19923 = cljs.core.chunk_rest(seq__19136_19921__$1);
var G__19924 = c__5568__auto___19922;
var G__19925 = cljs.core.count(c__5568__auto___19922);
var G__19926 = (0);
seq__19136_19905 = G__19923;
chunk__19138_19906 = G__19924;
count__19139_19907 = G__19925;
i__19140_19908 = G__19926;
continue;
} else {
var child_19930 = cljs.core.first(seq__19136_19921__$1);
if(cljs.core.truth_(child_19930)){
node.appendChild(child_19930);


var G__19934 = cljs.core.next(seq__19136_19921__$1);
var G__19935 = null;
var G__19936 = (0);
var G__19937 = (0);
seq__19136_19905 = G__19934;
chunk__19138_19906 = G__19935;
count__19139_19907 = G__19936;
i__19140_19908 = G__19937;
continue;
} else {
var G__19940 = cljs.core.next(seq__19136_19921__$1);
var G__19941 = null;
var G__19942 = (0);
var G__19943 = (0);
seq__19136_19905 = G__19940;
chunk__19138_19906 = G__19941;
count__19139_19907 = G__19942;
i__19140_19908 = G__19943;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19902);
}
}


var G__19944 = cljs.core.next(seq__19061_19893__$1);
var G__19945 = null;
var G__19946 = (0);
var G__19947 = (0);
seq__19061_19845 = G__19944;
chunk__19063_19846 = G__19945;
count__19064_19847 = G__19946;
i__19065_19848 = G__19947;
continue;
} else {
var G__19948 = cljs.core.next(seq__19061_19893__$1);
var G__19949 = null;
var G__19950 = (0);
var G__19951 = (0);
seq__19061_19845 = G__19948;
chunk__19063_19846 = G__19949;
count__19064_19847 = G__19950;
i__19065_19848 = G__19951;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19968 = arguments.length;
var i__5770__auto___19971 = (0);
while(true){
if((i__5770__auto___19971 < len__5769__auto___19968)){
args__5775__auto__.push((arguments[i__5770__auto___19971]));

var G__19972 = (i__5770__auto___19971 + (1));
i__5770__auto___19971 = G__19972;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19161){
var G__19162 = cljs.core.first(seq19161);
var seq19161__$1 = cljs.core.next(seq19161);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19162,seq19161__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19176 = arguments.length;
switch (G__19176) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13912__auto___19995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_19192){
var state_val_19193 = (state_19192[(1)]);
if((state_val_19193 === (1))){
var state_19192__$1 = state_19192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19192__$1,(2),once_or_cleanup);
} else {
if((state_val_19193 === (2))){
var inst_19189 = (state_19192[(2)]);
var inst_19190 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19192__$1 = (function (){var statearr_19201 = state_19192;
(statearr_19201[(7)] = inst_19189);

return statearr_19201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19192__$1,inst_19190);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12977__auto__ = null;
var shadow$dom$state_machine__12977__auto____0 = (function (){
var statearr_19207 = [null,null,null,null,null,null,null,null];
(statearr_19207[(0)] = shadow$dom$state_machine__12977__auto__);

(statearr_19207[(1)] = (1));

return statearr_19207;
});
var shadow$dom$state_machine__12977__auto____1 = (function (state_19192){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_19192);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e19208){var ex__12980__auto__ = e19208;
var statearr_19209_20008 = state_19192;
(statearr_19209_20008[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_19192[(4)]))){
var statearr_19210_20011 = state_19192;
(statearr_19210_20011[(1)] = cljs.core.first((state_19192[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20015 = state_19192;
state_19192 = G__20015;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
shadow$dom$state_machine__12977__auto__ = function(state_19192){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12977__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12977__auto____1.call(this,state_19192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12977__auto____0;
shadow$dom$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12977__auto____1;
return shadow$dom$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_19218 = f__13913__auto__();
(statearr_19218[(6)] = c__13912__auto___19995);

return statearr_19218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
