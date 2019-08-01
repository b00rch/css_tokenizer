/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : consume_number.js
* Created at  : 2019-07-26
* Updated at  : 2019-07-26
* Author      : Boorch
* Purpose     : 
* Description : https://drafts.csswg.org/css-syntax/#consume-number

	§ 4.3.12. Consume a number

	It returns a numeric value, and a type which is either "integer"
    or "number".

    This algorithm does not do the verification of the first few
    code points that are necessary to ensure a number can be obtained
    from the stream. Ensure that the stream starts with a number
    before calling this algorithm.

_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const helpers   = require("./index"),
      _is_digit = helpers.is_digit;

module.exports = function (streamer, current_index, length) {
	length = length || 0;
    // 1. Initially set type to "integer". Let repr be the empty string.
    let next_character = streamer.at(current_index + length),
        type           = 'integer',
        is_dot_appear  = false,
        is_e_appear    = false;

    // 2. If the next input code point is U+002B PLUS SIGN (+) or
    //    U+002D HYPHEN-MINUS (-), consume it and append it to repr.
    if (next_character === '+' || next_character === '-')  {
        next_character = streamer.at(current_index + (++length));
    }

    while (next_character) {
        // 3. While the next input code point is a digit, 
        if (_is_digit(next_character)) {
            // consume it and append it to repr.
            next_character = streamer.at(current_index + (++length));
            continue;
        }
        // 4. If the next 2 input code points are U+002E FULL STOP (.)
        //    followed by a digit, then:
        else if (!is_dot_appear && !is_e_appear && next_character === '.' &&
                 _is_digit(streamer.at(current_index + length + 1)))  {
            length += 2;
            type           = 'number';
            is_dot_appear  = true;
            next_character = streamer.at(current_index + length);
            continue;
        }
        // 4. If the next 2 or 3 input code points are 
        //    U+0045 LATIN CAPITAL LETTER E (E) or U+0065 LATIN SMALL LETTER E (e),
        //    optionally followed by U+002D HYPHEN-MINUS (-) or U+002B PLUS SIGN (+), 
        //    followed by a digit, then:
        else if (!is_e_appear &&
                 (next_character === 'e' || next_character === 'E'))  {

            next_character = streamer.at(current_index + length + 1);
            
            if (!_is_digit(next_character))  {
                if (next_character === '+' || next_character === '-')  {
                    if (_is_digit(streamer.at(current_index + length + 2))) {
                        length += 3;
                    }
                    else break;
                }
                else break;
            }
            else length += 2;

            type           = 'number';
            is_e_appear    = true;
            next_character = streamer.at(current_index + length);
        	continue;
        }
        // anything else
        // Reconsume the current input code point. Return result.
        break;
    }
    // Return value and type.
    return length;
}











