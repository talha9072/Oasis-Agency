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
  <title>Car Engine Refurbishment Dubai | Expert Repairs & Overhauls</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Tired of costly engine repairs? Choose Car Engine Refurbishment in Dubai for long-lasting, cost-effective solutions. Restore your car’s power—Contact us now!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/car-engine-refurbishment"
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
    content="Car Engine Refurbishment Dubai | Expert Repairs & Overhauls"
  />
  <meta
    property="og:description"
    content="Tired of costly engine repairs? Choose Car Engine Refurbishment in Dubai for long-lasting, cost-effective solutions. Restore your car’s power—Contact us now!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/car-engine-refurbishment/"
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
    content="Car Engine Refurbishment Dubai | Expert Repairs & Overhauls"
  />
  <meta
    name="twitter:description"
    content="Tired of costly engine repairs? Choose Car Engine Refurbishment in Dubai for long-lasting, cost-effective solutions. Restore your car’s power—Contact us now!"
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
        name: "Car Engine Refurbishment",
        description:
          "EVS UAE offers professional engine refurbishment services for electric vehicles in Dubai. Our specialists restore EV components such as cooling systems, powertrains, and drive units to factory-level performance and reliability.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/car-engine-refurbishment",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Car Engine Refurbishment EV Engine Repair in Dubai"
  description="Welcome to EVS UAE, where state-of-the-art electric car technology and unmatched knowledge meet. As the leading experts in EV engine repair in Dubai & Abu Dhabi, we can take your electric vehicle’s performance from ordinary to exceptional."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Car Engine Refurbishment Services"
  items={[
    {
      title: "Battery System Diagnostics",
      description:
        "Is your EV’s range dropping? We diagnose battery health and refurbish connections to restore optimal power delivery and efficiency.",
    },
    {
      title: "Electric Motor Cleaning",
      description:
        "Dust and debris can reduce motor performance. We clean and refurbish your EV’s motor to ensure smooth, quiet operation and longevity.",
    },
    {
      title: "Cooling System Overhaul",
      description:
        "Overheating can damage EV engines. We refurbish cooling pumps and fans to maintain ideal temperatures, even in Dubai’s heat.",
    },
    {
      title: "Inverter and Controller Repair",
      description:
        "Faulty inverters disrupt power flow. We refurbish and recalibrate controllers to ensure seamless energy transfer and performance.",
    },
    {
      title: "Wiring and Connector Refurbishment",
      description:
        "Corroded or loose wiring can cause power loss. We inspect and refurbish all connectors for reliable, safe operation.",
    },
    {
      title: "Full Engine System Inspection",
      description:
        "We assess your EV’s entire engine system, from motor to battery, to identify and refurbish components for peak performance.",
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
      question: "How often should I have my EV engine refurbished?",
      answer:
        "Maintenance is typically needed every 50,000 to 100,000 kilometers or according to manufacturer guidelines. Contact us to arrange a personalized service schedule tailored to your vehicle’s needs.",
    },
    {
      question: "What are the signs that my EV engine needs refurbishment?",
      answer:
        "Common indicators include reduced performance, unusual noises, active warning lights, and decreased efficiency, suggesting your vehicle needs professional maintenance.",
    },
    {
      question:
        "Is EV engine refurbishment different from traditional internal combustion engines?",
      answer:
        "Yes, it requires specialized processes for electric drivetrains and components unique to EVs, ensuring their optimal performance and long-term reliability.",
    },
    {
      question: "How long does an EV engine refurbishment take?",
      answer:
        "Most refurbishments are completed within one to two weeks, contingent upon the project’s scope and the complexity of the work involved.",
    },
    {
      question:
        "Does EV engine refurbishment affect the vehicle warranty?",
      answer:
        "No, our refurbishment strictly adheres to manufacturer warranty guidelines, ensuring your vehicle’s warranty coverage remains fully intact and protected.",
    },
    {
      question:
        "What EV brands do you specialize in for engine refurbishment?",
      answer:
        "We specialize in BYD, Avatar, Zeekar, Rox EVs, and other leading electric vehicle brands, providing expert maintenance and exceptional support.",
    },
    {
      question:
        "Are electric engines more reliable and require less refurbishment?",
      answer:
        "Electric engines are typically more dependable with fewer moving parts, yet they still need regular maintenance and occasional refurbishment for optimal functionality.",
    },
    {
      question:
        "Are EV engine refurbishment parts more expensive than traditional engine components?",
      answer:
        "EV parts may be specialized, but our use of high-quality, OEM-approved components ensures durability, performance, and exceptional value for your vehicle.",
    },
    {
      question:
        "Do you serve EV engine refurbishment customers from Abu Dhabi?",
      answer:
        "Absolutely! We proudly serve customers throughout Dubai and Abu Dhabi, providing top-quality services and ensuring reliable, convenient support right near you.",
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
