// Generated from loosetGraphLexer.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,72,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,
3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,4,0,25,8,0,11,
0,12,0,26,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,1,0,3,0,37,8,0,1,1,1,1,1,2,
1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,4,5,50,8,5,11,5,12,5,51,1,5,1,5,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,4,9,69,8,9,11,9,12,9,70,0,0,
10,2,1,4,2,6,3,8,4,10,5,12,6,14,7,16,8,18,9,20,10,2,0,1,5,2,0,65,90,97,122,
7,0,33,33,42,43,45,45,47,57,65,90,95,95,97,122,3,0,10,10,13,13,34,34,3,0,
9,10,13,13,32,32,2,0,123,123,125,125,75,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,
0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,1,16,1,0,0,0,1,18,
1,0,0,0,1,20,1,0,0,0,2,36,1,0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,43,1,0,0,0,
10,45,1,0,0,0,12,49,1,0,0,0,14,55,1,0,0,0,16,59,1,0,0,0,18,63,1,0,0,0,20,
68,1,0,0,0,22,24,7,0,0,0,23,25,7,1,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,
1,0,0,0,26,27,1,0,0,0,27,37,1,0,0,0,28,32,5,34,0,0,29,31,8,2,0,0,30,29,1,
0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,
0,0,35,37,5,34,0,0,36,22,1,0,0,0,36,28,1,0,0,0,37,3,1,0,0,0,38,39,5,58,0,
0,39,5,1,0,0,0,40,41,5,45,0,0,41,42,5,62,0,0,42,7,1,0,0,0,43,44,5,45,0,0,
44,9,1,0,0,0,45,46,5,61,0,0,46,47,5,62,0,0,47,11,1,0,0,0,48,50,7,3,0,0,49,
48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,
6,5,0,0,54,13,1,0,0,0,55,56,5,123,0,0,56,57,1,0,0,0,57,58,6,6,1,0,58,15,
1,0,0,0,59,60,5,123,0,0,60,61,1,0,0,0,61,62,6,7,1,0,62,17,1,0,0,0,63,64,
5,125,0,0,64,65,1,0,0,0,65,66,6,8,2,0,66,19,1,0,0,0,67,69,8,4,0,0,68,67,
1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,21,1,0,0,0,7,0,1,26,
32,36,51,70,3,6,0,0,5,1,0,4,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class loosetGraphLexer extends antlr4.Lexer {

    static grammarFileName = "loosetGraphLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "EDN_MODE" ];
	static literalNames = [ null, null, "':'", "'->'", "'-'", "'=>'", null, 
                         null, null, "'}'" ];
	static symbolicNames = [ null, "ID", "SEMI", "ARROW", "HIFEN", "DOUBLE_ARROW", 
                          "SPACES_RULE_TOKEN", "OPEN_EDN", "OPEN_SUB_EDN", 
                          "CLOSE_EDN", "EDN" ];
	static ruleNames = [ "ID", "SEMI", "ARROW", "HIFEN", "DOUBLE_ARROW", "SPACES_RULE_TOKEN", 
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
loosetGraphLexer.HIFEN = 4;
loosetGraphLexer.DOUBLE_ARROW = 5;
loosetGraphLexer.SPACES_RULE_TOKEN = 6;
loosetGraphLexer.OPEN_EDN = 7;
loosetGraphLexer.OPEN_SUB_EDN = 8;
loosetGraphLexer.CLOSE_EDN = 9;
loosetGraphLexer.EDN = 10;

loosetGraphLexer.EDN_MODE = 1;




