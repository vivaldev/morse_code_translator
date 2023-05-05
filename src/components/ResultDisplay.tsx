import React from "react";

interface ResultProps {
  codeWord: string[];
  translationArray: string[] | undefined;
  hasStarted: boolean;
}

const ResultDisplay: React.FC<ResultProps> = ({
  codeWord,
  translationArray,
  hasStarted,
}) => {
  const currentSigns = codeWord.map((sign, index) => (
    <div key={index}>{hasStarted ? sign : " "}</div>
  ));

  return (
    <div className="results">
      <div className="result-display-container">
        <div className="codeword-display">{currentSigns}</div>
      </div>
      <div className="result-display-container2">
        <div className="result-display">{translationArray}</div>
      </div>
    </div>
  );
};

export default ResultDisplay;
