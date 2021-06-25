const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length)
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log([array1[i],array2[i]]);
      return false;
    }
  } return true;
};

const assertEqual = function(actual,expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// const ab = { a: "1", b: "2" };ß
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(ab,ba));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false