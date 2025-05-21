import React from 'react';
import "../styles/LoadingPage.css";
import FullscreenButton from '../components/FullscreenButton';
import OrientationWarning from '../components/OrientationWarning';
import Loader from '../components/Loader';

export default function LoadingPage() {
  return (
    <div className="loading-wrapper">
      <OrientationWarning />
      <div className="logo-container" aria-label="Logo Voto Acessível">
        {/* logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="110"
          viewBox="0 0 140 110"
          fill="none"
          className="logo-svg"
          aria-hidden="true"
        >
          <path
            d="M134.085 34.5684L98.9133 77.8667L79.2322 58.9475"
            stroke="black"
            strokeWidth="11.4508"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.09473 31.9521H91.4219C93.9715 31.9522 96.0389 34.0188 96.0391 36.5684C96.0391 39.1181 93.9716 41.1855 91.4219 41.1855H80.7559C70.6831 41.1856 62.5178 49.3511 62.5176 59.4238V103.611L62.5117 103.849C62.3882 106.288 60.3706 108.229 57.9004 108.229C55.3506 108.228 53.2832 106.161 53.2832 103.611V76.1846C53.2831 73.6856 51.2578 71.6594 48.7588 71.6592C46.2596 71.6592 44.2335 73.6854 44.2334 76.1846V103.611C44.2334 106.161 42.166 108.228 39.6162 108.229C37.0664 108.229 34.999 106.161 34.999 103.611V59.4238C34.9988 49.3511 26.8335 41.1856 16.7607 41.1855H6.09473C3.54496 41.1855 1.47754 39.1181 1.47754 36.5684C1.47774 34.0188 3.54509 31.9522 6.09473 31.9521ZM48.7588 1.47754C54.6744 1.4778 59.4697 6.27382 59.4697 12.1895C59.4697 18.1051 54.6744 22.9011 48.7588 22.9014C42.8429 22.9014 38.0469 18.1053 38.0469 12.1895C38.0469 6.27366 42.843 1.47754 48.7588 1.47754Z"
            fill="black"
            stroke="black"
            strokeWidth="2.95597"
          />
        </svg>
      </div>

      {/* titles */}
      <h1 className="loading_title">Voto Acessível</h1>
      <p className="loading_subtitle">— plataforma de voto acessível —</p>

      {/* button */}
      <FullscreenButton/>

      {/* loader */}
      <Loader/>
    </div>
  );
}
