const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // console.log([array1[i],array2[i]]);
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

//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

const without = function(source, itemsToRemoved) {
  let wantedItems = [];
  if (eqArrays(source, itemsToRemoved) === true) {
    return [];
  } else {
    for (let i = 0; i < source.length; i++) {
      if (!itemsToRemoved.includes(source[i])) {
        wantedItems.push(source[i]);
      }
    }
    console.log(wantedItems);
  } return wantedItems;
};
console.log(without([1, 2, 3], [1]));


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));