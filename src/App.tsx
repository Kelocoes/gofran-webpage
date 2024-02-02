import React from "react";
import "./App.css";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Landing from "./components/Landing/Landing";

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
                    : <Landing />
                }
            </main>
        </React.Fragment>
    );
}

export default App;
