import Head from "next/head";
import Link from "next/link";
import CustomerReviewsSection from "@/components/common/Customer";
import StatsCounterSection from "@/components/common/StatsCounter";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>About EVS UAE | Best Electric Vehicle Service Center in Dubai</title>

        <meta
          name="description"
          content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai. We specialize in expert EV maintenance, repair, and software solutions."
        />

        <meta
          name="keywords"
          content="electric vehicle service, EV car service, electric car repair, EV garage Dubai, electric vehicle maintenance, EV software solutions"
        />

        <link rel="canonical" href="https://evsuae.com/about" />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />

        <meta name="author" content="Admin" />
        <meta name="publisher" content="Electric Vehicle Services UAE" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta httpEquiv="Content-Language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://evsuae.com/about" />
        <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/about" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About EVS UAE | Best Electric Vehicle Service Center in Dubai"
        />
        <meta
          property="og:description"
          content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai."
        />
        <meta property="og:url" content="https://evsuae.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About EVS UAE | Best Electric Vehicle Service Center in Dubai"
        />
        <meta
          name="twitter:description"
          content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai."
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
              "@type": "AboutPage",
              name: "About Electric Vehicle Services UAE",
              description:
                "Learn about Electric Vehicle Services UAE—our mission, expertise in EV maintenance, and commitment to sustainable transportation across the UAE.",
              url: "https://evsuae.com/about",
              mainEntity: {
                "@type": "AutomotiveBusiness",
                name: "Electric Vehicle Services UAE",
                url: "https://evsuae.com/",
                logo:
                  "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
                description:
                  "Electric Vehicle Services UAE provides advanced maintenance, repair, and upgrade services for electric vehicles across the UAE.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "AE",
                },
                telephone: "+971600500387",
                email: "contact@evsuae.com",
                sameAs: [
                  "https://www.instagram.com/evs_uae/",
                  "https://www.linkedin.com/company/eva-electric-vehicle-services/",
                ],
              },
            }),
          }}
        />
      </Head>

      <section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography1 pt-10">
        <div className="container">
          <div className="row justify-content-center small-screen">
            <div
              className="col-md-12 d-flex flex-column align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px"
              data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <h1 className="ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                About EVS Electric Vehicle Services
              </h1>
              <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
                We are Pioneers in Electric Mobility
                <span className="text-base-color">.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section for Mobile & Smaller Screens - Shows text again + full-width image */}
      <section className="bg-black pt-15 pb-5 mobile-about">
        <div className="container about-evs">
          <div className="row">
            {/* Text Block - Repeated for mobile (as per original design) */}
            <div
              className="col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px appear anime-child anime-complete"
              data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <h1 className="ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                About EVS Electric Vehicle Services
              </h1>
              <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
                We are Pioneers in Electric Mobility
                <span className="text-base-color">.</span>
              </h2>
            </div>

            {/* Full-width Team Image */}
            <div className="col-12 cover-bg mt-4">
              <img
                src="https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1024"
                className="feather-edge img-fluid"
                srcSet="
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=320 320w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=640 640w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1024 1024w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1440 1440w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1920 1920w
                "
                sizes="100vw"
                alt="EVS Electric Vehicle Services Team"
              />
            </div>
          </div>
        </div>
      </section>


          
      <section className="position-relative pb-0">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Column - Moves below text on mobile (order-2 on small, order-1 on lg) */}
            <div
              className="col-lg-6 col-xl-6 order-2 order-lg-1 align-self-end position-relative"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <img
                src="https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1024"
                srcSet="
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=320 320w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=640 640w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1024 1024w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1440 1440w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1920 1920w
                "
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                alt="EVS Founder"
                className="feathered-image"
              />
            </div>

            {/* Text Column */}
            <div
              className="col-lg-6 col-xxl-4 col-xl-5 offset-xl-1 order-1 order-lg-2 md-mb-50px sm-mb-30px"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-30px">
                Our Journey
              </span>
              <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
                From Vision to Reality<span className="text-base-color">.</span>
              </h2>
              <p className="mb-30px">
                Founded with a bold vision to revolutionize the automotive world, EVS has grown into a leading force in the electric vehicle service industry. As the first Electric Vehicle Service center in the prestigious GCC, we have expanded our reach and impact globally, driven by our commitment to excellence and sustainability.
              </p>
              <Link
                href="https://evsuae.com/contact"
                className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px"
              >
                Contact Us<span className="bg-white"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - What We Do / Why EVS / Join Us */}
      <section className="">
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center mb-4">
            <div className="col-xl-8 col-lg-10 text-center">
              <h2
                className="text-white fw-600 ls-minus-1px alt-font"
                data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                Be Part of the Revolution<span className="text-base-color">.</span>
              </h2>
            </div>
          </div>

          {/* Tabs Layout */}
          <div
            className="row align-items-center"
            data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            {/* Tab Navigation (Left Side) */}
            <div className="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px align-items-center justify-content-center">
              <ul className="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
                <li className="nav-item">
                  <a
                    data-bs-toggle="tab"
                    href="#tab_four1"
                    className="nav-link d-flex align-items-center active"
                  >
                    <i className="feather icon-feather-briefcase icon-extra-medium text-base-color"></i>
                    <span className="text-white">What We Do</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="tab" href="#tab_four2" className="nav-link d-flex align-items-center">
                    <i className="feather icon-feather-edit icon-extra-medium text-base-color"></i>
                    <span className="text-white">Why EVS</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="tab" href="#tab_four3" className="nav-link d-flex align-items-center">
                    <i className="feather icon-feather-compass icon-extra-medium text-base-color"></i>
                    <span className="text-white">Join Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Tab Content (Right Side) */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="tab-content">
                {/* Tab 1: What We Do */}
                <div className="tab-pane fade show active" id="tab_four1">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 offset-xl-1 text-center text-md-start">
                      <h5 className="alt-font text-white mb-20px fw-500 ls-minus-1px">
                        <span className="fw-600 text-base-color">What</span> We Do
                      </h5>
                      <p>
                        Comprehensive EV Solutions At EVS, we offer a one-stop solution for all electric vehicle needs. Our services include advanced software and hardware solutions, specialized body repair, and high-voltage battery services. Our team of certified professionals ensures that every EV we service performs at its peak, with safety and efficiency as our top priorities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 2: Why EVS */}
                <div className="tab-pane fade" id="tab_four2">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 offset-xl-1 text-center text-md-start">
                      <h5 className="alt-font text-white mb-20px fw-500 ls-minus-1px">
                        <span className="fw-600 text-base-color">Why</span> EVS?
                      </h5>
                      <p>
                        Innovation Meets Sustainability At EVS, sustainability is at the core of our mission. We focus on repairing rather than replacing critical EV components, which helps reduce waste and minimize the environmental impact of our operations. As leaders in electric vehicle services, we're driving the global transition to sustainable energy. Our unique facility, equipped with a specialized high-voltage repair unit, allows us to repair high-voltage batteries—a service that sets us apart and reinforces our commitment to sustainability above all else.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 3: Join Us */}
                <div className="tab-pane fade" id="tab_four3">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 offset-xl-1 text-center text-md-start">
                      <h5 className="alt-font text-white mb-20px fw-500 ls-minus-1px">
                        <span className="fw-600 text-base-color">Join</span> Us
                      </h5>
                      <p>
                        Be Part of the Revolution Whether you're seeking top-tier care for your EV or exploring{" "}
                        <a href="/franchise" className="internal text-white-hover text-decoration-underline">
                          franchise opportunities
                        </a>{" "}
                        in a rapidly growing market, EVS offers unparalleled expertise and support. Join us on our journey to drive the future of electric mobility.
                      </p>
                    </div>
                  </div>
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
