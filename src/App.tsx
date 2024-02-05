import React from "react";
import "./App.css";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Landing from "./components/Landing/Landing";
import CustomParticles from "./components/Landing/CustomParticles";

function App(): JSX.Element {
    const [showHomePage, setShowHomePage] = React.useState<boolean>(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShowHomePage(false);
        }, 1000);
    }, []);

    return (
        <React.Fragment>
            <main data-theme="mytheme" className="bg-background flex flex-col items-center">
                {showHomePage
                    ? <SplashScreen/>
                    : <React.Fragment>
                        <Landing />
                        <CustomParticles />
                    </React.Fragment>
                }
            </main>
        </React.Fragment>
    );
}

export default App;
