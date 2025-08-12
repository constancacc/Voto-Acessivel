import React, { useState, useEffect } from 'react';

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Função para atualizar o estado fullscreen
  const checkFullscreen = () => {
    const fsElement = document.fullscreenElement || 
                      document.mozFullScreenElement || 
                      document.webkitFullscreenElement || 
                      document.msFullscreenElement;

    setIsFullscreen(!!fsElement);
  };

  useEffect(() => {
    // Adiciona event listeners para detectar quando entra/sai do fullscreen
    document.addEventListener('fullscreenchange', checkFullscreen);
    document.addEventListener('mozfullscreenchange', checkFullscreen);
    document.addEventListener('webkitfullscreenchange', checkFullscreen);
    document.addEventListener('MSFullscreenChange', checkFullscreen);

    // Faz a verificação inicial
    checkFullscreen();

    // Remove os event listeners ao desmontar o componente
    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
      document.removeEventListener('mozfullscreenchange', checkFullscreen);
      document.removeEventListener('webkitfullscreenchange', checkFullscreen);
      document.removeEventListener('MSFullscreenChange', checkFullscreen);
    };
  }, []);

  const goFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari e Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  // Só mostra o botão se NÃO estivermos em fullscreen
  if (isFullscreen) return null;

  return (
    <button onClick={goFullScreen} className="custom-button secondary" style={{ marginTop: "100px", color: "black", fontSize: "var(--font-size)" }}>
      Entrar em Tela Cheia
    </button>
  );
}
