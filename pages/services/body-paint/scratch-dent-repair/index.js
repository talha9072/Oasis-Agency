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
    EV Scratch & Dent Repair in Dubai | Surface Restoration Without Repainting
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers professional scratch and dent repair for electric vehicles. We restore body panels with minimal repainting and maximum surface preservation."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV scratch repair Dubai, dent removal electric car, paintless dent repair EV, EV body surface fix, electric vehicle minor damage repair"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/body-paint/scratch-dent-repair"
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
    href="https://evsuae.com/services/body-paint/scratch-dent-repair"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint/scratch-dent-repair"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Scratch & Dent Repair in Dubai | Surface Restoration Without Repainting"
  />
  <meta
    property="og:description"
    content="EVS restores EV bodywork with precision scratch and dent repairs in Dubai. Preserve your original paint and smooth out imperfections."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/body-paint/scratch-dent-repair"
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
    content="EV Scratch & Dent Repair in Dubai | Surface Restoration Without Repainting"
  />
  <meta
    name="twitter:description"
    content="Restore your EV’s surface with EVS Dubai’s expert scratch and dent repair services—preserving original paint wherever possible."
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
        name: "Scratch & Dent Repair for Electric Vehicles",
        description:
          "EVS UAE provides professional scratch and dent repair services for electric vehicles. Our technicians restore your EV’s exterior to factory finish using advanced paintless and refinishing techniques.",
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
        url: "https://evsuae.com/services/body-paint/scratch-dent-repair",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Scratch & Dent Repair for Electric Vehicles"
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
  description={`Scratches and dents are part of everyday driving—but that doesn’t mean they have to stay. At <strong>EVS</strong>, we offer expert scratch and dent repair services that restore your EV’s body panels without unnecessary repainting or filler use. Whether it’s a minor surface scuff or a deeper crease, we use modern repair techniques to smooth and blend affected areas while preserving your vehicle’s original paint and factory finish whenever possible.`}
/>


<ServiceBenefits
  title="Benefits of Scratch & Dent Repair"
  items={[
    {
      title: "Paint-Preserving Repairs",
      description:
        "We retain your EV’s original finish using precision tools and techniques.",
    },
    {
      title: "Minor to Moderate Dent Removal",
      description:
        "Includes surface-level door dings, panel creases, and bumper marks.",
    },
    {
      title: "Scratch Buffing & Correction",
      description:
        "Fine scratches are polished out; deeper ones are leveled and color-matched.",
    },
    {
      title: "Faster Turnaround",
      description:
        "Many repairs are completed within the same day or 24 hours.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Avoids full panel replacements or repainting when not necessary.",
    },
    {
      title: "EV-Safe Materials",
      description:
        "Techniques are chosen to avoid stress on lightweight body panels and integrated sensors.",
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
      question: "Can you fix scratches without repainting the panel?",
      answer:
        "Yes. We use polishing, blending, and localized correction methods to preserve the original paint whenever possible.",
    },
    {
      question: "What types of dents can be repaired without replacement?",
      answer:
        "Shallow dents, door dings, and surface creases that haven’t cracked the paint are usually eligible for paintless dent repair.",
    },
    {
      question: "Will the repair be visible afterward?",
      answer:
        "No. Our goal is seamless restoration. When repairs are done correctly, they’re virtually invisible.",
    },
    {
      question: "How long do scratch and dent repairs take?",
      answer:
        "Most minor repairs are completed within a few hours; deeper or multiple dents may require 1 working day.",
    },
    {
      question: "Is this service suitable for all EV models?",
      answer:
        "Yes. We handle Tesla, BYD, Zeekr, and other electric vehicle brands with EV-safe materials and methods.",
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
