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
    EV Direct Billing Support in Dubai | Insurer Coordination for Approved Repairs
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS provides direct billing coordination with your insurer after claim approval. We handle communication and payment processing to simplify EV repairs in Dubai."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV direct billing Dubai, electric vehicle insurance coordination, insurer repair billing, EV insurance repair process UAE, EV insurance payment support"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/insurance/direct-billing"
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
    href="https://evsuae.com/services/insurance/direct-billing"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/insurance/direct-billing"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Direct Billing Support in Dubai | Insurer Coordination for Approved Repairs"
  />
  <meta
    property="og:description"
    content="EVS provides direct billing coordination with your insurer after claim approval. We handle communication and payment processing to simplify EV repairs in Dubai."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/insurance/direct-billing"
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
    content="EV Direct Billing Support in Dubai | Insurer Coordination for Approved Repairs"
  />
  <meta
    name="twitter:description"
    content="EVS provides direct billing coordination with your insurer after claim approval. We handle communication and payment processing to simplify EV repairs in Dubai."
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
  <link rel="manifest" href="https://evsuae.com/site.webmanifest" />

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
        name: "Direct Billing for EV Insurance Repairs",
        description:
          "EVS UAE facilitates direct billing with insurance providers for electric vehicle repairs. We streamline approvals, reduce paperwork, and ensure a faster repair process for insured customers.",
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
        url: "https://evsuae.com/services/insurance/direct-billing",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Direct Billing for EV Insurance Repairs in Dubai"
  description="Adapt Your Imported Vehicle to Local Standards & Unlock Hidden Features"
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
  badgeText="EV Insurance Services"
  title="About the Service"
  description={`After your insurance claim is approved, the next step is coordinating repair costs. At <strong>EVS</strong>, we offer direct billing support by working closely with your insurance provider to manage payment and invoicing for approved repair work. This helps minimize delays, reduces paperwork, and keeps the repair process efficient—so you can stay focused on your vehicle, not the billing.`}
/>


<ServiceBenefits
  title="Benefits of Direct Billing"
  items={[
    {
      title: "Simplified Repair Process",
      description:
        "We handle billing coordination so your repairs can move forward without unnecessary admin.",
    },
    {
      title: "Insurer Communication",
      description:
        "Our team liaises with your provider to confirm approval terms and manage payment logistics.",
    },
    {
      title: "Time-Saving Coordination",
      description:
        "No need to chase approvals or submit extra paperwork—our team does it for you.",
    },
    {
      title: "Transparent Cost Alignment",
      description:
        "Repair charges follow pre-approved insurance estimates, ensuring clarity.",
    },
    {
      title: "UAE Insurer Network",
      description:
        "We work with most major insurance companies across Dubai and the UAE.",
    },
    {
      title: "Customer Support Throughout",
      description:
        "We keep you informed of all approvals, billing steps, and repair timelines.",
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
      question: "What is EV direct billing?",
      answer:
        "It means EVS manages billing directly with your insurer after claim approval, helping you avoid extra administrative steps.",
    },
    {
      question: "Do you work with all UAE insurance providers?",
      answer:
        "We work with most major insurers and will confirm eligibility during the claim process.",
    },
    {
      question: "Will I still see the full breakdown of costs?",
      answer:
        "Yes. You’ll receive a detailed summary of what was approved and what is being billed through your insurer.",
    },
    {
      question: "What if part of the repair isn’t covered?",
      answer:
        "We’ll notify you in advance of any items not included in the insurer’s approval, so there are no unexpected charges.",
    },
    {
      question: "Do I have to submit anything for billing coordination?",
      answer:
        "Once the claim is approved, we’ll handle the rest—no additional documentation is usually required beyond the insurer’s confirmation.",
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
