import React from "react";

interface StartButtonProps {
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StartButton: React.FC<StartButtonProps> = ({ handleStartClick }) => {
  return (
    <>
      <button onClick={handleStartClick} className="btn secondary">
        Start
      </button>
    </>
  );
};

export default StartButton;
