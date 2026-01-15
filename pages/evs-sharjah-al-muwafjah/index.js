 import Head from "next/head";
 import PageTitleWithMap from "@/components/locations/PageTitleWithMap";
import ServiceMarquee from "@/components/locations/ServiceMarqueeExpress";
import CustomerReviewsSection from "@/components/common/Customer";
import StatsCounterSection from "@/components/common/StatsCounter";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
       
     
       <Head>
  {/* Title */}
  <title>EVS Express Sharjah Al Muwafjah | Electric Vehicle Service Center</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Express Sharjah Al Muwafjah provides expert electric vehicle diagnostics, maintenance, and repair services. Trusted EV service center in Al Muwafjah, Sharjah."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EVS Al Muwafjah, electric vehicle service Sharjah, EV service center Sharjah, electric car repair Al Muwafjah, EV maintenance Sharjah, EVS Express Sharjah"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/evs-sharjah-al-muwafjah" />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />

  {/* Hreflang */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/evs-sharjah-al-muwafjah"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/evs-sharjah-al-muwafjah"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/evs-sharjah-al-muwafjah"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EVS Express Sharjah Al Muwafjah | Electric Vehicle Service Center"
  />
  <meta
    property="og:description"
    content="Professional electric vehicle servicing, diagnostics, and repairs in Al Muwafjah, Sharjah by EVS Express."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/evs-sharjah-al-muwafjah"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="EVS Express Sharjah Al Muwafjah | EV Service Center"
  />
  <meta
    name="twitter:description"
    content="Reliable electric vehicle service center in Al Muwafjah, Sharjah. EVS Express offers diagnostics, maintenance, and repairs."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Icons */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="manifest" href="/site.webmanifest" />

  {/* Charset / Compatibility */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
</Head>

<PageTitleWithMap
  eyebrowTitle="Electric Vehicle Service Center"
  title="EVS Express Sharjah"
  highlight=" Al Muwafjah"
  description="Electric vehicle servicing & repair in Al Muwafjah, Sharjah"

  primaryButtonText="Get Directions"
  primaryButtonUrl="https://maps.app.goo.gl/BFwWNKZ5e3Sz8fRq5?g_st=ipc"

  secondaryButtonText="Call Us"
  secondaryButtonUrl="tel:+971569863920"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.697272668753!2d55.4735625!3d25.347937500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59bab02dbd61%3A0xb6779cc947ce1740!2sEVS%20Express%20Al%20Muwafjah%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768380853270!5m2!1sen!2s"
/>


<ServiceMarquee />

<section className="position-relative pt-0">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{ backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')" }}
  ></div>

  <div className="container position-relative">
    <div
      className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center"
      data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
    >
      {/* Address */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-pin-map icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <span className="d-block">
              <a
                href="https://maps.app.goo.gl/BFwWNKZ5e3Sz8fRq5?g_st=ipc"
                className="text-white fw-600"
              >
                Al Muwafjah, Sharjah, United Arab Emirates
              </a>
            </span>

            <a
              href="https://maps.app.goo.gl/BFwWNKZ5e3Sz8fRq5?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Get Directions
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-telephone icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <p className="text-white fw-600">
              EVS Express Sharjah – Al Muwafjah
            </p>

            <span className="d-block">
              <a
                href="tel:+971569863920"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                +971 56 986 3920
              </a>
            </span>

            <a
              href="tel:+971569863920"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Call Us
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-envelope-at icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <p className="text-white fw-600">Send us an email</p>

            <span className="d-block">
              <a
                href="mailto:info@evsuae.com"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                info@evsuae.com
              </a>
            </span>

            <a
              href="mailto:info@evsuae.com"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Email Us
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



          {/* Customer Reviews Section with Swiper Slider */}
      <CustomerReviewsSection />

      {/* Stats / Counter Section */}
      <StatsCounterSection />
      
      {/* Branches Section with Tabs */}
      <BranchesSection />
          
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
