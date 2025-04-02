import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Challenge3 } from './Challenge03.jsx'
import { Challenge04Parent } from './Challenge04/Challenge04Parent.jsx'
import { Father } from './Challenge05/Challenge05Father.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Father/>
  </StrictMode>,
)
