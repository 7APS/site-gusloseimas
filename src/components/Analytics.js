import Script from "next/script";
import { GA_TRACKING_ID } from "@/libs/gtag";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

const Analytics = () => (
  <>
    {/* Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      id="gAnalytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />

    {/* Vercel Analytics */}
    <VercelAnalytics />
  </>
);

export default Analytics;
