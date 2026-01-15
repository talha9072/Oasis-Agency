import Head from "next/head";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
     <Head>
      {/* Title */}
      <title>إي في إس إس أو إس | عندما تتوقف مركبتك الكهربائية، نبدأ نحن</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="أفضل مركز خدمة للسيارات الكهربائية في دبي. إي في إس هو أول مركز خدمة للمركبات الكهربائية في الإمارات، شركة إماراتية تأسست عام 2020 بخبرة عالمية متخصصة في تسلا لأكثر من 7 سنوات."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="فرص الامتياز التجاري, امتياز مركبات كهربائية, امتياز مركز خدمة المركبات الكهربائية, امتياز دبي, امتياز إي في إس الإمارات, أعمال خدمة السيارات الكهربائية, استفسارات الامتياز, امتياز في دبي"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ar/sos" />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Author / Publisher */}
      <meta name="author" content="الإدارة" />
      <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Language / Alternate */}
      <meta httpEquiv="Content-Language" content="ar" />
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/sos" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/sos" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="إي في إس إس أو إس | عندما تتوقف مركبتك الكهربائية، نبدأ نحن"
      />
      <meta
        property="og:description"
        content="أفضل مركز خدمة للسيارات الكهربائية في دبي. إي في إس هو أول مركز خدمة للمركبات الكهربائية في الإمارات، شركة إماراتية تأسست عام 2020 بخبرة عالمية متخصصة في تسلا لأكثر من 7 سنوات."
      />
      <meta property="og:url" content="https://evsuae.com/ar/sos" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="إي في إس إس أو إس | عندما تتوقف مركبتك الكهربائية، نبدأ نحن"
      />
      <meta
        name="twitter:description"
        content="أفضل مركز خدمة للسيارات الكهربائية في دبي. إي في إس هو أول مركز خدمة للمركبات الكهربائية في الإمارات، شركة إماراتية تأسست عام 2020 بخبرة عالمية متخصصة في تسلا لأكثر من 7 سنوات."
      />
      <meta
        name="twitter:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Fonts Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Charset / Compatibility */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>

      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography sos-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">

          {/* Text Column */}
          <div
            className="col-md-6 py-90 d-flex flex-column justify-content-center align-items-start text-end page-title-extra-small sm-pt-50px sm-pb-50px"
            data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-3">
              نحن في <span className="text-base-color">خدمتك</span> عند تعطل{" "}
              <span className="text-base-color">سيارتك الكهربائية</span>
            </h2>

            <p className="text-white alt-font fw-500 fs-30">
              ورشة متنقلة لإصلاح{" "}
              <span className="text-base-color">السيارات الكهربائية</span>
            </p>

            <img
              src="/img/sos/icons.svg"
              className="mb-4"
              alt="EVS image"
              width="220"
              height="49"
            />

            <a
              href="tel:+971600500387"
              className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px fw-600"
            >
              اتصل فينا –{" "}
              <span
                style={{ position: "relative", zIndex: 1 }}
                dir="ltr"
                className="urbanist"
              >
                600 500
              </span>{" "}
              EVS
              <span className="bg-white"></span>
            </a>
          </div>

          {/* Image Column */}
          <div className="col-md-6 py-90">
            <div className="h-100 sm-h-300px xs-h-250px cover-background">
              <img
                loading="lazy"
                src="https://evsuae.com/.netlify/images?url=/img/sos/evs-ar.png&w=1024"
                srcSet="
                  https://evsuae.com/.netlify/images?url=/img/sos/evs-ar.png&w=320 320w,
                  https://evsuae.com/.netlify/images?url=/img/sos/evs-ar.png&w=640 640w,
                  https://evsuae.com/.netlify/images?url=/img/sos/evs-ar.png&w=1024 1024w,
                  https://evsuae.com/.netlify/images?url=/img/sos/evs-ar.png&w=1440 1440w,
                  https://evsuae.com/.netlify/images?url=/img/sos/evs-ar.png&w=1920 1920w
                "
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                alt="EVS SOS van image"
              />
            </div>
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
      extraScripts: ["/js/blog.js"],
    },
    
  };
}