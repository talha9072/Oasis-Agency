import Head from "next/head";
import PageHeroWithMap from "@/components/ar/locations/PageHeroWithMap";
import ServiceMarqueeAr from "@/components/ar/locations/ServiceMarqueeAr";
import BranchesSection from "@/components/ar/common/Branches";
import StatsCounterSection from "@/components/ar/common/CounterStats";
import CustomerReviewsSection from "@/components/ar/common/Customer";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      
    <Head>
      {/* Title */}
      <title>إي في إس دبي | أفضل مركز خدمة المركبات الكهربائية في دبي</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="تعرف على إي في إس الإمارات، الرائد في خدمات المركبات الكهربائية في دبي. نقدم حلول صيانة وإصلاح احترافية للحفاظ على مركبتك الكهربائية بأفضل أداء."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="خدمة المركبات الكهربائية دبي, صيانة السيارات الكهربائية دبي, إصلاح السيارات الكهربائية دبي, مركز المركبات الكهربائية دبي, حلول برمجيات المركبات الكهربائية"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ar/evs-dubai" />

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

      {/* Hreflang (FIXED) */}
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/evs-dubai" />
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/evs-dubai" />
      <link rel="alternate" hrefLang="x-default" href="https://evsuae.com/evs-dubai" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="إي في إس دبي | أفضل مركز خدمة المركبات الكهربائية في دبي"
      />
      <meta
        property="og:description"
        content="إي في إس الإمارات تقدم خدمات متقدمة لصيانة وإصلاح المركبات الكهربائية في دبي بأعلى المعايير."
      />
      <meta property="og:url" content="https://evsuae.com/ar/evs-dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_AE" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="إي في إس دبي | أفضل مركز خدمة المركبات الكهربائية في دبي"
      />
      <meta
        name="twitter:description"
        content="مركز متخصص في صيانة وإصلاح المركبات الكهربائية في دبي مع حلول تقنية متقدمة."
      />
      <meta
        name="twitter:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Icons */}
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>


      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<PageHeroWithMap
  eyebrowTitle="مركز خدمات المركبات الكهربائية"
  mainTitle="إي في إس دبي"
  highlightDot={true}
  description="خدمات وإصلاح المركبات الكهربائية بالقرب من دبي"

  primaryButtonText="احصل على الاتجاهات"
  primaryButtonUrl="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb"

  secondaryButtonText="اتصل بنا"
  secondaryButtonUrl="tel:+9710566017771"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.14588427663!2d55.4240151!3d25.164551499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be92144ffef%3A0xccfadb5aedd3afcc!2sEVS%20Electric%20Vehicle%20Services.!5e0!3m2!1sen!2s!4v1745993230504!5m2!1sen!2s"
/>

<ServiceMarqueeAr />

<section className="position-relative pt-0" dir="rtl">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{ backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')" }}
  ></div>

  <div className="container position-relative">
    <div
      className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center"
      data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
    >
      {/* Address */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-pin-map icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <span className="d-block">
              <a
                href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb"
                className="text-white fw-600"
                aria-label="موقع فرع EVS دبي على الخريطة"
              >
                المدينة العالمية <span className="urbanist" dir="ltr">1</span> – تجمع الإمارات،
                المستودع رقم <span className="urbanist" dir="ltr">39</span>
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-telephone icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <p className="text-white fw-600">فرع إي في إس دبي</p>
            <span className="d-block">
              <a
                href="tel:+9710566017771"
                className="text-white fw-600 text-decoration-line-bottom urbanist"
                dir="ltr"
                aria-label="اتصل بفرع EVS دبي"
              >
                +971 056 601 7771
              </a>
            </span>
            <a
              href="tel:+9710566017771"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              اتصل بنا
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-envelope-at icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <p className="text-white fw-600">أرسل لنا بريدًا إلكترونيًا</p>
            <span className="d-block">
              <a
                href="mailto:info@evsuae.com"
                className="text-white fw-600 text-decoration-line-bottom"
                aria-label="راسل EVS دبي عبر البريد الإلكتروني"
              >
                info@evsuae.com
              </a>
            </span>
            <a
              href="mailto:info@evsuae.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              راسلنا
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* end section */}


<CustomerReviewsSection />

<StatsCounterSection />
 
 <BranchesSection />
        
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