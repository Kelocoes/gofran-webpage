import React from "react";

import { useInView } from "react-intersection-observer";

import photo from "../../assets/images/gofran-photo.png";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import stars from "../../assets/images/stars.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";

import { useNavigate } from "react-router-dom";

import Grow from "@mui/material/Grow";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function AboutMe(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 4, 150);

    const nav = useNavigate();

    const navigate = (path: string): void => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
        nav(path);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div ref={ref} className="w-[90%] my-6 z-10 flex justify-center relative flex-col">
                <Grow in={currentIndex >= 2} timeout={300}>
                    <img src={plant} alt="Plant" className="absolute top-22 -left-56" />
                </Grow>
                <Grow in={currentIndex >= 2} timeout={300}>
                    <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
                </Grow>
                <Grow in={currentIndex >= 2} timeout={300}>
                    <img src={stars} alt="Stars" className="absolute w-1/12 top-24 right-0 hidden lg:block" />
                </Grow>
                <Grow in={currentIndex >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-5xl text-[#6543AD] drop-shadow-lg text-center lg:text-left">
                        <div className="flex items-center">
                            Hola, soy Gofran Rawas
                            <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                        </div>
                    </h1>
                </Grow>
                <div className="flex flex-col-reverse lg:flex-row justify-center">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <div className="relative flex flex-col justify-center pt-6 w-[85%] ml-10 sm:ml-0">
                            <h2 className="text-[#6543AD] font-body text-lg sm:text-xl p-5 z-10 w-full text-justify  drop-shadow-md ">
                            Soy <strong>psicóloga musulmana</strong>, decidí estudiar psicología por la <strong>empatía</strong> que
                            siempre tuve con los demás y por la <strong>curiosidad sobre la mente humana.</strong>
                                <br /><br />
                            He nacido y crecido en Barcelona, pero soy de origen Sirio, por lo tanto, hablo:
                            Castellano, Árabe (sirio y entiendo el marroquí) y Catalán.
                                <br /><br />
                            El año pasado decidí empezar en las redes sociales (ya somos + de <strong>12k</strong>),
                            explico algunos trastornos, comparto tips y herramientas, te invito a visitar mi
                            perfil de <strong><a href="https://www.instagram.com/psicologa_gofran/" target="_blank" rel="noopener noreferrer">Instagram: @Psicologa_Gofran.</a></strong>
                                <br /><br />
                            Estudios: Grado en Psicología, Master en Neuropsicología, Master en Psicología
                            Infanto - Juvenil y Experta en apego y Psicología Perinatal.
                                <br /><br />
                            Estoy participando en un <strong>programa de investigación en ECEERS</strong> sobre los
                            efectos neuropsicológicos de los psicodélicos.
                            </h2>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="font-body text-[#6543AD] text-md sm:text-xl py-3 sm:py-5 px-6 text-center border-4 rounded-3xl bg-[#FED8B1] border-[#FABC7B] w-max"
                                    onClick={() => navigate("/contacto")}
                                >
                                    Pedir Cita
                                </button>
                            </div>
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <div className="flex flex-col w-2/3 md:w-1/3 h-auto sm:-ml-44">
                            <img src={photo} alt="Gofran photo" className="transform -scale-x-100" />
                        </div>
                    </Grow>
                </div>
            </div>
        </div>
    );
}