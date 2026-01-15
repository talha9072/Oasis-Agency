import Head from "next/head";
import HeroSection from "@/components/services/HeroServices";
import ServiceListSection from "@/components/services/ServiceListSection";
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
    EV Programming & Software Updates in Dubai | Expert EV Services – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides advanced EV programming and software update services in Dubai. From ECU programming and region coding to sensor calibration and system updates."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV programming Dubai, electric vehicle software updates UAE, ECU programming service, sensor calibration Dubai, EV system update, EV diagnostics programming, EVS software services UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming"
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

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/programming"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services/programming"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Programming & Software Updates in Dubai | Expert EV Services – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides advanced EV programming and software update services in Dubai. Ensure optimal performance with ECU programming, sensor calibration, and system updates."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming"
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
    content="EV Programming & Software Updates in Dubai | Expert EV Services – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides advanced EV programming and software update services in Dubai. Ensure optimal performance with ECU programming, sensor calibration, and system updates."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Programming Services for Electric Vehicles",
        description:
          "EVS UAE provides specialized programming services for electric vehicles including module programming, region coding, software updates, and advanced diagnostics. Our team ensures EV systems are updated, configured, and calibrated for peak performance.",
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
        makesOffer: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Region Coding" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Key & SIM Programming" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Firmware & Software Updates" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Module Programming" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "System Calibration & Diagnostics" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Integration (Android & Other Platforms)" } },
        ],
        url: "https://evsuae.com/services/programming",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Programming & Software"
  description="Smart solutions to enhance and update your EV's capabilities."
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />

<ServiceListSection
  title="Programming & Software Solutions"
  services={[
    {
      title: "Custom Region Coding",
      description:
        "Unlock vehicle features specific to your region. Our custom coding services adapt your car’s systems to meet local regulatory, language, and feature preferences.",
      href: "programming/custom-region-coding",
    },
    {
      title: "Key & SIM Programming",
      description:
        "Lost your key or need a new one programmed? We offer fast and secure key and SIM programming services for a wide variety of vehicles.",
      href: "programming/key-sim-programming",
    },
    {
      title: "Firmware & Software Updates",
      description:
        "Keep your vehicle running at peak performance. We provide OEM-level firmware and software updates to enhance stability, fix bugs, and introduce new features.",
      href: "programming/firmware-software-updates",
    },
    {
      title: "Module Programming",
      description:
        "From new module installations to reprogramming existing ones, our team ensures seamless integration into your vehicle’s network.",
      href: "programming/module-programming",
    },
    {
      title: "System Calibration & Diagnostics",
      description:
        "Precision is everything. Our calibration and diagnostic services ensure your vehicle’s systems are aligned and performing correctly.",
      href: "programming/system-calibration-diagnostics",
    },
    {
      title: "App Integration (Android & Other Platforms)",
      description:
        "Enhance your driving experience with seamless app integration solutions, including Android Auto and custom app setups.",
      href: "programming/app-integration-android",
    },
    {
      title: "BMS Calibration (Battery Management System)",
      description:
        "Maximize your EV or hybrid vehicle's battery performance with our specialized BMS calibration services.",
      href: "programming/bms-calibration",
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
      question: "What is vehicle programming and why is it necessary?",
      answer:
        "Vehicle programming involves updating or configuring electronic control units (ECUs) and software modules to enable features, fix bugs, improve performance, and ensure compatibility with new components.",
    },
    {
      question: "How do I know if my vehicle needs a software update?",
      answer:
        "Your vehicle may need a software update if you experience system glitches, warning lights, infotainment issues, reduced performance, or after replacing major electronic components.",
    },
    {
      question: "Can you program aftermarket modules or only OEM modules?",
      answer:
        "We primarily focus on OEM module programming to ensure full compatibility and reliability. However, select aftermarket modules can be programmed after compatibility checks.",
    },
    {
      question: "How long does vehicle or module programming take?",
      answer:
        "Programming time depends on the module and vehicle model. Most standard programming jobs take between 1 to 3 hours, while complex systems may require additional time.",
    },
    {
      question: "Is key and immobilizer programming safe for my vehicle?",
      answer:
        "Yes, we use manufacturer-approved and secure programming tools to ensure your vehicle’s security systems remain fully protected during key and immobilizer programming.",
    },
    {
      question: "Do software updates affect my vehicle warranty?",
      answer:
        "OEM-approved software updates generally do not affect warranty. We always follow manufacturer guidelines and inform you before performing any non-standard programming.",
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
