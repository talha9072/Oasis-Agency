import Head from "next/head";
import Script from "next/script";
import CustomerReviewsSection from "@/components/common/Customer";
import LogoMarquee from "@/components/common/LogoMarquee";
import StatsCounterSection from "@/components/common/StatsCounter";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
       
    <Head>
      {/* Title */}
      <title>Extended Electric Vehicle Warranties in UAE | EVS</title>

      {/* Basic SEO */}
      <meta
        name="description"
        content="Protect your EV with EVS extended warranties. Available across UAE – Dubai, Abu Dhabi, Ajman & Al Ain. Expert coverage for batteries & motors."
      />
      <meta
        name="keywords"
        content="extended warranties, electric vehicle warranty, EV warranty Dubai, electric car warranty, EV battery warranty, extended coverage EV, EVS UAE warranty, Dubai EV services"
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta name="author" content="Admin" />
      <meta name="publisher" content="Electric Vehicle Services UAE" />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/extended-warranties" />

      {/* Viewport & Charset */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Language / Hreflang */}
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/extended-warranties" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/extended-warranties" />
      <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/extended-warranties" />

      {/* Open Graph */}
      <meta property="og:title" content="Extended Electric Vehicle Warranties in UAE | EVS" />
      <meta
        property="og:description"
        content="Protect your EV with EVS extended warranties. Available across UAE – Dubai, Abu Dhabi, Ajman & Al Ain. Expert coverage for batteries & motors."
      />
      <meta property="og:url" content="https://evsuae.com/extended-warranties" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Extended Electric Vehicle Warranties in UAE | EVS" />
      <meta
        name="twitter:description"
        content="Protect your EV with EVS extended warranties. Available across UAE – Dubai, Abu Dhabi, Ajman & Al Ain. Expert coverage for batteries & motors."
      />
      <meta name="twitter:image" content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp" />

      {/* Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Fonts preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data – Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Extended Warranties for Electric Vehicles",
            "description":
              "Protect your electric vehicle with EVS's extended warranty plans. Our coverage includes key EV components such as batteries, inverters, and software systems, ensuring peace of mind across the UAE.",
            "serviceType": "Extended Warranty Services",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "Electric Vehicle Services UAE",
              "url": "https://evsuae.com/",
              "logo": "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971600500387",
                "email": "contact@evsuae.com",
                "contactType": "Customer Service"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "url": "https://evsuae.com/extended-warranties",
            "inLanguage": "en"
          })
        }}
      />
    </Head>


    {/* start page title */}
<section
  id="full-hero-2"
  className="overflow-hidden tesla-section d-flex align-items-center light-overlay"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-005.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
  <div className="container z-index-1">
    <div className="row">
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <div className="d-inline-block">
          <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mb-0">
            <span className="hero-tag bg-dark-gray alt-font d-inline-block me-10px border-radius-3px fs-12 text-white fw-500">
              EVS
            </span>
            <h1 className="d-inline-block me-10px border-radius-3px fs-12 fw-500 pb-0 hero-tag-text">
              Extended Warrenties for Electric Vehicles
            </h1>
          </div>
        </div>

        <div className="title alt-font text-white mt-3">
          <h2 className="d-block pb-2">Your EV, Fully Covered.</h2>
        </div>

        <div className="desc w-70 d-inline-block hero-desc">
          Drive confidently with EVS warranty. From battery to motor — we’ve got
          your journey secured.
        </div>

        <a
          href="#compare-plans"
          className="btn-hero rev-btn alt-font bg-base-color text-dark-gray text-uppercase border-radius-4px rs-hover-ready hero-cta-button mt-4 w-auto d-inline-block"
          aria-label="Compare warranty plans"
        >
          Compare Plans
        </a>
      </div>
    </div>
  </div>
</section>
{/* end page title */}

<LogoMarquee />

{/* start section */}
<section id="compare-plans" className="position-relative pb-0">
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-12"
        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        <h2 className="alt-font fs-44 fw-700 ls-minus-1px text-white mb-30px">
          Our Warranty Packages<span className="text-base-color">.</span>
        </h2>

        <div id="ev-letter-bar" className="d-flex flex-wrap gap-2 mb-4"></div>
      </div>
    </div>

    {/* NEW ROW SEPARATE FROM col-12 */}
    <div id="ev-brands-container" className="row"></div>

    <div id="ev-loader" className="text-white text-center">
      Loading EV brands...
    </div>
  </div>
</section>
{/* end section */}


{/* start section */}
<section>
  <div className="container">
    <div className="row mb-5 sm-mb-50px">
      <div className="col-12 col-xl-9 col-lg-12">
        <h2
          className="text-white alt-font fw-500 ls-minus-1px mb-0"
          data-fancy-text='{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["Our extended warranties cover a wide range of essential components, including:"], "duration": 400, "delay": 0, "speed": 20, "easing": "easeOutQuad" }'
        ></h2>
      </div>
    </div>

    <div className="row sm-mb-30px">
      <div
        className="col-12"
        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >

        {/* Item 01 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-1 text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">01</span>
          </div>
          <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-battery-full text-base-color icon-large me-20px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              High-Voltage Battery Repairs
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Protect your EV’s most critical component with coverage for battery
              repairs, ensuring longevity and performance.
            </p>
          </div>
        </div>

        {/* Item 02 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-1 text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">02</span>
          </div>
          <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px flex-wrap">
            <i className="bi bi-cpu-fill text-base-color icon-large me-20px"></i>
            <span className="text-white alt-font fw-500 fs-30 me-15px">
              Software and Hardware
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Keep your EV’s systems up-to-date and functioning smoothly with
              coverage for software updates and hardware repairs.
            </p>
          </div>
        </div>

        {/* Item 03 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-1 text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">03</span>
          </div>
          <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-gear-fill text-base-color icon-large me-20px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Motor and Drivetrain
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Ensure your EV&apos;s powertrain operates efficiently with extended
              protection for motors and related components.
            </p>
          </div>
        </div>

        {/* Item 04 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-1 text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">04</span>
          </div>
          <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-ev-station-fill text-base-color icon-large me-20px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Charging System Repairs
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Get coverage for issues related to your EV’s charging system,
              including on-board chargers and external connectors.
            </p>
          </div>
        </div>

        {/* Item 05 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-1 text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">05</span>
          </div>
          <div className="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-wrench-adjustable text-base-color icon-large me-20px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Maintenance and Service
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Extend coverage for regular maintenance and unexpected repairs, so
              you can drive with confidence.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
{/* end section */}



{/* start section */}
<section className="pt-0">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div
        className="col-xl-5 col-lg-6 md-mb-50px sm-mb-20px"
        data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <span className="bg-slate-blue box-shadow-bottom text-uppercase fs-13 ps-25px pe-25px alt-font fw-700 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px">
          Invest in Peace of Mind
        </span>

        <h3 className="text-white fw-600 alt-font ls-minus-1px mb-20px sm-w-85 xs-w-100">
          Why Choose EVS Extended Warranties?
        </h3>

        <p>
          Our extended warranties are crafted specifically for electric vehicles,
          ensuring you get the coverage that matters most. With flexible plans,
          expert service, and nationwide support, we’ve got you covered wherever
          the road takes you.
        </p>

        <ul className="list-style-03 text-white fw-500">
          <li>Tailored for EVs</li>
          <li>Expert Service</li>
          <li>Flexible Plans</li>
          <li>Nationwide Support</li>
        </ul>
      </div>

      <div className="col-xl-6 col-lg-6 offset-xl-1 position-relative md-mb-50px">
        <div
          className="text-end w-80 md-w-75 ms-auto"
          data-animation-delay="500"
          data-shadow-animation="true"
          data-bottom-top="transform: translateY(50px)"
          data-top-bottom="transform: translateY(-50px)"
        >
          <img
            src="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2073.jpg&w=1024"
            srcSet="
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2073.jpg&w=320 320w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2073.jpg&w=640 640w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2073.jpg&w=1024 1024w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2073.jpg&w=1440 1440w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2073.jpg&w=1920 1920w
            "
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
            alt="EV Warranty Service"
            className="border-radius-5px"
          />
        </div>

        <div
          className="w-60 md-w-50 xs-w-55 overflow-hidden position-absolute left-15px bottom-minus-50px"
          data-shadow-animation="true"
          data-animation-delay="500"
          data-bottom-top="transform: translateY(-50px)"
          data-top-bottom="transform: translateY(50px)"
        >
          <img
            src="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2079.jpg&w=1024"
            srcSet="
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2079.jpg&w=320 320w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2079.jpg&w=640 640w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2079.jpg&w=1024 1024w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2079.jpg&w=1440 1440w,
              https://evsuae.com/.netlify/images?url=/img/evs/IMG_2079.jpg&w=1920 1920w
            "
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
            alt="EV Warranty Options"
            className="border-radius-5px box-shadow-quadruple-large"
          />
        </div>
      </div>
    </div>
  </div>
</section>
{/* end section */}

{/* start section */}
<section>
  <div className="container">
    <div className="row justify-content-center mb-3">
      <div
        className="col-12 text-center"
        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-700 text-white alt-font ls-minus-1px mb-25px d-block">
          How your extended warranty works
        </h2>
      </div>
    </div>

    <div
      className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center g-0"
      data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
    >
      {/* Step 01 */}
      <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box md-mb-50px">
        <h4 className="d-block text-base-color mb-0 fw-700 ls-minus-2px">01</h4>
        <div className="process-step-icon-box position-relative mt-25px mb-25px">
          <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1"></span>
          <div className="step-box d-flex align-items-center justify-content-center bg-slate-blue box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
            <span className="w-8px h-8px bg-base-color border-radius-100"></span>
          </div>
        </div>
        <span className="d-inline-block fw-600 text-white fs-18 mb-5px">
          Select Your Plan
        </span>
        <p className="w-75 sm-w-85 d-inline-block">
          Choose the warranty that suits you, with customizable options for
          duration and coverage from 1, 2 and 3 years.
        </p>
      </div>

      {/* Step 02 */}
      <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box xs-mb-50px">
        <h4 className="d-block text-base-color mb-0 fw-700 ls-minus-2px">02</h4>
        <div className="process-step-icon-box position-relative mt-25px mb-25px">
          <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1"></span>
          <div className="step-box d-flex align-items-center justify-content-center bg-slate-blue box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
            <span className="w-8px h-8px bg-base-color border-radius-100"></span>
          </div>
        </div>
        <span className="d-inline-block fw-600 text-white fs-18 mb-5px">
          Comprehensive Inspection
        </span>
        <p className="w-75 sm-w-85 d-inline-block">
          Our technicians will perform a thorough inspection of your vehicle to
          ensure it qualifies for coverage.
        </p>
      </div>

      {/* Step 03 */}
      <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box">
        <h4 className="d-block text-base-color mb-0 fw-700 ls-minus-2px">03</h4>
        <div className="process-step-icon-box position-relative mt-25px mb-25px">
          <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1"></span>
          <div className="step-box d-flex align-items-center justify-content-center bg-slate-blue box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
            <span className="w-8px h-8px bg-base-color border-radius-100"></span>
          </div>
        </div>
        <span className="d-inline-block fw-600 text-white fs-18 mb-5px">
          Seamless Service
        </span>
        <p className="w-75 sm-w-85 d-inline-block">
          In the event of a repair, simply bring your EV to any of our service
          centers, and we’ll handle the rest.
        </p>
      </div>

      {/* Step 04 */}
      <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box md-mb-50px">
        <h4 className="d-block text-base-color mb-0 fw-700 ls-minus-2px">04</h4>
        <div className="process-step-icon-box position-relative mt-25px mb-25px">
          <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1"></span>
          <div className="step-box d-flex align-items-center justify-content-center bg-slate-blue box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
            <span className="w-8px h-8px bg-base-color border-radius-100"></span>
          </div>
        </div>
        <span className="d-inline-block fw-600 text-white fs-18 mb-5px">
          Quality Checks
        </span>
        <p className="w-75 sm-w-85 d-inline-block">
          To keep your warranty valid, a regular quality inspection should be
          performed every 10,000 kms or 6 months, whichever comes first.
        </p>
      </div>
    </div>
  </div>
</section>
{/* end section */}



      
  {/* Stats / Counter Section */}
      <StatsCounterSection />

          {/* Customer Reviews Section with Swiper Slider */}
      <CustomerReviewsSection />


          
          

<ScrollProgressEn />
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      useScrollContainer: false,
      extraScripts: ["/js/warranty.js"],
    },
  };
}
