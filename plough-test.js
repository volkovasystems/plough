"use strict";

const plough = require( "./plough.js" );

console.log( plough( [ 1, 2, 3, [ 4, 5, 6 ] ] ) );
console.log( plough( [ ] ) );
console.log( plough( ) );


( function ( ){
	console.log( plough( arguments ) );
} )( ["hello", ["world"],1,2,3], ["yeah",4,5,6] );


( function ( ){
	console.log( plough( arguments ) );
} )( );
