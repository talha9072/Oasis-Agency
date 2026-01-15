import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";
import FranchiseForm from "@/components/common/FranchiseForm";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}

     
    <Head>
  <title>
    EV Franchise in Dubai | Electric Vehicle Service Center
  </title>

  <meta
    name="description"
    content="Join the growing electric vehicle industry with EVS UAE. Start your own EV service franchise in Dubai and benefit from expert support, brand recognition, and a booming market."
  />

  <meta
    name="keywords"
    content="EV franchise Dubai, start EV service business UAE, electric vehicle service franchise, automotive franchise UAE, EVS franchise opportunity, invest in EV business Dubai, green auto franchise UAE"
  />

  <link
    rel="canonical"
    href="https://evsuae.com/franchise"
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
    href="https://evsuae.com/franchise"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/franchise"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/franchise"
  />

  <meta
    property="og:title"
    content="EV Franchise in Dubai | Electric Vehicle Service Center"
  />
  <meta
    property="og:description"
    content="Join the growing electric vehicle industry with EVS UAE. Start your own EV service franchise in Dubai and benefit from expert support, brand recognition, and a booming market."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/franchise"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="EV Franchise in Dubai | Electric Vehicle Service Center"
  />
  <meta
    name="twitter:description"
    content="Join the growing electric vehicle industry with EVS UAE. Start your own EV service franchise in Dubai and benefit from expert support, brand recognition, and a booming market."
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
        "@type": "Offer",
        "name": "EVS Franchise Opportunity",
        "description":
          "Explore franchise opportunities with Electric Vehicle Services UAE. Become part of the leading EV service network in the region with full support, training, and branding.",
        "url": "https://evsuae.com/franchise",
        "offeredBy": {
          "@type": "AutomotiveBusiness",
          "name": "Electric Vehicle Services UAE",
          "url": "https://evsuae.com/",
          "logo":
            "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971600500387",
            "email": "contact@evsuae.com",
            "contactType": "Franchise Inquiries"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        "availability": "https://schema.org/InStock"
      })
    }}
  />
</Head>


    <section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography pt-5">
  <div className="container">
    <div className="row justify-content-center small-screen">
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px"
        data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        <h1 className="ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
          EVS Franchise
        </h1>

        <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
          Become an EVS Franchise Partner
          <span className="text-base-color">.</span>
        </h2>
      </div>

      <div className="col-md-6">
        <div
          className="outside-box-right-20 sm-outside-box-left-20 h-100 sm-h-300px xs-h-250px cover-background"
          style={{
            backgroundImage:
              "url('https://evsuae.com/.netlify/images?url=/img/carev2.png&w=1024')",
          }}
        />
      </div>
    </div>
  </div>
</section>

<section className="position-relative pb-5">
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-lg-6 col-xl-6 order-2 order-lg-1 align-self-end position-relative"
        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        <img
          src="https://evsuae.com/.netlify/images?url=/img/evs-home-mob.jpg&w=1024"
          srcSet="
            https://evsuae.com/.netlify/images?url=/img/evs-home-mob.jpg&w=320 320w,
            https://evsuae.com/.netlify/images?url=/img/evs-home-mob.jpg&w=640 640w,
            https://evsuae.com/.netlify/images?url=/img/evs-home-mob.jpg&w=1024 1024w,
            https://evsuae.com/.netlify/images?url=/img/evs-home-mob.jpg&w=1440 1440w,
            https://evsuae.com/.netlify/images?url=/img/evs-home-mob.jpg&w=1920 1920w
          "
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
          alt="EVS Franchise Team"
        />
      </div>

      <div
        className="col-lg-6 col-xxl-4 col-xl-5 offset-xl-1 order-1 order-lg-2 md-mb-50px sm-mb-30px"
        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
          Join the EVS Winning Team
          <span className="text-base-color">.</span>
        </h2>

        <p className="mb-30px">
          Join the future of sustainable transportation by becoming an EVS
          franchise partner. As a pioneer in electric vehicle services, EVS
          offers a unique opportunity to be part of a rapidly growing industry.
          Our franchise model provides access to cutting-edge technology,
          extensive training, and continuous support from a team of experts.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="position-relative pt-100px mb-50px">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="bg-black pt-7 ps-8 pe-8 pb-5 border-radius-6px">
          <div className="row mb-40px">
            <div className="col-9">
              <h2 className="fw-700 alt-font text-white">
                <span className="text-base-color">Interested</span> in joining us?
              </h2>
              <p>
                Fill out the form below and our team will contact you.
              </p>
            </div>
            <div className="col-3 text-end">
              <i className="bi bi-send icon-large text-base-color"></i>
            </div>
          </div>

          <FranchiseForm />
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
