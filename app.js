import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const images = [];
const showBackground = false;
//camelCase in JavaScript
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const optionIndex = Math.floor(
    Math.random() * animals[selectedAnimal].facts.length
  );
  const animalFact = animals[selectedAnimal].facts[optionIndex];
  document.getElementById("fact").innerHTML = animalFact;
}
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

//className is how JavaScript refers to a class
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

//without div label it doesn't work
ReactDOM.render(animalFacts, document.getElementById("root"));