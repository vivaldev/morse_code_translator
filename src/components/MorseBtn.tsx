import React from "react";

interface MorseBtnProps {
  hasStarted: boolean;
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseUp: React.MouseEventHandler<HTMLButtonElement>;
  checkMorseCodeMatch: React.MouseEventHandler<HTMLButtonElement>;
}

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
    <div className="btn-container">
      <div>
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="btn primary"
        >
          Click
        </button>
      </div>

      <button onClick={checkMorseCodeMatch} className="btn secondar">
        Submit
      </button>
    </div>
  );
};

const MorseBtn: React.FC<MorseBtnProps> = ({
  hasStarted,
  handleMouseDown,
  handleMouseUp,
  checkMorseCodeMatch,
}) => {
  return (
    <div className="morse-btn-container">
      {hasStarted && (
        <MorseClick
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          checkMorseCodeMatch={checkMorseCodeMatch}
        />
      )}
    </div>
  );
};

export default MorseBtn;
