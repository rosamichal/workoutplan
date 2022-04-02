import { useState } from "react";

const WorkoutInProgress = ({ workout, setExerciseValue, onWorkoutDone }) => {
    const [repeatIndex, setRepeatIndex] = useState(0);
    const [exercisesIndex, setExercisesIndex] = useState(0);
    const [value, setValue] = useState(workout.exercises[0]?.defaultValue ?? 0);

    const nextExercise = () => {
        setExerciseValue(exercisesIndex, value);

        const newExerciseIndex =
            exercisesIndex + 1 === workout.exercises.length ? 0 : exercisesIndex + 1;
        setExercisesIndex(newExerciseIndex);
        setValue(workout.exercises[newExerciseIndex].defaultValue);
        if (newExerciseIndex === 0) {
            const newRepeatIndex = repeatIndex + 1;
            setRepeatIndex(newRepeatIndex);

            if (newRepeatIndex === workout.repeatCount) {
                onWorkoutDone();
            }
        }
    };

    return (
        <>
            <p>
                Obwód {repeatIndex + 1}/{workout.repeatCount}
            </p>
            <p>
                <span>
                    {exercisesIndex + 1}/{workout.exercises.length}
                </span>{" "}
                {workout.exercises[exercisesIndex].name}
            </p>
            <div>
                <p>Powtórzenia</p>
                <input
                    type='button'
                    value='-'
                    onClick={() => setValue(value === 0 ? 0 : value - 1)}
                />
                <input type='number' value={value} onChange={e => setValue(e.target.value)} />
                <input type='button' value='+' onClick={() => setValue(value + 1)} />
            </div>
            {/* <div>
                        <p>Ciężar</p>
                        <input type='button' value='-' />
                        <input type='text' />
                        <input type='button' value='+' />
                    </div> */}

            <div>
                <div>
                    <textarea name='Note' id='note' cols='30' rows='3'></textarea>
                </div>
                <input type='button' value='Dalej' onClick={nextExercise} />
            </div>
        </>
    );
};

export default WorkoutInProgress;
