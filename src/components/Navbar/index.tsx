"use client";
import React from "react";
import { NavbarItemRow } from "./NavbarItemRow";
import { NavbarVerticalMenu } from "./NavbarVerticalMenu";
import Image from "next/image";
import { useMediaQueries } from "@/hooks/useMediaQueries";

export const Navbar: React.FC = () => {
    const screen = useMediaQueries();

    return (
        <nav className="h-[70px] bg-primary_darker fixed top-0 left-0 w-full z-[9999]">
            <div className="m-auto h-full flex flex-row items-center justify-between pr-5 pl-5 lg:pr-20 lg:pl-20">
                <Image src={"/napigocash-logo.svg"} alt="napigocash logo" width={165} height={31} priority />
                <NavbarItemRow />
                <div className="lg:hidden">{screen !== "lg" && <NavbarVerticalMenu />}</div>
            </div>
        </nav>
    );
};
