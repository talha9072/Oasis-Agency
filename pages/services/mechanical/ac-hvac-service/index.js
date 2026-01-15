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
    EV AC & HVAC Service in Dubai | Thermal Management & Climate Control Repairs
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Keep your EV cool and efficient in Dubai’s heat. EVS offers AC and HVAC system servicing for electric vehicles, including diagnostics, recharging, and component repairs."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV AC service Dubai, electric vehicle HVAC repair, EV air conditioning maintenance, EV thermal management, AC refrigerant recharge UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical/ac-hvac-service"
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

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/mechanical/ac-hvac-service"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/ac-hvac-service"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV AC & HVAC Service in Dubai | Thermal Management & Climate Control Repairs"
  />
  <meta
    property="og:description"
    content="Keep your EV cool and efficient in Dubai’s heat. EVS offers AC and HVAC system servicing for electric vehicles, including diagnostics, recharging, and component repairs."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical/ac-hvac-service"
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
    content="EV AC & HVAC Service in Dubai | Thermal Management & Climate Control Repairs"
  />
  <meta
    name="twitter:description"
    content="Keep your EV cool and efficient in Dubai’s heat. EVS offers AC and HVAC system servicing for electric vehicles, including diagnostics, recharging, and component repairs."
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

  {/* Charset & Compatibility */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

  {/* Structured Data – AC & HVAC Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AC & HVAC Service for Electric Vehicles",
        description:
          "EVS UAE offers expert AC and HVAC servicing for electric vehicles, including diagnostics, refrigerant recharging, component repair, and thermal management optimization for hot climates.",
        serviceType: "EV AC & HVAC Service",
        provider: {
          "@type": "AutomotiveBusiness",
          name: "Electric Vehicle Services UAE",
          url: "https://evsuae.com/",
          logo:
            "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971600500387",
            email: "contact@evsuae.com",
            contactType: "Customer Service",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "Dubai, UAE",
          },
        },
        url: "https://evsuae.com/services/mechanical/ac-hvac-service",
        inLanguage: "en",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="AC & HVAC System Servicing for Electric Vehicles"
  description="Adapt Your Imported Vehicle to Local Standards & Unlock Hidden Features"
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
  badgeText="EV Mechanical Services"
  title="About the Service"
  description={`In electric vehicles, air conditioning and HVAC systems are critical not only for driver comfort but also for regulating key components like the battery and motor. At <strong>EVS</strong>, we provide complete AC and HVAC servicing tailored for EV platforms—covering everything from climate control diagnostics and refrigerant recharging to compressor and evaporator repairs. Whether your cabin is overheating or your battery thermal system is underperforming, we ensure optimal cooling performance throughout.`}
/>


<ServiceBenefits
  title="Benefits of AC & HVAC System Servicing"
  items={[
    {
      title: "Refrigerant Recharging",
      description:
        "We refill and balance refrigerant levels to restore cooling efficiency and airflow.",
    },
    {
      title: "Compressor & Evaporator Repairs",
      description:
        "Faulty cooling units are repaired or replaced to resolve AC loss or inconsistent temperature control.",
    },
    {
      title: "Cabin Climate Optimization",
      description:
        "We fix air circulation issues and ensure consistent temperature across all zones.",
    },
    {
      title: "Battery & Motor Cooling",
      description:
        "We maintain thermal systems that prevent EV battery and motor overheating, especially under Dubai’s extreme temperatures.",
    },
    {
      title: "Fan & Ventilation Maintenance",
      description:
        "We service HVAC fans, sensors, and actuators to eliminate noise or low airflow issues.",
    },
    {
      title: "Leak Detection & Sealing",
      description:
        "We locate and seal refrigerant leaks that affect performance and environmental safety.",
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
      question: "Why is my EV AC blowing warm air?",
      answer:
        "This could be due to low refrigerant, a faulty compressor, or clogged filters. We run diagnostics to pinpoint and resolve the issue.",
    },
    {
      question: "Does the HVAC system affect my EV’s battery?",
      answer:
        "Yes. Many EVs use shared thermal systems that cool both the cabin and battery. Poor HVAC performance can increase battery stress.",
    },
    {
      question: "How often should I service my AC system?",
      answer:
        "In hot climates like Dubai, we recommend a check every 12–18 months or at the first sign of cooling loss or odor.",
    },
    {
      question: "Can you recharge the refrigerant in EV-specific systems?",
      answer:
        "Absolutely. We use manufacturer-recommended refrigerants and equipment for EV platforms.",
    },
    {
      question: "My AC makes noise but doesn't cool—what does that mean?",
      answer:
        "This could signal a worn fan motor or failing compressor. We’ll inspect and replace faulty parts as needed.",
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
