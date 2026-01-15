// components/common/Footer.js
export default function Footer() {
  return (
    <footer className="snap-section half-footer bg-nero-grey position-relative pb-0 border-top border-color-transparent-white-light">
      <div className="container">
        <div className="row justify-content-center align-items-center align-items-lg-start mb-5 text-center text-sm-start sm-mb-30px">
          {/* Column 1: Logo + Contact + Social */}
          <div className="col-lg-3 col-md-12 col-sm-6 text-lg-start text-md-center md-mb-30px">
            <a href="https://evsuae.com/" className="footer-logo d-inline-block">
              <img
                src="https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg"
                height="115"
                width="300"
                alt="evs-logo"
              />
            </a>

            <span className="text-white ls-05px d-block fs-17 mb-5px mt-15">Contact Us</span>
            <div>
              <i className="feather icon-feather-phone-call icon-very-small me-10px"></i>
              <a href="tel:600500387">600 500 387</a>
            </div>
            <div>
              <i className="feather icon-feather-mail icon-very-small me-10px"></i>
              <a href="mailto:info@evsuae.com">info@evsuae.com</a>
            </div>

            <span className="text-white ls-05px d-block fs-17 mb-5px mt-15">Social Media</span>
            <div className="d-flex align-items-center justify-xs-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61566566698125"
                target="_blank"
                rel="noopener"
                aria-label="Visit EVS UAE on facebook"
              >
                <i className="bi bi-facebook icon-small"></i>
              </a>
              <a
                href="https://www.tiktok.com/@evs_uae?_t=ZS-8xKTxxWXpl1&_r=1"
                target="_blank"
                rel="noopener"
                aria-label="Visit EVS UAE on tiktok"
              >
                <i className="bi bi-tiktok icon-small"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/eva-electric-vehicle-services/"
                target="_blank"
                rel="noopener"
                aria-label="Visit EVS UAE on linkedin"
              >
                <i className="bi bi-linkedin icon-small"></i>
              </a>
              <a
                href="https://www.instagram.com/evs_uae/"
                target="_blank"
                rel="noopener"
                aria-label="Visit EVS UAE on Instagram"
              >
                <i className="bi bi-instagram icon-small"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-4 col-sm-6 fs-16 lh-26 fw-500 last-paragraph-no-margin sm-mb-30px mt-lg-3">
            <span className="text-white ls-05px d-block fs-26 mb-15px">Quick Links</span>
            <div><a href="https://evsuae.com/about">About us</a></div>
            <div><a href="https://evsuae.com/services">Services</a></div>
            <div><a href="https://evsuae.com/extended-warranties">Warranty</a></div>
            <div><a href="https://evsuae.com/sos">Roadside Assitance</a></div>
            <div><a href="https://evsuae.com/blog">Blogs</a></div>
            <div><a href="https://evsuae.com/franchise">Franchise enquiries</a></div>
          </div>

          {/* Column 3: Locations */}
          <div className="col-lg-3 col-md-4 col-sm-6 fs-16 lh-26 fw-500 last-paragraph-no-margin xs-mb-30px mt-lg-3">
            <span className="text-white ls-05px d-block fs-26 mb-15px">Locations</span>

            <div>
              <a
                href="https://evsuae.com/evs-abu-dhabi"
                target="_blank"
                rel="noopener noreferrer"
              >
                EVS Abu Dhabi
              </a>
            </div>

            <div>
              <a
                href="https://evsuae.com/evs-dubai"
                target="_blank"
                rel="noopener noreferrer"
              >
                EVS Dubai
              </a>
            </div>

            <div>
              <a
                href="https://evsuae.com/evs-ajman"
                target="_blank"
                rel="noopener noreferrer"
              >
                EVS Ajman
              </a>
            </div>

            <div>
              <a
                href="https://evsuae.com/evs-alain"
                target="_blank"
                rel="noopener noreferrer"
              >
                EVS Al Ain
              </a>
            </div>

           

            <div>
              <a
                href="https://evsuae.com/evs-sharjah"
                target="_blank"
                rel="noopener noreferrer"
              >
                EVS Sharjah
              </a>
            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="col-lg-3 col-md-4 col-sm-6 fs-16 lh-26 fw-500 last-paragraph-no-margin xs-mb-30px mt-lg-3">
            <span className="text-white ls-05px d-block fs-26 mb-15px">Opening Hours</span>
            <span className="d-block">
              <span className="opening-day">Sat - Thurs</span> 09:00 AM – 06:00 PM
            </span>
            <span className="d-block">
              <span className="opening-day">Friday</span> Closed
            </span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom position-relative pt-25px pb-25px border-top border-color-transparent-white-light">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center text-lg-start md-mb-15px">
              <span className="fs-16 fw-500">
                © Copyright 2026 EVS - Electric Vehicle Services.
                <br />
                Website crafted by{" "}
                <a
                  href="https://oasis-digital.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Oasis Digital
                </a>
              </span>
            </div>
            <div className="col-lg-8 text-center text-lg-end">
  <ul className="footer-navbar fs-16 fw-500">
    <li className="nav-item">
      <a
        href="https://evsuae.com/services/programming"
        target="_blank"
        rel="noopener noreferrer"
      >
        Programming & Software
      </a>
    </li>

    <li className="nav-item">
      <a
        href="https://evsuae.com/services/mechanical"
        target="_blank"
        rel="noopener noreferrer"
      >
        - Mechanical Services
      </a>
    </li>

    <li className="nav-item">
      <a
        href="https://evsuae.com/services/battery-electrical"
        target="_blank"
        rel="noopener noreferrer"
      >
        - Battery & Electrical
      </a>
    </li>

    <li className="nav-item">
      <a
        href="https://evsuae.com/services/body-paint"
        target="_blank"
        rel="noopener noreferrer"
      >
        - Body & Paint
      </a>
    </li>

    <li className="nav-item">
      <a
        href="https://evsuae.com/services/insurance"
        target="_blank"
        rel="noopener noreferrer"
      >
        - Insurance
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