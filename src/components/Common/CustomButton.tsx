import React from "react";
import { useNavigate } from "react-router-dom";

interface CustomButtonProps {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  path: string;
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    bgColor = "#c6cfff",
    borderColor = "#7189f8",
    textColor = "#4d4b44",
    text,
    path,
}) => {
    const nav = useNavigate();

    const navigate = (path: string): void => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
        nav(path);
    };

    return (
        <button
            className={"font-body text-base sm:text-lg py-3 sm:py-3 px-20 md:px-10 text-center flex items-center justify-center"}
            style={{
                color: textColor,
                backgroundColor: bgColor,
                borderColor: borderColor,
                borderWidth: "3px",
                borderRadius: "8px",
                borderStyle: "solid"
            }}
            onClick={() => navigate(path)}
        >
            <strong className="text-base">{text}</strong>
        </button>
    );
};
export default CustomButton;
