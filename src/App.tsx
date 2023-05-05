import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";

interface AppTypes {
  oneSecond: boolean;
  currentWord: string;
  codeWord: string[];
  hasStarted: boolean;
  timeoutId: NodeJS.Timeout | null;
}

const App: React.FC<AppTypes> = () => {
  const [longSignal, setLongSignal] = useState(false);
  const [currentSign, setCurrentSign] = useState(" ");

  const [codeWord, setCodeWord] = useState([""]);
  const [hasStarted, setHasStarted] = useState(false);

  const timeoutId = useRef(null);

  const handleMouseDown = () => {
    console.log("mouse down");
  };

  const handleMouseUp = () => {
    console.log("mouse up");
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
          <ResultDisplay
            codeWord={codeWord}
            hasStarted={hasStarted}
            currentSign={currentSign}
          />
        )}
      </div>
    </div>
  );
};

export default App;
