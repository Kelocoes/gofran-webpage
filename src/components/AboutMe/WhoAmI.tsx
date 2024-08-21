import React from "react";
import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import aboutmeGofran from "../../assets/images/aboutme-gofran.png";
import CustomButton from "../Common/CustomButton";
import Quote from "../Common/Quote";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function WhoAmI (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 50);

    return (
        <div ref={ref} className="w-full my-6 z-10 flex flex-col items-center justify-center relative mt-0 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[85%] grid grid-cols-6 gap-0">
                <div className="col-span-6">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-4xl sm:text-4xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                ¿Quien soy?
                                <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            </div>
                        </h1>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2">
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-left">
                            Hola, soy Gofran y quiero compartir un poco sobre mí. Desde pequeña, siempre
                            tuve claro que quería dedicarme a algo relacionado con las personas. Durante el
                            bachillerato, tuve la oportunidad de cursar filosofía, una asignatura que me
                            impactó profundamente y despertó en mí un interés aún mayor por el ámbito
                            humano y el funcionamiento de la mente. Esta experiencia fue decisiva y me llevó
                            a tomar la decisión de estudiar psicología.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-left">
                            Nací y crecí en Barcelona, pero mis raíces son Sirias. Por ello, hablo castellano,
                            árabe (sirio y entiendo el marroquí) y catalán. Esta diversidad cultural me ha
                            permitido desarrollar una comprensión más amplia y empática de las personas,
                            lo cual enriquece mi práctica profesional.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-left">
                            Estoy comprometida con el bienestar mental y emocional de mis pacientes, y
                            busco constantemente nuevas formas de apoyarles en su camino hacia una vida
                            más equilibrada y plena. Mi curiosidad por la mente humana crece día a día, y la
                            alimento constantemente con diversas herramientas, lecturas y cursos.
                        </h2>
                    </Grow>

                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                        <Grow in={currentIndex >= 5} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={aboutmeGofran} alt="gofran" className="w-full" />
                            </div>
                        </Grow>
                    </div>
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <div className="flex justify-left mt-4 ml-12 md:ml-0">
                            <CustomButton
                                text="Pedir cita"
                                path="/contacto"
                            />
                        </div>
                    </Grow>
                </div>

                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 hidden md:block w-[100%]">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={aboutmeGofran} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                </div>
            </div>

            <Grow in={currentIndex >= 6} timeout={300}>
                <div className="mb-10 mt-[75px] w-full">
                    <Quote>
                        <strong>
                            «Las emociones inexpresadas nunca mueren. Son enterradas vivas y salen más tarde de peores formas.» - Sigmund Freud
                        </strong>
                    </Quote>
                </div>
            </Grow>
        </div>
    );
}
