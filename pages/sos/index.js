import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}

     
    <Head>
      {/* Title */}
      <title>
        EV Roadside Assistance in Dubai | 24/7 Emergency EV Support – EVS UAE
      </title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Stuck on the road? EVS UAE offers 24/7 electric vehicle roadside assistance in Dubai, including emergency charging, towing, and breakdown support by expert EV technicians."
      />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content="EV roadside assistance Dubai, electric vehicle breakdown service, EV emergency towing UAE, 24/7 EV support Dubai, mobile EV charging service, EVS roadside help Dubai"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/sos" />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Author & Publisher */}
      <meta name="author" content="Admin" />
      <meta name="publisher" content="Electric Vehicle Services UAE" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/sos" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/sos" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="EV Roadside Assistance in Dubai | 24/7 Emergency EV Support – EVS UAE"
      />
      <meta
        property="og:description"
        content="Stuck on the road? EVS UAE offers 24/7 electric vehicle roadside assistance in Dubai, including emergency charging, towing, and breakdown support by expert EV technicians."
      />
      <meta property="og:url" content="https://evsuae.com/sos" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EV Roadside Assistance in Dubai | 24/7 Emergency EV Support – EVS UAE"
      />
      <meta
        name="twitter:description"
        content="Stuck on the road? EVS UAE offers 24/7 electric vehicle roadside assistance in Dubai, including emergency charging, towing, and breakdown support by expert EV technicians."
      />
      <meta
        name="twitter:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Charset & Compatibility */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Structured Data – SOS Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Electric Vehicle Roadside Assistance",
            description:
              "24/7 electric vehicle roadside assistance by EVS UAE including emergency charging, EV towing, on-site diagnostics, and breakdown recovery across Dubai and the UAE.",
            serviceType: "EV Roadside Assistance",
            provider: {
              "@type": "AutomotiveBusiness",
              name: "Electric Vehicle Services UAE",
              url: "https://evsuae.com/",
              logo:
                "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971600500387",
                email: "contact@evsuae.com",
                contactType: "Customer Service",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "United Arab Emirates",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
            },
            url: "https://evsuae.com/sos",
            inLanguage: "en",
          }),
        }}
      />
    </Head>

    <section
  id="full-hero-2"
  className="overflow-hidden tesla-section d-flex align-items-center dark-overlay"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/sos/sos-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
  <div className="container z-index-1">
    <div className="row">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <div className="d-inline-block">
          <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mb-0">
            <span className="hero-tag bg-dark-gray alt-font d-inline-block me-10px border-radius-3px fs-12 text-white fw-500">
              EVS
            </span>
            <h1 className="d-inline-block me-10px border-radius-3px fs-12 fw-500 pb-0 hero-tag-text">
              24/7 Emergency EV Roadside Support — Wherever You Are
            </h1>
          </div>
        </div>

        <div className="title alt-font text-white mt-3">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-3">
            WHEN YOUR <span className="text-base-color">EV</span> STOPS, WE{" "}
            <span className="text-base-color">START.</span>
          </h2>
        </div>

        <img
          src="/img/sos/icons.svg"
          className="mb-4"
          alt="EVS image"
          width={220}
          height={49}
        />

        <a
          href="tel:600500387"
          className="btn-hero rev-btn alt-font bg-base-color text-dark-gray text-uppercase border-radius-4px rs-hover-ready hero-cta-button mt-2 w-auto d-inline-block"
          aria-label="Book service"
        >
          CALL US - 600 500 EVS
        </a>
      </div>
    </div>
  </div>
</section>

          
          

<ScrollProgressEn />
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      useScrollContainer: false,
    },
  };
}
