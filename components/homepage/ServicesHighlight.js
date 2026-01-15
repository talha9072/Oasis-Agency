// components/homepage/ServicesHighlight.js
export default function ServicesHighlight() {
  return (
    <>
      {/* Warranty Plans Section */}
      <section
        className="snap-section bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
        style={{
          backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-001.jpg')",
        }}
      >
        <div className="container h-100">
          <div className="row justify-content-center align-items-stretch h-100">
            <div className="col-md-8 d-flex flex-column text-center page-title-extra-small py-5 sm-pt-80px sm-pb-50px">
              <div className="content-box pt-4">
                <h2 className="fw-700 alt-font ls-minus-1px text-dark-gray w-90 mb-0 text-center mx-auto text-uppercase">
                  Warranty Plans
                </h2>
                <p className="text-dark-gray alt-font fw-500 fs-26 text-center d-block mx-auto mt-1">
                  Drive confidently. We’ve got you covered.
                </p>
              </div>
              <div className="btn-box mt-auto pb-4 mx-auto">
                <a
                  href="extended-warranties"
                  className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
                >
                  View Warranty Packages<span className="bg-white"></span>
                </a>
                <a
                  href="https://evsuae.com/contact"
                  className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
                >
                  Contact us<span className="bg-white"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Diagnostics Section */}
      <section
        className="snap-section bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
        style={{
          backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-002.jpg')",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
              <div className="content-box">
                <h2 className="fw-700 alt-font ls-minus-1px text-dark-gray w-90 mb-0 text-center mx-auto text-uppercase">
                  Smart Diagnostics
                </h2>
                <p className="text-dark-gray alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
                  Software, updates, control — all under one roof.
                </p>
              </div>
              <div className="btn-box mx-auto">
                <a
                  href="services/programming"
                  className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
                >
                  View Service<span className="bg-white"></span>
                </a>
                <a
                  href="https://evsuae.com/contact"
                  className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
                >
                  Contact us<span className="bg-white"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Maintenance Section */}
      <section
        className="snap-section bg-black overflow-hidden p-0 page-title-big-typography tesla-section"
        style={{
          backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/evs/evs-004.jpg')",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 py-90 d-flex flex-column justify-content-between align-items-center text-center page-title-extra-small sm-pt-80px sm-pb-50px">
              <div className="content-box">
                <h2 className="fw-700 alt-font ls-minus-1px text-dark-gray mb-0 text-center mx-auto text-uppercase">
                  Quick Maintenance
                </h2>
                <p className="text-dark-gray alt-font fw-500 fs-30 text-center d-block mx-auto mt-1">
                  Get in. Get serviced. Get moving.
                </p>
              </div>
              <div className="btn-box align-self-end mx-auto">
                <a
                  href="services/mechanical"
                  className="btn btn-large btn-round-edge bg-base-color btn-slide-right me-15px mb-2"
                >
                  View Service<span className="bg-white"></span>
                </a>
                <a
                  href="https://evsuae.com/contact"
                  className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px mb-2"
                >
                  Contact us<span className="bg-white"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}