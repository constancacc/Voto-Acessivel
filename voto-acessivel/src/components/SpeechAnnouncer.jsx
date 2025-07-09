import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function SpeechAnnouncer() {
  const location = useLocation();
  const synth = useRef(window.speechSynthesis);
  const lastSpokenElement = useRef(null);
  const readingTimeout = useRef(null);
  const readingIndex = useRef(0);
  const elementsToRead = useRef([]);

  // Função para falar texto e adicionar destaque visual
  const speak = (text, element, onEnd) => {
    if (!text) {
      if (onEnd) onEnd();
      return;
    }
    synth.current.cancel();
    if (lastSpokenElement.current) {
      lastSpokenElement.current.style.outline = "";
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-PT";

    utterance.onend = () => {
      if (element) element.style.outline = "";
      lastSpokenElement.current = null;
      if (onEnd) onEnd();
    };

    synth.current.speak(utterance);

    if (element) {
      element.style.outline = "3px solid blue";
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      lastSpokenElement.current = element;
    }
  };

  // Função para iniciar o varrimento sequencial dos textos na página
  const startReadingAll = () => {
    // Seleciona elementos de texto e botões visíveis
    const selectors = "h1, h2, h3, h4, h5, h6, p, span, li, strong, em, button, a[href], input, textarea";

    let elems = Array.from(document.querySelectorAll(selectors)).filter(el => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        el.textContent.trim() !== ""
      );
    });

    // Filtra para evitar elementos dentro de botões (exceto os próprios botões)
    elems = elems.filter(el => !el.closest('button') || el.tagName.toLowerCase() === 'button');

    elementsToRead.current = elems;
    readingIndex.current = 0;

    const readNext = () => {
      if (readingIndex.current >= elementsToRead.current.length) return;
      const el = elementsToRead.current[readingIndex.current];
      readingIndex.current++;

      let text = "";

      if (el.tagName.toLowerCase() === "button") {
        text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      } else {
        if (el.closest("button")) {
          // Não ler elementos dentro de botão
          readNext();
          return;
        }
        text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      }

      if (!text) {
        readNext();
        return;
      }

      speak(text, el, () => {
        // Pausa de 500ms antes do próximo
        readingTimeout.current = setTimeout(readNext, 500);
      });
    };

    readNext();
  };

  useEffect(() => {
    // Quando muda a rota, iniciar varrimento dos textos da página
    startReadingAll();

    return () => {
      synth.current.cancel();
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";
      if (readingTimeout.current) clearTimeout(readingTimeout.current);
    };
  }, [location]);

  useEffect(() => {
    // Ler apenas o elemento focado ao usar Tab
    const handleFocus = (e) => {
      synth.current.cancel();
      if (lastSpokenElement.current) {
        lastSpokenElement.current.style.outline = "";
      }

      const el = e.target;
      let text = "";

      if (el.tagName.toLowerCase() === "button") {
        text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      } else {
        if (el.closest("button")) return; // não ler texto interno do botão
        text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      }

      if (!text) return;

      speak(text, el);
    };

    document.addEventListener("focus", handleFocus, true);

    return () => {
      document.removeEventListener("focus", handleFocus, true);
    };
  }, []);

  return null;
}
