/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : consume_name.js
* Created at  : 2019-07-26
* Updated at  : 2019-07-26
* Author      : Boorch
* Purpose     : 
* Description : https://drafts.csswg.org/css-syntax/#consume-name

	§ 4.3.11. Consume a name

    It returns a string containing the largest name that can be formed from
    adjacent code points in the stream, starting from the first.

    Note: This algorithm does not do the verification of the first few
    code points that are necessary to ensure the returned code points
    would constitute an <ident-token>. If that is the intended use,
    ensure that the stream starts with an identifier before calling
    this algorithm.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const helpers         = require("./index"),
	  consume_escaped = require("./consume_escaped");

const _is_name         = helpers.is_name,
	  _is_valid_escape = helpers.is_valid_escape;

module.exports = function (streamer, current_index, length) {
	length = length || 0;
    // Let result initially be an empty string.
    // Repeatedly consume the next input code point from the stream:
    let next_character = streamer.at(current_index + length);

    while (next_character) {
        // name code point
        if (_is_name(next_character)) {
            // Append the code point to result.
            length++;
            next_character = streamer.at(current_index + length);
            continue;
        } 
        // the stream starts with a valid escape
        else if (_is_valid_escape(next_character, streamer.at(current_index + length + 1)))  {
            // Consume an escaped code point. Append the returned code point to result.
            length = consume_escaped(streamer, current_index, length + 1);
            next_character = streamer.at(current_index + length);
        	continue;
        }
        // anything else
        // Reconsume the current input code point. Return result.
        break;
    }

    return length;
}
