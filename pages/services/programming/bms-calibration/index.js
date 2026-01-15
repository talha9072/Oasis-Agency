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
    EV BMS Calibration in Dubai | Battery Management System Optimization
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers expert BMS calibration for electric vehicles. Improve battery accuracy, range predictions, and energy efficiency through precise system tuning."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV BMS calibration Dubai, battery management system tuning, EV battery optimization, hybrid BMS service UAE, electric vehicle range accuracy"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/bms-calibration"
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
    href="https://evsuae.com/services/programming/bms-calibration"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/bms-calibration"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV BMS Calibration in Dubai | Battery Management System Optimization"
  />
  <meta
    property="og:description"
    content="EVS Dubai offers expert BMS calibration for electric vehicles. Improve battery accuracy, range predictions, and energy efficiency through precise system tuning."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/bms-calibration"
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
    content="EV BMS Calibration in Dubai | Battery Management System Optimization"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai offers expert BMS calibration for electric vehicles. Improve battery accuracy, range predictions, and energy efficiency through precise system tuning."
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

  {/* Structured Data – BMS Calibration Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "BMS Calibration for Electric Vehicles",
        description:
          "EVS UAE offers professional BMS calibration services for electric vehicles. Optimize battery management systems for accurate monitoring, safe charging, improved range prediction, and extended battery life.",
        serviceType: "EV BMS Calibration",
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
        url: "https://evsuae.com/services/programming/bms-calibration",
        inLanguage: "en",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="BMS Calibration for Electric and Hybrid Vehicles"
  description="At EVS, our BMS calibration service realigns system readings with actual battery performance."
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
  badgeText="EV Programming Services"
  title="About the Service"
  description="Your EV’s battery management system (BMS) controls how energy is stored, used, and reported across the vehicle. Over time, or after component replacement, this system can lose calibration, leading to inaccurate range estimates, poor charging behavior, or battery wear. At EVS, our BMS calibration service realigns system readings with actual battery performance. Whether you drive a full EV or hybrid, we help restore battery accuracy, safety, and efficiency."
/>


<ServiceBenefits
  title="Benefits of BMS Calibration"
  items={[
    {
      title: "Improved Range Accuracy",
      description:
        "Your dashboard range estimates better reflect actual battery charge and real-world driving habits.",
    },
    {
      title: "Balanced Cell Performance",
      description:
        "Calibration helps balance cell voltages and prevents uneven battery cell degradation.",
    },
    {
      title: "Charging System Optimization",
      description:
        "Ensures correct interaction between the charger, battery pack, and vehicle control software.",
    },
    {
      title: "Battery Life Extension",
      description:
        "Reduces stress on battery cells by restoring accurate energy flow limits and thresholds.",
    },
    {
      title: "Reset After Repair",
      description:
        "Essential after battery pack replacements, module swaps, or major software updates.",
    },
    {
      title: "Hybrid and EV Support",
      description:
        "Calibration procedures apply to both fully electric vehicles and plug-in hybrid systems.",
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
      question: "What is BMS calibration?",
      answer:
        "It is the process of resetting and synchronizing the battery management system to reflect the true state of the battery and its individual cells.",
    },
    {
      question: "When should I get BMS calibration done?",
      answer:
        "After battery repair or replacement, major software updates, or if you notice inaccurate range estimates or unusual charging behavior.",
    },
    {
      question: "How does BMS calibration improve performance?",
      answer:
        "Calibration improves range prediction, charging behavior, and overall battery health by correcting system misalignment.",
    },
    {
      question: "Is BMS calibration safe for my EV?",
      answer:
        "Yes. We use vehicle-specific diagnostic tools and approved procedures to ensure accurate calibration without risk to your EV systems.",
    },
    {
      question: "How long does BMS calibration take?",
      answer:
        "Most BMS calibrations are completed within 1 to 2 hours, depending on the vehicle model and the current battery condition.",
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
