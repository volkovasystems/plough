"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "plough",
			"path": "plough/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/plough.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"plough": "plough"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const plough = require( "./plough.js" );
//: @end-server






//: @server:

describe( "plough", ( ) => {

	describe( "`plough( )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( plough( ), [ ] );
		} );
	} );

	describe( "`plough( [ ] )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( plough( ), [ ] );
		} );
	} );

	describe( "`plough( [ 1, 2, 3, [ 4, 5, 6 ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {
			assert.deepEqual( plough( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ] );
		} );
	} );

	describe( "`plough( { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to [ { 0: 'hello', 1: 'world' } ]", ( ) => {
			assert.deepEqual( plough( { 0: "hello", 1: "world" } ), [ { 0: "hello", 1: "world" } ] );
		} );
	} );

	describe( "`plough( 'hello' )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {
			assert.deepEqual( plough( "hello" ), [ "hello" ] );
		} );
	} );

} );

//: @end-server



