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
  const [shortSignal, setShortSignal] = useState(false);
  const [longSignal, setLongSignal] = useState(false);
  const [codeWord, setCodeWord] = useState([""]);
  const [hasStarted, setHasStarted] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [pauseTimerId, setPauseTimerId] = useState(undefined);

  const checkMorseCodeMatch = () => {
    const result = codeWord.join("");
    console.log(`result: ${result}`);

    const matchedMorse = morses.find((morse) => morse.code === result);
    console.log(`matched: ${matchedMorse.letter}`);
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
          <ResultDisplay codeWord={codeWord} hasStarted={hasStarted} />
        )}
      </div>
    </div>
  );
};

export default App;
