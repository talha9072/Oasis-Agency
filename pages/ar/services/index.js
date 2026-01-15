import Head from "next/head";
import BranchesSection from "@/components/ar/common/BranchesSection";

export default function ArabicHome() {
  return (
    <>
     
     <Head>
  {/* Title */}
  <title>
    خدمات المركبات الكهربائية في دبي | صيانة وإصلاحات | إي في إس الإمارات
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="تقدم إي في إس الإمارات خدمات متميزة للمركبات الكهربائية في دبي، تشمل الصيانة، الإصلاحات، الحلول البرمجية، وتشخيص البطاريات بفريق معتمد."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمات المركبات الكهربائية, صيانة المركبات الكهربائية دبي, إصلاحات المركبات الكهربائية, تشخيص السيارات الكهربائية, تشخيص بطاريات المركبات الكهربائية, حلول برمجية للمركبات الكهربائية, مركز خدمات المركبات الكهربائية دبي, خدمات إي في إس الإمارات"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/services"
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
    content="خدمات المركبات الكهربائية الإمارات"
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
    href="https://evsuae.com/services"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/services"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/services"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="خدمات المركبات الكهربائية في دبي | صيانة وإصلاحات | إي في إس الإمارات"
  />
  <meta
    property="og:description"
    content="تقدم إي في إس الإمارات خدمات متميزة للمركبات الكهربائية في دبي، تشمل الصيانة، الإصلاحات، الحلول البرمجية، وتشخيص البطاريات بفريق معتمد."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/services"
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
    content="خدمات المركبات الكهربائية في دبي | صيانة وإصلاحات | إي في إس الإمارات"
  />
  <meta
    name="twitter:description"
    content="تقدم إي في إس الإمارات خدمات متميزة للمركبات الكهربائية في دبي، تشمل الصيانة، الإصلاحات، الحلول البرمجية، وتشخيص البطاريات بفريق معتمد."
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
        "@type": "CollectionPage",
        name: "خدمات المركبات الكهربائية من إي في إس الإمارات",
        description:
          "اكتشف مجموعة متكاملة من خدمات المركبات الكهربائية التي تقدمها إي في إس الإمارات، بما في ذلك الصيانة، التشخيص، إصلاح البطاريات، والحلول التقنية المتقدمة.",
        url: "https://evsuae.com/ar/services",
        mainEntity: [
          {
            "@type": "Service",
            name: "خدمات الصيانة الدورية",
            description:
              "صيانة شاملة وفق توصيات الشركة المصنعة تشمل الفحص العام وضبط الإطارات.",
          },
          {
            "@type": "Service",
            name: "الحلول البرمجية والتحديثات",
            description:
              "تشخيصات متقدمة وتحديثات برمجية مخصصة للمركبات الكهربائية.",
          },
          {
            "@type": "Service",
            name: "تحويل المركبات لمواصفات الخليج",
            description:
              "تعديلات مخصصة لتتوافق المركبات مع معايير وأنظمة دول الخليج.",
          },
          {
            "@type": "Service",
            name: "إصلاح بطاريات الجهد العالي",
            description:
              "إصلاح وتجديد بطاريات المركبات الكهربائية عالية الجهد باحترافية.",
          },
          {
            "@type": "Service",
            name: "تركيب وصيانة الشواحن السريعة",
            description:
              "خدمات تركيب وصيانة وإصلاح أنظمة الشحن السريع.",
          },
          {
            "@type": "Service",
            name: "تعديلات مخصصة للمركبات الكهربائية",
            description:
              "تحسين الأداء والكفاءة والمظهر حسب الطلب.",
          },
          {
            "@type": "Service",
            name: "إصلاح أنظمة الإدارة الحرارية",
            description:
              "صيانة أنظمة التبريد والتدفئة المهمة لصحة البطارية.",
          },
          {
            "@type": "Service",
            name: "إصلاح واستبدال المحركات الكهربائية",
            description:
              "إصلاحات دقيقة واستبدال احترافي للمحركات الكهربائية.",
          },
          {
            "@type": "Service",
            name: "إصلاح الإنفرترات والمحوّلات",
            description:
              "إصلاح وتحديث أنظمة الإنفرتر والمحوّلات لضمان كفاءة الطاقة.",
          },
          {
            "@type": "Service",
            name: "خدمات الفحص والتشخيص (OBD)",
            description:
              "تشخيص شامل لاكتشاف وحل مشاكل المركبات الكهربائية.",
          },
        ],
      }),
    }}
  />
</Head>

      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

 <section
  id="hero-section"
  className="snap-section"
  style={{
    backgroundImage: "url('img/hero-mob.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="container">
    <div className="content-box">
      <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mt-3">
        <span className="hero-tag bg-dark-gray alt-font d-inline me-10px border-radius-3px fs-12 text-white fw-500">
          إي في إس
        </span>
        <h1 className="d-inline alt-font me-10px border-radius-3px fs-12 fw-500 hero-tag-text">
          مركز خدمات المركبات الكهربائية المتخصص في الإمارات
        </h1>
      </div>

      <div className="title hero-h1 tp-caption alt-font text-white">
        <h2 className="d-block pb-2">حيث يلتقي الابتكار بالعناية</h2>
        <p className="text-white alt-font fw-500 fs-40 d-block mx-auto">
          خدمات المركبات الكهربائية مصممة لطرق الإمارات
        </p>
      </div>

      <a
        href="https://evsuae.com/ar/contact"
        className="btn-hero tp-caption rev-btn alt-font bg-base-color text-dark-gray d-inline-block text-uppercase border-radius-4px rs-hover-ready"
        id="slide-01-layer-06"
        style={{
          visibility: "inherit",
          transition: "none",
          textAlign: "center",
          lineHeight: "12px",
          borderWidth: "0px",
          margin: "0px 12px 8px 0px",
          padding: "19px 23px",
          letterSpacing: "0px",
          fontWeight: 600,
          fontSize: "15px",
          whiteSpace: "normal",
          minHeight: "0px",
          minWidth: "0px",
          maxHeight: "none",
          maxWidth: "none",
        }}
      >
        احجز فحص مركبتك الكهربائية
      </a>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        <div className="content-box pt-4">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            البرمجة والبرمجيات
          </h2>
          <p className="text-white alt-font fw-500 fs-26 mx-auto mt-1">
            حسّن أداء مركبتك الكهربائية بحلول برمجية متخصصة
          </p>
        </div>

        <div className="btn-box mt-auto pb-4 mx-auto">
          <a href="services/programming" className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2">
            عرض جميع خدمات البرمجة <span className="bg-white"></span>
          </a>
          <a href="https://evsuae.com/ar/contact" className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2">
            احجز فحص مركبتك الكهربائية <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/blog/EVS-69.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            الخدمات الميكانيكية
          </h2>
          <p className="text-white alt-font fw-500 fs-30 mx-auto mt-1">
            حافظ على سلاسة تشغيل مركبتك الكهربائية بصيانة ميكانيكية متميزة
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a href="services/mechanical" className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2">
            عرض جميع الخدمات الميكانيكية <span className="bg-white"></span>
          </a>
          <a href="https://evsuae.com/ar/contact" className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2">
            احجز فحص مركبتك الكهربائية <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/blog/EVS-73.jpg&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-stretch">
      <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
        <div className="content-box pt-4">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            البطارية والكهرباء
          </h2>
          <p className="text-white alt-font fw-500 fs-26 mx-auto mt-1">
            عزز طاقة مركبتك الكهربائية بحلول متقدمة للبطارية والكهرباء
          </p>
        </div>

        <div className="btn-box mt-auto pb-4 mx-auto">
          <a href="services/battery-electrical" className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2">
            عرض جميع الخدمات الكهربائية <span className="bg-white"></span>
          </a>
          <a href="https://evsuae.com/ar/contact" className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2">
            احجز فحص مركبتك الكهربائية <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/carev.png&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            الهيكل والدهان
          </h2>
          <p className="text-white alt-font fw-500 fs-30 mx-auto mt-1">
            استعد مظهر مركبتك الكهربائية بخدمات الهيكل والدهان المتخصصة
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a href="services/body-paint" className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2">
            عرض جميع خدمات الهيكل والدهان <span className="bg-white"></span>
          </a>
          <a href="https://evsuae.com/ar/contact" className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2">
            احجز فحص مركبتك الكهربائية <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="snap-section dark-overlay bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
  style={{
    backgroundImage:
      "url('https://evsuae.com/.netlify/images?url=/img/warranty.png&q=70&w=1920')",
  }}
>
  <div className="container position-relative">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
        <div className="content-box">
          <h2 className="fw-500 alt-font ls-minus-1px text-white w-90 mb-0 mx-auto">
            خدمات التأمين
          </h2>
          <p className="text-white alt-font fw-500 fs-30 mx-auto mt-1">
            دعم تأميني سلس لاحتياجات مركبتك الكهربائية
          </p>
        </div>

        <div className="btn-box mx-auto">
          <a href="services/insurance" className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2">
            عرض جميع خدمات التأمين <span className="bg-white"></span>
          </a>
          <a href="https://evsuae.com/ar/contact" className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2">
            احجز فحص مركبتك الكهربائية <span className="bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="snap-section dark-overlay">
  <div className="container position-relative">
    <div className="row">
      <h2 className="alt-font fw-500 ls-minus-1px text-white mb-5">
        جميع الخدمات<span className="text-base-color">.</span>
      </h2>

      {/* البرمجة والبرمجيات */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
              البرمجة والبرمجيات
            </a>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2"><a href="https://evsuae.com/ar/services/programming/custom-region-coding">تخصيص ترميز المنطقة</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/programming/key-sim-programming">برمجة المفتاح وبطاقة SIM</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/programming/firmware-software-updates">تحديثات البرمجيات والبرامج الثابتة</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/programming/module-programming">برمجة الوحدات</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/programming/system-calibration-diagnostics">معايرة النظام والتشخيص</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/programming/app-integration-android">تكامل التطبيقات - أندرويد</a></div>
              <div><a href="https://evsuae.com/ar/services/programming/bms-calibration">معايرة نظام إدارة البطارية</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* الخدمات الميكانيكية */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
              الخدمات الميكانيكية
            </a>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2"><a href="https://evsuae.com/ar/services/mechanical/brake-suspension-repairs">إصلاح الفرامل والتعليق</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/mechanical/ac-hvac-service">خدمة التكييف ونظام التدفئة والتهوية</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/mechanical/transmission-drive-unit-repairs">إصلاح ناقل الحركة ووحدة القيادة</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/mechanical/full-checkups-diagnostics">فحوصات شاملة وتشخيص</a></div>
              <div><a href="https://evsuae.com/ar/services/mechanical/tire-alignment-axle-work">محاذاة الإطارات وأعمال المحاور</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* الهيكل والدهان */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
              الهيكل والدهان
            </a>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2"><a href="https://evsuae.com/ar/services/body-paint/collision-repair-panel-replacement">إصلاح التصادم واستبدال الألواح</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/body-paint/structural-body-alignment">محاذاة الهيكل الهيكلي</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/body-paint/scratch-dent-repair">إصلاح الخدوش والانبعاجات</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/body-paint/full-body-painting-refinishing">دهان وتجديد الهيكل بالكامل</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/body-paint/sensor-camera-realignment">إعادة محاذاة المستشعرات والكاميرات</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/body-paint/detailing-interior-exterior">التلميع (الداخلي والخارجي)</a></div>
              <div><a href="https://evsuae.com/ar/services/body-paint/windshield-mirror-replacement">استبدال الزجاج الأمامي والمرايا</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* البطارية والكهرباء */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
              البطارية والكهرباء
            </a>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/high-voltage-battery-repairs">إصلاح البطاريات عالية الجهد</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/low-voltage-diagnostics">تشخيص الجهد المنخفض</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/battery-health-thermal-management">صحة البطارية وإدارة الحرارة</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/pdu-repair">إصلاح وحدة توزيع الطاقة</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/charging-port-repairs">إصلاح منافذ الشحن</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/charging-port-conversions">تحويل منافذ الشحن</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/charging-port-upgrades">ترقية منافذ الشحن</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/sensor-ecu-replacements">استبدال المستشعرات ووحدات التحكم الإلكترونية</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/battery-electrical/infotainment-camera-systems">أنظمة المعلومات الترفيهية والكاميرات</a></div>
              <div><a href="https://evsuae.com/ar/services/battery-electrical/wiring-fuse-harness-repair">إصلاح الأسلاك والصمامات</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* خدمات التأمين */}
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="card bg-black">
          <div className="card-header border-white p-3">
            <a href="#" className="text-white ls-05px d-block fs-24 alt-font">
              خدمات التأمين
            </a>
          </div>
          <div className="card-body">
            <div className="fs-16 lh-26 fw-500 last-paragraph-no-margin">
              <div className="mb-2"><a href="https://evsuae.com/ar/services/insurance/damage-estimation">تقدير الأضرار</a></div>
              <div className="mb-2"><a href="https://evsuae.com/ar/services/insurance/accident-damage-insurance-claim-processing">معالجة مطالبات التأمين لأضرار الحوادث</a></div>
              <div><a href="https://evsuae.com/ar/services/insurance/direct-billing">الفوترة المباشرة</a></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


            
<BranchesSection />

      </div>
    </>
  );
}
