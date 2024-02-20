import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Zoom from "@mui/material/Zoom";

import { useInView } from "react-intersection-observer";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

import anxiety from "../../assets/images/anxiety.png";
import brainpuzzlecolor from "../../assets/images/brain-puzzle-color.png";
import selfhug from "../../assets/images/self-hug.png";
import braincolor from "../../assets/images/brain-color.png";
import fobia from "../../assets/images/fobia.png";
import therapy from "../../assets/images/therapy.png";
import symbol from "../../assets/images/symbol.png";
import puzzle from "../../assets/images/puzzle.png";
import virtualtherapy from "../../assets/images/virtual-therapy.png";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";

export default function Services(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 2, 150);

    return (
        <div className="z-10 mt-6 sm:mt-0 sm:p-6 flex justify-center items-center flex-col relative">
            <Zoom in={currentIndex >= 1} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-48 -left-56 md:-left-24" />
            </Zoom>
            <Zoom in={currentIndex >= 1} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Zoom>
            <Zoom in={currentIndex >= 2} timeout={300}>
                <h1 ref={ref} className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                    Tratamientos / Servicios
                </h1>
            </Zoom>
            <div className="w-3 bg-neutral h-3 rounded-full hidden lg:block"></div>
            <VerticalTimeline
                lineColor="#7189F8"
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Ansiedad
                        </h1>
                        <div>
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }} >
                                La ansiedad es una <strong>respuesta natural</strong> del
                                organismo ante situaciones percibidas
                                como amenazantes o desafiantes. Es una
                                emoción que puede manifestarse como
                                preocupación, nerviosismo o inquietud.
                            </h2>
                            <img src={anxiety} alt="Anxiety" className="float-end w-1/3" />
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                Las causas pueden ser debido a dos factores:
                                hereditarias o por causas externas. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/55€
                            </h2>
                            <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Depresión
                        </h1>
                        <div>
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }} >
                                La depresión es un trastorno mental
                                caracterizada por una <strong>tristeza persistente</strong> y
                                por pérdidas de interés en las actividades
                                con las que disfrutabas.
                            </h2>
                            <img src={brainpuzzlecolor} alt="Depression image" className="float-start w-1/3" />
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                La depresión es el resultado de las
                                interacciones entre los factores sociales,
                                psicológicos y biológicos. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/55€ <br />
                                <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                            </h2>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Autoestima
                        </h1>
                        <div>
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }} >
                                La autoestima es la valoración y percepción
                                general que tenemos de <strong>nosotros mismos</strong>{" "}
                                y en la manera en que enfrentamos los
                                desafíos de la vida.
                            </h2>
                            <img src={selfhug} alt="Self hug" className="float-end w-1/3" />
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                Críticas Constantes o Desaprobación,
                                Compararse conotros y rechazos repetidos. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/55€
                            </h2>
                            <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            TDAH
                        </h1>
                        <div>
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }} >
                                Trastorno por Déficit de Atención e
                                Hiperactividad (TDAH) es una condición
                                neurobiologica que afecta la capacidad de
                                una persona para mantener la atención,
                                controlar la impulsividad y regular la
                                actividad motora.
                            </h2>
                            <img src={braincolor} alt="Brain color image" className="float-start w-1/3" />
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                Genéticas,factores prenatales o perinatales,
                                factores sociales y ambientales. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/55€ <br />
                                <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                            </h2>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Fobias
                        </h1>
                        <div>
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }} >
                                La fobia es un trastorno de ansiedad del{" "}
                                <strong>miedo intenso</strong> hacia un objeto, situación o
                                actividad específica.Esta reacción de temor
                                va más allá de lo normal.
                            </h2>
                            <img src={fobia} alt="Fobia" className="float-end w-1/3" />
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                Experiencias Traumáticas, Aprendizaje
                                por Observación, Experiencias Negativas y
                                Factores Genéticos y Biológicos. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/55€
                            </h2>
                            <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            T.O.C
                        </h1>
                        <div>
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }} >
                                El Trastorno Obsesivo-Compulsivo (TOC)
                                esuntrastornomental caracterizadopor
                                lapresenciade obsesiones y compulsiones
                            </h2>
                            <img src={therapy} alt="Therapy image" className="float-start w-1/3" />
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                Factores Genéticos, Neurobiológicas,
                                Factores Ambientales, Cogniciones
                                Anómalas, Aprendizaje y Condicionamiento
                                y Neuroplasticidad. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/60€ <br />
                                <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                            </h2>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Neuropsicología
                        </h1>
                        <div>
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }} >
                                La neuropsicología es una disciplina
                                interdisciplinaria que examina cómo el cerebro
                                afecta el comportamiento y la cognición.
                            </h2>
                            <img src={puzzle} alt="Puzzle" className="float-end w-1/2 md:w-1/3" />
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Causas:</strong> <br />
                                Trastornos del Desarrollo, Infecciones del
                                Sistema Nervioso, Lesiones Cerebrales,Traumáticas,
                                Enfermedades Neurológicas, Accidentes Cerebrovasculares,
                                Tumores Cerebrales, Trastornos Genéticos y
                                Consumo de Sustancias. <br />
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/85€
                            </h2>
                            <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Primera visita
                        </h1>
                        <div>
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }} >
                                Comprendo que el primer encuentro puede
                                generar algunas expectativas e incluso cierta
                                preocupación, y quiero asegurarle que estoy
                                aquí para apoyarle/a en cada paso del
                                proceso. Mi objetivo es crear un espacio
                                seguro y colaborativo donde podamos
                                trabajar juntos/as para abordar sus
                                necesidades y metas.
                            </h2>
                            <img src={virtualtherapy} alt="Virtual Therapy" className="float-start w-1/3" />
                            <h2 className="font-body text-right" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Consulta Online:</strong> <br />
                                45 minutos/40€ <br />
                                <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                            </h2>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ boxShadow: "0 0 10px 5px #6e6e6e" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#C6D0FF", color: "#7189f8", borderWidth: "4px", borderColor: "#7189f8" }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-body text-4xl font-bold pb-4" style={{ color: "#000" }}>
                            Pack mensual
                        </h1>
                        <div>
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }} >
                                Para aquellas personas,que necesiten sesiones
                                semanales, tienen disponible el pack mensual, en el
                                cual, se compone por cuatro sesiones a un precio
                                reducido, por lo tanto, obteniendo este pack estas
                                ahorrando!
                            </h2>
                            <img src={symbol} alt="Symbol" className="float-end w-1/3" />
                            <h2 className="font-body text-left" style={{ color: "#000", fontSize: "17px" }}>
                                <strong>Consulta Online:</strong> <br />
                                4 sesiones de 45 minutos/160€ (pago único)
                            </h2>
                            <button className="btn btn-sm btn-neutral text-white">Pedir cita</button>
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <div className="w-3 bg-neutral h-3 rounded-full hidden lg:block"></div>
        </div >
    );
}