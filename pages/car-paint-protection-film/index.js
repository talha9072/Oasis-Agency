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
  <title>Paint Protection Film Dubai | Keep Your Car Looking New</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Say goodbye to chips and discoloration with our paint protection film in Dubai. Enhance your car’s durability and shine – get a quote now!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/car-paint-protection-film"
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
    content="Paint Protection Film Dubai | Keep Your Car Looking New"
  />
  <meta
    property="og:description"
    content="Say goodbye to chips and discoloration with our paint protection film in Dubai. Enhance your car’s durability and shine – get a quote now!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/car-paint-protection-film/"
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
    content="Paint Protection Film Dubai | Keep Your Car Looking New"
  />
  <meta
    name="twitter:description"
    content="Say goodbye to chips and discoloration with our paint protection film in Dubai. Enhance your car’s durability and shine – get a quote now!"
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
        name: "Car Paint Protection Film",
        description:
          "EVS UAE offers premium paint protection film (PPF) services for electric vehicles in Dubai. Our PPF solutions safeguard your EV’s exterior from scratches, chips, and environmental damage while preserving its factory finish.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/car-paint-protection-film",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>




<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Preserve Your EV’s Shine with Professional PPF Services in Dubai"
  description="Use the superior paint protection film services from EVS UAE to maintain the immaculate appearance of your EV. For top EV brands like BYD, Avatar, Zeekar, and Rox, we specialize in flawless PPF applications that keep your car appearing brand new."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Car Paint Protection Film Services"
  items={[
    {
      title: "Custom PPF Installation",
      description:
        "We apply high-quality paint protection film tailored to your EV, shielding its surface from scratches, chips, and UV damage.",
    },
    {
      title: "Self-Healing Film Technology",
      description:
        "Minor scratches on the film? Our PPF features self-healing properties, keeping your EV’s finish flawless in Dubai’s harsh conditions.",
    },
    {
      title: "Full Body or Partial Coverage",
      description:
        "Choose full-body protection or focus on high-risk areas like bumpers and hoods. We ensure seamless application for maximum coverage.",
    },
    {
      title: "UV and Stain Resistance",
      description:
        "Our PPF blocks harmful UV rays and resists stains, preserving your EV’s paint color and gloss for years.",
    },
    {
      title: "Professional Film Removal",
      description:
        "Need to update or replace your PPF? We remove old film without damaging your EV’s paint, ensuring a clean surface for new applications.",
    },
    {
      title: "Post-Installation Care Advice",
      description:
        "We provide tips to maintain your PPF, ensuring long-lasting protection and a showroom-quality finish for your electric vehicle.",
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
        "How often should I have my EV’s paint protection film inspected or maintained?",
      answer:
        "Inspect your PPF every 6–12 months, particularly in Dubai and Abu Dhabi’s climate, to ensure durability and extend its lifespan effectively.",
    },
    {
      question:
        "What signs indicate that my EV’s paint protection film needs replacing or touching up?",
      answer:
        "Look for discoloration, peeling edges, or diminished self-healing. If you notice these, contact EVS UAE for professional touch-ups or PPF reapplication services.",
    },
    {
      question:
        "Is PPF application different for EVs compared to traditional vehicles?",
      answer:
        "Yes. EVs have unique panels, sensors, and finishes. Our EV-trained specialists ensure a perfect, customized application for BYD, Avatar, Zeekar, Rox, and more.",
    },
    {
      question:
        "How long does the paint protection film installation process take?",
      answer:
        "Usually a few hours to a day, depending on complexity and coverage, allowing for quick turnaround on your protected EV.",
    },
    {
      question:
        "Does applying paint protection film affect the vehicle’s warranty?",
      answer:
        "No, applying paint protection film (PPF) does not affect your vehicle’s warranty when installed by certified professionals like EVS UAE, as we adhere to manufacturer guidelines and use approved materials.",
    },
    {
      question:
        "What film brands do you specialize in for EV paint protection?",
      answer:
        "To keep your EV looking its best, we utilize premium, long-lasting films with a variety of finishes, including gloss and matte.",
    },
    {
      question:
        "Does the unique finish of my EV (matte, gloss, metallic) impact the PPF process?",
      answer:
        "No, your EV’s finish—matte, gloss, or metallic—does not affect the PPF process. At EVS UAE, we use specialized techniques to ensure a seamless application while preserving the original look.",
    },
    {
      question:
        "Are EV paint protection films more expensive than standard films used on traditional cars?",
      answer:
        "EV paint protection films are typically not more expensive than those used on traditional cars. However, the cost may vary based on the vehicle's design and the level of coverage required.",
    },
    {
      question:
        "Do you serve customers needing paint protection film services from Abu Dhabi?",
      answer:
        "Yes. EVS UAE offers premium PPF solutions in both Dubai and Abu Dhabi for any EV, including BYD, ensuring expert service wherever you are.",
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
