import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import OrientationWarning from './components/OrientationWarning';
import LoadingPage from './pages/LoadingPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={ <LoadingPage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
