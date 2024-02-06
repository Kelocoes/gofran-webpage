import React from "react";
import MainPost from "./MainPost";
import QuestionMentalHealth from "./QuestionMentalHealth";
import NeedTherapyIf from "./NeedTherapyIf";

export default function Landing(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center">
            <MainPost />
            <QuestionMentalHealth />
            <NeedTherapyIf />
        </div>
    );
}