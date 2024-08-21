import React from "react";
import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant2 from "../../assets/images/plant-2.png";
// import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import SelfKnow from "../../assets/images/self-Knowledge.png";
import SelfSteem from "../../assets/images/self-esteem.png";
import Anxiety from "../../assets/images/anxiety and stress.png";
import Dependency from "../../assets/images/emotional dependency.png";
import TOC from "../../assets/images/toc.png";
import Neuro from "../../assets/images/neuropsychology.png";
import Fhobia from "../../assets/images/phobias-traumas.png";
import Other from "../../assets/images/others.png";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function WhatWeCanWork (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 50);

    return (
        <div ref={ref} className="w-full md:w-[80%] my-6 z-10 flex flex-col items-center justify-center mt-[300px] sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[90%] grid grid-cols-4 gap-4">
                <div className="col-span-4">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-3xl sm:text-4xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-center">
                                ¿Qué podemos trabajar?
                                {/* <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" /> */}
                            </div>
                        </h1>
                    </Grow>
                </div>

                {/* Primera fila de imagenes */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={SelfKnow} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#7087ff] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Autoconocimiento</strong>
                            </div>
                        </div>
                    </Grow>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 8} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={SelfSteem} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#ffddb9] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Autoestima</strong>
                            </div>
                        </div>
                    </Grow>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={Anxiety} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#7087ff] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Ansiedad y Estrés</strong>
                            </div>
                        </div>
                    </Grow>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 10} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={Dependency} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#ffddb9] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Dependencia Emocional</strong>
                            </div>
                        </div>
                    </Grow>
                </div>

                {/* Segunda fila de imagenes */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 7} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={TOC} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#7087ff] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>T.O.C</strong>
                            </div>
                        </div>
                    </Grow>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={Neuro} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#ffddb9] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Neuropsicología</strong>
                            </div>
                        </div>
                    </Grow>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 9} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={Fhobia} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#7087ff] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Fobias/ Traumas</strong>
                            </div>
                        </div>
                    </Grow>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 w-[90%]">
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={Other} alt="gofran" className="w-full" />
                            </div>
                            <div className="items-center text-sm sm:text-xl text-[#ffddb9] drop-shadow-sm text-center mb-2 mt-8">
                                <strong>Otros (consultame)</strong>
                            </div>
                        </div>
                    </Grow>
                </div>

                {/* <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2">

                </div> */}
            </div>

        </div>
    );
}
