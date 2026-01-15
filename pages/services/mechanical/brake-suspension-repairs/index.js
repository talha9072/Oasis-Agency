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
    EV Brake & Suspension Repairs in Dubai | Regenerative Brakes & Ride Stability
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS provides expert brake and suspension repair for electric vehicles in Dubai, including regenerative braking, sensor calibration, and suspension tuning."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV brake repair Dubai, regenerative brake service, EV suspension tuning, electric vehicle ride comfort, brake sensor calibration UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical/brake-suspension-repairs"
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
    href="https://evsuae.com/services/mechanical/brake-suspension-repairs"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/brake-suspension-repairs"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Brake & Suspension Repairs in Dubai | Regenerative Brakes & Ride Stability"
  />
  <meta
    property="og:description"
    content="EVS provides expert brake and suspension repair for electric vehicles in Dubai, including regenerative braking, sensor calibration, and suspension tuning."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical/brake-suspension-repairs"
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
    content="EV Brake & Suspension Repairs in Dubai | Regenerative Brakes & Ride Stability"
  />
  <meta
    name="twitter:description"
    content="EVS provides expert brake and suspension repair for electric vehicles in Dubai, including regenerative braking, sensor calibration, and suspension tuning."
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

  {/* Structured Data – Brake & Suspension Repairs */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Brake & Suspension Repairs for Electric Vehicles",
        description:
          "EVS UAE provides specialized brake and suspension repair services for electric vehicles, including regenerative braking systems, suspension tuning, sensor calibration, and ride stability optimization.",
        serviceType: "EV Brake & Suspension Repairs",
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
        url: "https://evsuae.com/services/mechanical/brake-suspension-repairs",
        inLanguage: "en",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Brake & Suspension Repairs for Electric Vehicles"
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
  description={`Brake and suspension systems in electric vehicles operate under different stress loads compared to traditional vehicles—primarily due to regenerative braking systems and the additional weight of battery packs. At <strong>EVS</strong>, we offer comprehensive brake and suspension repair services tailored specifically for EVs. From brake pad replacement and sensor recalibration to suspension diagnostics and ride height correction, our team ensures your EV stops smoothly and drives comfortably.`}
/>

<ServiceBenefits
  title="Benefits of Brake & Suspension Repairs"
  items={[
    {
      title: "Regenerative Brake Servicing",
      description:
        "We maintain and troubleshoot systems that convert braking energy back to battery charge, preserving efficiency and control.",
    },
    {
      title: "Brake Pad Replacement",
      description:
        "Worn brake pads are replaced with high-quality components suited for regenerative systems.",
    },
    {
      title: "Sensor Calibration",
      description:
        "We recalibrate brake pressure and ABS sensors to match system updates or after maintenance.",
    },
    {
      title: "Suspension Tuning",
      description:
        "EV suspensions are tuned to handle battery weight while maintaining ride comfort and stability.",
    },
    {
      title: "Shock & Strut Servicing",
      description:
        "We inspect and replace worn or leaking shocks and struts to improve handling and road absorption.",
    },
    {
      title: "Noise & Vibration Resolution",
      description:
        "We eliminate squeaks, clunks, or vibrations caused by misaligned or degraded suspension components.",
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
      question: "Do EVs use traditional brakes or something different?",
      answer:
        "EVs use regenerative braking in combination with traditional hydraulic brakes. Both systems require maintenance to ensure optimal performance.",
    },
    {
      question: "How often should brake pads be replaced on an EV?",
      answer:
        "Brake pads generally last longer on EVs due to regenerative braking but should still be inspected every 20,000–30,000 km or if performance declines.",
    },
    {
      question: "Why does my EV feel bouncy or unstable when driving?",
      answer:
        "This could indicate worn shocks, misaligned suspension, or uneven weight distribution—common issues we can quickly diagnose and fix.",
    },
    {
      question: "Can suspension issues affect range or battery performance?",
      answer:
        "Yes. Poor suspension can lead to uneven weight distribution, inefficient energy use, and excessive wear on drivetrain components.",
    },
    {
      question: "What are signs my brake system needs servicing?",
      answer:
        "Longer stopping distances, warning lights, squealing noises, or pedal softness are all signs that your brakes need attention.",
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
