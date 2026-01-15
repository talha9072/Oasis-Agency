import Head from "next/head";
import BranchesSection from "@/components/common/BranchesSection";
import CustomerReviewsSection from "@/components/common/CustomerReviewsSection";


export default function EVBrands() {
  return (
    <>


<Head>
      {/* Title */}
      <title>
        EV Brands We Service | Comprehensive Electric Vehicle Care – EVS UAE
      </title>

      {/* Meta Description */}
      <meta
        name="description"
        content="EVS UAE provides expert service for all major EV brands, including Tesla, Nissan, BMW, Chevrolet, and more. Certified technicians for diagnostics, maintenance, and repairs."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="EV brands UAE, electric vehicle brands serviced, Tesla service UAE, Nissan Leaf maintenance, BMW i3 repair, Chevrolet Bolt service, EVS brand coverage, EV specialists UAE"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ev-car-brands" />

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
        href="https://evsuae.com/ev-car-brands"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://evsuae.com/ar/ev-car-brands"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://evsuae.com/ev-car-brands"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="EV Brands We Service | Comprehensive Electric Vehicle Care – EVS UAE"
      />
      <meta
        property="og:description"
        content="EVS UAE provides expert service for all major EV brands, including Tesla, Nissan, BMW, Chevrolet, and more."
      />
      <meta property="og:url" content="https://evsuae.com/ev-car-brands" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EV Brands We Service | Comprehensive Electric Vehicle Care – EVS UAE"
      />
      <meta
        name="twitter:description"
        content="EVS UAE provides expert service for all major EV brands, including Tesla, Nissan, BMW, Chevrolet, and more."
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

      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "EV Car Brands Serviced by EVS UAE",
            description:
              "Explore the electric vehicle brands serviced by Electric Vehicle Services UAE. We support Tesla, Nissan, BMW, Chevrolet, and many more.",
            url: "https://evsuae.com/ev-car-brands",
            mainEntity: [
              { "@type": "Brand", name: "Tesla", url: "https://evsuae.com/ev-car-brands/tesla" },
              { "@type": "Brand", name: "Nissan", url: "https://evsuae.com/ev-car-brands/nissan" },
              { "@type": "Brand", name: "BMW", url: "https://evsuae.com/ev-car-brands/bmw" },
              { "@type": "Brand", name: "Chevrolet", url: "https://evsuae.com/ev-car-brands/chevrolet" },
              { "@type": "Brand", name: "Hyundai", url: "https://evsuae.com/ev-car-brands/hyundai" }
            ]
          })
        }}
      />
    </Head>

    <section
  id="full-hero"
  className="snap-section overflow-hidden tesla-section d-flex align-items-center dark-overlay"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/ev/EV-Car-Brands.jpg&q=70&w=1920')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
  <div className="container z-index-1">
    <div className="row">
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <div className="title alt-font text-white mt-3">
          <h1 className="d-block pb-2">
            EV <span>Car Brands</span> We Service
          </h1>
        </div>

        <div className="desc d-inline-block hero-desc">
          Explore the wide range of electric vehicle (EV) brands we expertly
          handle at EVS in Dubai, UAE. From Tesla to Nissan, BMW to Audi, our
          skilled technicians provide top-notch care for all major EV brands,
          ensuring your vehicle stays in peak condition with tailored solutions
          for every make and model.
        </div>

        <a
          href="https://evsuae.com/contact"
          className="btn-hero rev-btn alt-font bg-base-color text-dark-gray text-uppercase border-radius-4px rs-hover-ready hero-cta-button mt-4 w-auto d-inline-block"
          aria-label="Book service"
        >
          Book Service
        </a>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/ev/rox-car-1.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        {/* top content */}
        <div className="content-box pt-4">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            ROX
          </h2>
          <p className="text-white alt-font fw-500 fs-26 text-center d-block mx-auto mt-1">
            Best ROX Cars Service Center
          </p>
        </div>

        {/* spacer pushes button down */}
        <div className="btn-box mt-auto pb-4 mx-auto">
          <a
            href="rox"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            ROX Models<span className="bg-white"></span>
          </a>

          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Speak to Advisor<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            Zeekr
          </h2>
          <p className="text-white alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
            Your Trusted Zeekr Cars Service Partner
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="zeekr"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            Zeekr Models<span className="bg-white"></span>
          </a>

          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Speak to Advisor<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/New-Project-36.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        {/* top content */}
        <div className="content-box pt-4">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            AVATR
          </h2>
          <p className="text-white alt-font fw-500 fs-26 text-center d-block mx-auto mt-1">
            Professional AVATR Cars Service Center
          </p>
        </div>

        {/* spacer pushes button down */}
        <div className="btn-box mt-auto pb-4 mx-auto">
          <a
            href="avatr"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            AVATR Models<span className="bg-white"></span>
          </a>

          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Speak to Advisor<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/New-Project-39.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            BYD
          </h2>
          <p className="text-white alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
            Your Premier BYD Cars Service Center
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="byd"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            BYD Models<span className="bg-white"></span>
          </a>

          <a
            href="https://evsuae.com/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            Speak to Advisor<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-700 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            Tesla
          </h2>
          <p className="text-white alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
            Professional Tesla Electric Vehicle Service Center
          </p>
        </div>

        <div className="btn-box align-self-end mx-auto">
          <a
            href="tesla"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            Tesla Service<span className="bg-white"></span>
          </a>

          <a
            href="services"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            All Services<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="snap-section position-relative pb-0">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-xl-6 order-2 order-lg-1 align-self-end position-relative">
        {/* Optimized image (IMG_2078-edit-2.png) */}
        <img
          className="w-100"
          src="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024"
          srcSet="
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=320 320w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=640 640w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024 1024w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1440 1440w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1920 1920w
          "
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
          alt="EV Maintenance and Repairs"
        />

        {/* Icon overlay */}
        <i
          className="bi bi-shield-fill-plus text-base-color fs-100 position-absolute right-minus-20px top-100px lg-top-60px md-right-100px sm-right-20px xs-right-0px"
          data-bottom-top="transform: translateY(-50px)"
          data-top-bottom="transform: translateY(50px)"
        ></i>
      </div>

      <div className="col-lg-6 col-xxl-4 col-xl-5 offset-xl-1 order-1 order-lg-2 md-mb-50px sm-mb-30px">
        <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-30px">
          Your One-Stop EV Solution
        </span>

        <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
          From routine maintenance to complex repairs
          <span className="text-base-color">.</span>
        </h2>

        <p className="mb-30px">
          At EVS, we provide electric vehicle services ranging from routine
          maintenance to specialized repairs. We are the only regional center
          for high-voltage battery repairs and offer expert collision services.
          Our programming solutions include software updates and GPS
          adjustments, especially for imported vehicles, ensuring your EV
          stays in top condition.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="snap-section">
  <div className="container">
    <div className="row mb-5 sm-mb-50px">
      <div className="col-12 col-xl-9 col-lg-12">
        <h2 className="text-white alt-font fw-500 ls-minus-1px mb-0">
          We combine expert knowledge with state-of-the-art facilities to
          consistently deliver top-quality results.
        </h2>
      </div>
    </div>

    <div className="row sm-mb-30px">
      <div className="col-12">

        {/* 01 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">01</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-wrench-adjustable text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Regular Maintenance Services
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Comprehensive packages including major and minor services,
              manufacturer-recommended maintenance, and precise tire alignments
              to ensure optimal performance, safety, and longevity of your
              electric vehicle.
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">02</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px flex-wrap">
            <i className="bi bi-cpu-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30 me-15px">
              Software Solutions and Upgrades
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Advanced diagnostics, programming, and software upgrades tailored
              to enhance EV performance.
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">03</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-pin-map-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Conversion to GCC Specifications
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Custom modifications to ensure electric vehicles meet GCC regional
              standards and regulations.
            </p>
          </div>
        </div>

        {/* 04 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">04</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-battery-full text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              High-Voltage Battery Repairs
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Specialized repair and refurbishment services to extend the life
              and efficiency of high-voltage EV batteries.
            </p>
          </div>
        </div>

        {/* 05 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">05</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-ev-station-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Fast Charger Installations and Repairs
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Installation, maintenance, and repair of fast charging systems for
              optimal EV charging performance.
            </p>
          </div>
        </div>

        {/* 06 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">06</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-ev-front-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Custom EV Modifications
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Bespoke modifications and upgrades designed to enhance vehicle
              performance, efficiency, and aesthetics.
            </p>
          </div>
        </div>

        {/* 07 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">07</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-thermometer-high text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Thermal Management System Repairs
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Expert servicing of cooling and heating systems critical to
              maintaining battery health in extreme climates.
            </p>
          </div>
        </div>

        {/* 08 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">08</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-gear-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Motor Repairs and Replacements
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Precision repair and replacement services for electric motors to
              maintain peak performance.
            </p>
          </div>
        </div>

        {/* 09 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">09</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-node-plus-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              Inverter and Converter Repairs
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Repairs and upgrades for inverters and converters to ensure
              efficient energy management in EVs.
            </p>
          </div>
        </div>

        {/* 10 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-start text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white">10</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-motherboard-fill text-base-color icon-large ml-35px mr-35px"></i>
            <span className="text-white alt-font fw-500 fs-30">
              On-Board Diagnostics (OBD) Services
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              Comprehensive diagnostics with advanced tools to accurately
              identify and resolve vehicle issues.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




<CustomerReviewsSection />
 

<section className="snap-section half-section">
  <div className="container">
    <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">

      {/* 1st EV Center */}
      <div className="col text-center sm-mb-35px">
        <h1 className="alt-font d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0">
          #1
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </h1>
        <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
          1st EV Center in the UAE
        </span>
      </div>

      {/* Branches */}
      <div className="col text-center sm-mb-35px">
        <h1 className="alt-font d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative">
          7
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </h1>
        <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
          Branches
        </span>
      </div>

      {/* Experienced Staff */}
      <div className="col text-center xs-mb-35px">
        <h1 className="alt-font d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative">
          +200
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </h1>
        <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
          Experienced Staff
        </span>
      </div>

      {/* Happy Customers */}
      <div className="col text-center">
        <h1 className="alt-font d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative">
          21,452
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </h1>
        <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
          Happy Customers
        </span>
      </div>

    </div>
  </div>
</section>


      <BranchesSection />
     

   <div className="container-fluid">
  <div className="row position-relative">
    <div
      className="col swiper swiper-width-auto text-center"
      data-slider-options='{
        "slidesPerView": "auto",
        "spaceBetween": 80,
        "centeredSlides": true,
        "speed": 20000,
        "loop": true,
        "pagination": {
          "el": ".slider-four-slide-pagination-2",
          "clickable": false
        },
        "allowTouchMove": false,
        "autoplay": {
          "delay": 1,
          "disableOnInteraction": false
        },
        "navigation": {
          "nextEl": ".slider-four-slide-next-2",
          "prevEl": ".slider-four-slide-prev-2"
        },
        "keyboard": {
          "enabled": true,
          "onlyInViewport": true
        },
        "effect": "slide"
      }'
    >
      <div className="swiper-wrapper marquee-slide">

        {/* slide 1 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-700 ls-minus-2px text-outline text-outline-color-medium-gray">
            Leading the global transition to sustainable electric mobility
          </div>
        </div>

        {/* slide 2 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-700 ls-minus-2px text-outline text-outline-color-medium-gray">
            Embrace the electric revolution.
          </div>
        </div>

        {/* slide 3 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-700 ls-minus-2px text-outline text-outline-color-medium-gray">
            Comprehensive EV Solutions.
          </div>
        </div>

        {/* slide 4 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-700 ls-minus-2px text-outline text-outline-color-medium-gray">
            Innovation Meets Sustainability.
          </div>
        </div>

      </div>
    </div>
  </div>
</div>   

      




    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      
    },
    
  };
}
