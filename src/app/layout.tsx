import "./globals.scss";
import { Inter } from "next/font/google";

import Navbar from "@src/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Thullo App",
    description: "This is thullo app, a working inspiration from trello",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
