import React from "react";

import Zoom from "@mui/material/Zoom";

export default function SecondPost(): JSX.Element {
    const [show, setShow] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500);
    }, []);

    return (
        <Zoom in={show} timeout={1000}>
            <div className="bg-white rounded-xl w-4/5 p-10 mb-6 shadow-2xl">
                <h1 className="text-accent mr-1 font-title font-bold text-3xl">
                    ¿Por qué cuidar de nuestro bienestar mental?
                </h1>
                <p className="font-body text-lg font-semibold">
                    El bienestar mental constituye el cimiento fundamental de una vida
                    plena y saludable. Al igual que cuidamos nuestro cuerpo a través
                    de la nutrición y el ejercicio, atender nuestra salud mental es esencial
                    para alcanzar un <span className="underline">equilibrio integral</span>. Una mente equilibrada no solo
                    influye en cómo enfrentamos el estrés y las adversidades, sino
                    también en la <span className="underline">calidad de nuestras relaciones</span>, la toma de
                    decisiones y nuestro desempeño académico o laboral.
                </p>
            </div>
        </Zoom>
    );
}