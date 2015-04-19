# CSStoJSObjectParser
A Javascript Class to Parse a CSS Style String into a Javascript Object

You could dynamically load a css file with ajax and then parse it with this class into a javascript object.

Example Code:

var css_str = "\n \t /* this is a test */   #nav.ul, \t #stuff li, .cool #div.mystuff { background: url(\"myfile.jpg\") no-repeat; text-align: center; } \t \n    container, #div.contents, ul.li { background: url(\"myfile.jpg\") no-repeat; }";

var test = new CSStoJSObjectParser(css_str);

console.log("input:\n", test.input);
console.log("output:\n", test.output);
console.log("jsobject:\n", test.jsobject);