import React, { useState } from "react";
import "../App.css";
import down from "../assets/down.png"

type OneofMainsProps = {
  title: string;
  subtitles: string[];
  texts: string[];
};

const OneofMains = ({ title, subtitles, texts}: OneofMainsProps) => {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(subtitles.length).fill(false));

  const toggle = (i: number) => {
    setOpenStates(prev => {
      const copy = [...prev];
      copy[i] = !copy[i]; // toggle just that index
      return copy;
    });
  };
  return (
    <div className="mainpart">
      <p className="parttitle">{title}</p>

      {subtitles.map((subtitle, i) => (
        <div key={i}>
          <p style={{ fontSize: '2.0em' }}>{subtitle}</p>
          <button className="arrow-button" onClick={() => toggle(i)}>
          <img
            src={down}
            className={openStates[i] ? "arrow rotated" : "arrow"}
            style={{ width: "70px", height: "70px" }}
          />
          </button>
          {openStates[i] && (
            <div className="reveal-text">{texts[i]}</div>
          )}
        </div>
      ))}
    </div>
  );
};


export default OneofMains;