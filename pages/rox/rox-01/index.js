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
    ROX 01 Warranty Service in Dubai | Expert Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Get top-quality service for ROX 01 electric vehicles in Dubai at EVS UAE. We offer expert diagnostics, maintenance, and repairs by experienced EV technicians."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="ROX 01 service Dubai, ROX 01 EV maintenance UAE, electric vehicle repair Dubai, ROX 01 diagnostics UAE, expert ROX technicians, EVS ROX 01 support, ROX EV service center Dubai"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/rox/rox-01" />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/rox/rox-01" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/rox/rox-01" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/rox/rox-01"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="ROX 01 Warranty Service in Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Get top-quality service for ROX 01 electric vehicles in Dubai at EVS UAE. We offer expert diagnostics, maintenance, and repairs by experienced EV technicians."
  />
  <meta property="og:url" content="https://evsuae.com/rox/rox-01" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="ROX 01 Warranty Service in Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Get top-quality service for ROX 01 electric vehicles in Dubai at EVS UAE. We offer expert diagnostics, maintenance, and repairs by experienced EV technicians."
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
        name: "ROX 01 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides professional diagnostics, maintenance, and repair services for the ROX 01 electric vehicle in Dubai. Our team handles everything from battery analysis and system updates to mechanical servicing tailored for the ROX 01.",
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
        url: "https://evsuae.com/rox/rox-01",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=1920"
  titlePrefix="Expert Care for Your"
  highlight="ROX 01"
  titleSuffix="at EVS"
  description="The ROX 01 is an advanced electric vehicle built with high-performance features and modern design. EVS offers Rox 01 maintenance and warranty repair support across the UAE, including Dubai, Abu Dhabi, and Ajman. Our technicians are expertly trained to carry out servicing in line with Rox 01 warranty terms, helping to keep your electric vehicle running reliably."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=1220 1220w
  "
  imageAlt="About ROX image"
  heading="About ROX 01"
  description="The ROX 01 is a bold, all-terrain luxury SUV that blends rugged design with advanced hybrid-electric performance. Powered by a dual-motor AWD system and a 1.5L range-extending engine, it delivers 470 hp and 740 Nm of torque, accelerating from 0 to 100 km/h in just 5.5 seconds. Its 56 kWh battery enables a pure electric range of 235 km and a total hybrid range of up to 1,115 km. Inside, the ROX 01 offers a tech-rich cabin with seating for six or seven, a panoramic digital cockpit, and unique features like a tailgate kitchen with a rapid water heater and hot pot setup—perfect for outdoor adventures. At EVS UAE, we provide expert maintenance for vehicles like the ROX 01, ensuring its high-voltage systems, hybrid drivetrain, and smart features are expertly cared for. "
/>


<CarServices
  heading="ROX Repair & Maintenance Services"
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
      question:
        "What common issues occur with the ROX 01 electric system?",
      answer:
        "Common issues reported in the ROX 01 electric system include battery efficiency concerns, software irregularities, and sensor calibration faults. At EVS, our team is equipped to diagnose and address these Rox 01 electric vehicle problems using advanced diagnostic tools, helping to restore performance with minimal downtime.",
    },
    {
      question:
        "Do you provide battery diagnostics and replacement for the ROX 01?",
      answer:
        "Yes, we offer comprehensive battery diagnostics and replacement services specifically for ROX 01 electric vehicles, ensuring safety and optimal performance.",
    },
    {
      question:
        "How often should I service my ROX 01 electric vehicle?",
      answer:
        "It's recommended to service your ROX 01 every 12,000 km or once a year. Regular maintenance helps prevent long-term damage and ensures efficient operation.",
    },
    {
      question:
        "Can your garage handle software updates for the ROX 01?",
      answer:
        "Absolutely. We provide software and firmware updates for the ROX 01 to ensure your vehicle stays up-to-date with the latest manufacturer enhancements.",
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
