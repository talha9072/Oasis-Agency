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
    EV System Calibration and Diagnostics in Dubai | Precision Testing and Alignment
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai provides expert calibration and diagnostics for electric vehicles. We test, align, and verify system performance to ensure accurate and reliable operation."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV diagnostics Dubai, system calibration EV, electric vehicle sensor alignment, EV performance testing UAE, EV software diagnostics"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/system-calibration-diagnostics"
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
    href="https://evsuae.com/services/programming/system-calibration-diagnostics"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/system-calibration-diagnostics"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV System Calibration and Diagnostics in Dubai | Precision Testing and Alignment"
  />
  <meta
    property="og:description"
    content="EVS Dubai provides expert calibration and diagnostics for electric vehicles. We test, align, and verify system performance to ensure accurate and reliable operation."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/system-calibration-diagnostics"
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
    content="EV System Calibration and Diagnostics in Dubai | Precision Testing and Alignment"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai provides expert calibration and diagnostics for electric vehicles. We test, align, and verify system performance to ensure accurate and reliable operation."
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

  {/* Structured Data – System Calibration & Diagnostics */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "System Calibration & Diagnostics for Electric Vehicles",
        description:
          "EVS UAE offers precision system calibration and diagnostics for electric vehicles. We test, align, and fine-tune EV subsystems, sensors, and control modules to ensure accurate, safe, and reliable operation.",
        serviceType: "EV System Calibration & Diagnostics",
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
        url: "https://evsuae.com/services/programming/system-calibration-diagnostics",
        inLanguage: "en",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="System Calibration and Diagnostics for Electric Vehicles"
  description="At EVS, our calibration and diagnostics services are designed to test and fine-tune each system in your EV."
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
  description="Electric vehicles depend on highly accurate systems to operate safely and efficiently. Whether it's the battery management system, steering sensors, or autonomous driving modules, precision matters. At EVS, our calibration and diagnostics services are designed to test and fine-tune each system in your EV. Using brand-specific software and advanced tools, we ensure every component is functioning correctly, aligned properly, and communicating with the vehicle as intended."
/>

<ServiceBenefits
  title="Benefits of System Calibration and Diagnostics"
  items={[
    {
      title: "Accurate Fault Detection",
      description:
        "Our tools identify issues that general diagnostic scans may overlook.",
    },
    {
      title: "Sensor and Camera Calibration",
      description:
        "We align ADAS components such as lane-keeping cameras, proximity sensors, and radar modules.",
    },
    {
      title: "Battery and Motor Diagnostics",
      description:
        "Check voltage balance, temperature regulation, and energy flow for peak performance.",
    },
    {
      title: "Error Code Resolution",
      description:
        "Clear system warnings and identify root causes to prevent further issues.",
    },
    {
      title: "ECU Communication Checks",
      description:
        "Ensure all control units are synced and responding as expected.",
    },
    {
      title: "Improved Efficiency and Safety",
      description:
        "Proper calibration helps avoid energy loss, braking errors, or misaligned system responses.",
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
      question: "When should I get my EV systems calibrated?",
      answer:
        "System calibration is recommended after a collision, module replacement, software update, or if you notice performance inconsistencies.",
    },
    {
      question: "What systems are included in the diagnostics?",
      answer:
        "We check battery management systems, electric drive units, sensor arrays, ECUs, and more, depending on the vehicle make.",
    },
    {
      question: "Is calibration only for advanced driver-assist systems?",
      answer:
        "No. While ADAS calibration is critical, we also calibrate thermal systems, steering, regenerative braking, and charging components.",
    },
    {
      question: "How long does the diagnostic and calibration process take?",
      answer:
        "Most diagnostics are completed in a few hours. If calibration is required, the timeline depends on the system and EV model.",
    },
    {
      question: "Can this service help improve performance or range?",
      answer:
        "Yes. Properly calibrated systems reduce inefficiencies, help avoid system conflict, and ensure smoother, safer driving.",
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
