import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Morse Code Translator</h1>
      <p className="subtitle">Press the 'Click' button to create morse code.</p>
      <p>
        'Click' measures how long you will press the button.
        <br />
        Less than 0.2 seconds is a short signal (".")
        <br />
        holding click down more than 0.2 seconds is considered as a long signal
        <span className="symbol"> ("-")</span>
      </p>
    </div>
  );
};

export default Header;
