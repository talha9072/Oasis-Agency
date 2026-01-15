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
    BYD Han Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional service for BYD Han electric vehicles in Dubai. Trust our expert technicians for diagnostics, repairs, and complete EV maintenance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD Han service Dubai, BYD Han maintenance UAE, electric vehicle repair Dubai, BYD Han diagnostics, expert BYD technicians UAE, EVS BYD Han support, BYD Han service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd/byd-han"
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
    href="https://evsuae.com/byd/byd-han"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd/byd-han"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd/byd-han"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Han Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides professional service for BYD Han electric vehicles in Dubai. Trust our expert technicians for diagnostics, repairs, and complete EV maintenance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd/byd-han"
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
    content="BYD Han Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides professional service for BYD Han electric vehicles in Dubai. Trust our expert technicians for diagnostics, repairs, and complete EV maintenance."
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
        name: "BYD Han Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers comprehensive diagnostics, maintenance, and repair services for the BYD Han electric vehicle in Dubai. Our technicians specialize in battery performance, EV systems, and detailed servicing to keep your BYD Han running efficiently.",
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
        url: "https://evsuae.com/byd/byd-han",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="BYD HAN"
  titleSuffix="Maintenance and Warranty Support at EVS"
  description="The BYD HAN is a luxury electric vehicle that combines power, performance, and cutting-edge technology. At EVS, we specialize in delivering top-quality maintenance and service for the BYD HAN. Our team is fully equipped to handle both regular servicing and warranty-related needs. Whether you’re looking for a routine check or need a repair covered under your BYD HAN warranty, EVS is your trusted partner in the UAE, serving Dubai, Abu Dhabi, and Ajman."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=1220 1220w
  "
  imageAlt="About BYD image"
  heading="About BYD Han"
  description="The BYD Han is a premium electric sedan that blends luxury, performance, and cutting-edge technology. Equipped with a dual-motor all-wheel-drive system delivering 509 horsepower and 700 Nm of torque, it accelerates from 0 to 100 km/h in just 3.9 seconds. Its 85.4 kWh Blade Battery offers a range of up to 521 km and supports fast charging from 30% to 80% in approximately 25 minutes. Inside, the Han features a 15.6-inch rotating touchscreen, a 12.3-inch digital instrument cluster, and a luxurious interior with Nappa leather seats and a panoramic sunroof. At EVS UAE, we specialize in servicing advanced EVs like the BYD Han, ensuring its high-voltage systems and intelligent features are expertly maintained."
/>

<CarServices
  heading="BYD Han Repair & Maintenance Services"
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
      question: "What are the most common service needs for the BYD Han?",
      answer:
        "The BYD Han often requires battery balancing, software tuning, and repairs to its regenerative braking and suspension systems.",
      defaultOpen: true,
    },
    {
      question: "Do you use original parts for BYD Han repairs?",
      answer:
        "Yes, we source OEM (Original Equipment Manufacturer) parts to ensure high-quality, long-lasting repairs for your BYD Han.",
    },
    {
      question: "Can you fix BYD Han charging system problems?",
      answer:
        "Yes, we troubleshoot and repair both AC and DC fast-charging issues in BYD Han vehicles, including port and controller problems.",
    },
    {
      question: "Is your service center Expert for BYD Han maintenance?",
      answer:
        "While not an official BYD service center, our technicians are trained and equipped to handle all BYD EVs, including the premium Han series, using manufacturer-recommended tools.",
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
