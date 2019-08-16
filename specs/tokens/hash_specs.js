/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : hash_specs.js
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

describe("Hash tokens.", () => {

	describe("Test hash token against '#\\20 bc'", () => {
		css_tokenizer.init(`#\\20 bc`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `#\\20 bc`;
			it(`Should be token id is 'Hash'`, () => {
				expect(next_token.id).toBe('Hash');
			});
			it(`Should be hash token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test hash token against '#id'", () => {
		css_tokenizer.init(`#id`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `#id`;
			it(`Should be token id is 'Hash'`, () => {
				expect(next_token.id).toBe('Hash');
			});
			it(`Should be hash token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

});