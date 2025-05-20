import React, { useEffect, useState } from 'react';

function OrientationWarning() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");

    const handleOrientationChange = (e) => {
      setIsLandscape(e.matches);
    };

    handleOrientationChange(mediaQuery); // verifica no load

    mediaQuery.addEventListener('change', handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  if (!isLandscape) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      color: 'white',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.5rem',
      fontFamily: 'var(--font-family)',
    }}>
      <div>
        <p>Por favor, rode o seu tablet para a posição vertical para usar a aplicação.</p>
      </div>
    </div>
  );
}

export default OrientationWarning;
