import Head from "next/head";
import BranchesSection from "@/components/ar/common/BranchesSection";
import CustomerReviewsSection from "@/components/ar/common/CustomerReviewsSection";

export default function ArabicHome() {
  return (
    <>
     <Head>
      {/* Title */}
      <title>
        ماركات المركبات الكهربائية التي نخدمها | العناية الشاملة – إي في إس الإمارات
      </title>

      {/* Meta Description */}
      <meta
        name="description"
        content="إي في إس الإمارات تقدم خدمة متخصصة لجميع ماركات المركبات الكهربائية الرئيسية، بما في ذلك تسلا، نيسان، بي إم دبليو، شيفروليه، وغيرها. فنيون معتمدون للتشخيص والصيانة والإصلاحات."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="ماركات المركبات الكهربائية الإمارات, ماركات السيارات الكهربائية التي نخدمها, خدمة تسلا الإمارات, صيانة نيسان ليف, إصلاح بي إم دبليو آي3, خدمة شيفروليه بولت, تغطية ماركات إي في إس, متخصصو المركبات الكهربائية الإمارات"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ar/ev-car-brands" />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Author & Publisher */}
      <meta name="author" content="الإدارة" />
      <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

      {/* Language */}
      <meta httpEquiv="Content-Language" content="ar" />

      {/* Hreflang */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://evsuae.com/ev-car-brands"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://evsuae.com/ar/ev-car-brands"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://evsuae.com/ev-car-brands"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="ماركات المركبات الكهربائية التي نخدمها | العناية الشاملة – إي في إس الإمارات"
      />
      <meta
        property="og:description"
        content="إي في إس الإمارات تقدم خدمة متخصصة لجميع ماركات المركبات الكهربائية الرئيسية، بما في ذلك تسلا، نيسان، بي إم دبليو، شيفروليه، وغيرها."
      />
      <meta property="og:url" content="https://evsuae.com/ar/ev-car-brands" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ماركات المركبات الكهربائية التي نخدمها | العناية الشاملة – إي في إس الإمارات"
      />
      <meta
        name="twitter:description"
        content="خدمة احترافية لجميع ماركات المركبات الكهربائية في الإمارات مع فنيين معتمدين."
      />
      <meta
        name="twitter:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Performance */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Head>

      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<section
  id="full-hero"
  className="snap-section overflow-hidden tesla-section d-flex align-items-center dark-overlay"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/ev/EV-Car-Brands.jpg&q=70&w=1920')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
  <div className="container z-index-1">
    <div className="row">
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <div className="title alt-font text-white mt-3">
          <h1 className="d-block pb-2 text-end">
            ماركات <span>السيارات الكهربائية</span> التي نخدمها
          </h1>
        </div>

        <div className="desc d-inline-block hero-desc">
          اكتشف مجموعة واسعة من ماركات المركبات الكهربائية التي نتعامل معها
          باحترافية في إي في إس في دبي، الإمارات. من تسلا إلى نيسان، بي إم دبليو
          إلى أودي، يقدم فنيونا المهرة رعاية متميزة لجميع ماركات المركبات
          الكهربائية الرئيسية، مضمونين بقاء مركبتك في حالة مثالية بحلول مخصصة
          لكل ماركة وطراز.
        </div>

        <a
          href="https://evsuae.com/ar/contact"
          className="btn-hero rev-btn alt-font bg-base-color text-dark-gray text-uppercase border-radius-4px rs-hover-ready hero-cta-button mt-4 w-auto d-inline-block"
          aria-label="احجز الخدمة"
        >
          احجز الخدمة
        </a>
      </div>
    </div>
  </div>
</section>


{/* ROX */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/ev/rox-car-1.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        <div className="content-box pt-4">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            روكس
          </h2>
          <p className="text-white alt-font fw-500 fs-26 text-center d-block mx-auto mt-1">
            أفضل مركز خدمة سيارات روكس
          </p>
        </div>

        <div className="btn-box mt-auto pb-4 mx-auto">
          <a
            href="/ar/rox"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            طرازات روكس<span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/ar/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            تحدث إلى مستشار<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ZEEKR */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/brands/Zeekr-X.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            زيكر
          </h2>
          <p className="text-white alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
            شريكك الموثوق لخدمة سيارات زيكر
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="/ar/zeekr"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            طرازات زيكر<span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/ar/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            تحدث إلى مستشار<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* AVATR */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/New-Project-36.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        <div className="content-box pt-4">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            أفاتر
          </h2>
          <p className="text-white alt-font fw-500 fs-26 text-center d-block mx-auto mt-1">
            مركز خدمة سيارات أفاتر الاحترافي
          </p>
        </div>

        <div className="btn-box mt-auto pb-4 mx-auto">
          <a
            href="/ar/avatr"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            طرازات أفاتر<span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/ar/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            تحدث إلى مستشار<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* BYD */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/New-Project-39.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            بي واي دي
          </h2>
          <p className="text-white alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
            مركز خدمة سيارات بي واي دي الرائد
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a
            href="/ar/byd"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            طرازات بي واي دي<span className="bg-white"></span>
          </a>
          <a
            href="https://evsuae.com/ar/contact"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            تحدث إلى مستشار<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TESLA */}
<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/brands/tesla-hero.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 text-center mx-auto">
            تسلا
          </h2>
          <p className="text-white alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
            مركز خدمة المركبات الكهربائية تسلا الاحترافي
          </p>
        </div>

        <div className="btn-box align-self-end mx-auto">
          <a
            href="/ar/tesla"
            className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
          >
            خدمة تسلا<span className="bg-white"></span>
          </a>
          <a
            href="/ar/services"
            className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
          >
            جميع الخدمات<span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="snap-section position-relative pb-0">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-xl-6 offset-xl-1 order-2 order-lg-1 align-self-end position-relative">
        {/* Optimized image */}
        <img
          className="w-100"
          src="https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024"
          srcSet="
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=320 320w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=640 640w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1024 1024w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1440 1440w,
            https://evsuae.com/.netlify/images?url=/img/evs/IMG_2078-edit-2.png&w=1920 1920w
          "
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
          alt="EV Maintenance and Repairs"
        />

        {/* Icon overlay */}
        <i
          className="bi bi-shield-fill-plus text-base-color fs-100 position-absolute left-minus-20px top-100px lg-top-60px md-left-100px sm-left-20px xs-left-0px"
          data-bottom-top="transform: translateY(-50px)"
          data-top-bottom="transform: translateY(50px)"
        ></i>
      </div>

      <div className="col-lg-6 col-xxl-4 col-xl-5 order-1 order-lg-2 md-mb-50px sm-mb-30px">
        <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-30px">
          حلك الشامل للمركبات الكهربائية
        </span>

        <h2 className="h1 alt-font fw-500 ls-minus-1px text-white mb-15px">
          من الصيانة الدورية إلى الإصلاحات المعقدة
          <span className="text-base-color">.</span>
        </h2>

        <p className="mb-30px">
          في إي في إس، نقدم خدمات المركبات الكهربائية التي تشمل الصيانة الدورية
          والإصلاحات المتخصصة. نحن المركز الإقليمي الوحيد لإصلاح البطاريات عالية
          الجهد، ونقدم خدمات تصليح حوادث المركبات باحترافية. تشمل حلول البرمجة
          لدينا تحديثات البرامج وتعديلات نظام تحديد المواقع، خاصة للمركبات
          المستوردة، لضمان بقاء مركبتك الكهربائية في أفضل حالة.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="snap-section">
  <div className="container">
    <div className="row mb-5 sm-mb-50px">
      <div className="col-12 col-xl-9 col-lg-12">
        <h2 className="text-white alt-font fw-500 ls-minus-1px mb-0">
          نمزج بين المعرفة المتخصصة والمرافق الحديثة لتقديم نتائج عالية الجودة
          باستمرار.
        </h2>
      </div>
    </div>

    <div className="row sm-mb-30px">
      <div className="col-12">

        {/* 01 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">01</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-wrench-adjustable text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              خدمات الصيانة الدورية
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              باقات شاملة تشمل الخدمات الرئيسية والثانوية، الصيانة الموصى بها من
              الشركة المصنعة، ومحاذاة الإطارات بدقة لضمان الأداء الأمثل والسلامة
              وطول عمر مركبتك الكهربائية.
            </p>
          </div>
        </div>

        {/* 02 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">02</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px flex-wrap">
            <i className="bi bi-cpu-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30 me-15px">
              حلول وتحديثات البرمجيات
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              تشخيصات متقدمة، برمجة، وتحديثات برمجية مصممة لتحسين أداء المركبات
              الكهربائية.
            </p>
          </div>
        </div>

        {/* 03 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">03</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-pin-map-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              التحويل إلى مواصفات دول مجلس التعاون الخليجي
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              تعديلات مخصصة لضمان توافق المركبات الكهربائية مع المعايير واللوائح
              الإقليمية لدول مجلس التعاون الخليجي.
            </p>
          </div>
        </div>

        {/* 04 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">04</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-battery-full text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              إصلاحات البطاريات عالية الجهد
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              خدمات إصلاح وتجديد متخصصة لتمديد عمر وكفاءة بطاريات المركبات
              الكهربائية عالية الجهد.
            </p>
          </div>
        </div>

        {/* 05 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">05</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-ev-station-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              تركيب وإصلاح أجهزة الشحن السريع
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              تركيب، صيانة، وإصلاح أنظمة الشحن السريع لتحقيق أداء شحن مثالي
              للمركبات الكهربائية.
            </p>
          </div>
        </div>

        {/* 06 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">06</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-ev-front-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              تعديلات مخصصة للمركبات الكهربائية
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              تعديلات وتحسينات مخصصة مصممة لتعزيز أداء المركبة وكفاءتها
              وجمالياتها.
            </p>
          </div>
        </div>

        {/* 07 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">07</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-thermometer-high text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              إصلاحات نظام الإدارة الحرارية
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              خدمة متخصصة لأنظمة التبريد والتدفئة الحيوية للحفاظ على صحة البطارية
              في المناخات القاسية.
            </p>
          </div>
        </div>

        {/* 08 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">08</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-gear-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              إصلاحات واستبدال المحركات
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              خدمات إصلاح واستبدال دقيقة للمحركات الكهربائية للحفاظ على الأداء
              الأمثل.
            </p>
          </div>
        </div>

        {/* 09 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">09</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-node-plus-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              إصلاحات العاكسات والمحولات
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              إصلاحات وتحسينات للعاكسات والمحولات لضمان إدارة فعالة للطاقة في
              المركبات الكهربائية.
            </p>
          </div>
        </div>

        {/* 10 */}
        <div className="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-transparent-white-light position-relative">
          <div className="col-md-auto text-end text-md-center sm-mb-20px">
            <span className="fs-18 alt-font text-white urbanist">10</span>
          </div>
          <div className="col-md-5 d-flex align-items-center sm-mb-20px">
            <i className="bi bi-motherboard-fill text-base-color icon-large custom-margin"></i>
            <span className="text-white alt-font fw-500 fs-30">
              خدمات التشخيص على متن السيارة
            </span>
          </div>
          <div className="col-md-5 last-paragraph-no-margin">
            <p>
              تشخيصات شاملة باستخدام أدوات متقدمة لتحديد المشكلات وحلها بدقة.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



<CustomerReviewsSection />      


<section className="snap-section half-section pb-0 pt-0 md-pb-8">
  <div className="container-fluid">
    <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">

      {/* First EV Center */}
      <div className="col text-center sm-mb-35px">
        <span className="alt-font fs-h1 d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0">
          الأول
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </span>
        <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
          أول مركز للمركبات الكهربائية في الإمارات
        </span>
      </div>

      {/* Branches */}
      <div className="col text-center sm-mb-35px">
        <span className="alt-font fs-h1 d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
          7
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </span>
        <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
          فروع
        </span>
      </div>

      {/* Experienced Staff */}
      <div className="col text-center xs-mb-35px">
        <span className="alt-font fs-h1 d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
          +200
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </span>
        <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
          موظفين ذوي خبرة
        </span>
      </div>

      {/* Happy Customers */}
      <div className="col text-center">
        <span className="alt-font fs-h1 d-inline-flex text-white fw-500 mb-0 ls-minus-2px md-ls-0px position-relative urbanist">
          21,452
          <span className="text-highlight position-absolute bottom-10px w-100">
            <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
          </span>
        </span>
        <span className="d-block fs-15 lh-20 fw-500 text-uppercase text-white">
          عملاء راضين
        </span>
      </div>

    </div>
  </div>
</section>



<BranchesSection />

<div className="container-fluid">
  <div className="row position-relative">
    <div
      className="col swiper swiper-width-auto text-center"
      data-slider-options='{
        "slidesPerView": "auto",
        "spaceBetween": 80,
        "centeredSlides": true,
        "speed": 20000,
        "loop": true,
        "pagination": {
          "el": ".slider-four-slide-pagination-2",
          "clickable": false
        },
        "allowTouchMove": false,
        "autoplay": {
          "delay": 1,
          "disableOnInteraction": false
        },
        "navigation": {
          "nextEl": ".slider-four-slide-next-2",
          "prevEl": ".slider-four-slide-prev-2"
        },
        "keyboard": {
          "enabled": true,
          "onlyInViewport": true
        },
        "effect": "slide"
      }'
    >
      <div className="swiper-wrapper marquee-slide">

        {/* slide 1 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-500 ls-minus-2px text-outline text-outline-color-medium-gray">
            نقود التحول العالمي نحو التنقل الكهربائي المستدام
          </div>
        </div>

        {/* slide 2 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-500 ls-minus-2px text-outline text-outline-color-medium-gray">
            احتضن الثورة الكهربائية.
          </div>
        </div>

        {/* slide 3 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-500 ls-minus-2px text-outline text-outline-color-medium-gray">
            حلول شاملة للمركبات الكهربائية.
          </div>
        </div>

        {/* slide 4 */}
        <div className="swiper-slide">
          <div className="fs-150 lh-160 fw-500 ls-minus-2px text-outline text-outline-color-medium-gray">
            الابتكار يلتقي بالاستدامة.
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


      </div>
    </>
  );
}
