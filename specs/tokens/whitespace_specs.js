/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : whitespace_specs.js
* Created at  : 2019-07-28
* Updated at  : 2019-08-13
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const fs            = require("fs");
const expect        = require("expect");
const css_tokenizer = require('../../index');

describe("WhiteSpace tokens.", () => {

	describe("Test whitespace token against ' \\n\\t '", () => {
		css_tokenizer.init(` 
	 `);
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = ` \n\t `;
			it(`Should be token id is 'WhiteSpace'`, () => {
				expect(next_token.id).toBe('WhiteSpace');
			});
			it(`Should be whitespace token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test whitespace token against ' '", () => {
		css_tokenizer.init(` `);
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = ` `;
			it(`Should be token id is 'WhiteSpace'`, () => {
				expect(next_token.id).toBe('WhiteSpace');
			});
			it(`Should be whitespace token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test whitespace token against '\\t'", () => {
		css_tokenizer.init(`	`);
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `\t`;
			it(`Should be token id is 'WhiteSpace'`, () => {
				expect(next_token.id).toBe('WhiteSpace');
			});
			it(`Should be whitespace token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test new line token against '\\n'", () => {
		css_tokenizer.init(`
`);
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `\n`;
			it(`Should be token id is 'WhiteSpace'`, () => {
				expect(next_token.id).toBe('WhiteSpace');
			});
			it(`Should be whitespace token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

});