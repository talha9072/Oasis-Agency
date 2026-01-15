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
  <title>خدمة وصيانة إكسبينج في دبي | إي في إس الإمارات</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح متخصصة لمركبات إكسبينج الكهربائية في دبي وجميع أنحاء الإمارات. خبراؤنا المعتمدون يضمنون الأداء الأمثل لسيارتك."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة إكسبينج دبي، صيانة إكسبينج الإمارات، إصلاح إكسبينج دبي، خدمة إكسبينج G7، صيانة إكسبينج G9، صيانة سيارات كهربائية إكسبينج، خدمات إي في إس إكسبينج"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/xpeng" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/xpeng" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/xpeng" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/xpeng"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة وصيانة إكسبينج في دبي | إي في إس الإمارات"
  />
  <meta
    property="og:description"
    content="إي في إس الإمارات تقدم خدمات صيانة وإصلاح معتمدة لمركبات إكسبينج الكهربائية في دبي وجميع أنحاء الإمارات، مع ضمان أفضل أداء بواسطة فنيين متخصصين."
  />
  <meta property="og:url" content="https://evsuae.com/ar/xpeng" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="خدمة وصيانة إكسبينج في دبي | إي في إس الإمارات"
  />
  <meta
    name="twitter:description"
    content="خدمات صيانة وإصلاح احترافية لمركبات إكسبينج الكهربائية في دبي وجميع أنحاء الإمارات."
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7.jpg&q=70&w=1920"
  titlePrefix="مركز خدمة وصيانة وإصلاح"
  titleHighlight="إكسبينج"
  titleSuffix=""
  description="في إي في إس، نقدم خدمات صيانة وإصلاح معتمدة لمركبات إكسبينج الكهربائية، بما في ذلك موديلات G7 وG9. يستخدم فنِّيونا المعتمدون أدوات تشخيص متطورة وإجراءات خدمة دقيقة لضمان أداء مثالي ومتسق لسيارتك في جميع أنحاء الإمارات العربية المتحدة."
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
          موديلات إكسبينج التي نخدمها
        </h2>
      </div>

      {/* XPENG G7 */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a
            href="/ar/xpeng/xpeng-g7"
            aria-label="تعرف على المزيد عن إكسبينج G7"
          >
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة إكسبينج G7"
            />
          </a>

          <div className="service-box-content">
            <a
              href="/ar/xpeng/xpeng-g7"
              aria-label="تعرف على المزيد عن إكسبينج G7"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                إكسبينج G7
              </h3>
              <p className="fs-16 mt-2">
                صيانة متخصصة لمركبة إكسبينج G7 تشمل تحديثات البرمجيات، فحص
                البطارية، وتشخيص الأنظمة بالكامل من قبل فنيين معتمدين.
              </p>
            </a>

            <a
              href="/ar/xpeng/xpeng-g7"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن إكسبينج G7"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* XPENG G9 */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a
            href="/ar/xpeng/xpeng-g9"
            aria-label="تعرف على المزيد عن إكسبينج G9"
          >
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=1220"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G9-1.png&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة إكسبينج G9"
            />
          </a>

          <div className="service-box-content">
            <a
              href="/ar/xpeng/xpeng-g9"
              aria-label="تعرف على المزيد عن إكسبينج G9"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                إكسبينج G9
              </h3>
              <p className="fs-16 mt-2">
                خدمة شاملة لمركبة إكسبينج G9 تشمل التشخيص، تحديثات النظام،
                ومعايرة الأداء بدقة عالية للحفاظ على كفاءة القيادة المثلى.
              </p>
            </a>

            <a
              href="/ar/xpeng/xpeng-g9"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن إكسبينج G9"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/Xpeng-G7-1.png&q=70&w=1220 1220w
  "
  imageAlt="صورة عن إكسبينج"
  heading="عن إكسبينج"
  description="تعد إكسبينج (XPENG) من أبرز العلامات الصينية المبتكرة في عالم المركبات الكهربائية الذكية، حيث تجمع بين الأداء العالي والتقنيات الحديثة لتوفير تجربة قيادة متقدمة وآمنة. تقدم إكسبينج موديلات متميزة مثل G7 وG9، اللتين تدمجان الكفاءة، الراحة، والذكاء الاصطناعي في تصميم أنيق ومستقبلي. في إي في إس الإمارات، نحن مجهزون بالكامل لتقديم خدمات الصيانة والإصلاح المعتمدة لمركبات إكسبينج في دبي وجميع أنحاء الإمارات، مع التزامنا بأعلى معايير الجودة والاعتمادية."
/>


<CarServicesAr
  heading="خدمات إصلاح وصيانة إكسبينج"
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
      question: "هل تقدمون خدمات لجميع موديلات إكسبينج في الإمارات؟",
      answer:
        "نعم، في إي في إس نقدم خدمات الصيانة لجميع موديلات إكسبينج المتوفرة في المنطقة، بما في ذلك G7 وG9 والإصدارات الجديدة. فنيونا مدربون على التعامل مع جميع جوانب الصيانة والإصلاح الخاصة بمركبات إكسبينج.",
    },
    {
      question: "هل تختلف صيانة إكسبينج عن السيارات التقليدية؟",
      answer:
        "نعم، سيارات إكسبينج كهربائية بالكامل وتتطلب عناية خاصة. فهي لا تحتاج إلى تغيير الزيت مثل السيارات التقليدية، لكنها تحتاج إلى فحص حالة البطارية، وتحديثات البرامج، وتشخيص الأنظمة. نستخدم أدوات متوافقة مع إكسبينج لضمان دقة الخدمة.",
    },
    {
      question: "هل توفرون خدمات الإصلاح المشمولة بالضمان لمركبات إكسبينج؟",
      answer:
        "بالتأكيد، نحن في إي في إس مجهزون لإجراء الإصلاحات والصيانة المشمولة بالضمان لمركبات إكسبينج وفقًا لإرشادات الشركة المصنعة وباستخدام المعدات المعتمدة.",
    },
    {
      question: "كل متى يجب أن أقوم بصيانة سيارة إكسبينج في الإمارات؟",
      answer:
        "نوصي بصيانة مركبة إكسبينج مرة كل 12 شهرًا أو كل 20,000 كيلومتر، أيهما أقرب. وقد تتطلب بعض الفحوصات مثل تحديثات البرامج أو فحص الإطارات تكرارًا أكبر حسب أسلوب القيادة والمناخ في الإمارات.",
    },
    {
      question: "أين تقدمون خدمات صيانة إكسبينج في الإمارات؟",
      answer:
        "نقدم خدمات إكسبينج في جميع أنحاء الإمارات، بما في ذلك دبي، أبوظبي، عجمان، والعين. مركزنا مجهز بالكامل لخدمة العملاء من مختلف الإمارات بكفاءة عالية.",
    },
    {
      question: "هل يمكنني تحديث برامج سيارتي إكسبينج لدى إي في إس؟",
      answer:
        "نعم، نوفر خدمات تحديث البرامج لموديلات إكسبينج لضمان استفادة مركبتك من أحدث التحسينات في الأداء والأمان والميزات التقنية.",
    },
    {
      question: "هل تقدمون خدمة الاستلام والتوصيل لصيانة إكسبينج؟",
      answer:
        "نعم، نقدم خدمة استلام وتوصيل مركبات إكسبينج في مختلف مناطق الإمارات حسب التوافر. يرجى التواصل مع فريق الخدمة لدينا لترتيب موعد مسبق.",
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