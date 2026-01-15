// components/HeaderAr.js
import { useEffect } from "react";

export default function HeaderAr() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("load"));
    }
  }, []);

  return (
    <>
      {/* start header */}
      <header className="position-sticky top-0">
        {/* start navigation */}
        <nav className="navbar navbar-expand-lg header-transparent bg-transparent border-bottom border-color-dark-gray disable-fixed">
          <div className="container-fluid">
            <div className="col-auto">
              <a className="navbar-brand" href="https://evsuae.com/ar/">
                <img
                  src="https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg"
                  height="36"
                  width="96"
                  alt="شعار إي في إس"
                  className="default-logo"
                />
              </a>
            </div>

            <ul className="menu-item-list fw-500 ls-1px d-flex justify-content-center navbar-nav sm-hide">
              <li className="menu-item">
                <a href="https://evsuae.com/ar/" className="nav-link alt-font text-uppercase text-white">
                  الرئيسية
                </a>
              </li>

              <li className="menu-item dropdown-btn">
                <a href="https://evsuae.com/ar/services" className="nav-link alt-font text-uppercase text-white btn-dropdown">
                  الخدمات
                </a>
                <i className="fa-solid fa-angle-down btn-dropdown" id="evDropdownMenuLink"></i>

                <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="evDropdownMenuLink">
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/services/programming">
                      البرمجة والبرامج <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/services/mechanical">
                      الخدمات الميكانيكية <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/services/battery-electrical">
                      البطارية والكهرباء <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/services/body-paint">
                      الهيكل والدهان <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/services/insurance">
                      خدمات التأمين <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <a href="https://evsuae.com/ar/extended-warranties" className="nav-link alt-font text-uppercase text-white">
                  الضمان
                </a>
              </li>

              <li className="menu-item">
                <a href="https://evsuae.com/ar/sos" className="nav-link alt-font text-uppercase text-white">
                  مساعدة الطريق
                </a>
              </li>

              <li className="menu-item dropdown-btn">
                <a href="https://evsuae.com/ar/ev-car-brands" className="nav-link alt-font text-uppercase text-white btn-dropdown">
                  الماركات
                </a>
                <i className="fa-solid fa-angle-down btn-dropdown" id="evCarBrands"></i>

                <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="evCarBrands">

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/rox">
                      روكس
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evOneDropdownMenuLink"></i>
                    </a>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evOneDropdownMenuLink">
                      <li className="menu-item">
                        <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/rox/rox-01">
                          روكس 01
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/zeekr">
                      زيكر
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evTwoDropdownMenuLink"></i>
                    </a>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evTwoDropdownMenuLink">
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/zeekr/zeekr-x">زيكر اكس</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/zeekr/zeekr-001">زيكر 001</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/zeekr/zeekr-9x">زيكر 9x</a></li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/xpeng">
                      إكسبينغ
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evSixDropdownMenuLink"></i>
                    </a>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evSixDropdownMenuLink">
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/xpeng/xpeng-g7">إكسبينغ G7</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/xpeng/xpeng-g9">إكسبينغ G9</a></li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/avatr">
                      أفاتر
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evThreeDropdownMenuLink"></i>
                    </a>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evThreeDropdownMenuLink">
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/avatr/avatr-11">أفاتر 11</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/avatr/avatr-12">أفاتر 12</a></li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/byd">
                      بي واي دي
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evFourDropdownMenuLink"></i>
                    </a>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFourDropdownMenuLink">
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-han">بي واي دي هان</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-seal">بي واي دي سيل</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-atto-3">بي واي دي أتو 3</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-song-plus">بي واي دي سونغ بلاس</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-qin-plus">بي واي دي كين بلاس</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-leopard-7">بي واي دي ليوبارد 7</a></li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/tesla">
                      تسلا
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evFiveDropdownMenuLink"></i>
                    </a>
                    <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFiveDropdownMenuLink">
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/cybertruck">سايبرتراك</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-3">موديل 3</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-s">موديل S</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-x">موديل X</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-y">موديل Y</a></li>
                      <li className="menu-item"><a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/roadster">رودستر</a></li>
                    </ul>
                  </li>

                </ul>
              </li>

              <li className="menu-item dropdown-btn">
                <a href="https://evsuae.com/ar/branches" className="nav-link alt-font text-uppercase text-white btn-dropdown">
                  الفروع
                </a>
                <i className="fa-solid fa-angle-down btn-dropdown" id="branchesDropdownMenuLink"></i>

                <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="branchesDropdownMenuLink">
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-abu-dhabi">
                      إي في إس أبوظبي <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-dubai">
                      إي في إس دبي <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-ajman">
                      إي في إس عجمان <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-alain">
                      إي في إس العين <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-sharjah">
                      إي في إس الشارقة
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>
                  {/* EVS Express – Arabic */}
                  <li className="menu-item">
                    <span className="nav-link alt-font d-inline-flex align-items-center">
                      

                      {/* Text (underline only here) */}
                      <span
                        style={{
                          color: "var(--base-color)",
                          textDecoration: "underline",
                          textUnderlineOffset: "2px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        إي في إس إكسبريس
                      </span>
                      {/* Arrow (no underline) */}
                      <span
                        style={{
                          color: "var(--base-color)",
                          fontSize: "10px",
                          marginRight: "4px",
                          lineHeight: "1",
                        }}
                      >
                        ↖
                      </span>
                    </span>
                  </li>
                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-abu-dhabi-al-mushrif"> 
                    إي في إس أبوظبي - المشرف
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-dubai-al-barsha"> 
                   إي في إس دبي – البرشاء
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>

                  <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-dubai-al-twar-2"> 
                   إي في إس دبي – التوار 2
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>

                   <li className="menu-item">
                    <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-sharjah-al-muwafjah"> 
                  إي في إس الشارقة – المويفجة
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evDropdownMenuLink"></i>
                    </a>
                  </li>

                  

                </ul>
              </li>

              <li className="menu-item">
                <a href="https://evsuae.com/ar/about" className="nav-link alt-font text-uppercase text-white">
                  عنّا
                </a>
              </li>

              <li className="menu-item">
                <a href="https://evsuae.com/ar/frequently-asked-questions" className="nav-link alt-font text-uppercase text-white">
                  الأسئلة
                </a>
              </li>
            </ul>

            <div className="col-auto align-items-center mobile-hide">
              <div className="header-button d-flex align-items-center gap-3">
                <a
                  href=""
                  className="text-white alt-font english-converter fw-500 d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <span className="mob-hide english-converter" style={{ paddingLeft: "5px" }}>EN</span>
                  <img
                    className="english-converter"
                    src="https://evsuae.com/.netlify/images?url=/ar/images/us-flag.svg"
                    alt="US Flag"
                    style={{ height: "18px", marginLeft: "6px", verticalAlign: "middle" }}
                  />
                </a>
                <a href="https://evsuae.com/ar/contact" className="btn btn-medium  btn-base-color btn-round-edge btn-box-shadow">
                  <b>تواصل</b>
                </a>
              </div>
            </div>

            <div className="col-auto me-0 sm-me-auto border-start border-color-dark-gray xs-ms-0 lg-hide">
              <div className="header-icon">
                <div className="header-push-button hamburger-push-button icon xs-pe-70px">
                  <img
                    className="mobile-show english-converter"
                    src="https://evsuae.com/.netlify/images?url=/ar/images/us-flag.svg"
                    alt="US Flag"
                    style={{ height: "18px", marginLeft: "10px", verticalAlign: "middle" }}
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
          style={{
            backgroundImage:
              "url(https://evsuae.com/.netlify/images?url=/images/menu-bg.jpg)",
          }}
        >
          <span className="close-menu text-white bg-white">
            <i className="fa-solid fa-xmark"></i>
          </span>

          <div className="d-flex flex-column justify-content-center h-100 ps-19 pe-19 pt-13 pb-13 xl-p-12 sm-p-20px">
            <div>
              <a className="hamburger-logo" href="https://evsuae.com/ar/">
                <img
                  src="https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg"
                  height="36"
                  width="96"
                  alt="شعار إي في إس"
                />
              </a>
            </div>

            <div
              className="hamburger-menu menu-list-wrapper w-100 lg-w-100 lg-no-margin sm-mt-auto sm-mb-auto"
              data-scroll-options='{ "theme": "light" }'
            >
              <ul className="menu-item-list fw-500 ls-1px">
                <li className="menu-item">
                  <a href="https://evsuae.com/ar/" className="nav-link alt-font">
                    الرئيسية
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://evsuae.com/ar/contact" className="nav-link alt-font">
                    تواصلوا معنا
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://evsuae.com/ar/services">
                    <p className="nav-link alt-font">الخدمات</p>
                  </a>
                  <i className="fa-solid fa-angle-down btn-dropdown" id="navbarDropdownMenuLink"></i>

                  <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className="menu-item">
                      <a className="nav-link alt-font submenu-icon-content" href="https://evsuae.com/ar/services/programming">
                        البرمجة والبرامج
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font" href="https://evsuae.com/ar/services/mechanical">
                        الخدمات الميكانيكية
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font" href="https://evsuae.com/ar/services/battery-electrical">
                        البطارية والكهرباء
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font" href="https://evsuae.com/ar/services/body-paint">
                        الهيكل والدهان
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font" href="https://evsuae.com/ar/services/insurance">
                        خدمات التأمين
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href="https://evsuae.com/ar/extended-warranties" className="nav-link alt-font">
                    الضمان
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://evsuae.com/ar/sos" className="nav-link alt-font">
                    المساعدة على الطريق
                  </a>
                </li>

                <li className="menu-item dropdown-btn">
                  <a href="https://evsuae.com/ar/ev-car-brands" className="nav-link alt-font text-white btn-dropdown">
                    ماركات السيارات الكهربائية
                  </a>
                  <i className="fa-solid fa-angle-down btn-dropdown" id="evCarBrands"></i>

                  <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="evCarBrands">
                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/rox">
                        روكس
                      </a>
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evOneDropdownMenuLink"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evOneDropdownMenuLink">
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/rox/rox-01">
                            روكس 01
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/zeekr">
                        زيكر
                      </a>
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evTwoDropdownMenuLink"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evTwoDropdownMenuLink">
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/zeekr/zeekr-x">
                            زيكر اكس
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/zeekr/zeekr-001">
                            زيكر 001
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/avatr">
                        أفاتر
                      </a>
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evThreeDropdownMenuLink"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evThreeDropdownMenuLink">
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/avatr/avatr-11">
                            أفاتر 11
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/avatr/avatr-12">
                            أفاتر 12
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/byd">
                        بي واي دي
                      </a>
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evFourDropdownMenuLink"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFourDropdownMenuLink">
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-han">
                            بي واي دي هان
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-seal">
                            بي واي دي سيل
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-atto-3">
                            بي واي دي أتو 3
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-song-plus">
                            بي واي دي سونغ بلاس
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/byd/byd-qin-plus">
                            بي واي دي كين بلاس
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/tesla">
                        تسلا
                      </a>
                      <i className="fa-solid fa-angle-left btn-dropdown text-base-color fs-14" id="evFiveDropdownMenuLink"></i>
                      <ul className="menu-item-list fw-500 sub-dropdown-menu" aria-labelledby="evFiveDropdownMenuLink">
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/cybertruck">
                            سايبرتراك
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-3">
                            موديل <span className="font-normal">3</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-s">
                            موديل S
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-x">
                            موديل X
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/model-y">
                            موديل Y
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="nav-link alt-font text-uppercase text-white" href="https://evsuae.com/ar/tesla/roadster">
                            رودستر
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="menu-item dropdown-btn">
                  <a href="https://evsuae.com/ar/branches" className="nav-link alt-font text-white btn-dropdown">
                    الفروع
                  </a>
                  <i className="fa-solid fa-angle-down btn-dropdown" id="branchesDropdownMenuLink"></i>

                  <ul className="menu-item-list fw-500 dropdown-menu" aria-labelledby="branchesDropdownMenuLink">
                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-abu-dhabi">
                        إي في إس أبوظبي
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-dubai">
                        إي في إس دبي
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-ajman">
                        إي في إس عجمان
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-alain">
                        إي في إس العين
                      </a>
                    </li>
                   
                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-sharjah">
                        إي في إس الشارقة
                      </a>
                    </li>
                    {/* EVS Express – Arabic */}
                  <li className="menu-item">
                    <span className="nav-link alt-font d-inline-flex align-items-center">
                      

                      {/* Text (underline only here) */}
                      <span
                        style={{
                          color: "var(--base-color)",
                          textDecoration: "underline",
                          textUnderlineOffset: "2px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        إي في إس إكسبريس
                      </span>
                      {/* Arrow (no underline) */}
                      <span
                        style={{
                          color: "var(--base-color)",
                          fontSize: "10px",
                          marginRight: "4px",
                          lineHeight: "1",
                        }}
                      >
                        ↖
                      </span>
                    </span>
                  </li>
                  <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-abu-dhabi-al-mushrif">
                        إي في إس أبوظبي - المشرف
                      </a>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-dubai-al-barsha">
                      إي في إس دبي – البرشاء
                      </a>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-dubai-al-twar-2">
                      إي في إس دبي – التوار 2
                      </a>
                    </li>

                    <li className="menu-item">
                      <a className="nav-link alt-font text-uppercase text-white btn-sub-dropdown" href="https://evsuae.com/ar/evs-sharjah-al-muwafjah">
                     إي في إس الشارقة – المويفجة
                      </a>
                    </li>

                  

                  </ul>
                </li>

                <li className="menu-item">
                  <a href="https://evsuae.com/ar/about" className="nav-link alt-font">
                    عن إي في إس
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://evsuae.com/ar/frequently-asked-questions" className="nav-link alt-font">
                    الأسئلة الشائعة
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-90 d-none d-lg-inline-block">
              <div className="row row-cols-1 row-cols-xl-1 menu-address">
                <div className="col">
                  <span className="text-white fs-16 ls-05px">تواصلوا معنا</span>
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
