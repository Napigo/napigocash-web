import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#046951",
                primary_light: "#11AD88",
                primary_dark: "#024132",
                primary_darker: "#011510",
                primary_lucent: "rgba(4, 105, 81, 0.20)",
                accent: "#DE650D",
                accent_light: "#FF8126",
                accent_dark: "#853C08",
                accent_darker: "#1B0C02",
                accent_lucent: "rgba(133, 60, 8, 0.20)",
                success: "#0DDE61",
                success_lucent: "rgba(13, 222, 97, 0.20)",
                danger: "#E04545",
                danger_lucent: "rgba(224, 69, 69, 0.20)",
                content_white: "#fffff",
                content_gray: "#8A8D8C",
                paper_1: "#161717",
                paper_2: "#232525",
                paper_3: "#323433",
                background: "#000000",
            },
        },
        colors: {},
    },
    plugins: [],
    screens: {
        sm: "640px", // Small screens and up
        md: "768px", // Medium screens and up
        lg: "1024px", // Large screens and up
        xl: "1280px", // Extra-large screens and up
    },
};
export default config;
