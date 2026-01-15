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
    EV Body Repair & Paint Services in Dubai | Restore Your Electric Vehicle – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers expert body repair and paint services for electric vehicles in Dubai. From dent removal to full-body paint jobs, restore your EV’s look with precision craftsmanship."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV body repair Dubai, electric vehicle paint service UAE, EV dent removal, EV scratch repair Dubai, full-body EV paint, auto body shop Dubai, EVS body and paint services"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/services/body-paint" />

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
    href="https://evsuae.com/services/body-paint"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Body Repair & Paint Services in Dubai | Restore Your Electric Vehicle – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS Dubai restores your EV’s appearance and structure with precision body repairs, full resprays, and camera/sensor realignment."
  />
  <meta property="og:url" content="https://evsuae.com/services/body-paint" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="EV Body Repair & Paint Services in Dubai | Restore Your Electric Vehicle – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="From structural repairs to detailing, EVS helps restore your EV’s look, safety systems, and driving confidence."
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
        name: "Body & Paint Services for Electric Vehicles",
        description:
          "EVS UAE delivers expert body and paint services for electric vehicles, including collision repair, full-body painting, sensor realignment, and cosmetic detailing. We restore EVs to factory condition using precision tools and skilled craftsmanship.",
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
            itemOffered: {
              "@type": "Service",
              name: "Collision Repair & Panel Replacement",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Structural Body Alignment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Scratch & Dent Repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Body Painting & Refinishing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sensor & Camera Realignment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior & Exterior Detailing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Windshield & Mirror Replacement",
            },
          },
        ],
        url: "https://evsuae.com/services/body-paint",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Body & Paint Services"
  description="Smart solutions to enhance and update your EV's capabilities."
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />

<ServiceListSection
  title="Body & Paint Services"
  services={[
    {
      title: "Collision Repair & Panel Replacement",
      description:
        "We handle everything from minor scrapes to severe collision damage. Our panel replacements are done using advanced equipment for accurate fit and finish—ensuring your EV retains its original shape and strength.",
      href: "body-paint/collision-repair-panel-replacement",
    },
    {
      title: "Structural Body Alignment",
      description:
        "Post-impact, even small misalignments can affect driveability. We use advanced alignment systems to restore the structural frame of your EV to manufacturer standards.",
      href: "body-paint/structural-body-alignment",
    },
    {
      title: "Scratch & Dent Repair",
      description:
        "Our scratch and dent solutions are designed for all levels of damage—restoring the body surface while preserving the original paint whenever possible.",
      href: "body-paint/scratch-dent-repair",
    },
    {
      title: "Full-Body Painting & Refinishing",
      description:
        "We offer high-quality, full-body and panel-specific repainting using manufacturer-matched colors and eco-friendly, long-lasting finishes.",
      href: "body-paint/full-body-painting-refinishing",
    },
    {
      title: "Sensor & Camera Realignment",
      description:
        "Following body repairs, we recalibrate parking sensors, reversing cameras, and driver-assist features to ensure accurate and safe functionality.",
      href: "body-paint/sensor-camera-realignment",
    },
    {
      title: "Interior & Exterior Detailing",
      description:
        "From deep-cleaning to polishing and ceramic coating, we provide full detailing services that restore and protect your EV inside and out.",
      href: "body-paint/detailing-interior-exterior",
    },
    {
      title: "Windshield & Mirror Replacement",
      description:
        "We replace cracked windshields and mirrors using components designed to integrate seamlessly with driver-assist and vision systems.",
      href: "body-paint/windshield-mirror-replacement",
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
      question: "Can you match my EV's original paint?",
      answer:
        "Yes. We use digital color scanning and original paint codes for perfect color accuracy across panels.",
    },
    {
      question: "Will structural work impact my EV’s sensors or electronics?",
      answer:
        "We take great care to avoid damage to integrated systems and recalibrate any affected components after the repair.",
    },
    {
      question: "How long does a full-body paint job take?",
      answer:
        "Typical full resprays take 2–4 days, depending on the level of preparation and number of panels involved.",
    },
    {
      question: "Do you offer paintless dent removal?",
      answer:
        "For minor dents where paint isn't damaged, yes—we use tools that reshape the metal without repainting.",
    },
    {
      question: "Is detailing included in repairs?",
      answer:
        "Interior and exterior detailing is available as an add-on or bundled depending on the repair package.",
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
