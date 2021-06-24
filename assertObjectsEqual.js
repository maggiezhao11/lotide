const eqArrays = function(array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log([array1[i],array2[i]]);
      return false;
    }
  } return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } for (let item1 of Object.keys(object1)) {
    if (Array.isArray(Object.keys(object1)) && Array.isArray(Object.keys(object2))) {
      if (eqArrays(Object.keys(object1), Object.keys(object2))) {
        return false;
      }
    } if (Array.isArray(object1[item1]) && Array.isArray(object2[item1])) {
      if (eqArrays(object1[item1],object2[item1])) {
        return false;
      }
    } else if (object1[item1] !== object2[item1]) {
      return false;
    }
    return true;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = "";
  if (eqObjects(actual, expected) === true) {
    message = `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    const inspect = require('util').inspect;
    console.log(`Example label: ${inspect(actual)}`);
    message = `🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } return message;

};
const ab = { a: "1", b: 2 };
const ba = { b: 2, a: "1" };
console.log(assertObjectsEqual(ab,ba));

