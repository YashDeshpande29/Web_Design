'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-NS77BHW5GZ' // 🔁 Replace with your real GA4 ID

export default function GoogleAnalytics() {
  return (
    <>
      {/* GA Initialization */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
