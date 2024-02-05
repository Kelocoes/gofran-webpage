import React from "react";
import Zoom from "@mui/material/Zoom";

import mainPostImage from "../../assets/images/main-post.png";
import hilotoys from "../../assets/images/hilotoys.png";
import heart from "../../assets/images/heart-string.png";
import stars from "../../assets/images/stars.png";

export default function MainPost(): JSX.Element {
    const [show, setShow] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 300);
    }, []);

    return (
        <Zoom in={show} timeout={1000}>
            <div className="w-[85%] my-6 relative z-10">
                <h1 className="font-title text-5xl sm:text-7xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-right">
                    Revoluciona tu mente: descubre el poder de la
                    Psicología
                </h1>
                <div className="grid grid-rows-1 lg:grid-cols-2 gap-2 items-center">
                    <img src={stars} alt="Stars" className="absolute w-1/12 top-24 hidden lg:block" />
                    <img src={mainPostImage} alt="Main post" className="rounded-lg" />
                    <div className="flex flex-col justify-center space-y-5 -mt-6">
                        <img src={hilotoys} alt="Hilo" className="absolute w-[15%] top-24 hidden xl:block" />
                        <h2 className="font-body font-bold text-white text-xl sm:text-3xl 
                        border-dashed border-neutral border-8 rounded-xl p-4 drop-shadow-md">
                            Sumérgete en un viaje transformador
                            hacia tu bienestar mental. Explorarás
                            herramientas innovadoras para potenciar
                            tu mente y alcanzar tu mejor versión.
                        </h2>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-body font-bold text-white text-2xl text-center drop-shadow-md">
                                Terapia 100% online <br />
                                Personalizado y Flexible <br />
                                Variedad de recursos y soluciones innovadoras
                            </h2>
                            <img src={heart} alt="Heart" className="w-2/3 m-0 lg:-m-4 xl:-m-4" />
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
}