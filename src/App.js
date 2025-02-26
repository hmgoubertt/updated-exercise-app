import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import FlexibilityExercise from "./components/FlexibilityExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Bicycling", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Yoga Stretch", type: "flexibility" }, // Added flexibility exercise
  ];

  return (
    <div>
      <h1>Go Do Something!</h1>
      <h3>Select an exercise:</h3>
      {exercises.map((exercise) => (
        <button key={exercise.name} onClick={() => setSelectedExercise(exercise)}>
          {exercise.name}
        </button>
      ))}

      {selectedExercise && (
        <div>
          <h2>{selectedExercise.name}</h2>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : (
            <FlexibilityExercise name={selectedExercise.name} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
