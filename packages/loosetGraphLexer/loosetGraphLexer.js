// Generated from loosetGraphLexer.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,58,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,
3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,4,0,23,8,0,11,0,12,0,24,
1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,4,4,36,8,4,11,4,12,4,37,1,4,1,4,1,5,
1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,4,8,55,8,8,11,8,12,8,56,
0,0,9,2,1,4,2,6,3,8,4,10,5,12,6,14,7,16,8,18,9,2,0,1,4,2,0,65,90,97,122,
7,0,33,33,42,43,45,45,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,2,0,
123,123,125,125,59,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,
1,0,0,0,0,12,1,0,0,0,1,14,1,0,0,0,1,16,1,0,0,0,1,18,1,0,0,0,2,20,1,0,0,0,
4,26,1,0,0,0,6,28,1,0,0,0,8,31,1,0,0,0,10,35,1,0,0,0,12,41,1,0,0,0,14,45,
1,0,0,0,16,49,1,0,0,0,18,54,1,0,0,0,20,22,7,0,0,0,21,23,7,1,0,0,22,21,1,
0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,27,5,58,
0,0,27,5,1,0,0,0,28,29,5,45,0,0,29,30,5,62,0,0,30,7,1,0,0,0,31,32,5,61,0,
0,32,33,5,62,0,0,33,9,1,0,0,0,34,36,7,2,0,0,35,34,1,0,0,0,36,37,1,0,0,0,
37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,6,4,0,0,40,11,1,0,0,0,41,
42,5,123,0,0,42,43,1,0,0,0,43,44,6,5,1,0,44,13,1,0,0,0,45,46,5,123,0,0,46,
47,1,0,0,0,47,48,6,6,1,0,48,15,1,0,0,0,49,50,5,125,0,0,50,51,1,0,0,0,51,
52,6,7,2,0,52,17,1,0,0,0,53,55,8,3,0,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,
1,0,0,0,56,57,1,0,0,0,57,19,1,0,0,0,5,0,1,24,37,56,3,6,0,0,5,1,0,4,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class loosetGraphLexer extends antlr4.Lexer {

    static grammarFileName = "loosetGraphLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "EDN_MODE" ];
	static literalNames = [ null, null, "':'", "'->'", "'=>'", null, null, 
                         null, "'}'" ];
	static symbolicNames = [ null, "ID", "SEMI", "ARROW", "DOUBLE_ARROW", "SPACES_RULE_TOKEN", 
                          "OPEN_EDN", "OPEN_SUB_EDN", "CLOSE_EDN", "EDN" ];
	static ruleNames = [ "ID", "SEMI", "ARROW", "DOUBLE_ARROW", "SPACES_RULE_TOKEN", 
                      "OPEN_EDN", "OPEN_SUB_EDN", "CLOSE_EDN", "EDN" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

loosetGraphLexer.EOF = antlr4.Token.EOF;
loosetGraphLexer.ID = 1;
loosetGraphLexer.SEMI = 2;
loosetGraphLexer.ARROW = 3;
loosetGraphLexer.DOUBLE_ARROW = 4;
loosetGraphLexer.SPACES_RULE_TOKEN = 5;
loosetGraphLexer.OPEN_EDN = 6;
loosetGraphLexer.OPEN_SUB_EDN = 7;
loosetGraphLexer.CLOSE_EDN = 8;
loosetGraphLexer.EDN = 9;

loosetGraphLexer.EDN_MODE = 1;




