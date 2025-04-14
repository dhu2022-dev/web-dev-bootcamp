// separate file for React component (good practice; see airbnb React style guide)
import React from "react";

function Heading(){
    return <h1>My Favorite Foods</h1>
}

// use ESX export so the main file knows about this component
export default Heading;