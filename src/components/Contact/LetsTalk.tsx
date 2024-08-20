import React from "react";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import Contact from "../../assets/images/contact-image.png";
import Grow from "@mui/material/Grow";
import orangeStar from "../../assets/images/orange-star.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import logo from "../../assets/images/logo.png";
import { useInView } from "react-intersection-observer";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";
import { EnvProvider } from "../EnvContext";
import ContactForm from "../Contact/ContactForm";

export default function LetsTalk(): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 20, 150);

    return (
        <div ref={ref} className="w-full bg-[#ffeedd] my-0 z-10 flex flex-col items-center justify-center relative mt-0 sm:mt-0">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[85%] max-w-7xl grid grid-cols-6 gap-4">
                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 mt-16 hidden md:block">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={Contact} alt="gofran" className="w-[90%]" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2 w-[90%] md:w-[100%] ml-4">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-4xl sm:text-4xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                Conversemos
                                <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" />
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            No dudes en ponerte en contacto conmigo utilizando la información de contacto a continuación. Te responderé en menos de 24 horas.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Estás a solo un paso de comenzar un viaje transformador hacia tu bienestar emocional. Aquí encontrarás varias formas de comunicarte conmigo para dar inicio a este importante camino. Estoy ansiosa por escucharte y ser parte de tu camino hacia un bienestar emocional y psicológico más pleno. No lo dejes para después; tu salud emocional es lo más valioso que tienes.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                            Aquí te dejo diferentes opciones:
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 7} timeout={300}>
                        <div className="flex items-center">
                            <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                            <h2 className="font-body text-[#4e5e9d] text-md sm:text-lg ml-2">
                                Correo electrónico: psicologagofran@gmail.com <a href="mailto:psicologagofran@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <MailOutlinedIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                                </a>
                            </h2>
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 8} timeout={300}>
                        <div className="flex items-center">
                            <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                            <h2 className="font-body text-[#4e5e9d] text-md sm:text-lg ml-2">
                                Whatsapp: +33652443565 <a href="https://wa.me/message/EEMGNA7SL4S5P1" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                                </a>
                            </h2>
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 9} timeout={300}>
                        <div className="flex items-center">
                            <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                            <h2 className="font-body text-[#4e5e9d] text-md sm:text-lg ml-2">
                                Instagram: @psicologa_gofran <a href="https://www.instagram.com/psicologa_gofran/" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                                </a>
                            </h2>
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 10} timeout={300}>
                        <div className="flex items-center">
                            <img src={orangeStar} alt="Orange Star" className="w-[2%]" />
                            <h2 className="font-body text-[#4e5e9d] text-md sm:text-lg ml-2">
                                Rellenando el formulario que tienes más a bajo
                            </h2>
                        </div>
                    </Grow>
                </div>

                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden w-[90%]">
                    <Grow in={currentIndex >= 11} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={Contact} alt="gofran" className="w-full" />
                        </div>
                    </Grow>
                </div>
            </div>
            <Grow in={currentIndex >= 12} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 13} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[85%] grid grid-cols-6 gap-4">

                <div className="col-span-6 md:col-span-3 flex flex-col items-center justify-center md:block w-[90%]">
                    <Grow in={currentIndex >= 14} timeout={300}>
                        <h1 className="font-title text-2xl sm:text-2xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                ¿En que puedo ayudarte? 
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 15} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lgrounded-xl drop-shadow-md text-justify" >
                            Contacta conmigo si tienes cualquier duda sobre la terapia
                            online. Para mí es muy importante atenderte con la mayor
                            brevedad posible por lo que recibirás mi respuesta antes de 24
                            horas.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 16} timeout={300}>
                        <div className="flex justify-center">
                            <img src={logo} alt="Logo Psic Gofran" className="w-auto h-20 p-0 mt-10" />
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 17} timeout={300}>
                        <h1 className="font-title text-2xl sm:text-2xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                Pasos a seguir para reservar 
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 18} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify" >
                            Paso 1: Rellenar y enviar el formulario. <br></br>
                            Paso 2: Cuadrar día y hora para empezar la terapia.<br></br>
                            Paso 3: La reserva se finaliza cuando se realice el pago.<br></br>
                            Paso 4: Una vez reciba el comprobante de pago, te enviaré el documento
                            de consentimiento de atención psicológica informado y protección de
                            datos.<br></br>
                            Paso 5: Comenzar el proceso.<br></br>
                        </h2>
                    </Grow>
                </div>
                <Grow in={currentIndex >= 19} timeout={300}>
                    <div className="col-span-6 md:col-span-3 flex flex-col mb-48">
                        <EnvProvider>
                            <ContactForm />
                        </EnvProvider>
                    </div>
                </Grow>
            </div>
        </div>
    );
}
