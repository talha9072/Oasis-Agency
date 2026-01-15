import Head from "next/head";
import ServiceMainHero from "@/components/common/ServiceMainHero";
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
  <title>Dubai’s No.1 Collision Repair Service | Restore Your Car Now</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Need fast and reliable accident collision repair in Dubai? Get your vehicle back on the road with expert service and top-quality repairs. Call +971 56 60 17771!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/accident-collision-repair"
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
    href="https://evsuae.com/accident-collision-repair"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/accident-collision-repair"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/accident-collision-repair"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Dubai’s No.1 Collision Repair Service | Restore Your Car Now"
  />
  <meta
    property="og:description"
    content="Need fast and reliable accident collision repair in Dubai? Get your vehicle back on the road with expert service and top-quality repairs. Call +971 56 60 17771!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/accident-collision-repair"
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
    content="Dubai’s No.1 Collision Repair Service | Restore Your Car Now"
  />
  <meta
    name="twitter:description"
    content="Need fast and reliable accident collision repair in Dubai? Get your vehicle back on the road with expert service and top-quality repairs. Call +971 56 60 17771!"
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/favicon-16x16.png"
  />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="manifest" href="/site.webmanifest" />

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
        name: "Accident & Collision Repair",
        description:
          "EVS UAE provides comprehensive accident and collision repair services for electric vehicles in Dubai. Our expert technicians restore EVs after minor dents or major body damage using manufacturer-approved tools and repair methods.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/accident-collision-repair",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<ServiceMainHero
  title="Best EV Collision Repair – Restoring Perfection!"
  description="Restore safety and performance with our specialized EV accident repair services, designed to bring your electric vehicle back to peak condition."
  buttonText="Book Service"
  buttonLink="/contact"
  textAlign="start"
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
/>






<LogoMarquee />




<ServiceBenefits
  title="Accident Collision Repair Services"
  items={[
    {
      title: "Structural Damage Assessment",
      description:
        "We evaluate your EV’s frame and chassis for collision damage, ensuring safe and precise repairs to restore structural integrity.",
    },
    {
      title: "Body Panel Repair",
      description:
        "Dented or scratched panels? We repair or replace damaged body panels to bring your EV back to its original shape and look.",
    },
    {
      title: "Paint Matching and Refinishing",
      description:
        "After repairs, we match your EV’s exact color and refinish surfaces for a seamless, factory-like appearance in Dubai’s climate.",
    },
    {
      title: "Battery and Motor Safety Check",
      description:
        "Collisions can affect EV components. We inspect the battery and motor to ensure they’re safe and functioning post-repair.",
    },
    {
      title: "Alignment and Suspension Repair",
      description:
        "We fix alignment and suspension issues caused by impacts, ensuring your EV drives smoothly and safely on UAE roads.",
    },
    {
      title: "Full Collision Damage Report",
      description:
        "We provide a detailed report of all repairs, ensuring transparency and confidence in your EV’s post-accident condition.",
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
      question: "How long does EV collision repair typically take?",
      answer:
        "The timeline varies based on damage severity, but we aim for quick and efficient repairs.",
    },
    {
      question: "Can you handle both cosmetic and structural damages?",
      answer:
        "Yes, we specialize in minor and major repairs for all types of damage.",
    },
    {
      question: "Are repairs carried out using original parts?",
      answer:
        "Absolutely, we use high-quality, brand-compatible components.",
    },
    {
      question:
        "Is the repair process different for EVs compared to traditional vehicles?",
      answer:
        "Yes, our technicians are trained in EV-specific systems and safety protocols.",
    },
    {
      question:
        "Do you offer towing services for accident-damaged vehicles?",
      answer:
        "Yes, we can arrange towing services for your convenience.",
    },
    {
      question: "Will my insurance cover the repair costs?",
      answer:
        "Most insurance policies cover accident repairs; we can assist with claim processing.",
    },
    {
      question:
        "Can you ensure that the EV's high-voltage systems are safely handled?",
      answer:
        "Yes, our experts are certified to handle EV high-voltage systems with care.",
    },
    {
      question: "What post-repair maintenance services do you offer?",
      answer:
        "We provide paint protection, detailing, and performance tuning for long-term vehicle care.",
    },
    {
      question:
        "Do you provide accident repair services for customers in Abu Dhabi?",
      answer:
        "Yes, we serve customers in Abu Dhabi as well as Dubai.",
    },
  ]}
/>


<CarServices
  heading="Other Services"
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
