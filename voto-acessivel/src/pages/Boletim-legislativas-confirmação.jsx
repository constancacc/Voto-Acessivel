import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/*botões*/
import seta from "../assets/ArrowIcon.svg";
import x from "../assets/X circle.svg";
import accessibility from "../assets/accessibility.svg";
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';

/*partidos*/
import partidosData from "../assets/legislativas.json";

/*styles*/
import '../styles/intro.css';
import '../styles/variables.css';
import '../styles/boletim-screen-reader.css'; // importante para reutilizar a célula

export default function Confirmacao() {

  const location = useLocation();
  const navigate = useNavigate();
  const partidoSelecionado = location.state?.partido;

  if (!partidoSelecionado) {
    return (
      <div className="grid-container">
       
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  const partido = partidosData.find(p => p.id === partidoSelecionado);

  const handleConfirmar = () => {
    navigate('/impressao');
    // Aqui podes redirecionar ou guardar no backend
  };

  const handleAnular = () => {
    navigate('/boletim-legislativas'); // volta ao boletim para escolher novamente
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

      {/* Logo */}
      <div style={{ gridColumn: "11 / span 3", gridRow: "2" }}>
        <img
          src="/imagens/legislativas-2025-logo.svg"
          alt="Logo Eleições Legislativas 2025"
          className="btn-legislativas"
        />
      </div>

      {/* Título */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "3" }}>
        <h1>Eleição para a Assembleia Nacional</h1>
        <h2>Confirmação do Voto</h2>
      </div>

      {/* Célula do partido */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "6", display: "flex", justifyContent: "center" }}>
        <div className="boletim-card" tabIndex={0} style={{ cursor: "default" }}>
          <div className="boletim-content">
            <div className="boletim-nome">{partido.id}. {partido.nome}</div>
            <div className="boletim-info">
              <div className="boletim-sigla">{partido.sigla}</div>
              <img
                className="boletim-logo"
                alt={`Símbolo eleitoral de ${partido.nome}`}
                src={partido.imagem}
              />

             <div className="boletim-checkbox selecionado">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#004682" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão acessibilidade */}
      <div style={{ gridColumn: "2 / span 1", gridRow: "12", alignSelf: "end" }}>
        <IconButton ariaLabel="botão de definições de acessibilidade" icon={accessibility} />
      </div>

      {/* Botões de confirmação e anulação */}
      <div style={{ gridColumn: "4 / span 5", gridRow: "12", justifySelf: "end", display: "flex", gap: "1rem" }}>
        <Button text="Anular Voto" variant="secondary" icon={x} onClick={handleAnular} />
      </div>

      <div style={{ gridColumn: "9 / span 5", gridRow: "12", justifySelf: "end", display: "flex", gap: "1rem" }}>
        <Button text="Confirmar Voto" variant="primary" icon={seta} onClick={handleConfirmar} />
      </div>

      
    </div>
  );
}
