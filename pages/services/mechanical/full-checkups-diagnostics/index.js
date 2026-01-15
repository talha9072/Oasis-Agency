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
    EV Mechanical Checkups and Diagnostics in Dubai | Full System Inspection for Electric Vehicles
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai provides full mechanical checkups and diagnostics for electric vehicles. We inspect brakes, axles, cooling systems, and more using EV-specific tools."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV diagnostics Dubai, electric vehicle checkup, EV mechanical inspection, axle and brake check EV, cooling system service UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical/full-checkups-diagnostics"
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
    href="https://evsuae.com/services/mechanical/full-checkups-diagnostics"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/full-checkups-diagnostics"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Mechanical Checkups and Diagnostics in Dubai | Full System Inspection for Electric Vehicles"
  />
  <meta
    property="og:description"
    content="EVS Dubai provides full mechanical checkups and diagnostics for electric vehicles. We inspect brakes, axles, cooling systems, and more using EV-specific tools."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical/full-checkups-diagnostics"
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
    content="EV Mechanical Checkups and Diagnostics in Dubai | Full System Inspection for Electric Vehicles"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai provides full mechanical checkups and diagnostics for electric vehicles. We inspect brakes, axles, cooling systems, and more using EV-specific tools."
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

  {/* Structured Data – Full Mechanical Checkups & Diagnostics */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Full Mechanical Checkups & Diagnostics for Electric Vehicles",
        description:
          "EVS UAE provides complete mechanical checkups and diagnostics for electric vehicles. We inspect brakes, axles, cooling systems, suspension, and drivetrain components using EV-specific diagnostic tools.",
        serviceType: "EV Mechanical Checkups & Diagnostics",
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
        url: "https://evsuae.com/services/mechanical/full-checkups-diagnostics",
        inLanguage: "en",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Full Mechanical Checkups and Diagnostics for Electric Vehicles"
  description="At EVS, our full mechanical checkups and diagnostics are designed specifically for EV platforms."
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
  description={`Electric vehicles require specialized care to stay safe, efficient, and road-ready. At <strong>EVS</strong>, our full mechanical checkups and diagnostics are designed specifically for EV platforms. We go beyond basic inspections, combining physical checks of key systems with advanced diagnostics to detect hidden issues early. Whether you're preparing for a long drive or just want peace of mind, this service ensures your vehicle is in top condition.`}
/>


<ServiceBenefits
  title="Benefits of Full Mechanical Checkups and Diagnostics"
  items={[
    {
      title: "Brake System Assessment",
      description:
        "We evaluate both hydraulic and regenerative braking systems for wear, calibration, and safety.",
    },
    {
      title: "Axle and Suspension Inspection",
      description:
        "Detects early signs of imbalance, misalignment, or structural stress.",
    },
    {
      title: "Cooling System Check",
      description:
        "We examine motor and battery cooling loops for leaks, pressure consistency, and thermal efficiency.",
    },
    {
      title: "Chassis and Undercarriage Review",
      description:
        "Identifies damage, corrosion, or loose components often missed during visual inspections.",
    },
    {
      title: "EV-Specific Diagnostics",
      description:
        "We connect to your EV’s control systems to retrieve error codes and monitor performance parameters.",
    },
    {
      title: "Preventive Maintenance Planning",
      description:
        "Based on findings, we offer a service schedule to prevent future mechanical faults.",
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
      question: "How often should I get a full mechanical checkup for my EV?",
      answer:
        "We recommend a full check every 20,000 to 30,000 km or before long-distance travel, depending on your driving conditions and usage.",
    },
    {
      question: "What’s the difference between a regular checkup and an EV-specific one?",
      answer:
        "EV-specific checkups include diagnostics for regenerative braking, cooling systems for the battery and motor, and software-integrated control modules.",
    },
    {
      question: "Can you detect problems before they become serious?",
      answer:
        "Yes. Our advanced tools and inspection methods allow us to identify early warning signs that standard garages often miss.",
    },
    {
      question: "How long does a full mechanical diagnostic take?",
      answer:
        "The process usually takes 2 to 3 hours, depending on the vehicle model and depth of inspection required.",
    },
    {
      question: "Is this service available for all EV brands?",
      answer:
        "Yes. We service Tesla, BYD, Zeekr, and most other electric vehicle models commonly used in the UAE.",
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
