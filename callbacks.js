// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const newArray = [];
  for (let el of array) {
    newArray.push(callback(el));
  }
  return newArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let el of array) {
    callback(el);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const newArray = [];
  forEach(array, function(el) {
    newArray.push(callback(el));
  });
  return newArray;
}

// console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let el of array) {
    acc = callback(acc, el);
  }
  return acc;
}

// var nums = [4, 1, 3];
// var add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8

//Extension 3
function intersection(arrays) {
  let newArray = [];
  const [firstArray, ...otherArrays] = arguments;

  forEach(firstArray, function(el) {
    if (
      reduce(
        otherArrays,
        function(acc, array) {
          return acc ? array.includes(el) : false;
        },
        true
      )
    ) {
      newArray.push(el);
    }
  });

  return newArray;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  let newArray = reduce(
    arguments,
    function(acc, array) {
      forEach(array, function(el) {
        if (!acc.includes(el)) {
          acc.push(el);
        }
      });
      return acc;
    },
    []
  );
  return newArray;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const finalObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      finalObj[array1[i]] = array2[i];
    }
  }
  return finalObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const finalObj = {};
  forEach(arrVals, function(el) {
    finalObj[el] = reduce(
      arrCallbacks,
      function(acc, callback) {
        acc.push(callback(el));
        return acc;
      },
      []
    );
  });
  return finalObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
