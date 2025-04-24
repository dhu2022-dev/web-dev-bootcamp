import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleInput(event){
    setInputValue(event.target.value);
  }

  function handleSubmit(){
    setName(inputValue);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" placeholder="What's your name?" value={inputValue} onChange={handleInput}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// OR (with form and shared event)

function App1(){
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleInput(event){
    setInputValue(event.target.value);
  }

  function handleSubmit(event){
    setName(inputValue);
    event.preventDefault(); // prevents default behavior of page refresh after form submit
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What's your name?" value={inputValue} onChange={handleInput}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App1;
