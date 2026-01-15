// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* ===== BASE CSS ===== */}
        <link rel="stylesheet" href="/css/vendors.min.css" />
        <link rel="stylesheet" href="/css/icon.min.css" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <link rel="stylesheet" href="/css/responsive.min.css" />
        <link rel="stylesheet" href="/css/evs.css" />

        
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
