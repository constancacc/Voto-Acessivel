import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import seta from "../assets/ArrowIcon.svg";
import printCheck from "../assets/print-check.svg";

import "../styles/print.css";


export default function Impressao() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/conclusao');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);




  const handleBack = () => window.history.back();

  return (
    <div className="grid-container">
      <div style={{ gridColumn: "2", gridRow: "2", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button onClick={handleBack} className="back-container" aria-label="Voltar à página anterior">
          <svg className="back-btn" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M10.9992 2.2002L2.19922 11.0002M2.19922 11.0002L10.9992 19.8002M2.19922 11.0002H19.7992" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div style={{ gridColumn: "11 / span 3", gridRow: "2" }}>
        <img
          src="/imagens/legislativas-2025-logo.svg"
          alt="Logo Eleições Legislativas 2025"
          className="btn-legislativas"
        />
      </div>

      <div style={{ gridColumn: "2 / span 12", gridRow: "3" }}>
        <h1>A imprimir ...</h1>
      </div>

        <div style={{ gridColumn: "2 / span 12", gridRow: "5" }} className="print-cell">
            <p>Eleição para a Aseembleia da Republica</p>
            <img src={printCheck}></img>
      </div>

      {/* Loader */}
      <div style={{ gridColumn: "7 / span 2", gridRow: "8", marginLeft:"50px", justifySelf: "center", alignSelf: "center" }}>
        <Loader size={50} segments={12} />
      </div>

    </div>
  );
}
