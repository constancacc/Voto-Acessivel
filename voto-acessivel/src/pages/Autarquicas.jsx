import React, { useEffect, useState } from 'react';
import accessibility from "../assets/accessibility.svg"
import  '../styles/grid.css';

export default function Autarquicas() {

return (
    <div className="grid-container">
      <div style={{ gridColumn: "2 / span 12", gridRow: "3" }}>
        <h1>Autarquicas 2021</h1>
      </div>

      

      <div style={{gridColumn: "13 / span 1", gridRow: "12", alignSelf: "end", justifySelf: "end"}}>
      <IconButton alt="botão de definições de acessibilidade" icon={accessibility}/> 
      </div>

    </div>
  );

}