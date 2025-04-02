import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SongsList from './pages/page1.jsx'
import Page1 from './pages/page1.jsx'
import Page2 from './pages/page2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page2></Page2>
  </StrictMode>
)
