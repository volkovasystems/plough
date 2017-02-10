"use strict";

const plough = require( "./plough.js" );

console.log( plough( [ 1, 2, 3, [ 4, 5, 6 ] ] ) );
console.log( plough( [ ] ) );
console.log( plough( ) );
