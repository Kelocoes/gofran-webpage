import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";
import logo from "../../assets/images/logo.png";
import ContactForm from "../Contact/ContactForm";
import { EnvProvider } from "../EnvContext";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function AskForDate (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 14, 50);

    return (
        <div ref={ref} className="w-[90%] my-6 z-10 flex justify-center relative mt-30 sm:mt-30 bg-[#ffeedd] min-h-screen">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Grow>
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-full grid grid-cols-6 gap-4">

                <div className="col-span-6 md:col-span-3 flex flex-col items-center justify-center md:block w-[90%]">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h1 className="font-title text-2xl sm:text-3xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                ¿En que puedo ayudarte?
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-2xl rounded-xl drop-shadow-md text-justify" >
                            Contacta conmigo si tienes cualquier duda sobre la terapia
                            online. Para mí es muy importante atenderte con la mayor
                            brevedad posible por lo que recibirás mi respuesta antes de 24
                            horas.
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 7} timeout={300}>
                        <div className="flex justify-center">
                            <img src={logo} alt="Logo Psic Gofran" className="w-auto h-20 p-0 mt-10" />
                        </div>
                    </Grow>
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <h1 className="font-title text-2xl sm:text-3xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg text-left lg:text-left">
                            <div className="flex items-center justify-left">
                                Pasos a seguir para reservar
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-2xl rounded-xl drop-shadow-md text-justify" >
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

                <div className="col-span-6 md:col-span-3 flex flex-col">
                    <EnvProvider>
                        <ContactForm />
                    </EnvProvider>
                </div>
            </div>
        </div>
    );
}

