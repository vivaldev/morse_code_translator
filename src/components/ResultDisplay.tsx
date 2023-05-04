import React from "react";

interface ResultProps {
  signalMark: string;
}

const ResultDisplay: React.FC<ResultProps> = ({ signalMark }) => {
  return (
    <div className="result-display-container">
      <div className="current-signal">{signalMark}</div>
    </div>
  );
};

export default ResultDisplay;
