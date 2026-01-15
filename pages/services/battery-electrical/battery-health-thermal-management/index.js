import Head from "next/head";
import HeroSection from "@/components/services/HeroServices";
import ServicesAbout from "@/components/services/ServicesAbout";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import WhyChooseEVS from "@/components/services/WhyChooseEVS";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CarServices from "@/components/car-brands/CarServices.js";
import LogoMarquee from "@/components/common/LogoMarquee";
import BranchesSection from "@/components/common/Branches";
import CustomerReviewsSection from "@/components/common/Customer";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
       
<Head>
  {/* Title */}
  <title>
    EV Battery Health & Thermal Management in Dubai | Cooling System & Sensor Service
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers thermal system diagnostics and battery health checks for EVs. Prevent overheating, extend battery life, and maintain safe performance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV battery thermal system, electric vehicle cooling repair, EV battery overheating, battery coolant service, EV thermal sensor diagnostics Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/battery-health-thermal-management"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author & Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/battery-electrical/battery-health-thermal-management"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/battery-health-thermal-management"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Battery Health & Thermal Management in Dubai | Cooling System & Sensor Service"
  />
  <meta
    property="og:description"
    content="EVS Dubai offers thermal system diagnostics and battery health checks for EVs. Prevent overheating, extend battery life, and maintain safe performance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/battery-health-thermal-management"
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
    content="EV Battery Health & Thermal Management in Dubai | Cooling System & Sensor Service"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai offers thermal system diagnostics and battery health checks for EVs. Prevent overheating, extend battery life, and maintain safe performance."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://evsuae.com/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://evsuae.com/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://evsuae.com/favicon-16x16.png"
  />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link
    rel="manifest"
    href="https://evsuae.com/site.webmanifest"
  />

  {/* Preconnect */}
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
    crossOrigin="anonymous"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />

  {/* Charset & Compatibility */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Battery Health & Thermal Management for Electric Vehicles",
        description:
          "EVS UAE provides advanced battery health and thermal management services for electric vehicles. We optimize battery performance and prevent overheating through diagnostics, balancing, and cooling system maintenance.",
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
        url: "https://evsuae.com/services/battery-electrical/battery-health-thermal-management",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Battery Health & Thermal Management for Electric Vehicles"
  description="EVS Thermal Management for Optimal EV Battery Health"
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>



<LogoMarquee />

<ServicesAbout
  image="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024"
  imageSrcSet={`
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=640 640w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1440 1440w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1920 1920w
  `}
  imageSizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
  imageAlt="EV Maintenance and Repairs"
  badgeText="EV Battery & Electrical Services"
  title="About the Service"
  description={`Electric vehicle battery packs generate substantial heat—especially in Dubai’s climate. If not properly managed, this heat can degrade battery performance and lifespan. At <strong>EVS</strong>, we offer specialized thermal management services that keep your EV’s battery operating within safe temperature ranges. From coolant flow checks to sensor calibration and cooling unit repairs, we ensure your battery stays healthy, efficient, and protected from overheating.`}
/>


<ServiceBenefits
  title="Benefits of Battery Health & Thermal Management"
  items={[
    {
      title: "Coolant Loop Servicing",
      description:
        "We flush and refill coolant systems to maintain proper thermal regulation.",
    },
    {
      title: "Sensor Testing & Replacement",
      description:
        "We verify thermal sensor accuracy and replace faulty units that affect system response.",
    },
    {
      title: "Battery Cooling Unit Repair",
      description:
        "We inspect and repair pumps, valves, and cooling modules responsible for active thermal control.",
    },
    {
      title: "Overheating Prevention",
      description:
        "Timely service reduces the risk of thermal runaway or battery derating during hot weather.",
    },
    {
      title: "Battery Health Monitoring",
      description:
        "We assess cell temperature distribution and flag early signs of heat stress or imbalance.",
    },
    {
      title: "Improved Longevity & Range",
      description:
        "A well-maintained thermal system supports better battery life and stable range across seasons.",
    },
  ]}
/>



<BranchesSection />

<WhyChooseEVS />

<CustomerReviewsSection />


<CarFaq
  heading="Frequently Asked Questions"
  faqs={[
    {
      question: "What are signs of thermal management issues in an EV?",
      answer:
        "Battery overheating alerts, reduced charging speed, or aggressive fan noise are common indicators.",
    },
    {
      question: "Can poor thermal regulation damage the battery?",
      answer:
        "Yes. Sustained high temperatures degrade battery cells, reduce performance, and can lead to long-term failure.",
    },
    {
      question: "How often should the coolant system be serviced?",
      answer:
        "We recommend inspections every 12 months or sooner if your vehicle reports overheating or performance throttling.",
    },
    {
      question: "Do you use manufacturer-specified coolant and parts?",
      answer:
        "Yes. We follow brand-specific guidelines to ensure compatibility with your EV’s cooling architecture.",
    },
    {
      question: "Does battery cooling affect range?",
      answer:
        "Indirectly, yes. A cooler battery performs more efficiently and allows for optimal energy use, preserving range.",
    },
  ]}
/>


<CarServices
  heading="Electric Vehicle Services"
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
