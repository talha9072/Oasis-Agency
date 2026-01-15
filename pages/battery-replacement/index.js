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
  <title>EV Battery Maintenance Dubai | Maximize Performance & Lifespan</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Tired of poor battery life? Our EV battery maintenance in Dubai guarantees a longer lifespan & better performance. Get your EV battery checked today!!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/battery-replacement"
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
    href="https://evsuae.com/battery-replacement"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/battery-replacement"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/battery-replacement"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Battery Maintenance Dubai | Maximize Performance & Lifespan"
  />
  <meta
    property="og:description"
    content="Tired of poor battery life? Our EV battery maintenance in Dubai guarantees a longer lifespan & better performance. Get your EV battery checked today!!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/battery-replacement"
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
    content="EV Battery Maintenance Dubai | Maximize Performance & Lifespan"
  />
  <meta
    name="twitter:description"
    content="Tired of poor battery life? Our EV battery maintenance in Dubai guarantees a longer lifespan & better performance. Get your EV battery checked today!!"
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
        name: "Battery Replacement",
        description:
          "EVS UAE provides high-voltage EV battery replacement services in Dubai. Our certified team ensures safe diagnostics, removal, and installation of electric vehicle batteries, restoring performance and range with precision.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/battery-replacement",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<ServiceMainHero
  title="Expert EV Battery Replacement Service for Your Electric Vehicle in Dubai"
  description="Reliable EV battery replacement services to keep your electric vehicle running at peak efficiency."
  buttonText="Book Service"
  buttonLink="/contact"
  textAlign="start"
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
/>


<LogoMarquee />




<ServiceBenefits
  title="Battery Replacement Services"
  items={[
    {
      title: "Battery Health Assessment",
      description:
        "Evaluates the current battery’s condition, capacity, and performance to determine replacement needs.",
    },
    {
      title: "Genuine Battery Replacement",
      description:
        "Installs high-quality, manufacturer-approved batteries to ensure optimal vehicle performance.",
    },
    {
      title: "Wiring & Connector Check",
      description:
        "Inspects and repairs wiring and connectors to ensure a seamless battery integration.",
    },
    {
      title: "Software Update",
      description:
        "Updates the vehicle’s software to align with the new battery for efficient operation.",
    },
    {
      title: "Performance Testing",
      description:
        "Conducts tests post-replacement to verify the battery’s efficiency and vehicle functionality.",
    },
    {
      title: "Disposal of Old Battery",
      description:
        "Safely handles and disposes of the old battery in an eco-friendly manner.",
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
      question: "How do I know if my EV battery needs replacement?",
      answer:
        "Signs include reduced range, slow charging, warning lights, or frequent power loss.",
    },
    {
      question: "How long does a battery replacement take?",
      answer:
        "Typically, it takes 3–5 hours, depending on the vehicle model and battery type.",
    },
    {
      question: "Is the replacement battery covered by a warranty?",
      answer:
        "Yes, genuine batteries come with a manufacturer warranty—details are provided at the time of service.",
    },
    {
      question: "What happens to my old battery?",
      answer:
        "We ensure proper disposal or recycling of the old battery in compliance with environmental regulations.",
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
