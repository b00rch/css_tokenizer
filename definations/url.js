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

const helpers           = require("../helpers"),
	  _is_newline       = helpers.is_newline,
	  _is_non_printable = helpers.is_non_printable;

module.exports = {
	id       : "URL",
	priority : 9,

	is : (current_character, streamer) => {
		if(current_character !== 'u')  return false;

		const start_index = streamer.cursor.index,
			  value       = streamer.string.substring(start_index, start_index + 4);
		
		if (value !== 'url(')  return false;

		streamer.save_cursor_position();
		streamer.move_cursor(3);

		let next_character = streamer.get_next_character(true);

		if(next_character === '"' || next_character === "'")  {
			streamer.rollback();
			return false;
		}
		else  {
			streamer.commit();
			return true;
		}
	},

	initialize : (token, current_character, streamer) => {
		const start = streamer.get_cursor();

		let next_character = streamer.get_next_character(),
			is_bad         = true,
			previous_character;

        while (next_character) {
    		// U+0029 RIGHT PARENTHESIS ())
			//     Return the <url-token>.
            if (next_character === ')') {
                is_bad = false;
                break;
            }
            // EOF
            //     This is a parse error. Return the <url-token>.
            else if (_is_newline(next_character))  {
            	break;
			}
			// U+0022 QUOTATION MARK (")
			// U+0027 APOSTROPHE (')
			// U+0028 LEFT PARENTHESIS (()
			// non-printable code point
			//     This is a parse error. Consume the remnants of a bad url,
			//     create a <bad-url-token>, and return it.
			if(next_character === '(' || next_character === "'" ||
					next_character === '"' || _is_non_printable(next_character))  {
				break;
			}

            previous_character = next_character;
            next_character     = streamer.get_next_character();
        }

        const end_index = streamer.cursor.index + (!is_bad ? 1 : 0);

	    token.value  = 'url('+ streamer.string.substring(start.index, end_index);
        token.is_bad = is_bad;
		token.start  = start;
		token.end    = streamer.get_cursor();
	},
}



