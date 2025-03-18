goog.provide('looset_graph.app');
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
var G__29903 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29904){
var vec__29905 = p__29904;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29905,(0),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29905,(1),null);
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),defaults_vec));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29903) : f.call(null,G__29903));
});
});
looset_graph.app.event_to_analytics = re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-to-analytics","event-to-analytics",-1066580530),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var vec__29908 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context));
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29908,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29908,(1),null);
var evt_name = (((evt instanceof cljs.core.Keyword))?cljs.core.name(evt):cljs.core.str.cljs$core$IFn$_invoke$arity$1(evt));
var map__GT_str = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.map_QMARK_(v))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(v):v));
});
var evt_value = ((cljs.core.map_QMARK_(value))?cljs.core.clj__GT_js(cljs.core.reduce_kv(map__GT_str,cljs.core.PersistentArrayMap.EMPTY,value)):({"value": value}));
gtag("event",evt_name,evt_value);

return context;
})], 0));
looset_graph.app.type_str__GT_type = (function looset_graph$app$type_str__GT_type(p1__29911_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("labelID",p1__29911_SHARP_)){
return new cljs.core.Keyword(null,"label","label",1718410804);
} else {
return new cljs.core.Keyword(null,"lix","lix",-499082631);
}
});
looset_graph.app.extract_nodes_from_edge_rule = (function looset_graph$app$extract_nodes_from_edge_rule(edge){
var node_from_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null));
var node_from_type = looset_graph.app.type_str__GT_type(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)));
var node_to_type = looset_graph.app.type_str__GT_type(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null)));
var node_to_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1),(1)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([node_from_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),node_from_type,new cljs.core.Keyword(null,"edges-to","edges-to",-879806584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameless","nameless",-1381108351),cljs.core.PersistentHashSet.createAsIfByAssoc([node_to_id])], null)], null)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([node_to_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),node_to_type,new cljs.core.Keyword(null,"edges-from","edges-from",779403865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nameless","nameless",-1381108351),cljs.core.PersistentHashSet.createAsIfByAssoc([node_from_id])], null)], null)])], null);
});
looset_graph.app.find_visible = (function looset_graph$app$find_visible(var_args){
var G__29913 = arguments.length;
switch (G__29913) {
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
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373))], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__29914){
var map__29915 = p__29914;
var map__29915__$1 = cljs.core.__destructure_map(map__29915);
var fold_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29915__$1,new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186));
return looset_graph.app.visible_nodes(fold_list);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702)], null)], null));
looset_graph.app.selected_nodes = (function looset_graph$app$selected_nodes(p__29919){
var vec__29920 = p__29919;
var hovered_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29920,(0),null);
var clicked_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29920,(1),null);
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29920,(2),null);
if(cljs.core.empty_QMARK_(hovered_node)){
return clicked_nodes;
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(hovered_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29918_SHARP_,p2__29917_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p2__29917_SHARP_),p1__29918_SHARP_);
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29916_SHARP_){
return cljs.core.contains_QMARK_(hovered_node,cljs.core.first(p1__29916_SHARP_));
}),nodes_map))));
}
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","hovered-node","looset-graph.app/hovered-node",859186206)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","clicked-nodes","looset-graph.app/clicked-nodes",-1714569755)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),looset_graph.app.selected_nodes], 0));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hovs","hovs",-1548560527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"hovered-node","hovered-node",367079976)], null),new cljs.core.Keyword(null,"clks","clks",511482441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"clicked-nodes","clicked-nodes",911912943)], null),new cljs.core.Keyword(null,"nmap","nmap",-481624572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__29923){
var map__29924 = p__29923;
var map__29924__$1 = cljs.core.__destructure_map(map__29924);
var hovs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924__$1,new cljs.core.Keyword(null,"hovs","hovs",-1548560527));
var clks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924__$1,new cljs.core.Keyword(null,"clks","clks",511482441));
var nmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29924__$1,new cljs.core.Keyword(null,"nmap","nmap",-481624572));
return looset_graph.app.selected_nodes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = hovs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var or__5045__auto__ = clks;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),nmap], null));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718)], null)], null));
looset_graph.app.selected_nodes_visible = (function looset_graph$app$selected_nodes_visible(p__29925){
var vec__29926 = p__29925;
var selected_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29926,(0),null);
var visible_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29926,(1),null);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_nodes,visible_nodes);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","selected-nodes-visible","looset-graph.app/selected-nodes-visible",140267667),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","visible-nodes","looset-graph.app/visible-nodes",-1346922823)], null),looset_graph.app.selected_nodes_visible], 0));
looset_graph.app.selected_node_QMARK_ = (function looset_graph$app$selected_node_QMARK_(selected_nodes,p__29929){
var vec__29930 = p__29929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29930,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29930,(1),null);
return cljs.core.contains_QMARK_(selected_nodes,node);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","selected-node?","looset-graph.app/selected-node?",2103187204),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632)], null),looset_graph.app.selected_node_QMARK_], 0));
looset_graph.app.text__GT_color = (function looset_graph$app$text__GT_color(text){
var G__29933 = cljs.core.mod(cljs.core.hash(text),(50));
switch (G__29933) {
case (0):
return "#31711c";

break;
case (1):
return "#58a73e";

break;
case (2):
return "#4ca72e";

break;
case (3):
return "#308b12";

break;
case (4):
return "#256311";

break;
case (5):
return "#204b12";

break;
case (6):
return "#234518";

break;
case (7):
return "#2f4d26";

break;
case (8):
return "#466d3a";

break;
case (9):
return "#5b9549";

break;
case (10):
return "#762974";

break;
case (11):
return "#551653";

break;
case (12):
return "#532051";

break;
case (13):
return "#6b3269";

break;
case (14):
return "#954692";

break;
case (15):
return "#af46ab";

break;
case (16):
return "#b336ae";

break;
case (17):
return "#a524a0";

break;
case (18):
return "#8b1786";

break;
case (19):
return "#5f105b";

break;
case (20):
return "#061870";

break;
case (21):
return "#04135f";

break;
case (22):
return "#0b1a69";

break;
case (23):
return "#152681";

break;
case (24):
return "#1129a5";

break;
case (25):
return "#041ea7";

break;
case (26):
return "#0826c3";

break;
case (27):
return "#1931b1";

break;
case (28):
return "#1c3097";

break;
case (29):
return "#19297b";

break;
case (30):
return "#f7c545";

break;
case (31):
return "#f7c031";

break;
case (32):
return "#dbaa29";

break;
case (33):
return "#c59c30";

break;
case (34):
return "#c39f41";

break;
case (35):
return "#cbaa52";

break;
case (36):
return "#f1cb65";

break;
case (37):
return "#b39648";

break;
case (38):
return "#9d8033";

break;
case (39):
return "#bd8f13";

break;
case (40):
return "#6b90bc";

break;
case (41):
return "#73a1d7";

break;
case (42):
return "#5980ad";

break;
case (43):
return "#587597";

break;
case (44):
return "#3e6695";

break;
case (45):
return "#4f84c1";

break;
case (46):
return "#629bdd";

break;
case (47):
return "#65a9f7";

break;
case (48):
return "#37567b";

break;
case (49):
return "#4283d1";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29933)].join('')));

}
});
looset_graph.app.label_font_family = "Proza Libre";
looset_graph.app.vis_data = (function looset_graph$app$vis_data(p__29937){
var vec__29938 = p__29937;
var visible_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29938,(0),null);
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29938,(1),null);
var nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29934_SHARP_){
var G__29941 = cljs.core.first(p1__29934_SHARP_);
return (visible_nodes.cljs$core$IFn$_invoke$arity$1 ? visible_nodes.cljs$core$IFn$_invoke$arity$1(G__29941) : visible_nodes.call(null,G__29941));
}),nodes_map));
var __GT_node = (function (p__29942){
var vec__29943 = p__29942;
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29943,(0),null);
var map__29946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29943,(1),null);
var map__29946__$1 = cljs.core.__destructure_map(map__29946);
var map__29947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29946__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__29947__$1 = cljs.core.__destructure_map(map__29947);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947__$1,"y");
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29946__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29946__$1,new cljs.core.Keyword(null,"name","name",1843675177),node_id);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"margin","margin",-995903681)],[y,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border","border",1444987323),"gray"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"label","label",1718410804)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"face","face",-1356480717),looset_graph.app.label_font_family,new cljs.core.Keyword(null,"multi","multi",-190293005),"html",new cljs.core.Keyword(null,"color","color",1011675173),looset_graph.app.text__GT_color(node_id)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"label","label",1718410804)))?["<b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"</b>"].join(''):name),node_id,"box",x,true,(7)]);
});
var get_from_set = (function (p1__29935_SHARP_){
return looset_graph.app.find_visible.cljs$core$IFn$_invoke$arity$3(visible_nodes,nodes_map,p1__29935_SHARP_);
});
var get_to_set = (function (p1__29936_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(looset_graph.app.find_visible,visible_nodes,nodes_map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,new cljs.core.Keyword(null,"edges-to","edges-to",-879806584).cljs$core$IFn$_invoke$arity$1(p1__29936_SHARP_)))], 0));
});
var __GT_edge = (function (p__29948){
var vec__29949 = p__29948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29949,(1),null);
var iter__5523__auto__ = (function looset_graph$app$vis_data_$_iter__29952(s__29953){
return (new cljs.core.LazySeq(null,(function (){
var s__29953__$1 = s__29953;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29953__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var from = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__29953__$1,from,xs__6360__auto__,temp__5804__auto__,vec__29949,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__29938,visible_nodes,nodes_map){
return (function looset_graph$app$vis_data_$_iter__29952_$_iter__29954(s__29955){
return (new cljs.core.LazySeq(null,((function (s__29953__$1,from,xs__6360__auto__,temp__5804__auto__,vec__29949,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__29938,visible_nodes,nodes_map){
return (function (){
var s__29955__$1 = s__29955;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29955__$1);
if(temp__5804__auto____$1){
var s__29955__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29955__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29955__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29957 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29956 = (0);
while(true){
if((i__29956 < size__5522__auto__)){
var to = cljs.core._nth(c__5521__auto__,i__29956);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
cljs.core.chunk_append(b__29957,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"arrows","arrows",-1209622014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"type","type",1174270348),"arrow"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),"#33a0ff"], null)], null));

var G__30215 = (i__29956 + (1));
i__29956 = G__30215;
continue;
} else {
var G__30216 = (i__29956 + (1));
i__29956 = G__30216;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29957),looset_graph$app$vis_data_$_iter__29952_$_iter__29954(cljs.core.chunk_rest(s__29955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29957),null);
}
} else {
var to = cljs.core.first(s__29955__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"arrows","arrows",-1209622014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"type","type",1174270348),"arrow"], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),"#33a0ff"], null)], null),looset_graph$app$vis_data_$_iter__29952_$_iter__29954(cljs.core.rest(s__29955__$2)));
} else {
var G__30217 = cljs.core.rest(s__29955__$2);
s__29955__$1 = G__30217;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29953__$1,from,xs__6360__auto__,temp__5804__auto__,vec__29949,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__29938,visible_nodes,nodes_map))
,null,null));
});})(s__29953__$1,from,xs__6360__auto__,temp__5804__auto__,vec__29949,k,v,nodes,__GT_node,get_from_set,get_to_set,vec__29938,visible_nodes,nodes_map))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(get_to_set(v)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,looset_graph$app$vis_data_$_iter__29952(cljs.core.rest(s__29953__$1)));
} else {
var G__30218 = cljs.core.rest(s__29953__$1);
s__29953__$1 = G__30218;
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
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible-nodes","visible-nodes",1361897651),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-visible-nodes","f-visible-nodes",1897173702)),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077))], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__29958){
var map__29959 = p__29958;
var map__29959__$1 = cljs.core.__destructure_map(map__29959);
var visible_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29959__$1,new cljs.core.Keyword(null,"visible-nodes","visible-nodes",1361897651));
var nodes_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29959__$1,new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077));
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
var foldable_id_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(foldable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null));
var foldable_type_str = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(foldable,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null));
var foldable_type = looset_graph.app.type_str__GT_type(foldable_type_str);
var label_or_parent = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),foldable_type))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.PersistentHashSet.createAsIfByAssoc([foldable_id_name])], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),foldable_id_name], null));
var extract_node_info = (function (node){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
var type_str = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
var type = looset_graph.app.type_str__GT_type(type_str);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label_or_parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null)], 0))]);
});
var inner_nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(extract_node_info,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),foldable));
var foldable_id_node = cljs.core.PersistentArrayMap.createAsIfByAssoc([foldable_id_name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),foldable_type,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inner_nodes], 0))),new cljs.core.Keyword(null,"foldable","foldable",1906383028),((cljs.core.seq(inner_nodes))?true:false),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"global","global",93595047)], null)]);
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
var len__5769__auto___30219 = arguments.length;
var i__5770__auto___30220 = (0);
while(true){
if((i__5770__auto___30220 < len__5769__auto___30219)){
args__5775__auto__.push((arguments[i__5770__auto___30220]));

var G__30221 = (i__5770__auto___30220 + (1));
i__5770__auto___30220 = G__30221;
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
var G__30222__i = 0, G__30222__a = new Array(arguments.length -  0);
while (G__30222__i < G__30222__a.length) {G__30222__a[G__30222__i] = arguments[G__30222__i + 0]; ++G__30222__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__30222__a,0,null);
} 
return looset_graph$app$m__delegate.call(this,maps__$1);};
looset_graph$app$m.cljs$lang$maxFixedArity = 0;
looset_graph$app$m.cljs$lang$applyTo = (function (arglist__30223){
var maps__$1 = cljs.core.seq(arglist__30223);
return looset_graph$app$m__delegate(maps__$1);
});
looset_graph$app$m.cljs$core$IFn$_invoke$arity$variadic = looset_graph$app$m__delegate;
return looset_graph$app$m;
})()
,maps);
}));

(looset_graph.app.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(looset_graph.app.deep_merge_with.cljs$lang$applyTo = (function (seq29960){
var G__29961 = cljs.core.first(seq29960);
var seq29960__$1 = cljs.core.next(seq29960);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29961,seq29960__$1);
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
looset_graph.app.nodes_hierarchy = (function looset_graph$app$nodes_hierarchy(nodes_map){
return new cljs.core.Keyword(null,"global","global",93595047).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__29964){
var vec__29965 = p__29964;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29965,(1),null);
var v__$1 = ((cljs.core.not((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(v);
}
})()))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"global","global",93595047)):v);
var path = (function() {
var looset_graph$app$nodes_hierarchy_$_path = null;
var looset_graph$app$nodes_hierarchy_$_path__1 = (function (cur){
var temp__5802__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cur);
if(cljs.core.truth_(temp__5802__auto__)){
var parent = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(looset_graph$app$nodes_hierarchy_$_path.cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(parent) : nodes_map.call(null,parent))),parent);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
var looset_graph$app$nodes_hierarchy_$_path__2 = (function (cur_k,cur_v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(looset_graph$app$nodes_hierarchy_$_path.cljs$core$IFn$_invoke$arity$1(cur_v),cur_k);
});
looset_graph$app$nodes_hierarchy_$_path = function(cur_k,cur_v){
switch(arguments.length){
case 1:
return looset_graph$app$nodes_hierarchy_$_path__1.call(this,cur_k);
case 2:
return looset_graph$app$nodes_hierarchy_$_path__2.call(this,cur_k,cur_v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
looset_graph$app$nodes_hierarchy_$_path.cljs$core$IFn$_invoke$arity$1 = looset_graph$app$nodes_hierarchy_$_path__1;
looset_graph$app$nodes_hierarchy_$_path.cljs$core$IFn$_invoke$arity$2 = looset_graph$app$nodes_hierarchy_$_path__2;
return looset_graph$app$nodes_hierarchy_$_path;
})()
;
var to_assoc = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(r,path(k,v__$1),cljs.core.PersistentArrayMap.EMPTY);
var with_node_assoced = cljs.core.assoc_in(r,path(k,v__$1),to_assoc);
var with_its_labels_assoced = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29962_SHARP_,p2__29963_SHARP_){
return cljs.core.assoc_in(p1__29962_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path(p2__29963_SHARP_,(nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(p2__29963_SHARP_) : nodes_map.call(null,p2__29963_SHARP_))),k),to_assoc);
}),with_node_assoced,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(v__$1));
return with_its_labels_assoced;
}),cljs.core.PersistentArrayMap.EMPTY,nodes_map));
});
looset_graph.app.nodes_list = (function looset_graph$app$nodes_list(path,nodes_map,fold_ui,p__29969){
var vec__29970 = p__29969;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29970,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29970,(1),null);
var opened_QMARK_ = ((cljs.core.seq(node_children))?new cljs.core.Keyword(null,"opened?","opened?",1096959669).cljs$core$IFn$_invoke$arity$2((fold_ui.cljs$core$IFn$_invoke$arity$1 ? fold_ui.cljs$core$IFn$_invoke$arity$1(node) : fold_ui.call(null,node)),false):null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node,new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node))),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node),new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.count(path),new cljs.core.Keyword(null,"color","color",1011675173),looset_graph.app.text__GT_color(node),new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node) : nodes_map.call(null,node)))], null),(cljs.core.truth_(opened_QMARK_)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__29968_SHARP_){
var G__29973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node);
var G__29974 = nodes_map;
var G__29975 = (fold_ui.cljs$core$IFn$_invoke$arity$1 ? fold_ui.cljs$core$IFn$_invoke$arity$1(node) : fold_ui.call(null,node));
var G__29976 = p1__29968_SHARP_;
return (looset_graph.app.nodes_list.cljs$core$IFn$_invoke$arity$4 ? looset_graph.app.nodes_list.cljs$core$IFn$_invoke$arity$4(G__29973,G__29974,G__29975,G__29976) : looset_graph.app.nodes_list.call(null,G__29973,G__29974,G__29975,G__29976));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_children], 0)):null));
});
looset_graph.app.nodes_ui = (function looset_graph$app$nodes_ui(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.PersistentArrayMap.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","nodes-ui","looset-graph.app/nodes-ui",1686649915),looset_graph.app.nodes_ui], 0));
looset_graph.app.fold_ui = (function looset_graph$app$fold_ui(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),cljs.core.PersistentArrayMap.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","fold-ui","looset-graph.app/fold-ui",-931133018),looset_graph.app.fold_ui], 0));
looset_graph.app.sort_nodes = (function looset_graph$app$sort_nodes(nodes_map,nodes_hierarchy){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__29977){
var vec__29978 = p__29977;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(1),null);
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(k) : nodes_map.call(null,k)));
}),nodes_hierarchy);
});
looset_graph.app.nodes_map__GT_fold_list = (function looset_graph$app$nodes_map__GT_fold_list(p__29982){
var vec__29983 = p__29982;
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29983,(0),null);
var fold_ui = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29983,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__29981_SHARP_){
return looset_graph.app.nodes_list(cljs.core.PersistentVector.EMPTY,nodes_map,fold_ui,p1__29981_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([looset_graph.app.sort_nodes(nodes_map,looset_graph.app.nodes_hierarchy(nodes_map))], 0));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","fold-list","looset-graph.app/fold-list",-1113574836),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","fold-ui","looset-graph.app/fold-ui",-931133018)], null),looset_graph.app.nodes_map__GT_fold_list], 0));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)),new cljs.core.Keyword(null,"fold-ui","fold-ui",-399296592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__29986){
var map__29987 = p__29986;
var map__29987__$1 = cljs.core.__destructure_map(map__29987);
var nodes_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29987__$1,new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077));
var fold_ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29987__$1,new cljs.core.Keyword(null,"fold-ui","fold-ui",-399296592));
return looset_graph.app.nodes_map__GT_fold_list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes_map,fold_ui], null));
})], null));
looset_graph.app.get_edn_string = (function looset_graph$app$get_edn_string(var_args){
var G__29989 = arguments.length;
switch (G__29989) {
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

(looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__29990){
var vec__29991 = p__29990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29991,(1),null);
var all = vec__29991;
if(cljs.core.array_QMARK_(s)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(looset_graph.app.get_edn_string,acc,cljs.core.rest(all));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
}));

(looset_graph.app.get_edn_string.cljs$lang$maxFixedArity = 2);

looset_graph.app.extract_edn_props = (function looset_graph$app$extract_edn_props(node_prop){
var node_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_prop,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null));
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_prop,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(looset_graph.app.get_edn_string.cljs$core$IFn$_invoke$arity$1(edn))])], null);
});
looset_graph.app.no_memo_nodes_map_STAR_ = (function looset_graph$app$no_memo_nodes_map_STAR_(p__29997){
var map__29998 = p__29997;
var map__29998__$1 = cljs.core.__destructure_map(map__29998);
var graph_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29998__$1,new cljs.core.Keyword(null,"graph-ast","graph-ast",1036545926));
var nodes_from_edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(looset_graph.app.extract_nodes_from_edge_rule,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29994_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("edge",cljs.core.first(p1__29994_SHARP_));
}),graph_ast)], 0));
var node_props = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(looset_graph.app.extract_edn_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29995_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nodeProps",cljs.core.first(p1__29995_SHARP_));
}),graph_ast)], 0));
return looset_graph.app.merge_nodes(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(node_props,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes_from_edges,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(looset_graph.app.extract_nodes_from_foldable_rule,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29996_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("foldable",cljs.core.first(p1__29996_SHARP_));
}),graph_ast)))));
});
looset_graph.app.nodes_map_STAR_ = cljs.core.memoize(looset_graph.app.no_memo_nodes_map_STAR_);
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nodes-map*","nodes-map*",-1832291502),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-ast","graph-ast",1036545926),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph-ast","valid-graph-ast",-1530786594)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.nodes_map_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map*","nodes-map*",-1832291502)], null)], null));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes-ui","nodes-ui",89369141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),new cljs.core.Keyword(null,"nodes-map*","nodes-map*",-1832291502),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map*","nodes-map*",-1832291502))], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__29999){
var map__30000 = p__29999;
var map__30000__$1 = cljs.core.__destructure_map(map__30000);
var nodes_ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30000__$1,new cljs.core.Keyword(null,"nodes-ui","nodes-ui",89369141));
var nodes_map_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30000__$1,new cljs.core.Keyword(null,"nodes-map*","nodes-map*",-1832291502));
return looset_graph.app.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((function (res,v){
if(cljs.core.map_QMARK_(res)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res,v], 0));
} else {
return v;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes_map_STAR_,cljs.core.select_keys(nodes_ui,cljs.core.keys(nodes_map_STAR_))], 0));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null)], null));
looset_graph.app.nodes_map = (function looset_graph$app$nodes_map(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565),looset_graph.app.nodes_map], 0));
looset_graph.app.nodes_map_name = (function looset_graph$app$nodes_map_name(nodes_map,p__30001){
var vec__30002 = p__30001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(0),null);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(1),null);
try{cljs.core.tap_GT_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node_id) : nodes_map.call(null,node_id)))], null));

return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((nodes_map.cljs$core$IFn$_invoke$arity$1 ? nodes_map.cljs$core$IFn$_invoke$arity$1(node_id) : nodes_map.call(null,node_id)));
}catch (e30005){var ___$1 = e30005;
return null;
}});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","nodes-map-name","looset-graph.app/nodes-map-name",989473135),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map","looset-graph.app/nodes-map",-912763565)], null),looset_graph.app.nodes_map_name], 0));
looset_graph.app.foldable_QMARK_ = (function looset_graph$app$foldable_QMARK_(nodes_map,p__30006){
var vec__30007 = p__30006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(1),null);
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
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),new cljs.core.Keyword(null,"->","->",514830339),(function (p1__30010_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__30010_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false);
})], 0));
looset_graph.app.clicked_nodes = (function looset_graph$app$clicked_nodes(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"clicked-nodes","clicked-nodes",911912943)], null),cljs.core.PersistentHashSet.EMPTY);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","clicked-nodes","looset-graph.app/clicked-nodes",-1714569755),looset_graph.app.clicked_nodes], 0));
looset_graph.app.hidden_nodes = (function looset_graph$app$hidden_nodes(nodes_ui){
var G__30012 = nodes_ui;
var G__30012__$1 = (((G__30012 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30011_SHARP_){
return new cljs.core.Keyword(null,"hidden?","hidden?",1339691380).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30011_SHARP_));
}),G__30012));
if((G__30012__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,G__30012__$1);
}
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","hidden-nodes","looset-graph.app/hidden-nodes",860218854),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-ui","looset-graph.app/nodes-ui",1686649915)], null),looset_graph.app.hidden_nodes], 0));
looset_graph.app.show_unhide_button_QMARK_ = (function looset_graph$app$show_unhide_button_QMARK_(p__30013){
var vec__30014 = p__30013;
var selected_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30014,(0),null);
var hidden_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30014,(1),null);
var and__5043__auto__ = hidden_nodes;
if(cljs.core.truth_(and__5043__auto__)){
return (((cljs.core.count(selected_nodes) > (1))) && (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_nodes),cljs.core.set(hidden_nodes)))));
} else {
return and__5043__auto__;
}
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","show-unhide-button?","looset-graph.app/show-unhide-button?",510267080),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes","looset-graph.app/selected-nodes",1407736632)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","hidden-nodes","looset-graph.app/hidden-nodes",860218854)], null),looset_graph.app.show_unhide_button_QMARK_], 0));
looset_graph.app.show_expand_button_QMARK_ = (function looset_graph$app$show_expand_button_QMARK_(p__30018){
var map__30019 = p__30018;
var map__30019__$1 = cljs.core.__destructure_map(map__30019);
var selected_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var fold_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186));
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(selected_nodes),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node-id","node-id",779482292),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30017_SHARP_){
return new cljs.core.Keyword(null,"opened?","opened?",1096959669).cljs$core$IFn$_invoke$arity$1(p1__30017_SHARP_) === false;
}),fold_list)))));
});
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-show-expand-button?","f-show-expand-button?",-2064352372),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718)),new cljs.core.Keyword(null,"fold-list","fold-list",-1762441186),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"f-fold-list","f-fold-list",97845373))], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.show_expand_button_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"f-show-expand-button?","f-show-expand-button?",-2064352372)], null)], null));
looset_graph.app.nodes_map__GT_graph_text_reduce_step = (function looset_graph$app$nodes_map__GT_graph_text_reduce_step(nodes_map){
return (function (p__30023,p__30024){
var vec__30025 = p__30023;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30025,(0),null);
var edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30025,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30025,(2),null);
var vec__30028 = p__30024;
var node_k_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30028,(0),null);
var node_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30028,(1),null);
var rename_if_label = (function (p1__30020_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(nodes_map,p1__30020_SHARP_,cljs.core.PersistentArrayMap.EMPTY)))){
return ["=>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30020_SHARP_)].join('');
} else {
return p1__30020_SHARP_;
}
});
var node_k = rename_if_label(node_k_STAR_);
var node_children = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rename_if_label,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_v)));
var edges_to = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rename_if_label,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.vals(new cljs.core.Keyword(null,"edges-to","edges-to",-879806584).cljs$core$IFn$_invoke$arity$1(node_v))))));
var custom_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(node_v,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edges-to","edges-to",-879806584),new cljs.core.Keyword(null,"edges-from","edges-from",779403865),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"foldable","foldable",1906383028),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], 0));
var custom_props_STAR_ = cljs.core.select_keys(node_v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(custom_props,custom_props_STAR_))?null:(function(){throw (new Error(["Assert failed: ",["Some new node property was added, so should it be included in the text model or not?\nThe difference was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.diff(custom_props,custom_props_STAR_))].join(''),"\n","(= custom-props custom-props*)"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((node_children)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children,node_k,":\n"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30021_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30021_SHARP_),"\n"].join('');
}),node_children),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null)], 0)))):children),((edges_to)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30022_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_k)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30022_SHARP_),"\n"].join('');
}),edges_to)))):edges),((cljs.core.seq(custom_props))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(props),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(custom_props),"\n"].join(''):props)], null);
});
});
looset_graph.app.nodes_map__GT_graph_text = (function looset_graph$app$nodes_map__GT_graph_text(p__30031){
var vec__30032 = p__30031;
var nodes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30032,(0),null);
return (function (p__30035){
var vec__30036 = p__30035;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(0),null);
var edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(children),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edges),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props)].join('');
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(looset_graph.app.nodes_map__GT_graph_text_reduce_step(nodes_map),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null),nodes_map));
});
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ui-graph-text","ui-graph-text",-509173602),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),re_frame.alpha.flow_LT__(new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077))], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.with_defaults(looset_graph.app.nodes_map__GT_graph_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null)], null));
re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-editing-graph-text","f-editing-graph-text",866023663),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),looset_graph.app.with_defaults(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190),false], null)),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190)], null)], null));
looset_graph.app.resizing_panels = (function looset_graph$app$resizing_panels(app_state,p__30039){
var vec__30040 = p__30039;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30040,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30040,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"resizing-panels","resizing-panels",-385038924)], null),new_state);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","resizing-panels","looset-graph.app/resizing-panels",-912272966),looset_graph.app.resizing_panels);
looset_graph.app.mouse_moved = (function looset_graph$app$mouse_moved(app_state,p__30043){
var vec__30044 = p__30043;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30044,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30044,(1),null);
var _y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30044,(2),null);
var resizing_panels_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"resizing-panels","resizing-panels",-385038924)], null));
var G__30047 = app_state;
if(cljs.core.truth_(resizing_panels_QMARK_)){
return cljs.core.assoc_in(G__30047,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"left-panel-size","left-panel-size",-1199530188)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''));
} else {
return G__30047;
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","mouse-moved","looset-graph.app/mouse-moved",-432137308),looset_graph.app.mouse_moved);
looset_graph.app.memo_graph_ast = cljs.core.memoize(looset_graph.graph_parser.graph_ast);
looset_graph.app.set_graph_text = (function looset_graph$app$set_graph_text(app_state,p__30050){
var vec__30051 = p__30050;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30051,(1),null);
try{looset_graph.app.nodes_map_STAR_((function (p1__30048_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-ast","graph-ast",1036545926),p1__30048_SHARP_], null));
})(looset_graph.app.memo_graph_ast(v)));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),(function (p1__30049_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30049_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes-positions","nodes-positions",1066675950)], null),cljs.core.PersistentArrayMap.EMPTY)], 0));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null),v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph-ast","valid-graph-ast",-1530786594)], null),looset_graph.app.memo_graph_ast(v)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph?","valid-graph?",110438095)], null),true);
}catch (e30054){var _ = e30054;
return cljs.core.assoc_in(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null),v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"valid-graph?","valid-graph?",110438095)], null),false);
}});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-graph-text","looset-graph.app/set-graph-text",-991658461),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.set_graph_text);
looset_graph.app.toggle_open_close = (function looset_graph$app$toggle_open_close(app_state,p__30056){
var vec__30057 = p__30056;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),(function (p1__30055_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30055_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes-positions","nodes-positions",1066675950)], null),cljs.core.PersistentArrayMap.EMPTY)], 0));
})),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opened?","opened?",1096959669)], null)], 0)),cljs.core.not);
});
looset_graph.app.nodes_list_item_clicked = (function looset_graph$app$nodes_list_item_clicked(app_state,p__30063){
var vec__30064 = p__30063;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(1),null);
var toggly_add = (function (p1__30060_SHARP_,p2__30061_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__30060_SHARP_,p2__30061_SHARP_),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p1__30060_SHARP_,p2__30061_SHARP_));
});
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"clicked-nodes","clicked-nodes",911912943)], null),(function (p1__30062_SHARP_){
return toggly_add(cljs.core.set(p1__30062_SHARP_),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.last(path)]));
}));
} else {
return looset_graph.app.toggle_open_close(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,path], null));
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","nodes-list-item-clicked","looset-graph.app/nodes-list-item-clicked",-2099978840),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.nodes_list_item_clicked);
looset_graph.app.round_by = (function looset_graph$app$round_by(step,pos){
return (step * Math.round((pos / step)));
});
looset_graph.app.set_nodes_positions = (function looset_graph$app$set_nodes_positions(app_state,p__30068){
var vec__30069 = p__30068;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30069,(0),null);
var dragging_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30069,(1),null);
var nodes_positions_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30069,(2),null);
if(cljs.core.truth_(dragging_QMARK_)){
return app_state;
} else {
var nodes_positions = cljs.core.reduce_kv((function (m,k,p__30072){
var map__30073 = p__30072;
var map__30073__$1 = cljs.core.__destructure_map(map__30073);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30073__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30073__$1,"y");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null));
}),cljs.core.PersistentArrayMap.EMPTY,nodes_positions_STAR_);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-dragging?","graph-dragging?",-921103561)], null),dragging_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes-positions","nodes-positions",1066675950)], null),(function (p1__30067_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30067_SHARP_,nodes_positions], 0));
}));
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.set_nodes_positions);
looset_graph.app.set_vis_view = (function looset_graph$app$set_vis_view(app_state,p__30074){
var vec__30075 = p__30074;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30075,(0),null);
var map__30078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30075,(1),null);
var map__30078__$1 = cljs.core.__destructure_map(map__30078);
var view_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30078__$1,new cljs.core.Keyword(null,"view-position","view-position",-1615095658));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30078__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),view_position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale], null));
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","set-vis-view","looset-graph.app/set-vis-view",-781497326),looset_graph.app.set_vis_view);
/**
 * Set the nodes positions, but differently of `set-nodes-positions`, it's
 *   triggered every time the drag ends and as a side effect the zoom is reset 😕
 */
looset_graph.app.set_nodes_positions_hierarchy = (function looset_graph$app$set_nodes_positions_hierarchy(app_state,p__30080){
var vec__30081 = p__30080;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30081,(0),null);
var map__30084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30081,(1),null);
var map__30084__$1 = cljs.core.__destructure_map(map__30084);
var args = map__30084__$1;
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var nodes_positions_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"nodes-positions*","nodes-positions*",1578626858));
var _view_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"_view-position","_view-position",1828611372));
var _scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"_scale","_scale",1862973573));
if(cljs.core.truth_(dragging_QMARK_)){
return app_state;
} else {
var nodes_positions = cljs.core.reduce_kv((function (m,k,p__30085){
var map__30086 = p__30085;
var map__30086__$1 = cljs.core.__destructure_map(map__30086);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30086__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30086__$1,"y");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",looset_graph.app.round_by((100),y)], null)], null));
}),cljs.core.PersistentArrayMap.EMPTY,nodes_positions_STAR_);
return looset_graph.app.set_vis_view(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-dragging?","graph-dragging?",-921103561)], null),dragging_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30079_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30079_SHARP_,nodes_positions], 0));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,args], null));
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-nodes-positions-hierarchy","looset-graph.app/set-nodes-positions-hierarchy",331168896),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.set_nodes_positions_hierarchy);
looset_graph.app.clear_nodes_positions = (function looset_graph$app$clear_nodes_positions(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),(function (p1__30087_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function looset_graph$app$clear_nodes_positions_$_iter__30088(s__30089){
return (new cljs.core.LazySeq(null,(function (){
var s__30089__$1 = s__30089;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30089__$1);
if(temp__5804__auto__){
var s__30089__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30089__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30089__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30091 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30090 = (0);
while(true){
if((i__30090 < size__5522__auto__)){
var vec__30092 = cljs.core._nth(c__5521__auto__,i__30090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30092,(1),null);
cljs.core.chunk_append(b__30091,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"position","position",-2011731912))]));

var G__30225 = (i__30090 + (1));
i__30090 = G__30225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30091),looset_graph$app$clear_nodes_positions_$_iter__30088(cljs.core.chunk_rest(s__30089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30091),null);
}
} else {
var vec__30095 = cljs.core.first(s__30089__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30095,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"position","position",-2011731912))]),looset_graph$app$clear_nodes_positions_$_iter__30088(cljs.core.rest(s__30089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(p1__30087_SHARP_);
})());
}));
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","clear-nodes-positions","looset-graph.app/clear-nodes-positions",-510351684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.clear_nodes_positions);
looset_graph.app.drag_changed = (function looset_graph$app$drag_changed(app_state,p__30098){
var vec__30099 = p__30098;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(0),null);
var dragging_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-dragging?","graph-dragging?",-921103561)], null),dragging_QMARK_);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","drag-changed","looset-graph.app/drag-changed",-945122165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.drag_changed);
looset_graph.app.toggle_hidden = (function looset_graph$app$toggle_hidden(app_state,p__30103){
var vec__30104 = p__30103;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30104,(0),null);
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30104,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),(function (p1__30102_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30102_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes-positions","nodes-positions",1066675950)], null),cljs.core.PersistentArrayMap.EMPTY)], 0));
})),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),node_id,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380)], null),cljs.core.not);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","toggle-hidden","looset-graph.app/toggle-hidden",-1838479241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.toggle_hidden);
looset_graph.app.node_hovered = (function looset_graph$app$node_hovered(app_state,p__30107){
var vec__30108 = p__30107;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var nodes_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"hovered-node","hovered-node",367079976)], null),nodes_ids);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),looset_graph.app.node_hovered);
looset_graph.app.debug_event = (function looset_graph$app$debug_event(app_state,p__30111){
var vec__30112 = p__30111;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30112,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30112,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30112,(2),null);
return cljs.core.assoc_in(app_state,path,value);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","debug-event","looset-graph.app/debug-event",1984994981),looset_graph.app.debug_event);
looset_graph.app.organize_hierarchy_positions = (function looset_graph$app$organize_hierarchy_positions(app_state,p__30115){
var vec__30116 = p__30115;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30116,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-options","vis-options",136453917),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hierarchical","hierarchical",-714363102),new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),v);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions","looset-graph.app/organize-hierarchy-positions",-1487657518),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.organize_hierarchy_positions);
looset_graph.app.organize_hierarchy_positions_step_2 = (function looset_graph$app$organize_hierarchy_positions_step_2(app_state,p__30119){
var vec__30120 = p__30119;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(0),null);
var nodes_positions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(1),null);
if(cljs.core.truth_(looset_graph.app.vis_option_hierarchy(app_state))){
return cljs.core.assoc_in(looset_graph.app.set_nodes_positions_hierarchy(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dagging?","dagging?",-768951380),false,new cljs.core.Keyword(null,"nodes-positions*","nodes-positions*",1578626858),nodes_positions,new cljs.core.Keyword(null,"view-position","view-position",-1615095658),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818),new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-view","vis-view",-301218818),new cljs.core.Keyword(null,"scale","scale",-230427353)], null))], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"vis-options","vis-options",136453917),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hierarchical","hierarchical",-714363102),new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),false);
} else {
return app_state;
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions-step-2","looset-graph.app/organize-hierarchy-positions-step-2",1756259193),looset_graph.app.organize_hierarchy_positions_step_2);
looset_graph.app.hide_all_or_selected = (function looset_graph$app$hide_all_or_selected(app_state){
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var all_nodes = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),cljs.core.PersistentArrayMap.EMPTY));
var nodes_to_unhide = ((cljs.core.seq(selected_nodes))?selected_nodes:all_nodes);
var hidden = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),true], null)]);
}),nodes_to_unhide));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.merge,hidden);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","hide-all-or-selected","looset-graph.app/hide-all-or-selected",-1455882838),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.hide_all_or_selected);
looset_graph.app.show_selected = (function looset_graph$app$show_selected(app_state){
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var unhidden = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),false], null)]);
}),selected_nodes));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.merge,unhidden);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","show-selected","looset-graph.app/show-selected",-1072186890),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.show_selected);
looset_graph.app.collapse_all_or_selected = (function looset_graph$app$collapse_all_or_selected(app_state){
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var all_nodes = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077)], null),cljs.core.PersistentArrayMap.EMPTY));
var nodes_to_collapse = ((cljs.core.seq(selected_nodes))?selected_nodes:all_nodes);
var closed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null)]);
}),nodes_to_collapse));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),cljs.core.merge,closed);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","collapse-all-or-selected","looset-graph.app/collapse-all-or-selected",-1376470635),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.collapse_all_or_selected);
looset_graph.app.expand_selected = (function looset_graph$app$expand_selected(app_state){
var selected_nodes = new cljs.core.Keyword(null,"f-selected-nodes","f-selected-nodes",867523718).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(app_state));
var opened = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node_id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),true], null)]);
}),selected_nodes));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"fold","fold",-887461332)], null),cljs.core.merge,opened);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","expand-selected","looset-graph.app/expand-selected",688171188),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.expand_selected);
looset_graph.app.mouse_select_mode_evt = (function looset_graph$app$mouse_select_mode_evt(app_state,p__30123){
var vec__30124 = p__30123;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30124,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30124,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),state);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.mouse_select_mode_evt);
looset_graph.app.network_clicked = (function looset_graph$app$network_clicked(app_state,p__30130){
var vec__30131 = p__30130;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(0),null);
var click_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(1),null);
var toggly_add = (function (p1__30127_SHARP_,p2__30128_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__30127_SHARP_,p2__30128_SHARP_),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p1__30127_SHARP_,p2__30128_SHARP_));
});
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse-select-mode","mouse-select-mode",1290741815)], null),false))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"clicked-nodes","clicked-nodes",911912943)], null),(function (p1__30129_SHARP_){
return toggly_add(cljs.core.set(p1__30129_SHARP_),cljs.core.set(click_event.nodes));
}));
} else {
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"clicked-nodes","clicked-nodes",911912943)], null),cljs.core.set(click_event.nodes));
}
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","network-clicked","looset-graph.app/network-clicked",-235149448),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.network_clicked);
looset_graph.app.toggle_edit_graph_text_area = (function looset_graph$app$toggle_edit_graph_text_area(app_state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190)], null),cljs.core.not);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","toggle-edit-graph-text-area","looset-graph.app/toggle-edit-graph-text-area",1109374460),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),looset_graph.app.toggle_edit_graph_text_area);
if((typeof looset_graph !== 'undefined') && (typeof looset_graph.app !== 'undefined') && (typeof looset_graph.app.network !== 'undefined')){
} else {
looset_graph.app.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
looset_graph.app.graph_component_inner = (function looset_graph$app$graph_component_inner(){
var graph_component_id = "looset-graph";
var update_comp = (function (component,p__30138){
var vec__30139 = p__30138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(1),null);
var prev_vis_data = new cljs.core.Keyword(null,"vis-data","vis-data",558235347).cljs$core$IFn$_invoke$arity$1(prev_props);
var map__30142 = reagent.core.props(component);
var map__30142__$1 = cljs.core.__destructure_map(map__30142);
var selected_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30142__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var vis_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30142__$1,new cljs.core.Keyword(null,"vis-data","vis-data",558235347));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30142__$1,new cljs.core.Keyword(null,"options","options",99638489));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30142__$1,new cljs.core.Keyword(null,"view","view",1247994814));
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
var container_30226 = document.getElementById(graph_component_id);
cljs.core.reset_BANG_(looset_graph.app.network,(new vis.Network(container_30226,null)));

cljs.core.deref(looset_graph.app.network).on("dragStart",(function (){
var G__30143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","drag-changed","looset-graph.app/drag-changed",-945122165),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30143) : looset_graph.app._GT_evt.call(null,G__30143));
}));

cljs.core.deref(looset_graph.app.network).on("dragEnd",(function (){
var G__30144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions-hierarchy","looset-graph.app/set-nodes-positions-hierarchy",331168896),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"nodes-positions*","nodes-positions*",1578626858),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(looset_graph.app.network).getPositions()),new cljs.core.Keyword(null,"view-position","view-position",-1615095658),cljs.core.deref(looset_graph.app.network).getViewPosition(),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.deref(looset_graph.app.network).getScale()], null)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30144) : looset_graph.app._GT_evt.call(null,G__30144));
}));

cljs.core.deref(looset_graph.app.network).on("zoom",(function (){
var G__30145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-vis-view","looset-graph.app/set-vis-view",-781497326),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-position","view-position",-1615095658),cljs.core.deref(looset_graph.app.network).getViewPosition(),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.deref(looset_graph.app.network).getScale()], null)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30145) : looset_graph.app._GT_evt.call(null,G__30145));
}));

cljs.core.deref(looset_graph.app.network).on("stabilized",(function (){
var G__30146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-nodes-positions","looset-graph.app/set-nodes-positions",1617366814),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(looset_graph.app.network).getPositions())], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30146) : looset_graph.app._GT_evt.call(null,G__30146));
}));

cljs.core.deref(looset_graph.app.network).on("afterDrawing",(function (){
return setTimeout((function (){
var G__30147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions-step-2","looset-graph.app/organize-hierarchy-positions-step-2",1756259193),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(looset_graph.app.network).getPositions())], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30147) : looset_graph.app._GT_evt.call(null,G__30147));
}),(20));
}));

cljs.core.deref(looset_graph.app.network).on("click",(function (p1__30137_SHARP_){
p1__30137_SHARP_.nodes;

var G__30148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","network-clicked","looset-graph.app/network-clicked",-235149448),p1__30137_SHARP_], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30148) : looset_graph.app._GT_evt.call(null,G__30148));
}));

return update_comp(component,null);
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),graph_component_id,new cljs.core.Keyword(null,"style","style",-496642736),({"height": "100%", "width": "100%", "opacity": (cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","valid-graph?","looset-graph.app/valid-graph?",1732917457)], null)))?"100%":"40%")})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading.."], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mount_comp,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_comp], null));
});
looset_graph.app.graph_component = (function looset_graph$app$graph_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.graph_component_inner,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),cljs.core.clj__GT_js(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-nodes-visible","looset-graph.app/selected-nodes-visible",140267667)], null))),new cljs.core.Keyword(null,"vis-data","vis-data",558235347),cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-vis-data","f-vis-data",-839605275)], null))),new cljs.core.Keyword(null,"number-input","number-input",-1816352688),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918)], null)),new cljs.core.Keyword(null,"view","view",1247994814),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","vis-view","looset-graph.app/vis-view",-1975455240)], null)),new cljs.core.Keyword(null,"options","options",99638489),({"layout": ({"hierarchical": ({"enabled": looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","vis-option-hierarchy","looset-graph.app/vis-option-hierarchy",176055399)], null)), "direction": "UD", "sortMethod": "directed", "shakeTowards": "roots"})}), "physics": ({"enabled": false, "hierarchicalRepulsion": ({"avoidOverlap": (1), "nodeDistance": (300)})}), "nodes": ({"borderWidth": (1)})})], null)], null);
});
looset_graph.app.panel_splitter = (function looset_graph$app$panel_splitter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"width","width",-384071477),"6px",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize"], null),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),(function (){
var G__30149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","resizing-panels","looset-graph.app/resizing-panels",-912272966),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30149) : looset_graph.app._GT_evt.call(null,G__30149));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"1px solid gray"], null)], null)], null)], null);
});
looset_graph.app.botton_buttons = (function looset_graph$app$botton_buttons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-evenly",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-1","button.button-1",1246060018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"edit graph",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","toggle-edit-graph-text-area","looset-graph.app/toggle-edit-graph-text-area",1109374460)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30150) : looset_graph.app._GT_evt.call(null,G__30150));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.google.com/forms/d/e/1FAIpQLSc5SouA_vEHW8jqYrbt7IASidgaTngEwlclkrgeQ6RQXzM5nA/viewform?usp=sf_link"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-1","button.button-1",1246060018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Feedback"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"], null)], null)], null)], null)], null)], null);
});
looset_graph.app.svg_eye = (function looset_graph$app$svg_eye(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#eye.hover-gray-svg","svg#eye.hover-gray-svg",-255153922),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"], null)], null)], null);
});
looset_graph.app.svg_filled_eye = (function looset_graph$app$svg_filled_eye(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#eye.hover-gray-svg","svg#eye.hover-gray-svg",-255153922),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#4a484a",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"], null)], null)], null);
});
looset_graph.app.node_view = (function looset_graph$app$node_view(p__30151,text){
var map__30152 = p__30151;
var map__30152__$1 = cljs.core.__destructure_map(map__30152);
var map__30153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30152__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__30153__$1 = cljs.core.__destructure_map(map__30153);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30153__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__30154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30152__$1,new cljs.core.Keyword(null,"node","node",581201198));
var map__30154__$1 = cljs.core.__destructure_map(map__30154);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30154__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30154__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30154__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30154__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30152__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var node_name = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-map-name","looset-graph.app/nodes-map-name",989473135),node_id], null));
var selected_node_QMARK_ = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","selected-node?","looset-graph.app/selected-node?",2103187204),node_id], null));
var mouse_select_mode = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543)], null));
var foldable_node_QMARK_ = looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","foldable-node?","looset-graph.app/foldable-node?",-651734739),node_id], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),((5) + ((12) * level))], null),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),(function (){
var G__30155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),cljs.core.PersistentHashSet.createAsIfByAssoc([node_id])], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30155) : looset_graph.app._GT_evt.call(null,G__30155));
}),new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),(function (){
var G__30156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","node-hovered","looset-graph.app/node-hovered",-1842519730),cljs.core.PersistentHashSet.EMPTY], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30156) : looset_graph.app._GT_evt.call(null,G__30156));
})], null),(cljs.core.truth_(hidden_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_eye,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","toggle-hidden","looset-graph.app/toggle-hidden",-1838479241),node_id], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30157) : looset_graph.app._GT_evt.call(null,G__30157));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(6)], null),new cljs.core.Keyword(null,"width","width",-384071477),"27",new cljs.core.Keyword(null,"height","height",1025178622),"27"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_filled_eye,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","toggle-hidden","looset-graph.app/toggle-hidden",-1838479241),node_id], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30158) : looset_graph.app._GT_evt.call(null,G__30158));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(6)], null),new cljs.core.Keyword(null,"width","width",-384071477),"27",new cljs.core.Keyword(null,"height","height",1025178622),"27"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","nodes-list-item-clicked","looset-graph.app/nodes-list-item-clicked",-2099978840),path], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30159) : looset_graph.app._GT_evt.call(null,G__30159));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(selected_node_QMARK_)?"selected-shadow ":null),(cljs.core.truth_(mouse_select_mode)?"hover-gray select-mode-cursor":(cljs.core.truth_(foldable_node_QMARK_)?"hover-gray":""
))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "inherit";
}
})()], null)], null),(function (){var or__5045__auto__ = node_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return text;
}
})()], null)], null);
});
looset_graph.app.svg_label = (function looset_graph$app$svg_label(p__30160){
var map__30161 = p__30160;
var map__30161__$1 = cljs.core.__destructure_map(map__30161);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30161__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30161__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
var rotation_degree = (cljs.core.truth_(opened_QMARK_)?"45":"0");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"20.3125",new cljs.core.Keyword(null,"height","height",1025178622),"13",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate (",rotation_degree,")"].join(''),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"20 0 15 32"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"width","width",-384071477),"26.326736",new cljs.core.Keyword(null,"height","height",1025178622),"27.940695",new cljs.core.Keyword(null,"x","x",2099068185),"4",new cljs.core.Keyword(null,"y","y",-1757859776),"4",new cljs.core.Keyword(null,"ry","ry",-334598563),"3.7885695"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"d","d",1972142424),"m 24,4 9.30351,0.007 13.81581,13.815798 -13.8158,14.110975 -11.32617,0.007"], null)], null)], null)], null);
});
looset_graph.app.svg_arrow_triangle = (function looset_graph$app$svg_arrow_triangle(p__30162){
var map__30163 = p__30162;
var map__30163__$1 = cljs.core.__destructure_map(map__30163);
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30163__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
var rotation_degree = (cljs.core.truth_(opened_QMARK_)?"0":"-90");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"16",new cljs.core.Keyword(null,"height","height",1025178622),"16",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16",new cljs.core.Keyword(null,"fill","fill",883462889),"#4a484a",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate (",rotation_degree,")"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"middle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], null)], null)], null);
});
looset_graph.app.label_node = (function looset_graph$app$label_node(p__30164){
var map__30165 = p__30164;
var map__30165__$1 = cljs.core.__destructure_map(map__30165);
var node_item = map__30165__$1;
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30165__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30165__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30165__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.node_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node_item,new cljs.core.Keyword(null,"class","class",-2030961996),"label-style",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_label,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),node_id], null)], null);
});
looset_graph.app.lix_node = (function looset_graph$app$lix_node(p__30166){
var map__30167 = p__30166;
var map__30167__$1 = cljs.core.__destructure_map(map__30167);
var node_item = map__30167__$1;
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30167__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30167__$1,new cljs.core.Keyword(null,"opened?","opened?",1096959669));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.node_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node_item,new cljs.core.Keyword(null,"class","class",-2030961996),"lix-style"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((opened_QMARK_ == null))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.svg_arrow_triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_], null)], null)),node_id], null)], null);
});
looset_graph.app.nodes_list_view = (function looset_graph$app$nodes_list_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","valid-graph?","looset-graph.app/valid-graph?",1732917457)], null)))?"100%":"40%")], null)], null),(function (){var iter__5523__auto__ = (function looset_graph$app$nodes_list_view_$_iter__30168(s__30169){
return (new cljs.core.LazySeq(null,(function (){
var s__30169__$1 = s__30169;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30169__$1);
if(temp__5804__auto__){
var s__30169__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30169__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30169__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30171 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30170 = (0);
while(true){
if((i__30170 < size__5522__auto__)){
var node_item = cljs.core._nth(c__5521__auto__,i__30170);
var node_type_comp = (function (){var G__30173 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node_item);
var fexpr__30172 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),looset_graph.app.label_node,new cljs.core.Keyword(null,"lix","lix",-499082631),looset_graph.app.lix_node], null);
return (fexpr__30172.cljs$core$IFn$_invoke$arity$1 ? fexpr__30172.cljs$core$IFn$_invoke$arity$1(G__30173) : fexpr__30172.call(null,G__30173));
})();
cljs.core.chunk_append(b__30171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_type_comp,node_item], null));

var G__30227 = (i__30170 + (1));
i__30170 = G__30227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30171),looset_graph$app$nodes_list_view_$_iter__30168(cljs.core.chunk_rest(s__30169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30171),null);
}
} else {
var node_item = cljs.core.first(s__30169__$2);
var node_type_comp = (function (){var G__30175 = new cljs.core.Keyword(null,"node-type","node-type",129492462).cljs$core$IFn$_invoke$arity$1(node_item);
var fexpr__30174 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),looset_graph.app.label_node,new cljs.core.Keyword(null,"lix","lix",-499082631),looset_graph.app.lix_node], null);
return (fexpr__30174.cljs$core$IFn$_invoke$arity$1 ? fexpr__30174.cljs$core$IFn$_invoke$arity$1(G__30175) : fexpr__30174.call(null,G__30175));
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_type_comp,node_item], null),looset_graph$app$nodes_list_view_$_iter__30168(cljs.core.rest(s__30169__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"inline-size","inline-size",-2060171616),"fit-content"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"move",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),false], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30176) : looset_graph.app._GT_evt.call(null,G__30176));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"select",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30177) : looset_graph.app._GT_evt.call(null,G__30177));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),looset_graph.app.black_cursor_svg_path], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"28px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#000000a1",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"3px 0px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hierarchy layout",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions","looset-graph.app/organize-hierarchy-positions",-1487657518),true], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30178) : looset_graph.app._GT_evt.call(null,G__30178));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"default layout",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","clear-nodes-positions","looset-graph.app/clear-nodes-positions",-510351684)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30179) : looset_graph.app._GT_evt.call(null,G__30179));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5 1v8H1V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm13 2v5H9V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 13v2H3v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm12-1v2H9v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"], null)], null)], null)], null),(cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","show-unhide-button?","looset-graph.app/show-unhide-button?",510267080)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"show selected",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","show-selected","looset-graph.app/show-selected",-1072186890)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30180) : looset_graph.app._GT_evt.call(null,G__30180));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hide all",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","hide-all-or-selected","looset-graph.app/hide-all-or-selected",-1455882838)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30181) : looset_graph.app._GT_evt.call(null,G__30181));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"], null)], null)], null)], null)),(cljs.core.truth_(cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-show-expand-button?","f-show-expand-button?",-2064352372)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"expand selected",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","expand-selected","looset-graph.app/expand-selected",688171188)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30182) : looset_graph.app._GT_evt.call(null,G__30182));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button-2","button.button-2",-509780714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"collapse all",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__30183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","collapse-all-or-selected","looset-graph.app/collapse-all-or-selected",-1376470635)], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30183) : looset_graph.app._GT_evt.call(null,G__30183));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),icons_size,new cljs.core.Keyword(null,"height","height",1025178622),icons_size,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 16 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"], null)], null)], null)], null))], null)], null);
});
looset_graph.app.code_font_family = "dejavu sans mono, monospace";
looset_graph.app.code_font_size = "small";
looset_graph.app.code_margin = "0";
looset_graph.app.code_padding = "0 10px";
looset_graph.app.edit_raw_graph_text = (function looset_graph$app$edit_raw_graph_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),looset_graph.app.code_margin,new cljs.core.Keyword(null,"padding","padding",1660304693),looset_graph.app.code_padding,new cljs.core.Keyword(null,"min-height","min-height",398480837),"20vw",new cljs.core.Keyword(null,"font-family","font-family",-667419874),looset_graph.app.code_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),looset_graph.app.code_font_size], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__30184_SHARP_){
var G__30185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-graph-text","looset-graph.app/set-graph-text",-991658461),p1__30184_SHARP_.target.value], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30185) : looset_graph.app._GT_evt.call(null,G__30185));
}),new cljs.core.Keyword(null,"value","value",305978217),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","graph-text","looset-graph.app/graph-text",1407863772)], null))], null)], null);
});
looset_graph.app.debug_quick_val_set = (function looset_graph$app$debug_quick_val_set(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Range ",looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__30186_SHARP_){
var G__30189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),p1__30186_SHARP_.target.value], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30189) : looset_graph.app._GT_evt.call(null,G__30189));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918)], null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__30187_SHARP_){
var G__30190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),p1__30187_SHARP_.target.value], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30190) : looset_graph.app._GT_evt.call(null,G__30190));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Toggle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__30188_SHARP_){
var G__30191_30228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-toggle-input","looset-graph.app/set-toggle-input",-337021915),p1__30188_SHARP_.target.checked], null);
(looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30191_30228) : looset_graph.app._GT_evt.call(null,G__30191_30228));

var G__30192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","organize-hierarchy-positions","looset-graph.app/organize-hierarchy-positions",-1487657518),p1__30188_SHARP_.target.checked], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30192) : looset_graph.app._GT_evt.call(null,G__30192));
})], null)], null)], null)], null);
});
looset_graph.app.quattrocento_font = "Quattrocento, serif";
looset_graph.app.global_style = (function looset_graph$app$global_style(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),["\n   @import url('https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;500;600;700&family=Quattrocento&family=Roboto+Mono:wght@300;400;500;600;700&display=swap');\n\n    *::-webkit-scrollbar-track {\n        background: rgb(51 51 51 / 10%);\n    }\n    *::-webkit-scrollbar-thumb {\n        background: #bbb;\n    }\n    *::-webkit-scrollbar {\n        width: 5px;\n        height: 5px;\n    }\n\n   .hover-gray-svg:hover {\n     filter: drop-shadow(0px 2px 6px #0008);\n     cursor: pointer;\n   }\n\n   .hover-gray:hover {\n     text-shadow: -5px 3px 7px;\n     cursor: pointer;\n   }\n\n   .selected-shadow {\n     text-shadow: -5px 3px 7px #59d0e8;\n   }\n\n   .button-1 {\n     display: flex;\n     background-color: #4c4c4c;\n     border-radius: 8px;\n     border-style: none;\n     box-sizing: border-box;\n     color: #FFFFFF;\n     cursor: pointer;\n     font-family: ",looset_graph.app.quattrocento_font,";\n     font-size: 14px;\n     font-weight: 500;\n     line-height: 20px;\n     list-style: none;\n     margin: 0;\n     outline: none;\n     padding: 10px;\n     position: relative;\n     text-align: center;\n     text-decoration: none;\n     transition: color 100ms;\n     vertical-align: baseline;\n     user-select: none;\n     -webkit-user-select: none;\n     touch-action: manipulation;\n   }\n\n   .button-1:hover,\n   .button-1:focus {\n     background-color: #7c7c7c;\n   }\n\n   .button-2:active {\n     background-color: #00000020;\n   }\n\n   .button-2 {\n      background-color: #0000000d;\n      backdrop-filter: blur(3px);\n      border-radius: 8px;\n      border-style: solid;\n      border-width: 2px;\n      border-color: #000000a1;\n      box-sizing: border-box;\n      cursor: pointer;\n      padding: 4px;\n      margin: 4px 0px;\n      transition: color 100ms;\n      user-select: none;\n      -webkit-user-select: none;\n      touch-action: manipulation;\n   }\n\n   .lix-style {\n     display: flex;\n     flex-direction: row;\n     font-family: ",looset_graph.app.label_font_family,", sans-serif;\n     font-size: large;\n     padding-bottom: 10px;\n     align-items: center;\n     color: #4a484a;\n   }\n\n   .label-style {\n     display: flex;\n     flex-direction: row;\n     font-family: ",looset_graph.app.label_font_family,", sans-serif;\n     font-size: large;\n     font-weight: bold;\n     padding-bottom: 10px;\n     align-items: center;\n   }\n\n   .select-mode-cursor {\n     cursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 16 16'%3E%3Cpath d='",looset_graph.app.black_cursor_svg_path,"'/%3E%3C/svg%3E\" ) 19 0,crosshair !important;\n   }\n   "].join('')], null);
});
looset_graph.app.main = (function looset_graph$app$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.global_style], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#panel-container","div#panel-container",1399195404),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100vh"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-panel","div#left-panel",-1416614301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-select-mode","looset-graph.app/mouse-select-mode",-408792543)], null)))?"select-mode-cursor":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","left-panel-size","looset-graph.app/left-panel-size",-1724525274)], null)),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"20vw",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),looset_graph.app.quattrocento_font,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray"], null)], null),"Looset Graph"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.left_buttons], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.util.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.graph_component], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.panel_splitter], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#right-panel","div#right-panel",1659420965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),["calc(100vw - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(looset_graph.app._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","left-panel-size","looset-graph.app/left-panel-size",-1724525274)], null))),")"].join(''),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"20vw"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-component","div#text-component",-1450008949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"padding","padding",1660304693),"7px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.util.error_boundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"if-error","if-error",-1992288515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"erro"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.nodes_list_view], null)], null),(cljs.core.truth_(cljs.core.deref(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f-editing-graph-text","f-editing-graph-text",866023663)], null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.edit_raw_graph_text], null):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.botton_buttons], null)], null)], null)], null);
});
looset_graph.app.set_toggle_input = (function looset_graph$app$set_toggle_input(app_state,p__30193){
var vec__30194 = p__30193;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"toggle-input","toggle-input",-1215066547)], null),n);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","set-toggle-input","looset-graph.app/set-toggle-input",-337021915),looset_graph.app.set_toggle_input);
looset_graph.app.toggle_input = (function looset_graph$app$toggle_input(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"toggle-input","toggle-input",-1215066547)], null),false);
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","toggle-input","looset-graph.app/toggle-input",1447198779),looset_graph.app.toggle_input], 0));
looset_graph.app.set_number_input = (function looset_graph$app$set_number_input(app_state,p__30197){
var vec__30198 = p__30197;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(1),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"number-input","number-input",-1816352688)], null),n);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","set-number-input","looset-graph.app/set-number-input",1895175144),looset_graph.app.set_number_input);
looset_graph.app.number_input = (function looset_graph$app$number_input(app_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"number-input","number-input",-1816352688)], null),(0));
});
re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("looset-graph.app","number-input","looset-graph.app/number-input",-1301310918),looset_graph.app.number_input], 0));
looset_graph.app.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306),"=>label1:\n  node1\n  node2\n  node5\n\n=>label2:\n  node5\n\nnode3:\n  node4\n  node5\n\nnode1 -> node2\nnode4->node1\nnodeA->nodeB",new cljs.core.Keyword(null,"nodes-map","nodes-map",644703077),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"resizing-panels","resizing-panels",-385038924),false,new cljs.core.Keyword(null,"left-panel-size","left-panel-size",-1199530188),"65vw"], null),new cljs.core.Keyword(null,"editing-graph-text","editing-graph-text",1218285190),false,new cljs.core.Keyword(null,"fold","fold",-887461332),cljs.core.PersistentArrayMap.EMPTY], null)], null);
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
return $__$2.then((function (p1__30201_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,(new Uint8Array(p1__30201_SHARP_))));
}));
});
looset_graph.app.gzip_decompress = (function looset_graph$app$gzip_decompress(compressed_string){
var $ = compressed_string;
var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30202_SHARP_){
return p1__30202_SHARP_.charCodeAt((0));
}),$);
var $__$2 = (new Uint8Array($__$1));
var $__$3 = looset_graph.app.gzip(DecompressionStream,$__$2);
return $__$3.then((function (p1__30203_SHARP_){
return (new TextDecoder()).decode(p1__30203_SHARP_);
}));
});
looset_graph.app.set_url_state_interceptor = re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((function (graph_text){
return looset_graph.app.gzip_compress(graph_text).then((function (p1__30204_SHARP_){
var loc = window.location;
return window.history.replaceState(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),"?graph=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(btoa(p1__30204_SHARP_)))].join(''));
}));
}),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null)], 0));
re_frame.alpha.reg_global_interceptor(looset_graph.app.set_url_state_interceptor);
looset_graph.app.init_mousemove = (function looset_graph$app$init_mousemove(){
return document.body.addEventListener("mousemove",(function (p1__30205_SHARP_){
var G__30206 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-moved","looset-graph.app/mouse-moved",-432137308),p1__30205_SHARP_.x,p1__30205_SHARP_.y], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30206) : looset_graph.app._GT_evt.call(null,G__30206));
}));
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("looset-graph.app","set-app-state","looset-graph.app/set-app-state",272477228),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_graph.app.event_to_analytics], null),(function (_,p__30207){
var vec__30208 = p__30207;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30208,(0),null);
var graph_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30208,(1),null);
return looset_graph.app.set_graph_text(looset_graph.app.initial_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,graph_text], null));
}));
looset_graph.app.init_state = (function looset_graph$app$init_state(){
var compressed_graph = (new URLSearchParams(window.location.search)).get("graph");
var default_graph = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(looset_graph.app.initial_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"graph-text","graph-text",-1288267306)], null));
if(cljs.core.truth_(compressed_graph)){
return looset_graph.app.gzip_decompress(atob(compressed_graph)).then((function (p1__30211_SHARP_){
return re_frame.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-app-state","looset-graph.app/set-app-state",272477228),p1__30211_SHARP_], null));
}));
} else {
return re_frame.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","set-app-state","looset-graph.app/set-app-state",272477228),default_graph], null));
}
});
looset_graph.app.mouse_up = (function looset_graph$app$mouse_up(app_state){
return cljs.core.assoc_in(looset_graph.app.resizing_panels(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),false], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"diagram","diagram",1347243758),new cljs.core.Keyword(null,"zooming?","zooming?",-1351537377)], null),false);
});
re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),looset_graph.app.mouse_up);
looset_graph.app.init_mouseup = (function looset_graph$app$init_mouseup(){
return document.body.addEventListener("mouseup",(function (){
var G__30212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-graph.app","mouse-up","looset-graph.app/mouse-up",-607559415),false], null);
return (looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1 ? looset_graph.app._GT_evt.cljs$core$IFn$_invoke$arity$1(G__30212) : looset_graph.app._GT_evt.call(null,G__30212));
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

return looset_graph.app.init_mouseup();
});

//# sourceMappingURL=looset_graph.app.js.map
