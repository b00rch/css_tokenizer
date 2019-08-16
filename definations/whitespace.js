/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : white_space.js
* Created at  : 2019-07-24
* Updated at  : 2019-07-26
* Author      : Boorch
* Description : https://drafts.csswg.org/css-syntax/#consume-token
    § 4.3.1. Consume a token

    whitespace
    Consume as much whitespace as possible. Return a <whitespace-token>.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const _is_whitespace = require("../helpers").is_whitespace;

module.exports = {
	id       : "WhiteSpace",
    priority : 1,
    is : _is_whitespace,
    initialize : (token, current_character, streamer) => {
    	const start = streamer.get_cursor();

    	let space_characters = current_character,
    		current_index    = start.index;

        while (_is_whitespace(streamer.at(++current_index))) {
            space_characters += streamer.get_next_character();
        }

        token.value = space_characters;
        token.start = start;
        token.end   = streamer.get_cursor();
    },
}