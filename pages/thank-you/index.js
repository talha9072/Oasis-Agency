import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
     <Head>
  {/* Title */}
  <title>Message Sent | Best Electric Car Service Center in the UAE</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Thank you for contacting EVS UAE. Your message has been successfully sent, and our team will get back to you shortly."
  />

  {/* Keywords (optional but harmless) */}
  <meta
    name="keywords"
    content="electric vehicle service UAE, EV car service, electric car repair, EV garage Dubai"
  />

  {/* Robots – IMPORTANT for thank-you pages */}
  <meta name="robots" content="noindex, nofollow" />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/thank-you" />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/thank-you" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/thank-you" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/thank-you"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Message Sent | Best Electric Car Service Center in the UAE"
  />
  <meta
    property="og:description"
    content="Thank you for contacting EVS UAE. Your message has been successfully sent, and our team will get back to you shortly."
  />
  <meta property="og:url" content="https://evsuae.com/thank-you" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Message Sent | Best Electric Car Service Center in the UAE"
  />
  <meta
    name="twitter:description"
    content="Thank you for contacting EVS UAE. Your message has been successfully sent."
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
        "@type": "WebPage",
        name: "Thank You",
        url: "https://evsuae.com/thank-you",
        description:
          "Thank you for contacting Electric Vehicle Services UAE. We will get back to you shortly.",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          name: "Electric Vehicle Services UAE",
          url: "https://evsuae.com/",
        },
      }),
    }}
  />
</Head>


<section
  className="cover-background full-screen ipad-top-space-margin md-h-550px"
  style={{ backgroundImage: "url(/images/404-bg.jpg)" }}
>
  <div className="container h-100">
    <div className="row align-items-center justify-content-center h-100">
      <div
        className="col-12 col-xl-10 col-lg-10 col-md-10 text-center"
        data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <h1 className="fs-100 sm-fs-80 text-base-color fw-700 ls-minus-6px">
          Message Sent!
        </h1>

        <h4 className="text-light-gray fw-600 sm-fs-22 mb-10px ls-minus-1px">
          Thank you for contacting us
        </h4>

        <p className="mb-30px text-light-gray lh-28 sm-mb-30px">
          You are very important to us, all information received will always
          remain confidential. We will contact you as soon as we review your
          message.
        </p>

        <a
          href="/"
          className="btn btn-large left-icon btn-rounded btn-dark-gray btn-box-shadow alt-font text-transform-none"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to homepage
        </a>
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
