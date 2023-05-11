import React, { useState } from "react";
import "./App.css";
// Importing components
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import StartButton from "./components/StartButton";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";
import { morses } from "./data";

const App: React.FC = () => {
  // State variables
  const [codeWord, setCodeWord] = useState<string[]>([""]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [mouseDownTime, setMouseDownTime] = useState<number>(0);
  const [translationArray, setTranslationArray] = useState<string[]>([""]);

  // Start app
  const handleStartClick = () => setHasStarted(true);

  // Record start time on mouse down
  const handleMouseDown = () => setMouseDownTime(performance.now());

  // Record end time on mouse up, calculate click duration, update codeWord
  const handleMouseUp = () => {
    const timeDifference = performance.now() - mouseDownTime;
    const signal = timeDifference < 200 ? "." : "-";
    setCodeWord((word) => [...word, signal]);
  };

  // Check if codeWord matches a morse code, if yes, update translationArray
  const checkMorseCodeMatch = () => {
    const result = codeWord.join("");
    const matchedMorse = morses.find((morse) => morse.code === result);
    if (matchedMorse)
      setTranslationArray((prevArray) => [...prevArray, matchedMorse.letter]);
    if (!(codeWord.length === 1 && codeWord[0] === "")) setCodeWord([""]);
  };

  // Clear button
  const clearButton = () => {
    setCodeWord([""]);
    console.log("clear");
  };

  // Delete button
  const deleteLastLetter = () => {
    setTranslationArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.pop();
      return newArray;
    });
  };

  return (
    <div className="App">
      <div className="container start">
        <Header />

        {/* Conditional rendering based on hasStarted */}
        {!hasStarted && (
          <>
            <Instructions />
            <StartButton handleStartClick={handleStartClick} />
          </>
        )}

        {/* Conditional rendering based on hasStarted */}
        {hasStarted && (
          <>
            <MorseAbc />
            <MorseBtn
              hasStarted={hasStarted}
              handleStartClick={handleStartClick}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
              checkMorseCodeMatch={checkMorseCodeMatch}
              clearButton={clearButton}
              deleteButton={deleteLastLetter}
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
