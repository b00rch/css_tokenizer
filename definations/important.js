/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : match_token.js
* Created at  : 2019-07-24
* Updated at  : 2019-07-24
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

module.exports = {
	id       : "Important",
    priority : 21,

    is : (current_character, streamer) => {
    	if (current_character === '!') {
            const start_index = streamer.cursor.index + 1;
            return streamer.string.substring(start_index, start_index + 9) === 'important';
        }
        return false;
    },

    initialize : (token, current_character, streamer) => {
    	const start = streamer.get_cursor();
    	streamer.move_cursor(9);

        token.value = '!important';
        token.start = start;
        token.end   = streamer.get_cursor();
    },
}