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
    EV Charging Port Conversion in Dubai | CCS, Type 2 and Regional Compatibility
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers charging port conversions for electric vehicles. Convert to CCS, Type 2, or other standards to match UAE charging infrastructure."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV charging port conversion Dubai, CCS conversion EV, Type 2 adapter UAE, electric vehicle plug upgrade, EV port compatibility service"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/charging-port-conversions"
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
    href="https://evsuae.com/services/battery-electrical/charging-port-conversions"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/charging-port-conversions"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services/battery-electrical/charging-port-conversions"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Charging Port Conversion in Dubai | CCS, Type 2 and Regional Compatibility"
  />
  <meta
    property="og:description"
    content="EVS Dubai offers charging port conversions for electric vehicles. Convert to CCS, Type 2, or other standards to match UAE charging infrastructure."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/charging-port-conversions"
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
    content="EV Charging Port Conversion in Dubai | CCS, Type 2 and Regional Compatibility"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai offers charging port conversions for electric vehicles. Convert to CCS, Type 2, or other standards to match UAE charging infrastructure."
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
        name: "Charging Port Conversions for Electric Vehicles",
        description:
          "EVS UAE provides charging port conversion services for electric vehicles. We adapt your EV’s charging interface to support different plug types and ensure fast, compatible charging solutions.",
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
        url: "https://evsuae.com/services/battery-electrical/charging-port-conversions",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Charging Port Conversions for Electric Vehicles"
  description="Adapt Your EV to UAE Standards with EVS’s Expert Charging Port Conversion"
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
  description={`Not all electric vehicles arrive in the UAE with the correct charging port standard. If your EV has an incompatible connector, charging can become inconvenient or impossible. At <strong>EVS</strong>, we provide professional charging port conversion services that allow your vehicle to connect with the UAE’s public and private charging stations. Whether you need CCS2, Type 2, or another format, we retrofit and reconfigure your port to ensure safe, certified compatibility with local infrastructure.`}
/>


<ServiceBenefits
  title="Benefits of Charging Port Conversion"
  items={[
    {
      title: "Regional Compatibility",
      description:
        "Convert to the most common UAE plug types, including CCS2 and Type 2.",
    },
    {
      title: "Full Integration",
      description:
        "We ensure communication between the new port and your EV’s charging system is seamless and stable.",
    },
    {
      title: "Fast and Reliable Charging",
      description:
        "With the correct port installed, you gain access to the full network of local charging stations.",
    },
    {
      title: "Retrofitting for Imports",
      description:
        "Ideal for imported EVs that don’t match UAE infrastructure standards.",
    },
    {
      title: "Clean, Safe Installation",
      description:
        "Ports are converted with proper shielding and weatherproofing.",
    },
    {
      title: "Support for Most Brands",
      description:
        "We handle conversions for Tesla (non-Middle East variants), BYD, NIO, and other global EV models.",
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
      question: "Which charging ports are most common in the UAE?",
      answer:
        "CCS2 and Type 2 connectors are the most widely used standards across public and residential chargers in the region.",
    },
    {
      question: "Can I convert my port without affecting vehicle warranties?",
      answer:
        "Conversions are done using safe, non-invasive methods, but we recommend checking your warranty terms before proceeding.",
    },
    {
      question: "How long does a port conversion take?",
      answer:
        "Most conversions are completed in half a day, depending on your vehicle’s electrical configuration and original port type.",
    },
    {
      question: "Will the new port work with fast chargers?",
      answer:
        "Yes. If your EV supports DC fast charging, the new port will be compatible with relevant stations after conversion.",
    },
    {
      question: "Is conversion better than using an adapter?",
     answer:
        "Yes. Adapters can be bulky and unreliable, while a direct conversion offers better safety, performance, and long-term usability.",
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
