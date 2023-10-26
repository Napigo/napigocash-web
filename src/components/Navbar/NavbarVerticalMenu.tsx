"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hamburger_Icon } from "../Icons/Hamburger_Icon";
import { Close_Icon } from "../Icons/Close_Icon";

export const NavbarVerticalMenu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            setOpen(false);
        };
    }, []);

    return (
        <>
            <button className="flex h-9 w-9 flex-row items-center justify-center" onClick={() => setOpen(!open)}>
                {open ? <Close_Icon /> : <Hamburger_Icon />}
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100vh" }}
                        exit={{ height: 0 }}
                        className="flex w-full bg-primary_darker absolute top-[70px] left-0 flex-col overflow-hidden"
                    >
                        <button type="button" className="hover:text-primary_light hover:bg-primary_lucent pt-5 pb-5">
                            Features
                        </button>
                        <button type="button" className="hover:text-primary_light hover:bg-primary_lucent pt-5 pb-5">
                            Pricing
                        </button>
                        <button type="button" className=" text-primary hover:text-primary_light hover:bg-primary_lucent pt-5 pb-5">
                            Login / Signup
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
