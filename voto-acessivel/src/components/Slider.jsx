import React from "react";
import "../styles/variables.css";

export default function SliderIndicators({ activeIndex = 0, total = 3 }) {
  return (
    <div className="slider-container" style={{ width: `${total * 60}px` }}>
      <div className="slider-indicators">
        {[...Array(total)].map((_, index) => (
          <div
            key={index}
            className={
              index <= activeIndex
                ? "slider-indicator active"
                : "slider-indicator inactive"
            }
          />
        ))}
      </div>
      <div className="slider-page-text">
        {activeIndex + 1} de {total} páginas
      </div>
    </div>
  );
}
