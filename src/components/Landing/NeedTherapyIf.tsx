import React from "react";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import lavanda from "../../assets/images/lavanda.png";
import orangeStar from "../../assets/images/orange-star.png";

import Zoom from "@mui/material/Zoom";

import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function NeedTherapyIf(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 11, 150);
    const nav = useNavigate();

    const navigate = (path: string): void => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
        nav(path);
    };
    
    const phrases = [
        "Quieres empieza a trabajar en ti, crecer y florecer.",
        "No sabes como establecer vínculos con los demás.",
        "Quieres aprender a poner límites.",
        "Quieres aumentar tu autoestima para tu bien estar.",
        "No sabes como expresar tus sentimientos.",
        "Quieres aprender a gestionar tus emociones.",
        "Sientes un nudo en la garganta y no sabes por qué.",
        "Te duelen cosas del pasado y sientes que no avanzas.",
        "Dudas de tus capacidades."
    ];

    return (
        <div ref={ref} className="w-[95%] my-6 z-10 flex justify-center relative mt-0 sm:mt-24">
            <Zoom in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Zoom>
            <Zoom in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Zoom>
            <div>
                <Zoom in={currentIndex >= 3} timeout={300}>
                    <div className="flex items-center justify-end">
                        <img src={lavanda} alt="Lavanda" className="w-[90%] block sm:hidden mb-10" />
                    </div>
                </Zoom>
                <Zoom in={currentIndex >= 1} timeout={300}>
                    <h1 className="font-title text-4xl sm:text-6xl text-[#6543AD] font-bold mb-4 drop-shadow-lg text-left lg:text-right">
                        <div className="flex items-center justify-end">
                            <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            Situaciones en las que puedo ayudarte
                        </div>
                    </h1>
                </Zoom>
                <div className="flex flex-row items-center">
                    <Zoom in={currentIndex >= 3} timeout={300}>
                        <div className="flex items-center justify-end">
                            <img src={lavanda} alt="Lavanda" className="w-[90%] hidden sm:block" />
                        </div>
                    </Zoom>
                    <div className="mt-8 sm:ml-32 flex flex-col justify-center">
                        {phrases.map((phrase, index) => (
                            <Zoom in={currentIndex >= 3 + index} timeout={300} key={index}>
                                <div className="flex items-center">
                                    <img src={orangeStar} alt="Orange Star" className="w-[5%]" />
                                    <h2 className="font-body text-[#6543AD] text-md sm:text-3xl ml-2">
                                        {phrase}
                                    </h2>
                                </div>
                            </Zoom>
                        ))}
                        <div className="flex justify-center mt-4">
                            <button
                                className="font-body text-[#6543AD] text-md sm:text-2xl sm:py-5 px-6 text-center border-4 rounded-3xl bg-[#FED8B1] border-[#FABC7B] w-max sm:mr-64"
                                onClick={() => navigate("/contacto")}
                            >
                                Pedir Cita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}