 import Head from "next/head";
import PageTitleWithMap from "@/components/locations/PageTitleWithMap";
import ServiceMarquee from "@/components/locations/ServiceMarquee";
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
      <title>EVS Riyadh | Expert Electric Vehicle Care – EVS KSA</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="EVS now in Riyadh! Get expert electric vehicle service, maintenance, and diagnostics from certified EV technicians. Quality care for all EV brands in Saudi Arabia."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="EV service Riyadh, electric vehicle maintenance KSA, EV repair center Riyadh, Tesla service Riyadh, EV diagnostics Saudi Arabia, EVS Riyadh services, certified EV technicians KSA"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/evs-riyadh" />

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
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/evs-riyadh" />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://evsuae.com/ar/evs-riyadh"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://evsuae.com/evs-riyadh"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="EVS Riyadh | Expert Electric Vehicle Care – EVS KSA"
      />
      <meta
        property="og:description"
        content="EVS now in Riyadh! Get expert electric vehicle service, maintenance, and diagnostics from certified EV technicians. Quality care for all EV brands in Saudi Arabia."
      />
      <meta property="og:url" content="https://evsuae.com/evs-riyadh" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EVS Riyadh | Expert Electric Vehicle Care – EVS KSA"
      />
      <meta
        name="twitter:description"
        content="EVS now in Riyadh! Get expert electric vehicle service, maintenance, and diagnostics from certified EV technicians. Quality care for all EV brands in Saudi Arabia."
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

      {/* Fonts Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EVS Riyadh",
            image:
              "https://evsuae.com/.netlify/images?url=/img/graph-img.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Al Malaz, near Ministry of Interior",
              addressLocality: "Riyadh",
              addressCountry: "Saudi Arabia",
            },
            telephone: "+971547133313",
            email: "info@evsuae.com",
            url: "https://evsuae.com/evs-riyadh",
            hasMap:
              "https://maps.google.com/?q=Al+Malaz+near+Ministry+of+Interior+Riyadh",
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
              name: "Riyadh, Saudi Arabia",
            },
          }),
        }}
      />
    </Head>

<PageTitleWithMap
  eyebrowTitle="Electric Vehicle Service Center"
  title="EVS Riyadh"
  description="Electric Vehicle Servicing & repair near Riyadh"

  primaryButtonText="Visit KSA Website"
  primaryButtonUrl="https://evsksa.com"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28961.185254125718!2d46.56376409073753!3d24.858788963514993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee74711ce7e8b%3A0x63ef4f728a34144f!2sEVS%20-%20Electric%20Vehicle%20Service%20Center!5e0!3m2!1sen!2s!4v1746009235770!5m2!1sen!2s"
/>

<ServiceMarquee />

<section className="position-relative pt-0">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{
      backgroundImage:
        "url('images/vertical-line-bg-medium-gray.svg')",
    }}
  ></div>

  <div className="container position-relative">
    <div
      className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center"
      data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
    >
      {/* Location */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-pin-map icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <span className="d-block">
              <a
                href="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89"
                className="text-white fw-600"
              >
                Al Qirawan, Riyadh, Saudi Arabia
              </a>
              <br />
            </span>
            <a
              href="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89"
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
            <p className="text-white fw-600">EVS Riyadh Branch</p>
            <span className="d-block">
              <a
                href="tel:+966554586777"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                +966 55 458 6777
              </a>
            </span>
            <a
              href="tel:+966554586777"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Call us
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
            <p className="text-white fw-600">Email us</p>
            <span className="d-block">
              <a
                href="mailto:info@evsksa.com"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                info@evsksa.com
              </a>
            </span>
            <a
              href="mailto:info@evsksa.com"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Email us
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
