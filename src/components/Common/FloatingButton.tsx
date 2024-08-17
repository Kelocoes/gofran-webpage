import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";

const FloatingButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed bottom-10 right-10 flex flex-col items-center space-y-2 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex flex-col items-center space-y-2 mb-2 transition-all duration-300 ease-in-out transform ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <a
                    href="https://wa.me/message/EEMGNA7SL4S5P1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg text-white transform transition-transform duration-300 hover:scale-110"
                    title="WhatsApp"
                >
                    <WhatsAppIcon />
                </a>
                <a
                    href="mailto:psicologagofran@gmail.com"
                    className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-lg text-white transform transition-transform duration-300 hover:scale-110"
                    title="Email"
                >
                    <MailOutlineIcon />
                </a>
            </div>

            <div className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110">
                <SpaOutlinedIcon />
            </div>
        </div>
    );
};

export default FloatingButton;
