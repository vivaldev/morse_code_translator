import React from "react";

// Define the types of props expected by the components
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

// Function component for handling Morse Code clicks
const MorseClick: React.FC<MorseClickProps> = ({
  handleMouseDown,
  handleMouseUp,
  checkMorseCodeMatch,
}) => {
  // Renders two buttons, one for generating Morse Code and another for submitting the Morse Code
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

      <button className="btn secondary">Clear</button>

      <button onClick={checkMorseCodeMatch} className="btn secondary">
        Submit
      </button>
    </div>
  );
};

// Parent component to conditionally render the MorseClick component
const MorseBtn: React.FC<MorseBtnProps> = ({
  hasStarted,
  handleMouseDown,
  handleMouseUp,
  checkMorseCodeMatch,
}) => {
  // If hasStarted is true, render the MorseClick component
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
