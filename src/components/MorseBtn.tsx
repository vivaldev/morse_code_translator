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

interface MorseClickProps {
  handleMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseUp: React.MouseEventHandler<HTMLButtonElement>;
}

const MorseClick: React.FC<MorseClickProps> = ({
  handleMouseDown,
  handleMouseUp,
}) => {
  return (
    <>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="btn"
      >
        Click
      </button>
    </>
  );
};

const MorseBtn: React.FC<{
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
  handleMorseCode: React.MouseEventHandler<HTMLButtonElement>;
  hasStarted: boolean;
}> = ({ hasStarted, handleStartClick, handleMorseCode }) => {
  return (
    <div className="morse-btn-container">
      {hasStarted ? (
        <MorseClick morseClick={handleMorseCode} />
      ) : (
        <StartClick handleStartClick={handleStartClick} />
      )}
    </div>
  );
};

export default MorseBtn;
