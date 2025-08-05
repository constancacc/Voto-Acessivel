import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  // Garantir que window.varrimentoAtivo existe
  if (typeof window.varrimentoAtivo === "undefined") {
    window.varrimentoAtivo = false;
  }

  // Estado local sincronizado com window
  const [varrimentoAtivo, setVarrimentoAtivo] = useState(window.varrimentoAtivo);
  const [tempo, setTempo] = useState(2.0);
  const [volume, setVolume] = useState(50.0);

  // Efeito para escutar alterações externas (se algum outro componente mudar o window.varrimentoAtivo)
  useEffect(() => {
    const handleChange = () => {
      setVarrimentoAtivo(window.varrimentoAtivo);
    };
    window.addEventListener("varrimentoChange", handleChange);
    return () => {
      window.removeEventListener("varrimentoChange", handleChange);
    };
  }, []);

  const toggleVarrimento = () => {
    window.varrimentoAtivo = !window.varrimentoAtivo;
    console.log("Varrimento está agora", window.varrimentoAtivo ? "ATIVO" : "DESATIVADO");
    window.dispatchEvent(new Event("varrimentoChange"));
  };

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

      {/* Título */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Definições de Leitor de Ecrã</h1>
      </div>

      {/* Conteúdo principal */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "4", position: "relative" }}>
        <div className='pre-def-title'> 
          <img src={varrimento} alt="Ícone de varrimento" />
          <h3>Varrimento</h3>
        </div>
        
        <div className='pre-def-content'> 
          <p>Estas opções dizem respeito à ativação da opção de varrimento e do seu tempo entre células.</p>
        </div>

        <div className="adap-list">
          <div
            className={`adap-cell ${window.varrimentoAtivo ? "ativo" : "secondary"}`}
            role="button"
            tabIndex="0"
            onClick={toggleVarrimento}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleVarrimento();
              }
            }}
          >
            <span className="adap-title">
              <p>{window.varrimentoAtivo ? "Ativo" : "Inativo"}</p>
            </span>

            {window.varrimentoAtivo && (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                <path
                  d="M24 1.5L9.89353 18.5L2 11.0718"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Tempo */}
          <AdaptCell
            title="Tempo de Varrimento"
            value={`${tempo.toFixed(1)}s`}
            icon={next}
            editable={true}
            onConfirm={(newVal) => setTempo(newVal)}
          />

          {/* Volume */}
          <AdaptCell
            title="Volume"
            value={`${volume.toFixed(1)}%`}
            icon={next}
            editable={true}
            onConfirm={(newVal) => setVolume(newVal)}
          />
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end" }}>
        <Button text="Iniciar boletim" variant="primary" icon={seta} />
      </div>
    </div>
  );
}
