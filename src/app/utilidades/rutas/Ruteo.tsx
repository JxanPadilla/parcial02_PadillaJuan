import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear";
import { ConciertoListar } from "../../componentes/conciertos/ConciertoListar";
import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>} />

            <Route path="/concicrear" element={<ConciertoCrear/>} />
            <Route path="/concilistar" element={<ConciertoListar/>} />
            <Route path="/conciadmin" element={<ConciertoAdmin/>} />
        
            <Route path="/*" element={<NoEncontrado/>} />


        </Routes>
    );
};