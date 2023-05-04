import React from "react";

const StartClick: React.FC<{
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ handleStartClick }) => {
  return (
    <>
      <button onClick={handleStartClick} className="btn">
        Start
      </button>
    </>
  );
};

const MorseClick: React.FC<{
  morseClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ morseClick }) => {
  return (
    <>
      <button onClick={morseClick} className="btn">
        Click
      </button>
    </>
  );
};

const MorseBtn: React.FC<{
  morseClick: React.MouseEventHandler<HTMLButtonElement>;
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
  hasStarted: boolean;
}> = ({ morseClick, handleStartClick, hasStarted }) => {
  return (
    <div className="morse-btn-container">
      {hasStarted ? (
        <MorseClick morseClick={morseClick} />
      ) : (
        <StartClick handleStartClick={handleStartClick} />
      )}
    </div>
  );
};

export default MorseBtn;
