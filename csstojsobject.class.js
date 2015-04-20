/*!
  * CSStoJSObjectParser - v1.0.1
  * https://github.com/peterprins/csstojsobjectparser
  *
  * Copyright 2015 Peter Prins
  * Released under the MIT license
  * http://mit-license.org/
  *
  * Date: 2015-04-19
  */

function CSStoJSObjectParser(css_str){

	// Description:
	// A Javascript Class to Parse a CSS Styles String into a Javascript Object
	
	// Example Code:
	// var css_str = "\n \t /* this is a test */   #nav.ul, \t #stuff li, .cool #div.mystuff { background: url(\"myfile.jpg\") no-repeat; text-align: center; } \t \n    container, #div.contents, ul.li { background: url(\"myfile.jpg\") no-repeat; }";
	// var test = new CSStoJSObjectParser(css_str);
	// console.log("input:\n", test.input);
	// console.log("output:\n", test.output);
	// console.log("jsobject:\n", test.jsobject);

	// initialize data
	// this.input = css_str;
	// this.output = css_str;

	// check if css_str is a string
	if(typeof css_str !== 'string'){
		return false;
	}

	try{
    
	    // strip comments
	    this.output = this.output.replace(/\/\*(.*?)\*\//g, '');
	    
	    // double to single quotes
	    this.output = this.output.replace(/\"/g, '\'');
	    
	    // clean up white space
	    this.output = this.output.replace(/\s+/g, ' ');

	    // css props to object props
	    this.output = this.output.replace(/([\w-.]+)\s*:\s*([^;]+);?\s*/g, '"$1": "$2",');

	    // add comma to ending curly brackets
	    this.output = this.output.replace(/}/g, '},');

	    // add object curly brackets
	    this.output = "{\n" + this.output + "\n}";

	    // css selectors to object
	    this.output = this.output.replace(/{\s*(.*?)\s*{/g, '{ "$1": {');
	    this.output = this.output.replace(/},\s*(.*?)\s*{/g, '}, "$1": {');
	    
	    // remove last trailing comma(s)
	    this.output = this.output.replace(/,\s*}/g, ' }');

	    // we have an object
	    this.jsobject = JSON.parse(this.output);
	  
	}catch(err_str){
    
    // we don't have an object
    this.jsobject = false;
    
  }

	// return results
	return this.input + this.output + this.jsobject;

}