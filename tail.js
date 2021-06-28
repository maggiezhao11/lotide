const assertEqual = require('./assertEqual');

let tail = function(array, expected) {
  if (array.length >= 2) {
    let empty = array.slice(1);
    for (let i = 0; i < empty.length; i++) {
      console.log(empty[i], expected[i]);
      if (empty[i] !== expected[i]) {
        return assertEqual(1, 2);
      }
    }
  }
  return assertEqual(1, 1);
};

//console.log(tail(words, ["Lighthouse", "Labs"]));
module.exports = tail;