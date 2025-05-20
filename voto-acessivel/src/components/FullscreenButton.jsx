import React from 'react';

export default function FullscreenButton() {
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

  return (
    <button onClick={goFullScreen} style={{ padding: '10px 20px', fontSize: 16 }}>
      Entrar em Fullscreen
    </button>
  );
}
