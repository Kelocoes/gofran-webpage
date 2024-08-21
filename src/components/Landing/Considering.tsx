import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import heart from "../../assets/images/Considering-heart.png";
import orangeStar from "../../assets/images/orange-star.png";
import CustomButton from "../Common/CustomButton";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function Considering (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 50);

    const phrases = [
        "Apoyo Profesional.",
        "Desarrollo de Habilidades de Afrontamiento.",
        "Autoconocimiento y Autocomprensión.",
        "Mejora de las Relaciones.",
        "Reducción de Síntomas de Salud Mental.",
        "Apoyo en Momentos Difíciles.",
        "Fomento de la Salud Emocional.",
        "Prevención de Problemas Futuros.",
        "Apoyo Integral.",
        "Fomento de la Resiliencia."
    ];

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 flex justify-center relative mt-0 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-full grid grid-cols-6 gap-4">
                <div className="col-span-6">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-4xl sm:text-4xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                ¿Todavia estas considerando ir?
                                <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            </div>
                            <div className="flex items-center text-2xl sm:text-2xl leading-[5rem] text-[#7087ff] drop-shadow-sm text-left mb-2 mt-8">
                                <strong>Si tienes malestar y vas, consigues: </strong>
                            </div>
                        </h1>

                    </Grow>
                </div>

                <div className="mt-2 md:col-start-2 col-span-6 md:col-span-2 flex flex-col justify-center space-y-4 row-span-2">
                    {phrases.map((phrase, index) => (
                        <Grow in={currentIndex >= 3 + index} timeout={300} key={index}>
                            <div className="flex items-center">
                                <img src={orangeStar} alt="Orange Star" className="w-[3%]" />
                                <h2 className="font-body text-[#6543AD] text-md sm:text-lg ml-2">
                                    {phrase}
                                </h2>
                            </div>
                        </Grow>
                    ))}
                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden row-span-2">
                        <Grow in={currentIndex >= 3} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={heart} alt="gofran" className="w-full" />
                            </div>
                        </Grow>
                    </div>
                    <Grow in={currentIndex >= 12} timeout={300}>
                        <div className="flex justify-left mt-4 ms-8">
                            <CustomButton
                                bgColor="#ffddb9"
                                borderColor="#ffca92"
                                text="Pedir cita"
                                path="/contacto"
                            />
                        </div>
                    </Grow>
                </div>

                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 hidden md:block">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={heart} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                </div>
            </div>
        </div>
    );
}
