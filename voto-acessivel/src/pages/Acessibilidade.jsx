import React from 'react';
import { useNavigate } from 'react-router-dom';

/*botões*/
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import CollapseBox from '../components/Collapse1.jsx';

/*imagens*/
import preDef from "../assets/a11y/pre-def.svg";
import codigo from "../assets/a11y/codigo.svg";
import leitor from "../assets/a11y/leitor.svg";
import cor from "../assets/a11y/cor.svg";
import idioma from "../assets/a11y/idioma.svg";
import tipografia from "../assets/a11y/tipografia.svg";

import next from "../assets/collapse-open.svg";

/*partidos*/
import partidosData from "../assets/autarquicas.json";

/*styles*/
import '../styles/intro.css';
import '../styles/variables.css';
import '../styles/a11y.css';

export default function Acessibilidade() {
  const navigate = useNavigate();
  return (
    <div className="grid-container">
        {/* Botão voltar */}
      <div style={{ gridColumn: "2", gridRow: "2", display: "flex", alignItems: "center" }}>
        <button onClick={() => navigate(-1)} className="back-container" tabIndex={0} aria-label="Voltar à página anterior">
          <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div style={{ gridColumn: "2 / span 14", gridRow: "3"}}>
        <h1>Definições de Acessibilidade</h1>
        <h2>Adaptar a plataforma às suas necessidades</h2>
      </div>

     {/*botões de adaptação*/}

      <div style={{ gridColumn: "2 / span 12", gridRow: "5", alignSelf: "start", position: "relative" }}>
      
        <div className="adap-list">

            {/*pre-def*/}
            <button
            className="adap-cell"
            id="versao1"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <img src={preDef}></img>
                    <p aria-hidden="true">Pré-definições de perfil</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </button>

            {/*codigo*/}
           <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <img src={codigo}></img>
                    <p aria-hidden="true">Inserir código de perfil</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </button>

            {/*leitor de ecrã*/}
            <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/leitor-ecra")}
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <img src={leitor}></img>
                    <p aria-hidden="true">Definições de leitor de ecrã </p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </button>

            {/*mudança de cor*/}
             <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <img src={cor}></img>
                    <p aria-hidden="true">Mudança de Cor</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </button>
          
          {/*mudança idioma*/}
            <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <img src={idioma}></img>
                    <p aria-hidden="true">Mudança de Idioma</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </button>

            {/*mudança tipografia*/}
             <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/tipografia")}
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <img src={tipografia}></img>
                    <p aria-hidden="true">Mudança de tipografia</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </button>

        </div>
      </div>
      

      <div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
        <Button text="Começar eleição" icon={seta}  variant="primary"/> 
      </div>
    </div>
  );
}
