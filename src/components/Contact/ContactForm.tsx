import React from "react";

import { useInView } from "react-intersection-observer";

import Zoom from "@mui/material/Zoom";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";


import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import orangeStar from "../../assets/images/orange-star.png";

import emailjs from "@emailjs/browser";

import { useEnv } from "../EnvContext";

import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    cellphone: string;
    subject: string;
    message: string;
};

export default function ContactForm(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 6, 150);
    const currentIndex2 = useIncrementalIndexEffect(inView2, 4, 150);
    const { serviceId, templateId, mailPublicKey } = useEnv();
    const [isActive, setIsActive] = React.useState(true);
    const { handleSubmit: getInfo, register: registro, reset } = useForm();
    const form = React.useRef<HTMLFormElement>(null);

    const phrases = [
        "Paso 1: Rellenar y enviar el formulario.",
        "Paso 2: Cuadrar día y hora para empezar la terapia.",
        "Paso 3: La reserva se finaliza cuando se realice el pago.",
        "Paso 4: Una vez reciba el comprobante de pago, te enviaré el documento de consentimiento de atención psicológica informado y protección de datos.",
        "Paso 5: Comenzar el proceso."
    ];

    const sendEmail = (data: object): void => {

        try {
            const dataTyped = data as FormValues;
            console.log(data);

            const currentForm = form.current;
            if (currentForm == null || dataTyped.subject === "Horario") return;
            reset();
            setIsActive(false);
            
            emailjs.sendForm(serviceId, templateId, currentForm, mailPublicKey)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            
        } catch (error) {
            console.error(error);
        }

    };


    return (
        <div className="flex flex-col items-center justify-center">
            <div ref={ref} className="w-[95%] my-6 z-10 flex justify-center relative flex-col">
                <Zoom in={currentIndex >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-6xl text-[#6543AD] drop-shadow-lg text-center lg:text-right">
                        <div className="flex items-center justify-end">
                            <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            <h1> Pasos a seguir para la&nbsp;<strong>Reserva</strong> </h1>
                        </div>
                        <div className="float-right h-1 w-[30%] bg-[#6543AD] my-6"></div>
                    </h1>
                </Zoom>
                <div className="flex flex-col lg:flex-row justify-center items-center space-x-8 space-y-5 w-[90%]">
                    <Zoom in={currentIndex >= 2} timeout={300}>
                        <div className="mt-8 sm:ml-32 flex flex-col justify-center">
                            {phrases.map((phrase, index) => (
                                <Zoom in={currentIndex >= 2 + index} timeout={300} key={index}>
                                    <div className="flex items-center mb-2">
                                        <img src={orangeStar} alt="Orange Star" className="w-[3%]" />
                                        <h2 className="font-body text-[#6543AD] text-md sm:text-3xl ml-3 ">
                                            <strong>{phrase.split(":")[0]}</strong>:{phrase.split(":")[1]}
                                        </h2>
                                    </div>
                                </Zoom>
                            ))}
                        </div>
                    </Zoom>
                </div>
            </div>
            <div ref={ref2} className="w-[95%] my-6 z-10 flex justify-center relative flex-col">
                <Zoom in={currentIndex2 >= 1} timeout={300}>
                    <h1 className="font-title text-5xl sm:text-6xl text-[#6543AD]  mb-4 drop-shadow-lg text-center lg:text-left">
                        <div className="flex items-center">
                            <strong>Contacta</strong>&nbsp;conmigo
                            <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                        </div>
                        <div className="h-1 w-[30%] bg-[#6543AD] my-6" />
                    </h1>
                </Zoom>
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-16 space-y-5 lg:space-y-0">
                    <Zoom in={currentIndex2 >= 2} timeout={300}>
                        <div className="relative flex justify-center pt-6 w-full md:w-2/3 lg:w-[40%] xl:w-[45%]">
                            <div className="border-4 border-white bg-[#FED8B1] text-[#6543AD] font-body text-xl  p-5 z-10 w-[80%] text-center">
                                <h2 className="font-body text-4xl py-2">
                                    Contacto
                                </h2>
                                <form ref={form} onSubmit={getInfo(sendEmail)}>
                                    <div className="flex flex-col space-y-3 justify-center items-center">
                                        <input type="text" placeholder="Nombre" className="input bg-white w-full max-w-sm" maxLength={40} {...registro("name", { required: true })} />
                                        <input type="text" placeholder="Email" className="input bg-white w-full max-w-sm" maxLength={40} {...registro("email", { required: true })} />
                                        <input type="text" placeholder="Teléfono" className="input bg-white w-full max-w-sm" maxLength={20} {...registro("cellphone", { required: true })} />
                                        <select className="select bg-white w-full max-w-sm" {...registro("subject", { required: true })}>
                                            <option disabled selected>Horario</option>
                                            <option>Mañana</option>
                                            <option>Tarde</option>
                                        </select>
                                        <textarea className="textarea bg-white w-full max-w-sm" placeholder="Descripción" {...registro("message", { required: true })}></textarea>
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
                </div>
            </div>
        </div>
    );
}