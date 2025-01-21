// Generated from loosetGraph.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,9,114,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,5,0,
40,8,0,10,0,12,0,43,9,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,5,0,52,8,0,10,
0,12,0,55,9,0,3,0,57,8,0,1,1,1,1,5,1,61,8,1,10,1,12,1,64,9,1,1,2,1,2,3,2,
68,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,3,4,78,8,4,1,5,1,5,1,5,1,6,1,6,1,
7,1,7,1,7,1,8,1,8,5,8,90,8,8,10,8,12,8,93,9,8,1,8,1,8,1,8,1,8,1,8,3,8,100,
8,8,1,9,1,9,1,9,1,9,5,9,106,8,9,10,9,12,9,109,9,9,1,9,3,9,112,8,9,1,9,0,
0,10,0,2,4,6,8,10,12,14,16,18,0,0,119,0,56,1,0,0,0,2,58,1,0,0,0,4,67,1,0,
0,0,6,71,1,0,0,0,8,77,1,0,0,0,10,79,1,0,0,0,12,82,1,0,0,0,14,84,1,0,0,0,
16,99,1,0,0,0,18,111,1,0,0,0,20,22,3,6,3,0,21,20,1,0,0,0,22,25,1,0,0,0,23,
21,1,0,0,0,23,24,1,0,0,0,24,57,1,0,0,0,25,23,1,0,0,0,26,28,3,2,1,0,27,26,
1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,35,1,0,0,0,31,29,1,
0,0,0,32,34,3,6,3,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,
0,0,36,57,1,0,0,0,37,35,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,
0,41,39,1,0,0,0,41,42,1,0,0,0,42,47,1,0,0,0,43,41,1,0,0,0,44,46,3,6,3,0,
45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,53,1,0,0,0,49,
47,1,0,0,0,50,52,3,14,7,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,
1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,56,23,1,0,0,0,56,29,1,0,0,0,56,41,1,
0,0,0,57,1,1,0,0,0,58,62,3,4,2,0,59,61,3,8,4,0,60,59,1,0,0,0,61,64,1,0,0,
0,62,60,1,0,0,0,62,63,1,0,0,0,63,3,1,0,0,0,64,62,1,0,0,0,65,68,3,10,5,0,
66,68,3,12,6,0,67,65,1,0,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,70,5,2,0,0,70,
5,1,0,0,0,71,72,3,8,4,0,72,73,5,3,0,0,73,74,3,8,4,0,74,7,1,0,0,0,75,78,3,
12,6,0,76,78,3,10,5,0,77,75,1,0,0,0,77,76,1,0,0,0,78,9,1,0,0,0,79,80,5,4,
0,0,80,81,5,1,0,0,81,11,1,0,0,0,82,83,5,1,0,0,83,13,1,0,0,0,84,85,3,8,4,
0,85,86,3,16,8,0,86,15,1,0,0,0,87,91,5,6,0,0,88,90,3,18,9,0,89,88,1,0,0,
0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,
94,100,5,8,0,0,95,96,5,7,0,0,96,97,3,18,9,0,97,98,5,8,0,0,98,100,1,0,0,0,
99,87,1,0,0,0,99,95,1,0,0,0,100,17,1,0,0,0,101,112,5,9,0,0,102,112,3,16,
8,0,103,107,5,7,0,0,104,106,3,18,9,0,105,104,1,0,0,0,106,109,1,0,0,0,107,
105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,0,0,109,107,1,0,0,0,110,112,5,8,
0,0,111,101,1,0,0,0,111,102,1,0,0,0,111,103,1,0,0,0,112,19,1,0,0,0,14,23,
29,35,41,47,53,56,62,67,77,91,99,107,111];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class loosetGraph extends antlr4.Parser {

    static grammarFileName = "loosetGraph.g4";
    static literalNames = [ null, null, "':'", "'->'", "'=>'", null, null, 
                            null, "'}'" ];
    static symbolicNames = [ null, "ID", "SEMI", "ARROW", "DOUBLE_ARROW", 
                             "SPACES_RULE_TOKEN", "OPEN_EDN", "OPEN_SUB_EDN", 
                             "CLOSE_EDN", "EDN" ];
    static ruleNames = [ "loosetGraph", "foldable", "foldableID", "edge", 
                         "node", "labelID", "lixID", "nodeProps", "edn", 
                         "innerEdn" ];

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
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===4) {
	                this.state = 20;
	                this.edge();
	                this.state = 25;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 26;
	                    this.foldable(); 
	                }
	                this.state = 31;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===4) {
	                this.state = 32;
	                this.edge();
	                this.state = 37;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 38;
	                    this.foldable(); 
	                }
	                this.state = 43;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            this.state = 47;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 44;
	                    this.edge(); 
	                }
	                this.state = 49;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===4) {
	                this.state = 50;
	                this.nodeProps();
	                this.state = 55;
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
	        this.state = 58;
	        this.foldableID();
	        this.state = 62;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 59;
	                this.node(); 
	            }
	            this.state = 64;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 65;
	            this.labelID();
	            break;
	        case 1:
	            this.state = 66;
	            this.lixID();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 69;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.node();
	        this.state = 72;
	        this.match(loosetGraph.ARROW);
	        this.state = 73;
	        this.node();
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
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.lixID();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
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
	        this.state = 79;
	        this.match(loosetGraph.DOUBLE_ARROW);
	        this.state = 80;
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
	        this.state = 82;
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
	    this.enterRule(localctx, 14, loosetGraph.RULE_nodeProps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.node();
	        this.state = 85;
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
	    this.enterRule(localctx, 16, loosetGraph.RULE_edn);
	    var _la = 0;
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.match(loosetGraph.OPEN_EDN);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 704) !== 0)) {
	                this.state = 88;
	                this.innerEdn();
	                this.state = 93;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 94;
	            this.match(loosetGraph.CLOSE_EDN);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.match(loosetGraph.OPEN_SUB_EDN);
	            this.state = 96;
	            this.innerEdn();
	            this.state = 97;
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
	    this.enterRule(localctx, 18, loosetGraph.RULE_innerEdn);
	    var _la = 0;
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(loosetGraph.EDN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.edn();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.match(loosetGraph.OPEN_SUB_EDN);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 704) !== 0)) {
	                this.state = 104;
	                this.innerEdn();
	                this.state = 109;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 110;
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
loosetGraph.DOUBLE_ARROW = 4;
loosetGraph.SPACES_RULE_TOKEN = 5;
loosetGraph.OPEN_EDN = 6;
loosetGraph.OPEN_SUB_EDN = 7;
loosetGraph.CLOSE_EDN = 8;
loosetGraph.EDN = 9;

loosetGraph.RULE_loosetGraph = 0;
loosetGraph.RULE_foldable = 1;
loosetGraph.RULE_foldableID = 2;
loosetGraph.RULE_edge = 3;
loosetGraph.RULE_node = 4;
loosetGraph.RULE_labelID = 5;
loosetGraph.RULE_lixID = 6;
loosetGraph.RULE_nodeProps = 7;
loosetGraph.RULE_edn = 8;
loosetGraph.RULE_innerEdn = 9;

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
loosetGraph.NodePropsContext = NodePropsContext; 
loosetGraph.EdnContext = EdnContext; 
loosetGraph.InnerEdnContext = InnerEdnContext; 
