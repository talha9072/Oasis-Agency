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
      <title>
        إي في إس عجمان | رعاية معتمدة للمركبات الكهربائية – إي في إس الإمارات
      </title>

      {/* Meta Description */}
      <meta
        name="description"
        content="تقدم إي في إس الإمارات خدمات احترافية للمركبات الكهربائية في عجمان. استمتع بالتشخيص والصيانة والإصلاح لجميع موديلات المركبات الكهربائية بأيدي فنيين معتمدين."
      />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content="خدمة المركبات الكهربائية عجمان, صيانة المركبات الكهربائية عجمان, إصلاح المركبات الكهربائية الإمارات, خدمة تسلا عجمان, تشخيص المركبات الكهربائية عجمان, فنيو المركبات الكهربائية المعتمدون الإمارات, خدمات إي في إس عجمان"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ar/evs-ajman" />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Author / Publisher */}
      <meta name="author" content="الإدارة" />
      <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Language */}
      <meta httpEquiv="Content-Language" content="ar" />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/evs-ajman" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/evs-ajman" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="إي في إس عجمان | رعاية معتمدة للمركبات الكهربائية – إي في إس الإمارات"
      />
      <meta
        property="og:description"
        content="تقدم إي في إس الإمارات خدمات احترافية للمركبات الكهربائية في عجمان. استمتع بالتشخيص والصيانة والإصلاح لجميع موديلات المركبات الكهربائية بأيدي فنيين معتمدين."
      />
      <meta property="og:url" content="https://evsuae.com/ar/evs-ajman" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="إي في إس عجمان | رعاية معتمدة للمركبات الكهربائية – إي في إس الإمارات"
      />
      <meta
        name="twitter:description"
        content="تقدم إي في إس الإمارات خدمات احترافية للمركبات الكهربائية في عجمان. استمتع بالتشخيص والصيانة والإصلاح لجميع موديلات المركبات الكهربائية بأيدي فنيين معتمدين."
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

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Charset / Compatibility */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    </Head>


      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<PageHeroWithMap
  eyebrowTitle="مركز خدمات المركبات الكهربائية"
  mainTitle="إي في إس عجمان"
  highlightDot={true}
  description="خدمات وإصلاح المركبات الكهربائية بالقرب من عجمان"

  primaryButtonText="احصل على الاتجاهات"
  primaryButtonUrl="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"

  secondaryButtonText="اتصل بنا"
  secondaryButtonUrl="tel:+9710564556555"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604.046910276685!2d55.4894439!3d25.4032403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7b96050de41%3A0xf6df6eaa4de010e7!2sElectric%20Vehicle%20Services!5e0!3m2!1sen!2s!4v1745993180230!5m2!1sen!2s"
/>


<ServiceMarqueeAr />

<section className="position-relative pt-0">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{ backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')" }}
  ></div>

  <div className="container position-relative">
    <div
      className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center"
      data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
    >
      {/* Feature box 1 */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-pin-map icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <span className="d-block">
              <a
                href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
                className="text-white fw-600"
              >
                الجرف <span className="urbanist" dir="ltr">2</span> - عجمان
              </a>
            </span>
            <a
              href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
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

      {/* Feature box 2 */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <div className="feature-box-icon">
            <i className="bi bi-telephone icon-double-large text-base-color mb-20px"></i>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <p className="text-white fw-600">فرع إي في إس عجمان</p>
            <span className="d-block">
              <a
                href="tel:+9710564556555"
                className="text-white fw-600 text-decoration-line-bottom urbanist"
                dir="ltr"
              >
                +971 056 455 6555
              </a>
            </span>
            <a
              href="tel:+9710564556555"
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

      {/* Feature box 3 */}
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