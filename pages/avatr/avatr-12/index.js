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
    Avatr 12 Service in Dubai | Expert EV Care & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Specialized service for Avatr 12 electric vehicles in Dubai. EVS UAE offers expert diagnostics, maintenance, and repairs to ensure peak performance and reliability."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Avatr 12 service Dubai, Avatr 12 EV maintenance UAE, electric car repair Dubai, Avatr 12 diagnostics, expert Avatr technicians, EVS Avatr 12 service center, Avatr 12 support UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/avatr/avatr-12"
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
    href="https://evsuae.com/avatr/avatr-12"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/avatr/avatr-12"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/avatr/avatr-12"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Avatr 12 Service in Dubai | Expert EV Care & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Specialized service for Avatr 12 electric vehicles in Dubai. EVS UAE offers expert diagnostics, maintenance, and repairs to ensure peak performance and reliability."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/avatr/avatr-12"
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
    content="Avatr 12 Service in Dubai | Expert EV Care & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Specialized service for Avatr 12 electric vehicles in Dubai. EVS UAE offers expert diagnostics, maintenance, and repairs to ensure peak performance and reliability."
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
        name: "AVATR 12 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert maintenance and repair services for the AVATR 12 electric vehicle in Dubai. Our team handles diagnostics, battery health checks, system updates, and component servicing to keep your AVATR 12 in top condition.",
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
        url: "https://evsuae.com/avatr/avatr-12",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Avatr 12"
  titleSuffix="Service & Maintenance at EVS"
  description="The Avatr 12 is a technologically advanced electric vehicle engineered for performance and innovation. At EVS, we provide maintenance and warranty-related services for the Avatr 12, including routine inspections and system-specific repairs. Our technicians support Avatr 12 owners across Dubai, Abu Dhabi, and Ajman with care aligned to manufacturer standards to ensure optimal performance and long-term reliability."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Avatr 12"
  heading="About AVATR 12"
  description="The Avatr 12 is a futuristic electric fastback that blends luxury with intelligence, featuring a sleek aerodynamic design, AI-powered driver assistance, and high-performance battery technology from CATL. With integrated LiDAR, facial recognition, and advanced infotainment systems, it’s more than just a car—it’s a smart mobility experience. At EVS UAE, we specialize in maintaining and repairing advanced EVs like the Avatr 12, ensuring its high-voltage systems, autonomous features, and performance components are expertly cared for."
/>


<CarServices
  heading="AVATR 12 Repair & Maintenance Services"
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
      question:
        "Do you provide comprehensive servicing for the Avatr 12’s electric drivetrain?",
      answer:
        "Yes, we offer full servicing for the Avatr 12 electric drivetrain, including motor, inverter, and battery system diagnostics.",
    },
    {
      question:
        "What’s included in a standard maintenance check for an Avatr 12?",
      answer:
        'A standard check includes brake inspection, battery analysis, cooling system service, and software calibration. <a href="https://evsuae.com/contact">Book a check-up here.</a>',
    },
    {
      question:
        "Can you repair Avatr 12 infotainment or sensor systems?",
      answer:
        "Yes, we specialize in diagnostics and repair of infotainment units and sensor-based safety systems for Avatr 12 vehicles.",
    },
    {
      question:
        "Are replacement parts for Avatr 12 readily available at your center?",
      answer:
        "We maintain a stock of high-demand Avatr 12 parts and can quickly order specialized components directly from trusted suppliers.",
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
