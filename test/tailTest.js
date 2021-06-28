
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// const words = ["yo yo", "Lighthouse", "Labs"];
// console.log(tail(words, ["Lighthouse", "Labs"]));

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});
