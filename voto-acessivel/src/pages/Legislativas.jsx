import React, { useEffect, useState } from 'react';
import accessibility from "../assets/accessibility.svg"
import  '../styles/grid.css';
import  '../styles/variables.css';

export default function Legislativas() {

return (
    <div className="grid-container">
      <div style={{ gridColumn: "2 / span 12", gridRow: "3" }}>
        <h1>Legislativas 2025</h1>
      </div>

      

      <div style={{gridColumn: "13 / span 1", gridRow: "12", alignSelf: "end", justifySelf: "end"}}>
      <IconButton alt="botão de definições de acessibilidade" icon={accessibility}/> 
      </div>

    </div>
  );

}