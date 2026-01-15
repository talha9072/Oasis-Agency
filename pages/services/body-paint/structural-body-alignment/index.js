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
    EV Structural Body Alignment in Dubai | Frame Straightening After Collision
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS offers structural alignment services for electric vehicles in Dubai. Restore your EV’s frame and driveability after impact using precision equipment."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV body alignment Dubai, structural frame repair EV, electric car chassis straightening, EV post-collision alignment, EV body shop UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/body-paint/structural-body-alignment"
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
    href="https://evsuae.com/services/body-paint/structural-body-alignment"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint/structural-body-alignment"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Structural Body Alignment in Dubai | Frame Straightening After Collision"
  />
  <meta
    property="og:description"
    content="Restore your EV’s structural integrity after an accident. EVS Dubai provides precise body alignment services to correct frame and chassis issues."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/body-paint/structural-body-alignment"
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
    content="EV Structural Body Alignment in Dubai | Frame Straightening After Collision"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai restores structural alignment in electric vehicles using manufacturer-standard straightening equipment."
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
        name: "Structural Body Alignment for Electric Vehicles",
        description:
          "EVS UAE offers structural body alignment services for electric vehicles. Using precision frame-straightening tools, we restore vehicle geometry and ensure safety and performance post-collision.",
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
        url: "https://evsuae.com/services/body-paint/structural-body-alignment",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Structural Body Alignment for Electric Vehicles"
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
  badgeText="EV Body & Paint Services"
  title="About the Service"
  description={`Even minor collisions can throw off an electric vehicle’s structural alignment, affecting handling, ride comfort, and long-term component wear. At <strong>EVS</strong>, we provide advanced structural body alignment services using computerized measuring systems that match your vehicle’s frame to manufacturer specifications. We ensure that your EV’s body is straight, balanced, and safe—restoring factory-level symmetry and drivability after an impact.`}
/>


<ServiceBenefits
  title="Benefits of Structural Body Alignment"
  items={[
    {
      title: "Frame Straightening",
      description:
        "We correct misaligned subframes, chassis points, and crossmembers to restore structure.",
    },
    {
      title: "Post-Impact Correction",
      description:
        "Fixes handling issues, vibration, or poor panel fit caused by structural shifts.",
    },
    {
      title: "Precision Measuring Tools",
      description:
        "Digital alignment systems ensure millimetre-accurate restoration.",
    },
    {
      title: "EV-Specific Adjustments",
      description:
        "Alignment work respects battery placement, floor integrity, and sensor calibration.",
    },
    {
      title: "Improved Driveability",
      description:
        "Restores balance, comfort, and road feel after a collision.",
    },
    {
      title: "Safety Compliance",
      description:
        "Ensures structural elements meet manufacturer crash standards and load-bearing tolerances.",
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
      question: "How do I know if my EV needs structural alignment?",
      answer:
        "Symptoms include uneven panel gaps, poor wheel alignment, unusual handling, or post-collision issues—even if cosmetic damage seems minor.",
    },
    {
      question: "Will misalignment affect my battery or sensors?",
      answer:
        "It can. Improper alignment may interfere with floor-mounted battery packs or cause ADAS systems to misread surroundings.",
    },
    {
      question: "Is this the same as wheel alignment?",
      answer:
        "No. Structural alignment addresses the vehicle’s actual frame and body structure, while wheel alignment deals with suspension geometry.",
    },
    {
      question: "Can I drive with a slightly misaligned frame?",
      answer:
        "While the vehicle may still be operable, it can lead to uneven wear, reduced efficiency, and safety risks. It’s best to correct it early.",
    },
    {
      question: "How long does structural alignment take?",
      answer:
        "Depending on severity, most jobs are completed in 1–2 days using digital measuring and correction systems.",
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
