import React from "react";
import Zoom from "@mui/material/Zoom";

import mainPostImage from "../../assets/images/main-post.png";
import hilotoys from "../../assets/images/hilotoys.png";
import heart from "../../assets/images/heart-string.png";
import stars from "../../assets/images/stars.png";

import { useInView } from "react-intersection-observer";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function MainPost(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 5, 150);

    return (
        <div ref={ref} className="w-[95%] md:w-[65%] my-6 relative z-10">
            <Zoom in={currentIndex >= 1} timeout={300}>
                <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-right">
                    Revoluciona tu mente: descubre el poder de la
                    Psicología
                </h1>
            </Zoom>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-2 items-center">
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={stars} alt="Stars" className="absolute w-1/12 top-24 hidden lg:block" />
                </Zoom>
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={mainPostImage} alt="Main post" className="rounded-lg" />
                </Zoom>
                <div className="flex flex-col justify-center space-y-5 -mt-6">
                    <Zoom in={currentIndex >= 2} timeout={300}>
                        <img src={hilotoys} alt="Hilo" className="absolute w-[15%] top-14 hidden xl:block" />
                    </Zoom>
                    <Zoom in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body font-bold text-white text-lg sm:text-2xl 
                        border-dashed border-neutral border-8 rounded-xl p-4 drop-shadow-md">
                            Sumérgete en un viaje transformador
                            hacia tu bienestar mental. Explorarás
                            herramientas innovadoras para potenciar
                            tu mente y alcanzar tu mejor versión.
                        </h2>
                    </Zoom>
                    <div className="flex flex-col justify-center items-center">
                        <Zoom in={currentIndex >= 4} timeout={300}>
                            <h2 className="font-body font-bold text-white text-2xl text-center drop-shadow-md">
                                Terapia 100% online <br />
                                Personalizado y Flexible <br />
                                Variedad de recursos y soluciones innovadoras
                            </h2>
                        </Zoom>
                        <Zoom in={currentIndex >= 5} timeout={300}>
                            <img src={heart} alt="Heart" className="w-2/3 m-0 lg:-m-4 xl:-m-4" />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
}