import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LoadingPage from './pages/LoadingPage';
import Eleicao from "./pages/SelecionarEleicao";
import Legislativas from "./pages/Legislativas";
import Autarquicas from "./pages/Autarquicas";
import Boletim from './pages/Boletim-legislativas';
import IntroSlider from './pages/IntroSlider';
import Confirmacao from './pages/Boletim-legislativas-confirmação';
import Impressao from './pages/Impressao';
import ConclusaoPage from './pages/Conclusao';

import SpeechAnnouncer from "./components/SpeechAnnouncer";
import Acessibilidade from './pages/Acessibilidade';
import PreDefinicoes from './pages/links-acessibilidade/PreDefinicoes';
import LeitorEcra from './pages/links-acessibilidade/LeitorEcra';
import Tipografia from './pages/links-acessibilidade/Tipografia';
import PagBoletim from './pages/Boletim-legislativas';
import PorImplementar from './pages/links-acessibilidade/Por Implementar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <SpeechAnnouncer/>
      <Routes>
        <Route path="/" element={ <LoadingPage />} />
        <Route path="/intro" element={<IntroSlider />} />
        <Route path="/eleicao" element={<Eleicao />} />
        <Route path="/legislativas" element={<Legislativas />} />
        <Route path="/autarquicas" element={<Autarquicas />} />
        <Route path="/boletim-legislativas" element={<PagBoletim />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
        <Route path="/impressao" element={<Impressao />} />
        <Route path="/conclusao" element={<ConclusaoPage />} />

        <Route path="/acessibilidade" element={<Acessibilidade />} />
        
         <Route path="/pre-definicoes" element={<PreDefinicoes />} />
           <Route path="/leitor-ecra" element={<LeitorEcra />} />
           <Route path="/tipografia" element={<Tipografia />} />
            <Route path="/brevemente" element={<PorImplementar />} />



      </Routes>
     </Router>
    </>
  )
}

export default App
