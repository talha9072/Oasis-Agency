import Head from "next/head";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
    <Head>
  {/* Title */}
  <title>تم إرسال الرسالة | أفضل مركز خدمة سيارات كهربائية في الإمارات</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="شكرًا لتواصلك مع إي في إس الإمارات. تم إرسال رسالتك بنجاح، وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن."
  />

  {/* Keywords (optional) */}
  <meta
    name="keywords"
    content="خدمة المركبات الكهربائية الإمارات، صيانة سيارات كهربائية، إصلاح سيارات كهربائية دبي"
  />

  {/* Robots – IMPORTANT for thank-you pages */}
  <meta name="robots" content="noindex, nofollow" />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/thank-you" />

  {/* Author / Publisher */}
  <meta name="author" content="الإدارة" />
  <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="ar" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/thank-you" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/thank-you" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/thank-you"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="تم إرسال الرسالة | أفضل مركز خدمة سيارات كهربائية في الإمارات"
  />
  <meta
    property="og:description"
    content="شكرًا لتواصلك مع إي في إس الإمارات. تم إرسال رسالتك بنجاح، وسيقوم فريقنا بالرد عليك قريبًا."
  />
  <meta property="og:url" content="https://evsuae.com/ar/thank-you" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="تم إرسال الرسالة | أفضل مركز خدمة سيارات كهربائية في الإمارات"
  />
  <meta
    name="twitter:description"
    content="شكرًا لتواصلك مع إي في إس الإمارات. تم إرسال رسالتك بنجاح."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "تم إرسال الرسالة",
        url: "https://evsuae.com/ar/thank-you",
        description:
          "شكرًا لتواصلك مع خدمات المركبات الكهربائية الإمارات. سيقوم فريقنا بالرد عليك في أقرب وقت.",
        inLanguage: "ar",
        isPartOf: {
          "@type": "WebSite",
          name: "خدمات المركبات الكهربائية الإمارات",
          url: "https://evsuae.com/",
        },
      }),
    }}
  />
</Head>

      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<section
  className="cover-background full-screen ipad-top-space-margin md-h-550px"
  style={{ backgroundImage: "url(/images/404-bg.jpg)" }}
  dir="rtl"
>
  <div className="container h-100">
    <div className="row align-items-center justify-content-center h-100">
      <div
        className="col-12 col-xl-10 col-lg-10 col-md-10 text-center"
        data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <h1 className="fs-100 sm-fs-80 text-base-color fw-500 ls-minus-6px">
          تم إرسال الرسالة!
        </h1>

        <h4 className="text-light-gray fw-600 sm-fs-22 mb-10px ls-minus-1px">
          شكرًا لتواصلك معنا
        </h4>

        <p className="mb-30px text-light-gray lh-28 sm-mb-30px">
          أنت مهم جدًا بالنسبة لنا، وجميع المعلومات التي نتلقاها ستظل سرية دائمًا.
          سنتواصل معك بمجرد مراجعة رسالتك.
        </p>

        <a
          href="/ar"
          className="btn btn-large right-icon btn-rounded btn-dark-gray btn-box-shadow alt-font text-transform-none"
        >
          العودة إلى الصفحة الرئيسية
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>

        
 <ScrollProgress />



      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      useScrollContainer: false,
      
    },
    
  };
}