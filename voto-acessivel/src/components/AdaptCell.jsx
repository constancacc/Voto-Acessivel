import { useState, useEffect, useRef } from "react";
import Button from "../components/Button.jsx";
import check from "../assets/a11y/check.svg";
import '../styles/a11y.css';

export default function AdaptCell({ title, value, onConfirm, icon, editable = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempValue, setTempValue] = useState(parseFloat(value));
  const minusBtnRef = useRef(null);

  // Atualiza tempValue quando value externo mudar
  useEffect(() => {
    setTempValue(parseFloat(value));  
  }, [value]);

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
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  // Foco programático no conteúdo aberto
  const contentRef = useRef(null);
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen]);

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
      >
        <span className="adap-title">
          <p aria-hidden="true">{title}</p>
          <p aria-hidden="true">{value}</p>
        </span>

        <img
          src={icon}
          aria-label={isOpen ? "Fechar opções" : "Abrir opções"}
          className={`icon-arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          id={`controls-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className={`controls-container open`}
          tabIndex={-1}   // foco programático
          ref={contentRef}
          aria-hidden={!isOpen}
          aria-label="alterar tamanho da tipografia"
        >
          <div className="buttons-row">
            <button
              ref={minusBtnRef}
              className="circle-btn"
              aria-label={`Diminuir valor de ${title}`}
              onClick={() => setTempValue(prev => prev - 1)}
              tabIndex={0}
            >-</button>

            <span
              className="temp-value"
              aria-live="polite"
              aria-atomic="true"
            >
              {tempValue}
            </span>

            <button
              className="circle-btn"
              aria-label={`Aumentar valor de ${title}`}
              onClick={() => setTempValue(prev => prev + 1)}
              tabIndex={0}
            >+</button>
          </div>

          <button
            className="custom-button primary"
            id="confirmacao-a11y"
            aria-label={`Confirmar alteração de ${title}`}
            onClick={handleConfirm}
            tabIndex={0}
          >
            Confirmar alteração
            <img src={check} alt="Confirmar" width={25} />
          </button>
        </div>
      )}
    </div>
  );
}
