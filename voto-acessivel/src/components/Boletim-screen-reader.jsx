import React, { useState } from "react";
import partidosData from "../assets/legislativas.json";

import "../styles/boletim-screen-reader.css";
import rightArrow from "../assets/right-circle-2.svg";
import leftArrow from "../assets/left-circle-2.svg";
import Button from "../components/Button"

export default function BoletimVoto() {
  const [index, setIndex] = useState(0);
  const [votoSelecionado, setVotoSelecionado] = useState(null);

  const partido = partidosData[index];

  const irParaAnterior = () => {
    if (index > 0) setIndex(index - 1);
  };

  const irParaSeguinte = () => {
    if (index < partidosData.length - 1) setIndex(index + 1);
  };

  const selecionarVoto = () => {
    setVotoSelecionado(partido.id);
    alert(`Voto selecionado: ${partido.nome}`);
  };

  return (
    <div className="boletim-wrapper">
      <div className="boletim-card">
        <div className="boletim-content">
          <div className="boletim-nome">{partido.id}. {partido.nome}</div>

          <div className="boletim-info">
            <div className="boletim-sigla">{partido.sigla}</div>

            <img
              className="boletim-logo"
              alt={`Símbolo eleitoral de ${partido.nome}`}
              src={partido.imagem}
            />

            <div className={`boletim-checkbox ${ votoSelecionado === partido.id ? "selecionado" : ""}`} />

          </div>
        </div>
      </div>

      <div className="boletim-botoes">
        <Button text="Partido Anterior" icon={leftArrow} variant="secondary" onClick={irParaAnterior} />
        <Button text="Partido Seguinte" icon={rightArrow} variant="secondary" onClick={irParaSeguinte} />
      </div>

      <div className="boletim-indicadores">
        <p>{index > 0 ? `Anterior: ${partidosData[index - 1].nome}` : "Início do boletim"}</p>
        <p>{index < partidosData.length - 1 ? `Seguinte: ${partidosData[index + 1].nome}` : "Fim do boletim"}</p>
      </div>

    </div>
  );
}
