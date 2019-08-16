/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : consume_name_specs.js
* Created at  : 2019-07-27
* Updated at  : 2019-07-27
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const expect          = require("expect"),
	  StringStream    = require("jeefo_tokenizer/src/string_stream"),
	  _consume_number = require("../../helpers/consume_number");

let streamer = new StringStream(`+.01
		-0.02
		.304px
		5.67e
		8e901.89
		234e+ab
		-56.78e+90123
		+.45e67`
	);

function get_next_number(streamer) {
	let next_character;
	while (next_character = streamer.get_next_character()) {
		if(next_character === '\n') {
			streamer.get_next_character(true);
			return;
		}
	}

}


describe("Consume_number function testing.", () => {

	describe("Test number against '+.01'", () => {
		streamer.move_cursor(1);

		const result = '+.01',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '-0.02'", () => {
		get_next_number(streamer);

		const result = '-0.02',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '.304px'", () => {
		get_next_number(streamer);

		const result = '.304',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '5.67e'", () => {
		get_next_number(streamer);

		const result = '5.67',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '8e901'", () => {
		get_next_number(streamer);

		const result = '8e901',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '234e+ab'", () => {
		get_next_number(streamer);

		const result = '234',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '-56.78e+90123'", () => {
		get_next_number(streamer);

		const result = '-56.78e+90123',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test number against '+.45e67'", () => {
		get_next_number(streamer);

		const result = '+.45e67',
			  current_index = streamer.cursor.index,
			  length = _consume_number(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume number length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume number is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

});