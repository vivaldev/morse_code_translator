import React, { useState } from "react";
import "./App.css";
import { morses } from "./morse";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";
import MorseBtn from "./components/MorseBtn";

interface AppTypes {
  empty: number;
  short: number;
  long: number;
}

const App: React.FC<AppTypes> = () => {
  const [longSignal, setLongSignal] = useState(false);
  const [pause, setPause] = useState<string>("|");
  const [codeWord, setCodeWord] = useState<string[]>([]);

  const morseClick = () => {
    const morseTimeout = setTimeout(() => {
      setLongSignal((prevValue) => !prevValue);
    }, 1000);
  };

  console.log(`Long signal: ${longSignal}`);
  console.log(`Codeword is: ${codeWord}`);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MorseAbc />
        <MorseBtn morseClick={morseClick} />
      </div>
    </div>
  );
};

export default App;
