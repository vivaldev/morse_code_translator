import React from "react";

interface ResultProps {
  codeWord: string[];

  hasStarted: boolean;
}

const ResultDisplay: React.FC<ResultProps> = ({
  codeWord,

  hasStarted,
}) => {
  const currentSigns = codeWord.map((sign, index) => (
    <div key={index}>{hasStarted ? sign : " "}</div>
  ));

  return (
    <>
      <div className="result-display-container">
        <div className="codeword-display">{currentSigns}</div>
      </div>
    </>
  );
};

export default ResultDisplay;
