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
  const [shortClicked, setShortClicked] = useState<boolean>(true);
  const [longClicked, setLongClicked] = useState<boolean>(false);
  const [pause, setPause] = useState<string>("|");
  const [codeWord, setCodeWord] = useState<string[]>([]);

  const morseClick = () => {
    if (shortClicked === true) {
      const shortSignal = setTimeout(() => {
        console.log("Short signal (signal < 1s)");
        setCodeWord((signal) => {
          return [...signal, "."];
        });
      }, 1000);
    }
  };

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
