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
      <title>EVS Sharjah | Best Electric Vehicle Service Center in Sharjah</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="EVS UAE Sharjah offers expert electric vehicle service, diagnostics, and maintenance. Your trusted EV repair and service center in Sharjah."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="EV service Sharjah, electric car repair Sharjah, EV maintenance Sharjah, EV garage Sharjah, EV diagnostics Sharjah"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/evs-sharjah" />

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
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/evs-sharjah" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/evs-sharjah" />
      <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/evs-sharjah" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="EVS Sharjah | Best Electric Vehicle Service Center in Sharjah"
      />
      <meta
        property="og:description"
        content="EVS UAE Sharjah offers expert EV diagnostics, repair, and maintenance. Trusted electric vehicle service center in Sharjah."
      />
      <meta property="og:url" content="https://evsuae.com/evs-sharjah" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EVS Sharjah | Best Electric Vehicle Service Center in Sharjah"
      />
      <meta
        name="twitter:description"
        content="EVS UAE Sharjah provides expert electric vehicle diagnostics, repair, and servicing."
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

      {/* Performance */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://evsuae.com/evs-sharjah#localbusiness",
            name: "EVS UAE - Sharjah",
            image: "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
            url: "https://evsuae.com/evs-sharjah",
            telephone: "+971569863920",
            email: "info@evsuae.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Industrial Area 4",
              addressLocality: "Sharjah",
              addressCountry: "UAE",
            },
            hasMap: "https://maps.google.com/?q=Sharjah+Industrial+Area+4",
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
              name: "Sharjah, UAE",
            },
          }),
        }}
      />
    </Head>

<PageTitleWithMap
  eyebrowTitle="Electric Vehicle Service Center"
  title="EVS Sharjah"
  highlight="."
  description="Electric Vehicle Servicing & repair near Sharjah"

  primaryButtonText="Get Directions"
  primaryButtonUrl="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7?g_st=ipc"

  secondaryButtonText="Call Us"
  secondaryButtonUrl="tel:+971569863920"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.334979669202!2d55.650397999999996!3d25.360087399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3002c630b0b%3A0x10a29e496b6bbf28!2sEVS%20Electric%20Vehicle%20Services%20-%20Sharjah!5e0!3m2!1sen!2s!4v1764054203991!5m2!1sen!2s"
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
                href="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7?g_st=ipc"
                className="text-white fw-600"
              >
                Al Sajaa – Al Jlail – Sharjah – United Arab Emirates.
              </a>
            </span>

            <a
              href="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7?g_st=ipc"
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
            <p className="text-white fw-600">EVS Sharjah Branch</p>

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
