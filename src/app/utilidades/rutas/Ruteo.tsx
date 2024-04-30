import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Crear } from "../../componentes/conciertos/ConciertoCrear";
import { Listar } from "../../componentes/conciertos/ConciertoListar";
import { Admin } from "../../componentes/conciertos/ConciertoAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/concicrear" element={<Crear/>} />
            <Route path="/consilistar" element={<Listar/>} />
            <Route path="/conciadmin" element={<Admin/>} />
        
            <Route path="/*" element={<NoEncontrado/>} />


        </Routes>
    );
};