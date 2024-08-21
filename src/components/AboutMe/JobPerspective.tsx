import React from "react";
import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function JobPerspective (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 15, 50);

    return (
        <div ref={ref} className="w-[85%] my-6 z-10">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-full grid grid-cols-6 grid-row-1 gap-4">
                <div className="mt-2 col-span-6 md:col-span-6 flex flex-col justify-end space-y-4 row-span-2 md:mr-auto md:ml-8 mt-20">
                    <div className="col-span-6">
                        <Grow in={currentIndex >= 1} timeout={300}>
                            <h1 className="font-title text-4xl sm:text-4xl text-[#4d4b44] font-bold drop-shadow-lg text-left lg:text-left">
                                <div className="flex items-center justify-left">
                                    ¿Cuál es mi perspectiva de trabajo?
                                    <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                                </div>
                            </h1>
                        </Grow>
                    </div>
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Me he formado en diversas corrientes y orientaciones de la psicología, incluyendo la Terapia Cognitivo Conductual, la
                            perspectiva del trauma, el apego y las emociones, el trabajo con heridas de la infancia y el niño interior. Esto me permite
                            definir mi estilo de terapia como <strong>integrador</strong>. Combino mis conocimientos teóricos y prácticos para crear terapias únicas,
                            adaptándome a las necesidades específicas de cada persona.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Abordo los temas desde la raíz, profundizando en todos los aspectos para lograr una solución eficaz y duradera a los
                            problemas. Cada proceso tiene su propio ritmo y espacio, lo que permite un ajuste y adaptación constante a lo largo de la
                            terapia. Mi objetivo es ofrecer un lugar seguro para sanar las heridas abiertas en el pasado y descubrir tu fuerza interior.
                        </h2>
                    </Grow>
                </div>
            </div>
        </div>
    );
}
