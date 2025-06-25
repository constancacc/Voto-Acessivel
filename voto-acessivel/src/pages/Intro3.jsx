import React, { useEffect, useState } from 'react';
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import SliderIndicators from '../components/Slider.jsx';
import  '../styles/intro.css';
import  '../styles/variables.css';

export default function Intro3({ activeIndex, setActiveIndex }) {
return (
    <div className="grid-container">

      <div style={{gridColumn: "4 /span 8", gridRow: "4/ span 4", padding: "1rem"}}>
          <img src="/imagens/instrucoes/definicoes-acessibilidade.svg" alt="Logo Voto Acessível" className="logo-svg"/>
      </div>
      <div style={{gridColumn: "2 /span 7", gridRow: "8", alignSelf: "end"}}>
        <h3>Personalize a sua experiência</h3>
      </div>

      <div style={{gridColumn: "2 /span 10", gridRow: "9"}}>
        <p>Pode ajustar o <b>tamanho</b> e o <b>tipo de letra</b>, as <b>cores</b> e o <b>idioma</b> de leitura. Todas estas opções foram pensadas para melhorar a leitura e a navegação na plataforma.</p>
      </div>
      
      <div style={{gridColumn: "7 / span 3", gridRow: "10"}}>
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