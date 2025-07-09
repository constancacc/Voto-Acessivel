import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoadingPage.css";
import FullscreenButton from '../components/FullscreenButton';
import Loader from '../components/Loader';

export default function ConclusaoPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();

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
    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
    };
  }, []);

  return (
    <div className="loading-wrapper" onClick={() => navigate("/intro")} role="button" tabIndex={0}>
      <div className="logo-container" aria-label="Logo Voto Acessível">
         <svg xmlns="http://www.w3.org/2000/svg" width="109" height="85" viewBox="0 0 109 85" fill="none">
                <path d="M103.889 26.7837L76.6375 60.3311L61.3887 45.6726" stroke="black" stroke-width="8.87205" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.72266 24.7559H70.833C72.8085 24.7559 74.41 26.3576 74.4102 28.333C74.4102 30.3086 72.8086 31.9102 70.833 31.9102H62.5693C54.7649 31.9102 48.4385 38.2376 48.4385 46.042V80.2773C48.4385 82.2528 46.8368 83.8544 44.8613 83.8545C42.8858 83.8545 41.2842 82.2529 41.2842 80.2773V59.0273C41.2839 57.0911 39.7136 55.5215 37.7773 55.5215C35.8412 55.5217 34.2717 57.0912 34.2715 59.0273V80.2773C34.2715 82.2529 32.6699 83.8545 30.6943 83.8545C28.7188 83.8544 27.1172 82.2529 27.1172 80.2773V46.042C27.1172 38.2376 20.7907 31.9103 12.9863 31.9102H4.72266C2.74709 31.9102 1.14551 30.3086 1.14551 28.333C1.14568 26.3576 2.7472 24.7559 4.72266 24.7559ZM37.7773 1.14551C42.3609 1.14551 46.0771 4.86081 46.0771 9.44434C46.0771 14.0279 42.3609 17.7441 37.7773 17.7441C33.194 17.7439 29.4785 14.0278 29.4785 9.44434C29.4786 4.86095 33.194 1.14574 37.7773 1.14551Z" fill="black" stroke="black" stroke-width="2.29028"/>
            </svg>
        <h1 className="conclusao-title">Voto Concluído!</h1>
      </div>
      <p className="loading_subtitle">Dirija-se à mesa para inserir o seu voto na urna</p>
      <p className="loading_subtitle">Clique para começar uma nova votação</p>
    </div>
  );
}
