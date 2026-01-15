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
    EV Wiring, Fuse, and Harness Repair in Dubai | Fix Electrical Faults and Power Failures
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai diagnoses and repairs EV wiring issues, blown fuses, and harness faults. Restore safe power delivery and eliminate electrical failures."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV wiring repair Dubai, electric vehicle fuse replacement, EV harness fault fix, EV electrical short circuit UAE, EV power loss repair"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/wiring-fuse-harness-repair"
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
    href="https://evsuae.com/services/battery-electrical/wiring-fuse-harness-repair"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/wiring-fuse-harness-repair"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Wiring, Fuse, and Harness Repair in Dubai | Fix Electrical Faults and Power Failures"
  />
  <meta
    property="og:description"
    content="EVS Dubai diagnoses and repairs EV wiring issues, blown fuses, and harness faults. Restore safe power delivery and eliminate electrical failures."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/wiring-fuse-harness-repair"
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
    content="EV Wiring, Fuse, and Harness Repair in Dubai | Fix Electrical Faults and Power Failures"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai diagnoses and repairs EV wiring issues, blown fuses, and harness faults. Restore safe power delivery and eliminate electrical failures."
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
        name: "Wiring, Fuse & Harness Repair for Electric Vehicles",
        description:
          "EVS UAE provides expert repair services for EV wiring, fuses, and harness systems. We ensure safe electrical distribution, fault isolation, and restoration of complete circuit integrity.",
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
        url: "https://evsuae.com/services/battery-electrical/wiring-fuse-harness-repair",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Wiring, Fuse, and Harness Repairs for Electric Vehicles"
  description="Expert EV Electrical Repairs at EVS for Reliable Performance"
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
  description={`Electric vehicles rely on complex wiring systems to manage everything from high-voltage energy distribution to lighting and infotainment. Over time, exposure to heat, vibration, or improper repairs can cause these systems to fail. At <strong>EVS</strong>, we diagnose and repair electrical faults including blown fuses, short circuits, and harness damage. Our team ensures stable current flow and system reliability, helping you avoid sudden power loss or system errors.`}
/>


<ServiceBenefits
  title="Benefits of Wiring, Fuse, and Harness Repair"
  items={[
    {
      title: "Fix Intermittent Power Loss",
      description:
        "We trace and eliminate electrical shorts or loose wiring connections.",
    },
    {
      title: "Blown Fuse Replacement",
      description:
        "Safe identification and replacement of high- and low-voltage fuses.",
    },
    {
      title: "Harness Inspection and Repair",
      description:
        "We replace worn, melted, or rodent-damaged wiring harnesses.",
    },
    {
      title: "Improved System Safety",
      description:
        "Correct faults that could cause overheating, voltage surges, or component failure.",
    },
    {
      title: "Enhanced Reliability",
      description:
        "Eliminate recurring warning lights or power disruptions caused by unstable connections.",
    },
    {
      title: "Platform-Specific Service",
      description:
        "We handle electrical repairs across major EV brands like Tesla, BYD, Zeekr, and more.",
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
      question: "How do I know if my EV has a wiring or fuse issue?",
      answer:
        "Signs include flickering lights, non-functional accessories, intermittent system shutdowns, or specific error codes.",
    },
    {
      question: "Do you repair both high-voltage and low-voltage wiring?",
      answer:
        "Yes. We work on the full electrical range, including high-voltage battery lines and low-voltage harness systems.",
    },
    {
      question: "What causes wiring harness damage in EVs?",
      answer:
        "Common causes include wear over time, heat exposure, poor installation, rodent damage, or previous collisions.",
    },
    {
      question: "Can these issues affect the vehicle’s ability to charge?",
      answer:
        "Absolutely. Faults in the wiring or fuses can interfere with charging communication and safety circuits.",
    },
    {
      question: "How long does this repair take?",
      answer:
        "Most repairs are completed within a few hours, depending on the fault location and accessibility.",
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
