import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fondo from './Fondo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fondo /> 
  </StrictMode>,
)
