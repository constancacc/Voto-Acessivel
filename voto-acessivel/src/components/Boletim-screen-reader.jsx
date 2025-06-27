import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import partidosData from "../assets/legislativas.json";
import "../styles/boletim-screen-reader.css";
import seta from "../assets/ArrowIcon.svg";

export default function BoletimVoto() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const partido = partidosData[index];

  const irParaAnterior = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? partidosData.length - 1 : prevIndex - 1
    );
  };

  const irParaSeguinte = () => {
    setIndex((prevIndex) =>
      prevIndex === partidosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selecionarVoto = () => {
    // Aqui navega para a página de confirmação e passa o partido selecionado
    navigate('/confirmacao', { state: { partido: partido.id } });
  };

  return (
    <div className="boletim-wrapper">
      <div
        className="boletim-card"
        onClick={selecionarVoto}
        style={{ cursor: "pointer" }}
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

        <div className="boletim-botoes">
          <button
            className="custom-button secondary partido-anterior"
            onClick={irParaAnterior}
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
            className="custom-button secondary partido-anterior"
            onClick={irParaSeguinte}
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
