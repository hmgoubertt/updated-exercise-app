import React, { useState } from "react";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  React.useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h3>{name}</h3>
      <p>Time: {time} seconds</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"} Timer
      </button>
    </div>
  );
}

export default DurationExercise;
