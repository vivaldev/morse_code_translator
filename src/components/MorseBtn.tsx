import React from "react";

interface MorseBtnProps {
  morseClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MorseBtn: React.FC<MorseBtnProps> = ({ morseClick }) => {
  return (
    <div className="morse-btn-container">
      <button onClick={morseClick} className="morse-btn">
        Click
      </button>
    </div>
  );
};

export default MorseBtn;
