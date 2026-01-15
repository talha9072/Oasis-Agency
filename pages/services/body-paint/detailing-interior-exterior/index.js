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
    EV Detailing in Dubai | Interior and Exterior Cleaning, Polishing, and Protection
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS Dubai offers professional interior and exterior detailing for electric vehicles. We clean, polish, and protect your EV with high-quality products and finishes."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV detailing Dubai, electric vehicle interior cleaning, ceramic coating EV, EV polishing UAE, car detailing electric cars"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/body-paint/detailing-interior-exterior"
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
    href="https://evsuae.com/services/body-paint/detailing-interior-exterior"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint/detailing-interior-exterior"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Detailing in Dubai | Interior and Exterior Cleaning, Polishing, and Protection"
  />
  <meta
    property="og:description"
    content="EVS provides full detailing services for EVs in Dubai. Restore and protect your vehicle’s interior and exterior with deep-cleaning and ceramic finishes."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/body-paint/detailing-interior-exterior"
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
    content="EV Detailing in Dubai | Interior and Exterior Cleaning, Polishing, and Protection"
  />
  <meta
    name="twitter:description"
    content="Get your electric vehicle detailed by EVS Dubai. Interior cleaning, paint polishing, and long-lasting ceramic coatings available."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://evsuae.com/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://evsuae.com/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://evsuae.com/favicon-16x16.png"
  />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link
    rel="manifest"
    href="https://evsuae.com/site.webmanifest"
  />

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
        name: "Interior & Exterior Detailing for Electric Vehicles",
        description:
          "EVS UAE offers professional interior and exterior detailing services for electric vehicles. We restore your EV’s appearance through deep cleaning, polishing, and protective treatments tailored for modern EV surfaces.",
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
        url: "https://evsuae.com/services/body-paint/detailing-interior-exterior",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<HeroSection
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  tagText="EVS"
  subtitleText="Electric Vehicle Programming Services"
  title="Interior and Exterior Detailing for Electric Vehicles"
  description="EVS Detailing for Lasting EV Beauty & Protection"
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
  badgeText="EV Body & Paint Services"
  title="About the Service"
  description={`Keeping your electric vehicle clean and protected is about more than aesthetics—it’s part of long-term care. At <strong>EVS</strong>, our interior and exterior detailing service is designed to restore your EV’s appearance and preserve its value. We deep-clean all surfaces, remove contaminants, polish paintwork, and apply protective coatings that resist wear and weather. Whether you drive daily or only on weekends, our detailing solutions help your EV stay looking and feeling its best.`}
/>


<ServiceBenefits
  title="Benefits of Interior and Exterior Detailing"
  items={[
    {
      title: "Interior Deep-Cleaning",
      description:
        "Includes vacuuming, steam treatment, and conditioning for seats, carpets, and trim.",
    },
    {
      title: "Paint Polishing and Correction",
      description:
        "Remove swirl marks, oxidation, and surface blemishes for a refreshed finish.",
    },
    {
      title: "Ceramic Coating Options",
      description:
        "Protect your paint from UV rays, water spots, and contaminants with long-lasting coatings.",
    },
    {
      title: "Glass and Trim Restoration",
      description:
        "We clean, treat, and protect windows, headlights, and exterior plastics.",
    },
    {
      title: "Odor Elimination and Sanitization",
      description:
        "We use safe, non-toxic treatments to improve cabin air quality.",
    },
    {
      title: "EV-Safe Products",
      description:
        "All cleaning and detailing solutions are chosen to be safe for EV interiors and electronics.",
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
      question: "How often should I get my EV detailed?",
      answer:
        "It depends on use, but we recommend a full detail every 4 to 6 months to maintain condition and value.",
    },
    {
      question: "Is ceramic coating worth it for electric vehicles?",
      answer:
        "Yes. Ceramic coatings protect the paint from harsh sun, rain, and debris while making maintenance easier.",
    },
    {
      question: "What makes EV detailing different from regular cars?",
      answer:
        "EVs often have delicate touchscreens, sensors, and seals that require specialized products and techniques to avoid damage.",
    },
    {
      question: "Can you remove stains or odors from upholstery?",
      answer:
        "In most cases, yes. We offer deep-cleaning and deodorizing treatments that target fabric and leather surfaces.",
    },
    {
      question: "How long does a full detailing service take?",
      answer:
        "Detailing typically takes several hours, depending on the condition of the vehicle and the services selected.",
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
