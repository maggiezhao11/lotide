const assertEqual = function(actual,expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};

const countOnly = function(allItems, itemsToCount) {
  const objectAfter = {};
  for (let i of allItems) {
    //console.log(Object.keys(itemsToCount));
    if (Object.keys(itemsToCount).includes(i) && itemsToCount[i]) {
      if (objectAfter[i]) {
        objectAfter[i] += 1;
      } else {
        objectAfter[i] = 1;
      }
    }

  } return objectAfter;
  
};

const itemsToCount = {
  a: true,
  d: true,
  b: false,
  f: true,
};

let array = ['a', 'a','b','c','d','e','a'];

console.log(countOnly(array,itemsToCount));

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));