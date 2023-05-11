import React from "react";

// Define the type of props expected by the component
interface StartButtonProps {
  handleStartClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Function component that takes a click handler function as a prop
const StartButton: React.FC<StartButtonProps> = ({ handleStartClick }) => {
  // Render a button that calls the click handler function when clicked
  return (
    <>
      <button onClick={handleStartClick} className="btn secondary">
        Start
      </button>
    </>
  );
};

export default StartButton;
