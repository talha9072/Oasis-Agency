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
  <title>Dubai Dashboard Repair | Fix Cracks, Fading & Damage</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Need expert dashboard repair in Dubai? Get fast, reliable service to fix your malfunctioning dashboard. Don’t wait, contact us today for a hassle-free solution!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/dashboard-repair"
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

  {/* Language alternate */}
  <link
    rel="alternate"
    hrefLang="en-ae"
    href="https://evsuae.com/"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Dubai Dashboard Repair | Fix Cracks, Fading & Damage"
  />
  <meta
    property="og:description"
    content="Need expert dashboard repair in Dubai? Get fast, reliable service to fix your malfunctioning dashboard. Don’t wait, contact us today for a hassle-free solution!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/dashboard-repair/"
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
    content="Dubai Dashboard Repair | Fix Cracks, Fading & Damage"
  />
  <meta
    name="twitter:description"
    content="Need expert dashboard repair in Dubai? Get fast, reliable service to fix your malfunctioning dashboard. Don’t wait, contact us today for a hassle-free solution!"
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
</Head>




<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Reliable Electric Vehicle Dashboard Repair Solutions in Dubai"
  description="The dashboard indications from your EV have been transformed by EVS UAE into accurate solutions. By maximizing your car’s potential, our knowledgeable Dubai experts guarantee faultless performance & constant safety in the electrified environment of Dubai & Abu Dhabi."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Dashboard Repair Services"
  items={[
    {
      title: "Crack and Scratch Repair",
      description:
        "Cracked or scratched dashboard? We restore your EV’s dashboard surface, repairing damage for a smooth, like-new finish.",
    },
    {
      title: "Fading and Discoloration Fix",
      description:
        "Sun damage causing fading? We treat and refinish your dashboard to restore its original color, ideal for Dubai’s harsh climate.",
    },
    {
      title: "Dashboard Panel Replacement",
      description:
        "Severely damaged panels? We replace dashboard components with high-quality parts, ensuring a perfect fit for your EV model.",
    },
    {
      title: "Electronic Display Diagnostics",
      description:
        "Dashboard screen issues? We diagnose and repair EV dashboard displays, ensuring all information is clear and fully functional.",
    },
    {
      title: "Rattle and Loose Part Repair",
      description:
        "Annoying dashboard rattles? We secure loose parts and eliminate unwanted noises for a quiet, comfortable driving experience.",
    },
    {
      title: "Full Dashboard Inspection",
      description:
        "We inspect structural, cosmetic, and electronic elements to ensure your EV’s dashboard is fully restored and reliable.",
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
      question: "How often should I get my EV dashboard inspected?",
      answer:
        "We recommend periodic inspections during regular maintenance intervals or whenever you notice performance changes. Early detection ensures minor issues don’t become major problems.",
    },
    {
      question: "What are the signs that my EV dashboard needs servicing?",
      answer:
        "Common indicators include flickering displays, unresponsive touchscreens, inaccurate battery readings, or delayed responsiveness. If you notice any of these issues, timely inspection is recommended.",
    },
    {
      question: "Is EV dashboard maintenance different from traditional vehicles?",
      answer:
        "Yes. EV dashboards involve advanced electronics, software, and integrated systems. Our certified technicians are trained to handle these specialized requirements for modern electric vehicles.",
    },
    {
      question: "How long does an EV dashboard repair take?",
      answer:
        "Repair time depends on the issue and part availability. Many minor dashboard issues can be diagnosed and resolved on the same day.",
    },
    {
      question: "Does EV dashboard repair affect the vehicle warranty?",
      answer:
        "When performed using approved components and proper procedures, dashboard repairs do not affect your vehicle warranty. Our team follows manufacturer guidelines to ensure compliance.",
    },
    {
      question: "What brands do you specialize in for EV dashboard repair?",
      answer:
        "We work on a wide range of EV brands including Tesla, Nissan, Chevrolet, BYD, Avatar, Zeekar, Rox, and more.",
    },
    {
      question: "Are software updates included in the service?",
      answer:
        "Yes. We perform software diagnostics and updates where required to ensure optimal dashboard performance and system accuracy.",
    },
    {
      question:
        "Are EV dashboard components more expensive than traditional dashboard parts?",
      answer:
        "Some EV components may have a higher upfront cost, but their durability and performance often provide better long-term value.",
    },
    {
      question:
        "Do you serve EV owners from Abu Dhabi or nearby areas?",
      answer:
        "Yes. We serve customers from Dubai, Abu Dhabi, and surrounding regions, offering professional EV dashboard diagnostics and repair services.",
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
