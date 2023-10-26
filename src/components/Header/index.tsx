"use client";
import React from "react";
import Image from "next/image";
import { useMediaQueries } from "@/hooks/useMediaQueries";

export const Header: React.FC = () => {
    const screen = useMediaQueries();
    const showLargePhone = Boolean(screen === "xl" || screen === "lg");

    return (
        <header className="relative w-screen h-auto flex flex-collg:flex-row items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0  w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/header-bg.png)" }}></div>
            <div className="w-full h-full z-50 px-5 lg:px-20 flex flex-col lg:flex-row justify-between items-start text-center lg:text-left">
                <div className="w-full lg:w-1/2 h-auto mt-[200px]">
                    <div className="flex flex-col">
                        <h1 className="text-3xl lg:text-5xl font-extrabold leading-normal">Budgeting made easy for ordinary people</h1>
                        <p className="font-normal text-lg lg:text-xl italic mt-4">Keep track of your budgets with ease using simplified cashflow and other financial management tools</p>
                        <button className="bg-accent hover:bg-accent_dark text-background flex items-center h-12 lg:h-14 lg:w-auto pr-4 lg:pr-12 pl-4 lg:pl-12 rounded-lg mt-4 max-w-[300px] w-[300px] justify-center self-center lg:self-auto">
                            <p className="font-bold text-lg lg:text-xl italic">Sign up now</p>
                        </button>

                        {!showLargePhone && (
                            <div className="w-full lg:w-1/2 h-auto flex justify-center items-center pt-[100px] lg:pt-[250px]">
                                <Image
                                    src="/header-phone.svg"
                                    alt="header-phone"
                                    width={827} // Adjust the width for smaller screens
                                    height={805} // Adjust the height for smaller screens
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col lg:mt-[20%]">
                        <p className="text-sm font-normal">Get the app and start budgetting</p>
                        <div className="flex flex-row mt-3 ml-auto mr-auto lg:ml-0 lg:mr-0">
                            <button>
                                <Image src="/applestore-button.svg" alt="apple store button" width={180} height={52} />
                            </button>
                            <button className="ml-3">
                                <Image src="/googleplay-button.svg" alt="apple store button" width={180} height={52} />
                            </button>
                        </div>
                    </div>
                </div>
                {showLargePhone && (
                    <div className="w-full lg:w-1/2 h-screen flex justify-center items-center pt-[100px] lg:pt-[10%]">
                        <Image
                            src="/header-phone.svg"
                            alt="header-phone"
                            width={827} // Adjust the width for smaller screens
                            height={805} // Adjust the height for smaller screens
                        />
                    </div>
                )}
            </div>
        </header>
    );
};
