"use client"

import { useEffect } from "react";
import { Router } from "next/router";
import { Inter } from "next/font/google";

import Analytics from "@/components/Analytics";
import * as gtag from "@/libs/gtag";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gusloseimas",
  description: "A loja mais doce da sua vida!",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);

  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
