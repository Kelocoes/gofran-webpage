import React from "react";

import logo from "../../assets/images/logo.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Zoom from "@mui/material/Zoom";
import LinearProgress from "@mui/material/LinearProgress";

type SplashScreenProps = {
    readonly setChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SplashScreen({ setChange }: SplashScreenProps): JSX.Element {
    const [show, setShow] = React.useState<boolean>(false);
    const [progress, setProgress] = React.useState(0);

    const theme = createTheme({
        palette: {
            primary: { main: "#7189F8" },
            secondary: { main: "#4564ec" },
        },
    });


    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 300);
    }, []);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setShow(false);
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [setShow, setChange]);

    React.useEffect(() => {
        if (!show && progress === 100) {
            setTimeout(() => {
                setChange(true);
            }, 500);
        }
    }, [show, setChange, progress]);

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
                <Zoom in={show} timeout={300}>
                    <div className="items-center flex justify-center flex-col">
                        <img src={logo} alt="Logo" className="w-1/5 md:w-1/6 h-auto" />
                        <div className="w-44">
                            <LinearProgress variant="determinate" value={progress} color="primary" />
                        </div>
                    </div>
                </Zoom>
            </div>
        </ThemeProvider>
    );
}