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
    EV Damage Estimation in Dubai | Insurance-Ready Post-Accident Reports
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Get a professional damage estimate for your EV in Dubai. EVS provides detailed post-accident inspections and insurance-ready repair assessments."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV damage estimate Dubai, post-accident EV inspection, electric vehicle insurance report, EV body damage assessment, EV repair cost evaluation UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/insurance/damage-estimation"
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
    href="https://evsuae.com/services/insurance/damage-estimation"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/insurance/damage-estimation"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Damage Estimation in Dubai | Insurance-Ready Post-Accident Reports"
  />
  <meta
    property="og:description"
    content="Get a professional damage estimate for your EV in Dubai. EVS provides detailed post-accident inspections and insurance-ready repair assessments."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/insurance/damage-estimation"
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
    content="EV Damage Estimation in Dubai | Insurance-Ready Post-Accident Reports"
  />
  <meta
    name="twitter:description"
    content="Get a professional damage estimate for your EV in Dubai. EVS provides detailed post-accident inspections and insurance-ready repair assessments."
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
        name: "Damage Estimation for Insurance Claims",
        description:
          "EVS UAE offers professional damage estimation services to support insurance claims for electric vehicles. Our specialists assess structural and mechanical damage with precision for accurate reporting.",
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
        url: "https://evsuae.com/services/insurance/damage-estimation",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="EV Damage Estimation Services in Dubai"
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
  description={`Accurate damage estimation is the first step to a successful insurance claim and repair process. At <strong>EVS</strong>, we provide detailed post-accident inspections for electric vehicles, evaluating both visible and structural damage. Our experienced technicians generate professional, insurance-ready estimates that reflect the full scope of repair work—helping you avoid underclaims and delays in approval.`}
/>


<ServiceBenefits
  title="Benefits of EV Damage Estimation"
  items={[
    {
      title: "Insurance-Ready Reports",
      description:
        "Estimates are formatted and detailed to meet insurer documentation standards.",
    },
    {
      title: "Structural & Surface Assessment",
      description:
        "We inspect frames, body panels, undercarriage, and trim for visible and hidden damage.",
    },
    {
      title: "Faster Claim Approvals",
      description:
        "Detailed estimates reduce back-and-forth with insurance providers.",
    },
    {
      title: "Avoid Underclaims",
      description:
        "Ensure all damage is documented for full repair coverage.",
    },
    {
      title: "Accurate Cost Forecasting",
      description:
        "Get clear expectations on time, cost, and parts required.",
    },
    {
      title: "EV-Specific Evaluation",
      description:
        "Focused inspections that account for battery placement, sensors, and lightweight EV materials.",
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
      question: "How soon after an accident should I get a damage estimate?",
      answer:
        "As soon as possible. A prompt estimate helps speed up the claim process and prevents further deterioration of damage.",
    },
    {
      question: "Do you provide estimates accepted by major insurers?",
      answer:
        "Yes. Our reports are formatted to meet UAE insurance standards and are accepted by most providers.",
    },
    {
      question: "Can you detect internal or hidden damage?",
      answer:
        "Yes. We use visual and diagnostic inspections to assess potential internal damage that may not be immediately visible.",
    },
    {
      question: "Will I receive a copy of the estimate?",
      answer:
        "Absolutely. We provide a digital and/or printed copy of the full report for you and your insurer.",
    },
    {
      question: "Is the damage estimation service only for EVs?",
      answer:
        "Yes. Our process is tailored to the unique structure and components of electric vehicles.",
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
