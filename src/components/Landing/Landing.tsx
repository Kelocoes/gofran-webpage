import React from "react";
import MainPost from "./MainPost";
import Header from "../Header/Header";

export default function Landing(): JSX.Element {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <MainPost />
        </div>
    );
}