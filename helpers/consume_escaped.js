/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : consume_escape.js
* Created at  : 2019-07-26
* Updated at  : 2019-07-26
* Author      : Boorch
* Purpose     : 
* Description : https://drafts.csswg.org/css-syntax/#consume-escaped-code-point

	§ 4.3.7. Consume an escaped code point

	It assumes that the U+005C REVERSE SOLIDUS (\) has already been consumed and
	that the next input code point has already been verified to be part of
	a valid escape. It will return a code point.
	
	Consume the next input code point.

	hex digit
		Consume as many hex digits as possible, but no more than 5.
		Note that this means 1-6 hex digits have been consumed in total.
		If the next input code point is whitespace, consume it as well.
		Interpret the hex digits as a hexadecimal number.
		If this number is zero, or is for a surrogate, or is greater than
		the maximum allowed code point, return U+FFFD REPLACEMENT CHARACTER (�).
		Otherwise, return the code point with thanat value.
	EOF
		This is a parse error. Return U+FFFD REPLACEMENT CHARACTER (�).
	anything else
		Return the current input code point.

    
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const helpers        = require("./index"),
	  _is_hex_digit  = helpers.is_hex_digit,
	  _is_whitespace = helpers.is_whitespace;

module.exports = function (streamer, current_index, length) {
	let start_length   = length++, // TODO: skip first character
    	max_length     = length + 5,
		next_character = streamer.at(current_index + length);

    // hex digit
    while (next_character) {
        // Consume as many hex digits as possible, but no more than 5.
        // Note that this means 1-6 hex digits have been consumed in total.
        if (length < max_length && _is_hex_digit(next_character)) {
            next_character = streamer.at(current_index + (++length));
            continue;
        }
        break;
    }

	// If the next input code point is whitespace, consume it as well.
    if (_is_whitespace(next_character))  {

    	if(start_length + 1 < length)  {
    		length++; //getNewlineLength(source, offset, code);
    	}
    	else if (_is_hex_digit(streamer.at(current_index + start_length)))  {
    		length++;
    	}
    } 
    return length;
}













