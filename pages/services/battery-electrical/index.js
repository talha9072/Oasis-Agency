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
    EV Battery & Electrical Repairs in Dubai | Certified EV Services – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE specializes in electric vehicle battery and electrical system repairs in Dubai. From high-voltage battery diagnostics to wiring and sensor issues, we deliver expert solutions."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV battery repair Dubai, electric vehicle electrical service UAE, high-voltage battery diagnostics, EV wiring repair Dubai, EV sensor troubleshooting, EVS electrical services, certified EV battery technicians"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical"
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
    href="https://evsuae.com/services/battery-electrical"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Battery & Electrical Repairs in Dubai | Certified EV Services – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE specializes in electric vehicle battery and electrical system repairs in Dubai. From high-voltage battery diagnostics to wiring and sensor issues, we deliver expert solutions."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical"
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
    content="EV Battery & Electrical Repairs in Dubai | Certified EV Services – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE specializes in electric vehicle battery and electrical system repairs in Dubai. From high-voltage battery diagnostics to wiring and sensor issues, we deliver expert solutions."
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
        name: "Battery & Electrical Services for Electric Vehicles",
        description:
          "EVS UAE specializes in battery and electrical system services for electric vehicles. From high-voltage battery repairs and diagnostics to infotainment system support and ECU replacements, we ensure all EV electrical components are safely maintained and optimized.",
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
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Voltage Battery Repairs" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Low-Voltage Electrical Diagnostics" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Health & Thermal Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power Distribution Unit (PDU) Repairs" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charging Port Conversions" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charging Port Upgrades" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sensor & ECU Replacements" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infotainment & Camera System Support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wiring, Fuse & Harness Repairs" } },
        ],
        url: "https://evsuae.com/services/battery-electrical",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Battery & Electrical Services"
  description="Smart solutions to enhance and update your EV's capabilities."
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />

<ServiceListSection
  title="Battery & Electrical Services"
  services={[
    {
      title: "High-Voltage Battery Repairs",
      description:
        "We address issues within high-voltage battery packs, including module faults, degraded cells, and power delivery inconsistencies.",
      href: "battery-electrical/high-voltage-battery-repairs",
    },
    {
      title: "Low-Voltage Electrical Diagnostics",
      description:
        "We resolve malfunctions in auxiliary systems, from interior electronics and lighting to control circuits critical to everyday functionality.",
      href: "battery-electrical/low-voltage-diagnostics",
    },
    {
      title: "Battery Health & Thermal Management",
      description:
        "Thermal regulation is vital in Dubai's climate. We service coolant loops, thermal sensors, and battery cooling units to prevent overheating and extend battery life.",
      href: "battery-electrical/battery-health-thermal-management",
    },
    {
      title: "Power Distribution Unit (PDU) Repairs",
      description:
        "The PDU governs energy flow across key EV components. We diagnose and repair malfunctions affecting inverters, motors, and safety circuits.",
      href: "battery-electrical/pdu-repair",
    },
    {
      title: "Charging Port Repair",
      description:
        "We fix damaged or malfunctioning charging ports to restore safe, consistent charging performance for your EV.",
      href: "battery-electrical/charging-port-repairs",
    },
    {
      title: "Charging Port Conversions",
      description:
        "We convert your existing charging port to a different standard, ensuring compatibility with regional charging infrastructure.",
      href: "battery-electrical/charging-port-conversions",
    },
    {
      title: "Charging Port Upgrades",
      description:
        "We upgrade your EV’s charging port for improved speed, power capacity, or support for newer charging technologies.",
      href: "battery-electrical/charging-port-upgrades",
    },
    {
      title: "Sensor & ECU Replacements",
      description:
        "We replace faulty sensors and electronic control units that affect everything from performance readings to safety features and system communication.",
      href: "battery-electrical/sensor-ecu-replacements",
    },
    {
      title: "Infotainment & Camera System Support",
      description:
        "From camera alignment to touchscreen issues, we resolve infotainment and vision system failures common in modern EVs.",
      href: "battery-electrical/infotainment-camera-systems",
    },
    {
      title: "Wiring, Fuse & Harness Repairs",
      description:
        "We identify and repair electrical shorts, blown fuses, and damaged harnesses that cause intermittent or total power failures.",
      href: "battery-electrical/wiring-fuse-harness-repair",
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
      question: "What are the signs my EV may have a battery or electrical issue?",
      answer:
        "Dashboard alerts, reduced range, inconsistent charging, or electrical system warnings are common indicators.",
    },
    {
      question: "Can EVS upgrade or modify my charging port?",
      answer:
        "Yes, we offer charging port conversions, repairs, and upgrades based on compatibility or functionality needs.",
    },
    {
      question: "How long does it take to repair or replace a high-voltage battery?",
      answer:
        "Most diagnostics are completed the same day. Battery repairs or replacements usually take 1–2 working days depending on complexity.",
    },
    {
      question: "Do you support infotainment and camera system repairs?",
      answer:
        "Yes. We repair malfunctioning screens, recalibrate cameras, and troubleshoot display or connectivity issues.",
    },
    {
      question: "Is it safe to continue driving with a warning light on?",
      answer:
        "We don’t recommend it. Electrical faults can affect critical systems—schedule a diagnostic as soon as possible.",
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
