"use strict";

const assert = require( "assert" );
const plough = require( "./plough.js" );

assert.ok( plough( [ 1, 2, 3, [ 4, 5, 6 ] ] ) );
assert.ok( plough( [ ] ) );
assert.ok( plough( ) );


( function ( ){
	assert.ok( plough( arguments ) );
} )( ["hello", ["world"],1,2,3], ["yeah",4,5,6] );


( function ( ){
	assert.ok( plough( arguments ) );
} )( );

console.log( "ok" );
