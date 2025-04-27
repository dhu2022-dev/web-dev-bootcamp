import React, { useState } from 'react';

function ToDoItem(props) {
    // code to manage incomponent state of strikeThrough (replaced w/ delete)
    // const [strikeThrough, setStrikeThrough] = useState(false);

    // function toggleStrikeThrough() {
    //     setStrikeThrough(prevValue => !prevValue);
    // }

    return (
        // <li style={{ textDecoration: strikeThrough ? "line-through" : "none" }} onClick={toggleStrikeThrough}>
        <li onClick = {() => {
            props.onChecked(props.id);
        }}>
            {props.item}
        </li>
    );
}

export default ToDoItem;