const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;

//console.log(assertEqual(eqArrays([1, 2, 3], [2, 3, 3]), true)); // => should PASS