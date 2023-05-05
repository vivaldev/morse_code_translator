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
  morses: { letter: string; code: string };
}

const App: React.FC<AppTypes> = ({ morses }) => {
  const [shortSignal, setShortSignal] = useState(false);
  const [longSignal, setLongSignal] = useState(false);
  const [codeWord, setCodeWord] = useState([""]);
  const [hasStarted, setHasStarted] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [pauseTimerId, setPauseTimerId] = useState(undefined);

  const morsesArray = morses.map((morse) => ({
    letter: morse.letter,
    code: morse.code.split(""),
  }));

  const checkMorseCodeMatch = () => {
    console.log("PAUSE");
  };

  const handleMouseDown = () => {
    const timestamp = performance.now();
    setMouseDownTime(timestamp);
  };

  const handleMouseUp = () => {
    clearTimeout(pauseTimerId);
    const timestamp = performance.now();
    const timeDifference = timestamp - mouseDownTime;

    if (timeDifference < 200) {
      setCodeWord((word) => [...word, "."]);
    }
    if (timeDifference >= 200) {
      setCodeWord((word) => [...word, "-"]);
    }
  };

  // Clear any existing pause timer and set a new onMouseDown
  clearTimeout(pauseTimerId);
  const newPauseTimerId = setTimeout(() => {
    checkMorseCodeMatch();
  }, 2000);

  const handleStartClick = () => {
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
        />
        {hasStarted && (
          <ResultDisplay codeWord={codeWord} hasStarted={hasStarted} />
        )}
      </div>
    </div>
  );
};

export default App;
