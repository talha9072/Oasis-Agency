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
  <title>خدمة ضمان بي واي دي دبي | صيانة وإصلاحات متخصصة</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح احترافية لمركبات بي واي دي الكهربائية في دبي. فنيون متخصصون، تشخيص متقدم، ودعم موثوق لجميع موديلات بي واي دي."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة بي واي دي دبي، صيانة بي واي دي الإمارات، إصلاح المركبات الكهربائية دبي، تشخيص بي واي دي الإمارات، مركز خدمة بي واي دي دبي، فنيون متخصصون بي واي دي، دعم إي في إس بي واي دي"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/byd"
  />

  {/* Robots */}
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  {/* Author / Publisher */}
  <meta name="author" content="Admin" />
  <meta name="publisher" content="إي في إس الإمارات" />

  {/* Viewport */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  {/* Language & hreflang */}
  <meta httpEquiv="Content-Language" content="ar" />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/byd"
  />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/byd"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/byd"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة ضمان بي واي دي دبي | صيانة وإصلاحات متخصصة"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح احترافية لمركبات بي واي دي الكهربائية في دبي. فنيون متخصصون، تشخيص متقدم، ودعم موثوق لجميع موديلات بي واي دي."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/byd"
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
    content="خدمة ضمان بي واي دي دبي | صيانة وإصلاحات متخصصة"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح احترافية لمركبات بي واي دي الكهربائية في دبي. فنيون متخصصون، تشخيص متقدم، ودعم موثوق لجميع موديلات بي واي دي."
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/New-Project-39.jpg&q=70&w=1920"
  titlePrefix="مركز خدمة"
  titleHighlight="بي واي دي"
  titleSuffix="المتخصص للمركبات الكهربائية"
  description="إذا كنت تمتلك سيارة بي واي دي الكهربائية في دبي، تقدم إي في إس دعمًا للصيانة الدورية والخدمات المتعلقة بالضمان. فنيونا مجهزون للتعامل مع رعاية سيارات بي واي دي وفقًا لإرشادات الشركة المصنعة، بما في ذلك التشخيص والإصلاحات والصيانة المجدولة. يمكن لمالكي بي واي دي في دبي الاعتماد على خدماتنا للحفاظ على الأداء طويل الأمد والامتثال لمتطلبات الضمان بثقة."
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
          موديلات بي واي دي التي نخدمها
        </h2>
      </div>

      {/* ================= BYD HAN ================= */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/byd/byd-han" aria-label="تعرف على المزيد عن بي واي دي هان">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-han.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة بي واي دي هان"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/byd/byd-han">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                بي واي دي هان
              </h3>
              <p className="fs-16 mt-2">
                بي واي دي هان هي سيارة كهربائية عالية الأداء مزودة بتقنيات متقدمة وتصميم فاخر.
                في إي في إس، نقدم دعمًا للصيانة والخدمات المتعلقة بالضمان لبي واي دي هان،
                بما في ذلك الصيانة الدورية وإصلاحات الأنظمة.
                فريقنا يساعد مالكي بي واي دي هان في دبي، أبوظبي، وعجمان
                برعاية تتماشى مع معايير الشركة المصنعة لضمان الموثوقية والأداء المستمر.
              </p>
            </a>

            <a href="/ar/byd/byd-han" className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2">
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* ================= BYD SEAL ================= */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/byd/byd-seal" aria-label="تعرف على المزيد عن بي واي دي سيل">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Seal.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة بي واي دي سيل"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/byd/byd-seal">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                بي واي دي سيل
              </h3>
              <p className="fs-16 mt-2">
                بي واي دي سيل هي سيارة كهربائية متقدمة تتطلب رعاية احترافية للحفاظ على أدائها.
                في إي في إس، نقدم خدمة شاملة لبي واي دي سيل،
                تشمل كل شيء من الصيانة الدورية إلى الإصلاحات المتعلقة بالضمان المتخصصة.
                فريقنا الماهر مجهز لتلبية احتياجات سيارتك الفريدة،
                مما يضمن بقاءها في حالة ممتازة سواء كنت في دبي، أبوظبي، أو عجمان.
              </p>
            </a>

            <a href="/ar/byd/byd-seal" className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2">
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* ================= BYD ATTO 3 ================= */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/byd/byd-atto-3">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/BYD-Atto3.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة بي واي دي آتو 3"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/byd/byd-atto-3">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                بي واي دي آتو 3
              </h3>
              <p className="fs-16 mt-2">
                بي واي دي آتو 3 هي سيارة كهربائية متقدمة للغاية مصممة للأداء والابتكار.
                في إي في إس، نقدم صيانة وخدمة متخصصة لبي واي دي آتو 3،
                مما يضمن بقاء سيارتك في حالة مثالية.
                فريقنا مجهز للتعامل مع الصيانة الدورية
                واحتياجات الضمان المتعلقة ببي واي دي آتو 3
                في دبي، أبوظبي، وعجمان.
              </p>
            </a>

            <a href="/ar/byd/byd-atto-3" className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2">
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* ================= BYD SONG PLUS ================= */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/byd/byd-song-plus">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Songplus.jpg&q=70"
              width="377"
              height="251"
              alt="صورة بي واي دي سونغ بلاس"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/byd/byd-song-plus">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                بي واي دي سونغ بلاس
              </h3>
              <p className="fs-16 mt-2">
                بي واي دي سونغ بلاس دي إم-آي هي سيارة دفع رباعي هجينة متطورة
                تجمع بسلاسة بين الأداء، الكفاءة، والتكنولوجيا المتقدمة.
                مزودة بنظام بي واي دي الهجين من الجيل الخامس،
                تجمع بين محرك سعة 1.5 لتر ومحرك كهربائي
                لتقديم إنتاج مشترك يصل إلى 160 كيلوواط،
                مما يتيح التسارع من 0 إلى 100 كم/ساعة في أقل من 5.9 ثوانٍ.
              </p>
            </a>

            <a href="/ar/byd/byd-song-plus" className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2">
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* ================= BYD QIN PLUS ================= */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/byd/byd-qin-plus">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/BYD-Qinplus.jpg&q=70"
              width="377"
              height="251"
              alt="صورة بي واي دي كين بلاس"
            />
          </a>

          <div className="service-box-content">
            <a href="/byd/byd-qin-plus">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                بي واي دي كين بلاس
              </h3>
              <p className="fs-16 mt-2">
                بي واي دي كين بلاس هي سيدان كهربائية متقدمة مصممة للأداء والكفاءة.
                في إي في إس، نقدم مجموعة من خدمات الصيانة والإصلاح
                لبي واي دي كين بلاس، بما في ذلك الصيانة الدورية
                والدعم للأعمال المتعلقة بالضمان.
                يتبع فنيونا إرشادات الشركة المصنعة
                لضمان الأداء طويل الأمد
                والامتثال المستمر للضمان في جميع أنحاء الإمارات.
              </p>
            </a>

            <a href="/byd/byd-qin-plus" className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2">
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




<CarAboutAr
  imageSrc="https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/New-Project-40.jpg&q=70&w=1220 1220w
  "
  imageAlt="صورة عن بي واي دي"
  heading="عن بي واي دي"
  description="بي واي دي هي رائدة في ابتكار المركبات الكهربائية، معروفة بدمج التكنولوجيا المتطورة مع التصميم المستدام. تتميز سياراتها بأنظمة دفع كهربائية متقدمة، تقدم أداءً مذهلاً، كفاءة، ومدى يلبي احتياجات القيادة الحديثة. مزودة بتكنولوجيا بطارية بليد المميزة من بي واي دي، تعطي هذه المركبات الأولوية للسلامة والعمر الطويل. مع تصميمات داخلية فاخرة، اتصال ذكي، وتركيز على التنقل الصديق للبيئة، توفر سيارات بي واي دي تجربة قيادة متميزة. للحصول على صيانة وخدمات ضمان موثوقة، تقدم إي في إس رعاية متخصصة للحفاظ على أداء سيارتك بي واي دي بأفضل حالاتها."
/>


<CarServicesAr
  heading="خدمات إصلاح وصيانة بي واي دي"
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
        "كيف يمكنني تسجيل سيارة بي واي دي الخاصة بي مع الضمان في الإمارات؟",
      answer:
        "لتسجيل سيارة بي واي دي الكهربائية الخاصة بك مع الضمان في الإمارات، يمكنك زيارة إي في إس للمساعدة. فريقنا يدير الوثائق المطلوبة وينسق العملية لضمان تغطية سيارتك بشكل صحيح تحت خطة الضمان المناسبة.",
      defaultOpen: true,
    },
    {
      question: "ما الذي يغطيه ضمان بي واي دي الممتد؟",
      answer:
        "يغطي ضمان بي واي دي الممتد المكونات الرئيسية مثل المحرك، ناقل الحركة، والأنظمة الكهربائية، مما يوفر حماية طويلة الأمد لسيارتك بعد انتهاء فترة الضمان القياسية.",
    },
    {
      question:
        "أين يمكنني صيانة سيارة بي واي دي الخاصة بي تحت الضمان في الإمارات؟",
      answer:
        "يمكنك صيانة سيارة بي واي دي الكهربائية تحت الضمان في مواقع إي في إس في دبي، أبوظبي، وعجمان. نحن نقدم دعمًا للصيانة والإصلاحات المتعلقة بالضمان في جميع أنحاء الإمارات، مع اتباع الإجراءات التي تتماشى مع شروط ضمان بي واي دي.",
    },
    {
      question:
        "كم من الوقت يستغرق معالجة مطالبة ضمان بي واي دي في إي في إس؟",
      answer:
        "في إي في إس، نعطي الأولوية للخدمة السريعة والفعالة. تتم معالجة معظم مطالبات ضمان بي واي دي بسرعة، مع الحد الأدنى من التأخير، بفضل نظامنا المبسط، فريقنا ذو الخبرة، والدعم الداخلي - مما يضمن عودة سيارتك إلى الطريق بسرعة.",
    },
    {
      question:
        "هل يمكنني تمديد ضمان بي واي دي الخاص بي بعد الفترة القياسية؟",
      answer:
        "نعم! تقدم إي في إس خيارات ضمان بي واي دي الممتد، مما يمنحك حماية ممتدة لسيارتك بعد انتهاء فترة الضمان القياسية.",
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