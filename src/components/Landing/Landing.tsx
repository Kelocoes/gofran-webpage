import React from "react";
import Header from "../Header/Header";
import MainPost from "./MainPost";
import SecondPost from "./SecondPost";
import ChecklistPost from "./ChecklistPost";

export default function Landing(): JSX.Element {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <MainPost />
            <SecondPost />
            <ChecklistPost />
        </div>
    );
}