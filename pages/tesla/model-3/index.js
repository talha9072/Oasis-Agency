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
    Tesla Model 3 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers professional service for Tesla Model 3 in Dubai. Get expert diagnostics, maintenance, and repairs from experienced EV specialists."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Tesla Model 3 service Dubai, Model 3 maintenance UAE, Tesla EV repair Dubai, Model 3 diagnostics UAE, expert Tesla technicians, EVS Model 3 support, Tesla service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/tesla/model-3"
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
    href="https://evsuae.com/tesla/model-3"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/tesla/model-3"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla/model-3"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Tesla Model 3 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers professional service for Tesla Model 3 in Dubai. Get expert diagnostics, maintenance, and repairs from experienced EV specialists."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/tesla/model-3"
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
    content="Tesla Model 3 Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers professional service for Tesla Model 3 in Dubai. Get expert diagnostics, maintenance, and repairs from experienced EV specialists."
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
        name: "Tesla Model 3 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides complete diagnostics, repair, and maintenance services for the Tesla Model 3 in Dubai. From battery health checks and software updates to brake service and component repairs, we ensure your Model 3 stays road-ready and high-performing.",
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
        url: "https://evsuae.com/tesla/model-3",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Tesla Model 3"
  titleSuffix="Repair, Maintenance & Warranty Services UAE"
  description="Your Tesla Model 3 is a high-performance electric car, but like any vehicle, it needs expert care. From battery health checks to software updates and body repairs, EVS UAE ensures your Tesla Model 3 runs at its best."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Tesla image"
  heading="About Tesla Model 3"
  description="The Tesla Model 3 is one of the most popular EVs, offering impressive range, instant acceleration, and a tech-filled interior. With up to 363 miles per charge, it delivers outstanding performance, while the Tesla Model 3 interior features a minimalist design, premium seats, and a touchscreen."
/>


<CarServices
  heading="Tesla Model 3 Repair & Maintenance Services"
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
      question: "What services do you provide for the Tesla Model 3?",
      answer:
        "We offer complete Model 3 support including diagnostics, battery care, software repairs, brake and suspension service, and system recalibration.",
    },
    {
      question: "Can you diagnose range loss or battery issues in the Model 3?",
      answer:
        "Yes, we conduct deep battery health diagnostics to detect range loss, imbalance, and performance degradation.",
    },
    {
      question: "Do you provide autopilot and camera system repairs?",
      answer:
        "Yes, we service Tesla’s autopilot hardware, including recalibration of cameras and sensors for safe autonomous driving.",
    },
    {
      question: "Can you perform a tire and brake service for the Model 3?",
      answer:
        "Absolutely. We offer tire rotation, replacement, brake pad inspection, and system cleaning to ensure optimal safety and performance.",
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
