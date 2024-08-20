import React from "react";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import ComputerFran from "../../assets/images/gofran-compu.png";
import Grow from "@mui/material/Grow";
import Together from "../../assets/images/together.png";


import { useInView } from "react-intersection-observer";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function MainPageLetsTalk(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 150);

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 flex flex-col items-center justify-center relative mt-0 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[90%] grid grid-cols-6 gap-4">

                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center hidden md:block">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={ComputerFran} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 md:space-y-2 row-span-2">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-xl sm:text-2xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                    Programar una cita es el primer paso tangible hacia
                                    un cambio significativo en tu vida.
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Tu bienestar emocional merece esta dedicación. Si sientes que es el
                            momento de priorizarte y crear un espacio personal para sanar,
                            puedes reservar una primera sesión con nosotras en el calendario a
                            continuación. Estaremos encantadas de acompañarte en tu camino
                            hacia la paz y el bienestar emocional que mereces.
                        </h2>
                    </Grow>
                    <div className="hidden md:block">
                        <Grow in={currentIndex >= 5} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={Together} alt="gofran" className="w-[30%]" />
                            </div>
                        </Grow>
                    </div>
                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden w-[90%]">
                        <Grow in={currentIndex >= 5} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={ComputerFran} alt="gofran" className="w-full" />
                            </div>
                        </Grow>
                    </div>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-6 flex flex-col justify-center space-y-2 row-span-2">
                    <Grow in={currentIndex >= 8} timeout={300}>
                        <div className="flex items-left text-2xl sm:text-2xl text-[#7087ff] drop-shadow-sm text-left mb-2 mt-0 md:mt-[-80px]">
                            <strong>Tu viaje empieza aquí</strong>
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="flex font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            No subestimes la importancia de este primer paso. Ahora es cuando transformas tu intención en acción, y el deseo de
                            cambiar se convierte en realidad. Tu bienestar emocional, y el de tu pareja, merecen este tiempo, esta inversión y este
                            compromiso. Elige a la profesional que te acompañará en este recorrido; cada una de nuestras psicólogas es una
                            puerta hacia una versión más saludable y feliz de ti mismo o de tu relación.
                        </h2>
                    </Grow>
                </div>

            </div>
        </div>
    );
}
