import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;