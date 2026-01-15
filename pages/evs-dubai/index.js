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
      <title>EVS Dubai | Best Electric Vehicle Service Center in Dubai</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai. We provide expert diagnostics, maintenance, and repair services for all electric vehicles."
      />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content="electric vehicle service Dubai, EV car service Dubai, electric car repair Dubai, EV garage Dubai, electric vehicle maintenance Dubai, EV software solutions UAE"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/evs-dubai" />

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
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/evs-dubai" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/evs-dubai" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="EVS Dubai | Best Electric Vehicle Service Center in Dubai"
      />
      <meta
        property="og:description"
        content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai. We provide expert diagnostics, maintenance, and repair services for all electric vehicles."
      />
      <meta property="og:url" content="https://evsuae.com/evs-dubai" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EVS Dubai | Best Electric Vehicle Service Center in Dubai"
      />
      <meta
        name="twitter:description"
        content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai. We provide expert diagnostics, maintenance, and repair services for all electric vehicles."
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

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Charset / Compatibility */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* LocalBusiness Schema – Dubai */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EVS UAE - Dubai",
            image: "https://evsuae.com/path-to-logo-or-feature-image.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dubai, United Arab Emirates",
              addressLocality: "Dubai",
              addressCountry: "UAE",
            },
            telephone: "+971547133313",
            email: "info@evsuae.com",
            url: "https://evsuae.com/evs-dubai",
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
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Friday",
                opens: "00:00",
                closes: "00:00",
                description: "Closed",
              },
            ],
            areaServed: {
              "@type": "Place",
              name: "Dubai, UAE",
            },
          }),
        }}
      />
    </Head>

<PageTitleWithMap
  eyebrowTitle="Electric Vehicle Service Center"
  title="EVS Dubai"
  highlight="."
  description="Electric Vehicle Servicing & repair near Dubai"

  primaryButtonText="Get Directions"
  primaryButtonUrl="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb"

  secondaryButtonText="Call Us"
  secondaryButtonUrl="tel:+9710566017771"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.14588427663!2d55.4240151!3d25.164551499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be92144ffef%3A0xccfadb5aedd3afcc!2sEVS%20Electric%20Vehicle%20Services.!5e0!3m2!1sen!2s!4v1745993230504!5m2!1sen!2s"
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
      {/* Feature box 1 */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-pin-map icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <span className="d-block">
              <a
                href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb"
                className="text-white fw-600"
              >
                International City 1 - Emirati Cluster, Warehouse #39.
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb"
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

      {/* Feature box 2 */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-telephone icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <p className="text-white fw-600">EVS Dubai Branch</p>
            <span className="d-block">
              <a
                href="tel:+9710566017771"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                +971 056 601 7771
              </a>
            </span>
            <a
              href="tel:+9710566017771"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Call Us
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Feature box 3 */}
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
              target="_blank"
              rel="noopener noreferrer"
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
