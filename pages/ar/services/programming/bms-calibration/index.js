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
    معايرة نظام إدارة البطارية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس دبي تقدم معايرة متقدمة لنظام إدارة البطارية للمركبات الكهربائية، لتحسين دقة البطارية، توقعات المدى، وكفاءة الطاقة."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="معايرة نظام إدارة البطارية دبي، تحسين نظام إدارة البطارية، تحسين بطارية المركبات الكهربائية، خدمة نظام إدارة البطارية الهجينة الإمارات، دقة مدى المركبات الكهربائية"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/bms-calibration"
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
    href="https://evsuae.com/services/programming/bms-calibration"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/bms-calibration"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="معايرة نظام إدارة البطارية في دبي | تحسين أداء البطارية – إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تقدم معايرة متقدمة لنظام إدارة البطارية للمركبات الكهربائية، لتحسين دقة البطارية، توقعات المدى، وكفاءة الطاقة."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/bms-calibration"
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
    content="معايرة نظام إدارة البطارية في دبي | تحسين أداء البطارية – إي في إس"
  />
  <meta
    name="twitter:description"
    content="إي في إس دبي تقدم معايرة متقدمة لنظام إدارة البطارية للمركبات الكهربائية، لتحسين دقة البطارية، توقعات المدى، وكفاءة الطاقة."
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

  {/* Structured Data – Arabic BMS Calibration Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "معايرة نظام إدارة البطارية للمركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات احترافية لمعايرة نظام إدارة البطارية للمركبات الكهربائية، بهدف تحسين دقة قراءة البطارية، توقع المدى، الأمان، وكفاءة الطاقة وإطالة عمر البطارية.",
        serviceType: "معايرة نظام إدارة البطارية للمركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/bms-calibration",
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
  title="معايرة نظام إدارة البطارية للمركبات الكهربائية والهجينة"
  description="في إي في إس، خدمة معايرة نظام إدارة البطارية تعيد ضبط قراءات النظام لتتماشى مع أداء البطارية الفعلي."
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
  description="نظام إدارة البطارية (BMS) في مركبتك الكهربائية يتحكم في كيفية تخزين الطاقة واستخدامها والإبلاغ عنها عبر المركبة. مع مرور الوقت، أو بعد استبدال مكونات، قد يفقد هذا النظام معايرته، مما يؤدي إلى تقديرات مدى غير دقيقة، سلوك شحن ضعيف، أو تآكل البطارية. في إي في إس، تعيد خدمة معايرة نظام إدارة البطارية ضبط قراءات النظام لتتماشى مع أداء البطارية الفعلي. سواء كنت تقود مركبة كهربائية بالكامل أو هجينة، نحن نساعد في استعادة دقة البطارية، السلامة، والكفاءة."
/>


<ServiceBenefitsAr
  title="فوائد معايرة نظام إدارة البطارية"
  items={[
    {
      title: "تحسين دقة المدى",
      description:
        "تعكس تقديرات المدى على لوحة القيادة شحن البطارية الفعلي وعادات القيادة بشكل أدق.",
    },
    {
      title: "أداء خلايا متوازن",
      description:
        "تساعد المعايرة على موازنة جهود الخلايا ومنع التدهور غير المتساوي لخلايا البطارية.",
    },
    {
      title: "تحسين نظام الشحن",
      description:
        "يضمن التفاعل السليم بين الشاحن والبطارية وبرمجيات التحكم في المركبة.",
    },
    {
      title: "إطالة عمر البطارية",
      description:
        "يقلل من الضغط على خلايا البطارية من خلال استعادة تدفق الطاقة الدقيق والحدود التشغيلية.",
    },
    {
      title: "إعادة ضبط بعد الإصلاح",
      description:
        "ضروري بعد استبدال حزمة البطارية أو تبديل الوحدات أو إجراء تحديثات برمجية رئيسية.",
    },
    {
      title: "دعم المركبات الكهربائية والهجينة",
      description:
        "تنطبق طرق المعايرة على المركبات الكهربائية بالكامل والمركبات الهجينة القابلة للشحن.",
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
      question: "ما هي معايرة نظام إدارة البطارية؟",
      answer:
        "هي عملية إعادة ضبط وتزامن نظام إدارة البطارية ليعكس الحالة الحقيقية للبطارية وخلاياها.",
    },
    {
      question: "متى يجب إجراء معايرة نظام إدارة البطارية؟",
      answer:
        "بعد إصلاح البطارية أو استبدالها، أو بعد تحديثات برمجية رئيسية، أو عند ملاحظة تقديرات مدى غير دقيقة أو سلوك شحن غير طبيعي.",
    },
    {
      question: "كيف تحسن المعايرة أداء المركبة؟",
      answer:
        "تعمل المعايرة على تحسين توقعات المدى وسلوك الشحن وصحة البطارية بشكل عام من خلال تصحيح أي اختلال في النظام.",
    },
    {
      question: "هل هذه الخدمة آمنة لمركبتي الكهربائية؟",
      answer:
        "نعم، نستخدم أدوات تشخيص وإجراءات معتمدة ومناسبة لطراز مركبتك لضمان الدقة دون أي مخاطر على أنظمة المركبة.",
    },
    {
      question: "كم تستغرق معايرة نظام إدارة البطارية؟",
      answer:
        "تستغرق معظم عمليات المعايرة من ساعة إلى ساعتين، وذلك حسب طراز المركبة وحالة البطارية الحالية.",
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