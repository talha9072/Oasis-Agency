import Head from "next/head";
import HeroSectionAr from "@/components/ar/services/HeroSectionAr";
import ServiceListSection from "@/components/ar/services/ServiceListSection";
import CarServicesAr from "@/components/ar/car-brands/CarServicesAr";
import CarFaqAr from "@/components/ar/car-brands/CarFaqAr";
import WhyChooseEVSAr from "@/components/ar/services/WhyChooseEVSAr";
import BranchesSection from "@/components/ar/common/Branches";
import LogoMarqueeAr from "@/components/ar/common/LogoMarqueeAr";
import CustomerReviewsSection from "@/components/ar/common/Customer";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      

<Head>
  {/* Title */}
  <title>
    EV Mechanical Repairs in Dubai | Certified Electric Vehicle Technicians – EVS UAE
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="EVS UAE offers comprehensive mechanical repair services for electric vehicles in Dubai. From suspension to steering and brake systems, our certified technicians ensure safe and smooth performance."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="EV mechanical repairs Dubai, electric vehicle suspension service, EV brake repair UAE, EV steering system maintenance, certified EV technicians Dubai, EV mechanical diagnostics, EVS UAE mechanical services"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/services/mechanical"
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
    href="https://evsuae.com/services/mechanical"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="EV Mechanical Repairs in Dubai | Certified Electric Vehicle Technicians – EVS UAE"
  />
  <meta
    property="og:description"
    content="EVS UAE offers comprehensive mechanical repair services for electric vehicles in Dubai. From suspension to steering and brake systems, our certified technicians ensure safe and smooth performance."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/services/mechanical"
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
    content="EV Mechanical Repairs in Dubai | Certified Electric Vehicle Technicians – EVS UAE"
  />
  <meta
    name="twitter:description"
    content="EVS UAE offers comprehensive mechanical repair services for electric vehicles in Dubai. From suspension to steering and brake systems, our certified technicians ensure safe and smooth performance."
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

  {/* Structured Data – Mechanical Services */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Mechanical Services for Electric Vehicles",
        description:
          "EVS UAE offers comprehensive mechanical repair and diagnostics for electric vehicles, including brakes, suspension, steering, HVAC systems, drive units, and full mechanical inspections.",
        serviceType: "EV Mechanical Repairs",
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
        url: "https://evsuae.com/services/mechanical",
        inLanguage: "en",
      }),
    }}
  />
</Head>



      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

 {/* end header */}
  {/* start page title (Arabic RTL) */}

<HeroSectionAr
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920"
  brandLabel="إي في إس"
  subtitle="خدمات المركبات الكهربائية الميكانيكية"
  title="الخدمات الميكانيكية"
  description="حلول متميزة للحفاظ على أداء مركبتك الكهربائية بسلاسة"
  ctaText="احجز فحص مركبتك الكهربائية"
  ctaLink="https://evsuae.com/ar/contact"
/>

<LogoMarqueeAr />

<ServiceListSection
  title="الخدمات الميكانيكية"
  services={[
    {
      title: "إصلاح الفرامل والتعليق",
      description:
        "نقدم خدمات شاملة من صيانة الفرامل التجديدية إلى إصلاح أنظمة التعليق بالكامل، بما في ذلك استبدال وسادات الفرامل، إعادة معايرة مستشعرات الفرامل، وتهيئة أنظمة التعليق لتحمل وزن حزم بطاريات المركبات الكهربائية.",
      href: "mechanical/brake-suspension-repairs",
    },
    {
      title: "خدمة التكييف ونظام التدفئة والتهوية",
      description:
        "تتطلب المركبات الكهربائية إدارة حرارية فعالة للراحة وسلامة المكونات. نقوم بتشخيص مشاكل التكييف، إعادة شحن أنظمة التبريد، وصيانة ضواغط ومبخرات التكييف.",
      href: "mechanical/ac-hvac-service",
    },
    {
      title: "إصلاح ناقل الحركة ووحدة القيادة",
      description:
        "نفحص ونصلح وحدات القيادة الكهربائية، وتروس التخفيض، والأنظمة الميكانيكية المرتبطة لمعالجة الضوضاء، الاهتزاز، أو عدم تناسق عزم الدوران.",
      href: "mechanical/transmission-drive-unit-repairs",
    },
    {
      title: "فحوصات ميكانيكية شاملة وتشخيص",
      description:
        "تشمل فحوصاتنا الشاملة تفتيشًا دقيقًا للفرامل، أنظمة التبريد، حالة المحاور، وأكثر من ذلك، مدعومة بأدوات تشخيص خاصة بالمركبات الكهربائية للكشف الدقيق عن الأعطال.",
      href: "mechanical/full-checkups-diagnostics",
    },
    {
      title: "محاذاة الإطارات وأعمال المحاور",
      description:
        "تضمن المحاذاة السليمة طول عمر الإطارات واستقرار القيادة. نقوم بمحاذاة العجلات، فحص المحاور، وإجراء التعديلات للحفاظ على التحكم والكفاءة المثالية.",
      href: "mechanical/tire-alignment-axle-work",
    },
  ]}
/>

<BranchesSection />
<WhyChooseEVSAr />

{/* end section */}
<CustomerReviewsSection />

<CarFaqAr
  heading="الأسئلة الشائعة"
  faqs={[
    {
      question: "هل تتطلب المركبات الكهربائية صيانة ميكانيكية؟",
      answer:
        "نعم، على الرغم من عدم وجود محركات احتراق داخلي، تعتمد المركبات الكهربائية على أنظمة ميكانيكية مثل الفرامل، المحاور، أنظمة التعليق، ومكونات التكييف التي تحتاج إلى صيانة دورية.",
    },
    {
      question: "كم مرة يجب صيانة الفرامل أو التعليق؟",
      answer:
        "نوصي بإجراء فحص ميكانيكي شامل كل 20,000 إلى 30,000 كم، أو عند ظهور أول علامة للضوضاء، عدم الاستقرار، أو انخفاض أداء الفرامل.",
    },
    {
      question: "هل يمكنكم التعامل مع مشاكل ناقل الحركة في موديلات المركبات الكهربائية المستوردة؟",
      answer:
        "نعم، نحن نخدم مجموعة واسعة من ماركات وموديلات المركبات الكهربائية، بما في ذلك تلك غير الشائعة في الإمارات.",
    },
    {
      question: "ما هي الأعراض التي تشير إلى الحاجة لخدمة ميكانيكية؟",
      answer:
        "انتبه لأضواء التحذير، الأصوات الغريبة، الاهتزازات، انخفاض راحة القيادة، أو تغيرات في استجابة الفرامل، فهذه علامات مبكرة تشير إلى وجود مشكلة.",
    },
    {
      question: "كيف يمكنني حجز خدمة مع إي في إس؟",
      answer:
        "اتصل بنا مباشرة أو استخدم نموذج الحجز عبر الإنترنت لتأكيد موعد سريع.",
    },
  ]}
/>


<CarServicesAr
 heading="خدمات المركبات الكهربائية"
  services={[
    {
      link: "https://evsuae.com/ar/services/programming",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/software-icon.svg",
      alt: "أيقونة البرمجة",
      title: "البرمجة والبرمجيات",
      description:
        "حلول ذكية لتحسين وتحديث قدرات مركبتك الكهربائية.",
    },
    {
      link: "https://evsuae.com/ar/services/mechanical",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/mechanical-icon.svg",
      alt: "أيقونة الميكانيكا",
      title: "خدمات ميكانيكية",
      description:
        "صيانة شاملة للمركبات الكهربائية لأداء مثالي.",
    },
    {
      link: "https://evsuae.com/ar/services/battery-electrical",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/battery-icon.svg",
      alt: "أيقونة البطارية",
      title: "البطارية والكهرباء",
      description:
        "تشخيص متقدم وخبرة في أنظمة الجهد العالي.",
    },
    {
      link: "https://evsuae.com/ar/services/body-paint",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/body-paint-icon.svg",
      alt: "أيقونة الهيكل والدهان",
      title: "الهيكل والدهان",
      description:
        "خدمات دهان وإصلاح هيكل بجودة المصنع.",
    },
    {
      link: "https://evsuae.com/ar/services/insurance",
      icon: "https://evsuae.com/.netlify/images?url=/img/icons/insurance-icon.svg",
      alt: "أيقونة التأمين",
      title: "خدمات التأمين",
      description:
        "إصلاح وإعادة دهان سلس من خلال مزود التأمين الخاص بك.",
    },
  ]}
/>



 

        
 <ScrollProgress />



      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      useScrollContainer: false,
     
    },
    
  };
}