/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : other_specs.js
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

describe("Other tokens.", () => {

	describe("Test match token against '|='", () => {
		css_tokenizer.init(`|=`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `|=`;
			it(`Should be token id is 'Match'`, () => {
				expect(next_token.id).toBe('Match');
			});
			it(`Should be match token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be match token type is 'DASHMATCH'`, () => {
				expect(next_token.type).toBe('DASHMATCH');
			});
    	}
	});

	describe("Test cdo token against '<!--'", () => {
		css_tokenizer.init(`<!--`);

    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `<!--`;
			it(`Should be token id is 'CDO'`, () => {
				expect(next_token.id).toBe('CDO');
			});
			it(`Should be cdo token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test cdc token against '-->'", () => {
		css_tokenizer.init(`-->`);
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `-->`;
			it(`Should be token id is 'CDC'`, () => {
				expect(next_token.id).toBe('CDC');
			});
			it(`Should be cdc token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Test important token against '!important ; '", () => {
		css_tokenizer.init(`!important`);
    	const next_token = css_tokenizer.get_next_token();
    	const end_index = css_tokenizer.streamer.get_cursor().index;

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `!important`;
			it(`Should be token id is 'Important'`, () => {
				expect(next_token.id).toBe('Important');
			});
			it(`Should be important token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be token end index is 9`, () => {
				expect(end_index).toBe(9);
			});
    	}
	});

});