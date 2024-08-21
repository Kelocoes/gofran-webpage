import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

import plant2 from "../../assets/images/plant-2.png";
import tree from "../../assets/images/magic-tree.png";
import CustomButton from "../Common/CustomButton";
import { useIncrementalIndexEffect } from "../../utils/UseIncrementalEffect";

export default function Tree (): JSX.Element {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const currentIndex = useIncrementalIndexEffect(inView, 15, 50);

    return (
        <div ref={ref} className="w-[85%] my-6 z-10 relative">
            <Grow in={currentIndex >= 2} timeout={300}>
                <img src={plant2} alt="Plant-2" className="absolute top-32 right-0" />
            </Grow>
            <div className="col-span-6 md:col-span-6 flex flex-col items-center justify-center relative">
                <Grow in={currentIndex >= 5} timeout={300}>
                    <div className="flex items-center justify-center w-[55%]">
                        <img src={tree} alt="Tree" className="w-full" />
                    </div>
                </Grow>
                <div className="text-center p-2 flex flex-col items-end md:hidden">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-lg rounded-xl drop-shadow-md mb-2">
                            &quot;La raíz de toda la salud está en el cerebro.<br />
                            El tronco del árbol son las emociones.<br />
                            Las ramas y las hojas son el cuerpo.<br />
                            Cuando todas las partes trabajan juntas,<br />
                            se producen racimos de flores hermosas.&quot;<br />
                            — Poema kurdo
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <div className="mt-2">
                            <CustomButton
                                bgColor="#ffddb9"
                                borderColor="#ffca92"
                                text="Reservar Cita"
                                path="/contacto"
                            />
                        </div>
                    </Grow>
                </div>
                <div className="absolute bottom-4 right-4 text-right p-2 flex flex-col items-end hidden md:block">
                    <Grow in={currentIndex >= 3} timeout={300}>
                        <h2 className="font-body text-[#4e5e9d] text-lg sm:text-xl rounded-xl drop-shadow-md mb-2">
                            &quot;La raíz de toda la salud está en el cerebro.<br />
                            El tronco del árbol son las emociones.<br />
                            Las ramas y las hojas son el cuerpo.<br />
                            Cuando todas las partes trabajan juntas,<br />
                            se producen racimos de flores hermosas.&quot;<br />
                            — Poema kurdo
                        </h2>
                    </Grow>
                    <Grow in={currentIndex >= 4} timeout={300}>
                        <div className="mt-2 flex justify-end">
                            <CustomButton
                                bgColor="#ffddb9"
                                borderColor="#ffca92"
                                text="Reservar Cita"
                                path="/contacto"
                            />
                        </div>
                    </Grow>
                </div>
            </div>
        </div>
    );
}
