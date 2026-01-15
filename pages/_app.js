// pages/_app.js

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Script from "next/script";

// ===== Dynamic Header / Footer =====
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const HeaderAr = dynamic(() => import("../components/HeaderAr"), { ssr: false });
const FooterAr = dynamic(() => import("../components/FooterAr"), { ssr: false });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isArabic = router.pathname.startsWith("/ar");

  /* =====================================================
     🌍 HTML + BODY DIRECTION (RTL / LTR)
  ===================================================== */
  useEffect(() => {
    if (isArabic) {
      document.documentElement.setAttribute("lang", "ar");
      document.body.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.body.setAttribute("dir", "ltr");
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [isArabic]);

  /* =====================================================
     🔁 GLOBAL LEGACY JS RE-INITIALIZATION
  ===================================================== */
  useEffect(() => {
    const reInitLegacy = () => {
      if (typeof window === "undefined") return;
      if (window.__LEGACY_REINIT_RUNNING__) return;

      window.__LEGACY_REINIT_RUNNING__ = true;

      if (window.litho && typeof window.litho.init === "function") {
        window.litho.init();
      }

      window.dispatchEvent(new Event("resize"));

      setTimeout(() => {
        window.__LEGACY_REINIT_RUNNING__ = false;
      }, 300);
    };

    setTimeout(reInitLegacy, 400);
    router.events.on("routeChangeComplete", reInitLegacy);

    return () => {
      router.events.off("routeChangeComplete", reInitLegacy);
    };
  }, [router.events]);

  /* =====================================================
     🔑 PAGE-LEVEL CONTROLS
  ===================================================== */
  const showHeader = pageProps?.noHeader !== true;
  const showFooter = pageProps?.noFooter !== true;

  const forceArabicHeader = pageProps?.useArabicHeader === true;
  const forceEnglishHeader = pageProps?.useEnglishHeader === true;

  const useArabicLayout =
    forceArabicHeader || (isArabic && !forceEnglishHeader);

  const loadLegacy = pageProps?.noLegacy !== true;
  const useScrollContainer = pageProps?.useScrollContainer !== false;

  // ✅ NEW: Page-level extra assets
  const extraScripts = pageProps?.extraScripts || [];
  const extraCSS = pageProps?.extraCSS || [];

  /* =====================================================
     🧱 SHARED PAGE CONTENT
  ===================================================== */
  const PageContent = (
    <>
      {showHeader && (useArabicLayout ? <HeaderAr /> : <Header />)}
      <Component {...pageProps} />
      {showFooter && (useArabicLayout ? <FooterAr /> : <Footer />)}
    </>
  );

  return (
    <>

      {/* ===== LEGACY JS ===== */}
      {loadLegacy && (
        <>
          <Script src="/js/jquery.js" strategy="beforeInteractive" />
          <Script src="/js/vendors.js" strategy="beforeInteractive" />
          <Script src="/js/main.js" strategy="afterInteractive" />
          <Script src="/js/converter.js" strategy="afterInteractive" />
        </>
      )}

      {/* ===== PAGE-LEVEL EXTRA JS ===== */}
      {extraScripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}

      {/* ===== PAGE-LEVEL EXTRA CSS ===== */}
      {extraCSS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}

      {/* ===== RTL CSS ===== */}
      {isArabic && <link rel="stylesheet" href="/ar/css/ar.css" />}

      {/* ===== PAGE LAYOUT ===== */}
      {useScrollContainer ? (
        <div className="scroll-container">{PageContent}</div>
      ) : (
        PageContent
      )}


{/* ✅ WHATSAPP BUTTON */}
    <a href="https://wa.me/971566017771" className="whatsapp-button" target="_blank" rel="noreferrer"
    >
      <img src="/img/whatsapp.svg" alt="WhatsApp" loading="lazy"
      />
    </a>

    </>
  );
}
