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
    AVATR EV Service in Dubai | Expert Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Get professional service for AVATR electric vehicles in Dubai with EVS UAE. Expert technicians deliver diagnostics, maintenance, and repairs tailored for AVATR models."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="AVATR EV service Dubai, AVATR car maintenance UAE, electric vehicle repair Dubai, AVATR diagnostics UAE, EVS AVATR service center, AVATR electric car support"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/avatr" />

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

  {/* Language & hreflang */}
  <meta httpEquiv="Content-Language" content="en" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/avatr" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/avatr" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/avatr" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="AVATR EV Service in Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Professional diagnostics, maintenance, and repair services for AVATR electric vehicles in Dubai by EVS UAE."
  />
  <meta property="og:url" content="https://evsuae.com/avatr" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="AVATR EV Service in Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Expert diagnostics, maintenance, and repair services for AVATR electric vehicles in Dubai."
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
        name: "AVATR Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE specializes in diagnostics, maintenance, and repair services for AVATR electric vehicles in Dubai. We provide expert support for battery systems, software tuning, and component servicing to keep your AVATR running smoothly.",
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
        url: "https://evsuae.com/avatr",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/New-Project-36.jpg&q=70&w=1920"
  titlePrefix="Expert"
  highlight="AVATR"
  titleSuffix="Service Center"
  description="At EVS, we provide maintenance and repair services for AVATR electric vehicles, including support for warranty-covered work. Our team is equipped to handle routine servicing and system-related issues in line with manufacturer standards. AVATR owners in Dubai can rely on our technicians for diagnostics, upkeep, and care designed to maintain performance and efficiency over time."
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
          Avatr Models We Service
        </h2>
      </div>

      {/* AVATR 11 */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="/avatr/avatr-11" aria-label="Learn more about the Avatr 11">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Avatr 11 Image"
            />
          </a>

          <div className="service-box-content">
            <a href="/avatr/avatr-11" aria-label="Learn more about the Avatr 11">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Avatr 11
              </h3>
              <p className="fs-16 mt-2">
                At EVS, we offer maintenance and repair services for AVATR electric
                vehicles, including assistance with warranty-related tasks. Our
                technicians follow manufacturer guidelines to ensure reliable
                diagnostics, routine servicing, and long-term performance.
              </p>
            </a>

            <a
              href="/avatr/avatr-11"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Avatr 11"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* AVATR 12 */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="/avatr/avatr-12" aria-label="Learn more about the Avatr 12">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Avatr 12 Image"
            />
          </a>

          <div className="service-box-content">
            <a href="/avatr/avatr-12" aria-label="Learn more about the Avatr 12">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Avatr 12
              </h3>
              <p className="fs-16 mt-2">
                The Avatr 12 is a technologically advanced electric vehicle built
                for performance and innovation. EVS provides maintenance, system
                diagnostics, and warranty-related repairs to keep your Avatr 12
                operating efficiently across the UAE.
              </p>
            </a>

            <a
              href="/avatr/avatr-12"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Avatr 12"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=1220 1220w
  "
  imageAlt="About AVATR"
  heading="About AVATR"
  description="AVATR is an emerging brand focused on electric mobility with a strong emphasis on AI integration and futuristic design. Targeted at tech-savvy and eco-conscious customers, AVATR vehicles feature advanced autonomous driving technology, sleek styling, and smart connectivity systems. In the UAE and across the Middle East, AVATR has gained attention for blending luxury with intelligent electric mobility, appealing to drivers seeking innovation, performance, and a premium EV experience."
/>





<CarServices
  heading="Avatr Repair & Maintenance Services"
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
      question: "How do I register my Avatr car with a warranty in the UAE?",
      answer:
        "To register your Avatr electric vehicle with a warranty in the UAE, you can visit EVS for assistance. Our team manages the necessary documentation and coordinates the process to help ensure your vehicle is properly covered without unnecessary delays or complications.",
    },
    {
      question: "What does the Avatr Extended Warranty cover?",
      answer:
        "The Avatr Extended Warranty covers essential components such as the electric drivetrain, battery systems, power electronics, and other critical vehicle systems. It provides long-term protection, helps reduce unexpected repair costs, and offers peace of mind beyond the standard warranty period.",
    },
    {
      question: "Where can I get my Avatr car serviced under warranty?",
      answer:
        "Avatr electric vehicles can be serviced under warranty at EVS locations in Dubai, Abu Dhabi, and Ajman. Our technicians provide warranty-compliant diagnostics, repairs, and maintenance in accordance with Avatr manufacturer guidelines across the UAE.",
    },
    {
      question: "How does EVS manage Avatr warranty claims?",
      answer:
        "EVS manages Avatr warranty claims by handling all required documentation, coordinating inspections and repairs, and ensuring that all work complies with Avatr warranty terms. Our goal is to make the process simple, transparent, and efficient for EV owners.",
    },
    {
      question: "Can I extend my Avatr warranty?",
      answer:
        "Yes. EVS offers Avatr Extended Warranty solutions that allow you to extend protection beyond the original warranty period. These plans help safeguard key components, preserve vehicle value, and ensure reliable long-term ownership.",
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
