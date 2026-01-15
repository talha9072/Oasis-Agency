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
  <title>Ceramic Coating in Dubai | Expert Car Detailing Service</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Tired of repainting & swirl marks? Our premium detailing & ceramic coating in Dubai offers ultimate protection & deep shine. Call us today!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/detailing-ceramic-coating"
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
    href="https://evsuae.com/detailing-ceramic-coating"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/detailing-ceramic-coating"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/detailing-ceramic-coating"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Ceramic Coating in Dubai | Expert Car Detailing Service"
  />
  <meta
    property="og:description"
    content="Tired of repainting & swirl marks? Our premium detailing & ceramic coating in Dubai offers ultimate protection & deep shine. Call us today!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/detailing-ceramic-coating/"
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
    content="Ceramic Coating in Dubai | Expert Car Detailing Service"
  />
  <meta
    name="twitter:description"
    content="Tired of repainting & swirl marks? Our premium detailing & ceramic coating in Dubai offers ultimate protection & deep shine. Call us today!"
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
        name: "Detailing & Ceramic Coating",
        description:
          "EVS UAE offers premium detailing and ceramic coating services for electric vehicles in Dubai. Our treatments protect your EV’s paint, enhance gloss, and provide long-lasting resistance against dirt, UV rays, and environmental wear.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/detailing-ceramic-coating",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>




<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Ultimate Electric Vehicle Detailing & Ceramic Coating in Dubai"
  description="With our cutting-edge ceramic coatings, we at EVS UAE do more than just detail your electric cars, we transform them. For a sleek, high-tech look, we protect & improve BYD, Avatar, Zeekar, and Rox models in Dubai & Abu Dhabi."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Detailing Ceramic Coating Services"
  items={[
    {
      title: "Ceramic Coating Application",
      description:
        "We apply premium ceramic coating to your EV, creating a protective layer that repels water, dirt, and UV rays for a long-lasting shine.",
    },
    {
      title: "Exterior Deep Cleaning",
      description:
        "Our detailing process removes dirt, grime, and contaminants from your EV’s surface, preparing it for a flawless ceramic coating finish.",
    },
    {
      title: "Scratch and Swirl Mark Removal",
      description:
        "Light scratches or swirl marks? We polish your EV’s surface to restore a smooth, glossy finish before applying the ceramic coating.",
    },
    {
      title: "Hydrophobic Surface Protection",
      description:
        "Our ceramic coating creates a hydrophobic layer that causes water to bead off easily, keeping your EV cleaner for longer in Dubai’s dusty climate.",
    },
    {
      title: "Interior Detailing",
      description:
        "We thoroughly clean and protect your EV’s interior surfaces, including seats and dashboards, for a fresh, like-new cabin experience.",
    },
    {
      title: "Post-Coating Maintenance Guide",
      description:
        "We provide expert care tips to help you maintain your ceramic coating, ensuring long-lasting protection and a showroom-quality finish.",
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
      question:
        "What is a ceramic coating and how does it protect my EV’s paint?",
      answer:
        "A ceramic coating is a liquid polymer applied to your EV’s exterior, forming a durable, hydrophobic layer that protects against UV rays, contaminants, and light scratches.",
    },
    {
      question: "How long does a ceramic coating last on an EV?",
      answer:
        "High-quality ceramic coatings can last several years when properly maintained, providing long-term protection and preserving your EV’s appearance.",
    },
    {
      question:
        "Is ceramic coating different from traditional waxing or sealants?",
      answer:
        "Yes. Ceramic coatings bond semi-permanently with the paint, offering superior durability, chemical resistance, and gloss compared to waxes or sealants.",
    },
    {
      question:
        "Can ceramic coating be applied over existing paint protection film (PPF)?",
      answer:
        "Yes. Ceramic coatings work perfectly over PPF, enhancing protection while adding gloss and easier maintenance.",
    },
    {
      question: "How long does the detailing and coating process take?",
      answer:
        "Most detailing and ceramic coating services are completed within a few days, depending on the vehicle’s condition and the selected package.",
    },
    {
      question: "Does ceramic coating require special maintenance?",
      answer:
        "Minimal maintenance is required. Gentle washing and periodic inspections help maximize coating lifespan and performance.",
    },
    {
      question: "Will ceramic coating help preserve EV resale value?",
      answer:
        "Yes. A ceramic-coated EV typically retains higher resale value due to better paint condition and overall appearance.",
    },
    {
      question: "Is ceramic coating safe for all EV brands and models?",
      answer:
        "Absolutely. Our specialists work on all EV brands and models, including BYD, Avatar, Zeekar, Rox, and more.",
    },
    {
      question:
        "Do you serve EV customers from Abu Dhabi or other Emirates?",
      answer:
        "Yes. We welcome customers from Dubai, Abu Dhabi, and across the UAE, making premium EV detailing accessible everywhere.",
    },
    {
      question: "What are the benefits of ceramic coating?",
      answer:
        "Ceramic coatings provide a glossy, hydrophobic surface that repels water, dirt, and contaminants, keeping your EV cleaner and protected year-round.",
    },
    {
      question: "Is ceramic coating UV resistant?",
      answer:
        "Yes. Ceramic coatings block harmful UV rays, preventing paint fading and oxidation, and keeping your EV looking newer for longer.",
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
