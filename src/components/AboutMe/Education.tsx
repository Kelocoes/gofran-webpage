import { useState } from "react";
import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import CustomButton from "../Common/CustomButton";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import educationGofran from "../../assets/images/education-gofran.png";
import orangeStar from "../../assets/images/orange-star.png";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function Education (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 15, 50);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = ():void => {
        setIsOpen(!isOpen);
    };

    const phrasesOficial = [
        "Grado en Psicologia con mención en Psicologia Sanitaria en la Universitat Oberta de Cataluña. (UOC).",
        "Master en Neuropsicología en la Universitat Oberta de Cataluña. (UOC).",
        "Master en Psicologia General Sanitaria en la Universidad Internacional de la Rioja (UNIR).",
        "Especialización en apego y Psicología Perinatal en la Universidad Internacional de la Rioja (UNIR)."
    ];
    const phrasesSpecific = [
        "Nivel I y II de EMDR por la Asociación Española de EMDR con Anabel Gonzalez.",
        "Posgrado de Trauma con el método Parcuve de Manuel Hernandez.",
        "Curso de abordaje del estrés postraumático con Anabel Gonzalez.",
        "Curso de Evaluando la Disociación con Anabel Gonzalez.",
        "Curso de Estrés con David Lanzas",
        "Aplicación de EMDR en situaciones de agresiones sexuales en el ámbito clínico y comunitario con el COPC.",
        "Actualidad de Trauma, Fertilidad y EMDR desde el Dialogo Clínico con el COPC.",
        "Curso de neurobiología, descripción y tratamiento del TOC con Manuel Hernandez."
    ];

    return (
        <div ref={ref} className="w-[85%] z-10 mt-[250px] sm:mt-[100px]">
            <div className="flex justify-center">
                <button
                    onClick={toggleOpen}
                    className="relative text-xl p-3 rounded-lg bg-[#5f3c87] text-white shadow-lg hover:bg-[#6b459b] transition duration-300 ease-in-out flex items-center justify-center"
                >
                    <img
                        src={orangeStar}
                        alt="Decorative Icon"
                        className="w-6 h-6 mr-2"
                    />
                    {isOpen ? "Cerrar Formaciones" : "Abrir Formaciones"}
                </button>
            </div>

            <div
                className={`transition-all duration-700 ease-in-out transform ${
                    isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <Grow in={currentIndex >= 2} timeout={300}>
                    <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
                </Grow>
                <Grow in={currentIndex >= 2} timeout={300}>
                    <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
                </Grow>
                <div className="w-full grid grid-cols-6 grid-row-1 gap-4">
                    <div className="col-span-6 md:col-span-3 flex items-center justify-center">
                        <Grow in={currentIndex >= 3} timeout={300}>
                            <div className="flex items-center justify-center w-full mt-44 hidden md:block">
                                <img src={educationGofran} alt="gofran" className="w-[100%]" />
                            </div>
                        </Grow>
                    </div>
                    <div className="col-span-6 md:col-span-3 flex flex-col justify-end space-y-4 row-span-2 md:mr-auto md:ml-8 mt-8">
                        <div className="col-span-6">
                            <Grow in={currentIndex >= 1} timeout={300}>
                                <h1 className="font-title text-4xl sm:text-4xl text-[#4d4b44] font-bold drop-shadow-lg text-left lg:text-left">
                                    <div className="flex items-center justify-left">
                                        Formaciones
                                        <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                                    </div>
                                </h1>
                            </Grow>
                        </div>
                        <Grow in={currentIndex >= 4} timeout={300}>
                            <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-left">
                                Me gustaría compartir contigo de manera más detallada mis estudios, cabe
                                mencionar que estoy participando en un programa de investigación en
                                ECEERS sobre los efectos neuropsicológicos de los psicodélicos.
                            </h2>
                        </Grow>
                        <div className="font-title flex items-center text-xl sm:text-2xl leading-[5rem] text-[#7087ff] drop-shadow-sm text-left mb-0 md:mb-2 mt-8">
                            <strong>Formaciones Oficiales </strong>
                        </div>
                        {phrasesOficial.map((phrase, index) => (
                            <Grow in={currentIndex >= 3 + index} timeout={300} key={index}>
                                <div className="flex items-center">
                                    <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                                    <h2 className="font-body text-[#6543AD] text-md sm:text-lg ml-2">
                                        {phrase}
                                    </h2>
                                </div>
                            </Grow>
                        ))}
                        <div className="font-title flex items-center text-xl sm:text-2xl leading-[5rem] text-[#7087ff] drop-shadow-sm text-left mb-0 md:mb-2 mt-8">
                            <strong>Formaciones Especificas </strong>
                        </div>
                        {phrasesSpecific.map((phrase, index) => (
                            <Grow in={currentIndex >= 3 + index} timeout={300} key={index}>
                                <div className="flex items-center">
                                    <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                                    <h2 className="font-body text-[#6543AD] text-md sm:text-lg ml-2">
                                        {phrase}
                                    </h2>
                                </div>
                            </Grow>
                        ))}
                        <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                            <Grow in={currentIndex >= 3} timeout={300}>
                                <div className="flex items-center justify-center">
                                    <img src={educationGofran} alt="gofran" className="w-full" />
                                </div>
                            </Grow>
                        </div>
                        <Grow in={currentIndex >= 12} timeout={300}>
                            <div className="flex justify-center mt-4">
                                <CustomButton
                                    bgColor="#ffddb9"
                                    borderColor="#ffca92"
                                    text="Hablar conmigo"
                                    path="/hablemos"
                                />
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>
        </div>
    );
}
