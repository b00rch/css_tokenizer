/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : numeric_specs.js
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

describe("Numeric tokens.", () => {
	describe("Test numeric token against PERCENTAGE '30%'", () => {
		css_tokenizer.init(`30%`);

		const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `30%`;
			it(`Should be token id is 'Numeric'`, () => {
				expect(next_token.id).toBe('Numeric');
			});
			it(`Should be token type is 'PERCENTAGE'`, () => {
				expect(next_token.type).toBe('PERCENTAGE');
			});
			it(`Should be numeric token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test numeric token against DIMENSION '.4px'", () => {
		css_tokenizer.init(`.4px`);

		const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `.4px`;
			it(`Should be token id is 'Numeric'`, () => {
				expect(next_token.id).toBe('Numeric');
			});
			it(`Should be token type is 'DIMENSION'`, () => {
				expect(next_token.type).toBe('DIMENSION');
			});
			it(`Should be numeric token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test numeric token against DIMENSION '-15deg'", () => {
		css_tokenizer.init(`-15deg`);

		const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `-15deg`;
			it(`Should be token id is 'Numeric'`, () => {
				expect(next_token.id).toBe('Numeric');
			});
			it(`Should be token type is 'DIMENSION'`, () => {
				expect(next_token.type).toBe('DIMENSION');
			});
			it(`Should be numeric token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test numeric token against DIMENSION '67ms'", () => {
		css_tokenizer.init(`67ms`);

		const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `67ms`;
			it(`Should be token id is 'Numeric'`, () => {
				expect(next_token.id).toBe('Numeric');
			});
			it(`Should be token type is 'DIMENSION'`, () => {
				expect(next_token.type).toBe('DIMENSION');
			});
			it(`Should be numeric token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test numeric token against NUMBER '+345'", () => {
		css_tokenizer.init(`+345`);

		const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `+345`;
			it(`Should be token id is 'Numeric'`, () => {
				expect(next_token.id).toBe('Numeric');
			});
			it(`Should be token type is 'NUMBER'`, () => {
				expect(next_token.type).toBe('NUMBER');
			});
			it(`Should be numeric token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});
});