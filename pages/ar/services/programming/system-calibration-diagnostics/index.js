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
    معايرة وتشخيص أنظمة المركبات الكهربائية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس دبي تقدم خدمات معايرة وتشخيص متقدمة للمركبات الكهربائية. نختبر ونضبط الأنظمة لضمان الدقة والأداء الموثوق."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="تشخيص المركبات الكهربائية دبي، معايرة أنظمة المركبات الكهربائية، محاذاة حساسات المركبات الكهربائية، اختبار أداء المركبات الكهربائية الإمارات، تشخيص برمجيات المركبات الكهربائية"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/system-calibration-diagnostics"
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
    href="https://evsuae.com/services/programming/system-calibration-diagnostics"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/system-calibration-diagnostics"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="معايرة وتشخيص أنظمة المركبات الكهربائية في دبي | اختبار دقيق ومحاذاة – إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تقدم خدمات معايرة وتشخيص متقدمة للمركبات الكهربائية. نختبر ونضبط الأنظمة لضمان الدقة والأداء الموثوق."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/system-calibration-diagnostics"
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
    content="معايرة وتشخيص أنظمة المركبات الكهربائية في دبي | اختبار دقيق ومحاذاة – إي في إس"
  />
  <meta
    name="twitter:description"
    content="إي في إس دبي تقدم خدمات معايرة وتشخيص متقدمة للمركبات الكهربائية. نختبر ونضبط الأنظمة لضمان الدقة والأداء الموثوق."
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

  {/* Structured Data – Arabic System Calibration & Diagnostics */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "معايرة وتشخيص أنظمة المركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات احترافية لمعايرة وتشخيص أنظمة المركبات الكهربائية، تشمل فحص الحساسات، ضبط وحدات التحكم، والتحقق من أداء الأنظمة الإلكترونية بدقة عالية.",
        serviceType: "معايرة وتشخيص أنظمة المركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/system-calibration-diagnostics",
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
  title="معايرة وتشخيص أنظمة المركبات الكهربائية"
  description="في إي في إس، تم تصميم خدمات المعايرة والتشخيص لاختبار وضبط كل نظام في مركبتك الكهربائية بدقة."
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
  description="تعتمد المركبات الكهربائية على أنظمة دقيقة للغاية لتعمل بأمان وكفاءة. سواء كانت نظام إدارة البطارية، حساسات التوجيه، أو موديولات القيادة الذاتية، الدقة مهمة. في إي في إس، تم تصميم خدمات المعايرة والتشخيص لاختبار وضبط كل نظام في مركبتك الكهربائية. باستخدام برمجيات خاصة بالعلامة التجارية وأدوات متقدمة، نضمن عمل كل مكون بشكل صحيح، ومحاذاته بدقة، والتواصل مع المركبة كما هو متوقع."
/>


<ServiceBenefitsAr
  title="فوائد معايرة وتشخيص الأنظمة"
  items={[
    {
      title: "كشف الأعطال بدقة",
      description:
        "أدواتنا تحدد المشكلات التي قد لا تكتشفها الفحوصات التشخيصية العامة.",
    },
    {
      title: "معايرة الحساسات والكاميرات",
      description:
        "نقوم بمحاذاة مكونات أنظمة مساعدة السائق المتقدمة مثل كاميرات الحفاظ على المسار، حساسات القرب، وموديولات الرادار.",
    },
    {
      title: "تشخيص البطارية والمحرك",
      description:
        "فحص توازن الجهد، تنظيم الحرارة، وتدفق الطاقة لتحقيق أداء مثالي.",
    },
    {
      title: "حل رموز الأخطاء",
      description:
        "إزالة تحذيرات النظام وتحديد الأسباب الجذرية لمنع المشكلات المستقبلية.",
    },
    {
      title: "فحص اتصال وحدات التحكم",
      description:
        "ضمان مزامنة جميع وحدات التحكم والاستجابة كما هو متوقع.",
    },
    {
      title: "تحسين الكفاءة والسلامة",
      description:
        "المعايرة المناسبة تمنع فقدان الطاقة، أخطاء الفرامل، أو استجابات النظام غير المنسجمة.",
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
      question: "متى يجب معايرة أنظمة المركبة الكهربائية؟",
      answer:
        "يُوصى بمعايرة الأنظمة بعد التصادم، استبدال الموديولات، تحديث البرمجيات، أو إذا لاحظت عدم استقرار في الأداء.",
    },
    {
      question: "ما هي الأنظمة المشمولة في التشخيص؟",
      answer:
        "نفحص أنظمة إدارة البطارية، وحدات القيادة الكهربائية، مصفوفات الحساسات، وحدات التحكم الإلكترونية، وغيرها بناءً على نوع المركبة.",
    },
    {
      question: "هل المعايرة مخصصة فقط لأنظمة مساعدة السائق المتقدمة؟",
      answer:
        "لا، فبينما معايرة أنظمة مساعدة السائق المتقدمة ضرورية، نقوم أيضًا بمعايرة الأنظمة الحرارية، التوجيه، الفرامل التجديدية، ومكونات الشحن.",
    },
    {
      question: "كم تستغرق عملية التشخيص والمعايرة؟",
      answer:
        "تُكتمل معظم عمليات التشخيص في ساعات قليلة. إذا كانت المعايرة مطلوبة، فتعتمد المدة على النظام وطراز المركبة الكهربائية.",
    },
    {
      question: "هل يمكن لهذه الخدمة تحسين الأداء أو المدى؟",
      answer:
        "نعم، الأنظمة المعايرة بشكل صحيح تقلل من الفاقد، تمنع تعارض الأنظمة، وتضمن قيادة أكثر سلاسة وأمانًا.",
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