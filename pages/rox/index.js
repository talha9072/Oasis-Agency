import Head from "next/head";
import FullHeroCars from "@/components/car-brands/FullHero.js";
import CarAbout from "@/components/car-brands/CarAbout.js";
import CarServices from "@/components/car-brands/CarServices.js";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CustomerReviewsSection from "@/components/common/Customer";
import LatestBlogsLoader from "@/components/car-brands/LatestBlogsLoader";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
     <Head>
  {/* Title */}
  <title>
    ROX Car Warranty Provider | Advanced EV Care for All Models – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Explore ROX services by EVS UAE – premium electric vehicle maintenance and performance upgrades in Dubai. Tailored care for all EV brands with expert diagnostics and support."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="ROX EV service Dubai, electric vehicle upgrades UAE, advanced EV maintenance, ROX car diagnostics, EV performance tuning Dubai, premium EV support, EVS UAE services"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/rox" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/rox" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/rox" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/rox" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="ROX Car Warranty Provider | Advanced EV Care for All Models – EVS UAE"
  />
  <meta
    property="og:description"
    content="Explore ROX services by EVS UAE – premium electric vehicle maintenance and performance upgrades in Dubai. Tailored care for all EV brands with expert diagnostics and support."
  />
  <meta property="og:url" content="https://evsuae.com/rox" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="ROX Car Warranty Provider | Advanced EV Care for All Models – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="Explore ROX services by EVS UAE – premium electric vehicle maintenance and performance upgrades in Dubai. Tailored care for all EV brands with expert diagnostics and support."
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
        name: "ROX Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE provides expert diagnostics, repair, and maintenance services for ROX electric vehicles in Dubai. From battery performance checks to software updates and mechanical repairs, we ensure your ROX EV runs at its best.",
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
        url: "https://evsuae.com/rox",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/ev/rox-car-1.jpg&q=70&w=1920"
  titlePrefix="Expert"
  highlight="ROX"
  titleSuffix="EV Service Center"
  description="At EVS, our experienced team handles all aspects of Rox electric vehicles servicing and support. From routine maintenance to warranty-related repairs, we offer complete care designed to keep your vehicle running smoothly. Every service is carried out with attention to detail to help maintain long-term performance."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<section id="car-cards" className="pb-0 xs-pt-30px">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-12 d-flex align-items-center justify-content-center position-relative xs-mb-0px xs-mt-15px"
        data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-700 alt-font text-white text-center ls-minus-2px pb-2 xs-pb-0">
          ROX Models We Service
        </h2>
      </div>

      <div className="col-lg-4">
        <div className="service-box">
          <img
            src="https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70"
            srcSet="
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=320 320w,
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=500 500w,
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=768 768w,
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=1024 1024w
            "
            width="377"
            height="251"
            sizes="100vw"
            alt="Service Image"
          />

          <div className="service-box-content">
            {/* ✅ EXACT anchor pattern you asked for */}
            <a aria-label="Learn more about the ROX" href="/rox/rox-01">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                ROX 01
              </h3>

              <p className="fs-16 mt-2">
                The ROX 01 is a sophisticated vehicle designed with cutting-edge technology and luxury in mind. Whether you need routine maintenance or repairs covered by the Rox 01 Warranty, our expert technicians are here to help. EVS is the leading Rox 01 Service Center, providing trusted care across the UAE, including Dubai, Abu Dhabi, and Ajman.
              </p>
            </a>

            {/* ✅ Button anchor kept separate */}
            <a
              href="/rox/rox-01"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the ROX"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=1220 1220w
  "
  imageAlt="About ROX image"
  heading="About ROX"
  description="The ROX 01 is a modern electric vehicle built with advanced technology and refined features. For routine maintenance or warranty-covered repairs, our skilled technicians are equipped to manage every aspect of ROX 01 servicing. We provide reliable support for ROX 01 owners across the UAE, including Dubai, Abu Dhabi, and Ajman."
/>


<CarServices
  heading="ROX Repair & Maintenance Services"
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
      question:
        "How do I register my Rox car with a warranty in the UAE?",
      answer:
        "To register your Rox electric vehicle with a warranty in the UAE, our team at EVS can assist with the full process. We handle the required documentation to help ensure your vehicle is covered efficiently and with minimal effort on your part.",
    },
    {
      question:
        "What is covered under the Rox Extended Warranty?",
      answer:
        "The Rox Extended Warranty covers essential parts like the engine, transmission, and hybrid systems, ensuring long-term protection for your vehicle. This helps you reduce future repair costs and keeps your Rox running reliably for years beyond the standard coverage.",
    },
    {
      question:
        "Where can I get my Rox car serviced under warranty in the UAE?",
      answer:
        "You can bring your Rox electric vehicle to EVS for servicing under warranty at our locations in Dubai, Abu Dhabi, and Ajman. Our technicians are trained to carry out warranty-covered work with precision, ensuring your vehicle is maintained according to manufacturer standards.",
    },
    {
      question:
        "How does EVS handle Rox warranty claims?",
      answer:
        "At EVS, we assist with Rox warranty claims by managing the paperwork, coordinating repairs, and handling communication throughout the process. Our goal is to make the experience as straightforward as possible so your electric vehicle can get the attention it needs without added hassle.",
    },
    {
      question:
        "What makes EVS the best Rox warranty provider?",
      answer:
        "EVS supports Rox electric vehicle warranty servicing by using advanced diagnostic tools, trained technicians, and components that meet manufacturer specifications. Our approach is designed to align with warranty requirements while ensuring your vehicle receives accurate and consistent maintenance.",
    },
    {
      question:
        "Can I extend my Rox warranty beyond the standard period?",
      answer:
        "Yes! EVS offers Rox warranty solutions, including the option for Rox Extended Warranty, providing extended coverage for your vehicle—designed to protect key components and maintain long-term value and performance beyond the standard manufacturer warranty period.",
    },
  ]}
/>


{/* Branches Section with Tabs */}
      <BranchesSection />

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
