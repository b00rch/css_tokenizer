/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : url_specs.js
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

describe("URL tokens.", () => {

	describe("Test url token against 'url(/image/image.gif)'", () => {
		css_tokenizer.init(`url(/image/image.gif)`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `url(/image/image.gif)`;
			it(`Should be token id is 'URL'`, () => {
				expect(next_token.id).toBe('URL');
			});
			it(`Should be url token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be url token is not bad`, () => {
				expect(next_token.is_bad).toBe(false);
			});
    	}
	});

	describe("Test bad url token against 'url(/imag'", () => {
		css_tokenizer.init(`url(/imag'`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `url(/imag`;
			it(`Should be token id is 'URL'`, () => {
				expect(next_token.id).toBe('URL');
			});
			it(`Should be url token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be url token is bad`, () => {
				expect(next_token.is_bad).toBe(true);
			});
    	}
	});

});