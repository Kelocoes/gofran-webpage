import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import toy from "../../assets/Imgs/hilotoys.png";

export default function MainPost(): JSX.Element {
    return (
        <div className="bg-white rounded-xl w-4/5 p-10">
            <h1 className="italic text-accent mr-1 font-title font-bold text-3xl">
                <span className="underline">Revoluciona</span> tu mente: descubre el <span className="underline">poder</span> de la psicología
            </h1>
            <p className="font-body text-lg font-semibold">
                Sumérgete en un viaje transformador hacia tu bienestar mental.
                Explorarás herramientas innovadoras para potenciar tu mente y
                alcanzar tu mejor versión.
            </p>
            <div className="ml-5 md:ml-10 lg:ml-56 mt-4 flex space-x-4 items-center flex-col lg:flex-row">
                <div>
                    <p className="font-body text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                        Terapia 100% <span className="underline">online</span>
                    </p>
                    <p className="font-body text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                        <span className="underline">Personalizado</span> y <span className="underline">Flexible</span>
                    </p>
                    <p className="font-body text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                        Variedad de <span className="underline">Recursos</span>
                        y <span className="underline">soluciones innovadoras</span>
                    </p>
                </div>
                <img src={toy} alt="Toy" className="w-1/2 md:w-1/3 lg:w-1/5 h-auto" />
            </div>
        </div>
    );
}