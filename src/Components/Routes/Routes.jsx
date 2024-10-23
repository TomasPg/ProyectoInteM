
import { Routes, Route } from "react-router-dom"
import { RegistroGastos } from "../Gastos/Gastos"
import { Categoria } from "../Categoria/Categorias"
import { MetodoPagos } from "../MetodoPagos/MetodoPagos"
import { Ingresos } from "../Ingresos/Ingresos"
import { Inicio } from "../Inicio/Inicio"

export function Rutas (){
    return (
        <div>
          <Routes>
            <Route path="/" element={ <Inicio/> } />
            <Route path="/registrogastos" element={ <RegistroGastos/> } />
            <Route path="/registroingresos" element={ <Ingresos/> } />
            <Route path="/categoria" element={ <Categoria/> } />
            <Route path="/metodopagos" element={ <MetodoPagos/> } />
          </Routes>
        </div>
      )
}