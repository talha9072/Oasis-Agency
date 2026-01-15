import Head from "next/head";
import BlogGrid12 from "@/components/common/BlogGrid12";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
       
   <Head>
  <title>
    EVS UAE Blog | Electric Vehicle Tips, News & Maintenance Guides
  </title>

  <meta
    name="description"
    content="Stay updated with the latest electric vehicle trends, maintenance tips, repair guides, and news from EVS UAE. Your go-to resource for EV ownership insights in the UAE."
  />

  <meta
    name="keywords"
    content="EV blog UAE, electric vehicle tips, EV maintenance guides, EV repair advice, Tesla news UAE, EV ownership UAE, green mobility blog, EVS UAE blog"
  />

  <link
    rel="canonical"
    href="https://evsuae.com/blog"
  />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta httpEquiv="Content-Language" content="en" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/blog"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/blog"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/blog"
  />

  <meta
    property="og:title"
    content="EVS UAE Blog | Electric Vehicle Tips, News & Maintenance Guides"
  />
  <meta
    property="og:description"
    content="Stay updated with the latest electric vehicle trends, maintenance tips, repair guides, and news from EVS UAE. Your go-to resource for EV ownership insights in the UAE."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/blog"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="EVS UAE Blog | Electric Vehicle Tips, News & Maintenance Guides"
  />
  <meta
    name="twitter:description"
    content="Stay updated with the latest electric vehicle trends, maintenance tips, repair guides, and news from EVS UAE. Your go-to resource for EV ownership insights in the UAE."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "EVS UAE Blog",
        description:
          "Insights, tips, and news about electric vehicles in the UAE. Stay updated with EV technology, maintenance advice, and industry trends from Electric Vehicle Services UAE.",
        url: "https://evsuae.com/blog",
        publisher: {
          "@type": "Organization",
          name: "Electric Vehicle Services UAE",
          logo: {
            "@type": "ImageObject",
            url: "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
          },
        },
        inLanguage: "en",
        blogPost: [],
      }),
    }}
  />
</Head>


   {/* start page title */}
<section className="pb-0 ipad-top-space-margin">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-xl-6 col-lg-8 text-center position-relative page-title-double-large pt-5">
        <div className="d-flex flex-column justify-content-center extra-very-small-screen">
          <h1 className="text-white alt-font ls-minus-1px fw-700">
            Welcome to Our Blog – Your EV Servicing Hub
          </h1>
          <h2 className="text-white d-inline-block fw-400 ls-0px w-80 xs-w-100 mx-auto">
            Get expert tips on EV maintenance, battery repairs, software upgrades, and more to keep your electric vehicle running smoothly!
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
{/* end page title */}


{/* start blog listing section */}
<section className="pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center align-items-center"
        ></div>

        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>
      </div>

      <div className="col-12 mt-5 d-flex justify-content-center">
        <div
          id="pagination"
          className="pagination-controls pagination pagination-style-01 fs-13 fw-500 mb-0"
        ></div>
      </div>
    </div>
  </div>
</section>
{/* end blog listing section */}

<BlogGrid12 />

{/* ================= English Blogs Section ================= */}
<section className="py-5">
  <div className="container">
    {/* Heading */}
    <div className="text-center mb-4">
      <h2 className="fw-bold">EV Blog Links</h2>
      <p className="text-muted small text-white">
        Quick access to our EV guides and insights.
      </p>
    </div>

    {/* Blog Grid */}
    <div className="row g-2">
      {[
        ["Tesla Cars Dubai", "https://evsuae.com/blog/tesla-car-dubai-models-prices-buying-options"],
        ["EV vs Petrol", "https://evsuae.com/blog/why-electric-cars-are-revolutionizing-the-future-of-transportation-over-traditional-fuel-cars"],
        ["EV Upgrades", "https://evsuae.com/blog/5-must-have-ev-service-upgrades-for-dubai-drivers"],
        ["Tesla Battery Guide", "https://evsuae.com/blog/how-to-check-tesla-battery-capacity-guide"],
        ["Tesla Battery Issues", "https://evsuae.com/blog/the-most-common-battery-issues-in-tesla-vehicles"],
        ["Avatr 12 Upgrades", "https://evsuae.com/blog/best-tech-upgrades-for-your-avatr-12-in-2025"],
        ["EV Seasonal Tips", "https://evsuae.com/blog/winter-vs-summer-seasonal-ev-maintenance-tips-for-dubai-drivers"],
        ["Dashboard Repair", "https://evsuae.com/blog/ev-dashboard-repair-solutions-to-the-rescue"],
        ["EV Battery Care", "https://evsuae.com/blog/electric-vehicle-battery-maintenance"],
        ["EV Parked Months", "https://evsuae.com/blog/what-happens-when-an-ev-is-parked-for-months-without-being-driven"],
        ["Commercial Charging", "https://evsuae.com/blog/commercial-ev-charging-station-dubai"],
        ["Charging Install", "https://evsuae.com/blog/ev-charging-station-installation-uae"],
        ["Motor Repairs", "https://evsuae.com/blog/ev-motor-repairs-vs-replacement"],
        ["Pre-Trip Checks", "https://evsuae.com/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip"],
        ["OBD Codes", "https://evsuae.com/blog/ev-obd-error-codes-guide"],
        ["Charging Dubai", "https://evsuae.com/blog/charging-stations-in-dubai-is-the-city-ready-for-your-ev"],
        ["Used EV Red Flags", "https://evsuae.com/blog/common-red-flags-to-look-for-when-buying-a-pre-owned-ev-in-dubai"],
        ["Software Updates", "https://evsuae.com/blog/ev-software-updates-importance"],
        ["Solar Charging", "https://evsuae.com/blog/future-of-solar-powered-ev-charging-uae"],
        ["Protect Your EV", "https://evsuae.com/blog/heres-how-to-protect-your-ev"],
        ["Engine Refurbish", "https://evsuae.com/blog/the-ev-engine-refurbishment-process"],
        ["Dashboard Issues", "https://evsuae.com/blog/how-dashboard-malfunctions-in-electric-cars-can-signal-bigger-problems"],
        ["Home vs Comm.", "https://evsuae.com/blog/home-vs-commercial-ev-charging"],
        ["Battery Drain", "https://evsuae.com/blog/why-is-your-ev-battery-draining-faster"],
        ["EV Service Near Me", "https://evsuae.com/blog/top-electric-vehicle-service-near-me"],
        ["EV vs Gas", "https://evsuae.com/blog/electric-vehicle-maintenance-vs-gas"],
        ["Pre-Purchase EV", "https://evsuae.com/blog/ev-pre-purchase-inspection-what-it-reveals"],
        ["High Voltage Fail", "https://evsuae.com/blog/common-high-voltage-system-failures-in-luxury-electric-cars"],
        ["EV Charger Maint.", "https://evsuae.com/blog/ev-charger-maintenance-services"],
        ["EV Power Loss", "https://evsuae.com/blog/what-to-do-if-your-ev-suddenly-loses-power-while-driving-and-how-to-prevent-it"],
      ].map(([title, url], index) => (
        <div key={index} className="col-6 col-md-4 col-lg-2">
          <a
            href={url}
            className="d-block p-2 border rounded text-center small"
          >
            {title}
          </a>
        </div>
      ))}
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
