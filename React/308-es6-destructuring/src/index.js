// to run this locally I used npm install and npm start since vanilla JS
// notes

import animals, { useAnimals } from "./data.js";

const [cat, dog] = animals;
console.log(cat);
console.log(dog);

const {name , sound} = cat; // variables must match the property names
console.log(name);
console.log(sound);

// for variable names to differ from property names
const {name: catName, sound: catSound} = cat;
console.log(catName);
console.log(catSound);

// destructuring nested objects
const {name2, sound2, feedingRequirements: {food, water}} = cat;
console.log(food);

// destructuring arrays from function
console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

// import data
import cars from "./practice.js";

// extract object
const [honda, tesla] = cars;

// extract array from object and rename
const {coloursByPopularity: hondaColours} = honda;
const {coloursByPopularity: teslaColours} = tesla;
const hondaTopColour = hondaColours[0];
const teslaTopColour = teslaColours[0];

// destructure nested object of topSpeed and rename
const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
