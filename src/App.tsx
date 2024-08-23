import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Landing from "./components/Landing/Landing";
import CustomParticles from "./components/Landing/CustomParticles";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import EMDR from "./components/EMDR/EMDR";
import FloatingButton from "./components/Common/FloatingButton";
import LetsTalk from "./components/LetsTalk/LetsTalk";

function App (): JSX.Element {
    const [showHomePage, setShowHomePage] = React.useState<boolean>(true);
    const [change, setChange] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (change) {
            setShowHomePage(false);
        }
    }, [change]);

    return (
        <main data-theme="mytheme" className="flex flex-col">
            {showHomePage
                ? <SplashScreen setChange={setChange}/>
                : <React.Fragment>

                    <div className="flex justify-left md:justify-center">
                        <Header />
                    </div>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/quien-soy" element={<AboutMe />} />
                        <Route path="/servicios" element={<Services />} />
                        <Route path="/pedir-cita" element={<Contact />} />
                        <Route path="/hablemos" element={<LetsTalk />} />
                        <Route path="/emdr" element={<EMDR />} />
                    </Routes>
                    <Footer />
                    <CustomParticles />
                    <FloatingButton />

                </React.Fragment>
            }
        </main>
    );
}

export default App;
