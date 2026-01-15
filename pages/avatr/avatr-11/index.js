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
    Avatr 11 Service in Dubai | Premium EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers expert service for the Avatr 11 electric vehicle in Dubai. Get expert diagnostics, repairs, and performance tuning from trusted EV specialists."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Avatr 11 service Dubai, Avatr 11 EV maintenance UAE, Avatr electric car repair, expert Avatr 11 technicians, EV diagnostics Dubai, EVS Avatr 11 service center"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/avatr/avatr-11"
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
    href="https://evsuae.com/avatr/avatr-11"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/avatr/avatr-11"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/avatr/avatr-11"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Avatr 11 Service in Dubai | Premium EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers expert service for the Avatr 11 electric vehicle in Dubai. Get expert diagnostics, repairs, and performance tuning from trusted EV specialists."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/avatr/avatr-11"
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
    content="Avatr 11 Service in Dubai | Premium EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers expert service for the Avatr 11 electric vehicle in Dubai. Get expert diagnostics, repairs, and performance tuning from trusted EV specialists."
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
        name: "AVATR 11 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers professional diagnostics, repair, and maintenance services for the AVATR 11 electric vehicle in Dubai. Our specialists handle everything from high-voltage systems and software updates to component replacements for optimal performance.",
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
        url: "https://evsuae.com/avatr/avatr-11",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Avatr 11"
  titleSuffix="Service & Maintenance at EVS"
  description="The Avatr 11 is an advanced electric vehicle designed for high performance and modern driving needs. At EVS, we provide maintenance and warranty-related support for the Avatr 11, covering everything from routine servicing to system-specific repairs. Our technicians assist Avatr 11 owners in Dubai, Abu Dhabi, and Ajman with care aligned to manufacturer standards to help maintain long-term efficiency and reliability."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=1220 1220w
  "
  imageAlt="About AVATR 11"
  heading="About AVATR 11"
  description="The Avatr 11 is a premium electric SUV built for performance, comfort, and innovation, featuring dual-motor all-wheel drive, a long-range battery from CATL, and advanced autonomous driving capabilities powered by Huawei technology. With its sleek design, panoramic digital cockpit, and smart cabin features, it delivers a futuristic driving experience. At EVS UAE, we provide specialized maintenance for the Avatr 11, ensuring its intelligent systems, high-voltage architecture, and precision electronics remain in optimal condition."
/>


<CarServices
  heading="AVATR 11 Repair & Maintenance Services"
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
        "What diagnostic tools do you use for Avatr 11 electric vehicles?",
      answer:
        "We use manufacturer-recommended diagnostic software and EV testing tools that are fully compatible with Avatr 11 models.",
      defaultOpen: true,
    },
    {
      question:
        "Are software and firmware updates available for the Avatr 11 at your service center?",
      answer:
        "Yes, we can perform both minor firmware patches and major software updates for Avatr 11 systems.",
      links: [
        {
          text: "firmware patches",
          href: "/services/programming",
        },
      ],
    },
    {
      question: "Can you fix charging port issues in Avatr 11 models?",
      answer:
        "Yes, we diagnose and repair faulty charging ports, damaged connectors, and communication errors between the charger and the vehicle.",
    },
    {
      question: "How do I know when my Avatr 11 needs a check-up?",
      answer:
        "Watch for dashboard alerts, reduced driving range, or performance drops. We also recommend a general inspection every 10,000–12,000 km.",
      cta: {
        text: "Book your check-up here",
        href: "/contact",
      },
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
