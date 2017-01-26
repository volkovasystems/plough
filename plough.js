"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "plough",
			"path": "plough/plough.js",
			"file": "plough.js",
			"module": "plough",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/plough.git",
			"test": "plough-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Flatten arrays
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"decrease": "decrease",
			"doubt": "doubt",
			"harden": "harden",
			"raze": "raze"
		}
	@end-include
*/

const arid = require( "arid" );
const decrease = require( "decrease" );
const doubt = require( "doubt" );
const harden = require( "harden" );
const raze = require( "raze" );

const plough = function plough( array ){
	/*;
		@meta-configuration:
			{
				"array:required": [
					"[*]",
					"..."
				]
			}
		@end-meta-configuration
	*/

	array = raze( arguments );

	if( arid( array ) ){
		array = doubt( this, ARRAY )? this : [ ];
	}

	if( doubt( this, ARRAY ) && array != this ){
		array = this.concat( array );
	}

	let list = decrease( array, function flatten( previous, current ){
		let element = doubt( current ).AS_ARRAY? plough.apply( null, current ) : current;

		return previous.concat( element );
	}, [ ] );

	harden( "plough", plough.bind( list ), list );

	return list;
};

module.exports = plough;
