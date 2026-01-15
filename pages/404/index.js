import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
   
   <Head>
  {/* Title */}
  <title>404 | Electric Vehicle Service Center UAE</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS is the First & Best Electric car Service center in the UAE. Providing software and hardware solutions to all kinds of EVs | Call Us For More Details"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="electric vehicle service, EV car service, electric car repair, EV garage Dubai, electric vehicle maintenance, EV software solutions"
  />

  {/* Robots – 404 should not be indexed */}
  <meta name="robots" content="noindex, nofollow" />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/404" />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  {/* Language & hreflang */}
  <meta httpEquiv="Content-Language" content="en" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/404" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/404" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Electric Vehicle Service Center UAE"
  />
  <meta
    property="og:description"
    content="EVS is the First & Best Electric car Service center in the UAE. Providing software and hardware solutions to all kinds of EVs | Call Us For More Details"
  />
  <meta property="og:url" content="https://evsuae.com/404" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Electric Vehicle Service Center UAE"
  />
  <meta
    name="twitter:description"
    content="EVS is the First & Best Electric car Service center in the UAE. Providing software and hardware solutions to all kinds of EVs | Call Us For More Details"
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
</Head>





<section
  className="cover-background full-screen ipad-top-space-margin md-h-550px"
  style={{
    backgroundImage: "url(/images/404-bg.jpg)",
  }}
>
  <div className="container h-100">
    <div className="row align-items-center justify-content-center h-100">
      <div
        className="col-12 col-xl-6 col-lg-7 col-md-9 text-center"
        data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <h1 className="fs-200 text-base-color sm-fs-170 fw-700 ls-minus-8px">
          404
        </h1>

        <h4 className="text-light-gray fw-600 sm-fs-22 mb-10px ls-minus-1px">
          Page not found!
        </h4>

        <p className="text-light-gray mb-30px lh-28 sm-mb-30px w-55 md-w-80 sm-w-95 mx-auto">
          The resource you are looking for doesn't exist or might have been removed.
        </p>

        <a
          href="https://evsuae.com/"
          className="btn btn-large left-icon btn-rounded btn-dark-gray btn-box-shadow text-transform-none alt-font"
        >
          <i className="fa-solid fa-arrow-left"></i>Back to homepage
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
