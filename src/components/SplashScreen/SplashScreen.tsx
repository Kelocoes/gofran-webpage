import React from "react";
import Grow from "@mui/material/Grow";

import logo from "../../assets/images/logo.png";

type SplashScreenProps = {
    readonly setChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SplashScreen ({ setChange }: SplashScreenProps): JSX.Element {
    const [show, setShow] = React.useState<boolean>(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 800);
    }, []);

    React.useEffect(() => {
        if (!show) {
            setTimeout(() => {
                setChange(true);
            }, 500);
        }
    }, [show, setChange]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
            <Grow in={show} timeout={300}>
                <div className="items-center flex justify-center flex-col">
                    <img src={logo} alt="Logo" className="w-1/5 md:w-1/6 h-auto" />
                </div>
            </Grow>
        </div>
    );
}
