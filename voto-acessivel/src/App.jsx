import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import OrientationWarning from './components/OrientationWarning';
import LoadingPage from './pages/LoadingPage';
import SliderIntroContainer  from "./components/SliderIntroContainer";
import Eleicao from "./pages/SelecionarEleicao";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={ <LoadingPage />} />
        <Route path="/intro" element={<SliderIntroContainer />} />
        <Route path="/eleicao" element={<Eleicao />} />

      </Routes>
     </Router>
    </>
  )
}

export default App
