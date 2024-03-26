import React from "react";

import logo from "../../assets/images/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";
import Grow from "@mui/material/Grow";
import { Accordion, AccordionSummary, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <div className="flex items-center justify-center pt-2 z-20 mx-10 fixed">
            <Grow in={true} timeout={300}>
                {matches ?
                    <ul className="menu menu-vertical sm:menu-horizontal rounded-box bg-white text-slate-600 lg:w-max items-center shadow-lg py-1">
                        <button onClick={() => navigate("/")}><img src={logo} alt="Logo Psic Gofran" className="w-auto h-14 p-0 mr-2" /></button>
                        <li><button className="font-body font-semibold text-lg" onClick={() => navigate("/")} >Inicio</button></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => navigate("/sobre-mi")} >Sobre mi</button></li>
                        <li><button className="font-body font-semibold text-lg truncate" onClick={() => navigate("/servicios")} >Tratamientos / Servicios</button></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => navigate("/contacto")} >Contáctame</button></li>
                    </ul>
                    :
                    <Accordion
                        square={true}
                        sx={{ borderRadius: "20px" }}
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
                                    style={{ width: "50px"}}
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
                            <MenuItem onClick={() => navigate("/sobre-mi")}><h2 className="font-body font-semibold text-lg">Sobre mi</h2></MenuItem>
                            <MenuItem onClick={() => navigate("/servicios")}><h2 className="font-body font-semibold text-lg">Servicios</h2></MenuItem>
                            <MenuItem onClick={() => navigate("/contacto")}><h2 className="font-body font-semibold text-lg">Contáctame</h2></MenuItem>
                        </div>
                    </Accordion>
                }
            </Grow>
        </div>
    );
}