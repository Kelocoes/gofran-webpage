import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant2 from "../../assets/images/plant-2.png";
// import horizontalDiamond from "../../assets/images/horizontal-diamond.png";
import Brain from "../../assets/images/brain-heavies.png";
import Card from "../Common/PricingCard";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";
import CustomButton from "../Common/CustomButton";

export default function Pricing (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 12, 50);

    return (
        <div ref={ref} className="w-full my-6 z-10 flex flex-col items-center justify-center mt-16 sm:mt-8">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="w-[85%] grid grid-cols-4 gap-4">
                <div className="col-span-4">
                    <Grow in={currentIndex >= 1} timeout={300}>
                        <h1 className="font-title text-3xl sm:text-4xl text-[#4d4b44] font-bold mt-10 drop-shadow-lg mb-8 text-center lg:text-left">
                            <div className="flex items-center justify-center">
                                Tarifas de terapia para adultos online
                                {/* <img src={horizontalDiamond} alt="Horizontal Diamond" className="w-1/12 ml-1 hidden sm:block" /> */}
                            </div>
                        </h1>
                    </Grow>
                    <Grow in={currentIndex >= 2} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md text-left">
                            Sabemos que cuidar tu salud mental es una de las decisiones más importantes que puedes tomar. Por eso, ofrecemos tarifas
                            transparentes que reflejan el valor excepcional y la atención personalizada que recibirás. Aunque el bienestar no se puede medir
                            en dinero, merece una inversión consciente y bien pensada.
                        </h2>
                    </Grow>
                    <div className="col-span-4 flex justify-center">
                        <Grow in={currentIndex >= 3} timeout={300}>
                            <div>
                                <div className="flex items-center w-[70%] ml-0 sm:ml-20">
                                    <img src={Brain} alt="gofran" />
                                </div>
                            </div>
                        </Grow>
                    </div>
                </div>
            </div>
            <div className="w-[90%] md:w-[90%] grid grid-cols-4 gap-x-20 gap-y-10">

                <div className="col-span-4 md:col-span-2">
                    <Grow in={currentIndex >= 5} timeout={300}>
                        <div>
                            <Card
                                title="Primera Sesión"
                                description="45-50 minutos"
                                price="50"
                            />
                        </div>
                    </Grow>
                </div>

                <div className="col-span-4 md:col-span-2">
                    <Grow in={currentIndex >= 6} timeout={300}>
                        <div>
                            <Card
                                title="Sesiones Individuales"
                                description="45-50 minutos"
                                price="55"
                            />
                        </div>
                    </Grow>
                </div>

                <div className="col-span-4 md:col-span-2">
                    <Grow in={currentIndex >= 7} timeout={300}>
                        <div>
                            <Card
                                title="Pruebas Neuropsicológicas"
                                description="50-60 minutos"
                                price="85"
                            />
                        </div>
                    </Grow>
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Grow in={currentIndex >= 8} timeout={300}>
                        <div>
                            <Card
                                title="Pack Ahorro Mensual"
                                description="4 sesiones de 45-50 minutos"
                                price="200"
                            />
                        </div>
                    </Grow>
                </div>
                <div className="col-span-4 flex justify-center">
                    <Grow in={currentIndex >= 9} timeout={300}>
                        <div className="flex justify-left ms-4">
                            <CustomButton
                                bgColor="#ffddb9"
                                borderColor="#ffca92"
                                text="Pedir cita"
                                path="/pedir-cita"
                            />
                        </div>
                    </Grow>
                </div>
            </div>

        </div>
    );
}
