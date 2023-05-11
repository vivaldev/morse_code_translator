import React from "react";

// Define the types of props expected by the components
interface MorseBtnProps {
  hasStarted: boolean;
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseUp: React.MouseEventHandler<HTMLButtonElement>;
  checkMorseCodeMatch: React.MouseEventHandler<HTMLButtonElement>;
  clearButton: React.MouseEventHandler<HTMLButtonElement>;
  deleteButton: React.MouseEventHandler<HTMLButtonElement>;
}

// Parent component to conditionally render the MorseClick component
const MorseBtn: React.FC<MorseBtnProps> = ({
  hasStarted,
  handleMouseDown,
  handleMouseUp,
  checkMorseCodeMatch,
  clearButton,
  deleteButton,
}) => {
  // If hasStarted is true, render the MorseClick component
  return (
    <div className="morse-btn-container">
      {hasStarted && (
        <div className="btn-container">
          <div>
            <button
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="btn primary"
            >
              Click
            </button>
            <button onClick={deleteButton} className="btn primary">
              Delete
            </button>
          </div>

          <div>
            <button onClick={checkMorseCodeMatch} className="btn secondary">
              Submit
            </button>
            <button onClick={clearButton} className="btn secondary">
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MorseBtn;
