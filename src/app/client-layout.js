"use client"

import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Analytics from "@/components/Analytics";
import * as gtag from "@/libs/gtag";

export default function ClientLayout({children}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
            gtag.pageview(url);
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Analytics/>
            {children}
        </>
    );
}