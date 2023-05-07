import React from "react";

const Instructions: React.FC = () => {
  return (
    <div className="instructions-container">
      <h3 className="instructions-title">Instructions of how to use the app</h3>
      <p>
        Available alphabets of the international morse code is displayed on the
        screen the whole time after starting the app. Use 'Click' button as you
        were sending a morse code signal.
      </p>
      <p>
        <span className="bold">Short signal: </span>Press 'Click' button
        shortly. Just click, don't hold down. Short signal is marked with a dot
        (".").
      </p>
      <p>
        <span className="bold">Long signal: </span>Hold 'Click' button over 0.2
        seconds and release. Long signal is marked with a dash ("-").
      </p>
      <p>
        After you're pressed the 'Click' button the code symbol is displayed.
        When you've got all of symbols you intended, press 'Submit' button to
        display the corresponding alphabetical letter.
      </p>
    </div>
  );
};

export default Instructions;
