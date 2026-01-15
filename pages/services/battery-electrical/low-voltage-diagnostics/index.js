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
    EV Low-Voltage Diagnostics in Dubai | Interior Electronics & Control Circuit Checks
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai provides expert diagnostics for low-voltage EV systems. We resolve issues in lighting, controls, infotainment, and internal electronics."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV low-voltage repair, electric car interior electronics, EV lighting diagnostics, EV control system fault, EVS diagnostics Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/low-voltage-diagnostics"
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
    href="https://evsuae.com/services/battery-electrical/low-voltage-diagnostics"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/low-voltage-diagnostics"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Low-Voltage Diagnostics in Dubai | Interior Electronics & Control Circuit Checks"
  />
  <meta
    property="og:description"
    content="EVS Dubai provides expert diagnostics for low-voltage EV systems. We resolve issues in lighting, controls, infotainment, and internal electronics."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/low-voltage-diagnostics"
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
    content="EV Low-Voltage Diagnostics in Dubai | Interior Electronics & Control Circuit Checks"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai provides expert diagnostics for low-voltage EV systems. We resolve issues in lighting, controls, infotainment, and internal electronics."
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
        name: "Low-Voltage Diagnostics for Electric Vehicles",
        description:
          "EVS UAE offers professional low-voltage diagnostics for electric vehicles. We test and repair 12V systems, electronic modules, and auxiliary power components to ensure reliable performance.",
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
        url: "https://evsuae.com/services/battery-electrical/low-voltage-diagnostics",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Low-Voltage Diagnostics for Electric Vehicles"
  description="EVS Low-Voltage System Repairs for Reliable EV Functionality"
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
  description={`Electric vehicles rely on both high-voltage systems for propulsion and low-voltage systems for everyday functions like lighting, infotainment, sensors, and control circuits. When these auxiliary systems malfunction, it can lead to inconvenience or even safety concerns. At <strong>EVS</strong>, we use advanced diagnostic tools to identify faults in low-voltage wiring, fuses, relays, and modules—ensuring your EV’s internal electronics perform reliably and as designed.`}
/>


<ServiceBenefits
  title="Benefits of Low-Voltage Diagnostics"
  items={[
    {
      title: "Lighting System Troubleshooting",
      description:
        "We resolve flickering headlights, dashboard lights, and interior illumination issues.",
    },
    {
      title: "Control Module Testing",
      description:
        "We check ECUs, body control modules, and relays to detect inconsistent behaviors or faults.",
    },
    {
      title: "Infotainment & Accessory Repair",
      description:
        "Diagnose issues in screens, USB ports, speakers, and driver-assist functions.",
    },
    {
      title: "Battery & Fuse Check",
      description:
        "Low-voltage batteries and fuses are tested for proper voltage output and continuity.",
    },
    {
      title: "Sensor Diagnostics",
      description:
        "We identify faults in low-voltage sensors responsible for climate control, keyless entry, and more.",
    },
    {
      title: "Short Circuit & Power Drain Detection",
      description:
        "We isolate wiring faults or parasitic draws that drain your auxiliary battery.",
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
      question: "What are symptoms of low-voltage system issues in an EV?",
      answer:
        "Dimming lights, unresponsive screens, intermittent power windows, or dashboard alerts related to auxiliary systems.",
    },
    {
      question: "Do these issues affect the EV’s ability to drive?",
      answer:
        "While not always, they can impact safety and comfort—especially if affecting lights, sensors, or climate control.",
    },
    {
      question: "How long does low-voltage diagnostics take?",
      answer:
        "Most checks and fault isolation can be completed within the same day, depending on system complexity.",
    },
    {
      question: "Can these problems drain my EV’s main battery?",
      answer:
        "Persistent low-voltage faults can impact auxiliary battery performance and, in some cases, create unnecessary power drain.",
    },
    {
      question: "Do you repair or just diagnose the faults?",
      answer:
        "We provide both diagnostics and repair services—replacing faulty parts, clearing faults, and retesting for system health.",
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
