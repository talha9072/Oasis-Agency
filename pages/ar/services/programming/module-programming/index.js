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
    برمجة موديولات المركبات الكهربائية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس دبي تقدم خدمات برمجة موديولات المركبات الكهربائية. نركب ونعيد برمجة وحدات التحكم لضمان التكامل السلس والأداء الموثوق."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="برمجة موديولات المركبات الكهربائية دبي، برمجة وحدة التحكم الإلكترونية، إعداد وحدات التحكم الكهربائية، إعادة برمجة موديولات المركبات الكهربائية، تكامل إلكترونيات المركبات الكهربائية"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/module-programming"
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
    href="https://evsuae.com/services/programming/module-programming"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/module-programming"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="برمجة موديولات المركبات الكهربائية في دبي | ترميز وتكامل وحدات التحكم – إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تقدم خدمات برمجة موديولات المركبات الكهربائية. نركب ونعيد برمجة وحدات التحكم لضمان التكامل السلس والأداء الموثوق."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/module-programming"
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
    content="برمجة موديولات المركبات الكهربائية في دبي | ترميز وتكامل وحدات التحكم – إي في إس"
  />
  <meta
    name="twitter:description"
    content="إي في إس دبي تقدم خدمات برمجة موديولات المركبات الكهربائية. نركب ونعيد برمجة وحدات التحكم لضمان التكامل السلس والأداء الموثوق."
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

  {/* Structured Data – Arabic Module Programming Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "برمجة موديولات المركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات متخصصة في برمجة موديولات ووحدات التحكم للمركبات الكهربائية، بما يشمل الترميز، الاستبدال، وضمان التكامل الإلكتروني والأداء الأمثل.",
        serviceType: "برمجة موديولات المركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/module-programming",
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
  title="برمجة الوحدات للمركبات الكهربائية"
  description="في إي في إس، نحن متخصصون في برمجة وتكامل هذه الوحدات مع أنظمة مركبتك الكهربائية الحالية."
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
  description="تعتمد المركبات الكهربائية الحديثة على العديد من وحدات التحكم لإدارة كل شيء من ميزات السلامة وأداء مجموعة الدفع إلى أنظمة الترفيه والتحكم بالمناخ. في إي في إس، نحن متخصصون في برمجة وتكامل هذه الوحدات مع أنظمة مركبتك الكهربائية الحالية. سواء كنت تقوم بتركيب وحدة تحكم جديدة أو تحديث وحدة موجودة، نحن نضمن أن تعمل كل وحدة بدقة وتتواصل بشكل صحيح ضمن شبكة المركبة الإلكترونية."
/>


<ServiceBenefitsAr
  title="فوائد برمجة الوحدات"
  items={[
    {
      title: "تكامل وحدة جديدة",
      description:
        "نقوم بتركيب وتكوين وحدات التحكم الإلكترونية ووحدات التحكم بالبطارية وغيرها من الوحدات لتتوافق مع هيكلية نظام مركبتك الأصلية.",
    },
    {
      title: "إعادة برمجة الوحدات الحالية",
      description:
        "إذا تم استبدال وحدة أو ظهرت أخطاء، نقوم بتحديثها أو إعادة معايرتها لاستعادة الوظائف الكاملة.",
    },
    {
      title: "فحوصات النظام الشاملة",
      description:
        "بعد البرمجة، نتحقق من أن جميع الوحدات متوافقة مع منطق تشغيل مركبتك الكهربائية.",
    },
    {
      title: "حل رموز الأعطال",
      description:
        "يمكن غالبًا إصلاح أضواء التحذير المستمرة أو أخطاء الاتصال من خلال إعادة برمجة الوحدات بشكل صحيح.",
    },
    {
      title: "دعم منصات المركبات الكهربائية",
      description:
        "نتعامل مع وحدات لأبرز ماركات المركبات الكهربائية بما في ذلك تسلا، بي واي دي، وزيكر.",
    },
    {
      title: "التوافق المستقبلي",
      description:
        "يضمن إعداد الوحدات بشكل صحيح استعداد مركبتك لتحديثات البرمجيات أو ترقيات الأجهزة المستقبلية.",
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
      question: "ما هي برمجة الوحدات في المركبات الكهربائية؟",
      answer:
        "تتضمن تكوين أو تحديث البرمجيات في وحدات التحكم الإلكترونية التي تدير أنظمة رئيسية مثل التوجيه، الفرامل، إدارة البطارية، والشاشات.",
    },
    {
      question: "متى تحتاج مركبتي الكهربائية إلى برمجة الوحدات؟",
      answer:
        "قد تحتاج إليها عند تركيب وحدة جديدة، استبدال وحدة معيبة، أو تصحيح أخطاء النظام التي تؤثر على الأداء.",
    },
    {
      question: "هل يمكنكم برمجة الوحدات لأي ماركة مركبة كهربائية؟",
      answer:
        "نعم. ندعم مجموعة واسعة من المركبات الكهربائية ونتعامل مع بروتوكولات الاتصال الخاصة بكل ماركة.",
    },
    {
      question: "هل هذه الخدمة آمنة لأنظمة مركبتي الكهربائية الداخلية؟",
      answer:
        "بالتأكيد. نحن نتبع أساليب البرمجة المعتمدة من الشركة المصنعة باستخدام أدوات معزولة وبرمجيات موثقة.",
    },
    {
      question: "كم من الوقت تستغرق برمجة الوحدات عادةً؟",
      answer:
        "يتم إكمال معظم الحالات خلال ساعات قليلة، حسب عدد وتعقيد الوحدات التي يتم صيانتها.",
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