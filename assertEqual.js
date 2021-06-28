const assertEqual = function(actual,expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};

// TEST CODE
//console.log(assertEqual(1,1));

module.exports = assertEqual;