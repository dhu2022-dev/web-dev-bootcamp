import React from "react";
import ReactDOM from "react-dom";

const firstName = "David";
const lastName = "Hu";
const luckyNumber = 8;

ReactDOM.render(
    <div>
        <h1>Hello {firstName + " " + lastName}!</h1>
        <h2>Your lucky number is {luckyNumber}</h2>
    </div>,
    document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
