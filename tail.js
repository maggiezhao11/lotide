const assertEqual = require('./assertEqual');

let tail = function(array) {

    let empty = array.slice(1);
    
  return empty;
};

//console.log(tail(words, ["Lighthouse", "Labs"]));
module.exports = tail;