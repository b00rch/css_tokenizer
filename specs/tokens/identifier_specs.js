/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : identifier_specs.js
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

describe("Identifier tokens.", () => {

	describe("Test identifier token against '_abc'", () => {
		css_tokenizer.init(`_abc`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `_abc`;
			it(`Should be token id is 'Identifier'`, () => {
				expect(next_token.id).toBe('Identifier');
			});
			it(`Should be identitier token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be identitier token type is 'IDENT'`, () => {
				expect(next_token.type).toBe('IDENT');
			});
    	}
	});

	describe("Test identifier token against 'func('", () => {
		css_tokenizer.init(`func(`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `func`;
			it(`Should be token id is 'Identifier'`, () => {
				expect(next_token.id).toBe('Identifier');
			});
			it(`Should be identitier token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be identitier token type is 'FUNCTION'`, () => {
				expect(next_token.type).toBe('FUNCTION');
			});
    	}
	});

	describe("Test identifier token against 'url('", () => {
		css_tokenizer.init(`url('df')`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `url`;
			it(`Should be token id is 'Identifier'`, () => {
				expect(next_token.id).toBe('Identifier');
			});
			it(`Should be identitier token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be identitier token type is 'FUNCTION'`, () => {
				expect(next_token.type).toBe('FUNCTION');
			});
    	}
	});

});