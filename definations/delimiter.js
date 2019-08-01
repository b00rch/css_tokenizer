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
	id       : "Delim",
    priority : 0,

    is : () => true,
    initialize : (token, current_character, streamer) => {
        token.value = current_character;
        token.start = token.end = streamer.get_cursor();
    },
}