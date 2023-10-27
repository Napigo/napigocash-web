import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
    return (
        <div className="w-full h-auto bg-paper_1 flex flex-col">
            <div className="w-full h-1/2 flex flex-row justify-between items-center pr-20 pl-20 pt-5 pb-5">
                <Image alt="napigocash logo" src="/napigocash-logo.svg" width={165} height={31} priority />
                <div className="flex flex-row items-center">
                    <button className="pr-4 pl-4 hover:text-primary_light text-sm">Home</button>
                    <div className="h-[10px] w-[1px] bg-paper_3" />
                    <button className="pr-4 pl-4 hover:text-primary_light text-sm">Features</button>
                    <div className="h-[10px] w-[1px] bg-paper_3" />
                    <button className="pr-4 pl-4 hover:text-primary_light text-sm">Pricing</button>
                    <div className="h-[10px] w-[1px] bg-paper_3" />
                    <button className="pr-4 pl-4 hover:text-primary_light text-sm">Policy</button>
                    <div className="h-[10px] w-[1px] bg-paper_3" />
                    <button className="pr-4 pl-4 hover:text-primary_light text-sm">Terms & Conditions</button>
                </div>
            </div>
            <div className="w-full h-1/2 flex flex-row justify-between items-end pr-20 pl-20 pt-5 pb-5">
                <div className="flex flex-col items-start">
                    <p className="text-xs">Download the app by clicking the link below :</p>
                    <div className="flex flex-row mt-3 ml-auto mr-auto lg:ml-0 lg:mr-0">
                        <button>
                            <Image src="/applestore-button.svg" alt="apple store button" width={180} height={52} />
                        </button>
                        <button className="ml-3">
                            <Image src="/googleplay-button.svg" alt="apple store button" width={180} height={52} />
                        </button>
                    </div>
                </div>
                <p className="text-content_gray text-xs">© 2023 NapiGoCash | Powered by netlify</p>
            </div>
        </div>
    );
};
