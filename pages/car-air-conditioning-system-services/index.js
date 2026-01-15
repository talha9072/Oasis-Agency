import Head from "next/head";
import ServiceMainHero from "@/components/common/ServiceMainHero";
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
  <title>Best Car AC Repair & Maintenance Dubai | Fast & Affordable</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Is your car AC not working? Don’t sweat it! Get professional car AC repair services in Dubai, quick fixes, and lasting comfort. Call us now for a free quote."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/car-air-conditioning-system-services"
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
    content="Best Car AC Repair & Maintenance Dubai | Fast & Affordable"
  />
  <meta
    property="og:description"
    content="Is your car AC not working? Don’t sweat it! Get professional car AC repair services in Dubai, quick fixes, and lasting comfort. Call us now for a free quote."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/car-air-conditioning-system-services/"
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
    content="Best Car AC Repair & Maintenance Dubai | Fast & Affordable"
  />
  <meta
    name="twitter:description"
    content="Is your car AC not working? Don’t sweat it! Get professional car AC repair services in Dubai, quick fixes, and lasting comfort. Call us now for a free quote."
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
        name: "Car Air Conditioning System Services",
        description:
          "EVS UAE offers expert air conditioning system services for electric vehicles in Dubai. From diagnostics and refrigerant refills to compressor repairs, we ensure your EV stays cool and comfortable in all seasons.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/car-air-conditioning-system-services",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Dubai's Leading EV Air Conditioning Service"
  description="At EVS UAE, we ensure your EV’s AC operates at peak efficiency. Serving BYD, Avatar, Zeekar, Rox, our specialized team in Dubai and Abu Dhabi provides reliable air conditioning services for your electric vehicle’s comfort and performance."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Car Air Conditioning System Services"
  items={[
    {
      title: "AC Refrigerant Recharge",
      description:
        "Low refrigerant levels? We recharge your EV’s AC with eco-friendly refrigerant to restore cool air, perfect for Dubai’s hot climate.",
    },
    {
      title: "Compressor Performance Check",
      description:
        "A failing compressor reduces cooling. We inspect and repair your AC compressor to ensure efficient operation and comfort.",
    },
    {
      title: "Cabin Filter Replacement",
      description:
        "Dirty filters affect air quality. We replace cabin filters to improve airflow, remove odors, and keep your EV’s interior fresh.",
    },
    {
      title: "AC Leak Detection",
      description:
        "Warm air from your AC? We detect and seal leaks in the system to prevent refrigerant loss and maintain consistent cooling.",
    },
    {
      title: "Blower Motor Repair",
      description:
        "Weak airflow? We repair or replace the blower motor to ensure strong, even air distribution throughout your EV’s cabin.",
    },
    {
      title: "Full AC System Diagnostics",
      description:
        "We check the compressor, refrigerant, filters, and vents to diagnose issues, ensuring your EV’s AC keeps you cool and comfortable.",
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
      question: "How often should I have my EV's air conditioning system serviced?",
      answer:
        "Regularly service your electric vehicle’s air conditioning system every 12 months or after every 20,000 kilometers. This ensures optimal efficiency, maintains performance, and prevents costly major issues.",
    },
    {
      question: "What are the signs that my EV's air conditioning needs servicing?",
      answer:
        "Reduced cooling, unusual noises, unpleasant odors, inconsistent temperatures, or delayed cooling clearly indicate that your system requires professional servicing.",
    },
    {
      question: "Is EV air conditioning maintenance different from traditional vehicles?",
      answer:
        "Yes, electric vehicles require specialized tools and expertise for their unique components and drivetrain integration, which our certified technicians expertly handle.",
    },
    {
      question: "How long does an EV air conditioning service take?",
      answer:
        "Routine maintenance typically takes one to two hours, while complex repairs or extensive work may require up to half a day to ensure thorough and efficient completion.",
    },
    {
      question: "Does EV air conditioning service affect the vehicle warranty?",
      answer:
        "No, EVS UAE follows manufacturer guidelines carefully, ensuring your vehicle’s warranty remains intact while providing expert maintenance services.",
    },
    {
      question: "What brands do you specialize in for EV air conditioning service?",
      answer:
        "We specialize in BYD, Avatar, Zeekar, Rox, and other popular electric vehicle brands, offering expert care and comprehensive support.",
    },
    {
      question: "Are EV air conditioning systems more energy-efficient?",
      answer:
        "Yes, EV AC systems use advanced technology to reduce energy consumption, extend battery life, and improve overall efficiency.",
    },
    {
      question: "Are EV air conditioning parts more expensive than traditional components?",
      answer:
        "While EV AC parts may cost more, their superior quality provides excellent value, durability, and long-lasting performance.",
    },
    {
      question: "Do you serve EV air conditioning service customers from Abu Dhabi?",
      answer:
        "Yes, we proudly serve customers in both Dubai and Abu Dhabi with tailored EV air conditioning services.",
    },
    {
      question: "What preventive measures can I take to maintain my EV's AC system?",
      answer:
        "Replace filters regularly, monitor refrigerant levels, keep the system clean, and schedule routine maintenance with EVS UAE.",
    },
    {
      question: "How do you ensure the environmental friendliness of your AC services?",
      answer:
        "We use eco-friendly refrigerants and follow strict waste management protocols to minimize environmental impact and promote sustainability.",
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
