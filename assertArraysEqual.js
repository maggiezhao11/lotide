const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let message = "";
  if (eqArrays(actual, expected) === true) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};

//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
module.exports = assertArraysEqual;