// Generated from loosetGraph.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,10,126,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,5,0,36,8,0,10,0,12,0,39,
9,0,1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,
5,0,54,8,0,10,0,12,0,57,9,0,3,0,59,8,0,1,1,1,1,5,1,63,8,1,10,1,12,1,66,9,
1,1,2,1,2,3,2,70,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
84,8,3,1,4,1,4,3,4,88,8,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,
9,5,9,102,8,9,10,9,12,9,105,9,9,1,9,1,9,1,9,1,9,1,9,3,9,112,8,9,1,10,1,10,
1,10,1,10,5,10,118,8,10,10,10,12,10,121,9,10,1,10,3,10,124,8,10,1,10,0,0,
11,0,2,4,6,8,10,12,14,16,18,20,0,0,131,0,58,1,0,0,0,2,60,1,0,0,0,4,69,1,
0,0,0,6,83,1,0,0,0,8,87,1,0,0,0,10,89,1,0,0,0,12,92,1,0,0,0,14,94,1,0,0,
0,16,96,1,0,0,0,18,111,1,0,0,0,20,123,1,0,0,0,22,24,3,6,3,0,23,22,1,0,0,
0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,59,1,0,0,0,27,25,1,0,0,0,
28,30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,
37,1,0,0,0,33,31,1,0,0,0,34,36,3,6,3,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,
1,0,0,0,37,38,1,0,0,0,38,59,1,0,0,0,39,37,1,0,0,0,40,42,3,2,1,0,41,40,1,
0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,49,1,0,0,0,45,43,1,0,
0,0,46,48,3,6,3,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,
0,50,55,1,0,0,0,51,49,1,0,0,0,52,54,3,16,8,0,53,52,1,0,0,0,54,57,1,0,0,0,
55,53,1,0,0,0,55,56,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,58,25,1,0,0,0,58,
31,1,0,0,0,58,43,1,0,0,0,59,1,1,0,0,0,60,64,3,4,2,0,61,63,3,8,4,0,62,61,
1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,3,1,0,0,0,66,64,1,0,
0,0,67,70,3,10,5,0,68,70,3,12,6,0,69,67,1,0,0,0,69,68,1,0,0,0,70,71,1,0,
0,0,71,72,5,2,0,0,72,5,1,0,0,0,73,74,3,8,4,0,74,75,5,3,0,0,75,76,3,8,4,0,
76,84,1,0,0,0,77,78,3,8,4,0,78,79,5,4,0,0,79,80,3,14,7,0,80,81,5,3,0,0,81,
82,3,8,4,0,82,84,1,0,0,0,83,73,1,0,0,0,83,77,1,0,0,0,84,7,1,0,0,0,85,88,
3,12,6,0,86,88,3,10,5,0,87,85,1,0,0,0,87,86,1,0,0,0,88,9,1,0,0,0,89,90,5,
5,0,0,90,91,5,1,0,0,91,11,1,0,0,0,92,93,5,1,0,0,93,13,1,0,0,0,94,95,5,1,
0,0,95,15,1,0,0,0,96,97,3,8,4,0,97,98,3,18,9,0,98,17,1,0,0,0,99,103,5,7,
0,0,100,102,3,20,10,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,
104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,106,112,5,9,0,0,107,108,5,8,
0,0,108,109,3,20,10,0,109,110,5,9,0,0,110,112,1,0,0,0,111,99,1,0,0,0,111,
107,1,0,0,0,112,19,1,0,0,0,113,124,5,10,0,0,114,124,3,18,9,0,115,119,5,8,
0,0,116,118,3,20,10,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,
120,1,0,0,0,120,122,1,0,0,0,121,119,1,0,0,0,122,124,5,9,0,0,123,113,1,0,
0,0,123,114,1,0,0,0,123,115,1,0,0,0,124,21,1,0,0,0,15,25,31,37,43,49,55,
58,64,69,83,87,103,111,119,123];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class loosetGraph extends antlr4.Parser {

    static grammarFileName = "loosetGraph.g4";
    static literalNames = [ null, null, "':'", "'->'", "'-'", "'=>'", null, 
                            null, null, "'}'" ];
    static symbolicNames = [ null, "ID", "SEMI", "ARROW", "HIFEN", "DOUBLE_ARROW", 
                             "SPACES_RULE_TOKEN", "OPEN_EDN", "OPEN_SUB_EDN", 
                             "CLOSE_EDN", "EDN" ];
    static ruleNames = [ "loosetGraph", "foldable", "foldableID", "edge", 
                         "node", "labelID", "lixID", "edgeString", "nodeProps", 
                         "edn", "innerEdn" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = loosetGraph.ruleNames;
        this.literalNames = loosetGraph.literalNames;
        this.symbolicNames = loosetGraph.symbolicNames;
    }



	loosetGraph() {
	    let localctx = new LoosetGraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, loosetGraph.RULE_loosetGraph);
	    var _la = 0;
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===5) {
	                this.state = 22;
	                this.edge();
	                this.state = 27;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 28;
	                    this.foldable(); 
	                }
	                this.state = 33;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===5) {
	                this.state = 34;
	                this.edge();
	                this.state = 39;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 40;
	                    this.foldable(); 
	                }
	                this.state = 45;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            this.state = 49;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 46;
	                    this.edge(); 
	                }
	                this.state = 51;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===5) {
	                this.state = 52;
	                this.nodeProps();
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	foldable() {
	    let localctx = new FoldableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, loosetGraph.RULE_foldable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.foldableID();
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 61;
	                this.node(); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	foldableID() {
	    let localctx = new FoldableIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, loosetGraph.RULE_foldableID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 67;
	            this.labelID();
	            break;
	        case 1:
	            this.state = 68;
	            this.lixID();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 71;
	        this.match(loosetGraph.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edge() {
	    let localctx = new EdgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, loosetGraph.RULE_edge);
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.node();
	            this.state = 74;
	            this.match(loosetGraph.ARROW);
	            this.state = 75;
	            this.node();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.node();
	            this.state = 78;
	            this.match(loosetGraph.HIFEN);
	            this.state = 79;
	            this.edgeString();
	            this.state = 80;
	            this.match(loosetGraph.ARROW);
	            this.state = 81;
	            this.node();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	node() {
	    let localctx = new NodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, loosetGraph.RULE_node);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.lixID();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.labelID();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelID() {
	    let localctx = new LabelIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, loosetGraph.RULE_labelID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(loosetGraph.DOUBLE_ARROW);
	        this.state = 90;
	        this.match(loosetGraph.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lixID() {
	    let localctx = new LixIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, loosetGraph.RULE_lixID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(loosetGraph.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edgeString() {
	    let localctx = new EdgeStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, loosetGraph.RULE_edgeString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(loosetGraph.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nodeProps() {
	    let localctx = new NodePropsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, loosetGraph.RULE_nodeProps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.node();
	        this.state = 97;
	        this.edn();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edn() {
	    let localctx = new EdnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, loosetGraph.RULE_edn);
	    var _la = 0;
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.match(loosetGraph.OPEN_EDN);
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1408) !== 0)) {
	                this.state = 100;
	                this.innerEdn();
	                this.state = 105;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 106;
	            this.match(loosetGraph.CLOSE_EDN);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.match(loosetGraph.OPEN_SUB_EDN);
	            this.state = 108;
	            this.innerEdn();
	            this.state = 109;
	            this.match(loosetGraph.CLOSE_EDN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	innerEdn() {
	    let localctx = new InnerEdnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, loosetGraph.RULE_innerEdn);
	    var _la = 0;
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.match(loosetGraph.EDN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.edn();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.match(loosetGraph.OPEN_SUB_EDN);
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1408) !== 0)) {
	                this.state = 116;
	                this.innerEdn();
	                this.state = 121;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 122;
	            this.match(loosetGraph.CLOSE_EDN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

loosetGraph.EOF = antlr4.Token.EOF;
loosetGraph.ID = 1;
loosetGraph.SEMI = 2;
loosetGraph.ARROW = 3;
loosetGraph.HIFEN = 4;
loosetGraph.DOUBLE_ARROW = 5;
loosetGraph.SPACES_RULE_TOKEN = 6;
loosetGraph.OPEN_EDN = 7;
loosetGraph.OPEN_SUB_EDN = 8;
loosetGraph.CLOSE_EDN = 9;
loosetGraph.EDN = 10;

loosetGraph.RULE_loosetGraph = 0;
loosetGraph.RULE_foldable = 1;
loosetGraph.RULE_foldableID = 2;
loosetGraph.RULE_edge = 3;
loosetGraph.RULE_node = 4;
loosetGraph.RULE_labelID = 5;
loosetGraph.RULE_lixID = 6;
loosetGraph.RULE_edgeString = 7;
loosetGraph.RULE_nodeProps = 8;
loosetGraph.RULE_edn = 9;
loosetGraph.RULE_innerEdn = 10;

class LoosetGraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_loosetGraph;
    }

	edge = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EdgeContext);
	    } else {
	        return this.getTypedRuleContext(EdgeContext,i);
	    }
	};

	foldable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FoldableContext);
	    } else {
	        return this.getTypedRuleContext(FoldableContext,i);
	    }
	};

	nodeProps = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodePropsContext);
	    } else {
	        return this.getTypedRuleContext(NodePropsContext,i);
	    }
	};


}



class FoldableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_foldable;
    }

	foldableID() {
	    return this.getTypedRuleContext(FoldableIDContext,0);
	};

	node = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodeContext);
	    } else {
	        return this.getTypedRuleContext(NodeContext,i);
	    }
	};


}



class FoldableIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_foldableID;
    }

	SEMI() {
	    return this.getToken(loosetGraph.SEMI, 0);
	};

	labelID() {
	    return this.getTypedRuleContext(LabelIDContext,0);
	};

	lixID() {
	    return this.getTypedRuleContext(LixIDContext,0);
	};


}



class EdgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_edge;
    }

	node = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodeContext);
	    } else {
	        return this.getTypedRuleContext(NodeContext,i);
	    }
	};

	ARROW() {
	    return this.getToken(loosetGraph.ARROW, 0);
	};

	HIFEN() {
	    return this.getToken(loosetGraph.HIFEN, 0);
	};

	edgeString() {
	    return this.getTypedRuleContext(EdgeStringContext,0);
	};


}



class NodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_node;
    }

	lixID() {
	    return this.getTypedRuleContext(LixIDContext,0);
	};

	labelID() {
	    return this.getTypedRuleContext(LabelIDContext,0);
	};


}



class LabelIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_labelID;
    }

	DOUBLE_ARROW() {
	    return this.getToken(loosetGraph.DOUBLE_ARROW, 0);
	};

	ID() {
	    return this.getToken(loosetGraph.ID, 0);
	};


}



class LixIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_lixID;
    }

	ID() {
	    return this.getToken(loosetGraph.ID, 0);
	};


}



class EdgeStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_edgeString;
    }

	ID() {
	    return this.getToken(loosetGraph.ID, 0);
	};


}



class NodePropsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_nodeProps;
    }

	node() {
	    return this.getTypedRuleContext(NodeContext,0);
	};

	edn() {
	    return this.getTypedRuleContext(EdnContext,0);
	};


}



class EdnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_edn;
    }

	OPEN_EDN() {
	    return this.getToken(loosetGraph.OPEN_EDN, 0);
	};

	CLOSE_EDN() {
	    return this.getToken(loosetGraph.CLOSE_EDN, 0);
	};

	innerEdn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InnerEdnContext);
	    } else {
	        return this.getTypedRuleContext(InnerEdnContext,i);
	    }
	};

	OPEN_SUB_EDN() {
	    return this.getToken(loosetGraph.OPEN_SUB_EDN, 0);
	};


}



class InnerEdnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraph.RULE_innerEdn;
    }

	EDN() {
	    return this.getToken(loosetGraph.EDN, 0);
	};

	edn() {
	    return this.getTypedRuleContext(EdnContext,0);
	};

	OPEN_SUB_EDN() {
	    return this.getToken(loosetGraph.OPEN_SUB_EDN, 0);
	};

	CLOSE_EDN() {
	    return this.getToken(loosetGraph.CLOSE_EDN, 0);
	};

	innerEdn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InnerEdnContext);
	    } else {
	        return this.getTypedRuleContext(InnerEdnContext,i);
	    }
	};


}




loosetGraph.LoosetGraphContext = LoosetGraphContext; 
loosetGraph.FoldableContext = FoldableContext; 
loosetGraph.FoldableIDContext = FoldableIDContext; 
loosetGraph.EdgeContext = EdgeContext; 
loosetGraph.NodeContext = NodeContext; 
loosetGraph.LabelIDContext = LabelIDContext; 
loosetGraph.LixIDContext = LixIDContext; 
loosetGraph.EdgeStringContext = EdgeStringContext; 
loosetGraph.NodePropsContext = NodePropsContext; 
loosetGraph.EdnContext = EdnContext; 
loosetGraph.InnerEdnContext = InnerEdnContext; 
