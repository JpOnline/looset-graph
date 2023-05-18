// Generated from loosetGraph.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,36,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,4,2,21,8,2,11,2,12,2,22,1,3,4,3,
26,8,3,11,3,12,3,27,1,4,4,4,31,8,4,11,4,12,4,32,1,4,1,4,0,0,5,1,1,3,2,5,
3,7,4,9,5,1,0,2,3,0,48,57,65,90,97,122,3,0,9,10,13,13,32,32,38,0,1,1,0,0,
0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,13,1,0,
0,0,5,16,1,0,0,0,7,25,1,0,0,0,9,30,1,0,0,0,11,12,5,58,0,0,12,2,1,0,0,0,13,
14,5,45,0,0,14,15,5,62,0,0,15,4,1,0,0,0,16,17,5,61,0,0,17,18,5,62,0,0,18,
20,1,0,0,0,19,21,7,0,0,0,20,19,1,0,0,0,21,22,1,0,0,0,22,20,1,0,0,0,22,23,
1,0,0,0,23,6,1,0,0,0,24,26,7,0,0,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,
0,0,27,28,1,0,0,0,28,8,1,0,0,0,29,31,7,1,0,0,30,29,1,0,0,0,31,32,1,0,0,0,
32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,6,4,0,0,35,10,1,0,0,0,4,
0,22,27,32,1,6,0,0];


const atn = new antlr4.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.DFA(ds, index) );

export default class loosetGraphLexer extends antlr4.Lexer {

    static grammarFileName = "loosetGraph.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "':'", "'->'" ];
	static symbolicNames = [ null, null, null, "LABEL_ID", "ID", "SPACES_RULE_TOKEN" ];
	static ruleNames = [ "T__0", "T__1", "LABEL_ID", "ID", "SPACES_RULE_TOKEN" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }
}

loosetGraphLexer.EOF = antlr4.Token.EOF;
loosetGraphLexer.T__0 = 1;
loosetGraphLexer.T__1 = 2;
loosetGraphLexer.LABEL_ID = 3;
loosetGraphLexer.ID = 4;
loosetGraphLexer.SPACES_RULE_TOKEN = 5;



