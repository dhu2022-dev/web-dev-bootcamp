import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const mapNumbers = numbers.map(function (x) {
  return x * 2;
});

const mapNumbers2 = numbers.map(x => x * 2);

console.log(mapNumbers);
console.log(mapNumbers2);

//////Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function(num) {
  return num < 10;
});

const filterNumbers2 = numbers.filter(num => num < 10);

console.log(filterNumbers);
console.log(filterNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
var reduceNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})

var reduceNumber2 = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

console.log(reduceNumber);
console.log(reduceNumber2);

////Find - find the first item that matches from an array.
const findNumber = numbers.find(function (num) {
  return num > 10;
})

const findNumber2 = numbers.find(num => num > 10);

console.log(findNumber);
console.log(findNumber2);

////FindIndex - find the index of the first item that matches.
const findIndexNumber = numbers.findIndex(function (num) {
  return num > 10;
})

const findIndexNumber2 = numbers.findIndex(num => num > 10);

console.log(findIndexNumber);
console.log(findIndexNumber2);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
