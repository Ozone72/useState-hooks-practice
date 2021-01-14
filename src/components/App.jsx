import React, { useState } from "react";

function App() {
  // calls updateTime ever second.
  setInterval(updateTime, 1000);

  // sets initial value for useState hook
  const now = new Date().toLocaleTimeString("en-US", { hour12: false });

  // destructured array, where time is the value, and setTime is what acts on initial time value.  Initial state is set to current time
  const [time, setTime] = useState(now);

  // the updateTime function is tied to the onClick button event below
  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    // setTime updates the value of time each time updateTime is called.
    setTime(newTime);
  }

  return (
    <div className="container">
      {/* time is updated in the h1*/}
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
