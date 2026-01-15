import Head from "next/head";
import FullHeroCars from "@/components/car-brands/FullHero.js";
import CarAbout from "@/components/car-brands/CarAbout.js";
import CarServices from "@/components/car-brands/CarServices.js";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CustomerReviewsSection from "@/components/common/Customer";
import LatestBlogsLoader from "@/components/car-brands/LatestBlogsLoader";
import StatsCounterSection from "@/components/common/StatsCounter";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
     <Head>
  {/* Title */}
  <title>
    Zeekr 9X Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers expert service for Zeekr 9X electric vehicles in Dubai. From diagnostics to complete maintenance, our technicians ensure optimal performance and reliability."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Zeekr 9X service Dubai, Zeekr 9X maintenance UAE, electric vehicle repair Dubai, Zeekr 9X diagnostics, Zeekr EV technicians UAE, EVS Zeekr service center"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/zeekr/zeekr-9x" />

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
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/zeekr/zeekr-9x"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/zeekr/zeekr-9x"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/zeekr/zeekr-9x"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Zeekr 9X Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers expert service for Zeekr 9X electric vehicles in Dubai. From diagnostics to complete maintenance, our technicians ensure optimal performance and reliability."
  />
  <meta property="og:url" content="https://evsuae.com/zeekr/zeekr-9x" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Zeekr 9X Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Expert diagnostics, maintenance, and repair services for Zeekr 9X electric vehicles in Dubai."
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
        name: "Zeekr 9X Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides advanced maintenance, diagnostics, and repair services for the Zeekr 9X electric vehicle in Dubai. From software calibration to battery health and performance optimization, we ensure your Zeekr 9X runs at peak efficiency.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: [
          { "@type": "Place", name: "Dubai, UAE" },
          { "@type": "Place", name: "Abu Dhabi, UAE" },
          { "@type": "Place", name: "Sharjah, UAE" },
          { "@type": "Place", name: "Ajman, UAE" },
          { "@type": "Place", name: "Al Ain, UAE" },
          { "@type": "Place", name: "Riyadh, Saudi Arabia" },
        ],
        url: "https://evsuae.com/zeekr/zeekr-9x",
        datePublished: "2025-11-07",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-9X.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Zeekr 9X"
  titleSuffix="– Service and EV System Support at EVS"
  description="The Zeekr 9X is a high-performance electric SUV built for luxury and long-distance efficiency. At EVS, we provide expert service and diagnostics for the Zeekr 9X, helping owners maintain optimal performance while meeting all warranty and safety standards."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
  ctaAriaLabel="Book service"
/>




<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr 9X-1.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr 9X-1.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr 9X-1.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr 9X-1.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr 9X-1.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr 9X-1.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Zeekr 9X image"
  heading="About Zeekr 9X"
  description="The Zeekr 9X is a premium electric SUV developed under Geely’s performance EV division. It features a powerful dual-motor all-wheel-drive setup producing over 500 horsepower and can accelerate from 0 to 100 km/h in around 4 seconds. Fitted with a high-capacity battery, the 9X delivers up to 600 km of range per charge. Inside, it offers a panoramic glass roof, AI-assisted driver features, and a large smart touchscreen for full connectivity and control. At EVS, we specialize in maintaining advanced electric vehicles like the Zeekr 9X, with the tools and training to support its high-voltage systems and intelligent onboard technology."
/>


<CarServices
  heading="Zeekr 9X Repair & Maintenance Services"
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
      question: "What type of maintenance does the Zeekr 9X require?",
      answer:
        "The Zeekr 9X often needs battery diagnostics, software updates, brake system checks, and inspections of high-voltage components to ensure long-term efficiency and safety.",
    },
    {
      question: "Can EVS service the dual-motor AWD system in the Zeekr 9X?",
      answer:
        "Yes, our technicians are fully trained to maintain and repair the Zeekr 9X’s dual-motor AWD powertrain using advanced EV diagnostic tools and manufacturer-approved procedures.",
    },
    {
      question: "Do you fix range or charging issues in the Zeekr 9X?",
      answer:
        "Yes — we offer full diagnostics and battery performance repairs for the Zeekr 9X, including charging-system troubleshooting, range optimization, and energy-efficiency improvements.",
    },
    {
      question: "Are you familiar with Zeekr’s electric architecture and systems?",
      answer:
        "Absolutely. EVS has the expertise and tools to service Zeekr’s advanced electric platform — including smart-system diagnostics, battery calibration, and integration checks for the 9X’s high-tech long-range system.",
    },
  ]}
/>



{/* Branches Section with Tabs */}
      <BranchesSection />

      <StatsCounterSection />

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
