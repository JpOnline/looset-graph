// Generated from loosetGraph.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import loosetGraphListener from './loosetGraphListener.js';
const serializedATN = [4,1,5,47,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,5,0,
24,8,0,10,0,12,0,27,9,0,3,0,29,8,0,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,
2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,1,0,3,4,46,0,28,
1,0,0,0,2,30,1,0,0,0,4,37,1,0,0,0,6,40,1,0,0,0,8,44,1,0,0,0,10,12,3,6,3,
0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,29,1,0,0,0,
15,13,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,
20,1,0,0,0,20,25,1,0,0,0,21,19,1,0,0,0,22,24,3,6,3,0,23,22,1,0,0,0,24,27,
1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,28,13,1,
0,0,0,28,19,1,0,0,0,29,1,1,0,0,0,30,34,3,4,2,0,31,33,3,8,4,0,32,31,1,0,0,
0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,3,1,0,0,0,36,34,1,0,0,0,37,
38,7,0,0,0,38,39,5,1,0,0,39,5,1,0,0,0,40,41,3,8,4,0,41,42,5,2,0,0,42,43,
3,8,4,0,43,7,1,0,0,0,44,45,7,0,0,0,45,9,1,0,0,0,5,13,19,25,28,34];


const atn = new antlr4.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class loosetGraphParser extends antlr4.Parser {

    static grammarFileName = "loosetGraph.g4";
    static literalNames = [ null, "':'", "'->'" ];
    static symbolicNames = [ null, null, null, "LABEL_ID", "ID", "SPACES_RULE_TOKEN" ];
    static ruleNames = [ "loosetGraph", "foldable", "foldableID", "edge", 
                         "node" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = loosetGraphParser.ruleNames;
        this.literalNames = loosetGraphParser.literalNames;
        this.symbolicNames = loosetGraphParser.symbolicNames;
    }



	loosetGraph() {
	    let localctx = new LoosetGraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, loosetGraphParser.RULE_loosetGraph);
	    var _la = 0;
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3 || _la===4) {
	                this.state = 10;
	                this.edge();
	                this.state = 15;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 16;
	                    this.foldable(); 
	                }
	                this.state = 21;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3 || _la===4) {
	                this.state = 22;
	                this.edge();
	                this.state = 27;
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
	    this.enterRule(localctx, 2, loosetGraphParser.RULE_foldable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.foldableID();
	        this.state = 34;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 31;
	                this.node(); 
	            }
	            this.state = 36;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
	    this.enterRule(localctx, 4, loosetGraphParser.RULE_foldableID);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 38;
	        this.match(loosetGraphParser.T__0);
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
	    this.enterRule(localctx, 6, loosetGraphParser.RULE_edge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.node();
	        this.state = 41;
	        this.match(loosetGraphParser.T__1);
	        this.state = 42;
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
	    this.enterRule(localctx, 8, loosetGraphParser.RULE_node);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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

loosetGraphParser.EOF = antlr4.Token.EOF;
loosetGraphParser.T__0 = 1;
loosetGraphParser.T__1 = 2;
loosetGraphParser.LABEL_ID = 3;
loosetGraphParser.ID = 4;
loosetGraphParser.SPACES_RULE_TOKEN = 5;

loosetGraphParser.RULE_loosetGraph = 0;
loosetGraphParser.RULE_foldable = 1;
loosetGraphParser.RULE_foldableID = 2;
loosetGraphParser.RULE_edge = 3;
loosetGraphParser.RULE_node = 4;

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
        this.ruleIndex = loosetGraphParser.RULE_loosetGraph;
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

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterLoosetGraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitLoosetGraph(this);
		}
	}


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
        this.ruleIndex = loosetGraphParser.RULE_foldable;
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

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterFoldable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitFoldable(this);
		}
	}


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
        this.ruleIndex = loosetGraphParser.RULE_foldableID;
    }

	LABEL_ID() {
	    return this.getToken(loosetGraphParser.LABEL_ID, 0);
	};

	ID() {
	    return this.getToken(loosetGraphParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterFoldableID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitFoldableID(this);
		}
	}


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
        this.ruleIndex = loosetGraphParser.RULE_edge;
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

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterEdge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitEdge(this);
		}
	}


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
        this.ruleIndex = loosetGraphParser.RULE_node;
    }

	ID() {
	    return this.getToken(loosetGraphParser.ID, 0);
	};

	LABEL_ID() {
	    return this.getToken(loosetGraphParser.LABEL_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitNode(this);
		}
	}


}




loosetGraphParser.LoosetGraphContext = LoosetGraphContext; 
loosetGraphParser.FoldableContext = FoldableContext; 
loosetGraphParser.FoldableIDContext = FoldableIDContext; 
loosetGraphParser.EdgeContext = EdgeContext; 
loosetGraphParser.NodeContext = NodeContext; 
