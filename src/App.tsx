import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";
import { morses } from "./data";

interface AppTypes {
  longsignal: boolean;
  codeWord: string[];
  hasStarted: boolean;
  mouseDownTime: number;
  pauseTimerId: NodeJS.Timeout | undefined;
}

const App: React.FC<AppTypes> = () => {
  const [codeWord, setCodeWord] = useState([""]);
  const [hasStarted, setHasStarted] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [pauseTimerId, setPauseTimerId] = useState(undefined);
  const [translationArray, setTranslationArray] = useState([""]);

  const checkMorseCodeMatch = () => {
    const result = codeWord.join("");
    console.log(`result: ${result}`);

    const matchedMorse = morses.find((morse) => morse.code === result);

    if (matchedMorse) {
      setTranslationArray((prevValue) => [...prevValue, matchedMorse.letter]);
      setCodeWord([""]);
    }
  };

  const handleMouseDown = () => {
    const timestamp = performance.now();
    setMouseDownTime(timestamp);
  };

  const handleMouseUp = () => {
    const timestamp = performance.now();
    const timeDifference = timestamp - mouseDownTime;

    if (timeDifference < 200) {
      setCodeWord((word) => [...word, "."]);
    }
    if (timeDifference >= 200) {
      setCodeWord((word) => [...word, "-"]);
    }
  };

  const handleStartClick = () => {
    clearTimeout(pauseTimerId);
    return setHasStarted(true);
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
            hasStarted={hasStarted}
            translationArray={translationArray}
          />
        )}
      </div>
    </div>
  );
};

export default App;
