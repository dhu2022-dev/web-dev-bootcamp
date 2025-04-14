import React from "react";
// import component from separate component file to use here
import Heading from "./Heading";
import Body from "./Body";

// In File React Component
// function Heading() {
//   return <h1>My Favourite Foods</h1>;
// }

function App(){
    return (
        <div>
            <Heading />
            <Body />
        </div>
    );
}

export default App;