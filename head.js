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



const head = function(array) {
  let firstElement = "";
  if (array.length >= 1) {
    firstElement = array[0];
  } else {
    firstElement = undefined;
  } return firstElement;

};

// TEST CODE
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
