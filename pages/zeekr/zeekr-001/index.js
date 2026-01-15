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
    Zeekr 001 Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Get expert service for Zeekr 001 electric vehicles in Dubai at EVS UAE. Our experienced EV technicians provide advanced diagnostics, reliable repairs, and routine maintenance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Zeekr 001 service Dubai, Zeekr 001 maintenance UAE, electric vehicle repair Dubai, Zeekr diagnostics UAE, expert Zeekr 001 technicians, EVS Zeekr 001 support"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/zeekr/zeekr-001" />

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
    href="https://evsuae.com/zeekr/zeekr-001"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/zeekr/zeekr-001"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/zeekr/zeekr-001"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Zeekr 001 Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    property="og:description"
    content="Get expert service for Zeekr 001 electric vehicles in Dubai at EVS UAE. Our experienced EV technicians provide advanced diagnostics and reliable maintenance."
  />
  <meta property="og:url" content="https://evsuae.com/zeekr/zeekr-001" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Zeekr 001 Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Professional diagnostics, repairs, and maintenance for Zeekr 001 electric vehicles in Dubai."
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
        name: "ZEEKR 001 Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert repair and maintenance services for the ZEEKR 001 electric vehicle in Dubai. Our certified technicians handle battery diagnostics, software updates, and complete servicing to ensure optimal performance.",
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
        url: "https://evsuae.com/zeekr/zeekr-001",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="ZEEKR 001"
  titleSuffix="Maintenance and Warranty Support Services at EVS"
  description="At EVS, we provide comprehensive maintenance and specialized care for your ZEEKR 001, ensuring it operates at its best. Our team understands the advanced technology and features of this model and is equipped to handle both routine maintenance and ZEEKR 001 warranty-related services."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
  ctaAriaLabel="Book service"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=1220 1220w
  "
  imageAlt="About ZEEKR 001 image"
  heading="About ZEEKR 001"
  description="The Zeekr 001 is a premium electric shooting brake that blends high performance with cutting-edge technology. With a dual-motor AWD system delivering 544 hp, it accelerates from 0 to 100 km/h in just 3.8 seconds. Its 100 kWh battery offers up to 620 km of WLTP range and supports fast charging from 10% to 80% in approximately 30 minutes using 200 kW DC charging. Inside, the Zeekr 001 features a 15.4-inch central touchscreen, an 8.9-inch digital instrument cluster, and a 5.7-inch rear climate control display, all powered by Qualcomm Snapdragon 8155 chips. At EVS UAE, our technicians are trained to work with the advanced systems of the ZEEKR 001. We provide support for its high-voltage architecture and intelligent features, helping to ensure reliable performance through manufacturer-aligned maintenance practices."
/>


<CarServices
  heading="Zeekr 001 Repair & Maintenance Services"
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
      question: "What are the most common repair needs for the Zeekr 001?",
      answer:
        "The Zeekr 001 may require updates to its autonomous systems, battery recalibration, and suspension repairs due to its high-performance features.",
    },
    {
      question:
        "Can you repair the advanced driver-assist systems on the Zeekr 001?",
      answer:
        "Yes, our technicians can repair and recalibrate advanced driver-assistance systems (ADAS) on Zeekr 001 vehicles.",
    },
    {
      question:
        "How do you handle battery health checks for the Zeekr 001?",
      answer:
        "We use advanced diagnostic equipment to assess battery condition, including charge cycles, thermal management, and cell integrity.",
    },
    {
      question:
        "Do you offer regular service plans for Zeekr 001 owners?",
      answer:
        "Yes, we offer customized service plans for Zeekr 001 owners that include regular inspections, updates, and priority support.",
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
