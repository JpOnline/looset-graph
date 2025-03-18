goog.provide('looset_graph.app');
var module$node_modules$vis_network$peer$umd$vis_network_min=shadow.js.require("module$node_modules$vis_network$peer$umd$vis_network_min", {});
if(goog.DEBUG){
console.log("Debugger mode!");
} else {
}
looset_graph.app._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.alpha.subscribe);
looset_graph.app._GT_evt = re_frame.alpha.dispatch;
/**
 * Meant to be used with `reg-flow` :output. Define default values
 *   for values in the map and sends the values as a vector.
 */
looset_graph.app.with_defaults = (function looset_graph$app$with_defaults(f,defaults_vec){
return (function (m){
var G__30343 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30344){
var vec__30345 = p__30344;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(0),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(1),null);
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),defaults_vec));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30343) : f.call(null,G__30343));
});
});
looset_graph.app.event_to_analytics = re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-to-analytics","event-to-analytics",-1066580530),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var vec__30348 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context));
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30348,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30348,(1),null);
var evt_name = (((evt instanceof cljs.core.Keyword))?cljs.core.name(evt):cljs.core.str.cljs$core$IFn$_invoke$arity$1(evt));
var map__GT_str = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.map_QMARK_(v))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(v):v));
});
var evt_value = ((cljs.core.map_QMARK_(value))?cljs.core.clj__GT_js(cljs.core.reduce_kv(map__GT_str,cljs.core.PersistentArrayMap.EMPTY,value)):({"value": value}));
gtag("event",evt_name,evt_value);

return context;
})], 0));
if((typeof looset_graph !== 'undefined') && (typeof looset_graph.app !== 'undefined') && (typeof looset_graph.app.events_history !== 'undefined')){
} else {
looset_graph.app.events_history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
looset_graph.app.debugging_save_events = re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debugging-save-events","debugging-save-events",-1283785706),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var vec__30353_31138 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context));
var evt_31139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353_31138,(0),null);
var _value_31140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353_31138,(1),null);
var ignored_events_31141 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("looset-graph.app","mouse-moved","looset-graph.app/mouse-moved",-432137308),null,new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),null,new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions-step-2","looset-graph.app/organize-hierarchy-positions-step-2",1756259193),null], null), null);
if(cljs.core.truth_((ignored_events_31141.cljs$core$IFn$_invoke$arity$1 ? ignored_events_31141.cljs$core$IFn$_invoke$arity$1(evt_31139) : ignored_events_31141.call(null,evt_31139)))){
} else {
console.log(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(looset_graph.app.events_history,cljs.core.conj,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)));
}

return context;
})], 0));
re_frame.alpha.reg_global_interceptor(looset_graph.app.debugging_save_events);
looset_graph.app.bounding_box__GT_dimensions = (function looset_graph$app$bounding_box__GT_dimensions(node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((node.right + node.left) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((node.top + node.bottom) / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(node.right - node.left),new cljs.core.Keyword(null,"height","height",1025178622),(node.bottom - node.top)], null);
});
looset_graph.app.type_str__GT_type = (function looset_graph$app$type_str__GT_type(p1__30356_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("labelID",p1__30356_SHARP_)){
return new cljs.core.Keyword(null,"label","label",1718410804);
} else {
return new cljs.core.Keyword(null,"lix","lix",-499082631);
}
});
looset_graph.app.clean_surrounding_quotes = (function looset_graph$app$clean_surrounding_quotes(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("\"",cljs.core.first(s),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(s)], 0))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
} else {
return s;
}
});
looset_graph.app.extract_nodes_from_edge_rule = (function looset_graph$app$extract_nodes_from_edge_rule(edge){
var node_from_id = looset_graph.app.clean_surrounding_quotes(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)));
var node_from_type = looset_graph.app.type_str__GT_type(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)));
var node_to_type = looset_graph.app.type_str__GT_type(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null)));
var node_to_id = looset_graph.app.clean_surrounding_quotes(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1),(1)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([node_from_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),node_from_type,new cljs.core.Keyword(null,"edges-to","edges-to",-879806584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameless","nameless",-1381108351),cljs.core.PersistentHashSet.createAsIfByAssoc([node_to_id])], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_to_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),node_to_type,new cljs.core.Keyword(null,"edges-from","edges-from",779403865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameless","nameless",-1381108351),cljs.core.PersistentHashSet.createAsIfByAssoc([node_from_id])], null)], null)])], null);
});
looset_graph.app.find_visible = (function looset_graph$app$find_visible(var_args){
var G__30360 = arguments.length;
switch (G__30360) {
case 3:
return looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$3 = (function (visibles,nodes_map,node){
return looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$6(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,visibles,nodes_map,node);
}));

(looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$6 = (function (result,to_visit,visited,visibles,nodes_map,node){
var new_visited = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,node);
var parent_node = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node)));
var node_labels = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node)));
var new_to_visit = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_visit,parent_node),node_labels),visited);
var new_result = (cljs.core.truth_((visibles.cljs$core$IFn$_invoke$arity$1 ? visibles.cljs$core$IFn$_invoke$arity$1(node) : visibles.call(null,node)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,node):result);
if(cljs.core.seq(new_to_visit)){
return looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$6(new_result,new_to_visit,new_visited,visibles,nodes_map,cljs.core.first(to_visit));
} else {
return new_result;
}
}));

(looset_graph.app.find_visible.cljs$lang$maxFixedArity = 6);

looset_graph.app.visible_nodes = (function looset_graph$app$visible_nodes(fold_list){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node-id","node-id",779482292),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opened?","opened?",1096959669),fold_list))));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","visible-nodes","looset-graph.app/visible-nodes",-1346922823),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","fold-list","looset-graph.app/fold-list",-1113574836)], null),looset_graph.app.visible_nodes], 0));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373))], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__30362){
var map__30363 = p__30362;
var map__30363__$1 = cljs.core.__destructure_map(map__30363);
var fold_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30363__$1,new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186));
return looset_graph.app.visible_nodes(fold_list);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702)], null)], null));
looset_graph.app.get_descendents = (function looset_graph$app$get_descendents(nodes_map,nodes){
var step_fn = (function (p1__30365_SHARP_,p2__30369_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__30365_SHARP_,(function (){var G__30370 = nodes_map;
var G__30371 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(p2__30369_SHARP_) : nodes_map.call(null,p2__30369_SHARP_)));
return (looset_graph.app.get_descendents.cljs$core$IFn$_invoke$arity$2 ? looset_graph.app.get_descendents.cljs$core$IFn$_invoke$arity$2(G__30370,G__30371) : looset_graph.app.get_descendents.call(null,G__30370,G__30371));
})());
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step_fn,nodes,nodes);
});
looset_graph.app.raw_selected_nodes = (function looset_graph$app$raw_selected_nodes(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","raw-selected-nodes","looset-graph.app/raw-selected-nodes",406872326),looset_graph.app.raw_selected_nodes], 0));
looset_graph.app.selected_nodes = (function looset_graph$app$selected_nodes(p__30376){
var vec__30377 = p__30376;
var hovered_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(0),null);
var raw_selected_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(1),null);
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(2),null);
if(cljs.core.empty_QMARK_(hovered_node)){
return raw_selected_nodes;
} else {
return looset_graph.app.get_descendents(nodes_map,hovered_node);
}
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","hovered-node","looset-graph.app/hovered-node",859186206)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","raw-selected-nodes","looset-graph.app/raw-selected-nodes",406872326)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),looset_graph.app.selected_nodes], 0));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hovs","hovs",-1548560527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"hovered-node","hovered-node",367079976)], null),new cljs.core.Keyword(null,"sels","sels",-2062469486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),new cljs.core.Keyword(null,"nmap","nmap",-481624572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__30384){
var map__30385 = p__30384;
var map__30385__$1 = cljs.core.__destructure_map(map__30385);
var hovs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30385__$1,new cljs.core.Keyword(null,"hovs","hovs",-1548560527));
var sels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30385__$1,new cljs.core.Keyword(null,"sels","sels",-2062469486));
var nmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30385__$1,new cljs.core.Keyword(null,"nmap","nmap",-481624572));
return looset_graph.app.selected_nodes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = hovs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var or__5045__auto__ = sels;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),nmap], null));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718)], null)], null));
looset_graph.app.selected_nodes_visible = (function looset_graph$app$selected_nodes_visible(p__30390){
var vec__30391 = p__30390;
var selected_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30391,(0),null);
var visible_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30391,(1),null);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_nodes,visible_nodes);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","selected-nodes-visible","looset-graph.app/selected-nodes-visible",140267667),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","visible-nodes","looset-graph.app/visible-nodes",-1346922823)], null),looset_graph.app.selected_nodes_visible], 0));
looset_graph.app.selected_node_QMARK_ = (function looset_graph$app$selected_node_QMARK_(selected_nodes,p__30394){
var vec__30395 = p__30394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30395,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30395,(1),null);
return cljs.core.contains_QMARK_(selected_nodes,node);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","selected-node?","looset-graph.app/selected-node?",2103187204),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632)], null),looset_graph.app.selected_node_QMARK_], 0));
looset_graph.app.text__GT_color = (function looset_graph$app$text__GT_color(text){
var n = cljs.core.hash(text);
var h = cljs.core.mod(n,(360));
var s = ((60) + cljs.core.mod(cljs.core.quot(n,(360)),(20)));
var l = ((50) + cljs.core.mod(cljs.core.quot(n,(7200)),(10)));
return ["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"%, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),"%)"].join('');
});
looset_graph.app.label_font_family = "Proza Libre";
looset_graph.app.vis_data = (function looset_graph$app$vis_data(p__30410){
var vec__30412 = p__30410;
var visible_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30412,(0),null);
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30412,(1),null);
var nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30407_SHARP_){
var G__30416 = cljs.core.first(p1__30407_SHARP_);
return (visible_nodes.cljs$core$IFn$_invoke$arity$1 ? visible_nodes.cljs$core$IFn$_invoke$arity$1(G__30416) : visible_nodes.call(null,G__30416));
}),nodes_map));
var __GT_node = (function (p__30418){
var vec__30419 = p__30418;
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30419,(0),null);
var map__30422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30419,(1),null);
var map__30422__$1 = cljs.core.__destructure_map(map__30422);
var map__30423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30422__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__30423__$1 = cljs.core.__destructure_map(map__30423);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30423__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30423__$1,"y");
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30422__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30422__$1,new cljs.core.Keyword(null,"name","name",1843675177),node_id);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"margin","margin",-995903681)],[y,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border","border",1444987323),"gray"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"label","label",1718410804)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"face","face",-1356480717),looset_graph.app.label_font_family,new cljs.core.Keyword(null,"multi","multi",-190293005),"html",new cljs.core.Keyword(null,"color","color",1011675173),looset_graph.app.text__GT_color(node_id)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"label","label",1718410804)))?["<b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"</b>"].join(''):name),node_id,"box",x,true,(7)]);
});
var get_from_set = (function (p1__30408_SHARP_){
return looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$3(visible_nodes,nodes_map,p1__30408_SHARP_);
});
var get_to_set = (function (p1__30409_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(looset_graph.app.find_visible,visible_nodes,nodes_map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,new cljs.core.Keyword(null,"edges-to","edges-to",-879806584).cljs$core$IFn$_invoke$arity$1(p1__30409_SHARP_)))], 0));
});
var __GT_edge = (function (p__30429){
var vec__30430 = p__30429;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30430,(1),null);
var iter__5523__auto__ = (function looset_graph$app$vis_data_$_iter__30433(s__30434){
return (new cljs.core.LazySeq(null,(function (){
var s__30434__$1 = s__30434;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30434__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var from = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__30434__$1,from,xs__6360__auto__,temp__5804__auto__,vec__30430,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__30412,visible_nodes,nodes_map){
return (function looset_graph$app$vis_data_$_iter__30433_$_iter__30435(s__30436){
return (new cljs.core.LazySeq(null,((function (s__30434__$1,from,xs__6360__auto__,temp__5804__auto__,vec__30430,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__30412,visible_nodes,nodes_map){
return (function (){
var s__30436__$1 = s__30436;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30436__$1);
if(temp__5804__auto____$1){
var s__30436__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30436__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30436__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30438 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30437 = (0);
while(true){
if((i__30437 < size__5522__auto__)){
var to = cljs.core._nth(c__5521__auto__,i__30437);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
cljs.core.chunk_append(b__30438,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"arrows","arrows",-1209622014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"type","type",1174270348),"arrow"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),"#33a0ff"], null)], null));

var G__31156 = (i__30437 + (1));
i__30437 = G__31156;
continue;
} else {
var G__31157 = (i__30437 + (1));
i__30437 = G__31157;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30438),looset_graph$app$vis_data_$_iter__30433_$_iter__30435(cljs.core.chunk_rest(s__30436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30438),null);
}
} else {
var to = cljs.core.first(s__30436__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"arrows","arrows",-1209622014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"type","type",1174270348),"arrow"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),"#33a0ff"], null)], null),looset_graph$app$vis_data_$_iter__30433_$_iter__30435(cljs.core.rest(s__30436__$2)));
} else {
var G__31158 = cljs.core.rest(s__30436__$2);
s__30436__$1 = G__31158;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30434__$1,from,xs__6360__auto__,temp__5804__auto__,vec__30430,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__30412,visible_nodes,nodes_map))
,null,null));
});})(s__30434__$1,from,xs__6360__auto__,temp__5804__auto__,vec__30430,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__30412,visible_nodes,nodes_map))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(get_to_set(v)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,looset_graph$app$vis_data_$_iter__30433(cljs.core.rest(s__30434__$1)));
} else {
var G__31159 = cljs.core.rest(s__30434__$1);
s__30434__$1 = G__31159;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(get_from_set(k));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_node,nodes),new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(__GT_edge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes_map], 0))], null);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","vis-data","looset-graph.app/vis-data",-2135617319),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","visible-nodes","looset-graph.app/visible-nodes",-1346922823)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),looset_graph.app.vis_data], 0));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible-nodes","visible-nodes",1361897651),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702)),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077))], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__30451){
var map__30452 = p__30451;
var map__30452__$1 = cljs.core.__destructure_map(map__30452);
var visible_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,new cljs.core.Keyword(null,"visible-nodes","visible-nodes",1361897651));
var nodes_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30452__$1,new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077));
return looset_graph.app.vis_data(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [visible_nodes,nodes_map], null));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275)], null)], null));
looset_graph.app.left_panel_size = (function looset_graph$app$left_panel_size(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"left-panel-size","left-panel-size",-1199530188)], null),"400px");
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","left-panel-size","looset-graph.app/left-panel-size",-1724525274),looset_graph.app.left_panel_size], 0));
looset_graph.app.graph_text = (function looset_graph$app$graph_text(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null),"");
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","graph-text","looset-graph.app/graph-text",1407863772),looset_graph.app.graph_text], 0));
looset_graph.app.graph_ast = (function looset_graph$app$graph_ast(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph-ast","valid-graph-ast",-1530786594)], null));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","graph-ast","looset-graph.app/graph-ast",253059468),looset_graph.app.graph_ast], 0));
looset_graph.app.extract_nodes_from_foldable_rule = (function looset_graph$app$extract_nodes_from_foldable_rule(foldable){
var foldable_id_name = looset_graph.app.clean_surrounding_quotes(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(foldable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)));
var foldable_type_str = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(foldable,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null));
var foldable_type = looset_graph.app.type_str__GT_type(foldable_type_str);
var label_or_parent = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),foldable_type))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.PersistentHashSet.createAsIfByAssoc([foldable_id_name])], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),foldable_id_name], null));
var extract_node_info = (function (node){
var id = looset_graph.app.clean_surrounding_quotes(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)));
var type_str = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var type = looset_graph.app.type_str__GT_type(type_str);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(label_or_parent,new cljs.core.Keyword(null,"type","type",1174270348),type)]);
});
var inner_nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(extract_node_info,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),foldable));
var foldable_id_node = cljs.core.PersistentArrayMap.createAsIfByAssoc([foldable_id_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),foldable_type,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inner_nodes], 0))),new cljs.core.Keyword(null,"foldable","foldable",1906383028),((cljs.core.seq(inner_nodes))?true:false)], null)]);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,foldable_id_node,inner_nodes);
});
/**
 * Code extracted from https://clojuredocs.org/clojure.core/merge-with#example-5b80843ae4b00ac801ed9e74
 *   Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 *   (deep-merge-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
 *                   {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
 *   -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
 */
looset_graph.app.deep_merge_with = (function looset_graph$app$deep_merge_with(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31163 = arguments.length;
var i__5770__auto___31165 = (0);
while(true){
if((i__5770__auto___31165 < len__5769__auto___31163)){
args__5775__auto__.push((arguments[i__5770__auto___31165]));

var G__31166 = (i__5770__auto___31165 + (1));
i__5770__auto___31165 = G__31166;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return looset_graph.app.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(looset_graph.app.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var looset_graph$app$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,looset_graph$app$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var looset_graph$app$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__31169__i = 0, G__31169__a = new Array(arguments.length -  0);
while (G__31169__i < G__31169__a.length) {G__31169__a[G__31169__i] = arguments[G__31169__i + 0]; ++G__31169__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__31169__a,0,null);
} 
return looset_graph$app$m__delegate.call(this,maps__$1);};
looset_graph$app$m.cljs$lang$maxFixedArity = 0;
looset_graph$app$m.cljs$lang$applyTo = (function (arglist__31170){
var maps__$1 = cljs.core.seq(arglist__31170);
return looset_graph$app$m__delegate(maps__$1);
});
looset_graph$app$m.cljs$core$IFn$_invoke$arity$variadic = looset_graph$app$m__delegate;
return looset_graph$app$m;
})()
,maps);
}));

(looset_graph.app.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(looset_graph.app.deep_merge_with.cljs$lang$applyTo = (function (seq30462){
var G__30463 = cljs.core.first(seq30462);
var seq30462__$1 = cljs.core.next(seq30462);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30463,seq30462__$1);
}));

/**
 * union for the set of labels and merge the rest
 */
looset_graph.app.merge_nodes = (function looset_graph$app$merge_nodes(nodes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(looset_graph.app.deep_merge_with,(function (res,latter){
if(cljs.core.set_QMARK_(res)){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(res,latter);
} else {
return latter;
}
}),nodes);
});
looset_graph.app.build_hierarchy = (function looset_graph$app$build_hierarchy(nodes_map,nodes_ids,to_remove,visited){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (node_id){
if(cljs.core.contains_QMARK_(visited,node_id)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,cljs.core.PersistentArrayMap.EMPTY]);
} else {
var new_visited = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,node_id);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_map,node_id);
var v_children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_remove,cljs.core.into,v_children);

return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,(looset_graph.app.build_hierarchy.cljs$core$IFn$_invoke$arity$4 ? looset_graph.app.build_hierarchy.cljs$core$IFn$_invoke$arity$4(nodes_map,v_children,to_remove,new_visited) : looset_graph.app.build_hierarchy.call(null,nodes_map,v_children,to_remove,new_visited))]);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes_ids], 0)));
});
looset_graph.app.nodes_hierarchy = cljs.core.memoize((function (nodes_map){
var to_remove = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var n_hierarchy = looset_graph.app.build_hierarchy(nodes_map,cljs.core.keys(nodes_map),to_remove,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,n_hierarchy,cljs.core.deref(to_remove));
}));
looset_graph.app.nodes_list = (function looset_graph$app$nodes_list(path,nodes_map,fold_ui,p__30487){
var vec__30488 = p__30487;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30488,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30488,(1),null);
var opened_QMARK_ = ((cljs.core.seq(node_children))?new cljs.core.Keyword(null,"opened?","opened?",1096959669).cljs$core$IFn$_invoke$arity$2((fold_ui.cljs$core$IFn$_invoke$arity$1 ? fold_ui.cljs$core$IFn$_invoke$arity$1(node) : fold_ui.call(null,node)),false):null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node,new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node))),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node),new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.count(path),new cljs.core.Keyword(null,"color","color",1011675173),looset_graph.app.text__GT_color(node),new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node)))], null),(cljs.core.truth_(opened_QMARK_)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30480_SHARP_){
var G__30491 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node);
var G__30492 = nodes_map;
var G__30493 = (fold_ui.cljs$core$IFn$_invoke$arity$1 ? fold_ui.cljs$core$IFn$_invoke$arity$1(node) : fold_ui.call(null,node));
var G__30494 = p1__30480_SHARP_;
return (looset_graph.app.nodes_list.cljs$core$IFn$_invoke$arity$4 ? looset_graph.app.nodes_list.cljs$core$IFn$_invoke$arity$4(G__30491,G__30492,G__30493,G__30494) : looset_graph.app.nodes_list.call(null,G__30491,G__30492,G__30493,G__30494));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_children], 0)):null));
});
looset_graph.app.nodes_ui = (function looset_graph$app$nodes_ui(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),cljs.core.PersistentArrayMap.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","nodes-ui","looset-graph.app/nodes-ui",1686649915),looset_graph.app.nodes_ui], 0));
looset_graph.app.fold_ui = (function looset_graph$app$fold_ui(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),cljs.core.PersistentArrayMap.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","fold-ui","looset-graph.app/fold-ui",-931133018),looset_graph.app.fold_ui], 0));
looset_graph.app.sort_nodes = (function looset_graph$app$sort_nodes(nodes_map,nodes_hierarchy){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__30499){
var vec__30500 = p__30499;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30500,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30500,(1),null);
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(k) : nodes_map.call(null,k)));
}),nodes_hierarchy);
});
/**
 * I created this version just I can use it with an existing fold-ui and use its
 *   values as default
 */
looset_graph.app.all_instances_of_node_with_same_open_state_with_default = (function looset_graph$app$all_instances_of_node_with_same_open_state_with_default(nodes_map,nodes_hierarchy){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function looset_graph$app$all_instances_of_node_with_same_open_state_with_default_$_step_reduce(acc,p__30507){
var vec__30508 = p__30507;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508,(1),null);
var deeper_levels = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(looset_graph$app$all_instances_of_node_with_same_open_state_with_default_$_step_reduce,cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"opened?","opened?",1096959669)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deeper_levels,new cljs.core.Keyword(null,"opened?","opened?",1096959669),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(nodes_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new cljs.core.Keyword(null,"opened?","opened?",1096959669).cljs$core$IFn$_invoke$arity$2(v,false)))], null));
}),cljs.core.PersistentArrayMap.EMPTY,nodes_hierarchy);
});
/**
 * A node can have more than one instance, in multiple labels for example. As
 *   graph-text it can show up only once, so we are setting all occurrences of it
 *   to the same state.
 */
looset_graph.app.all_instances_of_node_with_same_open_state = (function looset_graph$app$all_instances_of_node_with_same_open_state(nodes_map,nodes_hierarchy){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function looset_graph$app$all_instances_of_node_with_same_open_state_$_step_reduce(acc,p__30515){
var vec__30516 = p__30515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30516,(1),null);
var deeper_levels = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(looset_graph$app$all_instances_of_node_with_same_open_state_$_step_reduce,cljs.core.PersistentArrayMap.EMPTY,v);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deeper_levels,new cljs.core.Keyword(null,"opened?","opened?",1096959669),new cljs.core.Keyword(null,"opened?","opened?",1096959669).cljs$core$IFn$_invoke$arity$2((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(k) : nodes_map.call(null,k)),false))], null));
}),cljs.core.PersistentArrayMap.EMPTY,nodes_hierarchy);
});
looset_graph.app.nodes_map__GT_fold_list = (function looset_graph$app$nodes_map__GT_fold_list(p__30523){
var vec__30524 = p__30523;
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30524,(0),null);
var fold_ui = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30524,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30522_SHARP_){
return looset_graph.app.nodes_list(cljs.core.PersistentVector.EMPTY,nodes_map,fold_ui,p1__30522_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([looset_graph.app.sort_nodes(nodes_map,looset_graph.app.nodes_hierarchy(nodes_map))], 0));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","fold-list","looset-graph.app/fold-list",-1113574836),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","fold-ui","looset-graph.app/fold-ui",-931133018)], null),looset_graph.app.nodes_map__GT_fold_list], 0));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)),new cljs.core.Keyword(null,"fold-ui","fold-ui",-399296592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__30527){
var map__30529 = p__30527;
var map__30529__$1 = cljs.core.__destructure_map(map__30529);
var nodes_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30529__$1,new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077));
var fold_ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30529__$1,new cljs.core.Keyword(null,"fold-ui","fold-ui",-399296592));
return looset_graph.app.nodes_map__GT_fold_list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes_map,fold_ui], null));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-paths","flow-paths",-2090187016),new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373)], null)], null));
looset_graph.app.get_edn_string = (function looset_graph$app$get_edn_string(var_args){
var G__30535 = arguments.length;
switch (G__30535) {
case 1:
return looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$1 = (function (all){
return looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$2("",all);
}));

(looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__30539){
var vec__30541 = p__30539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30541,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30541,(1),null);
var all = vec__30541;
if(cljs.core.array_QMARK_(s)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(looset_graph.app.get_edn_string,acc,cljs.core.rest(all));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
}));

(looset_graph.app.get_edn_string.cljs$lang$maxFixedArity = 2);

looset_graph.app.extract_edn_props = (function looset_graph$app$extract_edn_props(node_prop){
var node_id = looset_graph.app.clean_surrounding_quotes(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_prop,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)));
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_prop,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$1(edn))])], null);
});
looset_graph.app.no_memo_nodes_map_STAR_ = (function looset_graph$app$no_memo_nodes_map_STAR_(p__30554){
var map__30555 = p__30554;
var map__30555__$1 = cljs.core.__destructure_map(map__30555);
var graph_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,new cljs.core.Keyword(null,"graph-ast","graph-ast",1036545926));
var nodes_from_foldable_rules = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(looset_graph.app.extract_nodes_from_foldable_rule,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30548_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("foldable",cljs.core.first(p1__30548_SHARP_));
}),graph_ast));
var nodes_from_edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(looset_graph.app.extract_nodes_from_edge_rule,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30549_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("edge",cljs.core.first(p1__30549_SHARP_));
}),graph_ast)], 0));
var node_props = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(looset_graph.app.extract_edn_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30550_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nodeProps",cljs.core.first(p1__30550_SHARP_));
}),graph_ast)], 0));
var merged_nodes = looset_graph.app.merge_nodes(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(nodes_from_foldable_rules,nodes_from_edges,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_props], 0)));
var nodes_with_parents = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (nodes,p__30557){
var vec__30558 = p__30557;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30558,(0),null);
var map__30561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30558,(1),null);
var map__30561__$1 = cljs.core.__destructure_map(map__30561);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lix","lix",-499082631),type)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30551_SHARP_,p2__30552_SHARP_){
return cljs.core.assoc_in(p1__30551_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__30552_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779)], null),k);
}),nodes,children);
} else {
return nodes;
}
}),merged_nodes,merged_nodes);
return nodes_with_parents;
});
looset_graph.app.nodes_map_STAR_ = cljs.core.memoize(looset_graph.app.no_memo_nodes_map_STAR_);
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-ast","graph-ast",1036545926),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph-ast","valid-graph-ast",-1530786594)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.nodes_map_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null)], null));
looset_graph.app.nodes_map = (function looset_graph$app$nodes_map(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565),looset_graph.app.nodes_map], 0));
looset_graph.app.nodes_map_name = (function looset_graph$app$nodes_map_name(nodes_map,p__30564){
var vec__30565 = p__30564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(0),null);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(1),null);
try{return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node_id) : nodes_map.call(null,node_id)));
}catch (e30568){var ___$1 = e30568;
return null;
}});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","nodes-map-name","looset-graph.app/nodes-map-name",989473135),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),looset_graph.app.nodes_map_name], 0));
looset_graph.app.foldable_QMARK_ = (function looset_graph$app$foldable_QMARK_(nodes_map,p__30572){
var vec__30573 = p__30572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30573,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30573,(1),null);
return new cljs.core.Keyword(null,"foldable","foldable",1906383028).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node)));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","foldable-node?","looset-graph.app/foldable-node?",-651734739),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),looset_graph.app.foldable_QMARK_], 0));
looset_graph.app.valid_graph_QMARK_ = (function looset_graph$app$valid_graph_QMARK_(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph?","valid-graph?",110438095)], null),false);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","valid-graph?","looset-graph.app/valid-graph?",1732917457),looset_graph.app.valid_graph_QMARK_], 0));
looset_graph.app.hovered_node = (function looset_graph$app$hovered_node(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"hovered-node","hovered-node",367079976)], null),cljs.core.PersistentHashSet.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","hovered-node","looset-graph.app/hovered-node",859186206),looset_graph.app.hovered_node], 0));
looset_graph.app.vis_option_hierarchy = (function looset_graph$app$vis_option_hierarchy(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-options","vis-options",136453917),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hierarchical","hierarchical",-714363102),new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),false);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","vis-option-hierarchy","looset-graph.app/vis-option-hierarchy",176055399),looset_graph.app.vis_option_hierarchy], 0));
looset_graph.app.vis_view = (function looset_graph$app$vis_view(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818)], null),null);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","vis-view","looset-graph.app/vis-view",-1975455240),looset_graph.app.vis_view], 0));
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),new cljs.core.Keyword(null,"->","->",514830339),(function (p1__30589_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__30589_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false);
})], 0));
looset_graph.app.hidden_nodes = (function looset_graph$app$hidden_nodes(nodes_ui){
var G__30592 = nodes_ui;
var G__30592__$1 = (((G__30592 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30591_SHARP_){
return new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30591_SHARP_));
}),G__30592));
if((G__30592__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,G__30592__$1);
}
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","hidden-nodes","looset-graph.app/hidden-nodes",860218854),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-ui","looset-graph.app/nodes-ui",1686649915)], null),looset_graph.app.hidden_nodes], 0));
looset_graph.app.show_unhide_button_QMARK_ = (function looset_graph$app$show_unhide_button_QMARK_(p__30593){
var vec__30594 = p__30593;
var selected_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30594,(0),null);
var hidden_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30594,(1),null);
var and__5043__auto__ = hidden_nodes;
if(cljs.core.truth_(and__5043__auto__)){
return (((cljs.core.count(selected_nodes) > (1))) && (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_nodes),cljs.core.set(hidden_nodes)))));
} else {
return and__5043__auto__;
}
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","show-unhide-button?","looset-graph.app/show-unhide-button?",510267080),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","hidden-nodes","looset-graph.app/hidden-nodes",860218854)], null),looset_graph.app.show_unhide_button_QMARK_], 0));
looset_graph.app.show_expand_button_QMARK_ = (function looset_graph$app$show_expand_button_QMARK_(p__30604){
var map__30605 = p__30604;
var map__30605__$1 = cljs.core.__destructure_map(map__30605);
var selected_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30605__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var fold_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30605__$1,new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186));
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_nodes),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node-id","node-id",779482292),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30603_SHARP_){
return new cljs.core.Keyword(null,"opened?","opened?",1096959669).cljs$core$IFn$_invoke$arity$1(p1__30603_SHARP_) === false;
}),fold_list)))));
});
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-show-expand-button?","f-show-expand-button?",-2064352372),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718)),new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373))], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.show_expand_button_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-show-expand-button?","f-show-expand-button?",-2064352372)], null)], null));
looset_graph.app.nodes_map__GT_graph_text_reduce_step = (function looset_graph$app$nodes_map__GT_graph_text_reduce_step(nodes_map){
return (function (p__30616,p__30617){
var vec__30618 = p__30616;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(0),null);
var edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(2),null);
var vec__30621 = p__30617;
var node_k_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(0),null);
var node_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(1),null);
var rename_if_label = (function (s){
return (function (p1__30607_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(nodes_map,s,cljs.core.PersistentArrayMap.EMPTY)))){
return ["=>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30607_SHARP_)].join('');
} else {
return p1__30607_SHARP_;
}
})((function (p1__30606_SHARP_){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30606_SHARP_),"\""].join('');
})(s));
});
var node_k = rename_if_label(node_k_STAR_);
var node_children = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rename_if_label,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_v)));
var edges_to = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rename_if_label,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.vals(new cljs.core.Keyword(null,"edges-to","edges-to",-879806584).cljs$core$IFn$_invoke$arity$1(node_v))))));
var custom_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(node_v,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edges-to","edges-to",-879806584),new cljs.core.Keyword(null,"edges-from","edges-from",779403865),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"foldable","foldable",1906383028),new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
var custom_props_STAR_ = cljs.core.select_keys(node_v,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null));
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(custom_props,custom_props_STAR_))?null:(function(){throw (new Error(["Assert failed: ",["Some new node property was added, so should it be included in the text model or not?\nThe difference was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.diff(custom_props,custom_props_STAR_))].join(''),"\n","(= custom-props custom-props*)"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((node_children)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children,node_k,":\n"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30610_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30610_SHARP_),"\n"].join('');
}),node_children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null)], 0)))):children),((edges_to)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30615_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_k)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30615_SHARP_),"\n"].join('');
}),edges_to)))):edges),((cljs.core.seq(custom_props))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_props),"\n"].join(''):props)], null);
});
});
looset_graph.app.nodes_map__GT_graph_text = (function looset_graph$app$nodes_map__GT_graph_text(p__30638){
var vec__30643 = p__30638;
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30643,(0),null);
return (function (p__30646){
var vec__30647 = p__30646;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30647,(0),null);
var edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30647,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30647,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(children),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edges),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props)].join('');
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(looset_graph.app.nodes_map__GT_graph_text_reduce_step(nodes_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null),nodes_map));
});
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077))], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.with_defaults(looset_graph.app.nodes_map__GT_graph_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null)], null));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-editing-graph-text","f-editing-graph-text",866023663),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.with_defaults(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190),false], null)),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190)], null)], null));
looset_graph.app.disable_select_source_target_button_QMARK_ = (function looset_graph$app$disable_select_source_target_button_QMARK_(p__30650){
var vec__30651 = p__30650;
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30651,(0),null);
return cljs.core.empty_QMARK_(selected);
});
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"disable-select-source-target-button?","disable-select-source-target-button?",1272063056),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718))], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.with_defaults(looset_graph.app.disable_select_source_target_button_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentHashSet.EMPTY], null)),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-paths","flow-paths",-2090187016),new cljs.core.Keyword(null,"disable-select-source-target-button?","disable-select-source-target-button?",1272063056)], null)], null));
if((typeof looset_graph !== 'undefined') && (typeof looset_graph.app !== 'undefined') && (typeof looset_graph.app.network !== 'undefined')){
} else {
looset_graph.app.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
looset_graph.app.disperse_nodes_positions = (function looset_graph$app$disperse_nodes_positions(app_state,mult_x,mult_y){
var visible_nodes_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702)], null));
var nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30658_SHARP_){
var bounding_box = cljs.core.deref(looset_graph.app.network).getBoundingBox(p1__30658_SHARP_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(looset_graph.app.bounding_box__GT_dimensions(bounding_box),new cljs.core.Keyword(null,"id","id",-1388402092),p1__30658_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),bounding_box], 0));
}),visible_nodes_ids);
var new_nodes_positions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30662_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30662_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, ["x",(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__30662_SHARP_) * mult_x),"y",(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__30662_SHARP_) * mult_y)], null)], null)]));
}),nodes));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30663_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30663_SHARP_,new_nodes_positions], 0));
}));
});
looset_graph.app.resizing_panels = (function looset_graph$app$resizing_panels(app_state,p__30667){
var vec__30668 = p__30667;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30668,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30668,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"resizing-panels","resizing-panels",-385038924)], null),new_state);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","resizing-panels","looset-graph.app/resizing-panels",-912272966),looset_graph.app.resizing_panels);
looset_graph.app.dispersing_nodes = (function looset_graph$app$dispersing_nodes(app_state,p__30675){
var vec__30676 = p__30675;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30676,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30676,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"dispersing-nodes?","dispersing-nodes?",1072902670)], null),new_state);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","dispersing-nodes","looset-graph.app/dispersing-nodes",558941410),looset_graph.app.dispersing_nodes);
looset_graph.app.mouse_moved = (function looset_graph$app$mouse_moved(app_state,p__30685){
var vec__30686 = p__30685;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(1),null);
var _y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(2),null);
var move_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(3),null);
var move_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30686,(4),null);
var resizing_panels_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"resizing-panels","resizing-panels",-385038924)], null));
var dispersing_nodes_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"dispersing-nodes?","dispersing-nodes?",1072902670)], null));
var new_disp_x = (function (){var x__5130__auto__ = 0.5;
var y__5131__auto__ = ((move_x / (200)) + (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var new_disp_y = (function (){var x__5130__auto__ = 0.5;
var y__5131__auto__ = ((move_y / (200)) + (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__30690 = app_state;
var G__30690__$1 = (cljs.core.truth_(resizing_panels_QMARK_)?cljs.core.assoc_in(G__30690,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"left-panel-size","left-panel-size",-1199530188)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('')):G__30690);
var G__30690__$2 = (cljs.core.truth_(dispersing_nodes_QMARK_)?looset_graph.app.disperse_nodes_positions(G__30690__$1,new_disp_x,new_disp_y):G__30690__$1);
var G__30690__$3 = (cljs.core.truth_(dispersing_nodes_QMARK_)?cljs.core.assoc_in(G__30690__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"number-input","number-input",-1816352688),(1)], null),new_disp_x):G__30690__$2);
if(cljs.core.truth_(dispersing_nodes_QMARK_)){
return cljs.core.assoc_in(G__30690__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"number-input","number-input",-1816352688),(2)], null),new_disp_y);
} else {
return G__30690__$3;
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","mouse-moved","looset-graph.app/mouse-moved",-432137308),looset_graph.app.mouse_moved);
/**
 * Returns the first element of coll that satisfies the predicate f.
 */
looset_graph.app.get_pred = (function looset_graph$app$get_pred(f,coll){
return cljs.core.some((function (p1__30694_SHARP_){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__30694_SHARP_) : f.call(null,p1__30694_SHARP_)))){
return p1__30694_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Squared distance
 */
looset_graph.app.distance_between = (function looset_graph$app$distance_between(p1,p2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__30699_SHARP_){
return (p1__30699_SHARP_ * p1__30699_SHARP_);
}),cljs.core._),p1,p2));
});
/**
 * Returns an infinite lazy sequence of [x y] points for a geometric (logarithmic) spiral.
 * - origin: starting [x y]
 * - a: base radius scale
 * - b: ratio > 1 => radius grows each step; 0 < b < 1 => radius shrinks
 * - angle-step: how much to increment theta in each step (radians).
 */
looset_graph.app.geometric_spiral = (function looset_graph$app$geometric_spiral(var_args){
var G__30706 = arguments.length;
switch (G__30706) {
case 1:
return looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$1 = (function (origin){
return looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$2(origin,(20));
}));

(looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$2 = (function (origin,a){
return looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$4(origin,a,1.04,0.52);
}));

(looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$4 = (function (origin,a,b,angle_step){
var vec__30716 = origin;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30716,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30716,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var theta = (n * angle_step);
var r = (a * Math.pow(b,theta));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (r * Math.cos(theta))),(cy + (r * Math.sin(theta)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));

(looset_graph.app.geometric_spiral.cljs$lang$maxFixedArity = 4);

looset_graph.app.keypress = (function looset_graph$app$keypress(app_state,p__30723){
var vec__30725 = p__30723;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30725,(0),null);
var keypressed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30725,(1),null);
var G__30728 = keypressed;
switch (G__30728) {
case "v":
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false);

break;
case "s":
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30728)].join('')));

}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","keypress","looset-graph.app/keypress",11345896),looset_graph.app.keypress);
looset_graph.app.set_graph_text = (function looset_graph$app$set_graph_text(p__30733,p__30734){
var map__30736 = p__30733;
var map__30736__$1 = cljs.core.__destructure_map(map__30736);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30736__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30737 = p__30734;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30737,(1),null);
try{var g_ast = looset_graph.graph_parser.graph_ast(v);
var nm_STAR_ = looset_graph.app.nodes_map_STAR_((function (p1__30729_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-ast","graph-ast",1036545926),p1__30729_SHARP_], null));
})(g_ast));
var n_hierarchy = looset_graph.app.nodes_hierarchy(nm_STAR_);
var fold_ui = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),cljs.core.PersistentArrayMap.EMPTY);
var new_fold_ui = ((cljs.core.seq(fold_ui))?fold_ui:looset_graph.app.all_instances_of_node_with_same_open_state(nm_STAR_,n_hierarchy));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),(function (p1__30730_SHARP_){
console.log("Jp",p1__30730_SHARP_);

return p1__30730_SHARP_;
})(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),new_fold_ui),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null),v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph-ast","valid-graph-ast",-1530786594)], null),g_ast),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph?","valid-graph?",110438095)], null),true))], null);
}catch (e30740){var _ = e30740;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null),v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph?","valid-graph?",110438095)], null),false)], null);
}});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-graph-text","looset-graph.app/set-graph-text",-991658461),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.set_graph_text);
looset_graph.app.toggle_open_close = (function looset_graph$app$toggle_open_close(app_state,p__30744){
var vec__30745 = p__30744;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30745,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30745,(1),null);
var new_state = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null)], 0)),false));
var G__30749 = cljs.core.assoc_in(cljs.core.assoc_in(app_state,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null)], 0)),new_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),cljs.core.last(path),new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null),new_state);
var G__30750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,null], null);
return (looset_graph.app.set_nodes_positions.cljs$core$IFn$_invoke$arity$2 ? looset_graph.app.set_nodes_positions.cljs$core$IFn$_invoke$arity$2(G__30749,G__30750) : looset_graph.app.set_nodes_positions.call(null,G__30749,G__30750));
});
re_frame.alpha.reg_fx(new cljs.core.Keyword(null,"prepare-to-ctrl-c-selected-nodes","prepare-to-ctrl-c-selected-nodes",-1530654900),(function (){
var selection_el = document.getElementById("selection");
var range = document.createRange();
window.getSelection().removeAllRanges();

range.selectNodeContents(selection_el);

return window.getSelection().addRange(range);
}));
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","prepare-to-ctrl-c-selected-nodes","looset-graph.app/prepare-to-ctrl-c-selected-nodes",100131134),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepare-to-ctrl-c-selected-nodes","prepare-to-ctrl-c-selected-nodes",-1530654900)], null)], null)], null);
}));
looset_graph.app.nodes_list_item_clicked = (function looset_graph$app$nodes_list_item_clicked(p__30753,p__30754){
var map__30756 = p__30753;
var map__30756__$1 = cljs.core.__destructure_map(map__30756);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30756__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30757 = p__30754;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30757,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30757,(1),null);
var selected_nodes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY);
var clicked_node = cljs.core.last(path);
var nodes_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null));
var clicked_and_descendents = looset_graph.app.get_descendents(nodes_map,cljs.core.PersistentHashSet.createAsIfByAssoc([clicked_node]));
var sel_cli_inter = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_nodes,clicked_and_descendents);
var new_selection = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sel_cli_inter,clicked_and_descendents))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(selected_nodes,clicked_and_descendents):clojure.set.union.cljs$core$IFn$_invoke$arity$2(selected_nodes,clicked_and_descendents));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(30),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","prepare-to-ctrl-c-selected-nodes","looset-graph.app/prepare-to-ctrl-c-selected-nodes",100131134)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false))?cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),new_selection):looset_graph.app.toggle_open_close(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,path], null)))], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","nodes-list-item-clicked","looset-graph.app/nodes-list-item-clicked",-2099978840),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.nodes_list_item_clicked);
looset_graph.app.round_by = (function looset_graph$app$round_by(step,pos){
return (step * Math.round((pos / step)));
});
looset_graph.app.set_vis_view = (function looset_graph$app$set_vis_view(app_state,p__30772){
var vec__30773 = p__30772;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30773,(0),null);
var map__30776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30773,(1),null);
var map__30776__$1 = cljs.core.__destructure_map(map__30776);
var view_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30776__$1,new cljs.core.Keyword(null,"view-position","view-position",-1615095658));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30776__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),view_position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale], null));
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","set-vis-view","looset-graph.app/set-vis-view",-781497326),looset_graph.app.set_vis_view);
looset_graph.app.set_nodes_positions = (function looset_graph$app$set_nodes_positions(app_state,p__30786){
var vec__30787 = p__30786;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30787,(0),null);
var map__30790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30787,(1),null);
var map__30790__$1 = cljs.core.__destructure_map(map__30790);
var args = map__30790__$1;
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30790__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var _view_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30790__$1,new cljs.core.Keyword(null,"_view-position","_view-position",1828611372));
var _scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30790__$1,new cljs.core.Keyword(null,"_scale","_scale",1862973573));
if(cljs.core.truth_(dragging_QMARK_)){
return app_state;
} else {
var visible_nodes_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702)], null));
var nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30777_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(looset_graph.app.bounding_box__GT_dimensions(cljs.core.deref(looset_graph.app.network).getBoundingBox(p1__30777_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092),p1__30777_SHARP_);
}),visible_nodes_ids);
var height = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30778_SHARP_){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__30778_SHARP_) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1__30778_SHARP_) / (2)));
}),nodes)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30779_SHARP_){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__30779_SHARP_) - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1__30779_SHARP_) / (2)));
}),nodes)));
var width = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30780_SHARP_){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__30780_SHARP_) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p1__30780_SHARP_) / (2)));
}),nodes)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30781_SHARP_){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__30781_SHARP_) - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p1__30781_SHARP_) / (2)));
}),nodes)));
var tree = quadtree_cljc.core.__GT_quadtree.cljs$core$IFn$_invoke$arity$3(quadtree_cljc.core.__GT_bounds((0),(0),((2) * width),((2) * height)),cljs.core.count(visible_nodes_ids),(8));
var sorted_nodes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__30782_SHARP_){
return looset_graph.app.distance_between(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__30782_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__30782_SHARP_)], null));
}),nodes);
var filled_tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tree__$1,node){
var initial_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(node) - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(node) / (2))),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(node) - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(node) / (2)))], null);
var possible_positions = cljs.core.cons(initial_pos,looset_graph.app.geometric_spiral.cljs$core$IFn$_invoke$arity$2(initial_pos,(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(node) / (2))));
var vec__30797 = looset_graph.app.get_pred((function (p__30812){
var vec__30815 = p__30812;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30815,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30815,(1),null);
return cljs.core.empty_QMARK_(quadtree_cljc.core.retrieve_intersections(tree__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0))));
}),possible_positions);
var good_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30797,(0),null);
var good_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30797,(1),null);
var _non_collliding_pos = vec__30797;
return quadtree_cljc.core.insert(tree__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"x","x",2099068185),good_x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),good_y], 0)));
}),tree,sorted_nodes);
var new_nodes_positions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30783_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, ["x",(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_) / (2))),"y",(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1__30783_SHARP_) / (2)))], null)], null)]));
}),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(filled_tree)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30784_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30784_SHARP_,new_nodes_positions], 0));
}));
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.set_nodes_positions);
looset_graph.app.clear_nodes_positions = (function looset_graph$app$clear_nodes_positions(p__30825){
var map__30826 = p__30825;
var map__30826__$1 = cljs.core.__destructure_map(map__30826);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30826__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(40),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30824_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function looset_graph$app$clear_nodes_positions_$_iter__30827(s__30828){
return (new cljs.core.LazySeq(null,(function (){
var s__30828__$1 = s__30828;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30828__$1);
if(temp__5804__auto__){
var s__30828__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30828__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30828__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30830 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30829 = (0);
while(true){
if((i__30829 < size__5522__auto__)){
var vec__30833 = cljs.core._nth(c__5521__auto__,i__30829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30833,(1),null);
cljs.core.chunk_append(b__30830,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"position","position",-2011731912))]));

var G__31212 = (i__30829 + (1));
i__30829 = G__31212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30830),looset_graph$app$clear_nodes_positions_$_iter__30827(cljs.core.chunk_rest(s__30828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30830),null);
}
} else {
var vec__30839 = cljs.core.first(s__30828__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30839,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"position","position",-2011731912))]),looset_graph$app$clear_nodes_positions_$_iter__30827(cljs.core.rest(s__30828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(p1__30824_SHARP_);
})());
}))], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","clear-nodes-positions","looset-graph.app/clear-nodes-positions",-510351684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.clear_nodes_positions);
looset_graph.app.drag_changed = (function looset_graph$app$drag_changed(app_state,p__30842){
var vec__30843 = p__30842;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30843,(0),null);
var dragging_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30843,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-dragging?","graph-dragging?",-921103561)], null),dragging_QMARK_);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","drag-changed","looset-graph.app/drag-changed",-945122165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.drag_changed);
looset_graph.app.toggle_hidden = (function looset_graph$app$toggle_hidden(app_state,p__30846){
var vec__30847 = p__30846;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30847,(0),null);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30847,(1),null);
return looset_graph.app.set_nodes_positions(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),node_id,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),cljs.core.not),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,null], null));
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","toggle-hidden","looset-graph.app/toggle-hidden",-1838479241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.toggle_hidden);
looset_graph.app.node_hovered = (function looset_graph$app$node_hovered(app_state,p__30851){
var vec__30853 = p__30851;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30853,(0),null);
var nodes_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30853,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"hovered-node","hovered-node",367079976)], null),nodes_ids);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),looset_graph.app.node_hovered);
looset_graph.app.debug_event = (function looset_graph$app$debug_event(app_state,p__30856){
var vec__30857 = p__30856;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30857,(2),null);
return cljs.core.assoc_in(app_state,path,value);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","debug-event","looset-graph.app/debug-event",1984994981),looset_graph.app.debug_event);
looset_graph.app.organize_hierarchy_positions = (function looset_graph$app$organize_hierarchy_positions(p__30860,p__30861){
var map__30862 = p__30860;
var map__30862__$1 = cljs.core.__destructure_map(map__30862);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30862__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30863 = p__30861;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30863,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions-step-2","looset-graph.app/organize-hierarchy-positions-step-2",1756259193)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),looset_graph.app.set_nodes_positions(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-options","vis-options",136453917),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hierarchical","hierarchical",-714363102),new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,null], null))], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions","looset-graph.app/organize-hierarchy-positions",-1487657518),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.organize_hierarchy_positions);
/**
 * Used when 'hierarchy layout' button is clicked.
 */
looset_graph.app.organize_hierarchy_positions_step_2 = (function looset_graph$app$organize_hierarchy_positions_step_2(app_state,p__30870){
var vec__30872 = p__30870;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30872,(0),null);
if(cljs.core.truth_(looset_graph.app.vis_option_hierarchy(app_state))){
return cljs.core.assoc_in(looset_graph.app.set_nodes_positions(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dagging?","dagging?",-768951380),false,new cljs.core.Keyword(null,"view-position","view-position",-1615095658),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818),new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818),new cljs.core.Keyword(null,"scale","scale",-230427353)], null))], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-options","vis-options",136453917),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hierarchical","hierarchical",-714363102),new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),false);
} else {
return app_state;
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions-step-2","looset-graph.app/organize-hierarchy-positions-step-2",1756259193),looset_graph.app.organize_hierarchy_positions_step_2);
looset_graph.app.hide_all_or_selected = (function looset_graph$app$hide_all_or_selected(app_state){
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var all_nodes = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),cljs.core.PersistentArrayMap.EMPTY));
var nodes_to_hide = ((cljs.core.seq(selected_nodes))?selected_nodes:all_nodes);
var hidden = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),true], null)]);
}),nodes_to_hide));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30878_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30878_SHARP_,hidden], 0));
}));
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","hide-all-or-selected","looset-graph.app/hide-all-or-selected",-1455882838),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.hide_all_or_selected);
looset_graph.app.show_selected = (function looset_graph$app$show_selected(p__30883){
var map__30884 = p__30883;
var map__30884__$1 = cljs.core.__destructure_map(map__30884);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30884__$1,new cljs.core.Keyword(null,"db","db",993250759));
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var unhidden = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),false], null)]);
}),selected_nodes));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30882_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30882_SHARP_,unhidden], 0));
}))], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","show-selected","looset-graph.app/show-selected",-1072186890),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.show_selected);
looset_graph.app.collapse_all_or_selected = (function looset_graph$app$collapse_all_or_selected(p__30889){
var map__30891 = p__30889;
var map__30891__$1 = cljs.core.__destructure_map(map__30891);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30891__$1,new cljs.core.Keyword(null,"db","db",993250759));
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var all_nodes = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),cljs.core.PersistentArrayMap.EMPTY));
var nodes_to_collapse = ((cljs.core.seq(selected_nodes))?selected_nodes:all_nodes);
var closed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null)]);
}),nodes_to_collapse));
var close_all_instances = (function (p1__30887_SHARP_){
return looset_graph.app.all_instances_of_node_with_same_open_state_with_default(closed,p1__30887_SHARP_);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),close_all_instances)], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","collapse-all-or-selected","looset-graph.app/collapse-all-or-selected",-1376470635),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.collapse_all_or_selected);
looset_graph.app.expand_selected = (function looset_graph$app$expand_selected(p__30895){
var map__30896 = p__30895;
var map__30896__$1 = cljs.core.__destructure_map(map__30896);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30896__$1,new cljs.core.Keyword(null,"db","db",993250759));
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var opened = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),true], null)]);
}),selected_nodes));
var open_all_instances = (function (p1__30894_SHARP_){
return looset_graph.app.all_instances_of_node_with_same_open_state_with_default(opened,p1__30894_SHARP_);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),open_all_instances)], null);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","expand-selected","looset-graph.app/expand-selected",688171188),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.expand_selected);
looset_graph.app.mouse_select_mode_evt = (function looset_graph$app$mouse_select_mode_evt(app_state,p__30901){
var vec__30904 = p__30901;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30904,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30904,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),state);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.mouse_select_mode_evt);
looset_graph.app.network_clicked = (function looset_graph$app$network_clicked(p__30912,p__30913){
var map__30914 = p__30912;
var map__30914__$1 = cljs.core.__destructure_map(map__30914);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30914__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30915 = p__30913;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30915,(0),null);
var nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30915,(1),null);
var toggly_add = (function (p1__30907_SHARP_,p2__30908_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__30907_SHARP_,p2__30908_SHARP_),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p1__30907_SHARP_,p2__30908_SHARP_));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(30),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","prepare-to-ctrl-c-selected-nodes","looset-graph.app/prepare-to-ctrl-c-selected-nodes",100131134)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),(function (p1__30909_SHARP_){
return toggly_add(cljs.core.set(p1__30909_SHARP_),nodes);
})):cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),nodes))], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","network-clicked","looset-graph.app/network-clicked",-235149448),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.network_clicked);
looset_graph.app.rerender_vis_sub = (function looset_graph$app$rerender_vis_sub(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"rerender-vis","rerender-vis",-1871860970)], null),false);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","rerender-vis-sub","looset-graph.app/rerender-vis-sub",271428677),looset_graph.app.rerender_vis_sub], 0));
looset_graph.app.rerender_vis = (function looset_graph$app$rerender_vis(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"rerender-vis","rerender-vis",-1871860970)], null),cljs.core.not);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","rerender-vis","looset-graph.app/rerender-vis",-1341998844),looset_graph.app.rerender_vis);
looset_graph.app.toggle_edit_graph_text_area = (function looset_graph$app$toggle_edit_graph_text_area(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190)], null),cljs.core.not);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","toggle-edit-graph-text-area","looset-graph.app/toggle-edit-graph-text-area",1109374460),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.toggle_edit_graph_text_area);
looset_graph.app.select_source = (function looset_graph$app$select_source(p__30924){
var map__30926 = p__30924;
var map__30926__$1 = cljs.core.__destructure_map(map__30926);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30926__$1,new cljs.core.Keyword(null,"db","db",993250759));
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var vis_edges_from = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30922_SHARP_){
return cljs.core.contains_QMARK_(selected_nodes,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__30922_SHARP_));
}),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(30),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","prepare-to-ctrl-c-selected-nodes","looset-graph.app/prepare-to-ctrl-c-selected-nodes",100131134)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),vis_edges_from)], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","select-source","looset-graph.app/select-source",2095554696),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.select_source);
looset_graph.app.select_target = (function looset_graph$app$select_target(p__30931){
var map__30932 = p__30931;
var map__30932__$1 = cljs.core.__destructure_map(map__30932);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30932__$1,new cljs.core.Keyword(null,"db","db",993250759));
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var vis_edges_to = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30929_SHARP_){
return cljs.core.contains_QMARK_(selected_nodes,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__30929_SHARP_));
}),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(30),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","prepare-to-ctrl-c-selected-nodes","looset-graph.app/prepare-to-ctrl-c-selected-nodes",100131134)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),vis_edges_to)], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","select-target","looset-graph.app/select-target",-1979841537),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.select_target);
looset_graph.app.graph_component_inner = (function looset_graph$app$graph_component_inner(){
var graph_component_id = "looset-graph";
var update_comp = (function (component,p__30957){
var vec__30958 = p__30957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30958,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30958,(1),null);
var prev_vis_data = new cljs.core.Keyword(null,"vis-data","vis-data",558235347).cljs$core$IFn$_invoke$arity$1(prev_props);
var map__30961 = reagent.core.props(component);
var map__30961__$1 = cljs.core.__destructure_map(map__30961);
var selected_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30961__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var vis_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30961__$1,new cljs.core.Keyword(null,"vis-data","vis-data",558235347));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30961__$1,new cljs.core.Keyword(null,"options","options",99638489));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30961__$1,new cljs.core.Keyword(null,"view","view",1247994814));
cljs.core.deref(looset_graph.app.network).setOptions(options);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_vis_data,vis_data)){
cljs.core.deref(looset_graph.app.network).setData(cljs.core.clj__GT_js(vis_data));
} else {
}

if(cljs.core.truth_(view)){
cljs.core.deref(looset_graph.app.network).moveTo(({"position": new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(view), "scale": new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(view)}));
} else {
}

return cljs.core.deref(looset_graph.app.network).selectNodes(selected_nodes);
});
var mount_comp = (function (component){
var container_31224 = document.getElementById(graph_component_id);
cljs.core.reset_BANG_(looset_graph.app.network,(new module$node_modules$vis_network$peer$umd$vis_network_min.Network(container_31224,null)));

cljs.core.deref(looset_graph.app.network).on("dragStart",(function (){
var G__30967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","drag-changed","looset-graph.app/drag-changed",-945122165),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30967) : looset_graph.app._GT_evt.call(null,G__30967));
}));

cljs.core.deref(looset_graph.app.network).on("dragEnd",(function (){
var G__30968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-vis-view","looset-graph.app/set-vis-view",-781497326),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-position","view-position",-1615095658),cljs.core.deref(looset_graph.app.network).getViewPosition(),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.deref(looset_graph.app.network).getScale()], null)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30968) : looset_graph.app._GT_evt.call(null,G__30968));
}));

cljs.core.deref(looset_graph.app.network).on("zoom",(function (){
var G__30969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-vis-view","looset-graph.app/set-vis-view",-781497326),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-position","view-position",-1615095658),cljs.core.deref(looset_graph.app.network).getViewPosition(),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.deref(looset_graph.app.network).getScale()], null)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30969) : looset_graph.app._GT_evt.call(null,G__30969));
}));

cljs.core.deref(looset_graph.app.network).on("click",(function (p1__30952_SHARP_){
var G__30970_31225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","network-clicked","looset-graph.app/network-clicked",-235149448),cljs.core.set(p1__30952_SHARP_.nodes)], null);
(looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30970_31225) : looset_graph.app._GT_evt.call(null,G__30970_31225));

if(cljs.core.empty_QMARK_(p1__30952_SHARP_.nodes)){
var G__30971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","rerender-vis","looset-graph.app/rerender-vis",-1341998844)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30971) : looset_graph.app._GT_evt.call(null,G__30971));
} else {
return null;
}
}));

return update_comp(component,null);
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),graph_component_id,new cljs.core.Keyword(null,"style","style",-496642736),({"height": "100%", "width": "100%", "opacity": (cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","valid-graph?","looset-graph.app/valid-graph?",1732917457)], null)))?"100%":"40%")})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading.."], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mount_comp,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_comp], null));
});
looset_graph.app.graph_component = (function looset_graph$app$graph_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.graph_component_inner,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rerender","rerender",-1601192263),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","rerender-vis-sub","looset-graph.app/rerender-vis-sub",271428677)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),cljs.core.clj__GT_js(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes-visible","looset-graph.app/selected-nodes-visible",140267667)], null))),new cljs.core.Keyword(null,"vis-data","vis-data",558235347),cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275)], null))),new cljs.core.Keyword(null,"number-input","number-input",-1816352688),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(1)], null)),new cljs.core.Keyword(null,"number-input2","number-input2",-1638573151),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(2)], null)),new cljs.core.Keyword(null,"view","view",1247994814),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","vis-view","looset-graph.app/vis-view",-1975455240)], null)),new cljs.core.Keyword(null,"options","options",99638489),({"layout": ({"hierarchical": ({"enabled": looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","vis-option-hierarchy","looset-graph.app/vis-option-hierarchy",176055399)], null)), "direction": "UD", "sortMethod": "directed", "shakeTowards": "roots"})}), "physics": ({"enabled": false, "minVelocity": (1), "barnesHut": ({"gravitationalConstant": looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(1)], null)), "centralGravity": (0.01 * looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(2)], null)))})}), "nodes": ({"borderWidth": (1)})})], null)], null);
});
looset_graph.app.panel_splitter = (function looset_graph$app$panel_splitter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"width","width",-384071477),"6px",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize"], null),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),(function (){
var G__30976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","resizing-panels","looset-graph.app/resizing-panels",-912272966),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30976) : looset_graph.app._GT_evt.call(null,G__30976));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"1px solid gray"], null)], null)], null)], null);
});
looset_graph.app.botton_buttons = (function looset_graph$app$botton_buttons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-evenly",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"edit graph",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","toggle-edit-graph-text-area","looset-graph.app/toggle-edit-graph-text-area",1109374460)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30977) : looset_graph.app._GT_evt.call(null,G__30977));
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-editing-graph-text","f-editing-graph-text",866023663)], null))))?"button-1 active":"button-1")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.google.com/forms/d/e/1FAIpQLSc5SouA_vEHW8jqYrbt7IASidgaTngEwlclkrgeQ6RQXzM5nA/viewform?usp=sf_link"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-1","button.button-1",1246060018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Feedback"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"], null)], null)], null)], null)], null)], null);
});
looset_graph.app.svg_eye = (function looset_graph$app$svg_eye(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#eye.hover-gray-svg","svg#eye.hover-gray-svg",-255153922),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"], null)], null)], null);
});
looset_graph.app.svg_filled_eye = (function looset_graph$app$svg_filled_eye(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#eye.hover-gray-svg","svg#eye.hover-gray-svg",-255153922),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#4a484a",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"], null)], null)], null);
});
looset_graph.app.node_view = (function looset_graph$app$node_view(p__30986,text){
var map__30987 = p__30986;
var map__30987__$1 = cljs.core.__destructure_map(map__30987);
var map__30988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30987__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__30988__$1 = cljs.core.__destructure_map(map__30988);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30988__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__30989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30987__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__30989__$1 = cljs.core.__destructure_map(map__30989);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30989__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30989__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30989__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30989__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30987__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var selected_node_QMARK_ = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-node?","looset-graph.app/selected-node?",2103187204),node_id], null));
var mouse_select_mode = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543)], null));
var foldable_node_QMARK_ = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","foldable-node?","looset-graph.app/foldable-node?",-651734739),node_id], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),((5) + ((12) * level))], null),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),(function (){
var G__30991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),cljs.core.PersistentHashSet.createAsIfByAssoc([node_id])], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30991) : looset_graph.app._GT_evt.call(null,G__30991));
}),new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),(function (){
var G__30994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),cljs.core.PersistentHashSet.EMPTY], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30994) : looset_graph.app._GT_evt.call(null,G__30994));
})], null),(cljs.core.truth_(hidden_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_eye,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","toggle-hidden","looset-graph.app/toggle-hidden",-1838479241),node_id], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30995) : looset_graph.app._GT_evt.call(null,G__30995));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(6)], null),new cljs.core.Keyword(null,"width","width",-384071477),"27",new cljs.core.Keyword(null,"height","height",1025178622),"27"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_filled_eye,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","toggle-hidden","looset-graph.app/toggle-hidden",-1838479241),node_id], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30996) : looset_graph.app._GT_evt.call(null,G__30996));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(6)], null),new cljs.core.Keyword(null,"width","width",-384071477),"27",new cljs.core.Keyword(null,"height","height",1025178622),"27"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-list-item-clicked","looset-graph.app/nodes-list-item-clicked",-2099978840),path], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30997) : looset_graph.app._GT_evt.call(null,G__30997));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(selected_node_QMARK_)?"selected-shadow ":null),(cljs.core.truth_(mouse_select_mode)?"hover-gray select-mode-cursor":(cljs.core.truth_(foldable_node_QMARK_)?"hover-gray":""
))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "inherit";
}
})()], null)], null),text], null)], null);
});
looset_graph.app.svg_label = (function looset_graph$app$svg_label(p__30999){
var map__31001 = p__30999;
var map__31001__$1 = cljs.core.__destructure_map(map__31001);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31001__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31001__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
var rotation_degree = (cljs.core.truth_(opened_QMARK_)?"45":"0");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"20.3125",new cljs.core.Keyword(null,"height","height",1025178622),"13",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate (",rotation_degree,")"].join(''),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"20 0 15 32"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"width","width",-384071477),"26.326736",new cljs.core.Keyword(null,"height","height",1025178622),"27.940695",new cljs.core.Keyword(null,"x","x",2099068185),"4",new cljs.core.Keyword(null,"y","y",-1757859776),"4",new cljs.core.Keyword(null,"ry","ry",-334598563),"3.7885695"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"d","d",1972142424),"m 24,4 9.30351,0.007 13.81581,13.815798 -13.8158,14.110975 -11.32617,0.007"], null)], null)], null)], null);
});
looset_graph.app.svg_arrow_triangle = (function looset_graph$app$svg_arrow_triangle(p__31004){
var map__31005 = p__31004;
var map__31005__$1 = cljs.core.__destructure_map(map__31005);
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
var rotation_degree = (cljs.core.truth_(opened_QMARK_)?"0":"-90");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"16",new cljs.core.Keyword(null,"height","height",1025178622),"16",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"fill","fill",883462889),"#4a484a",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate (",rotation_degree,")"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], null)], null)], null);
});
looset_graph.app.label_node = (function looset_graph$app$label_node(p__31008){
var map__31009 = p__31008;
var map__31009__$1 = cljs.core.__destructure_map(map__31009);
var node_item = map__31009__$1;
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
var node_name = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map-name","looset-graph.app/nodes-map-name",989473135),node_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.node_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node_item,new cljs.core.Keyword(null,"class","class",-2030961996),"label-style",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_label,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),(function (){var or__5045__auto__ = node_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node_id;
}
})()], null)], null);
});
looset_graph.app.lix_node = (function looset_graph$app$lix_node(p__31015){
var map__31016 = p__31015;
var map__31016__$1 = cljs.core.__destructure_map(map__31016);
var node_item = map__31016__$1;
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31016__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31016__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.node_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node_item,new cljs.core.Keyword(null,"class","class",-2030961996),"lix-style"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((opened_QMARK_ == null))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_arrow_triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_], null)], null)),node_id], null)], null);
});
looset_graph.app.nodes_list_view = (function looset_graph$app$nodes_list_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","valid-graph?","looset-graph.app/valid-graph?",1732917457)], null)))?"100%":"40%")], null)], null),(function (){var iter__5523__auto__ = (function looset_graph$app$nodes_list_view_$_iter__31019(s__31020){
return (new cljs.core.LazySeq(null,(function (){
var s__31020__$1 = s__31020;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31020__$1);
if(temp__5804__auto__){
var s__31020__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31020__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31020__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31022 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31021 = (0);
while(true){
if((i__31021 < size__5522__auto__)){
var node_item = cljs.core._nth(c__5521__auto__,i__31021);
var node_type_comp = (function (){var G__31025 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node_item);
var fexpr__31024 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),looset_graph.app.label_node,new cljs.core.Keyword(null,"lix","lix",-499082631),looset_graph.app.lix_node], null);
return (fexpr__31024.cljs$core$IFn$_invoke$arity$1 ? fexpr__31024.cljs$core$IFn$_invoke$arity$1(G__31025) : fexpr__31024.call(null,G__31025));
})();
cljs.core.chunk_append(b__31022,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_type_comp,node_item], null));

var G__31246 = (i__31021 + (1));
i__31021 = G__31246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31022),looset_graph$app$nodes_list_view_$_iter__31019(cljs.core.chunk_rest(s__31020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31022),null);
}
} else {
var node_item = cljs.core.first(s__31020__$2);
var node_type_comp = (function (){var G__31027 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node_item);
var fexpr__31026 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),looset_graph.app.label_node,new cljs.core.Keyword(null,"lix","lix",-499082631),looset_graph.app.lix_node], null);
return (fexpr__31026.cljs$core$IFn$_invoke$arity$1 ? fexpr__31026.cljs$core$IFn$_invoke$arity$1(G__31027) : fexpr__31026.call(null,G__31027));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_type_comp,node_item], null),looset_graph$app$nodes_list_view_$_iter__31019(cljs.core.rest(s__31020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","fold-list","looset-graph.app/fold-list",-1113574836)], null)));
})()], null);
});
looset_graph.app.black_cursor_svg_path = "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z";
looset_graph.app.left_buttons = (function looset_graph$app$left_buttons(){
var icons_size = "22";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"inline-size","inline-size",-2060171616),"fit-content"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"move (shortcut: v)",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),false], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31028) : looset_graph.app._GT_evt.call(null,G__31028));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"select (shortcut: s)",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31029) : looset_graph.app._GT_evt.call(null,G__31029));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),looset_graph.app.black_cursor_svg_path], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"28px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#000000a1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"3px 0px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hierarchy layout",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions","looset-graph.app/organize-hierarchy-positions",-1487657518),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31030) : looset_graph.app._GT_evt.call(null,G__31030));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"default layout",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","clear-nodes-positions","looset-graph.app/clear-nodes-positions",-510351684)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31031) : looset_graph.app._GT_evt.call(null,G__31031));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5 1v8H1V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm13 2v5H9V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 13v2H3v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm12-1v2H9v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"], null)], null)], null)], null),(cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","show-unhide-button?","looset-graph.app/show-unhide-button?",510267080)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"show selected",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","show-selected","looset-graph.app/show-selected",-1072186890)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31032) : looset_graph.app._GT_evt.call(null,G__31032));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hide all selected",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","hide-all-or-selected","looset-graph.app/hide-all-or-selected",-1455882838)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31033) : looset_graph.app._GT_evt.call(null,G__31033));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"], null)], null)], null)], null)),(cljs.core.truth_(cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-show-expand-button?","f-show-expand-button?",-2064352372)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"expand selected",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","expand-selected","looset-graph.app/expand-selected",688171188)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31034) : looset_graph.app._GT_evt.call(null,G__31034));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"collapse all",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","collapse-all-or-selected","looset-graph.app/collapse-all-or-selected",-1376470635)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31035) : looset_graph.app._GT_evt.call(null,G__31035));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"], null)], null)], null)], null)),(function (){var disable_QMARK_ = cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"disable-select-source-target-button?","disable-select-source-target-button?",1272063056)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"select source",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","select-source","looset-graph.app/select-source",2095554696)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31038) : looset_graph.app._GT_evt.call(null,G__31038));
}),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(disable_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"#00000024",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed"], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(disable_QMARK_)?"#00000024":"currentColor"),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"select target",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__31039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","select-target","looset-graph.app/select-target",-1979841537)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31039) : looset_graph.app._GT_evt.call(null,G__31039));
}),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(disable_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"#00000024",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed"], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(disable_QMARK_)?"#00000024":"currentColor"),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"], null)], null)], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2.drag-button","button.button-2.drag-button",-335549370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"dispersion (click, hold and drag)",new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),(function (){
var canvas = cljs.core.first(document.getElementsByTagName("canvas"));
canvas.requestPointerLock().then((function (){
return console.log("Pointer lock acquired.");
})).catch((function (err){
return console.error("Pointer lock failed:",err);
}));

var G__31040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","dispersing-nodes","looset-graph.app/dispersing-nodes",558941410),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31040) : looset_graph.app._GT_evt.call(null,G__31040));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"], null)], null)], null)], null)], null)], null);
});
looset_graph.app.code_font_family = "dejavu sans mono, monospace";
looset_graph.app.code_font_size = "small";
looset_graph.app.code_margin = "0";
looset_graph.app.code_padding = "0 10px";
looset_graph.app.edit_raw_graph_text = (function looset_graph$app$edit_raw_graph_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),looset_graph.app.code_margin,new cljs.core.Keyword(null,"padding","padding",1660304693),looset_graph.app.code_padding,new cljs.core.Keyword(null,"min-height","min-height",398480837),"20vw",new cljs.core.Keyword(null,"font-family","font-family",-667419874),looset_graph.app.code_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),looset_graph.app.code_font_size], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31046_SHARP_){
var G__31048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-graph-text","looset-graph.app/set-graph-text",-991658461),p1__31046_SHARP_.target.value], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31048) : looset_graph.app._GT_evt.call(null,G__31048));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null)))], null)], null);
});
looset_graph.app.debug_quick_val_set = (function looset_graph$app$debug_quick_val_set(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"blabla"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Range1 ",looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(1000),new cljs.core.Keyword(null,"max","max",61366548),(4000),new cljs.core.Keyword(null,"value","value",305978217),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(1)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31049_SHARP_){
var G__31056 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),p1__31049_SHARP_.target.value,(1)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31056) : looset_graph.app._GT_evt.call(null,G__31056));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Range2 ",looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(2)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(2)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31050_SHARP_){
var G__31057 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),p1__31050_SHARP_.target.value,(2)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31057) : looset_graph.app._GT_evt.call(null,G__31057));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),(1)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31051_SHARP_){
var G__31058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),p1__31051_SHARP_.target.value], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31058) : looset_graph.app._GT_evt.call(null,G__31058));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Toggle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31052_SHARP_){
var G__31059_31263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-toggle-input","looset-graph.app/set-toggle-input",-337021915),p1__31052_SHARP_.target.checked], null);
(looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31059_31263) : looset_graph.app._GT_evt.call(null,G__31059_31263));

var G__31060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions","looset-graph.app/organize-hierarchy-positions",-1487657518),p1__31052_SHARP_.target.checked], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31060) : looset_graph.app._GT_evt.call(null,G__31060));
})], null)], null)], null)], null);
});
looset_graph.app.quattrocento_font = "Quattrocento, serif";
looset_graph.app.global_style = (function looset_graph$app$global_style(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),["\n   @import url('https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;500;600;700&family=Quattrocento&family=Roboto+Mono:wght@300;400;500;600;700&display=swap');\n\n    *::-webkit-scrollbar-track {\n        background: rgb(51 51 51 / 10%);\n    }\n    *::-webkit-scrollbar-thumb {\n        background: #bbb;\n    }\n    *::-webkit-scrollbar {\n        width: 5px;\n        height: 5px;\n    }\n\n   .hover-gray-svg:hover {\n     filter: drop-shadow(0px 2px 6px #0008);\n     cursor: pointer;\n   }\n\n   .hover-gray:hover {\n     text-shadow: -5px 3px 7px;\n     cursor: pointer;\n   }\n\n   .selected-shadow {\n     text-shadow: -5px 3px 7px #59d0e8;\n   }\n\n   .button-1 {\n     display: flex;\n     background-color: #4c4c4c;\n     border-radius: 8px;\n     border-style: none;\n     box-sizing: border-box;\n     color: #FFFFFF;\n     cursor: pointer;\n     font-family: ",looset_graph.app.quattrocento_font,";\n     font-size: 14px;\n     font-weight: 500;\n     line-height: 20px;\n     list-style: none;\n     margin: 0;\n     outline: none;\n     padding: 10px;\n     position: relative;\n     text-align: center;\n     text-decoration: none;\n     transition: color 100ms;\n     vertical-align: baseline;\n     user-select: none;\n     -webkit-user-select: none;\n     touch-action: manipulation;\n   }\n\n   .button-1:hover,\n   .button-1:focus {\n     background-color: #7c7c7c;\n   }\n\n   .button-1.active {\n     background-color: #1b5f4b; /* Different color for active state */\n     color: #d1d1d1;\n     font-weight: 600; /* Slightly bolder text */\n   }\n\n   .button-2:active {\n     background-color: #00000020;\n   }\n\n   .button-2 {\n      background-color: #0000000d;\n      backdrop-filter: blur(3px);\n      border-radius: 8px;\n      border-style: solid;\n      border-width: 2px;\n      border-color: #000000a1;\n      box-sizing: border-box;\n      cursor: pointer;\n      padding: 4px;\n      margin: 4px 0px;\n      transition: color 100ms;\n      user-select: none;\n      -webkit-user-select: none;\n      touch-action: manipulation;\n   }\n\n   .black-background {\n      background-color: #000000;\n   }\n\n   .drag-button {\n      cursor: se-resize;\n   }\n\n   .lix-style {\n     display: flex;\n     flex-direction: row;\n     font-family: ",looset_graph.app.label_font_family,", sans-serif;\n     font-size: large;\n     padding-bottom: 10px;\n     align-items: center;\n     color: #4a484a;\n   }\n\n   .label-style {\n     display: flex;\n     flex-direction: row;\n     font-family: ",looset_graph.app.label_font_family,", sans-serif;\n     font-size: large;\n     font-weight: bold;\n     padding-bottom: 10px;\n     align-items: center;\n   }\n\n   .select-mode-cursor {\n     cursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 16 16'%3E%3Cpath d='",looset_graph.app.black_cursor_svg_path,"'/%3E%3C/svg%3E\" ) 19 0,crosshair !important;\n   }\n   "].join('')], null);
});
/**
 * This is a workaround to be able to copy the id of selected nodes.
 *   It's a div that is outside of the viewport, its content is the selected nodes
 *   and its text is selected when new nodes are selected. If ctrl-c is pressed,
 *   then its text is copied.
 */
looset_graph.app.ctrl_c_selected_nodes = (function looset_graph$app$ctrl_c_selected_nodes(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#selection","div#selection",845865700),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"110vh",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"50vw"], null)], null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","raw-selected-nodes","looset-graph.app/raw-selected-nodes",406872326)], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)))], null);
});
looset_graph.app.main = (function looset_graph$app$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.global_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.ctrl_c_selected_nodes], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#panel-container","div#panel-container",1399195404),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543)], null)))?"select-mode-cursor":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100vh"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-panel","div#left-panel",-1416614301),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","left-panel-size","looset-graph.app/left-panel-size",-1724525274)], null)),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"20vw",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),looset_graph.app.quattrocento_font,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray"], null)], null),"Looset Graph"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.left_buttons], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.util.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.graph_component], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.panel_splitter], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#right-panel","div#right-panel",1659420965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),["calc(100vw - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","left-panel-size","looset-graph.app/left-panel-size",-1724525274)], null))),")"].join(''),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"20vw"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-component","div#text-component",-1450008949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"padding","padding",1660304693),"7px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.util.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.nodes_list_view], null)], null),(cljs.core.truth_(cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-editing-graph-text","f-editing-graph-text",866023663)], null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.edit_raw_graph_text], null):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.botton_buttons], null)], null)], null)], null);
});
looset_graph.app.set_toggle_input = (function looset_graph$app$set_toggle_input(app_state,p__31068){
var vec__31070 = p__31068;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31070,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31070,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"toggle-input","toggle-input",-1215066547)], null),n);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","set-toggle-input","looset-graph.app/set-toggle-input",-337021915),looset_graph.app.set_toggle_input);
looset_graph.app.toggle_input = (function looset_graph$app$toggle_input(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"toggle-input","toggle-input",-1215066547)], null),false);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","toggle-input","looset-graph.app/toggle-input",1447198779),looset_graph.app.toggle_input], 0));
looset_graph.app.set_number_input = (function looset_graph$app$set_number_input(app_state,p__31076){
var vec__31077 = p__31076;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31077,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31077,(1),null);
var knob = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31077,(2),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"number-input","number-input",-1816352688),knob], null),n);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),looset_graph.app.set_number_input);
looset_graph.app.number_input = (function looset_graph$app$number_input(app_state,p__31086){
var vec__31087 = p__31086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31087,(0),null);
var knob = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31087,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"number-input","number-input",-1816352688),knob], null),(0));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),looset_graph.app.number_input], 0));
looset_graph.app.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306),"=>label1:\n  node1\n  node2\n  node5\n\n=>label2:\n  node5\n\nnode3:\n  node4\n  node5\n\nnode1 -> node2\nnode4 -> node1\nnodeA -> nodeB",new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"resizing-panels","resizing-panels",-385038924),false,new cljs.core.Keyword(null,"left-panel-size","left-panel-size",-1199530188),"65vw"], null),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190),false,new cljs.core.Keyword(null,"fold","fold",-887461332),cljs.core.PersistentArrayMap.EMPTY], null)], null);
looset_graph.app.gzip = (function looset_graph$app$gzip(cs_mode,b_array){
var cs = (new cs_mode("gzip"));
var writer = cs.writable.getWriter();
writer.write(b_array);

writer.close();

return (new Response(cs.readable)).arrayBuffer();
});
looset_graph.app.gzip_compress = (function looset_graph$app$gzip_compress(string){
var $ = string;
var $__$1 = (new TextEncoder()).encode($);
var $__$2 = looset_graph.app.gzip(CompressionStream,$__$1);
return $__$2.then((function (p1__31092_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,(new Uint8Array(p1__31092_SHARP_))));
}));
});
looset_graph.app.gzip_decompress = (function looset_graph$app$gzip_decompress(compressed_string){
var $ = compressed_string;
var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31093_SHARP_){
return p1__31093_SHARP_.charCodeAt((0));
}),$);
var $__$2 = (new Uint8Array($__$1));
var $__$3 = looset_graph.app.gzip(DecompressionStream,$__$2);
return $__$3.then((function (p1__31094_SHARP_){
return (new TextDecoder()).decode(p1__31094_SHARP_);
}));
});
looset_graph.app.set_url_state_interceptor = re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((function (graph_text){
return looset_graph.app.gzip_compress(graph_text).then((function (p1__31099_SHARP_){
var loc = window.location;
return window.history.pushState(graph_text,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),"?graph=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(btoa(p1__31099_SHARP_)))].join(''));
}));
}),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null)], 0));
re_frame.alpha.reg_global_interceptor(looset_graph.app.set_url_state_interceptor);
looset_graph.app.init_url_history_observer = (function looset_graph$app$init_url_history_observer(){
return window.addEventListener("popstate",(function (p1__31102_SHARP_){
console.log("back pressed");

return console.log("event",p1__31102_SHARP_.state);
}));
});
looset_graph.app.init_mousemove = (function looset_graph$app$init_mousemove(){
return document.body.addEventListener("mousemove",(function (p1__31104_SHARP_){
var G__31105 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-moved","looset-graph.app/mouse-moved",-432137308),p1__31104_SHARP_.x,p1__31104_SHARP_.y,p1__31104_SHARP_.movementX,p1__31104_SHARP_.movementY], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31105) : looset_graph.app._GT_evt.call(null,G__31105));
}));
});
looset_graph.app.init_keyboard_events = (function looset_graph$app$init_keyboard_events(){
return document.body.addEventListener("keypress",(function (p1__31107_SHARP_){
var G__31108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","keypress","looset-graph.app/keypress",11345896),p1__31107_SHARP_.key], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31108) : looset_graph.app._GT_evt.call(null,G__31108));
}));
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-app-state","looset-graph.app/set-app-state",272477228),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),(function (_,p__31110){
var vec__31111 = p__31110;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31111,(0),null);
var graph_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31111,(1),null);
return looset_graph.app.set_graph_text(looset_graph.app.initial_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,graph_text], null));
}));
looset_graph.app.init_state = (function looset_graph$app$init_state(){
var compressed_graph = (new URLSearchParams(window.location.search)).get("graph");
var default_graph = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(looset_graph.app.initial_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null));
if(cljs.core.truth_(compressed_graph)){
return looset_graph.app.gzip_decompress(atob(compressed_graph)).then((function (p1__31115_SHARP_){
return re_frame.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-app-state","looset-graph.app/set-app-state",272477228),p1__31115_SHARP_], null));
}));
} else {
return re_frame.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-app-state","looset-graph.app/set-app-state",272477228),default_graph], null));
}
});
looset_graph.app.mouse_up = (function looset_graph$app$mouse_up(p__31117){
var map__31119 = p__31117;
var map__31119__$1 = cljs.core.__destructure_map(map__31119);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31119__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814)], null)], null)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(looset_graph.app.dispersing_nodes(looset_graph.app.resizing_panels(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),false], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),false], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"diagram","diagram",1347243758),new cljs.core.Keyword(null,"zooming?","zooming?",-1351537377)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-dragging?","graph-dragging?",-921103561)], null),false)], null);
});
re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),looset_graph.app.mouse_up);
looset_graph.app.init_mouseup = (function looset_graph$app$init_mouseup(){
return document.body.addEventListener("mouseup",(function (){
document.exitPointerLock();

var G__31121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),false], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__31121) : looset_graph.app._GT_evt.call(null,G__31121));
}));
});
looset_graph.app.mount_app_element = (function looset_graph$app$mount_app_element(){
if(goog.DEBUG){
re_frame.alpha.clear_subscription_cache_BANG_();
} else {
}

var temp__5804__auto__ = document.getElementById("root");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.main], null),el);
} else {
return null;
}
});
looset_graph.app.init = (function looset_graph$app$init(){
looset_graph.app.init_state();

looset_graph.app.init_mousemove();

looset_graph.app.mount_app_element();

looset_graph.app.init_mouseup();

looset_graph.app.init_url_history_observer();

return looset_graph.app.init_keyboard_events();
});

//# sourceMappingURL=looset_graph.app.js.map
