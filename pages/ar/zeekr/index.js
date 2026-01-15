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
  <title>خدمة زيكر في دبي | صيانة وإصلاحات متخصصة</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس الإمارات خدمة متخصصة لمركبات زيكر الكهربائية في دبي. من التشخيص إلى الإصلاحات، يضمن فنيونا المختصون أداءً مثاليًا لجميع موديلات زيكر."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة زيكر دبي، صيانة زيكر الإمارات، إصلاح المركبات الكهربائية زيكر، تشخيص المركبات الكهربائية دبي، مركز خدمة زيكر الإمارات، فنيون متخصصون زيكر، دعم إي في إس زيكر"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/zeekr" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/zeekr" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/zeekr" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/zeekr" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة زيكر في دبي | صيانة وإصلاحات متخصصة"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس الإمارات خدمة متخصصة لمركبات زيكر الكهربائية في دبي. من التشخيص إلى الإصلاحات، يضمن فنيونا المختصون أداءً مثاليًا لجميع موديلات زيكر."
  />
  <meta property="og:url" content="https://evsuae.com/ar/zeekr" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="خدمة زيكر في دبي | صيانة وإصلاحات متخصصة"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس الإمارات خدمة متخصصة لمركبات زيكر الكهربائية في دبي. من التشخيص إلى الإصلاحات، يضمن فنيونا المختصون أداءً مثاليًا لجميع موديلات زيكر."
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1920"
  titlePrefix="خدمة وصيانة المركبات الكهربائية"
  titleHighlight="زيكر"
  titleSuffix="في الإمارات"
  description="في إي في إس، نقدم خدمات صيانة المركبات الكهربائية من زيكر، تغطي كل شيء من الفحوصات الدورية إلى الإصلاحات المتعلقة بالضمان. يستخدم فنيونا أدوات تشخيص متقدمة ويتبعون إجراءات تتماشى مع معايير الشركة المصنعة لدعم الأداء طويل الأمد. نحن ندعم مالكي زيكر في دبي وجميع أنحاء الإمارات برعاية موثوقة ومركزة على التفاصيل."
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
          موديلات زيكر التي نخدمها
        </h2>
      </div>

      {/* ZEEKR X */}
      <div className="col-lg-4">
        <div className="service-box">
          <img
            src="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70"
            srcSet="
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=320 320w,
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=500 500w,
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=768 768w,
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1024 1024w
            "
            width="377"
            height="251"
            sizes="100vw"
            alt="صورة زيكر إكس"
          />

          <div className="service-box-content">
            {/* ✅ THIS is the important anchor */}
            <a
              href="https://evsuae.com/ar/zeekr/zeekr-x"
              aria-label="تعرف على المزيد عن زيكر إكس"
              className="d-block text-decoration-none"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                زيكر إكس
              </h3>

              <p className="fs-16 mt-2">
                زيكر إكس هي مركبة كهربائية حديثة مصممة للأداء، الكفاءة، والأناقة.
                في إي في إس، نحن متخصصون في صيانة وخدمة هذا الموديل المتقدم،
                مما يضمن بقاء مركبتك في أفضل حالة. يقدم فريقنا المتخصص رعاية
                مخصصة لزيكر إكس ودعمًا يشمل الخدمات المتعلقة بالضمان. سواء كنت
                في دبي، أبوظبي، أو عجمان، إي في إس هي شريكك الموثوق للحفاظ على
                تشغيل زيكر إكس بسلاسة.
              </p>
            </a>

            {/* Button anchor stays separate */}
            <a
              href="https://evsuae.com/ar/zeekr/zeekr-x"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن زيكر"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* ZEEKR 001 */}
      <div className="col-lg-4">
        <div className="service-box">
          <img
            src="https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70"
            srcSet="
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=320 320w,
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=500 500w,
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=768 768w,
              https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-001.jpg&q=70&w=1024 1024w
            "
            width="377"
            height="251"
            sizes="100vw"
            alt="صورة زيكر 001"
          />

          <div className="service-box-content">
            <a
              href="https://evsuae.com/ar/zeekr/zeekr-001"
              aria-label="تعرف على المزيد عن زيكر 001"
              className="d-block text-decoration-none"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                زيكر 001
              </h3>

              <p className="fs-16 mt-2">
                في إي في إس، نقدم صيانة شاملة ورعاية متخصصة لزيكر 001،
                مما يضمن تشغيلها بأفضل أداء. فريقنا يفهم التكنولوجيا المتقدمة
                وميزات هذا الموديل ومجهز بالكامل للتعامل مع الصيانة الدورية
                والخدمات المتعلقة بضمان زيكر 001.
              </p>
            </a>

            <a
              href="https://evsuae.com/ar/zeekr/zeekr-001"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن زيكر"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-29.jpg&q=70&w=1220 1220w
  "
  imageAlt="صورة عن زيكر"
  heading="عن زيكر"
  description="زيكر إكس هي مركبة كهربائية عالية الأداء مصممة للكفاءة واحتياجات القيادة المعاصرة. في إي في إس، فريقنا مجهز للتعامل مع جميع جوانب صيانة وخدمة زيكر إكس، بما في ذلك الأعمال المتعلقة بالضمان. نحن نقدم الدعم لمالكي زيكر إكس في جميع أنحاء الإمارات، بما في ذلك دبي، أبوظبي، وعجمان، مما يضمن أداءً متسقًا من خلال تشخيص ورعاية ماهرة."
/>

<CarServicesAr
  heading="خدمات إصلاح وصيانة زيكر"
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
        "كيف أسجل سيارة زيكر الخاصة بي مع الضمان في الإمارات؟",
      answer:
        "لتسجيل سيارة زيكر الكهربائية الخاصة بك مع الضمان في الإمارات، يمكن لفريقنا في إي في إس مساعدتك في العملية الكاملة. نحن نتولى جميع الوثائق المطلوبة ونتأكد من تسجيل مركبتك بشكل صحيح لضمان تغطية فعّالة وبأقل جهد من جانبك.",
    },
    {
      question:
        "ما الذي يشمله ضمان زيكر الممتد؟",
      answer:
        "يغطي ضمان زيكر الممتد المكونات الأساسية مثل نظام البطارية، المحركات الكهربائية، أنظمة نقل الحركة، والأنظمة الإلكترونية الرئيسية، مما يوفر حماية طويلة الأمد ويقلل من تكاليف الإصلاح المستقبلية مع الحفاظ على أداء سيارتك زيكر.",
    },
    {
      question:
        "أين يمكنني صيانة سيارة زيكر الخاصة بي تحت الضمان في الإمارات؟",
      answer:
        "يمكنك صيانة سيارة زيكر الكهربائية الخاصة بك تحت الضمان لدى إي في إس في مواقعنا داخل الإمارات، بما في ذلك دبي وأبوظبي وعجمان. فنيونا مدربون على العمل وفق معايير زيكر والشركة المصنعة لضمان أعلى مستويات الجودة والالتزام بشروط الضمان.",
    },
    {
      question:
        "كيف تتعامل إي في إس مع مطالبات ضمان زيكر؟",
      answer:
        "تتولى إي في إس إدارة مطالبات ضمان زيكر من خلال التعامل مع جميع الإجراءات الإدارية، إجراء الفحوصات اللازمة، تنسيق الإصلاحات، وضمان أن تتم جميع الأعمال وفق شروط الضمان، مما يجعل التجربة سلسة وخالية من التعقيد لمالكي زيكر.",
    },
    {
      question:
        "ما الذي يجعل إي في إس أفضل مزود ضمان لزيكر؟",
      answer:
        "تتميز إي في إس باستخدام أحدث أدوات تشخيص المركبات الكهربائية، وفنيين متخصصين ومدربين على أنظمة زيكر، إلى جانب الالتزام الصارم بمعايير الشركة المصنعة، مما يضمن صيانة دقيقة ومتوافقة مع متطلبات ضمان زيكر.",
    },
    {
      question:
        "هل يمكنني تمديد ضمان زيكر الخاص بي بعد انتهاء الضمان القياسي؟",
      answer:
        "نعم، توفر إي في إس حلول ضمان زيكر الممتد التي تمنحك حماية إضافية بعد انتهاء فترة الضمان القياسية، مع خطط مرنة مصممة للحفاظ على المكونات الرئيسية، وتعزيز القيمة طويلة الأمد، وضمان راحة بالك أثناء القيادة."
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