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
    Custom Region Coding for EVs in Dubai | Unlock Regional Features – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers custom region coding for electric vehicles in Dubai. Enable or adjust regional settings like language, units, and feature activation with expert EV programmers."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV region coding Dubai, custom EV settings UAE, electric vehicle regional feature unlock, EV language setting change, EV unit customization, EVS programming services, custom coding for EVs Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/programming/custom-region-coding"
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
    href="https://evsuae.com/services/programming/custom-region-coding"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/custom-region-coding"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Custom Region Coding for EVs in Dubai | Unlock Regional Features – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers custom region coding for electric vehicles in Dubai. Enable or adjust regional settings like language, units, and feature activation with expert EV programmers."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/programming/custom-region-coding"
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
    content="Custom Region Coding for EVs in Dubai | Unlock Regional Features – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers custom region coding for electric vehicles in Dubai. Enable or adjust regional settings like language, units, and feature activation with expert EV programmers."
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

  {/* Structured Data – Custom Region Coding Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Custom Region Coding for Electric Vehicles",
        description:
          "EVS UAE offers professional custom region coding services for electric vehicles. Enable regional features such as language, units, and market-specific functionality with expert EV programmers.",
        serviceType: "EV Programming & Coding",
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
        url: "https://evsuae.com/services/programming/custom-region-coding",
        inLanguage: "en",
      }),
    }}
  />
</Head>

<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Custom region coding (UAE spec upgrades)"
  description="Adapt Your Imported Vehicle to Local Standards & Unlock Hidden Features"
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
  title="What is Custom Region Coding?"
  description={`Custom region coding is the process of modifying your vehicle’s software to match the standards and preferences of a specific geographic location.
  <br />Whether your car was imported or you simply want to enable region-specific options, we can help.`}
/>

<ServiceBenefits
  title="Benefits of Custom Region Coding"
  items={[
    {
      title: "Enable Region-Specific Features",
      description:
        "Activate or unlock functions designed for your market, such as DRLs (Daytime Running Lights), seatbelt reminders, auto door locking, or additional infotainment features.",
    },
    {
      title: "Language and Unit Settings",
      description:
        "Adjust display units (miles to kilometers, °F to °C), time zones, and language preferences for easier use.",
    },
    {
      title: "Radio Frequency Adjustments",
      description:
        "Ensure your radio and media systems are compatible with local broadcast frequencies and standards.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Meet local vehicle and safety regulations for roadworthiness and registration.",
    },
    {
      title: "Improve Driving Comfort and Usability",
      description:
        "Customize vehicle behaviors to match local driving habits and personal preferences.",
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
      question: "Is region coding safe for my vehicle?",
      answer:
        "Yes — all our coding follows OEM guidelines and is non-invasive. It does not damage your car or void warranties.",
    },
    {
      question: "Can I undo region coding if needed?",
      answer:
        "Absolutely. We can revert your vehicle to factory coding at any time if required.",
    },
    {
      question: "What’s the difference between coding and programming?",
      answer:
        "Coding customizes existing vehicle software to enable or disable features without changing the core software. Programming updates or rewrites the software itself, often required after hardware changes.",
    },
    {
      question: "Can I unlock hidden features with region coding?",
      answer:
        "Yes. Region coding can activate hidden or disabled features depending on your vehicle’s make and model, including comfort functions, lighting options, and infotainment capabilities.",
    },
    {
      question: "Do you offer coding for all car brands and models?",
      answer:
        "We support a wide range of makes and models. Some very new or rare vehicles may have limited options, so contact us with your vehicle details and we’ll confirm compatibility.",
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
