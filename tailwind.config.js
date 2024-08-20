/** @type {import("tailwindcss").Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                title: ["Poppins"],
                body: ["Poppins"],
            },
            colors: {
                'custom-bg': '#ffddb9', // Tu color de fondo alternativo
            },
        },
    },
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#1db88e",
                    "secondary": "#5f3c87",
                    "accent": "#5e1cf6",
                    "neutral": "#7189F8",
                    "base-100": "#ECEFFF",
                },
            },
            {
                mythemeAlt: {
                    "primary": "#1db88e",
                    "secondary": "#5f3c87",
                    "accent": "#5e1cf6",
                    "neutral": "#7189F8",
                    "base-100": "#ffddb9",
                },
            },
        ],
    },
};
