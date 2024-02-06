import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Landing from "./components/Landing/Landing";
import CustomParticles from "./components/Landing/CustomParticles";

function App(): JSX.Element {
    const [showHomePage, setShowHomePage] = React.useState<boolean>(true);
    const [section, setSection] = React.useState<number>(0);

    React.useEffect(() => {
        setTimeout(() => {
            setShowHomePage(false);
        }, 1000);
    }, []);

    return (
        <main data-theme="mytheme" className="bg-background flex flex-col items-center">
            {showHomePage
                ? <SplashScreen/>
                : <React.Fragment>
                    <Header setSection={setSection}/>
                    {section === 0 && <Landing />}
                    {section === 1 && <></>}
                    {section === 2 && <></>}
                    {section === 3 && <></>}
                    <Footer />
                    <CustomParticles />
                </React.Fragment>
            }
        </main>
    );
}

export default App;
