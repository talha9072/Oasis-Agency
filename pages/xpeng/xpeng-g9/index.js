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
    XPENG G9 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional service and maintenance for XPENG G9 electric vehicles in Dubai. Expert EV technicians deliver diagnostics, repairs, and complete support."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="XPENG G9 service Dubai, XPENG G9 maintenance UAE, XPENG repair Dubai, XPENG diagnostics UAE, expert XPENG technicians, EVS XPENG G9 support"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/xpeng/xpeng-g9" />

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
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/xpeng/xpeng-g9"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/xpeng/xpeng-g9"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/xpeng/xpeng-g9"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="XPENG G9 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Professional maintenance, diagnostics, and repair services for XPENG G9 electric vehicles in Dubai by certified EV technicians."
  />
  <meta property="og:url" content="https://evsuae.com/xpeng/xpeng-g9" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="XPENG G9 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Expert maintenance and repair services for XPENG G9 electric vehicles in Dubai."
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
        name: "XPENG G9 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers expert repair, diagnostics, and maintenance services for the XPENG G9 electric SUV in Dubai. Certified technicians handle battery care, software updates, and comprehensive EV support.",
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
        url: "https://evsuae.com/xpeng/xpeng-g9",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9.png&q=70&w=1920"
  titlePrefix=""
  highlight="Xpeng G9"
  titleSuffix="Electric SUV Service and Support at EVS"
  description="The Xpeng G9 is a smart electric SUV built for performance, range, and intelligent driving. At EVS, we provide professional maintenance and diagnostics for the Xpeng G9, ensuring all systems operate efficiently while keeping the vehicle within manufacturer warranty standards."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=1220 1220w
  "
  imageAlt="About Xpeng G9"
  heading="About Xpeng G9"
  description="The Xpeng G9 is a flagship electric SUV that combines high-end performance with advanced autonomous technology. It features a dual-motor all-wheel-drive system producing up to 551 horsepower and accelerates from 0 to 100 km/h in just 3.9 seconds. Powered by a large-capacity battery, the G9 offers a driving range of up to 702 km, along with ultra-fast charging capabilities that can add up to 200 km of range in as little as 5 minutes. Inside, it showcases a minimalist cabin design with voice-activated smart controls and a dual-screen dashboard. EVS is fully equipped to service the G9’s advanced EV systems, from high-voltage components to autonomous features, delivering reliable maintenance tailored to Xpeng’s technology."
/>



<CarServices
  heading="Xpeng G9 Repair & Maintenance Services"
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
      question: "What kind of maintenance does the Xpeng G9 typically need?",
      answer:
        "Routine maintenance for the Xpeng G9 includes battery health checks, software updates, brake servicing, and inspections of high-voltage systems to ensure maximum efficiency and safety.",
    },
    {
      question: "Can EVS service the G9’s dual-motor electric drivetrain?",
      answer:
        "Yes, our technicians are certified to maintain and repair dual-motor electric drivetrains like the one used in the Xpeng G9, ensuring balanced performance and long-term reliability.",
    },
    {
      question: "Do you resolve charging or range issues in the Xpeng G9?",
      answer:
        "Yes, EVS offers full diagnostics for charging problems, range inconsistencies, and battery performance issues to restore the Xpeng G9’s optimal driving range.",
    },
    {
      question: "Are you familiar with Xpeng’s smart systems and driving technology?",
      answer:
        "Absolutely. EVS is experienced in maintaining Xpeng’s advanced smart systems, including driver-assist technologies, autonomous functions, and connected vehicle software updates.",
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
