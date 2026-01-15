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
    BYD Song Plus Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Professional BYD Song Plus service in Dubai by EVS UAE. Our expert EV technicians provide expert diagnostics, maintenance, and repair to keep your BYD performing at its best."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD Song Plus service Dubai, BYD Song Plus maintenance UAE, electric vehicle repair Dubai, BYD diagnostics UAE, expert BYD technicians, EVS BYD Song Plus support, BYD service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd/byd-song-plus"
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
    href="https://evsuae.com/byd/byd-song-plus"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd/byd-song-plus"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd/byd-song-plus"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Song Plus Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    property="og:description"
    content="Professional BYD Song Plus service in Dubai by EVS UAE. Our expert EV technicians provide expert diagnostics, maintenance, and repair to keep your BYD performing at its best."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd/byd-song-plus"
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
    content="BYD Song Plus Service in Dubai | Expert EV Repairs & Maintenance – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Professional BYD Song Plus service in Dubai by EVS UAE. Our expert EV technicians provide expert diagnostics, maintenance, and repair to keep your BYD performing at its best."
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
        name: "BYD Song Plus Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert repair and maintenance services for the BYD Song Plus electric vehicle in Dubai. Our team offers full diagnostics, battery checks, system updates, and performance servicing to keep your BYD Song Plus in top condition.",
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
        url: "https://evsuae.com/byd/byd-song-plus",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="BYD SONG PLUS"
  titleSuffix="Maintenance and Warranty Support at EVS"
  description="At EVS, we provide expert care for your BYD Song Plus, offering comprehensive maintenance and warranty-related repairs. Our team is equipped to handle all aspects of your vehicle’s needs. Whether you need routine service or warranty conditions for your BYD Song Plus, EVS provides maintenance and support services in the UAE to help keep your electric SUV performing reliably and in line with manufacturer standards."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>



<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70&w=1220 1220w
  "
  imageAlt="About BYD Song Plus"
  heading="About BYD Song Plus"
  description="The BYD Song Plus DM-i is a sophisticated plug-in hybrid SUV that seamlessly blends performance, efficiency, and advanced technology. Equipped with BYD's fifth-generation DM hybrid system, it combines a 1.5L engine with an electric motor to deliver a combined output of up to 160 kW, enabling acceleration from 0 to 100 km/h in as little as 5.9 seconds. The 18.3 kWh Blade Battery offers an electric-only range of up to 128 km, with a total driving range exceeding 1,000 km, making it ideal for both city commutes and long-distance journeys."
/>


<CarServices
  heading="BYD Song Plus Repair & Maintenance Services"
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
        "What are the typical issues with the BYD Song Plus EV system?",
      answer:
        "Common issues include software malfunctions, battery charge inconsistencies, and cooling system faults. We handle all of these efficiently.",
      defaultOpen: true,
    },
    {
      question:
        "Do you perform full-system diagnostics on BYD Song Plus models?",
      answer:
        "Yes, we run comprehensive diagnostics covering motor performance, battery health, onboard computer systems, and sensors.",
      links: [
        {
          text: "comprehensive diagnostics",
          href: "../services",
        },
      ],
    },
    {
      question:
        "How often should the BYD Song Plus be serviced?",
      answer:
        "Regular maintenance is advised every 12,000–15,000 km or annually to maintain peak performance and ensure warranty compliance.",
    },
    {
      question:
        "Can you replace high-voltage components in the BYD Song Plus?",
      answer:
        "Yes, our garage is equipped to replace high-voltage components safely and professionally.",
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
