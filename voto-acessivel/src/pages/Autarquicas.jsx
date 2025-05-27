import React from 'react';
/*botões*/
import seta from "../assets/ArrowIcon.svg"
import accessibility from "../assets/accessibility.svg"
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import CollapseBox from '../components/Collapse1.jsx';

/*partidos*/
import partidosData from "../assets/autarquicas.json";

/*styles*/
import '../styles/intro.css';
import '../styles/grid.css';

export default function Autarquicas() {
  return (
    <div className="grid-container">
      <div style={{ gridColumn: "12 / span 2", gridRow: "2"}}>
        <img
            src="/imagens/autarquicas-2021-logo.svg"
            alt="Botão Eleições Legislativas 2025"
            className="btn-autarquicas"
          />

      </div>
      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Autarquicas 2021</h1>
        <h2>Lista de Candidatos</h2>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "4", alignSelf: "start", position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <CollapseBox title="Eleição para a Câmara Municipal">
            <p>
              Nesta eleição, os cidadãos elegem os membros da Câmara Municipal, incluindo o/a <b>Presidente da Câmara</b>, que será responsável 
              pela gestão do município durante os próximos 4 anos.
            </p>

            <p>
              Número de candidatos: <b>{partidosData.length}</b>.
            </p>

            <ol style={{ padding: "0"}}>
              {partidosData.map((partido) => (
                <li key={partido.id}>
                  <p style={{marginBottom: "0"}}> {partido.id}. {partido.nome} ({partido.sigla})</p>
                </li>
              ))}
            </ol>
          </CollapseBox>

          <CollapseBox title="Eleição para a Assembleia Municipal">
            <p>
              Nesta eleição, os cidadãos elegem os membros da <b>Assembleia Municipal</b>, órgão deliberativo 
              do município responsável por fiscalizar a atividade da Câmara Municipal e aprovar planos e orçamentos.
              O mandato dos eleitos terá a duração de <b>4 anos</b>.
            </p>

            <p>
              Número de candidatos: <b>{partidosData.length}</b>.
            </p>

            <ol style={{ padding: "0"}}>
              {partidosData.map((partido) => (
                <li key={partido.id}>
                  <p style={{marginBottom: "0"}}> {partido.id}. {partido.nome} ({partido.sigla})</p>
                </li>
              ))}
            </ol>
          </CollapseBox>

          <CollapseBox title="Eleição para a Assembleia de Freguesia">
            <p>
              Nesta eleição, os cidadãos elegem os membros da <b>Assembleia Municipal</b>, órgão deliberativo 
              do município responsável por fiscalizar a atividade da Câmara Municipal e aprovar planos e orçamentos.
              O mandato dos eleitos terá a duração de <b>4 anos</b>.
            </p>

            <p>
              Número de candidatos: <b>2</b>.
            </p>

           <ol style={{ padding: "0" }}>
            {partidosData.slice(0, 2).map((partido) => (
              <li key={partido.id}>
                <p style={{ marginBottom: "0" }}>
                  {partido.id}. {partido.nome} ({partido.sigla})
                </p>
              </li>
            ))}
          </ol>

          </CollapseBox>

        </div>
      </div>

      <div style={{gridColumn: "9 /span 5", gridRow: "11", justifySelf: "end"}}>
        <Button text="Começar eleição" icon={seta}  variant="primary"/> 
      </div>

      <div style={{ gridColumn: "13 / span 1", gridRow: "12", alignSelf: "end", justifySelf: "end" }}>
        <IconButton alt="botão de definições de acessibilidade" icon={accessibility} />
      </div>
    </div>
  );
}
