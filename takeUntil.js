const takeUntil = function(array1, callback) {
  const newArray1 = [];
  for (let arr of array1) {
    if (callback(arr)) {
      newArray1.push(arr);
    } else {
      return newArray1;
    }
  }
};

const callback = function(val) {
  
  if (val > 0) {
    return true;
  }
};

const callback1 = function(val) {
  
  if (val !== ",") {
    return true;
  }
};

//const callback1 = (val, val2) => val === ","


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, callback);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, callback1);
console.log(results2);
