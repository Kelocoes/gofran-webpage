import React from "react";
import { useInView } from "react-intersection-observer";
import Grow from "@mui/material/Grow";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";
import { useEnv } from "../EnvContext";
import orangeStar from "../../assets/images/orange-star.png";

type FormValues = {
    name: string;
    email: string;
    cellphone: string;
    subject: string;
    message: string;
};

export default function ContactForm (): JSX.Element {
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex2 = useIncrementalIndexEffect(inView2, 4, 50);
    const { serviceId, templateId, mailPublicKey } = useEnv();
    const [isActive, setIsActive] = React.useState(true);
    const { handleSubmit: getInfo, register: registro, reset } = useForm();
    const form = React.useRef<HTMLFormElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const phrases = [
        "Responsable: Gofran Rawas Karbouje.",
        "Finalidad del tratamiento de los datos para la que usted da su consentimiento será la de gestionar los datos de los pacientes que accedan al formulario de contacto de la página web de la entidad, contestar sus consultas.",
        "CESIONES: No se prevén cesiones, excepto por obligación legal o requerimiento judicial.",
        "Cualquier duda pueden ponerse en contacto conmigo a través de gofranpsicologa@gmail.com."
    ];
    const toggleOpen = ():void => {
        setIsOpen(!isOpen);
    };
    const sendEmail = (data: object): void => {
        try {
            const dataTyped = data as FormValues;

            const currentForm = form.current;
            if (currentForm == null || dataTyped.subject === "Horario") return;
            reset();
            setIsActive(false);

            emailjs.send(serviceId, templateId, dataTyped, mailPublicKey)
                .then((result) => {
                    console.log(result);
                }, (error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div ref={ref2} className="w-[90%] flex justify-center relative flex-col">
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-16">
                    <Grow in={currentIndex2 >= 2} timeout={300}>
                        <div className="relative flex justify-center pt-6 w-full lg:w-[80%] xl:w-[90%]">
                            <div className="border-4 border-white bg-[#d8dffe] text-[#6543AD] font-body text-xl  p-5 z-10 w-[80%] text-center">
                                <h1 className="font-title text-2xl sm:text-4xl text-[#4d4b44] font-bold mb-5 drop-shadow-lg text-left lg:text-left divide-y divide-solid">
                                    <div className="flex items-center justify-center">
                                        Contacto
                                    </div>
                                </h1>
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
                                        {/* Desplegable aqui */}
                                        <div className="mt-2 ml-6 mr-8 md:col-span-4 flex flex-col justify-left space-y-4 row-span-2">
                                            <button
                                                onClick={toggleOpen}
                                                className="px-4 py-2 rounded-md"
                                            >
                                                {isOpen ? "Cerrar" : "Ver más"}
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                                                {phrases.map((phrase, index) => (
                                                    <div className="flex items-center text-justify" key={index}>
                                                        <img src={orangeStar} alt="Orange Star" className="w-[3%]" />
                                                        <h2 className="font-body text-[#6543AD] text-sm sm:text-xl ml-2">
                                                            {phrase}
                                                        </h2>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
                    </Grow>
                </div>
            </div>
        </div>
    );
}
