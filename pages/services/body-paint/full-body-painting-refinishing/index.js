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
    EV Full-Body Painting and Refinishing in Dubai | Manufacturer-Matched Colors and Durable Finishes
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers full-body painting and refinishing for electric vehicles. We match original colors and apply long-lasting, eco-friendly finishes for a flawless look."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV painting Dubai, electric vehicle refinishing, full-body paint EV, EV color matching UAE, eco-friendly paint electric car"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/body-paint/full-body-painting-refinishing"
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
    href="https://evsuae.com/services/body-paint/full-body-painting-refinishing"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint/full-body-painting-refinishing"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Full-Body Painting and Refinishing in Dubai | Manufacturer-Matched Colors and Durable Finishes"
  />
  <meta
    property="og:description"
    content="EVS Dubai offers full-body painting and refinishing for electric vehicles. We match original colors and apply long-lasting, eco-friendly finishes for a flawless look."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/body-paint/full-body-painting-refinishing"
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
    content="EV Full-Body Painting and Refinishing in Dubai | Manufacturer-Matched Colors and Durable Finishes"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai offers full-body painting and refinishing for electric vehicles. We match original colors and apply long-lasting, eco-friendly finishes for a flawless look."
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
        name: "Full-Body Painting & Refinishing for Electric Vehicles",
        description:
          "EVS UAE offers full-body painting and refinishing services for electric vehicles. We restore and enhance your EV’s appearance using high-quality coatings, precision color matching, and expert application.",
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
        url: "https://evsuae.com/services/body-paint/full-body-painting-refinishing",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Full-Body Painting and Refinishing for Electric Vehicles"
  description="At EVS, we use advanced spray booth technology, color-matching tools, and durable, eco-conscious paints to restore your EV’s exterior with precision."
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
  description={`Whether you’re recovering from damage, refreshing your vehicle’s look, or correcting weathered paint, our full-body painting and refinishing service delivers factory-level quality. At <strong>EVS</strong>, we use advanced spray booth technology, color-matching tools, and durable, eco-conscious paints to restore your EV’s exterior with precision. We handle everything from full-body resprays to panel-specific refinishing for a seamless, showroom-quality finish.`}
/>


<ServiceBenefits
  title="Benefits of Full-Body Painting and Refinishing"
  items={[
    {
      title: "OEM Color Matching",
      description:
        "We replicate your vehicle’s original color using manufacturer-approved codes and digital scanners.",
    },
    {
      title: "Panel-Specific or Full Resprays",
      description:
        "Choose between targeted refinishing or a complete new coat.",
    },
    {
      title: "Eco-Friendly Paint Options",
      description:
        "Our paints are low in VOCs and high in durability, ideal for Dubai’s climate.",
    },
    {
      title: "Flawless Finish",
      description:
        "We use high-quality primers, clear coats, and controlled environments for a consistent result.",
    },
    {
      title: "Paint Correction & Surface Prep",
      description:
        "Prior to painting, we address imperfections for optimal adhesion and finish clarity.",
    },
    {
      title: "Supports All EV Models",
      description:
        "Services available for Tesla, BYD, Zeekr, and other EV brands.",
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
      question: "Can you match the original factory paint exactly?",
      answer:
        "Yes. We use computerized color-matching technology to ensure an exact match with your vehicle’s original paint code.",
    },
    {
      question: "Is the paint used environmentally friendly?",
      answer:
        "Yes. We use low-VOC, water-based paint systems that are both safe and long-lasting.",
    },
    {
      question: "Do you offer partial painting or only full-body resprays?",
      answer:
        "We offer both. You can choose to repaint a specific panel or the entire vehicle depending on your needs.",
    },
    {
      question: "How long does a full-body respray typically take?",
      answer:
        "The process generally takes a few days, depending on the scope of the work and paint curing time.",
    },
    {
      question: "Will the refinishing affect my EV’s sensors or trim pieces?",
      answer:
        "No. We mask, remove, or recalibrate components as needed to protect and maintain full system functionality.",
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
