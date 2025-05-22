import React from "react";
import "../styles/variables.css";

export default function IconButton({ icon, alt = "", onClick, ariaLabel, type = "button" }) {
  return (
    <button
      className="icon-button"
      onClick={onClick}
      aria-label={ariaLabel || alt}
      type={type}
    >
      <img src={icon} alt={alt} className="icon-button-img" />
    </button>
  );
}
