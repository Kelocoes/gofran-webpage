import React from "react";

import logo from "../../assets/images/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";
import Zoom from "@mui/material/Zoom";

type HeaderProps = {
    readonly setSection: React.Dispatch<React.SetStateAction<number>>;
};

export default function Header({ setSection }: HeaderProps): JSX.Element {
    const matches = useMediaQuery("(min-width:600px)");

    const choose = (index: number): void => {
        setSection(index);
    };

    return (
        <div className="flex items-center justify-center pt-2 z-10 mx-10">
            <Zoom in={true} timeout={500}>
                {matches ?
                    <ul className="menu menu-vertical sm:menu-horizontal rounded-box bg-white text-slate-600 lg:w-max items-center shadow-lg py-1">
                        <img src={logo} alt="Logo Psic Gofran" className="w-auto h-14 p-0 mr-2" />
                        <li><button className="font-body font-semibold text-lg" onClick={() => choose(0)} >Inicio</button></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => choose(1)} >Sobre mi</button></li>
                        <li><button className="font-body font-semibold text-lg truncate" onClick={() => choose(2)} >Tratamientos / Servicios</button></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => choose(3)} >Contáctame</button></li>
                    </ul>
                    :
                    <ul className="menu rounded-box bg-white text-black lg:w-max items-center shadow-lg py-1">
                        <li>
                            <details>
                                <summary className="font-body font-semibold text-lg text-slate-600 ">
                                    <li>
                                        <img src={logo} alt="Logo Psic Gofran" className="w-14 h-auto p-0 mr-2" />
                                    </li>
                                    Menú
                                </summary>
                                <ul>
                                    <li><button className="text-slate-600 font-body font-semibold text-lg" onClick={() => choose(0)} >Inicio</button></li>
                                    <li><button className="text-slate-600 font-body font-semibold text-lg" onClick={() => choose(1)} >Sobre mi</button></li>
                                    <li><button className="text-slate-600 font-body font-semibold text-lg truncate" onClick={() => choose(2)} >Tratamientos / Servicios</button></li>
                                    <li><button className="text-slate-600 font-body font-semibold text-lg" onClick={() => choose(3)} >Contáctame</button></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                }
            </Zoom>
        </div>
    );
}