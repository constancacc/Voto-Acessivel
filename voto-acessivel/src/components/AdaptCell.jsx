import { useState, useEffect, useRef } from "react";
import '../styles/a11y.css';

export default function AdaptCell({ title, value, onConfirm, icon, editable = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState(parseFloat(value));
  const minusBtnRef = useRef(null);

  // Atualiza tempValue quando value externo mudar
  useEffect(() => {
    setTempValue(parseFloat(value));
  }, [value]);

  // Coloca foco no botão "-" quando abre
  useEffect(() => {
    if (isOpen && minusBtnRef.current) {
      minusBtnRef.current.focus();
    }
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm(tempValue);
    setIsOpen(false);
  };

  const handleClick = () => {
    if (editable) {
      setTempValue(parseFloat(value));
      setIsOpen((prev) => !prev);
    }
  };

  const handleKeyDown = (e) => {
    if (!editable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="adapt-cell-wrapper" id="versao2">
      <div
        className={`adap-cell ${isOpen ? "expanded" : ""}`}
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
        aria-controls={`controls-${title.replace(/\s+/g, "-").toLowerCase()}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={{ cursor: editable ? 'pointer' : 'default' }}
      >
        <span className="adap-title">
          <p>{title}</p>
          <p>{value}</p>
        </span>

        {/* Ícone com rotação e alt dinâmico */}
        <img
          src={icon}
          alt={isOpen ? "Fechar opções" : "Abrir opções"}
          className={`icon-arrow ${isOpen ? "rotated" : ""}`}
          aria-hidden="true"
          focusable="false"
        />
      </div>

      {/* Área animada para os controles */}
      <div
        id={`controls-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className={`controls-container ${isOpen ? "open" : "closed"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="buttons-row">
          <button
            ref={minusBtnRef}
            className="circle-btn"
            aria-label={`Diminuir valor de ${title}`}
            onClick={() => setTempValue(prev => prev - 1)}
          >-</button>

          <span className="temp-value" aria-live="polite" aria-atomic="true">{tempValue}</span>

          <button
            className="circle-btn"
            aria-label={`Aumentar valor de ${title}`}
            onClick={() => setTempValue(prev => prev + 1)}
          >+</button>
        </div>

        <button
          className="custom-button primary"
          id="confirmacao-a11y"
          aria-label={`Confirmar alteração de ${title}`}
          onClick={handleConfirm}
        >
          Confirmar alteração
        </button>
      </div>
    </div>
  );
}
