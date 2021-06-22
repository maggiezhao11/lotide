// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  }  
   else {
    message = `🔴🔴🔴Assertion Passed: ${actual} !== ${expected}`;
  } return message;

};

// TEST CODE
console.log(assertEqual(1,1));
