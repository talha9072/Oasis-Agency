import Head from "next/head";
import HeroSection from "@/components/services/HeroServices";
import ServicesAbout from "@/components/services/ServicesAbout";
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
  <title>
    EV Module Programming in Dubai | Control Unit Coding and Integration
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers professional module programming services for electric vehicles. We install and reprogram control units for smooth integration and reliable performance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV module programming Dubai, electric vehicle ECU coding, EV control unit setup, reprogram EV module, EV electronics integration"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/module-programming"
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

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/programming/module-programming"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/module-programming"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Module Programming in Dubai | Control Unit Coding and Integration"
  />
  <meta
    property="og:description"
    content="EVS Dubai offers professional module programming services for electric vehicles. We install and reprogram control units for smooth integration and reliable performance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/module-programming"
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
    content="EV Module Programming in Dubai | Control Unit Coding and Integration"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai offers professional module programming services for electric vehicles. We install and reprogram control units for smooth integration and reliable performance."
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

  {/* Charset & Compatibility */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

  {/* Structured Data – Module Programming Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Module Programming for Electric Vehicles",
        description:
          "EVS UAE provides specialized module programming services for electric vehicles, including ECU coding, control unit replacement, and electronic module integration for optimal performance.",
        serviceType: "EV Module Programming",
        provider: {
          "@type": "AutomotiveBusiness",
          name: "Electric Vehicle Services UAE",
          url: "https://evsuae.com/",
          logo:
            "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971600500387",
            email: "contact@evsuae.com",
            contactType: "Customer Service",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "Dubai, UAE",
          },
        },
        url: "https://evsuae.com/services/programming/module-programming",
        inLanguage: "en",
      }),
    }}
  />
</Head>


<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Module Programming for Electric Vehicles"
  description="At EVS, we specialize in programming and integrating these modules with your EV's existing systems."
  buttonText="Book Your EV Check"
  buttonLink="https://evsuae.com/contact"
/>


<LogoMarquee />

<ServicesAbout
  image="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024"
  imageSrcSet={`
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=640 640w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1440 1440w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1920 1920w
  `}
  imageSizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
  imageAlt="EV Maintenance and Repairs"
  badgeText="EV Programming Services"
  title="About the Service"
  description="Modern electric vehicles depend on numerous control modules to manage everything from safety features and drivetrain performance to infotainment and climate control. At EVS, we specialize in programming and integrating these modules with your EV's existing systems. Whether you're installing a new control unit or updating an existing one, we ensure every module functions accurately and communicates correctly within the vehicle’s electronic network."
/>


<ServiceBenefits
  title="Benefits of Module Programming"
  items={[
    {
      title: "New Module Integration",
      description:
        "We install and configure ECUs, BCUs, and other modules to match your vehicle’s original system architecture.",
    },
    {
      title: "Reprogramming Existing Units",
      description:
        "If a module is replaced or showing errors, we update or recalibrate it to restore full functionality.",
    },
    {
      title: "Complete System Checks",
      description:
        "After programming, we verify that all modules are aligned with your EV’s operational logic.",
    },
    {
      title: "Fault Code Resolution",
      description:
        "Persistent warning lights or communication errors can often be fixed through proper module reprogramming.",
    },
    {
      title: "EV Platform Support",
      description:
        "We handle modules for major EV brands including Tesla, BYD, and Zeekr.",
    },
    {
      title: "Future Compatibility",
      description:
        "Proper module setup ensures your vehicle is ready for future software updates or hardware upgrades.",
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
      question: "What is module programming in electric vehicles?",
      answer:
        "It involves configuring or updating the software in electronic control units that manage key systems such as steering, braking, battery management, and displays.",
    },
    {
      question: "When does my EV need module programming?",
      answer:
        "You may need it when installing a new module, replacing a faulty one, or resolving system errors that affect performance.",
    },
    {
      question: "Can you program modules for any EV brand?",
      answer:
        "Yes. We support a wide range of electric vehicles and are familiar with brand-specific communication protocols.",
    },
    {
      question: "Is this service safe for my EV’s internal systems?",
      answer:
        "Absolutely. We follow manufacturer-approved programming methods using insulated tools and verified software.",
    },
    {
      question: "How long does module programming typically take?",
      answer:
        "Most cases are completed within a few hours, depending on the number and complexity of modules being serviced.",
    },
  ]}
/>


<CarServices
  heading="Electric Vehicle Services"
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
