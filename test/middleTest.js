const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,5,6]));

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1,2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3,4]), [2,3]));