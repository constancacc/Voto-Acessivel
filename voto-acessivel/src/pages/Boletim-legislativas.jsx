import React from 'react';
import { useNavigate } from 'react-router-dom';

/*botões*/
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import BoletimVoto from '../components/Boletim-screen-reader.jsx';

/*styles*/
import '../styles/intro.css';
import '../styles/variables.css';

export default function Boletim() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior no histórico
  };

  // Função que recebe o partido selecionado e navega para confirmação
  const handleSelecionarVoto = (partidoSelecionado) => {
    // Vai para a página de confirmação, passando o partido no state
    navigate('/confirmacao', { state: { partido: partidoSelecionado } });
  };

  return (
    <div className="grid-container">
      <div style={{ gridColumn: "2", gridRow: "2",  display: "flex", justifyContent: "center", alignItems: "center"}}>

        <button onClick={handleBack} className="back-container"  tabIndex={0} aria-label="Voltar à página anterior" >
          <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
      <div style={{ gridColumn: "11 / span 3", gridRow: "2" }}>
        <img
            src="/imagens/legislativas-2025-logo.svg"
            alt="Botão Eleições Legislativas 2025"
            className="btn-legislativas"
          />
      </div>
      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Eleição para a Assembleia Nacional</h1>
        <h2>Boletim de Voto</h2>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "6"}}>
        {/* Passa a função para tratar voto selecionado */}
        <BoletimVoto onSelecionarVoto={handleSelecionarVoto} />
      </div>

      {/*footer*/}
      <div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
        <Button text="Selecionar" variant="primary" icon={seta}/> 
      </div>
      
      <div style={{gridColumn: "2/ span 1", gridRow: "12", alignSelf: "end"}}>
        <IconButton alt="botão de definições de acessibilidade" icon={accessibility}/> 
      </div>
    </div>
  );
}