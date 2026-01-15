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
    EV Collision Repair & Panel Replacement in Dubai | Structural & Cosmetic Restoration
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS offers expert collision repair and panel replacement in Dubai for electric vehicles. Restore structure, alignment, and appearance with precision service."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV collision repair Dubai, electric vehicle bodywork, EV panel replacement, accident damage repair EV, EV body restoration UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/body-paint/collision-repair-panel-replacement"
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
    href="https://evsuae.com/services/body-paint/collision-repair-panel-replacement"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint/collision-repair-panel-replacement"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Collision Repair & Panel Replacement in Dubai | Structural & Cosmetic Restoration"
  />
  <meta
    property="og:description"
    content="From minor dents to major body damage, EVS restores your electric vehicle with expert panel replacement and collision repair in Dubai."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/body-paint/collision-repair-panel-replacement"
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
    content="EV Collision Repair & Panel Replacement in Dubai | Structural & Cosmetic Restoration"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai restores damaged EVs with advanced collision repair and panel replacement. Structural precision, clean finish."
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
        name: "Collision Repair & Panel Replacement for Electric Vehicles",
        description:
          "EVS UAE provides expert collision repair and panel replacement services for electric vehicles. We restore structural integrity and appearance using advanced body repair techniques and OEM-matched parts.",
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
        url: "https://evsuae.com/services/body-paint/collision-repair-panel-replacement",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Collision Repair & Panel Replacement for Electric Vehicles"
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
  description={`Even a small impact can affect the structure, appearance, or performance of an electric vehicle. At <strong>EVS</strong>, we provide expert collision repair and panel replacement services tailored for EV body structures. From surface damage to full panel replacements, we use precision alignment tools and premium materials to ensure your EV retains its original shape, safety standards, and visual finish.`}
/>


<ServiceBenefits
  title="Benefits of Collision Repair & Panel Replacement"
  items={[
    {
      title: "Minor & Major Damage Repair",
      description:
        "We restore everything from bumper scrapes to multi-panel collision damage.",
    },
    {
      title: "Precision Panel Replacement",
      description:
        "Advanced measuring and fitment ensure structural alignment and visual consistency.",
    },
    {
      title: "EV-Specific Bodywork",
      description:
        "Repairs account for battery placement, sensor integration, and lightweight materials.",
    },
    {
      title: "Paint & Finish Matching",
      description:
        "We seamlessly blend new panels with existing bodywork using OEM-matched paints.",
    },
    {
      title: "Safety & Structural Integrity",
      description:
        "We follow repair standards that maintain crash safety and chassis rigidity.",
    },
    {
      title: "Quick Turnaround",
      description:
        "Efficient workflows and local parts sourcing minimize downtime.",
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
      question: "Can you match the original panel shape and paint exactly?",
      answer:
        "Yes. We use precision tools and digital paint matching to replicate the original factory fit and finish.",
    },
    {
      question: "Is panel replacement always required after a collision?",
      answer:
        "Not always. If the panel can be restored safely and cleanly, we’ll recommend repair. If the damage is structural or severe, we replace it.",
    },
    {
      question: "Do you handle insurance claims for collision repair?",
      answer:
        "Yes. We work directly with most insurers to manage approvals, billing, and documentation.",
    },
    {
      question: "How long does a typical panel replacement take?",
      answer:
        "1–3 days depending on the extent of the damage, availability of parts, and paint curing time.",
    },
    {
      question: "Will the new panel affect my EV’s performance or warranty?",
      answer:
        "No. Our process aligns with manufacturer repair standards and will not interfere with EV systems or warranty coverage.",
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
