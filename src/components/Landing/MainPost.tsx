import React from "react";
import Zoom from "@mui/material/Zoom";

import gofranMain from "../../assets/images/gofran-main.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";

import { useInView } from "react-intersection-observer";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function MainPost(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 5, 150);

    return (
        <div ref={ref} className="w-[95%] my-6 z-10">
            <div className="absolute top-36 right-0 w-1/2 sm:w-[30%]">
                <Zoom in={currentIndex >= 4} timeout={300}>
                    <img src={gofranMain} alt="Main post"/>
                </Zoom>
            </div>
            <Zoom in={currentIndex >= 1} timeout={300}>
                <h1 className="font-title text-4xl sm:text-[3.75rem] leading-[5rem] text-[#6543AD] drop-shadow-lg text-left mb-2">
                    Revoluciona <strong className="underline">tu mente</strong>: descubre el poder 
                    <div className="flex items-center">
                        de la Psicología <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                    </div>
                </h1>
            </Zoom>
            <Zoom in={currentIndex >= 2} timeout={300}>
                <div className="h-1 w-[30%] bg-[#6543AD] my-6" />
            </Zoom>
            <div className="sm:w-[80%] gap-2 items-center">
                <div className="flex flex-col justify-center space-y-6 ">
                    <Zoom in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#6543AD] text-lg sm:text-2xl rounded-xl drop-shadow-md w-[90%]">
                            Sumérgete en un viaje transformador
                            hacia tu bienestar mental. Explorarás
                            herramientas innovadoras para potenciar
                            tu mente y alcanzar tu mejor versión.
                        </h2>
                    </Zoom>
                    <Zoom in={currentIndex >= 5} timeout={300}>
                        <div className="flex justify-center">
                            <div className="flex flex-col sm:px-20 sm:w-[60%] sm:mr-16">
                                <div className="flex justify-center sm:justify-start my-2">
                                    <h2 className="font-body text-[#6543AD] text-lg sm:text-2xl py-5 px-6 text-center border-4 rounded-3xl bg-[#FED8B1] border-[#FABC7B] w-max">
                                        Terapia 100% online
                                    </h2>
                                </div>
                                <div className="flex justify-center sm:justify-end my-2">
                                    <h2 className="font-body text-[#6543AD] text-lg sm:text-2xl py-5 px-6 text-center border-4 rounded-3xl border-[#6543AD] w-max">
                                        Variedad de recursos y <br /> soluciones innovadoras
                                    </h2>
                                </div>
                                <div className="flex justify-center sm:justify-start my-2">
                                    <h2 className="font-body text-[#6543AD] text-lg sm:text-2xl py-5 px-6 text-center border-4 rounded-3xl bg-[#FED8B1] border-[#FABC7B] w-max">
                                        Personalizado y Flexible
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}