import React from "react";

import logo from "../../assets/images/logo.png";

export default function SplashScreen(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center bg-neutral h-screen w-screen">
            <img src={logo} alt="Logo" className="w-1/12 h-auto" />
        </div>
    );
}