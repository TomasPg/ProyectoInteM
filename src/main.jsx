import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rutas } from './Components/Routes/Routes'
import { BrowserRouter } from "react-router-dom";
import { Navb } from './Components/Navb/Navb';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navb/>
    <BrowserRouter>
    <Rutas/>
    </BrowserRouter>
  </StrictMode>,
)
