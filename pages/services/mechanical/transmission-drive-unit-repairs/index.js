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
    EV Transmission & Drive Unit Repairs in Dubai | Noise, Vibration & Torque Fixes
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS provides expert transmission and drive unit repairs for electric vehicles in Dubai. We resolve torque loss, gear noise, and drivetrain vibration issues."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV transmission repair Dubai, EV drive unit service, electric vehicle torque problems, EV reduction gear repair, drivetrain vibration EV"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical/transmission-drive-unit-repairs"
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
    href="https://evsuae.com/services/mechanical/transmission-drive-unit-repairs"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/transmission-drive-unit-repairs"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Transmission & Drive Unit Repairs in Dubai | Noise, Vibration & Torque Fixes"
  />
  <meta
    property="og:description"
    content="EVS provides expert transmission and drive unit repairs for electric vehicles in Dubai. We resolve torque loss, gear noise, and drivetrain vibration issues."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical/transmission-drive-unit-repairs"
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
    content="EV Transmission & Drive Unit Repairs in Dubai | Noise, Vibration & Torque Fixes"
  />
  <meta
    name="twitter:description"
    content="EVS provides expert transmission and drive unit repairs for electric vehicles in Dubai. We resolve torque loss, gear noise, and drivetrain vibration issues."
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

  {/* Structured Data – Transmission & Drive Unit Repairs */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Transmission & Drive Unit Repairs for Electric Vehicles",
        description:
          "EVS UAE provides expert transmission and drive unit repair services for electric vehicles. We diagnose and fix torque loss, gear noise, drivetrain vibration, and power delivery issues to restore optimal performance.",
        serviceType: "EV Transmission & Drive Unit Repairs",
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
        url: "https://evsuae.com/services/mechanical/transmission-drive-unit-repairs",
        inLanguage: "en",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Transmission & Drive Unit Repairs for Electric Vehicles"
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
  description={`Electric vehicle drivetrains are built with high-efficiency reduction gears and integrated drive units—but when these components wear or malfunction, they can lead to torque loss, unusual noise, or poor ride quality. At <strong>EVS</strong>, we provide specialized transmission and drive unit repair services for EVs. Using precision diagnostic tools, we identify drivetrain issues and restore the system’s smooth, quiet performance—whether it’s gear binding, internal vibrations, or output inconsistencies.`}
/>


<ServiceBenefits
  title="Benefits of Transmission & Drive Unit Repairs"
  items={[
    {
      title: "Drive Unit Diagnostics",
      description:
        "We scan for control errors, mechanical faults, and irregular power delivery affecting motor performance.",
    },
    {
      title: "Gear Reduction Repair",
      description:
        "We address wear or misalignment in reduction gears that affect torque distribution and noise levels.",
    },
    {
      title: "Noise & Vibration Elimination",
      description:
        "We resolve clunks, whines, and shakes caused by drivetrain imbalances or bearing issues.",
    },
    {
      title: "Torque & Acceleration Recovery",
      description:
        "We restore smooth torque output and responsive acceleration, especially under load.",
    },
    {
      title: "Seal & Bearing Replacement",
      description:
        "We replace worn internal components that can cause leaks or mechanical drag.",
    },
    {
      title: "Thermal Protection Checks",
      description:
        "We inspect cooling systems that prevent drive unit overheating and performance drops.",
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
      question: "What are signs my EV’s drive unit needs repair?",
      answer:
        "Unusual noises, reduced torque, hesitation when accelerating, or vibrations during driving are key indicators.",
    },
    {
      question: "Is the transmission the same as in petrol cars?",
      answer:
        "EVs use single-speed gear reduction systems, not multi-speed transmissions. But these still require maintenance and repairs when damaged.",
    },
    {
      question: "Can drive unit issues reduce range or efficiency?",
      answer:
        "Yes. Faulty gears or drag from damaged components can impact energy use and overall efficiency.",
    },
    {
      question: "How long does drive unit repair usually take?",
      answer:
        "Most diagnostics and repairs are completed within 1–2 working days depending on the severity and parts availability.",
    },
    {
      question: "Do you service drive units for all EV brands?",
      answer:
        "Yes. We service Tesla, BYD, Zeekr, and most other EV platforms with drive unit-based propulsion systems.",
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
