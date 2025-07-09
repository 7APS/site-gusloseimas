"use client"

import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {Quicksand} from "next/font/google";

import Analytics from "@/components/Analytics";
import * as gtag from "@/libs/gtag";

import "./globals.css";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({children}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
            gtag.pageview(url);
        }
    }, [pathname, searchParams]);

    return (
        <html lang="pt-Br">
        <body className={quicksand.className}>
        <Analytics/>
        {children}
        </body>
        </html>
    );
}
