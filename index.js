/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2019-07-22
* Updated at  : 2019-07-22
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const JeefoTokenizer  = require("jeefo_tokenizer");

const css_tokenizer = new JeefoTokenizer();

css_tokenizer.register(require('./definations/match'));			// Priority = 20

css_tokenizer.register(require('./definations/cdo'));			// Priority = 10
css_tokenizer.register(require('./definations/cdc'));			// Priority = 10
css_tokenizer.register(require('./definations/url'));			// Priority = 7
css_tokenizer.register(require('./definations/identifier'));	// Priority = 6
css_tokenizer.register(require('./definations/numeric'));		// Priority = 5
css_tokenizer.register(require('./definations/at'));			// Priority = 4
css_tokenizer.register(require('./definations/hash'));			// Priority = 4
css_tokenizer.register(require('./definations/string'));		// Priority = 3
css_tokenizer.register(require('./definations/comment'));		// Priority = 2
css_tokenizer.register(require('./definations/whitespace'));	// Priority = 1
css_tokenizer.register(require('./definations/delimiter'));		// Priority = 0

module.exports = css_tokenizer;



// test code
if (require.main === module) {
	const fs = require("fs");
	const source = `"fdasf"
'fd'
'new line
fa
/* fsadfa */
  a |=	d	daa`;

	// console.log("===========================");
	// console.log("'"+ source +"'");
	css_tokenizer.init(source);
	while (true)  {
        let next_token = css_tokenizer.get_next_token();
        if (next_token !== null) {
			console.log("===========================");
        	console.log(next_token.id);
        	console.log(next_token);
        	console.log('Priority '+ next_token.priority);
        }
        else break;
	}

	process.exit();
}