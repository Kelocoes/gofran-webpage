import React from "react";

import logo from "../../assets/images/logo.png";

export default function SplashScreen(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
            <img src={logo} alt="Logo" className="w-1/3 md:1/6 lg:w-1/12 h-auto" />
        </div>
    );
}