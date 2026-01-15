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
    EV Firmware & Software Updates in Dubai | Performance, Features & Stability
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Keep your EV up to date. EVS offers firmware and software updates to improve performance, fix system bugs, and unlock new features across leading EV brands."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV software update Dubai, firmware upgrade for EVs, electric vehicle ECU update, EV feature enhancement, EV system bug fix"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/firmware-software-updates"
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
    href="https://evsuae.com/services/programming/firmware-software-updates"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/firmware-software-updates"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services/programming/firmware-software-updates"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Firmware & Software Updates in Dubai | Performance, Features & Stability"
  />
  <meta
    property="og:description"
    content="Keep your EV up to date. EVS offers firmware and software updates to improve performance, fix system bugs, and unlock new features across leading EV brands."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/firmware-software-updates"
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
    content="EV Firmware & Software Updates in Dubai | Performance, Features & Stability"
  />
  <meta
    name="twitter:description"
    content="Keep your EV up to date. EVS offers firmware and software updates to improve performance, fix system bugs, and unlock new features across leading EV brands."
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

  {/* Structured Data – Firmware & Software Updates Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Firmware & Software Updates for Electric Vehicles",
        description:
          "EVS UAE offers reliable firmware and software update services for electric vehicles. Improve performance, stability, security, and unlock new features with expert EV technicians.",
        serviceType: "EV Firmware & Software Updates",
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
        url: "https://evsuae.com/services/programming/firmware-software-updates",
        inLanguage: "en",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Firmware & Software Updates for Electric Vehicles"
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
  description="As electric vehicles continue to evolve, firmware and software updates are essential for maintaining system performance, ensuring safety, and unlocking new features. At EVS, we offer expert firmware and software update services that align with manufacturer specifications and enhance the vehicle’s electronic control units (ECUs), infotainment systems, driver-assist features, and more. Whether your EV is lagging, experiencing bugs, or simply needs a stability refresh, our update process keeps your systems current and optimized."
/>


<ServiceBenefits
  title="Benefits of Firmware & Software Updates"
  items={[
    {
      title: "Enhanced Stability",
      description:
        "Reduce system crashes, sensor misreadings, and ECU lag with up-to-date software.",
    },
    {
      title: "Performance Boosts",
      description:
        "Access improved torque mapping, battery optimization, and faster system responses.",
    },
    {
      title: "Bug Fixes",
      description:
        "Eliminate common glitches affecting infotainment, sensors, or instrument clusters.",
    },
    {
      title: "New Features",
      description:
        "Enable newly released functionalities such as improved autopilot modes, driver profiles, or energy-saving tools.",
    },
    {
      title: "Compatibility Updates",
      description:
        "Ensure your EV systems are compatible with newer hardware or connected infrastructure.",
    },
    {
      title: "Brand-Specific Integration",
      description:
        "We update systems for Tesla, BYD, Zeekr, and other modern EV platforms using brand-aligned tools.",
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
      question: "How do I know if my EV needs a software or firmware update?",
      answer:
        "If you're experiencing lags, missing features, system glitches, or outdated interfaces, your EV may need an update.",
    },
    {
      question: "How long does the update process take?",
      answer:
        "Most updates take between 1 to 3 hours depending on the vehicle model and system version.",
    },
    {
      question: "Can updates improve driving performance or efficiency?",
      answer:
        "Yes. Many firmware updates include battery optimizations, improved regenerative braking, and smoother drive response.",
    },
    {
      question: "Do I lose my data or settings during an update?",
      answer:
        "No. Settings and driver profiles are retained unless a full system reset is required, which we’ll inform you about beforehand.",
    },
    {
      question: "Are updates done wirelessly or through physical connection?",
      answer:
        "We perform updates using secure, direct connections via diagnostic equipment to ensure stability and prevent interruptions.",
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
