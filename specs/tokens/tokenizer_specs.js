/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : tokenizer_specs.js
* Created at  : 2019-07-28
* Updated at  : 2019-07-28
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";


const fs           = require("fs"),
	  expect       = require("expect"),
	  StringStream = require("../../../jeefo_tokenizer/src/string_stream");

const css_tokenizer = require('../../index');

css_tokenizer.init(`"fd a sf"[
'fish dalai']
'do not close string
/* test comment */{
  | |= @\\21 import @font-face	#
#\\20 bc #id <!-- -->_abc+func(url('string')url(/image/image.gif)url(/imag'-.
30%.4px
-15deg
67ms
+345
()`);

describe("Test tokens.", () => {

	describe("Is string token with double quote \"fd a sf\"", () => {
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

	describe("Is delim token '['", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `[`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Is string token 'fish dalai'", () => {
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

	describe("Is delim token ']'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `]`;
			it(`Should be token id is 'Delim'`, () => {
				expect(next_token.id).toBe('Delim');
			});
			it(`Should be delim token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
    	}
	});

	describe("Is bad string token 'do not close string", () => {
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

	describe("Is comment token '/* test comment */'", () => {
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

	describe("Is delim token '{'", () => {
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

	describe("Is delim token '|'", () => {
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

	describe("Is match token '|='", () => {
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

	describe("Is at keyword token '@\\21 import'", () => {
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

	describe("Is at keyword token '@font-face'", () => {
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

	describe("Is delim token '#'", () => {
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

	describe("Is hash token '#\\20 bc'", () => {
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

	describe("Is hash token '#id'", () => {
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

	describe("Is cdo token '<!--'", () => {
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

	describe("Is cdc token '-->'", () => {
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

	describe("Is identitier token '_abc'", () => {
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

	describe("Is delim token '+'", () => {
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

	describe("Is identitier token 'func('", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `func(`;
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

	describe("Is identitier token 'url('", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `url(`;
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

	describe("Is string token 'string'", () => {
    	const next_token = css_tokenizer.get_next_token();

		it(`Should be next_token is exists`, () => {
			expect(next_token).toBeTruthy();
		});

    	if (next_token !== null) {
    		const result = `'string'`;
			it(`Should be token id is 'String'`, () => {
				expect(next_token.id).toBe('String');
			});
			it(`Should be string token value is '${result}'`, () => {
				expect(next_token.value).toBe(result);
			});
			it(`Should be string token is not bad`, () => {
				expect(next_token.is_bad).toBe(false);
			});
    	}
	});

	describe("Is delim token ')'", () => {
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

	describe("Is url token 'url(/image/image.gif)'", () => {
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

	describe("Is bad url token 'url(/imag'", () => {
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

	describe("Is delim token '-'", () => {
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

	describe("Is delim token '.'", () => {
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

	describe("Is numeric token PERCENTAGE '30%'", () => {
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

	describe("Is numeric token DIMENSION '.4px'", () => {
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

	describe("Is numeric token DIMENSION '-15deg'", () => {
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

	describe("Is numeric token DIMENSION '67ms'", () => {
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

	describe("Is numeric token NUMBER '+345'", () => {
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

	describe("Is delim token '('", () => {
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

	describe("Is delim token ')'", () => {
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

});