import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrientationWarning from './components/OrientationWarning';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OrientationWarning />
      <main>
        
      </main>
    </>
  )
}

export default App
