"use client"

import {useEffect, Suspense} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Analytics from "@/components/Analytics";
import * as gtag from "@/libs/gtag";

// Component that uses searchParams
function SearchParamsComponent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
            gtag.pageview(url);
        }
    }, [pathname, searchParams]);

    return null;
}

export default function ClientLayout({children}) {
    return (
        <>
            <Analytics/>
            <Suspense fallback={null}>
                <SearchParamsComponent />
            </Suspense>
            {children}
        </>
    );
}
