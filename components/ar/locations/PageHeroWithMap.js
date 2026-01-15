"use client";
export default function PageHeroWithMap({
  eyebrowTitle = "مركز خدمات المركبات الكهربائية",
  mainTitle = "إي في إس الرياض",
  highlightDot = true,
  description = "خدمات وإصلاح المركبات الكهربائية بالقرب من الرياض",

  // 🔘 CTA 1
  primaryButtonText = "",
  primaryButtonUrl = "",

  // 🔘 CTA 2
  secondaryButtonText = "",
  secondaryButtonUrl = "",

  mapEmbedUrl = "",
}) {
  return (
    <section
      className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography pt-5"
      dir="rtl"
    >
      <div className="container">
        <div className="row justify-content-center small-screen">
          
          {/* Left Content */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-end page-title-extra-small sm-pt-50px sm-pb-50px"
            data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            <h1 className="ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
              {eyebrowTitle}
            </h1>

            <h2 className="fw-500 alt-font ls-minus-1px text-white w-100 mb-15px lg-w-100 text-end">
              {mainTitle}
              {highlightDot && <span className="text-base-color">.</span>}
            </h2>

            <h2 className="location-desc fw-400 alt-font ls-minus-1px text-white w-100 mb-0 lg-w-100 text-end">
              {description}
            </h2>

            {/* ✅ CTA BUTTONS */}
            {primaryButtonText && primaryButtonUrl && (
              <a
                href={primaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
              >
                {primaryButtonText}
                <i className="fa fa-location-arrow ms-10px"></i>
                <span className="bg-white"></span>
              </a>
            )}

            {secondaryButtonText && secondaryButtonUrl && (
              <a
                href={secondaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
              >
                {secondaryButtonText}
                <i className="fa fa-phone-alt ms-10px"></i>
                <span className="bg-white"></span>
              </a>
            )}
          </div>

          {/* Right Map */}
          <div className="col-md-6">
            <div className="outside-box-left-20 sm-outside-box-right-20 h-100 sm-h-300px xs-h-250px cover-background">
              {mapEmbedUrl && (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${mainTitle} موقع الخريطة`}
                ></iframe>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
