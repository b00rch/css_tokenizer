/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : comment_specs.js
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

describe("Comment tokens.", () => {

	describe("Test comment token against '/* test comment */'", () => {
		css_tokenizer.init(`/* test comment */`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `test comment`;
			it(`Should be token id is 'Comment'`, () => {
				expect(next_token.id).toBe('Comment');
			});
			it(`Should be comment token value is '${result}'`, () => {
				expect(next_token.comment).toBe(result);
			});
			it(`Should be comment token is not bad`, () => {
				expect(next_token.is_bad).toBe(false);
			});
    	}
	});

	describe("Test bad comment token against '/* test comment \\n new line'", () => {
		css_tokenizer.init(`/* test comment \n new line`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `test comment \n new line`;
			it(`Should be token id is 'Comment'`, () => {
				expect(next_token.id).toBe('Comment');
			});
			it(`Should be comment token value is '${result}'`, () => {
				expect(next_token.comment).toBe(result);
			});
			it(`Should be comment token is bad`, () => {
				expect(next_token.is_bad).toBe(true);
			});
    	}
	});

});