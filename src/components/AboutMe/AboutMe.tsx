import React from "react";

import WhoAmI from "./WhoAmI";
import Education from "./Education";
import JobPerspective from "./JobPerspective";
import Tree from "./Tree";

export default function AboutMe (): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center">
            <WhoAmI />
            <Education />
            <JobPerspective />
            <Tree />
        </div>
    );
}
