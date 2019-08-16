/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : string_specs.js
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

describe("String tokens.", () => {

	describe("Test double quote string token against \"fd a sf\"", () => {
		css_tokenizer.init(`"fd a sf" `);
    	
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `"fd a sf"`;
			it(`Should be token id is 'String'`, () => {
				expect(next_token.id).toBe('String');
			});
			it(`Should be string token value is ${result}`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be string token is not bad`, () => {
				expect(next_token.is_bad).toBe(false);
			});
    	}
	});

	describe("Test string token against 'fish dalai'", () => {
		css_tokenizer.init(`'fish dalai'`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `'fish dalai'`;
			it(`Should be token id is 'String'`, () => {
				expect(next_token.id).toBe('String');
			});
			it(`Should be string token value is ${result}`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be string token is not bad`, () => {
				expect(next_token.is_bad).toBe(false);
			});
    	}
	});

	describe("Test bad string token against 'do not close string", () => {
		css_tokenizer.init(`'do not close string\n`);
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `'do not close string`;
			it(`Should be token id is 'String'`, () => {
				expect(next_token.id).toBe('String');
			});
			it(`Should be string token value is ${result}`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be string token is not bad`, () => {
				expect(next_token.is_bad).toBe(true);
			});
    	}
	});

});