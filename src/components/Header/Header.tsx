import React from "react";
import logo from "../../assets/images/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grow from "@mui/material/Grow";
import { Accordion, AccordionSummary, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../../assets/images/gofranlogo.png";
import { useNavigate } from "react-router-dom";

export default function Header(): JSX.Element {
    const matches = useMediaQuery("(min-width:600px)");
    const [expandedAccordion, setExpandedAccordion] = React.useState(false);
    const nav = useNavigate();

    const navigate = (path: string): void => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
        nav(path);
    };

    return (
        <div className="relative w-full z-20">
            <Grow in={true} timeout={300}>
                {matches ? (
                    <div className="w-full bg-[#ECEFFF] flex justify-between items-center px-4 py-4">
                        <div className="flex items-end space-x-8">
                            <button onClick={() => navigate("/")}>
                                <img 
                                    src={logo} 
                                    alt="Logo Psic Gofran" 
                                    className="max-w-[150px] max-h-[60px] w-auto h-auto mt-16" 
                                />
                            </button>
                            <ul className="flex items-end space-x-4">
                                <li>
                                    <button 
                                        className="font-body font-semibold text-lg transition duration-300 ease-in-out transform hover:text-[#7087FF] hover:underline"
                                        onClick={() => navigate("/")}
                                    >
                                        Inicio
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="font-body font-semibold text-lg transition duration-300 ease-in-out transform hover:text-[#7087FF] hover:underline"
                                        onClick={() => navigate("/sobre-mi")}
                                    >
                                        Quien soy
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="font-body font-semibold text-lg transition duration-300 ease-in-out transform hover:text-[#7087FF] hover:underline"
                                        onClick={() => navigate("/EMDR")}
                                    >
                                        EMDR
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="font-body font-semibold text-lg truncate transition duration-300 ease-in-out transform hover:text-[#7087FF] hover:underline"
                                        onClick={() => navigate("/servicios")}
                                    >
                                        Servicios y Tarifas
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="font-body font-semibold text-lg transition duration-300 ease-in-out transform hover:text-[#7087FF] hover:underline"
                                        onClick={() => navigate("/hablemos")}
                                    >
                                        Hablemos
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="font-body font-semibold text-lg transition duration-300 ease-in-out transform hover:text-[#7087FF] hover:underline"
                                        onClick={() => navigate("/contacto")}
                                    >
                                        Pedir cita
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <img 
                            src={Logo} 
                            alt="Firma Gofran" 
                            className="absolute top-0 right-4 max-w-[300px] max-h-[150px] w-auto h-auto" 
                        />
                    </div>
                ) : (
                    <div className="flex justify-center items-center w-full">
                        <Accordion
                            square={true}
                            sx={{ borderRadius: "20px", width: "75%" }}
                            expanded={expandedAccordion}
                            onClick={() => setExpandedAccordion(prevState => !prevState)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="items-center flex flex-row">
                                    <img
                                        style={{ width: "50px" }}
                                        src={logo}
                                        alt="Logo"
                                    />
                                    <h2 className="font-body font-semibold text-lg">
                                        Menú
                                    </h2>
                                </div>
                            </AccordionSummary>
                            <div>
                                <MenuItem onClick={() => navigate("/")}><h2 className="font-body font-semibold text-lg">Inicio</h2></MenuItem>
                                <MenuItem onClick={() => navigate("/sobre-mi")}><h2 className="font-body font-semibold text-lg">Quien soy</h2></MenuItem>
                                <MenuItem onClick={() => navigate("/EMDR")}><h2 className="font-body font-semibold text-lg">EMDR</h2></MenuItem>
                                <MenuItem onClick={() => navigate("/servicios")}><h2 className="font-body font-semibold text-lg">Servicios</h2></MenuItem>
                                <MenuItem onClick={() => navigate("/hablemos")}><h2 className="font-body font-semibold text-lg">Hablemos</h2></MenuItem>
                                <MenuItem onClick={() => navigate("/contacto")}><h2 className="font-body font-semibold text-lg">Pedir cita</h2></MenuItem>
                            </div>
                        </Accordion>
                    </div>
                )}
            </Grow>
        </div>
    );
}
