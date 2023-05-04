import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";
import ResultDisplay from "./components/ResultDisplay";

interface AppTypes {
  signalLength: boolean;
  signalMark: string;
  codeWord: string[];
  hasStarted: boolean;
}

const App: React.FC<AppTypes> = () => {
  const [signalLength, setSignalLength] = useState(false);
  const [signalMark, setSignalMark] = useState("");
  const [codeWord, setCodeWord] = useState([""]);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartClick = () => {
    return setHasStarted(true);
  };

  const morseClick = () => {
    setHasStarted(true);

    const morseTimeout = setTimeout(() => {
      setSignalLength((prevValue) => !prevValue);
    }, 1000);

    if (signalLength === false && hasStarted) {
      setCodeWord((word) => {
        return [...word, "."];
      });
      setSignalMark(".");

      // keep this gap
    } else if (signalLength === true && hasStarted) {
      setCodeWord((word) => {
        return [...word, "-"];
      });
      setSignalMark("-");
    }
  };

  console.log(`Signal over 1s?: ${signalLength}`);
  console.log(`Codeword is: ${codeWord}`);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MorseAbc />
        <MorseBtn
          morseClick={morseClick}
          handleStartClick={handleStartClick}
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
