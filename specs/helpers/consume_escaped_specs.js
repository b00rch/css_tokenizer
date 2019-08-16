/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : consume_escaped_specs.js
* Created at  : 2019-07-27
* Updated at  : 2019-07-27
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const expect           = require("expect"),
	  StringStream     = require("jeefo_tokenizer/src/string_stream"),
	  _consume_escaped = require("../../helpers/consume_escaped");

let streamer = new StringStream(`\\ no character
		\\t-non hex digit character
		\\t non hex digit with whitespace
		\\f-hex digit
		\\f hex digit with whitespace
		\\fa-two hex digit
		\\f0 two hex digit with whitespace
		\\123456789 first 6 digit
		\\123456 789 first 6 digit with whitespace`
	);

function get_next_escape(streamer) {
	let next_character;
	while (next_character = streamer.get_next_character(true)) {
		if(next_character === '\\')  return;
	}

}


describe("Consume_escaped function testing.", () => {

	describe("Test escaped string against '\\ no character'", () => {
		get_next_escape(streamer);

		const result = '\\ ',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\t-non hex digit'", () => {
		get_next_escape(streamer);

		const result = '\\t',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\t non hex digit with whitespace'", () => {
		get_next_escape(streamer);

		const result = '\\t',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\f-hex digit'", () => {
		get_next_escape(streamer);

		const result = '\\f',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\f hex digit with whitespace'", () => {
		get_next_escape(streamer);

		const result = '\\f ',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\fa-two hex digit'", () => {
		get_next_escape(streamer);

		const result = '\\fa',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\f0 two hex digit with whitespace'", () => {
		get_next_escape(streamer);

		const result = '\\f0 ',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\123456789 first 6 digit'", () => {
		get_next_escape(streamer);

		const result = '\\123456',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

	describe("Test escaped string against '\\123456 first 6 digit with whitespace'", () => {
		get_next_escape(streamer);

		const result = '\\123456 ',
			  current_index = streamer.cursor.index,
			  length = _consume_escaped(streamer, current_index, 1),
			  substr = streamer.string.substring(current_index, current_index + length);

		it(`Should be consume escaped string length is ${result.length}`, () => {
			expect(length).toBe(result.length);
		});
		it(`Should be consume escaped string is '${result}'`, () => {
			expect(substr).toBe(result);
		});
	});

});
