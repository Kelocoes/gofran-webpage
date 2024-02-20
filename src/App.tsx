import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Landing from "./components/Landing/Landing";
import CustomParticles from "./components/Landing/CustomParticles";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
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
                    <div className="flex justify-center mb-16">
                        <Header />
                    </div>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/sobre-mi" element={<AboutMe />} />
                        <Route path="/servicios" element={<Services />} />
                        <Route path="/contacto" element={<Contact />} />
                    </Routes>
                    <Footer />
                    <CustomParticles />
                </React.Fragment>
            }
        </main>
    );
}

export default App;
