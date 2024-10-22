import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'
import { Info } from './components/Info.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>, 
  },
  {
    path: '/login', element: <Login/>, 
  },
  {
    path: '/signup', element: <Signup/>, 
  },
  {
    path: '/dashboard', element: <Dashboard/>, 
  },
  {
    path: '/info', element: <Info/>, 
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
