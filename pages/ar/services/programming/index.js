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
  <title>البرمجة | خدمات المركبات الكهربائية</title>

  <meta
    name="description"
    content="برمجة متقدمة للمركبات الكهربائية في دبي! خدمات إي في إس لتحديث البرمجيات ومعايرة الأنظمة تضمن الأداء الأمثل. احجز فحصك اليوم!"
  />

  <meta
    name="keywords"
    content="برمجة المركبات الكهربائية دبي، تحديث برمجيات المركبات الكهربائية الإمارات، خدمة برمجة وحدة التحكم الإلكترونية، معايرة الحساسات دبي، تحديث نظام المركبة الكهربائية، تشخيص برمجة المركبات الكهربائية، خدمات برمجيات إي في إس الإمارات"
  />

  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/programming"
  />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  <meta name="author" content="الإدارة" />
  <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta httpEquiv="Content-Language" content="ar" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/services/programming"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/programming"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services/programming"
  />

  <meta
    property="og:title"
    content="برمجة المركبات الكهربائية وتحديث البرمجيات في دبي | خدمات إي في إس المتخصصة – الإمارات"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس الإمارات خدمات برمجة متقدمة وتحديث برمجيات للمركبات الكهربائية في دبي. نضمن الأداء الأمثل من خلال برمجة وحدات التحكم ومعايرة الحساسات وتحديث الأنظمة."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/programming"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="برمجة المركبات الكهربائية وتحديث البرمجيات في دبي | خدمات إي في إس المتخصصة – الإمارات"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس الإمارات خدمات برمجة متقدمة وتحديث برمجيات للمركبات الكهربائية في دبي. نضمن الأداء الأمثل من خلال برمجة وحدات التحكم ومعايرة الحساسات وتحديث الأنظمة."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
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
  title="البرمجة والبرمجيات"
  description="حلول ذكية لتحسين وتحديث قدرات مركبتك الكهربائية"
  ctaText="احجز فحص مركبتك الكهربائية"
  ctaLink="https://evsuae.com/ar/contact"
/>

<LogoMarqueeAr />

<ServiceListSection
  title="حلول البرمجة والبرمجيات"
  services={[
    {
      title: "تخصيص ترميز المنطقة",
      description:
        "افتح ميزات المركبة الخاصة بمنطقتك. خدماتنا لتخصيص الترميز تتيح تكييف أنظمة سيارتك لتلبية اللوائح المحلية، اللغة، وتفضيلات الميزات.",
      href: "programming/custom-region-coding",
    },
    {
      title: "برمجة المفتاح وبطاقة SIM",
      description:
        "فقدت مفتاحك أو تحتاج إلى برمجة مفتاح جديد؟ نقدم خدمات برمجة مفاتيح وبطاقات SIM سريعة وآمنة لمجموعة واسعة من المركبات.",
      href: "programming/key-sim-programming",
    },
    {
      title: "تحديثات البرمجيات والبرامج الثابتة",
      description:
        "حافظ على أداء مركبتك بأعلى مستوى. نقدم تحديثات برمجيات وبرامج ثابتة بمستوى OEM لتحسين الاستقرار، إصلاح الأخطاء، وإضافة ميزات جديدة.",
      href: "programming/firmware-software-updates",
    },
    {
      title: "برمجة الوحدات",
      description:
        "من تركيب وحدات جديدة إلى إعادة برمجة الوحدات الحالية، يضمن فريقنا التكامل السلس مع شبكة مركبتك.",
      href: "programming/module-programming",
    },
    {
      title: "معايرة النظام والتشخيص",
      description:
        "الدقة هي كل شيء. خدماتنا لمعايرة النظام والتشخيص تضمن عمل أنظمة مركبتك بمحاذاة وأداء صحيح.",
      href: "programming/system-calibration-diagnostics",
    },
    {
      title: "تكامل التطبيقات (أندرويد ومنصات أخرى)",
      description:
        "عزز تجربة القيادة بحلول تكامل تطبيقات سلسة، بما في ذلك أندرويد أوتو وإعدادات تطبيقات مخصصة.",
      href: "programming/app-integration-android",
    },
    {
      title: "معايرة نظام إدارة البطارية",
      description:
        "عزز أداء بطارية مركبتك الكهربائية أو الهجينة بخدمات معايرة نظام إدارة البطارية المتخصصة.",
      href: "programming/bms-calibration",
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
      question: "ما هي برمجة المركبات ولماذا هي ضرورية؟",
      answer:
        "برمجة المركبات تتضمن تحديث أو تهيئة وحدات التحكم الإلكترونية (ECUs) والموديولات لتفعيل ميزات جديدة، إصلاح الأخطاء البرمجية، تحسين الأداء، وضمان التوافق مع المكونات الجديدة.",
    },
    {
      question: "كيف أعرف إذا كانت مركبتي بحاجة إلى تحديث برمجي؟",
      answer:
        "قد تحتاج مركبتك إلى تحديث برمجي إذا لاحظت أعطالًا متكررة، رسائل تحذير على لوحة القيادة، بطء استجابة الأنظمة، أو بعد استبدال مكونات إلكترونية مثل وحدة التحكم أو نظام الترفيه.",
    },
    {
      question: "هل يمكنكم برمجة موديولات ما بعد البيع أم فقط الموديولات الأصلية؟",
      answer:
        "نحن نركز بشكل أساسي على برمجة الموديولات الأصلية (OEM) لضمان الأداء والتوافق الكامل، ولكن يمكننا تقييم وبرمجة بعض موديولات ما بعد البيع في حال توافقها مع أنظمة المركبة.",
    },
    {
      question: "كم من الوقت تستغرق برمجة الموديول أو تحديث النظام؟",
      answer:
        "تعتمد مدة البرمجة على نوع الموديول وطراز المركبة. غالبًا ما تستغرق برمجة الموديولات القياسية من ساعة إلى ثلاث ساعات، بينما قد تستغرق الأنظمة المعقدة وقتًا أطول.",
    },
    {
      question: "هل برمجة المفاتيح وأنظمة الحماية آمنة للمركبة؟",
      answer:
        "نعم، تتم برمجة المفاتيح وأنظمة الحماية باستخدام أدوات وبرمجيات معتمدة وآمنة، مما يضمن الحفاظ على أمان المركبة وعدم التأثير على أنظمة الحماية أو الأداء.",
    },
    {
      question: "هل تؤثر التحديثات البرمجية على ضمان المركبة؟",
      answer:
        "نلتزم بإجراءات وبرمجيات متوافقة مع معايير الشركات المصنعة. في معظم الحالات، لا تؤثر التحديثات البرمجية المعتمدة على ضمان المركبة.",
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