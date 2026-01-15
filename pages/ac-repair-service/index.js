import Head from "next/head";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import WhyChooseEVS from "@/components/services/WhyChooseEVS";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CarServices from "@/components/car-brands/CarServices.js";
import LogoMarquee from "@/components/common/LogoMarquee";
import BranchesSection from "@/components/common/Branches";
import CustomerReviewsSection from "@/components/common/Customer";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
       
<Head>
  {/* Title */}
  <title>EV Car AC Repair in Dubai | Expert Cooling System Solutions</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EV AC problems can be frustrating. Get Professional EV AC Repair in Dubai—quick, reliable service to keep your vehicle cool. Call now for a free consultation!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ac-repair-service"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author & Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en-ae"
    href="https://evsuae.com/"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Car AC Repair in Dubai | Expert Cooling System Solutions"
  />
  <meta
    property="og:description"
    content="EV AC problems can be frustrating. Get Professional EV AC Repair in Dubai—quick, reliable service to keep your vehicle cool. Call now for a free consultation!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ac-repair-service"
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
    content="EV Car AC Repair in Dubai | Expert Cooling System Solutions"
  />
  <meta
    name="twitter:description"
    content="EV AC problems can be frustrating. Get Professional EV AC Repair in Dubai—quick, reliable service to keep your vehicle cool. Call now for a free consultation!"
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/favicon-16x16.png"
  />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="manifest" href="/site.webmanifest" />

  {/* Preconnect */}
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
    crossOrigin="anonymous"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />

  {/* Charset & Compatibility */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "EV Car AC Repair",
        description:
          "EVS UAE provides expert electric vehicle AC repair services in Dubai. Our technicians diagnose and repair cooling systems to restore optimal cabin comfort.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/ac-repair-service",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<section
  className="ipad-top-space-margin overflow-hidden p-0 page-title-big-typography service-hero"
  style={{
    backgroundImage:
      "url(https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920)",
  }}
>
  <div className="container">
    <div className="row justify-content-center align-items-end text-start">
      <div className="col-md-12 page-title-extra-small sm-pt-50px sm-pb-50px">
        <div className="content-box">
          <div className="service-h1 alt-font text-white w-70">
            <h1 className="d-block">
              Professional EV AC Repair Service for Your Electric Vehicle in Dubai
            </h1>
          </div>

          <div className="desc tp-caption d-inline-block text-start w-70">
            Expert EV AC repair to keep your electric vehicle’s climate control
            at optimal performance in all weather conditions.
          </div>

          <div className="header-button d-flex align-items-center gap-3">
            <a
              href="/contact"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow"
            >
              <b>Book Service</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<LogoMarquee />




<ServiceBenefits
  title="AC Repair Services"
  items={[
    {
      title: "AC System Diagnostics",
      description:
        "Identifies issues in the AC system using advanced diagnostic tools for accurate repairs.",
    },
    {
      title: "Refrigerant Recharge",
      description:
        "Replenishes refrigerant levels to ensure your AC cools effectively and efficiently.",
    },
    {
      title: "Compressor Repair",
      description:
        "Fixes or replaces the AC compressor to restore proper cooling performance.",
    },
    {
      title: "Cabin Filter Replacement",
      description:
        "Replaces clogged cabin filters to improve air quality and AC efficiency.",
    },
    {
      title: "Leak Detection & Repair",
      description:
        "Detects and repairs leaks in the AC system to prevent refrigerant loss and ensure optimal cooling.",
    },
    {
      title: "Full AC System Inspection",
      description:
        "A thorough check of the entire AC system to ensure all components are functioning properly.",
    },
  ]}
/>



<BranchesSection />

<WhyChooseEVS />

<CustomerReviewsSection />


<CarFaq
  heading="Frequently Asked Questions"
  faqs={[
    {
      question: "How often should I service my EV’s AC system?",
      answer:
        "It’s recommended to service your EV’s AC system annually or if you notice reduced cooling efficiency.",
    },
    {
      question: "What are the signs my AC needs repair?",
      answer:
        "Signs include weak airflow, unusual noises, strange odors, or the AC not cooling properly.",
    },
    {
      question: "How long does an AC repair take?",
      answer:
        "Most AC repairs take 1–2 hours, depending on the issue and required repairs.",
    },
    {
      question: "Can a faulty AC affect my EV’s performance?",
      answer:
        "While it doesn’t directly impact driving, a faulty AC can strain the electrical system and reduce efficiency.",
    },
  ]}
/>


<CarServices
  heading="Other Services"
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
