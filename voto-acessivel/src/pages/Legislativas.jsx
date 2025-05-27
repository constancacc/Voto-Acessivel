import React from 'react';
/*botões*/
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import CollapseBox from '../components/Collapse1.jsx';

/*partidos*/
import partidosData from "../assets/legislativas.json";

/*styles*/
import '../styles/intro.css';
import '../styles/grid.css';

export default function Legislativas() {
  return (
    <div className="grid-container">
      <div style={{ gridColumn: "12 / span 2", gridRow: "2"}}>
        <img
            src="/imagens/legislativas-2025-logo.svg"
            alt="Botão Eleições Legislativas 2025"
            className="btn-legislativas"
          />

      </div>
      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Legislativas 2025</h1>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "4", alignSelf: "start", position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <CollapseBox title="Sobre esta Eleição">
            <p>
              Nesta eleição, os cidadãos elegem os <b>230 deputados à Assembleia da República</b>, que terão a responsabilidade de representar o país,
              elaborar leis e fiscalizar a ação do Governo durante os próximos <b>4 anos</b>. O resultado determinará também quem será
              convidado a formar Governo e assumir o cargo de <b>Primeiro-Ministro de Portugal</b>.
            </p>
            <p>
              Número de candidatos: <b>{partidosData.length}</b>.
            </p>
          </CollapseBox>

          <CollapseBox title="Lista de Candidatos">
            <ol>
              {partidosData.map((partido) => (
                <li key={partido.id}>
                  <p style={{marginBottom: "0"}}>{partido.nome} ({partido.sigla})</p>
                </li>
              ))}
            </ol>
          </CollapseBox>
        </div>
      </div>

      <div style={{gridColumn: "9 /span 5", gridRow: "11", justifySelf: "end"}}>
        <Button text="Iniciar boletim" icon={seta}  variant="primary"/> 
      </div>

      <div style={{ gridColumn: "13 / span 1", gridRow: "12", alignSelf: "end", justifySelf: "end" }}>
        <IconButton alt="botão de definições de acessibilidade" icon={accessibility} />
      </div>
    </div>
  );
}
