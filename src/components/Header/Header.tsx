import React from "react";

import logo from "../../assets/images/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header(): JSX.Element {
    const matches = useMediaQuery("(min-width:600px)");


    return (
        <div className="flex items-center justify-center pt-2 z-10 mx-10">
            {matches ?
                <ul className="menu menu-vertical sm:menu-horizontal rounded-box bg-white text-black lg:w-max items-center shadow-lg py-1">
                    <li><img src={logo} alt="Logo Psic Gofran" className="w-auto h-14 p-0 mr-2" /></li>
                    <li><a className="font-body font-semibold text-lg">Inicio</a></li>
                    <li><a className="font-body font-semibold text-lg">Sobre mi</a></li>
                    <li><a className="font-body font-semibold text-lg truncate">Tratamientos / Servicios</a></li>
                    <li><a className="font-body font-semibold text-lg">Contáctame</a></li>
                </ul>
                :
                <ul className="menu rounded-box bg-white text-black lg:w-max items-center shadow-lg py-1">
                    <li>
                        <details open>
                            <summary className="font-body font-semibold text-lg"><li><img src={logo} alt="Logo Psic Gofran" className="w-14 h-auto p-0 mr-2" /></li>Menú</summary>
                            <ul>
                                <li><a className="font-body font-semibold text-lg">Inicio</a></li>
                                <li><a className="font-body font-semibold text-lg">Sobre mi</a></li>
                                <li><a className="font-body font-semibold text-lg truncate">Tratamientos / Servicios</a></li>
                                <li><a className="font-body font-semibold text-lg">Contáctame</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            }
        </div>
    );
}