import React from "react";

interface ResultProps {
  codeWord: string[];
  hasStarted: boolean;
}

const ResultDisplay: React.FC<ResultProps> = ({ codeWord }) => {
  return (
    <>
      <div className="result-display-container">
        <div className="codeword-display">
          {codeWord.map((sign, index) => (
            <div key={index}>{sign}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultDisplay;
