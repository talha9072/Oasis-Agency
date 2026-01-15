import Head from "next/head";
import HeroSectionAr from "@/components/ar/services/HeroSectionAr";
import ServicesAboutAr from "@/components/ar/services/ServicesAboutAr";
import ServiceBenefitsAr from "@/components/ar/services/ServiceBenefitsAr";
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
    إصلاح فرامل وتعليق المركبات الكهربائية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس خدمات إصلاح الفرامل والتعليق للمركبات الكهربائية في دبي، بما في ذلك الفرامل التجديدية، معايرة المستشعرات، وتهيئة التعليق."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="إصلاح فرامل المركبات الكهربائية دبي, صيانة الفرامل التجديدية, تهيئة تعليق المركبات الكهربائية, راحة القيادة للمركبات الكهربائية, معايرة مستشعرات الفرامل الإمارات"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/mechanical/brake-suspension-repairs"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author & Publisher */}
  <meta name="author" content="الإدارة" />
  <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/mechanical/brake-suspension-repairs"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/brake-suspension-repairs"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="إصلاح فرامل وتعليق المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس خدمات إصلاح الفرامل والتعليق للمركبات الكهربائية في دبي، بما في ذلك الفرامل التجديدية، معايرة المستشعرات، وتهيئة التعليق."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/mechanical/brake-suspension-repairs"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    property="og:image:alt"
    content="خدمات إصلاح فرامل وتعليق المركبات الكهربائية في دبي"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="إصلاح فرامل وتعليق المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس خدمات إصلاح الفرامل والتعليق للمركبات الكهربائية في دبي، بما في ذلك الفرامل التجديدية، معايرة المستشعرات، وتهيئة التعليق."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    name="twitter:image:alt"
    content="خدمات إصلاح فرامل وتعليق المركبات الكهربائية في دبي"
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

  {/* Structured Data – Arabic Brake & Suspension Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "إصلاح فرامل وتعليق المركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات متخصصة لإصلاح فرامل وتعليق المركبات الكهربائية، تشمل أنظمة الفرامل التجديدية، معايرة المستشعرات، وضبط التعليق لتحسين الأمان وراحة القيادة.",
        serviceType: "إصلاح فرامل وتعليق المركبات الكهربائية",
        provider: {
          "@type": "AutomotiveBusiness",
          name: "خدمات المركبات الكهربائية الإمارات",
          url: "https://evsuae.com/",
          logo:
            "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971600500387",
            email: "contact@evsuae.com",
            contactType: "خدمة العملاء",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "الإمارات العربية المتحدة",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "دبي، الإمارات العربية المتحدة",
          },
        },
        url: "https://evsuae.com/ar/services/mechanical/brake-suspension-repairs",
        inLanguage: "ar",
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
  subtitle="خدمات إصلاح الفرامل والتعليق للمركبات الكهربائية"
  title="إصلاح الفرامل والتعليق للمركبات الكهربائية"
  description="تكييف مركبتك المستوردة مع المعايير المحلية لأداء آمن وسلس"
  ctaText="احجز فحص مركبتك الكهربائية"
  ctaLink="https://evsuae.com/ar/contact"
/>

<LogoMarqueeAr />


<ServicesAboutAr
  image="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024"
  imageSrcSet={`
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=640 640w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1440 1440w,
    https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1920 1920w
  `}
  imageSizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
  imageAlt="صيانة وإصلاح المركبات الكهربائية"
  badgeText="خدمات ميكانيكية للمركبات الكهربائية"
  title="عن الخدمة"
  description={`تعمل أنظمة الفرامل والتعليق في المركبات الكهربائية تحت أحمال ضغط مختلفة مقارنة بالمركبات التقليدية، وذلك بسبب أنظمة الفرامل التجديدية ووزن حزم البطاريات الإضافية. في <strong>إي في إس</strong>، نقدم خدمات إصلاح شاملة للفرامل والتعليق مصممة خصيصًا للمركبات الكهربائية، من استبدال وسادات الفرامل وإعادة معايرة المستشعرات إلى تشخيص التعليق وتصحيح ارتفاع الركوب، لضمان توقف سلس وقيادة مريحة.`}
/>



<ServiceBenefitsAr
  title="فوائد إصلاح الفرامل والتعليق"
  items={[
    {
      title: "صيانة الفرامل التجديدية",
      description:
        "نقوم بصيانة وتسوية مشاكل الأنظمة التي تحول طاقة الفرامل إلى شحن البطارية، مما يحافظ على الكفاءة والتحكم.",
    },
    {
      title: "استبدال وسادات الفرامل",
      description:
        "يتم استبدال وسادات الفرامل المتآكلة بمكونات عالية الجودة مناسبة لأنظمة الفرامل التجديدية.",
    },
    {
      title: "معايرة المستشعرات",
      description:
        "نقوم بإعادة معايرة مستشعرات ضغط الفرامل ونظام ABS لتتناسب مع تحديثات النظام أو بعد الصيانة.",
    },
    {
      title: "تهيئة التعليق",
      description:
        "يتم تهيئة أنظمة التعليق للمركبات الكهربائية لتحمل وزن البطارية مع الحفاظ على راحة القيادة والاستقرار.",
    },
    {
      title: "صيانة المساعدات والدعامات",
      description:
        "نفحص ونستبدل المساعدات والدعامات المتآكلة أو التالفة لتحسين التحكم وامتصاص الصدمات على الطريق.",
    },
    {
      title: "حل مشاكل الضوضاء والاهتزاز",
      description:
        "نقضي على الأصوات الغريبة، الطقطقة، أو الاهتزازات الناتجة عن مكونات التعليق غير المتوازنة أو المتدهورة.",
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
      question: "هل تستخدم المركبات الكهربائية فرامل تقليدية أم شيئًا مختلفًا؟",
      answer:
        "تستخدم المركبات الكهربائية الفرامل التجديدية جنبًا إلى جنب مع الفرامل الهيدروليكية التقليدية. كلا النظامين يتطلبان صيانة لضمان الأداء الأمثل.",
    },
    {
      question: "كم مرة يجب استبدال وسادات الفرامل في المركبات الكهربائية؟",
      answer:
        "تدوم وسادات الفرامل في المركبات الكهربائية لفترة أطول بفضل الفرامل التجديدية، لكن يجب فحصها كل 20,000 إلى 30,000 كم أو عند انخفاض الأداء.",
    },
    {
      question: "لماذا تشعر مركبتي الكهربائية بالاهتزاز أو عدم الاستقرار أثناء القيادة؟",
      answer:
        "قد يشير ذلك إلى تآكل المساعدات، اختلال في نظام التعليق، أو توزيع غير متساوٍ للوزن، وهي مشكلات يمكننا تشخيصها وإصلاحها بسرعة.",
    },
    {
      question: "هل يمكن أن تؤثر مشاكل التعليق على المدى أو أداء البطارية؟",
      answer:
        "نعم، يمكن أن يؤدي التعليق السيء إلى توزيع غير متساوٍ للوزن، استخدام غير فعال للطاقة، وتآكل زائد في مكونات ناقل الحركة.",
    },
    {
      question: "ما هي العلامات التي تشير إلى حاجة نظام الفرامل للصيانة؟",
      answer:
        "مسافات توقف أطول، أضواء التحذير، أصوات صرير، أو نعومة دواسة الفرامل هي علامات تدل على ضرورة صيانة الفرامل.",
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