import React from "react";
import brain from "../../assets/images/brain.png";
import stars from "../../assets/images/stars.png";
import brain2 from "../../assets/images/brain 2.png";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";

import Zoom from "@mui/material/Zoom";

import { useInView } from "react-intersection-observer";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function QuestionMentalHealth(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const currentIndex = useIncrementalIndexEffect(inView, 7, 150);

    return (
        <div ref={ref} className="w-[95%] md:w-[65%] my-6 flex justify-center z-10 relative">
            <Zoom in={currentIndex >= 2} timeout={500}>
                <img src={plant} alt="Plant" className="absolute top-48 -left-56 md:-left-24" />
            </Zoom>
            <Zoom in={currentIndex >= 2} timeout={500}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Zoom>
            <div className="relative">
                <div className="flex flex-row items-end space-x-5">
                    <Zoom in={currentIndex >= 1} timeout={500}>
                        <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center sm:text-left">
                            ¿Por qué cuidar nuestro bienestar mental?
                        </h1>
                    </Zoom>
                    <Zoom in={currentIndex >= 2} timeout={500}>
                        <img src={stars} alt="Stars" className="w-1/12 hidden lg:block" />
                    </Zoom>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <Zoom in={currentIndex >= 3} timeout={500}>
                        <h2 className="font-body font-bold text-white text-lg sm:text-2xl text-center sm:text-justify mt-8 drop-shadow-md col-span-5">
                            El bienestar mental constituye el cimiento fundamental de una vida plena y saludable. Al igual
                            que cuidamos nuestro cuerpo a través de la nutrición y el ejercicio, atender nuestra salud
                            mental es esencial para alcanzar un equilibrio integral. Una mente equilibrada no solo influye
                            en cómo enfrentamos el estrés y las adversidades, sino también en la calidad de nuestras
                            relaciones, la toma de decisiones y nuestro desempeño académico o laboral.
                        </h2>
                    </Zoom>
                    <div className="col-span-2 flex justify-center items-center">
                        <Zoom in={currentIndex >= 4} timeout={500}>
                            <img src={brain} alt="Brain" className="w-5/6 md:w-2/5 h-auto" />
                        </Zoom>
                    </div>
                    <Zoom in={currentIndex >= 5} timeout={500}>
                        <div className="flex ml-auto my-2 border-[#B6C2FD] border-8 rounded-[60px] p-5 col-span-3">
                            <h2 className="font-body font-bold text-white text-lg sm:text-2xl text-center md:text-justify drop-shadow-md">
                                «La primera virtud del conocimiento es la capacidad de
                                enfrentarse a lo que no es evidente.» <br />
                                - Jacques Lacan
                            </h2>
                        </div>
                    </Zoom>
                    <Zoom in={currentIndex >= 6} timeout={500}>
                        <div className="my-2 border-[#B6C2FD] border-8 rounded-[60px] p-5 col-span-3">
                            <h2 className="font-body font-bold text-white text-lg sm:text-2xl text-center md:text-justify drop-shadow-md">
                                «Las emociones inexpresadas nunca mueren.
                                Son enterradas vivas y salen más tarde de peores formas.» <br />
                                -Sigmund Freud
                            </h2>
                        </div>
                    </Zoom>
                    <div className="col-span-2 flex justify-center">
                        <Zoom in={currentIndex >= 7} timeout={500}>
                            <img src={brain2} alt="brain2" className="w-5/6 md:w-2/5 h-auto" />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>

    );
}