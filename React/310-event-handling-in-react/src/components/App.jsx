import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [bgColor, setBgColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setBgColor("black");
  }

  function handleMouseOut() {
    setBgColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{backgroundColor: bgColor}} 
        onClick={handleClick} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
      >
          Submit
      </button>
    </div>
  );
}

export default App;
