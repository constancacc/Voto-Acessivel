import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import seta from "../../assets/ArrowIcon.svg";
import tipo from "../../assets/a11y/tipografia.svg";
import next from "../../assets/collapse-open.svg";
import backBtn from "../../assets/back-btn.svg";

import Button from '../../components/Button.jsx';
import AdaptCell from '../../components/AdaptCell.jsx';
import IconButton from '../../components/IconButton.jsx';

import '../../styles/intro.css';
import '../../styles/variables.css';
import '../../styles/a11y.css';

export default function Tipografia() {
  const navigate = useNavigate();

  const [tipografia, setTipografia] = useState(() => {
    const savedValue = localStorage.getItem('tipografia');
    return savedValue ? Number(savedValue) : 16;
  });

  const [fontClass, setFontClass] = useState(() => {
    const savedFont = localStorage.getItem('fontClass');
    return savedFont || "font-atkinson";
  });

  const FONT_SCALING = {
    "font-atkinson": 1,
    "font-helvetica": 28.08 / 30,
    "font-dyslexic": 26.5 / 30
  };

  useEffect(() => {
    localStorage.setItem('tipografia', tipografia);
  }, [tipografia]);

  useEffect(() => {
    localStorage.setItem('fontClass', fontClass);
  }, [fontClass]);

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("font-helvetica", "font-dyslexic", "font-atkinson");
    html.classList.add(fontClass);

    const scale = FONT_SCALING[fontClass] || 1;
    const scaledSize = tipografia * scale;

    html.style.setProperty('--font-base-size', `${scaledSize}px`);
  }, [fontClass, tipografia]);

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

      <div style={{ gridColumn: "2 / span 12", gridRow: "3" }}>
        <h1 tabIndex={0} >Mudanças de Tipografia</h1>
      </div>

      {/* Conteúdo principal */}
      <div style={{ gridColumn: "2 / span 12", gridRow: "4 / span 8" }}>
        <div>
          <div className='pre-def-title'>
            <img src={tipo} alt="Tipo" />
            <h3 tabIndex={0}>Visualização Tipográfica</h3>
          </div>

          <div id="text-visualization-box">
            <p aria-hidden="true">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor, mi sit amet aliquet convallis,
              magna enim egestas tortor, vel laoreet lacus nisi porttitor augue. Sed eu ornare est. Fusce placerat non
              lacus quis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Praesent pretium libero mi, ac ultrices diam pulvinar id. Phasellus rutrum magna vitae sem efficitur,
              eget ullamcorper sapien efficitur. Duis sed hendrerit turpis.
            </p>
          </div>
        </div>

        <div className='pre-def-title'>
          <img src={tipo} alt="Tipo" />
          <h3 tabIndex={0}>Definir Tipografia</h3>
        </div>

        <AdaptCell
          title="Tamanho de texto"
          value={`${tipografia.toFixed(1)}px`}
          icon={next}
          editable={true}
          onConfirm={(newVal) => {
            const parsed = Number(newVal);
            if (parsed >= 12 && parsed <= 24) {
              setTipografia(parsed);
            } else {
              alert("O tamanho deve estar entre 12px e 24px.");
            } 
          }}
        />

        {/* Botões de escolha tipográfica */}
        <div className="type-btn-box">
          <button
            className={`custom-button secondary ${fontClass === "font-helvetica" ? "ativo" : ""}`}
            onClick={() => setFontClass("font-helvetica")}
            aria-label="Alterar para Helvetica"
            tabIndex={0}
          >
            <p aria-hidden="true" id="helvetica">Aa</p>
            <p aria-hidden="true" >Helvetica</p>
          </button>

          <button
            className={`custom-button secondary ${fontClass === "font-atkinson" ? "ativo" : ""}`}
            onClick={() => setFontClass("font-atkinson")}
            aria-label="Alterar para Atkinson Hyperlegible"
            tabIndex={0}
          >
            <p aria-hidden="true" id="atkinson">Aa</p>
            <p aria-hidden="true" >Atkinson <br /> Hyperlegible</p>
          </button>

          <button
            className={`custom-button secondary ${fontClass === "font-dyslexic" ? "ativo" : ""}`}
            onClick={() => setFontClass("font-dyslexic")}
            aria-label="Alterar para Open Dyslexic"
            tabIndex={0}
          >
            <p aria-hidden="true" id="dyslexic">Aa</p>
            <p aria-hidden="true">Open <br /> Dyslexic</p>
          </button>
        </div>
      </div>

      {/* Footer */}
<div style={{gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end"}}>
        <Button text="Começar eleição" icon={seta}  variant="primary"/> 
      </div>
    </div>  
  );
}
