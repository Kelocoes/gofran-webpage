import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function MainPost(): JSX.Element {
    return (
        <div className="bg-white rounded-xl w-4/5 p-10">
            <h1 className="italic text-accent mr-1 font-bold">
                <span className="underline">Revoluciona</span> tu mente: descubre el <span className="underline">poder</span> de la psicología
            </h1>
            <p>
                Sumérgete en un viaje transformador hacia tu bienestar mental.
                Explorarás herramientas innovadoras para potenciar tu mente y
                alcanzar tu mejor versión.
            </p>
            <div className="ml-5 md:ml-10 lg:ml-56">
                <p><TaskAltIcon className="text-accent mr-1"/>
                    Terapia 100% <span className="underline">online</span>
                </p>
                <p><TaskAltIcon className="text-accent mr-1"/>
                    <span className="underline">Personalizado</span> y <span className="underline">Flexible</span>
                </p>
                <p><TaskAltIcon className="text-accent mr-1"/>
                    Variedad de <span className="underline">Recursos</span> 
                    y <span className="underline">soluciones innovadoras</span>
                </p>
            </div>
        </div>
    );
}