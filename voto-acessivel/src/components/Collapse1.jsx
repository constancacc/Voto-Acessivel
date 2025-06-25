import React from "react";
import IconButton from "./IconButton";
import collapse from "../assets/collapse-open.svg";
import "../styles/collapsebox.css";

export default function CollapseBox({ title, children, isOpen, onToggle }) {
  return (
    <div className="collapse-box">
      <button type="button" className="collapse-toggle" onClick={onToggle}>
        <div className={`collapse-icon-wrapper ${isOpen ? "open" : ""}`} aria-hidden="true">
          <IconButton icon={collapse} alt="Abrir secção" />
        </div>
        <h3 className="collapse-title">{title}</h3>
      </button>

      <div className={`collapse-content ${isOpen ? "expanded" : ""}`}>
        <div className="collapse-inner">{children}</div>
      </div>
    </div>
  );
}
