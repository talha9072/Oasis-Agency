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
    برمجة المفتاح وبطاقة SIM في دبي | حلول وصول سريعة للمركبات الكهربائية
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس تقدم خدمات برمجة مفتاح وبطاقة SIM آمنة وسريعة للمركبات الكهربائية في دبي. استعادة الوصول والوظائف ببرمجة متخصصة."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="برمجة مفتاح المركبات الكهربائية دبي، خدمة وحدة SIM للمركبات الكهربائية، استبدال مفتاح ذكي للمركبات الكهربائية، برمجة جهاز التحكم عن بعد للمركبات الكهربائية، استعادة وصول المركبات الكهربائية"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/key-sim-programming"
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
    href="https://evsuae.com/services/programming/key-sim-programming"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/key-sim-programming"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="برمجة المفتاح وبطاقة SIM للمركبات الكهربائية في دبي | حلول وصول سريعة"
  />
  <meta
    property="og:description"
    content="إي في إس تقدم خدمات برمجة مفتاح وبطاقة SIM آمنة وسريعة للمركبات الكهربائية في دبي. استعادة الوصول والوظائف ببرمجة متخصصة."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/key-sim-programming"
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
    content="برمجة المفتاح وبطاقة SIM للمركبات الكهربائية في دبي | حلول وصول سريعة"
  />
  <meta
    name="twitter:description"
    content="إي في إس تقدم خدمات برمجة مفتاح وبطاقة SIM آمنة وسريعة للمركبات الكهربائية في دبي. استعادة الوصول والوظائف ببرمجة متخصصة."
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

  {/* Structured Data – Arabic Key & SIM Programming Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "برمجة المفتاح وبطاقة SIM للمركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات برمجة المفتاح وبطاقة SIM للمركبات الكهربائية، بما يشمل استعادة الوصول، تفعيل المفاتيح الذكية، وربط أنظمة الاتصال بأعلى معايير الأمان.",
        serviceType: "برمجة مفاتيح وSIM للمركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/key-sim-programming",
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
  title="برمجة المفتاح وبطاقة SIM للمركبات الكهربائية"
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
  description="تعتمد المركبات الكهربائية على أنظمة مفاتيح رقمية متطورة ووحدات SIM للوصول الآمن والتشغيل. عندما يُفقد المفتاح، يتضرر، أو لا يستجيب، أو عندما تفشل وحدة SIM في التزامن مع النظام الداخلي، تصبح إعادة البرمجة ضرورية فورًا. في إي في إس، نحن متخصصون في إعادة تهيئة وتوصيل المفاتيح الجديدة ووحدات SIM مع أنظمة التحكم الإلكترونية لمركبتك باستخدام أدوات متوافقة مع الشركة المصنعة وبروتوكولات آمنة. هذا يضمن استعادة الوظائف دون المساس بأمان المركبة."
/>

<ServiceBenefitsAr
  title="فوائد برمجة المفتاح وبطاقة SIM"
  items={[
    {
      title: "استعادة الخسارة",
      description:
        "استعادة الوصول إلى مركبتك حتى لو فقد المفتاح الأصلي أو سُرق.",
    },
    {
      title: "حل الأعطال",
      description:
        "القضاء على المشاكل مثل عدم استجابة مفتاح التحكم، فشل التشغيل، أو وحدات SIM غير متزامنة.",
    },
    {
      title: "إعداد مفاتيح متعددة",
      description:
        "برمجة مفاتيح إضافية لتسهيل استخدام عدة سائقين.",
    },
    {
      title: "التوافق مع النظام",
      description:
        "إعادة البرمجة متاحة لمجموعة واسعة من ماركات المركبات الكهربائية بما في ذلك تسليم، بي واي دي، زيكر، وغيرها.",
    },
    {
      title: "ضمان الأمان",
      description:
        "يتم إجراء كل البرمجة تحت توثيق صارم لحماية المركبة من الوصول غير المصرح به.",
    },
    {
      title: "التكامل على مستوى البرمجيات",
      description:
        "يضمن تزامن المفاتيح ووحدات SIM بالكامل مع البرمجيات الثابتة لمركبتك الكهربائية لتشغيل سلس.",
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
      question: "هل يمكنكم برمجة مفتاح بديل بدون المفتاح الأصلي؟",
      answer:
        "نعم. طالما يمكن التحقق من الملكية، يمكننا برمجة مفتاح جديد من الصفر باستخدام إجراءات متوافقة مع الشركة المصنعة.",
    },
    {
      question: "كم من الوقت تستغرق عملية برمجة المفتاح أو بطاقة SIM؟",
      answer:
        "تستغرق البرمجة عادةً من ساعة إلى ثلاث ساعات حسب طراز المركبة واستجابة النظام.",
    },
    {
      question: "ما أنواع المفاتيح والأنظمة التي تدعمونها؟",
      answer:
        "ندعم المفاتيح الذكية، أجهزة الدخول بدون مفتاح، مفاتيح التشغيل عن بُعد، وأنظمة المصادقة القائمة على بطاقة SIM المستخدمة في معظم المركبات الكهربائية الحديثة.",
    },
    {
      question: "ما الغرض من وحدة SIM في المركبة الكهربائية؟",
      answer:
        "تعمل وحدة SIM كمعرف أمني، حيث تصادق على المفتاح وتسمح بالوصول والتشغيل. عند تعرضها للخلل، تكون إعادة البرمجة ضرورية.",
    },
    {
      question: "هل يمكن برمجة أكثر من مفتاح واحد لنفس المركبة؟",
      answer:
        "نعم، يمكننا برمجة عدة مفاتيح لنظام مركبة واحدة لتتيح الوصول المشترك لعدة مستخدمين.",
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