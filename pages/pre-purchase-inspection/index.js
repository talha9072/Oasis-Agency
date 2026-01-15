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
  <title>EV Pre-Purchase Inspection in Dubai | Avoid Costly Repairs</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Worried about buying an EV in Dubai? Get expert EV pre-purchase inspection today to avoid hidden costs and ensure a smart investment. Schedule your inspection!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV pre-purchase inspection Dubai, electric car inspection before buying, used EV inspection service UAE, pre-purchase Tesla inspection Dubai, electric vehicle diagnostic check Dubai, expert EV inspection service Dubai, certified EV pre-purchase check UAE, what to check before buying a used EV, Tesla pre-buy inspection near me, EV battery and motor health check Dubai, electric vehicle condition report UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/pre-purchase-inspection"
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
    href="https://evsuae.com/pre-purchase-inspection"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/pre-purchase-inspection"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/pre-purchase-inspection"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Pre-Purchase Inspection in Dubai | Avoid Costly Repairs"
  />
  <meta
    property="og:description"
    content="Worried about buying an EV in Dubai? Get expert EV pre-purchase inspection today to avoid hidden costs and ensure a smart investment. Schedule your inspection!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/pre-purchase-inspection"
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
    content="EV Pre-Purchase Inspection in Dubai | Avoid Costly Repairs"
  />
  <meta
    name="twitter:description"
    content="Worried about buying an EV in Dubai? Get expert EV pre-purchase inspection today to avoid hidden costs and ensure a smart investment. Schedule your inspection!"
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
        name: "Pre-Purchase Inspection",
        description:
          "EVS UAE provides detailed pre-purchase inspection services for electric vehicles in Dubai. Our certified technicians assess battery health, software systems, and mechanical components to give you full confidence before you buy.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/pre-purchase-inspection",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>




<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Comprehensive EV Pre-Purchase Car Inspection in Dubai"
  description="Ensure confidence and peace of mind with our thorough EV pre-purchase inspections, tailored to provide a detailed assessment of any electric vehicle you’re considering."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Pre-Purchase Inspection Services"
  items={[
    {
      title: "Comprehensive Vehicle Inspection",
      description:
        "A detailed check of the vehicle’s interior, exterior, electrical systems, and mechanical components to ensure it meets quality standards.",
    },
    {
      title: "Battery Health Assessment",
      description:
        "Evaluates the electric vehicle’s battery condition, capacity, and performance to confirm its reliability.",
    },
    {
      title: "Diagnostic Scan",
      description:
        "Uses advanced tools to identify any hidden issues or error codes in the vehicle’s system.",
    },
    {
      title: "Test Drive Evaluation",
      description:
        "A thorough test drive to assess the vehicle’s handling, braking, and overall performance.",
    },
    {
      title: "Detailed Inspection Report",
      description:
        "Provides a comprehensive report with findings, photos, and recommendations for your decision-making.",
    },
    {
      title: "Peace of Mind",
      description:
        "Ensures confidence in your purchase by verifying the vehicle’s condition before you buy.",
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
      question: "What does a pre-purchase inspection include?",
      answer:
        "It includes a full vehicle check, battery assessment, diagnostic scan, test drive, and a detailed report.",
    },
    {
      question: "How long does the inspection take?",
      answer:
        "Typically, it takes about 1–2 hours, depending on the vehicle’s condition and complexity.",
    },
    {
      question: "Can I be present during the inspection?",
      answer:
        "Yes, you’re welcome to be present and discuss findings with our technicians.",
    },
    {
      question: "What if issues are found during the inspection?",
      answer:
        "We provide a detailed report with recommendations, so you can negotiate or decide on the purchase.",
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
