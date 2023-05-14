import React, { useEffect } from 'react';
import Script from 'next/script';

const GoogleTagManager: React.FC = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-PTZ249FFN5');
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PTZ249FFN5" strategy="afterInteractive" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PTZ249FFN5');
        `}
      </Script>
    </>
  );
};

export default GoogleTagManager;
