import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";
import ContactForm from "@/components/common/ContactForm";


export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
  {/* Title */}
  <title>Contact EVS UAE | Book Your Electric Vehicle Service Today</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Get in touch with EVS UAE for expert electric vehicle services. Book appointments, ask questions, or locate your nearest EV service center across the UAE."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="contact EVS UAE, EV service booking UAE, electric vehicle support Dubai, schedule EV maintenance, EV service center UAE"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/contact" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/contact" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/contact" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Contact EVS UAE | Book Your Electric Vehicle Service Today"
  />
  <meta
    property="og:description"
    content="Get in touch with EVS UAE for expert electric vehicle services. Book appointments, ask questions, or locate your nearest EV service center across the UAE."
  />
  <meta property="og:url" content="https://evsuae.com/contact" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Contact EVS UAE | Book Your Electric Vehicle Service Today"
  />
  <meta
    name="twitter:description"
    content="Get in touch with EVS UAE for expert electric vehicle services across the UAE."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data – Contact Page */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Electric Vehicle Services UAE",
        description:
          "Get in touch with Electric Vehicle Services UAE for service inquiries, appointments, or general support.",
        url: "https://evsuae.com/contact",
        mainEntity: {
          "@type": "AutomotiveBusiness",
          name: "Electric Vehicle Services UAE",
          url: "https://evsuae.com/",
          logo:
            "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
          telephone: "+971600500387",
          email: "contact@evsuae.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "AE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971600500387",
            email: "contact@evsuae.com",
            contactType: "Customer Service",
            availableLanguage: ["English", "Arabic"],
          },
        },
      }),
    }}
  />
</Head>


{/* start page title */}
      <section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography pt-5">
        <div className="container">
          <div className="row justify-content-center">

            {/* LEFT */}
            <div
              className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px"
              data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
                Contact Us<span className="text-base-color">.</span>
              </h2>

              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a
                  href="tel:600500387"
                  className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
                >
                  600 500 387 <i className="fa fa-phone-alt"></i>
                  <span className="bg-white"></span>
                </a>

                <a
                  href="https://wa.me/971566017771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
                >
                  WHATSAPP US <i className="fa-brands fa-whatsapp"></i>
                  <span className="bg-white"></span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-6">
              <div className="py-5">
                <div className="row">
                  <div className="col-9">
                    <h2 className="fw-700 ls-minus-1px alt-font text-white">
                      Send us a <span className="text-base-color">message</span>
                    </h2>
                  </div>
                  <div className="col-3 text-end">
                    <i className="bi bi-send icon-large text-base-color"></i>
                  </div>
                </div>

                {/* NETLIFY FORM */}
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* end page title */}


      {/* start section */}
<section className="position-relative">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{
      backgroundImage:
        "url('/images/vertical-line-bg-medium-gray.svg')",
    }}
  ></div>

  <div className="container position-relative">
    <div
      className="row row-cols-1 row-cols-lg-4 row-cols-sm-1 justify-content-center"
      data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
    >

      {/* EVS Abu Dhabi */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14536.141623796122!2d54.4866373!3d24.3800717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4123c214e723%3A0xc54ea8fd417956bf!2sEVS%20Abu%20Dhabi%20(%20Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1746018527836!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="/evs-abu-dhabi" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              EVS Abu Dhabi
            </a>
            <span className="d-block">
              <span className="text-white fw-600">T:</span>{" "}
              <a href="tel:+971547133313">+971 54 713 3313</a>
            </span>
            <span className="d-block">
              <span className="text-white fw-600">E:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">
                info@evsuae.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/8yhst7aDcJW8mWs59"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Get Directions <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* EVS Dubai */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.14588427663!2d55.4240151!3d25.1645515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be92144ffef%3A0xccfadb5aedd3afcc!2sEVS%20Electric%20Vehicle%20Services.!5e0!3m2!1sen!2s!4v1746018584133!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="/evs-dubai" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              EVS Dubai
            </a>
            <span className="d-block">
              <span className="text-white fw-600">T:</span>{" "}
              <a href="tel:+971566017771">+971 56 60 17771</a>
            </span>
            <span className="d-block">
              <span className="text-white fw-600">E:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">
                info@evsuae.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Get Directions <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* EVS Ajman */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604.046910276685!2d55.4894439!3d25.4032403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7b96050de41%3A0xf6df6eaa4de010e7!2sElectric%20Vehicle%20Services!5e0!3m2!1sen!2s!4v1746018607361!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="/evs-ajman" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              EVS Ajman
            </a>
            <span className="d-block">
              <span className="text-white fw-600">T:</span>{" "}
              <a href="tel:+971564556555">+971 56 455 6555</a>
            </span>
            <span className="d-block">
              <span className="text-white fw-600">E:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">
                info@evsuae.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Get Directions <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* EVS Al Ain */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29117.325836012453!2d55.7142672!3d24.1834532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab18dfb71bbcd%3A0xc7c1a217cb0c401c!2sEVS%20Al%20Ain%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1746018625396!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="/evs-alain" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              EVS Alain
            </a>
            <span className="d-block">
              <span className="text-white fw-600">T:</span>{" "}
              <a href="tel:600500387">600 500 387</a>
            </span>
            <span className="d-block">
              <span className="text-white fw-600">E:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">
                info@evsuae.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/wUXqKuLDtkWffKPf6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Get Directions <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* EVS Sharjah */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.334979669202!2d55.650398!3d25.3600874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3002c630b0b%3A0x10a29e496b6bbf28!2sEVS%20Electric%20Vehicle%20Services%20-%20Sharjah!5e0!3m2!1sen!2s!4v1764054203991!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="/evs-sharjah" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              EVS Sharjah
            </a>
            <span className="d-block">
              <span className="text-white fw-600">T:</span>{" "}
              <a href="tel:0569863920">056 986 3920</a>
            </span>
            <span className="d-block">
              <span className="text-white fw-600">E:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">
                info@evsuae.com
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              Get Directions <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* end section */}


      


          
          
          

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
