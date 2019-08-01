/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : comment.js
* Created at  : 2019-07-24
* Updated at  : 2019-07-26
* Author      : Boorch
* Description : https://drafts.csswg.org/css-syntax/#consume-token
    § 4.3.1. Consume a token

    Consume the next input code point.

    § 4.3.2. Consume comments

        If the next two input code point are U+002F SOLIDUS (/)
        followed by a U+002A ASTERISK (*), consume them and all
        following code points up to and including the first
        U+002A ASTERISK (*) followed by a U+002F SOLIDUS (/),
        or up to an EOF code point. Return to the start of
        this step.

        If the preceding paragraph ended by consuming
        an EOF code point, this is a parse error.

        Return nothing.
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

// If the char is "/" then potential tokens are:
// - COMMENT               "/* sample comment */"
// - BAD_COMMENT           "/* sample unclosed comment"
module.exports = {
	id       : "Comment",
    priority : 2,

    is : (current_character, streamer) => {
        if (current_character === '/') {
            return streamer.at(streamer.cursor.index + 1) === '*';
        }
        return false;
    },

    initialize : (token, current_character, streamer) => {
        const start = streamer.get_cursor();
    	streamer.get_next_character();

        let next_character = streamer.get_next_character(true), end_index;
        const start_index  = streamer.cursor.index;

        while (next_character) {
            if (next_character === '*' && streamer.at(streamer.cursor.index + 1) === '/') {
                end_index = streamer.cursor.index;
                streamer.get_next_character();
                break;
            }
            next_character = streamer.get_next_character();
        }

        token.value     = '';
        token.is_bad    = end_index === undefined;
        token.comment   = streamer.string.substring(start_index, end_index).trim();
        token.start     = start;
        token.end       = streamer.get_cursor();
    },
}