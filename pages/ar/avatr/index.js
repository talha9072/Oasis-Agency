import Head from "next/head";
import FullHeroAr from "@/components/ar/car-brands/FullHeroAr";
import CarAboutAr from "@/components/ar/car-brands/CarAboutAr";
import CarServicesAr from "@/components/ar/car-brands/CarServicesAr";
import CarFaqAr from "@/components/ar/car-brands/CarFaqAr";
import LatestBlogsLoaderAr from "@/components/ar/car-brands/LatestBlogsLoaderAr";
import BranchesSection from "@/components/ar/common/Branches";
import CustomerReviewsSection from "@/components/ar/common/Customer";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      

<Head>
  {/* Title */}
  <title>خدمة أفاتر في دبي | صيانة وإصلاحات متخصصة – إي في إس الإمارات</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="احصل على خدمة احترافية لمركبات أفاتر الكهربائية في دبي مع إي في إس الإمارات. فنيون متخصصون يقدمون التشخيص، الصيانة، والإصلاحات المصممة لموديلات أفاتر."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة أفاتر دبي, صيانة سيارات أفاتر الإمارات, إصلاح المركبات الكهربائية دبي, تشخيص أفاتر الإمارات, مركز خدمة إي في إس أفاتر, دعم سيارات أفاتر الكهربائية"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/avatr" />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="إي في إس الإمارات" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Language & hreflang */}
  <meta httpEquiv="Content-Language" content="ar" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/avatr" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/avatr" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/avatr" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة أفاتر في دبي | صيانة وإصلاحات متخصصة – إي في إس الإمارات"
  />
  <meta
    property="og:description"
    content="خدمات تشخيص وصيانة وإصلاح احترافية لمركبات أفاتر الكهربائية في دبي مع إي في إس الإمارات."
  />
  <meta property="og:url" content="https://evsuae.com/ar/avatr" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="خدمة أفاتر في دبي | صيانة وإصلاحات متخصصة – إي في إس الإمارات"
  />
  <meta
    name="twitter:description"
    content="إي في إس الإمارات تقدم خدمات متخصصة لصيانة وإصلاح مركبات أفاتر الكهربائية في دبي."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Structured Data – Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "خدمة وصيانة مركبات أفاتر الكهربائية",
        description:
          "تقدم إي في إس الإمارات خدمات تشخيص، صيانة، وإصلاح متقدمة لمركبات أفاتر الكهربائية في دبي، بما في ذلك أنظمة البطارية، تحديثات البرمجيات، وخدمات المكونات.",
        provider: {
          "@type": "Organization",
          name: "إي في إس الإمارات",
          url: "https://evsuae.com",
        },
        areaServed: [
          { "@type": "Place", name: "دبي، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "أبوظبي، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "عجمان، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "العين، الإمارات العربية المتحدة" },
          { "@type": "Place", name: "الرياض، المملكة العربية السعودية" },
        ],
        url: "https://evsuae.com/ar/avatr",
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/New-Project-36.jpg&q=70&w=1920"
  titlePrefix="مركز خدمة"
  titleHighlight="أفاتر"
  titleSuffix="المتخصص"
  description="في إي في إس، نقدم خدمات صيانة وإصلاح لمركبات أفاتر الكهربائية، بما في ذلك الدعم للأعمال المغطاة بالضمان. فريقنا مجهز للتعامل مع الصيانة الدورية والمشكلات المتعلقة بالأنظمة وفقًا لمعايير الشركة المصنعة. يمكن لمالكي أفاتر في دبي الاعتماد على فنيينا للتشخيص والصيانة والرعاية المصممة للحفاظ على الأداء والكفاءة على المدى الطويل."
  ctaText="احجز الخدمة"
  ctaLink="https://evsuae.com/ar/contact"
  ctaAriaLabel="احجز الخدمة"
/>


<section id="car-cards" className="pb-0 xs-pt-30px">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-12 d-flex align-items-center justify-content-center position-relative xs-mb-0px xs-mt-15px"
        data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-500 alt-font text-white text-center ls-minus-2px pb-2 xs-pb-0">
          موديلات أفاتر التي نخدمها
        </h2>
      </div>

      {/* AVATR 11 */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a
            href="/ar/avatr/avatr-11"
            aria-label="تعرف على المزيد عن أفاتر 11"
          >
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-11.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة أفاتر 11"
            />
          </a>

          <div className="service-box-content">
            <a
              href="/ar/avatr/avatr-11"
              aria-label="تعرف على المزيد عن أفاتر 11"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                أفاتر 11
              </h3>
              <p className="fs-16 mt-2">
                صيانة متخصصة لمركبة أفاتر 11 تشمل فحص البطارية، تحديثات
                البرمجيات، وتشخيص الأنظمة الكهربائية عالية الجهد من قبل
                فنيين معتمدين في إي في إس.
              </p>
            </a>

            <a
              href="/ar/avatr/avatr-11"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن أفاتر 11"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* AVATR 12 */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a
            href="/ar/avatr/avatr-12"
            aria-label="تعرف على المزيد عن أفاتر 12"
          >
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Avatr-12.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة أفاتر 12"
            />
          </a>

          <div className="service-box-content">
            <a
              href="/ar/avatr/avatr-12"
              aria-label="تعرف على المزيد عن أفاتر 12"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                أفاتر 12
              </h3>
              <p className="fs-16 mt-2">
                خدمة شاملة لمركبة أفاتر 12 تشمل الصيانة الدورية،
                تشخيص الأنظمة الذكية، ودعم أعمال الضمان للحفاظ على
                الأداء والكفاءة في مختلف ظروف القيادة.
              </p>
            </a>

            <a
              href="/ar/avatr/avatr-12"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن أفاتر 12"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<CarAboutAr
  imageSrc="https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-33.jpg&q=70&w=1220 1220w
  "
  imageAlt="صورة عن أفاتر"
  heading="عن أفاتر"
  description="أفاتر هي علامة تجارية ناشئة تركز على التنقل الكهربائي مع التركيز القوي على دمج الذكاء الاصطناعي والتصميم المستقبلي. تستهدف العملاء المهتمين بالتكنولوجيا والبيئة، وتتميز مركبات أفاتر بتقنيات القيادة الذاتية المتقدمة، التصاميم الأنيقة، وأنظمة الاتصال الذكية. في الشرق الأوسط، وخاصة في الإمارات، حظيت أفاتر باهتمام كبير لتقديمها مزيجًا سلسًا من الفخامة والذكاء في المركبات الكهربائية. تهدف العلامة التجارية إلى تلبية الطلب المتزايد على المركبات الكهربائية من خلال تقديم تجارب متميزة تجذب العملاء الباحثين عن الابتكار في قيادتهم اليومية."
/>


<CarServicesAr
  heading="خدمات إصلاح وصيانة أفاتر"
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
      question: "كيف أسجل سيارة أفاتر الخاصة بي مع الضمان في الإمارات؟",
      answer:
        "لتسجيل سيارة أفاتر الكهربائية الخاصة بك مع الضمان في الإمارات، يمكنك زيارة إي في إس للمساعدة. فريقنا يدير الوثائق اللازمة وينسق العملية لضمان تغطية مركبتك بشكل صحيح دون تأخيرات أو تعقيدات غير ضرورية.",
    },
    {
      question: "ما الذي يشمله ضمان أفاتر الممتد؟",
      answer:
        "يغطي ضمان أفاتر الممتد المكونات الأساسية مثل المحرك، ناقل الحركة، والأنظمة الهجينة، ويوفر حماية طويلة الأمد لمركبتك، مما يقلل من التكاليف المستقبلية ويمنحك راحة البال لسنوات بعد الضمان القياسي.",
    },
    {
      question: "أين يمكنني صيانة سيارة أفاتر الخاصة بي تحت الضمان؟",
      answer:
        "يمكن صيانة المركبات الكهربائية من أفاتر تحت الضمان في مواقع إي في إس في دبي، أبوظبي، وعجمان. فريقنا يقدم دعمًا متعلقًا بالضمان في جميع أنحاء الإمارات، ويساعد في التشخيص، الإصلاحات، والصيانة المستمرة وفقًا لشروط ضمان أفاتر.",
    },
    {
      question: "كيف تدير إي في إس مطالبات ضمان أفاتر؟",
      answer:
        "تدير إي في إس مطالبات ضمان أفاتر من خلال التعامل مع الوثائق المطلوبة، تنسيق الإصلاحات، وضمان توافق جميع الإجراءات مع شروط ضمان أفاتر. هدفنا هو جعل العملية فعالة وبسيطة قدر الإمكان لمالكي المركبات الكهربائية في جميع أنحاء الإمارات.",
    },
    {
      question: "هل يمكنني تمديد ضمان أفاتر الخاص بي؟",
      answer:
        "نعم! تقدم إي في إس خيارات ضمان أفاتر الممتد، مما يمنحك حماية إضافية لسيارتك بعد انتهاء فترة الضمان القياسية، ويساعد في الحفاظ على القيمة، تقليل التكاليف المفاجئة، وضمان أداء موثوق على المدى الطويل.",
    },
  ]}
/>







 <BranchesSection />
{/* end section */}
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