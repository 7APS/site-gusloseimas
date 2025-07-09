import {Quicksand} from "next/font/google";
import "./globals.css";

import {metadata as siteMetadata} from "./metadata";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = siteMetadata;

import ClientLayout from './client-layout';

export default function RootLayout({children}) {
    return (
        <html lang="pt-Br">
        <body className={quicksand.className}>
            <ClientLayout>
                {children}
            </ClientLayout>
        </body>
        </html>
    );
}
