import React from 'react';
import { useNavigate } from 'react-router-dom';
import accessibility from "../assets/accessibility.svg";
import IconButton from '../components/IconButton.jsx';
import '../styles/intro.css';
import '../styles/grid.css';
import '../styles/eleicoes.css';

export default function Eleicao() {
  const navigate = useNavigate(); // hook do React Router

  return (
    <div className="grid-container">
      <div style={{ gridColumn: "2 / span 12", gridRow: "3 / span 2" }}>
        <h1>Escolha a eleição a preencher</h1>
      </div>

      <div style={{ gridColumn: "5 / span 6", gridRow: "5" }}>
        <button className="election-btn" onClick={() => navigate("/legislativas")}>
          <img
            src="/imagens/legislativas-2025-logo.svg"
            alt="Botão Eleições Legislativas 2025"
            className="btn-legislativas"
          />
        </button>
      </div>

      <div style={{ gridColumn: "5 / span 6", gridRow: "7 / span 2" }}>
        <button className="election-btn" onClick={() => navigate("/autarquicas")}>
          <img
            src="/imagens/autarquicas-2021-logo.svg"
            alt="Botão Eleições Autárquicas 2021"
            className="btn-autarquicas"
          />
        </button>
      </div>

       {/*footer*/}
                <div style={{gridColumn: "2/ span 1", gridRow: "12", alignSelf: "end"}}>
                <IconButton alt="botão de definições de acessibilidade" icon={accessibility}/> 
                </div>
    </div>
  );
}
