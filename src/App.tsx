import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Instructions from "./components/Instructions";
import StartButton from "./components/StartButton";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";
import { morses } from "./data";

const App: React.FC = () => {
  const [codeWord, setCodeWord] = useState<string[]>([""]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [mouseDownTime, setMouseDownTime] = useState<number>(0);
  const [translationArray, setTranslationArray] = useState<string[]>([""]);

  // START THE APP:
  const handleStartClick = () => {
    // Switch 'hasStarted' to be true.
    return setHasStarted(true);
    // In JSX, use 'hasStarted' state value to show <ResultDisplay />
    // component by using &&-operator.
  };

  // HANDLE MORSE CLICK:
  // CLICK STARTS
  const handleMouseDown = () => {
    // Have timestamp using performance.now method.
    const timestamp = performance.now();
    // Initialize mouseDownTime state with that timestamp.
    setMouseDownTime(timestamp);
  };

  // CLICK ENDS
  const handleMouseUp = () => {
    // Take timestamp in a same way than in click down
    const timestamp = performance.now();
    // Use the data initialized in 'mouseDownTime' state to tell
    // the difference between click down and click up (=click time).
    const timeDifference = timestamp - mouseDownTime;

    // SHORT OR LONG SIGNAL:
    // Initialize a new variable 'signal' with the right signal mark.
    // Use 'timeDifference' to check if user holds click down over 0.2s
    const signal = timeDifference < 200 ? "." : "-";
    // Update the 'codeWord' array of strings with appropriate signal
    setCodeWord((word) => [...word, signal]);
  };

  // CHECK IF MATCH ANY MORSE CODE SYMBOL WHEN SUBMIT:
  const checkMorseCodeMatch = () => {
    // Initialize new variable 'result' with stringified
    // 'codeWord' array by using .join()-method.
    const result = codeWord.join("");

    // Use that 'result' value to compare it with any morse.code (symbol)
    // in stored data. Initialize a new variable 'matchedMorse' with the
    // matching result by using .find()-method.
    const matchedMorse = morses.find((morse) => morse.code === result);

    // Check if the 'matchedMorse is truthy (.find() result is not empty)
    if (matchedMorse) {
      // If so, update 'translationArray' with a new alphabetical letter
      setTranslationArray((prevArray) => [...prevArray, matchedMorse.letter]);
      // Use 'translationArray' to display the array in <ResultDisplay />
    }

    // Edge case: If 'codeWord' array is empty when executed
    if (codeWord.length === 1 && codeWord[0] === "") {
      // Return early, preventing further checks and updates
      return;
    } else {
      // Only initialize 'codeWord' array with an empty array of strings to set it start.
      // This makes it possible to reset current choice of morse code symbols with "Submit"-btn.
      setCodeWord([""]);
    }
  };

  return (
    <div className="App">
      <div className="container start">
        <Header />

        {!hasStarted && (
          <>
            <Instructions />
            <StartButton handleStartClick={handleStartClick} />
          </>
        )}

        {hasStarted && (
          <>
            <MorseAbc />
            <MorseBtn
              hasStarted={hasStarted}
              handleStartClick={handleStartClick}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
              checkMorseCodeMatch={checkMorseCodeMatch}
            />
            <ResultDisplay
              codeWord={codeWord}
              translationArray={translationArray}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
