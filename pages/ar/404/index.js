import Head from "next/head";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      
<Head>
  {/* Title */}
  <title>404 | مركز خدمة المركبات الكهربائية الإمارات</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="إي في إس أول وأفضل مركز خدمة سيارات كهربائية في الإمارات. نقدم حلول برمجيات وأجهزة لجميع أنواع المركبات الكهربائية. اتصل بنا لمزيد من التفاصيل."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="خدمة المركبات الكهربائية, خدمة سيارات كهربائية, إصلاح سيارات كهربائية, كراج سيارات كهربائية دبي, صيانة المركبات الكهربائية, حلول برمجيات المركبات الكهربائية"
  />

  {/* Robots – 404 should not be indexed */}
  <meta name="robots" content="noindex, nofollow" />

  {/* Canonical */}
  <link rel="canonical" href="https://evsuae.com/ar/404" />

  {/* Author / Publisher */}
  <meta name="author" content="الإدارة" />
  <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

  {/* Viewport */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  {/* Language & hreflang */}
  <meta httpEquiv="Content-Language" content="ar" />
  <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/404" />
  <link rel="alternate" hrefLang="en" href="https://evsuae.com/404" />
  <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/404" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="مركز خدمة المركبات الكهربائية الإمارات"
  />
  <meta
    property="og:description"
    content="إي في إس أول وأفضل مركز خدمة سيارات كهربائية في الإمارات. نقدم حلول برمجيات وأجهزة لجميع أنواع المركبات الكهربائية. اتصل بنا لمزيد من التفاصيل."
  />
  <meta property="og:url" content="https://evsuae.com/ar/404" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="مركز خدمة المركبات الكهربائية الإمارات"
  />
  <meta
    name="twitter:description"
    content="إي في إس أول وأفضل مركز خدمة سيارات كهربائية في الإمارات. نقدم حلول برمجيات وأجهزة لجميع أنواع المركبات الكهربائية. اتصل بنا لمزيد من التفاصيل."
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

<section
  className="cover-background full-screen ipad-top-space-margin md-h-550px"
  style={{
    backgroundImage: "url(/images/404-bg.jpg)",
  }}
>
  <div className="container h-100">
    <div className="row align-items-center justify-content-center h-100">
      <div
        className="col-12 col-xl-6 col-lg-7 col-md-9 text-center"
        data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <h1 className="fs-200 text-base-color sm-fs-170 fw-500 ls-minus-8px">
          404
        </h1>

        <h4 className="text-light-gray fw-600 sm-fs-22 mb-10px ls-minus-1px">
          الصفحة غير موجودة!
        </h4>

        <p className="text-light-gray mb-30px lh-28 sm-mb-30px w-55 md-w-80 sm-w-95 mx-auto">
          المورد الذي تبحث عنه غير موجود أو ربما تم إزالته.
        </p>

        <a
          href="https://evsuae.com/ar/"
          className="btn btn-large right-icon btn-rounded btn-dark-gray btn-box-shadow text-transform-none alt-font"
        >
          العودة إلى الصفحة الرئيسية<i className="fa-solid fa-arrow-right"></i>
        </a>
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
      extraScripts: ["/js/blog.js"],
    },
    
  };
}