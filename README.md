# css3 tokenizer

CSS3 - https://drafts.csswg.org/css-syntax/

## how to use
``` js
const css3_tokenizer = require('../css3_tokenizer');
const source = `.my-class {
	color: rgba(34,35,234, 0.3);
}`;

css3_tokenizer.init(source);
while (true)  {
    let next_token = css3_tokenizer.get_next_token();
    if (next_token !== null) {
		console.log("===========================");
    	console.log(next_token.id);
    	console.log(next_token);
    	console.log('Priority '+ next_token.priority);
    }
    else break;
}
```
