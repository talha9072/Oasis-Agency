import Head from "next/head";
import ServiceSlider from "@/components/ar/common/ServiceSlider";
import BranchesSection from "@/components/ar/common/BranchesSection";
import StatsCounterSection from "@/components/ar/common/StatsCounterSection";
import CustomerReviewsSection from "@/components/ar/common/CustomerReviewsSection";

export default function ArabicHome() {
  return (
    <>
      <Head>
        <title>أفضل مركز خدمة المركبات الكهربائية في دبي | إي في إس الإمارات</title>

        <meta
          name="description"
          content="إي في إس هو أول مركز خدمة للمركبات الكهربائية في الإمارات. شركة إماراتية تأسست عام 2020 بخبرة عالمية متخصصة في تسلا لأكثر من 7 سنوات."
        />

        <meta name="keywords" content="خدمة المركبات الكهربائية, صيانة السيارات الكهربائية" />
        <meta httpEquiv="Content-Language" content="ar" />
      </Head>

      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

 {/* end header */}
  <section id="hero-section" className="snap-section">
    {/* Desktop Image */}
    <video
      playsInline
      autoPlay
      muted
      loop
      className="hero-img"
      src="https://res.cloudinary.com/diztjzpz6/video/upload/f_auto,q_auto,vc_auto,w_1280/v1745834926/hero-test-3_aqdz2m.mp4"
    ></video>

    {/* Mobile Video or Image */}
    <video
      playsInline
      autoPlay
      muted
      loop
      className="hero-img d-block d-md-none"
      src="https://res.cloudinary.com/diztjzpz6/video/upload/f_auto,q_auto,vc_auto,w_720/v1747894600/hero-video_vd9lgt.mp4"
    ></video>

    <div className="container">
      <div className="content-box">
        <div className="subtitle subtitle-hero tp-caption bg-very-light-gray text-uppercase border-radius-4px d-inline-block mt-3">
          <span className="hero-tag bg-dark-gray alt-font d-inline me-10px border-radius-3px fs-12 text-white fw-500">
            إي في إس
          </span>
          <h1 className="d-inline d-inline alt-font me-10px border-radius-3px fs-12 fw-500 hero-tag-text">
            مركز خدمة المركبات الكهربائية في الإمارات
          </h1>
        </div>

        <div className="title hero-h1 tp-caption alt-font text-white">
          <h2 className="d-block pb-2 text-uppercase">
            خدمة المركبات الكهربائية بمفهوم جديد
          </h2>
          <p className="text-white alt-font fw-500 fs-40 d-block mx-auto">
            أداء، ثقة، ورعاية شاملة
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
            filter: "blur(0px)",
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transformOrigin: "50% 50% 0px",
          }}
        >
          احجز فحص سيارتك الكهربائية
        </a>
      </div>
    </div>
  </section>

  {/* start page title */}
  <section
    className="snap-section bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
    style={{
      backgroundImage:
        "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-001.jpg')",
    }}
  >
    <div className="container h-100">
      <div className="row justify-content-center align-items-stretch h-100">
        <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
          {/* top content */}
          <div className="content-box pt-4">
            <h2 className="fw-500 alt-font ls-minus-1px text-dark-gray w-90 mb-0 text-center mx-auto text-uppercase">
              باقات الضمان
            </h2>
            <p className="text-dark-gray alt-font fw-500 fs-26 text-center d-block mx-auto mt-1">
              قد بثقة، نحن ندعمك
            </p>
          </div>

          {/* spacer pushes button down */}
          <div className="btn-box mt-auto pb-4 mx-auto">
            <a
              href="extended-warranties"
              className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
            >
              استعرض باقات الضمان<span className="bg-white"></span>
            </a>
            <a
              href="https://evsuae.com/ar/contact"
              className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
            >
              تواصلوا معنا<span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */}

  {/* start page title */}
  <section
    className="snap-section bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
    style={{
      backgroundImage:
        "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-002.jpg')",
    }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
          <div className="content-box">
            <h2 className="fw-500 alt-font ls-minus-1px text-dark-gray w-90 mb-0 text-center mx-auto text-uppercase">
              التشخيص الذكي
            </h2>
            <p className="text-dark-gray alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
              برامج، تحديثات، وتحكم – كل شيء تحت سقف واحد
            </p>
          </div>

          <div className="btn-box mx-auto">
            <a
              href="services/programming"
              className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
            >
              استعرض الخدمة<span className="bg-white"></span>
            </a>
            <a
              href="https://evsuae.com/ar/contact"
              className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
            >
              تواصلوا معنا<span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* start page title */}
  <section
    className="snap-section bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
    style={{
      backgroundImage:
        "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-004.jpg')",
    }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
          <div className="content-box">
            <h2 className="fw-500 alt-font ls-minus-1px text-dark-gray mb-0 text-center mx-auto text-uppercase">
              صيانة سريعة
            </h2>
            <p className="text-dark-gray alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
              ادخل، احصل على الخدمة، وانطلق
            </p>
          </div>

          <div className="btn-box align-self-end mx-auto">
            <a
              href="services/mechanical"
              className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
            >
              استعرض الخدمة<span className="bg-white"></span>
            </a>
            <a
              href="https://evsuae.com/ar/contact"
              className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
            >
              تواصلوا معنا<span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */}
        
  <ServiceSlider />      
<BranchesSection />
<StatsCounterSection />
<CustomerReviewsSection />


<section className="snap-section pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0">
  <h2 className="h1 alt-font fw-500 ls-minus-1px text-white mb-15px mb-4 text-center">
    أحدث المقالات<span className="text-base-color">.</span>
  </h2>

  <div className="container-fluid">
    <div className="row">
      <div className="col-12">

        {/* Loader */}
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center"
        ></div>

        {/* Blog Grid (REQUIRED by blog.js) */}
        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>

        {/* ✅ Pagination (MISSING – REQUIRED by blog.js) */}
        <div
          id="pagination"
          className="mt-5 d-flex justify-content-center flex-wrap gap-2"
        ></div>

      </div>
    </div>
  </div>
</section>


      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      
      extraScripts: ["/ar/js/blog.js"],
    },
    
  };
}