import React, { useEffect, useState } from 'react';
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import SliderIndicators from '../components/Slider.jsx';
import  '../styles/intro.css';
import  '../styles/grid.css';

export default function Intro2({ activeIndex, setActiveIndex }) {

return (
    <div className="grid-container">
      <div style={{gridColumn: "5 /span 6", gridRow: "4/ span 4", padding: "1rem"}}>
          <img src="/imagens/instrucoes/leitor-de-ecra.svg" alt="Logo Voto Acessível" className="logo-svg"/>
      </div>
      <div style={{gridColumn: "2 /span 7", gridRow: "8", alignSelf: "end"}}>
        <h3>Navegação com leitor de ecrã</h3>
      </div>

      <div style={{gridColumn: "2 /span 10", gridRow: "9"}}>
        <p>A plataforma possui um <b>leitor de ecrã</b> que é ativado <b>automaticamente</b> ao iniciar, <b>lendo todos os elementos</b> apresentados.</p>
      </div>

       <div style={{gridColumn: "6 / span 4", gridRow: "11", alignSelf: "end"}}>
          <SliderIndicators activeIndex={activeIndex} total={3} onSelect={setActiveIndex} />
        </div>
      
              {/*footer*/}
                <div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
                <Button text="Começar eleição" variant="primary" icon={seta}/> 
                </div>
      
                <div style={{gridColumn: "2/ span 1", gridRow: "12", alignSelf: "end"}}>
                <IconButton alt="botão de definições de acessibilidade" icon={accessibility}/> 
                </div>
       
      

      

    </div>
  );

}