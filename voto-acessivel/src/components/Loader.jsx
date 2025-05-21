import React from "react";
import "../styles/loader.css";

export default function Loader({ size = 50, segments = 8 }) {
  const segmentWidth = size * 0.1;  // 10% do tamanho
  const segmentHeight = size * 0.3; // 50% do tamanho
  const offset = size / 2 - segmentHeight; // para posicionar corretamente

  return (
    <div
      className="loader-container"
      style={{ width: size, height: size }}
    >
      {[...Array(segments)].map((_, i) => (
        <div
          key={i}
          className="loader-segment"
          style={{
            width: segmentWidth,
            height: segmentHeight,
            transform: `rotate(${i * (360 / segments)}deg) translateY(-${offset}px)`,
            animationDelay: `${(i * 1.2) / segments}s`,
          }}
        />
      ))}
    </div>
  );
}
