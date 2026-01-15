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
    صحة بطارية السيارات الكهربائية وإدارة الحرارة في دبي | خدمة التبريد والحساسات
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس دبي تقدم تشخيصات نظام التبريد وفحوصات صحة البطارية للمركبات الكهربائية، لمنع الحرارة الزائدة، إطالة عمر البطارية، وضمان أداء آمن."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="نظام تبريد بطارية السيارات الكهربائية, إصلاح تبريد المركبات الكهربائية, ارتفاع حرارة بطارية السيارات الكهربائية, خدمة سائل التبريد, تشخيص حساسات الحرارة دبي"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services/battery-electrical/battery-health-thermal-management"
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
    href="https://evsuae.com/services/battery-electrical/battery-health-thermal-management"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services/battery-electrical/battery-health-thermal-management"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="صحة بطارية السيارات الكهربائية وإدارة الحرارة في دبي | خدمة التبريد والحساسات"
  />
  <meta
    property="og:description"
    content="إي في إس دبي تقدم تشخيصات نظام التبريد وفحوصات صحة البطارية للمركبات الكهربائية، لمنع الحرارة الزائدة، إطالة عمر البطارية، وضمان أداء آمن."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services/battery-electrical/battery-health-thermal-management"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    property="og:image:alt"
    content="تشخيص نظام التبريد وصحة بطارية المركبات الكهربائية في دبي"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="صحة بطارية السيارات الكهربائية وإدارة الحرارة في دبي | خدمة التبريد والحساسات"
  />
  <meta
    name="twitter:description"
    content="إي في إس دبي تقدم تشخيصات نظام التبريد وفحوصات صحة البطارية للمركبات الكهربائية، لمنع الحرارة الزائدة، إطالة عمر البطارية، وضمان أداء آمن."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />
  <meta
    name="twitter:image:alt"
    content="تشخيص نظام التبريد وصحة بطارية المركبات الكهربائية في دبي"
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
  subtitle="صحة البطارية وإدارة الحرارة"
  title="صحة البطارية وإدارة الحرارة للمركبات الكهربائية"
  description="إدارة حرارية من إي في إس لصحة بطارية المركبات الكهربائية المثلى"
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
  description={`تولد حزم بطاريات المركبات الكهربائية حرارة كبيرة، خاصة في مناخ دبي. إذا لم تُدار هذه الحرارة بشكل صحيح، فقد تؤدي إلى تدهور أداء البطارية وعمرها الافتراضي. في <strong>إي في إس</strong>، نقدم خدمات إدارة حرارية متخصصة تحافظ على عمل بطارية مركبتك الكهربائية ضمن نطاقات درجات حرارة آمنة. من فحص تدفق سائل التبريد إلى معايرة الحساسات وإصلاح وحدات التبريد، نضمن بقاء بطاريتك صحية، فعالة، ومحمية من الحرارة الزائدة.`}
/>



<ServiceBenefitsAr
  title="فوائد صحة البطارية وإدارة الحرارة"
  items={[
    {
      title: "صيانة دائرة التبريد",
      description:
        "نقوم بغسل وإعادة تعبئة أنظمة سائل التبريد للحفاظ على تنظيم حراري مناسب.",
    },
    {
      title: "اختبار واستبدال الحساسات",
      description:
        "نتحقق من دقة حساسات الحرارة ونستبدل الوحدات المعيبة التي تؤثر على استجابة النظام.",
    },
    {
      title: "إصلاح وحدة تبريد البطارية",
      description:
        "نفحص ونصلح المضخات، الصمامات، ووحدات التبريد المسؤولة عن التحكم الحراري النشط.",
    },
    {
      title: "منع الحرارة الزائدة",
      description:
        "الخدمة في الوقت المناسب تقلل من مخاطر الهروب الحراري أو خفض أداء البطارية في الطقس الحار.",
    },
    {
      title: "مراقبة صحة البطارية",
      description:
        "نقيم توزيع درجة حرارة الخلايا ونكتشف العلامات المبكرة للإجهاد الحراري أو عدم التوازن.",
    },
    {
      title: "تحسين العمر الافتراضي والمدى",
      description:
        "نظام تبريد يُحافظ عليه بشكل جيد يدعم عمر بطارية أطول ومدى مستقر عبر المواسم.",
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
      question: "ما هي علامات مشاكل إدارة الحرارة في المركبات الكهربائية؟",
      answer:
        "تنبيهات ارتفاع حرارة البطارية، انخفاض سرعة الشحن، أو صوت مروحة قوي هي مؤشرات شائعة.",
    },
    {
      question: "هل يمكن أن يؤدي سوء تنظيم الحرارة إلى تلف البطارية؟",
      answer:
        "نعم، درجات الحرارة المرتفعة المستمرة تؤدي إلى تدهور خلايا البطارية، تقليل الأداء، وقد تسبب فشلًا طويل الأمد.",
    },
    {
      question: "كم مرة يجب صيانة نظام التبريد؟",
      answer:
        "نوصي بالفحص كل 12 شهرًا أو قبل ذلك إذا أبلغت مركبتك عن ارتفاع في الحرارة أو خفض في الأداء.",
    },
    {
      question: "هل تستخدمون سائل تبريد وقطع غيار محددة من الشركة المصنعة؟",
      answer:
        "نعم، نتبع إرشادات العلامة التجارية المحددة لضمان التوافق مع بنية تبريد مركبتك الكهربائية.",
    },
    {
      question: "هل يؤثر تبريد البطارية على المدى؟",
      answer:
        "بشكل غير مباشر، نعم. البطارية الأكثر برودة تعمل بكفاءة أعلى وتتيح استخدامًا مثاليًا للطاقة، مما يحافظ على المدى.",
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