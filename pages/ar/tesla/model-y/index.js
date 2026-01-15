import Head from "next/head";
import FullHeroAr from "@/components/ar/car-brands/FullHeroAr";
import CarAboutAr from "@/components/ar/car-brands/CarAboutAr";
import CarServicesAr from "@/components/ar/car-brands/CarServicesAr";
import CarFaqAr from "@/components/ar/car-brands/CarFaqAr";
import LatestBlogsLoaderAr from "@/components/ar/car-brands/LatestBlogsLoaderAr";
import BranchesSection from "@/components/ar/common/Branches";
import CustomerReviewsSection from "@/components/ar/common/Customer";
import StatsCounterSection from "@/components/ar/common/CounterStats";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      


<Head>
  {/* Title */}
  <title>
    خدمة تيسلا موديل واي في دبي | صيانة وإصلاحات – إي في إس
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس الإمارات تقدم خدمة متخصصة لتيسلا موديل واي في دبي. احصل على تشخيصات وإصلاحات وصيانة دورية من فنيين ذوي خبرة في المركبات الكهربائية."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة تيسلا موديل واي دبي, صيانة موديل واي الإمارات, إصلاح تيسلا الكهربائية دبي, تشخيص موديل واي الإمارات, فنيو تيسلا متخصصون, دعم إي في إس موديل واي, مركز خدمة تيسلا دبي"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/tesla/model-y"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="الإدارة" />
  <meta
    name="publisher"
    content="إي في إس - خدمات المركبات الكهربائية الإمارات"
  />

  {/* Viewport */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  {/* Language */}
  <meta httpEquiv="Content-Language" content="ar" />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/tesla/model-y"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/tesla/model-y"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla/model-y"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة تيسلا موديل واي في دبي | صيانة وإصلاحات – إي في إس"
  />
  <meta
    property="og:description"
    content="إي في إس الإمارات تقدم خدمة متخصصة لتيسلا موديل واي في دبي. احصل على تشخيصات وإصلاحات وصيانة دورية من فنيين ذوي خبرة في المركبات الكهربائية."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/tesla/model-y"
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
    content="خدمة تيسلا موديل واي في دبي | صيانة وإصلاحات – إي في إس"
  />
  <meta
    name="twitter:description"
    content="إي في إس الإمارات تقدم خدمة متخصصة لتيسلا موديل واي في دبي. احصل على تشخيصات وإصلاحات وصيانة دورية من فنيين ذوي خبرة في المركبات الكهربائية."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "خدمة وصيانة تيسلا موديل واي الكهربائية",
        description:
          "توفر إي في إس الإمارات خدمات تشخيص وصيانة وإصلاح متقدمة لسيارة تيسلا موديل واي في دبي. تشمل خدماتنا فحص البطارية، تحديثات البرمجيات، الصيانة الدورية، والإصلاحات الميكانيكية لضمان أفضل أداء واعتمادية.",
        provider: {
          "@type": "Organization",
          name: "EVS UAE",
          url: "https://evsuae.com",
        },
        areaServed: [
          { "@type": "Place", name: "دبي، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "أبوظبي، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "عجمان، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "العين، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "الرياض، المملكة العربية السعودية" },
        ],
        url: "https://evsuae.com/ar/tesla/model-y",
        datePublished: "2024-03-29",
      }),
    }}
  />
</Head>


      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<FullHeroAr
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=1920"
  titlePrefix=""
  titleHighlight="تيسلا موديل واي"
  titleSuffix="- خدمات الإصلاح والصيانة والضمان في الإمارات"
  description="سيارتك تيسلا موديل واي هي سيارة دفع رباعي كهربائية حديثة، لكن حتى أفضل المركبات الكهربائية تحتاج إلى صيانة متخصصة. سواء كانت صحة البطارية، تحديثات البرمجيات، أو إصلاحات المكابح، إي في إس الإمارات تقدم صيانة موثوقة لتيسلا موديل واي للحفاظ على أدائها الأمثل."
  ctaText="احجز الخدمة"
  ctaLink="https://evsuae.com/ar/contact"
  ctaAriaLabel="احجز الخدمة"
/>


<CarAboutAr
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=1220 1220w
  "
  imageAlt="صورة عن تيسلا موديل واي"
  heading="عن تيسلا موديل واي"
  description="تيسلا موديل واي 2025 هي سيارة دفع رباعي كهربائية متطورة تقدم تسارعًا سريعًا، مدى يزيد عن 530 كيلومترًا، ومقصورة داخلية مستقبلية. تم تصميمها بتقنية الأوتوبايلوت المتقدمة، ومقصورة فسيحة، ونظام بطارية عالي الكفاءة، وهي مصممة للقيادة في المدينة والرحلات الطويلة عبر الإمارات.

ومع ذلك، مثل أي مركبة كهربائية، فإنها تتطلب صيانة متخصصة للحفاظ على أدائها الأمثل. في إي في إس، نحن متخصصون في صيانة وإصلاحات تيسلا موديل واي، مما يضمن تلقي سيارتك أفضل عناية ممكنة. فنيونا ذوو الخبرة يستخدمون أدوات وتقنيات متقدمة للحفاظ على سيارتك في حالة ممتازة مع الحفاظ على ضمانها."
/>


<CarServicesAr
  heading="خدمات إصلاح وصيانة تيسلا موديل واي"
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


<CarFaqAr
  heading="الأسئلة الشائعة"
  faqs={[
    {
      question: "ما هي خدمات الصيانة التي تقدمونها لتيسلا موديل واي؟",
      answer:
        "نقدم خدمة شاملة تشمل فحص المكابح، تدوير الإطارات، فحص صحة البطارية، واستكشاف أخطاء البرمجيات لموديل واي.",
    },
    {
      question: "هل يمكنكم إصلاح مشاكل منفذ الشحن في تيسلا موديل واي؟",
      answer:
        "نعم، نحن نتعامل مع مشاكل منفذ الشحن الميكانيكية والإلكترونية، بالإضافة إلى مشاكل الشحن البطيء أو المتقطع.",
    },
    {
      question: "هل تقدمون صيانة آمنة للضمان لتيسلا موديل واي؟",
      answer:
        "نعم، نحن نتبع الإجراءات الموصى بها من تيسلا لضمان أن جميع الخدمات متوافقة مع متطلبات الضمان.",
    },
    {
      question: "كم مرة يجب أن أقوم بصيانة موديل واي؟",
      answer:
        "نوصي بإجراء فحص كل 12,000 كيلومتر أو مرة واحدة سنويًا، خاصة للإطارات، المكابح، سائل التبريد، وأداء البطارية.",
    },
  ]}
/>






 <BranchesSection />
{/* end section */}
<StatsCounterSection />
<CustomerReviewsSection />



<section className="pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0" dir="rtl">
  <h2 className="h1 alt-font fw-500 ls-minus-1px text-white mb-15px mb-4 text-center">
    أحدث المقالات<span className="text-base-color">.</span>
  </h2>

  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center"
        ></div>

        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>
      </div>
    </div>
  </div>
</section>

{/* Arabic Blog Loader */}
      <LatestBlogsLoaderAr />

        
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
      extraScripts: ["/js/blog.js"],
    },
    
  };
}