import React, { useState, useRef } from "react";
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
  const [codeWord, setCodeWord] = useState<string[]>([]);

  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [mouseDownTime, setMouseDownTime] = useState<number>(0);
  const [translationArray, setTranslationArray] = useState<string[]>([""]);

  const spaceTimeoutId = useRef<number | undefined>(undefined);

  // Start app
  const handleStartClick = () => setHasStarted(true);

  // Record start time on mouse down
  const handleMouseDown = () => {
    if (spaceTimeoutId.current) {
      clearTimeout(spaceTimeoutId.current);
      spaceTimeoutId.current = undefined;
    }

    const timestamp = Date.now();
    setMouseDownTime(timestamp);
  };

  // Record end time on mouse up, calculate click duration, update codeWord
  const handleMouseUp = () => {
    const timestamp = Date.now();
    const timeDifference = timestamp - mouseDownTime;
    const signal = timeDifference < 200 ? "." : "-";

    setCodeWord((word) => {
      const newWord = [...word, signal];
      spaceTimeoutId.current = window.setTimeout(() => {
        console.log("space");
        checkMorseCodeMatch(newWord);
        setCodeWord([]);
      }, 600);
      return newWord;
    });
  };

  //  Check if 'codeWord' matches with existing morse code signal we get from
  // data.If yes, update 'translationArray' with matching alphabetical letter.
  // 'translationArray' is used to display letters.

  const checkMorseCodeMatch = (word: string[]) => {
    const result = word.join("");
    const matchedMorse = morses.find((morse) => morse.code === result);

    if (matchedMorse) {
      setTranslationArray((prevArray) => [...prevArray, matchedMorse.letter]);
    }
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
