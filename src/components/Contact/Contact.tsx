import React from "react";

import Description from "./Description";
import ContactForm from "./ContactForm";
import { EnvProvider } from "../EnvContext";

export default function Contact(): JSX.Element {
    return (
        <div className="z-10">
            <Description />
            <EnvProvider>
                <ContactForm />
            </EnvProvider>
        </div>
    );
}