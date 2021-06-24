const assertEqual = function(actual,expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  } return message;

};



const findKey = function(object1, callback) {
  console.log('object1:', object1);
  for (const key in object1) {
    console.log('key:', key);
    console.log('object1key:', object1[key]);
    if (callback(object1[key])) {
      return key;
    }
  } return undefined;
};
  
 

// const callback = function (val) {
//   console.log('val:',val);
//    if(val.stars === 2){
//      return true;
//   } else {
//      return false;
//    }
// };

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma")); // => "noma"

//console.log(assertEqual(findKey()),"noma");
