import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import heart from "../../assets/images/not-considering-heart.png";
import orangeStar from "../../assets/images/orange-star.png";
import CustomButton from "../Common/CustomButton";
import Quote from "../Common/Quote";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function NotConsidering (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 15, 50);

    const phrases = [
        "Empeoramiento de los síntomas.",
        "Impacto en las relaciones.",
        "Bajo rendimiento en el trabajo o en los estudios.",
        "Impacto físico.",
        "Desarrollo de hábitos no saludables.",
        "Falta de autoconocimiento.",
        "Problemas de manejo del estrés.",
        "Sentimientos de desesperanza.",
        "Impacto en la calidad de vida.",
        "Falta de Desarrollo de Habilidades."
    ];

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 mt-0 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-full grid grid-cols-6 grid-row-1 gap-4">

                <div className="col-span-6 md:col-span-3 flex flex-col items-center justify-center space-y-4 hidden md:block w-[66%]">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <div className="flex items-center justify-center mt-24">
                            <img src={heart} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 col-span-6 md:col-span-3 flex flex-col justify-end space-y-4 row-span-2 md:mr-auto md:ml-8">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-4xl sm:text-5xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left">
                            <div className="flex items-center text-2xl sm:text-2xl leading-[5rem] text-[#7087ff] drop-shadow-sm mb-2 mt-8">
                                <strong>Tienes malestar y no vas: </strong>
                            </div>
                        </h1>
                    </Grow>
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
                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                        <Grow in={currentIndex >= 3} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={heart} alt="gofran" className="w-full mr-12" />
                            </div>
                        </Grow>
                    </div>
                    <Grow in={currentIndex >= 12} timeout={300}>
                        <div className="flex justify-start mt-4">
                            <CustomButton
                                bgColor="#ffddb9"
                                borderColor="#ffca92"
                                text="Hablar conmigo"
                                path="/hablemos"
                            />
                        </div>
                    </Grow>
                </div>
                <div className="col-span-6 mt-6">
                    <Grow in={currentIndex >= 13} timeout={300}>
                        <h2 className="font-body text-[#6543AD] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify" >
                        Solo tú tienes el poder y la capacidad de entender completamente tus propias necesidades, sentimientos y deseos.
                        Nadie más puede conocer tu situación interna tan profundamente como tú mismo. Al tomar la iniciativa, te empoderas
                        y tomas control de tu vida, lo que es el primer y más crucial paso hacia cualquier cambio positivo. Reconoce tu
                        fuerza interior y da ese primer paso hacia la mejora y el crecimiento personal.
                        </h2>
                    </Grow>
                </div>
            </div>
            <Grow in={currentIndex >= 14} timeout={300}>
                <div className="absolute left-0 w-full mb-10 col-span-6 mt-6">
                    <Quote textColor="#7087ff">
                        <strong>
                            &quot;Eres la <strong className="underline" style={{ color: "#ffad57" }}>única persona</strong> que puede dar el primer paso,
                            <strong className="underline" style={{ color: "#ffad57", marginLeft: 8 }}>para ayudarte</strong>; no esperes a nadie más.&quot;
                        </strong>
                    </Quote>
                </div>
            </Grow>
            <Grow in={currentIndex >= 15} timeout={300}>
                <div className="flex justify-center col-span-6 mt-64 ms-8">
                    <CustomButton
                        text="Pedir cita"
                        path="/pedir-cita"
                    />
                </div>
            </Grow>
        </div>
    );
}

