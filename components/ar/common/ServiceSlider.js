// components/ar/common/ServiceSlider.js

export default function ServiceSlider() {
  return (
    <section className="snap-section pt-45px pb-40px border-color-medium-gray sm-pt-35px sm-pb-30px">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper text-center"
            data-slider-options='{ "slidesPerView": "auto", "spaceBetween":0, "centeredSlides": true, "speed": 12000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":1, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">

              {/* Slide 1 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    فحص صحة المركبة الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    إصلاح المركبات الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    إصلاح بطارية الجهد العالي
                  </p>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    إصلاح وحدة القيادة الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    تركيب شريحة الاتصال للمركبات الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 6 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    نظام الملاحة والخرائط
                  </p>
                </div>
              </div>

              {/* Slide 7 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    تحديثات برامج المركبات الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 8 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    إصلاح هيكل المركبة الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 9 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    باقات ضمان المركبات الكهربائية
                  </p>
                </div>
              </div>

              {/* Slide 10 */}
              <div className="swiper-slide">
                <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                  <p className="service-swiper">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    المساعدة على الطريق للمركبات الكهربائية
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
