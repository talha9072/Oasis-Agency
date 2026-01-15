import Head from "next/head";
import FullHeroCars from "@/components/car-brands/FullHero.js";
import CarAbout from "@/components/car-brands/CarAbout.js";
import CarServices from "@/components/car-brands/CarServices.js";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CustomerReviewsSection from "@/components/common/Customer";
import LatestBlogsLoader from "@/components/car-brands/LatestBlogsLoader";
import StatsCounterSection from "@/components/common/StatsCounter";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
     
   <Head>
  {/* Title */}
  <title>
    Tesla Model S Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Trust EVS UAE for expert Tesla Model S service in Dubai. We offer expert diagnostics, regular maintenance, and reliable repairs from experienced EV technicians."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Tesla Model S service Dubai, Model S maintenance UAE, Tesla EV repair Dubai, Model S diagnostics UAE, expert Tesla technicians, EVS Model S support, Tesla service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/tesla/model-s"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/tesla/model-s"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/tesla/model-s"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla/model-s"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Tesla Model S Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Trust EVS UAE for expert Tesla Model S service in Dubai. We offer expert diagnostics, regular maintenance, and reliable repairs from experienced EV technicians."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/tesla/model-s"
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
    content="Tesla Model S Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Trust EVS UAE for expert Tesla Model S service in Dubai. We offer expert diagnostics, regular maintenance, and reliable repairs from experienced EV technicians."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Tesla Model S Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers specialized diagnostics, maintenance, and repair services for the Tesla Model S in Dubai. Our expert team handles battery servicing, software updates, brake repairs, and full system checks to ensure your Model S runs at peak performance.",
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
        url: "https://evsuae.com/tesla/model-s",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Tesla Model S"
  titleSuffix="Repair, Maintenance & Warranty Services UAE"
  description="Owning a Tesla Model S in Dubai means experiencing advanced technology and high performance. But even the best variants need expert maintenance. Whether it’s battery health, software updates, or repairs, EVS UAE provides dealership-quality service for your Tesla."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Tesla Model S image"
  heading="About Tesla Model S"
  description="The Tesla Model S 2025 is the perfect mix of power, range, and technology. With up to 410 miles per charge, insane acceleration (0-60 miles per hour in 1.99 seconds), and an advanced Tesla Model S interior, it’s built for performance and luxury. However, regular garages aren’t equipped to handle its complex battery system, self-driving features, and adaptive suspension. That’s why you need specialized Tesla experts who understand the technology behind your car. At EVS UAE, we provide maintenance and repair services for the Tesla Model S, helping to maintain its efficiency, performance, and reliability over time."
/>


<CarServices
  heading="Tesla Model S Repair & Maintenance Services"
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


<CarFaq
  heading="Frequently Asked Questions"
  faqs={[
    {
      question: "What are common issues with the Tesla Model S?",
      answer:
        "Model S vehicles often face touchscreen failures, door handle malfunctions, air suspension wear, and battery degradation.",
    },
    {
      question: "Can you upgrade Tesla Model S infotainment or MCU systems?",
      answer:
        "Yes, we provide upgrade services for Media Control Units (MCUs), touchscreen replacements, and infotainment system updates.",
    },
    {
      question: "Do you handle Model S drive unit and motor issues?",
      answer:
        "Yes, we diagnose and repair drive unit issues, including inverter malfunctions and motor noise or vibration.",
    },
    {
      question: "Is your service center capable of working on performance Model S variants?",
      answer:
        "Yes, we are fully equipped to service Model S Performance and Plaid variants, including drivetrain, suspension, and battery tuning.",
    },
  ]}
/>



{/* Branches Section with Tabs */}
      <BranchesSection />

      <StatsCounterSection />

          {/* Customer Reviews Section with Swiper Slider */}
      <CustomerReviewsSection />


<section className="pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0">
  <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px mb-4 text-center">
    Latest Blog Posts<span className="text-base-color">.</span>
  </h2>

  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center"
        ></div>

        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>
      </div>
    </div>
  </div>
</section>

 <LatestBlogsLoader />



      
      
          
          

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
