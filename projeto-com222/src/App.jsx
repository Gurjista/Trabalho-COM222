import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <main>

        <h1>
          <ul class = "listaHeader">
            
          <p1 id = "idHeader">Agenciamento de Viagens</p1>

            <div class = "botoesDiv">
              <button id = "btnLogin"><Link to="/login">Login</Link></button>
              <button id = "btnCriarConta"><Link to="/criar-user">Criar Conta</Link></button>
            </div>

          </ul>
          
          
        </h1>
        
        <nav class="ofertas">
            <ul class="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">O que fazemos?</a>
              </li>
              <li><a href="#">Links</a></li>
              <li><a href="#">Fale Conosco</a></li>
          </ul>
        </nav>

        <div class="viagens">
          <section class = "viagem">
            <ul id="listaViagem">
                <li><label for=""> Local: Veneza, Itália</label>{}<></></li>
                <li><label for=""> Data: Dezembro, 2024</label></li>
                <li><label for=""> Duração: 1 Mês</label></li>
                <li><label for=""> Preço: R$ 8,800</label></li>
                <li><label for=""> Requisição de Visto: Não</label></li>
            </ul>
          </section>
          <section class = "viagem">
            <ul id="listaViagem">
                <li><label for=""> Local: Toronto, Canadá</label>{}<></></li>
                <li><label for=""> Data: Julho, 2024</label></li>
                <li><label for=""> Duração: 2 Meses</label></li>
                <li><label for=""> Preço: R$ 20,000</label></li>
                <li><label for=""> Requisição de Visto: Sim</label></li>
            </ul>
          </section>
          <section class = "viagem">
            <ul id="listaViagem">
                <li><label for=""> Local: Tokyo, Japão</label>{}<></></li>
                <li><label for=""> Data: Janeiro, 2025</label></li>
                <li><label for=""> Duração: 1 Mês</label></li>
                <li><label for=""> Preço: R$ 15,000</label></li>
                <li><label for=""> Requisição de Visto: Passaporte brasileiro.</label></li>
            </ul>
          </section>

        </div>

        

        
      </main>
    
 
    </body>

    <footer>
      <p> Feito por: </p>
        <ul class = "listaFooter">
          <li><a href="https://www.instagram.com/ygabrielvaz/">Gabriel</a></li>
          <li><a href="https://linktr.ee/guilhermewicked">Guilherme</a></li>
          <li><a href="https://www.instagram.com/gustavo_p_rocha/">Gustavo</a></li>
        </ul>

    </footer>
    
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
