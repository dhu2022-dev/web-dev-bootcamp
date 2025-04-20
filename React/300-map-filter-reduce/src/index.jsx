var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function plusFive(number){
    return number + 5;
}
const newNumbers = numbers.map(plusFive);
console.log(newNumbers); // [8, 61, 7, 53, 10]

//Filter - Create a new array by keeping the items that return true.
function isOdd(number){
    return number % 2 !== 0;
}
const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers); // [3, 5]

//Reduce - Accumulate a value by doing something to each item in an array.
function add(accumulator, currentNumber){
    return accumulator + currentNumber;
}
const total = numbers.reduce(add);
console.log(total);

//Find - find the first item that matches from an array.
function isGreaterThan10(number){
    return number > 10;
}
const greaterThan10 = numbers.find(isGreaterThan10);
console.log(greaterThan10); // 56


//FindIndex - find the index of the first item that matches.
const greaterThan10Index = numbers.findIndex(isGreaterThan10);
console.log(greaterThan10Index); // 1


//Challenge
import emojipedia from "./emojipedia";

function cap100Chars(entry){
    let meaning = entry.meaning;
    return meaning.substring(0, 100);
}

const cappedArray = emojipedia.map(cap100Chars);
console.log(cappedArray);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
