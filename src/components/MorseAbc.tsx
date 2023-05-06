import { morses } from "../data";

const MorseAbc: React.FC = () => {
  // FUNCTION TO RENDER MORSE CODE DATA:
  // Create a new function 'renderMorseRow' and give it parameters
  // 'start' and 'end' that are typed as a number.
  const renderMorseRow = (start: number, end: number) => {
    // Return data from 'morses' array from "./data.js".
    // Use .slice()-method and pass it parameters 'start' and 'end'.
    // Use .map()-method to iterate over the array of objects 'morses'
    return morses.slice(start, end).map((morse) => (
      // JSX to be returned, using 'morse.letter' as their key-value.
      <div className="morse-row" key={morse.letter}>
        {/* Display 'morse.letter' (alphabetical letter) */}
        <div className="morse-letter">{morse.letter}</div>
        {/* Display 'morse.code' (morse code symbols) */}
        <div className="morse-code">{morse.code}</div>
      </div>
    ));
  };

  // Use 'renderMorseRow(start, end)' function to display rows as you want.
  // 'start' and 'end' can be inserted with arguments wanted
  return (
    <div className="morse-abc">
      <div className="super-row">
        <div className="morse-row">
          <div className="morse">{renderMorseRow(0, 7)}</div>
        </div>
        <div className="morse-row">
          <div className="morse">{renderMorseRow(7, 14)}</div>
        </div>
      </div>

      <div className="super-row">
        <div className="morse-row">
          <div className="morse">{renderMorseRow(14, 21)}</div>
        </div>
        <div className="morse-row">
          <div className="morse">{renderMorseRow(21, 26)}</div>
        </div>
      </div>

      <div className="super-row">
        <div className="morse-row numbers-row">
          <div className="morse">{renderMorseRow(26, 40)}</div>
        </div>
      </div>
    </div>
  );
};

export default MorseAbc;
