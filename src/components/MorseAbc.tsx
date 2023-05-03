import React, { useState } from "react";
import { morses } from "../data";

const MorseAbc: React.FC = () => {
  const renderMorseRow = (start: number, end: number) => {
    return morses.slice(start, end).map((morse) => (
      <div className="morse-row" key={morse.letter}>
        <div className="morse-letter">{morse.letter}</div>
        <div className="morse-code">{morse.code}</div>
      </div>
    ));
  };

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
          <div className="morse">{renderMorseRow(14, 21)}</div>
        </div>
      </div>
    </div>
  );
};

export default MorseAbc;
