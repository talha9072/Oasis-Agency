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
    EV Sensor and ECU Replacement in Dubai | Restore Performance and System Communication
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai replaces faulty sensors and ECUs in electric vehicles. Fix safety systems, restore communication, and resolve performance issues with expert service."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV ECU replacement Dubai, EV sensor repair, electric vehicle control unit, safety system ECU, EV electronics fix UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/sensor-ecu-replacements"
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
    href="https://evsuae.com/services/battery-electrical/sensor-ecu-replacements"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/sensor-ecu-replacements"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Sensor and ECU Replacement in Dubai | Restore Performance and System Communication"
  />
  <meta
    property="og:description"
    content="EVS Dubai replaces faulty sensors and ECUs in electric vehicles. Fix safety systems, restore communication, and resolve performance issues with expert service."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/sensor-ecu-replacements"
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
    content="EV Sensor and ECU Replacement in Dubai | Restore Performance and System Communication"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai replaces faulty sensors and ECUs in electric vehicles. Fix safety systems, restore communication, and resolve performance issues with expert service."
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
        name: "Sensor & ECU Replacements for Electric Vehicles",
        description:
          "EVS UAE provides professional sensor and ECU replacement services for electric vehicles. We diagnose and replace faulty electronic components to restore safe, responsive system functionality.",
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
        url: "https://evsuae.com/services/battery-electrical/sensor-ecu-replacements",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Sensor and ECU Replacement for Electric Vehicles"
  description="EVS Sensor & ECU Repair for Optimal EV Performance"
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
  description={`Electric vehicles depend on a network of sensors and electronic control units (ECUs) to manage everything from torque delivery and battery usage to driver-assist systems and charging logic. If a sensor or ECU becomes faulty, it can trigger warning lights, reduce efficiency, or disable key features. At <strong>EVS</strong>, we diagnose and replace damaged components to restore full system performance and communication, ensuring your EV operates smoothly and safely.`}
/>


<ServiceBenefits
  title="Benefits of Sensor and ECU Replacement"
  items={[
    {
      title: "Accurate System Readings",
      description:
        "Restore proper performance, speed, temperature, and battery status feedback.",
    },
    {
      title: "Safety Feature Functionality",
      description:
        "Fix radar, parking sensors, airbag modules, and other safety-critical systems.",
    },
    {
      title: "Fault Code Resolution",
      description:
        "Eliminate persistent dashboard errors caused by malfunctioning control units.",
    },
    {
      title: "Improved Communication Between Systems",
      description:
        "Ensure ECUs are properly synced across the entire EV network.",
    },
    {
      title: "EV Platform Support",
      description:
        "We replace ECUs and sensors across Tesla, BYD, Zeekr, and other major EV brands.",
    },
    {
      title: "High-Quality Components",
      description:
        "We use durable, manufacturer-grade parts to ensure long-term reliability.",
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
      question: "How do I know if a sensor or ECU needs replacement?",
      answer:
        "Warning lights, unresponsive systems, inaccurate readings, or inconsistent performance can all indicate the need for replacement.",
    },
    {
      question: "Can you replace brand-specific ECUs like those in Tesla or BYD?",
      answer:
        "Yes. We service a wide range of EV brands and use diagnostic and programming tools compatible with each platform’s electronic systems.",
    },
    {
      question: "Do I need to recalibrate the system after replacement?",
      answer:
        "Yes. After replacement, we perform full system checks, coding, and calibration to ensure the new unit functions correctly.",
    },
    {
      question: "How long does ECU or sensor replacement take?",
      answer:
        "Most replacements are completed within 2 to 3 hours, depending on system complexity and component accessibility.",
    },
    {
      question: "Will replacing a sensor or ECU fix my warning light issue?",
      answer:
        "In many cases, yes. Once the faulty component is replaced and the system is recalibrated, related fault codes and warning lights are cleared.",
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
