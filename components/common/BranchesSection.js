// components/common/BranchesSection.js
import { useEffect } from "react";

export default function BranchesSection() {
  // Bootstrap tabs aur parallax image ko reinitialize karne ke liye
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Bootstrap tabs ko manually trigger karne ke liye (template JS ke saath sync)
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("load"));
    }
  }, []);

  return (
    <section className="snap-section z-index-0 position-relative overflow-hidden pb-1 md-pb-5">
      {/* Parallax decorative image */}
      <img
        src="https://evsuae.com/.netlify/images?url=/images/home-17.png"
        loading="lazy"
        className="h-190px z-index-minus-1 position-absolute left-0px top-0px lg-h-120px d-none d-md-inline-block"
        data-bottom-top="transform: translate3d(80px, 0px, 0px);"
        data-top-bottom="transform: translate3d(-150px, 0px, 0px);"
        alt="EVS Electric Vehicle Services"
      />

      <div className="container">
        <div className="row align-items-center">
          {/* Left: Branch List Tabs */}
          <div className="col-xl-4 col-lg-5 team-style-09 order-1 pb-5 pb-md-0">
            <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px text-uppercase">
              Our Branches<span className="text-base-color">.</span>
            </h2>
            <ul className="nav nav-tabs alt-font flex-column border-0 justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab_nine3">
                  <span className="number text-light-gray fs-22 me-5px">01.</span>
                  <span className="name fs-22 text-white">Abu Dhabi</span>
                  <span className="text-medium-gray ms-auto">Musaffah</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine1">
                  <span className="number text-light-gray fs-22 me-5px">02.</span>
                  <span className="name fs-22 text-white">Dubai</span>
                  <span className="text-medium-gray ms-auto">International city</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine2">
                  <span className="number text-light-gray fs-22 me-5px">03.</span>
                  <span className="name fs-22 text-white">Ajman</span>
                  <span className="text-medium-gray ms-auto">Al Jerf 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine4">
                  <span className="number text-light-gray fs-22 me-5px">04.</span>
                  <span className="name fs-22 text-white">Alain</span>
                  <span className="text-medium-gray ms-auto">Industrial Area</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine5">
                  <span className="number text-light-gray fs-22 me-5px">05.</span>
                  <span className="name fs-22 text-white">Riyadh</span>
                  <span className="text-medium-gray ms-auto">Al Qirawan</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine6">
                  <span className="number text-light-gray fs-22 me-5px">06.</span>
                  <span className="name fs-22 text-white">Sharjah</span>
                  <span className="text-medium-gray ms-auto">Al Sajaa</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Tab Content with Images */}
          <div className="col-lg-7 offset-xl-1 md-mb-35px order-2">
            <div className="tab-content bg-white box-shadow-extra-large">
              {/* Abu Dhabi */}
              <div className="tab-pane active fade show" id="tab_nine3">
                <div className="row g-0 row-cols-1 row-cols-md-2">
                  <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                    <h3 className="alt-font fw-600 text-white mb-2">EVS Abu Dhabi</h3>
                    <span className="fs-16 fw-500 text-base-color">6th Street - Musaffah - M14 - Abu Dhabi</span>
                    <br />
                    <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="https://maps.app.goo.gl/8yhst7aDcJW8mWs59" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="tel:+971547133313" className="fw-700 fs-20 text-light-gray alt-font">
                        <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                      </a>
                    </div>
                  </div>
                  <div
                    className="col position-relative cover-background"
                    style={{ backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1024')" }}
                    srcSet="
                      https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=320 320w,
                      https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=640 640w,
                      https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1024 1024w,
                      https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1440 1440w,
                      https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1920 1920w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    loading="lazy"
                  >
                    <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">01.</span>
                  </div>
                </div>
              </div>

              {/* Dubai */}
              <div className="tab-pane fade" id="tab_nine1">
                <div className="row g-0 row-cols-1 row-cols-md-2">
                  <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                    <h3 className="alt-font fw-600 text-white mb-2">EVS Dubai</h3>
                    <span className="fs-16 fw-500 text-base-color">International City 1 - Emirati Cluster, Warehouse #39.</span>
                    <br />
                    <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA?g_st=iwb" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="tel:+9710566017771" className="fw-700 fs-20 text-light-gray alt-font">
                        <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                      </a>
                    </div>
                  </div>
                  <div
                    className="col position-relative cover-background"
                    style={{ backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1024')" }}
                    srcSet="
                      https://evsuae.com/.netlify/images?url=/img/dubai.png&w=320 320w,
                      https://evsuae.com/.netlify/images?url=/img/dubai.png&w=640 640w,
                      https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1024 1024w,
                      https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1440 1440w,
                      https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1920 1920w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    loading="lazy"
                  >
                    <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">02.</span>
                  </div>
                </div>
              </div>

              {/* Ajman */}
              <div className="tab-pane fade" id="tab_nine2">
                <div className="row g-0 row-cols-1 row-cols-md-2">
                  <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                    <h3 className="alt-font fw-600 text-white mb-2">EVS Ajman</h3>
                    <span className="fs-16 fw-500 text-base-color">Al Jerf 2 - Ajman</span>
                    <br />
                    <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="tel:+9710564556555" className="fw-700 fs-20 text-light-gray alt-font">
                        <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                      </a>
                    </div>
                  </div>
                  <div
                    className="col position-relative cover-background"
                    style={{ backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1024')" }}
                    srcSet="
                      https://evsuae.com/.netlify/images?url=/img/ajman.png&w=320 320w,
                      https://evsuae.com/.netlify/images?url=/img/ajman.png&w=640 640w,
                      https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1024 1024w,
                      https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1440 1440w,
                      https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1920 1920w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    loading="lazy"
                  >
                    <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">03.</span>
                  </div>
                </div>
              </div>

              {/* Alain */}
              <div className="tab-pane fade" id="tab_nine4">
                <div className="row g-0 row-cols-1 row-cols-md-2">
                  <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                    <h3 className="alt-font fw-600 text-white mb-2">EVS Alain</h3>
                    <span className="fs-16 fw-500 text-base-color">Al Beewar 5 St - Industrial Area - Al Ajayyiz</span>
                    <br />
                    <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="https://maps.app.goo.gl/wUXqKuLDtkWffKPf6" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="tel:+9710507770360" className="fw-700 fs-20 text-light-gray alt-font">
                        <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                      </a>
                    </div>
                  </div>
                  <div
                    className="col position-relative cover-background"
                    style={{ backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1024')" }}
                    srcSet="
                      https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=320 320w,
                      https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=640 640w,
                      https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1024 1024w,
                      https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1440 1440w,
                      https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1920 1920w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    loading="lazy"
                  >
                    <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">04.</span>
                  </div>
                </div>
              </div>

              {/* Riyadh */}
              <div className="tab-pane fade" id="tab_nine5">
                <div className="row g-0 row-cols-1 row-cols-md-2">
                  <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                    <h3 className="alt-font fw-600 text-white mb-2">EVS Riyadh</h3>
                    <span className="fs-16 fw-500 text-base-color">Al Qirawan, Riyadh, Saudi Arabia</span>
                    <br />
                    <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="tel:+966554586777" className="fw-700 fs-20 text-light-gray alt-font">
                        <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                      </a>
                    </div>
                  </div>
                  <div
                    className="col position-relative cover-background"
                    style={{ backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1024')" }}
                    srcSet="
                      https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=320 320w,
                      https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=640 640w,
                      https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1024 1024w,
                      https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1440 1440w,
                      https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1920 1920w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    loading="lazy"
                  >
                    <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">05.</span>
                  </div>
                </div>
              </div>

              {/* Sharjah */}
              <div className="tab-pane fade" id="tab_nine6">
                <div className="row g-0 row-cols-1 row-cols-md-2">
                  <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                    <h3 className="alt-font fw-600 text-white mb-2">EVS Sharjah</h3>
                    <span className="fs-16 fw-500 text-base-color">Al Sajaa, Al Jlail, Sharjah, United Arab Emirates</span>
                    <br />
                    <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7?g_st=ipc" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-20px">
                      <a href="tel:+971569863920" className="fw-700 fs-20 text-light-gray alt-font">
                        <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer" className="fw-700 fs-20 text-white alt-font">
                        <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                      </a>
                    </div>
                  </div>
                  <div
                    className="col position-relative cover-background"
                    style={{ backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1024')" }}
                    srcSet="
                      https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=320 320w,
                      https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=640 640w,
                      https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1024 1024w,
                      https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1440 1440w,
                      https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1920 1920w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    loading="lazy"
                  >
                    <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">06.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}