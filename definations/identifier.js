/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : hash.js
* Created at  : 2019-07-25
* Updated at  : 2019-07-25
* Author      : Boorch
* Description : https://drafts.csswg.org/css-syntax/#consume-ident-like-token
    
    § 4.3.4. Consume an ident-like token

    It returns an <ident-token>, <function-token>, <url-token>, or <bad-url-token>.

    Consume a name, and let string be the result.

	If string’s value is an ASCII case-insensitive match for "url",
	and the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
	While the next two input code points are whitespace, consume the next input
	code point. If the next one or two input code points are
	U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('), or whitespace followed by
	U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('),
	then create a <function-token> with its value set to string and return it.
	Otherwise, consume a url token, and return it.

	Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((),
	consume it. Create a <function-token> with its value set to string and return it.

	Otherwise, create an <ident-token> with its value set to string and return it.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

// If the char is "#" then potential tokens are:
// - HASH                  #header, #fff

const helpers              = require("../helpers"),
	  _consume_name        = require("../helpers/consume_name"),
	  _is_identifier_start = helpers.is_identifier_start;

module.exports = {
	id       : "Identifier",
	priority : 6,
	// If the next input code point is a name code point or
	// the next two input code points are a valid escape, then:
	is : (current_character, streamer) => {
		const second_character = streamer.at(streamer.cursor.index + 1),
			  third_character  = streamer.at(streamer.cursor.index + 2);
		return _is_identifier_start(current_character, second_character, third_character);
	},

	initialize : (token, current_character, streamer) => {
		const start  = streamer.get_cursor(),
			  length = _consume_name(streamer, start.index, 1);
		
		streamer.move_cursor(length - 1);

		let next_character = streamer.at(start.index + length),
			value          = streamer.substring_from(start.index),
			type;

		if (next_character === '(')  {
			value += streamer.get_next_character(); 
			type   = 'FUNCTION';
		}
		else type = 'IDENT';


	    token.value  = value;
		token.start  = start;
		token.type   = type;
		token.end    = streamer.get_cursor();
	},
}



