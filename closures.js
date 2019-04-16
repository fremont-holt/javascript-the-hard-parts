// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

function createFunction() {
  function printHello() {
    console.log('hello');
  }
  return printHello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();

function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  function sum(num) {
    return num + x;
  }
  return sum;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1));

// now call addByTwo with an input of 2
// console.log(addByTwo(2));

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let result;
  function passed(i) {
    if (!result) {
      result = func(i);
    }
    return result;
  }
  return passed;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

function after(count, func) {
  let timesCalled = 0;
  function callPassed() {
    timesCalled++;
    if (timesCalled >= count) {
      return func();
    }
  }
  return callPassed;
}

var called = function() {
  console.log('hello');
};
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

function delay(func, wait) {
  let [, , ...args] = [...arguments];
  function callDelayed() {
    setTimeout(() => {
      func(...args);
    }, wait);
  }
  return callDelayed;
}
function printThis(i) {
  console.log(i);
}

let delayOneSec = delay(printThis, 1000, 'hello world!!', 'cool');
delayOneSec();
