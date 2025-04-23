import React from "react";

import Login from "./Login";

let isLoggedIn = false;
//const hour = new Date(2000, 12, 31, 1).getHours();
const hour = new Date().getHours();

// function renderLogin() {
//   if (isLoggedIn === true){
//     return <h1>Hello</h1>;
//   }
//   else {
//     return (
//       <Login />
//     );
//   }
// }

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* {hour > 5 ? <h1>Why are you still working?</h1> : null} */}
      {/* same as above */}
      {hour > 17 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
