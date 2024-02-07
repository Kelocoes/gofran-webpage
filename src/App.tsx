import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Landing from "./components/Landing/Landing";
import CustomParticles from "./components/Landing/CustomParticles";
import AboutMe from "./components/AboutMe/AboutMe";

function App(): JSX.Element {
    const [showHomePage, setShowHomePage] = React.useState<boolean>(true);
    const [section, setSection] = React.useState<number>(0);
    const [change, setChange] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (change) {
            setShowHomePage(false);
        }
    }, [change]);

    return (
        <main data-theme="mytheme" className="flex flex-col items-center">
            {showHomePage
                ? <SplashScreen setChange={setChange}/>
                : <React.Fragment>
                    <Header setSection={setSection}/>
                    {section === 0 && <Landing />}
                    {section === 1 && <AboutMe />}
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
