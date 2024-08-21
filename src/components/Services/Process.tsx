import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

import Book from "../../assets/images/book.png";
import Message from "../../assets/images/message-process.png";
import plant2 from "../../assets/images/plant-2.png";
import Explorers from "../../assets/images/explorers.png";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";
import CustomButton from "../Common/CustomButton";

export default function Process (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 50);

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 flex flex-col items-center justify-center mt-16 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[85%] grid grid-cols-4 gap-4">
                <div className="col-span-4">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-2xl sm:text-3xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg mb-8 text-center lg:text-left">
                            <div className="flex items-center justify-center">
                                ¿Cómo puedes empezar tu proceso conmigo?
                                {/* <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" /> */}
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-center">
                            Iniciar tu camino hacia la salud mental es un proceso simple y directo, diseñado para que te sientas respaldado desde el primer momento.
                        </h2>
                    </Grow>
                </div>
            </div>

            <div className="w-[90%] grid grid-cols-6">
                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 hidden mt-12 md:block w-[100%]">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={Book} alt="book" className="w-[50%]" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2">
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <div className="flex items-left text-2xl sm:text-2xl text-[#7087ff] drop-shadow-sm text-left mb-2 mt-8">
                            <strong>Paso 1: Reserva tu cita</strong>
                        </div>
                    </Grow>

                    <Grow in={currentIndex >= 7} timeout={300}>
                        <div>
                            <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify">
                                Pide tu primera sesión en el apartado de Reservar Cita, donde podrás explicarme tu motivo de
                                consulta.<br></br>
                                Si tienes cualquier duda, ponte en contacto conmigo:
                                <a href="https://wa.me/message/EEMGNA7SL4S5P1" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                                </a>
                                <a href="mailto:psicologagofran@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <MailOutlinedIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                                </a>
                            </h2>
                        </div>
                    </Grow>

                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                        <Grow in={currentIndex >= 3} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={Book} alt="gofran" className="w-[70%]" />
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>

            <div className="w-[90%] grid grid-cols-6">
                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 hidden ml-0 md:ml-32 mt-12 md:block w-[100%]">
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={Message} alt="book" className="w-[50%]" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2">
                    <Grow in={currentIndex >= 8} timeout={300}>
                        <div className="flex items-left text-2xl sm:text-2xl text-[#7087ff] drop-shadow-sm text-left mb-2 mt-8 ml-0 md:ml-32">
                            <strong>Paso 2: Me comunicaré contigo</strong>
                        </div>
                    </Grow>

                    <Grow in={currentIndex >= 9} timeout={300}>
                        <div>
                            <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify ml-0 md:ml-32">
                                Te contactaré para explicarte el procedimiento y establecer la primera cita. Una vez
                                seleccionada la fecha, deberás realizar el pago, presentar el justificante para confirmar la
                                reserva y enviaré una hoja informativa sobre la protección de datos.
                            </h2>
                        </div>
                    </Grow>

                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                        <Grow in={currentIndex >= 4} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={Message} alt="gofran" className="w-[70%]" />
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>
            <div className="w-[90%] grid grid-cols-6">
                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 hidden mt-12 md:block w-[100%] ml-0 md:ml-64">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div className="flex items-center justify-center">
                            <img src={Explorers} alt="book" className="w-[50%]" />
                        </div>
                    </Grow>
                </div>
                <div className="mt-2 sm:ml-4 col-span-6 md:col-span-4 flex flex-col justify-center space-y-4 row-span-2">
                    <Grow in={currentIndex >= 10} timeout={300}>
                        <div className="flex items-left text-2xl sm:text-2xl text-[#7087ff] drop-shadow-sm text-left mb-2 mt-8 ml-0 md:ml-64">
                            <strong>Paso 3: comienza tu camino</strong>
                        </div>
                    </Grow>

                    <Grow in={currentIndex >= 11} timeout={300}>
                        <div>
                            <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-justify ml-0 md:ml-64">
                                A partir de aquí ya no caminarás solo, ha llegado la hora de
                                compartir tus experiencias conmigo. <br></br>
                                El día de la cita recibirás un link en el que te deberás de conectar a
                                el y empezar este proceso juntos.
                                <Grow in={currentIndex >= 12} timeout={300}>
                                    <div className="flex justify-center mt-10 ml-12 mr-14 hidden md:block ml-10">
                                        <CustomButton
                                            bgColor="#ffddb9"
                                            borderColor="#ffca92"
                                            text="Reservar cita"
                                            path="/contacto"
                                        />
                                    </div>
                                </Grow>
                            </h2>
                        </div>
                    </Grow>

                    <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center space-y-4 md:hidden">
                        <Grow in={currentIndex >= 5} timeout={300}>
                            <div className="flex items-center justify-center">
                                <img src={Explorers} alt="gofran" className="w-[70%]" />
                            </div>
                        </Grow>
                        <Grow in={currentIndex >= 12} timeout={300}>
                            <div className="flex justify-center mt-10 ml-12 mr-14 md:ml-10">
                                <CustomButton
                                    bgColor="#ffddb9"
                                    borderColor="#ffca92"
                                    text="Reservar cita"
                                    path="/contacto"
                                />
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>

        </div>
    );
}
