import React, { useEffect, useState } from 'react';
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import  '../styles/intro.css';
import  '../styles/grid.css';

export default function Intro() {
return (
    <div className="grid-container">
      <div style={{ gridColumn: "2 / span 11", gridRow: "2" }}>
        <h1>Bem-vind@ à plataforma:</h1>
      </div>
      <div style={{gridColumn: "4 /span 6", gridRow: "3/ span 5", padding: "1rem"}}>
          <img src="/imagens/logo.svg" alt="Logo Voto Acessível" className="logo-svg"/>
      </div>
      <div style={{gridColumn: "2 /span 5", gridRow: "7", alignSelf: "end"}}>
        <h3>Sobre a plataforma...</h3>
      </div>

      <div style={{gridColumn: "2 /span 10", gridRow: "8"}}>
        <p>Criada para garantir que <b>todos</b> podem votar de forma <b>segura</b>, <b>independente</b> e adaptada às <b>suas necessidades</b>.</p>
      </div>
      
       <div style={{gridColumn: "8 /span 12", gridRow: "9"}}>
      <Button text="Começar eleição" icon={seta}/> 
      </div>

      <div style={{gridColumn: "12", gridRow: "10", alignSelf: "end", justifySelf: "end"}}>
      <IconButton icon={accessibility}/> 
      </div>

    </div>
  );

}