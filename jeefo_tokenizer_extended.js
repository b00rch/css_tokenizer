/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : jeefo_tokenizer_extended.js
* Created at  : 2019-08-05
* Updated at  : 2019-08-05
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const JeefoTokenizer  = require("jeefo_tokenizer");

class JeefoTokenizerExtended extends JeefoTokenizer {

	constructor() {
		super();
	}

    get_next_token (skip_whitespace) {
        const current_character = this.streamer.get_next_character(skip_whitespace);

        if (current_character === null) { return null; }

        let i = this.token_definitions.length;
        while (i--) {
            if (this.token_definitions[i].is(current_character, this.streamer)) {
                const token = new this.token_definitions[i].Token();
                this.token_definitions[i].initialize(token, current_character, this.streamer);

                return token;
            }
        }

        throw new SyntaxError("Undefined token");
    }

}

module.exports = JeefoTokenizerExtended;