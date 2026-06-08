import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import With_Composition from './components/With_Composition'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <With_Composition/>
  </StrictMode>,
)
2525