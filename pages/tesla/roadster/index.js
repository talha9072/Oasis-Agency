import Head from "next/head";
import FullHeroCars from "@/components/car-brands/FullHero.js";
import CarAbout from "@/components/car-brands/CarAbout.js";
import CarServices from "@/components/car-brands/CarServices.js";
import CarFaq from "@/components/car-brands/CarFaq.js";
import CustomerReviewsSection from "@/components/common/Customer";
import LatestBlogsLoader from "@/components/car-brands/LatestBlogsLoader";
import StatsCounterSection from "@/components/common/StatsCounter";
import BranchesSection from "@/components/common/Branches";
import ScrollProgressEn from "@/components/common/ScrollProgress";

export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
     
   

<Head>
  {/* Title */}
  <title>
    Tesla Roadster Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE provides professional maintenance and repair services for the Tesla Roadster in Dubai. Expert EV specialists ensure high-performance care and diagnostics."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Tesla Roadster service Dubai, Roadster maintenance UAE, Tesla EV repair Dubai, Roadster diagnostics UAE, expert Tesla technicians, EVS Roadster support, Tesla service center Dubai"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/tesla/roadster"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />

  {/* Viewport */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="en" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/tesla/roadster"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/tesla/roadster"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla/roadster"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Tesla Roadster Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE provides professional maintenance and repair services for the Tesla Roadster in Dubai. Expert EV specialists ensure high-performance care and diagnostics."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/tesla/roadster"
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
    content="Tesla Roadster Service in Dubai | Expert EV Maintenance & Repairs – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE provides professional maintenance and repair services for the Tesla Roadster in Dubai. Expert EV specialists ensure high-performance care and diagnostics."
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
        name: "Tesla Roadster Electric Vehicle Warranty, Repair & Service",
        description:
          "EVS UAE offers expert diagnostics, repair, and maintenance services for the Tesla Roadster in Dubai. Our technicians provide specialized care for battery systems, drivetrain components, software updates, and overall performance tuning to keep your Roadster in top shape.",
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
        url: "https://evsuae.com/tesla/roadster",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>



<FullHeroCars
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/tesla-roadster-c.jpg&q=70&w=1920"
  titlePrefix=""
  highlight="Tesla Roadster"
  titleSuffix="Repair, Maintenance & Warranty Services UAE"
  description="Your Tesla Roadster is built for speed, luxury, and reliable performance. But even the best electric supercar needs expert maintenance. Whether it’s software updates or suspension tuning, EVS UAE ensures your Tesla Roadster Dubai stays in perfect shape."
  ctaText="Book Service"
  ctaLink="https://evsuae.com/contact"
/>


<CarAbout
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/tesla-roaster-b.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-roaster-b.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-roaster-b.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-roaster-b.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-roaster-b.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-roaster-b.jpg&q=70&w=1220 1220w
  "
  imageAlt="About Tesla Roadster image"
  heading="About Tesla Roadster"
  description="The Tesla Roadster is an engineering marvel designed for extreme performance and efficiency. It delivers breathtaking acceleration, a top speed exceeding 400 km/h, and a range of over 1,000 km on a single charge. Inside, the Tesla Roadster features a futuristic, minimalist interior with a panoramic glass roof and an advanced digital cockpit. A high-performance electric supercar like this requires specialized care. At EVS UAE, we provide expert Tesla Roadster maintenance and repair services, using advanced diagnostics and precision tools to maintain peak performance while meeting factory-level service standards."
/>


<CarServices
  heading="Tesla Roadster Repair & Maintenance Services"
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
      question: "Do you service the original Tesla Roadster?",
      answer:
        "Yes, we are experienced in servicing both the original Tesla Roadster and upcoming models, including battery packs, drivetrain systems, and custom upgrades.",
    },
    {
      question: "Can you repair rare components on the Tesla Roadster?",
      answer:
        "Yes, we can source hard-to-find components and, where necessary, fabricate custom solutions for discontinued or rare Tesla Roadster parts.",
    },
    {
      question: "What kind of performance tuning is available for the Roadster?",
      answer:
        "We offer diagnostic performance tuning, suspension optimization, and software enhancements to help maintain peak performance on Tesla Roadster models.",
    },
    {
      question: "Is your garage qualified to work on limited-production Teslas like the Roadster?",
      answer:
        "Yes, our technicians are trained to work on limited-production and high-performance Tesla models, including the Roadster, with precision and care.",
    },
  ]}
/>



{/* Branches Section with Tabs */}
      <BranchesSection />

      <StatsCounterSection />

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
