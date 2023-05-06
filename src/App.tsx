import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";
import { morses } from "./data";

const App: React.FC = () => {
  const [codeWord, setCodeWord] = useState<string[]>([""]);
  const [hasStarted, setHasStarted] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);
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
    // Take timestamp as in click down
    const timestamp = performance.now();
    // Use the data initialized in 'mouseDownTime' state to tell
    // the difference between click down and click up (=click time).
    const timeDifference = timestamp - mouseDownTime;

    // SHORT CLICK SIGNAL
    // If click is less than 200 millisecons or 0.2 seconds.
    if (timeDifference < 200) {
      // Initialize 'codeWord' state by taking a shallow copy
      // from old array and update that with short signal symbol, "."
      setCodeWord((word) => [...word, "."]);
    }

    // LONG CLICK SIGNAL
    // If click is more or exactly 200 milliseconds or 0.2 secods.
    if (timeDifference >= 200) {
      // Initialize by using same logic as in 'short click',
      // but use long signal, "-"
      setCodeWord((word) => [...word, "-"]);
    }
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
      // If so, initialize 'translationArray' by taking a shallow copy of it
      // and updating that 'prevTranslationArray' with matchinging code symbol
      // alphabetical letter (e.g. "E").
      setTranslationArray((prevTranslationArray) => [
        ...prevTranslationArray,
        matchedMorse.letter,
      ]);
      // Initialize 'codeWord' array with an empty array of strings to set it start.
      setCodeWord([""]);

      // If 'matchedMorse' variable is not truthy (.find() result is empty, mis-match)
    } else {
      // Only initialize 'codeWord' array with an empty array of strings to set it start.
      // This makes it possible to reset current choice of morse code symbols with "Submit"-btn.
      setCodeWord([""]);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <MorseAbc />
        <MorseBtn
          handleStartClick={handleStartClick}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          hasStarted={hasStarted}
          checkMorseCodeMatch={checkMorseCodeMatch}
        />
        {hasStarted && (
          <ResultDisplay
            codeWord={codeWord}
            translationArray={translationArray}
          />
        )}
      </div>
    </div>
  );
};

export default App;
