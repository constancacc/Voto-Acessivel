import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*botões*/
import seta from "../assets/ArrowIcon.svg"
import backBtn from "../assets/back-btn.svg";
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import BoletimVoto from '../components/Boletim-screen-reader.jsx';

/*styles*/
import '../styles/intro.css';
import '../styles/variables.css';

export default function PagBoletim() {
  const navigate = useNavigate();
  const [partidoAtual, setPartidoAtual] = useState(null);

    const handleBack = () => {
      navigate(-1);
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
        <BoletimVoto
          onSelecionarVoto={(partidoId) => {
            navigate('/confirmacao', { state: { partido: partidoId } });
          }}
          onChangePartido={(partido) => setPartidoAtual(partido)}
        />
      </div>

      {/*footer*/}
      <div style={{gridColumn: "2/ span 1", gridRow: "12", alignSelf: "end"}}>
        <IconButton ariaLabel="botão de definições de acessibilidade" icon={accessibility}/> 
      </div>

      <div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
        <Button text="Selecionar" variant="primary" icon={seta}
          onClick={() => {
          if (partidoAtual) {
            navigate('/confirmacao', { state: { partido: partidoAtual.id } });
          }
        }}/> 
      </div>
      

    </div>
  );
}