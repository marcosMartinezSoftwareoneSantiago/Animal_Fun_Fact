import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = (
  <img className="background" src="/images/ocean.jpg" alt="ocean" />
);
const showBackground = false;
const useSentence = true;
const sentence = <p>Under the sea</p>;

const images = [];
for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      src={animals[animal].image}
      alt={animal}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const animalSelected = e.target.alt;
  const factsArray = animals[animalSelected].facts;
  const factIndex = Math.floor(Math.random() * factsArray.length);
  const fact = factsArray[factIndex];
  document.getElementById("fact").innerHTML = fact;
}

const animalFacts = (
  <div>
    {showBackground && background}
    <div className="animals">{images}</div>
    <h1>{!title ? "Click an animal for a fun fact" : title}</h1>
    <p id="fact"></p>
    {useSentence || sentence}
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
;