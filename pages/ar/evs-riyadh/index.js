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
      <title>إي في إس الرياض | رعاية احترافية للمركبات الكهربائية – إي في إس السعودية</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="إي في إس الآن في الرياض! احصل على خدمات احترافية للمركبات الكهربائية، من صيانة وتشخيص بأيدي فنيين معتمدين. جودة عالية لجميع ماركات السيارات الكهربائية."
      />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content="خدمة المركبات الكهربائية الرياض, صيانة المركبات الكهربائية السعودية, مركز إصلاح المركبات الكهربائية الرياض, خدمة تسلا الرياض, تشخيص المركبات الكهربائية السعودية, خدمات إي في إس الرياض, فنيو المركبات الكهربائية المعتمدون السعودية"
      />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ar/evs-riyadh" />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Author & Publisher */}
      <meta name="author" content="الإدارة" />
      <meta name="publisher" content="خدمات المركبات الكهربائية السعودية" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Language */}
      <meta httpEquiv="Content-Language" content="ar" />

      {/* Hreflang */}
      <link rel="alternate" hreflang="en" href="https://evsuae.com/evs-riyadh" />
      <link rel="alternate" hreflang="ar" href="https://evsuae.com/ar/evs-riyadh" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="إي في إس الرياض | رعاية احترافية للمركبات الكهربائية – إي في إس السعودية"
      />
      <meta
        property="og:description"
        content="إي في إس الآن في الرياض! احصل على خدمات احترافية للمركبات الكهربائية، من صيانة وتشخيص بأيدي فنيين معتمدين. جودة عالية لجميع ماركات السيارات الكهربائية."
      />
      <meta property="og:url" content="https://evsuae.com/ar/evs-riyadh" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="إي في إس الرياض | رعاية احترافية للمركبات الكهربائية – إي في إس السعودية"
      />
      <meta
        name="twitter:description"
        content="إي في إس الآن في الرياض! احصل على خدمات احترافية للمركبات الكهربائية، من صيانة وتشخيص بأيدي فنيين معتمدين. جودة عالية لجميع ماركات السيارات الكهربائية."
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

      {/* Fonts Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Charset & Compatibility */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    </Head>


      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

<PageHeroWithMap
  eyebrowTitle="مركز خدمات المركبات الكهربائية"
  mainTitle="إي في إس الرياض"
  description="خدمات وإصلاح المركبات الكهربائية بالقرب من الرياض"

  primaryButtonText="زوروا موقعنا في السعودية"
  primaryButtonUrl="https://evsksa.com"

  mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28961.185254125718!2d46.56376409073753!3d24.858788963514993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee74711ce7e8b%3A0x63ef4f728a34144f!2sEVS%20-%20Electric%20Vehicle%20Service%20Center!5e0!3m2!1sen!2s!4v1746009235770!5m2!1sen!2s"
/>

<ServiceMarqueeAr />

<section className="position-relative pt-0">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{
      backgroundImage: "url('/images/vertical-line-bg-medium-gray.svg')",
    }}
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
                href="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89"
                className="text-white fw-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                القيروان، الرياض، المملكة العربية السعودية
              </a>
            </span>

            <a
              href="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات<span className="bg-white"></span>
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
            <p className="text-white fw-600">فرع إي في إس الرياض</p>

            <span className="d-block">
              <a
                href="tel:+966554586777"
                className="text-white fw-600 text-decoration-line-bottom urbanist"
                dir="ltr"
              >
                +966 55 458 6777
              </a>
            </span>

            <a
              href="tel:+966554586777"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              اتصل بنا<span className="bg-white"></span>
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
            <p className="text-white fw-600">راسلنا</p>

            <span className="d-block">
              <a
                href="mailto:info@evsksa.com"
                className="text-white fw-600 text-decoration-line-bottom"
              >
                info@evsksa.com
              </a>
            </span>

            <a
              href="mailto:info@evsksa.com"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              راسلنا<span className="bg-white"></span>
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