import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CibertecLogo from './IMG/Cibertecc.png'
import ToyotaHiace from './IMG/hiace toyota.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://micibertec.cibertec.edu.pe/" target="_blank">
          <img src={CibertecLogo} className="logo" alt="Cibertec Logo" />
        </a>

        <a href="https://www.toyotaperu.com.pe/" target="_blank">
          <img src={ToyotaHiace} className="logo" alt="Toyota Hiace" />
        </a>

      </div>
      <h1>Brian + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click en los logos de vite y react para saber más :D
      </p>
    </>
  )
}

export default App
