import React, { useEffect, useRef } from "react";
import IconButton from "./IconButton";
import collapse from "../assets/collapse-open.svg";
import "../styles/collapsebox.css";

export default function CollapseBox({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      // Coloca foco no container do conteúdo aberto para leitores de tela
      contentRef.current.focus();
    } else if (!isOpen && buttonRef.current) {
      // Ao fechar, foca no botão para que o leitor pare de ler o conteúdo
      buttonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="collapse-box">
      <button
        type="button"
        className="collapse-toggle"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
        aria-label={`${title}`}
        ref={buttonRef}
      >
        <div className={`collapse-icon-wrapper ${isOpen ? "open" : ""}`} aria-hidden="true">
          <IconButton icon={collapse} alt="Abrir secção" />
        </div>
        <h3 className="collapse-title">{title}</h3>
      </button>

      {isOpen && (
        <div
          id="collapse-content"
          className="collapse-content expanded"
          aria-hidden={!isOpen}
          tabIndex={-1}  // permite foco programático
          ref={contentRef}
        >
          <div className="collapse-inner">{children}</div>
        </div>
      )}
    </div>
  );
}
