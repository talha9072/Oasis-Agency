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
    Tesla Service & Maintenance in Dubai | EVS UAE – Expert EV Specialists
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers expert Tesla maintenance and repair services in Dubai. Our expert technicians provide comprehensive care for all Tesla models, ensuring optimal performance and longevity."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Tesla service Dubai, Tesla maintenance UAE, Tesla repair Dubai, Tesla Model 3 service, Tesla Model S maintenance, Tesla Model X repair, Tesla Model Y service, expert Tesla technicians Dubai, EVS UAE Tesla services"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/tesla" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/tesla" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/tesla" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/tesla" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Tesla Service & Maintenance in Dubai | EVS UAE – Expert EV Specialists"
  />
  <meta
    property="og:description"
    content="EVS UAE offers expert Tesla maintenance and repair services in Dubai. Our expert technicians provide comprehensive care for all Tesla models, ensuring optimal performance and longevity."
  />
  <meta property="og:url" content="https://evsuae.com/tesla" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Tesla Service & Maintenance in Dubai | EVS UAE – Expert EV Specialists"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers expert Tesla maintenance and repair services in Dubai. Our expert technicians provide comprehensive care for all Tesla models, ensuring optimal performance and longevity."
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
        name: "Tesla Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers expert diagnostics, maintenance, and repair services for all Tesla models in Dubai. From battery health checks and software updates to brake servicing and part replacements, we ensure your Tesla performs at its highest level.",
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
        url: "https://evsuae.com/tesla",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Tesla"
  titleSuffix="Service, Maintenance & Repair Center"
  description="At EVS, we deliver reliable, warranty-friendly service for your Tesla. From routine maintenance to complex diagnostics, our expert team ensures your electric vehicle receives premium care and attention—tailored to your driving needs. At EVS, we provide expert services for Tesla electric vehicles in Dubai and the UAE."
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
          Tesla Models We Service
        </h2>
      </div>

      {/* Tesla Cybertruck */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="tesla/cybertruck" aria-label="Learn more about the Tesla Cybertruck">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Service Image"
            />
          </a>

          <div className="service-box-content">
            <a href="tesla/cybertruck" aria-label="Learn more about the Tesla Cybertruck">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Tesla CyberTruck
              </h3>
              <p className="fs-16 mt-2">
                Professional Tesla Cybertruck servicing, from routine maintenance to advanced repairs. Affordable, high-quality EV care.
              </p>
            </a>

            <a
              href="tesla/cybertruck"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Tesla Cybertruck"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Tesla Model S */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="tesla/model-s" aria-label="Learn more about the Tesla Model S">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Service Image"
            />
          </a>

          <div className="service-box-content">
            <a href="tesla/model-s" aria-label="Learn more about the Tesla Model S">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Tesla Model S
              </h3>
              <p className="fs-16 mt-2">
                Professional Tesla Model S servicing, from routine maintenance to advanced repairs. Affordable, high-quality EV care.
              </p>
            </a>

            <a
              href="tesla/model-s"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Tesla Model S"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Tesla Model 3 */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="tesla/model-3" aria-label="Learn more about the Tesla Model 3">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Service Image"
            />
          </a>

          <div className="service-box-content">
            <a href="tesla/model-3" aria-label="Learn more about the Tesla Model 3">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Tesla Model 3
              </h3>
              <p className="fs-16 mt-2">
                Professional Tesla Model 3 servicing, from routine maintenance to advanced repairs. Affordable, high-quality EV care.
              </p>
            </a>

            <a
              href="tesla/model-3"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Tesla Model 3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Tesla Model X */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="tesla/model-x" aria-label="Learn more about the Tesla Model X">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Service Image"
            />
          </a>

          <div className="service-box-content">
            <a href="tesla/model-x" aria-label="Learn more about the Tesla Model X">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Tesla Model X
              </h3>
              <p className="fs-16 mt-2">
                Professional Tesla Model X servicing, from routine maintenance to advanced repairs. Affordable, high-quality EV care.
              </p>
            </a>

            <a
              href="tesla/model-x"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Tesla Model X"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Tesla Model Y */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="tesla/model-y" aria-label="Learn more about the Tesla Model Y">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Service Image"
            />
          </a>

          <div className="service-box-content">
            <a href="tesla/model-y" aria-label="Learn more about the Tesla Model Y">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Tesla Model Y
              </h3>
              <p className="fs-16 mt-2">
                Professional Tesla Model Y servicing, from routine maintenance to advanced repairs. Affordable, high-quality EV care.
              </p>
            </a>

            <a
              href="tesla/model-y"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Tesla Model Y"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Tesla Roadster */}
      <div className="col-lg-4">
        <div className="service-box">
          <a href="tesla/roadster" aria-label="Learn more about the Tesla Roadster">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="Service Image"
            />
          </a>

          <div className="service-box-content">
            <a href="tesla/roadster" aria-label="Learn more about the Tesla Roadster">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                Tesla Roadster
              </h3>
              <p className="fs-16 mt-2">
                Professional Tesla Roadster servicing, from routine maintenance to advanced repairs. Affordable, high-quality EV care.
              </p>
            </a>

            <a
              href="tesla/roadster"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="Learn more about the Tesla Roadster"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Tesla image"
  heading="About Tesla"
  description="Tesla is a global leader in electric mobility, known for pushing the boundaries of technology, performance, and sustainability. Designed for the forward-thinking and environmentally conscious driver, Tesla vehicles integrate cutting-edge autonomous driving capabilities, minimalist luxury interiors, and powerful electric performance. In the Middle East, especially in the UAE, Tesla has become a symbol of modern innovation, offering smart, connected experiences that redefine everyday driving. With a mission to accelerate the world’s transition to sustainable energy, Tesla delivers premium electric vehicles that combine intelligent design with industry-leading technology."
/>


<CarServices
  heading="Tesla Repair & Maintenance Services"
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
      question: "How do I register my Tesla for warranty support in the UAE?",
      answer:
        "To register your Tesla for warranty coverage in the UAE, visit EVS. We take care of all documentation and ensure your Tesla is properly enrolled—so you’re protected from day one, hassle-free.",
    },
    {
      question: "What does the Tesla Extended Warranty include?",
      answer:
        "The Tesla Extended Warranty covers high-value components such as the electric motor, battery pack, MCU (media control unit), and drivetrain. This protection ensures peace of mind long after your standard coverage ends.",
    },
    {
      question: "Where can I service my Tesla under warranty in the UAE?",
      answer:
        "EVS provides expert Tesla warranty servicing in Dubai, Abu Dhabi, and Ajman. Our experienced EV technicians use advanced diagnostics and service procedures aligned with Tesla’s standards—helping keep your vehicle well-maintained and warranty-compliant.",
    },
    {
      question: "How does EVS handle Tesla warranty claims?",
      answer:
        "EVS simplifies the Tesla warranty claims process. Whether it’s a battery alert, sensor fault, or infotainment issue—we coordinate directly with warranty providers to process and fulfill claims quickly and correctly.",
    },
    {
      question: "Can I extend my Tesla’s warranty coverage through EVS?",
      answer:
        "Yes! EVS offers Tesla Extended Warranty solutions tailored to your driving habits. You get longer coverage for critical components, fewer surprise repair costs, and support that protects your electric vehicle’s value.",
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
