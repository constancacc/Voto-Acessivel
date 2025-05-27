import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/variables.css";

export default function Button({ text, icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "Começar eleição") {
      navigate("/eleicao");
    }
    // Podes adicionar outros comportamentos aqui se quiseres
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      <span className="custom-button-text">{text}</span>
      <img src={icon} alt="" className="custom-button-icon" />
    </button>
  );
}
