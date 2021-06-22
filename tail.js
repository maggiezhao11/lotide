const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};




const words = ["yo yo", "Lighthouse", "Labs"];

let tail = function(array, expected) {
  let empty = array.slice(1);

  for (let i = 0; i < empty.length; i++) {
    console.log(empty[i], expected[i])
    if (empty[i] !== expected[i]) {
      return assertEqual(1, 2)
    }
  }
  return assertEqual(1, 1)
};

console.log(tail(words, ["Lighthouse", "Labs"]))