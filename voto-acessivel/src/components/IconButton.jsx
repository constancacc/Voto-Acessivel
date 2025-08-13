import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/variables.css";
import accessibilityIcon from "../assets/accessibility.svg"; // importa o ícone diretamente

export default function IconButton({ icon, alt = "", onClick, ariaLabel, type = "button", className = "" }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (icon === accessibilityIcon) {
      navigate("/acessibilidade");
    } else if (onClick) {
      onClick(e); // fallback para o handler passado como prop
    }
  };

  return (
    <button
      className={`icon-button ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      type={type}
      tabIndex={0} 
    >
      <img src={icon} alt={alt} className="icon-button-img" />
    </button>
  );
}
