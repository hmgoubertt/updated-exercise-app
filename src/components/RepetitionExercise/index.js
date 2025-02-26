import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{name}</h3>
      <p>Reps: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Reps</button>
    </div>
  );
}

export default RepetitionExercise;
