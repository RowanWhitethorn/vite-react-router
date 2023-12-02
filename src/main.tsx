import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FAQPage from './pages/FAQPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <FAQPage/>
      </Routes>    
      </BrowserRouter>
  </React.StrictMode>,
)
