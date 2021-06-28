let middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    output = [array[Math.floor(array.length / 2)]];
  } else {
    output = [array[Math.floor((array.length - 1) / 2)] , array[Math.floor(array.length / 2)]];
  } return output;
};

module.exports = middle;
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1,2,3]));
// console.log(middle([1,2,3,4]));
// console.log(middle([1,2,3,5,6]));

// console.log(assertArraysEqual(middle([1]), []));
// console.log(assertArraysEqual(middle([1,2]), []));
// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
// console.log(assertArraysEqual(middle([1, 2, 3,4]), [2,3]));