import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

/**
 * @note
 * This is where we configura our HTML metadata including CSP, cross-origin policy etc yada yada...
 */
export const metadata: Metadata = {
    title: "NapiGoCash",
    description: "NapiGoCash Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunitoSans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
