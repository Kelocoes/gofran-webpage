import React from "react";

import { useInView } from "react-intersection-observer";

import photo from "../../assets/images/gofran-photo.png";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import stars from "../../assets/images/stars.png";

import Zoom from "@mui/material/Zoom";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function AboutMe(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 4, 150);

    return (
        <div className="flex flex-col items-center justify-center">
            <div ref={ref} className="w-[95%] md:w-[65%] my-6 z-10 flex justify-center relative flex-col">
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={plant} alt="Plant" className="absolute top-22 -left-56" />
                </Zoom>
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
                </Zoom>
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={stars} alt="Stars" className="absolute w-1/12 top-24 right-0 hidden lg:block" />
                </Zoom>
                <Zoom in={currentIndex >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                        Sobre mí
                    </h1>
                </Zoom>
                <div className="flex flex-col-reverse lg:flex-row justify-center space-x-8 space-y-5">
                    <Zoom in={currentIndex >= 3} timeout={300}>
                        <div className="relative flex justify-center pt-6 w-[85%] md:w-2/3 ml-10 sm:ml-0">
                            <h2 className="text-white font-body text-lg p-5 z-10 w-full text-justify">
                                Hola soy Gofran Rawas Neuropsicóloga, decidí estudiar
                                psicología por la empatía que siempre tuve con los demás
                                y por la curiosidad sobre la mente humana. <br /><br />
                                He nacido y crecido en Barcelona, pero soy de origen Sirio,
                                por lo tanto, hablo: Castellano, Árabe (sirio y entiendo el
                                marroquí) y Catalán. <br /><br />
                                El año pasado decidí empezar en las redes sociales (ya
                                somos + de 10k), esta aplicación va dedicada a aquellas
                                personas que quieran conocer más sobre este ámbito, en
                                la cual, explico algunos trastornos, comparto tips y
                                herramientas, te invito a visitar mi perfil de Instagram:
                                @Psicologa Gofran <br /><br />
                                Estudios: Grado en Psicología, Master en Neuropsicología
                                y Master en Psicología Infanto - Juvenil.
                            </h2>
                        </div>
                    </Zoom>
                    <Zoom in={currentIndex >= 4} timeout={300}>
                        <div className="flex flex-col w-2/3 md:w-1/3 h-auto">
                            <img src={photo} alt="Gofran photo" />
                            <h2 className="border-8 border-white bg-neutral p-4 font-body text-white font-bold text-md  mb-5">
                                Enhorabuena por estar aquí, si has decidido
                                buscar una ayuda profesional, ya has hecho el
                                paso más difícil
                            </h2>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}