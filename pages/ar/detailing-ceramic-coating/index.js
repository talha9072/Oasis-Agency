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
  <title>طلاء السيراميك في دبي | خدمة تنظيف تفصيلي احترافية</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="هل سئمت من إعادة الطلاء وعلامات الدوامات؟ تنظيفنا التفصيلي وطلاء السيراميك في دبي يوفران حماية مثالية ولمعانًا عميقًا. اتصل بنا اليوم!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="طلاء السيراميك دبي، تنظيف تفصيلي للسيارات، إي في إس الإمارات، حماية المركبات الكهربائية، خدمات تنظيف السيارات، صيانة السيارات دبي"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/detailing-ceramic-coating"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author & Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="إي في إس الإمارات" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="ar" />

  {/* Language alternates */}
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/detailing-ceramic-coating"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/detailing-ceramic-coating"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/detailing-ceramic-coating"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="طلاء السيراميك في دبي | خدمة تنظيف تفصيلي احترافية"
  />
  <meta
    property="og:description"
    content="هل سئمت من إعادة الطلاء وعلامات الدوامات؟ تنظيفنا التفصيلي وطلاء السيراميك في دبي يوفران حماية مثالية ولمعانًا عميقًا. اتصل بنا اليوم!"
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/detailing-ceramic-coating"
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
    content="طلاء السيراميك في دبي | خدمة تنظيف تفصيلي احترافية"
  />
  <meta
    name="twitter:description"
    content="هل سئمت من إعادة الطلاء وعلامات الدوامات؟ تنظيفنا التفصيلي وطلاء السيراميك في دبي يوفران حماية مثالية ولمعانًا عميقًا. اتصل بنا اليوم!"
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

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تنظيف تفصيلي وطلاء السيراميك",
        description:
          "تقدم إي في إس الإمارات خدمات تنظيف تفصيلي وطلاء سيراميك احترافية للمركبات الكهربائية في دبي، مع حماية طويلة الأمد للطلاء ولمعان عميق ومقاومة للأوساخ والأشعة فوق البنفسجية والعوامل البيئية.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Dubai, UAE",
        },
        url: "https://evsuae.com/ar/detailing-ceramic-coating",
        datePublished: "2024-03-29",
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



<ServiceMainHeroAR
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/evs-team.jpg&q=70&w=1920"
  title="تنظيف تفصيلي وطلاء السيراميك المثالي للمركبات الكهربائية في دبي"
  description="مع طلاء السيراميك المتطور لدينا، نحن في إي في إس الإمارات لا نقوم فقط بتنظيف مركباتكم الكهربائية، بل نحولها. للحصول على مظهر أنيق وحديث، نحمي ونعزز موديلات بي واي دي، أفاتر، زيكر، وروكس في دبي وأبوظبي."
  ctaText="احجز الخدمة"
  ctaHref="https://evsuae.com/ar/contact"
/>


<LogoMarqueeAr />


<ServiceBenefitsAr
  title="خدمات التنظيف التفصيلي وطلاء السيراميك"
  items={[
    {
      title: "تطبيق طلاء السيراميك",
      description:
        "نطبق طلاء السيراميك الفاخر على مركبتك الكهربائية، مكونين طبقة حماية تطرد الماء والأوساخ والأشعة فوق البنفسجية للحصول على لمعان يدوم طويلًا.",
    },
    {
      title: "تنظيف خارجي عميق",
      description:
        "خدمات التنظيف التفصيلي لدينا تزيل الأوساخ والشوائب والملوثات من سطح مركبتك الكهربائية، لتجهيزها لتشطيب طلاء السيراميك المثالي.",
    },
    {
      title: "إزالة الخدوش وعلامات الدوامات",
      description:
        "هل توجد خدوش خفيفة أو علامات دوامات؟ نقوم بتلميع سطح مركبتك الكهربائية لاستعادة اللمعان الناعم قبل تطبيق طلاء السيراميك.",
    },
    {
      title: "حماية السطح المقاوم للماء",
      description:
        "يمنح طلاء السيراميك سطحًا طاردًا للماء، مما يحافظ على نظافة مركبتك الكهربائية لفترة أطول ويقلل من متطلبات الصيانة في مناخ دبي المليء بالغبار.",
    },
    {
      title: "تنظيف داخلي تفصيلي",
      description:
        "ننظف ونحمي الأسطح الداخلية لمركبتك الكهربائية، بما في ذلك المقاعد ولوحة القيادة، لتجربة مقصورة نظيفة ومنتعشة كالجديدة.",
    },
    {
      title: "دليل صيانة ما بعد الطلاء",
      description:
        "نقدم إرشادات ونصائح للحفاظ على طلاء السيراميك، لضمان حماية طويلة الأمد ومظهر فاخر بجودة صالة العرض لمركبتك الكهربائية.",
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
        "ما هو طلاء السيراميك وكيف يحمي طلاء مركبتي الكهربائية؟",
      answer:
        "طلاء السيراميك هو بوليمر سائل يُطبق على الجزء الخارجي لمركبتك الكهربائية، مكونًا طبقة مقاومة للماء تحمي الطلاء من الأشعة فوق البنفسجية والملوثات والخدوش الخفيفة.",
    },
    {
      question:
        "كم من الوقت يدوم طلاء السيراميك على المركبات الكهربائية؟",
      answer:
        "يمكن أن يدوم طلاء السيراميك عالي الجودة لعدة سنوات عند الالتزام بالصيانة الدورية والعناية المناسبة، مما يوفر حماية طويلة الأمد ويحافظ على مظهر المركبة.",
    },
    {
      question:
        "هل يختلف طلاء السيراميك عن الشمع أو المواد المانعة للتسرب التقليدية؟",
      answer:
        "نعم، يشكل طلاء السيراميك رابطة شبه دائمة مع طلاء المركبة، ويوفر متانة أعلى ومقاومة كيميائية ولمعانًا أفضل مقارنةً بالشمع أو المواد المانعة للتسرب.",
    },
    {
      question:
        "هل يمكن تطبيق طلاء السيراميك فوق فيلم حماية الطلاء الموجود؟",
      answer:
        "بالتأكيد. يمكن تطبيق طلاء السيراميك فوق فيلم حماية الطلاء لتعزيز الحماية وإضافة لمسة لامعة وسهولة أكبر في التنظيف.",
    },
    {
      question:
        "كم تستغرق عملية التنظيف التفصيلي وتطبيق طلاء السيراميك؟",
      answer:
        "تستغرق معظم خدمات التنظيف التفصيلي وتطبيق طلاء السيراميك بضعة أيام، وذلك حسب حالة المركبة والحزمة المختارة.",
    },
    {
      question:
        "هل يتطلب طلاء السيراميك صيانة خاصة؟",
      answer:
        "لا يتطلب صيانة معقدة، ولكن يُنصح بالغسيل اللطيف والفحوصات الدورية للحفاظ على فعالية الطلاء وإطالة عمره.",
    },
    {
      question:
        "هل يساعد طلاء السيراميك في الحفاظ على قيمة إعادة بيع المركبات الكهربائية؟",
      answer:
        "نعم، المركبة الكهربائية المطلية والمحافظة عليها جيدًا غالبًا ما تحتفظ بقيمة إعادة بيع أعلى بفضل مظهرها الممتاز وحالة الطلاء المحفوظة.",
    },
    {
      question:
        "هل طلاء السيراميك آمن لجميع ماركات وموديلات المركبات الكهربائية؟",
      answer:
        "نعم، طلاء السيراميك آمن ومناسب لجميع ماركات وموديلات المركبات الكهربائية، بما في ذلك بي واي دي، أفاتر، زيكر، روكس وغيرها.",
    },
    {
      question:
        "هل تخدمون عملاء المركبات الكهربائية من أبوظبي أو الإمارات الأخرى؟",
      answer:
        "نعم، نخدم عملاءنا من دبي وأبوظبي وجميع أنحاء الإمارات، ونوفر خدمات تنظيف تفصيلي وطلاء سيراميك احترافية للمركبات الكهربائية.",
    },
    {
      question:
        "ما هي فوائد طلاء السيراميك؟",
      answer:
        "يوفر طلاء السيراميك سطحًا لامعًا مقاومًا للماء، يساعد على طرد الأوساخ والملوثات ويحافظ على نظافة المركبة ومظهرها الأنيق طوال العام.",
    },
    {
      question:
        "هل طلاء السيراميك مقاوم للأشعة فوق البنفسجية؟",
      answer:
        "نعم، تم تصميم طلاء السيراميك لمقاومة الأشعة فوق البنفسجية ومنع بهتان وأكسدة الطلاء، مما يحافظ على مظهر المركبة لفترة أطول.",
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