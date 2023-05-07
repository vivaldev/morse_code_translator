import React from "react";

interface ResultProps {
  codeWord: string[];
  translationArray?: string[];
}

const ResultDisplay: React.FC<ResultProps> = ({
  codeWord,
  translationArray = [],
}) => {
  const currentSigns = codeWord.map((sign, index) => (
    <span key={index}>{sign}</span>
  ));

  const translatedText = translationArray.join("");

  return (
    <div className="results">
      <div className="result-display-container">
        <div className="codeword-display">{currentSigns}</div>
      </div>
      <div className="result-display-container2">
        <div className="result-display">{translatedText}</div>
      </div>
    </div>
  );
};

export default ResultDisplay;
