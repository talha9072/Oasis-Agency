import Head from "next/head";
import HeroSection from "@/components/services/HeroServices";
import ServiceListSection from "@/components/services/ServiceListSection";
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
    EV Insurance Services in Dubai | Electric Vehicle Claims & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE assists with insurance claims and repairs for electric vehicles in Dubai. From accident assessments to insurance-approved repairs, trust our expert support team."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV insurance services Dubai, electric vehicle accident repair UAE, EV insurance claims assistance, insured EV repair Dubai, EV body repair insurance, EVS insurance support UAE"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/services/insurance" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/services/insurance" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/services/insurance" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Insurance Services in Dubai | Electric Vehicle Claims & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE assists with insurance claims and repairs for electric vehicles in Dubai. From accident assessments to insurance-approved repairs, trust our expert support team."
  />
  <meta property="og:url" content="https://evsuae.com/services/insurance" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="EV Insurance Services in Dubai | Electric Vehicle Claims & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE assists with insurance claims and repairs for electric vehicles in Dubai. From accident assessments to insurance-approved repairs, trust our expert support team."
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
        name: "Insurance Services for Electric Vehicles",
        description:
          "EVS UAE offers end-to-end insurance support for electric vehicles including damage estimation, accident claim processing, and direct billing. We help EV owners navigate insurance procedures quickly and efficiently.",
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
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Damage Estimation" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accident Damage Insurance Claim Processing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Direct Billing" },
          },
        ],
        url: "https://evsuae.com/services/insurance",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Insurance Services"
  title="Insurance Services"
  description="Comprehensive insurance solutions designed specifically for electric vehicles."
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />

<ServiceListSection
  title="Insurance Services"
  services={[
    {
      title: "Damage Estimation",
      description:
        "We perform detailed post-accident inspections to assess structural and surface-level damage. Our team prepares professional insurance-ready estimates that reflect the full scope of required repairs—ensuring accurate claim submissions and faster approvals.",
      href: "insurance/damage-estimation",
    },
    {
      title: "Accident Damage Insurance Claim Processing",
      description:
        "EVS handles the entire claim process on your behalf. From compiling documentation to coordinating with your insurance provider and following up for approvals, we take the stress out of insurance paperwork and keep the process moving smoothly.",
      href: "insurance/accident-damage-insurance-claim-processing",
    },
    {
      title: "Direct Billing",
      description:
        "Once your claim is approved, we coordinate directly with your insurance provider to manage billing and payment for the approved repairs. This streamlines the process, reduces paperwork, and helps minimize delays—allowing you to focus on getting your EV back on the road without handling every financial detail yourself.",
      href: "insurance/direct-billing",
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
      question: "Can I come to EVS before starting my insurance claim?",
      answer:
        "Yes. Visit us right after the incident—we’ll inspect the vehicle, prepare the estimate, and guide you through starting the claim.",
    },
    {
      question: "Do you work with all insurance companies in the UAE?",
      answer:
        "We work with most major insurers and can provide the necessary documentation and estimates required for claim processing.",
    },
    {
      question: "What is direct billing and how does it help me?",
      answer:
        "Direct billing allows us to settle the approved repair costs directly with your insurance provider—reducing paperwork and avoiding upfront payments from you.",
    },
    {
      question: "How soon can my EV be repaired after claim approval?",
      answer:
        "Once the claim is approved, repairs typically begin immediately. We prioritize efficiency without compromising on quality.",
    },
    {
      question: "What if the insurer requests additional documentation?",
      answer:
        "Our team manages follow-ups and any extra paperwork required to ensure nothing delays your repair.",
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
