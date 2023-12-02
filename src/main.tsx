import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
//import FAQPage from './pages/FAQPage.tsx'
import FaqCard from './componets/5- FAQ/FAQ.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <FaqCard />
        </Routes>    
      </BrowserRouter>
  </React.StrictMode>,
)
