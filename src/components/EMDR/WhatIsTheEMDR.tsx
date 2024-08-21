import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import orangeStar from "../../assets/images/orange-star.png";
import Quote from "../Common/Quote";
import CustomButton from "../Common/CustomButton";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function WhatIsTheEMDR (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 15, 50);

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 mb-10">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-full grid grid-cols-6 grid-row-1 gap-4">
                <div className="col-span-6 md:col-span-6 flex flex-col justify-end space-y-4 row-span-2 md:mr-auto md:ml-8 mt-20">
                    <div className="col-span-6">
                        <Grow in={currentIndex >= 1} timeout={300}>
                            <h1 className="font-title text-4xl sm:text-4xl text-[#4d4b44] font-bold drop-shadow-lg text-left lg:text-left">
                                <div className="flex items-center justify-left">
                                    ¿Que es la EMDR?
                                    <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                                </div>
                            </h1>
                        </Grow>
                    </div>
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            La EMDR es una técnica terapéutica diseñada para ayudar a procesar y liberar las experiencias negativas o traumáticas
                            atrapadas en tu memoria que afectan tu bienestar emocional.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            EMDR: &quot;Eye Movement Desensitization and Reprocessing&quot; que en español se traduce como &quot;Desensibilización y Reprocesamiento
                            por medio de Movimientos Oculares.&quot; Shapiro, F. (1989)
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Nuestro cuerpo está naturalmente preparado para sanar, como cuando cicatrizan las heridas en nuestra piel. Las experiencias
                            negativas, al igual que otras vivencias, suelen integrarse mientras dormimos, especialmente durante la fase REM del sueño. Por
                            eso, a veces nos vamos a la cama preocupados y despertamos con una nueva perspectiva.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Sin embargo, en ocasiones, estas experiencias adversas no se procesan adecuadamente y, en lugar de ser integradas, se quedan
                            con nosotros en forma de creencias o patrones de comportamiento disfuncionales que nos causan malestar.<br></br>
                            Con la terapia EMDR, activamos el sistema de procesamiento adaptativo de la información (PAI) que tenemos &quot;de fábrica&quot;.
                            Durante las sesiones, reproducimos los movimientos oculares que ocurren durante el sueño REM, lo que nos permite conectar con
                            el contenido de esas experiencias y reubicarlas adecuadamente. Esto ayuda a reducir la incomodidad, la ansiedad y el
                            sufrimiento que te generan a diario.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Aunque no podemos convertir las experiencias negativas en buenos recuerdos, sí podemos lograr que dejen de interferir en tu
                            vida diaria, permitiéndote convivir con ellas de manera más saludable.
                            Para más información sobre este enfoque, te dejo un par de enlaces:
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 7} timeout={300}>
                        <div className="flex items-center">
                            <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                            <h2 className="font-body text-[#4e5e9d] text-md sm:text-lg ml-2">
                                <a href ="https://www.emdr-es.org/Sobre-EMDR/Que-es-EMDR" target="_blank" rel="noopener noreferrer"> EMDR España. ¿Qué es EMDR?</a>
                            </h2>
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 8} timeout={300}>
                        <div className="flex items-center">
                            <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                            <h2 className="font-body text-[#4e5e9d] text-md sm:text-lg ml-2">
                                <a href ="https://anabelgonzalez.es/informacion-para-pacientes/" target="_blank" rel="noopener noreferrer">González, A. Información para pacientes </a>
                            </h2>
                        </div>
                    </Grow>
                </div>
            </div>
            <Grow in={currentIndex >= 14} timeout={300}>
                <div className="absolute left-0 w-full mb-10 col-span-6 mt-6">
                    <Quote textColor="#7087ff">
                        <strong>
                            &quot;Eres la <strong className="underline" style={{ color: "#ffad57" }}>única persona</strong> que puede dar el primer paso,
                            <strong className="underline" style={{ color: "#ffad57" }}>para ayudarte</strong>; no esperes a nadie más.&quot;
                        </strong>
                    </Quote>
                </div>
            </Grow>
            <Grow in={currentIndex >= 15} timeout={300}>
                <div className="flex justify-center col-span-6 mt-[400px] md:mt-64  ms-8">
                    <CustomButton
                        text="Reservar Cita"
                        path="/pedir-cita"
                    />
                </div>
            </Grow>

        </div>
    );
}
