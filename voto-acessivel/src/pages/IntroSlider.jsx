import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import seta from "../assets/ArrowIcon.svg";
import next from "../assets/collapse-open.svg";
import accessibility from "../assets/accessibility.svg";
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import SliderIndicators from '../components/Slider.jsx';

import "../styles/intro.css";
import "../styles/variables.css";

export default function IntroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  // refs para timers
  const countdownRef = useRef(null); // setInterval para atualizar timeLeft
  const autoAdvanceRef = useRef(null); // setTimeout para avançar slide
  const deadlineRef = useRef(null); // timestamp de quando deve avançar

  const slides = [
    {
      content: (
        <div className="slide-content" data-slide-index={0}>
          <div style={{ gridColumn: "3 / span 8", gridRow: "3" }}>
            <h1 tabIndex={0} aria-label="Bem-vindo/a à plataforma">Bem-vind@ à plataforma:</h1>
          </div>
          <div style={{ gridColumn: "5 / span 6", gridRow: "5 / span 4", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="109" height="85" viewBox="0 0 109 85" fill="none">
              <path d="M103.889 26.7837L76.6375 60.3311L61.3887 45.6726" stroke="black" strokeWidth="8.87205" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.72266 24.7559H70.833C72.8085 24.7559 74.41 26.3576 74.4102 28.333C74.4102 30.3086 72.8086 31.9102 70.833 31.9102H62.5693C54.7649 31.9102 48.4385 38.2376 48.4385 46.042V80.2773C48.4385 82.2528 46.8368 83.8544 44.8613 83.8545C42.8858 83.8545 41.2842 82.2529 41.2842 80.2773V59.0273C41.2839 57.0911 39.7136 55.5215 37.7773 55.5215C35.8412 55.5217 34.2717 57.0912 34.2715 59.0273V80.2773C34.2715 82.2529 32.6699 83.8545 30.6943 83.8545C28.7188 83.8544 27.1172 82.2529 27.1172 80.2773V46.042C27.1172 38.2376 20.7907 31.9103 12.9863 31.9102H4.72266C2.74709 31.9102 1.14551 30.3086 1.14551 28.333C1.14568 26.3576 2.7472 24.7559 4.72266 24.7559ZM37.7773 1.14551C42.3609 1.14551 46.0771 4.86081 46.0771 9.44434C46.0771 14.0279 42.3609 17.7441 37.7773 17.7441C33.194 17.7439 29.4785 14.0278 29.4785 9.44434C29.4786 4.86095 33.194 1.14574 37.7773 1.14551Z" fill="black" stroke="black" strokeWidth="2.29028"/>
            </svg>
            <p aria-hidden="true" style={{ color: "#000", fontSize: "40px", fontWeight: 700, marginTop: "1rem", width: "100%", textAlign: "center", lineHeight: "1.2" }}>
              Voto Acessível
            </p>
          </div>
          <div style={{ gridColumn: "3 / span 7", gridRow: "8", alignSelf: "end" }}>
            <h3 tabIndex={0} aria-label="Sobre a plataforma" >Sobre a plataforma...</h3>
          </div>
          <div style={{ gridColumn: "3 / span 10", gridRow: "9" }}>
            <p tabIndex={0}>
              Criada para garantir que <b>todos</b> podem votar de forma <b>segura</b>, <b>independente</b> e adaptada às <b>suas necessidades</b>.
            </p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="slide-content" data-slide-index={1}>
          <div style={{ gridColumn: "3 / span 14", gridRow: "3" }}>
            <h1 tabIndex={0}>Informações de Leitor de Ecrã</h1>
          </div>
          <div style={{ gridColumn: "5 / span 14", gridRow: "5", padding: "1rem" }}>
            <img tabIndex={0} src="/imagens/instrucoes/leitor-de-ecra.svg" alt="Leitor de Ecrã"/>
          </div>
          <div style={{ gridColumn: "3 / span 14", gridRow: "8", alignSelf: "end" }}>
            <h3 tabIndex={0}>Navegação com leitor de ecrã</h3>
          </div>
          <div style={{ gridColumn: "3 / span 14", gridRow: "9" }}>
            <p tabIndex={0}>
              A plataforma possui um <b>leitor de ecrã</b> que é ativado <b>automaticamente</b> ao iniciar,
              <b> lendo todos os elementos</b> apresentados.
            </p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="slide-content" data-slide-index={2}>
          <div style={{ gridColumn: "3 / span 9", gridRow: "3" }}>
            <h1 tabIndex={0}>Definições de Acessibilidade</h1>
          </div>
          <div style={{ gridColumn: "4 / span 6", gridRow: "5", padding: "1rem" }}>
            <img tabIndex={0} src="/imagens/instrucoes/definicoes de acessibilidade.svg" alt="Logo Voto Acessível" className="logo-svg"/>
          </div>
          <div style={{ gridColumn: "3 / span 14", gridRow: "8", alignSelf: "end" }}>
            <h3 tabIndex={0}>Personalize a sua experiência</h3>
          </div>
          <div style={{ gridColumn: "3 / span 10", gridRow: "9" }}>
            <p tabIndex={0}>
              Pode ajustar o <b>tamanho</b> e o <b>tipo de letra</b>, as <b>cores</b> e o <b>idioma</b> de leitura.
              
            </p>
          </div>
        </div>
      ),
    },
  ];

  const clearTimers = () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    countdownRef.current = null;
    autoAdvanceRef.current = null;
  };

  const startTimers = () => {
    clearTimers();
    setTimeLeft(60);
    const deadline = Date.now() + 60000;
    deadlineRef.current = deadline;

    countdownRef.current = setInterval(() => {
      const secs = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setTimeLeft(secs);
    }, 1000);

    autoAdvanceRef.current = setTimeout(() => {
      setActiveIndex((prev) => {
        if (prev < slides.length - 1) return prev + 1;
        navigate("/eleicao");
        return prev;
      });
    }, 60000);
  };

  useEffect(() => {
    startTimers();
    return clearTimers;
  }, [activeIndex]);

  // Evento de acessibilidade disparando para todos os elementos da página
  useEffect(() => {
    const container = document.querySelector('.grid-container'); // toda a página
    if (container) {
      const event = new CustomEvent('slideChange', { detail: { container } });
      window.dispatchEvent(event);
    }
  }, [activeIndex]);

  const goToNext = () => {
    clearTimers();
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      navigate("/eleicao");
    }
  };

  const goToPrevious = () => {
    clearTimers();
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleIndicatorSelect = (idx) => {
    clearTimers();
    setActiveIndex(idx);
  };

  return (
    <div className="grid-container">
      {slides[activeIndex].content}

      {/*INDICADOR DE SLIDE */}      
      <div style={{ gridColumn: "7 / span 3", gridRow: "10", marginTop: "1rem"}}>
            <SliderIndicators
              activeIndex={activeIndex}
              total={slides.length}
              onSelect={handleIndicatorSelect}
            />
      </div>

      {/*Botão de Voltar ao slide anterior*/ }
      {activeIndex > 0 && (
        <div 
          style={{ 
            gridColumn: "2 / span 1", 
            gridRow: "7", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            transform: "rotate(90deg)",
            transformOrigin: "center"
          }}
        >
          <button tabIndex={0} onClick={goToPrevious} aria-label="botão de voltar à página anterior"
          style={{
              width: "44px",   // acessível
              height: "4px",  // acessível
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px"
            }}>
            <img src={next} alt="Voltar"/>
          </button>
        </div>
      )}

      {/*Botão de Avançar ao slide seguinte*/ }
      {activeIndex < slides.length - 1 && (
        <div 
          style={{ 
            gridColumn: "13 / span 1", 
            gridRow: "7", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            transform: "rotate(-90deg)",
            transformOrigin: "center"
          }}
        >
          <button tabIndex={0} onClick={goToNext} aria-label="botão de avançar à página seguinte"
          style={{
              width: "44px",   // acessível
              height: "44px",  // acessível
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px"
            }}>
            <img src={next} alt="Avançar"/>
          </button>
        </div>
      )}

      {/* Contador de tempo restante */}
      <div style={{ gridColumn: "5 / span 5", gridRow: "11"}}>
        <p className="slider-page-text" tabIndex={0} style={{ marginLeft: "1rem" }}>
          {activeIndex < slides.length - 1
            ? `Faltam ${timeLeft}s para a próxima página`
            : `Faltam ${timeLeft}s para escolher a eleição`}
        </p>
      </div>

      {/* footer */}
      <div style={{ gridColumn: "2 / span 1", gridRow: "12", alignSelf: "end" }}>
        <IconButton alt="botão de definições de acessibilidade" ariaLabel = "botão de definições de acessibilidade" icon={accessibility} />
      </div>

      <div style={{ gridColumn: "9 / span 5", gridRow: "12", justifySelf: "end", alignSelf: "end" }}>
        <Button text="Começar eleição" aria-label="Começar eleição" variant="primary" icon={seta} onClick={() => { clearTimers(); navigate("/eleicao"); }} />
      </div>


    </div>
  );
}