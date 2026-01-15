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
    EV Infotainment and Camera System Repair in Dubai | Display, Touchscreen, and Alignment Fixes
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai repairs EV infotainment systems and camera issues. We fix screen glitches, frozen displays, and sensor misalignment for safe, connected driving."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV camera system repair Dubai, EV touchscreen fix, infotainment issues electric vehicle, EV backup camera alignment, display repair EV UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/infotainment-camera-systems"
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
    href="https://evsuae.com/services/battery-electrical/infotainment-camera-systems"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/infotainment-camera-systems"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services/battery-electrical/infotainment-camera-systems"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Infotainment and Camera System Repair in Dubai | Display, Touchscreen, and Alignment Fixes"
  />
  <meta
    property="og:description"
    content="EVS Dubai repairs EV infotainment systems and camera issues. We fix screen glitches, frozen displays, and sensor misalignment for safe, connected driving."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/infotainment-camera-systems"
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
    content="EV Infotainment and Camera System Repair in Dubai | Display, Touchscreen, and Alignment Fixes"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai repairs EV infotainment systems and camera issues. We fix screen glitches, frozen displays, and sensor misalignment for safe, connected driving."
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
        name: "Infotainment & Camera Systems for Electric Vehicles",
        description:
          "EVS UAE offers support and repair services for infotainment and camera systems in electric vehicles. We restore connectivity, display accuracy, and safety features for enhanced driving experiences.",
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
        url: "https://evsuae.com/services/battery-electrical/infotainment-camera-systems",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Infotainment and Camera System Support for Electric Vehicles"
  description="EVS Infotainment & Camera Repairs for Seamless EV Driving"
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
  description={`Electric vehicles rely on advanced infotainment and vision systems for both convenience and safety. Whether you're dealing with an unresponsive touchscreen, a misaligned rear camera, or system lag, these issues can seriously impact your daily drive. At <strong>EVS</strong>, we specialize in diagnosing and repairing infotainment systems and onboard camera networks. Our team restores full display functionality, touchscreen responsiveness, and sensor accuracy—keeping your EV connected, intelligent, and safe.`}
/>


<ServiceBenefits
  title="Benefits of Infotainment and Camera System Support"
  items={[
    {
      title: "Touchscreen Repair",
      description:
        "We fix freezing, lagging, or completely unresponsive display panels.",
    },
    {
      title: "Camera Recalibration",
      description:
        "Align parking assist, surround-view, and ADAS cameras for accurate feedback.",
    },
    {
      title: "Sensor Diagnostics",
      description:
        "Resolve faults that affect auto-parking, lane assist, or 360-degree vision systems.",
    },
    {
      title: "Infotainment Software Checks",
      description:
        "Diagnose and update system software for smooth navigation and media playback.",
    },
    {
      title: "Display Replacement",
      description:
        "When needed, we replace malfunctioning screens or faulty components.",
    },
    {
      title: "Brand-Wide Coverage",
      description:
        "Tesla, BYD, Zeekr, and other EV systems are all supported.",
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
      question: "Why is my EV’s touchscreen freezing or lagging?",
      answer:
        "This is often caused by software bugs, memory overload, or faulty hardware components. We diagnose the root cause and apply the correct fix.",
    },
    {
      question: "My backup camera is misaligned. Can you fix it?",
      answer:
        "Yes. We recalibrate and align rear, surround-view, and ADAS cameras to restore correct viewing angles and system accuracy.",
    },
    {
      question: "Do you update infotainment software?",
      answer:
        "Yes. We check for available updates, install them when required, and ensure full compatibility with your vehicle’s systems.",
    },
    {
      question: "Can a faulty infotainment system affect vehicle safety?",
      answer:
        "Yes. Many safety features depend on camera feeds and display alerts, so proper infotainment functionality is essential.",
    },
    {
      question: "How long does this service take?",
      answer:
        "Most infotainment and camera diagnostics or repairs are completed within a few hours, depending on the issue.",
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
