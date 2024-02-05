import React from "react";

import stressedgirl from "../../assets/images/stressed-girl.png";
import stars from "../../assets/images/stars.png";
import plant from "../../assets/images/plant.png";
import plant2 from "../../assets/images/plant-2.png";

export default function NeedTherapyIf(): JSX.Element {
    return (
        <div className="flex justify-center z-10 relative">
            <img src={plant} alt="Plant" className="absolute top-48 -left-56 md:-left-24" />
            <img src={plant2} alt="Plant-2" className="absolute top-32 -right-16" />
            <div className="w-[95%] md:w-[85%] my-6 relative z-10">
                <img src={stars} alt="Stars" className="absolute top-0 right-0 w-1/12" />
                <h1 className="font-title text-5xl sm:text-7xl text-neutral font-bold mb-4 drop-shadow-lg text-center lg:text-left">
                    ¿No sabes si necesitas terapia?
                </h1>
                <div className="grid grid-rows-3 md:grid-cols-3 items-center space-x-12 md:mt-16">
                    <div className="flex flex-row flex-wrap md:flex-col justify-center items-center md:justify-right md:items-end space-y-8">
                        <h2 className="border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            Necesitas ayuda con tus inseguridades
                        </h2>
                        <h2 className="md:mr-16 border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            Necesitas ayuda en los vínculos que estableces con los demás
                        </h2>
                        <h2 className="md:mr-16 border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            Dudas de tus capacidades
                        </h2>
                        <h2 className="border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            Te duelen las cosas de tu pasado
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <img src={stressedgirl} alt="Stressed girl" className="transform md:scale-125 my-10 md:my-0" />
                    </div>
                    <div className="flex flex-row flex-wrap md:flex-col justify-left items-start space-y-8">
                        <h2 className="border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            Sientes mucha Ansiedad
                        </h2>
                        <h2 className="md:ml-16 border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            No tienes una buena relación contigo mismo/a
                        </h2>
                        <h2 className="md:ml-16 border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            No sabes cómo expresar tus sentimientos
                        </h2>
                        <h2 className="border-4 bg-white rounded-xl p-3 border-secondary w-64 md:w-72 font-body font-bold text-secondary text-xl shadow-xl text-center">
                            Tuviste una vivencia traumática
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}