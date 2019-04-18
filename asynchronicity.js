/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');

console.log('I am at the beginning of the code.');

setTimeout(printCallback, 0);

console.log('I am at the end of of the code.');

function printCallback() {
  console.log('I am in the setTimeout callback function.');
}




console.log('End of Challenge 1');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

function printCallback() {
  console.log('Interval Hello!');
}

// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}

const intervalID = setInterval(printCallback, 2000);

setTimeout(clearInterval, 10000, intervalID);

console.log('End of Challenge 2');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

function sayHowdy() {
  console.log('Howdy');
}

function everyXsecsForYsecs(callback, intervalTime, totalTime) {
  const intervalMS = intervalTime * 1000;
  const totalMS = totalTime * 1000;
  
  const intervalID = setInterval(callback, intervalMS);
  
  setTimeout(clearInterval, totalMS, intervalID);
}

console.log('End of Challenge 3');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below


function forEach(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}


const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {

  setTimeout(console.log, delayTime, 'Printing element ' + i);
}

forEach(delays, delayLog);

console.log('End of Challenge 4');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

function changeColor() {
  const blue = 'rgb(221, 238, 255)';
  const orange = 'rgb(255, 238, 221)';
  document.body.style.background = (document.body.style.background === orange) ? blue : orange;
}

function handleColorButtonClick() {
  console.log('clicked #2');
  changeColor();
}

function activateColorButton() {
  console.log('clicked #1');
  document.getElementById('color').addEventListener('click', handleColorButtonClick);
}

document.getElementById('activate').addEventListener('click', activateColorButton);

// ...your code above
console.log('End of Challenge 3');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback, 0, database[id]);
}

function storeData(data) {
  dataReceived = data;
  console.log(dataReceived);
}

ajaxSimulate(1, storeData);
console.log(dataReceived);

console.log('End of Challenge 6');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
let api = 'rest.bandsintown.com/artists/daft%20punk?app_id=jshs'

fetch(api)
.then(res => res.json())
.then(json => console.log(json));


console.log('End of Challenge 7');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below






console.log('End of Challenge 8');
// */ // (do not alter this line)

/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below







console.log('End of Challenge 9');
// */ // (do not alter this line)
