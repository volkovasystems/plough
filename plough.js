"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"asea": "asea",
			"decrease": "decrease",
			"doubt": "doubt",
			"harden": "harden",
			"raze": "raze"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var asea = require( "asea" );
	var decrease = require( "decrease" );
	var doubt = require( "doubt" );
	var harden = require( "harden" );
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "asea" in window ) )
{
	throw new Error( "asea is not defined" );
}

if( asea.client &&
	!( "decrease" in window ) )
{
	throw new Error( "decrease is not defined" );
}

if( asea.client &&
	!( "doubt" in window ) )
{
	throw new Error( "doubt is not defined" );
}

if( asea.client &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( asea.client &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

var plough = function plough( array ){
	/*;
		@meta-configuration:
			{
				"array:required": "[*]",
			}
		@end-meta-configuration
	*/

	if( !doubt( array ).AS_ARRAY &&
		!doubt( this ).AS_ARRAY )
	{
		throw new Error( "invalid array" );
	}

	array = raze( array ) || [ ];

	if( doubt( this ).ARRAY ){
		array = this.concat( array );
	}

	var list = decrease( array, function flatten( previous, current ){
		var element = doubt( current ).ARRAY? plough( current ) : current;

		return previous.concat( element );
	}, [ ] );

	harden( "plough", plough.bind( list ), list );

	return list;
};

if( asea.server ){
	module.exports = plough;
}
