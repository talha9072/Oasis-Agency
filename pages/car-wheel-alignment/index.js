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
  <title>Expert Car Wheel Alignment in Dubai | Smooth & Safe Ride</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Say goodbye to uneven tire wear! Get reliable car wheel alignment in Dubai for a safer, smoother ride. Contact us today for an instant check!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/car-wheel-alignment"
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
    hrefLang="en"
    href="https://evsuae.com/car-wheel-alignment"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/car-wheel-alignment"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Expert Car Wheel Alignment in Dubai | Smooth & Safe Ride"
  />
  <meta
    property="og:description"
    content="Say goodbye to uneven tire wear! Get reliable car wheel alignment in Dubai for a safer, smoother ride. Contact us today for an instant check!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/car-wheel-alignment/"
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
    content="Expert Car Wheel Alignment in Dubai | Smooth & Safe Ride"
  />
  <meta
    name="twitter:description"
    content="Say goodbye to uneven tire wear! Get reliable car wheel alignment in Dubai for a safer, smoother ride. Contact us today for an instant check!"
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
        name: "Car Wheel Alignment",
        description:
          "EVS UAE provides precision wheel alignment services for electric vehicles in Dubai. Our alignment experts use advanced diagnostic tools to ensure optimal handling, tire longevity, and overall driving safety for your EV.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/car-wheel-alignment",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>




<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Optimize Your EV's Handling: Wheel Alignment Dubai"
  description="EVS UAE is the ideal EV sanctuary where passion and precision meet. Our skilled technicians turn BYD, Avatar, Zeekar, and Rox into performance vehicles that redefine the electric driving experience in Dubai by providing unmatched handling, safety, and efficiency."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Car Wheel Alignment Services"
  items={[
    {
      title: "Wheel Angle Adjustment",
      description:
        "Misaligned wheels? We adjust camber, caster, and toe angles to ensure your EV drives straight and handles smoothly.",
    },
    {
      title: "Tire Wear Inspection",
      description:
        "Uneven tire wear signals alignment issues. We inspect tires and align wheels to extend tire life and improve safety.",
    },
    {
      title: "Steering Response Check",
      description:
        "Pulling to one side? We align your wheels to restore precise steering, enhancing control and comfort on Dubai’s roads.",
    },
    {
      title: "Suspension System Review",
      description:
        "Alignment issues can stem from suspension wear. We check and adjust components to support proper wheel alignment.",
    },
    {
      title: "Laser Alignment Technology",
      description:
        "We use advanced laser tools to achieve precise wheel alignment, optimizing your EV’s efficiency and battery range.",
    },
    {
      title: "Full Alignment Report",
      description:
        "After service, we provide a detailed report of adjustments made, ensuring your EV’s wheels are perfectly aligned for safe driving.",
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
      question: "How often should I get my EV wheels aligned?",
      answer:
        "Align your EV wheels every 10,000–12,000 kilometers or as recommended. Also, check alignment after potholes or major impacts to keep your vehicle in optimal condition.",
    },
    {
      question: "What are the signs that my EV needs wheel alignment?",
      answer:
        "Common indicators include uneven or rapid tire wear, the vehicle pulling to one side while driving, steering wheel vibration or misalignment, and increased energy consumption or battery drain.",
    },
    {
      question: "Is EV wheel alignment different from traditional vehicles?",
      answer:
        "Yes, EV alignment accounts for battery weight and regenerative braking. Our expert technicians ensure precise, customized alignment tailored to your EV’s specific needs.",
    },
    {
      question: "How long does an EV wheel alignment service take?",
      answer:
        "EVS UAE aligns EV wheels in just 30–60 minutes, ensuring a fast turnaround and minimal downtime so your electric vehicle is back on the road quickly.",
    },
    {
      question: "Does wheel alignment affect the vehicle warranty?",
      answer:
        "Proper wheel alignment preserves your warranty. At EVS UAE, we use approved parts and strictly follow manufacturer guidelines to ensure your vehicle’s warranty remains intact.",
    },
    {
      question: "What brands do you specialize in for EV wheel alignment?",
      answer:
        "We specialize in a wide range of EV brands, including BYD, Avatar, Zeekar, Rox, Tesla, Nissan Leaf, BMW i Series, Audi e-tron, and Hyundai Kona Electric.",
    },
    {
      question: "Do EVs require less frequent alignment maintenance?",
      answer:
        "EVs have similar alignment schedules to traditional vehicles, though some models may have unique needs. Regular alignment checks ensure optimal performance and efficiency.",
    },
    {
      question: "Are EV wheel alignment parts more expensive than traditional components?",
      answer:
        "EV parts may cost more initially, but longer tire life and better efficiency offset costs. At EVS UAE, we use high-quality parts to ensure your EV’s lasting performance and value.",
    },
    {
      question: "Do you serve EV wheel alignment customers from Abu Dhabi?",
      answer:
        "Yes. We serve Dubai, Abu Dhabi, and surrounding areas. Our services ensure all UAE EV owners can access our top-rated wheel alignment solutions.",
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
