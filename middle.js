const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length){
    return false;
  };
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log([array1[i],array2[i]]);
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  let message = "";
  if (eqArrays(actual, expected)) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};

//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

let middle = function(array) {
  let output = [];
  if(array.length<=2){
    return [];
  } else if (array.length % 2 === 1) {
    output = [array[Math.floor(array.length / 2)]];
  } else {
    output = [array[Math.floor((array.length - 1) / 2)] , array[Math.floor(array.length / 2)]];
  } return output
};
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,5,6]));

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1,2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3,4]), [2,3]));