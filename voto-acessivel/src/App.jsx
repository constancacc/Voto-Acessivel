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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={ <LoadingPage />} />
        <Route path="/intro" element={<IntroSlider />} />
        <Route path="/eleicao" element={<Eleicao />} />
        <Route path="/legislativas" element={<Legislativas />} />
        <Route path="/autarquicas" element={<Autarquicas />} />
        <Route path="/boletim-legislativas" element={<Boletim />} />
        <Route path="/confirmacao" element={<Confirmacao />} />


      </Routes>
     </Router>
    </>
  )
}

export default App
