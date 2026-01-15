// components/common/BranchesSection.js

export default function BranchesSection() {
  return (
    <section className="snap-section z-index-0 position-relative overflow-hidden pb-1 md-pb-5">
      <img
        src="https://evsuae.com/.netlify/images?url=/images/home-17.png"
        loading="lazy"
        className="h-190px z-index-minus-1 position-absolute left-0px top-0px lg-h-120px d-none d-md-inline-block"
        data-bottom-top="transform: translate3d(80px, 0px, 0px);"
        data-top-bottom="transform: translate3d(-150px, 0px, 0px);"
        alt="خدمات المركبات الكهربائية إي في إس"
      />

      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TABS */}
          <div className="col-xl-4 offset-xl-1 col-lg-5 team-style-09 order-1 pb-5 pb-md-0">
            <h2 className="h1 alt-font fw-500 ls-minus-1px text-white mb-15px text-uppercase">
              فروعنا<span className="text-base-color">.</span>
            </h2>

            <ul className="nav nav-tabs alt-font flex-column border-0 justify-content-center p-0">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab_nine3">
                  <span className="number text-light-gray fs-22 me-5px urbanist">01.</span>
                  <span className="name fs-22 text-white">أبوظبي</span>
                  <span className="text-medium-gray me-auto">مصفح</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine1">
                  <span className="number text-light-gray fs-22 me-5px urbanist">02.</span>
                  <span className="name fs-22 text-white">دبي</span>
                  <span className="text-medium-gray me-auto">المدينة العالمية</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine2">
                  <span className="number text-light-gray fs-22 me-5px urbanist">03.</span>
                  <span className="name fs-22 text-white">عجمان</span>
                  <span className="text-medium-gray me-auto">الجرف 2</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine4">
                  <span className="number text-light-gray fs-22 me-5px urbanist">04.</span>
                  <span className="name fs-22 text-white">العين</span>
                  <span className="text-medium-gray me-auto">المنطقة الصناعية</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine5">
                  <span className="number text-light-gray fs-22 me-5px urbanist">05.</span>
                  <span className="name fs-22 text-white">الرياض</span>
                  <span className="text-medium-gray me-auto">القيروان</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_nine6">
                  <span className="number text-light-gray fs-22 me-5px">06.</span>
                  <span className="name fs-22 text-white">الشارقة</span>
                  <span className="text-medium-gray me-auto">السجع</span>
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7 md-mb-35px order-2">
            <div className="tab-content bg-white box-shadow-extra-large">

              {/* === TAB 01 ABU DHABI === */}
              <div className="tab-pane active fade show" id="tab_nine3">
                <Branch
                  title="إي في إس أبوظبي"
                  address="الشارع 6 - مصفح - م14 - أبوظبي"
                  map="https://maps.app.goo.gl/8yhst7aDcJW8mWs59"
                  phone="+971 54 713 3313"
                  image="abu-dhabi.png"
                  number="01."
                />
              </div>

              {/* === TAB 02 DUBAI === */}
              <div className="tab-pane fade" id="tab_nine1">
                <Branch
                  title="إي في إس دبي"
                  address="المدينة العالمية 1 - التجمع الإماراتي، مستودع رقم 39"
                  map="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA"
                  phone="+9710566017771"
                  image="dubai.png"
                  number="02."
                />
              </div>

              {/* === TAB 03 AJMAN === */}
              <div className="tab-pane fade" id="tab_nine2">
                <Branch
                  title="إي في إس عجمان"
                  address="الجرف 2 - عجمان"
                  map="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
                  phone="+9710564556555"
                  image="ajman.png"
                  number="03."
                />
              </div>

              {/* === TAB 04 ALAIN === */}
              <div className="tab-pane fade" id="tab_nine4">
                <Branch
                  title="إي في إس العين"
                  address="شارع البيوار 5 - المنطقة الصناعية - العجايز"
                  map="https://maps.app.goo.gl/wUXqKuLDtkWffKPf6"
                  phone="+9710507770360"
                  image="EVS-alain.jpg"
                  number="04."
                />
              </div>

              {/* === TAB 05 RIYADH === */}
              <div className="tab-pane fade" id="tab_nine5">
                <Branch
                  title="إي في إس الرياض"
                  address="القيروان، الرياض، المملكة العربية السعودية"
                  map="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89"
                  phone="+966 554 586 777"
                  image="riyadh.jpeg"
                  number="05."
                />
              </div>

              {/* === TAB 06 SHARJAH === */}
              <div className="tab-pane fade" id="tab_nine6">
                <Branch
                  title="إي في إس الشارقة"
                  address="السجع، الشارقة، الإمارات العربية المتحدة"
                  map="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7"
                  phone="+971569863920"
                  image="sharjah.png"
                  number="06."
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   INTERNAL STATIC BRANCH BLOCK
================================ */
function Branch({ title, address, map, phone, image, number }) {
  return (
    <div className="row g-0 row-cols-1 row-cols-md-2">
      <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
        <h3 className="alt-font fw-600 text-white mb-2">{title}</h3>
        <span className="fs-16 fw-500 text-base-color">{address}</span>
        <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

        <div className="d-flex align-items-center mb-20px">
          <a href={map} target="_blank" rel="noreferrer">
            <i className="fa fa-directions text-base-color mx-2"></i>الحصول على الاتجاهات
          </a>
        </div>

        <div className="d-flex align-items-center mb-20px">
          <a href={`tel:${phone}`}>
            <i className="fa fa-phone text-base-color mx-2"></i>اتصل بنا
          </a>
        </div>

        <div className="d-flex align-items-center">
          <a href="https://www.instagram.com/evs_uae/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram text-base-color mx-2"></i>تابعنا
          </a>
        </div>
      </div>

      <div
        className="col position-relative cover-background"
        style={{
          backgroundImage: `url('https://evsuae.com/.netlify/images?url=/img/${image}&w=1024')`,
        }}
      >
        <span className="fs-190 fw-500 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
          {number}
        </span>
      </div>
    </div>
  );
}
