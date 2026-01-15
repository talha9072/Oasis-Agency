import Head from "next/head";
import PageHeroWithMap from "@/components/ar/locations/PageHeroWithMap";
import ServiceMarqueeAr from "@/components/ar/locations/ServiceMarqueeExpressAr";
import BranchesSection from "@/components/ar/common/Branches";
import StatsCounterSection from "@/components/ar/common/CounterStats";
import CustomerReviewsSection from "@/components/ar/common/Customer";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
      
    <Head>
  {/* Title */}
  <title>
    إي في إس أبوظبي المشرف | خدمة وصيانة المركبات الكهربائية – إي في إس الإمارات
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="توفر إي في إس الإمارات خدمات احترافية لصيانة وإصلاح المركبات الكهربائية في المشرف، أبوظبي. خبراء معتمدون للتشخيص والصيانة والإصلاح لجميع العلامات التجارية."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="خدمة المركبات الكهربائية المشرف, صيانة المركبات الكهربائية أبوظبي, إصلاح المركبات الكهربائية المشرف, خدمة تسلا أبوظبي, تشخيص المركبات الكهربائية, مركز خدمة المركبات الكهربائية المشرف"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://evsuae.com/ar/evs-abu-dhabi-al-mushrif"
  />

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
    href="https://evsuae.com/evs-abu-dhabi-al-mushrif"
  />
  <link
    rel="alternate"
    hrefLang="ar"
    href="https://evsuae.com/ar/evs-abu-dhabi-al-mushrif"
  />
  <link
    rel="alternate"
    hrefLang="x-default"
    href="https://evsuae.com/evs-abu-dhabi-al-mushrif"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="إي في إس أبوظبي المشرف | خدمة وصيانة المركبات الكهربائية"
  />
  <meta
    property="og:description"
    content="خدمات متقدمة لصيانة وإصلاح المركبات الكهربائية في المشرف، أبوظبي على يد خبراء معتمدين."
  />
  <meta
    property="og:url"
    content="https://evsuae.com/ar/evs-abu-dhabi-al-mushrif"
  />
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
    content="إي في إس أبوظبي المشرف | خدمة المركبات الكهربائية"
  />
  <meta
    name="twitter:description"
    content="صيانة وإصلاح احترافية للمركبات الكهربائية في المشرف، أبوظبي."
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

  {/* RTL hint */}
  <meta name="direction" content="rtl" />
</Head>


      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<PageHeroWithMap
 eyebrowTitle="مركز خدمات المركبات الكهربائية"
  mainTitle="إي في إس أبوظبي المشرف"
  highlightDot={true}
  description="خدمة وإصلاح احترافي للمركبات الكهربائية في المشرف، أبوظبي على يد خبراء معتمدين."

  primaryButtonText="احصل على الاتجاهات"
  primaryButtonUrl="https://maps.app.goo.gl/Dvgpi4cmE7TEbsKK9"

  secondaryButtonText="اتصل بنا"
  secondaryButtonUrl="tel:+971547133313"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.4058815285916!2d54.401735699999996!3d24.436699599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e69d974203daf%3A0x531e249b32dd243!2sEVS%20Express%20Al%20Mushrif%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1768372741258!5m2!1sen!2s"
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
                href="https://maps.app.goo.gl/Dvgpi4cmE7TEbsKK9"
                className="text-white fw-600"
              >
                منطقة المشرف، أبوظبي، الإمارات العربية المتحدة
              </a>
            </span>

            <a
              href="https://maps.app.goo.gl/Dvgpi4cmE7TEbsKK9"
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
            <p className="text-white fw-600">
              إي في إس أبوظبي – المشرف
            </p>

            <span className="d-block">
              <a
                href="tel:+971547133313"
                className="text-white fw-600 text-decoration-line-bottom urbanist"
                dir="ltr"
              >
                +971 54 713 3313
              </a>
            </span>

            <a
              href="tel:+971547133313"
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
            <p className="text-white fw-600">
              تواصل معنا عبر البريد الإلكتروني
            </p>

            <span className="d-block">
              <a
                href="mailto:info@evsuae.com"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                info@evsuae.com
              </a>
            </span>

            <a
              href="mailto:info@evsuae.com"
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