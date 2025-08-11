import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import partidosData from "../assets/legislativas.json";
import "../styles/boletim-screen-reader.css";
import seta from "../assets/ArrowIcon.svg";

export default function BoletimVoto() {
  const [index, setIndex] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(10); // tempo em segundos para o próximo partido
  const navigate = useNavigate();
  const partidoRef = useRef(null);

  const partido = partidosData[index];

  const irParaAnterior = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? partidosData.length - 1 : prevIndex - 1
    );
    setTempoRestante(10); // resetar timer ao navegar manualmente
  };

  const irParaSeguinte = () => {
    setIndex((prevIndex) =>
      prevIndex === partidosData.length - 1 ? 0 : prevIndex + 1
    );
    setTempoRestante(10); // resetar timer ao navegar automaticamente
  };

  const selecionarVoto = () => {
    navigate('/confirmacao', { state: { partido: partido.id } });
  };

  // Contador regressivo que aciona avanço automático
  useEffect(() => {
    if (tempoRestante === 0) {
      irParaSeguinte();
      return;
    }
    const interval = setInterval(() => {
      setTempoRestante((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tempoRestante]);

  // Leitura do partido atual para leitor de ecrã
  useEffect(() => {
      if (window.varrimentoAtivo && window.speakText && partido) {
        const texto = ` ${partido.id}, ${partido.nome},  ${partido.sigla}, clique para selecionar`;
        window.speakText(texto, partidoRef.current);
      
      }
  }, [partido]);

  return (
    <div className="boletim-wrapper">
      <div
        className="boletim-card"
        onClick={selecionarVoto}
        style={{ cursor: "pointer" }}
        tabIndex={0}
        ref={partidoRef}
      >
        <div className="boletim-content">
          <div className="boletim-nome">
            {partido.id}. {partido.nome}
          </div>

          <div className="boletim-info">
            <div className="boletim-sigla">{partido.sigla}</div>
            <img
              className="boletim-logo"
              alt={`Símbolo eleitoral de ${partido.nome}`}
              src={partido.imagem}
            />
            <div className="boletim-checkbox" />
          </div>
        </div>
      </div>

      <div className="boletim-botoes-container">
        <div className="boletim-indicador">
          <p className="partido-indicador">
            {index + 1} de {partidosData.length} candidatos
          </p>
        </div>
          {/* Indicador do tempo restante para o próximo partido */}
          <div className="partido-indicador" aria-live="polite" style={{ marginTop: "1rem", fontWeight: '600' }}>
            Faltam {tempoRestante}s para o próximo candidato
          </div>

        <div className="boletim-botoes">
          <button
            className="screen-reader-btn secondary partido-anterior"
            onClick={irParaAnterior}
            tabIndex={0}
            
          >
            <div className="custom-button-content-2">
              <img
                src={seta}
                alt="Anterior"
                style={{ transform: "scaleX(-1)" }}
              />
              <span className="custom-button-text" style={{ fontWeight: 700 }}>
                Partido Anterior
              </span>
            </div>
            <p className="button-leg">
              {`${partidosData[(index - 1 + partidosData.length) % partidosData.length].nome}`}
            </p>
          </button>

          <button
            className="screen-reader-btn secondary partido-anterior"
            onClick={irParaSeguinte}
            tabIndex={0}
          >
            <div className="custom-button-content-2">
              <img src={seta} alt="Seguinte" />
              <span className="custom-button-text" style={{ fontWeight: 700 }}>
                Partido Seguinte
              </span>
            </div>
            <p className="button-leg">
              {`${partidosData[(index + 1) % partidosData.length].nome}`}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
