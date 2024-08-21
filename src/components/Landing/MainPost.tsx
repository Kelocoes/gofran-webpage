import React from "react";
import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import CustomButton from "../Common/CustomButton";
import gofranMain from "../../assets/images/gofran-main.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import Quote from "../Common/Quote";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function MainPost (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 7, 50);

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
                <div className="col-span-1 sm:col-span-6">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-4xl sm:text-4xl leading-[5rem] text-[#7087ff] drop-shadow-lg text-left mb-2">
                            <div className="flex items-center">
                                <strong>Tus heridas no te definen</strong>
                                <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            </div>
                        </h1>
                    </Grow>
                </div>
                <div className="col-span-1 sm:col-span-4 flex flex-col py-9">
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Aprende a trabajar desde la raíz del problema con la psicología online,
                            aprovechando la flexibilidad y accesibilidad que te permite conectarte
                            con profesionales desde la comodidad dese cualquier sitio.
                        </h2>
                    </Grow>
                    <br></br>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Empieza hoy este viaje hacia una mente más saludable y equilibrada,
                            y desbloquea todo tu potencial.
                        </h2>
                    </Grow>
                    <div className="col-span-1 sm:col-span-2 flex justify-center sm:justify-end sm:w-full md:hidden">
                        <div className="relative">
                            <Grow in={currentIndex >= 4} timeout={300}>
                                <img src={gofranMain} alt="Main post" className="max-w-full"/>
                            </Grow>
                        </div>
                    </div>
                    <div className="flex justify-center py-20">
                        <Grow in={currentIndex >= 5} timeout={300}>
                            <div className="flex items-stretch w-full">
                                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                                    <div className="justify-center my-2">
                                        <CustomButton
                                            text="Leer más sobre mí"
                                            path="/sobre-mi"
                                        />
                                    </div>
                                    <div className="justify-center my-2">
                                        <CustomButton
                                            bgColor="#ffddb9"
                                            borderColor="#ffca92"
                                            text="Hablar conmigo"
                                            path="/contacto"
                                        />
                                    </div>
                                    <div className="justify-center my-2">
                                        <CustomButton
                                            text="Tratamientos"
                                            path="/servicios"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Grow>
                    </div>
                </div>

                <div className="col-span-1 sm:col-span-2 flex justify-center sm:justify-end sm:w-[100%] hidden md:block">
                    <div className="relative">
                        <Grow in={currentIndex >= 4} timeout={300}>
                            <img src={gofranMain} alt="Main post" className="max-w-full sm:w-[90%]"/>
                        </Grow>
                    </div>
                </div>
            </div>

            <Grow in={currentIndex >= 6} timeout={300}>
                <div className="mb-10 w-[90%]">
                    <Quote>
                        <strong>
                            &quot;El <strong className="underline">verdadero viaje</strong> de descubrimiento no consiste en buscar nuevos paisajes,
                            sino en tener una <strong className="underline">nueva perspectiva</strong>.&quot;
                        </strong>
                    </Quote>
                </div>
            </Grow>
        </div>
    );
}

