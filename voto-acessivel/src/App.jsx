import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrientationWarning from './components/OrientationWarning';
import LoadingPage from './components/LoadingPage';
import FullscreenButton from './components/FullscreenButton';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ width: '100vw', height: '100vh' }}>
      <FullscreenButton />
       <OrientationWarning />
       <LoadingPage></LoadingPage>
    </div>
    </>
  )
}

export default App
