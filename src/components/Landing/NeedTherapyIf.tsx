import React from "react";

import stressedgirl from "../../assets/images/stressed-girl.png";
import stars from "../../assets/images/stars.png";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";

import Zoom from "@mui/material/Zoom";

export default function NeedTherapyIf(): JSX.Element {
    const floatBox: string = "border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-lg shadow-xl text-center";
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < 5) {
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line
    }, [currentIndex]);

    return (
        <div className="w-[95%] md:w-[65%] my-6 z-10 flex justify-center relative">
            <Zoom in={currentIndex >= 2} timeout={500}>
                <img src={plant} alt="Plant" className="absolute top-22 -left-56 md:-left-24" />
            </Zoom>
            <Zoom in={currentIndex >= 2} timeout={500}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Zoom>
            <div className="relative">
                <Zoom in={currentIndex >= 2} timeout={500}>
                    <img src={stars} alt="Stars" className="absolute top-0 right-0 w-1/12" />
                </Zoom>
                <Zoom in={currentIndex >= 1} timeout={500}>
                    <h1 className="font-title text-5xl sm:text-6xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                        ¿No sabes si necesitas terapia?
                    </h1>
                </Zoom>
                <div className="flex flex-col md:flex-row items-center md:space-x-12 md:mt-16">
                    <Zoom in={currentIndex >= 3} timeout={500}>
                        <div className="flex flex-col justify-center items-center md:justify-right md:items-end space-y-8">
                            <h2 className={floatBox}>
                                Necesitas ayuda con tus inseguridades
                            </h2>
                            <h2 className={`md:mr-16 ${floatBox}`}>
                                Necesitas ayuda en los vínculos que estableces con los demás
                            </h2>
                            <h2 className={`md:mr-16 ${floatBox}`}>
                                Dudas de tus capacidades
                            </h2>
                            <h2 className={floatBox}>
                                Te duelen las cosas de tu pasado
                            </h2>
                        </div>
                    </Zoom>
                    <Zoom in={currentIndex >= 4} timeout={500}>
                        <div className="flex justify-center">
                            <img src={stressedgirl} alt="Stressed girl" className="transform w-2/3 md:w-full sm:scale-100 md:scale-150 w- my-10 md:my-0" />
                        </div>
                    </Zoom>
                    <Zoom in={currentIndex >= 5} timeout={500}>
                        <div className="flex flex-col justify-center items-center md:justify-left md:items-start space-y-8">
                            <h2 className={floatBox}>
                                Sientes mucha Ansiedad
                            </h2>
                            <h2 className={`md:ml-16 ${floatBox}`}>
                                No tienes una buena relación contigo mismo/a
                            </h2>
                            <h2 className={`md:ml-16 ${floatBox}`}>
                                No sabes cómo expresar tus sentimientos
                            </h2>
                            <h2 className={floatBox}>
                                Tuviste una vivencia traumática
                            </h2>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}