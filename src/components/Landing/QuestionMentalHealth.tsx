import React from "react";
import brain from "../../assets/images/brain.png";
import stars from "../../assets/images/stars.png";
import brain2 from "../../assets/images/brain 2.png";

export default function QuestionMentalHealth(): JSX.Element {
    return (
        <div className="w-[85%] my-6 relative z-10">
            <div className="flex flex-row items-end space-x-5">
                <h1 className="font-title text-7xl text-neutral font-bold mb-4 drop-shadow-lg text-left">
                    ¿Por qué cuidar nuestro bienestar mental?
                </h1>
                <img src={stars} alt="Stars" className="w-1/12" />
            </div>
            <div className="grid grid-cols-5 gap-4 items-center">
                <h2 className="font-body font-bold text-white text-3xl text-justify mt-8 drop-shadow-md col-span-5">
                    El bienestar mental constituye el cimiento fundamental de una vida plena y saludable. Al igual
                    que cuidamos nuestro cuerpo a través de la nutrición y el ejercicio, atender nuestra salud
                    mental es esencial para alcanzar un equilibrio integral. Una mente equilibrada no solo influye
                    en cómo enfrentamos el estrés y las adversidades, sino también en la calidad de nuestras
                    relaciones, la toma de decisiones y nuestro desempeño académico o laboral.
                </h2>
                <div className="col-span-2 flex justify-center items-center">
                    <img src={brain} alt="Brain" className=" w-2/5 h-2/3" />
                </div>
                <div className="flex ml-auto my-2 border-[#B6C2FD] border-8 rounded-[60px] p-5 col-span-3">
                    <h2 className="font-body font-bold text-white text-3xl text-justify drop-shadow-md">
                        «La primera virtud del conocimiento es la capacidad de
                        enfrentarse a lo que no es evidente.» <br />
                        - Jacques Lacan
                    </h2>
                </div>
                <div className="my-2 border-[#B6C2FD] border-8 rounded-[60px] p-5 col-span-3">
                    <h2 className="font-body font-bold text-white text-3xl text-justify drop-shadow-md">
                        «Las emociones inexpresadas nunca mueren.
                        Son enterradas vivas y salen más tarde de peores formas.» <br />
                        -Sigmund Freud
                    </h2>
                </div>
                <div className="col-span-2 flex justify-center">
                    <img src={brain2} alt="brain2" className="w-2/5" />
                </div>
            </div>


        </div>
    );
}