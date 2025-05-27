import React, { useState } from "react";
import IconButton from "./IconButton";
import collapse from "../assets/collapse-open.svg";
import "../styles/collapsebox.css";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-box">
      <button type="button" className="collapse-toggle" onClick={toggleCollapse}>
        <div className={`collapse-icon-wrapper ${isOpen ? "open" : ""}`} aria-hidden="true">
          <IconButton icon={collapse} alt="Abrir secção" />
        </div>
        <h3 className="collapse-title">{title}</h3>
      </button>

      <div className="collapse-content" style={{maxHeight: isOpen ? "1000px" : "0",}}>
        <div className="collapse-inner">{children}</div>
      </div>
    </div>
  );
}
