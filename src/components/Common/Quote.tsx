import React from "react";
import QuoteLogo from "../../assets/images/gofran-logo-mini.png";

interface QuoteProps {
    textColor?: string;
    background?: string;
    children: React.ReactNode;
}

const Quote = ({
    textColor = "#4e5e9d",
    background = "#ffe5ca",
    children,
}: QuoteProps): JSX.Element => {
    return (
        <div
            className="absolute left-0 w-full flex flex-col items-center justify-center p-5"
            style={{
                color: textColor,
                backgroundColor: background,
            }}
        >
            <h1 className="justify-items-center font-title text-2xl sm:text-3xl drop-shadow-lg text-center w-[75%]">
                {children}
            </h1>
            <img src={QuoteLogo} alt="Main post" />
        </div>
    );
};

export default Quote;
