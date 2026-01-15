import Head from "next/head";
import HeroSectionAr from "@/components/ar/services/HeroSectionAr";
import ServiceListSection from "@/components/ar/services/ServiceListSection";
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
  <title>خدمات تأمين المركبات الكهربائية في دبي | إي في إس الإمارات</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس الإمارات تساعد في مطالبات التأمين وإصلاح المركبات الكهربائية في دبي. من تقييم الحوادث إلى الإصلاحات المعتمدة، ثق بفريقنا المتخصص."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمات تأمين المركبات الكهربائية دبي، إصلاح حوادث المركبات الكهربائية الإمارات، مساعدة مطالبات التأمين، إصلاح المركبات المؤمنة دبي، إصلاح هيكل المركبات الكهربائية، دعم تأمين إي في إس الإمارات"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/services/insurance" />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author & Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="ar" />

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/insurance"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/insurance"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمات تأمين المركبات الكهربائية في دبي | إي في إس الإمارات"
  />
  <meta
    property="og:description"
    content="إي في إس الإمارات تساعد في مطالبات التأمين وإصلاح المركبات الكهربائية في دبي. من تقييم الحوادث إلى الإصلاحات المعتمدة، ثق بفريقنا المتخصص."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/insurance"
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
    content="خدمات تأمين المركبات الكهربائية في دبي | إي في إس الإمارات"
  />
  <meta
    name="twitter:description"
    content="إي في إس الإمارات تساعد في مطالبات التأمين وإصلاح المركبات الكهربائية في دبي. من تقييم الحوادث إلى الإصلاحات المعتمدة، ثق بفريقنا المتخصص."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://evsuae.com/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://evsuae.com/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://evsuae.com/favicon-16x16.png"
  />
  <link rel="shortcut icon" href="https://evsuae.com/favicon.ico" />
  <link rel="manifest" href="https://evsuae.com/site.webmanifest" />

  {/* Charset & Compatibility */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
</Head>



      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

 {/* end header */}
  {/* start page title (Arabic RTL) */}

<HeroSectionAr
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920"
  brandLabel="إي في إس"
  subtitle="خدمات التأمين للمركبات الكهربائية"
  title="خدمات التأمين"
  description="حلول ذكية لتسهيل مطالبات التأمين لمركبتك الكهربائية"
  ctaText="احجز فحص مركبتك الكهربائية"
  ctaLink="https://evsuae.com/ar/contact"
/>

<LogoMarqueeAr />

<ServiceListSection
  title="خدمات التأمين"
  services={[
    {
      title: "تقدير الأضرار",
      description:
        "نقوم بإجراء فحوصات مفصلة بعد الحادث لتقييم الأضرار الهيكلية والسطحية. فريقنا يُعد تقديرات احترافية جاهزة للتأمين تعكس النطاق الكامل للإصلاحات المطلوبة—مما يضمن تقديم مطالبات دقيقة وتسريع الموافقات.",
      href: "insurance/damage-estimation",
    },
    {
      title: "معالجة مطالبات التأمين لأضرار الحوادث",
      description:
        "تتولى إي في إس عملية المطالبة بالكامل نيابةً عنك. من تجميع الوثائق إلى التنسيق مع مزود التأمين الخاص بك ومتابعة الموافقات، نحن نُزيل التوتر من أوراق التأمين ونحافظ على سلاسة العملية.",
      href: "insurance/accident-damage-insurance-claim-processing",
    },
    {
      title: "الفوترة المباشرة",
      description:
        "بمجرد الموافقة على المطالبة، ننسق مباشرة مع مزود التأمين الخاص بك لإدارة الفوترة والدفع للإصلاحات المعتمدة. هذا يبسط العملية، يقلل الأوراق، ويساعد في تقليل التأخيرات—مما يتيح لك التركيز على إعادة مركبتك الكهربائية إلى الطريق دون التعامل مع كل التفاصيل المالية بنفسك.",
      href: "insurance/direct-billing",
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
      question: "هل يمكنني زيارة إي في إس قبل بدء مطالبة التأمين؟",
      answer:
        "نعم، تفضل بزيارتنا بعد الحادث مباشرة—سنفحص المركبة، نُعد التقدير، ونوجهك خلال عملية بدء المطالبة.",
    },
    {
      question: "هل تعملون مع جميع شركات التأمين في الإمارات؟",
      answer:
        "نعمل مع معظم شركات التأمين الكبرى ويمكننا توفير الوثائق والتقديرات اللازمة لمعالجة المطالبات.",
    },
    {
      question: "ما هو الفوترة المباشرة وكيف تفيدني؟",
      answer:
        "الفوترة المباشرة تتيح لنا تسوية تكاليف الإصلاح المعتمدة مباشرة مع مزود التأمين الخاص بك، مما يقلل الأوراق ويجنبك الدفعات المقدمة.",
    },
    {
      question: "متى يمكن إصلاح مركبتي الكهربائية بعد الموافقة على المطالبة؟",
      answer:
        "بمجرد الموافقة على المطالبة، تبدأ الإصلاحات عادةً على الفور. نحن نعطي الأولوية للكفاءة دون المساومة على الجودة.",
    },
    {
      question: "ماذا لو طلبت شركة التأمين وثائق إضافية؟",
      answer:
        "فريقنا يدير المتابعات وأي أوراق إضافية مطلوبة لضمان عدم تأخير إصلاحك.",
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