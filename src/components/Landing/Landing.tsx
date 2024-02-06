import React from "react";
import Header from "../Header/Header";
import MainPost from "./MainPost";
import QuestionMentalHealth from "./QuestionMentalHealth";
import NeedTherapyIf from "./NeedTherapyIf";

export default function Landing(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <MainPost />
            <QuestionMentalHealth />
            <NeedTherapyIf />
        </div>
    );
}