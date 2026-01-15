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
  <title>Car Bumper Repair in Dubai | Fast & Affordable Service</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Need reliable car bumper repair in Dubai? Fix dents, scratches, and cracks quickly at affordable rates. Get your car looking new. Book an appointment today!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="franchise opportunities, electric vehicle franchise, EV service center franchise, EV franchise Dubai, EVS UAE franchise, electric car service business, franchise inquiries, franchise in Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/bumper-repair"
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
    content="Car Bumper Repair in Dubai | Fast & Affordable Service"
  />
  <meta
    property="og:description"
    content="Need reliable car bumper repair in Dubai? Fix dents, scratches, and cracks quickly at affordable rates. Get your car looking new. Book an appointment today!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/bumper-repair/"
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
    content="Car Bumper Repair in Dubai | Fast & Affordable Service"
  />
  <meta
    name="twitter:description"
    content="Need reliable car bumper repair in Dubai? Fix dents, scratches, and cracks quickly at affordable rates. Get your car looking new. Book an appointment today!"
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
        name: "Bumper Repair",
        description:
          "EVS UAE provides expert bumper repair services for electric vehicles in Dubai. From scuffs and cracks to paint restoration and part replacement, we restore your EV’s exterior to a like-new condition with precision and care.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/bumper-repair",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<ServiceMainHero
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="Top EV Bumper Repair Services in Dubai & Abu Dhabi"
  description="Get your electric vehicle bumper repaired by expert technicians at EVS, offering fast, reliable, and top-quality service in Dubai, Abu Dhabi, and across other parts of the UAE."
  buttonText="Book Service"
  buttonLink="https://evsuae.com/contact"
/>

<LogoMarquee />


<ServiceBenefits
  title="Electric Vehicle Bumper Repair Services"
  items={[
    {
      title: "Bumper Scratch Repair",
      description:
        "Scratches on your EV’s bumper? We buff and repaint to restore a flawless finish, protecting your vehicle’s look and value.",
    },
    {
      title: "Dent and Crack Fixing",
      description:
        "Dents or cracks from minor collisions? We repair and reshape your bumper to its original form, ensuring structural integrity.",
    },
    {
      title: "Bumper Repainting",
      description:
        "Faded or mismatched bumper paint? We match your EV’s color and apply a durable coat for a seamless, factory-like finish.",
    },
    {
      title: "Plastic Welding for Bumpers",
      description:
        "Cracked plastic bumpers? We use advanced welding techniques to mend splits, restoring strength without needing a replacement.",
    },
    {
      title: "Bumper Alignment Check",
      description:
        "Misaligned bumpers can affect aerodynamics. We realign and secure your bumper for optimal performance and aesthetics.",
    },
    {
      title: "Full Bumper Replacement",
      description:
        "Severely damaged bumper? We source and install high-quality replacements, ensuring a perfect fit for your EV model.",
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
      question: "Is it worth repairing a bumper?",
      answer:
        "Yes, repairing a bumper is typically more cost-effective than replacing it, especially for minor damage.",
    },
    {
      question: "Can a damaged bumper be repaired?",
      answer:
        "Yes, most bumper damage, such as dents or cracks, can be repaired unless the bumper is severely damaged.",
    },
    {
      question: "What is a bumper smart repair?",
      answer:
        "A smart repair is a quick, cost-effective method for fixing small dents, scratches, or scuffs without replacing the bumper.",
    },
    {
      question: "How much does it cost to repair an EV bumper?",
      answer:
        "The cost depends on the severity of the damage. We provide a free inspection and transparent pricing after assessing the bumper.",
    },
    {
      question: "What types of EV bumper damage can be repaired near me?",
      answer:
        "At EVS, we repair cracks, dents, scratches, and other bumper damage, restoring your EV to its original condition.",
    },
    {
      question: "How long will the bumper repair take?",
      answer:
        "Minor repairs usually take 1–2 days, while major repairs or replacements may take 2–3 days, depending on the damage.",
    },
    {
      question: "Will the bumper repair affect my EV's warranty?",
      answer:
        "No, we use high-quality, compatible parts and approved repair methods, ensuring your vehicle warranty remains unaffected.",
    },
    {
      question: "Do you offer mobile EV bumper repairs?",
      answer:
        "Yes, we offer mobile bumper repairs for minor damage (additional charges apply). Larger repairs are performed at our workshop for best results.",
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
