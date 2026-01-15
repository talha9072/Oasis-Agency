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
    XPENG G7 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides expert maintenance and repair services for XPENG G7 electric vehicles in Dubai. Certified EV technicians ensure reliable diagnostics and high-quality care."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="XPENG G7 service Dubai, XPENG G7 maintenance UAE, XPENG repair Dubai, XPENG diagnostics UAE, expert XPENG technicians, EVS XPENG G7 support"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/xpeng/xpeng-g7" />

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
    href="https://evsuae.com/xpeng/xpeng-g7"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/xpeng/xpeng-g7"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/xpeng/xpeng-g7"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="XPENG G7 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides expert maintenance and repair services for XPENG G7 electric vehicles in Dubai with certified EV technicians."
  />
  <meta property="og:url" content="https://evsuae.com/xpeng/xpeng-g7" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="XPENG G7 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Expert diagnostics, maintenance, and repair services for XPENG G7 electric vehicles in Dubai."
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
        name: "XPENG G7 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers diagnostics, maintenance, and repair services for the XPENG G7 electric vehicle in Dubai. Our certified technicians handle battery performance, software updates, and EV system maintenance for safe and efficient driving.",
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
        url: "https://evsuae.com/xpeng/xpeng-g7",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Xpeng G7"
  titleSuffix="Maintenance and EV System Care at EVS"
  description="The Xpeng G7 is a sleek electric crossover that blends performance with intelligent driving technology. At EVS, we provide expert maintenance and diagnostics for the G7 to ensure long-term reliability and full compliance with Xpeng’s warranty requirements."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1220 1220w
  "
  imageAlt="About Xpeng G7"
  heading="About Xpeng G7"
  description="The Xpeng G7 is a smart all-electric crossover designed for urban versatility and highway efficiency. Powered by a single or dual-motor setup, it delivers up to 470 horsepower and can accelerate from 0 to 100 km/h in under 4.5 seconds, depending on the variant. Its high-capacity battery supports fast charging and provides a range of over 600 km on a full charge. The G7’s cabin features a futuristic dashboard layout with a panoramic touchscreen interface, voice-controlled systems, and AI-based driver assistance. At EVS, we specialize in servicing vehicles like the Xpeng G7, using certified tools and expertise to maintain its electric drivetrain, battery health, and smart systems."
/>


<CarServices
  heading="Xpeng G7 Repair & Maintenance Services"
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
      question: "What kind of maintenance does the Xpeng G7 need?",
      answer:
        "The Xpeng G7 typically requires battery diagnostics, brake system checks, software updates, and high-voltage system inspections to keep its performance consistent and safe.",
    },
    {
      question: "Can EVS service the G7’s electric powertrain?",
      answer:
        "Yes, EVS technicians are fully trained to maintain both single- and dual-motor configurations of the Xpeng G7, ensuring reliable power delivery and long-term system durability.",
    },
    {
      question: "Do you fix charging or range issues in the Xpeng G7?",
      answer:
        "Absolutely. We perform complete diagnostics and repair services for charging issues, battery performance irregularities, and energy efficiency concerns in the Xpeng G7.",
    },
    {
      question: "Are you equipped to handle Xpeng’s smart driving technology?",
      answer:
        "Yes, our EVS team is highly experienced in maintaining the Xpeng G7’s smart driving systems, including driver-assist technologies, autonomous features, and its connected software interface.",
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
