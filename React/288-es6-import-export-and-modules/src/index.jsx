import React from "react";
import ReactDOM from "react-dom";

import pi, {doublePi, triplePi} from "./math.js";
// OR
import * as math from "./math.js";

ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
    <ul>
      <li>{math.default}</li>
      <li>{math.doublePi()}</li>
      <li>{math.triplePi()}</li>
    </ul>
  </div>
  ,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
