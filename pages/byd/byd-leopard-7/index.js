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
    BYD Leopard 7 Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional BYD Leopard 7 electric vehicle service in Dubai. Expert technicians for diagnostics, battery care, repairs, and complete EV maintenance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD Leopard 7 service Dubai, BYD Leopard 7 maintenance UAE, electric vehicle repair Dubai, BYD Leopard 7 diagnostics, EV battery service UAE, BYD repair Dubai, EVS UAE service center"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd/byd-leopard-7"
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
    href="https://evsuae.com/byd/byd-leopard-7"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd/byd-leopard-7"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd/byd-leopard-7"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Leopard 7 Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides professional BYD Leopard 7 electric vehicle service in Dubai. Expert technicians for diagnostics, battery care, repairs, and complete EV maintenance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd/byd-leopard-7"
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
    content="BYD Leopard 7 Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides professional BYD Leopard 7 electric vehicle service in Dubai. Expert technicians for diagnostics, battery care, repairs, and complete EV maintenance."
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
        name: "BYD Leopard 7 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers expert maintenance, diagnostics, and repair for the BYD Leopard 7 electric vehicle in Dubai. Specialized in EV battery performance, system calibration, and comprehensive servicing.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: [
          { "@type": "Place", name: "Dubai, UAE" },
          { "@type": "Place", name: "Abu Dhabi, UAE" },
          { "@type": "Place", name: "Sharjah, UAE" },
          { "@type": "Place", name: "Ajman, UAE" },
          { "@type": "Place", name: "Al Ain, UAE" },
          { "@type": "Place", name: "Riyadh, Saudi Arabia" },
        ],
        url: "https://evsuae.com/byd/byd-leopard-7",
        datePublished: "2025-11-07",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Leopard-7.png&q=70&w=1920"
  titlePrefix=""
  highlight="BYD Leopard 7"
  titleSuffix="Maintenance and Warranty Support at EVS"
  description="EVS offers expert maintenance and repair services for the BYD Leopard 7, ensuring performance and warranty compliance are maintained."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/leopard-7-1.png&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/leopard-7-1.png&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/leopard-7-1.png&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/leopard-7-1.png&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/leopard-7-1.png&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/leopard-7-1.png&q=70&w=1220 1220w
  "
  imageAlt="About BYD Leopard 7"
  heading="About BYD Leopard 7"
  description="The BYD Leopard 7 is a dynamic all-electric SUV that combines futuristic styling with advanced EV technology. Powered by a robust dual-motor all-wheel-drive system, it delivers up to 530 horsepower and achieves 0 to 100 km/h acceleration in just under 4 seconds. The vehicle is equipped with BYD’s advanced Blade Battery, offering a range of approximately 600 km on a full charge. Inside, the Leopard 7 features a spacious cabin with a panoramic sunroof, an AI-powered infotainment system, and a large touchscreen interface designed for intuitive control. At EVS, we understand the high-voltage systems, battery management, and intelligent features of the Leopard 7, providing specialized care to keep it performing at its peak."
/>

<CarServices
  heading="BYD Leopard 7 Repair & Maintenance Services"
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
        "What type of maintenance does the BYD Leopard 7 require?",
      answer:
        "The BYD Leopard 7 typically requires high-voltage system checks, software updates, battery health diagnostics, and brake system inspections to ensure long-term performance.",
      defaultOpen: true,
    },
    {
      question:
        "Can EVS service the dual-motor AWD system of the Leopard 7?",
      answer:
        "Yes, our expert technicians are trained to maintain and repair advanced EV drivetrain systems, including the Leopard 7’s dual-motor all-wheel-drive configuration.",
    },
    {
      question:
        "Do you handle charging or range-related issues in the Leopard 7?",
      answer:
        "Absolutely — we perform full diagnostics and repairs for charging system malfunctions, battery performance concerns, and range efficiency issues in the BYD Leopard 7.",
    },
    {
      question:
        "Is your service center equipped to support the Blade Battery system?",
      answer:
        "Yes, our facility is fully equipped to service BYD’s Blade Battery technology. We follow manufacturer-recommended safety protocols and use specialized tools to maintain battery efficiency and longevity.",
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
