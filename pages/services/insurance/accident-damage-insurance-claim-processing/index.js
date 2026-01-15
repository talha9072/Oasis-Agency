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
    EV Accident Insurance Claim Support in Dubai | End-to-End Processing & Coordination
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Let EVS handle your EV insurance claim in Dubai. We manage all paperwork, insurer coordination, and follow-ups for smooth, stress-free claim approvals."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV insurance claim Dubai, electric vehicle accident claim, EV insurance support UAE, claim processing service, EV repair coordination"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/insurance/accident-damage-insurance-claim-processing"
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
    href="https://evsuae.com/services/insurance/accident-damage-insurance-claim-processing"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/insurance/accident-damage-insurance-claim-processing"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Accident Insurance Claim Support in Dubai | End-to-End Processing & Coordination"
  />
  <meta
    property="og:description"
    content="Let EVS handle your EV insurance claim in Dubai. We manage all paperwork, insurer coordination, and follow-ups for smooth, stress-free claim approvals."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/insurance/accident-damage-insurance-claim-processing"
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
    content="EV Accident Insurance Claim Support in Dubai | End-to-End Processing & Coordination"
  />
  <meta
    name="twitter:description"
    content="Let EVS handle your EV insurance claim in Dubai. We manage all paperwork, insurer coordination, and follow-ups for smooth, stress-free claim approvals."
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
        name: "Accident Damage Insurance Claim Processing",
        description:
          "EVS UAE provides end-to-end accident damage insurance claim processing for electric vehicles. We handle documentation, assessments, and direct coordination with insurers to simplify the claims process.",
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
        url: "https://evsuae.com/services/insurance/accident-damage-insurance-claim-processing",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Accident Damage Insurance Claim Processing for EVs"
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
  description={`After an accident, managing the insurance claim process can be time-consuming and confusing—especially for EV owners dealing with complex repairs. At <strong>EVS</strong>, we take over the entire insurance coordination process on your behalf. From compiling damage documentation to submitting claim files, communicating with your insurance provider, and following up on approvals, we ensure that your claim progresses quickly and accurately—so you can focus on getting back on the road.`}
/>


<ServiceBenefits
  title="Benefits of EV Insurance Claim Processing"
  items={[
    {
      title: "Complete Paperwork Handling",
      description:
        "We prepare and submit all required documentation to your insurer.",
    },
    {
      title: "Damage Photo & Report Submission",
      description:
        "We compile insurer-ready visual and written evidence.",
    },
    {
      title: "Direct Insurer Communication",
      description:
        "We handle back-and-forth with your provider to minimize delays.",
    },
    {
      title: "Claim Status Tracking",
      description:
        "You’ll receive regular updates so you know exactly where your claim stands.",
    },
    {
      title: "Accurate Documentation",
      description:
        "Prevents claim rejection or underpayment due to missing or incorrect info.",
    },
    {
      title: "Faster Repair Authorization",
      description:
        "With everything organized, approvals typically arrive quicker—accelerating repair timelines.",
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
      question: "Can I bring my vehicle in before contacting my insurer?",
      answer:
        "Yes. Bring your EV to us first and we’ll guide you through every step—including what your insurer needs to process your claim.",
    },
    {
      question: "Do you charge extra for insurance claim processing?",
      answer:
        "Our claim coordination is included as part of our service when repairs are completed at EVS.",
    },
    {
      question: "Will you keep me updated on my claim’s progress?",
      answer:
        "Yes. We provide ongoing updates and contact you immediately once your claim is approved or if additional steps are needed.",
    },
    {
      question: "What if my insurer needs extra documents?",
      answer:
        "No problem—we respond directly and promptly to any insurer requests for clarifications or additions.",
    },
    {
      question: "Does this service work with all EV brands?",
      answer:
        "Yes. Our process is compatible with Tesla, BYD, Zeekr, and other electric vehicle makes commonly serviced in Dubai.",
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
