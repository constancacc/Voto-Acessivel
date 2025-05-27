import React, { useState, useEffect, useRef } from "react";
import Intro from "../pages/Intro";
import Intro2 from "../pages/Intro2";
import Intro3 from "../pages/Intro3";

export default function SliderIntroContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = 3;
  const timerRef = useRef(null);

  // Timer para avançar sozinho a cada 40 segundos
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    }, 40000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer(); // Reinicia o timer sempre que o índice muda
  }, [activeIndex]);

  const renderPage = () => {
    switch (activeIndex) {
      case 0:
        return <Intro activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      case 1:
        return <Intro2 activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      case 2:
        return <Intro3 activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}
