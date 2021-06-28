const assertEqual = require('./assertEqual');

const head = function(array) {
  let firstElement = "";
  if (array.length >= 1) {
    firstElement = array[0];
  } else {
    firstElement = undefined;
  } return firstElement;

};

module.exports = head;

// TEST CODE
//console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
