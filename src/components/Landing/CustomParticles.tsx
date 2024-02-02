import React, { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function CustomParticles(): JSX.Element {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="h-max">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: true,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.7,
                            width: 0.3,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 400,
                            },
                            value: 75,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    background: {
                        color: "#C6D0FF",
                    }
                }}
            />
        </div>
    );
}