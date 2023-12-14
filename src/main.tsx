import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom'
//import FAQPage from './pages/FAQPage.tsx'
import HomePage from './pages/!HomePage.tsx'
import FAQPage from './pages/FAQPage.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <HashRouter> 

        <HomePage />
        <FAQPage />
      </HashRouter>
  </React.StrictMode>,
)
