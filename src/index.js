import React from "react";
import ReactDOM from "react-dom";

const name = "Nazir";

const luckyNumber = Math.round(Math.random() * 100);

//{} make it regard as javascript
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>your lucky number is {luckyNumber} </p>
  </div>,
  document.getElementById("root")
);
