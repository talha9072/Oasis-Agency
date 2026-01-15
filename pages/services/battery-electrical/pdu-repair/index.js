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
    EV PDU Repairs in Dubai | Power Distribution Unit Diagnostics and Service
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai repairs and diagnoses power distribution units in electric vehicles. Restore energy flow and system performance across key EV components."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV PDU repair Dubai, power distribution unit EV, inverter fault EV, electric motor power flow, EV electrical diagnostics UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/pdu-repair"
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
    href="https://evsuae.com/services/battery-electrical/pdu-repair"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/pdu-repair"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV PDU Repairs in Dubai | Power Distribution Unit Diagnostics and Service"
  />
  <meta
    property="og:description"
    content="EVS Dubai repairs and diagnoses power distribution units in electric vehicles. Restore energy flow and system performance across key EV components."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/pdu-repair"
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
    content="EV PDU Repairs in Dubai | Power Distribution Unit Diagnostics and Service"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai repairs and diagnoses power distribution units in electric vehicles. Restore energy flow and system performance across key EV components."
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
        name: "Power Distribution Unit (PDU) Repair for Electric Vehicles",
        description:
          "EVS UAE offers expert Power Distribution Unit (PDU) repair services for electric vehicles. Our technicians handle diagnostics, component replacement, and calibration to restore electrical system integrity.",
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
        url: "https://evsuae.com/services/battery-electrical/pdu-repair",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Power Distribution Unit (PDU) Repairs for Electric Vehicles"
  description="EVS PDU Diagnostics & Repairs for Safe EV Performance"
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
  description={`The Power Distribution Unit (PDU) in an electric vehicle is responsible for managing energy flow between the high-voltage battery, inverter, motor, and other electrical systems. When the PDU is compromised, it can lead to reduced performance, system errors, or even safety concerns. At <strong>EVS</strong>, we offer diagnostic testing and repairs for PDUs to restore proper energy routing and keep your EV operating safely and efficiently.`}
/>


<ServiceBenefits
  title="Benefits of PDU Repair"
  items={[
    {
      title: "Restored Energy Flow",
      description:
        "Repairs ensure that power is delivered correctly to the motor, inverter, and accessory systems.",
    },
    {
      title: "High-Voltage Circuit Diagnostics",
      description:
        "We identify malfunctions related to internal fuses, contactors, or circuit boards.",
    },
    {
      title: "Improved EV Performance",
      description:
        "A properly functioning PDU helps deliver consistent torque and acceleration.",
    },
    {
      title: "System Fault Resolution",
      description:
        "Fixes warning lights or drive errors triggered by power distribution imbalances.",
    },
    {
      title: "Thermal Load Balancing",
      description:
        "We verify cooling functions and thermal protection to prevent overheating.",
    },
    {
      title: "Brand-Specific Support",
      description:
        "PDU diagnostics are tailored for EV platforms like Tesla, BYD, Zeekr, and more.",
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
      question: "What are the signs of a faulty PDU in an EV?",
      answer:
        "Common signs include power delivery issues, warning lights, reduced performance, or charging malfunctions.",
    },
    {
      question: "Can the PDU be repaired or does it need to be replaced?",
      answer:
        "In many cases, we can repair or replace specific internal components, avoiding full unit replacement and reducing cost.",
    },
    {
      question: "Is PDU repair safe for high-voltage systems?",
      answer:
        "Yes. Our technicians use insulated tools and safety protocols specifically designed for working on high-voltage EV components.",
    },
    {
      question: "How long does PDU repair take?",
      answer:
        "Most diagnostics and repairs are completed within 1 to 2 days, depending on the nature of the fault.",
    },
    {
      question: "Do you service PDUs for hybrid vehicles as well?",
      answer:
        "Yes. We support both full electric and plug-in hybrid platforms with advanced power distribution systems.",
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
