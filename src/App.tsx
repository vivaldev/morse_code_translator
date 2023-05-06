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

  const checkMorseCodeMatch = () => {
    const result = codeWord.join("");

    const matchedMorse = morses.find((morse) => morse.code === result);

    if (matchedMorse) {
      setTranslationArray((prevValue) => [...prevValue, matchedMorse.letter]);
      setCodeWord([""]);
    } else {
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
    return setHasStarted(true);
  };

  const handleResetCodeWord = () => {
    setCodeWord([]);
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
          handleResetCodeWord={handleResetCodeWord}
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
