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
  <title>إصلاح هيكل وطلاء المركبات الكهربائية في دبي | إي في إس</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس الإمارات تقدم خدمات إصلاح هيكل وطلاء المركبات الكهربائية في دبي. من إزالة الانبعاجات إلى الطلاء الكامل، استعيد مظهر مركبتك بدقة."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="إصلاح هيكل المركبات الكهربائية دبي، خدمات طلاء المركبات الكهربائية الإمارات، إزالة انبعاجات المركبات الكهربائية، إصلاح خدوش دبي، طلاء كامل للمركبات الكهربائية، ورشة هيكل السيارات دبي، خدمات هيكل وطلاء إي في إس"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/body-paint"
  />

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
    href="https://evsuae.com/services/body-paint"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/body-paint"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="إصلاح هيكل وطلاء المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تستعيد مظهر وهيكلية مركبتك الكهربائية بدقة من خلال إصلاحات الهيكل، إعادة الطلاء الكاملة، وإعادة محاذاة الكاميرات/المستشعرات."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/body-paint"
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
    content="إصلاح هيكل وطلاء المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    name="twitter:description"
    content="من إصلاحات الهيكل إلى التفصيل، إي في إس تساعد في استعادة مظهر مركبتك الكهربائية وأنظمة السلامة وثقة القيادة."
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
  <link
    rel="shortcut icon"
    href="https://evsuae.com/favicon.ico"
  />
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920"
  brandLabel="إي في إس"
  subtitle="خدمات الهيكل والطلاء"
  title="خدمات الهيكل والطلاء"
  description="حلول ذكية لتحسين وتجديد مظهر وأداء مركبتك الكهربائية"
  ctaText="احجز فحص مركبتك الكهربائية"
  ctaLink="https://evsuae.com/ar/contact"
/>

<LogoMarqueeAr />

<ServiceListSection
  title="خدمات الهيكل والطلاء"
  services={[
    {
      title: "إصلاح التصادم واستبدال الألواح",
      description:
        "نتعامل مع كل شيء من الخدوش البسيطة إلى أضرار التصادم الشديدة. يتم استبدال الألواح باستخدام معدات متطورة لضمان الملاءمة والتشطيب الدقيق، مما يحافظ على شكل وقوة مركبتك الكهربائية الأصلية.",
      href: "body-paint/collision-repair-panel-replacement",
    },
    {
      title: "محاذاة الهيكل الهيكلية",
      description:
        "بعد التصادم، حتى الانحرافات الصغيرة يمكن أن تؤثر على القيادة. نستخدم أنظمة محاذاة متطورة لإعادة هيكل المركبة إلى معايير الشركة المصنعة.",
      href: "body-paint/structural-body-alignment",
    },
    {
      title: "إصلاح الخدوش والانبعاجات",
      description:
        "حلولنا للخدوش والانبعاجات مصممة لجميع مستويات الضرر، مع الحفاظ على الطلاء الأصلي كلما أمكن.",
      href: "body-paint/scratch-dent-repair",
    },
    {
      title: "طلاء وتجديد الهيكل بالكامل",
      description:
        "نقدم طلاء عالي الجودة للهيكل بالكامل أو الألواح المحددة باستخدام ألوان مطابقة للشركة المصنعة وتشطيبات صديقة للبيئة وطويلة الأمد.",
      href: "body-paint/full-body-painting-refinishing",
    },
    {
      title: "إعادة محاذاة المستشعرات والكاميرات",
      description:
        "بعد إصلاحات الهيكل، نعيد معايرة مستشعرات الركن، كاميرات الرجوع، وميزات مساعدة السائق لضمان الأداء الدقيق والآمن.",
      href: "body-paint/sensor-camera-realignment",
    },
    {
      title: "تفصيل داخلي وخارجي",
      description:
        "من التنظيف العميق إلى التلميع والطلاء الخزفي، نقدم خدمات تفصيل كاملة تحمي وتجدد مركبتك الكهربائية من الداخل والخارج.",
      href: "body-paint/detailing-interior-exterior",
    },
    {
      title: "استبدال الزجاج الأمامي والمرايا",
      description:
        "نستبدل الزجاج الأمامي والمرايا المتصدعة باستخدام مكونات مصممة لتتكامل بسلاسة مع أنظمة مساعدة السائق والرؤية.",
      href: "body-paint/windshield-mirror-replacement",
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
      question: "هل يمكنكم مطابقة لون طلاء مركبتي الكهربائية الأصلي؟",
      answer:
        "نعم، نستخدم المسح الرقمي للألوان وأكواد الطلاء الأصلية لضمان دقة الألوان عبر الألواح.",
    },
    {
      question: "هل ستؤثر الأعمال الهيكلية على مستشعرات أو إلكترونيات مركبتي الكهربائية؟",
      answer:
        "نحرص بشدة على تجنب إتلاف الأنظمة المدمجة وإعادة معايرة أي مكونات متأثرة بعد الإصلاح.",
    },
    {
      question: "كم من الوقت يستغرق طلاء الجسم بالكامل؟",
      answer:
        "عادةً ما تستغرق عمليات إعادة الطلاء الكاملة من 2 إلى 4 أيام، حسب مستوى التحضير وعدد الألواح.",
    },
    {
      question: "هل تقدمون إزالة الانبعاجات بدون طلاء؟",
      answer:
        "بالنسبة للانبعاجات البسيطة التي لم تتضرر فيها الطلاء، نعم—نستخدم أدوات لإعادة تشكيل المعدن دون إعادة طلاء.",
    },
    {
      question: "هل يشمل الإصلاح التفصيل الداخلي والخارجي؟",
      answer:
        "التفصيل الداخلي والخارجي متاح كإضافة أو ضمن حزمة الإصلاح حسب الخيار المختار.",
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