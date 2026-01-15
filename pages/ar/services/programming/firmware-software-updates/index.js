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
    تحديثات برمجيات المركبات الكهربائية في دبي | أداء وميزات واستقرار
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="حافظ على تحديث مركبتك الكهربائية. إي في إس تقدم تحديثات البرمجيات لتحسين الأداء، إصلاح الأخطاء، وفتح ميزات جديدة لأفضل الماركات."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="تحديث برمجيات المركبات الكهربائية دبي، ترقية البرامج الثابتة للمركبات الكهربائية، تحديث وحدات التحكم الإلكترونية للمركبات الكهربائية، تحسين ميزات المركبات الكهربائية، إصلاح أخطاء نظام المركبات الكهربائية"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/firmware-software-updates"
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
    href="https://evsuae.com/services/programming/firmware-software-updates"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/firmware-software-updates"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services/programming/firmware-software-updates"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="تحديثات برمجيات المركبات الكهربائية في دبي | الأداء والميزات والاستقرار"
  />
  <meta
    property="og:description"
    content="حافظ على تحديث مركبتك الكهربائية. إي في إس تقدم تحديثات البرمجيات لتحسين الأداء، إصلاح الأخطاء، وفتح ميزات جديدة لأفضل الماركات."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/firmware-software-updates"
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
    content="تحديثات برمجيات المركبات الكهربائية في دبي | الأداء والميزات والاستقرار"
  />
  <meta
    name="twitter:description"
    content="حافظ على تحديث مركبتك الكهربائية. إي في إس تقدم تحديثات البرمجيات لتحسين الأداء، إصلاح الأخطاء، وفتح ميزات جديدة لأفضل الماركات."
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

  {/* Structured Data – Arabic Firmware & Software Updates Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تحديثات برمجيات المركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات تحديث البرمجيات والبرامج الثابتة للمركبات الكهربائية لتحسين الأداء، الاستقرار، الأمان، وفتح ميزات جديدة وفق أحدث الإصدارات.",
        serviceType: "تحديثات برمجيات المركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/firmware-software-updates",
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920"
  brandLabel="إي في إس"
  subtitle="خدمات برمجة المركبات الكهربائية"
  title="تحديثات البرمجيات والتطبيقات الثابتة للمركبات الكهربائية"
  description="تكييف مركبتك المستوردة مع المعايير المحلية وفتح الميزات المخفية"
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
  badgeText="خدمات برمجة المركبات الكهربائية"
  title="عن الخدمة"
  description="مع استمرار تطور المركبات الكهربائية، أصبحت تحديثات البرمجيات والتطبيقات الثابتة ضرورية للحفاظ على أداء النظام، ضمان السلامة، وفتح ميزات جديدة. في إي في إس، نقدم خدمات تحديث البرمجيات والتطبيقات الثابتة بمهارة عالية تتماشى مع مواصفات الشركة المصنعة، مما يعزز وحدات التحكم الإلكترونية (ECUs)، أنظمة الترفيه، ميزات مساعدة السائق، وأكثر. سواء كانت مركبتك الكهربائية تعاني من التأخير، الأخطاء، أو تحتاج ببساطة إلى تجديد الاستقرار، فإن عملية التحديث لدينا تبقي أنظمتك محدثة ومُحسنة."
/>

<ServiceBenefitsAr
  title="فوائد تحديثات البرمجيات والتطبيقات الثابتة"
  items={[
    {
      title: "تحسين الاستقرار",
      description:
        "تقليل أعطال النظام، قراءات المستشعرات الخاطئة، وتأخير وحدات التحكم الإلكترونية ببرمجيات محدثة.",
    },
    {
      title: "تعزيز الأداء",
      description:
        "الوصول إلى تحسين تخطيط عزم الدوران، تحسين البطارية، واستجابات نظام أسرع.",
    },
    {
      title: "إصلاح الأخطاء",
      description:
        "القضاء على الأخطاء الشائعة التي تؤثر على أنظمة الترفيه، المستشعرات، أو لوحات العدادات.",
    },
    {
      title: "ميزات جديدة",
      description:
        "تفعيل الوظائف الجديدة مثل أوضاع القيادة الذاتية المحسنة، ملفات تعريف السائق، أو أدوات توفير الطاقة.",
    },
    {
      title: "تحديثات التوافق",
      description:
        "ضمان توافق أنظمة مركبتك الكهربائية مع الأجهزة الحديثة أو البنية التحتية المتصلة.",
    },
    {
      title: "تكامل خاص بالماركة",
      description:
        "نحدث الأنظمة لتسليم، بي واي دي، زيكر، ومنصات المركبات الكهربائية الحديثة الأخرى باستخدام أدوات متوافقة مع الماركة.",
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
      question:
        "كيف أعرف إذا كانت مركبتي الكهربائية بحاجة إلى تحديث برمجيات أو تطبيقات ثابتة؟",
      answer:
        "إذا كنت تواجه تأخيرات، ميزات مفقودة، أخطاء في النظام، أو واجهات قديمة، فقد تحتاج مركبتك الكهربائية إلى تحديث.",
    },
    {
      question: "كم من الوقت تستغرق عملية التحديث؟",
      answer:
        "تستغرق معظم التحديثات من ساعة إلى ثلاث ساعات حسب طراز المركبة وإصدار النظام.",
    },
    {
      question: "هل يمكن أن تحسن التحديثات أداء القيادة أو الكفاءة؟",
      answer:
        "نعم. تتضمن العديد من تحديثات التطبيقات الثابتة تحسينات للبطارية، فرامل التجديد المحسنة، واستجابة قيادة أكثر سلاسة.",
    },
    {
      question: "هل أفقد بياناتي أو إعداداتي أثناء التحديث؟",
      answer:
        "لا. يتم الاحتفاظ بالإعدادات وملفات تعريف السائق ما لم تكن هناك حاجة لإعادة ضبط النظام بالكامل، وسنبلغك بذلك مسبقًا.",
    },
    {
      question: "هل يتم التحديث لاسلكيًا أم من خلال اتصال مادي؟",
      answer:
        "نقوم بإجراء التحديثات باستخدام اتصالات مباشرة وآمنة عبر معدات التشخيص لضمان الاستقرار ومنع الانقطاعات.",
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