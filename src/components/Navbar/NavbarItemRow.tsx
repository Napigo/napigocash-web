import React from "react";

export const NavbarItemRow: React.FC = () => {
    return (
        <div data-testid="navbar-items-row" className="hidden lg:flex flex-row items-center justify-between gap-10 font-bold">
            <button type="button" className="hover:text-primary_light">
                Features
            </button>
            <button type="button" className="hover:text-primary_light">
                Pricing
            </button>
            <button type="button" className=" text-primary hover:text-primary_light">
                Login / Signup
            </button>
        </div>
    );
};
