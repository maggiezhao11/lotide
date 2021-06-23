const assertEqual = function(actual,expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};


const countLetters = function(itemToCount) {
  const objectAfter = {};
  for (let i of itemToCount) {
    if (i !== ' ') {
      if (objectAfter[i]) {
        objectAfter[i] += 1;
      } else {
        objectAfter[i] = 1;
      }
    }
  }

  return objectAfter;
  
};
console.log(countLetters("lighthouse in the house"));


