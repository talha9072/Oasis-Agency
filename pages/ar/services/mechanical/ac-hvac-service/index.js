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
    صيانة تكييف المركبات الكهربائية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="حافظ على برودة وكفاءة مركبتك الكهربائية في حرارة دبي. تقدم إي في إس خدمات صيانة أنظمة التكييف والتدفئة، بما في ذلك التشخيص وإعادة الشحن."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="صيانة تكييف المركبات الكهربائية دبي, إصلاح أنظمة التدفئة والتبريد للمركبات الكهربائية, صيانة تكييف المركبات الكهربائية, إدارة حرارة المركبات الكهربائية, إعادة شحن مبردات التكييف الإمارات"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/mechanical/ac-hvac-service"
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
    href="https://evsuae.com/services/mechanical/ac-hvac-service"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/mechanical/ac-hvac-service"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="صيانة تكييف المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    property="og:description"
    content="حافظ على برودة وكفاءة مركبتك الكهربائية في حرارة دبي. تقدم إي في إس خدمات صيانة أنظمة التكييف والتدفئة، بما في ذلك التشخيص وإعادة الشحن."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/mechanical/ac-hvac-service"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    property="og:image:alt"
    content="خدمات صيانة أنظمة التكييف والتدفئة للمركبات الكهربائية في دبي"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="صيانة تكييف المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    name="twitter:description"
    content="حافظ على برودة وكفاءة مركبتك الكهربائية في حرارة دبي. تقدم إي في إس خدمات صيانة أنظمة التكييف والتدفئة، بما في ذلك التشخيص وإعادة الشحن."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    name="twitter:image:alt"
    content="خدمات صيانة أنظمة التكييف والتدفئة للمركبات الكهربائية في دبي"
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

  {/* Structured Data – Arabic AC & HVAC Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "صيانة أنظمة التكييف والتدفئة للمركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات متخصصة لصيانة أنظمة التكييف والتدفئة للمركبات الكهربائية، تشمل الفحص والتشخيص، إعادة شحن المبردات، إصلاح المكونات، وتحسين إدارة الحرارة لضمان الراحة والكفاءة.",
        serviceType: "صيانة تكييف وتدفئة المركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/mechanical/ac-hvac-service",
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
  subtitle="خدمات صيانة أنظمة التكييف والتدفئة للمركبات الكهربائية"
  title="صيانة أنظمة التكييف والتدفئة للمركبات الكهربائية"
  description="تكييف مركبتك المستوردة مع المعايير المحلية لتبريد مثالي"
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
  description={`في المركبات الكهربائية، تعتبر أنظمة التكييف والتدفئة ضرورية ليس فقط لراحة السائق ولكن أيضًا لتنظيم مكونات رئيسية مثل البطارية والمحرك. في <strong>إي في إس</strong>، نقدم خدمات صيانة شاملة لأنظمة التكييف والتدفئة مصممة خصيصًا لمنصات المركبات الكهربائية، تشمل تشخيص التحكم بالمناخ، إعادة شحن المبردات، وإصلاحات الضاغط والمبخر. سواء كانت المقصورة تعاني من الحرارة الزائدة أو كان نظام التبريد الحراري للبطارية ضعيف الأداء، نحن نضمن أداء تبريد مثالي.`}
/>



<ServiceBenefitsAr
  title="فوائد صيانة أنظمة التكييف والتدفئة"
  items={[
    {
      title: "إعادة شحن المبردات",
      description:
        "نعيد تعبئة وتوزان مستويات المبردات لاستعادة كفاءة التبريد وتدفق الهواء.",
    },
    {
      title: "إصلاحات الضاغط والمبخر",
      description:
        "يتم إصلاح أو استبدال وحدات التبريد التالفة لمعالجة فقدان التكييف أو عدم استقرار التحكم بالحرارة.",
    },
    {
      title: "تحسين مناخ المقصورة",
      description:
        "نعالج مشاكل دوران الهواء ونضمن درجة حرارة متسقة في جميع المناطق.",
    },
    {
      title: "تبريد البطارية والمحرك",
      description:
        "نحافظ على الأنظمة الحرارية التي تمنع ارتفاع حرارة البطارية والمحرك، خاصة في درجات حرارة دبي الشديدة.",
    },
    {
      title: "صيانة المروحة والتهوية",
      description:
        "نصنّع مراوح التكييف والمستشعرات والمحركات للقضاء على الضوضاء أو مشاكل تدفق الهواء المنخفض.",
    },
    {
      title: "كشف وإصلاح التسريبات",
      description:
        "نحدد ونغلق تسريبات المبردات التي تؤثر على الأداء والسلامة البيئية.",
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
      question: "لماذا ينفث مكيف مركبتي الكهربائية هواءً دافئًا؟",
      answer:
        "قد يكون ذلك بسبب انخفاض مستوى المبرد، عطل في الضاغط، أو انسداد الفلاتر. نقوم بتشخيص المشكلة وإصلاحها بدقة.",
    },
    {
      question: "هل يؤثر نظام التكييف على بطارية مركبتي الكهربائية؟",
      answer:
        "نعم، تستخدم العديد من المركبات الكهربائية أنظمة حرارية مشتركة لتبريد المقصورة والبطارية. قد يؤدي ضعف أداء التكييف إلى زيادة الضغط على البطارية.",
    },
    {
      question: "كم مرة يجب صيانة نظام التكييف؟",
      answer:
        "في المناخ الحار مثل دبي، نوصي بفحص النظام كل 12–18 شهرًا أو عند أول علامة لفقدان التبريد أو ظهور رائحة.",
    },
    {
      question: "هل يمكنكم إعادة شحن المبرد في أنظمة المركبات الكهربائية؟",
      answer:
        "بالتأكيد، نستخدم المبردات والمعدات الموصى بها من الشركات المصنعة لمنصات المركبات الكهربائية.",
    },
    {
      question: "مكيفي يصدر ضوضاء ولا يبرد، ماذا يعني ذلك؟",
      answer:
        "قد يشير ذلك إلى تآكل محرك المروحة أو عطل في الضاغط. سنفحص الأجزاء التالفة ونستبدلها حسب الحاجة.",
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