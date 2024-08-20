import React from "react";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import TreeWoman from "../../assets/images/services-tree-woman.png";
import CustomButton from "../Common/CustomButton";
import Quote from "../Common/Quote";
import Grow from "@mui/material/Grow";

import { useInView } from "react-intersection-observer";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function TerapyForAdults(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 150);

    return (
        <div ref={ref} className="w-full my-6 z-10 flex flex-col items-center justify-center relative mt-0 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[85%] grid grid-cols-6 gap-4">


                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 hidden mt-12 md:block w-[80%]">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={TreeWoman} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-3xl sm:text-4xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                Terapia para adultos
                                <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            </div>

                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <div className="flex items-center text-2xl sm:text-2xl text-[#7087ff] drop-shadow-sm text-left mb-2 mt-8">
                            <strong>¿Sientes que tus problemas se acumulan sin encontrar el
                            momento adecuado para enfrentarlos?</strong>
                        </div>
                    </Grow>

                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Si es así, esta terapia para Adultos Online podría ser justo lo que necesitas.
                            En el mundo acelerado de hoy, enfrentamos desafíos que a menudo nos
                            dejan abrumados y desconectados. Imagina un espacio seguro y privado
                            donde puedes ser tú mismo sin miedo a ser juzgado; un rincón digital donde
                            tu bienestar mental es la prioridad. Aquí, te ofrezco ese espacio, con la
                            comodidad de poder acceder desde cualquier lugar donde te encuentres.
                        </h2>
                    </Grow>

                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                        <Grow in={currentIndex >= 5} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={TreeWoman} alt="gofran" className="w-full" />
                            </div>
                        </Grow>
                    </div>
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <div className="flex justify-center mt-10 ml-12 mr-14 md:ml-10">
                            <CustomButton
                                bgColor="#ffddb9"
                                borderColor="#ffca92"
                                text="Reservar cita"
                                path="/contacto"
                            />
                        </div>
                    </Grow>
                </div>
            </div>

            <Grow in={currentIndex >= 7} timeout={300}>
                <div className="mb-10 mt-[75px] w-full">
                    <Quote>
                        <strong>
                            «La primera virtud del conocimiento es la capacidad de enfrentarse a lo que no es evidente.» - JacquesLacan
                        </strong>
                    </Quote>
                </div>
            </Grow>
        </div>
    );
}
