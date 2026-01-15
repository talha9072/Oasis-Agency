// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* start header */}
      <header className="position-sticky top-0">
        {/* start navigation */}
        <nav className="navbar navbar-expand-lg header-transparent bg-transparent border-bottom border-color-dark-gray disable-fixed">
          <div className="container-fluid">
            <div className="col-auto">
              <Link className="navbar-brand" href="https://evsuae.com/">
                <img
                  src="https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg"
                  height="36"
                  width="96"
                  alt="EVS-logo"
                  className="default-logo"
                />
              </Link>
            </div>

            <ul className="menu-item-list fw-500 ls-1px d-flex justify-content-center navbar-nav sm-hide">
              <li className="menu-item">
                <Link href="https://evsuae.com/" className="nav-link alt-font text-uppercase text-white">
                  Home
                </Link>
              </li>

              <li className="menu-item dropdown-btn">
                <Link href="https://evsuae.com/services" className="nav-link alt-font text-uppercase text-white btn-dropdown">
                  Services
                </Link>
                <i className="fa-solid fa-angle-down btn-dropdown" id="evDropdownMenuLink"></i>
                <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="evDropdownMenuLink">
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/services/programming"
                    >
                      Programming & Software
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/services/mechanical"
                    >
                      Mechanical Services
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/services/battery-electrical"
                    >
                      Battery & Electrical
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/services/body-paint"
                    >
                      Body & Paint
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/services/insurance"
                    >
                      Insurance Services
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <Link href="https://evsuae.com/extended-warranties" className="nav-link alt-font text-uppercase text-white">
                  Warranty
                </Link>
              </li>

              <li className="menu-item">
                <Link href="https://evsuae.com/sos" className="nav-link alt-font text-uppercase text-white">
                  Roadside Assistance
                </Link>
              </li>

              <li className="menu-item dropdown-btn">
                <Link href="https://evsuae.com/ev-car-brands" className="nav-link alt-font text-uppercase text-white btn-dropdown">
                  EV Car Brands
                </Link>
                <i className="fa-solid fa-angle-down btn-dropdown" id="evCarBrands"></i>
                <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="evCarBrands">
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/rox"
                    >
                      ROX
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evOneDropdownMenuLink"></i>
                    </Link>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evOneDropdownMenuLink">
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/rox/rox-01">
                          ROX 01
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/zeekr"
                    >
                      ZEEKR
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evTwoDropdownMenuLink"></i>
                    </Link>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evTwoDropdownMenuLink">
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/zeekr/zeekr-x">
                          ZEEKR X
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/zeekr/zeekr-001">
                          ZEEKR 001
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/zeekr/zeekr-9x">
                          ZEEKR 9x
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/xpeng"
                    >
                      Xpeng
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evThreeDropdownMenuLink"></i>
                    </Link>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evThreeDropdownMenuLink">
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/xpeng/xpeng-g7">
                          Xpeng G7
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/xpeng/xpeng-g9">
                          Xpeng G9
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/avatr"
                    >
                      AVATR
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evFourDropdownMenuLink"></i>
                    </Link>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFourDropdownMenuLink">
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/avatr/avatr-11">
                          AVATR 11
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/avatr/avatr-12">
                          AVATR 12
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/byd"
                    >
                      BYD
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evFiveDropdownMenuLink"></i>
                    </Link>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFiveDropdownMenuLink">
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-han">
                          BYD HAN
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-seal">
                          BYD SEAL
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-atto-3">
                          BYD ATTO 3
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-song-plus">
                          BYD SONG PLUS
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-qin-plus">
                          BYD QIN PLUS
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-leopard-7">
                          BYD Leopard 7
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/tesla"
                    >
                      Tesla
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evSixDropdownMenuLink"></i>
                    </Link>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evSixDropdownMenuLink">
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/cybertruck">
                          Cybertruck
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-3">
                          Model 3
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-s">
                          Model S
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-x">
                          Model X
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-y">
                          Model Y
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/roadster">
                          Roadster
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="menu-item dropdown-btn">
                <Link href="https://evsuae.com/branches" className="nav-link alt-font text-uppercase text-white btn-dropdown">
                  Branches
                </Link>
                <i className="fa-solid fa-angle-down btn-dropdown" id="branchesDropdownMenuLink"></i>
                <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="branchesDropdownMenuLink">
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/evs-abu-dhabi"
                    >
                      EVS Abu Dhabi
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/evs-dubai"
                    >
                      EVS Dubai
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/evs-ajman"
                    >
                      EVS Ajman
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/evs-alain"
                    >
                      EVS Alain
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/evs-riyadh"
                    >
                      EVS Riyadh
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="nav-link alt-font text-uppercase text-white btn-sub-dropdown"
                      href="https://evsuae.com/evs-sharjah"
                    >
                      EVS Sharjah
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14"></i>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <Link href="https://evsuae.com/about" className="nav-link alt-font text-uppercase text-white">
                  About EVS
                </Link>
              </li>

              <li className="menu-item">
                <Link href="https://evsuae.com/frequently-asked-questions" className="nav-link alt-font text-uppercase text-white">
                  FAQs
                </Link>
              </li>
            </ul>

            <div className="col-auto align-items-center mobile-hide">
              <div className="header-button d-flex align-items-center gap-3">
                <a
                  href="" // Change to actual Arabic URL if available, e.g., "https://evsuae.com/ar/"
                  className="text-white alt-font english-converter fw-500 d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <span className="mob-hide arabic-converter" style={{ paddingLeft: "5px" }}>
                    AR
                  </span>
                  <img
                    className="arabic-converter"
                    src="https://evsuae.com/.netlify/images?url=/images/uae-flag.svg"
                    alt="Arabic Flag"
                    style={{ height: "18px", marginLeft: "6px", verticalAlign: "middle" }}
                  />
                </a>
                <Link href="https://evsuae.com/contact" className="btn btn-medium btn-base-color btn-round-edge btn-box-shadow">
                  <b>Book Service</b>
                </Link>
              </div>
            </div>

            <div className="col-auto me-0 sm-me-auto border-start border-color-dark-gray xs-ms-0 lg-hide">
              <div className="header-icon">
                <div className="header-push-button hamburger-push-button icon">
                  <img
                    className="mobile-show arabic-converter"
                    src="https://evsuae.com/.netlify/images?url=/images/uae-flag.svg"
                    alt="UAE Flag"
                    style={{ height: "18px", marginRight: "10px", verticalAlign: "middle" }}
                  />
                  <div className="push-button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* end navigation */}

        {/* start hamburger menu */}
        <div
          className="push-menu hamburger-nav header-dark hamburger-menu-half push-menu-left bg-dark-gray md-w-60 sm-w-100"
          style={{ backgroundImage: "ur[](https://evsuae.com/.netlify/images?url=/images/menu-bg.jpg)" }}
        >
          <span className="close-menu text-white bg-white">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <div className="d-flex flex-column justify-content-center h-100 ps-19 pe-19 pt-13 pb-13 xl-p-12 sm-p-20px">
            <div>
              <Link className="hamburger-logo" href="https://evsuae.com">
                <img
                  src="https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg"
                  height="36"
                  width="96"
                  alt="evs-logo"
                />
              </Link>
            </div>
            <div className="hamburger-menu menu-list-wrapper w-100 lg-w-100 lg-no-margin sm-mt-auto sm-mb-auto" data-scroll-options='{ "theme": "light" }'>
              <ul className="menu-item-list fw-500 ls-1px">
                <li className="menu-item">
                  <Link href="https://evsuae.com/" className="nav-link alt-font">
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="https://evsuae.com/contact" className="nav-link alt-font">
                    Contact
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="https://evsuae.com/services">
                    <p className="nav-link alt-font">Services</p>
                  </Link>
                  <i className="fa-solid fa-angle-down btn-dropdown" id="navbarDropdownMenuLink"></i>
                  <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className="menu-item">
                      <Link className="nav-link alt-font submenu-icon-content" href="https://evsuae.com/services/programming">
                        Programming & Software
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font" href="https://evsuae.com/services/mechanical">
                        Mechanical Services
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font" href="https://evsuae.com/services/battery-electrical">
                        Battery & Electrical
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font" href="https://evsuae.com/services/body-paint">
                        Body & Paint
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font" href="https://evsuae.com/services/insurance">
                        Insurance Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="https://evsuae.com/extended-warranties" className="nav-link alt-font">
                    Warranty
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="https://evsuae.com/sos" className="nav-link alt-font">
                    Roadside Assistance
                  </Link>
                </li>
                <li className="menu-item dropdown-btn">
                  <Link href="https://evsuae.com/ev-car-brands" className="nav-link alt-font text-white btn-dropdown">
                    EV Car Brands
                  </Link>
                  <i className="fa-solid fa-angle-down btn-dropdown" id="evCarBrandsMobile"></i>
                  <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="evCarBrandsMobile">
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/rox">
                        ROX
                      </Link>
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evOneDropdownMenuLinkMobile"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evOneDropdownMenuLinkMobile">
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/rox/rox-01">
                            ROX 01
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/zeekr">
                        ZEEKR
                      </Link>
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evTwoDropdownMenuLinkMobile"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evTwoDropdownMenuLinkMobile">
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/zeekr/zeekr-x">
                            ZEEKR X
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/zeekr/zeekr-001">
                            ZEEKR 001
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/zeekr/zeekr-9x">
                            ZEEKR 9x
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/xpeng">
                        Xpeng
                      </Link>
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evThreeDropdownMenuLinkMobile"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evThreeDropdownMenuLinkMobile">
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/xpeng/xpeng-g7">
                            Xpeng G7
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/xpeng/xpeng-g9">
                            Xpeng G9
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/avatr">
                        AVATR
                      </Link>
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evFourDropdownMenuLinkMobile"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFourDropdownMenuLinkMobile">
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/avatr/avatr-11">
                            AVATR 11
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/avatr/avatr-12">
                            AVATR 12
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/byd">
                        BYD
                      </Link>
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evFiveDropdownMenuLinkMobile"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFiveDropdownMenuLinkMobile">
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-han">
                            BYD HAN
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-seal">
                            BYD SEAL
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-atto-3">
                            BYD ATTO 3
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-song-plus">
                            BYD SONG PLUS
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-qin-plus">
                            BYD QIN PLUS
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/byd/byd-leopard-7">
                            BYD Leopard 7
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/tesla">
                        Tesla
                      </Link>
                      <i className="fa-solid fa-angle-right btn-dropdown text-base-color fs-14" id="evSixDropdownMenuLinkMobile"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evSixDropdownMenuLinkMobile">
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/cybertruck">
                            Cybertruck
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-3">
                            Model 3
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-s">
                            Model S
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-x">
                            Model X
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/model-y">
                            Model Y
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/tesla/roadster">
                            Roadster
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="menu-item dropdown-btn">
                  <Link href="https://evsuae.com/branches" className="nav-link alt-font text-white btn-dropdown">
                    Branches
                  </Link>
                  <i className="fa-solid fa-angle-down btn-dropdown" id="branchesDropdownMenuLinkMobile"></i>
                  <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="branchesDropdownMenuLinkMobile">
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/evs-abu-dhabi">
                        EVS Abu Dhabi
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/evs-dubai">
                        EVS Dubai
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/evs-ajman">
                        EVS Ajman
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/evs-alain">
                        EVS Alain
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/evs-riyadh">
                        EVS Riyadh
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/evs-sharjah">
                        EVS Sharjah
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <Link href="https://evsuae.com/about" className="nav-link alt-font">
                    About EVS
                  </Link>
                </li>

                <li className="menu-item">
                  <Link href="https://evsuae.com/frequently-asked-questions" className="nav-link alt-font">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-90 d-none d-lg-inline-block">
              <div className="row row-cols-1 row-cols-xl-1 menu-address">
                <div className="col">
                  <span className="text-white fs-16 ls-05px">Connect with us</span>
                  <div className="h-1px w-90 lg-w-100 bg-white-transparent-extra-light mt-10px mb-10px"></div>
                  <p className="fs-15 lh-28 w-90 xl-w-100 lg-mb-0">
                    <a href="mailto:info@evsuae.com" className="d-block text-white-hover">
                      info@evsuae.com
                    </a>
                    <a href="tel:+971566017771" className="text-white-hover">
                      +971 56 60 17771
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end hamburger menu */}
      </header>
      {/* end header */}
    </>
  );
}