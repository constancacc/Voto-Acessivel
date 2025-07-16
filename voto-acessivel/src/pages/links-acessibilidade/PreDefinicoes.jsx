import React from 'react';
import { useNavigate } from 'react-router-dom';  // Faltava para navegar

/* botões */
import seta from "../../assets/ArrowIcon.svg";
import accessibility from "../../assets/accessibility.svg";
import Button from '../../components/Button.jsx';
import CollapseBox from '../../components/Collapse1.jsx';

/* imagens */
import preDef from "../../assets/a11y/pre-def.svg";
import Visuais from "../../assets/a11y/visuais.svg";


import next from "../../assets/collapse-open.svg";

/* partidos */
import partidosData from "../../assets/autarquicas.json";

/* styles */
import '../../styles/intro.css';
import '../../styles/variables.css';
import '../../styles/a11y.css';

export default function PreDefinicoes() {
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
        <h1>Pré-definições de perfil</h1>
       
      </div>

      {/* main */}

      <div style={{ gridColumn: "2 / span 12", gridRow: "4", position: "relative" }}>
            {/*motoras*/}
        <div id="motoras"> 
            <div className='pre-def-title'> 
                <img src={preDef}></img>
                <h3>Parâmetros Motores</h3>
            </div>
            
            <div className='pre-def-content'> 
                <p> As adaptações ativas foram pensadas para responder às necessidades de pessoas com incapacidade motora, nomeadamente: </p>
                <div className="adapt-info">
                <p>Leitor de Ecrã: <strong>ON</strong> </p>
                <p>Tempo de Varrimento: <strong>2.0s</strong>   </p>
                <p>Volume: <strong>50%</strong> </p>
                <p>Cor: <strong>Normal</strong>   </p>
                <p>Idioma: <strong>Português</strong>   </p>
                <p>Tamanho de Texto: <strong>16px</strong> </p>
                </div>
             </div>

            <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/pre-definicoes") }}
            >
                <span className="adap-title">    
                    <p>Selecionar</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>
        </div>
        
            {/*visuais*/}
            <div className='pre-def-title'> 
                <img src={Visuais}></img>
                <h3>Parâmetros Visuais</h3>
            </div>
            
            <div className='pre-def-content'> 
                <p> As adaptações ativas foram pensadas para responder às necessidades de pessoas com incapacidade visual, nomeadamente: </p>
                <div className="adapt-info">
                <p>Leitor de Ecrã: <strong>ON</strong> </p>
                <p>Tempo de Varrimento: <strong>1.5s</strong>   </p>
                <p>Volume: <strong>50%</strong> </p>
                <p>Cor: <strong>Alto Contraste</strong>   </p>
                <p>Idioma: <strong>Português</strong>   </p>
                <p>Tamanho de Texto: <strong>20px</strong> </p>
                </div>
             </div>

            <div
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/pre-definicoes")}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/pre-definicoes") }}
            >
                <span className="adap-title">    
                    <p>Selecionar</p>
                </span>
            
                <img src={next} style={{rotate: "-90deg"}}></img>
            </div>

      </div>

     
    </div>
  );
}


