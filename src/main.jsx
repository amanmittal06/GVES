import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Anthem from './Components/Anthem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/GVES/"> {/* Replace with your base URL */}
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/anthem" element={<Anthem/>}></Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
