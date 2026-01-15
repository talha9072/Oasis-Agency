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
    EV Charging Port Upgrades in Dubai | Faster Charging and Next-Gen Compatibility
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai upgrades EV charging ports to support higher speeds, increased power capacity, and new charging technologies like DC fast charging."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV charging port upgrade Dubai, fast charging port installation, high-power EV connector, EV charging speed improvement, next-gen EV charging UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/battery-electrical/charging-port-upgrades"
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
    href="https://evsuae.com/services/battery-electrical/charging-port-upgrades"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/charging-port-upgrades"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Charging Port Upgrades in Dubai | Faster Charging and Next-Gen Compatibility"
  />
  <meta
    property="og:description"
    content="EVS Dubai upgrades EV charging ports to support higher speeds, increased power capacity, and new charging technologies like DC fast charging."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/battery-electrical/charging-port-upgrades"
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
    content="EV Charging Port Upgrades in Dubai | Faster Charging and Next-Gen Compatibility"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai upgrades EV charging ports to support higher speeds, increased power capacity, and new charging technologies like DC fast charging."
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
        name: "Charging Port Upgrades for Electric Vehicles",
        description:
          "EVS UAE offers charging port upgrade services for electric vehicles. We install high-performance, fast-charging compatible ports to support modern charging standards and improve efficiency.",
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
        url: "https://evsuae.com/services/battery-electrical/charging-port-upgrades",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Charging Port Upgrades for Electric Vehicles"
  description="Upgrade Your EV Charging with EVS for Speed & Compatibility"
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
  description={`Charging technologies are evolving quickly, and not every electric vehicle is equipped to keep up. At <strong>EVS</strong>, we offer charging port upgrade services that enhance your EV’s ability to charge faster, more efficiently, and with broader compatibility. Whether you're looking to support higher voltage systems, enable DC fast charging, or future-proof your vehicle, our upgrade solutions are designed for performance, safety, and seamless integration.`}
/>


<ServiceBenefits
  title="Benefits of Charging Port Upgrades"
  items={[
    {
      title: "Faster Charging Times",
      description:
        "Access higher amperage and voltage levels through upgraded hardware.",
    },
    {
      title: "DC Fast Charging Support",
      description:
        "Enable compatibility with rapid charging stations across the UAE.",
    },
    {
      title: "Improved Energy Throughput",
      description:
        "Enhance your EV’s ability to manage and distribute energy more efficiently.",
    },
    {
      title: "Modern Infrastructure Access",
      description:
        "Connect easily with newer public and commercial charging units.",
    },
    {
      title: "Reliable Installation",
      description:
        "Performed with proper shielding, cooling, and weatherproofing to meet safety standards.",
    },
    {
      title: "Custom Upgrades",
      description:
        "Tailored for specific EV models including Tesla, BYD, and imported EVs.",
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
      question: "Can any EV support a charging port upgrade?",
      answer:
        "Most EVs can be upgraded, but we first assess your vehicle’s onboard charging system to confirm compatibility with new hardware.",
    },
    {
      question: "Will this affect my car’s software or electronics?",
      answer:
        "No. Upgrades are performed using safe, non-invasive methods that preserve communication with your EV’s internal systems.",
    },
    {
      question: "How much faster can I charge after an upgrade?",
      answer:
        "This depends on your battery’s capabilities and the available charging infrastructure, but most drivers experience a noticeable reduction in charging time.",
    },
    {
      question: "Can you upgrade ports on imported EVs with outdated connectors?",
      answer:
        "Yes. We regularly upgrade charging ports on imported and international EVs to meet local standards and improve compatibility.",
    },
    {
      question: "How long does the upgrade process take?",
      answer:
        "The process typically takes between 2 to 4 hours, depending on your vehicle’s configuration and the complexity of the upgrade.",
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
