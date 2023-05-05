import React from "react";

interface ResultProps {
  codeWord: string[];

  hasStarted: boolean;
}

const ResultDisplay: React.FC<ResultProps> = ({
  codeWord,

  hasStarted,
}) => {
  return (
    <>
      <div className="result-display-container">
        <div className="codeword-display">
          {codeWord.map((sign, index) => (
            <div key={index}>{hasStarted ? sign : " "}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultDisplay;
