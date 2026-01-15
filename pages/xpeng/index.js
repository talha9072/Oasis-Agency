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
    XPENG Service & Maintenance in Dubai | EVS UAE – Expert EV Care
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers certified XPENG maintenance and repair services in Dubai and across the UAE. Expert diagnostics, updates, and care ensure peak EV performance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="XPENG service Dubai, XPENG maintenance UAE, XPENG repair Dubai, XPENG G7 service, XPENG G9 maintenance, XPENG EV repair UAE, EVS UAE XPENG service center"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/xpeng" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/xpeng" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/xpeng" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/xpeng"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="XPENG Service & Maintenance in Dubai | EVS UAE – Expert EV Care"
  />
  <meta
    property="og:description"
    content="EVS UAE provides certified XPENG maintenance and repair services in Dubai and across the UAE. Trusted specialists ensure your XPENG EV performs at its best."
  />
  <meta property="og:url" content="https://evsuae.com/xpeng" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="XPENG Service & Maintenance in Dubai | EVS UAE – Expert EV Care"
  />
  <meta
    name="twitter:description"
    content="Certified XPENG diagnostics, maintenance, and repair services in Dubai and across the UAE."
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
        name: "XPENG Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert diagnostics, maintenance, and warranty repair services for XPENG models including G7 and G9 in Dubai and across the UAE. Our certified technicians ensure your EV operates at peak performance.",
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
          { "@type": "Place", name: "Sharjah, UAE" },
        ],
        brand: {
          "@type": "Brand",
          name: "XPENG",
          logo: "https://evsuae.com/img/xpeng-logo.webp",
        },
        url: "https://evsuae.com/xpeng",
        datePublished: "2025-11-10",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="XPENG"
  titleSuffix="Electric Vehicle Service and Maintenance in the UAE"
  description="At EVS, we offer specialized service and maintenance for XPENG electric vehicles, from routine inspections to warranty-related repairs. Our certified technicians use advanced diagnostic equipment and follow XPENG’s service protocols to maintain optimal performance. We support XPENG EV owners in Dubai and across the Gulf region with reliable, precision driven service."
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
          XPENG Models We Service
        </h2>
      </div>

      {/* XPENG G7 */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="/xpeng/xpeng-g7" aria-label="Learn more about the XPENG G7">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="XPENG G7 Service in Dubai"
            />
          </a>

          <div className="service-box-content">
            <a href="/xpeng/xpeng-g7" aria-label="Learn more about the XPENG G7">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                XPENG G7
              </h3>
              <p className="fs-16 mt-2">
                Expert XPENG G7 maintenance and diagnostics, from software updates
                and battery checks to complete warranty-approved repairs.
              </p>
            </a>

            <a
              href="/xpeng/xpeng-g7"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the XPENG G7"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* XPENG G9 */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="/xpeng/xpeng-g9" aria-label="Learn more about the XPENG G9">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="XPENG G9 Service in Dubai"
            />
          </a>

          <div className="service-box-content">
            <a href="/xpeng/xpeng-g9" aria-label="Learn more about the XPENG G9">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                XPENG G9
              </h3>
              <p className="fs-16 mt-2">
                Comprehensive XPENG G9 servicing including diagnostics, software
                updates, and performance calibration by certified EV specialists.
              </p>
            </a>

            <a
              href="/xpeng/xpeng-g9"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the XPENG G9"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=1220 1220w
  "
  imageAlt="About XPENG image"
  heading="About XPENG"
  description="The XPENG lineup, including models like the G7 and G9, represents cutting-edge innovation in electric mobility. These vehicles combine performance, intelligent technology, and range efficiency. At EVS, we are fully equipped to manage all aspects of XPENG servicing and maintenance, including warranty-covered repairs. Our experienced team assists XPENG drivers throughout the UAE, including Dubai, Abu Dhabi, Ajman, and Al Ain. We ensure your EV performs at its best through expert diagnostics and care."
/>


<CarServices
  heading="XPENG Repair & Maintenance Services"
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
  heading="Frequently Asked Questions"
  faqs={[
    {
      question: "Do you service all XPENG models in the UAE?",
      answer:
        "Yes, at EVS we service all XPENG models available in the region, including the XPENG G7, G9, and other new releases. Our technicians are trained to handle diagnostics, maintenance, and repairs specific to XPENG vehicles.",
    },
    {
      question: "Is XPENG maintenance different from regular car servicing?",
      answer:
        "Yes, XPENG vehicles are electric and require specialized care. Unlike traditional cars, they do not need oil changes but do require battery health checks, software updates, and system diagnostics. We use XPENG-compatible tools and procedures to ensure accurate service.",
    },
    {
      question: "Do you offer XPENG warranty-related repairs?",
      answer:
        "Absolutely. EVS is equipped to carry out warranty-related servicing and repairs on XPENG vehicles, in accordance with manufacturer guidelines.",
    },
    {
      question: "How often should I service my XPENG EV in the UAE?",
      answer:
        "We recommend servicing your XPENG every 12 months or 20,000 km, whichever comes first. However, some checks, such as software updates and tire inspections, may be needed more frequently depending on driving habits and UAE climate conditions.",
    },
    {
      question: "Where in the UAE do you offer XPENG servicing?",
      answer:
        "We serve XPENG EV owners across the UAE — including Dubai, Abu Dhabi, Ajman, and Al Ain. Our service center is fully equipped to support clients from all emirates.",
    },
    {
      question: "Can I get a software update for my XPENG vehicle at EVS?",
      answer:
        "Yes, we offer software update services for XPENG models to ensure your vehicle benefits from the latest performance, safety, and feature enhancements.",
    },
    {
      question: "Do you offer pickup and drop-off for XPENG servicing?",
      answer:
        "Yes, we provide convenient pickup and drop-off options for XPENG owners across the UAE, subject to availability. Please contact our service team in advance to arrange this service.",
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
