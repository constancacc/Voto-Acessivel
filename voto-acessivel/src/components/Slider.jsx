import React from "react";
import "../styles/variables.css";

export default function SliderIndicators({ activeIndex = 0, total = 3, onSelect }) {
  return (
    <div className="slider-container">
      <div className="slider-indicators">
        {[...Array(total)].map((_, index) => (
          <div
            key={index}
            className={`slider-indicator ${index === activeIndex ? "active" : "inactive"}`}
            onClick={() => onSelect && onSelect(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      <div className="slider-page-text">
        {activeIndex + 1}/{total}
      </div>
    </div>
  );
}

