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
  <title>تشخيص منخفض الجهد في دبي | فحص إلكترونيات ودوائر التحكم</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس دبي تقدم تشخيصات خبيرة لأنظمة الجهد المنخفض في المركبات الكهربائية، معالجة مشاكل الإضاءة، التحكم، المعلومات الترفيهية، والإلكترونيات الداخلية."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="إصلاح منخفض الجهد للمركبات الكهربائية, إلكترونيات داخلية للسيارات الكهربائية, تشخيص إضاءة المركبات الكهربائية, عطل نظام التحكم, تشخيصات إي في إس دبي"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/battery-electrical/low-voltage-diagnostics"
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

  {/* Language */}
  <meta httpEquiv="Content-Language" content="ar" />

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/battery-electrical/low-voltage-diagnostics"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/low-voltage-diagnostics"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="تشخيص منخفض الجهد في دبي | فحص إلكترونيات ودوائر التحكم"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تقدم تشخيصات خبيرة لأنظمة الجهد المنخفض في المركبات الكهربائية، معالجة مشاكل الإضاءة، التحكم، المعلومات الترفيهية، والإلكترونيات الداخلية."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/battery-electrical/low-voltage-diagnostics"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    property="og:image:alt"
    content="تشخيص أنظمة منخفضة الجهد للمركبات الكهربائية في دبي"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="تشخيص منخفض الجهد في دبي | فحص إلكترونيات ودوائر التحكم"
  />
  <meta
    name="twitter:description"
    content="إي في إس دبي تقدم تشخيصات خبيرة لأنظمة الجهد المنخفض في المركبات الكهربائية، معالجة مشاكل الإضاءة، التحكم، المعلومات الترفيهية، والإلكترونيات الداخلية."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    name="twitter:image:alt"
    content="تشخيص أنظمة منخفضة الجهد للمركبات الكهربائية في دبي"
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
  <link
    rel="manifest"
    href="https://evsuae.com/site.webmanifest"
  />

  {/* Preconnect */}
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
    crossOrigin="anonymous"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />

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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  brandLabel="إي في إس"
  subtitle="تشخيص الأنظمة منخفضة الجهد"
  title="تشخيص الأنظمة منخفضة الجهد للمركبات الكهربائية"
  description="إصلاحات أنظمة منخفضة الجهد من إي في إس لوظائف موثوقة للمركبات الكهربائية"
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
  badgeText="خدمات بطاريات وكهربائيات المركبات الكهربائية"
  title="نبذة عن الخدمة"
  description={`تعتمد المركبات الكهربائية على أنظمة عالية الجهد للدفع وأنظمة منخفضة الجهد للوظائف اليومية مثل الإضاءة، أنظمة المعلومات الترفيهية، الحساسات، ودوائر التحكم. عندما تتعطل هذه الأنظمة المساعدة، قد يؤدي ذلك إلى إزعاج أو حتى مخاوف تتعلق بالسلامة. في <strong>إي في إس</strong>، نستخدم أدوات تشخيص متقدمة لتحديد الأعطال في أسلاك الجهد المنخفض، الفيوزات، المرحلات، والوحدات، مما يضمن أداء الإلكترونيات الداخلية لمركبتك الكهربائية بموثوقية وكما صُممت.`}
/>



<ServiceBenefitsAr
  title="فوائد تشخيص الأنظمة منخفضة الجهد"
  items={[
    {
      title: "استكشاف أعطال نظام الإضاءة",
      description:
        "نحل مشاكل وميض المصابيح الأمامية، أضواء لوحة القيادة، والإضاءة الداخلية.",
    },
    {
      title: "اختبار وحدات التحكم",
      description:
        "نفحص وحدات التحكم الإلكترونية، وحدات التحكم بالجسم، والمرحلات للكشف عن السلوكيات غير المتسقة أو الأعطال.",
    },
    {
      title: "إصلاح المعلومات الترفيهية والملحقات",
      description:
        "تشخيص مشاكل الشاشات، منافذ USB، السماعات، ووظائف مساعدة السائق.",
    },
    {
      title: "فحص البطارية والفيوز",
      description:
        "يتم اختبار بطاريات الجهد المنخفض والفيوزات للتأكد من إخراج الجهد المناسب والاستمرارية.",
    },
    {
      title: "تشخيص الحساسات",
      description:
        "نحدد الأعطال في حساسات الجهد المنخفض المسؤولة عن التحكم بالمناخ، الدخول بدون مفتاح، وغيرها.",
    },
    {
      title: "كشف الدوائر القصيرة واستهلاك الطاقة",
      description:
        "نعزل أعطال الأسلاك أو الاستهلاك الطفيلي الذي يستنزف بطاريتك المساعدة.",
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
      question: "ما هي أعراض مشاكل الأنظمة منخفضة الجهد في المركبات الكهربائية؟",
      answer:
        "تعتيم الأضواء، شاشات غير مستجيبة، نوافذ كهربائية متقطعة، أو تنبيهات لوحة القيادة المتعلقة بالأنظمة المساعدة.",
    },
    {
      question: "هل تؤثر هذه المشاكل على قدرة المركبة الكهربائية على القيادة؟",
      answer:
        "ليس دائمًا، لكنها قد تؤثر على السلامة والراحة، خاصة إذا تأثرت الأضواء، الحساسات، أو التحكم بالمناخ.",
    },
    {
      question: "كم يستغرق تشخيص الأنظمة منخفضة الجهد؟",
      answer:
        "يمكن إكمال معظم الفحوصات وعزل الأعطال في نفس اليوم، حسب تعقيد النظام.",
    },
    {
      question: "هل يمكن أن تستنزف هذه المشاكل بطارية المركبة الرئيسية؟",
      answer:
        "الأعطال المستمرة في الجهد المنخفض قد تؤثر على أداء البطارية المساعدة، وفي بعض الحالات تسبب استنزافًا غير ضروري للطاقة.",
    },
    {
      question: "هل تقدمون الإصلاح أم التشخيص فقط؟",
      answer:
        "نقدم خدمات التشخيص والإصلاح معًا، بما في ذلك استبدال الأجزاء المعيبة، إزالة الأعطال، وإعادة اختبار صحة النظام.",
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