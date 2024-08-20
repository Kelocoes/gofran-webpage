import React from "react";
import TerapyForAdults from "./TerapyForAdults";
import WhatWeCanWork from "./WhatCanWeWork";
import Pricing from "./Pricing";
import Process from "./Process";

export default function Landing(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center">
            <TerapyForAdults />
            <WhatWeCanWork />
            <Pricing />
            <Process /> 

        </div>
    );
}