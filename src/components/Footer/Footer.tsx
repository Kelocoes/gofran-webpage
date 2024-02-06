import React from "react";

import logo from "../../assets/images/logo.png";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import threads from "../../assets/images/threads-icon.svg";
import tiktok from "../../assets/images/tiktok-color-icon.svg";

export default function Footer(): JSX.Element {
    return (
        <div className="bg-white items-center grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 justify-center z-10 w-full mt-6 py-6 space-y-4">
            <div className="flex justify-center">
                <img src={logo} alt="Logo Psic Gofran" className="w-auto h-28 p-0 mr-2" />
            </div>
            <p className="font-bold text font-body text-center">
                @2024 Psicóloga Gofran. <br />
                Todos los Derechos Reservados <br />
                gofranpsicologa@gmail.com
            </p>
            <div className="flex flex-row space-x-4 items-center justify-center">
                <a href="https://t.me/Psicologa_Gofran" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                </a>
                <a href="https://www.threads.net/@psicologa_gofran" target="_blank" rel="noopener noreferrer">
                    <img src={threads} alt="Threads icon" className="w-7 h-7 transform hover:scale-150 transition-transform ease-linear" />
                </a>
                <a href="https://www.tiktok.com/@psicologa_gofran" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="Tiktok icon" className="w-7 h-7 transform hover:scale-150 transition-transform ease-linear" />
                </a>
                <a href="https://www.instagram.com/psicologa_gofran/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ fontSize: 34, "&:hover": { transform: "scale(1.5)" }, transition: "transform  0.2s ease" }} />
                </a>
            </div>
        </div>
    );
}