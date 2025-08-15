import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import seta from "../../assets/ArrowIcon.svg";
import accessibility from "../../assets/accessibility.svg";
import Button from '../../components/Button.jsx';
import CollapseBox from '../../components/Collapse1.jsx';
import preDef from "../../assets/a11y/pre-def.svg";
import Visuais from "../../assets/a11y/visuais.svg";
import next from "../../assets/collapse-open.svg";

export default function PreDefinicoes() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
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
        <h1>Pré-definições de perfil</h1>
      </div>

      {/* Conteúdo principal */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "4", position: "relative" }}>

        {/* Motoras */}
        <div id="motoras"> 
          <div className='pre-def-title'> 
            <img src={preDef} alt="Ícone de parâmetros motores"/>
            <h3>Parâmetros Motores</h3>
          </div>
          <p style={{ marginBottom: "1rem" }}>As adaptações ativas foram pensadas para responder às necessidades de pessoas com incapacidade motora.</p>
          
          <CollapseBox
            title="parâmetros motores"
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
            tabIndex={0}
            aria-label="Informações sobre o leitor de ecrã"
          >
            <div className="adapt-info">
              <span aria-label="Leitor de Ecrã ligado">Leitor de Ecrã: <strong>Ativo</strong></span>
              <p aria-label="Tempo de varrimento de 2 segundos">Tempo de Varrimento: <strong>2s</strong></p>
              <p aria-label="Volume de 50 por cento">Volume: <strong>50%</strong></p>
              <p aria-label="Cor normal">Cor: <strong>Normal</strong></p>
              <p aria-label="Idioma português">Idioma: <strong>Português</strong></p>
              <p aria-label="Tamanho de texto 16 pixels">Tamanho de Texto: <strong>16px</strong></p>
            </div>
          </CollapseBox>

          <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/boletim-legislativas")}
            role="button"
            tabIndex={0}
            style={{ marginTop: "1rem" }}
          >
            <span className="adap-title">    
              <p>Selecionar</p>
            </span>
            <img src={next} style={{rotate: "-90deg"}} alt="seta para selecionar"/>
          </button>
        </div>

        {/* Visuais */}
        <div id="visuais">
          <div className='pre-def-title'> 
            <img src={Visuais} alt="Ícone de parâmetros visuais"/>
            <h3>Parâmetros Visuais</h3>
          </div>
          <p style={{ marginBottom: "1rem" }}>As adaptações ativas foram pensadas para responder às necessidades de pessoas com incapacidade visual.</p>
          
          <CollapseBox
            title="parâmetros visuais"
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
            tabIndex={0}
            aria-label="Informações sobre o leitor de ecrã"
          >
            <div className="adapt-info" aria-hidden="true">
              <p aria-label="Leitor de Ecrã ligado">Leitor de Ecrã: <strong>Ativo</strong></p>
              <p aria-label="Tempo de Varrimento de 1.5 segundos">Tempo de Varrimento: <strong>1.5s</strong></p>
              <p aria-label="Volume em 50%">Volume: <strong>50%</strong></p>
              <p aria-label="Cor em modo de alto contraste">Cor: <strong>Alto Contraste</strong></p>
              <p aria-label="Idioma Português">Idioma: <strong>Português</strong></p>
              <p aria-label="Tamanho de Texto 20 pixeis">Tamanho de Texto: <strong>20px</strong></p>
            </div>
          </CollapseBox>

          <button
            className="adap-cell"
            id="versao2"
            onClick={() => navigate("/boletim-legislativas")}
            role="button"
            tabIndex={0}
             style={{ marginTop: "1rem" }}
          >
            <span className="adap-title">    
              <p>Selecionar</p>
            </span>
            <img src={next} style={{rotate: "-90deg"}} alt="seta para selecionar"/>
          </button>

        </div>
      </div>
    </div>
  );
}
