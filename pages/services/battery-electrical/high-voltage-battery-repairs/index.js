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
    High-Voltage EV Battery Repairs in Dubai | Cell Replacement & Power Delivery Fixes
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai provides expert high-voltage battery repairs for electric vehicles. We fix degraded cells, module faults, and power delivery issues for safe performance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV battery repair Dubai, high-voltage battery EV, EV cell replacement, electric vehicle battery fault, EV battery module service UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/high-voltage-battery-repairs"
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
    href="https://evsuae.com/services/battery-electrical/high-voltage-battery-repairs"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/high-voltage-battery-repairs"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="High-Voltage EV Battery Repairs in Dubai | Cell Replacement & Power Delivery Fixes"
  />
  <meta
    property="og:description"
    content="EVS Dubai provides expert high-voltage battery repairs for electric vehicles. We fix degraded cells, module faults, and power delivery issues for safe performance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/high-voltage-battery-repairs"
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
    content="High-Voltage EV Battery Repairs in Dubai | Cell Replacement & Power Delivery Fixes"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai provides expert high-voltage battery repairs for electric vehicles. We fix degraded cells, module faults, and power delivery issues for safe performance."
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
        name: "High-Voltage Battery Repairs for Electric Vehicles",
        description:
          "EVS UAE specializes in high-voltage battery repairs for electric vehicles. Our certified technicians restore performance and safety across a wide range of EV battery systems.",
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
        url: "https://evsuae.com/services/battery-electrical/high-voltage-battery-repairs",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="High-Voltage Battery Repairs for Electric Vehicles"
  description="EVS High-Voltage Battery Repair for Optimal EV Range & Safety"
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
  description={`The high-voltage battery pack is the heart of every electric vehicle. Over time, these batteries can experience cell degradation, module imbalance, or power delivery inconsistencies that affect range, performance, and safety. At <strong>EVS</strong>, we specialize in diagnosing and repairing high-voltage EV battery packs. Our team safely handles disassembly, testing, and replacement of individual modules or components—restoring stable energy output and extending battery life.`}
/>


<ServiceBenefits
  title="Benefits of High-Voltage Battery Repairs"
  items={[
    {
      title: "Degraded Cell Replacement",
      description:
        "We identify and replace weak or faulty cells causing range drops or performance issues.",
    },
    {
      title: "Module-Level Diagnostics",
      description:
        "Targeted inspection of individual modules to isolate problems without full pack replacement.",
    },
    {
      title: "Power Delivery Correction",
      description:
        "Fix inconsistent torque, voltage drops, or reduced output affecting drive quality.",
    },
    {
      title: "Safe Disassembly & Handling",
      description:
        "High-voltage work is performed with insulated tools and safety-tested procedures.",
    },
    {
      title: "Improved Range & Efficiency",
      description:
        "Restoring cell balance and energy output improves real-world driving range.",
    },
    {
      title: "Thermal Monitoring Checks",
      description:
        "We ensure the battery’s cooling system is functioning properly to prevent future damage.",
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
      question: "What are signs of high-voltage battery problems?",
      answer:
        "Reduced range, warning lights, overheating, power fluctuations, or failure to charge fully are common indicators.",
    },
    {
      question: "Can you repair the battery or does it always need replacement?",
      answer:
        "In many cases, individual modules or cells can be replaced without changing the entire pack—saving cost and downtime.",
    },
    {
      question: "Is it safe to drive with a high-voltage battery warning?",
      answer:
        "No. It's best to have your EV inspected immediately, as high-voltage faults can pose safety risks or lead to sudden failure.",
    },
    {
      question: "How long does battery repair take?",
      answer:
        "Depending on the issue, most high-voltage battery diagnostics and repairs are completed within 1–3 days.",
    },
    {
      question: "Do you work on batteries from all EV brands?",
      answer:
        "Yes. We handle battery repairs for Tesla, BYD, Zeekr, and other leading EV platforms.",
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
