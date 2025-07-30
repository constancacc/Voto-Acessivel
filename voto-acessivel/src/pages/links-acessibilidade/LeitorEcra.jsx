
import React, { useState } from 'react'; // <- Importa useStatexs
import { useNavigate } from 'react-router-dom';  // Faltava para navegar

/* botões */
import seta from "../../assets/ArrowIcon.svg";
import accessibility from "../../assets/accessibility.svg";
import Button from '../../components/Button.jsx';
import CollapseBox from '../../components/Collapse1.jsx';
import AdaptCell from '../../components/AdaptCell.jsx'


/* imagens */
import varrimento from "../../assets/a11y/varrimento.svg";

import next from "../../assets/collapse-open.svg";

/* partidos */
import partidosData from "../../assets/autarquicas.json";

/* styles */
import '../../styles/intro.css';
import '../../styles/variables.css';
import '../../styles/a11y.css';

export default function LeitorEcra() {
  const navigate = useNavigate();
  const [tempo, setTempo] = useState(2.0); // <- Valor inicial de 2.0 segundos
  const [volume, setVolume] = useState(50.0); // Valor inicial em porcentagem


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
        <h1>Definições de Leitor de Ecrã</h1>
       
      </div>

      {/* main */}

      <div style={{ gridColumn: "2 / span 12", gridRow: "4", position: "relative" }}>
        <div id="motoras"> 
            <div className='pre-def-title'> 
                <img src={varrimento}></img>
                <h3>Varrimento</h3>
            </div>
            
            <div className='pre-def-content'> 
                <p> Estas opções dizem respeito à ativação da opção de varrimento e do seu tempo entre células. </p>
             </div>

            <div style={{ position: "absolute" }} className="adap-list">
            <div
            className="adap-cell ativo"
            role="button"
            tabIndex="0"
            >
                <span className="adap-title">    
                    <p>Ativar</p>
                </span>
            
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                <path d="M24 1.5L9.89353 18.5L2 11.0718" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
            </div>

              <AdaptCell
                title="Tempo de Varrimento"
                value={`${tempo.toFixed(1)}s`}
                icon={next}
                editable={true}
                onConfirm={(newVal) => setTempo(newVal)}
              />

              <AdaptCell
                title="Volume"
                value={`${volume.toFixed(1)}s`}
                icon={next}
                editable={true}
                onConfirm={(newVal) => setVolume(newVal)}
              />

            </div>
        </div>

      </div>
      
    {/* Footer */}
      <div style={{ gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end" }}>
        <Button text="Iniciar boletim" variant="primary" icon={seta} />
      </div>
     
    </div>
    
  );
}


