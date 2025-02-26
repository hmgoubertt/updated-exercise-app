import React, { useState } from "react";

function FlexibilityExercise() {
    const [stretches, setStretches] = useState([]);

    const addStretch = () => {
        setStretches([...stretches, `Stretch #${stretches.length + 1}`]);
    };

    return (
        <div>
            <h2>Flexibility Exercise</h2>
            <button onClick={addStretch}>Add Stretch</button>
            <ul>
                {stretches.map((stretch, index) => (
                    <li key={index}>{stretch}</li>
                ))}
            </ul>
        </div>
    );
}

export default FlexibilityExercise;
