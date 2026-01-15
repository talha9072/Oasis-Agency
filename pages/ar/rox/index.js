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
  <title>مزود ضمان روكس | العناية المتقدمة بالمركبات الكهربائية</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="استكشف خدمات روكس من إي في إس الإمارات - صيانة وتحسينات أداء المركبات الكهربائية في دبي. رعاية مخصصة لجميع العلامات مع تشخيص ودعم متخصص."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة روكس دبي، تحسينات المركبات الكهربائية الإمارات، صيانة متقدمة للمركبات الكهربائية، تشخيص سيارات روكس، تهيئة أداء المركبات الكهربائية دبي، دعم متميز للمركبات الكهربائية، خدمات إي في إس الإمارات"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/rox" />

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

  {/* Language */}
  <meta httpEquiv="Content-Language" content="ar" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/rox" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/rox" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/rox" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="مزود ضمان روكس | العناية المتقدمة بالمركبات الكهربائية"
  />
  <meta
    property="og:description"
    content="استكشف خدمات روكس من إي في إس الإمارات - صيانة وتحسينات أداء المركبات الكهربائية في دبي. رعاية مخصصة لجميع العلامات مع تشخيص ودعم متخصص."
  />
  <meta property="og:url" content="https://evsuae.com/ar/rox" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="مزود ضمان روكس | العناية المتقدمة بالمركبات الكهربائية"
  />
  <meta
    name="twitter:description"
    content="استكشف خدمات روكس من إي في إس الإمارات - صيانة وتحسينات أداء المركبات الكهربائية في دبي. رعاية مخصصة لجميع العلامات مع تشخيص ودعم متخصص."
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

<FullHeroAr
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/ev/rox-car-1.jpg&q=70&w=1920"
  titlePrefix="مركز خدمة"
  titleHighlight="روكس"
  titleSuffix="للمركبات الكهربائية المتخصص"
  description="في إي في إس، يتولى فريقنا المتمرس جميع جوانب صيانة ودعم مركبات روكس الكهربائية. من الصيانة الدورية إلى الإصلاحات المتعلقة بالضمان، نقدم رعاية شاملة مصممة للحفاظ على تشغيل مركبتك بسلاسة. يتم تنفيذ كل خدمة بعناية فائقة بالتفاصيل لضمان الأداء طويل الأمد."
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
          موديلات روكس التي نخدمها
        </h2>
      </div>

      <div className="col-lg-4">
        <div className="service-box">
          <img
            src="https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70"
            srcSet="
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=320 320w,
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=500 500w,
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=768 768w,
              https://evsuae.com/.netlify/images?url=/img/brands/rox-01.jpg&q=70&w=1024 1024w
            "
            width="377"
            height="251"
            sizes="100vw"
            alt="صورة الخدمة"
          />

          <div className="service-box-content">
            {/* ✅ EXACT anchor you asked for */}
            <a
              aria-label="تعرف على المزيد عن روكس"
              href="https://evsuae.com/ar/rox/rox-01"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                روكس 01
              </h3>

              <p className="fs-16 mt-2">
                روكس 01 هي مركبة متطورة مصممة بتقنية متطورة وفخامة في الاعتبار. سواء كنت بحاجة إلى صيانة دورية أو إصلاحات مشمولة بضمان روكس 01، فإن فنيينا المتخصصين هنا للمساعدة. إي في إس هو مركز خدمة روكس 01 الرائد، يوفر رعاية موثوقة في جميع أنحاء الإمارات، بما في ذلك دبي، أبوظبي، وعجمان.
              </p>
            </a>

            {/* Button kept separate (same as original pattern) */}
            <a
              href="https://evsuae.com/ar/rox/rox-01"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن روكس"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/ROX-011-1.jpg&q=70&w=1220 1220w
  "
  imageAlt="صورة عن روكس"
  heading="عن روكس"
  description="روكس 01 هي مركبة كهربائية حديثة مصممة بتقنيات متقدمة وميزات راقية. للصيانة الدورية أو الإصلاحات المشمولة بالضمان، فنيونا المهرة مجهزون للتعامل مع جميع جوانب صيانة روكس 01. نحن نقدم دعمًا موثوقًا لمالكي روكس 01 في جميع أنحاء الإمارات، بما في ذلك دبي، أبوظبي، وعجمان."
/>

<CarServicesAr
  heading="خدمات إصلاح وصيانة روكس"
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
      question:
        "كيف أسجل سيارة روكس الخاصة بي مع الضمان في الإمارات؟",
      answer:
        "لتسجيل سيارة روكس الكهربائية الخاصة بك مع الضمان في الإمارات، يمكن لفريقنا في إي في إس مساعدتك في العملية الكاملة. نحن نتولى الوثائق المطلوبة لضمان تغطية مركبتك بكفاءة وبأقل جهد من جانبك.",
    },
    {
      question:
        "ما الذي يشمله ضمان روكس الممتد؟",
      answer:
        "يغطي ضمان روكس الممتد الأجزاء الأساسية مثل المحرك، ناقل الحركة، والأنظمة الهجينة، مما يضمن حماية طويلة الأمد لمركبتك. هذا يساعدك على تقليل تكاليف الإصلاح المستقبلية ويحافظ على تشغيل سيارتك روكس بموثوقية لسنوات بعد التغطية القياسية.",
    },
    {
      question:
        "أين يمكنني صيانة سيارة روكس الخاصة بي تحت الضمان في الإمارات؟",
      answer:
        "يمكنك إحضار سيارة روكس الكهربائية الخاصة بك إلى إي في إس للصيانة تحت الضمان في مواقعنا في دبي، أبوظبي، وعجمان. فنيونا مدربون لتنفيذ الأعمال المشمولة بالضمان بدقة، مما يضمن صيانة مركبتك وفقًا لمعايير الشركة المصنعة.",
    },
    {
      question:
        "كيف تتعامل إي في إس مع مطالبات ضمان روكس؟",
      answer:
        "في إي في إس، نساعد في مطالبات ضمان روكس من خلال إدارة الأوراق، تنسيق الإصلاحات، والتعامل مع التواصل طوال العملية. هدفنا هو جعل التجربة بسيطة قدر الإمكان حتى تحصل مركبتك الكهربائية على الاهتمام الذي تحتاجه دون متاعب إضافية.",
    },
    {
      question:
        "ما الذي يجعل إي في إس أفضل مزود ضمان لروكس؟",
      answer:
        "تدعم إي في إس صيانة ضمان المركبات الكهربائية من روكس باستخدام أدوات تشخيص متقدمة، وفنيين مدربين، ومكونات تلبي مواصفات الشركة المصنعة. نهجنا مصمم ليتماشى مع متطلبات الضمان مع ضمان تلقي مركبتك صيانة دقيقة ومتسقة.",
    },
    {
      question:
        "هل يمكنني تمديد ضمان روكس الخاص بي بعد الفترة القياسية؟",
      answer:
        "نعم! تقدم إي في إس حلول ضمان روكس، بما في ذلك خيار الضمان الممتد لروكس، والذي يوفر تغطية ممتدة لمركبتك مصممة لحماية المكونات الرئيسية والحفاظ على القيمة والأداء طويل الأمد بعد فترة الضمان القياسية.",
    },
  ]}
/>


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



 <BranchesSection />
{/* end section */}
<CustomerReviewsSection />


        
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