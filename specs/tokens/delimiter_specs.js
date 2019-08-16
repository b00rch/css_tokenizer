/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : delimiter_specs.js
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

describe("Delimiter tokens.", () => {
	css_tokenizer.init(`{|#+().-`);

	describe("Test delim token against '{'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `{`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against '|'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `|`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against '#'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `#`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against '+'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `+`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against '('", () => {
		const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `(`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against ')'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `)`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against '.'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `.`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test delim token against '-'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `-`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

});