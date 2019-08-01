/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : consume_name_specs.js
* Created at  : 2019-07-27
* Updated at  : 2019-07-27
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const expect        = require("expect"),
	  StringStream  = require("jeefo_tokenizer/src/string_stream"),
	  _consume_name = require("../../helpers/consume_name");

let streamer = new StringStream(`a
		b123
		wor\\ds
		\\20 hex
		#hash
		#\\0f hash`
	);

function get_next_name(streamer) {
	let next_character;
	while (next_character = streamer.get_next_character()) {
		if(next_character === '\n') {
			streamer.get_next_character(true);
			return;
		}
	}

}


describe("Test consume_name function and hash token.", () => {

	describe("Is 'a'", () => {
		streamer.move_cursor(1);

		const result = 'a',
			  current_index = streamer.cursor.index,
			  length = _consume_name(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume name string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume name string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Is 'b123'", () => {
		get_next_name(streamer);

		const result = 'b123',
			  current_index = streamer.cursor.index,
			  length = _consume_name(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume name string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume name string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Is 'wor\\ds'", () => {
		get_next_name(streamer);

		const result = 'wor\\ds',
			  current_index = streamer.cursor.index,
			  length = _consume_name(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume name string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume name string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Is '\\20 hex'", () => {
		get_next_name(streamer);

		const result = '\\20 hex',
			  current_index = streamer.cursor.index,
			  length = _consume_name(streamer, current_index, 0),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume name string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume name string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Is '#hash'", () => {
		get_next_name(streamer);

		const result = '#hash',
			  current_index = streamer.cursor.index,
			  length = _consume_name(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume hash token length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume hash token is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Is '#\\0f hash'", () => {
		get_next_name(streamer);

		const result = '#\\0f hash',
			  current_index = streamer.cursor.index,
			  length = _consume_name(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume hash token length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume hash token is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

});