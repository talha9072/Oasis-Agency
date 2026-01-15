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
    Key & SIM Programming for Electric Vehicles in Dubai | Fast EV Access Solutions
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS provides secure and rapid key & SIM programming services for electric vehicles in Dubai. Restore access and functionality with expert reprogramming."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV key programming Dubai, SIM module EV service, electric vehicle smart key replacement, EV key fob programming, EV access recovery"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/key-sim-programming"
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
    href="https://evsuae.com/services/programming/key-sim-programming"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/key-sim-programming"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Key & SIM Programming for Electric Vehicles in Dubai | Fast EV Access Solutions"
  />
  <meta
    property="og:description"
    content="EVS provides secure and rapid key & SIM programming services for electric vehicles in Dubai. Restore access and functionality with expert reprogramming."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/key-sim-programming"
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
    content="Key & SIM Programming for Electric Vehicles in Dubai | Fast EV Access Solutions"
  />
  <meta
    name="twitter:description"
    content="EVS provides secure and rapid key & SIM programming services for electric vehicles in Dubai. Restore access and functionality with expert reprogramming."
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

  {/* Structured Data – Key & SIM Programming Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Key & SIM Programming for Electric Vehicles",
        description:
          "EVS UAE provides expert key and SIM programming services for electric vehicles. Secure smart key access, digital authentication, and SIM-based connectivity with professional EV technicians.",
        serviceType: "EV Key & SIM Programming",
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
        url: "https://evsuae.com/services/programming/key-sim-programming",
        inLanguage: "en",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Key & SIM Programming for Electric Vehicles"
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
  badgeText="EV Programming Services"
  title="About the Service"
  description="Electric vehicles rely on sophisticated digital key systems and SIM modules for secure access and ignition. When a key is lost, damaged, or unresponsive, or when the SIM module fails to sync with the onboard system, immediate reprogramming becomes essential. At EVS, we specialize in reconfiguring and pairing new keys and SIM modules with your vehicle’s electronic control systems using OEM-compliant tools and secure protocols. This ensures restored functionality without compromising the vehicle's security integrity."
/>


<ServiceBenefits
  title="Benefits of Key & SIM Programming"
  items={[
    {
      title: "Loss Recovery",
      description:
        "Regain access to your vehicle even if the original key is lost or stolen.",
    },
    {
      title: "Fault Resolution",
      description:
        "Eliminate issues such as non-responsive key fobs, startup failures, or de-synced SIM modules.",
    },
    {
      title: "Multi-Key Setup",
      description:
        "Program additional keys for multi-driver convenience.",
    },
    {
      title: "System Compatibility",
      description:
        "Reprogramming is available for a broad range of EV brands including Tesla, BYD, Zeekr, and others.",
    },
    {
      title: "Security Assurance",
      description:
        "All programming is conducted under strict authentication to protect against unauthorized access.",
    },
    {
      title: "Software-Level Integration",
      description:
        "Ensures keys and SIM modules are fully synced with your EV’s firmware for seamless operation.",
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
      question: "Can you program a replacement key without the original?",
      answer:
        "Yes. As long as ownership can be verified, we can program a new key from scratch using manufacturer-aligned procedures.",
    },
    {
      question: "How long does the key or SIM programming process take?",
      answer:
        "Typical programming is completed within 1 to 3 hours depending on vehicle model and system responsiveness.",
    },
    {
      question: "What types of keys and systems do you support?",
      answer:
        "We support smart keys, keyless entry fobs, remote-start keys, and SIM-based authentication systems used across most modern EVs.",
    },
    {
      question: "What is the SIM module in an EV used for?",
      answer:
        "The SIM module functions as a security identifier, authenticating the key and permitting access and ignition. When compromised, reprogramming is required.",
    },
    {
      question: "Is it possible to program more than one key for the same vehicle?",
      answer:
        "Yes, we can program multiple keys to one vehicle system for shared access by multiple users.",
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
