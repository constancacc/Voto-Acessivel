import React from 'react';
/*botões*/
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import BoletimVoto from '../components/Boletim-screen-reader.jsx';


/*partidos*/
import partidosData from "../assets/legislativas.json";

/*styles*/
import '../styles/intro.css';
import '../styles/variables.css';

export default function Boletim() {
  return (
    <div className="grid-container">
      <div style={{ gridColumn: "2", gridRow: "2",  display: "flex", justifyContent: "center", alignItems: "center"}}>

      <span className="back-container">
        <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>

      </div>
     <div style={{ gridColumn: "11 / span 3", gridRow: "2" }}>
        <img
            src="/imagens/legislativas-2025-logo.svg"
            alt="Botão Eleições Legislativas 2025"
            className="btn-legislativas"
          />

      </div>
      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Eleição para a Assembleia Nacional</h1>
        <h2>Boletim de Voto</h2>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "6"}}>
      <BoletimVoto></BoletimVoto>

      </div>
 {/*footer*/}
                <div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
                <Button text="Selecionar" variant="primary" icon={seta}/> 
                </div>
      
                <div style={{gridColumn: "2/ span 1", gridRow: "12", alignSelf: "end"}}>
                <IconButton alt="botão de definições de acessibilidade" icon={accessibility}/> 
                </div>
    </div>
  );
}
