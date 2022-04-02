import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import WorkoutInProgress from "./components/WorkoutInProgress/WorkoutInProgress";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { useState } from "react";

function App() {
    const [isWorkoutDone, setIsWorkoutDone] = useState(false);
    const [workout, setWorkout] = useState({
        isCircle: true,
        repeatCount: 3,
        exercises: [
            {
                name: "Martwy ciąg",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Wiosłowanie w opadzie tułowia",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Pompki",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Wyciskanie nad głowę",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Przysiady",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Uginanie ramion",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Prostowanie łokci za głową",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Rozciąganie gumy przed sobą",
                defaultValue: 10,
                value: [],
                weight: 0,
                timeExercise: false,
                note: "",
            },
            {
                name: "Plank",
                defaultValue: 30,
                value: [],
                weight: 0,
                timeExercise: true,
                note: "",
            },
        ],
    });

    const onWorkoutDone = () => {
        setIsWorkoutDone(true);
    };

    const setExerciseValue = (exerciseIndex, value) => {
        const newWorkout = JSON.parse(JSON.stringify(workout)); // deep copy
        newWorkout.exercises[exerciseIndex].value.push(value);

        setWorkout(newWorkout);
    };

    console.log(workout);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Normalize />
                <GlobalStyle />
                <AppContainer>
                    {isWorkoutDone ? (
                        <h1>Koniec na dziś. Dobra robota!</h1>
                    ) : (
                        <WorkoutInProgress
                            workout={workout}
                            setExerciseValue={setExerciseValue}
                            onWorkoutDone={onWorkoutDone}
                        />
                    )}
                </AppContainer>
            </ThemeProvider>
        </>
    );
}

export default App;
