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
    EV Tire Alignment and Axle Work in Dubai | Smooth Handling and Extended Tire Life
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers tire alignment and axle work for electric vehicles. Improve handling, tire lifespan, and energy efficiency with precision adjustments."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV tire alignment Dubai, electric car axle repair, EV wheel balancing, EV suspension tuning UAE, tire wear correction EV"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical/tire-alignment-axle-work"
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
    href="https://evsuae.com/services/mechanical/tire-alignment-axle-work"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/tire-alignment-axle-work"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Tire Alignment and Axle Work in Dubai | Smooth Handling and Extended Tire Life"
  />
  <meta
    property="og:description"
    content="EVS Dubai offers tire alignment and axle work for electric vehicles. Improve handling, tire lifespan, and energy efficiency with precision adjustments."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical/tire-alignment-axle-work"
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
    content="EV Tire Alignment and Axle Work in Dubai | Smooth Handling and Extended Tire Life"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai offers tire alignment and axle work for electric vehicles. Improve handling, tire lifespan, and energy efficiency with precision adjustments."
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
        name: "Tire Alignment & Axle Work for Electric Vehicles",
        description:
          "EVS UAE offers precise tire alignment and axle servicing for electric vehicles. Our technicians ensure correct wheel positioning, axle integrity, and smooth ride quality for safety and efficiency.",
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
        url: "https://evsuae.com/services/mechanical/tire-alignment-axle-work",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Tire Alignment and Axle Services for Electric Vehicles"
  description="At EVS, we provide accurate tire alignment and axle servicing designed specifically for EVs."
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
  badgeText="EV mechanical Services"
  title="About the Service"
  description={`Electric vehicles are heavier than traditional cars due to battery packs, which puts extra pressure on tires and suspension components. At <strong>EVS</strong>, we provide accurate tire alignment and axle servicing designed specifically for EVs.
  <br />Whether you’re noticing uneven tire wear or changes in steering response, our technicians use precision equipment to restore optimal geometry and drive stability.`}
/>


<ServiceBenefits
  title="Benefits of Tire Alignment and Axle Work"
  items={[
    {
      title: "Improved Tire Longevity",
      description:
        "Proper alignment reduces uneven tread wear, saving you from premature replacements.",
    },
    {
      title: "Enhanced Driving Stability",
      description:
        "We fine-tune angles and alignment specs to provide balanced, responsive handling.",
    },
    {
      title: "Axle and Suspension Inspection",
      description:
        "Detects early signs of imbalance, misalignment, or structural stress.",
    },
    {
      title: "Smoother Ride Quality",
      description:
        "Eliminates pulling, vibration, or off-center steering often caused by misaligned wheels.",
    },
    {
      title: "Reduced Rolling Resistance",
      description:
        "Well-aligned wheels help improve energy efficiency and battery range.",
    },
    {
      title: "EV-Specific Adjustments",
      description:
        "We account for your vehicle’s unique weight distribution and regenerative braking system.",
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
      question: "How do I know if my EV needs wheel alignment?",
      answer:
        "If your car pulls to one side, the steering wheel feels off-center, or you notice uneven tire wear, it’s time for a check.",
    },
    {
      question: "How often should I schedule tire alignment?",
      answer:
        "We recommend alignment checks every 10,000 to 15,000 km, or sooner after hitting a pothole or curb.",
    },
    {
      question: "What does axle work include?",
      answer:
        "Axle servicing includes inspections, adjustments, and replacement of worn or bent components that affect drive performance and safety.",
    },
    {
      question: "Is this different from standard alignment services?",
      answer:
        "Yes. EVs have different weight distribution and regenerative systems, so we use EV-specific alignment settings and diagnostic tools.",
    },
    {
      question: "How long does the alignment and axle service take?",
      answer:
        "Most services are completed in a few hours, depending on the condition of the tires and axle system.",
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
