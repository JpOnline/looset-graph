goog.provide('looset_graph.graph_parser');
var module$node_modules$antlr4$dist$antlr4_web=shadow.js.require("module$node_modules$antlr4$dist$antlr4_web", {});
var module$node_modules$loosetGraphLexer$loosetGraphLexer=shadow.js.require("module$node_modules$loosetGraphLexer$loosetGraphLexer", {});
var module$node_modules$loosetGraphParser$loosetGraphParser=shadow.js.require("module$node_modules$loosetGraphParser$loosetGraphParser", {});
looset_graph.graph_parser.parser_rule_meta = (function looset_graph$graph_parser$parser_rule_meta(this$){
var start = this$.start;
var stop = this$.stop;
if((stop == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),start.line,new cljs.core.Keyword(null,"column","column",2078222095),start.column], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),start.line,new cljs.core.Keyword(null,"column","column",2078222095),start.column], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),stop.line,new cljs.core.Keyword(null,"column","column",2078222095),(stop.column + cljs.core.count(stop.text))], null)], null);
}
});
looset_graph.graph_parser.ast = (function looset_graph$graph_parser$ast(tree,rule_names,token_types,hide_tags,hide_literals){
if((!((tree.children == null)))){
var meta = looset_graph.graph_parser.parser_rule_meta(tree);
var rule = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rule_names,tree.ruleIndex);
var children = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__26777_SHARP_){
return (looset_graph.graph_parser.ast.cljs$core$IFn$_invoke$arity$5 ? looset_graph.graph_parser.ast.cljs$core$IFn$_invoke$arity$5(p1__26777_SHARP_,rule_names,token_types,hide_tags,hide_literals) : looset_graph.graph_parser.ast.call(null,p1__26777_SHARP_,rule_names,token_types,hide_tags,hide_literals));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),tree.children);
if(cljs.core.contains_QMARK_(hide_tags,rule)){
return null;
} else {
return cljs.core.with_meta(cljs.core.cons(rule,children),meta);
}
} else {
if(tree.isErrorNode){
var token = tree.symbol;
return cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Keyword(null,"failure","failure",720415879),(new cljs.core.List(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(tree)),null,(1),null)),(2),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),token.getLine(),new cljs.core.Keyword(null,"column","column",2078222095),token.getCharPositionInLine()], null)], null));
} else {
var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tree);
var token_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_types,tree.symbol.type);
if(cljs.core.contains_QMARK_(hide_literals,content)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_type,content], null);
}

}
}
});
looset_graph.graph_parser.graph_ast = (function looset_graph$graph_parser$graph_ast(graph_text){
var chrs = (new module$node_modules$antlr4$dist$antlr4_web.InputStream(graph_text));
var lxr = (new module$node_modules$loosetGraphLexer$loosetGraphLexer.default(chrs));
var tokens = (new module$node_modules$antlr4$dist$antlr4_web.CommonTokenStream(lxr));
var prsr = (new module$node_modules$loosetGraphParser$loosetGraphParser.default(tokens));
var _ = (prsr.buildParseTrees = true);
var tree = prsr.loosetGraph();
var to_hide = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["->",null,"=>",null,":",null], null), null);
return cljs.core.clj__GT_js(looset_graph.graph_parser.ast(tree,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,prsr.ruleNames),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,prsr.symbolicNames),cljs.core.PersistentHashSet.EMPTY,to_hide));
});

//# sourceMappingURL=looset_graph.graph_parser.js.map
