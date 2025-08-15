import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* styles */
import '../../styles/intro.css';
import '../../styles/variables.css';
import '../../styles/a11y.css';

export default function PorImplementar() {
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
        <button onClick={() => navigate(-1)} className="back-container" tabIndex={0} aria-label="Voltar à página anterior">
          <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Título */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Função por Implementar</h1>
      </div>

      {/* Conteúdo principal */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "4", position: "relative" }}>
          <p>Função que não será testada nesta versão da plataforma, por favor regresse à página anterior </p>
    </div>
    </div>
  );
}
