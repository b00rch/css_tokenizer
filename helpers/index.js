/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2019-07-18
* Updated at  : 2019-07-26
* Author      : Boorch
* Purpose     : 
* Description : https://drafts.csswg.org/css-syntax-3/ 
	
	§ 4.2. Definitions 

	* character code definations

	| character - unicode - charcode - defination |

	spacing
		'\t' - 0x0009 - 09 - CHARACTER TABULATION
		'\n' - 0x000A - 10 - LINE FEED
		'\f' - 0x000C - 12 - FORM FEED
		'\r' - 0x000D - 13 - CARRIAGE RETURN
		' '  - 0x0020 - 32 - SPACE
	digit
		'0' - 0x0030 - 48 - DIGIT ZERO (0)
		'9' - 0x0039 - 57 - DIGIT NINE (9)
	letter
		'A' - 0x0041 - 65  - LATIN CAPITAL LETTER A
		'Z' - 0x005A - 90  - LATIN CAPITAL LETTER Z
		'a' - 0x0061 - 97  - LATIN SMALL LETTER a
		'z' - 0x007A - 122 - LATIN SMALL LETTER z
	special characters
		'{' - 0x007B - 123 - LEFT CURLY BRACKET ({)
		'|' - 0x007C - 124 - RIGHT CURLY BRACKET (})
		'}' - 0x007D - 125 - RIGHT CURLY BRACKET (})
		'~' - 0x007E - 126 - LAST ASCII
	non printable character
		''   - 0x0000 - 00 - NULL
		'\b' - 0x0008 - 08 - BACKSPACE
		' '  - 0x000B - 11 - LINE TABULATION
		' '  - 0x000E - 14 - SHIFT OUT
		'-'  - 0x002D - 45 - HYPHEN-MINUS
		'_'  - 0x005F - 95 - LOW LINE
		' '  - 0x001F - 31 - INFORMATION SEPARATOR ONE
		' '  - 0x007F - 79 - DELETE
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

/* digit
A code point between U+0030 and U+0039.
*/
function is_digit(character) {
    return character >= '0' && character <= '9';
}

/* hex digit
A digit, or a code point between U+0041 LATIN CAPITAL LETTER A (A) and U+0046 LATIN CAPITAL LETTER F (F),
or a code point between U+0061 LATIN SMALL LETTER A (a) and U+0066 LATIN SMALL LETTER F (f).
*/
function is_hex_digit(character) {
    return (
        is_digit(character) ||
        (character >= 'A' && character <= 'F') ||
        (character >= 'a' && character <= 'f')
    );
}

/* uppercase letter
A code point between U+0041 LATIN CAPITAL LETTER A (A) and U+005A LATIN CAPITAL LETTER Z (Z).
*/
function is_uppercase_letter(character) {
    return character >= 'A' && character <= 'Z';
}

/* lowercase letter
A code point between U+0061 LATIN SMALL LETTER A (a) and U+007A LATIN SMALL LETTER Z (z).
*/
function is_lowercase_letter(character) {
    return character >= 'a' && character <= 'z';
}

/* letter
An uppercase letter or a lowercase letter.
*/
function is_letter(character) {
    return is_uppercase_letter(character) || is_lowercase_letter(character);
}

/* non-ASCII code point
A code point with a value equal to or greater than U+0080 <control>.

TODO: U+0080 - 2 = U+007E (~)
	  A code point of non ascii character is greater than U+007E (~).
	  Ignore 0x007F (DELETE)
*/
function is_non_ascii(character) {
    return character > '~';
}

/* name-start code point
A letter, a non-ASCII code point, or U+005F LOW LINE (_).
*/
function is_name_start(character) {
    return is_letter(character) || is_non_ascii(character) || character === '_';
}

/* name code point
A name-start code point, a digit, or U+002D HYPHEN-MINUS (-).
*/
function is_name(character) {
    return is_name_start(character) || is_digit(character) || character === '-';
}

/* non-printable code point
A code point between U+0000 NULL and U+0008 BACKSPACE, or U+000B LINE TABULATION,
or a code point between U+000E SHIFT OUT and U+001F INFORMATION SEPARATOR ONE, or U+007F DELETE.
*/
function is_non_printable(character) {
	let code = character.charCodeAt(0);
    return (
        (code >= 0x0000 && code <= 0x0008) ||
        (code === 0x000B) ||
        (code >= 0x000E && code <= 0x001F) ||
        (code === 0x007F)
    );
}

/* newline
U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED are not included in this definition,
as they are converted to U+000A LINE FEED during preprocessing.
*/
function is_newline(character) {
    return character === '\n' || character === '\f' || character === '\r';
}

/* whitespace
A newline, U+0009 CHARACTER TABULATION, or U+0020 SPACE.

TODO: A whitespace code points are less than U+0020 SPACE
*/
function is_whitespace(character) {
    return character <= ' ';
}



// § 4.3.8. Check if two code points are a valid escape
function is_valid_escape(first_character, second_character) {
    // If the first code point is not U+005C REVERSE SOLIDUS (\), return false.
    if (first_character !== '\\') {
        return false;
    }

    // Otherwise, if the second code point is a newline or EOF, return false.
    if (second_character && is_newline(second_character)) {
        return false;
    }

    // Otherwise, return true.
    return true;
}

// § 4.3.9. Check if three code points would start an identifier
function is_identifier_start(first_character, second_character, third_character) {
    // Look at the first code point:

    // U+002D HYPHEN-MINUS
    if (first_character === '-') {
        // If the second code point is a name-start code point or a U+002D HYPHEN-MINUS,
        // or the second and third code points are a valid escape, return true. Otherwise, return false.
        return (
            is_name_start(second_character) ||
            second_character === '-' ||
            is_valid_escape(second_character, third_character)
        );
    }

    // name-start code point
    if (is_name_start(first_character)) {
        // Return true.
        return true;
    }

    // U+005C REVERSE SOLIDUS (\)
    if (first_character === '\\') {
        // If the first and second code points are a valid escape, return true. Otherwise, return false.
        return is_valid_escape(first_character, second_character);
    }

    // anything else
    // Return false.
    return false;
}

// § 4.3.10. Check if three code points would start a number
function is_number_start(first_character, second_character, third_character) {
    // Look at the first code point:

    // U+002B PLUS SIGN (+)
    // U+002D HYPHEN-MINUS (-)
    if (first_character === '+' || first_character === '-') {
        // If the second code point is a digit, return true.
        if (is_digit(second_character)) {
            return 2;
        }

        // Otherwise, if the second code point is a U+002E FULL STOP (.)
        // and the third code point is a digit, return true.
        // Otherwise, return false.
        return second_character === '.' && is_digit(third_character) ? 3 : 0;
    }

    // U+002E FULL STOP (.)
    if (first_character === '.') {
        // If the second code point is a digit, return true. Otherwise, return false.
        return is_digit(second_character) ? 2 : 0;
    }

    // digit
    if (is_digit(first_character)) {
        // Return true.
        return 1;
    }

    // anything else
    // Return false.
    return 0;
}


const helpers = {
	is_digit,
	is_hex_digit,
	is_uppercase_letter,
	is_lowercase_letter,
	is_letter,
	is_non_ascii,
	is_name_start,
	is_name,
	is_non_printable,
	is_newline,
	is_whitespace,
	is_valid_escape,
	is_identifier_start,
	is_number_start
}

module.exports = helpers;















