import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'
import Approach2 from './Approach2.jsx'
import Approach4 from './Approach4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Approach4/>
    
  </StrictMode>,
)
