import React, { useState } from 'react';

/*botões*/
import seta from "../assets/ArrowIcon.svg";
import accessibility from "../assets/accessibility.svg";
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import CollapseBox from '../components/Collapse1.jsx';

/*partidos*/
import partidosData from "../assets/legislativas.json";

/*styles*/
import '../styles/intro.css';
import '../styles/variables.css';

export default function Legislativas() {
  const [openIndex, setOpenIndex] = useState(null);

  // Função para abrir ou fechar um CollapseBox
  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="grid-container">
      <div style={{ gridColumn: "11 / span 3", gridRow: "2" }}>
        <img
          src="/imagens/legislativas-2025-logo.svg"
          alt="Botão Eleições Legislativas 2025"
          className="btn-legislativas"
        />
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "3" }}>
        <h1 tabIndex={0} aria-label="Legislativas 2025">Legislativas 2025</h1>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "4", alignSelf: "start", position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <CollapseBox
            title="Sobre esta Eleição"
            aria-label="Clicar para saber mais sobre as eleições legislativas de 2025"
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
            tabIndex={0}
          >
            <p style={{ marginLeft: "3.5rem" }}>
              Nesta eleição, os cidadãos elegem os <b>230 deputados à Assembleia da República</b>, que terão a responsabilidade de representar o país,
              elaborar leis e fiscalizar a ação do Governo durante os próximos <b>4 anos</b>. O resultado determinará também quem será
              convidado a formar Governo e assumir o cargo de <b>Primeiro-Ministro de Portugal</b>.
            </p>
            <p style={{ marginLeft: "3.5rem" }}>
              Número de candidatos: <b>{partidosData.length}</b>.
            </p>
          </CollapseBox>

          <CollapseBox
            title="Lista de Candidatos"
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
            aria-label="Clicar para saber os candidatos e opções de voto"
            tabIndex={0}
          >
            <ol style={{ marginLeft: "2.5rem" }}>
              {partidosData.map((partido) => (
                <li key={partido.id} style={{listStyleType: "none"}}>
                  {partido.id}. {partido.nome} ({partido.sigla})
                </li>
              ))} 
            </ol>
          </CollapseBox>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end" }}>
        <Button text="Iniciar boletim" variant="primary" icon={seta} />
      </div>

      <div style={{ gridColumn: "2/ span 1", gridRow: "12", alignSelf: "end" }}>
        <IconButton alt="botão de definições de acessibilidade" icon={accessibility} />
      </div>
    </div>
  );
}
