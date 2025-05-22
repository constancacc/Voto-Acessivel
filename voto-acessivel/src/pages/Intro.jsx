import React, { useEffect, useState } from 'react';
import  '../styles/intro.css';
import  '../styles/grid.css';

export default function Intro() {
return (
    <div className="grid-container">
      <div style={{ gridColumn: "1 / span 12" }}>
        <h1>Header</h1>
      </div>

      <div style={{ gridColumn: "4 / span 6" }}>
        <p>Conteúdo centrado em 6 colunas</p>
      </div>

      <div style={{ gridColumn: "1 / span 3" }}>
        <p>Lado esquerdo</p>
      </div>

      <div style={{ gridColumn: "10 / span 3" }}>
        <p>Lado direito</p>
      </div>
    </div>
  );

}