import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* botões */
import seta from "../../assets/ArrowIcon.svg";
import accessibility from "../../assets/accessibility.svg";
import backBtn from "../../assets/back-btn.svg";
import Button from '../../components/Button.jsx';
import CollapseBox from '../../components/Collapse1.jsx';
import AdaptCell from '../../components/AdaptCell.jsx'
import IconButton from '../../components/IconButton.jsx';

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

  const [tempo, setTempo] = useState(() => {
    return window.tempoVarrimento ?? 2.0;
  });

  const [volume, setVolume] = useState(() => {
  return (window.volumeLeitor ?? 0.5) * 100; // converte para 0-100%
});
  
  useEffect(() => {
    window.volumeLeitor = volume / 100; // valor entre 0.0 e 1.0
  }, [volume]);

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

  // Quando o tempo é alterado, atualizar o window
  const handleTempoChange = (newVal) => {
    setTempo(newVal);
    window.tempoVarrimento = newVal;
  };

  return (
    <div className="grid-container">
      {/* Botão voltar */}
      <div style={{ gridColumn: "2", gridRow: "2", display: "flex", alignItems: "center" }}>
        <IconButton
          icon={backBtn}
          alt="Botão de voltar à página anterior"
          ariaLabel="Voltar à página anterior"
          onClick={() => navigate(-1)}
          className="back-container"
          />
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

        <div className="adap-list" style={{ marginTop: "40px" }}>
          <div
            className={`adap-cell ${window.varrimentoAtivo ? "ativo" : "secondary"}`}
            role="button"
            tabIndex="0"
            onClick={toggleVarrimento}
            style={{ borderRadius: "10px" }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleVarrimento();
              }
            }}
          >
            <span className="adap-title">
              <p aria-hidden="true">{window.varrimentoAtivo ? "Ativo" : "Inativo"}</p>
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
            onConfirm={handleTempoChange}
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

      <div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
              <Button text="Começar eleição" icon={seta}  variant="primary"/> 
            </div>
    </div>
  );
}
