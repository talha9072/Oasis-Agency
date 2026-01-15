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
  <title>Engine Cooling System Repair Dubai | Fast & Reliable Service</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Keep your car cool and efficient with Engine Cooling System Repair in Dubai. Avoid breakdowns and costly repairs. Schedule your service today!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/car-engine-cooling-system-repair"
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

  {/* Language alternate */}
  <link
    rel="alternate"
    hrefLang="en-ae"
    href="https://evsuae.com/"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Engine Cooling System Repair Dubai | Fast & Reliable Service"
  />
  <meta
    property="og:description"
    content="Keep your car cool and efficient with Engine Cooling System Repair in Dubai. Avoid breakdowns and costly repairs. Schedule your service today!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/car-engine-cooling-system-repair/"
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
    content="Engine Cooling System Repair Dubai | Fast & Reliable Service"
  />
  <meta
    name="twitter:description"
    content="Keep your car cool and efficient with Engine Cooling System Repair in Dubai. Avoid breakdowns and costly repairs. Schedule your service today!"
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
        name: "Car Engine Cooling System Repair",
        description:
          "EVS UAE provides expert cooling system diagnostics and repair services for electric vehicles in Dubai. Our technicians address issues with coolant flow, pumps, and thermal management systems to keep your EV running at optimal temperature.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/car-engine-cooling-system-repair",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Premium EV Cooling System Repairs for Electric Vehicles in Dubai"
  description="To avoid overheating, preserve the best possible battery health, and guarantee a comfortable ride, it is essential to keep the engine’s cooling components in good condition, whether you drive a BYD, Avatar, Zeekar, Rox, or any other EV."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Car Engine Cooling System Repair Services"
  items={[
    {
      title: "Coolant Leak Detection",
      description:
        "We identify and repair leaks in your EV’s cooling system to prevent overheating and maintain optimal engine performance in Dubai’s heat.",
    },
    {
      title: "Cooling Fan Replacement",
      description:
        "Faulty fans can lead to motor overheating. We replace or repair cooling fans to ensure consistent airflow and temperature control.",
    },
    {
      title: "Coolant Pump Repair",
      description:
        "A failing pump disrupts coolant flow. We repair or replace pumps to keep your EV’s engine running at safe temperatures.",
    },
    {
      title: "Thermal Sensor Calibration",
      description:
        "Inaccurate sensors can cause cooling issues. We inspect and recalibrate thermal sensors for precise temperature monitoring.",
    },
    {
      title: "Coolant Flush and Refill",
      description:
        "Old coolant reduces efficiency. We flush the system and refill with high-quality coolant to protect your EV’s engine and battery.",
    },
    {
      title: "Full Cooling System Inspection",
      description:
        "We check pipes, fans, pumps, and sensors to spot issues early, ensuring your EV’s cooling system keeps the engine safe and efficient.",
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
      question: "How often should I have my EV’s cooling system inspected?",
      answer:
        "We recommend following your manufacturer’s guidelines and having an inspection at least once a year. High-mileage or demanding driving conditions in places like Dubai may warrant more frequent checks.",
    },
    {
      question: "What are the signs that my EV’s cooling system needs servicing?",
      answer:
        "Look for overheating warnings, reduced performance, leaks, or strange noises. If you spot any issues, our top EV garage in Dubai and Abu Dhabi is here to help.",
    },
    {
      question:
        "Is EV cooling system maintenance different from traditional combustion engine vehicles?",
      answer:
        "Yes. EVs use specialized coolants and electrically driven components, requiring technicians who understand EV-specific systems—like our certified experts at EVS UAE.",
    },
    {
      question: "How long does an EV cooling system repair usually take?",
      answer:
        "Most repairs can be completed within a few hours, depending on part availability and issue complexity. Our goal is always a quick turnaround.",
    },
    {
      question:
        "Does repairing the EV cooling system affect the vehicle warranty?",
      answer:
        "No, we strictly follow manufacturer standards and use approved parts, ensuring your warranty coverage remains fully intact and protected.",
    },
    {
      question:
        "What EV brands do you specialize in for cooling system repairs?",
      answer:
        "We service a wide range of EV brands, including BYD, Avatar, Zeekar, Rox, and more. Our extensive experience ensures brand-specific expertise.",
    },
    {
      question:
        "Are EV cooling systems more reliable than traditional systems?",
      answer:
        "Generally, yes. EV cooling systems have fewer moving parts and are very efficient, but regular maintenance is essential to ensure reliability.",
    },
    {
      question:
        "Do you offer cooling system upgrades for performance EVs?",
      answer:
        "Absolutely. If you’re looking to enhance performance or modify your EV’s cooling capabilities, we can recommend and install upgrades tailored to your needs.",
    },
    {
      question:
        "Do you serve EV owners from Abu Dhabi or surrounding areas?",
      answer:
        "Yes. We welcome EV owners from across the UAE. For those searching “EV cooling repair near me” in Abu Dhabi, we can arrange transportation, mobile services, or direct you to our top EV workshop in Dubai.",
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
