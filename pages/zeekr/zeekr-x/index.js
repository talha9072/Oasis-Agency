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
    Zeekr X Service in Dubai | EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional maintenance and repair services for Zeekr X electric vehicles in Dubai. Expert technicians deliver accurate diagnostics and reliable EV care."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Zeekr X service Dubai, Zeekr X EV maintenance UAE, electric vehicle repair Dubai, Zeekr diagnostics UAE, expert Zeekr technicians, EVS Zeekr X support"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/zeekr/zeekr-x" />

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
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/zeekr/zeekr-x"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/zeekr/zeekr-x"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/zeekr/zeekr-x"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Zeekr X Service in Dubai | EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides professional maintenance and repair services for Zeekr X electric vehicles in Dubai. Expert technicians deliver accurate diagnostics and reliable EV care."
  />
  <meta property="og:url" content="https://evsuae.com/zeekr/zeekr-x" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Zeekr X Service in Dubai | EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides professional maintenance and repair services for Zeekr X electric vehicles in Dubai."
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
        name: "ZEEKR X Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers diagnostics, maintenance, and repair services for the ZEEKR X electric vehicle in Dubai. From performance checks to software updates and component replacements, our technicians ensure your ZEEKR X stays in top condition.",
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
        url: "https://evsuae.com/zeekr/zeekr-x",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="ZEEKR X"
  titleSuffix="– Premium Service and Warranty Support at EVS"
  description="The ZEEKR X is a modern electric vehicle built for performance, efficiency, and style. At EVS, our team provides full maintenance and servicing for the ZEEKR X, including support with warranty-covered work. We assist electric vehicle owners across Dubai, Abu Dhabi, and Ajman with diagnostics, repairs, and ongoing care designed to meet manufacturer guidelines."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1220 1220w
  "
  imageAlt="About ZEEKR X image"
  heading="About ZEEKR X"
  description="The Zeekr X is a compact luxury SUV that blends bold design with intelligent technology, featuring a sleek exterior, frameless mirrors, and a concealed charging port. Inside, it offers a microfibre headliner, two-tone reading lights, and a 14.6-inch touchscreen infotainment system with Apple CarPlay and Android Auto. Powered by a 66 kWh lithium-ion battery, it delivers up to 446 km of range and supports fast charging from 10% to 80% in under 30 minutes with 150 kW DC charging. At EVS UAE, we provide advanced maintenance and support for electric vehicles like the ZEEKR X. Our team handles high-voltage systems, performance components, and autonomous features using tools and processes aligned with manufacturer standards."
/>


<CarServices
  heading="Zeekr X Repair & Maintenance Services"
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
      question: "What maintenance services do you offer for the Zeekr X?",
      answer:
        "We provide full diagnostics, battery health checks, brake system inspections, software updates, and EV-specific maintenance for the Zeekr X.",
    },
    {
      question:
        "Is your garage equipped to handle Zeekr X electric motor repairs?",
      answer:
        "Yes, our garage is equipped with the latest diagnostic tools and trained professionals to handle complex electric motor repairs for Zeekr X vehicles.",
    },
    {
      question: "How long does a full diagnostic take for the Zeekr X?",
      answer:
        "A full diagnostic typically takes between 1–2 hours depending on the condition of your vehicle and the depth of testing required.",
    },
    {
      question: "Do you use OEM parts for Zeekr X repairs?",
      answer:
        "We use only original equipment manufacturer (OEM) parts for all Zeekr X repairs to ensure quality, safety, and compatibility.",
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
