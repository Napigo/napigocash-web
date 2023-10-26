"use client";
import { useEffect, useState } from "react";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};

export const useMediaQueries = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    function getScreenSize() {
        const width = window.innerWidth;

        if (width >= breakpoints.xl) return "xl";
        if (width >= breakpoints.lg) return "lg";
        if (width >= breakpoints.md) return "md";
        if (width >= breakpoints.sm) return "sm";

        return "xs"; // Default for screens smaller than 'sm'
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize(getScreenSize());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenSize;
};
