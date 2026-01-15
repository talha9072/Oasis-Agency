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
    برمجة مخصصة للمنطقة في دبي | فتح ميزات إقليمية – إي في إس الإمارات
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="برمجة مخصصة للمنطقة للمركبات الكهربائية في دبي! خدمات إي في إس تفعل الإعدادات الإقليمية كاللغة والوحدات. احجز موعدك اليوم!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="برمجة المنطقة للمركبات الكهربائية دبي، إعدادات مخصصة للمركبات الكهربائية الإمارات، فتح ميزات إقليمية للمركبات الكهربائية، تغيير إعدادات اللغة للمركبات الكهربائية، تخصيص وحدات المركبات الكهربائية، خدمات برمجة إي في إس، برمجة مخصصة للمركبات الكهربائية دبي"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/custom-region-coding"
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
    href="https://evsuae.com/services/programming/custom-region-coding"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/custom-region-coding"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="برمجة مخصصة للمنطقة للمركبات الكهربائية في دبي | فتح ميزات إقليمية – إي في إس الإمارات"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس الإمارات برمجة مخصصة للمنطقة للمركبات الكهربائية في دبي. تفعيل أو تعديل الإعدادات الإقليمية مثل اللغة، الوحدات، وتفعيل الميزات مع مبرمجين متخصصين."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/custom-region-coding"
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
    content="برمجة مخصصة للمنطقة للمركبات الكهربائية في دبي | فتح ميزات إقليمية – إي في إس الإمارات"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس الإمارات برمجة مخصصة للمنطقة للمركبات الكهربائية في دبي. تفعيل أو تعديل الإعدادات الإقليمية مثل اللغة، الوحدات، وتفعيل الميزات مع مبرمجين متخصصين."
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

  {/* Structured Data – Arabic Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "برمجة مخصصة للمنطقة للمركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات برمجة مخصصة للمنطقة للمركبات الكهربائية، بما في ذلك تفعيل الإعدادات الإقليمية مثل اللغة والوحدات والميزات الخاصة بالأسواق المحلية.",
        serviceType: "برمجة المركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/custom-region-coding",
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
  title="برمجة مخصصة للمنطقة (ترقيات المواصفات الإماراتية)"
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
  title="ما هي البرمجة المخصصة للمنطقة؟"
  description={`البرمجة المخصصة للمنطقة هي عملية تعديل برمجيات مركبتك لتتوافق مع معايير وتفضيلات موقع جغرافي معين. هذا يضمن الامتثال، ويحسن الأداء، ويعزز تجربة المستخدم.
  <br>سواء كانت مركبتك مستوردة أو ترغب فقط في تفعيل خيارات خاصة بالمنطقة، يمكننا مساعدتك.`}
/>

<ServiceBenefitsAr
  title="فوائد البرمجة المخصصة للمنطقة"
  items={[
    {
      title: "تفعيل ميزات خاصة بالمنطقة",
      description:
        "تفعيل أو فتح وظائف مصممة لسوقك، مثل مصابيح النهار (DRLs)، تذكيرات حزام الأمان، قفل الأبواب التلقائي، أو ميزات ترفيه إضافية.",
    },
    {
      title: "إعدادات اللغة والوحدات",
      description:
        "تعديل وحدات العرض (من أميال إلى كيلومترات، من فهرنهايت إلى مئوية)، المناطق الزمنية، وتفضيلات اللغة لتسهيل الاستخدام.",
    },
    {
      title: "تعديلات تردد الراديو",
      description:
        "ضمان توافق أنظمة الراديو والوسائط مع الترددات والمعايير المحلية.",
    },
    {
      title: "الامتثال التنظيمي",
      description:
        "تلبية لوائح المركبات والسلامة المحلية لصلاحية الطريق والتسجيل.",
    },
    {
      title: "تحسين راحة القيادة وقابلية الاستخدام",
      description:
        "تخصيص سلوكيات المركبة لتتناسب مع عادات القيادة المحلية والتفضيلات الشخصية.",
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
      question: "هل برمجة المنطقة آمنة لمركبتي؟",
      answer:
        "نعم — كل برمجتنا تتبع إرشادات الشركة المصنعة وهي غير تدخلية. لا تسبب ضررًا لسيارتك أو تلغي الضمانات.",
    },
    {
      question: "هل يمكنني إلغاء برمجة المنطقة إذا لزم الأمر؟",
      answer:
        "بالتأكيد. يمكننا إعادة مركبتك إلى البرمجة الأصلية للمصنع في أي وقت إذا لزم الأمر.",
    },
    {
      question: "ما الفرق بين البرمجة والتكويد؟",
      answer:
        "التكويد يخصص برمجيات المركبة الحالية لتفعيل أو تعطيل ميزات دون تغيير البرمجية الأساسية. أما البرمجة فتقوم بتحديث أو إعادة كتابة البرمجية نفسها، وغالبًا ما تكون مطلوبة بعد تغييرات في الأجهزة.",
    },
    {
      question: "هل يمكنني فتح ميزات مخفية ببرمجة المنطقة؟",
      answer:
        "نعم. يمكن لبرمجة المنطقة تفعيل ميزات مخفية أو معطلة حسب ماركة وطراز مركبتك، بما في ذلك وظائف الراحة، خيارات الإضاءة، وإمكانيات الترفيه.",
    },
    {
      question: "هل تقدمون التكويد لجميع ماركات وطرازات السيارات؟",
      answer:
        "ندعم مجموعة واسعة من الماركات والطرازات، لكن بعض المركبات الحديثة جدًا أو النادرة قد تكون خياراتها محدودة. تواصل معنا بتفاصيل مركبتك وسنؤكد التوافق.",
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