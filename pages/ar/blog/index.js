import Head from "next/head";
import BlogGrid12 from "@/components/ar/common/BlogGrid12";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      

<Head>
  <title>
    مدونة إي في إس | نصائح وأخبار المركبات الكهربائية
  </title>

  <meta
    name="description"
    content="تابع أحدث صيحات المركبات الكهربائية، نصائح الصيانة، أدلة الإصلاح، وأخبار من إي في إس الإمارات. مصدرك الأساسي لمعلومات امتلاك السيارات الكهربائية في الإمارات."
  />

  <meta
    name="keywords"
    content="مدونة المركبات الكهربائية الإمارات, نصائح المركبات الكهربائية, أدلة صيانة السيارات الكهربائية, نصائح إصلاح المركبات الكهربائية, أخبار تسلا الإمارات, امتلاك سيارة كهربائية الإمارات, مدونة التنقل الأخضر, مدونة إي في إس الإمارات"
  />

  <link
    rel="canonical"
    href="https://evsuae.com/ar/blog"
  />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  <meta name="author" content="الإدارة" />
  <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta httpEquiv="Content-Language" content="ar" />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/blog"
  />
  <link
    rel="alternate"
    hrefLang="en"
    href="https://evsuae.com/blog"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/blog"
  />

  <meta
    property="og:title"
    content="مدونة إي في إس | نصائح وأخبار المركبات الكهربائية"
  />
  <meta
    property="og:description"
    content="تابع أحدث صيحات المركبات الكهربائية، نصائح الصيانة، أدلة الإصلاح، وأخبار من إي في إس الإمارات. مصدرك الأساسي لمعلومات امتلاك السيارات الكهربائية في الإمارات."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/blog"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="مدونة إي في إس | نصائح وأخبار المركبات الكهربائية"
  />
  <meta
    name="twitter:description"
    content="تابع أحدث صيحات المركبات الكهربائية، نصائح الصيانة، أدلة الإصلاح، وأخبار من إي في إس الإمارات. مصدرك الأساسي لمعلومات امتلاك السيارات الكهربائية في الإمارات."
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

 {/* end header */}
  {/* start page title (Arabic RTL) */}

{/* start page title */}
<section className="pb-0 ipad-top-space-margin">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-xl-6 col-lg-8 text-center-sm text-end-md position-relative page-title-double-large pt-5">
        <div className="d-flex flex-column justify-content-center extra-very-small-screen">
          <h1 className="text-white alt-font-lh ls-0px fw-500 text-center">
            مرحبًا بكم في مدونتنا – مركز خدمات المركبات الكهربائية
          </h1>
          <h2 className="text-white d-block fw-400 ls-0px w-80 xs-w-100 mx-auto text-center">
            احصل على نصائح من الخبراء حول صيانة المركبات الكهربائية، إصلاح البطاريات، تحديثات البرمجيات، وأكثر للحفاظ على سيارتك الكهربائية تعمل بسلاسة!
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
{/* end page title */}

{/* start section */}
<section className="pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center align-items-center"
        ></div>

        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>
      </div>

      <div className="col-12 mt-5 d-flex justify-content-center">
        <div
          id="pagination"
          className="pagination-controls pagination pagination-style-01 fs-13 fw-500 mb-0"
        ></div>
      </div>
    </div>
  </div>
</section>
{/* end section */}

<BlogGrid12 />

{/* ================= Arabic Blogs Section ================= */}
<section className="py-5" dir="rtl">
  <div className="container">
    {/* Heading */}
    <div className="text-center mb-4">
      <h2 className="fw-bold">روابط المدونة (العربية)</h2>
      <p className="text-muted small text-white">
        الوصول السريع إلى مقالات ونصائح صيانة السيارات الكهربائية باللغة العربية
      </p>
    </div>

    {/* Blog Grid */}
    <div className="row g-2">

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/tesla-car-dubai-models-prices-buying-options" className="d-block p-2 border rounded text-center small">تسلا دبي</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-pre-purchase-inspection-what-it-reveals" className="d-block p-2 border rounded text-center small">فحص قبل الشراء</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/how-dashboard-malfunctions-in-electric-cars-can-signal-bigger-problems" className="d-block p-2 border rounded text-center small">أعطال لوحة القيادة</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/winter-vs-summer-seasonal-ev-maintenance-tips-for-dubai-drivers" className="d-block p-2 border rounded text-center small">الصيانة الموسمية</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-charging-station-installation-uae" className="d-block p-2 border rounded text-center small">تركيب شواحن</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/future-of-solar-powered-ev-charging-uae" className="d-block p-2 border rounded text-center small">الشحن بالطاقة الشمسية</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/electric-vehicle-battery-maintenance" className="d-block p-2 border rounded text-center small">صيانة البطارية</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/commercial-ev-charging-station-dubai" className="d-block p-2 border rounded text-center small">شواحن تجارية</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/the-ev-engine-refurbishment-process" className="d-block p-2 border rounded text-center small">تجديد المحرك</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-obd-error-codes-guide" className="d-block p-2 border rounded text-center small">أكواد OBD</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/electric-vehicle-maintenance-vs-gas" className="d-block p-2 border rounded text-center small">الكهرباء مقابل البنزين</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/charging-stations-in-dubai-is-the-city-ready-for-your-ev" className="d-block p-2 border rounded text-center small">محطات شحن دبي</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/must-do-ev-checks-before-hitting-the-road-for-a-long-trip" className="d-block p-2 border rounded text-center small">فحوصات قبل السفر</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/why-is-your-ev-battery-draining-faster" className="d-block p-2 border rounded text-center small">نفاد البطارية بسرعة</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/common-high-voltage-system-failures-in-luxury-electric-cars" className="d-block p-2 border rounded text-center small">أعطال الجهد العالي</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-dashboard-repair-solutions-to-the-rescue" className="d-block p-2 border rounded text-center small">إصلاح لوحة القيادة</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/why-electric-cars-are-revolutionizing-the-future-of-transportation-over-traditional-fuel-cars" className="d-block p-2 border rounded text-center small">السيارات الكهربائية مقابل الوقود</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/home-vs-commercial-ev-charging" className="d-block p-2 border rounded text-center small">الشحن المنزلي مقابل التجاري</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/what-happens-when-an-ev-is-parked-for-months-without-being-driven" className="d-block p-2 border rounded text-center small">ركن السيارة لفترة طويلة</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/5-must-have-ev-service-upgrades-for-dubai-drivers" className="d-block p-2 border rounded text-center small">ترقيات أساسية</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/what-to-do-if-your-ev-suddenly-loses-power-while-driving-and-how-to-prevent-it" className="d-block p-2 border rounded text-center small">فقدان الطاقة المفاجئ</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/top-electric-vehicle-service-near-me" className="d-block p-2 border rounded text-center small">أفضل مركز خدمة قريب</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-software-updates-importance" className="d-block p-2 border rounded text-center small">أهمية تحديثات البرامج</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/convert-ev-to-gcc-specs" className="d-block p-2 border rounded text-center small">تحويل السيارة إلى مواصفات GCC</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/best-tech-upgrades-for-your-avatr-12-in-2025" className="d-block p-2 border rounded text-center small">ترقيات أفاتر 12</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/the-most-common-battery-issues-in-tesla-vehicles" className="d-block p-2 border rounded text-center small">مشاكل بطارية تسلا</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/heres-how-to-protect-your-ev" className="d-block p-2 border rounded text-center small">حماية سيارتك الكهربائية</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-motor-repairs-vs-replacement" className="d-block p-2 border rounded text-center small">إصلاح المحرك مقابل الاستبدال</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-software-upgrade-frequency" className="d-block p-2 border rounded text-center small">تكرار تحديث البرمجيات</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-charger-maintenance-services" className="d-block p-2 border rounded text-center small">صيانة شواحن السيارات</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/how-to-check-tesla-battery-capacity-guide" className="d-block p-2 border rounded text-center small">فحص سعة بطارية تسلا</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/common-red-flags-to-look-for-when-buying-a-pre-owned-ev-in-dubai" className="d-block p-2 border rounded text-center small">علامات تحذير عند الشراء</a>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <a href="https://evsuae.com/ar/blog/ev-hybrid-vs-fully-electric" className="d-block p-2 border rounded text-center small">الهجينة مقابل الكهربائية</a>
      </div>

    </div>
  </div>
</section>


 

        
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