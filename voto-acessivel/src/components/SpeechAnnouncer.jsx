import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function SpeechAnnouncer() {
  const location = useLocation();
  const synth = useRef(window.speechSynthesis);
  const lastSpokenElement = useRef(null);
  const readingTimeout = useRef(null);
  const readingIndex = useRef(0);
  const elementsToRead = useRef([]);

  // Inicializar estado global se ainda não estiver definido
  if (typeof window.varrimentoAtivo === "undefined") {
    window.varrimentoAtivo = true;
  }

  if (typeof window.tempoVarrimento === "undefined") {
    window.tempoVarrimento = 2.0;
  }

  if (typeof window.volumeLeitor === "undefined") {
    window.volumeLeitor = 0.5; // volume por defeito (0.0 a 1.0)
  }

  // Fala e destaca
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
    utterance.volume = window.volumeLeitor ?? 0.5;

    utterance.onend = () => {
      if (element) element.style.outline = "";
      lastSpokenElement.current = null;
      if (onEnd) onEnd();
    };

    synth.current.speak(utterance);

    if (element) {
      element.style.outline = "3px solid blue";
      lastSpokenElement.current = element;
    }
  };

  // Iniciar varrimento sequencial da página toda
  const startReadingAll = () => {
    const selectors = "h1, h2, h3, h4, h5, h6, p, strong, em, button, a[href], input, textarea";

    let elems = Array.from(document.querySelectorAll(selectors)).filter(el => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        el.textContent.trim() !== ""
      );
    });

    elems = elems.filter(el => !el.closest('button') || el.tagName.toLowerCase() === 'button');

    elementsToRead.current = elems;
    readingIndex.current = 0;

    const readNext = () => {
      if (!window.varrimentoAtivo) return;
      if (readingIndex.current >= elementsToRead.current.length) return;

      const el = elementsToRead.current[readingIndex.current];
      readingIndex.current++;

      let text = "";

      if (el.tagName.toLowerCase() === "button") {
        text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      } else {
        if (el.closest("button")) {
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
        const delay = (window.tempoVarrimento ?? 2.0) * 1000;
        readingTimeout.current = setTimeout(readNext, delay);
      });
    };

    readNext();
  };

  // Lidar com mudança de varrimento
  const handleVarrimentoChange = () => {
    console.log("🔄 Varrimento mudou →", window.varrimentoAtivo ? "ON" : "OFF");

    synth.current.cancel();
    if (readingTimeout.current) clearTimeout(readingTimeout.current);
    if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";

    if (window.varrimentoAtivo) {
      startReadingAll();
    }
  };

  // ler slides automaticamente 
  useEffect(() => {
    const handleSlideChange = (e) => {
      // Só reinicia o varrimento da página inteira
      synth.current.cancel();
      if (readingTimeout.current) clearTimeout(readingTimeout.current);
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";

      if (window.varrimentoAtivo) {
        startReadingAll();
      }
    };

    window.addEventListener("slideChange", handleSlideChange);
    return () => {
      window.removeEventListener("slideChange", handleSlideChange);
    };
  }, []);

  useEffect(() => {
    if (window.varrimentoAtivo) {
      startReadingAll();
      console.log("Varrimento ativo ao mudar rota");
    }

    window.addEventListener("varrimentoChange", handleVarrimentoChange);
    

    return () => {
      synth.current.cancel();
      if (lastSpokenElement.current) lastSpokenElement.current.style.outline = "";
      if (readingTimeout.current) clearTimeout(readingTimeout.current);
      window.removeEventListener("varrimentoChange", handleVarrimentoChange);
    };
  }, [location]);

  // Falar elementos ao focar com Tab
  useEffect(() => {
    const handleFocus = (e) => {
      if (!window.varrimentoAtivo) return;

      synth.current.cancel();
      if (lastSpokenElement.current) {
        lastSpokenElement.current.style.outline = "";
      }

      const el = e.target;
      let text = "";

      if (el.tagName.toLowerCase() === "button") {
        text = el.getAttribute("aria-label") || el.getAttribute("title") || el.textContent.trim();
      } else {
        if (el.closest("button")) return;
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
