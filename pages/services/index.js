import Head from "next/head";
import BranchesSection from "@/components/common/BranchesSection";


export default function Home() {
  return (
    <>


<Head>
  <title>Expert EV Service Centers Across The UAE | EVS</title>

  <meta
    name="description"
    content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah."
  />

  <meta
    name="keywords"
    content="electric vehicle service, EV car service, electric car repair, EV garage Dubai, electric vehicle maintenance, EV software solutions"
  />

  <link rel="canonical" href="https://evsuae.com/" />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* ✅ FIXED JSX ATTRIBUTES */}
  <meta httpEquiv="Content-Language" content="en" />
  <link rel="alternate" hrefLang="en-ae" href="https://evsuae.com/" />

  {/* Open Graph */}
  <meta property="og:title" content="Expert EV Service Centers Across The UAE | EVS" />
  <meta
    property="og:description"
    content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah."
  />
  <meta property="og:url" content="https://evsuae.com/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Expert EV Service Centers Across The UAE | EVS" />
  <meta
    name="twitter:description"
    content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* ✅ FIXED */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
</Head>


{/* HERO SECTION */}
<section
  id="hero-section"
  className="snap-section"
  style={{
    backgroundImage: "url('img/hero-mob.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="container">
    <div className="content-box">
      <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mt-3">
        <span className="hero-tag bg-dark-gray alt-font d-inline me-10px border-radius-3px fs-12 text-white fw-500">
          EVS
        </span>
        <h1 className="d-inline alt-font me-10px border-radius-3px fs-12 fw-500 hero-tag-text">
          Expert Electric Vehicle Service Center in UAE
        </h1>
      </div>

      <div className="title hero-h1 tp-caption alt-font text-white">
        <h2 className="d-block pb-2">Where Innovation Meets Care</h2>
        <p className="text-white alt-font fw-500 fs-40 d-block mx-auto">
          EV Service Crafted for the Roads of UAE
        </p>
      </div>

      <a
        href="https://evsuae.com/contact"
        className="btn-hero tp-caption rev-btn alt-font bg-base-color text-dark-gray d-inline-block text-uppercase border-radius-4px rs-hover-ready"
        id="slide-01-layer-06"
        style={{
          visibility: "inherit",
          transition: "none",
          textAlign: "center",
          lineHeight: "12px",
          borderWidth: "0px",
          margin: "0px 12px 8px 0px",
          padding: "19px 23px",
          letterSpacing: "0px",
          fontWeight: 600,
          fontSize: "15px",
          whiteSpace: "normal",
        }}
      >
        Book Your EV Check
      </a>
    </div>
  </div>
</section>

{/* PROGRAMMING & SOFTWARE */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        <div className="content-box pt-4">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            Programming & Software
          </h2>
          <p className="text-white alt-font fw-500 fs-26 mx-auto mt-1">
            Optimize Your EV’s Performance with Expert Programming and Software Solutions
          </p>
        </div>

        <div className="btn-box mt-auto pb-4 mx-auto">
          <a
            href="services/programming"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            View All Programming Services <span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Book your EV Check <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* MECHANICAL SERVICES */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            Mechanical Services
          </h2>
          <p className="text-white alt-font fw-500 fs-30 mx-auto mt-1">
            Keep Your EV Running Smoothly with Top-Notch Mechanical Care
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="services/mechanical"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            View All Mechanical Services <span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Book your EV Check <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* BATTERY & ELECTRICAL */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        <div className="content-box pt-4">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            Battery & Electrical
          </h2>
          <p className="text-white alt-font fw-500 fs-26 mx-auto mt-1">
            Power Up Your EV with Advanced Battery and Electrical Solutions
          </p>
        </div>

        <div className="btn-box mt-auto pb-4 mx-auto">
          <a
            href="services/battery-electrical"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            View All Electrical Services <span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Book your EV Check <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* BODY & PAINT */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            Body & Paint
          </h2>
          <p className="text-white alt-font fw-500 fs-30 mx-auto mt-1">
            Restore Your EV’s Look with Expert Body and Paint Services
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="services/body-paint"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            View All Body & Paint Services <span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Book your EV Check <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* INSURANCE */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            Insurance Services
          </h2>
          <p className="text-white alt-font fw-500 fs-30 mx-auto mt-1">
            Seamless Insurance Support for Your EV Needs
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="services/insurance"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            View All Insurance Services <span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Book your EV Check <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="snap-section dark-overlay">
  <div className="container position-relative">
    <div className="row">
      <h2 className="alt-font fw-700 ls-minus-1px text-white mb-5">
        All Services<span className="text-base-color">.</span>
      </h2>

      {/* Programming & Software */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <div>
              <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
                Programming & Software
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2">
                <a href="https://evsuae.com/services/programming/custom-region-coding">
                  Custom Region Coding
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/programming/key-sim-programming">
                  Key & SIM Programming
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/programming/firmware-software-updates">
                  Firmware & Software Updates
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/programming/module-programming">
                  Module Programming
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/programming/system-calibration-diagnostics">
                  System Calibration & Diagnostics
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/programming/app-integration-android">
                  App Integration – Android
                </a>
              </div>
              <div>
                <a href="https://evsuae.com/services/programming/bms-calibration">
                  BMS Calibration
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mechanical Services */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <div>
              <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
                Mechanical Services
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2">
                <a href="https://evsuae.com/services/mechanical/brake-suspension-repairs">
                  Brake & Suspension Repairs
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/mechanical/ac-hvac-service">
                  AC & HVAC Service
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/mechanical/transmission-drive-unit-repairs">
                  Transmission & Drive Unit Repairs
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/mechanical/full-checkups-diagnostics">
                  Full Checkups & Diagnostics
                </a>
              </div>
              <div>
                <a href="https://evsuae.com/services/mechanical/tire-alignment-axle-work">
                  Tire Alignment & Axle Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body & Paint */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <div>
              <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
                Body & Paint
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2">
                <a href="https://evsuae.com/services/body-paint/collision-repair-panel-replacement">
                  Collision Repair & Panel Replacement
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/body-paint/structural-body-alignment">
                  Structural Body Alignment
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/body-paint/scratch-dent-repair">
                  Scratch & Dent Repair
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/body-paint/full-body-painting-refinishing">
                  Full Body Painting & Refinishing
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/body-paint/sensor-camera-realignment">
                  Sensor & Camera Realignment
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/body-paint/detailing-interior-exterior">
                  Detailing (Interior & Exterior)
                </a>
              </div>
              <div>
                <a href="https://evsuae.com/services/body-paint/windshield-mirror-replacement">
                  Windshield & Mirror Replacement
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Battery & Electrical */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <div>
              <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
                Battery & Electrical
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/high-voltage-battery-repairs">
                  High Voltage Battery Repairs
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/low-voltage-diagnostics">
                  Low Voltage Diagnostics
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/battery-health-thermal-management">
                  Battery Health & Thermal Management
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/pdu-repair">
                  PDU Repair
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/charging-port-repairs">
                  Charging Port Repairs
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/charging-port-conversions">
                  Charging Port Conversions
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/charging-port-upgrades">
                  Charging Port Upgrades
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/sensor-ecu-replacements">
                  Sensor & ECU Replacements
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/battery-electrical/infotainment-camera-systems">
                  Infotainment & Camera Systems
                </a>
              </div>
              <div>
                <a href="https://evsuae.com/services/battery-electrical/wiring-fuse-harness-repair">
                  Wiring & Fuse Harness Repair
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Services */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <div>
              <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
                Insurance Services
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2">
                <a href="https://evsuae.com/services/insurance/damage-estimation">
                  Damage Estimation
                </a>
              </div>
              <div className="mb-2">
                <a href="https://evsuae.com/services/insurance/accident-damage-insurance-claim-processing">
                  Accident Damage & Insurance Claim Processing
                </a>
              </div>
              <div>
                <a href="https://evsuae.com/services/insurance/direct-billing">
                  Direct Billing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      
      <BranchesSection />
     

     




    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      extraScripts: ["/js/blog.js"],
    },
    
  };
}
