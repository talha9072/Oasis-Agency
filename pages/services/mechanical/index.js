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
    EV Mechanical Repairs in Dubai | Certified Electric Vehicle Technicians – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers comprehensive mechanical repair services for electric vehicles in Dubai. From suspension to steering and brake systems, our certified technicians ensure safe and smooth performance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV mechanical repairs Dubai, electric vehicle suspension service, EV brake repair UAE, EV steering system maintenance, certified EV technicians Dubai, EV mechanical diagnostics, EVS UAE mechanical services"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical"
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
    href="https://evsuae.com/services/mechanical"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Mechanical Repairs in Dubai | Certified Electric Vehicle Technicians – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers comprehensive mechanical repair services for electric vehicles in Dubai. From suspension to steering and brake systems, our certified technicians ensure safe and smooth performance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical"
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
    content="EV Mechanical Repairs in Dubai | Certified Electric Vehicle Technicians – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers comprehensive mechanical repair services for electric vehicles in Dubai. From suspension to steering and brake systems, our certified technicians ensure safe and smooth performance."
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

  {/* Structured Data – Mechanical Services */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Mechanical Services for Electric Vehicles",
        description:
          "EVS UAE offers comprehensive mechanical repair and diagnostics for electric vehicles, including brakes, suspension, steering, HVAC systems, drive units, and full mechanical inspections.",
        serviceType: "EV Mechanical Repairs",
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
        url: "https://evsuae.com/services/mechanical",
        inLanguage: "en",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Mechanical Services"
  description="Smart solutions to enhance and update your EV's capabilities."
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />

<ServiceListSection
  title="Mechanical Services"
  services={[
    {
      title: "Brake & Suspension Repairs",
      description:
        "We handle everything from regenerative brake service to full suspension system repairs. This includes replacing brake pads, recalibrating brake sensors, and tuning suspension systems for the extra weight of EV battery packs.",
      href: "mechanical/brake-suspension-repairs",
    },
    {
      title: "AC & HVAC System Servicing",
      description:
        "Electric vehicles require efficient thermal management—not only for comfort but also for component safety. We diagnose HVAC issues, recharge refrigerant systems, and service AC compressors and evaporators.",
      href: "mechanical/ac-hvac-service",
    },
    {
      title: "Transmission & Drive Unit Repairs",
      description:
        "We inspect and repair EV drive units, reduction gears, and associated mechanical systems to resolve noise, vibration, or torque inconsistencies.",
      href: "mechanical/transmission-drive-unit-repairs",
    },
    {
      title: "Full Mechanical Checkups & Diagnostics",
      description:
        "Our complete checkups involve in-depth inspections of brakes, cooling systems, axle condition, and more—backed by EV-specific diagnostic tools for accurate fault detection.",
      href: "mechanical/full-checkups-diagnostics",
    },
    {
      title: "Tire Alignment & Axle Work",
      description:
        "Proper alignment ensures tire longevity and driving stability. We perform wheel alignments, axle inspections, and adjustments to maintain ideal handling and efficiency.",
      href: "mechanical/tire-alignment-axle-work",
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
