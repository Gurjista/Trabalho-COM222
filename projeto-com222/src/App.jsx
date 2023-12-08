import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <main>

        <h1>
          <ul class = "listaHeader">
          <p1>Agenciamento de Viagens</p1>

            <div class = "botoesDiv">
              <button id = "btnLogin">Login</button>
              <button id = "btnCriarConta">Criar Conta</button>
            </div>

          </ul>
          
          
        </h1>
        
        <nav class = "ofertas">
          
        </nav>

      </main>
    
    <footer>
      <p>
        Feito por:
      </p>
    </footer>
    </body>
    
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
