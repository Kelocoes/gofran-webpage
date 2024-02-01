import React from "react";

export default function Header(): JSX.Element {
    return (
        <div className="flex items-center justify-center py-2">
            <ul className="menu menu-horizontal rounded-box bg-white text-black lg:w-max">
                <li><a>Inicio</a></li>
                <li><a>Sobre mi</a></li>
                <li><a>Tratamientos / Servicios</a></li>
                <li><a>Contáctame</a></li>
            </ul>
        </div>
    );
}