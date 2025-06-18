import React, { useState, useEffect } from 'react';
import seta from "../assets/ArrowIcon.svg";
import next from "../assets/collapse-open.svg";
import accessibility from "../assets/accessibility.svg";
import Button from '../components/Button.jsx';
import IconButton from '../components/IconButton.jsx';
import SliderIndicators from '../components/Slider.jsx';
import "../styles/intro.css";
import "../styles/grid.css";

export default function IntroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      content: (
        <>
          <div style={{ gridColumn: "3 / span 12", gridRow: "3" }}>
            <h1>Bem-vind@ à plataforma:</h1>
          </div>
          <div style={{ gridColumn: "5 / span 6", gridRow: "4 / span 4", padding: "1rem" }}>
            <img src="/imagens/logo.svg" alt="Logo Voto Acessível" className="logo-svg" />
          </div>
          <div style={{ gridColumn: "3 / span 7", gridRow: "8", alignSelf: "end" }}>
            <h3>Sobre a plataforma...</h3>
          </div>
          <div style={{ gridColumn: "3 / span 10", gridRow: "9" }}>
            <p>
              Criada para garantir que <b>todos</b> podem votar de forma <b>segura</b>, <b>independente</b> e adaptada às <b>suas necessidades</b>.
            </p>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div style={{ gridColumn: "5 / span 6", gridRow: "4 / span 4", padding: "1rem" }}>
            <img src="/imagens/instrucoes/leitor-de-ecra.svg" alt="Leitor de Ecrã" className="logo-svg" />
          </div>
          <div style={{ gridColumn: "3 / span 7", gridRow: "8", alignSelf: "end" }}>
            <h3>Navegação com leitor de ecrã</h3>
          </div>
          <div style={{ gridColumn: "3 / span 10", gridRow: "9" }}>
            <p>
              A plataforma possui um <b>leitor de ecrã</b> que é ativado <b>automaticamente</b> ao iniciar,
              <b> lendo todos os elementos</b> apresentados.
            </p>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <div style={{ gridColumn: "3 / span 12", gridRow: "3" }}>
            <h1>Última página da introdução</h1>
          </div>
          <div style={{ gridColumn: "5 / span 6", gridRow: "4 / span 4", padding: "1rem" }}>
            <img src="/imagens/instrucoes/definicoes-acessibilidade.svg" alt="Logo Voto Acessível" className="logo-svg"/>
          </div>
          <div style={{ gridColumn: "3 / span 7", gridRow: "8", alignSelf: "end" }}>
            <h3>Personalize a sua experiência</h3>
          </div>
          <div style={{ gridColumn: "3 / span 10", gridRow: "9" }}>
            <p>Pode ajustar o <b>tamanho</b> e o <b>tipo de letra</b>, as <b>cores</b> e o <b>idioma</b> de leitura.
            Todas estas opções foram pensadas para melhorar a leitura e a navegação na plataforma.</p>
          </div>
        </>
      ),
    },
  ];

  // Timer automático de 40 segundos para avançar slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1;
        } else {
          // Último slide → ir para página de eleição
          window.location.href = "/eleicao";
          return prev;
        }
      });
    }, 40000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const goToNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      window.location.href = "/eleicao";
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="grid-container">
      {slides[activeIndex].content}

      {/* Botão avançar (seta direita) */}
      {activeIndex < slides.length - 1 && (
        <div style={{ gridColumn: "13 / span 1", gridRow: "7", rotate: "-90deg" }}>
          <img
            src={next}
            onClick={goToNext}
            style={{ cursor: "pointer" }}
            alt="Avançar"
          />
        </div>
      )}

      {/* Botão recuar (seta esquerda) */}
      {activeIndex > 0 && (
        <div style={{ gridColumn: "2 / span 1", gridRow: "7", rotate: "90deg" }}>
          <img
            src={next}
            onClick={goToPrevious}
            style={{ cursor: "pointer" }}
            alt="Voltar"
          />
        </div>
      )}

      {/* SliderIndicators */}
      <div style={{ gridColumn: "7 / span 3", gridRow: "10" }}>
        <SliderIndicators activeIndex={activeIndex} total={slides.length} onSelect={setActiveIndex} />
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "9 / span 5", gridRow: "12", justifySelf: "end", alignSelf: "end" }}>
        <Button text="Começar eleição" variant="primary" icon={seta} onClick={() => window.location.href = "/eleicao"} />
      </div>

      <div style={{ gridColumn: "2 / span 1", gridRow: "12", alignSelf: "end" }}>
        <IconButton alt="botão de definições de acessibilidade" icon={accessibility} />
      </div>
    </div>
  );
}
