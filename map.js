const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};
const results1 = map(words, word => word[0]);
console.log(results1);


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

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't']));