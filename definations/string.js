/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : string.js
* Created at  : 2019-07-24
* Updated at  : 2019-07-24
* Author      : Boorch
* Desciption  :	https://drafts.csswg.org/css-syntax/#consume-token

	§ 4.3.1. Consume a token

	U+0022 QUOTATION MARK (") and U+0027 APOSTROPHE (')
		Consume a string token and return it.

	§ 4.3.5. Consume a string token

	This algorithm may be called with an ending code point, which denotes
	the code point that ends the string. If an ending code point is
	not specified, the current input code point is used.
    
    Initially create a <string-token> with its value set to the empty string.

	Repeatedly consume the next input code point from the stream:

		ending code point
			Return the <string-token>.
		EOF
			This is a parse error. Return the <string-token>.
		newline
			This is a parse error. Reconsume the current input code point,
			create a <bad-string-token>, and return it.
		U+005C REVERSE SOLIDUS (\)
			If the next input code point is EOF, do nothing.
			Otherwise, if the next input code point is a newline, consume it.

			Otherwise, (the stream starts with a valid escape) consume an escaped
			code point and append the returned code point to the <string-token>’s value.

		anything else
			Append the current input code point to the <string-token>’s value.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

// If the char is either "'" (quote) or '"' (double quote) then potential tokens are:
// - STRING                "sample string", 'sample string'
// - BAD_STRING            "sample bad string, 'sample bad string

const _is_newline = require("../helpers").is_newline;

module.exports = {
	id       : "String",
	priority : 3,

	is : current_character => current_character === '"' || current_character === "'",
	initialize : (token, current_character, streamer) => {
		const start = streamer.get_cursor(),
			  quote = current_character;

		let next_character = streamer.get_next_character(),
			is_bad         = true,
			previous_character;

        while (next_character) {
        	if (previous_character !== '\\')  {
	            if (next_character === quote) {
	                is_bad = false;
	                break;
	            }
	            else if (_is_newline(next_character))  {
	            	break;
				}
            }

            previous_character = next_character;
            next_character     = streamer.get_next_character();
        }

	    token.value  = streamer.string.substring(start.index, streamer.cursor.index + (!is_bad ? 1 : 0));
        token.is_bad = is_bad;
	    token.quote  = quote;
		token.start  = start;
		token.end    = streamer.get_cursor();
	},
}