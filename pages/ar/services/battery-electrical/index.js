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
  <title>إصلاح بطاريات وكهربائيات المركبات الكهربائية في دبي | إي في إس</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس الإمارات متخصصون في إصلاح بطاريات وأنظمة كهربائية للمركبات الكهربائية في دبي، من تشخيص البطاريات عالية الجهد إلى مشاكل الأسلاك والحساسات."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="إصلاح بطارية المركبات الكهربائية دبي, خدمات كهربائية المركبات الكهربائية الإمارات, تشخيص بطارية عالية الجهد, إصلاح أسلاك المركبات الكهربائية دبي, استكشاف أخطاء حساسات المركبات الكهربائية, خدمات كهربائية إي في إس, فنيو بطاريات المركبات الكهربائية المعتمدون"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/battery-electrical"
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
    href="https://evsuae.com/services/battery-electrical"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="إصلاح بطاريات وكهربائيات المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس الإمارات متخصصون في إصلاح بطاريات وأنظمة كهربائية للمركبات الكهربائية في دبي، من تشخيص البطاريات عالية الجهد إلى مشاكل الأسلاك والحساسات."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/battery-electrical"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    property="og:image:alt"
    content="خدمات إصلاح بطاريات وأنظمة كهربائية للمركبات الكهربائية في دبي"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="إصلاح بطاريات وكهربائيات المركبات الكهربائية في دبي | إي في إس"
  />
  <meta
    name="twitter:description"
    content="إي في إس الإمارات متخصصون في إصلاح بطاريات وأنظمة كهربائية للمركبات الكهربائية في دبي، من تشخيص البطاريات عالية الجهد إلى مشاكل الأسلاك والحساسات."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    name="twitter:image:alt"
    content="خدمات إصلاح بطاريات وأنظمة كهربائية للمركبات الكهربائية في دبي"
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920"
  brandLabel="إي في إس"
  subtitle="خدمات البطاريات والكهربائيات"
  title="خدمات البطاريات والكهربائيات"
  description="حلول ذكية لتحسين وتحديث قدرات مركبتك الكهربائية."
  ctaText="احجز فحص مركبتك الكهربائية"
  ctaLink="https://evsuae.com/ar/contact"
/>

<LogoMarqueeAr />

<ServiceListSection
  title="خدمات البطاريات والكهربائيات"
  services={[
    {
      title: "إصلاح بطاريات عالية الجهد",
      description:
        "نتعامل مع المشاكل في حزم البطاريات عالية الجهد، بما في ذلك أعطال الوحدات، الخلايا المتدهورة، وتناقضات تسليم الطاقة.",
      href: "battery-electrical/high-voltage-battery-repairs",
    },
    {
      title: "تشخيص الأنظمة الكهربائية منخفضة الجهد",
      description:
        "نحل أعطال الأنظمة المساعدة، من الإلكترونيات الداخلية والإضاءة إلى دوائر التحكم الحيوية للوظائف اليومية.",
      href: "battery-electrical/low-voltage-diagnostics",
    },
    {
      title: "صحة البطارية والإدارة الحرارية",
      description:
        "التنظيم الحراري ضروري في مناخ دبي. نقوم بصيانة دوائر التبريد، الحساسات الحرارية، ووحدات تبريد البطارية لمنع الحرارة الزائدة وإطالة عمر البطارية.",
      href: "battery-electrical/battery-health-thermal-management",
    },
    {
      title: "إصلاح وحدة توزيع الطاقة (PDU)",
      description:
        "وحدة توزيع الطاقة تتحكم في تدفق الطاقة عبر مكونات المركبة الرئيسية. نشخص ونصلح الأعطال التي تؤثر على العاكسات، المحركات، ودوائر السلامة.",
      href: "battery-electrical/pdu-repair",
    },
    {
      title: "إصلاح منفذ الشحن",
      description:
        "نصلح منافذ الشحن التالفة أو المعطلة لاستعادة أداء شحن آمن ومتسق لمركبتك الكهربائية.",
      href: "battery-electrical/charging-port-repairs",
    },
    {
      title: "تحويل منفذ الشحن",
      description:
        "نحول منفذ الشحن الحالي إلى معيار مختلف، مما يضمن التوافق مع البنية التحتية للشحن في المنطقة.",
      href: "battery-electrical/charging-port-conversions",
    },
    {
      title: "ترقية منفذ الشحن",
      description:
        "نقوم بترقية منفذ شحن مركبتك الكهربائية لتحسين السرعة، سعة الطاقة، أو دعم تقنيات الشحن الحديثة.",
      href: "battery-electrical/charging-port-upgrades",
    },
    {
      title: "استبدال الحساسات ووحدات التحكم الإلكترونية",
      description:
        "نستبدل الحساسات ووحدات التحكم الإلكترونية المعيبة التي تؤثر على قراءات الأداء، ميزات السلامة، والاتصال بالنظام.",
      href: "battery-electrical/sensor-ecu-replacements",
    },
    {
      title: "دعم أنظمة المعلومات الترفيهية والكاميرات",
      description:
        "من محاذاة الكاميرات إلى مشاكل شاشات اللمس، نحل أعطال أنظمة المعلومات الترفيهية وأنظمة الرؤية الشائعة في المركبات الكهربائية الحديثة.",
      href: "battery-electrical/infotainment-camera-systems",
    },
    {
      title: "إصلاح الأسلاك، الفيوزات، وأحزمة التوصيل",
      description:
        "نحدد ونصلح الدوائر القصيرة الكهربائية، الفيوزات المنفجرة، وأحزمة التوصيل التالفة التي تسبب انقطاعات متقطعة أو كلية في الطاقة.",
      href: "battery-electrical/wiring-fuse-harness-repair",
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
      question:
        "ما هي العلامات التي تشير إلى وجود مشكلة في بطارية أو نظام كهربائي في مركبتي الكهربائية؟",
      answer:
        "تنبيهات لوحة القيادة، انخفاض المدى، الشحن غير المتسق، أو تحذيرات النظام الكهربائي هي مؤشرات شائعة.",
    },
    {
      question: "هل يمكن لإي في إس ترقية أو تعديل منفذ الشحن الخاص بي؟",
      answer:
        "نعم، نقدم خدمات تحويل منافذ الشحن، إصلاحها، وترقيتها بناءً على احتياجات التوافق أو الوظائف.",
    },
    {
      question: "كم يستغرق إصلاح أو استبدال بطارية عالية الجهد؟",
      answer:
        "يتم إكمال معظم التشخيصات في نفس اليوم. إصلاح أو استبدال البطارية عادةً يستغرق 1-2 أيام عمل حسب التعقيد.",
    },
    {
      question: "هل تدعمون إصلاح أنظمة المعلومات الترفيهية والكاميرات؟",
      answer:
        "نعم، نحن نصلح الشاشات المعطلة، نعيد معايرة الكاميرات، ونحل مشاكل العرض أو الاتصال.",
    },
    {
      question: "هل من الآمن الاستمرار في القيادة مع ضوء تحذير مضيء؟",
      answer:
        "لا نوصي بذلك. الأعطال الكهربائية قد تؤثر على الأنظمة الحيوية - قم بجدولة تشخيص في أقرب وقت ممكن.",
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