goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__30283 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30284 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30284);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___30372 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___30372)){
var new_db_30373 = temp__5804__auto___30372;
var fexpr__30286_30374 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30286_30374.cljs$core$IFn$_invoke$arity$1 ? fexpr__30286_30374.cljs$core$IFn$_invoke$arity$1(new_db_30373) : fexpr__30286_30374.call(null,new_db_30373));
} else {
}

var seq__30287 = cljs.core.seq(effects_without_db);
var chunk__30288 = null;
var count__30289 = (0);
var i__30290 = (0);
while(true){
if((i__30290 < count__30289)){
var vec__30300 = chunk__30288.cljs$core$IIndexed$_nth$arity$2(null,i__30290);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30300,(1),null);
var temp__5802__auto___30375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___30375)){
var effect_fn_30376 = temp__5802__auto___30375;
(effect_fn_30376.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30376.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30376.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__30377 = seq__30287;
var G__30378 = chunk__30288;
var G__30379 = count__30289;
var G__30380 = (i__30290 + (1));
seq__30287 = G__30377;
chunk__30288 = G__30378;
count__30289 = G__30379;
i__30290 = G__30380;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30287);
if(temp__5804__auto__){
var seq__30287__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30287__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30287__$1);
var G__30381 = cljs.core.chunk_rest(seq__30287__$1);
var G__30382 = c__5568__auto__;
var G__30383 = cljs.core.count(c__5568__auto__);
var G__30384 = (0);
seq__30287 = G__30381;
chunk__30288 = G__30382;
count__30289 = G__30383;
i__30290 = G__30384;
continue;
} else {
var vec__30304 = cljs.core.first(seq__30287__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30304,(1),null);
var temp__5802__auto___30385 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___30385)){
var effect_fn_30386 = temp__5802__auto___30385;
(effect_fn_30386.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30386.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30386.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__30387 = cljs.core.next(seq__30287__$1);
var G__30388 = null;
var G__30389 = (0);
var G__30390 = (0);
seq__30287 = G__30387;
chunk__30288 = G__30388;
count__30289 = G__30389;
i__30290 = G__30390;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12511__auto___30391 = re_frame.interop.now();
var duration__12512__auto___30392 = (end__12511__auto___30391 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12512__auto___30392,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12511__auto___30391);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30283);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___30393 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___30393)){
var new_db_30394 = temp__5804__auto___30393;
var fexpr__30307_30395 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30307_30395.cljs$core$IFn$_invoke$arity$1 ? fexpr__30307_30395.cljs$core$IFn$_invoke$arity$1(new_db_30394) : fexpr__30307_30395.call(null,new_db_30394));
} else {
}

var seq__30308 = cljs.core.seq(effects_without_db);
var chunk__30309 = null;
var count__30310 = (0);
var i__30311 = (0);
while(true){
if((i__30311 < count__30310)){
var vec__30330 = chunk__30309.cljs$core$IIndexed$_nth$arity$2(null,i__30311);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(1),null);
var temp__5802__auto___30396 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___30396)){
var effect_fn_30397 = temp__5802__auto___30396;
(effect_fn_30397.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30397.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30397.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__30398 = seq__30308;
var G__30399 = chunk__30309;
var G__30400 = count__30310;
var G__30401 = (i__30311 + (1));
seq__30308 = G__30398;
chunk__30309 = G__30399;
count__30310 = G__30400;
i__30311 = G__30401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30308);
if(temp__5804__auto__){
var seq__30308__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30308__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30308__$1);
var G__30402 = cljs.core.chunk_rest(seq__30308__$1);
var G__30403 = c__5568__auto__;
var G__30404 = cljs.core.count(c__5568__auto__);
var G__30405 = (0);
seq__30308 = G__30402;
chunk__30309 = G__30403;
count__30310 = G__30404;
i__30311 = G__30405;
continue;
} else {
var vec__30333 = cljs.core.first(seq__30308__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(1),null);
var temp__5802__auto___30406 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___30406)){
var effect_fn_30407 = temp__5802__auto___30406;
(effect_fn_30407.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30407.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30407.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__30408 = cljs.core.next(seq__30308__$1);
var G__30409 = null;
var G__30410 = (0);
var G__30411 = (0);
seq__30308 = G__30408;
chunk__30309 = G__30409;
count__30310 = G__30410;
i__30311 = G__30411;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__30340){
var map__30341 = p__30340;
var map__30341__$1 = cljs.core.__destructure_map(map__30341);
var effect = map__30341__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30341__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__30342 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30343 = null;
var count__30344 = (0);
var i__30345 = (0);
while(true){
if((i__30345 < count__30344)){
var effect = chunk__30343.cljs$core$IIndexed$_nth$arity$2(null,i__30345);
re_frame.fx.dispatch_later(effect);


var G__30412 = seq__30342;
var G__30413 = chunk__30343;
var G__30414 = count__30344;
var G__30415 = (i__30345 + (1));
seq__30342 = G__30412;
chunk__30343 = G__30413;
count__30344 = G__30414;
i__30345 = G__30415;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30342);
if(temp__5804__auto__){
var seq__30342__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30342__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30342__$1);
var G__30416 = cljs.core.chunk_rest(seq__30342__$1);
var G__30417 = c__5568__auto__;
var G__30418 = cljs.core.count(c__5568__auto__);
var G__30419 = (0);
seq__30342 = G__30416;
chunk__30343 = G__30417;
count__30344 = G__30418;
i__30345 = G__30419;
continue;
} else {
var effect = cljs.core.first(seq__30342__$1);
re_frame.fx.dispatch_later(effect);


var G__30420 = cljs.core.next(seq__30342__$1);
var G__30421 = null;
var G__30422 = (0);
var G__30423 = (0);
seq__30342 = G__30420;
chunk__30343 = G__30421;
count__30344 = G__30422;
i__30345 = G__30423;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__30346 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30347 = null;
var count__30348 = (0);
var i__30349 = (0);
while(true){
if((i__30349 < count__30348)){
var vec__30356 = chunk__30347.cljs$core$IIndexed$_nth$arity$2(null,i__30349);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30356,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30356,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___30424 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___30424)){
var effect_fn_30425 = temp__5802__auto___30424;
(effect_fn_30425.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30425.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30425.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30426 = seq__30346;
var G__30427 = chunk__30347;
var G__30428 = count__30348;
var G__30429 = (i__30349 + (1));
seq__30346 = G__30426;
chunk__30347 = G__30427;
count__30348 = G__30428;
i__30349 = G__30429;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30346);
if(temp__5804__auto__){
var seq__30346__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30346__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30346__$1);
var G__30430 = cljs.core.chunk_rest(seq__30346__$1);
var G__30431 = c__5568__auto__;
var G__30432 = cljs.core.count(c__5568__auto__);
var G__30433 = (0);
seq__30346 = G__30430;
chunk__30347 = G__30431;
count__30348 = G__30432;
i__30349 = G__30433;
continue;
} else {
var vec__30359 = cljs.core.first(seq__30346__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___30434 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___30434)){
var effect_fn_30435 = temp__5802__auto___30434;
(effect_fn_30435.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30435.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30435.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30436 = cljs.core.next(seq__30346__$1);
var G__30437 = null;
var G__30438 = (0);
var G__30439 = (0);
seq__30346 = G__30436;
chunk__30347 = G__30437;
count__30348 = G__30438;
i__30349 = G__30439;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__30362 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30363 = null;
var count__30364 = (0);
var i__30365 = (0);
while(true){
if((i__30365 < count__30364)){
var event = chunk__30363.cljs$core$IIndexed$_nth$arity$2(null,i__30365);
re_frame.router.dispatch(event);


var G__30440 = seq__30362;
var G__30441 = chunk__30363;
var G__30442 = count__30364;
var G__30443 = (i__30365 + (1));
seq__30362 = G__30440;
chunk__30363 = G__30441;
count__30364 = G__30442;
i__30365 = G__30443;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30362);
if(temp__5804__auto__){
var seq__30362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30362__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30362__$1);
var G__30444 = cljs.core.chunk_rest(seq__30362__$1);
var G__30445 = c__5568__auto__;
var G__30446 = cljs.core.count(c__5568__auto__);
var G__30447 = (0);
seq__30362 = G__30444;
chunk__30363 = G__30445;
count__30364 = G__30446;
i__30365 = G__30447;
continue;
} else {
var event = cljs.core.first(seq__30362__$1);
re_frame.router.dispatch(event);


var G__30448 = cljs.core.next(seq__30362__$1);
var G__30449 = null;
var G__30450 = (0);
var G__30451 = (0);
seq__30362 = G__30448;
chunk__30363 = G__30449;
count__30364 = G__30450;
i__30365 = G__30451;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__30366 = cljs.core.seq(value);
var chunk__30367 = null;
var count__30368 = (0);
var i__30369 = (0);
while(true){
if((i__30369 < count__30368)){
var event = chunk__30367.cljs$core$IIndexed$_nth$arity$2(null,i__30369);
clear_event(event);


var G__30452 = seq__30366;
var G__30453 = chunk__30367;
var G__30454 = count__30368;
var G__30455 = (i__30369 + (1));
seq__30366 = G__30452;
chunk__30367 = G__30453;
count__30368 = G__30454;
i__30369 = G__30455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30366);
if(temp__5804__auto__){
var seq__30366__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30366__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30366__$1);
var G__30457 = cljs.core.chunk_rest(seq__30366__$1);
var G__30459 = c__5568__auto__;
var G__30460 = cljs.core.count(c__5568__auto__);
var G__30461 = (0);
seq__30366 = G__30457;
chunk__30367 = G__30459;
count__30368 = G__30460;
i__30369 = G__30461;
continue;
} else {
var event = cljs.core.first(seq__30366__$1);
clear_event(event);


var G__30462 = cljs.core.next(seq__30366__$1);
var G__30463 = null;
var G__30464 = (0);
var G__30465 = (0);
seq__30366 = G__30462;
chunk__30367 = G__30463;
count__30368 = G__30464;
i__30369 = G__30465;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__30370 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30371 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30371);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12511__auto___30466 = re_frame.interop.now();
var duration__12512__auto___30467 = (end__12511__auto___30466 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12512__auto___30467,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12511__auto___30466);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30370);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
