import Head from "next/head";
import ServiceMainHeroAR from "@/components/ar/common/ServiceMainHeroAR";
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
  <title>خدمة فرامل السيارات في دبي | إصلاحات آمنة وموثوقة</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="فرامل بالية تعرضك للخطر! احصل على خدمة فرامل عالية الجودة بإصلاحات سريعة وميسورة. لا تنتظر—احجز فحص فراملك اليوم!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة فرامل السيارات دبي، إصلاح فرامل المركبات الكهربائية، فحص فرامل الإمارات، صيانة فرامل آمنة، إي في إس دبي، خدمة فرامل موثوقة"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/brake-service"
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
    href="https://evsuae.com/brake-service"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/brake-service"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة فرامل السيارات في دبي | إصلاحات آمنة وموثوقة"
  />
  <meta
    property="og:description"
    content="فرامل بالية تعرضك للخطر! احصل على خدمة فرامل عالية الجودة بإصلاحات سريعة وميسورة. لا تنتظر—احجز فحص فراملك اليوم!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/brake-service"
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
    content="خدمة فرامل السيارات في دبي | إصلاحات آمنة وموثوقة"
  />
  <meta
    name="twitter:description"
    content="فرامل بالية تعرضك للخطر! احصل على خدمة فرامل عالية الجودة بإصلاحات سريعة وميسورة. لا تنتظر—احجز فحص فراملك اليوم!"
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

<ServiceMainHeroAR
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="خدمة فرامل احترافية لمركبتك الكهربائية في دبي"
  description="تأكد من أقصى درجات الأمان والتحكم مع خدمات الفرامل المتخصصة للمركبات الكهربائية، المصممة للحفاظ على أداء نظام الفرامل بأعلى مستوى."
  ctaText="احجز الخدمة"
  ctaHref="https://evsuae.com/ar/contact"
/>


<LogoMarqueeAr />


<ServiceBenefitsAr
  title="خدمات فرامل المركبات الكهربائية"
  items={[
    {
      title: "استبدال تيل الفرامل",
      description:
        "استبدال تيل الفرامل البالي للحفاظ على توقف آمن وهادئ. نركب تيل عالي الجودة لتحسين أداء الفرامل وتقليل التآكل على الأقراص.",
    },
    {
      title: "تسوية أقراص الفرامل",
      description:
        "أقراص مشوهة؟ نسوي أو نستبدل أقراص الفرامل للتخلص من الاهتزاز وضمان فرملة سلسة. ضروري لتوقف فعال وصحة الفرامل طويلة الأمد.",
    },
    {
      title: "فحص سائل الفرامل",
      description:
        "سائل الفرامل القديم يقلل من قوة الفرملة. نقوم بتفريغ السائل وإعادة تعبئته بسائل جديد للحفاظ على استجابة النظام وسلامته تحت الضغط.",
    },
    {
      title: "تشخيص ضوضاء الفرامل",
      description:
        "فرامل تصدر ضوضاء؟ الصرير أو الطحن غالبًا يشير إلى تآكل أو اختلال. نشخص ونصلح ضوضاء الفرامل لاستعادة توقف سلس وهادئ.",
    },
    {
      title: "تشخيص نظام ABS",
      description:
        "مصباح ABS مضاء؟ نفحص ونصلح أنظمة منع الانغلاق لفرملة طارئة آمنة وتحكم أفضل على الطريق. لا تتجاهل التحذير.",
    },
    {
      title: "فحص نظام الفرامل بالكامل",
      description:
        "نفحص تيل الفرامل، الأقراص، الكليبرات، والسائل لتحديد المشكلات مبكرًا. احصل على فحص كامل للفرامل لضمان قيادة آمنة وخالية من القلق.",
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
      question: "كم مرة يجب أن أفحص فرامل مركبتي؟",
      answer:
        "يجب فحص فرامل المركبات الكهربائية كل 10,000 إلى 15,000 كيلومتر، أو على الأقل سنويًا. الفحوصات المنتظمة تضمن بقاء أنظمة الفرملة التجديدية وتيل الفرامل في حالة مثالية، خاصة في البيئات الصعبة مثل دبي وأبوظبي.",
    },
    {
      question:
        "ما هي العلامات التي تدل على أن فرامل مركبتي الكهربائية بحاجة للصيانة؟",
      answer:
        "إذا سمعت أصواتًا غير عادية، أو شعرت بانخفاض في كفاءة الفرملة، أو كانت دواسة الفرامل لينة، أو ظهرت أضواء تحذيرية على لوحة القيادة، فقد يشير ذلك إلى مشكلة في نظام فرامل مركبتك الكهربائية.",
    },
    {
      question:
        "هل فرامل المركبات الكهربائية تختلف عن المركبات التقليدية؟",
      answer:
        "نعم، فرامل المركبات الكهربائية غالبًا ما تتضمن أنظمة فرملة تجديدية تساعد على إعادة شحن البطارية أثناء الفرملة، مما يقلل من تآكل تيل الفرامل التقليدية لكنه يتطلب صيانة متخصصة.",
    },
    {
      question: "كم تستغرق صيانة فرامل المركبات الكهربائية؟",
      answer:
        "بناءً على المشكلة، قد يستغرق فحص الفرامل وإصلاحات بسيطة بضع ساعات، بينما قد تتطلب المشكلات الأكثر تعقيدًا وقتًا إضافيًا. نحرص على تقديم خدمة سريعة وفعالة دون المساس بالسلامة.",
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