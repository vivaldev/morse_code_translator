import React from "react";

interface MorseBtnProps {
  hasStarted: boolean;
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseUp: React.MouseEventHandler<HTMLButtonElement>;
}

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

const MorseBtn: React.FC<MorseBtnProps> = ({
  hasStarted,
  handleStartClick,
  handleMouseDown,
  handleMouseUp,
}) => {
  return (
    <div className="morse-btn-container">
      {hasStarted ? (
        <MorseClick
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
        />
      ) : (
        <StartClick handleStartClick={handleStartClick} />
      )}
    </div>
  );
};

export default MorseBtn;
