import React from "react";

interface MorseBtnProps {
  hasStarted: boolean;
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseUp: React.MouseEventHandler<HTMLButtonElement>;
  checkMorseCodeMatch: React.MouseEventHandler<HTMLButtonElement>;
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
  checkMorseCodeMatch: React.MouseEventHandler<HTMLButtonElement>;
}

const MorseClick: React.FC<MorseClickProps> = ({
  handleMouseDown,
  handleMouseUp,
  checkMorseCodeMatch,
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
      <button onClick={checkMorseCodeMatch} className="btn">
        Submit
      </button>
    </>
  );
};

const MorseBtn: React.FC<MorseBtnProps> = ({
  hasStarted,
  handleStartClick,
  handleMouseDown,
  handleMouseUp,
  checkMorseCodeMatch,
}) => {
  return (
    <div className="morse-btn-container">
      {hasStarted ? (
        <MorseClick
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          checkMorseCodeMatch={checkMorseCodeMatch}
        />
      ) : (
        <StartClick handleStartClick={handleStartClick} />
      )}
    </div>
  );
};

export default MorseBtn;
