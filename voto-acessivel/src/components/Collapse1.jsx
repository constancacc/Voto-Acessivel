import React, { useEffect, useRef } from "react";
import IconButton from "./IconButton";
import collapse from "../assets/collapse-open.svg";
import "../styles/collapsebox.css";

export default function CollapseBox({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    onToggle();

    // esperar o React atualizar o DOM
    setTimeout(() => {
      if (!isOpen && contentRef.current) {
        contentRef.current.focus(); // foco no conteúdo recém-aberto
      } else if (isOpen && buttonRef.current) {
        buttonRef.current.focus(); // foco no botão se fechou
      }
    }, 0);
  };


  return (
    <div className="collapse-box">
      <button
        type="button"
        className="collapse-toggle"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
        ref={buttonRef}
        aria-hidden="true"
      >
        <div className={`collapse-icon-wrapper ${isOpen ? "open" : ""}`}>
          <IconButton icon={collapse} ariaLabel={`${isOpen ? "Fechar" : "Abrir"}: ${title}`} />
        </div>

        <h3 aria-hidden="true" className="collapse-title">{title}</h3>
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
