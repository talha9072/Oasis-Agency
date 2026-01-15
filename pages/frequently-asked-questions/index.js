import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}

    <Head>
    {/* Title */}
    <title>EVS FAQ | Electric Vehicle Service Questions Answered</title>

    {/* Meta Description */}
    <meta
        name="description"
        content="Find answers to common questions about electric vehicle service (EVS), including maintenance schedules, battery checks, costs & more."
    />

    {/* Keywords */}
    <meta
        name="keywords"
        content="Electric Vehicle Service FAQ, EV maintenance, EVS service, electric car repair, battery check EV, EV charging service, electric vehicle maintenance, EV servicing cost"
    />

    {/* Canonical */}
    <link
        rel="canonical"
        href="https://evsuae.com/frequently-asked-questions"
    />

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

    {/* Language + Hreflang */}
    <meta httpEquiv="Content-Language" content="en" />
    <link
        rel="alternate"
        hrefLang="en"
        href="https://evsuae.com/frequently-asked-questions"
    />
    <link
        rel="alternate"
        hrefLang="ar"
        href="https://evsuae.com/ar/frequently-asked-questions"
    />

    {/* Open Graph */}
    <meta
        property="og:title"
        content="EVS FAQ | Electric Vehicle Service Questions Answered"
    />
    <meta
        property="og:description"
        content="Find answers to common questions about electric vehicle service (EVS), including maintenance schedules, battery checks, costs & more."
    />
    <meta
        property="og:url"
        content="https://evsuae.com/frequently-asked-questions"
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
        content="EVS FAQ | Electric Vehicle Service Questions Answered"
    />
    <meta
        name="twitter:description"
        content="Find answers to common questions about electric vehicle service (EVS), including maintenance schedules, battery checks, costs & more."
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

    {/* Preconnect */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

    {/* Charset / IE */}
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    {/* FAQ Schema */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
            {
                "@type": "Question",
                name: "What services does EVS UAE offer?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "EVS UAE provides a full range of electric vehicle services including maintenance, battery repairs, software upgrades, and custom modifications.",
                },
            },
            {
                "@type": "Question",
                name: "Where is EVS UAE located?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "We have branches in Abu Dhabi, Dubai, Sharjah, and Al Ain, serving EV owners across the UAE.",
                },
            },
            {
                "@type": "Question",
                name: "Do you offer extended warranties?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, EVS UAE offers extended warranty services for various EV components such as batteries and inverters.",
                },
            },
            ],
        }),
        }}
    />
    </Head>

     <section className="big-section ipad-top-space-margin faq">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-12 position-relative md-mb-25px"
        data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-700 alt-font text-center text-white ls-minus-2px">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="col-lg-10 mx-auto">
        <div
          className="accordion accordion-style-02"
          id="accordion-style-02"
          data-active-icon="icon-feather-chevron-up"
          data-inactive-icon="icon-feather-chevron-down"
          data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >

{/* 01 */}
<div className="accordion-item active-accordion">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-01" aria-expanded="true">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-up icon-extra-medium"></i>
        <span className="fw-600 fs-18">Where is EVS located?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-01" className="accordion-collapse collapse show">
    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-base-color">
      <p>
        EVS operates across multiple locations including{" "}
        <a href="/evs-dubai" className="internal">Dubai</a>,{" "}
        <a href="/evs-abu-dhabi" className="internal">Abu Dhabi</a>,{" "}
        <a href="/evs-ajman" className="internal">Ajman</a>,{" "}
        <a href="/evs-alain" className="internal">Al Ain</a> in the United Arab Emirates,
        and <a href="/evs-riyadh" className="internal">Riyadh</a> in Saudi Arabia.
        Our workshops are fully equipped and conveniently located to serve electric vehicle owners throughout the region.
      </p>
    </div>
  </div>
</div>

{/* 02 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-02">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">What types of electric vehicles do you service?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-02" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-base-color">
      <p>
        We service a wide range of electric vehicles, including brands like{" "}
        <a href="/tesla" className="internal">Tesla</a>,{" "}
        <a href="/byd" className="internal">BYD</a>,{" "}
        <a href="/zeekr" className="internal">Zeekr</a>,{" "}
        <a href="/rox" className="internal">Rox</a>,{" "}
        <a href="/avatr" className="internal">Avatr</a> and other full-electric and hybrid models.
      </p>
    </div>
  </div>
</div>

{/* 03 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-03">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Do you only work on electric vehicles?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-03" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-medium-gray">
      <p>
        Yes. EVS specializes exclusively in electric vehicles, with technicians, tools,
        and systems dedicated to EV-specific repairs, diagnostics, and maintenance.
        <a href="/services" className="internal"> Click here to see our services.</a>
      </p>
    </div>
  </div>
</div>

{/* 04 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-04">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Can I bring my EV to EVS after an accident?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-04" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        Absolutely. We offer full bodywork, panel replacement, structural alignment, and insurance support—including damage estimation and claim processing.
        <a href="/services/insurance" className="internal"> Click here for more information on insurance services.</a>
      </p>
    </div>
  </div>
</div>

{/* 05 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-05">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Do you handle both mechanical and electrical repairs?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-05" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        Yes. We provide complete <a href="/services/mechanical" className="internal">mechanical</a> and{" "}
        <a href="/services/battery-electrical" className="internal">electrical services</a>, from brake and suspension work
        to high-voltage battery repairs, <a href="/services/programming" className="internal">key programming, and firmware updates.</a>
      </p>
    </div>
  </div>
</div>

{/* 06 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-06">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Do you work with insurance companies?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-06" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        Yes. We assist with{" "}
        <a href="/services/insurance/accident-damage-insurance-claim-processing" className="internal">
          accident claims, damage documentation, and direct billing
        </a>{" "}
        with most major UAE insurance providers.
      </p>
    </div>
  </div>
</div>

{/* 07 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-07">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Do you offer diagnostics and regular checkups?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-07" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        Yes. EVS provides comprehensive diagnostics for low- and high-voltage systems,
        as well as full mechanical checkups for EV health and performance tracking.
      </p>
    </div>
  </div>
</div>

{/* 08 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-08">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">What makes EVS different from regular auto repair shops?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-08" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        EVS is built specifically for electric vehicles. We use EV-compatible tools,
        follow high-voltage safety standards, and train our team in EV-only platforms and technologies.
        <a href="/about" className="internal"> Learn more about EVS</a>
      </p>
    </div>
  </div>
</div>

{/* 09 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-09">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Can I book an appointment online?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-09" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        Yes. You can contact us <a href="https://evsuae.com/contact" className="internal">here</a> to schedule diagnostics,
        repairs, or consultations.
      </p>
    </div>
  </div>
</div>

{/* 10 */}
<div className="accordion-item">
  <div className="accordion-header border-bottom border-color-medium-gray">
    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-10">
      <div className="accordion-title mb-0 position-relative text-white pe-30px">
        <i className="feather icon-feather-chevron-down icon-extra-medium"></i>
        <span className="fw-600 fs-18">Do you offer genuine EV parts?</span>
      </div>
    </a>
  </div>
  <div id="accordion-style-02-10" className="accordion-collapse collapse">
    <div className="accordion-body last-paragraph-no-margin border-color-medium-gray">
      <p>
        We source high-quality, EV-compatible parts that meet or exceed manufacturer specifications
        for reliability and safety.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>

    <div className="row justify-content-center mt-5">
      <div className="col-auto icon-with-text-style-08 sm-mb-10px">
        <div className="feature-box feature-box-left-icon-middle">
          <div className="feature-box-icon me-10px">
            <i className="bi bi-envelope icon-small text-light-gray"></i>
          </div>
          <div className="feature-box-content">
            <span className="alt-font text-light-gray fw-500 fs-18">
              Your Question not listed here?{" "}
              <a href="/contact" className="text-decoration-line-bottom text-light-gray fw-600">
                Contact Us
              </a>
            </span>
          </div>
        </div>
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
