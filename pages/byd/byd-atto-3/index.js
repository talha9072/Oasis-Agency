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
    BYD Atto 3 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers expert service for BYD Atto 3 electric vehicles in Dubai. From diagnostics to full maintenance and repair, trust our expert EV technicians."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD Atto 3 service Dubai, BYD Atto 3 maintenance UAE, electric vehicle repair Dubai, BYD diagnostics UAE, expert BYD Atto 3 technicians, EVS BYD Atto 3 support, BYD service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd/byd-atto-3"
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

  {/* Language & hreflang */}
  <meta httpEquiv="Content-Language" content="en" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/byd/byd-atto-3"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd/byd-atto-3"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd/byd-atto-3"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Atto 3 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers expert service for BYD Atto 3 electric vehicles in Dubai. From diagnostics to full maintenance and repair, trust our expert EV technicians."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd/byd-atto-3"
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
    content="BYD Atto 3 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers expert service for BYD Atto 3 electric vehicles in Dubai. From diagnostics to full maintenance and repair, trust our expert EV technicians."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data – Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "BYD Atto 3 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers specialized diagnostics, maintenance, and repair services for the BYD Atto 3 electric vehicle in Dubai. From battery testing to full system servicing, our technicians ensure your BYD Atto 3 stays safe, efficient, and road-ready.",
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
        url: "https://evsuae.com/byd/byd-atto-3",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="BYD ATTO 3"
  titleSuffix="Maintenance and Warranty Support at EVS"
  description="The BYD ATTO 3 is a highly advanced electric vehicle designed for performance and innovation. At EVS, we provide expert maintenance and service for the BYD ATTO 3, ensuring your vehicle remains in top condition. Our team is fully equipped to handle both routine maintenance and BYD ATTO 3 warranty-related needs. Whether you’re in Dubai, Abu Dhabi, or Ajman, EVS is your trusted service provider."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=1220 1220w
  "
  imageAlt="About BYD Atto 3 image"
  heading="About BYD Atto 3"
  description="The BYD Atto 3 is a dynamic electric SUV that combines sporty performance with intelligent design. Powered by a 150 kW (201 hp) electric motor and BYD’s proprietary 60.48 kWh Blade Battery, it delivers up to 420 km of WLTP range and accelerates from 0 to 100 km/h in just 7.3 seconds. Built on the advanced e-Platform 3.0, the Atto 3 offers enhanced efficiency and safety features. Inside, the cabin boasts a unique gym-inspired design with a rotating 12.8-inch touchscreen, ergonomic seating, and ample cargo space. At EVS UAE, we specialize in maintaining and servicing advanced EVs like the Atto 3, ensuring its high-voltage systems and intelligent features are expertly cared for."
/>

<CarServices
  heading="BYD Atto 3 Repair & Maintenance Services"
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
  title="Frequently Asked Questions"
  faqs={[
    {
      question: "What types of repairs do you perform on the BYD Atto 3?",
      answer:
        "We handle battery diagnostics, inverter repairs, charging system fixes, and general maintenance for BYD Atto 3 electric SUVs.",
      links: [
        {
          text: "View all services",
          href: "../services",
        },
      ],
      defaultOpen: true,
    },
    {
      question:
        "Do you provide BYD Atto 3 software updates at your service center?",
      answer:
        "Yes, we perform software and firmware updates for the BYD Atto 3 to enhance performance and ensure system reliability.",
      links: [
        {
          text: "software and firmware updates",
          href: "../services/programming",
        },
      ],
    },
    {
      question: "How often should I service my BYD Atto 3?",
      answer:
        "A full service is recommended every 15,000 km or annually. Regular inspections help maintain efficiency and prevent costly breakdowns.",
      cta: {
        text: "Book your service here",
        href: "https://evsuae.com/contact",
      },
    },
    {
      question: "Can you diagnose BYD Atto 3 battery range issues?",
      answer:
        "Absolutely. We offer in-depth diagnostics to detect range loss, cell degradation, or battery management system faults.",
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
