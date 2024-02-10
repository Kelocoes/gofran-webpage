import React from "react";

import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";

import Zoom from "@mui/material/Zoom";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function Description(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });
    const currentIndex = useIncrementalIndexEffect(inView, 3, 150);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center">
            <div className="w-[80%] md:w-[65%] my-6 z-10 flex justify-center relative flex-col">
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={plant} alt="Plant" className="absolute top-22 -left-56" />
                </Zoom>
                <Zoom in={currentIndex >= 2} timeout={300}>
                    <img src={plant2} alt="Plant-2" className="absolute top-32 -right-8" />
                </Zoom>
                <Zoom in={currentIndex >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                        No es como empiezas sino como continúas
                    </h1>
                </Zoom>
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center space-x-8 space-y-5">
                    <Zoom in={currentIndex >= 3} timeout={300}>
                        <div className="relative flex justify-center pt-6">
                            <div className="border-4 border-white bg-neutral p-10 absolute z-0 -left-8 top-0 bottom-8 w-full"></div>
                            <h2 className="border-4 border-white bg-[#dce2ff] text-neutral font-body text-lg font-bold p-5 z-10 w-full ">
                                La obtención de resultados en las sesiones clínicas es un proceso que requiere paciencia y compromiso, tanto por parte
                                del terapeuta como del paciente. Es esencial reconocer que el cambio psicológico y emocional a menudo se desarrolla de
                                manera gradual (no tenemos una barita mágica) y que la evolución del individuo a lo largo del tiempo puede ser un
                                indicador más fiable de los resultados terapéuticos que expectativas inmediatas. <br /><br />
                                La colaboración activa y la participación proactiva del paciente son factores muy importantes en el proceso terapéutico.
                                La disposición del individuo para abordar sus desafíos, explorar nuevas perspectivas y aplicar estrategias aprendidas fuera
                                de las sesiones son aspectos determinantes para el éxito de la terapia. La autenticidad y la apertura en la relación
                                terapéutica son fundamentales para fomentar un entorno de trabajo conjunto, donde tanto el terapeuta como el
                                paciente contribuyen de manera significativa al proceso de cambio y desarrollo personal. El trabajo en equipo puede
                                establecer una base sólida para la consecución de metas terapéuticas. Es crucial poner un plan de acción para
                                alcanzarlos. <br /><br />
                                Por mi parte proporcionaré orientación experta, estrategias eficaces y un espacio seguro para la exploración, mientras
                                que el paciente contribuye con su compromiso activo, reflexión y aplicación práctica de las habilidades adquiridas.
                                En este marco colaborativo, el tiempo se convierte en un aliado fundamental. Los resultados significativos a menudo
                                emergen de manera más evidente cuando se establece una relación terapéutica sólida y se trabaja de manera constante
                                en el proceso de cambio. La paciencia y la perseverancia, son esenciales para permitir que la transformación psicológica
                                se desarrolle de manera orgánica y sostenible a lo largo plazo.
                            </h2>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}