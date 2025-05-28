import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/variables.css";

export default function Button({ text, icon, variant, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (text === "Começar eleição") {
      navigate("/eleicao");
    } else if (text === "Iniciar boletim") {
      navigate("/boletim-legislativas");
    }
  };

  return (
    <button
      className={`custom-button ${variant || ""}`}
      onClick={handleClick} 
    >
      <span className="custom-button-text">{text}</span>
      {icon && <img src={icon} alt="" className="custom-button-icon" />}
    </button>
  );
}
