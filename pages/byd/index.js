import Head from "next/head";
import FullHeroCars from "@/components/car-brands/FullHero.js";
import CarAbout from "@/components/car-brands/CarAbout.js";
import CarServices from "@/components/car-brands/CarServices.js";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CustomerReviewsSection from "@/components/common/Customer";
import LatestBlogsLoader from "@/components/car-brands/LatestBlogsLoader";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
   
   <Head>
  {/* Title */}
  <title>
    BYD Warranty Provider Dubai | Expert Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional maintenance and repair services for BYD electric vehicles in Dubai. Expert technicians, advanced diagnostics, and reliable support for all BYD models."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD EV service Dubai, BYD maintenance UAE, electric vehicle repair Dubai, BYD diagnostics UAE, BYD service center Dubai, expert BYD technicians, EVS BYD support"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

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
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/byd"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Warranty Provider Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides professional maintenance and repair services for BYD electric vehicles in Dubai. Expert technicians, advanced diagnostics, and reliable support for all BYD models."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="BYD Warranty Provider Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides professional maintenance and repair services for BYD electric vehicles in Dubai. Expert technicians, advanced diagnostics, and reliable support for all BYD models."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data – Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "BYD Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides comprehensive repair and maintenance services for BYD electric vehicles in Dubai. Our expert technicians handle everything from diagnostics and battery checks to system calibration and parts replacement for all BYD EV models.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: [
          { "@type": "Place", name: "Dubai, UAE" },
          { "@type": "Place", name: "Abu Dhabi, UAE" },
          { "@type": "Place", name: "Ajman, UAE" },
          { "@type": "Place", name: "Al Ain, UAE" },
          { "@type": "Place", name: "Riyadh, Saudi Arabia" },
        ],
        url: "https://evsuae.com/byd",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/New-Project-39.jpg&q=70&w=1920"
  titlePrefix="Expert"
  highlight="BYD"
  titleSuffix="EV Service Center"
  description="If you own a BYD electric vehicle in Dubai, EVS offers support for both routine maintenance and warranty-related servicing. Our technicians are equipped to handle BYD EV care in line with manufacturer guidelines, including diagnostics, repairs, and scheduled servicing. We assist BYD owners across Dubai in maintaining long-term performance and meeting warranty requirements with confidence."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<section id="car-cards" className="pb-0 xs-pt-30px">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-12 d-flex align-items-center justify-content-center position-relative xs-mb-0px xs-mt-15px"
        data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-700 alt-font text-white text-center ls-minus-2px pb-2 xs-pb-0">
          BYD Models We Service
        </h2>
      </div>

      {/* BYD HAN */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/byd/byd-han" aria-label="Learn more about BYD Han">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="BYD Han"
            />
          </a>

          <div className="service-box-content">
            <a href="/byd/byd-han" aria-label="Learn more about BYD Han">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                BYD HAN
              </h3>
              <p className="fs-16 mt-2">
                Professional maintenance and warranty-compliant servicing for
                the BYD Han, including diagnostics, software checks, and system
                inspections by certified EV technicians.
              </p>
            </a>

            <a
              href="/byd/byd-han"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* BYD SEAL */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/byd/byd-seal" aria-label="Learn more about BYD Seal">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="BYD Seal"
            />
          </a>

          <div className="service-box-content">
            <a href="/byd/byd-seal">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                BYD SEAL
              </h3>
              <p className="fs-16 mt-2">
                Comprehensive servicing for BYD Seal including battery health
                checks, drivetrain diagnostics, and warranty-safe repairs.
              </p>
            </a>

            <a
              href="/byd/byd-seal"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* BYD ATTO 3 */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/byd/byd-atto-3" aria-label="Learn more about BYD Atto 3">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="BYD Atto 3"
            />
          </a>

          <div className="service-box-content">
            <a href="/byd/byd-atto-3">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                BYD ATTO 3
              </h3>
              <p className="fs-16 mt-2">
                Expert servicing for BYD Atto 3, covering routine maintenance,
                diagnostics, and warranty-aligned EV system care.
              </p>
            </a>

            <a
              href="/byd/byd-atto-3"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* BYD SONG PLUS */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/byd/byd-song-plus" aria-label="Learn more about BYD Song Plus">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="BYD Song Plus"
            />
          </a>

          <div className="service-box-content">
            <a href="/byd/byd-song-plus">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                BYD SONG PLUS
              </h3>
              <p className="fs-16 mt-2">
                Specialized care for BYD Song Plus including hybrid system
                diagnostics, battery checks, and manufacturer-compliant service.
              </p>
            </a>

            <a
              href="/byd/byd-song-plus"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* BYD QIN PLUS */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/byd/byd-qin-plus" aria-label="Learn more about BYD Qin Plus">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="BYD Qin Plus"
            />
          </a>

          <div className="service-box-content">
            <a href="/byd/byd-qin-plus">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                BYD QIN PLUS
              </h3>
              <p className="fs-16 mt-2">
                Routine maintenance and warranty-safe service for BYD Qin Plus,
                ensuring long-term reliability and optimal EV performance.
              </p>
            </a>

            <a
              href="/byd/byd-qin-plus"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=1220 1220w
  "
  imageAlt="About BYD image"
  heading="About BYD"
  description="BYD is a leading innovator in electric vehicles, known for combining cutting-edge technology with sustainable design. Their cars feature advanced electric powertrains, offering impressive performance, efficiency, and ranges that cater to modern driving needs. Equipped with BYD’s signature Blade Battery technology, these vehicles prioritize safety and longevity. With luxurious interiors, smart connectivity, and a focus on eco-friendly mobility, BYD cars provide a premium driving experience. For reliable maintenance and warranty services, EVS offers specialized care to keep your BYD vehicle performing at its best."
/>



<CarServices
  heading="BYD Repair & Maintenance Services"
  services={[
    {
      link: "https://evsuae.com/services/programming",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/software-icon.svg",
      alt: "Software icon",
      title: "Programming & Software",
      description:
        "Smart solutions to enhance and update your EV's capabilities.",
    },
    {
      link: "https://evsuae.com/services/mechanical",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/mechanical-icon.svg",
      alt: "Mechanical icon",
      title: "Mechanical Services",
      description:
        "Comprehensive EV maintenance for peak performance.",
    },
    {
      link: "https://evsuae.com/services/battery-electrical",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/battery-icon.svg",
      alt: "Battery icon",
      title: "Battery & Electrical",
      description:
        "Advanced diagnostics and high-voltage system expertise.",
    },
    {
      link: "https://evsuae.com/services/body-paint",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/body-paint-icon.svg",
      alt: "Body & paint icon",
      title: "Body & Paint",
      description:
        "Factory-finish painting and body repair services.",
    },
    {
      link: "https://evsuae.com/services/insurance",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/insurance-icon.svg",
      alt: "Insurance icon",
      title: "Insurance Services",
      description:
        "Seamless repair and repainting through your insurance provider.",
    },
  ]}
/>


<CarFaq
  title="Frequently Asked Questions"
  faqs={[
    {
      question: "How can I register my BYD car with a warranty in the UAE?",
      answer:
        "To register your BYD electric vehicle with a warranty in the UAE, you can visit EVS for assistance. Our team handles the required documentation and coordinates the process to ensure your vehicle is properly covered under the applicable warranty plan.",
      defaultOpen: true,
    },
    {
      question: "What is covered under the BYD Extended Warranty?",
      answer:
        "The BYD Extended Warranty covers major components such as the electric drivetrain, battery systems, and key electrical components, providing long-term protection beyond the standard warranty period.",
    },
    {
      question: "Where can I service my BYD vehicle under warranty in the UAE?",
      answer:
        "You can service your BYD electric vehicle under warranty at EVS locations in Dubai, Abu Dhabi, and Ajman. We provide warranty-related maintenance and repairs in line with BYD-approved service procedures.",
    },
    {
      question: "Do you provide software updates and diagnostics for BYD vehicles?",
      answer:
        "Yes, we perform system diagnostics, firmware updates, and software calibration using manufacturer-aligned tools for BYD electric vehicles.",
      links: [
        {
          text: "software updates",
          href: "/services/programming",
        },
      ],
    },
    {
      question: "How do I know when my BYD needs a maintenance check?",
      answer:
        "Common indicators include dashboard warnings, reduced driving range, or performance changes. We recommend a general inspection every 10,000–12,000 km.",
      cta: {
        text: "Book your check-up here",
        href: "/contact",
      },
    },
  ]}
/>



{/* Branches Section with Tabs */}
      <BranchesSection />

          {/* Customer Reviews Section with Swiper Slider */}
      <CustomerReviewsSection />


<section className="pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0">
  <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px mb-4 text-center">
    Latest Blog Posts<span className="text-base-color">.</span>
  </h2>

  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center"
        ></div>

        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>
      </div>
    </div>
  </div>
</section>

 <LatestBlogsLoader />



      
      
          
          

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
