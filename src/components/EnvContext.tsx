import React, { createContext, useContext } from "react";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const mailPublicKey = process.env.REACT_APP_MAIL_PUBLIC_KEY;

const isEnvValid = serviceId && templateId && mailPublicKey;

if (!isEnvValid) {
    throw new Error("Missing environment variables.");
}

type EnvType = {
    serviceId: string;
    templateId: string;
    mailPublicKey: string;
};

const dotenv: EnvType = {
    serviceId,
    templateId,
    mailPublicKey,
};

export const EnvContext = createContext<EnvType | undefined>(undefined);

export const EnvProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <EnvContext.Provider value={dotenv}>{children}</EnvContext.Provider>;
};

export const useEnv = (): EnvType => {
    const context = useContext(EnvContext);
    if (!context) {
        throw new Error("useEnv must be used within a EnvProvider");
    }
    return context;
};
