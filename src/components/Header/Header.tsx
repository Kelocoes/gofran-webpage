import React from "react";

import logo from "../../assets/images/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";
import Zoom from "@mui/material/Zoom";
import { Accordion, AccordionSummary, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type HeaderProps = {
    readonly setSection: React.Dispatch<React.SetStateAction<number>>;
};

export default function Header({ setSection }: HeaderProps): JSX.Element {
    const matches = useMediaQuery("(min-width:600px)");
    const [expandedAccordion, setExpandedAccordion] = React.useState(false);

    const choose = (index: number): void => {
        setSection(index);
    };

    return (
        <div className="flex items-center justify-center pt-2 z-20 mx-10 fixed">
            <Zoom in={true} timeout={300}>
                {matches ?
                    <ul className="menu menu-vertical sm:menu-horizontal rounded-box bg-white text-slate-600 lg:w-max items-center shadow-lg py-1">
                        <li><img src={logo} alt="Logo Psic Gofran" className="w-auto h-14 p-0 mr-2" onClick={() => choose(0)}/></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => choose(0)} >Inicio</button></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => choose(1)} >Sobre mi</button></li>
                        <li><button className="font-body font-semibold text-lg truncate" onClick={() => choose(2)} >Tratamientos / Servicios</button></li>
                        <li><button className="font-body font-semibold text-lg" onClick={() => choose(3)} >Contáctame</button></li>
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
                            <MenuItem onClick={() => choose(0)}><h2 className="font-body font-semibold text-lg">Inicio</h2></MenuItem>
                            <MenuItem onClick={() => choose(1)}><h2 className="font-body font-semibold text-lg">Sobre mi</h2></MenuItem>
                            <MenuItem onClick={() => choose(2)}><h2 className="font-body font-semibold text-lg">Servicios</h2></MenuItem>
                            <MenuItem onClick={() => choose(3)}><h2 className="font-body font-semibold text-lg">Contáctame</h2></MenuItem>
                        </div>
                    </Accordion>
                }
            </Zoom>
        </div>
    );
}