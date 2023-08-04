import "./globals.scss";
import { Poppins } from "next/font/google";

import Navbar from "@src/Components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
            <body suppressHydrationWarning={true} className={poppins.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
