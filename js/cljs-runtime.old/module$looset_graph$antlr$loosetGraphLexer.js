var module$node_modules$antlr4$dist$antlr4_web = shadow.js.require("module$node_modules$antlr4$dist$antlr4_web", {});
var serializedATN$$module$looset_graph$antlr$loosetGraphLexer = [4, 0, 5, 31, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 3, 4, 3, 21, 8, 3, 11, 3, 12, 3, 22, 1, 4, 4, 4, 26, 8, 4, 11, 4, 12, 4, 27, 1, 4, 1, 4, 0, 0, 5, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 1, 0, 2, 3, 0, 48, 57, 65, 90, 97, 122, 3, 0, 9, 10, 13, 13, 32, 32, 32, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 1, 11, 1, 0, 0, 
0, 3, 13, 1, 0, 0, 0, 5, 16, 1, 0, 0, 0, 7, 20, 1, 0, 0, 0, 9, 25, 1, 0, 0, 0, 11, 12, 5, 58, 0, 0, 12, 2, 1, 0, 0, 0, 13, 14, 5, 45, 0, 0, 14, 15, 5, 62, 0, 0, 15, 4, 1, 0, 0, 0, 16, 17, 5, 61, 0, 0, 17, 18, 5, 62, 0, 0, 18, 6, 1, 0, 0, 0, 19, 21, 7, 0, 0, 0, 20, 19, 1, 0, 0, 0, 21, 22, 1, 0, 0, 0, 22, 20, 1, 0, 0, 0, 22, 23, 1, 0, 0, 0, 23, 8, 1, 0, 0, 0, 24, 26, 7, 1, 0, 0, 25, 24, 1, 0, 0, 0, 26, 27, 1, 0, 0, 0, 27, 25, 1, 0, 0, 0, 27, 28, 1, 0, 0, 0, 28, 29, 1, 0, 0, 0, 29, 30, 6, 4, 0, 0, 30, 
10, 1, 0, 0, 0, 3, 0, 22, 27, 1, 6, 0, 0];
var atn$$module$looset_graph$antlr$loosetGraphLexer = (new module$node_modules$antlr4$dist$antlr4_web.ATNDeserializer()).deserialize(serializedATN$$module$looset_graph$antlr$loosetGraphLexer);
var decisionsToDFA$$module$looset_graph$antlr$loosetGraphLexer = atn$$module$looset_graph$antlr$loosetGraphLexer.decisionToState.map((ds, index) => new module$node_modules$antlr4$dist$antlr4_web.DFA(ds, index));
class loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer extends module$node_modules$antlr4$dist$antlr4_web.Lexer {
  constructor(input) {
    super(input);
    this._interp = new module$node_modules$antlr4$dist$antlr4_web.LexerATNSimulator(this, atn$$module$looset_graph$antlr$loosetGraphLexer, decisionsToDFA$$module$looset_graph$antlr$loosetGraphLexer, new module$node_modules$antlr4$dist$antlr4_web.PredictionContextCache());
  }
}
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.grammarFileName = "loosetGraph.g4";
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.modeNames = ["DEFAULT_MODE"];
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.literalNames = [null, "':'", "'-\x3e'", "'\x3d\x3e'"];
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.symbolicNames = [null, null, null, null, "ID", "SPACES_RULE_TOKEN"];
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.ruleNames = ["T__0", "T__1", "T__2", "ID", "SPACES_RULE_TOKEN"];
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.EOF = module$node_modules$antlr4$dist$antlr4_web.Token.EOF;
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.T__0 = 1;
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.T__1 = 2;
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.T__2 = 3;
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.ID = 4;
loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer.SPACES_RULE_TOKEN = 5;
/** @const */ 
var module$looset_graph$antlr$loosetGraphLexer = {};
/** @const */ 
module$looset_graph$antlr$loosetGraphLexer.default = loosetGraphLexer$$module$looset_graph$antlr$loosetGraphLexer;

$CLJS.module$looset_graph$antlr$loosetGraphLexer=module$looset_graph$antlr$loosetGraphLexer;
//# sourceMappingURL=module$looset_graph$antlr$loosetGraphLexer.js.map
