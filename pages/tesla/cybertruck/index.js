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
    Tesla Cybertruck Service in Dubai | Expert EV Maintenance – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers specialized service for the Tesla Cybertruck in Dubai. Get expert diagnostics, maintenance, and repairs from expert Tesla technicians."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Tesla Cybertruck service Dubai, Cybertruck maintenance UAE, Tesla EV repair Dubai, Cybertruck diagnostics UAE, expert Tesla technicians, EVS Cybertruck support, Tesla service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/tesla/cybertruck"
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
    href="https://evsuae.com/tesla/cybertruck"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/tesla/cybertruck"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla/cybertruck"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Tesla Cybertruck Service in Dubai | Expert EV Maintenance – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers specialized service for the Tesla Cybertruck in Dubai. Get expert diagnostics, maintenance, and repairs from expert Tesla technicians."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/tesla/cybertruck"
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
    content="Tesla Cybertruck Service in Dubai | Expert EV Maintenance – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers specialized service for the Tesla Cybertruck in Dubai. Get expert diagnostics, maintenance, and repairs from expert Tesla technicians."
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
        name: "Tesla Cybertruck Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert repair and maintenance services for the Tesla Cybertruck in Dubai. Our certified technicians handle diagnostics, battery health checks, system calibration, and component servicing to ensure your Cybertruck delivers optimal performance and durability.",
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
        url: "https://evsuae.com/tesla/cybertruck",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Tesla Cybertruck"
  titleSuffix="Repair, Maintenance & Warranty Services UAE"
  description="At EVS, we deliver reliable, warranty-friendly service for your Tesla. From routine maintenance to complex diagnostics, our expert team ensures your electric vehicle receives premium care and attention—tailored to your driving needs. EVS provides warranty servicing for Tesla electric vehicles in Dubai, delivering support that follows Tesla’s recommended procedures and service standards."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/cybertruck.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Tesla image"
  heading="About Tesla Cybertruck"
  description="The Tesla Cybertruck is designed for extreme durability with its strong stainless steel body, armor glass, and tri-motor AWD. It delivers up to 500+ miles of range, goes over tough terrain with ease, and presents a futuristic Tesla Cybertruck interior filled with smart features.

A truck this advanced needs specialized maintenance. You can’t trust a regular garage with its battery system, self-driving technology, or adaptive air suspension. That’s where EVS UAE comes in. We are trained to handle every aspect of Cybertruck maintenance and repair, ensuring your truck performs like new."
/>


<CarServices
  heading="Tesla Cybertruck Repair & Maintenance Services"
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
      question: "Are you equipped to service the Tesla Cybertruck’s unique features?",
      answer:
        "Yes, we service Cybertruck-specific systems like adaptive suspension, large-format battery packs, and rugged exterior body components.",
    },
    {
      question: "Can you repair Tesla Cybertruck off-road damage?",
      answer:
        "Absolutely. We handle underbody damage, suspension adjustments, and wheel alignments for off-road impacts on the Cybertruck.",
    },
    {
      question: "Is software calibration available for Tesla Cybertruck systems?",
      answer:
        "Yes, we provide updates and recalibration for Cybertruck software, including off-road mode and adaptive features.",
    },
    {
      question: "Do you offer battery performance checks for the Cybertruck?",
      answer:
        "Yes, we analyze full battery performance metrics, including discharge rates, charging speed, and thermal management.",
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
