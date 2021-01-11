//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Arva";
const lName = "Kagdi";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    {/* <h1>To do list for {fName} {lName} </h1> */}
    <h1> Hello {`${fName} ${lName}`}</h1>{" "}
    {/* Using string literals for injecting js. Also known as string interpolation */}
    <ul>
      <li> code </li>
      <li> apply </li>
      <li> study </li>
    </ul>
    <p> My luckyNumber is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);
