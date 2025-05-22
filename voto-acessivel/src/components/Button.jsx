import React from "react";
import "../styles/variables.css";

export default function Button({ text, icon }) {
  return (
    <button className="custom-button">
      <span className="custom-button-text">{text}</span>
      <img src={icon} alt="" className="custom-button-icon" />
    </button>
  );
}
