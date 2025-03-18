goog.provide('day8.re_frame_10x.panels.subs.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__23189,_){
var map__23190 = p__23189;
var map__23190__$1 = cljs.core.__destructure_map(map__23190);
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
return subs;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-sub-traces","day8.re-frame-10x.panels.subs.subs/all-sub-traces",767916317),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch-always","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch-always",-1807060768)], null),(function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.subscription_QMARK_,traces);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","subscription-info","day8.re-frame-10x.panels.subs.subs/subscription-info",-190987016),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__23191,_){
var map__23192 = p__23191;
var map__23192__$1 = cljs.core.__destructure_map(map__23192);
var subscription_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23192__$1,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092));
return subscription_info;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-state","day8.re-frame-10x.panels.subs.subs/sub-state",-1612006945),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__23193,_){
var map__23194 = p__23193;
var map__23194__$1 = cljs.core.__destructure_map(map__23194);
var sub_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981));
return sub_state;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","current-epoch-sub-state","day8.re-frame-10x.panels.subs.subs/current-epoch-sub-state",291840673),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match-state","day8.re-frame-10x.navigation.epochs.subs/selected-match-state",-726131883)], null),(function (p__23195,_){
var map__23196 = p__23195;
var map__23196__$1 = cljs.core.__destructure_map(map__23196);
var sub_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23196__$1,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981));
return sub_state;
})], 0));
day8.re_frame_10x.panels.subs.subs.sub_type__GT_value = (function day8$re_frame_10x$panels$subs$subs$sub_type__GT_value(sub_type){
var G__23197 = sub_type;
var G__23197__$1 = (((G__23197 instanceof cljs.core.Keyword))?G__23197.fqn:null);
switch (G__23197__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.panels.subs.subs.accumulate_sub_value = (function day8$re_frame_10x$panels$subs$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5802__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var sub_type = temp__5802__auto__;
var G__23233 = (exp - (1));
var G__23234 = (total + (day8.re_frame_10x.panels.subs.subs.sub_type__GT_value(sub_type) * Math.pow((10),exp)));
var G__23235 = cljs.core.rest(order__$1);
exp = G__23233;
total = G__23234;
order__$1 = G__23235;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.panels.subs.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.panels.subs.subs.accumulate_sub_value);
day8.re_frame_10x.panels.subs.subs.sub_sort_val = (function day8$re_frame_10x$panels$subs$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare(day8.re_frame_10x.panels.subs.subs.accumulate_sub_value_memoized(order_y),day8.re_frame_10x.panels.subs.subs.accumulate_sub_value_memoized(order_x));
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.panels.subs.subs.prepare_pod_info = (function day8$re_frame_10x$panels$subs$subs$prepare_pod_info(p__23198,p__23199){
var vec__23200 = p__23198;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23200,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23200,(1),null);
var vec__23203 = p__23199;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","intra-epoch-subs","day8.re-frame-10x.panels.subs.subs/intra-epoch-subs",1387786567)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.panels.subs.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","pre-epoch-state","day8.re-frame-10x.panels.subs.subs/pre-epoch-state",-826107288),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","current-epoch-sub-state","day8.re-frame-10x.panels.subs.subs/current-epoch-sub-state",291840673)], null),(function (p__23208,_){
var map__23209 = p__23208;
var map__23209__$1 = cljs.core.__destructure_map(map__23209);
var pre_epoch_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23209__$1,new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164));
return pre_epoch_state;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","reaction-state","day8.re-frame-10x.panels.subs.subs/reaction-state",433400459),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","current-epoch-sub-state","day8.re-frame-10x.panels.subs.subs/current-epoch-sub-state",291840673)], null),(function (p__23211,_){
var map__23212 = p__23211;
var map__23212__$1 = cljs.core.__destructure_map(map__23212);
var reaction_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212__$1,new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039));
return reaction_state;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","intra-epoch-subs","day8.re-frame-10x.panels.subs.subs/intra-epoch-subs",1387786567),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","subscription-info","day8.re-frame-10x.panels.subs.subs/subscription-info",-190987016)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","pre-epoch-state","day8.re-frame-10x.panels.subs.subs/pre-epoch-state",-826107288)], null),day8.re_frame_10x.panels.subs.subs.prepare_pod_info], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-subs","day8.re-frame-10x.panels.subs.subs/all-subs",1048145468),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","subscription-info","day8.re-frame-10x.panels.subs.subs/subscription-info",-190987016)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","reaction-state","day8.re-frame-10x.panels.subs.subs/reaction-state",433400459)], null),day8.re_frame_10x.panels.subs.subs.prepare_pod_info], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","filter-str","day8.re-frame-10x.panels.subs.subs/filter-str",-1499732639),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (p__23214,_){
var map__23215 = p__23214;
var map__23215__$1 = cljs.core.__destructure_map(map__23215);
var filter_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215__$1,new cljs.core.Keyword(null,"filter-str","filter-str",1974484789));
return filter_str;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","visible-subs","day8.re-frame-10x.panels.subs.subs/visible-subs",1208483009),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-subs","day8.re-frame-10x.panels.subs.subs/all-subs",1048145468)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","ignore-unchanged-l2-subs?","day8.re-frame-10x.panels.subs.subs/ignore-unchanged-l2-subs?",-1956184975)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","filter-str","day8.re-frame-10x.panels.subs.subs/filter-str",-1499732639)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-pins","day8.re-frame-10x.panels.subs.subs/sub-pins",1157625064)], null),(function (p__23217){
var vec__23219 = p__23217;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__23222 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__23222__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.unchanged_l2_subscription_QMARK_,G__23222):G__23222);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23225){
var map__23226 = p__23225;
var map__23226__$1 = cljs.core.__destructure_map(map__23226);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23226__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__5045__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__23222__$1);
} else {
return G__23222__$1;
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","visible-subs","day8.re-frame-10x.panels.subs.subs/visible-subs",1208483009)], null),(function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","created-count","day8.re-frame-10x.panels.subs.subs/created-count",956171806),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","re-run-count","day8.re-frame-10x.panels.subs.subs/re-run-count",-933290221),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","destroyed-count","day8.re-frame-10x.panels.subs.subs/destroyed-count",-778739881),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","not-run-count","day8.re-frame-10x.panels.subs.subs/not-run-count",-689189983),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-counts","day8.re-frame-10x.panels.subs.subs/sub-counts",714056905)], null),(function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","unchanged-l2-subs-count","day8.re-frame-10x.panels.subs.subs/unchanged-l2-subs-count",-405694953),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","all-subs","day8.re-frame-10x.panels.subs.subs/all-subs",1048145468)], null),(function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.unchanged_l2_subscription_QMARK_,subs));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","ignore-unchanged-l2-subs?","day8.re-frame-10x.panels.subs.subs/ignore-unchanged-l2-subs?",-1956184975),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-expansions","day8.re-frame-10x.panels.subs.subs/sub-expansions",-1670810485),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (p__23228,_){
var map__23229 = p__23228;
var map__23229__$1 = cljs.core.__destructure_map(map__23229);
var expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229__$1,new cljs.core.Keyword(null,"expansions","expansions",533713877));
return expansions;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","sub-pins","day8.re-frame-10x.panels.subs.subs/sub-pins",1157625064),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.subs.subs","root","day8.re-frame-10x.panels.subs.subs/root",-2074776057)], null),(function (p__23230,_){
var map__23231 = p__23230;
var map__23231__$1 = cljs.core.__destructure_map(map__23231);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23231__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
return pinned;
})], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.subs.subs.js.map
