import React, { useState } from "react";

function App() {
  {/* dynamic time every second */}
  setInterval(getTime, 1000);
  // also apparently you have to put setCurrentTime in its own function for 
  // setInterval to actually run the setCurrentTime every 1000 milliseconds
  // otherwise setInterval will just run the output of setCurrentTime (undefined)
  
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  function getTime(){
    {/* static time on button click */}
    setCurrentTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
