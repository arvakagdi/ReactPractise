//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Arva";
const lName = "Kagdi";
const luckyNumber = 7;

// ReactDOM.render(
//   <div>
//     {/* <h1>To do list for {fName} {lName} </h1> */}
//     <h1 className='heading'> Hello {`${fName} ${lName}`}</h1>{" "}
//     {/* Using string literals for injecting js. Also known as string interpolation */}
//     <ul>
//       <li> code </li>
//       <li> apply </li>
//       <li> study </li>
//     </ul>
//     <p> My luckyNumber is {luckyNumber}.</p>
//   </div>,
//   document.getElementById("root")
// );

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
// const d = new Date();
// const currYear = d.getFullYear();

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable = "True" spellCheck = "false"> Created by {fName + " " + lName}.</h1>
//     <p> Copyright {currYear}.</p>
//   </div>,
//   document.getElementById("root")
// );
const randomImage = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading">{fName + " " + lName + "'s"} Random clicks!</h1>
    <div>
      <img className="food-img" alt="random" src={randomImage} />
    </div>
  </div>,
  document.getElementById("root")
);
