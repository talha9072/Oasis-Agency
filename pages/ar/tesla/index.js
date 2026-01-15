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
  <title>
    خدمة وصيانة تيسلا في دبي | إي في إس الإمارات
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح متخصصة لتيسلا في دبي. فنيونا الخبراء يوفرون رعاية شاملة لجميع موديلات تيسلا لضمان الأداء الأمثل والعمر الطويل."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة تيسلا دبي، صيانة تيسلا الإمارات، إصلاح تيسلا دبي، خدمة تيسلا موديل 3، صيانة تيسلا موديل إس، إصلاح تيسلا موديل إكس، خدمة تيسلا موديل واي، فنيون متخصصون تيسلا دبي، خدمات إي في إس تيسلا"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/tesla" />

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
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/tesla" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/tesla" />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/tesla"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمة وصيانة تيسلا في دبي | إي في إس الإمارات"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح متخصصة لتيسلا في دبي. فنيونا الخبراء يوفرون رعاية شاملة لجميع موديلات تيسلا لضمان الأداء الأمثل والعمر الطويل."
  />
  <meta property="og:url" content="https://evsuae.com/ar/tesla" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="خدمة وصيانة تيسلا في دبي | إي في إس الإمارات"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس الإمارات خدمات صيانة وإصلاح متخصصة لتيسلا في دبي. فنيونا الخبراء يوفرون رعاية شاملة لجميع موديلات تيسلا لضمان الأداء الأمثل والعمر الطويل."
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
        name: "خدمة وصيانة سيارات تيسلا الكهربائية",
        description:
          "توفر إي في إس الإمارات خدمات فحص وتشخيص وصيانة وإصلاح متقدمة لجميع موديلات تيسلا في دبي. تشمل خدماتنا فحص البطارية، تحديثات البرمجيات، الصيانة الدورية، وإصلاح الأنظمة الكهربائية لضمان أفضل أداء لسيارتك.",
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
        url: "https://evsuae.com/ar/tesla",
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
  backgroundImage="https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1920"
  titlePrefix="مركز خدمة وصيانة وإصلاح"
  titleHighlight="تيسلا"
  titleSuffix=""
  description="في إي في إس، نقدم خدمة موثوقة متوافقة مع الضمان لسيارتك تيسلا. من الصيانة الدورية إلى التشخيص المعقد، يضمن فريقنا المتخصص حصول سيارتك الكهربائية على رعاية واهتمام متميزين مصممين حسب احتياجات قيادتك. في إي في إس، نقدم خدمات متخصصة لمركبات تيسلا الكهربائية في دبي والإمارات."
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
          موديلات تيسلا التي نخدمها
        </h2>
      </div>

      {/* تيسلا سايبرترك */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a
            href="/ar/tesla/cybertruck"
            aria-label="تعرف على المزيد عن تيسلا سايبرترك"
          >
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-Cybertruck.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة تيسلا سايبرترك"
            />
          </a>

          <div className="service-box-content">
            <a
              href="/ar/tesla/cybertruck"
              aria-label="تعرف على المزيد عن تيسلا سايبرترك"
            >
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                تيسلا سايبرترك
              </h3>
              <p className="fs-16 mt-2">
                خدمة احترافية لتيسلا سايبرترك، من الصيانة الدورية إلى الإصلاحات المتقدمة. رعاية كهربائية ميسورة التكلفة وعالية الجودة.
              </p>
            </a>

            <a
              href="/ar/tesla/cybertruck"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن تيسلا سايبرترك"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* تيسلا موديل إس */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/tesla/model-s" aria-label="تعرف على المزيد عن تيسلا موديل إس">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-s.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة تيسلا موديل إس"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/tesla/model-s" aria-label="تعرف على المزيد عن تيسلا موديل إس">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                تيسلا موديل إس
              </h3>
              <p className="fs-16 mt-2">
                خدمة احترافية لتيسلا موديل إس، من الصيانة الدورية إلى الإصلاحات المتقدمة. رعاية كهربائية ميسورة التكلفة وعالية الجودة.
              </p>
            </a>

            <a
              href="/ar/tesla/model-s"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن تيسلا موديل إس"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* تيسلا موديل 3 */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/tesla/model-3" aria-label="تعرف على المزيد عن تيسلا موديل 3">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-3.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة تيسلا موديل 3"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/tesla/model-3" aria-label="تعرف على المزيد عن تيسلا موديل 3">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                تيسلا موديل 3
              </h3>
              <p className="fs-16 mt-2">
                خدمة احترافية لتيسلا موديل 3، من الصيانة الدورية إلى الإصلاحات المتقدمة. رعاية كهربائية ميسورة التكلفة وعالية الجودة.
              </p>
            </a>

            <a
              href="/ar/tesla/model-3"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن تيسلا موديل 3"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* تيسلا موديل إكس */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/tesla/model-x" aria-label="تعرف على المزيد عن تيسلا موديل إكس">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-x.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة تيسلا موديل إكس"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/tesla/model-x" aria-label="تعرف على المزيد عن تيسلا موديل إكس">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                تيسلا موديل إكس
              </h3>
              <p className="fs-16 mt-2">
                خدمة احترافية لتيسلا موديل إكس، من الصيانة الدورية إلى الإصلاحات المتقدمة. رعاية كهربائية ميسورة التكلفة وعالية الجودة.
              </p>
            </a>

            <a
              href="/ar/tesla/model-x"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن تيسلا موديل إكس"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* تيسلا موديل واي */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/tesla/model-y" aria-label="تعرف على المزيد عن تيسلا موديل واي">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-model-y.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة تيسلا موديل واي"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/tesla/model-y" aria-label="تعرف على المزيد عن تيسلا موديل واي">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                تيسلا موديل واي
              </h3>
              <p className="fs-16 mt-2">
                خدمة احترافية لتيسلا موديل واي، من الصيانة الدورية إلى الإصلاحات المتقدمة. رعاية كهربائية ميسورة التكلفة وعالية الجودة.
              </p>
            </a>

            <a
              href="/ar/tesla/model-y"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن تيسلا موديل واي"
            >
              تعرف على المزيد
            </a>
          </div>
        </div>
      </div>

      {/* تيسلا رودستر */}
      <div className="col-lg-4 mb-4">
        <div className="service-box">
          <a href="/ar/tesla/roadster" aria-label="تعرف على المزيد عن تيسلا رودستر">
            <img
              src="https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70"
              srcSet="
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=320 320w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=500 500w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=768 768w,
                https://evsuae.com/.netlify/images?url=/img/brands/Tesla-roadster.jpg&q=70&w=1024 1024w
              "
              width="377"
              height="251"
              sizes="100vw"
              alt="صورة تيسلا رودستر"
            />
          </a>

          <div className="service-box-content">
            <a href="/ar/tesla/roadster" aria-label="تعرف على المزيد عن تيسلا رودستر">
              <h3 className="fs-26 fw-500 alt-font ls-1 text-uppercase text-white mb-0">
                تيسلا رودستر
              </h3>
              <p className="fs-16 mt-2">
                خدمة احترافية لتيسلا رودستر، من الصيانة الدورية إلى الإصلاحات المتقدمة. رعاية كهربائية ميسورة التكلفة وعالية الجودة.
              </p>
            </a>

            <a
              href="/ar/tesla/roadster"
              className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow fs-16 mt-2"
              aria-label="تعرف على المزيد عن تيسلا رودستر"
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
  imageSrc="https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70"
  imageSrcSet="
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=320 320w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=500 500w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=768 768w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1024 1024w,
    https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1220 1220w
  "
  imageAlt="صورة عن تيسلا"
  heading="عن تيسلا"
  description="تيسلا هي رائدة عالمية في التنقل الكهربائي، معروفة بدفع حدود التكنولوجيا، الأداء، والاستدامة. صُممت مركبات تيسلا للسائقين ذوي التفكير المتقدم والمهتمين بالبيئة، حيث تدمج قدرات القيادة الذاتية المتطورة، التصميمات الداخلية الفاخرة البسيطة، والأداء الكهربائي القوي. في الشرق الأوسط، وخاصة في الإمارات، أصبحت تيسلا رمزًا للابتكار الحديث، حيث تقدم تجارب ذكية ومتصلة تعيد تعريف القيادة اليومية. مع مهمة تسريع انتقال العالم إلى الطاقة المستدامة، تقدم تيسلا مركبات كهربائية متميزة تجمع بين التصميم الذكي والتكنولوجيا الرائدة في الصناعة."
/>




<CarServicesAr
  heading="خدمات إصلاح وصيانة تيسلا"
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
      question: "كيف يمكنني تسجيل سيارة تيسلا الخاصة بي لدعم الضمان في الإمارات؟",
      answer:
        "لتسجيل سيارة تيسلا الخاصة بك لتغطية الضمان في الإمارات، قم بزيارة إي في إس. نحن نتولى جميع الوثائق ونضمن تسجيل سيارتك تيسلا بشكل صحيح—حتى تكون محميًا من اليوم الأول بدون أي متاعب.",
    },
    {
      question: "ماذا يشمل ضمان تيسلا الممتد؟",
      answer:
        "يغطي ضمان تيسلا الممتد مكونات عالية القيمة مثل المحرك الكهربائي، حزمة البطارية، وحدة التحكم الإعلامية (MCU)، ونظام الدفع. توفر هذه الحماية راحة البال لفترة طويلة بعد انتهاء التغطية القياسية.",
    },
    {
      question: "أين يمكنني صيانة سيارة تيسلا الخاصة بي تحت الضمان في الإمارات؟",
      answer:
        "تقدم إي في إس خدمة ضمان متخصصة لتيسلا في دبي، أبوظبي، وعجمان. يستخدم فنيونا ذوو الخبرة في المركبات الكهربائية تشخيصات متقدمة وإجراءات خدمة تتماشى مع معايير تيسلا—مما يساعد في الحفاظ على سيارتك في حالة جيدة ومتوافقة مع الضمان.",
    },
    {
      question: "كيف تتعامل إي في إس مع مطالبات ضمان تيسلا؟",
      answer:
        "تبسط إي في إس عملية مطالبات ضمان تيسلا. سواء كانت تنبيهًا بالبطارية، أو عطلًا في المستشعر، أو مشكلة في نظام الترفيه—نحن ننسق مباشرة مع مقدمي الضمان لمعالجة المطالبات وتنفيذها بسرعة وصحة.",
    },
    {
      question: "هل يمكنني تمديد تغطية ضمان تيسلا من خلال إي في إس؟",
      answer:
        "نعم! تقدم إي في إس حلول ضمان تيسلا الممتدة المصممة حسب عادات قيادتك. ستحصل على تغطية أطول للمكونات الحرجة، وتكاليف إصلاح مفاجئة أقل، ودعم يحمي قيمة سيارتك الكهربائية.",
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