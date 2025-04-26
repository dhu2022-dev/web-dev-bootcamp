import React, { useState } from "react";

import TodoList from "./TodoList";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  
  function handleInputChange(event){
    const value = event.target.value;
    setNewItem(value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="input" onChange={handleInputChange} value={newItem}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <TodoList items={items} />
        {/* OR */}
        
        {/* <ul> 
          {items.map(todoItem => <li>{todoItem}</li>)}
        </ul> */}
       
      </div>
    </div>
  );
}

export default App;
