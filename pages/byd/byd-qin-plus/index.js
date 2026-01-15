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
    BYD Qin Plus Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Get expert service for BYD Qin Plus electric vehicles in Dubai with EVS UAE. We offer professional diagnostics, repairs, and maintenance to keep your EV running smoothly."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="BYD Qin Plus service Dubai, BYD Qin Plus maintenance UAE, electric vehicle repair Dubai, BYD diagnostics UAE, expert BYD technicians, EVS BYD Qin Plus support, BYD service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/byd/byd-qin-plus"
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
    href="https://evsuae.com/byd/byd-qin-plus"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd/byd-qin-plus"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd/byd-qin-plus"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="BYD Qin Plus Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="Get expert service for BYD Qin Plus electric vehicles in Dubai with EVS UAE. We offer professional diagnostics, repairs, and maintenance to keep your EV running smoothly."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/byd/byd-qin-plus"
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
    content="BYD Qin Plus Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Get expert service for BYD Qin Plus electric vehicles in Dubai with EVS UAE. We offer professional diagnostics, repairs, and maintenance to keep your EV running smoothly."
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
        name: "BYD Qin Plus Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers professional diagnostics, maintenance, and repair services for the BYD Qin Plus electric vehicle in Dubai. Our experienced technicians handle battery evaluations, software updates, and full system servicing to ensure top performance and safety.",
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
        url: "https://evsuae.com/byd/byd-qin-plus",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="BYD QIN PLUS"
  titleSuffix="Maintenance and Warranty Support at EVS"
  description="The BYD QIN PLUS is a technologically advanced electric sedan that blends performance and efficiency. At EVS we provide maintenance and repair services for the BYD QIN PLUS in accordance with warranty requirements, helping owners maintain their electric vehicle’s performance while ensuring continued warranty compliance."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
 imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70&w=1220 1220w
  "
  imageAlt="About BYD Qin Plus"
  heading="About BYD QIN Plus"
  description="The BYD Qin Plus is a sleek plug-in hybrid sedan that blends performance, efficiency, and smart technology. Equipped with a 1.5L engine and an electric motor, it delivers a combined output of 307 hp and 325 Nm of torque, accelerating from 0 to 100 km/h in approximately 7.3 seconds. Its 18.3 kWh Blade Battery offers up to 120 km of pure electric range, with a total driving range exceeding 1,200 km. Inside, the Qin Plus features a 10.1-inch rotatable touchscreen with Apple CarPlay and Android Auto, providing seamless connectivity. At EVS UAE, we specialize in servicing advanced EVs like the BYD Qin Plus, ensuring its high-voltage systems and intelligent features are expertly maintained."
/>

<CarServices
  heading="BYD Qin Plus Repair & Maintenance Services"
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
      question: "What maintenance does the BYD Qin Plus typically require?",
      answer:
        "The Qin Plus often requires updates to its hybrid-electric systems, battery service, and brake component checks.",
      defaultOpen: true,
    },
    {
      question:
        "Is your service center capable of handling BYD Qin Plus hybrid systems?",
      answer:
        "Yes, we are fully capable of diagnosing and repairing the Qin Plus's dual powertrain (electric + combustion) systems.",
    },
    {
      question:
        "Can you fix charging or range issues in the BYD Qin Plus?",
      answer:
        "Absolutely. We address range concerns by evaluating battery condition, drive efficiency, and system calibration.",
    },
    {
      question:
        "Do you offer hybrid system diagnostics for BYD Qin Plus DM-i models?",
      answer:
        "Yes, we are experienced in servicing BYD DM-i models, offering in-depth analysis and repairs for hybrid-specific components.",
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
