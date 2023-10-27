import Image from "next/image";
import React from "react";

export const Features: React.FC = () => {
    return (
        <div className="w-full h-screen bg-background flex flex-col items-center pr-20 pl-20">
            <h1 className="font-extrabold text-primary text-3xl pb-[10%]  lg:pb-[10%] pt-5">Feature</h1>
            <div className="flex items-center w-full flex-col lg:flex-row">
                <div className="w-full lg:w-1/2  h-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center w-full h-[80px]  mb-20 lg:mb-5">
                            <Image alt="cashflow icon" src="/cashflow.svg" width={42} height={42} />
                            <div className="flex flex-col items-start ml-5">
                                <h4 className="text-xl font-bold">Cashflow</h4>
                                <p className="text-content_gray">Manage where your money will go</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center w-full h-[80px]  mb-20 lg:mb-5">
                            <Image alt="cashflow icon" src="/reserve.svg" width={42} height={42} />
                            <div className="flex flex-col items-start ml-5">
                                <h4 className="text-xl font-bold">Reserve</h4>
                                <p className="text-content_gray">Automate your unused fund into reserve as emergency fund, saving or future investment </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center w-full h-[80px]  mb-20 lg:mb-5">
                            <Image alt="cashflow icon" src="/debt.svg" width={42} height={42} />
                            <div className="flex flex-col items-start ml-5">
                                <h4 className="text-xl font-bold">Debt & Loan</h4>
                                <p className="text-content_gray">Stay organized, keep track of repayment schedules, and ensure that financial obligations are met on time</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center w-full h-[80px]  mb-20 lg:mb-5">
                            <Image alt="cashflow icon" src="/saving.svg" width={42} height={42} />
                            <div className="flex flex-col items-start ml-5">
                                <h4 className="text-xl font-bold">Saving & Budget</h4>
                                <p className="text-content_gray">
                                    Better control over their finances, make informed decisions, and work toward achieving their short-term and long-term financial objectives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full">
                    <Image priority src="/feature-phone.svg" width={633} height={477} alt="feature phone" />
                </div>
            </div>
        </div>
    );
};
