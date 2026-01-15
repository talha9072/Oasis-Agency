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
    BYD Seal Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Trust EVS UAE for expert service of BYD Seal electric vehicles in Dubai. We provide expert diagnostics, maintenance, and repair to keep your EV in peak condition."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD Seal service Dubai, BYD Seal EV maintenance UAE, electric vehicle repair Dubai, BYD Seal diagnostics, expert BYD technicians UAE, EVS BYD Seal support, BYD service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd/byd-seal"
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
    href="https://evsuae.com/byd/byd-seal"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd/byd-seal"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd/byd-seal"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Seal Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Trust EVS UAE for expert service of BYD Seal electric vehicles in Dubai. We provide expert diagnostics, maintenance, and repair to keep your EV in peak condition."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd/byd-seal"
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
    content="BYD Seal Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Trust EVS UAE for expert service of BYD Seal electric vehicles in Dubai. We provide expert diagnostics, maintenance, and repair to keep your EV in peak condition."
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
        name: "BYD Seal Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert repair and maintenance services for the BYD Seal electric vehicle in Dubai. Our team offers diagnostics, battery health checks, system updates, and complete servicing to ensure optimal performance and safety.",
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
        url: "https://evsuae.com/byd/byd-seal",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="BYD Seal"
  titleSuffix="Maintenance and Warranty Support at EVS"
  description="The BYD Seal is an advanced electric vehicle that requires professional care to maintain its performance. At EVS, we provide comprehensive service for the BYD Seal, offering everything from regular maintenance to specialized warranty repairs. Our team is fully equipped to handle your vehicle’s unique needs, ensuring it remains in excellent condition. Whether you are in Dubai, Abu Dhabi, or Ajman, EVS has you covered."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=1220 1220w
  "
  imageAlt="About BYD Seal"
  heading="About BYD Seal"
  description="The BYD Seal is a high-performance electric sedan that combines sleek design with cutting-edge technology. Available in the UAE starting from AED 164,900, it offers variants with up to 523 hp and a 0–100 km/h acceleration time of just 3.8 seconds. Equipped with an 82.5 kWh Blade Battery, the Seal delivers a WLTP range of up to 570 km. Inside, the cabin features a 15.6-inch rotating touchscreen, premium materials, and advanced driver-assistance systems. At EVS UAE, we specialize in servicing advanced EVs like the BYD Seal, ensuring its high-voltage systems and intelligent features are expertly maintained."
/>

<CarServices
  heading="BYD Seal Repair & Maintenance Services"
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
      question: "What EV maintenance services do you offer for the BYD Seal?",
      answer:
        "We offer full diagnostics, motor and battery system servicing, cooling system checks, and software updates for the BYD Seal.",
      links: [
        {
          text: "motor",
          href: "../services/mechanical",
        },
        {
          text: "battery system",
          href: "../services/battery-electrical",
        },
        {
          text: "software updates",
          href: "../services/programming",
        },
      ],
      defaultOpen: true,
    },
    {
      question: "Are BYD Seal infotainment system repairs available?",
      answer:
        "Yes, we repair and update the Seal’s infotainment system, addressing issues like touchscreen failure, software bugs, and audio faults.",
    },
    {
      question:
        "Do you provide advanced diagnostics for BYD Seal battery performance?",
      answer:
        "Yes, we perform advanced battery diagnostics including capacity tests, voltage balancing, and thermal management checks.",
    },
    {
      question:
        "How do you handle regenerative braking system issues in the BYD Seal?",
      answer:
        "We inspect and calibrate the regenerative braking system to ensure smooth operation and optimal energy recovery.",
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
