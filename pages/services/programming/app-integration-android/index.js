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
    EV App Integration in Dubai | Android Auto and Custom Platform Setup
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai provides app integration for electric vehicles, including Android Auto and custom apps. Improve connectivity, infotainment, and driving experience."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV app integration Dubai, Android Auto EV, electric vehicle connectivity, custom infotainment setup, EV smartphone integration UAE"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/app-integration-android"
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
    href="https://evsuae.com/services/programming/app-integration-android"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/app-integration-android"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV App Integration in Dubai | Android Auto and Custom Platform Setup"
  />
  <meta
    property="og:description"
    content="EVS Dubai provides app integration for electric vehicles, including Android Auto and custom apps. Improve connectivity, infotainment, and driving experience."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/app-integration-android"
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
    content="EV App Integration in Dubai | Android Auto and Custom Platform Setup"
  />
  <meta
    name="twitter:description"
    content="EVS Dubai provides app integration for electric vehicles, including Android Auto and custom apps. Improve connectivity, infotainment, and driving experience."
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

  {/* Structured Data – App Integration Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "EV App Integration & Android Auto Setup",
        description:
          "EVS UAE provides professional app integration services for electric vehicles, including Android Auto and custom platform setup. Enhance infotainment, connectivity, and smart feature access with expert configuration.",
        serviceType: "EV App Integration",
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
        url: "https://evsuae.com/services/programming/app-integration-android",
        inLanguage: "en",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="App Integration for Electric Vehicles"
  description="At EVS, we help you connect your smartphone and apps to your electric vehicle through professional app integration services."
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
  description="Modern EV drivers expect more than just mobility—they want seamless digital integration. At EVS, we help you connect your smartphone and apps to your electric vehicle through professional app integration services. From Android Auto to brand-specific platforms and custom infotainment applications, our team ensures a smooth, functional setup that enhances your overall driving experience without disrupting system performance."
/>


<ServiceBenefits
  title="Benefits of App Integration"
  items={[
    {
      title: "Android Auto Setup",
      description:
        "Full integration with your EV’s display, allowing access to navigation, music, and calls.",
    },
    {
      title: "Custom App Support",
      description:
        "Configure unique infotainment or fleet management apps that align with your driving needs.",
    },
    {
      title: "Cross-Platform Compatibility",
      description:
        "We ensure your apps function across Android and other supported systems.",
    },
    {
      title: "Improved Driver Convenience",
      description:
        "Access real-time maps, traffic updates, voice assistants, and in-car entertainment with ease.",
    },
    {
      title: "Safe Operation",
      description:
        "Maintain system responsiveness and safe use while driving through optimized interface setup.",
    },
    {
      title: "Enhanced Vehicle Value",
      description:
        "App integration can improve both day-to-day use and long-term resale value.",
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
      question: "Can you install Android Auto on any EV?",
      answer:
        "We support most EVs with Android-compatible systems. If your model doesn’t support it by default, we’ll explore alternative integration options.",
    },
    {
      question: "What about apps that aren’t available through Android Auto?",
      answer:
        "We can configure certain custom or third-party apps, depending on the vehicle’s operating system and display unit compatibility.",
    },
    {
      question: "Is the integration permanent or reversible?",
      answer:
        "It’s fully reversible. Settings and apps can be updated or removed if needed, without affecting your vehicle’s core systems.",
    },
    {
      question: "Does app integration impact battery or performance?",
      answer:
        "No. When done correctly, integration works through existing infotainment systems and has no impact on range or vehicle performance.",
    },
    {
      question: "How long does app integration take?",
      answer:
        "Most setups are completed within 1 to 2 hours, depending on the app platform and the level of customization required.",
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
