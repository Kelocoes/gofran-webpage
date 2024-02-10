import React from "react";

import { useInView } from "react-intersection-observer";

import Zoom from "@mui/material/Zoom";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

import heartshorizontal from "../../assets/images/hearts-horizontal.png";

import emailjs from "@emailjs/browser";

import { useEnv } from "../EnvContext";

import verticalstars from "../../assets/images/vertical-stars.png";

export default function ContactForm(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 3, 150);
    const currentIndex2 = useIncrementalIndexEffect(inView2, 4, 150);
    const { serviceId, templateId, mailPublicKey } = useEnv();
    const [isActive, setIsActive] = React.useState(true);
    const form = React.useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const currentForm = form.current;
        if (currentForm == null) return;


        emailjs.sendForm(serviceId, templateId, currentForm, mailPublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setIsActive(false);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <div ref={ref} className="w-[80%] md:w-[65%] my-6 z-10 flex justify-center relative flex-col">
                <Zoom in={currentIndex >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                        Cuéntame en qué puedo ayudarte
                    </h1>
                </Zoom>
                <div className="flex flex-col lg:flex-row justify-center items-center space-x-8 space-y-5">
                    <Zoom in={currentIndex >= 3} timeout={300}>
                        <div className="relative flex justify-center pt-6">
                            <div className="border-4 border-white bg-neutral p-10 absolute z-0 -left-8 top-0 bottom-8 w-full"></div>
                            <h2 className="border-4 border-white bg-[#dce2ff] text-neutral font-body text-xl font-bold p-5 z-10 w-full text-center">
                                ¿Tienes dudas? <br />
                                Rellena el formulario de contacto y te responderemos en la mayor brevedad posible.
                                <img src={heartshorizontal} alt="Hearts horizontal" className="w-1/3 mx-auto" />
                            </h2>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div ref={ref2} className="w-[80%] md:w-[65%] my-6 z-10 flex justify-center relative flex-col">
                <Zoom in={currentIndex2 >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                        Contacto
                    </h1>
                </Zoom>
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-16 space-y-5 lg:space-y-0">
                    <Zoom in={currentIndex2 >= 3} timeout={300}>
                        <div className="relative flex justify-center pt-6 w-full md:w-1/2">
                            <div className="border-4 border-white bg-neutral p-10 absolute z-0 -left-8 top-0 bottom-8 w-full"></div>
                            <div className="border-4 border-white bg-[#dce2ff] text-neutral font-body text-xl font-bold p-5 z-10 w-full text-center">
                                <h2 className="font-body text-4xl py-2">
                                    Contacto
                                </h2>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="flex flex-col space-y-3 justify-center items-center">
                                        <input type="text" name="name" placeholder="Nombre" className="input w-full max-w-sm" maxLength={50} />
                                        <input type="text" name="email" placeholder="Email" className="input w-full max-w-sm" maxLength={50} />
                                        <input type="text" name="cellphone" placeholder="Teléfono" className="input w-full max-w-sm" maxLength={20} />
                                        <input type="text" name="subject" placeholder="Asunto" className="input w-full max-w-sm" maxLength={20} />
                                        <textarea name="message" className="textarea textarea-secondary w-full max-w-sm" placeholder="Descripción"></textarea>
                                        <button
                                            className={`btn ${!isActive ? "btn-disabled" : ""} btn-secondary`}
                                            tabIndex={-1}
                                            aria-disabled="true"
                                            type="submit"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom in={currentIndex2 >= 4} timeout={300}>
                        <div className="relative flex justify-center pt-6 w-full md:w-1/2">
                            <div className="border-4 border-white bg-neutral p-10 absolute z-0 -left-8 top-0 bottom-8 w-full"></div>
                            <div className="border-4 border-white bg-[#dce2ff] p-5 z-10 w-full flex flex-row items-center">
                                <img src={verticalstars} alt="Vertical stars" className="h-2/3 mr-3"/>
                                <h2 className="text-neutral font-body font-bold text-left lg:text-lg xl:text-2xl">
                                    Sesión privada y personalizada. <br />
                                    Evaluación Integral. <br />
                                    Plan de tratamiento personalizado. <br />
                                    Recursos Adicionales. <br />
                                    Apoyo Emocional. <br />
                                    Desarrollo de Habilidades y Estrategias. <br />
                                    Planificación y Establecimiento de Objetivos. <br />
                                    Confidencialidad y Ética.
                                </h2>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}