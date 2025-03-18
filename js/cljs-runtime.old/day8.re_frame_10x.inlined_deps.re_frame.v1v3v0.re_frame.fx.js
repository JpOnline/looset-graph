goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14239 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14240 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14240);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14456 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14456)){
var new_db_14457 = temp__5804__auto___14456;
var fexpr__14243_14458 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14243_14458.cljs$core$IFn$_invoke$arity$1 ? fexpr__14243_14458.cljs$core$IFn$_invoke$arity$1(new_db_14457) : fexpr__14243_14458.call(null,new_db_14457));
} else {
}

var seq__14245 = cljs.core.seq(effects_without_db);
var chunk__14246 = null;
var count__14247 = (0);
var i__14248 = (0);
while(true){
if((i__14248 < count__14247)){
var vec__14283 = chunk__14246.cljs$core$IIndexed$_nth$arity$2(null,i__14248);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14283,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14283,(1),null);
var temp__5802__auto___14461 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14461)){
var effect_fn_14462 = temp__5802__auto___14461;
(effect_fn_14462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14462.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14463 = seq__14245;
var G__14464 = chunk__14246;
var G__14465 = count__14247;
var G__14466 = (i__14248 + (1));
seq__14245 = G__14463;
chunk__14246 = G__14464;
count__14247 = G__14465;
i__14248 = G__14466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14245);
if(temp__5804__auto__){
var seq__14245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14245__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14245__$1);
var G__14467 = cljs.core.chunk_rest(seq__14245__$1);
var G__14468 = c__5568__auto__;
var G__14469 = cljs.core.count(c__5568__auto__);
var G__14470 = (0);
seq__14245 = G__14467;
chunk__14246 = G__14468;
count__14247 = G__14469;
i__14248 = G__14470;
continue;
} else {
var vec__14286 = cljs.core.first(seq__14245__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14286,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14286,(1),null);
var temp__5802__auto___14472 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14472)){
var effect_fn_14473 = temp__5802__auto___14472;
(effect_fn_14473.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14473.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14473.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14474 = cljs.core.next(seq__14245__$1);
var G__14475 = null;
var G__14476 = (0);
var G__14477 = (0);
seq__14245 = G__14474;
chunk__14246 = G__14475;
count__14247 = G__14476;
i__14248 = G__14477;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__12910__auto___14478 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__12911__auto___14479 = (end__12910__auto___14478 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12911__auto___14479,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__12910__auto___14478);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14239);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14480 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14480)){
var new_db_14481 = temp__5804__auto___14480;
var fexpr__14297_14482 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14297_14482.cljs$core$IFn$_invoke$arity$1 ? fexpr__14297_14482.cljs$core$IFn$_invoke$arity$1(new_db_14481) : fexpr__14297_14482.call(null,new_db_14481));
} else {
}

var seq__14302 = cljs.core.seq(effects_without_db);
var chunk__14303 = null;
var count__14304 = (0);
var i__14305 = (0);
while(true){
if((i__14305 < count__14304)){
var vec__14335 = chunk__14303.cljs$core$IIndexed$_nth$arity$2(null,i__14305);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14335,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14335,(1),null);
var temp__5802__auto___14483 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14483)){
var effect_fn_14484 = temp__5802__auto___14483;
(effect_fn_14484.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14484.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14484.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14485 = seq__14302;
var G__14486 = chunk__14303;
var G__14487 = count__14304;
var G__14488 = (i__14305 + (1));
seq__14302 = G__14485;
chunk__14303 = G__14486;
count__14304 = G__14487;
i__14305 = G__14488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14302);
if(temp__5804__auto__){
var seq__14302__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14302__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14302__$1);
var G__14489 = cljs.core.chunk_rest(seq__14302__$1);
var G__14490 = c__5568__auto__;
var G__14491 = cljs.core.count(c__5568__auto__);
var G__14492 = (0);
seq__14302 = G__14489;
chunk__14303 = G__14490;
count__14304 = G__14491;
i__14305 = G__14492;
continue;
} else {
var vec__14343 = cljs.core.first(seq__14302__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14343,(1),null);
var temp__5802__auto___14496 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14496)){
var effect_fn_14497 = temp__5802__auto___14496;
(effect_fn_14497.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14497.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14497.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14499 = cljs.core.next(seq__14302__$1);
var G__14500 = null;
var G__14501 = (0);
var G__14502 = (0);
seq__14302 = G__14499;
chunk__14303 = G__14500;
count__14304 = G__14501;
i__14305 = G__14502;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__14350){
var map__14353 = p__14350;
var map__14353__$1 = cljs.core.__destructure_map(map__14353);
var effect = map__14353__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__14363 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14364 = null;
var count__14365 = (0);
var i__14366 = (0);
while(true){
if((i__14366 < count__14365)){
var effect = chunk__14364.cljs$core$IIndexed$_nth$arity$2(null,i__14366);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__14505 = seq__14363;
var G__14506 = chunk__14364;
var G__14507 = count__14365;
var G__14508 = (i__14366 + (1));
seq__14363 = G__14505;
chunk__14364 = G__14506;
count__14365 = G__14507;
i__14366 = G__14508;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14363);
if(temp__5804__auto__){
var seq__14363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14363__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14363__$1);
var G__14510 = cljs.core.chunk_rest(seq__14363__$1);
var G__14511 = c__5568__auto__;
var G__14512 = cljs.core.count(c__5568__auto__);
var G__14513 = (0);
seq__14363 = G__14510;
chunk__14364 = G__14511;
count__14365 = G__14512;
i__14366 = G__14513;
continue;
} else {
var effect = cljs.core.first(seq__14363__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__14515 = cljs.core.next(seq__14363__$1);
var G__14516 = null;
var G__14517 = (0);
var G__14518 = (0);
seq__14363 = G__14515;
chunk__14364 = G__14516;
count__14365 = G__14517;
i__14366 = G__14518;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__14384 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14385 = null;
var count__14386 = (0);
var i__14387 = (0);
while(true){
if((i__14387 < count__14386)){
var vec__14412 = chunk__14385.cljs$core$IIndexed$_nth$arity$2(null,i__14387);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14412,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14412,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14520 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14520)){
var effect_fn_14521 = temp__5802__auto___14520;
(effect_fn_14521.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14521.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14521.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14522 = seq__14384;
var G__14523 = chunk__14385;
var G__14524 = count__14386;
var G__14525 = (i__14387 + (1));
seq__14384 = G__14522;
chunk__14385 = G__14523;
count__14386 = G__14524;
i__14387 = G__14525;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14384);
if(temp__5804__auto__){
var seq__14384__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14384__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14384__$1);
var G__14526 = cljs.core.chunk_rest(seq__14384__$1);
var G__14527 = c__5568__auto__;
var G__14528 = cljs.core.count(c__5568__auto__);
var G__14529 = (0);
seq__14384 = G__14526;
chunk__14385 = G__14527;
count__14386 = G__14528;
i__14387 = G__14529;
continue;
} else {
var vec__14417 = cljs.core.first(seq__14384__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14417,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14417,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14530 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14530)){
var effect_fn_14532 = temp__5802__auto___14530;
(effect_fn_14532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14532.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14533 = cljs.core.next(seq__14384__$1);
var G__14534 = null;
var G__14535 = (0);
var G__14536 = (0);
seq__14384 = G__14533;
chunk__14385 = G__14534;
count__14386 = G__14535;
i__14387 = G__14536;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14426 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14427 = null;
var count__14428 = (0);
var i__14429 = (0);
while(true){
if((i__14429 < count__14428)){
var event = chunk__14427.cljs$core$IIndexed$_nth$arity$2(null,i__14429);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__14538 = seq__14426;
var G__14539 = chunk__14427;
var G__14540 = count__14428;
var G__14541 = (i__14429 + (1));
seq__14426 = G__14538;
chunk__14427 = G__14539;
count__14428 = G__14540;
i__14429 = G__14541;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14426);
if(temp__5804__auto__){
var seq__14426__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14426__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14426__$1);
var G__14543 = cljs.core.chunk_rest(seq__14426__$1);
var G__14544 = c__5568__auto__;
var G__14545 = cljs.core.count(c__5568__auto__);
var G__14546 = (0);
seq__14426 = G__14543;
chunk__14427 = G__14544;
count__14428 = G__14545;
i__14429 = G__14546;
continue;
} else {
var event = cljs.core.first(seq__14426__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__14547 = cljs.core.next(seq__14426__$1);
var G__14548 = null;
var G__14549 = (0);
var G__14550 = (0);
seq__14426 = G__14547;
chunk__14427 = G__14548;
count__14428 = G__14549;
i__14429 = G__14550;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14440 = cljs.core.seq(value);
var chunk__14441 = null;
var count__14442 = (0);
var i__14443 = (0);
while(true){
if((i__14443 < count__14442)){
var event = chunk__14441.cljs$core$IIndexed$_nth$arity$2(null,i__14443);
clear_event(event);


var G__14551 = seq__14440;
var G__14552 = chunk__14441;
var G__14553 = count__14442;
var G__14554 = (i__14443 + (1));
seq__14440 = G__14551;
chunk__14441 = G__14552;
count__14442 = G__14553;
i__14443 = G__14554;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14440);
if(temp__5804__auto__){
var seq__14440__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14440__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14440__$1);
var G__14555 = cljs.core.chunk_rest(seq__14440__$1);
var G__14556 = c__5568__auto__;
var G__14557 = cljs.core.count(c__5568__auto__);
var G__14558 = (0);
seq__14440 = G__14555;
chunk__14441 = G__14556;
count__14442 = G__14557;
i__14443 = G__14558;
continue;
} else {
var event = cljs.core.first(seq__14440__$1);
clear_event(event);


var G__14559 = cljs.core.next(seq__14440__$1);
var G__14560 = null;
var G__14561 = (0);
var G__14562 = (0);
seq__14440 = G__14559;
chunk__14441 = G__14560;
count__14442 = G__14561;
i__14443 = G__14562;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
