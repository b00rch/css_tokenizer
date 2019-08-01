/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : char.js
* Created at  : 2019-07-18
* Updated at  : 2019-07-18
* Author      : Boorch
* Purpose     : 
* Description : 
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

module.exports = {
	id       : "CDC",
    priority : 10,

	is : (current_character, streamer) => {
		if (current_character === '-')  {
			const cdc = streamer.string.substring(streamer.cursor.index, streamer.cursor.index + 3);
			return	cdc === '-->';
		}
		return false;
	},

    initialize : (token, current_character, streamer) => {
        token.start = streamer.get_cursor();
        streamer.move_cursor(2);
        token.end   = streamer.get_cursor();
        token.value = streamer.substring_from_token(token);
    },
}