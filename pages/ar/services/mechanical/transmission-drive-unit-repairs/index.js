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
    إصلاح ناقل الحركة للمركبات الكهربائية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس خدمات إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية في دبي، مع حل مشاكل فقدان العزم، ضوضاء التروس، واهتزازات مجموعة الدفع."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="إصلاح ناقل الحركة للمركبات الكهربائية دبي, صيانة وحدة القيادة الكهربائية, مشاكل عزم المركبات الكهربائية, إصلاح تروس التقليل الكهربائية, اهتزازات مجموعة الدفع الكهربائية"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/mechanical/transmission-drive-unit-repairs"
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
    href="https://evsuae.com/services/mechanical/transmission-drive-unit-repairs"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/transmission-drive-unit-repairs"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="إصلاح ناقل الحركة للمركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس خدمات إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية في دبي، مع حل مشاكل فقدان العزم، ضوضاء التروس، واهتزازات مجموعة الدفع."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/mechanical/transmission-drive-unit-repairs"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    property="og:image:alt"
    content="خدمات إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية في دبي"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="إصلاح ناقل الحركة للمركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس خدمات إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية في دبي، مع حل مشاكل فقدان العزم، ضوضاء التروس، واهتزازات مجموعة الدفع."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    name="twitter:image:alt"
    content="خدمات إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية في دبي"
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

  {/* Structured Data – Arabic Transmission & Drive Unit Repairs */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات متخصصة لإصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية، تشمل معالجة فقدان العزم، ضوضاء التروس، الاهتزازات، ومشاكل مجموعة الدفع لضمان أداء سلس وموثوق.",
        serviceType: "إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/mechanical/transmission-drive-unit-repairs",
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
  subtitle="خدمات إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية"
  title="إصلاح ناقل الحركة ووحدة القيادة للمركبات الكهربائية"
  description="تكييف مركبتك المستوردة مع المعايير المحلية لأداء سلس وموثوق"
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
  description={`تتميز مجموعات نقل الحركة في المركبات الكهربائية بتروس تقليل عالية الكفاءة ووحدات قيادة مدمجة، ولكن عندما تتآكل هذه المكونات أو تتعطل، قد تؤدي إلى فقدان العزم، أصوات غير طبيعية، أو جودة قيادة ضعيفة. في <strong>إي في إس</strong>، نقدم خدمات إصلاح متخصصة لناقل الحركة ووحدة القيادة للمركبات الكهربائية. باستخدام أدوات تشخيص دقيقة، نحن نحدد مشاكل مجموعة نقل الحركة ونعيد الأداء السلس والهادئ للنظام، سواء كانت المشكلة تتعلق بربط التروس، الاهتزازات الداخلية، أو عدم انتظام الإخراج.`}
/>



<ServiceBenefitsAr
  title="فوائد إصلاح ناقل الحركة ووحدة القيادة"
  items={[
    {
      title: "تشخيص وحدة القيادة",
      description:
        "نفحص أخطاء التحكم، العيوب الميكانيكية، وتسليم الطاقة غير المنتظم الذي يؤثر على أداء المحرك.",
    },
    {
      title: "إصلاح تروس التقليل",
      description:
        "نعالج التآكل أو عدم التوازن في تروس التقليل التي تؤثر على توزيع العزم ومستويات الضوضاء.",
    },
    {
      title: "القضاء على الضوضاء والاهتزاز",
      description:
        "نحل مشاكل الطقطقة، الأزيز، والاهتزازات الناتجة عن اختلالات مجموعة نقل الحركة أو مشاكل المحامل.",
    },
    {
      title: "استعادة العزم والتسارع",
      description:
        "نعيد إخراج العزم السلس والتسارع المتجاوب، خاصة تحت الأحمال.",
    },
    {
      title: "استبدال الأختام والمحامل",
      description:
        "نستبدل المكونات الداخلية المتآكلة التي قد تتسبب في التسريبات أو السحب الميكانيكي.",
    },
    {
      title: "فحوصات الحماية الحرارية",
      description:
        "نفحص أنظمة التبريد التي تمنع ارتفاع حرارة وحدة القيادة وانخفاض الأداء.",
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
      question: "ما هي علامات حاجة وحدة القيادة في مركبتي الكهربائية للإصلاح؟",
      answer:
        "الأصوات غير الطبيعية، انخفاض العزم، التردد عند التسارع، أو الاهتزازات أثناء القيادة هي مؤشرات رئيسية.",
    },
    {
      question: "هل ناقل الحركة في المركبات الكهربائية مشابه لسيارات البنزين؟",
      answer:
        "تستخدم المركبات الكهربائية أنظمة تقليل السرعة أحادية السرعة، وليس نواقل حركة متعددة السرعات. لكنها لا تزال تحتاج إلى صيانة وإصلاح عند التلف.",
    },
    {
      question: "هل يمكن أن تؤثر مشاكل وحدة القيادة على المدى أو الكفاءة؟",
      answer:
        "نعم، التروس المعيبة أو السحب الناتج عن المكونات التالفة يمكن أن يؤثر على استهلاك الطاقة والكفاءة العامة.",
    },
    {
      question: "كم يستغرق إصلاح وحدة القيادة عادةً؟",
      answer:
        "تستكمل معظم التشخيصات والإصلاحات خلال 1–2 أيام عمل، حسب شدة المشكلة وتوفر القطع.",
    },
    {
      question: "هل تقدمون صيانة لوحدات القيادة لجميع ماركات المركبات الكهربائية؟",
      answer:
        "نعم، نقدم خدمات لتيسلا، بي واي دي، زيكر، ومعظم منصات المركبات الكهربائية الأخرى ذات أنظمة الدفع القائمة على وحدة القيادة.",
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