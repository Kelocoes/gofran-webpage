import React from "react";

import logo from "../../assets/Imgs/logo.png";

export default function Header(): JSX.Element {
    return (
        <div className="flex items-center justify-center py-2">
            <ul className="menu menu-horizontal rounded-box bg-white text-black lg:w-max items-center">
                <li><img src={logo} alt="Logo Psic Gofran" className="w-auto h-14 p-0 mr-2"/></li>
                <li><a className="font-body font-semibold">Inicio</a></li>
                <li><a className="font-body font-semibold">Sobre mi</a></li>
                <li><a className="font-body font-semibold">Tratamientos / Servicios</a></li>
                <li><a className="font-body font-semibold">Contáctame</a></li>
            </ul>
        </div>
    );
}