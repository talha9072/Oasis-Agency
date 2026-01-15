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
  <title>
    EVS Abu Dhabi Al Mushrif | Electric Vehicle Service & Repair – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional electric vehicle service and repair in Abu Dhabi – Al Mushrif. Certified EV technicians offering diagnostics, maintenance, and repairs for all major EV brands."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="EV service Abu Dhabi Al Mushrif, electric vehicle repair Al Mushrif, EV maintenance Abu Dhabi, Tesla service Abu Dhabi, EV diagnostics Abu Dhabi, EV workshop Al Mushrif"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/evs-abu-dhabi-al-mushrif"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author & Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />

  {/* Hreflang */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/evs-abu-dhabi-al-mushrif"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/evs-abu-dhabi-al-mushrif"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/evs-abu-dhabi-al-mushrif"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EVS Abu Dhabi Al Mushrif | Electric Vehicle Service & Repair"
  />
  <meta
    property="og:description"
    content="Professional electric vehicle service in Abu Dhabi – Al Mushrif. EV diagnostics, maintenance, and repairs by certified EV specialists."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/evs-abu-dhabi-al-mushrif"
  />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_AE" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="EVS Abu Dhabi Al Mushrif | Electric Vehicle Service & Repair"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers expert EV service and repair in Abu Dhabi – Al Mushrif. Trusted by EV owners across the UAE."
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

  {/* Performance */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

  {/* JSON-LD LocalBusiness */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id":
          "https://evsuae.com/evs-abu-dhabi-al-mushrif#localbusiness",
        name: "EVS UAE – Abu Dhabi Al Mushrif",
        image:
          "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
        url: "https://evsuae.com/evs-abu-dhabi-al-mushrif",
        telephone: "+971547133313",
        email: "info@evsuae.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Mushrif Area, Abu Dhabi",
          addressLocality: "Abu Dhabi",
          addressCountry: "AE",
        },
        hasMap:
          "https://maps.google.com/?q=Al+Mushrif+Abu+Dhabi",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        areaServed: {
          "@type": "Place",
          name: "Al Mushrif, Abu Dhabi, UAE",
        },
      }),
    }}
  />
</Head>

<PageTitleWithMap
  eyebrowTitle="Electric Vehicle Service Center"
  title="EVS Abu Dhabi"
  highlight=" Al Mushrif"
  description="Expert electric vehicle service and repair in Al Mushrif, Abu Dhabi by certified EV specialists."

  primaryButtonText="Get Directions"
  primaryButtonUrl="https://maps.app.goo.gl/Dvgpi4cmE7TEbsKK9"

  secondaryButtonText="Call EVS Al Mushrif"
  secondaryButtonUrl="tel:+971547133313"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.4058815285916!2d54.401735699999996!3d24.436699599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e69d974203daf%3A0x531e249b32dd243!2sEVS%20Express%20Al%20Mushrif%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768372741258!5m2!1sen!2s"
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
                href="https://maps.app.goo.gl/Dvgpi4cmE7TEbsKK9"
                className="text-white fw-600"
              >
                Al Mushrif Area, Abu Dhabi, UAE
              </a>
            </span>

            <a
              href="https://maps.app.goo.gl/Dvgpi4cmE7TEbsKK9"
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
              EVS Express Al Mushrif
            </p>

            <span className="d-block">
              <a
                href="tel:+971547133313"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                +971 54 713 3313
              </a>
            </span>

            <a
              href="tel:+971547133313"
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
            <p className="text-white fw-600">
              Email EVS Al Mushrif
            </p>

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
