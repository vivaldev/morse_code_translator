import React from "react";
import "./App.css";
import { morses } from "./morse";

import Header from "./components/Header";
import MorseAbc from "./components/MorseAbc";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MorseAbc />
      </div>
    </div>
  );
};

export default App;
