// components/FooterAr.js

export default function FooterAr() {
  return (
    <footer className="snap-section half-footer bg-nero-grey position-relative pb-0 border-top border-color-transparent-white-light">
      <div className="container">
        <div className="row justify-content-center align-items-center align-items-lg-start mb-5 text-center text-sm-end sm-mb-30px">

          {/* ===== Column 1: Logo + Contact + Social ===== */}
          <div className="col-lg-3 col-md-12 col-sm-6 text-lg-end text-md-center md-mb-30px">
            <a href="https://evsuae.com/ar/" className="footer-logo d-inline-block">
              <img
                src="https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg"
                height="115"
                width="300"
                alt="شعار إي في إس"
              />
            </a>

            <span className="text-white ls-05px d-block fs-17 mb-5px mt-15">
              تواصلوا معنا
            </span>

            <div>
              <i className="feather icon-feather-phone-call icon-very-small ms-10px urbanist"></i>
              <a className="urbanist" href="tel:600500387" dir="ltr">
                600 500 387
              </a>
            </div>

            <div>
              <i className="feather icon-feather-mail icon-very-small ms-10px"></i>
              <a href="mailto:info@evsuae.com" dir="ltr">
                info@evsuae.com
              </a>
            </div>

            <span className="text-white ls-05px d-block fs-17 mb-5px mt-15">
              وسائل التواصل الاجتماعي
            </span>

            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61566566698125"
                target="_blank"
                rel="noopener"
                aria-label="زوروا إي في إس الإمارات على فيسبوك"
              >
                <i className="bi bi-facebook icon-small"></i>
              </a>

              <a
                href="https://www.tiktok.com/@evs_uae?_t=ZS-8xKTxxWXpl1&_r=1"
                target="_blank"
                rel="noopener"
                aria-label="زوروا إي في إس الإمارات على تيك توك"
              >
                <i className="bi bi-tiktok icon-small"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/eva-electric-vehicle-services/"
                target="_blank"
                rel="noopener"
                aria-label="زوروا إي في إس الإمارات على لينكدإن"
              >
                <i className="bi bi-linkedin icon-small"></i>
              </a>

              <a
                href="https://www.instagram.com/evs_uae/"
                target="_blank"
                rel="noopener"
                aria-label="زوروا إي في إس الإمارات على إنستغرام"
              >
                <i className="bi bi-instagram icon-small"></i>
              </a>
            </div>
          </div>

          {/* ===== Column 2: Quick Links ===== */}
          <div className="col-lg-3 col-md-4 col-sm-6 fs-16 lh-26 fw-500 last-paragraph-no-margin sm-mb-30px mt-lg-3">
            <span className="text-white ls-05px d-block fs-26 mb-15px">
              روابط سريعة
            </span>

            <div><a href="https://evsuae.com/ar/about">من نحن</a></div>
            <div><a href="https://evsuae.com/ar/services">الخدمات</a></div>
            <div><a href="https://evsuae.com/ar/extended-warranties">الضمان</a></div>
            <div><a href="https://evsuae.com/ar/sos">المساعدة على الطريق</a></div>
            <div><a href="https://evsuae.com/ar/blog">المدونات</a></div>
            <div><a href="https://evsuae.com/ar/franchise">استفسارات الامتياز</a></div>
          </div>

          {/* ===== Column 3: Locations ===== */}
          <div className="col-lg-3 col-md-4 col-sm-6 fs-16 lh-26 fw-500 last-paragraph-no-margin xs-mb-30px mt-lg-3">
            <span className="text-white ls-05px d-block fs-26 mb-15px">
              المواقع
            </span>

            <div><a href="https://evsuae.com/ar/evs-abu-dhabi" target="_blank">إي في إس أبوظبي</a></div>
            <div><a href="https://evsuae.com/ar/evs-dubai" target="_blank">إي في إس دبي</a></div>
            <div><a href="https://evsuae.com/ar/evs-ajman" target="_blank">إي في إس عجمان</a></div>
            <div><a href="https://evsuae.com/ar/evs-alain" target="_blank">إي في إس العين</a></div>
            <div><a href="https://evsuae.com/ar/evs-sharjah" target="_blank">إي في إس الشارقة</a></div>
          </div>

          {/* ===== Column 4: Working Hours ===== */}
          <div
            className="col-lg-3 col-md-4 col-sm-6 fs-16 lh-26 fw-500 last-paragraph-no-margin xs-mb-30px mt-lg-3"
            dir="rtl"
          >
            <span className="text-white ls-05px d-block fs-26 mb-15px">
              ساعات العمل
            </span>

            <span className="d-block">
              السبت إلى الخميس:
              <span className="urbanist"> 9 </span>
              صباحًا –
              <span className="urbanist"> 6 </span>
              مساءً
            </span>

            <span className="d-block">الجمعة إجازة</span>
          </div>
        </div>

        {/* ===== Footer Bottom ===== */}
        <div className="footer-bottom position-relative pt-25px pb-25px border-top border-color-transparent-white-light">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center text-lg-end md-mb-15px">
              <span className="fs-16 fw-500">
                © حقوق الطبع والنشر <span className="urbanist">2025</span> إي في إس - خدمات المركبات الكهربائية.
                <br />
                صيغ الموقع بواسطة{" "}
                <a
                  href="https://oasis-digital.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  أواسيس ديجيتال
                </a>
              </span>
            </div>

            <div className="col-lg-7 text-center text-lg-start">
              <ul className="footer-navbar fs-16 fw-500">
                <li className="nav-item">
                  <a href="https://evsuae.com/ar/services/programming" target="_blank">
                    البرمجة والبرمجيات
                  </a>{" "}
                  -
                </li>
                <li className="nav-item">
                  <a href="https://evsuae.com/ar/services/mechanical" target="_blank">
                    الخدمات الميكانيكية
                  </a>{" "}
                  -
                </li>
                <li className="nav-item">
                  <a href="https://evsuae.com/ar/services/battery-electrical" target="_blank">
                    البطارية والكهرباء
                  </a>{" "}
                  -
                </li>
                <li className="nav-item">
                  <a href="https://evsuae.com/ar/services/body-paint" target="_blank">
                    الهيكل والدهان
                  </a>{" "}
                  -
                </li>
                <li className="nav-item">
                  <a href="https://evsuae.com/ar/services/insurance" target="_blank">
                    التأمين
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
