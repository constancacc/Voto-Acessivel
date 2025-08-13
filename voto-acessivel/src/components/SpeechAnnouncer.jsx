import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function SpeechAnnouncer() {
  const location = useLocation();
  const synth = useRef(window.speechSynthesis);
  const lastSpokenElement = useRef(null);
  const readingTimeout = useRef(null);
  const readingIndex = useRef(0);
  const elementsToRead = useRef([]);
  const userClicked = useRef(false); // 🔹 Novo: marca clique do usuário

  if (typeof window.varrimentoAtivo === "undefined") window.varrimentoAtivo = true;
  if (typeof window.tempoVarrimento === "undefined") window.tempoVarrimento = 2.0;
  if (typeof window.volumeLeitor === "undefined") window.volumeLeitor = 0.5;

  // Função de leitura com destaque
  const speak = (text, element, onEnd) => {
    if (!text) {
      if (onEnd) onEnd();
      return;
    }

    synth.current.cancel();

    if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-PT";
    utterance.volume = window.volumeLeitor ?? 0.5;

    utterance.onend = () => {
      if (element) element.style.outline = "";
      lastSpokenElement.current = null;
      if (onEnd && !userClicked.current) onEnd(); // 🔹 Só continua se não houve clique
    };

    synth.current.speak(utterance);

    if (element) {
      if (element.tagName === "BUTTON" || element.tagName === "A") {
        element.focus(); // foco real que permite clicar
      } else {
        element.style.outline = "2px solid blue"; // destaque visual só
      }
      lastSpokenElement.current = element;
    }
  };

  // Iniciar leitura sequencial
  const startReadingAll = () => {
    const selectors = 'h1, h2, h3, h4, h5, h6, p, strong, em, button, a[href], input, textarea, [tabindex="0"]';
    let elems = Array.from(document.querySelectorAll(selectors)).filter(el => {
      const style = window.getComputedStyle(el);
      return style.display !== "none" && style.visibility !== "hidden" &&
             (el.textContent.trim() !== "" || el.getAttribute("aria-label") || el.getAttribute("title"));
    });

    elementsToRead.current = elems;
    readingIndex.current = 0;

    const readNext = () => {
      if (!window.varrimentoAtivo || readingIndex.current >= elementsToRead.current.length) return;

      const el = elementsToRead.current[readingIndex.current];
      readingIndex.current++;

      let text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();

      if (!text) {
        readNext();
        return;
      }

      console.log("🔊 Lendo elemento:", el.tagName, "Texto:", text);

      speak(text, el, () => {
        const delay = (window.tempoVarrimento ?? 2.0) * 1000;
        readingTimeout.current = setTimeout(readNext, delay);
      });
    };

    readNext();
  };

  // Atualizar leitura quando a rota mudar
  useEffect(() => {
    if (window.varrimentoAtivo) startReadingAll();

    return () => {
      synth.current.cancel();
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";
      if (readingTimeout.current) clearTimeout(readingTimeout.current);
    };
  }, [location]);

  // Falar elementos ao focar com Tab
  useEffect(() => {
    const handleFocus = (e) => {
      if (!window.varrimentoAtivo) return;

      const el = e.target;
      let text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      if (!text) return;

      synth.current.cancel();
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";

      speak(text, el);
    };

    document.addEventListener("focus", handleFocus, true);
    return () => document.removeEventListener("focus", handleFocus, true);
  }, []);

  // 🔹 Interromper varrimento se o usuário clicar
  useEffect(() => {
    const handleClick = () => {
      if (!window.varrimentoAtivo) return;

      userClicked.current = true;
      synth.current.cancel();
      if (readingTimeout.current) clearTimeout(readingTimeout.current);
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";

      // Reinicia apenas quando mudar de rota/slide
      setTimeout(() => { userClicked.current = false; }, 0);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // 🔹 Reiniciar leitura quando o slide mudar
  useEffect(() => {
    const handleSlideChange = () => {
      synth.current.cancel();
      if (readingTimeout.current) clearTimeout(readingTimeout.current);
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";

      if (window.varrimentoAtivo) startReadingAll();
    };

    window.addEventListener("slideChange", handleSlideChange);
    return () => window.removeEventListener("slideChange", handleSlideChange);
  }, []);

  return null;
}
