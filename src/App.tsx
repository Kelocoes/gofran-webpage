import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPost from "./components/MainPost/MainPost";
import SecondPost from "./components/MainPost/SecondPost";

function App(): JSX.Element {
    return (
        <React.Fragment>
            <main data-theme="mytheme" className="bg-background h-screen flex flex-col items-center">
                <Header />
                <MainPost />
                <SecondPost />
            </main>
        </React.Fragment>
    );
}

export default App;
