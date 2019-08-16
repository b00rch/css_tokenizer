/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : at_specs.js
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

describe("At tokens.", () => {

	describe("Test at keyword token against '@\\21 import'", () => {
		css_tokenizer.init(`@\\21 import`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `@\\21 import`;
			it(`Should be token id is 'AT'`, () => {
				expect(next_token.id).toBe('AT');
			});
			it(`Should be at keyword token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test at keyword token against '@font-face'", () => {
		css_tokenizer.init(`@font-face`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `@font-face`;
			it(`Should be token id is 'AT'`, () => {
				expect(next_token.id).toBe('AT');
			});
			it(`Should be at keyword token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

});