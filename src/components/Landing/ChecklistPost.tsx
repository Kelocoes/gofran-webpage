import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Zoom from "@mui/material/Zoom";

import star from "../../assets/images/star.png";

export default function ChecklistPost(): JSX.Element {
    const [show, setShow] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 700);
    }, []);

    return (
        <Zoom in={show} timeout={1000}>
            <div className="relative">
                <div className="bg-neutral rounded-lg p-10 absolute left-0 top-4 right-0 bottom-6 z-0 -rotate-3 shadow-2xl"></div>
                <div className="bg-white rounded-lg p-10 rotate-3 my-6 mx-6 lg:mx-0 relative z-10 shadow-2xl">
                    <img src={star} alt="Clip" className="absolute -top-6 right-0 h-16 w-auto"/>
                    <h1 className="text-accent mr-1 font-title font-bold text-4xl mb-4">
                        ¿No sabes si necesitas terapia?
                    </h1>
                    <div className="space-y-4">
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            Dudas de tus capacidades.
                        </p>
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            Sientes mucha ansiedad.
                        </p>
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            No tienes una buena relación contigo mismo/a
                        </p>
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            Te duelen cosas de tu pasado.
                        </p>
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            Necesitas ayuda en los vínculos que estableces con los demás.
                        </p>
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            No sabes cómo expresar tus sentimientos.
                        </p>
                        <p className="font-funny text-lg font-semibold"><TaskAltIcon className="text-accent mr-1" />
                            Necesitas ayudas con tus inseguridades.
                        </p>
                    </div>
                </div>
            </div>
        </Zoom >
    );
}