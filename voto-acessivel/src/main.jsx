import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Define a função global antes de renderizar a aplicação
window.speakText = (text, element) => {
  const utterance = new SpeechSynthesisUtterance(text);
  if (element && typeof element.focus === 'function') {
    utterance.onstart = () => element.focus();
  }
  speechSynthesis.cancel(); // cancela qualquer fala pendente
  speechSynthesis.speak(utterance);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
