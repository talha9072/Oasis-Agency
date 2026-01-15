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
        {/* Primary Meta */}
        <title>EVS Ajman | Certified Electric Vehicle Care – EVS UAE</title>
        <meta
          name="description"
          content="EVS UAE brings expert electric vehicle services to Ajman. Enjoy professional diagnostics, maintenance, and repair for all EV models by certified technicians."
        />
        <meta
          name="keywords"
          content="EV service Ajman, electric vehicle maintenance Ajman, EV repair UAE, Tesla service Ajman, EV diagnostics Ajman, certified EV technicians UAE, EVS Ajman services"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="author" content="Admin" />
        <meta name="publisher" content="Electric Vehicle Services UAE" />

        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://evsuae.com/evs-ajman" />
        <link rel="alternate" hrefLang="en" href="https://evsuae.com/evs-ajman" />
        <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/evs-ajman" />

        {/* Open Graph */}
        <meta property="og:title" content="EVS Ajman | Certified Electric Vehicle Care – EVS UAE" />
        <meta
          property="og:description"
          content="EVS UAE brings expert electric vehicle services to Ajman. Enjoy professional diagnostics, maintenance, and repair for all EV models by certified technicians."
        />
        <meta property="og:url" content="https://evsuae.com/evs-ajman" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EVS Ajman | Certified Electric Vehicle Care – EVS UAE" />
        <meta
          name="twitter:description"
          content="EVS UAE brings expert electric vehicle services to Ajman. Enjoy professional diagnostics, maintenance, and repair for all EV models by certified technicians."
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

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "EVS UAE - Ajman",
              image: "https://evsuae.com/.netlify/images?url=/img/graph-img.webp",
              address: {
                "@type": "PostalAddress",
                streetAddress: "New Industrial Area, near Ajman Auto Market",
                addressLocality: "Ajman",
                addressCountry: "AE",
              },
              telephone: "+971547133313",
              email: "info@evsuae.com",
              url: "https://evsuae.com/evs-ajman",
              hasMap:
                "https://maps.google.com/?q=New+Industrial+Area+Ajman+Auto+Market+Ajman",
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
                name: "Ajman, UAE",
              },
            }),
          }}
        />
      </Head>

<PageTitleWithMap
  eyebrowTitle="Electric Vehicle Service Center"
  title="EVS Ajman"
  highlight="."
  description="Electric Vehicle Servicing & repair near Ajman"

  primaryButtonText="Get Directions"
  primaryButtonUrl="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"

  secondaryButtonText="Call Us"
  secondaryButtonUrl="tel:+9710564556555"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604.046910276685!2d55.4894439!3d25.4032403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7b96050de41%3A0xf6df6eaa4de010e7!2sElectric%20Vehicle%20Services!5e0!3m2!1sen!2s!4v1745993180230!5m2!1sen!2s"
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
                href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
                className="text-white fw-600"
              >
                Al Jerf 2 - Ajman
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
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
            <p className="text-white fw-600">EVS Ajman Branch</p>
            <span className="d-block">
              <a
                href="tel:+9710564556555"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                +971 056 455 6555
              </a>
            </span>
            <a
              href="tel:+9710564556555"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Call us
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
