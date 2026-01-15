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
    تكامل تطبيقات المركبات الكهربائية في دبي | إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس دبي تقدم خدمات تكامل تطبيقات المركبات الكهربائية، بما في ذلك أندرويد أوتو والتطبيقات المخصصة، لتحسين الاتصال وتجربة القيادة."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="تكامل تطبيقات المركبات الكهربائية دبي، أندرويد أوتو للمركبات الكهربائية، اتصال المركبات الكهربائية، إعداد نظام ترفيه مخصص، تكامل الهواتف الذكية مع المركبات الكهربائية الإمارات"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming/app-integration-android"
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
    href="https://evsuae.com/services/programming/app-integration-android"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming/app-integration-android"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="تكامل تطبيقات المركبات الكهربائية في دبي | إعداد أندرويد أوتو ومنصات مخصصة – إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تقدم خدمات تكامل تطبيقات المركبات الكهربائية، بما في ذلك أندرويد أوتو والتطبيقات المخصصة، لتحسين الاتصال وتجربة القيادة."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming/app-integration-android"
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
    content="تكامل تطبيقات المركبات الكهربائية في دبي | إعداد أندرويد أوتو ومنصات مخصصة – إي في إس"
  />
  <meta
    name="twitter:description"
    content="إي في إس دبي تقدم خدمات تكامل تطبيقات المركبات الكهربائية، بما في ذلك أندرويد أوتو والتطبيقات المخصصة، لتحسين الاتصال وتجربة القيادة."
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

  {/* Structured Data – Arabic App Integration Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تكامل تطبيقات المركبات الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات احترافية لتكامل تطبيقات المركبات الكهربائية، بما يشمل إعداد أندرويد أوتو، التطبيقات المخصصة، وتحسين الاتصال وأنظمة الترفيه الذكية.",
        serviceType: "تكامل تطبيقات المركبات الكهربائية",
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
        url: "https://evsuae.com/ar/services/programming/app-integration-android",
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
  title="تكامل تطبيقات المركبات الكهربائية"
  description="في إي في إس، نساعدك على ربط هاتفك الذكي وتطبيقاته بمركبتك الكهربائية من خلال خدمات تكامل تطبيقات احترافية."
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
  description="يتوقع سائقو المركبات الكهربائية الحديثة أكثر من مجرد التنقل - يريدون تكاملًا رقميًا سلسًا. في إي في إس، نساعدك على ربط هاتفك الذكي وتطبيقاته بمركبتك الكهربائية من خلال خدمات تكامل تطبيقات احترافية. من أندرويد أوتو إلى المنصات الخاصة بالعلامات التجارية وتطبيقات الترفيه المخصصة، يضمن فريقنا إعدادًا سلسًا وعمليًا يعزز تجربة القيادة الشاملة دون التأثير على أداء النظام."
/>


<ServiceBenefitsAr
  title="فوائد تكامل التطبيقات"
  items={[
    {
      title: "إعداد أندرويد أوتو",
      description:
        "تكامل كامل مع شاشة مركبتك الكهربائية، مما يتيح الوصول إلى الملاحة، الموسيقى، والمكالمات.",
    },
    {
      title: "دعم التطبيقات المخصصة",
      description:
        "تهيئة تطبيقات الترفيه أو إدارة الأسطول المخصصة التي تتناسب مع احتياجات القيادة الخاصة بك.",
    },
    {
      title: "التوافق عبر المنصات",
      description:
        "نضمن عمل تطبيقاتك عبر أندرويد والأنظمة الأخرى المدعومة.",
    },
    {
      title: "راحة السائق المحسنة",
      description:
        "الوصول بسهولة إلى الخرائط في الوقت الفعلي، تحديثات المرور، المساعدات الصوتية، والترفيه داخل المركبة.",
    },
    {
      title: "التشغيل الآمن",
      description:
        "الحفاظ على استجابة النظام والاستخدام الآمن أثناء القيادة من خلال إعداد واجهة محسن.",
    },
    {
      title: "زيادة قيمة المركبة",
      description:
        "تكامل التطبيقات يمكن أن يحسن الاستخدام اليومي وقيمة إعادة البيع على المدى الطويل.",
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
      question: "هل يمكنكم تركيب أندرويد أوتو على أي مركبة كهربائية؟",
      answer:
        "ندعم معظم المركبات الكهربائية التي تتوافق مع أنظمة أندرويد. إذا لم يدعم طرازك أندرويد أوتو افتراضيًا، سنستكشف خيارات تكامل بديلة.",
    },
    {
      question: "ماذا عن التطبيقات غير المتوفرة عبر أندرويد أوتو؟",
      answer:
        "يمكننا تهيئة بعض التطبيقات المخصصة أو تطبيقات الطرف الثالث، بناءً على توافق نظام تشغيل المركبة ووحدة العرض.",
    },
    {
      question: "هل التكامل دائم أم قابل للعكس؟",
      answer:
        "إنه قابل للعكس بالكامل. يمكن تحديث أو إزالة الإعدادات والتطبيقات حسب الحاجة دون التأثير على الأنظمة الأساسية للمركبة.",
    },
    {
      question: "هل يؤثر تكامل التطبيقات على البطارية أو الأداء؟",
      answer:
        "لا، عند تنفيذ التكامل بشكل صحيح، يعمل من خلال أنظمة الترفيه الموجودة دون أي تأثير على مدى المركبة أو أدائها.",
    },
    {
      question: "كم يستغرق تكامل التطبيقات؟",
      answer:
        "تكتمل معظم الإعدادات خلال ساعة إلى ساعتين، بناءً على منصة التطبيق ومستوى التخصيص المطلوب.",
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