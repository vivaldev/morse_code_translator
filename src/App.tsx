import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";

interface AppTypes {
  longsignal: boolean;
  codeWord: string[];
  hasStarted: boolean;
  timeoutId: NodeJS.Timeout | null;
  mouseDownTime: number;
}

const App: React.FC<AppTypes> = () => {
  const [longSignal, setLongSignal] = useState(false);
  const [codeWord, setCodeWord] = useState([""]);
  const [hasStarted, setHasStarted] = useState(false);
  const [mouseDownTime, setMouseDownTime] = useState(0);

  const timeoutId = useRef(null);

  const handleMouseDown = () => {
    const timestamp = performance.now();
    setMouseDownTime(timestamp);
    // console.log(`mouse down: ${timestamp}`);
  };

  const handleMouseUp = () => {
    const timestamp = performance.now();
    const timeDifference = timestamp - mouseDownTime;
    // console.log(`mouse up: ${timestamp}`);
    console.log(`time difference: ${timeDifference}`);

    if (timeDifference > 200) {
      console.log("long");
    } else {
      console.log("short");
    }
  };

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
