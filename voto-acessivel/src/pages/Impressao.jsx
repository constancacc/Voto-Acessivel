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
            <p aria-hidden="true">Eleição para a Assembleia da Republica</p>
            <img src={printCheck}></img>
      </div>

      {/* Loader */}
      <div style={{ gridColumn: "7 / span 2", gridRow: "8", marginLeft:"50px", justifySelf: "center", alignSelf: "center" }}>
        <Loader size={50} segments={12} />
      </div>

    </div>
  );
}
