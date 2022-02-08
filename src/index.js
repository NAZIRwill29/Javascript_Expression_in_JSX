import React from "react";
import ReactDOM from "react-dom";

const fname = "Mohamad";
const lname = "Nazir";

const luckyNumber = Math.round(Math.random() * 100);

//{} make it regard as javascript
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>your lucky number is {3 + 4} </p>
    <p>your lucky number is {luckyNumber} </p>
  </div>,
  document.getElementById("root")
);
