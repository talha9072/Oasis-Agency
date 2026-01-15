import Head from "next/head";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
       
    <Head>
      {/* Title */}
      <title>EVS UAE Locations | Find Electric Vehicle Service Centers Near You</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Discover EVS service centers across the UAE, including Dubai, Abu Dhabi, Ajman, Al Ain, and Riyadh. Locate your nearest EV repair and maintenance branch."
      />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content="EV service center UAE, EVS branches Dubai Abu Dhabi, electric vehicle service locations, EV repair centers UAE, EVS near me, Tesla service UAE, EV maintenance branches UAE"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/branches" />

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
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/branches" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/branches" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="EVS UAE Locations | Find Electric Vehicle Service Centers Near You"
      />
      <meta
        property="og:description"
        content="Discover EVS service centers across the UAE, including Dubai, Abu Dhabi, Ajman, Al Ain, and Riyadh. Locate your nearest EV repair and maintenance branch."
      />
      <meta property="og:url" content="https://evsuae.com/branches" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EVS UAE Locations | Find Electric Vehicle Service Centers Near You"
      />
      <meta
        name="twitter:description"
        content="Discover EVS service centers across the UAE, including Dubai, Abu Dhabi, Ajman, Al Ain, and Riyadh. Locate your nearest EV repair and maintenance branch."
      />
      <meta
        name="twitter:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Charset */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Structured Data – Branches */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "EVS UAE Branches",
            description:
              "Find all Electric Vehicle Services UAE locations across the UAE, including Abu Dhabi, Dubai, Sharjah, and Al Ain.",
            url: "https://evsuae.com/branches",
            mainEntity: [
              {
                "@type": "AutomotiveBusiness",
                name: "EVS Abu Dhabi",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Abu Dhabi",
                  addressLocality: "Abu Dhabi",
                  addressCountry: "AE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "24.3803734",
                  longitude: "54.494125",
                },
                url: "https://maps.app.goo.gl/jQdH1ieQcpteEFTr8?g_st=iwb",
              },
              {
                "@type": "AutomotiveBusiness",
                name: "EVS Dubai",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Dubai",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "25.1645515",
                  longitude: "55.4240151",
                },
                url: "https://www.google.com/maps/place/EVS+Electric+Vehicle+Services./@25.1645515,55.4240151,17z",
              },
              {
                "@type": "AutomotiveBusiness",
                name: "EVS Sharjah",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Sharjah",
                  addressLocality: "Sharjah",
                  addressCountry: "AE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "25.4032406",
                  longitude: "55.4940482",
                },
                url: "https://www.google.com/maps/place/Electric+Vehicle+Services/@25.4032403,55.4894439,17z",
              },
              {
                "@type": "AutomotiveBusiness",
                name: "EVS Al Ain",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Al Ain",
                  addressLocality: "Al Ain",
                  addressCountry: "AE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "24.1834532",
                  longitude: "55.752376",
                },
                url: "https://www.google.com/maps/place/EVS+Al+Ain+(Electric+Vehicle+Services)/@24.1834532,55.7142672,14z",
              },
            ],
          }),
        }}
      />
    </Head>

      {/* ================= PAGE TITLE ================= */}
<section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography">
  <div className="container">
    <div className="row justify-content-center small-screen">
      {/* ================= LEFT CONTENT ================= */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px"
        data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
          Our Branches<span className="text-base-color">.</span>
        </h2>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          <a
            href="tel:600500387"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
          >
            600 500 387<span className="bg-white"></span>
          </a>

          <a
            href="http://wa.me/600500387"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
          >
            WHATSAPP US<span className="bg-white"></span>
          </a>
        </div>

        {/* ================= MOBILE BRANCH LIST (MD & BELOW ONLY) ================= */}
        <div className="d-block d-md-none w-100 mt-30px">
          <ul className="list-unstyled text-center">
            <li className="mb-15px">
              <a
                href="#evs-dubai"
                className="text-white fw-600 text-decoration-none border-bottom border-base-color pb-5px d-inline-block"
              >
                EVS Dubai
              </a>
            </li>

            <li className="mb-15px">
              <a
                href="#evs-sharjah"
                className="text-white fw-600 text-decoration-none border-bottom border-base-color pb-5px d-inline-block"
              >
                EVS Sharjah
              </a>
            </li>

            <li className="mb-15px">
              <a
                href="#evs-abu-dhabi"
                className="text-white fw-600 text-decoration-none border-bottom border-base-color pb-5px d-inline-block"
              >
                EVS Abu Dhabi
              </a>
            </li>

            <li className="mb-15px">
              <a
                href="#others"
                className="text-white fw-600 text-decoration-none border-bottom border-base-color pb-5px d-inline-block"
              >
                Ajman & Al Ain
              </a>
            </li>

            
          </ul>
        </div>
        {/* ================= END MOBILE LIST ================= */}
      </div>

      {/* ================= RIGHT IMAGE (MD & UP ONLY) ================= */}
      <div className="col-md-6 d-none d-md-block">
        <div
          className="outside-box-right-20 sm-outside-box-left-20 h-100 sm-h-300px xs-h-250px cover-background"
          style={{ backgroundImage: "url('img/evs/IMG_2073.jpg')" }}
        ></div>
      </div>
      {/* ================= END IMAGE ================= */}
    </div>
  </div>
</section>
{/* ================= END PAGE TITLE ================= */}


      {/* ================= BRANCHES SECTION ================= */}
<section className="position-relative">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{ backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')" }}
  ></div>

  <div className="container position-relative">

    {/* ================= EVS DUBAI BLOCK ================= */}
<div id="evs-dubai" className="mb-7">
  {/* ================= HEADING ================= */}
  <div className="row justify-content-center mb-2">
    <div className="col-12 text-center">
      <h3 className="fw-700 alt-font text-white mb-0">
        EVS Dubai<span className="text-base-color">.</span>
      </h3>
    </div>
  </div>

  {/* ================= BRANCHES ROW ================= */}
  <div
    className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center"
    data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
  >
    {[
      {
        title: "International City",
        link: "./evs-dubai",
        phone: "+971566017771",
        map: "https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.14588427663!2d55.4240151!3d25.164551499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be92144ffef%3A0xccfadb5aedd3afcc!2sEVS%20Electric%20Vehicle%20Services.!5e0!3m2!1sen!2s!4v1746018584133!5m2!1sen!2s",
      },
      {
        title: "Al Barsha, Dubai",
        link: "./evs-dubai-al-barsha",
        phone: "+971566017771",
        map: "https://maps.app.goo.gl/53BLuLNRhZEoh8hA6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6942796138956!2d55.2222448!3d25.0783491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6defee087cd1%3A0x4dfffaeded176e62!2sEVS%20Express%20Al%20Barsha%20South%20First%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768388034663!5m2!1sen!2s",
      },
      {
        title: "Al Twar 2, Dubai",
        link: "./evs-dubai-al-twar-2",
        phone: "+971566017771",
        map: "https://maps.app.goo.gl/BE8uxeGnbpyDw7YP9",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.395379252449!2d55.386859799999996!3d25.257281799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dda2555b481%3A0x461dd19fed8effd6!2sEVS%20Express%20Al%20Twar%202%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768387985258!5m2!1sen!2s",
      },
    ].map((branch, i) => (
      <div className="col icon-with-text-style-03" key={i}>
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src={branch.iframe}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            {/* DESKTOP */}
            <div className="d-none d-lg-flex align-items-center justify-content-between gap-2">
              <a href={branch.link} className="fw-700 text-white alt-font fs-18">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-end gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="d-lg-none text-center">
              <a href={branch.link} className="fw-700 text-white alt-font fs-18 d-block mb-10px">
                {branch.title}
              </a>
              <div className="d-flex align-items-center justify-content-center gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* ================= END EVS DUBAI BLOCK ================= */}


  {/* ================= EVS SHARJAH BLOCK ================= */}
<div id="evs-sharjah" className="mb-7">
  {/* ================= HEADING ================= */}
  <div className="row justify-content-center mb-2">
    <div className="col-12 text-center">
      <h3 className="fw-700 alt-font text-white mb-0">
        EVS Sharjah<span className="text-base-color">.</span>
      </h3>
    </div>
  </div>

  {/* ROW: All Sharjah branches */}
  <div
    className="row row-cols-1 row-cols-md-2 justify-content-center"
    data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
  >
    {[
      {
        title: "Industrial City",
        link: "./evs-sharjah",
        phone: "+971569863920",
        map: "https://maps.app.goo.gl/nrLKQJuTK27B7K2i7",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.334979669202!2d55.650397999999996!3d25.360087399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3002c630b0b%3A0x10a29e496b6bbf28!2sEVS%20Electric%20Vehicle%20Services%20-%20Sharjah!5e0!3m2!1sen!2s!4v1764054203991!5m2!1sen!2s",
      },
      {
        title: "Al Muwafjah, Sharjah",
        link: "./evs-sharjah-al-muwafjah",
        phone: "+971569863920",
        map: "https://maps.app.goo.gl/C6HKeWvfqkJU3R1Z8",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.697272668753!2d55.4735625!3d25.347937500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59bab02dbd61%3A0xb6779cc947ce1740!2sEVS%20Express%20Al%20Muwafjah%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768388072176!5m2!1sen!2s",
      },
    ].map((branch, i) => (
      <div className="col icon-with-text-style-03" key={i}>
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src={branch.iframe}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            {/* DESKTOP */}
            <div className="d-none d-lg-flex align-items-center justify-content-between gap-2">
              <a href={branch.link} className="fw-700 text-white alt-font fs-18">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-end gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="d-lg-none text-center">
              <a href={branch.link} className="fw-700 text-white alt-font fs-18 d-block mb-10px">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-center gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* ================= END EVS SHARJAH BLOCK ================= */}


    {/* ================= EVS ABU DHABI BLOCK ================= */}
<div id="evs-abu-dhabi" className="mb-7">
  {/* ================= HEADING ================= */}
  <div className="row justify-content-center mb-2">
    <div className="col-12 text-center">
      <h3 className="fw-700 alt-font text-white mb-0">
        EVS Abu Dhabi<span className="text-base-color">.</span>
      </h3>
    </div>
  </div>

  {/* ROW: All Abu Dhabi branches */}
  <div
    className="row row-cols-1 row-cols-md-2 justify-content-center"
    data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
  >
    {[
      {
        title: "MBZ City",
        link: "./evs-abu-dhabi",
        phone: "+971547133313",
        map: "https://maps.app.goo.gl/8yhst7aDcJW8mWs59",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14536.141623796122!2d54.4866373!3d24.3800717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4123c214e723%3A0xc54ea8fd417956bf!2sEVS%20Abu%20Dhabi%20(%20Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1746018527836!5m2!1sen!2s",
      },
      {
        title: "Al Mushrif, Abu Dhabi",
        link: "./evs-abu-dhabi-al-mushrif",
        phone: "+971547133313",
        map: "https://maps.app.goo.gl/E3VjumMPU4Fyd14a6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.4058815285916!2d54.401735699999996!3d24.436699599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e69d974203daf%3A0x531e249b32dd243!2sEVS%20Express%20Al%20Mushrif%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768387942836!5m2!1sen!2s",
      },
    ].map((branch, i) => (
      <div className="col icon-with-text-style-03" key={i}>
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src={branch.iframe}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            {/* DESKTOP */}
            <div className="d-none d-lg-flex align-items-center justify-content-between gap-2">
              <a href={branch.link} className="fw-700 text-white alt-font fs-18">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-end gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="d-lg-none text-center">
              <a href={branch.link} className="fw-700 text-white alt-font fs-18 d-block mb-10px">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-center gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* ================= END EVS ABU DHABI BLOCK ================= */}


   {/* ================= OTHER BRANCHES HEADING ================= */}
   <div id="others" className="mb-7">
  <div className="row justify-content-center mb-2">
    <div className="col-12 text-center">
      <h3 className="fw-700 alt-font text-white mb-0">
        Ajman & Al Ain<span className="text-base-color">.</span>
      </h3>
    </div>
  </div>

  {/* ROW 4: Ajman + Al Ain (2 columns, centered) */}
  <div
    className="row row-cols-1 row-cols-md-2 justify-content-center"
    data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
  >
    {[
      {
        title: "EVS Ajman",
        link: "./evs-ajman",
        phone: "+971564556555",
        map: "https://maps.app.goo.gl/etWuGuKCFgaQ21ta8",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604.046910276685!2d55.4894439!3d25.4032403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7b96050de41%3A0xf6df6eaa4de010e7!2sElectric%20Vehicle%20Services!5e0!3m2!1sen!2s!4v1746018607361!5m2!1sen!2s",
      },
      {
        title: "EVS Al Ain",
        link: "./evs-alain",
        phone: "600500387",
        map: "https://maps.app.goo.gl/wUXqKuLDtkWffKPf6",
        iframe:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29117.325836012453!2d55.7142672!3d24.1834532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab18dfb71bbcd%3A0xc7c1a217cb0c401c!2sEVS%20Al%20Ain%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1746018625396!5m2!1sen!2s",
      },
    ].map((branch, i) => (
      <div className="col icon-with-text-style-03" key={i}>
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src={branch.iframe}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            {/* DESKTOP */}
            <div className="d-none d-lg-flex align-items-center justify-content-between gap-2">
              <a href={branch.link} className="fw-700 text-white alt-font fs-19">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-end gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="d-lg-none text-center">
              <a href={branch.link} className="fw-700 text-white alt-font fs-19 d-block mb-10px">
                {branch.title}
              </a>

              <div className="d-flex align-items-center justify-content-center gap-2">
                {[
                  { icon: "phone-call", href: `tel:${branch.phone}` },
                  { icon: "mail", href: "mailto:info@evsuae.com" },
                  { icon: "map-pin", href: branch.map, blank: true },
                ].map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.blank ? "_blank" : undefined}
                    rel={btn.blank ? "noopener noreferrer" : undefined}
                    className="btn btn-extra-small btn-base-color d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  >
                    <i className={`feather icon-feather-${btn.icon} m-0`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  </div>
</section>
{/* ================= END BRANCHES SECTION ================= */}

          
          

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
