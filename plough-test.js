
const assert = require( "assert" );
const plough = require( "./plough.js" );

assert.deepEqual( plough( ), [ ], "should be empty array" );

assert.deepEqual( plough( [ ] ), [ ], "should be empty array" );

assert.deepEqual( plough( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ], "should be equal" );

( function ( ){
	assert.deepEqual( plough( arguments ), [ ], "should be empty array" );
} )( );

( function ( ){
	assert.deepEqual( plough( arguments ), [ "hello", "world", 1, 2, 3, "yeah", 4, 5, 6 ], "should be equal" );
} )( [ "hello", [ "world" ], 1, 2, 3 ], [ "yeah", 4, 5, 6 ] );

console.log( "ok" );
