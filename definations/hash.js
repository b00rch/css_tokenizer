/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : hash.js
* Created at  : 2019-07-25
* Updated at  : 2019-07-25
* Author      : Boorch
* Description : https://drafts.csswg.org/css-syntax/#consume-token
    
    § 4.3.1. Consume a token

    U+0023 NUMBER SIGN (#)
        If the next input code point is a name code point or
        the next two input code points are a valid escape, then:
            1.  Create a <hash-token>.
            2.  If the next 3 input code points would start an identifier,
                set the <hash-token>’s type flag to "id".
            3.  Consume a name, and set the <hash-token>’s value to
            	the returned string.
            4.  Return the <hash-token>.
        Otherwise, return a <delim-token> with its value
        set to the current input code point.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

// If the char is "#" then potential tokens are:
// - HASH                  #header, #fff

const helpers          = require("../helpers"),
	  _consume_name    = require("../helpers/consume_name"),
	  _is_name         = helpers.is_name,
	  _is_valid_escape = helpers.is_valid_escape;

module.exports = {
	id       : "Hash",
	priority : 4,
	// If the next input code point is a name code point or
	// the next two input code points are a valid escape, then:
	is : (current_character, streamer) => {
		if (current_character === '#')  {
			const next_character      = streamer.at(streamer.cursor.index + 1),
				  next_next_character = streamer.at(streamer.cursor.index + 2);
			return _is_name(next_character) || _is_valid_escape(next_character, next_next_character);
		}
		return false;
	},

	initialize : (token, current_character, streamer) => {
		const start  = streamer.get_cursor(),
			  length = _consume_name(streamer, start.index, 1);

		streamer.move_cursor(length - 1);

	    token.value  = streamer.substring_from(start.index);
		token.start  = start;
		token.end    = streamer.get_cursor();
	},
}