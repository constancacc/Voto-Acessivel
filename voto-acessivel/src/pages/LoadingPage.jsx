import React, { useEffect, useState } from 'react';
import "../styles/LoadingPage.css";
import FullscreenButton from '../components/FullscreenButton';
import OrientationWarning from '../components/OrientationWarning';
import Loader from '../components/Loader';

export default function LoadingPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Verifica e atualiza o estado do fullscreen
  const checkFullscreen = () => {
    const fsElement = document.fullscreenElement ||
                      document.webkitFullscreenElement ||
                      document.mozFullScreenElement ||
                      document.msFullscreenElement;
    setIsFullscreen(!!fsElement);
  };

  useEffect(() => {
    // Verifica inicialmente
    checkFullscreen();

    // Escuta mudanças no estado de fullscreen
    document.addEventListener('fullscreenchange', checkFullscreen);
    document.addEventListener('webkitfullscreenchange', checkFullscreen);
    document.addEventListener('mozfullscreenchange', checkFullscreen);
    document.addEventListener('MSFullscreenChange', checkFullscreen);

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
      document.removeEventListener('webkitfullscreenchange', checkFullscreen);
      document.removeEventListener('mozfullscreenchange', checkFullscreen);
      document.removeEventListener('MSFullscreenChange', checkFullscreen);
    };
  }, []);

  return (
    <div className="loading-wrapper">
      <OrientationWarning />

      {/* Logo */}
      <div className="logo-container" aria-label="Logo Voto Acessível">
        {/* SVG logo aqui... */}
        <img src="/imagens/logo.svg" alt="Logo Voto Acessível"className="logo-svg"/>
      </div>
      <p className="loading_subtitle">— plataforma de voto acessível —</p>

      {/* Botão para entrar em fullscreen */}
      <FullscreenButton />

      {/* Loader só aparece em fullscreen */}
      {isFullscreen && <Loader />}
    </div>
  );
}
