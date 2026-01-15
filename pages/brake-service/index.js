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
  <title>Expert Car Brake Service in Dubai | Safe & Reliable Repairs</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Worn-out brakes put you in danger! Get top-rated car brake service for quick, affordable repairs. Don’t wait—book your brake check today!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/brake-service"
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
    href="https://evsuae.com/brake-service"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/brake-service"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Expert Car Brake Service in Dubai | Safe & Reliable Repairs"
  />
  <meta
    property="og:description"
    content="Worn-out brakes put you in danger! Get top-rated car brake service for quick, affordable repairs. Don’t wait—book your brake check today!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/brake-service/"
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
    content="Expert Car Brake Service in Dubai | Safe & Reliable Repairs"
  />
  <meta
    name="twitter:description"
    content="Worn-out brakes put you in danger! Get top-rated car brake service for quick, affordable repairs. Don’t wait—book your brake check today!"
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
        name: "Brake Service",
        description:
          "EVS UAE offers expert brake inspection, repair, and replacement for electric vehicles in Dubai. Our specialists handle everything from worn pads to advanced regenerative braking systems, ensuring your EV stays safe and road-ready.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/brake-service",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Professional EV Brake Service for Your Electric Vehicle in Dubai"
  description="Ensure maximum safety and control with our specialized EV brake services, designed to keep your electric vehicle’s braking system at peak performance."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />



<ServiceBenefits
  title="Electric Vehicle Brake Services"
  items={[
    {
      title: "Brake Pad Replacement",
      description:
        "Replace worn brake pads to maintain safe, quiet stopping. We install high-quality pads to improve braking performance and reduce wear on your rotors.",
    },
    {
      title: "Disc Rotor Skimming",
      description:
        "Warped rotors? We skim or replace brake discs to eliminate vibration and ensure smooth braking. Essential for effective stopping and long-term brake health.",
    },
    {
      title: "Brake Fluid Check",
      description:
        "Old brake fluid reduces braking power. We flush and refill with fresh fluid to keep your system responsive and safe under pressure.",
    },
    {
      title: "Brake Noise Diagnostics",
      description:
        "Noisy brakes? Squeaks or grinding often signal wear or misalignment. We diagnose and fix brake noise to restore smooth, silent stops.",
    },
    {
      title: "ABS System Diagnostics",
      description:
        "ABS light on? We scan and repair anti-lock systems for safe emergency braking and better road control. Don’t ignore the warning.",
    },
    {
      title: "Full Brake System Inspection",
      description:
        "We check pads, rotors, calipers, and fluid to spot issues early. Get a complete brake check to ensure safe, worry-free driving.",
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
      question: "How often should I get my brakes inspected?",
      answer:
        "Electric vehicle brakes should be inspected every 10,000 to 15,000 kilometers, or at least annually. Regular inspections ensure that regenerative braking systems and brake pads remain in optimal condition, especially in demanding environments like Dubai and Abu Dhabi.",
    },
    {
      question: "What are the signs that my EV brakes need servicing?",
      answer:
        "If you experience unusual noises, reduced braking efficiency, a soft brake pedal, or warning lights on the dashboard, it may indicate an issue with your EV’s braking system. If you notice any of these signs, visit a certified EV garage for an inspection.",
    },
    {
      question: "Are EV brakes different from traditional vehicles?",
      answer:
        "Yes, EV brakes often include regenerative braking systems that help recharge the battery when braking. This reduces wear on brake pads but requires specialized knowledge for proper maintenance and servicing.",
    },
    {
      question: "How long does EV brake servicing take?",
      answer:
        "Depending on the issue, a brake inspection and minor repairs can take a few hours. More complex issues may require additional time, but we aim for a quick and efficient turnaround without compromising safety.",
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
