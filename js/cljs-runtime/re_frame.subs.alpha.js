goog.provide('re_frame.subs.alpha');
re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),(function (_,k,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.register.alpha.lifecycle__GT_method,cljs.core.assoc,k,(function (q){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23039 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23040 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),q], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23040);

try{try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(q) : f.call(null,q));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12570__auto___23109 = re_frame.interop.now();
var duration__12571__auto___23110 = (end__12570__auto___23109 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12571__auto___23110,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12570__auto___23109);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23039);
}} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(q) : f.call(null,q));
}
}));
}));
re_frame.subs.alpha.sub = (function re_frame$subs$alpha$sub(var_args){
var G__23046 = arguments.length;
switch (G__23046) {
case 1:
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
if((q instanceof cljs.core.Keyword)){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2(q,cljs.core.PersistentArrayMap.EMPTY);
} else {
var md = re_frame.query.alpha.method(q);
if(cljs.core.map_QMARK_(q)){
return (md.cljs$core$IFn$_invoke$arity$1 ? md.cljs$core$IFn$_invoke$arity$1(q) : md.call(null,q));
} else {
if(cljs.core.vector_QMARK_(q)){
var G__23049 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212),re_frame.query.alpha.id(q),new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q),new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792),q], null);
return (md.cljs$core$IFn$_invoke$arity$1 ? md.cljs$core$IFn$_invoke$arity$1(G__23049) : md.call(null,G__23049));
} else {
return null;
}
}
}
}));

(re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2 = (function (id,q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212),id));
}));

(re_frame.subs.alpha.sub.cljs$lang$maxFixedArity = 2);

re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),(function() { 
var G__23119__delegate = function (kind,id,args){
var vec__23057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,id,re_frame.subs.alpha.sub,re_frame.query.alpha.query_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23057,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23057,(1),null);
return re_frame.registrar.register_handler(kind,id,(function re_frame$subs$alpha$subs_handler_fn(_,q){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(q,null) : inputs_fn.call(null,q,null));
var rid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var r = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23062 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23063 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),q,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(rid)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23063);

try{try{var subscription = (function (){var G__23065 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__23066 = q;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23065,G__23066) : computation_fn.call(null,G__23065,G__23066));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__12572__auto___23122 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__12572__auto___23122);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12570__auto___23123 = re_frame.interop.now();
var duration__12571__auto___23124 = (end__12570__auto___23123 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12571__auto___23124,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12570__auto___23123);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23062);
}} else {
var subscription = (function (){var G__23067 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__23068 = q;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23067,G__23068) : computation_fn.call(null,G__23067,G__23068));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__12572__auto___23126 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__12572__auto___23126);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(rid,re_frame.interop.reagent_id(r));

return r;
}));
};
var G__23119 = function (kind,id,var_args){
var args = null;
if (arguments.length > 2) {
var G__23133__i = 0, G__23133__a = new Array(arguments.length -  2);
while (G__23133__i < G__23133__a.length) {G__23133__a[G__23133__i] = arguments[G__23133__i + 2]; ++G__23133__i;}
  args = new cljs.core.IndexedSeq(G__23133__a,0,null);
} 
return G__23119__delegate.call(this,kind,id,args);};
G__23119.cljs$lang$maxFixedArity = 2;
G__23119.cljs$lang$applyTo = (function (arglist__23134){
var kind = cljs.core.first(arglist__23134);
arglist__23134 = cljs.core.next(arglist__23134);
var id = cljs.core.first(arglist__23134);
var args = cljs.core.rest(arglist__23134);
return G__23119__delegate(kind,id,args);
});
G__23119.cljs$core$IFn$_invoke$arity$variadic = G__23119__delegate;
return G__23119;
})()
);
re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"legacy-sub","legacy-sub",207431632),(function() { 
var G__23135__delegate = function (_,id,args){
var vec__23072 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,id,re_frame.subs.alpha.sub,re_frame.query.alpha.query_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23072,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23072,(1),null);
return re_frame.registrar.register_handler(new cljs.core.Keyword(null,"sub","sub",-2093760025),id,(function re_frame$subs$alpha$subs_handler_fn(___$1,q){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(q,null) : inputs_fn.call(null,q,null));
var rid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var r = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23080 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23081 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),q,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(rid)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23081);

try{try{var q__$1 = ((cljs.core.map_QMARK_(q))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var or__5045__auto__ = new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.id(q)], null);
}
})(),cljs.core.assoc,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q)):q);
var subscription = (function (){var G__23083 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__23084 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23083,G__23084) : computation_fn.call(null,G__23083,G__23084));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__12572__auto___23138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__12572__auto___23138);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12570__auto___23140 = re_frame.interop.now();
var duration__12571__auto___23141 = (end__12570__auto___23140 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12571__auto___23141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12570__auto___23140);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23080);
}} else {
var q__$1 = ((cljs.core.map_QMARK_(q))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var or__5045__auto__ = new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.id(q)], null);
}
})(),cljs.core.assoc,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q)):q);
var subscription = (function (){var G__23092 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__23093 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23092,G__23093) : computation_fn.call(null,G__23092,G__23093));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__12572__auto___23142 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__12572__auto___23142);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(rid,re_frame.interop.reagent_id(r));

return r;
}));
};
var G__23135 = function (_,id,var_args){
var args = null;
if (arguments.length > 2) {
var G__23144__i = 0, G__23144__a = new Array(arguments.length -  2);
while (G__23144__i < G__23144__a.length) {G__23144__a[G__23144__i] = arguments[G__23144__i + 2]; ++G__23144__i;}
  args = new cljs.core.IndexedSeq(G__23144__a,0,null);
} 
return G__23135__delegate.call(this,_,id,args);};
G__23135.cljs$lang$maxFixedArity = 2;
G__23135.cljs$lang$applyTo = (function (arglist__23145){
var _ = cljs.core.first(arglist__23145);
arglist__23145 = cljs.core.next(arglist__23145);
var id = cljs.core.first(arglist__23145);
var args = cljs.core.rest(arglist__23145);
return G__23135__delegate(_,id,args);
});
G__23135.cljs$core$IFn$_invoke$arity$variadic = G__23135__delegate;
return G__23135;
})()
);
re_frame.subs.alpha.sub_reactive = (function re_frame$subs$alpha$sub_reactive(q){
re_frame.subs.warn_when_not_reactive();

var or__5045__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var md = re_frame.query.alpha.lifecycle(q);
var r = re_frame.query.alpha.handle(q);
re_frame.interop.add_on_dispose_BANG_(r,(function (){
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$2(q,md);
}));

return re_frame.query.alpha.cache_BANG_(q,r);
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"reactive","reactive",717758366),re_frame.subs.alpha.sub_reactive);
re_frame.subs.alpha.sub_safe = (function re_frame$subs$alpha$sub_safe(q){
if(re_frame.interop.reactive_QMARK_()){
return re_frame.subs.alpha.sub_reactive(q);
} else {
var or__5045__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_frame.query.alpha.handle(q);
}
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"safe","safe",-125058214),re_frame.subs.alpha.sub_safe);
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"default","default",-1987822328),re_frame.subs.alpha.sub_safe);
re_frame.subs.alpha.sub_forever = (function re_frame$subs$alpha$sub_forever(q){
var or__5045__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_frame.query.alpha.cache_BANG_(q,re_frame.query.alpha.handle(q));
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"forever","forever",2103455015),re_frame.subs.alpha.sub_forever);
re_frame.subs.alpha.nil_ref = re_frame.interop.ratom(null);
re_frame.subs.alpha.sub_flow = (function re_frame$subs$alpha$sub_flow(q){
var or__5045__auto__ = (function (){var G__23107 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = cljs.core.second(new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return q;
}
})());
var G__23107__$1 = (((G__23107 == null))?null:re_frame.flow.alpha.lookup(G__23107));
var G__23107__$2 = (((G__23107__$1 == null))?null:cljs.core.meta(G__23107__$1));
if((G__23107__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("re-frame.flow.alpha","ref","re-frame.flow.alpha/ref",854314016).cljs$core$IFn$_invoke$arity$1(G__23107__$2);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_frame.subs.alpha.nil_ref;
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"flow","flow",590489032),re_frame.subs.alpha.sub_flow);

//# sourceMappingURL=re_frame.subs.alpha.js.map
