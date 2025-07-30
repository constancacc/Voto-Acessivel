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
        <button onClick={() => navigate(-1)} className="back-container" aria-label="Voltar à página anterior">
          <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Definições de Acessibilidade</h1>
        <h2>Adaptar a plataforma às suas necessidades</h2>
      </div>

     {/*botões de adaptação*/}

      <div style={{ gridColumn: "2 / span 12", gridRow: "4", alignSelf: "start", position: "relative" }}>
      
        <div style={{ position: "absolute" }} className="adap-list">

            {/*pre-def*/}
            <div
            className="adap-cell"
            id="versao1"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/pre-definicoes") }}
            >
                <span className="adap-title">    
                    <img src={preDef}></img>
                    <p>Pré-definições de perfil</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>

            {/*codigo*/}
           <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/pre-definicoes") }}
            >
                <span className="adap-title">    
                    <img src={codigo}></img>
                    <p>Inserir código de perfil</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>

            {/*leitor de ecrã*/}
            <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/leitor-ecra")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/leitor-ecra") }}
            >
                <span className="adap-title">    
                    <img src={leitor}></img>
                    <p>Definições de leitor de ecrã </p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>

            {/*mudança de cor*/}
             <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/pre-definicoes") }}
            >
                <span className="adap-title">    
                    <img src={cor}></img>
                    <p>Mudança de Cor</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>
          
          {/*mudança idioma*/}
            <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/pre-definicoes") }}
            >
                <span className="adap-title">    
                    <img src={idioma}></img>
                    <p>Mudança de Idioma</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>

            {/*mudança tipografia*/}
             <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/tipografia")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/tipografia") }}
            >
                <span className="adap-title">    
                    <img src={tipografia}></img>
                    <p>Mudança de tipografia</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>

        </div>
      </div>
      

      <div style={{gridColumn: "9 /span 5", gridRow: "11", justifySelf: "end"}}>
        <Button text="Começar eleição" icon={seta}  variant="primary"/> 
      </div>
    </div>
  );
}
