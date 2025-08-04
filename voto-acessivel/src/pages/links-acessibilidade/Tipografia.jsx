
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Faltava para navegar

/* botões */
import seta from "../../assets/ArrowIcon.svg";
import accessibility from "../../assets/accessibility.svg";
import Button from '../../components/Button.jsx';
import CollapseBox from '../../components/Collapse1.jsx';
import AdaptCell from '../../components/AdaptCell.jsx'


/* imagens */
import tipo from "../../assets/a11y/tipografia.svg";


import next from "../../assets/collapse-open.svg";

/* partidos */
import partidosData from "../../assets/autarquicas.json";

/* styles */
import '../../styles/intro.css';
import '../../styles/variables.css';
import '../../styles/a11y.css';

export default function Tipografia() {
  const navigate = useNavigate();

  const [tipografia, setTipografia] = useState(() => {
    // tenta buscar o valor guardado, se não existir, usa 16
    const savedValue = localStorage.getItem('tipografia');
    return savedValue ? Number(savedValue) : 16;
  });

  const [fontClass, setFontClass] = useState(() => {
    const savedFont = localStorage.getItem('fontClass');
    return savedFont || "";  // "" para Atkinson por exemplo
  });

  useEffect(() => {
    // Guardar sempre que tipografia muda
    localStorage.setItem('tipografia', tipografia);
  }, [tipografia]);

    useEffect(() => {
    localStorage.setItem('fontClass', fontClass);
  }, [fontClass]);


    // 👇 Aqui vai o useEffect
  useEffect(() => {
    const root = document.documentElement;

    // Limpar classes anteriores
    root.classList.remove("font-helvetica", "font-dyslexic", "font-atkinson");

    // Aplicar nova fonte (só se houver)
    if (fontClass) {
      root.classList.add(fontClass);
    } else {
    // Se for "", define como atkinson por padrão
    root.classList.add("font-atkinson");
  }

    // Aplicar novo tamanho
    root.style.setProperty('--font-base-size', `${tipografia}px`);
  }, [fontClass, tipografia]); // <- corre sempre que uma destas mudar

  

  return (
    <div className="grid-container">
      {/* Botão voltar */}
      <div style={{ gridColumn: "2", gridRow: "2", display: "flex", alignItems: "center" }}>
        <button onClick={() => navigate(-1)} className="back-container" aria-label="Voltar à página anterior">
         <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "3"}}>
        <h1>Mudanças de Tipografia</h1>
       
      </div>

      {/* main */}

      <div style={{ gridColumn: "2 / span 12", gridRow: "4 / span 8" }}>
         <div> 
            <div className='pre-def-title'> 
              <img src={tipo}></img>
              <h3>Visualização Tipográfica</h3>
          </div>
            <div id="text-visualization-box">
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor, 
                mi sit amet aliquet convallis, magna enim egestas tortor, vel laoreet lacus 
                nisi porttitor augue. Sed eu ornare est. Fusce placerat non lacus quis auctor. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                
                Praesent pretium libero mi, ac ultrices diam pulvinar id. Phasellus rutrum magna vitae sem efficitur, e
                get ullamcorper sapien efficitur. Duis sed hendrerit turpis.</p>
            </div>
            
          </div>

          <div className='pre-def-title'> 
            <img src={tipo}></img>
            <h3>Definições</h3>
          </div>

          <AdaptCell
            title="Tamanho da tipografia"
            value={`${tipografia.toFixed(1)}px`}
            icon={next}
            editable={true}
            onConfirm={(newVal) => {
              const parsed = Number(newVal);
              if (parsed >= 16 && parsed <= 24) {
                setTipografia(parsed);
              } else {
                alert("O tamanho deve estar entre 12px e 24px.");
              }
            }}
          />

          <div className="type-btn-box">
            <button className="custom-button secondary" onClick={() => setFontClass("font-helvetica")}>
              <p id="helvetica"> Aa </p>
              <p> Helvetica</p>
            </button>

            <button className="custom-button secondary" onClick={() => setFontClass("")}>
              <p id="atkinson"> Aa </p>
              <p> Atkinson <br/> Hyperlegible </p>
            </button>

            <button className="custom-button secondary" onClick={() => setFontClass("font-dyslexic")}>
              <p id="dyslexic"> Aa </p>
              <p> Open <br/> Dyslexic </p>
            </button>

          </div>
          

      </div>
      
    {/* Footer */}
      <div style={{ gridColumn: "9 /span 5", gridRow: "12", justifySelf: "end" }}>
        <Button text="Iniciar boletim" variant="primary" icon={seta} />
      </div>
     
    </div>
    
  );
}


