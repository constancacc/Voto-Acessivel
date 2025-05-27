import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import "../styles/LoadingPage.css";
import FullscreenButton from '../components/FullscreenButton';
import OrientationWarning from '../components/OrientationWarning';
import Loader from '../components/Loader';

export default function LoadingPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate(); // Inicializa o hook

  useEffect(() => {
    // Redireciona para a página de introdução após 3 segundos
    const timeout = setTimeout(() => {
      navigate("/intro"); // <-- certifica-te de que esta rota está definida no teu router
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const checkFullscreen = () => {
    const fsElement = document.fullscreenElement ||
                      document.webkitFullscreenElement ||
                      document.mozFullScreenElement ||
                      document.msFullscreenElement;
    setIsFullscreen(!!fsElement);
  };

  useEffect(() => {
    checkFullscreen();

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
      <div className="logo-container" aria-label="Logo Voto Acessível">
        <img src="/imagens/logo.svg" alt="Logo Voto Acessível" className="logo-svg"/>
      </div>
      <p className="loading_subtitle">— plataforma de voto acessível —</p>
      <FullscreenButton />
      {isFullscreen && <Loader />}
    </div>
  );
}
