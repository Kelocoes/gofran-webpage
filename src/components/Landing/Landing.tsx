import React from "react";
import MainPost from "./MainPost";
import NeedTherapyIf from "./NeedTherapyIf";
import Considering from "./Considering";
import NotConsidering from "./NotConsidering";
import MainContact from "./MainContact";

export default function Landing(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center">
            <MainPost />
            <NeedTherapyIf />
            <Considering />
            <NotConsidering />
            <MainContact />
        </div>
    );
}