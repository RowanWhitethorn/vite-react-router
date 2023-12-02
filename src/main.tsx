import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
//import FAQPage from './pages/FAQPage.tsx'
import HomePage from './pages/!HomePage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter> 
        <HomePage />

      </BrowserRouter>
  </React.StrictMode>,
)
