
const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log([array1[i],array2[i]]);
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  let message = "";
  if (eqArrays(actual, expected) === true) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));