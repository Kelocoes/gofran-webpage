import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import logo from "../../assets/images/logo.png";
import threads from "../../assets/images/threads-icon.svg";
import tiktok from "../../assets/images/tiktok-color-icon.svg";
import Gofranlogo from "../../assets/images/gofran-logo-mini.png";

export default function Footer (): JSX.Element {
    return (
        <div className="bg-[#edf0ff] grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 justify-center items-center z-10 w-full mt-6 xl:mt-10 space-y-4 sm:space-y-0 py-2">
            <div className="flex justify-center items-center">
                <img src={logo} alt="Logo Psic Gofran" className="w-auto h-20" />
            </div>
            <p className="text-slate-600 font-body text-center text-sm">
                <img src={Gofranlogo} alt="Main post" className="mx-auto" />
                <strong>@2024 Psicóloga Gofran.</strong> <br />
                <strong>Todos los Derechos Reservados.</strong> <br />
                <a href="mailto:gofranpsicologa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <strong>gofranpsicologa@gmail.com</strong>
                </a>
            </p>
            <div className="flex flex-row space-x-4 items-center justify-center">
                <a className="text-[#5c15f6]" href="https://wa.me/message/EEMGNA7SL4S5P1" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                </a>
                <a className="text-[#5c15f6]" href="https://t.me/Psicologa_Gofran" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                </a>
                <a className="text-[#5c15f6]" href="https://www.threads.net/@psicologa_gofran" target="_blank" rel="noopener noreferrer">
                    <img src={threads} alt="Threads icon" className="w-7 h-7 transform hover:scale-150 transition-transform ease-linear" />
                </a>
                <a href="https://www.tiktok.com/@psicologa_gofran" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="Tiktok icon" className="w-7 h-7 transform hover:scale-150 transition-transform ease-linear" />
                </a>
                <a className="text-[#5c15f6]" href="https://www.instagram.com/psicologa_gofran/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                </a>
            </div>
        </div>
    );
}
