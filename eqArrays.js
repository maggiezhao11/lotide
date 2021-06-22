const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};

const eqArrays = function (array1, array2) {
  for ( let i = 0; i < array1.length; i++) {
      
    if (array1[i]!== array2[i]) {
      console.log([array1[i],array2[i]]);
        return false;      
    }
  } return true;
};


console.log(assertEqual(eqArrays([1, 2, 3], [2, 3, 3]), true)); // => should PASS