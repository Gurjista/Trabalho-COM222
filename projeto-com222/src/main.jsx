import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'


import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Login from './login/Login.jsx';
import CreateUser from './login/CreateUser.jsx';
import EditUser from './login/EditUser.jsx';
import ListaViagem from './viagens/ListaViagem.jsx';
const router = createBrowserRouter([
{
  path: '/', //página home vai exibir as coisas
  element: <App />
},
{
  path: 'login',
  element: <Login />
},
{
  path: 'criar-user',
  element: <CreateUser />
},
{
  path: 'viagens',
  element: <ListaViagem />
},
{
  path: 'edit-user',
  element: <EditUser />
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
