import React from "react";
import ReactDOM from "react-dom";

const img = "https://preview.redd.it/3d-laughing-emote-heheha-v0-1hdyl8m7ze0d1.png?width=640&crop=smart&auto=webp&s=c26d39494f4dcf26ee3943abf36c2f42431fa4b0";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favouriadslfja;sdlfkajte Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon" />
      <img className="food-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jam%C3%B3n_de_Guijuelo_004_%28cropped%29_4.3.JPG/1200px-Jam%C3%B3n_de_Guijuelo_004_%28cropped%29_4.3.JPG" alt="Jamon (Iberian Ham)" />
      <img className="food-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s" alt="" />
    </div>
    <img src={img} alt="clash royale king laughing emote"/>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
