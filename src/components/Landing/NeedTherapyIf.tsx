import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import gofran from "../../assets/images/gofran-needtherapyif.png";
import orangeStar from "../../assets/images/orange-star.png";
import CustomButton from "../Common/CustomButton";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function NeedTherapyIf (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 13, 50);

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
        <div ref={ref} className="w-[85%] my-6 z-10 flex justify-center relative mt-[300px] sm:mt-32">
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
                                <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                                Situaciones en las que puedo ayudarte
                            </div>
                        </h1>
                    </Grow>
                </div>

                <div className="mt-2 md:col-start-2 col-span-3 md:col-span-3 flex flex-col justify-center space-y-4 row-span-2">
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
                </div>

                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4">
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={gofran} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 10} timeout={300}>
                        <div className="flex justify-center mt-4 ml-0 sm:mr-14">
                            <CustomButton
                                text="Habla conmigo"
                                path="/contacto"
                            />
                        </div>
                    </Grow>
                </div>
            </div>
        </div>
    );
}
