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
    EV Windshield and Mirror Replacement in Dubai | Safe Vision System Integration
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai replaces cracked windshields and mirrors on electric vehicles. We ensure precise fitment and compatibility with cameras and driver-assist systems."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV windshield replacement Dubai, electric vehicle mirror repair, ADAS glass replacement, EV rearview mirror fix, EV safety system calibration"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/body-paint/windshield-mirror-replacement"
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
    href="https://evsuae.com/services/body-paint/windshield-mirror-replacement"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint/windshield-mirror-replacement"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Windshield and Mirror Replacement in Dubai | Safe Vision System Integration"
  />
  <meta
    property="og:description"
    content="EVS Dubai replaces damaged windshields and mirrors with precision. All components are compatible with EV driver-assist and camera systems."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/body-paint/windshield-mirror-replacement"
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
    content="EV Windshield and Mirror Replacement in Dubai | Safe Vision System Integration"
  />
  <meta
    name="twitter:description"
    content="EVS replaces EV windshields and mirrors with ADAS-safe components. Restore visibility and system calibration for safe driving."
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
        name: "Windshield & Mirror Replacement for Electric Vehicles",
        description:
          "EVS UAE provides expert windshield and mirror replacement services for electric vehicles. We install OEM-grade glass components for maximum safety, visibility, and integration with driver-assist systems.",
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
        url: "https://evsuae.com/services/body-paint/windshield-mirror-replacement",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Windshield and Mirror Replacement for Electric Vehicles"
  description="EVS Glass Replacement for Safe EV Visibility & Sensor Functionality"
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
  badgeText="EV Body & Paint Services"
  title="About the Service"
  description={`Cracked or damaged glass components in an electric vehicle can compromise safety, visibility, and even system functionality. At <strong>EVS</strong>, we replace windshields and mirrors using components designed to support your vehicle’s built-in sensors, cameras, and vision systems. Whether you're dealing with a hairline crack or full glass failure, we ensure safe removal, correct fitment, and recalibration where required.`}
/>


<ServiceBenefits
  title="Benefits of Windshield and Mirror Replacement"
  items={[
    {
      title: "Driver-Assist Compatibility",
      description:
        "Our replacements support ADAS features such as lane keeping, automatic braking, and forward-collision alerts.",
    },
    {
      title: "Precision Fitment",
      description:
        "Glass and mirror components are selected and installed for your EV’s exact specifications.",
    },
    {
      title: "Mirror Replacement Options",
      description:
        "Side and rearview mirror units replaced with camera and blind-spot systems in mind.",
    },
    {
      title: "Visibility and Safety",
      description:
        "Cracks and distortions are eliminated for clear driving vision in all conditions.",
    },
    {
      title: "Sensor Recalibration",
      description:
        "Post-installation adjustments ensure safety systems function as expected.",
    },
    {
      title: "EV-Specific Parts",
      description:
        "We source glass and mirrors compatible with Tesla, BYD, Zeekr, and other EV models.",
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
      question: "Can you replace windshields with built-in cameras or sensors?",
      answer:
        "Yes. We use components that support integrated systems and recalibrate the sensors as needed after installation.",
    },
    {
      question: "How do I know if my mirror needs replacing instead of repair?",
      answer:
        "If the housing is cracked, the view is distorted, or features like auto-dimming or blind-spot monitoring aren’t working, replacement is recommended.",
    },
    {
      question: "Is recalibration included after glass replacement?",
      answer:
        "Yes. We perform recalibration for cameras and sensors to restore full safety system functionality.",
    },
    {
      question: "How long does this replacement service take?",
      answer:
        "Most windshield and mirror replacements are completed within a few hours, depending on vehicle model and system requirements.",
    },
    {
      question: "Is OEM-quality glass used?",
      answer:
        "Yes. We use high-quality, EV-compatible parts designed to match or exceed original specifications.",
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
