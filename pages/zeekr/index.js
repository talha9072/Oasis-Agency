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
    Zeekr EV Service in Dubai | Expert Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers expert service for Zeekr electric vehicles in Dubai. From diagnostics to repairs, our expert technicians ensure peak performance for all Zeekr models."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Zeekr EV service Dubai, Zeekr maintenance UAE, Zeekr electric car repair, EV diagnostics Dubai, Zeekr service center UAE, expert Zeekr technicians, EVS Zeekr support"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/zeekr" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/zeekr" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/zeekr" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/zeekr"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Zeekr EV Service in Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers expert service for Zeekr electric vehicles in Dubai. From diagnostics to repairs, our expert technicians ensure peak performance for all Zeekr models."
  />
  <meta property="og:url" content="https://evsuae.com/zeekr" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Zeekr EV Service in Dubai | Expert Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers expert service for Zeekr electric vehicles in Dubai. From diagnostics to repairs, our expert technicians ensure peak performance for all Zeekr models."
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
        name: "ZEEKR Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers diagnostics, repair, and maintenance services for ZEEKR electric vehicles in Dubai. Our technicians handle everything from software updates and battery checks to advanced component servicing to keep your ZEEKR performing at its peak.",
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
        url: "https://evsuae.com/zeekr",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="ZEEKR"
  titleSuffix="Electric Vehicle Service and Maintenance in the UAE"
  description="At EVS, we provide service and maintenance for ZEEKR electric vehicles, covering everything from routine checks to warranty-related repairs. Our technicians use advanced diagnostic tools and follow manufacturer-aligned procedures to support long-term performance. We assist ZEEKR EV owners in Dubai and across the UAE with reliable, detail-focused care."
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
          Zeekr Models We Service
        </h2>
      </div>

      {/* ZEEKR X */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="/zeekr/zeekr-x" aria-label="Learn more about the Zeekr X">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Zeekr X Image"
            />
          </a>

          <div className="service-box-content">
            <a href="/zeekr/zeekr-x" aria-label="Learn more about the Zeekr X">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                ZEEKR X
              </h3>
              <p className="fs-16 mt-2">
                The ZEEKR X is a modern electric vehicle designed for performance,
                efficiency, and style. At EVS, we specialize in maintaining and
                servicing this advanced model, ensuring your vehicle stays in top
                condition. Our expert team offers tailored ZEEKR X care and support,
                including warranty-related services. Whether you’re in Dubai,
                Abu Dhabi, or Ajman, EVS is your trusted partner.
              </p>
            </a>

            <a
              href="/zeekr/zeekr-x"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Zeekr X"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* ZEEKR 001 */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="/zeekr/zeekr-001" aria-label="Learn more about the Zeekr 001">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Zeekr 001 Image"
            />
          </a>

          <div className="service-box-content">
            <a href="/zeekr/zeekr-001" aria-label="Learn more about the Zeekr 001">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                ZEEKR 001
              </h3>
              <p className="fs-16 mt-2">
                At EVS, we provide comprehensive maintenance and specialized care
                for your ZEEKR 001, ensuring it operates at its best. Our team
                understands the advanced technology of this model and is fully
                equipped to handle routine maintenance and warranty-related work.
              </p>
            </a>

            <a
              href="/zeekr/zeekr-001"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Zeekr 001"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=1220 1220w
  "
  imageAlt="About ZEEKR image"
  heading="About ZEEKR"
  description="The ZEEKR X is a high-performance electric vehicle engineered for efficiency and contemporary driving needs. At EVS, our team is equipped to handle all aspects of ZEEKR X maintenance and servicing, including warranty-related work. We provide support for ZEEKR X owners across the UAE, including Dubai, Abu Dhabi, and Ajman, helping ensure consistent performance through skilled diagnostics and care."
/>


<CarServices
  heading="Zeekr Repair & Maintenance Services"
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
      question: "How do I register my ZEEKR car with a warranty in the UAE?",
      answer:
        "To register your ZEEKR electric vehicle with a warranty in the UAE, you can visit EVS for assistance with the process. Our team manages the required documentation and coordinates the registration to help ensure your vehicle is covered efficiently and with minimal hassle.",
    },
    {
      question: "What does the ZEEKR Extended Warranty cover?",
      answer:
        "The ZEEKR Extended Warranty offers long-term protection for essential components such as the engine, transmission, and hybrid systems, giving you peace of mind for years to come—minimizing future repair costs and maximizing your vehicle’s long-term value and performance.",
    },
    {
      question: "How does EVS handle ZEEKR warranty claims?",
      answer:
        "EVS assists with ZEEKR electric vehicle warranty claims by managing the paperwork, coordinating necessary repairs, and ensuring all work aligns with the warranty terms. Our team works to make the claims process as straightforward as possible, helping ZEEKR owners resolve issues efficiently across the UAE.",
    },
    {
      question: "Why is EVS the best choice for ZEEKR warranty service?",
      answer:
        "EVS supports ZEEKR electric vehicle warranty servicing by using diagnostic tools, trained technicians, and components that align with manufacturer standards. Our approach is focused on maintaining compliance with ZEEKR warranty terms while delivering reliable service across the UAE.",
    },
    {
      question: "Can I extend my ZEEKR warranty beyond the standard period?",
      answer:
        "Absolutely! EVS offers ZEEKR Extended Warranty options, allowing you to continue protecting your car well beyond the standard warranty period—with customizable plans designed for peace of mind, long-term value, and uninterrupted driving confidence in the years ahead.",
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
