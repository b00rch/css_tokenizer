/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : match_token.js
* Created at  : 2019-07-24
* Updated at  : 2019-07-24
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

const matchers = {
	'|' : 'DASHMATCH',
	'~' : 'INCLUDES',
	'^' : 'PREFIXMATCH',
	'$' : 'SUFFIXMATCH',
	'*' : 'SUBSTRINGMATCH'
};

module.exports = {
	id       : "Match",
    priority : 20,

    is : (current_character, streamer) => {
    	if (matchers[current_character]) {
            return streamer.at(streamer.cursor.index + 1) === '=';
        }
        return false;
    },

    initialize : (token, current_character, streamer) => {
    	const start = streamer.get_cursor();
    	streamer.get_next_character();

        token.value = current_character + '=';
        token.type  = matchers[current_character];
        token.start = start;
        token.end   = streamer.get_cursor();
    },
}