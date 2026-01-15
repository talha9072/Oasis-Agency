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
    Tesla Model X Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional service for Tesla Model X in Dubai. Our expert technicians deliver expert diagnostics, routine maintenance, and high-quality repairs."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Tesla Model X service Dubai, Model X maintenance UAE, Tesla EV repair Dubai, Model X diagnostics UAE, expert Tesla technicians, EVS Model X support, Tesla service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/tesla/model-x"
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
    href="https://evsuae.com/tesla/model-x"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/tesla/model-x"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla/model-x"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Tesla Model X Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides professional service for Tesla Model X in Dubai. Our expert technicians deliver expert diagnostics, routine maintenance, and high-quality repairs."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/tesla/model-x"
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
    content="Tesla Model X Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides professional service for Tesla Model X in Dubai. Our expert technicians deliver expert diagnostics, routine maintenance, and high-quality repairs."
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
        name: "Tesla Model X Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers professional diagnostics, maintenance, and repair services for the Tesla Model X in Dubai. Our technicians specialize in battery servicing, software updates, door mechanism repair, and full vehicle inspection to keep your Model X in top condition.",
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
        url: "https://evsuae.com/tesla/model-x",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Tesla Model X"
  titleSuffix="Repair, Maintenance & Warranty Services UAE"
  description="Your Tesla Model X is a high-performance SUV packed with advanced technology. But even the best models need expert care. Whether it’s battery diagnostics, software updates, or accident repairs, EVS UAE offers specialized services to keep your car in perfect shape."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Tesla Model X image"
  heading="About Tesla Model X"
  description="The Tesla Model X is one of the most advanced electric SUVs, known for its Falcon Wing doors, powerful dual-motor AWD, and high-tech interior. With an estimated range of up to 530 km per charge, it delivers smooth acceleration and a futuristic driving experience. Due to its advanced systems, the Model X requires specialized maintenance. At EVS UAE, we provide expert repair and maintenance services including battery diagnostics, software updates, and bodywork—following procedures aligned with Tesla’s service standards to support performance and safety."
/>


<CarServices
  heading="Tesla Model X Repair & Maintenance Services"
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
      question: "What are the most common repair needs for the Tesla Model X?",
      answer:
        "The Tesla Model X commonly requires repairs related to Falcon Wing doors, suspension components, and updates or fixes for its autopilot and infotainment systems.",
    },
    {
      question: "Do you offer diagnostics for Tesla Model X battery issues?",
      answer:
        "Yes, we provide full battery diagnostics for the Tesla Model X, including range analysis, charging behavior evaluation, and detailed battery cell health reports.",
    },
    {
      question: "Can you fix Tesla Model X air suspension problems?",
      answer:
        "Absolutely. Our technicians are trained to diagnose, service, and replace Tesla Model X air suspension systems to ensure a smooth and safe driving experience.",
    },
    {
      question: "Do you perform Tesla software updates in-house?",
      answer:
        "Yes, we offer Tesla software diagnostics and can assist with firmware troubleshooting, calibration, and updates when required.",
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
