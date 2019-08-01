/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : string.js
* Created at  : 2019-07-24
* Updated at  : 2019-07-24
* Author      : Boorch
* Desciption  :	https://drafts.csswg.org/css-syntax/#consume-token

	§ 4.3.1. Consume a token

	U+002B PLUS SIGN (+)
	U+002D HYPHEN-MINUS (-)
	U+002E FULL STOP (.)
		If the input stream starts with a number, reconsume the current
		input code point, consume a numeric token and return it.

	§ 4.3.5. Consume a numeric token

	This section describes how to consume a numeric token from a stream
	of code points. It returns either a <number-token>, <percentage-token>,
	or <dimension-token>.

	Consume a number and let number be the result.

	If the next 3 input code points would start an identifier, then:

		1. Create a <dimension-token> with the same value and type flag as number,
		   and a unit set initially to the empty string.
		2. Consume a name. Set the <dimension-token>’s unit to the returned value.
		3. Return the <dimension-token>.
	Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%),
	consume it. Create a <percentage-token> with the same value as number,
	and return it.

	Otherwise, create a <number-token> with the same value and type flag as number,
	and return it.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

// If the char is a digit, ".", "+" or "-" then potential tokens are:
const _consume_name    = require("../helpers/consume_name"),
	  _consume_number  = require("../helpers/consume_number"),
	  helpers          = require("../helpers");

const _is_number_start     = helpers.is_number_start,
	  _is_identifier_start = helpers.is_identifier_start;

module.exports = {
	id       : "Numeric",
	priority : 5,

	is : (current_character, streamer) => {
		const second_character = streamer.at(streamer.cursor.index + 1),
			  third_character  = streamer.at(streamer.cursor.index + 2);
		return _is_number_start(
			current_character,
			second_character, 
			third_character
		);
	},

	initialize : (token, current_character, streamer) => {
		const start  = streamer.get_cursor();
		
		// Consume a number and let number be the result.
		let length = _consume_number(streamer, start.index, 0),
			type   = 'NUMBER';

		const next_character   = streamer.at(start.index + length),
			  second_character = streamer.at(start.index + length + 1),
			  third_character  = streamer.at(start.index + length + 2);

        // If the next 3 input code points would start an identifier, then:
        if (_is_identifier_start(next_character, second_character, third_character)) {
            // 1. Create a <dimension-token> with the same value and type flag
            //    as number, and a unit set initially to the empty string.
            // 2. Consume a name. Set the <dimension-token>’s unit to the returned value.
            // 3. Return the <dimension-token>.
            type = 'DIMENSION';
            length = _consume_name(streamer, start.index, length);
        }
        // Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%),
		// consume it. Create a <percentage-token> with the same value as number,
		// and return it.
        else if (next_character === '%')  {
            type = 'PERCENTAGE';
        	length++;
        }

        // Otherwise, create a <number-token> with the same value and type flag as number, and return it.
		streamer.move_cursor(length - 1);

	    token.value = streamer.substring_from(start.index);
	    token.type  = type;
		token.start = start;
		token.end   = streamer.get_cursor();
	},
}







