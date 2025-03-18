goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19903,p__19904){
var map__19909 = p__19903;
var map__19909__$1 = cljs.core.__destructure_map(map__19909);
var svc = map__19909__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19909__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19909__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19909__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19910 = p__19904;
var map__19910__$1 = cljs.core.__destructure_map(map__19910);
var msg = map__19910__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19910__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19910__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19910__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19910__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19952,p__19953){
var map__19959 = p__19952;
var map__19959__$1 = cljs.core.__destructure_map(map__19959);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19961 = p__19953;
var map__19961__$1 = cljs.core.__destructure_map(map__19961);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19961__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19966,p__19967){
var map__19969 = p__19966;
var map__19969__$1 = cljs.core.__destructure_map(map__19969);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19969__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19969__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19970 = p__19967;
var map__19970__$1 = cljs.core.__destructure_map(map__19970);
var msg = map__19970__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19970__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19980,tid){
var map__19982 = p__19980;
var map__19982__$1 = cljs.core.__destructure_map(map__19982);
var svc = map__19982__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19990 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19991 = null;
var count__19992 = (0);
var i__19993 = (0);
while(true){
if((i__19993 < count__19992)){
var vec__20012 = chunk__19991.cljs$core$IIndexed$_nth$arity$2(null,i__19993);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20046 = seq__19990;
var G__20047 = chunk__19991;
var G__20048 = count__19992;
var G__20049 = (i__19993 + (1));
seq__19990 = G__20046;
chunk__19991 = G__20047;
count__19992 = G__20048;
i__19993 = G__20049;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19990);
if(temp__5804__auto__){
var seq__19990__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19990__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19990__$1);
var G__20050 = cljs.core.chunk_rest(seq__19990__$1);
var G__20051 = c__5568__auto__;
var G__20052 = cljs.core.count(c__5568__auto__);
var G__20053 = (0);
seq__19990 = G__20050;
chunk__19991 = G__20051;
count__19992 = G__20052;
i__19993 = G__20053;
continue;
} else {
var vec__20023 = cljs.core.first(seq__19990__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20056 = cljs.core.next(seq__19990__$1);
var G__20057 = null;
var G__20058 = (0);
var G__20059 = (0);
seq__19990 = G__20056;
chunk__19991 = G__20057;
count__19992 = G__20058;
i__19993 = G__20059;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19984_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19984_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19985_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19985_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19986_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19986_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19987_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19987_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20034){
var map__20035 = p__20034;
var map__20035__$1 = cljs.core.__destructure_map(map__20035);
var svc = map__20035__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20035__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
